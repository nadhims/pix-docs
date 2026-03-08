---
sidebar_position: 2
title: Supported Cameras
description: Canon EOS cameras tested with Pix, USB connection requirements, and webcam fallback.
tags: [reference, cameras, hardware]
---

# Supported Cameras

Pix captures photos using Canon EOS cameras connected via USB tethering. The Desktop App communicates with the camera through Canon's EDSDK, giving you full control over settings like aperture, shutter speed, and ISO directly from the app.

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

- Testing your booth layout and flow before an event
- Running a lower-cost setup where DSLR quality isn't required

To switch to webcam mode, go to **Settings > Camera** in the Desktop App and select your webcam from the device list.

:::info
Webcam captures are limited to the webcam's native resolution. For professional-quality output, a Canon EOS camera is strongly recommended.
:::
