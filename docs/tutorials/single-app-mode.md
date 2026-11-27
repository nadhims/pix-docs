---
sidebar_position: 71
slug: /single-app-mode
title: Lock an iPad with Single App Mode
description: Keep guests inside Pixture Photobooth on an iPad with Guided Access, or make the iPad open the app again by itself after a restart with Single App Mode and Apple Configurator on a Mac.
tags: [tutorials, ipad, ios, kiosk, lock, single-app-mode]
---

# Lock an iPad with Single App Mode

In this tutorial you will keep guests inside the Pixture Photobooth app on an iPad. There are two ways: **Guided Access** for everyday use, and **Single App Mode** for an iPad that must come back to the booth by itself after a restart.

An iPad cannot be locked by the app alone. Apple only allows it through Guided Access (you start it) or Single App Mode (set up from a Mac).

## Which One to Pick

| | Guided Access | Single App Mode |
|---|---|---|
| Set up on | The iPad itself | A Mac with Apple Configurator |
| Back in the app after a restart | No, you start it again | Yes |
| Wipes the iPad | No | Once, when you supervise it |
| Use it for | Most booths | An iPad you cannot visit after a restart |

You can combine either with [Open the App Straight Into a Mode](./open-the-app-in.md), so the app also opens in Kiosk by itself.

## Option 1: Guided Access

1. On the iPad, open **Settings > Accessibility > Guided Access** and turn it on.
2. Tap **Passcode Settings > Set Guided Access Passcode** and choose a passcode. This is an iOS passcode, not your Menu PIN.
3. Open Pixture Photobooth and let it reach the booth screen.
4. Triple-click the top button (or the Home button on older iPads), then tap **Start**.

To leave, triple-click again and enter the Guided Access passcode. After a restart, repeat steps 3 and 4.

## Option 2: Single App Mode With Apple Configurator

You need a Mac with **Apple Configurator** (free in the Mac App Store), a USB cable, and Pixture Photobooth installed on the iPad.

:::warning
To use Single App Mode the iPad must be **supervised**, and supervising **erases the iPad once**. Back up anything you need first.
:::

1. Connect the iPad to the Mac and open Apple Configurator.
2. Select the iPad and choose **Prepare**. Follow the steps to supervise it. The iPad erases and restarts.
3. Set the iPad up again and install Pixture Photobooth. Sign in.
4. In Apple Configurator, select the iPad, then choose **Actions > Advanced > Start Single App Mode**.
5. Pick **Pixture Photobooth** and confirm.

The iPad now shows only the app and returns to it after a restart. To stop, use **Actions > Advanced > Stop Single App Mode** in Apple Configurator.

Menu names in Apple Configurator can change between versions. If a step looks different, search Apple's Apple Configurator guide for "Single App Mode".
