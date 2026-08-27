---
sidebar_position: 7
title: Health
description: See at a glance whether every booth is online and working -- last check-in, camera and printer state, upload queue, and error records.
tags: [dashboard, health, monitoring]
---

# Health

**Health** is the page to open when a booth misbehaves, or before an event starts.

## What It Shows

For every booth:

- **Online / offline** and the time of the last check-in. Kiosks check in continuously while running.
- **Camera** state as reported by the kiosk.
- **Printer** state, and the media type loaded where the driver reports it.
- **Upload queue** -- how many photo sessions are waiting to upload, useful on slow venue Wi-Fi.
- **Software version** of the Pix Desktop App on that device.
- **Error records** -- recent errors the kiosk reported, downloadable as CSV for support.

## Typical Checks

| Symptom | Look at |
|---|---|
| Customers say the booth is dark | Online status and last check-in |
| No prints | Printer state; then the kiosk's own [Printer settings](../desktop-app/printer-setup.md) |
| QR codes lead to "not ready yet" pages | Upload queue -- photos are queued, not lost |
| Camera error on screen | Camera state; then [Troubleshooting](../desktop-app/troubleshooting.md) |

:::tip Rename your devices
Health lists devices by name. Naming them by location on the booth's **Device** tab makes this page readable at a glance.
:::
