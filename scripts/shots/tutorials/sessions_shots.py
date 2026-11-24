"""Marked screenshots for the Photo Sessions and Sharing tutorials.

Booth screens come from scripts/shots/booth/render.py with this area's own pages (scripts/shots/booth/sessions/entry.tsx).
Dashboard screens reuse static/img/docs shots from the made-up Sunny Side / Demo accounts; their marker boxes are measured
by hand in image pixels (2x). Run from the repo root:

  BOOTH_SRC=... BOOTH_NM=... BOOTH_BUILD=<dir> BOOTH_ENTRY=$PWD/scripts/shots/booth/sessions/entry.tsx BOOTH_REBUILD=1 \\
    python3 scripts/shots/tutorials/sessions_shots.py [job ...]
"""
import os
import sys
from pathlib import Path

from PIL import Image

HERE = Path(__file__).resolve().parent
sys.path[:0] = [str(HERE)]
from pr0_shots import TMP, _mark, dashboard, draw_markers, out, render  # noqa: E402


def booth_crop(page, name, screen, labels, crop, pad=10):
    """Like pr0_shots.booth (a label may also be a hand-measured [x, y, w, h] box), then cropped to `crop` [x, y, w, h] (image pixels) so a small popup or row fills the picture."""
    png = str(TMP / f"{screen}.png")
    boxes = render(screen, (1920, 1080), png)
    labels = [l if isinstance(l, tuple) else (l, None) for l in labels]
    missing = [t for t, _ in labels if isinstance(t, str) and t not in boxes]
    assert not missing, f"{screen}: labels not on screen: {missing}"
    boxes = {**boxes, **{str(t): t for t, _ in labels if isinstance(t, list)}}  # a box measured by hand, for an element with no text
    x, y, w, h = crop
    Image.open(png).crop((x, y, x + w, y + h)).save(png)
    grow = lambda b: [b[0] - x - pad, b[1] - y - pad, b[2] + 2 * pad, b[3] + 2 * pad]
    draw_markers(png, out(page, name), [_mark(i + 1, grow(boxes[str(t)]), side) for i, (t, side) in enumerate(labels)])


def share_page():
    p = "share-page"
    dashboard(p, "booth-output-settings", "booth-settings-tab.webp",
              [[24, 234, 432, 90, "right"], [1638, 1060, 176, 74, "below"], [570, 1350, 1050, 320], [1218, 1850, 400, 80, "left"]],
              crop=[0, 0, 2880, 1990])
    dashboard(p, "microsite", "pix-design-microsite.webp",
              [[528, 236, 900, 72, "below"], [578, 574, 1396, 98], [578, 1902, 520, 76, "right"], [1592, 1688, 400, 80, "left"]],
              crop=[0, 0, 2880, 2020])


def email():
    p = "email-my-photos"
    booth_crop(p, "share-buttons", "m-share-buttons", [("^Email", "left")], crop=[1000, 700, 1840, 760])
    booth_crop(p, "email-popup", "m-email", [([1616, 892, 608, 100], "left"), ("^Send me news and offers from Pixture", "right"), ("Send", "left")],
               crop=[0, 560, 3840, 1600])


import sessions_a, sessions_b, sessions_c  # noqa: E402  (Studio / Review / Newspaper, Notes / Video, Photographer / Mingle / Album)

JOBS = {**sessions_a.JOBS, **sessions_b.JOBS, **sessions_c.JOBS, "share-page": share_page, "email": email}

if __name__ == "__main__":
    missing = [v for v in ("BOOTH_SRC", "BOOTH_NM") if not os.environ.get(v)]
    if missing:
        sys.exit(f"Set {' and '.join(missing)} first: see scripts/shots/booth/README.md")
    for name in sys.argv[1:] or JOBS:
        JOBS[name]()
        print("made", name)
