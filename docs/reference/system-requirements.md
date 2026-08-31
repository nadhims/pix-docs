---
sidebar_position: 1
title: System Requirements
description: Minimum and recommended system requirements for the Pix Desktop App and Pix Dashboard.
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
| Processor (macOS) | Apple Silicon or Intel | Apple Silicon (M1 or later) |
| Processor (Windows) | Core i3 / Ryzen 3 | Core i5 / Ryzen 5 or better |
| RAM | 8 GB | 16 GB |
| Graphics | Integrated (UHD / Radeon / Apple) | Dedicated GPU or Apple Silicon |
| Storage | 1 GB available | 2 GB+ available (photos and cache) |
| Display | 1280 x 720 | 1080p or higher touchscreen |
| USB | USB 2.0 port (Canon DSLR) | USB 3.0 for faster tethering |

:::tip
For kiosk use, a touchscreen display is strongly recommended. Pix is designed as a kiosk app where customers interact directly with the screen.
:::

### Network

- **Broadband internet** is required for initial login, template sync, and photo uploads.
- **Offline capture** works without connectivity. Photos queue locally and upload automatically when the connection returns.
- Minimum recommended speed: 5 Mbps upload for smooth photo syncing between photo sessions.

:::caution
Microsites (QR code sharing and branded customer pages) require an active internet connection. If you're running a kiosk at a location with unreliable Wi-Fi, consider a mobile hotspot as backup.
:::

### Camera

A Canon EOS camera connected by USB is the primary capture method. A built-in or USB webcam works too, as do virtual cameras such as OBS Virtual Camera on macOS. See [Supported Cameras](./supported-cameras.md) for the full list of tested models.

A built-in or external webcam can be used as a fallback for testing or lower-quality setups.

### Printer (Optional)

A photo printer connected by USB or over the network -- dye-sublimation (DNP, HiTi, Mitsubishi) is the photobooth standard, and inkjet photo printers also work. Several booths can share one printer; see [Sharing One Printer Between Booths](../guides/shared-printer.md). See [Supported Printers](./supported-printers.md) for tested models and print sizes.

## Pix Dashboard

The Pix Dashboard is a web-based management tool for monitoring your booths, viewing analytics, and managing templates from any device -- no app to install.

| Requirement | Detail |
|---|---|
| Browser | Latest version of Chrome, Safari, Firefox, or Edge |
| Devices | Any desktop, laptop, tablet, or phone |
| Network | Internet connection required (no offline support) |

:::info
The Pix Dashboard is a management tool, not a capture app. You still need the Desktop App to run a booth.
:::
