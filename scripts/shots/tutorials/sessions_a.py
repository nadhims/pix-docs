"""Marked screenshots for Studio, Review and Retake, and Newspaper (Photo Sessions and Sharing, part A).

Dashboard screens reuse static/img/docs shots from the made-up Demo / Sunny Side accounts; boxes are measured by hand in
image pixels (2x). Run from the repo root:  python3 scripts/shots/tutorials/sessions_a.py [job ...]
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from pr0_shots import STEPS, TMP, dashboard, out  # noqa: E402
from markers import draw_markers  # noqa: E402
from render import render  # noqa: E402

NEW_UI = "pix-design-new-ui-project-modal.webp"
NAME, ORIENT, STUDIO, NEWSPAPER, CREATE = [839, 278, 1199, 84], [839, 448, 1199, 364, "above"], [1074, 899, 243, 393, "below"], [839, 1312, 224, 313], [1635, 1646, 407, 72, "above"]


def studio():
    p = "studio-mode"
    dashboard(p, "new-project", NEW_UI, [NAME, ORIENT, STUDIO, CREATE])
    # The Assign photos shot already carries markers 1 (the tab) and 3 (Save); add 2 on the Template Slots layer.
    src = str(STEPS / "tutorials-studio-mode--pix-design-ui-editor-assign-photos.webp")
    png = str(TMP / "assign.png")
    from PIL import Image
    Image.open(src).convert("RGB").save(png)
    draw_markers(png, out(p, "assign-photos"), [{"n": 2, "box": [2283, 1543, 597, 76]}])


def review():
    p = "review-and-retake"
    crop = [288, 103, 1975, 514]
    dashboard(p, "review-tab", "pix-design-ui-editor-capture.webp", [[1467, 276, 132, 60, "below"]], crop=crop)
    dashboard(p, "adjust-tab", "pix-design-ui-editor-capture.webp", [[1607, 276, 121, 60, "below"]], crop=crop)


def newspaper():
    p = "newspaper-session"
    dashboard(p, "create-template", "pix-design-create-template-modal.webp",
              [[1619, 409, 319, 115, "right"], [940, 1191, 321, 113], [940, 1492, 998, 129], [1541, 1654, 397, 56, "right"]])
    dashboard(p, "media-type", "pix-design-template-editor.webp", [[2353, 1506, 494, 131]], crop=[1900, 1000, 980, 750])
    dashboard(p, "new-project", NEW_UI, [NAME, NEWSPAPER, CREATE])


def studio_booth():
    """The booth's Assign photos screen (pages-a.tsx "a-pool"): needs BOOTH_ENTRY=scripts/shots/booth/sessions/entry.tsx."""
    png = str(TMP / "a-pool.png")
    boxes = render("a-pool", (1920, 1080), png)
    grow = lambda b, p=10: [b[0] - p, b[1] - p, b[2] + 2 * p, b[3] + 2 * p]
    photo = [373, 1646, 285, 283]  # the second shot in the pool row (no text to find it by)
    draw_markers(png, out("studio-mode", "assign-on-booth"), [
        {"n": 1, "box": grow(photo), "side": "above"},
        {"n": 2, "box": grow(boxes["Take more"]), "side": "right"},
        {"n": 3, "box": grow(boxes["Next"]), "side": "left"}])


JOBS = {"studio-booth": studio_booth, "studio": studio, "review": review, "newspaper": newspaper}

if __name__ == "__main__":
    STEPS.mkdir(parents=True, exist_ok=True)
    for name in sys.argv[1:] or JOBS:
        JOBS[name]()
        print("made", name)
