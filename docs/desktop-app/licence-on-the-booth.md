---
sidebar_position: 8
title: Licence on the Booth
description: What the licence badge in the operator menu means, what watermarked and blocked look like on the booth, the warnings before a pass ends, and what Logout does to Pix Pro.
tags: [desktop-app, licensing, pix-pro, day-pass]
---

# Licence on the Booth

Pix Pro lives on the computer, not the booth profile, and the booth shows you its state in the operator menu. This page explains each badge value, what a watermarked or blocked computer does, how to use a pass at the venue, the warnings before a pass or trial ends, what happens offline, and what Logout does to the licence. Buying and moving licences happens on the dashboard's **Licenses** page; see [Device Management](../dashboard/device-management.md).

## The Badge

Open the operator menu (two taps on the top-right corner). The footer shows the booth name, the account email and a licence badge:

| Badge | Meaning |
|---|---|
| **Pix Pro** | This computer holds a Pix Pro subscription place. Clean output. |
| **Trial until …** | The free 3-day trial is running on this computer. Clean output. |
| **Pass until HH:mm** | A Day Pass is running on this computer until that time. Clean output. |
| **Watermarked** | Pix Starter, or a licence that ran out. The booth runs, everything carries the Pixture watermark. |
| **Blocked, all N devices active** | A Pix Pro account whose device places are all in use. This computer cannot start sessions. |
| **Pix Pro ended, reconnect to check** | The licence expired while the booth was offline. Watermarked until it can check in. |

The same states appear as the Plan badge on the dashboard's Booths list and in the License column of the Licenses table.

## Watermarked

A watermarked computer keeps working: guests take photos, print and share. The Pixture watermark is placed on the photos, the prints, the GIFs and the videos. The Payment screen is skipped, so a watermarked booth cannot charge. Pix Starter is always watermarked; a Pix Pro or Day Pass computer becomes watermarked when the licence ends and the account has no free place to give it.

## Blocked

On a Pix Pro account, a computer without a licence is blocked rather than watermarked: it refuses to start sessions and shows "Device limit reached". Guests see "Please call the operator." To free it:

1. On the dashboard, open **Licenses**.
2. Either click **Deactivate** on a computer you no longer use, which frees its place, or click **Add more devices** to buy another place.
3. The blocked computer picks the licence up on its next check-in.

Only the dashboard moves Pix Pro between computers. There is nothing on the booth that takes a licence from another computer.

## Use a Pass on This Device

When the computer is watermarked or blocked, the operator menu shows **Use a pass on this device**. Tap it to put an unspent Day Pass from your account on this computer for the next 24 hours. The button sits behind the menu PIN, so a guest cannot spend your passes; the prompt on the Home screen is information only. Passes are bought on the Licenses page under **Passes > Buy passes**.

## Warnings Before It Ends

Sixty minutes and fifteen minutes before a Day Pass or the free trial ends, the booth shows a notice on the idle Home screen. When the time comes, a popup names exactly what ended: the Day Pass, the free trial, or Pix Pro on this computer. Its **Manage devices** button shows a QR code to `pixture.io/licenses` so you can sort it out from your phone while standing at the booth.

Two things never happen mid-session: a running photo session is never downgraded or stopped because the licence changed, and a session that started clean finishes clean.

## Offline

The booth does not need the internet to stay licensed. If the licence expires while the booth is offline, the booth turns watermarked rather than blocked and the badge reads "Pix Pro ended, reconnect to check". As soon as it reconnects it checks in, and a renewed subscription or a freed place clears the watermark on its own.

## Logout and the Licence

**Logout** in the operator menu (a double-click, plus the PIN if one is set) unlinks the computer from its booth:

- **Pix Pro** and the **free trial** return to your account's pool, so the place is free for the next computer that pairs.
- **A Day Pass stays on the computer.** It cannot wait in the pool or move, and it keeps running until its 24 hours are up. Do not log out a computer with a pass on it unless you mean to leave the pass there.

The same rule applies to **Unlink** on the booth's Device tab in the dashboard, and to a replacement computer pairing with a new code: the licence follows to the new computer. See [Add or Move a Computer](../tutorials/add-or-move-a-computer.md).

:::info
Say "device" or "computer" when talking to support: the licence belongs to the computer, and a booth profile with no computer linked shows a dash instead of a badge.
:::

## Related

- [Device Management](../dashboard/device-management.md)
- [Add or Move a Computer](../tutorials/add-or-move-a-computer.md)
- [Plans](../pricing/plans.md)
- [Operator Menu](./admin-panel.md)
