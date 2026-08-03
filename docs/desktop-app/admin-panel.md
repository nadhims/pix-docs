---
sidebar_position: 8
title: Admin Panel
description: Using the admin panel to manage upload queues, view diagnostics, and access logs.
tags: [desktop-app, admin, diagnostics, logs]
---

# Admin Panel

The admin panel is a hidden management interface accessible to booth operators. It provides tools for monitoring, troubleshooting, and managing the app during day-to-day operation.

## Accessing the Admin Panel

The admin panel is not visible to guests. To open it:

- Use the designated keyboard shortcut, or
- Navigate through the settings menu

This keeps the kiosk experience clean for guests while giving operators full control.

<!-- Screenshot: Admin panel dashboard -->

## Queue Browser

The queue browser shows the status of all pending and completed uploads.

### Active Queue

Items currently waiting to upload or in-progress:

- **Pending** -- waiting for its turn to upload
- **Uploading** -- currently being sent to the Pix cloud
- **Retrying** -- failed and waiting for the next retry attempt

### Dead-Letter Queue

Items that failed repeatedly and were removed from automatic retry:

- View the error message for each failed item
- **Retry** individual items or retry all at once
- **Discard** items that cannot be recovered

:::tip
Check the dead-letter queue periodically, especially before closing down for the day. Retrying items while on a stable internet connection often resolves transient failures.
:::

## Diagnostics

The diagnostics section provides a quick health check of the booth:

- **Camera status** -- connected model, firmware version, current settings
- **Printer status** -- selected printer, ready state, media level (if reported by printer)
- **Network status** -- online/offline, API connectivity, upload speed estimate
- **Storage** -- available disk space, number of cached sessions

:::caution
If disk space drops below 500 MB, the app will warn you. Clear old cached sessions or free up disk space to prevent capture failures.
:::

## Logs

The app maintains detailed logs that are invaluable for troubleshooting:

- **Application logs** -- app lifecycle, navigation, errors
- **Camera logs** -- connection events, capture results, sidecar communication
- **Upload logs** -- queue processing, upload success/failure, retry attempts

Logs can be viewed directly in the admin panel or exported as a file for sharing with Pix support.

## Other Actions

From the admin panel you can also:

- **Switch booth** -- change which booth this device operates as
- **Sign out** -- return to the login screen
- **Check for updates** -- manually trigger an update check
- **Clear cache** -- remove locally cached sessions and temporary files
