---
sidebar_position: 7
title: Sharing
description: How guests receive their photos via QR code, print, and guest page in the Pix Desktop App.
tags: [desktop-app, session, sharing, qr-code, print]
---

# Sharing

The sharing screen is the final step of a session. Guests choose how they want to receive their photo before the booth resets for the next person.

## Sharing Options

### QR Code

A QR code is displayed on screen that guests scan with their phone. This links to their photo on the hosted guest page, where they can view, download, and share it.

- No app download required -- the guest page works in any mobile browser.
- The QR code is unique per session and links directly to that guest's photo.

<!-- Screenshot: Sharing screen with QR code and print button -->

:::tip
Position the QR code at a comfortable scanning height. Most guests will use their phone camera, which works best at arm's length from the screen.
:::

### Print

If a printer is configured and enabled, a **Print** button appears on the sharing screen. Guests tap it to send their composite photo to the connected printer.

- Prints are scaled to match the configured paper size.
- Print typically completes in 10-15 seconds on dye-sublimation printers.
- Each guest can print once per session (configurable in booth settings).

### Guest Page

Every session's photo is uploaded to a hosted guest page at a unique URL. This page allows guests to:

- View their photo at full resolution
- Download the image to their device
- Share directly to social media

:::info
The guest page is part of the Pix cloud service. Photos are uploaded in the background and the page becomes available as soon as the upload completes. If the booth is offline, the upload is queued and the guest page goes live once connectivity is restored.
:::

## Sharing Screen Timeout

The sharing screen displays for a configurable duration (default: 30 seconds) before automatically returning to the home screen. If a guest is actively interacting (scanning QR, waiting for print), the timer pauses.

## Plan Limitations

- **Starter** (free): QR code and guest page sharing are not available. Photos are captured but not shared digitally.
- **Day Pass** and **Business**: All sharing options are available.

## Skipping Sharing

For kiosk setups where only printing matters, you can configure the booth to auto-print and skip the sharing screen entirely. The session ends as soon as the print job is sent.
