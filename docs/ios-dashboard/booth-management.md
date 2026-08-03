---
sidebar_position: 3
title: Booth Management
description: Create booths, configure settings, assign devices, and monitor booth status from the iOS Dashboard.
tags: [ios, booths, management, devices]
---

# Booth Management

The Booths tab is where you set up and manage every photobooth in your organization. Each booth represents a physical kiosk or tablet running the Pix capture app.

<!-- Screenshot: Booth list view -->

## Creating a Booth

1. Tap the **+** button in the top-right corner.
2. Enter a **Booth Name** (e.g., "Mall Kiosk 1" or "Cafe Location").
3. Choose the **Platform** — Desktop (macOS/Windows) or Mobile (iOS/Android tablet).
4. Tap **Create**.

The new booth appears in your list with an "Offline" status until a device is assigned and connected.

:::tip
Use descriptive names that include the venue or location. This makes it much easier to identify booths in analytics and the leaderboard.
:::

## Booth Settings

Tap any booth to open its detail page. From here you can configure:

- **Display Name** — shown to guests on the booth screen
- **Timezone** — ensures session timestamps match the local time at the venue
- **Idle Timeout** — how long before the booth resets to the welcome screen
- **Sharing Options** — enable or disable QR code, email, AirDrop, or print

## Assigning Devices

A booth needs a registered device to go online. In the booth detail page:

1. Tap **Assign Device**.
2. Select from your list of registered devices (see [Device Management](./device-management.md)).
3. Confirm the assignment.

:::caution
Each device can only be assigned to one booth at a time. Reassigning a device will remove it from its current booth.
:::

## Monitoring Status

The booth list shows a live status indicator for each booth:

- **Green** — Online and ready
- **Gray** — Offline or not connected
- **Yellow** — Online but idle for an extended period

Tap into any booth to see its last activity timestamp, current device, assigned templates, and recent session history.

## Deleting a Booth

Swipe left on a booth in the list and tap **Delete**. This removes the booth configuration but does not delete historical session data or photos.
