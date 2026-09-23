---
sidebar_position: 3
title: Camera Settings
description: Every control on the kiosk's Camera Settings page, from live view aids and Canon exposure to digital zoom, rotation and hand sign detection.
tags: [desktop-app, camera, settings, exposure]
---

# Camera Settings

This page walks through the Camera Settings page on the booth, section by section, so you can dial the camera in once and leave it. Open it from the operator menu: tap the top-right corner twice, enter the PIN if one is set, then tap **Camera Settings**. Everything here is saved on the booth computer and survives re-pairing and updates.

## Live Preview Aids

Toggles at the top of the page overlay helpers on the live preview while you set up. They are for you, not the guest:

- **Grid Lines** for framing.
- **Center Marker** to line up the subject.
- **Histogram** to spot blown highlights and crushed shadows.
- **Camera Level** to check the camera is straight.
- **Zebra (Overexposure)** stripes over areas that are clipping.

## CAMERA DEVICE

Choose **Auto-detect** or a specific camera from the list, then tap **Set as Default** so the booth uses the same one after every restart. With Auto-detect on, a connected Canon camera is preferred over a webcam. See [Webcam Fallback](./webcam-fallback.md).

## CAMERA CONTROLS (Canon)

With a Canon EOS camera connected, this section shows the camera's exposure properties: ISO, aperture, shutter speed and white balance. The page notes "Set camera to M / Av / Tv mode for manual control": in other modes the camera ignores what the app sends. Focus mode is set on the camera body, not here.

When white balance is set to **K**, a **COLOR TEMPERATURE** slider appears so you can match the venue lighting exactly.

Starting points that work for most booths:

- **ISO** 100 to 400 with studio flash or strong continuous light; 800 to 1600 in ambient venue light.
- **Aperture** f/5.6 to f/8 keeps a group sharp; f/2.8 to f/4 gives a softer background for single portraits.
- **Shutter speed** 1/125 or faster so moving guests are not blurred.
- **White balance** Auto for mixed lighting, Flash with strobes, or K when you want it fixed.

Sliders on this page (and on the Printer and Capture pages) accept a typed value, and a double-click resets one to its default.

## CAPTURE

- **DIGITAL ZOOM** crops into the frame when you cannot move the camera closer. It applies to the live view, the stills and the live photo.
- **CAMERA ROTATION** (0, 90, 180 or 270) turns the picture when the camera is mounted sideways or upside down. The page says it plainly: "Rotate the picture when the camera is mounted sideways or upside down."
- **HAND SIGN DETECTION** watches the live view for hand gestures. The page describes it as detecting hand gestures on the live view to trigger capture and visual effects. It has two sub-options:
  - **PEACE SIGN TRIGGER**: holding a peace sign for about 1.5 seconds starts the capture countdown, so guests can shoot without touching the screen.
  - **RETRO PORTAL EFFECT**: adds a visual effect on the live view when a sign is detected. Off by default.
- **RECORDED MOTION (EXPERIMENTAL)** builds live photos from a recording of the live view, including the hand effects. With it off, live photos are still made from the live view frames around each shot, just without the effects.

:::tip
For a fixed booth, set exposure once, switch the lens to manual focus and leave everything alone. Consistent settings are what make a day's prints look like one set.
:::

## STATUS and CAMERA LOG

The **STATUS** block shows **Sidecar** (the camera helper process), **Camera**, **Camera Name**, **Live View** and the last **Error**. When a camera is not behaving, this is the first place to look, followed by the **CAMERA LOG** at the bottom of the page, which lists what the app has seen from the camera. Support may ask you for this log.

Tap **Back to Menu** to leave the page. Camera settings only cover the camera itself; countdown length, session time and capture triggers are page settings in the Pix Design UI Editor, and video recording settings live on the booth's Capture Settings page during an event. See [Capture Modes](../session-flow/capture-modes.md).

## Related

- [Canon EOS Setup](./canon-eos.md)
- [Webcam Fallback](./webcam-fallback.md)
- [Capture Modes](../session-flow/capture-modes.md)
- [Troubleshooting](../troubleshooting.md)
