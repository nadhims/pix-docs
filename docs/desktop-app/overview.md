---
sidebar_position: 1
title: Overview
description: What the Pix Desktop App does, system requirements, and architecture overview.
tags: [desktop-app, overview, getting-started]
---

# Pix Desktop App Overview

The Pix Desktop App is a full-screen kiosk application that turns any Mac or Windows PC into a professional photobooth. Built with Electron, React, and TypeScript, it handles everything from camera capture to customer sharing -- all from a single screen.

## What It Does

- **Camera support** -- Canon EOS DSLRs (via USB) and standard webcams, with auto-recovery
- **Soft files** -- composites, animated GIFs, live photos, and singles
- **Photo filters** -- 14 built-in filters plus custom .cube LUTs
- **Template-driven layouts** managed from your Pix Design dashboard
- **Microsites** -- branded customer sharing pages via QR code
- **Printer support** -- any printer your operating system can print to, including shared and network printers
- **Offline resilience** -- queues uploads and retries automatically when connectivity drops
- **Auto-updates** so your booth always runs the latest version

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **macOS** | 13 (Ventura) | 14 (Sonoma) or later |
| **Windows** | 10 (64-bit) | 11 |
| **RAM** | 4 GB | 8 GB |
| **Disk** | 500 MB free | 2 GB free |
| **Display** | 1280 x 800 | 1080p touchscreen |
| **USB** | USB 2.0 (for camera) | USB 3.0 |

:::tip
A touchscreen display is not required but strongly recommended for unattended kiosk operation. Customers interact directly with the screen during a photo session.
:::

## Architecture at a Glance

The app runs as a kiosk-mode Electron window. Under the hood:

- **Main process** handles camera communication, printing, file I/O, and the offline upload queue.
- **Renderer process** displays the React UI -- home screen, capture flow, sharing screen, and admin panel.
- **CMS-driven layouts** pull page designs, branding, and templates from the Pix API so you can update your booth's look without touching the app.

<!-- Screenshot: Desktop app running in kiosk mode -->

## Plans and Pricing

The desktop app works with all Pix plans:

- **Starter** (free) -- 1 booth, 2 templates, standard kiosk design, digital sharing with a Pix watermark
- **Day Pass** -- from $5 (Rp 85.000) per booth per day, in packs of 1, 2, or 4 passes
- **Pix Pro** -- $40/month or $25/month billed yearly, per booth: unlimited templates, both editors, clean soft files

See the [Pricing](/docs/pricing/plans) section for full details.
