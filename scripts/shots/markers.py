"""Draw numbered step markers on a screenshot: a coral outline around each element
and a numbered badge beside it (left, else above, else right), never over it.

Usage: from markers import draw_markers   |   python3 scripts/shots/markers.py --self-test
"""
import sys
from PIL import Image, ImageDraw, ImageFont

CORAL = (0xD9, 0x77, 0x56)
GAP = 10       # space between an element and its badge (image pixels)
LINE = 6       # outline width, centred on the element's edge
FONTS = ["/System/Library/Fonts/Supplemental/Arial Bold.ttf", "/Library/Fonts/Arial Bold.ttf"]


def _hit(a, b):
    return a[0] < b[0] + b[2] and b[0] < a[0] + a[2] and a[1] < b[1] + b[3] and b[1] < a[1] + a[3]


def badge_position(box, size, img_size, taken):
    """Top-left of a size x size badge beside `box`: left, else above, else right, else below.
    Never overlaps the box (plus its outline) or a badge in `taken`; stays inside the image."""
    x, y, w, h = box
    W, H = img_size
    pad = LINE
    guard = [x - pad, y - pad, w + 2 * pad, h + 2 * pad]
    cy, cx = y + h // 2 - size // 2, x + w // 2 - size // 2
    for bx, by in [(x - GAP - pad - size, cy), (cx, y - GAP - pad - size), (x + w + GAP + pad, cy), (cx, y + h + GAP + pad)]:
        for shift in (0, size + GAP, -(size + GAP), 2 * (size + GAP), -2 * (size + GAP)):
            cand = [bx, by + shift, size, size] if bx != cx else [bx + shift, by, size, size]
            inside = 0 <= cand[0] and 0 <= cand[1] and cand[0] + size <= W and cand[1] + size <= H
            if inside and not _hit(cand, guard) and not any(_hit(cand, t) for t in taken):
                return cand[0], cand[1]
    return max(0, x - size), max(0, y - size)  # ponytail: crowded corner fallback, nudge by hand if it ever lands badly


def _font(px):
    for f in FONTS:
        try:
            return ImageFont.truetype(f, px)
        except OSError:
            pass
    return ImageFont.load_default(px)


def draw_markers(src, out, markers, size=44):
    """markers: [{"n": int, "box": [x, y, w, h]}] in source-image pixels. Writes WebP (quality 82) or PNG by extension."""
    img = Image.open(src).convert("RGB")
    d = ImageDraw.Draw(img)
    half = LINE // 2
    for m in markers:
        x, y, w, h = m["box"]
        d.rounded_rectangle([x - half, y - half, x + w + half, y + h + half], radius=12, outline=CORAL, width=LINE)
    taken = []
    font = _font(int(size * 0.55))
    for m in markers:
        bx, by = badge_position(m["box"], size, img.size, taken)
        taken.append([bx, by, size, size])
        d.ellipse([bx, by, bx + size, by + size], fill=CORAL, outline="white", width=3)
        d.text((bx + size / 2, by + size / 2), str(m["n"]), fill="white", font=font, anchor="mm")
    if out.endswith(".webp"):
        img.save(out, "WEBP", quality=82)
    else:
        img.save(out)


if __name__ == "__main__" and sys.argv[1:] == ["--self-test"]:
    import os, tempfile
    from PIL import Image
    tmp = tempfile.mkdtemp()
    src, out = os.path.join(tmp, "src.png"), os.path.join(tmp, "out.webp")
    Image.new("RGB", (1000, 600), "white").save(src)

    def hit(a, b):
        return a[0] < b[0] + b[2] and b[0] < a[0] + a[2] and a[1] < b[1] + b[3] and b[1] < a[1] + a[3]

    box = [600, 200, 200, 100]
    bx, by = badge_position(box, 44, (1000, 600), [])
    assert bx + 44 <= box[0], (bx, by)                       # left of the box
    assert not hit([bx, by, 44, 44], box)
    edge = [0, 300, 100, 100]
    ex, ey = badge_position(edge, 44, (1000, 600), [])
    assert ey + 44 <= edge[1], (ex, ey)                      # no room left -> above
    taken = [[bx, by, 44, 44]]
    tx, ty = badge_position(box, 44, (1000, 600), taken)     # second badge for the same box avoids the first
    assert not hit([tx, ty, 44, 44], taken[0]) and not hit([tx, ty, 44, 44], box)
    draw_markers(src, out, [{"n": 1, "box": box}, {"n": 2, "box": edge}])
    img = Image.open(out).convert("RGB")
    r, g, b = img.getpixel((box[0] + box[2] // 2, box[1]))  # top edge of the outline
    assert abs(r - 0xD9) <= 10 and abs(g - 0x77) <= 10 and abs(b - 0x56) <= 10, (r, g, b)
    assert img.getpixel((box[0] + box[2] // 2, box[1] + box[3] // 2)) == (255, 255, 255)  # inside untouched
    print("self-test OK")
