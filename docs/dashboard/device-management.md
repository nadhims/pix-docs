---
sidebar_position: 6
title: Computers and Pairing
description: The Computer tab of a booth, pairing a computer with a 10-minute code, replacing a computer, and what Unlink, Remove and Deactivate each do.
tags: [dashboard, computers, pairing]
---

# Computers and Pairing

Each computer running the Pixture Photobooth app is paired to exactly one booth with a code from the dashboard. Everything about the computer lives on the booth's **Computer** tab.

![Booth Device tab before pairing: Device card with Bind existing device, and Pairing & access with Generate code](/img/docs/booth-device-tab-unpaired.webp)

## Pair Your Booth First

A booth with no computer shows the status **Unknown**, a dash for the plan and "No computer" in the grid. The first time you open it, a popup says "Pair your booth first: [booth name] isn't paired to a computer yet. Generate a code and enter it on the booth app to go live." with **Generate pairing code** and **Maybe later**.

![Pair your booth first popup on an unpaired booth with Generate pairing code](/img/docs/booth-pair-first-popup.webp)

## Pairing a Computer

1. Install the Pixture Photobooth app on the booth PC. See [Install the Pixture Photobooth app](../getting-started/download-desktop-app.md).
2. On the booth's **Computer** tab, under **Pairing & access**, click **Generate code**. The **Pair a computer** popup shows a 6-digit code with "Open Pixture Photobooth on the booth computer and enter this Pairing Code." and a countdown from 10 minutes. Until the app is installed on one of your computers, the popup shows two steps instead: "Install Pixture Photobooth on the booth computer" with **Download for Windows** and **Download for Mac**, then "Open it and enter this code". Use **Copy code**, or **New code** if it expires. If your free trial is unused and no Pix Pro or Event Pass is free for the computer, the popup first offers **Start free trial** or **Pair without the trial**.
3. Type the code on the booth's pairing screen.
4. Click **Done**. The computer downloads the booth's templates, screen design, filters and prices and goes to the start screen.

![Pair a computer popup showing the 6-digit code, Code expires in, Copy code, New code, Done](/img/docs/booth-pairing-code.webp)

On a Pix Pro account, a spare place on your subscription attaches itself at this first check-in, so the computer runs Pix Pro straight away. An Event Pass is never started automatically: use one at the booth when the day starts.

## The Computer Card

![Booth Device tab with a paired computer: name, fingerprint, last seen, Rename device, Unlink, Remove](/img/docs/booth-device-tab-paired.webp)

| Field or button | What it is |
|---|---|
| Name | Click **Rename computer** to name it by place ("Mall Kiosk PC 2"); the Computers page lists it by this name |
| Fingerprint | The computer's hardware id, with a copy button |
| Registered, Last seen | When it was paired and when it last checked in |
| **Bind existing computer** | Shown only while nothing is paired: attach a computer that is already registered on your account |
| **Generate code** | Greyed out while a computer is linked |
| **Unlink** | Detaches the computer from this booth |
| **Remove** | In the Danger zone: permanently retires the computer |

## Unlink, Remove or Deactivate

Three actions look alike and do different things.

| Action | Where | What happens |
|---|---|---|
| **Unlink** | Booth > Computer | The computer signs out within a few minutes and stops acting as this booth. Pix Pro from a subscription or the free trial returns to your account. A running Event Pass keeps running with the same end time, and the next event computer that starts its booth continues it. Photo sessions already uploaded stay in your account |
| **Remove** | Booth > Computer, Danger zone | Retires the computer for good. Use it for a computer you have sold or scrapped. Pix Pro on it can be reused, and a running Event Pass moves on the same way as with **Unlink** |
| **Deactivate** | Computers page, **Manage** menu | Frees the computer's place on your subscription for another computer. The computer stays paired but cannot start a session until a place is free again. A running Event Pass on it keeps running, and the next event computer that starts its booth continues it |

Logging out of the booth does the same as **Unlink**. Unlink a computer before you sell it, repurpose it or send it for repair. A computer in Kiosk mode cannot continue a running Event Pass; only an event computer can.

## Replacing a Computer

1. Open the booth's **Computer** tab. If **Generate code** is greyed out because the old computer is still linked, click **Unlink** first.
2. Click **Generate code** and pair the new computer.

The booth's settings live in the dashboard, not on the computer, so the new machine is identical after pairing. Pix Pro from a subscription or the trial reaches it at its first check-in. A running Event Pass waits for the next event computer that starts its booth. Replacing a booth PC always works, even on Pix Starter.

## One Computer per Booth

Two computers cannot be paired to the same booth at once. **Unlink** the first before you pair the next.

## When Pairing Is Refused

- **Pix Starter runs one computer.** Once one booth has a paired computer, **Generate code** on a second booth is refused. The popup says "Pix Starter runs on one computer" with **Buy Pix Pro** and **Manage computers**. Add Pix Pro, buy an Event Pass or start the free trial first.
- **Pix Pro with every computer in use.** The popup shows "All N computers are in use" with **Manage computers** and **Add computers**. Deactivate a computer on the [Computers](./billing.md) page or click **Add computer** there, then generate the code again. If you hold an unused Event Pass, the computer pairs anyway and waits, blocked, until you use the Event Pass on it at the booth.
- **Event booths** are never refused or blocked: they run watermarked outside a live event and the event covers them on the day. See [Events](./events.md).

:::caution Pix Pro never moves from the booth
Taking Pix Pro off one computer and giving it to another happens only on the dashboard: **Deactivate** or **Unlink** the first, and the next computer that checks in picks it up. The booth's operator menu can use an Event Pass, but only for the computer it runs on.
:::

## Related

- [Computers](./billing.md)
- [Add or Move a Computer](../tutorials/add-or-move-a-computer.md)
- [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md)
- [Offline Mode](../desktop-app/offline-mode.md)
