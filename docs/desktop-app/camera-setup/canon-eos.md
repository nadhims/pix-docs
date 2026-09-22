---
sidebar_position: 1
title: Canon EOS Setup
description: How to connect a Canon EOS DSLR or mirrorless camera to the Pix Desktop App and set it up for a booth.
tags: [desktop-app, camera, canon]
---

# Canon EOS Camera Setup

By the end of this page your Canon EOS camera is connected over USB, the booth shows its live view, and the camera is set up to run unattended for a full day. A Canon body gives you full-resolution stills and remote control of exposure from the operator menu.

## Supported Models

Any Canon EOS body that Canon's EOS SDK supports works. The models we have tested are listed in [Supported Cameras](../../reference/supported-cameras.md). Among them:

- **DSLR**: EOS 6D Mark II, 5D Mark IV, 90D, 80D, 77D, Rebel T7/T8i
- **Mirrorless**: EOS R, R5, R6, R6 Mark II, R8, R50, R100, RP

If your model is not listed it will most likely still work. Connect it and the app tries to talk to it automatically.

## Before You Start

- A USB cable that fits your body (USB-A to Mini-B, or USB-C).
- No other camera software running. Canon's EOS Utility, Lightroom and similar tools claim the camera over USB, and only one program can hold it.

## Connecting the Camera

1. Turn the camera on and set the mode dial to **M**, **Av** or **Tv**. The app can only drive exposure in one of these modes; the Camera Settings page reminds you with "Set camera to M / Av / Tv mode for manual control".
2. Set focus on the camera body. Focus mode is not controlled from the app, so switch the lens to manual focus (MF) if the shooting distance is fixed.
3. Connect the camera to the computer with the USB cable.
4. Open the Pix Desktop App. The camera is detected automatically and the live view appears on the Start screen preview or the Capture screen.
5. Open the operator menu (two taps on the top-right corner) and tap **Camera Settings** to check the **STATUS** block: **Camera** and **Live View** should both read as connected.

If the camera drops out during the day the app reconnects on its own. See [Camera Settings](./camera-settings.md) for the exposure controls and live view aids.

## Mounting Sideways or Upside Down

Portrait booths often mount the camera on its side. Since version 1.1.107 a vertically mounted Canon no longer produces sideways stills, and the crop guide on screen follows the real camera frame. If the picture still comes out turned, set **CAMERA ROTATION** on the Camera Settings page to 90, 180 or 270 degrees. The rotation applies to the live view, the stills, the previews and the live photo.

## Tips for a Full Day

- **Power the camera from the mains** with a Canon AC adapter or a dummy battery. A battery will not last a day of live view.
- **Turn off auto power-off** on the camera body so it stays awake between guests.
- **Set image quality to JPEG Large** on the body. The app captures at the quality the camera is set to.
- **Keep the USB run short.** Use a powered USB hub if the cable is longer than about 2 metres; long cables are the most common cause of intermittent disconnects.
- **Lock focus to manual** once the framing is set, so the lens does not hunt between shots.

## Troubleshooting

If the camera is not detected:

1. Unplug the USB cable and plug it back in.
2. Quit any other software that could be holding the camera.
3. Try a different USB port, preferably one on the computer rather than a hub.
4. Restart the app.
5. On macOS, check **System Settings > Privacy & Security > Camera** and make sure Pix is allowed.

The **CAMERA LOG** at the bottom of the Camera Settings page shows what the app sees. See [Troubleshooting](../troubleshooting.md) for more.

## Related

- [Camera Settings](./camera-settings.md)
- [Webcam Fallback](./webcam-fallback.md)
- [Supported Cameras](../../reference/supported-cameras.md)
- [Troubleshooting](../troubleshooting.md)
