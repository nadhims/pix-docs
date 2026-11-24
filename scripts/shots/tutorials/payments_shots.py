"""Marked screenshots for the PR 4 tutorials (Payments).

Dashboard screens reuse static/img/docs shots from the made-up Sunny Side / Demo accounts (boxes measured by hand in
image pixels, 2x). Booth screens render with scripts/shots/booth (own entry: scripts/shots/booth/payments/entry.tsx).
Run from the repo root:
  BOOTH_SRC=... BOOTH_NM=... BOOTH_BUILD=<own dir> BOOTH_ENTRY=scripts/shots/booth/payments/entry.tsx \
    python3 scripts/shots/tutorials/payments_shots.py [job ...]
"""
import os
import shutil
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
from pr0_shots import STEPS, booth, dashboard, out  # noqa: E402

ROOT = HERE.parents[2]
os.environ.setdefault("BOOTH_ENTRY", str(ROOT / "scripts/shots/booth/payments/entry.tsx"))

# booth-pricing-*.webp are 2352 x 3831: the Pricing tab with its live preview.
PAY_CARD = [1320, 264, 954, 180]
SAVE = [1830, 3666, 396, 78, "above"]
PRICING_TOP = [0, 0, 2352, 1560]


def prices():
    p = "prices-and-packages"
    dashboard(p, "pricing-tab", "booth-pricing-tab.webp",
              [[24, 234, 432, 90, "right"], [1068, 1062, 162, 72, "below"]], crop=[0, 0, 2880, 1260])
    dashboard(p, "packages", "booth-pricing-packages.webp",
              [PAY_CARD + ["left"], [1365, 516, 279, 60, "left"], [1365, 738, 861, 90, "left"], [1365, 1059, 861, 81, "left"],
               [1365, 1413, 861, 90, "left"], [1350, 1671, 897, 168, "left"], [1350, 2271, 897, 168, "left"],
               [1350, 2871, 897, 168, "left"], SAVE])
    dashboard(p, "time", "booth-pricing-time.webp",
              [[1656, 516, 120, 54, "above"], [1365, 738, 864, 93, "left"]], crop=PRICING_TOP)
    dashboard(p, "extra-prints", "booth-pricing-extra-prints.webp",
              [[1785, 516, 207, 54, "above"], [2145, 681, 84, 57, "right"], [1365, 750, 864, 90, "left"]], crop=PRICING_TOP)
    dashboard(p, "tax-fees", "booth-pricing-tax-fees.webp",
              [[2004, 516, 189, 60, "above"], [1365, 738, 861, 90, "left"], [1365, 900, 861, 81, "left"],
               [2070, 1164, 156, 48, "left"]], crop=PRICING_TOP)


# pix-design-ui-editor-payment.webp is 2880 x 1800.
UI_PAYMENT = [[903, 279, 237, 51, "below"], [2304, 756, 552, 294, "left"], [2304, 1200, 552, 54, "left"], [2697, 144, 153, 60, "below"]]


def accept():
    dashboard("accept-payments", "ui-editor-payment", "pix-design-ui-editor-payment.webp", UI_PAYMENT)


def vouchers():
    p = "vouchers"
    dashboard(p, "create-menu", "vouchers-create-menu.webp",
              [[24, 429, 432, 90, "right"], [570, 309, 1086, 72, "below"], [2394, 177, 396, 57, "above"],
               [2400, 255, 384, 63, "left"], [2400, 336, 384, 63, "left"]], crop=[0, 0, 2880, 1260])
    dashboard(p, "online-shop-link", "vouchers-create-menu.webp", [[1581, 180, 228, 51, "below"]], crop=[480, 0, 2400, 700])
    dashboard(p, "sort-codes", "vouchers-batches.webp",
              [[531, 156, 2298, 168, "left"], [2106, 201, 684, 78, "below"]], crop=[380, 100, 2500, 520])
    # The Generate Batch window already carries the markers this tutorial's batch step uses (2, 3, 4).
    shutil.copyfile(STEPS / "tutorials-connect-a-coin-or-card-reader--vouchers-create-batch.webp", out(p, "create-batch"))
    shutil.copyfile(STEPS / "tutorials-accept-payments--vouchers-create-single.webp", out(p, "create-single"))


def hardware():
    p = "connect-a-coin-or-card-reader"
    booth(p, "hardware-f13", "hardware", [("^^Treat F13 as the cash system's paid signal", "right")],
          focus="Treat F13 as the cash system's paid signal")
    booth(p, "hardware-coin", "hardware", [("^^Enable keyboard coin input", "left"), ("^^Coin key", "left"),
                                           ("^^Value per keystroke", "left"), ("Save & Apply", "left")], focus="Value per keystroke")
    booth(p, "hardware-local-api", "hardware", [("^^Enable local API", "left"), ("^^Port", "left"), ("^^Allow LAN access", "left"),
                                                ("Regenerate", "right")])


JOBS = {"prices": prices, "accept": accept, "vouchers": vouchers, "hardware": hardware}

if __name__ == "__main__":
    for name in sys.argv[1:] or JOBS:
        if name == "hardware" and not (os.environ.get("BOOTH_SRC") and os.environ.get("BOOTH_NM")):
            sys.exit("Set BOOTH_SRC and BOOTH_NM first: see scripts/shots/booth/README.md")
        JOBS[name]()
        print("made", name)
