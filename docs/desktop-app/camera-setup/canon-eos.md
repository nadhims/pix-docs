---
sidebar_position: 1
title: Canon EOS Setup
description: How to connect and configure a Canon EOS DSLR or mirrorless camera with the Pix Desktop App.
tags: [desktop-app, camera, canon, edsdk]
---

# Canon EOS Camera Setup

The Pix Desktop App supports Canon EOS cameras via Canon's EDSDK (EOS Digital SDK) over a direct USB connection. This gives you full-resolution captures and remote control of camera settings.

## Supported Models

Any Canon EOS body supported by Canon's EOS Digital SDK works; see [Supported Cameras](../../reference/supported-cameras.md) for the models we have tested.

- **DSLR**: EOS 6D Mark II, 5D Mark IV, 90D, 80D, 77D, Rebel T7/T8i
- **Mirrorless**: EOS R, R5, R6, R6 Mark II, R8, R50, R100, RP

:::info
If your specific model is not listed, it will likely still work as long as it supports Canon's EOS SDK. Connect it and the app will attempt to communicate with it automatically.
:::

## Connecting Your Camera

1. **Turn on** your Canon camera and set the mode dial to **M** (Manual) or **Av** (Aperture Priority).
2. **Connect** the camera to your computer using a USB cable (USB-A to Mini-B or USB-C, depending on your camera model).
3. **Launch** the Pix Desktop App. The app detects the camera automatically and shows a live preview.

<!-- Screenshot: Camera connected indicator in the app -->

:::caution
Do not open Canon's EOS Utility or any other tethering software at the same time. Only one application can control the camera over USB. Quit other camera software before launching Pix.
:::

## Tips for Best Results

- **Use a powered USB hub** if your cable run is longer than 2 meters. Long cables can cause intermittent disconnects.
- **Disable auto power-off** on the camera so it stays awake during operating hours.
- **Use AC power** (Canon AC adapter or dummy battery) instead of a battery for extended photo sessions.
- **Set image quality to JPEG Large** on the camera body. The app captures at the camera's configured quality setting.
- **Lock the lens focus** to manual (MF) if your shooting distance is fixed -- this avoids autofocus hunting between shots.

## Troubleshooting

If the camera is not detected:

1. Unplug and replug the USB cable.
2. Check that no other software (EOS Utility, Lightroom) has claimed the camera.
3. Try a different USB port. Prefer ports directly on the computer over hubs.
4. Restart the app.

See [Troubleshooting](../troubleshooting.md) for additional camera diagnostics.
