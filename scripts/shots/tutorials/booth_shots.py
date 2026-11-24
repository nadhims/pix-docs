"""Marked screenshots for "The Booth (hardware)" tutorials: camera, multi camera, flash, printer, offline.

Booth screens come from scripts/shots/booth/render.py with this area's own entry (scripts/shots/booth/booth/entry.tsx:
Printer Settings, the New roll popup, Admin with uploads waiting, Camera Settings with Multi camera). Dashboard shots
reuse static/img/docs images of the made-up Demo Booth account, boxes measured by hand in image pixels (2x).
Run from the repo root:
  BOOTH_SRC=... BOOTH_NM=... BOOTH_BUILD=<your dir> BOOTH_REBUILD=1 python3 scripts/shots/tutorials/booth_shots.py [job ...]
"""
import os
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
os.environ.setdefault("BOOTH_ENTRY", str(HERE.parent / "booth/booth/entry.tsx"))
from pr0_shots import STEPS, booth, dashboard  # noqa: E402


def camera():
    p = "connect-a-camera"
    booth(p, "camera-device", "camera", ["CAMERA DEVICE", ("Set as Default", "left"), ("^Camera", "left"), ("^Live View", "left")])


def multi_camera():
    p = "multi-camera"
    dashboard(p, "dashboard-switch", "booth-settings-tab.webp",
              [[24, 234, 432, 90, "right"], [1670, 1060, 144, 72, "below"], [1536, 2390, 90, 62, "left"], [1210, 2552, 410, 90, "left"]],
              crop=[0, 0, 2880, 2700])
    booth(p, "camera-angles", "angles", ["^^Front", "^^High angle", ("Save Camera Settings", "above")])


def flash():
    p = "flash-and-lighting"
    booth(p, "camera-exposure", "camera", ["^ISO", "^SHUTTER", "^APERTURE", "^WHITE BALANCE", ("Save Camera Settings", "above")])


def printer():
    p = "set-up-a-printer"
    booth(p, "printer-device", "printer", ["^PRINTER DEVICE", "^MEDIA SIZE (LOADED PAPER)", "^ORIENTATION", ("Save Printer Settings", "above")])
    booth(p, "printer-alignment", "printer", ["^COPIES PER SESSION", ("Test Print", "right"), "^PRINT ALIGNMENT", ("Save Printer Settings", "above")],
          focus="PRINT ALIGNMENT")
    booth(p, "two-inch-cut", "printer", ["^2-INCH CUT"])
    dashboard(p, "template-media", "pix-design-create-template-modal.webp",
              [[1278, 278, 338, 116, "above"], [1618, 795, 322, 113, "above"], [1538, 1652, 402, 60, "above"]],
              crop=[896, 40, 1088, 1720])
    booth(p, "new-roll", "printer", [("New roll loaded", "left")])
    booth(p, "new-roll-popup", "newroll", [("^^4x6", "left"), ("Start counting", "right")])
    booth(p, "menu-paper", "menu", [("^^Paper", "left")])


def offline():
    booth("keep-running-offline", "uploads", "offline", [("Uploads", "left"), ("^Waiting", "right"), ("Upload now", "below")])


JOBS = {"camera": camera, "multi-camera": multi_camera, "flash": flash, "printer": printer, "offline": offline}

if __name__ == "__main__":
    missing = [v for v in ("BOOTH_SRC", "BOOTH_NM", "BOOTH_BUILD") if not os.environ.get(v)]
    if missing:
        sys.exit(f"Set {' and '.join(missing)} first: see scripts/shots/booth/README.md")
    STEPS.mkdir(parents=True, exist_ok=True)
    for name in sys.argv[1:] or JOBS:
        JOBS[name]()
        os.environ.pop("BOOTH_REBUILD", None)  # one bundle per run
        print("made", name)
