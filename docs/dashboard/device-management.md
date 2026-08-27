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

## Renaming or Unlinking

From the same **Device** tab you can:

- **Rename** the device (for example "Mall Kiosk PC 2") so it is easy to recognise in Health.
- **Unlink** it. The kiosk returns to the pairing screen and stops acting as that booth. Photo sessions already uploaded stay in your account.

Unlink a device before you sell, repurpose, or send a computer for repair.

## Replacing a Computer

Generate a new code from the booth's **Device** tab and pair the new machine. The booth's settings live in the dashboard, not on the computer, so the new machine is identical after pairing. Unlink the old device once the new one is running.

## Offline Grants

A paired booth keeps working without internet: the device holds a signed offline grant for its licence, so it can start photo sessions, print, and queue uploads until it reconnects. See [Offline Mode](../desktop-app/offline-mode.md).

:::caution One device per booth
Two computers cannot be paired to the same booth at the same time. Pairing a second device unlinks the first.
:::
