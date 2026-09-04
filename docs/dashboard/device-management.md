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
3. On the kiosk computer, open the Pix Desktop App. The pairing screen is the first thing you see on a fresh install. You do not have to pair straight away: tap **Try it without an account** to shoot on a built-in frame, watermarked, and pair the computer later.
4. Type the 6-digit code. The device downloads that booth's templates, kiosk design, filters, and pricing and goes straight to the start screen. If your account has a spare licence or pass, the computer claims it automatically at this first check-in; with nothing to spare it starts watermarked instead.

:::note When every licence is already in use
**Generate code** will not issue one: the dashboard says every licence is in use and offers to buy another or release one from another computer. Free up a licence, then generate the code and pair as usual.
:::

No account password is ever typed on the kiosk, so nothing sensitive is left on a machine in a public place.

## Licensed, Watermarked, or Blocked

A licence lives on the computer running the Pix Desktop App, and your account follows your licences. While you hold none the account is **Pix Starter**: every paired computer still runs your booth's frames and screens, with the Pixture watermark on every photo and print, so you can rehearse before the event.

The moment one licence is active, a Pix Pro subscription, a running Day Pass, or the free trial, the account is **Pix Pro** and has one slot per licence. A computer past your licences is **blocked**: it stays paired, but it cannot start a session until you release another computer on the Licenses page, move a licence to it, use a pass on it, or buy another licence. A Pix Pro account never has a watermarked computer.

When the kiosk starts watermarked and you have a pass, the trial, or a licence on another computer to offer, the start screen says so once and points to the operator menu, where **Use a Day Pass** puts one of your unused passes on it. A blocked computer says so every time it returns to the start screen, since nothing can start until a licence lands on it.

Event station computers are the exception: they are never blocked. Outside a live event they run watermarked so you can set them up, and the event licenses them when it goes live. See [Events](./events.md).

## Renaming or Unlinking

From the same **Device** tab you can:

- **Rename** the device (for example "Mall Kiosk PC 2") so it is easy to recognise in Health.
- **Unlink** it. The kiosk returns to the pairing screen and stops acting as that booth. Photo sessions already uploaded stay in your account.

Unlink a device before you sell, repurpose, or send a computer for repair.

## Replacing a Computer

Open the Licenses page and **Release** the old computer first: while it still holds the licence, a new machine cannot get a pairing code if that was your last free slot. Then open the dead booth's **Device** tab, **Generate code**, and pair the new machine. The booth's settings live in the dashboard, not on the computer, so the new machine is identical after pairing, and it picks up the freed licence automatically at its first check-in. Unlink the old device once the new one is running. If a Windows update makes an old computer appear twice, release the old entry.

## Offline Grants

A paired computer keeps working without internet: it holds a signed offline grant for its licence, so it can start photo sessions, print, and queue uploads until it reconnects. The grant carries the licence's end time. If the licence ends while the computer has lost its connection, the computer runs watermarked rather than blocked, with the note "Licence ended, reconnect to check", until it reaches the server again. A booth that has lost touch with the server is never stopped by the kiosk's own clock. See [Offline Mode](../desktop-app/offline-mode.md).

:::caution One computer to a booth
Two computers cannot be paired to the same booth at the same time. Pairing a second computer unlinks the first; the licence stays on the computer that holds it.
:::
