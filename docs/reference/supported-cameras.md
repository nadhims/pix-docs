---
sidebar_position: 2
title: Supported Cameras
description: Canon EOS cameras tested with the Pix Desktop App, USB connection requirements, sideways mounts, and the webcam fallback.
tags: [reference, cameras, hardware]
---

# Supported Cameras

The Pix Desktop App captures photos with Canon EOS cameras connected by USB. It talks to the camera through Canon's own software kit, so exposure settings such as aperture, shutter speed and ISO are controlled from the kiosk's **Camera Settings** page.

## Which camera should you buy?

If you are not sure where to start, here is a rough guide by budget. Prices are approximate Indonesian market prices as of August 2026 and will drift over time (secondhand prices especially). Always check current pricing before buying.

| Tier | Model | Approx. price (IDR) | Why |
|---|---|---|---|
| **Low budget** | EOS 1200D (secondhand) | ~1.2 to 2.2 juta | Cheapest realistic USB-tetherable Canon EOS on the used market. Not on Canon's current lineup and not on the tested list below, but USB tethering support means it should work. A reasonable way to test the waters before investing more. |
| **Mid budget** | EOS R100 (new) | ~8.5 to 10 juta | Canon's current cheapest mirrorless. New with warranty, RF mount, a current product rather than a used-market gamble. Not on the tested list, but the same USB tethering logic applies. |
| **Upper-mid** | EOS R10 or EOS R8 (tested) | R10 ~18 juta, R8 ~21 juta | Both tested. R10 is APS-C; R8 steps up to full-frame for a relatively small jump in price. |
| **High budget** | EOS R6 Mark II (tested) | ~28 to 30 juta | Full-frame image quality and fast autofocus at roughly half the price of the EOS R5, whose resolution a photobooth does not need. The sensible top of the range. |

:::caution
These are approximate, point-in-time market prices (especially the secondhand 1200D). Treat them as a starting reference, not a quote.
:::

## Tested Canon EOS models

### Mirrorless (EOS R system)

| Model | Notes |
|---|---|
| EOS R | Full-frame, excellent image quality |
| EOS R5 | High resolution, fast autofocus |
| EOS R6 | Great low-light performance |
| EOS R6 Mark II | Updated autofocus, recommended |
| EOS R8 | Compact full-frame, good value |
| EOS R10 | APS-C, lightweight and affordable |

### DSLR

| Model | Notes |
|---|---|
| 5D Mark IV | Professional full-frame workhorse |
| 6D Mark II | Full-frame, budget-friendly |
| 90D | APS-C, fast and versatile |
| 80D | APS-C, reliable |
| 77D | APS-C, entry-level |
| 250D / Rebel SL3 | Compact, great starter camera |

:::tip
Most Canon EOS models with USB tethering should work, even if not listed above. If your camera supports Canon's EOS Utility for remote shooting, it will likely work with the Pix Desktop App.
:::

## USB connection

- Use the USB cable that came with your camera, or a high-quality replacement.
- Connect the camera directly to the computer's USB port. Avoid hubs when possible; they can introduce connection instability.
- USB 3.0 or faster is recommended for quicker image transfer.
- Set the camera body to **M**, **Av** or **Tv** so the kiosk can control exposure. Focus mode is set on the body.
- Quit Canon's EOS Utility or any other tethering software before launching the kiosk. Only one application can control the camera over USB at a time.

If the camera disconnects mid-session, the kiosk reconnects on its own. Capture waits on "Camera is warming up" and, if the camera does not respond within 30 seconds, ends the session and returns to the start screen.

## Sideways and upside-down mounts

If the camera is mounted rotated, for example a portrait-mounted body in a tall booth:

1. Open the operator menu and tap **Camera Settings**.
2. Under **CAPTURE**, set **CAMERA ROTATION** to 90, 180 or 270.

The live view, the crop guide and the captured photo all follow the rotation.

## Webcam fallback

Without a Canon EOS camera, the kiosk can use any built-in or external webcam, or a virtual camera such as OBS Virtual Camera on macOS. This is useful for testing your booth layout and flow before opening to guests, or for a lower-cost setup where DSLR quality is not required.

1. Open the operator menu and tap **Camera Settings**.
2. Under **CAMERA DEVICE**, pick the webcam instead of **Auto-detect**, and tap **Set as Default**.

Webcam captures are limited to the webcam's native resolution. For professional output, a Canon EOS camera is strongly recommended.

## Related

- [System Requirements](./system-requirements.md)
- [Supported Printers](./supported-printers.md)
- [Booth Operations Checklist](../guides/booth-operations-checklist.md)
