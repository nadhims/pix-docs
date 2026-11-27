---
sidebar_position: 72
title: Lock an Android Tablet for Good
description: Pin Pixture Photobooth on an Android tablet, make it the tablet's Home app so it opens after a restart, and for a dedicated booth tablet make it the device owner with adb.
tags: [tutorials, android, tablet, kiosk, lock, device-owner]
---

# Lock an Android Tablet for Good

In this tutorial you will keep guests inside the Pixture Photobooth app on an Android tablet. The normal setup takes 2 minutes. The dedicated setup takes about 15 minutes and needs a computer, but the lock then starts with no confirmation, also after a restart.

## Normal Setup: Screen Pinning and Home App

1. Open the app and start a guest mode, for example Photo Booth (Kiosk). The app pins the screen. The first time, **Android asks you to confirm**. Tap to confirm.
2. In the app, open **Settings** and choose **Open Pixture when this tablet starts**. Android opens its Home app chooser. Pick **Pixture Photobooth**.
3. For the app to start in the right mode, also set **Open the app in**. See [Open the App Straight Into a Mode](./open-the-app-in.md).

Guests cannot leave a pinned screen. The operator unpins with the Menu PIN. After a restart the tablet opens the app, the app opens the mode, and Android may ask to confirm the pin again.

## Dedicated Tablet: Device Owner

Use this for a tablet that only ever runs the booth. Once Pixture Photobooth is the device owner, it locks itself without asking.

You need:

- A computer with **adb** (Android platform-tools) and a USB cable.
- A tablet that is **factory reset** and has **no Google account** added. Android only allows this on a fresh device.
- Pixture Photobooth installed on the tablet, and USB debugging turned on.

Steps:

1. Factory reset the tablet. Skip adding a Google account during setup.
2. Install Pixture Photobooth and turn on **Developer options > USB debugging**.
3. Connect the tablet to the computer and run:

```
adb shell dpm set-device-owner io.pixture.photobooth/id.pixapp.pixMobile.PixDeviceAdminReceiver
```

4. When it says the device owner is set, open the app. It locks with no confirmation, also after a restart.

If the command fails, a Google account or another user is usually still on the tablet. Factory reset it again and retry before adding anything.

## Undo It

:::warning
A device owner cannot be removed from Settings, and `adb shell dpm remove-active-admin io.pixture.photobooth/id.pixapp.pixMobile.PixDeviceAdminReceiver` only works for ordinary admins, not for a device owner.
:::

To make a tablet normal again, **factory reset it**. This erases everything on it. Plan for that before you choose this setup.
