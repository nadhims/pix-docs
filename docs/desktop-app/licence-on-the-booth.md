---
sidebar_position: 8
title: Pix Pro on the Booth
description: What the Pix Pro badge in the operator menu means, what watermarked and blocked look like on the booth, how to use an Event Pass, the warnings before it ends, and what Logout does to Pix Pro.
tags: [desktop-app, pix-pro, event-pass]
---

# Pix Pro on the Booth

Pix Pro lives on the computer, not the booth profile, and the booth shows you its state in the operator menu. This page explains each badge value, what a watermarked or blocked computer does, how to use an Event Pass at the venue, the warnings before an Event Pass or trial ends, what happens offline, and what Logout does to Pix Pro. Buying and moving Pix Pro happens on the dashboard's **Devices** page; see [Device Management](../dashboard/device-management.md).

## The Badge

Open the operator menu (two taps on the top-right corner). The footer shows the booth name, the account email and a plan badge:

| Badge | Meaning |
|---|---|
| **Pix Pro** | This computer holds a Pix Pro subscription place. Clean output. |
| **Trial until …** | The free 3-day trial is running on this computer. Clean output. |
| **Event Pass until HH:mm** | An Event Pass is running on this computer until that time. Clean output. |
| **Watermarked** | Pix Starter, or Pix Pro that ran out. The booth runs, everything carries the Pixture watermark. |
| **Blocked, all N devices active** | A Pix Pro account whose device places are all in use. This computer cannot start sessions. |
| **Pix Pro ended, reconnect to check** | Pix Pro expired while the booth was offline. Watermarked until it can check in. |

The same states appear as the Plan badge on the dashboard's Booths list and in the Plan column of the Devices table.

## Watermarked

A watermarked computer keeps working: guests take photos, print and share. The Pixture watermark is placed on the photos, the prints, the GIFs and the videos. The Payment screen is skipped, so a watermarked booth cannot charge. Pix Starter is always watermarked; a computer on Pix Pro or an Event Pass becomes watermarked when that ends and the account has no free place to give it.

## Blocked

On a Pix Pro account, a computer without Pix Pro is blocked rather than watermarked: it refuses to start sessions and shows "Device limit reached". Guests see "Please call the operator." To free it:

1. On the dashboard, open **Devices**.
2. Either click **Deactivate** on a computer you no longer use, which frees its place, or click **Buy license** to buy another place.
3. The blocked computer picks up Pix Pro on its next check-in.

Only the dashboard moves Pix Pro between computers. There is nothing on the booth that takes Pix Pro from another computer.

## Use an Event Pass on This Computer

When the computer is watermarked or blocked, the operator menu shows **Use an Event Pass on this computer**. Tap it to start one of your unused Event Passes on this computer for the next 24 hours. The button sits behind the menu PIN, so a guest cannot use up your Event Passes; the prompt on the Home screen is information only.

On an event, the booth asks first: "Use an Event Pass for today?" Tap **Use Event Pass** to start one, or **Use Pix Pro** if the computer already has a Pix Pro subscription place.

Event Passes are bought on the Devices page with **Buy Event Passes** on the **Event Passes** card.

## Warnings Before It Ends

Sixty minutes and fifteen minutes before an Event Pass or the free trial ends, the booth shows a notice on the idle Home screen. When the time comes, a popup names exactly what ended, for example "Your Event Pass has ended", the free trial, or Pix Pro on this computer. Its **Manage devices** button shows a QR code to your Devices page so you can sort it out from your phone while standing at the booth.

Two things never happen mid-session: a running photo session is never downgraded or stopped because Pix Pro changed, and a session that started clean finishes clean.

## Offline

The booth does not need the internet to keep Pix Pro. If Pix Pro expires while the booth is offline, the booth turns watermarked rather than blocked and the badge reads "Pix Pro ended, reconnect to check". As soon as it reconnects it checks in, and a renewed subscription or a freed place clears the watermark on its own.

## Logout and Pix Pro

**Logout** in the operator menu (a double-click, plus the PIN if one is set) unlinks the computer from its booth:

- **Pix Pro** and the **free trial** return to your account, so the place is free for the next computer that pairs.
- **A running Event Pass stays on the computer.** It cannot go back to your account or move, and it keeps running until its 24 hours are up. Do not log out a computer with a running Event Pass unless you mean to leave it there.

The same rule applies to **Unlink** on the booth's Device tab in the dashboard, and to a replacement computer pairing with a new code: Pix Pro follows to the new computer. See [Add or Move a Computer](../tutorials/add-or-move-a-computer.md).

:::info
Say "device" or "computer" when talking to support: Pix Pro belongs to the computer, and a booth profile with no computer linked shows a dash instead of a badge.
:::

## Related

- [Device Management](../dashboard/device-management.md)
- [Add or Move a Computer](../tutorials/add-or-move-a-computer.md)
- [Plans](../pricing/plans.md)
- [Operator Menu](./admin-panel.md)
