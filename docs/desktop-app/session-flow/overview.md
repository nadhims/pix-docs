---
sidebar_position: 1
title: Photo Session Flow Overview
description: The complete customer photo session flow in the Pix Desktop App, from start to sharing.
tags: [desktop-app, photo session, flow]
---

# Photo Session Flow Overview

A photo session is the complete journey a customer takes through the photobooth -- from tapping "Start" to walking away with their photo. Understanding the flow helps you configure each step for your kiosk location.

## Flow Diagram

```
┌─────────────┐
│ Home Screen  │  CMS-driven layout, branding, "Start" button
└──────┬───────┘
       │
       ▼
┌─────────────┐
│  Payment     │  (Optional) Collect payment before proceeding
└──────┬───────┘
       │
       ▼
┌─────────────┐
│  Template    │  Customer picks a layout/template
│  Selection   │
└──────┬───────┘
       │
       ▼
┌─────────────┐
│  Capture     │  Take photos (composite, GIF, or live photo)
└──────┬───────┘
       │
       ▼
┌─────────────┐
│  Filters     │  (Optional) Apply a filter to the captured image
└──────┬───────┘
       │
       ▼
┌─────────────┐
│  Sharing     │  QR code, print, microsite
└──────┬───────┘
       │
       ▼
┌─────────────┐
│ Home Screen  │  Ready for next customer
└──────────────┘
```

## Step-by-Step

1. **Home Screen** -- Displays your booth's branding and a start button. Fully customizable via the CMS in your Pix dashboard.

2. **Payment** -- Optional. If enabled, customers pay before proceeding. Skipped entirely when payment is disabled (free photo sessions) or on Starter plan booths.

3. **Template Selection** -- Customers choose from the templates you have assigned to this booth in Pix Design.

4. **Capture** -- The camera captures photos based on the mode configured for the selected template: composite (multiple shots arranged in a layout), GIF (animated sequence), or live photo (short video clip plus a still frame).

5. **Filters** -- Optional. If enabled, customers browse a scrollable strip of photo filter previews (14 built-in + custom .CUBE LUTs) and choose one before sharing.

6. **Sharing** -- Customers receive their photos via QR code scan (linking to their branded microsite), instant print, or both.

After sharing, the photo session ends and the booth returns to the home screen, ready for the next customer.

:::info
Each step is covered in detail on its own page. Use the sidebar to navigate to the specific step you want to configure.
:::

## Photo Session Timeout

If a customer walks away mid-photo session, the app automatically returns to the home screen after a configurable idle timeout (default: 60 seconds).
