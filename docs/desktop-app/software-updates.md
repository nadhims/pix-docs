---
sidebar_position: 12
title: Software Updates
description: How the Pix Desktop App updates itself, how to check for an update from the operator menu, and where to see which version a booth runs.
tags: [desktop-app, updates, auto-updater]
---

# Software Updates

The Pix Desktop App keeps itself current without you touching the booth. This page explains how the background update works, how to check for one by hand from the operator menu, where the version is shown, and where to read what changed. The current version is 1.1.115.

## How Updates Happen

1. The app checks for a newer version on launch and periodically while it runs.
2. When one is found, it downloads in the background while the booth keeps taking sessions.
3. Once downloaded, the app restarts to apply it when the booth is idle, never in the middle of a photo session.
4. The booth comes back on the Home screen on the new version, paired and configured as before.

Nothing is reinstalled by hand and the booth settings, camera, printer and queue are untouched.

## Checking by Hand

If you want an update now rather than on the next check:

1. Open the operator menu with two taps on the top-right corner and enter the PIN if there is one.
2. Tap **Check for Updates**.
3. When an update is ready, the same button reads **Restart & Update**. Tap it to restart into the new version.

Do this before opening, not during a busy hour; the restart takes the booth off the Home screen for a moment.

## Which Version a Booth Runs

- **On the booth**: the operator menu footer shows "Pix v…".
- **In the dashboard**: the **Health** page and the **Licenses** table (its **Version** column) show the version each booth last reported, so you can see from anywhere which booths are behind.

Some features need a minimum version: Studio mode needs 1.1.98 or newer, online voucher packages 1.1.101 or newer, event video modes 1.1.102 or newer, and every currency 1.1.106 or newer. The dashboard warns you on the booth's UI Project tab when Studio mode needs an update.

## Platform Notes

- **macOS**: updates are signed and notarised. The app replaces itself and restarts.
- **Windows**: the update installs and relaunches the app on its own.

Both platforms verify the download before applying it; a damaged download is discarded and fetched again on the next check.

:::caution
Do not leave a booth on an old version for months. Newer dashboard features assume a current app, and uploads or sync can fail on a version that is far behind.
:::

## Release Notes

What changed in each version is listed on the [Release Notes](/releases) page.

## Related

- [Operator Menu](./admin-panel.md)
- [Installation](./installation.md)
- [Troubleshooting](./troubleshooting.md)
