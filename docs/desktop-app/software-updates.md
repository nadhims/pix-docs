---
sidebar_position: 9
title: Software Updates
description: How the Pix Desktop App auto-updater works and how to manage updates.
tags: [desktop-app, updates, auto-updater]
---

# Software Updates

The Pix Desktop App includes a built-in auto-updater that keeps your booth running the latest version without manual intervention.

## How Auto-Update Works

1. On launch, the app checks the update server for a newer version.
2. If an update is available, it downloads in the background while the booth continues operating.
3. Once downloaded, a prompt appears offering to restart and apply the update.
4. After restart, the new version is active.

The entire process is designed to be non-disruptive. Downloads happen silently, and the restart prompt only appears when the booth is idle on the home screen -- never while you are using it.

<!-- Screenshot: Update available prompt on home screen -->

:::tip
Schedule a brief window before opening for the day to launch the app and let any pending updates install. This avoids update prompts during operating hours.
:::

## Checking for Updates Manually

If you want to check immediately rather than waiting for the automatic check:

1. Open the **Admin Panel**.
2. Select **Check for Updates**.
3. If an update is available, you can download and install it from there.

## Update Behavior by Platform

### macOS

Updates are delivered as signed `.dmg` packages. The auto-updater downloads, verifies the code signature, and replaces the running application. A restart is required to apply.

### Windows

Updates are delivered as `.exe` installers. The auto-updater downloads and launches the installer when the user accepts the update. The app closes, installs, and relaunches automatically.

:::info
Both platforms verify the update's integrity before applying it. If a download is corrupt or tampered with, the update is discarded and retried on the next check.
:::

## Version Information

To check the currently running version:

- Open the **Admin Panel** -- the version number is displayed at the bottom of the panel.

The current version is useful when reporting issues to Pix support.

## Staying Up to Date

Updates include:

- **Bug fixes** -- stability and reliability improvements
- **New features** -- new capture modes, sharing options, and UI enhancements
- **Security patches** -- important security updates

:::caution
Avoid running outdated versions for extended periods. Older versions may not be compatible with the latest Pix API changes, which could cause sync or upload failures.
:::

## Release Notes

What changed in each version is listed on the [Release Notes](/releases) page.
