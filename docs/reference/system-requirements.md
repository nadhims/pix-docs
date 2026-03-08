---
sidebar_position: 1
title: System Requirements
description: Minimum and recommended system requirements for the Pix Desktop App and iOS Dashboard.
tags: [reference, requirements, hardware]
---

# System Requirements

## Pix Desktop App

The Pix Desktop App is an Electron-based kiosk application that runs on macOS and Windows.

### Operating System

| Platform | Minimum | Recommended |
|---|---|---|
| macOS | 13 (Ventura) | 14 (Sonoma) or later |
| Windows | 10 (64-bit) | 11 |

### Hardware

| Component | Minimum | Recommended |
|---|---|---|
| RAM | 4 GB | 8 GB or more |
| Storage | 500 MB free (app only) | 2 GB+ free (photos and cache) |
| Display | 1024 x 768 | 1080p or higher touchscreen |
| USB | 1 available USB port (for camera) | USB 3.0 for faster tethering |

:::tip
For event use, a touchscreen display is strongly recommended. Pix is designed as a kiosk app where guests interact directly with the screen.
:::

### Network

- **Broadband internet** is required for initial login, template sync, and photo uploads.
- **Offline capture** works without connectivity. Photos queue locally and upload automatically when the connection returns.
- Minimum recommended speed: 5 Mbps upload for smooth photo syncing between sessions.

:::caution
QR code sharing and guest pages require an active internet connection. If you're running an event at a venue with unreliable Wi-Fi, consider a mobile hotspot as backup.
:::

### Camera

A Canon EOS camera connected via USB is the primary capture method. See [Supported Cameras](./supported-cameras.md) for the full list of tested models.

A built-in or external webcam can be used as a fallback for testing or lower-quality setups.

### Printer (Optional)

A dye-sublimation photo printer connected via USB. See [Supported Printers](./supported-printers.md) for tested models and print sizes.

## Pix iOS Dashboard

The iOS Dashboard is a management app for monitoring your booths, viewing analytics, and managing templates from your phone or tablet.

| Requirement | Detail |
|---|---|
| iOS version | 26.0 or later |
| Devices | iPhone and iPad |
| Network | Internet connection required (no offline mode) |

:::info
The iOS Dashboard is a management tool, not a capture app. You still need the Desktop App to run a booth.
:::
