---
sidebar_position: 2
title: Webcam Fallback
description: Using a built-in camera, a USB webcam or a virtual camera as the capture source in the Pix Desktop App.
tags: [desktop-app, camera, webcam]
---

# Webcam Fallback

By the end of this page the booth is running on a webcam, a capture card or a virtual camera instead of a Canon body. This is the quickest way to test a booth, run a demo, or keep a booth going if the DSLR fails during opening hours.

## When to Use a Webcam

- **Testing and demos**: check the kiosk design, templates and printing without setting up a DSLR.
- **Casual setups** where print quality at large sizes is not the main point.
- **A backup** so the booth keeps taking photos if the Canon camera stops responding.

## Supported Sources

The app uses the operating system's own camera list, so anything the system recognises as a camera can be picked:

- Built-in laptop cameras (MacBook FaceTime camera, Windows laptop cameras)
- USB webcams
- USB capture cards that present themselves as a camera
- Virtual cameras such as OBS, which are discovered on macOS

## Setting Up

1. Plug in the webcam, or use the built-in camera.
2. Open the operator menu with two taps on the top-right corner and tap **Camera Settings**.
3. Under **CAMERA DEVICE**, leave **Auto-detect** on, or pick the camera you want from the list.
4. Tap **Set as Default** so the booth chooses the same camera after every restart.
5. Check the **STATUS** block: **Camera Name** shows the device in use and **Live View** shows it is streaming.

With **Auto-detect** on, the app prefers a Canon camera when one is connected and falls back to a webcam when it is not.

## What Works the Same

Everything in the photo session runs the same way on a webcam: countdown, per-photo adjust, filters, prints, GIF and live photo. Live photos taken on a webcam are mirrored the same way as the print, so the clip matches what the guest saw. **DIGITAL ZOOM**, **CAMERA ROTATION** and the live view aids on the Camera Settings page all apply to webcams too.

## Limitations

| Feature | Canon EOS | Webcam |
|---------|-----------|--------|
| Resolution | Full camera resolution | Typically 1080p to 4K |
| Exposure controls in the app | ISO, aperture, shutter, white balance | Limited or none |
| Image quality | JPEG from the sensor | A frame from the video stream |
| Focus | Set on the camera body | Managed by the webcam |

:::caution
Webcam captures are frames from a video stream, so large prints look noticeably softer than DSLR captures. If prints are your main product, use a Canon EOS camera.
:::

## Switching Back to Canon

Connect the Canon camera over USB and either restart the app or pick it under **CAMERA DEVICE**. With **Auto-detect** on, the Canon takes over on the next launch.

## Related

- [Canon EOS Setup](./canon-eos.md)
- [Camera Settings](./camera-settings.md)
- [Supported Cameras](../../reference/supported-cameras.md)
