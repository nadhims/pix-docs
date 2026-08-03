---
sidebar_position: 2
title: Webcam Fallback
description: Using a built-in or USB webcam as an alternative camera source in the Pix Desktop App.
tags: [desktop-app, camera, webcam]
---

# Webcam Fallback

If you do not have a Canon EOS camera available, the Pix Desktop App can use any standard webcam as a capture source. This is useful for demos, testing, and casual setups.

## When to Use a Webcam

- **Testing and demos** -- quickly verify your booth setup without connecting a DSLR.
- **Casual setups** -- where maximum image quality is not critical.
- **Backup** -- if your primary Canon camera fails during operating hours, a webcam keeps the booth running.

## Supported Webcams

The app uses the system's standard camera APIs, so any webcam recognized by your operating system will work:

- Built-in laptop cameras (MacBook FaceTime camera, Windows laptop cameras)
- USB webcams (Logitech, Razer, etc.)
- USB capture cards presenting as camera devices

## Setting Up

1. Plug in your USB webcam (or use the built-in camera).
2. Open the Pix Desktop App. If no Canon camera is detected, the app automatically falls back to the available webcam.
3. You can also manually select the webcam from **Settings > Camera Source**.

<!-- Screenshot: Camera source selection in settings -->

:::tip
If you have multiple webcams connected, use the camera source dropdown in Settings to pick the one you want.
:::

## Limitations

Compared to a Canon EOS setup, webcams have some restrictions:

| Feature | Canon EOS | Webcam |
|---------|-----------|--------|
| Resolution | Up to 45 MP | Typically 1080p-4K |
| Manual controls | Full (ISO, aperture, shutter) | Limited or none |
| Image quality | RAW/JPEG from sensor | Compressed video frame |
| Live view | High quality via EDSDK | Standard video stream |
| Focus control | AF + MF via app | Camera-managed only |

:::caution
Webcam captures are extracted from the video stream, so print quality at large sizes may be noticeably lower than DSLR captures. For locations where prints are a primary offering, a Canon EOS camera is strongly recommended.
:::

## Switching Back to Canon

Connect your Canon camera via USB and restart the app. The app prioritizes Canon cameras over webcams when both are available.
