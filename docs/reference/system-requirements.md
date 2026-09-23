---
sidebar_position: 1
title: System Requirements
description: Minimum and recommended system requirements for the Pix Desktop App and the Pixture dashboard.
tags: [reference, requirements, hardware]
---

# System Requirements

## Pix Desktop App

The Pix Desktop App is the kiosk application. It runs on macOS and Windows. The current version is 1.1.115.

### Operating system

| Platform | Minimum | Recommended |
|---|---|---|
| macOS | 13 (Ventura) | 14 (Sonoma) or later |
| Windows | 10 (64-bit) | 11 |

### Hardware

| Component | Minimum | Recommended |
|---|---|---|
| Processor (macOS) | Apple Silicon or Intel | Apple Silicon (M1 or later) |
| Processor (Windows) | Core i3 / Ryzen 3 | Core i5 / Ryzen 5 or better |
| RAM | 8 GB | 16 GB |
| Graphics | Integrated (UHD / Radeon / Apple) | Dedicated GPU or Apple Silicon |
| Storage | 3 GB free (the kiosk warns below this and cleans up below 1 GB) | More, for photos and cache |
| Display | 1280 x 720 | 1080p or higher touchscreen |
| USB | USB 2.0 port (Canon camera) | USB 3.0 for faster tethering |

:::tip
For kiosk use, a touchscreen is strongly recommended. The Pix Desktop App is designed as a kiosk where guests interact directly with the screen.
:::

Apple Silicon Macs run the app natively from version 1.1.115, which bundles its own video tools for live photos, filters and GIFs. Rosetta is not needed.

### Network

- **Broadband internet** is required for pairing, template sync, photo uploads and updates.
- **Offline capture** works without connectivity. Photos queue locally and upload automatically when the connection returns.
- Minimum recommended speed: 5 Mbps upload for smooth photo syncing between photo sessions.

:::caution
The share page (QR code sharing) needs the booth to upload. If a venue's Wi-Fi is unreliable, bring a phone hotspot as a backup; the kiosk keeps capturing and printing in the meantime.
:::

### Camera

A Canon EOS camera connected by USB is the primary capture method. A built-in or USB webcam works too, as do virtual cameras such as OBS Virtual Camera on macOS. Cameras mounted sideways or upside down are handled by the **CAMERA ROTATION** setting under **Camera Settings** in the operator menu. See [Supported Cameras](./supported-cameras.md).

### Printer (optional)

A photo printer connected by USB or over the network. Dye-sublimation (DNP, HiTi, Mitsubishi) is the photobooth standard, and inkjet photo printers also work. Several booths can share one printer; see [Sharing One Printer Between Booths](../guides/shared-printer.md). See [Supported Printers](./supported-printers.md) for tested models and print sizes.

## Pixture Dashboard

The Pixture dashboard at pixture.io is where you set up booths, design templates and screens, watch health and manage billing, from any browser. Nothing to install.

| Requirement | Detail |
|---|---|
| Browser | Latest version of Chrome, Safari, Firefox, or Edge |
| Devices | Any desktop, laptop, tablet, or phone |
| Network | Internet connection required |

The dashboard is a management tool, not a capture app. You still need the Pix Desktop App to run a booth.

## Related

- [Supported Cameras](./supported-cameras.md)
- [Supported Printers](./supported-printers.md)
- [Plans & Pricing](../pricing/plans.md)
