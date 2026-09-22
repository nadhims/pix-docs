---
sidebar_position: 11
title: Operator Menu
description: How to open the kiosk's hidden operator menu, protect it with a PIN, read its status footer and notices, and use each of its pages including the Admin Panel.
tags: [desktop-app, admin, settings, operator]
---

# Operator Menu

Every booth-side setting sits behind a hidden operator menu so guests never see it. This page shows how to open it, what the Menu page itself tells you, and what each of its sub-pages does, with a link to the page that covers each in depth. The Admin Panel, the upload queue, print history and app controls are described in full here.

## Opening the Menu

1. Tap the top-right corner of the screen twice within three seconds. The zone is 120 by 120 pixels and carries a faint lock icon. It works on Home, Tutorial, Payment, Template Selection, Capture, Pool Assignment, AI, Filter and Sharing.
2. If the booth has a PIN, the **Enter Admin PIN** pad appears. Type the PIN. A wrong one shows "Incorrect PIN".

Set the PIN in the dashboard under **Booths > booth > Settings > Menu PIN** (4 to 8 digits, **Set PIN**, **Change**, **Disable**). A booth without one shows the notice "Your admin menu is not PIN-protected. Set a PIN in Dashboard > Booths > Settings…". Set a PIN on every booth in a public place.

On the Login screen, before pairing, five taps within two seconds on a hidden area open the Admin Panel directly.

## The Menu Page

The buttons, top to bottom:

| Button | What it opens |
|---|---|
| **Start Booth** | Back to the guest screens |
| **Camera Settings** | Camera device, live view aids, Canon exposure, zoom, rotation, hand sign detection. See [Camera Settings](./camera-setup/camera-settings.md) |
| **Printer Settings** | Printer, media size, orientation, copies, alignment, test print. See [Printer Setup](./printer-setup.md) |
| **Capture Settings** | Video and 360 slow-mo settings for a running event. See [Event Video Modes](./event-video-modes.md) |
| **Hardware API** | Local API, CASH-Interface2 F13, keyboard coin input. See [Hardware Payments](./hardware-payments.md) |
| **Admin Panel** | IDs, start on boot, upload queue, print history, preflight check. See below |
| **Use a pass on this device** | Only when the computer is watermarked or blocked. See [Licence on the Booth](./licence-on-the-booth.md) |
| **Logout** | Unlinks the computer from the booth. Needs a double-click, plus the PIN if one is set. On an unpaired booth this reads **Pair to your Pixture account** instead |
| **Exit App** | Closes the app |
| **Check for Updates** / **Restart & Update** | See [Software Updates](./software-updates.md) |

### Footer and badge

The footer shows the booth name, the account email, the licence badge (**Pix Pro**, **Trial until …**, **Pass until HH:mm**, **Watermarked**, **Blocked, all N devices active** or **Pix Pro ended, reconnect to check**), a status line "Internet: Online/Offline · API: Nms · Uploads: N waiting / up to date", and the app version as "Pix v…". Support will ask for that version.

### Notices

The Menu page surfaces anything that needs you:

- "Unpaired. Pair to use your own frames, screens and sharing." on a booth running without an account.
- The missing-PIN notice above.
- A notice that the booth is running the default layout rather than one of your UI projects.
- **Storage low** with a **Free Up Space** button when free disk drops below 3 GB.
- A clock banner when the computer's clock is more than 2 minutes off. Fix the clock; payments and licence checks depend on it.
- A payment-failed banner when the card payment for Pix Pro did not go through.

## The Admin Panel

The header reads **Admin Settings**. From the top:

- **Info strip**: the booth, organisation and device IDs. Support may ask for the device ID; it is also on the booth's Device tab in the dashboard.
- **Start on boot**: launches the app when the computer starts, so a booth recovers from a power cut on its own.
- **UPLOAD QUEUE**: every upload waiting to reach Pixture. Filter with the pills **Queued**, **Uploading**, **Done**, **Failed** and **Retrying**. **Process Now** runs the queue immediately. **Clean Storage** removes local copies that have uploaded. **Retry Failed** and **Clear Failed** appear when anything has failed. A line underneath shows cache and disk use. See [Offline Mode](./offline-mode.md).
- **PRINT HISTORY**: recent sessions, each with a **Print** button to reprint. Use it after "Print issue — photo saved." or when a guest asks for another copy.
- **Preflight Check**: runs the booth's own checks (camera, printer, connection) and reports what is not ready. Run it before opening.
- **Back to Menu**.

## Leaving the Menu

Tap **Start Booth**. The booth returns to the Home screen and nothing from the menu is visible to guests. A session that was running when you opened the menu is not affected by anything you changed; changes apply from the next session.

:::tip
Two taps top-right, PIN, **Admin Panel**, **Print** is the fastest reprint. Teach it to whoever staffs the booth.
:::

## Related

- [Licence on the Booth](./licence-on-the-booth.md)
- [Offline Mode](./offline-mode.md)
- [Booth Management](../dashboard/booth-management.md)
- [Software Updates](./software-updates.md)
