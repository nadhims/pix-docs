---
sidebar_position: 3
title: Nikon Z Setup
description: Connect a Nikon Z mirrorless camera to the Pix Desktop App over USB with Nikon's official Remote SDK, on Mac or Windows, and set it up for a booth.
tags: [desktop-app, camera, nikon]
---

# Nikon Z Camera Setup

The Pix Desktop App drives Nikon Z mirrorless bodies over USB through Nikon's official Remote SDK, on both Mac and Windows. You get the camera's live view on the booth screen, full-resolution stills, and exposure control from the kiosk's **Camera Settings** page. By the end of this page your Nikon is connected and ready for a full day.

## Supported Models

| Series | Models |
|---|---|
| Full-frame | Z9, Z8, Z6III, Z7II, Z6II, Z7, Z6, Z5II, Z5, Zf, ZR |
| APS-C (DX) | Z50II, Z50, Z30, Zfc |

**Nikon DSLRs (the D series) are not supported.** Nikon's Z-series SDK covers mirrorless bodies only. For a D-series camera, use a webcam or capture card instead; see [Webcam Fallback](./webcam-fallback.md).

The computer needs **Windows 11 (64-bit)** or **macOS 13 or newer**.

## Before You Start

- **A USB cable** to the camera's USB-C port, connected straight to the computer. No driver install is needed on either Mac or Windows.
- **Close Nikon's own software.** NX Tether, Camera Control Pro 2 and Nikon Transfer 2 claim the camera, and only one program can hold it. Close Lightroom's tethering too.

## Connecting the Camera

1. Set the mode dial (or the photo mode) to **M**, **A** or **S**. The app can only drive exposure in one of these modes; the Camera Settings page reminds you with "Set camera to M / A / S mode for manual control".
2. Connect the camera to the computer with the USB cable and turn it on.
3. Open the Pix Desktop App. The camera is detected and its live view appears.
4. Open the operator menu (two taps on the top-right corner), tap **Camera Settings**, and check the **STATUS** block: **Camera** and **Live View** should both read as connected. If more than one camera is plugged in, pick the Nikon under **CAMERA DEVICE** and tap **Set as Default**.

The app only loads Nikon's software when a Nikon camera is plugged in, so a booth with a Canon or Sony is not affected by it.

## Camera Settings

With a Nikon connected, **CAMERA SETTINGS** on the Camera Settings page shows ISO, aperture, shutter speed and white balance, plus a **COLOR TEMPERATURE** slider when white balance is set to a Kelvin value. Your settings are remembered by their real values, so changing the lens or the exposure mode never shifts a saved aperture or ISO to a different one. Mirror, rotation, digital zoom, hand sign detection, GIFs and live photos work the same as with any other camera. See [Camera Settings](./camera-settings.md).

## Tips for a Full Day

- **Power the camera from the mains** with Nikon's power adapter (or a dummy battery with a power supply). A battery will not last a day of live view.
- **Set the standby timer to its longest setting**, so the camera stays awake between guests.
- **Set image quality to JPEG** (Fine) on the body.
- **Keep the USB run short.** Use a powered USB hub if the cable is longer than about 2 metres.
- **Lock focus to manual** once the framing is set, so the lens does not hunt between shots.

## Troubleshooting

| Symptom | Fix |
|---|---|
| The camera is not detected | Close NX Tether, Camera Control Pro 2, Nikon Transfer 2 and any tethering app, then replug the camera |
| A D-series DSLR is not detected | Nikon DSLRs are not supported. Use [Webcam Fallback](./webcam-fallback.md) |
| Exposure controls are greyed out | Set the camera to **M**, **A** or **S** |

The **CAMERA LOG** at the bottom of the Camera Settings page shows what the app sees. See [Troubleshooting](../troubleshooting.md) for more.

## Related

- [Camera Settings](./camera-settings.md)
- [Supported Cameras](../../reference/supported-cameras.md)
- [Sony Alpha Setup](./sony-alpha.md)
- [Fujifilm Setup](./fujifilm.md)
