"""Marked screenshots for the PR 1 tutorials (Design).

All dashboard: existing static/img/docs shots of the made-up Sunny Side / Demo accounts, marker boxes measured by hand
in image pixels (2x). Run from the repo root:  python3 scripts/shots/tutorials/design_shots.py [job ...]
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from PIL import Image  # noqa: E402
from pr0_shots import DOCS, STEPS, TMP, dashboard, draw_markers, out  # noqa: E402


def dashboard_from(n0, page, name, src, boxes, crop):
    """dashboard() with badges numbered from n0, for a step whose screenshot shows only its later actions."""
    x, y, w, h = crop
    png = str(TMP / f"{name}.png")
    Image.open(DOCS / src).convert("RGB").crop((x, y, x + w, y + h)).save(png)
    draw_markers(png, out(page, name), [{"n": n0 + i, "box": [b[0] - x, b[1] - y, b[2], b[3]], **({"side": b[4]} if len(b) > 4 else {})}
                                        for i, b in enumerate(boxes)])

SIDEBAR_PIX_DESIGN = [24, 1004, 432, 90, "right"]  # pix-design-hub.webp
SIDEBAR_BOOTHS = [24, 234, 432, 90, "right"]


def templates():
    p = "design-a-print-template"
    dashboard(p, "hub", "pix-design-hub.webp", [SIDEBAR_PIX_DESIGN, [530, 548, 740, 320, "above"]], crop=[0, 0, 2880, 1300])
    dashboard_from(3, p, "upgrade-to-create", "pix-design-templates.webp", [[2414, 448, 368, 64, "below"]], crop=[480, 0, 2400, 1700])
    dashboard(p, "create-modal", "pix-design-create-template-modal.webp",
              [[940, 278, 322, 116], [1618, 794, 322, 116, "above"], [932, 1428, 1016, 188], [1540, 1654, 400, 58, "right"]],
              crop=[760, 0, 1300, 1800])
    dashboard(p, "remove-bg", "pix-design-template-remove-bg.webp",
              [[1976, 144, 248, 62, "below"], [1042, 942, 716, 534], [1364, 530, 324, 40], [1364, 356, 632, 44],
               [1832, 730, 158, 62, "below"], [2350, 276, 214, 52]],
              crop=[940, 110, 1940, 1500])


def brand():
    p = "set-up-your-brand"
    dashboard(p, "hub", "pix-design-hub.webp", [SIDEBAR_PIX_DESIGN, [530, 186, 740, 320, "above"]], crop=[0, 0, 2880, 1300])
    dashboard(p, "brand-page", "pix-design-brand.webp",
              [[578, 660, 760, 500], [578, 1280, 760, 480], [578, 1870, 760, 266], [578, 2244, 760, 340], [1782, 632, 704, 84]],
              crop=[480, 200, 2400, 2440])


def filters():
    p = "add-filters"
    dashboard(p, "hub", "pix-design-hub.webp", [SIDEBAR_PIX_DESIGN, [2092, 548, 740, 320, "above"]], crop=[0, 0, 2880, 1300])
    dashboard(p, "upload-filter", "pix-design-upload-filter-modal.webp",
              [[1150, 20, 400, 64, "below"], [1008, 710, 864, 124], [1008, 880, 864, 136], [1472, 1182, 400, 68, "right"]],
              crop=[860, 0, 1200, 1300])
    dashboard(p, "booth-filters-tab", "booth-filters-tab.webp",
              [SIDEBAR_BOOTHS, [728, 1070, 148, 64, "above"], [2390, 1218, 400, 80]], crop=[0, 0, 2880, 1500])
    dashboard(p, "manage-filters", "booth-manage-filters-modal.webp",
              [[780, 556, 312, 312], [780, 1576, 400, 56]], crop=[560, 100, 1600, 1600])


def overlays():
    p = "gif-and-video-overlays"
    dashboard(p, "hub", "pix-design-hub.webp", [SIDEBAR_PIX_DESIGN, [530, 910, 740, 320, "below"]], crop=[0, 0, 2880, 1400])
    dashboard(p, "booth-gif-overlay", "booth-settings-tab.webp",
              [SIDEBAR_BOOTHS, [1670, 1065, 133, 60, "right"], [1082, 2086, 363, 75, "above"], [1459, 2086, 157, 75, "right"]],
              crop=[0, 0, 2880, 2400])
    dashboard(p, "event-gif-template", "event-setup-computers.webp", [[740, 920, 270, 74, "above"]], crop=[0, 440, 1560, 1600])


def start_screen():
    p = "event-start-screen"
    dashboard(p, "event-setup-tab", "event-detail.webp",
              [[24, 234, 432, 90, "right"], [766, 850, 140, 64, "below"]], crop=[0, 0, 2880, 1100])
    dashboard_from(3, p, "edit-appearance", "event-setup-computers.webp",
                   [[24, 920, 268, 74, "above"], [112, 1520, 356, 94]], crop=[0, 440, 1560, 1600])


JOBS = {"templates": templates, "brand": brand, "filters": filters, "overlays": overlays, "start-screen": start_screen}

if __name__ == "__main__":
    STEPS.mkdir(parents=True, exist_ok=True)
    for name in sys.argv[1:] or JOBS:
        JOBS[name]()
        print("made", name)
