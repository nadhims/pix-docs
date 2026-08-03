---
sidebar_position: 9
title: Device Management
description: Register devices, assign them to booths, and monitor their online/offline status.
tags: [ios, devices, management, monitoring]
---

# Device Management

Devices are the physical machines running your photobooth software — laptops, desktops, or tablets. The Device Management screen lets you register them, assign them to booths, and keep track of their status.

<!-- Screenshot: Device list -->

## Registering a Device

Devices register themselves automatically the first time they sign in to the Pix capture app. Once registered, they appear in your device list with:

- **Device Name** — the machine's hostname (you can rename it)
- **Platform** — macOS, Windows, iOS, or Android
- **Last Seen** — when the device last communicated with the server
- **Status** — Online or Offline
- **Assigned Booth** — which booth this device is linked to (if any)

:::info
You don't need to manually add devices. Just sign in to the Pix Desktop App or Pix Mobile on the device, and it will appear in your list automatically.
:::

## Assigning a Device to a Booth

1. Tap a device in the list.
2. Tap **Assign to Booth**.
3. Select the booth from the dropdown.
4. Tap **Confirm**.

The device is now linked to that booth. When it comes online, the booth status updates accordingly.

:::caution
A device can only be assigned to one booth at a time. If you assign it to a new booth, it's automatically removed from the previous one.
:::

## Monitoring Status

The device list provides a quick health check across your fleet:

| Indicator | Meaning |
|-----------|---------|
| **Green dot** | Device is online and connected |
| **Gray dot** | Device is offline |

The **Last Seen** timestamp tells you exactly when the device last reported in. If a device has been offline for longer than expected, it may need attention — check that it's powered on and connected to the internet.

## Renaming a Device

Tap a device, then tap the name field to edit it. Use names that help you identify the physical machine, like "MacBook Pro - Venue A" or "iPad Mini #3".

## Removing a Device

Swipe left on a device and tap **Remove**. This unregisters the device and removes its booth assignment. The device can be re-registered by signing in again.

:::tip
Before opening for the day, check the device list to confirm all your machines are online and assigned to the correct booths. This simple pre-check avoids surprises during operating hours.
:::
