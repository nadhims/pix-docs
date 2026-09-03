---
sidebar_position: 6
title: Operator Menu & Admin Panel
description: Open the kiosk's hidden operator menu, protect it with a PIN, and use its Camera, Printer, Capture, API, and Admin pages.
tags: [desktop-app, admin, settings, operator]
---

# Operator Menu & Admin Panel

The kiosk hides its settings behind an operator menu so customers never see them.

## Opening the Menu

**Double-tap the top-right corner** of the kiosk screen (two taps within three seconds). If a **Menu Access PIN** is set for your organization (**Dashboard > Settings > Security**), enter it. Set a PIN on every booth in a public place.

The menu shows the booth name, the current **Pix version**, the update status, and five pages:

| Page | What is there |
|---|---|
| **Camera Settings** | Camera device (Canon or webcam), digital zoom, Canon exposure controls, hand sign detection. See [Camera Settings](./camera-setup/camera-settings.md) |
| **Printer Settings** | Printer device, media size, orientation, copies per session, print alignment, test print. See [Printer Setup](./printer-setup.md) |
| **Capture Settings** | Countdown, session timing, and capture options that live on the kiosk |
| **API Settings** | Coin key, local Hardware API, F13 behaviour. See [Hardware Payments](./hardware-payments.md) |
| **Admin** | Upload queue, storage, logs, and app controls |

Most settings are saved on the device; templates, kiosk design, filters, and pricing come from the dashboard.

When the computer is watermarked, the menu also offers **Use a pass on this device** and the free 3-day Pix Pro trial, so you can license a booth at the venue without opening the dashboard. See [Device Management](../dashboard/device-management.md).

## The Admin Page

- **Upload queue** -- every photo session waiting to upload, with its state: Queued, Uploading, Done, Retrying, or Failed. Failed items can be retried or cleared.
- **Storage** -- how much disk the kiosk is using. Photos and clips are kept for 7 days after they upload, then removed automatically. When disk space runs low the kiosk warns you here and on the start screen, with a **Free Up Space** button; below about 1 GB free it cleans up on its own. Uploaded photos are always safe in the cloud.
- **Logs** -- copy recent logs for support.
- **App controls** -- restart the app, leave kiosk mode, or unpair the device.

## Leaving the Menu

Tap **Back to booth**. The kiosk returns to the start screen; nothing in the menu is visible to customers.

:::tip Windowed mode for setup
For first-time setup on a laptop it is easier to run the app windowed. The menu's app controls toggle kiosk fullscreen; the app returns to fullscreen automatically after a software update.
:::
