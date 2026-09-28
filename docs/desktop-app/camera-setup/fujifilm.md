---
sidebar_position: 4
title: Fujifilm Setup
description: Connect a Fujifilm X or GFX camera to the Pix Desktop App over USB with Fujifilm's official Camera Control SDK, on Mac or Windows, and set it up for a booth.
tags: [desktop-app, camera, fujifilm]
---

# Fujifilm Camera Setup

The Pix Desktop App drives Fujifilm X and GFX bodies over USB through Fujifilm's official X Camera Control SDK, on both Mac and Windows. You get the camera's live view on the booth screen, full-resolution stills, and exposure control from the kiosk's **Camera Settings** page. By the end of this page your Fujifilm is connected and ready for a full day.

## Supported Models

| Group | Models | How the camera behaves |
|---|---|---|
| Current bodies | X-H2S, X-H2, X-T5, X-S20, X-M5, GFX100 II, GFX100S II, GFX100RF | The camera's own dials and buttons keep working while it is connected |
| Older bodies | X-T3, X-T4, X-Pro3, X-S10 (firmware 2.00 or newer), GFX 50S (firmware 1.00 or 1.01), GFX 50R, GFX100, GFX100S, GFX50S II | The computer takes control while connected: the camera's own controls, including its shutter button, are locked until you disconnect |

No driver install is needed on either Mac or Windows.

## Before You Start

- **A USB cable** to the camera's USB-C port, connected straight to the computer.
- **Close other tethering software.** Fujifilm X Acquire, Lightroom tethering and similar tools claim the camera, and only one program can hold it.
- **Set the image format to JPEG** (Fine), or JPEG + RAW. The app cannot take HEIF: a HEIF shot is dropped. If the body is set to RAW only, the app switches it to JPEG Fine by itself.

## Connecting the Camera

1. On the camera, set the connection mode to **USB TETHER SHOOTING AUTO** ("PC SHOOT AUTO" on older bodies). It is under **NETWORK/USB SETTING > SELECT CONNECTION SETTING**, or **CONNECTION MODE**, depending on the model. Other USB modes, such as webcam or RAW conversion, do not work with the booth.
2. Connect the camera to the computer with the USB cable and turn it on.
3. Open the Pix Desktop App. The camera is detected and its live view appears.
4. Open the operator menu (two taps on the top-right corner), tap **Camera Settings**, and check the **STATUS** block: **Camera** and **Live View** should both read as connected. If more than one camera is plugged in, pick the Fujifilm under **CAMERA DEVICE** and tap **Set as Default**.

On connect, the app sets the camera's focus priority to **Release**, so a shot still fires if focus is not perfect. A booth photo beats no photo.

## Camera Settings

With a Fujifilm connected, **CAMERA SETTINGS** on the Camera Settings page shows ISO, aperture, shutter speed, white balance and exposure compensation, plus a **COLOR TEMPERATURE** slider when white balance is set to a Kelvin value. Mirror, rotation, digital zoom, hand sign detection, GIFs and live photos work the same as with any other camera. See [Camera Settings](./camera-settings.md).

## Tips for a Full Day

- **Power the camera from the mains** with Fujifilm's AC power adapter or a dummy battery. A battery will not last a day of live view.
- **Turn off auto power-off** so the camera stays awake between guests.
- **Keep the USB run short.** Use a powered USB hub if the cable is longer than about 2 metres.
- **Lock focus to manual** once the framing is set, so the lens does not hunt between shots.
- On an older body, remember its buttons are locked while the booth is connected: change settings from the kiosk, or unplug first.

## Troubleshooting

| Symptom | Fix |
|---|---|
| The camera is not detected | Set the connection mode to **USB TETHER SHOOTING AUTO** (or **PC SHOOT AUTO**), close other tethering software, then replug |
| A shot is taken but no photo appears | The body is set to HEIF. Switch the image format to JPEG |
| The camera's buttons do nothing while connected | Expected on the older bodies listed above; the computer has control. Unplug to use the camera by hand |

The **CAMERA LOG** at the bottom of the Camera Settings page shows what the app sees. See [Troubleshooting](../troubleshooting.md) for more.

## Related

- [Camera Settings](./camera-settings.md)
- [Supported Cameras](../../reference/supported-cameras.md)
- [Sony Alpha Setup](./sony-alpha.md)
- [Nikon Z Setup](./nikon-z.md)
