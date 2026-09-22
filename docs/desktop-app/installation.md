---
sidebar_position: 2
title: Installation
description: How to download and install the Pix Desktop App on macOS and Windows, and what happens on the first launch.
tags: [desktop-app, installation, setup]
---

# Installation

By the end of this page the Pix Desktop App is installed on your booth computer, it has either been paired to your Pixture account or is running in the unpaired try-out mode, and you know how to reach the operator menu. Installing takes a few minutes on either platform.

## Before You Start

- A Mac on macOS 13 or later, or a Windows 10 or 11 (64-bit) PC. See [Overview](./overview.md) for the full requirements.
- Internet access for the download, pairing and updates.
- If you want to pair straight away, a booth in your Pixture dashboard. See [Pair Your First Booth](../getting-started/pair-your-first-booth.md).

## Download

1. Open [pixture.io/download](https://pixture.io/download).
2. Pick the installer for your computer: the **macOS** DMG for **Apple Silicon** or **Intel**, or the **Windows** installer. Choose the Apple Silicon build for any M-series Mac; it includes native video and GIF encoding.

## Install on macOS

1. Open the downloaded `.dmg` file.
2. Drag the **Pix** icon into your **Applications** folder.
3. Open Pix from Applications. The first time, macOS may ask you to confirm because the app came from the internet. Click **Open**.

The macOS build is signed and notarised, so Gatekeeper lets it run without extra steps.

## Install on Windows

1. Run the downloaded `.exe` installer.
2. Follow the prompts. The default install location is fine.
3. Open **Pix** from the Start menu or the desktop shortcut.

:::info Windows SmartScreen
The Windows installer is not code-signed yet, so SmartScreen shows a warning the first time you run it. Click **More info**, then **Run anyway**. The app itself is not affected.
:::

## First Launch

The app opens full screen on the login screen. You have two ways in:

### Pair to your Pixture account

1. In the dashboard, open **Booths**, pick the booth, open its **Device** tab and click **Generate code**.
2. Type the 6-digit code into the pairing screen on the booth.
3. The booth downloads its kiosk design, templates and pricing, and shows the Start screen.

Pairing links this computer to that booth. The full walkthrough is in [Pair Your First Booth](../getting-started/pair-your-first-booth.md).

### Try it without an account

Tap **Try it without an account** to run the booth unpaired. It uses the built-in frames and screens, prints if a printer is set up, and puts the Pixture watermark on everything. There is no cloud upload and no QR code sharing in this mode. When you are ready, open the operator menu and tap **Pair to your Pixture account**.

## Opening the Operator Menu

All booth-side settings sit behind a hidden menu. Tap the top-right corner of the screen twice within three seconds. If the booth has a menu PIN, type it on the **Enter Admin PIN** pad. From there you reach Camera Settings, Printer Settings, the upload queue and updates. See [Operator Menu](./admin-panel.md).

## Automatic Updates

The app checks for updates on its own, downloads them in the background and restarts when the booth is idle. You can also force a check from the operator menu with **Check for Updates**. See [Software Updates](./software-updates.md).

## Uninstalling

- **macOS**: drag Pix from Applications to the Trash.
- **Windows**: open **Settings > Apps > Installed apps**, find Pix and click **Uninstall**.

Uninstalling does not free the computer's place on your subscription. Log out from the operator menu first, or deactivate the computer on the dashboard's **Licenses** page. See [Licence on the Booth](./licence-on-the-booth.md).

## Related

- [Pair Your First Booth](../getting-started/pair-your-first-booth.md)
- [Operator Menu](./admin-panel.md)
- [Software Updates](./software-updates.md)
- [Device Management](../dashboard/device-management.md)
