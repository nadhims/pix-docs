---
sidebar_position: 2
title: Sony Alpha Setup
description: Connect a Sony Alpha or ZV camera to the Pix Desktop App over USB, on Mac or Windows, and set it up for a booth.
tags: [desktop-app, camera, sony]
---

# Sony Alpha Camera Setup

The Pix Desktop App drives Sony Alpha and ZV bodies over USB, on both Mac and Windows. You get the camera's live view on the booth screen, full-resolution stills, and exposure control from the booth's **Camera Settings** page, the same as with a Canon. By the end of this page your Sony is connected and ready for a full day.

## Supported Models

These are the Sony bodies the app supports:

| Series | Models |
|---|---|
| Full-frame | A7 IV, A7 V, A7C, A7C II, A7CR, A7R IV, A7R V, A7R VI, A7S III, A9 II, A9 III, A1, A1 II |
| APS-C | A6700 |
| Vlog | ZV-E10 II, ZV-E1 |
| Cinema Line | FX series |

**Not supported:** A6400, A6600, A7 III and the first ZV-E10. Sony does not offer remote control for them. For those bodies, use a webcam or capture card instead; see [Webcam Fallback](./webcam-fallback.md).

## Before You Start

- **Update the camera to the latest firmware** from Sony's support site. Older firmware may not connect.
- **A USB cable** to the camera's USB-C port, connected straight to the computer.
- **No other camera software running.** Sony Imaging Edge, Lightroom and similar tools claim the camera over USB, and only one program can hold it.
- **On Windows, install the Sony driver once** (below).

## Connecting the Camera

1. On the camera, turn on **PC Remote** for USB. The menu name varies by model: look for **USB Connection Mode** or **PC Remote Function** in the Setup or Network menu.
2. Set the mode dial to **M**, **A** or **S**. The app can only drive exposure in one of these modes; the Camera Settings page reminds you with "Set camera to M / A / S mode for manual control".
3. Connect the camera to the computer with the USB cable and turn it on.
4. Open the Pix Desktop App. The camera is detected within a few seconds and its live view appears.
5. Open the operator menu (two taps on the top-right corner), tap **Camera Settings**, and check the **STATUS** block: **Camera** and **Live View** should both read as connected. If more than one camera is plugged in, pick the Sony under **CAMERA DEVICE** and tap **Set as Default**.

### Windows: install the Sony driver

Windows needs Sony's USB driver before it can see the camera. The app includes it:

1. Open the operator menu and tap **Camera Settings**.
2. Tap **Show Diagnostics**, then **Install Sony Driver**.
3. Approve the Windows prompt. The button changes to **Sony Driver Installed**.
4. Unplug the camera and plug it back in.

You only do this once per computer. The Mac needs no driver.

## Camera Settings

With a Sony connected, **CAMERA SETTINGS** on the Camera Settings page shows ISO, aperture, shutter speed and white balance, plus a **COLOR TEMPERATURE** slider when white balance is set to colour temperature. Mirror, rotation, digital zoom, hand sign detection, GIFs and live photos work the same as with any other camera. See [Camera Settings](./camera-settings.md).

## Tips for a Full Day

- **Power the camera from the mains** with Sony's AC adapter or a dummy battery. A battery will not last a day of live view.
- **Turn off auto power-off** and set the power-save start time to the longest option, so the camera stays awake between guests.
- **Set image quality to JPEG** (Fine or Extra Fine) on the body.
- **Keep the USB run short.** Use a powered USB hub if the cable is longer than about 2 metres.
- **Lock focus to manual** once the framing is set, so the lens does not hunt between shots.

## Troubleshooting

| Symptom | Fix |
|---|---|
| The camera is not detected on Windows | Install the Sony driver (above), then replug the camera |
| The camera is not detected on any computer | Check the USB mode is **PC Remote**, the firmware is current, and no other camera software is open. The app looks for a Sony every 5 seconds, so give it a moment after plugging in |
| Exposure controls are greyed out | Set the mode dial to **M**, **A** or **S** |
| Your model is not in the list above | Sony does not offer remote control for it. Use [Webcam Fallback](./webcam-fallback.md) |

The **CAMERA LOG** at the bottom of the Camera Settings page shows what the app sees. See [Troubleshooting](../troubleshooting.md) for more.

## Related

- [Camera Settings](./camera-settings.md)
- [Supported Cameras](../../reference/supported-cameras.md)
- [Nikon Z Setup](./nikon-z.md)
- [Fujifilm Setup](./fujifilm.md)
