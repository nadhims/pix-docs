---
sidebar_position: 10
title: Troubleshooting
description: Solutions for common issues with the Pix Desktop App including camera, printer, upload, and crash problems.
tags: [desktop-app, troubleshooting, support]
---

# Troubleshooting

This page covers the most common issues operators encounter with the Pix Desktop App and how to resolve them.

## Camera Not Detected

**Symptoms:** The app shows "No camera connected" or the live preview is blank.

**Steps to resolve:**

1. Unplug the USB cable from the camera and plug it back in.
2. Verify no other software is using the camera (Canon EOS Utility, Lightroom, etc.). Quit those applications.
3. Try a different USB port -- use a port directly on the computer, not through a hub.
4. Check that the camera is powered on and awake (not in sleep mode).
5. Restart the Pix Desktop App.
6. On macOS, open **System Settings > Privacy & Security > Camera** and confirm Pix has permission.

:::tip
If you frequently lose camera connection during events, use a shorter USB cable (under 2 meters) or a powered USB hub. Long cable runs are the most common cause of intermittent disconnects.
:::

## Printer Not Found

**Symptoms:** The printer does not appear in the Settings printer list, or prints fail silently.

**Steps to resolve:**

1. Confirm the printer is installed at the OS level:
   - **macOS**: System Settings > Printers & Scanners
   - **Windows**: Settings > Bluetooth & Devices > Printers & Scanners
2. Print a test page from the OS to verify the printer is working independently.
3. Check USB or network connection to the printer.
4. Restart the app and re-open Settings > Printer.

## Upload Failures

**Symptoms:** Photos are stuck in the upload queue, or the dead-letter queue is growing.

**Steps to resolve:**

1. Check your internet connection -- open a browser and load any website.
2. Open the **Admin Panel > Queue Browser** to inspect the error messages on failed items.
3. If errors mention authentication, try signing out and signing back in.
4. For persistent failures, retry items from the dead-letter queue while on a stable connection.
5. If a specific item fails repeatedly, it may be corrupt. Discard it from the dead-letter queue.

:::caution
If all uploads fail with a 401 or 403 error, your session token may have expired. Sign out and sign back in to refresh credentials.
:::

## App Crashes or Freezes

**Symptoms:** The app closes unexpectedly or becomes unresponsive.

**Steps to resolve:**

1. Restart the app. Most crashes are transient and do not recur.
2. Check available disk space -- the app needs at least 500 MB free to operate reliably.
3. Close other resource-heavy applications to free up RAM.
4. Check the **Admin Panel > Logs** for error messages leading up to the crash.
5. Update to the latest version -- crash fixes are included in most updates.

## Where to Find Logs

Logs are your best tool for diagnosing issues:

- **In-app**: Admin Panel > Logs section
- **On disk**:
  - macOS: `~/Library/Logs/Pix/`
  - Windows: `%APPDATA%\Pix\logs\`

When contacting Pix support, export your logs from the admin panel and include them in your report.

## Getting Help

If the steps above do not resolve your issue:

1. Export your logs from the Admin Panel.
2. Note your app version (shown at the bottom of the Admin Panel).
3. Contact support through the Pix dashboard or email with your logs and a description of the problem.
