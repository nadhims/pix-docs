"""Marked screenshots for the Photographer, Mingle and Event Album tutorials (Photo Sessions and Sharing, part C).

Booth screens: scripts/shots/booth/sessions/pages-c.tsx (BOOTH_ENTRY=scripts/shots/booth/sessions/entry.tsx).
Dashboard screens reuse static/img/docs shots of the made-up "Rina & Dimas Wedding" event; boxes measured in image pixels (2x).
Run from the repo root:  python3 scripts/shots/tutorials/sessions_c.py
"""
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from pr0_shots import booth, dashboard  # noqa: E402


def photographer():
    p = "photographer-mode"
    booth(p, "shoot", "c-photographer", [("Photo 2 of 3", "right"), ("^2", "right"), ("Start over", "right")])
    booth(p, "check-it", "c-check-it", [("Retake", "left"), ("Use photo", "right")])
    edit_modes(p)


# event-setup-computers.webp (Setup tab): Edit modes on the Booth mode card, and the Slideshow tab.
SETUP = dict(src="event-setup-computers.webp", crop=[0, 460, 1560, 560])


def edit_modes(page):
    dashboard(page, "edit-modes", boxes=[[1232, 490, 290, 86, "left"]], **SETUP)


def mingle():
    edit_modes("mingle-mode")


def album():
    p = "event-album-and-slideshow"
    # event-detail.webp: Link Sharing switch, the link with Copy, then Download all, Embed and Slideshow in the tab bar.
    dashboard(p, "link-sharing", "event-detail.webp",
              [[2630, 515, 170, 70, "above"], [2126, 614, 530, 98, "left"], [1520, 840, 236, 64, "above"], [1775, 840, 155, 64, "above"], [2141, 840, 203, 64, "above"]],
              crop=[520, 400, 2360, 600])
    dashboard(p, "slideshow-tab", boxes=[[1250, 905, 220, 80, "above"]], **SETUP)
    dashboard(p, "embed", "event-embed-modal.webp", [[950, 827, 980, 158, "left"], [1373, 1049, 416, 74, "left"]], crop=[800, 610, 1200, 580])


JOBS = {"photographer": photographer, "mingle": mingle, "album": album}

if __name__ == "__main__":
    if not all(os.environ.get(v) for v in ("BOOTH_SRC", "BOOTH_NM")):
        sys.exit("Set BOOTH_SRC and BOOTH_NM first: see scripts/shots/booth/README.md")
    for name in sys.argv[1:] or JOBS:
        JOBS[name]()
        print("made", name)
