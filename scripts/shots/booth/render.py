"""Render a Pixture Photobooth (booth app) page headlessly for the docs, with a fake booth
behind it (no camera, no printer, no full-screen app on anyone's Mac).

Env: BOOTH_SRC = a checkout of nadhims/pix-booth at the released commit (src/ is enough),
     BOOTH_NM  = a node_modules folder installed from the same package-lock.json.
Usage: python3 scripts/shots/booth/render.py --self-test
"""
import json
import os
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
BUILD = Path(os.environ.get("BOOTH_BUILD", "/tmp/booth-render"))
SCALE = 2
# Leaf text -> box, read in the page; boxes come back in CSS pixels and are scaled to image pixels below.
BOXES_JS = """() => { const out = {};
  for (const el of document.querySelectorAll('body *')) {
    const own = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim();
    if (!own || own.length > 80) continue;
    const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
    if (r.width === 0 || r.height === 0 || cs.visibility === 'hidden' || cs.display === 'none') continue;
    if (!(own in out)) {
      out[own] = [r.x, r.y, r.width, r.height];
      // "^text": the element around the label (label + its control); "^^text": one level further (the whole row).
      const p = el.parentElement, g = p && p.parentElement;
      if (p) { const b = p.getBoundingClientRect(); out['^' + own] = [b.x, b.y, b.width, b.height]; }
      if (g) { const b = g.getBoundingClientRect(); out['^^' + own] = [b.x, b.y, b.width, b.height]; }
    }
  } return out; }"""


def bundle():
    """esbuild entry.tsx against the booth source; writes BUILD/bundle.js + bundle.css + index.html."""
    src, nm = os.environ["BOOTH_SRC"], os.environ["BOOTH_NM"]
    BUILD.mkdir(parents=True, exist_ok=True)
    subprocess.run(["node", str(HERE / "build.mjs"), src, str(BUILD)], check=True, env={**os.environ, "NODE_PATH": nm})
    css = '<link rel="stylesheet" href="bundle.css">' if (BUILD / "bundle.css").exists() else ""
    (BUILD / "index.html").write_text(f'<!doctype html><html><head><meta charset="utf-8">{css}</head>'
                                      f'<body style="margin:0"><div id="root"></div><script type="module" src="bundle.js"></script></body></html>')


def render(page, size, out_png, wait_ms=1500, focus=None):
    """Render booth page `page` at `size` (CSS px) to out_png at 2x; return {visible text: [x, y, w, h]} in image pixels.
    focus: a visible label to scroll into the middle of its scroll area first (as an operator would scroll to it)."""
    from playwright.sync_api import sync_playwright
    if not (BUILD / "index.html").exists() or os.environ.get("BOOTH_REBUILD"):
        bundle()
    errors = []
    with sync_playwright() as p:
        b = p.chromium.launch(channel="chrome", args=["--allow-file-access-from-files"])  # installed Chrome, no extra download
        pg = b.new_page(viewport={"width": size[0], "height": size[1]}, device_scale_factor=SCALE)
        pg.on("pageerror", lambda e: errors.append(str(e)))
        pg.goto(f"file://{BUILD}/index.html#{page}")
        pg.wait_for_function("window.__mounted === true", timeout=15000)
        if focus:
            pg.evaluate('t => { const e = [...document.querySelectorAll("body *")].find(n => [...n.childNodes].some(c => c.nodeType === 3 && c.textContent.trim() === t)); if (!e) throw new Error("no " + t); e.scrollIntoView({ block: "center" }) }', focus)
        pg.wait_for_timeout(wait_ms)
        pg.screenshot(path=out_png)
        boxes = pg.evaluate(BOXES_JS)
        b.close()
    if errors:
        print("page errors:", *errors[:5], sep="\n  ", file=sys.stderr)
    return {t: [round(v * SCALE) for v in r] for t, r in boxes.items()}


if __name__ == "__main__" and sys.argv[1:] == ["--self-test"]:
    import os, tempfile
    from PIL import Image
    out = os.path.join(tempfile.mkdtemp(), "admin.png")
    boxes = render("admin", (1920, 1080), out)
    assert "Start on boot" in boxes, sorted(boxes)[:40]
    assert Image.open(out).size == (3840, 2160), Image.open(out).size
    x, y, w, h = boxes["Start on boot"]
    assert 0 <= x < 3840 and 0 <= y < 2160 and w > 0 and h > 0, boxes["Start on boot"]
    print("self-test OK")
elif __name__ == "__main__":
    page, out = sys.argv[1], sys.argv[2]
    print(json.dumps(render(page, (1920, 1080), out, focus=sys.argv[3] if len(sys.argv) > 3 else None)))
