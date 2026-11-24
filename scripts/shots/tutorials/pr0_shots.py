"""Marked screenshots for the PR 0 tutorials (Get the Booth Computer Ready).

Booth screens come from scripts/shots/booth/render.py (see its README for BOOTH_SRC / BOOTH_NM).
Dashboard screens reuse static/img/docs shots from the made-up Sunny Side / Demo accounts; their marker
boxes are measured by hand in image pixels (2x). Run from the repo root:  python3 scripts/shots/tutorials/pr0_shots.py
"""
import os
import sys
import tempfile
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[3]
sys.path[:0] = [str(ROOT / "scripts/shots"), str(ROOT / "scripts/shots/booth")]
from markers import draw_markers  # noqa: E402
from render import render  # noqa: E402

DOCS = ROOT / "static/img/docs"
STEPS = DOCS / "steps"
TMP = Path(tempfile.mkdtemp())


def out(page, name):
    return str(STEPS / f"tutorials-{page}--{name}.webp")


def _mark(n, box, side=None):
    return {"n": n, "box": box, **({"side": side} if side else {})}


def booth(page, name, screen, labels, focus=None):
    """Render booth `screen`, mark `labels` (visible text, or (text, side), in step order), save as the page's step image."""
    png = str(TMP / f"{screen}.png")
    boxes = render(screen, (1920, 1080), png, focus=focus)
    labels = [l if isinstance(l, tuple) else (l, None) for l in labels]
    missing = [t for t, _ in labels if t not in boxes]
    assert not missing, f"{screen}: labels not on screen: {missing}"
    draw_markers(png, out(page, name), [_mark(i + 1, boxes[t], side) for i, (t, side) in enumerate(labels)])


def dashboard(page, name, src, boxes, crop=None):
    """Mark an existing dashboard shot. boxes: [x, y, w, h(, side)] in its pixels, in step order; crop: [x, y, w, h]."""
    img = Image.open(DOCS / src).convert("RGB")
    if crop:
        x, y, w, h = crop
        img = img.crop((x, y, x + w, y + h))
        boxes = [[b[0] - x, b[1] - y, *b[2:]] for b in boxes]
    png = str(TMP / f"{name}.png")
    img.save(png)
    draw_markers(png, out(page, name), [_mark(i + 1, b[:4], b[4] if len(b) > 4 else None) for i, b in enumerate(boxes)])


def operator_menu():
    p = "operator-menu"
    dashboard(p, "settings-security-pin", "settings-security.webp",
              [[24, 1142, 432, 90, "right"], [528, 862, 480, 90], [1122, 1902, 344, 68], [1122, 2110, 344, 68], [1122, 2218, 400, 80]],
              crop=[0, 0, 2880, 2360])
    dashboard(p, "booth-settings-menu-pin", "booth-settings-tab.webp",
              [[24, 234, 432, 90, "right"], [1670, 1060, 144, 72, "below"], [1742, 2922, 240, 68, "below"], [1998, 2910, 400, 80, "right"]],
              crop=[0, 0, 2880, 3180])
    booth(p, "pin-pad", "pin", ["Enter Admin PIN", ("✓", "right"), "Cancel"])
    booth(p, "menu", "menu", ["Camera Settings", "Printer Settings", "Capture Settings", "Hardware API", "Admin Panel", ("Start Booth", "below")])
    booth(p, "admin-panel", "admin", [("Start on boot", "right"), ("Upload now", "below"), "Print history", ("Clean storage", "right")])


JOBS = {"operator-menu": operator_menu}

if __name__ == "__main__":
    STEPS.mkdir(parents=True, exist_ok=True)
    for name in sys.argv[1:] or JOBS:
        JOBS[name]()
        print("made", name)
