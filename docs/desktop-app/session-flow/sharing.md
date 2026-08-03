---
sidebar_position: 7
title: Sharing
description: How customers receive their photos via QR code, print, and microsite in the Pix Desktop App.
tags: [desktop-app, photo session, sharing, qr-code, print]
---

# Sharing

The sharing screen is the final step of a photo session. Customers choose how they want to receive their photo before the booth resets for the next person.

## Sharing Options

### QR Code

A QR code is displayed on screen that customers scan with their phone. This links to their branded microsite, where they can view, download, and share their photos.

- No app download required -- the microsite works in any mobile browser.
- The QR code is unique per photo session and links directly to that customer's photo.

<!-- Screenshot: Sharing screen with QR code and print button -->

:::tip
Position the QR code at a comfortable scanning height. Most customers will use their phone camera, which works best at arm's length from the screen.
:::

### Print

If a printer is configured and enabled, a **Print** button appears on the sharing screen. Customers tap it to send their composite photo to the connected printer.

- Prints are scaled to match the configured paper size.
- Print typically completes in 10-15 seconds on dye-sublimation printers.
- Each customer can print once per photo session (configurable in booth settings).

### Microsite (Customer Page)

Every photo session's photos are uploaded to a branded microsite at a unique URL. This mobile-friendly page displays your organization's logo and name, and allows customers to:

- View their composites, GIFs, live photos, and singles
- Download files to their device
- Share directly to social media

:::info
Microsites are part of the Pix cloud service. Soft files are uploaded in the background and the microsite becomes available as soon as the upload completes. If the booth is offline, the upload is queued and the microsite goes live once connectivity is restored.
:::

## Sharing Screen Timeout

The sharing screen displays for a configurable duration (default: 30 seconds) before automatically returning to the home screen. If a customer is actively interacting (scanning QR, waiting for print), the timer pauses.

## Plan Limitations

- **Starter** (free): QR code and microsite sharing are not available. Photos are captured and printed only, not shared digitally.
- **Day Pass** and **Pix Pro**: All sharing options are available.

## Skipping Sharing

For kiosk setups where only printing matters, you can configure the booth to auto-print and skip the sharing screen entirely. The photo session ends as soon as the print job is sent.
