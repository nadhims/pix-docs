"""Marked screenshots for the Events and Self-Service tutorials (PR 5).

Booth screens: scripts/shots/booth/events/entry.tsx (set BOOTH_ENTRY to it, plus BOOTH_SRC / BOOTH_NM / BOOTH_BUILD).
Dashboard screens reuse static/img/docs shots of made-up accounts; boxes measured by hand in image pixels (2x).
Run from the repo root:  python3 scripts/shots/tutorials/events_shots.py [job ...]
"""
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from pr0_shots import booth, dashboard, STEPS  # noqa: E402


def event():
    p = "run-an-event"
    booth(p, "use-event-pass", "evpass", ["Use an Event Pass for today?", ("Use Event Pass", "right")])
    # finance-event-money.webp is a 1x crop of the event's Report tab Money card.
    dashboard(p, "money-card", "finance-event-money.webp", [[24, 108, 540, 34, "below"], [588, 222, 78, 32, "right"]])


def queue():
    p = "queue-line"
    # The Queue display card of the group's Queue tab (cropped clear of that guide's own markers).
    dashboard(p, "queue-display-card", "steps/guides-queue-line--booth-group-queue.webp",
              [[2600, 904, 202, 72, "left"], [2100, 1030, 182, 68, "below"], [2284, 1030, 198, 68, "below"], [2484, 1030, 212, 68, "below"]],
              crop=[2040, 760, 820, 480])
    booth(p, "booth-get-number", "queue-get", [("Scan to get a number", "below")])
    booth(p, "booth-calling", "queue-call", [("A3, come to this booth", "below")])


def multi_booth():
    dashboard("multi-booth-group", "create-multibooth", "booths-create-multibooth.webp",
              [[2120, 16, 408, 72, "below"], [1302, 390, 218, 72, "right"], [1076, 1024, 728, 92, "right"], [1336, 1192, 208, 72, "right"], [1396, 1408, 408, 70, "right"]],
              crop=[1000, 0, 1880, 1560])


def marketing():
    p = "marketing-studio"
    dashboard(p, "consent-settings", "marketing-content.webp",
              [[530, 288, 534, 80, "right"], [1890, 440, 104, 64, "left"], [566, 834, 1420, 248, "right"], [2048, 1296, 332, 88, "below"], [2396, 1296, 408, 88, "below"]],
              crop=[480, 150, 2400, 1360])
    booth(p, "booth-consent", "consent", [("May we feature your photos?", "left"), ("Yes, I agree", "right"), ("No thanks", "right")])
    dashboard(p, "new-campaign", "marketing-new-campaign-modal.webp",
              [[2120, 16, 408, 64, "left"], [656, 546, 352, 76, "right"], [862, 696, 336, 76, "right"]],
              crop=[520, 0, 2360, 880])
    dashboard(p, "performance", "marketing-performance.webp",
              [[1908, 16, 408, 68, "below"], [2332, 16, 196, 68, "below"], [2472, 284, 364, 218, "below"]],
              crop=[480, 0, 2400, 1000])


JOBS = {"event": event, "queue": queue, "multi-booth": multi_booth, "marketing": marketing}

if __name__ == "__main__":
    missing = [v for v in ("BOOTH_SRC", "BOOTH_NM", "BOOTH_ENTRY") if not os.environ.get(v)]
    if missing:
        sys.exit(f"Set {' and '.join(missing)} first (BOOTH_ENTRY=scripts/shots/booth/events/entry.tsx): see scripts/shots/booth/README.md")
    STEPS.mkdir(parents=True, exist_ok=True)
    for name in sys.argv[1:] or JOBS:
        JOBS[name]()
        print("made", name)
