---
sidebar_position: 4
title: Install the Pix Desktop App
description: Download the Pix Desktop App from pixture.io/download and install it on a Mac (Apple Silicon or Intel) or a Windows PC, ready for pairing.
tags: [getting-started, desktop-app, install]
---

# Install the Pix Desktop App

By the end of this page the Pix Desktop App, the kiosk software that runs your photobooth, is installed on the booth computer and open on its pairing screen. The current version is 1.1.115.

## Before You Start

- A **Mac** on macOS 13 or later (Apple Silicon or Intel), or a **Windows** 10 or 11 (64-bit) PC.
- At least 3 GB of free disk space. The kiosk warns you below that and cleans up its cache below 1 GB.
- Internet access for the download, pairing and updates.

## Download

1. Go to [pixture.io/download](https://pixture.io/download). The page highlights the build for the computer you are on; every build is listed. You can also get there from the setup banner in your dashboard by clicking **Install the app**, or from **Settings > Download App**.

   ![The dashboard of a new account with the setup banner and its Install the app button](/img/docs/dashboard-new-account.webp)

2. Pick the installer: the **macOS** disk image for **Apple Silicon** or **Intel**, or the **Windows** installer. Choose the Apple Silicon build for any M-series Mac; it includes native video and GIF encoding, so live photos and filters do not need Rosetta.

## Install on macOS

1. Open the downloaded `.dmg` file.
2. Drag **Pix** into your **Applications** folder.
3. Open Pix from Applications. The first time, macOS may ask you to confirm because the app came from the internet. Click **Open**.

The macOS build is signed and notarised, so there are no further prompts.

## Install on Windows

1. Run the downloaded `.exe` installer.
2. Follow the prompts. The default install location is fine.
3. Open **Pix** from the Start menu or the desktop shortcut.

:::caution Windows SmartScreen
The Windows installer is not code-signed yet, so SmartScreen shows a warning the first time you run it. Click **More info**, then **Run anyway**.
:::

## First Launch

The app opens full screen on the pairing screen. There are two ways in:

- **Pair to your Pixture account.** Type the 6-digit code from the booth's **Device** tab in the dashboard. This is the normal path; the full steps are in [Pair Your First Booth](./pair-your-first-booth.md).
- **Try it without an account.** Tap this to run the booth unpaired with the built-in frames and screens. It prints if a printer is set up and puts the Pixture watermark on everything. There is no cloud upload and no QR code sharing in this mode. When you are ready, open the operator menu and tap **Pair to your Pixture account**.

The app updates itself: it checks for updates on its own, downloads them in the background and restarts when the booth is idle. See [Software Updates](../desktop-app/software-updates.md).

## Related

- [Pair Your First Booth](./pair-your-first-booth.md)
- [Installation](../desktop-app/installation.md)
- [System Requirements](../reference/system-requirements.md)
- [Software Updates](../desktop-app/software-updates.md)
