"""Marked booth screens for the Notes and Video/360 tutorials (fork B of Photo Sessions and Sharing).

Env as scripts/shots/booth/README.md, with BOOTH_ENTRY=scripts/shots/booth/sessions/entry.tsx (pages in pages-b.tsx).
Run from the repo root:  python3 scripts/shots/tutorials/sessions_b.py [job ...]
"""
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from pr0_shots import TMP, _mark, booth, dashboard, draw_markers, out, render  # noqa: E402


def booth_boxes(page, name, screen, marks):
    """Like booth(), for icon buttons with no text: marks are a visible label ("^Label" etc.) or [x, y, w, h] in image
    pixels (measured on the render), each optionally with a side: (label_or_box, side)."""
    png = str(TMP / f"{screen}.png")
    boxes = render(screen, (1920, 1080), png)
    items = []
    for i, m in enumerate(marks):
        what, side = m if isinstance(m, tuple) else (m, None)
        b = boxes[what] if isinstance(what, str) else what
        items.append(_mark(i + 1, [b[0] - 10, b[1] - 10, b[2] + 20, b[3] + 20], side))
    draw_markers(png, out(page, name), items)


def notes():
    # Text tool (Aa), the font row, Turn text (the round handle under the picked text), Move drawing, Done.
    booth_boxes("notes-session", "write-a-note", "b-note",
                [([3571, 1207, 104, 115], "right"), ("^Aa", "below"), ([1473, 1064, 77, 71], "below"),
                 ([3467, 1360, 203, 112], "below"), ("Done", "left")])
    # Dashboard, made-up accounts (existing shots): New UI Project with the Notes tile; an event's Booth mode with Edit modes.
    dashboard("notes-session", "new-ui-project-notes", "pix-design-new-ui-project-modal.webp",
              [[841, 280, 1197, 82], [1329, 901, 222, 389, "above"], [1641, 1654, 397, 56, "above"]], crop=[790, 40, 1300, 1720])
    dashboard("notes-session", "event-edit-modes", "event-setup-computers.webp",
              [[1240, 493, 274, 78, "left"]], crop=[0, 450, 1560, 570])


def video():
    p = "video-and-360-sessions"
    dashboard(p, "event-edit-modes", "event-setup-computers.webp", [[1240, 493, 274, 78, "left"]], crop=[0, 450, 1560, 570])
    booth(p, "capture-settings-video", "b-capture-settings",
          [("Video", "below"), ("^Video length", "left"), ("^Display text before recording", "left"), ("Choose", "right"), ("Save", "right")])
    booth(p, "capture-settings-360", "b-capture-settings",
          [("360/Slow-mo", "right"), ("Preset", "left"), ("^Recording duration", "left"), ("^^Reverse", "left"), ("Timeline", "left")])


JOBS = {"notes": notes, "video": video}

if __name__ == "__main__":
    missing = [v for v in ("BOOTH_SRC", "BOOTH_NM", "BOOTH_ENTRY") if not os.environ.get(v)]
    if missing:
        sys.exit(f"Set {' and '.join(missing)} first: see scripts/shots/booth/README.md")
    for job in sys.argv[1:] or JOBS:
        JOBS[job]()
        print("made", job)
