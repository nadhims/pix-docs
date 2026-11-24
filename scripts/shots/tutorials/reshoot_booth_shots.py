"""Marked booth screenshots for the 2026-11-24 re-shoot (booth 1.2.50): the booth placeholders of the Payments,
Sessions, Events and Hardware tutorials. Pages: scripts/shots/booth/reshoot/ (own entry, see its entry.tsx).
Run from the repo root:
  BOOTH_SRC=<pix-booth at the released commit> BOOTH_NM=<its node_modules> BOOTH_BUILD=<own dir> [BOOTH_REBUILD=1] \
    python3 scripts/shots/tutorials/reshoot_booth_shots.py [job ...]
"""
import os
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
sys.path[:0] = [str(HERE), str(ROOT / "scripts/shots"), str(ROOT / "scripts/shots/booth")]
os.environ.setdefault("BOOTH_ENTRY", str(ROOT / "scripts/shots/booth/reshoot/entry.tsx"))
import render  # noqa: E402
from markers import draw_markers  # noqa: E402
from pr0_shots import STEPS, TMP, out  # noqa: E402


def shoot(page, size=(1920, 1080), actions=(), sels=None, wait_ms=1500):
    """render.render plus Playwright actions before the shot (("click", selector) / ("fill", selector, text)) and boxes
    for CSS selectors (sels: {name: selector}) beside the text boxes. Returns (png, {label or name: [x, y, w, h]})."""
    from playwright.sync_api import sync_playwright
    if not (render.BUILD / "index.html").exists() or os.environ.get("BOOTH_REBUILD"):
        render.bundle()
        os.environ.pop("BOOTH_REBUILD", None)  # once per run
    png = str(TMP / f"{page}.png")
    with sync_playwright() as p:
        b = p.chromium.launch(channel="chrome", args=["--allow-file-access-from-files"])
        pg = b.new_page(viewport={"width": size[0], "height": size[1]}, device_scale_factor=render.SCALE)
        pg.route("http*://**", lambda r: r.abort())  # never the network from a docs render
        pg.goto(f"file://{render.BUILD}/index.html#{page}")
        pg.wait_for_function("window.__mounted === true", timeout=20000)
        pg.wait_for_timeout(800)
        for a in actions:
            if a[0] == "click":
                pg.locator(a[1]).first.click(force=True)
            elif a[0] == "fill":
                pg.locator(a[1]).first.fill(a[2])
            pg.wait_for_timeout(400)
        pg.wait_for_timeout(wait_ms)
        pg.screenshot(path=png)
        boxes = pg.evaluate(render.BOXES_JS)
        for name, sel in (sels or {}).items():
            if sel.startswith("js:"):  # a JS expression returning the element, or elements (their union)
                r = pg.evaluate(f"""() => {{ const e = {sel[3:]}; const es = (Array.isArray(e) ? e : [e]).filter(Boolean); if (!es.length) return null;
                  const rs = es.map(x => x.getBoundingClientRect()); const x = Math.min(...rs.map(b => b.x)), y = Math.min(...rs.map(b => b.y));
                  return {{x, y, width: Math.max(...rs.map(b => b.right)) - x, height: Math.max(...rs.map(b => b.bottom)) - y}} }}""")
            else:
                r = pg.locator(sel).first.bounding_box()
            assert r, f"{page}: no {sel}"
            boxes[name] = [r["x"], r["y"], r["width"], r["height"]]
        b.close()
    return png, {t: [round(v * render.SCALE) for v in r] for t, r in boxes.items()}


def mark(slug, name, page, labels, pad=10, **kw):
    """Shoot `page` and mark `labels` (visible text, a sels name, or (label, side)) as steps 1..n; or (label, side, n)."""
    png, boxes = shoot(page, **kw)
    labels = [l if isinstance(l, tuple) else (l, None) for l in labels]
    missing = [l[0] for l in labels if l[0] not in boxes]
    assert not missing, f"{page}: not on screen: {missing}"
    grow = lambda b: [b[0] - pad, b[1] - pad, b[2] + 2 * pad, b[3] + 2 * pad]
    ms = [{"n": l[2] if len(l) > 2 else i + 1, "box": grow(boxes[l[0]]), **({"side": l[1]} if l[1] else {})} for i, l in enumerate(labels)]
    draw_markers(png, out(slug, name), ms)


def payments():
    mark("accept-payments", "package-picker", "pay-packages", [("^^Single", "left", 1)])
    mark("accept-payments", "qr-countdown", "pay-qr", [("qr", "left", 2), ("^Expires in 04:07", "right", 2)], sels={"qr": ".pp-qr"})
    mark("keep-running-offline", "offline-payment", "pay-offline", [("qr", "left", 1), ("Enter Code", "left", 2)], sels={"qr": "svg[height='236']"})
    mark("run-a-promo", "promo-payment", "pay-promo", [("^^Single", "left", 1)])
    mark("vouchers", "voucher-entry", "pay-voucher", [("code", "left", 1), ("Apply Voucher", "left", 2)],
         actions=[("click", "text=Use Voucher"), ("fill", "input", "SUNNY7K")], sels={"code": "input"})


def capture():
    mark("review-and-retake", "review-screen", "review", [("photo", "left", 2), ("adjust", "left", 2), ("Retake", "above", 3), ("Next (8s)", "above", 2)],
         actions=[("click", "[data-block-type=reviewPhoto] img")], sels={"photo": "[data-block-type=reviewPhoto]", "adjust": "[data-review-adjust] [data-review-adjust]"})
    mark("studio-mode", "studio-capture", "studio", [("last", "above", 2), ("5 photos", "right", 3), ("05:00", "left", 3), ("Done", "above", 3)],
         sels={"last": "[data-block-type=poolThumbnailStrip]"})
    mark("multi-camera", "choose-angle", "angles", [("cards", "right", 2)],
         sels={"cards": "js:[...document.querySelectorAll('button span, button div')].filter(e => ['Front', 'High angle'].includes(e.textContent.trim())).map(e => e.closest('button'))"})


def events():
    mark("mingle-mode", "mingle-countdown", "mingle", [("^Look at the camera", "left", 3)])
    mark("photographer-mode", "group-share", "pg-share", [("^Scan QR", "below", 2), ("Complete", "above", 3)])
    mark("video-and-360-sessions", "video-ready", "video-ready", [("Start", "below", 2)])
    mark("video-and-360-sessions", "video-share", "video-share", [("^Scan QR", "below", 5), ("Complete", "above", 5)])
    mark("newspaper-session", "newspaper-start", "newspaper", [("dots", "above", 1), ("Start", "left", 2)], size=(1080, 1920),
         sels={"dots": "js:[...document.querySelectorAll('div')].find(d => d.children.length === 3 && [...d.children].every(c => c.tagName === 'SPAN' && c.style.borderRadius === '999px'))"})


JOBS = {"payments": payments, "capture": capture, "events": events}

if __name__ == "__main__":
    missing = [v for v in ("BOOTH_SRC", "BOOTH_NM") if not os.environ.get(v)]
    if missing:
        sys.exit(f"Set {' and '.join(missing)} first: see scripts/shots/booth/README.md")
    STEPS.mkdir(parents=True, exist_ok=True)
    for name in sys.argv[1:] or JOBS:
        JOBS[name]()
        print("made", name)
