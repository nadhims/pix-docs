---
sidebar_position: 2
title: Supported Cameras
description: Canon EOS cameras tested with Pix, USB connection requirements, and webcam fallback.
tags: [reference, cameras, hardware]
---

# Supported Cameras

Pix captures photos using Canon EOS cameras connected via USB tethering. The Desktop App communicates with the camera through Canon's EDSDK, giving you full control over settings like aperture, shutter speed, and ISO directly from the app.

## Which Camera Should You Buy? (Budget Tiers)

If you're not sure where to start, here's a rough guide by budget. Prices are approximate Indonesian market prices and will drift over time (secondhand prices especially) -- always check current pricing before buying.

| Tier | Model | Approx. Price (IDR) | Why |
|---|---|---|---|
| **Low budget** | EOS 1200D (secondhand) | ~1.2-2.2 juta | Cheapest realistic USB-tetherable Canon EOS on the used market. Not on Canon's current lineup and not on Pix's officially tested list below, but EDSDK/USB tethering support means it should work -- a reasonable way to test the waters before investing more. |
| **Mid budget** | EOS R100 (new) | ~8.5-10 juta | Canon's current cheapest mirrorless. New with warranty, RF mount, genuinely current product -- not a used-market gamble. Not on the officially tested list, but the same EDSDK/USB tethering logic applies. |
| **Upper-mid** | EOS R10 or EOS R8 (tested) | R10 ~18 juta, R8 ~21 juta | Both officially tested. R10 is APS-C; R8 steps up to full-frame for a relatively small jump in price -- a good bridge if R6 Mark II feels like too big a leap. |
| **High budget** | EOS R6 Mark II (tested) | ~28-30 juta | Full-frame image quality and fast autofocus at roughly half the price of the EOS R5, which is priced closer to flagship territory for resolution a photobooth doesn't need. The sensible top of the recommended range. |

:::caution
These are approximate, point-in-time market prices (especially the secondhand 1200D) -- treat them as a starting reference, not a quote. Always check current prices with a retailer or marketplace before buying.
:::

## Tested Canon EOS Models

The following cameras have been tested and confirmed to work with Pix:

### Mirrorless (EOS R System)

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
Most Canon EOS models with USB tethering support should work with Pix, even if not listed above. If your camera supports Canon's EOS Utility for remote shooting, it will likely work with Pix.
:::

## USB Connection Requirements

- Use the USB cable that came with your camera, or a high-quality replacement.
- Connect the camera directly to your computer's USB port. Avoid USB hubs when possible, as they can introduce connection instability.
- USB 3.0 or faster is recommended for quicker image transfer.
- On macOS, the camera is managed by a native Swift sidecar process. On Windows, a .NET-based sidecar handles communication.

:::caution
Disable Canon's EOS Utility or any other tethering software before launching Pix. Only one application can control the camera over USB at a time.
:::

## Webcam Fallback

If you don't have a Canon EOS camera, Pix can use any built-in or external webcam as a capture device. This is useful for:

- Testing your booth layout and flow before opening to customers
- Running a lower-cost setup where DSLR quality isn't required

To switch to webcam mode, go to **Settings > Camera** in the Desktop App and select your webcam from the device list.

:::info
Webcam captures are limited to the webcam's native resolution. For professional-quality output, a Canon EOS camera is strongly recommended.
:::
