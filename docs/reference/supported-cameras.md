---
sidebar_position: 2
title: Supported Cameras
description: The Canon, Sony, Nikon and Fujifilm cameras the Pixture Photobooth app supports over USB, USB connection requirements, sideways mounts, and the webcam fallback.
tags: [reference, cameras, hardware]
---

# Supported Cameras

The Pixture Photobooth app captures photos with a camera body connected by USB, on Mac and Windows. It controls the camera directly, so the live view appears on the booth screen and exposure settings such as aperture, shutter speed and ISO are controlled from the booth's **Camera Settings** page.

| Brand | Supported bodies | Setup |
|---|---|---|
| **Canon** | Every model on Canon's EDSDK supported list: practically all EOS DSLRs from the 40D / 1000D on, the EOS R line, the newer EOS M bodies and some PowerShots ([full list below](#supported-canon-models)). Not the older EOS M bodies (M, M2, M3, M5, M6, M10, M100). | [Canon EOS Setup](../desktop-app/camera-setup/canon-eos.md) |
| **Sony** | A7 IV/V, A7C/C II/CR, A7R IV to VI, A7S III, A9 II/III, A1/A1 II, A6700, ZV-E10 II, ZV-E1, FX series | [Sony Alpha Setup](../desktop-app/camera-setup/sony-alpha.md) |
| **Nikon** | Z9, Z8, Z6III, Z7II, Z6II, Z7, Z6, Z5II, Z5, Zf, ZR, Z50II, Z50, Z30, Zfc (Z mirrorless only) | [Nikon Z Setup](../desktop-app/camera-setup/nikon-z.md) |
| **Fujifilm** | X-H2S, X-H2, X-T5, X-S20, X-M5, GFX100 II, GFX100S II, GFX100RF, plus X-T3, X-T4, X-Pro3, X-S10, GFX 50S, GFX 50R, GFX100, GFX100S, GFX50S II | [Fujifilm Setup](../desktop-app/camera-setup/fujifilm.md) |

Not supported: Sony A6400, A6600, A7 III and the first ZV-E10, and Nikon D-series DSLRs, because the makers do not offer remote control for them. For those, use the [webcam fallback](#webcam-fallback) with a capture card.

## Which camera should you buy?

The guide below uses Canon models because they are the easiest to find new and secondhand in Indonesia. A supported Sony, Nikon or Fujifilm body at a similar price works just as well.

If you are not sure where to start, here is a rough guide by budget. Prices are approximate Indonesian market prices as of August 2026 and will drift over time (secondhand prices especially). Always check current pricing before buying.

| Tier | Model | Approx. price (IDR) | Why |
|---|---|---|---|
| **Low budget** | EOS 1200D (secondhand) | ~1.2 to 2.2 juta | Cheapest realistic USB-tetherable Canon EOS on the used market. Not on Canon's current lineup, but on Canon's supported list, so it works. A reasonable way to test the waters before investing more. |
| **Mid budget** | EOS R100 (new) | ~8.5 to 10 juta | Canon's current cheapest mirrorless. New with warranty, RF mount, a current product rather than a used-market gamble. On Canon's supported list. |
| **Upper-mid** | EOS R10 or EOS R8 (tested) | R10 ~18 juta, R8 ~21 juta | Both tested. R10 is APS-C; R8 steps up to full-frame for a relatively small jump in price. |
| **High budget** | EOS R6 Mark II (tested) | ~28 to 30 juta | Full-frame image quality and fast autofocus at roughly half the price of the EOS R5, whose resolution a photobooth does not need. The sensible top of the range. |

:::caution
These are approximate, point-in-time market prices (especially the secondhand 1200D). Treat them as a starting reference, not a quote.
:::

## Supported Canon models

Canon cameras are controlled through Canon's own SDK (EDSDK 13.19.10, the version the Pixture app ships). Every model Canon lists as supported works, including older bodies such as the EOS 1100D, 1200D and 600D. Canon's list, as of May 2025:

**EOS R mirrorless:** EOS R1, R3, R5, R5 Mark II, R6, R6 Mark II, R7, R8, R10, R50, R50 V, R100, R, RP, Ra.

**EOS DSLRs:**

- Full frame: EOS-1D X Mark III, 1D X Mark II, 1D X, 1D C, 1D Mark IV, 1D Mark III, 1Ds Mark III, 5D Mark IV, 5DS, 5DS R, 5D Mark III, 5D Mark II, 6D Mark II, 6D
- APS-C: EOS 90D, 80D, 70D, 60D, 50D, 40D, 7D Mark II, 7D, 77D (9000D), 850D (Rebel T8i / Kiss X10i), 800D (T7i / X9i), 760D (T6s / 8000D), 750D (T6i / X8i), 700D (T5i / X7i), 650D (T4i / X6i), 600D (T3i / X5), 550D (T2i / X4), 500D (T1i / X3), 450D (XSi / X2)
- Compact and entry: EOS 250D / 200D II (SL3 / X10), 200D (SL2 / X9), 100D (SL1 / X7), 2000D / 1500D (T7 / X90), 4000D / 3000D (T100), 1300D (T6 / X80), 1200D (T5 / X70 / Hi), 1100D (T3 / X50), 1000D (XS / Kiss F)

**EOS M mirrorless:** EOS M50, M50 Mark II (Kiss M / Kiss M2), M200, M6 Mark II.

**PowerShot:** V10 (firmware 1.1.0 or later), ZOOM (firmware 1.1.2 or later), G7 X Mark III, G5 X Mark II, SX70 HS.

**Not supported:** the older EOS M bodies (EOS M, M2, M3, M5, M6, M10, M100). Canon's SDK connects to them but does not offer remote capture, so the booth cannot shoot with them; use the [webcam fallback](#webcam-fallback) instead.

Models we have also run on our own booths: EOS R, R5, R6, R6 Mark II, R8, R10, 5D Mark IV, 6D Mark II, 90D, 80D, 77D and 250D.

## USB connection

- Use the USB cable that came with your camera, or a high-quality replacement.
- Connect the camera directly to the computer's USB port. Avoid hubs when possible; they can introduce connection instability.
- USB 3.0 or faster is recommended for quicker image transfer.
- Set the camera to a manual-capable mode (**M**, **Av** or **Tv** on a Canon, **M**, **A** or **S** on a Sony or Nikon) so the booth can control exposure. Focus mode is set on the body.
- Some bodies need a USB mode: **PC Remote** on a Sony, **USB TETHER SHOOTING AUTO** on a Fujifilm. Sony on Windows also needs a one-time driver install. See each brand's setup page.
- Quit the maker's own tethering software (Canon EOS Utility, Sony Imaging Edge, Nikon NX Tether, Fujifilm X Acquire) and Lightroom before launching the booth. Only one application can control the camera over USB at a time.

If the camera disconnects mid-session, the booth reconnects on its own. Capture waits on "Camera is warming up" and, if the camera does not respond within 30 seconds, ends the session and returns to the start screen.

## Sideways and upside-down mounts

If the camera is mounted rotated, for example a portrait-mounted body in a tall booth:

1. Open the operator menu and tap **Camera Settings**.
2. Under **CAPTURE**, set **CAMERA ROTATION** to 90, 180 or 270.

The live view, the crop guide and the captured photo all follow the rotation.

## Webcam fallback

Without a supported camera body, the booth can use any built-in or external webcam, or a virtual camera such as OBS Virtual Camera on macOS. This is useful for testing your booth layout and flow before opening to customers, or for a lower-cost setup where DSLR quality is not required.

1. Open the operator menu and tap **Camera Settings**.
2. Under **CAMERA DEVICE**, pick the webcam instead of **Auto-detect**, and tap **Set as Default**.

Webcam captures are limited to the webcam's native resolution. For professional output, a supported camera body is strongly recommended.

## Related

- [System Requirements](./system-requirements.md)
- [Supported Printers](./supported-printers.md)
- [Booth Operations Checklist](../guides/booth-operations-checklist.md)
