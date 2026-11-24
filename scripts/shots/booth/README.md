# Booth screens for the docs

Renders Pixture Photobooth pages in a hidden browser with a fake booth behind them: no camera, no printer,
no network (the live Pixture API is never called), and no full-screen app on anyone's Mac.

```bash
export BOOTH_SRC=<pix-booth checkout at the released commit>   # src/ is enough
export BOOTH_NM=<node_modules installed from the same package-lock.json>
export BOOTH_BUILD=/tmp/booth-render BOOTH_REBUILD=1            # rebuild after changing entry.tsx / fake-api.ts
python3 scripts/shots/booth/render.py --self-test
python3 scripts/shots/booth/render.py camera out.png "EXTERNAL FLASH"   # page, output, label to scroll to
```

Pages: `admin`, `camera`, `menu`, `pin` (add more in `entry.tsx`). `render()` returns `{label: [x, y, w, h]}` in
image pixels for `markers.py`. Everything shown is made up: "Sunny Side Mall Kiosk 1", a Canon EOS 250D,
a DNP printer. Set `window.__SAMPLE` to a data URL of a sample picture for the live view (never a customer's photo).
