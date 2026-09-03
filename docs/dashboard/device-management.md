---
sidebar_position: 6
title: Device Management
description: Pair a kiosk computer to a booth with a one-time code, and rename or unlink devices from the dashboard.
tags: [dashboard, devices, pairing]
---

# Device Management

A **device** is the computer running the Pix Desktop App. Each device is paired to exactly one booth.

## Pairing a Device

1. In the dashboard, open **Booths** and select the booth.
2. Open the **Device** tab and click **Generate code**. A 6-digit code appears; it is valid for a short time.
3. On the kiosk computer, open the Pix Desktop App. The pairing screen is the first thing you see on a fresh install.
4. Type the 6-digit code. The device downloads that booth's templates, kiosk design, filters, and pricing and goes straight to the start screen.

No account password is ever typed on the kiosk, so nothing sensitive is left on a machine in a public place.

## Licensed or Watermarked

A licence lives on the computer running the Pix Desktop App. Move it between computers from the Devices page. A paired computer with no licence still runs your booth's frames and screens, with the Pixture watermark on every photo and print, so you can rehearse before the event. When the kiosk starts watermarked it says so on the start screen and points to the operator menu, where **Use a pass on this device** puts one of your unused passes on it.

## Renaming or Unlinking

From the same **Device** tab you can:

- **Rename** the device (for example "Mall Kiosk PC 2") so it is easy to recognise in Health.
- **Unlink** it. The kiosk returns to the pairing screen and stops acting as that booth. Photo sessions already uploaded stay in your account.

Unlink a device before you sell, repurpose, or send a computer for repair.

## Replacing a Computer

Generate a new code from the booth's **Device** tab and pair the new machine. The booth's settings live in the dashboard, not on the computer, so the new machine is identical after pairing. Then on the Devices page choose **Move a licence here** and pick the old computer, and unlink the old device once the new one is running. If a Windows update makes an old computer appear twice, release the old entry.

## Offline Grants

A paired computer keeps working without internet: it holds a signed offline grant for its licence, so it can start photo sessions, print, and queue uploads until it reconnects. See [Offline Mode](../desktop-app/offline-mode.md).

:::caution One computer to a booth
Two computers cannot be paired to the same booth at the same time. Pairing a second computer unlinks the first; the licence stays on the computer that holds it.
:::
