---
sidebar_position: 1
title: Session Flow Overview
description: The complete guest session flow in the Pix Desktop App, from start to sharing.
tags: [desktop-app, session, flow]
---

# Session Flow Overview

A session is the complete journey a guest takes through the photobooth -- from tapping "Start" to walking away with their photo. Understanding the flow helps you configure each step for your event.

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
│  Template    │  Guest picks a layout/template
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
│  Sharing     │  QR code, print, guest page
└──────┬───────┘
       │
       ▼
┌─────────────┐
│ Home Screen  │  Ready for next guest
└──────────────┘
```

## Step-by-Step

1. **Home Screen** -- Displays your booth's branding and a start button. Fully customizable via the CMS in your Pix dashboard.

2. **Payment** -- Optional. If enabled, guests pay before proceeding. Skipped entirely for free events or Starter plan booths.

3. **Template Selection** -- Guests choose from the templates you have assigned to this booth in Pix Studio.

4. **Capture** -- The camera captures photos based on the mode configured for the selected template: composite (multiple shots arranged in a layout), GIF (animated sequence), or live photo (short video clip plus a still frame).

5. **Filters** -- Optional. If enabled, guests can apply a filter (black & white, vintage, etc.) to their captured image before sharing.

6. **Sharing** -- Guests receive their photo via QR code scan, instant print, or a link to their hosted guest page.

After sharing, the session ends and the booth returns to the home screen, ready for the next guest.

:::info
Each step is covered in detail on its own page. Use the sidebar to navigate to the specific step you want to configure.
:::

## Session Timeout

If a guest walks away mid-session, the app automatically returns to the home screen after a configurable idle timeout (default: 60 seconds).
