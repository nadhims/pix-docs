---
sidebar_position: 1
title: Overview
description: What the Pix Desktop App is, what is new in version 1.1.115, what it needs to run, and how it works with the Pixture dashboard.
tags: [desktop-app, overview, getting-started]
---

# Pix Desktop App Overview

The Pix Desktop App is the kiosk software that turns a Mac or Windows computer into a photobooth. It runs full screen, drives your camera and printer, walks the guest through a photo session and hands over the result as a print and a QR code. This page tells you what the app does, what has changed recently, what it needs to run, and how it fits together with the Pixture dashboard.

## What It Does

- Runs the whole photo session on one screen: start, payment, template choice, capture, review, filters and sharing.
- Works with Canon EOS cameras over USB and with any webcam or virtual camera the operating system can see.
- Prints to any printer the computer can print to, including shared and network printers.
- Makes up to four outputs from one session: the printed composite, the single photos, an animated GIF and a live photo clip.
- Shares through a QR code that opens the guest's own share page.
- Keeps working when the venue internet drops: photos are saved on the computer and uploaded when the line comes back.
- Updates itself in the background.

## What's New Since Summer 2026

The current version is **1.1.115**. The main changes since 1.1.82:

- **Studio mode.** A timed pool session: the guest takes as many shots as they like, then assigns their favourites to the template slots. See [Studio Sessions](./studio-sessions.md).
- **Per-photo adjust on the Review screen.** Tap a photo to scale it, mirror it or move the crop before it goes into the layout. The separate Adjust screen is gone. See [Review and Adjust](./session-flow/review-and-adjust.md).
- **Video and 360 slow-mo for events.** An event can switch every booth in it to video capture, with an intro, outro, soundtrack and overlay. See [Event Video Modes](./event-video-modes.md).
- **Device licensing and "Try it without an account".** Pix Pro now lives on the computer, the operator menu shows a licence badge, and a fresh install can run watermarked with built-in frames before it is paired. See [Licence on the Booth](./licence-on-the-booth.md).
- **Every currency.** Prices show the way the dashboard shows them, in any currency, with a tax label that follows the currency.
- **An upload queue that survives bad venue internet.** Network failures retry on a short schedule and never count against a photo. See [Offline Mode](./offline-mode.md).
- **AI portrait print pickup.** A guest who bought an AI portrait on their phone types a pickup code into the booth and takes the print from the tray (available to beta accounts).
- **Native FFmpeg on Apple Silicon.** Live photo, filter and GIF encoding run natively on Apple Silicon Macs; Rosetta is no longer needed.

## Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **macOS** | 13 (Ventura) | 14 (Sonoma) or later |
| **Windows** | 10 (64-bit) | 11 (64-bit) |
| **Processor** | Apple Silicon/Intel (Mac), Core i3 / Ryzen 3 (Win) | M1+, Core i5 / Ryzen 5 or better |
| **RAM** | 8 GB | 16 GB |
| **Disk** | 1 GB free | 2 GB free |
| **Display** | 1280 x 720 | 1080p touchscreen |
| **USB** | USB 2.0 (for camera) | USB 3.0 |

A touchscreen is not required, but guests tap the screen all the way through a session, so it is strongly recommended for a booth that runs unattended. The app warns you when free disk space drops under 3 GB, so plan for more than the minimum on a busy booth.

## How It Works With the Dashboard

The app is the booth. The Pixture dashboard at pixture.io is where you design and manage it:

- **Pix Design** holds your print templates, the kiosk screens (UI projects), photo filters and GIF overlays. Save there and the booth picks the change up on its next check-in, usually within seconds.
- **Booths** holds each booth's pricing, assigned templates and filters, output switches (singles, GIF, live photo, print) and the operator menu PIN.
- **Events** switches booths into video or 360 slow-mo capture and gives them event templates for the day.
- **Licenses** is where Pix Pro, Day Passes and the free trial are put on computers and moved between them.

The booth itself keeps only what belongs to the hardware: camera, printer, hardware payment settings and the upload queue. All of that sits behind the operator menu, which opens with two taps on the top-right corner of the screen. See [Operator Menu](./admin-panel.md).

## Plans

- **Pix Starter** (free): one computer, and every photo, print, GIF and video carries the Pixture watermark.
- **Day Pass**: full Pix Pro on one computer for 24 hours, $5 or Rp 85.000 per computer per day.
- **Pix Pro** Monthly ($40 or Rp 850.000) or Yearly ($300 per year): clean output, unlimited templates and kiosk designs, per computer.

See [Plans](../pricing/plans.md) for the full comparison.

## Related

- [Installation](./installation.md)
- [Photo Session Flow](./session-flow/overview.md)
- [Operator Menu](./admin-panel.md)
- [Plans](../pricing/plans.md)
