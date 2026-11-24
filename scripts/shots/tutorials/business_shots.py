"""Marked screenshots for the Running the Business tutorials.

Dashboard screens reuse static/img/docs shots from the made-up Sunny Side / Golden Hour / Demo accounts; marker
boxes are measured by hand in image pixels (2x). Booth screens come from scripts/shots/booth/render.py.
Run from the repo root:  BOOTH_SRC=... BOOTH_NM=... BOOTH_BUILD=... python3 scripts/shots/tutorials/business_shots.py [job ...]
"""
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from pr0_shots import STEPS, booth, dashboard  # noqa: E402,F401


# --- computers + partners + profit and loss ---------------------------------------------------------------
def computers():
    # The Event Pass prompt lives in our own entry (scripts/shots/booth/business/entry.tsx), bundled into its own folder.
    import render
    saved = render.BUILD, os.environ.get("BOOTH_ENTRY")
    render.BUILD = saved[0].with_name(saved[0].name + "-business-entry")
    os.environ["BOOTH_ENTRY"] = str(Path(__file__).resolve().parents[1] / "booth/business/entry.tsx")
    try:
        render.bundle()
        booth("add-or-move-a-computer", "use-event-pass", "eventpass",
              ["Use an Event Pass for today?", ("You have 3 Event Passes.", "right"), ("Use Event Pass", "right")])
    finally:
        render.BUILD = saved[0]
        os.environ.pop("BOOTH_ENTRY") if saved[1] is None else os.environ.__setitem__("BOOTH_ENTRY", saved[1])


def partners():
    # ponytail: the Partners shots predate the Statement link (Finance stage 3), so the actions column is cropped off.
    p = "share-revenue-and-profit"
    dashboard(p, "partners-month", "finance-partners.webp",
              [[902, 160, 170, 74, "right"], [2172, 446, 194, 48, "left"], [2172, 622, 194, 48, "left"], [2172, 940, 194, 48, "left"]],
              crop=[480, 120, 1980, 930])
    dashboard(p, "investor-dialog", "finance-partner-dialog.webp",
              [[712, 198, 624, 66, "above"], [253, 1473, 212, 57, "above"], [90, 674, 387, 67, "above"], [90, 978, 387, 67, "above"],
               [502, 978, 387, 67, "above"], [914, 978, 387, 67, "above"], [90, 1182, 524, 60, "right"], [936, 1622, 400, 58, "above"]])


def profit_and_loss():
    # ponytail: finance-profit-and-loss.webp shows an old "Event bookings" line, so only its header and right column are used.
    p = "profit-and-loss"
    dashboard(p, "open-finance", "finance-profit-and-loss.webp",
              [[24, 332, 432, 90, "right"], [2200, 20, 184, 64, "below"], [2402, 20, 122, 64, "below"], [1792, 20, 392, 64, "below"]],
              crop=[0, 0, 2880, 540])
    dashboard(p, "costs-tab", "finance-costs.webp", [[758, 160, 136, 74, "below"], [2628, 154, 204, 80, "left"]], crop=[0, 0, 2880, 1120])
    dashboard(p, "add-cost", "finance-add-cost.webp",
              [[56, 197, 463, 67, "above"], [552, 197, 463, 67, "above"], [56, 350, 494, 60, "right"], [56, 707, 959, 66, "above"], [616, 877, 400, 58, "above"]])
    dashboard(p, "paper-and-tax", "finance-costs.webp",
              [[2596, 1826, 226, 80, "left"], [1732, 2092, 132, 52, "right"], [2630, 2312, 192, 80, "left"]], crop=[480, 1760, 2400, 930])
    dashboard(p, "event-money", "finance-event-money.webp", [[130, 114, 34, 22, "right"], [592, 226, 69, 24, "right"], [20, 322, 128, 20, "right"]])
    dashboard(p, "distribution", "finance-profit-and-loss.webp",
              [[1820, 786, 312, 48, "right"], [1820, 954, 266, 48, "right"], [1782, 1034, 552, 60, "right"], [1768, 1120, 1046, 82, "below"],
               [1784, 1524, 214, 52, "right"]], crop=[1730, 550, 1110, 1440])
    dashboard(p, "one-kiosk", "finance-one-kiosk.webp",
              [[1792, 20, 392, 64, "below"], [2280, 276, 552, 250, "below"], [1792, 710, 980, 80, "below"]], crop=[0, 0, 2880, 1740])


# --- dashboard, health, gallery + transactions ------------------------------------------------------------
def read_dashboard():
    p = "read-your-dashboard"
    dashboard(p, "switcher", "dashboard-views-switcher.webp",
              [[40, 562, 400, 88, "right"], [160, 82, 150, 44, "right"], [160, 238, 190, 44, "right"], [160, 396, 190, 44, "right"]])
    dashboard(p, "filters", "dashboard-home.webp",
              [[840, 20, 216, 64, "below"], [1106, 20, 564, 64, "below"], [1720, 20, 400, 64, "below"], [2150, 20, 330, 64, "below"]],
              crop=[500, 0, 2380, 560])
    dashboard(p, "revenue", "dashboard-home.webp",
              [[572, 276, 350, 120, "left"], [944, 306, 56, 62, "right"], [572, 398, 290, 64, "left"], [572, 506, 370, 56, "left"]],
              crop=[476, 230, 2404, 840])
    dashboard(p, "cards", "dashboard-home.webp",
              [[530, 1116, 440, 230, "above"], [996, 1116, 440, 230, "above"], [1462, 1116, 438, 230, "above"],
               [1926, 1116, 440, 230, "above"], [2392, 1116, 440, 230, "above"]],
              crop=[500, 990, 2380, 380])
    dashboard(p, "templates-booths-health", "dashboard-home-full.webp",
              [[1960, 1416, 290, 56, "left"], [560, 2372, 400, 100, "above"], [1530, 2372, 214, 100, "above"], [2226, 2372, 290, 100, "above"]],
              crop=[500, 1380, 2380, 2560])
    dashboard(p, "overview-split", "dashboard-overview.webp",
              [[572, 1430, 260, 64], [1720, 1430, 260, 64]],
              crop=[500, 1100, 2380, 700])


def health():
    # ponytail: the new Health page shots live in the open docs PR #79 clone (pix-docs-health, made-up demo booths);
    # move the sources to static/img/docs once that PR merges.
    p, src = "booth-health-alerts", Path.home() / "pix-work/pix-docs-health/static/img/docs"
    dashboard(p, "live", src / "health.webp",
              [[528, 280, 1112, 76, "right"], [1240, 412, 90, 50, "left"], [1620, 412, 180, 50, "left"],
               [1910, 412, 170, 50, "left"], [2542, 412, 140, 50, "left"]],
              crop=[480, 140, 2400, 1160])
    dashboard(p, "booth-view", src / "health-booth-detail.webp",
              [[1650, 300, 1180, 164, "left"], [1650, 494, 1180, 438, "left"], [2546, 1304, 250, 64, "above"], [1800, 190, 430, 50, "right"]],
              crop=[1540, 0, 1340, 1500])
    dashboard(p, "opening-hours", src / "health-opening-hours.webp",
              [[2590, 160, 240, 66, "left"], [882, 1160, 1116, 86, "left"], [1522, 526, 194, 66, "left"], [1150, 1282, 278, 64, "right"]],
              crop=[740, 140, 2140, 1340])
    dashboard(p, "incidents", src / "health-incidents.webp",
              [[686, 176, 204, 48, "below"], [528, 486, 978, 60, "right"], [2184, 770, 66, 46, "left"], [2574, 160, 256, 66, "below"]],
              crop=[480, 140, 2400, 1660])
    dashboard(p, "report-incident", src / "health-report-incident.webp",
              [[1830, 566, 150, 58, "right"], [900, 710, 1080, 66, "right"], [900, 864, 1080, 68, "right"],
               [900, 1020, 1080, 126, "right"], [900, 1190, 284, 44, "right"], [1580, 1328, 400, 56, "right"]],
              crop=[700, 300, 1500, 1180])
    dashboard(p, "notes", src / "health-incident-notes.webp",
              [[1000, 1142, 880, 128, "left"], [1706, 1284, 174, 54, "left"], [1240, 1412, 224, 68, "above"]],
              crop=[880, 250, 1120, 1300])
    dashboard(p, "history", src / "health-history.webp",
              [[930, 176, 160, 48, "right"], [528, 290, 1076, 44, "right"], [2534, 280, 296, 62, "left"], [2574, 160, 256, 66, "left"]],
              crop=[480, 140, 2400, 1160])


def gallery_transactions():
    p = "gallery-and-transactions"
    dashboard(p, "gallery-filters", "gallery.webp",
              [[786, 20, 334, 64, "below"], [1170, 20, 374, 64, "below"], [1570, 20, 486, 64, "below"],
               [2090, 20, 256, 64, "below"], [2374, 20, 150, 64, "below"]],
              crop=[480, 0, 2400, 1100])
    dashboard(p, "tx-filters", "transactions.webp",
              [[870, 20, 334, 64, "below"], [1254, 20, 370, 64, "below"], [1652, 20, 398, 64, "below"], [2074, 20, 274, 64, "below"]],
              crop=[480, 0, 2400, 900])
    dashboard(p, "tx-read", "transactions.webp",
              [[1130, 186, 532, 246, "above"], [1698, 186, 532, 246, "above"], [1244, 506, 142, 92, "left"], [2100, 506, 84, 92, "right"]],
              crop=[480, 60, 2400, 1100])
    dashboard(p, "tx-tools", "transactions.webp",
              [[2678, 526, 120, 40, "above"], [2372, 20, 64, 64, "below"], [2460, 20, 64, 64, "below"]],
              crop=[480, 0, 2400, 900])


# --- team + country/currency/language ---------------------------------------------------------------------
def team():
    p = "team-and-roles"
    dashboard(p, "members", "settings-members.webp",
              [[24, 1142, 432, 88, "right"], [528, 398, 480, 88], [2168, 368, 212, 56]],
              crop=[0, 0, 2880, 1280])
    dashboard(p, "roles", "settings-roles.webp",
              [[2116, 164, 256, 52], [2432, 152, 400, 80, "below"], [2484, 668, 88, 48]],
              crop=[500, 120, 2380, 1150])
    dashboard(p, "create-role", "settings-create-role-modal.webp",
              [[700, 818, 724, 68, "above"], [700, 984, 716, 676, "above"], [1480, 1012, 200, 48, "right"], [1780, 1734, 400, 58, "right"]],
              crop=[560, 600, 1760, 1260])
    dashboard(p, "invite", "settings-invite-modal.webp",
              [[2432, 352, 400, 88, "below"], [1000, 780, 880, 68], [1000, 936, 880, 72], [1480, 1112, 400, 56, "right"]],
              crop=[880, 300, 2000, 940])


def country():
    p = "country-currency-language"
    dashboard(p, "timezone", "settings-preferences.webp",
              [[24, 1142, 432, 88, "right"], [528, 308, 480, 88], [1670, 948, 696, 66], [2382, 942, 400, 80, "below"]],
              crop=[0, 0, 2880, 1300])
    dashboard(p, "currency", "settings-preferences.webp",
              [[1670, 1188, 696, 66, "above"], [2382, 1180, 400, 80, "below"]],
              crop=[1080, 1080, 1800, 290])
    dashboard(p, "booth-language", "settings-preferences.webp",
              [[1670, 746, 696, 66, "above"], [2382, 738, 400, 80, "below"]],
              crop=[1080, 640, 1800, 280])
    dashboard(p, "dashboard-language", "settings-preferences.webp",
              [[2034, 530, 748, 90]],
              crop=[1080, 480, 1800, 200])
    dashboard(p, "booth-currency", "booth-settings-tab.webp",
              [[1660, 1066, 140, 58, "right"], [1744, 2024, 1044, 248], [1742, 2314, 400, 80], [1742, 2492, 668, 66], [1742, 2640, 400, 80]],
              crop=[1560, 980, 1320, 1780])


# --- iPhone app + Lucy and AI assistants ------------------------------------------------------------------
def _iphone_2x(src):
    """The App Store iPhone shots are 480 px wide (1x); doubled so the 44 px badges fit beside the controls."""
    from PIL import Image
    from pr0_shots import DOCS, TMP
    big = TMP / src.replace(".webp", "-2x.png")
    im = Image.open(DOCS / src).convert("RGB")
    im.resize((im.width * 2, im.height * 2), Image.LANCZOS).save(big)
    return str(big)  # absolute: DOCS / big == big


def iphone():
    p = "iphone-app"  # file names keep "iphone-" so custom.css caps them at phone size
    dashboard(p, "iphone-dashboard", _iphone_2x("iphone-dashboard.webp"),
              [[34, 180, 364, 82, "above"], [564, 184, 364, 72], [660, 388, 54, 54, "right"], [54, 1894, 850, 126, "above"]])
    dashboard(p, "iphone-events", _iphone_2x("iphone-events.webp"),
              [[810, 170, 102, 102, "below"], [38, 400, 880, 252, "below"]])
    dashboard(p, "iphone-health", _iphone_2x("iphone-health.webp"), [[38, 442, 882, 180, "above"]])
    dashboard(p, "iphone-finance", _iphone_2x("iphone-finance.webp"),
              [[38, 640, 880, 214, "above"], [39, 1080, 879, 73, "below"], [806, 170, 102, 102, "below"]])
    dashboard(p, "iphone-gallery", _iphone_2x("iphone-gallery.webp"),
              [[705, 437, 185, 73, "below"], [729, 165, 180, 97, "below"]])


def lucy():
    dashboard("lucy-and-ai-assistants", "connected-ai-apps", "settings-general.webp",
              [[24, 1142, 432, 90, "right"], [530, 218, 474, 90, "above"], [2573, 1459, 160, 83, "right"], [2573, 1866, 160, 83, "right"]],
              crop=[0, 0, 2880, 2200])


JOBS = {f.__name__: f for f in (computers, partners, profit_and_loss, read_dashboard, health, gallery_transactions,
                                 team, country, iphone, lucy)}

if __name__ == "__main__":
    STEPS.mkdir(parents=True, exist_ok=True)
    for name in sys.argv[1:] or JOBS:
        JOBS[name]()
        print("made", name)
