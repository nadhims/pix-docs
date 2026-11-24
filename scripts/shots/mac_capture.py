"""Capture one Mac app window (never the full screen) and blur personal details.

Privacy rule (Nadhim, 2026-11-24, "you need to blur my privacy"): one window only,
personal items cropped or blurred hard, the raw capture deleted right after.

Usage: python3 scripts/shots/mac_capture.py --self-test
"""
import os
import subprocess
import sys
from pathlib import Path
from PIL import Image, ImageFilter

HERE = Path(__file__).resolve().parent


def capture_window(app, raw_out):
    """Capture only `app`'s front window (no shadow, no sound) into raw_out (PNG)."""
    wid = subprocess.run(["swift", str(HERE / "winid.swift"), app], capture_output=True, text=True, check=True).stdout.strip()
    subprocess.run(["screencapture", "-o", "-x", "-l", wid, raw_out], check=True)


def blur_regions(raw, out, regions, radius=30):
    """Blur each [x, y, w, h] region hard (two Gaussian passes), write `out`, delete `raw`."""
    img = Image.open(raw).convert("RGB")
    for x, y, w, h in regions:
        patch = img.crop((x, y, x + w, y + h))
        for _ in range(2):
            patch = patch.filter(ImageFilter.GaussianBlur(radius))
        img.paste(patch, (x, y))
    img.save(out)
    os.remove(raw)


def crop(path, box):
    """Crop `path` in place to [x, y, w, h] (frame personal items out instead of blurring them)."""
    x, y, w, h = box
    Image.open(path).crop((x, y, x + w, y + h)).save(path)


if __name__ == "__main__" and sys.argv[1:] == ["--self-test"]:
    import os, tempfile
    from PIL import Image, ImageDraw, ImageStat
    tmp = tempfile.mkdtemp()
    raw, out = os.path.join(tmp, "raw.png"), os.path.join(tmp, "out.png")
    img = Image.new("RGB", (400, 300), "white")
    d = ImageDraw.Draw(img)
    for y in range(0, 300, 10):                                # checker pattern outside the region
        for x in range(0, 400, 10):
            if (x + y) // 10 % 2:
                d.rectangle([x, y, x + 9, y + 9], fill=(200, 200, 200))
    region = [20, 20, 200, 40]                                 # x, y, w, h
    d.rectangle([20, 20, 219, 59], fill="white")
    d.text((24, 28), "Nadhim  name@example.com", fill="black")
    img.save(raw)
    before = Image.open(raw).convert("RGB")
    var0 = ImageStat.Stat(before.crop((20, 20, 220, 60)).convert("L")).var[0]
    blur_regions(raw, out, [region])
    assert not os.path.exists(raw), "raw capture must be deleted"
    after = Image.open(out).convert("RGB")
    var1 = ImageStat.Stat(after.crop((20, 20, 220, 60)).convert("L")).var[0]
    assert var1 <= var0 * 0.10, (var0, var1)                  # text no longer readable
    for x, y in [(5, 5), (300, 200), (399, 299), (230, 30), (100, 80)]:
        assert after.getpixel((x, y)) == before.getpixel((x, y)), (x, y)  # outside untouched
    print("self-test OK")
