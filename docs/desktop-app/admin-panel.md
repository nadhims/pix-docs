---
sidebar_position: 11
title: Operator Menu
description: How to open the booth's hidden operator menu, protect it with a PIN, read its status bar and readiness checklist, and use each of its pages including the Admin Panel.
tags: [desktop-app, admin, settings, operator]
---

# Operator Menu

Every booth-side setting sits behind a hidden operator menu so customers never see it. This page shows how to open it, what the Menu page itself tells you, and what each of its sub-pages does, with a link to the page that covers each in depth. The Admin Panel, the upload queue, print history and app controls are described in full here.

## Opening the Menu

1. Tap the top-right corner of the screen twice within three seconds. The zone is 120 by 120 pixels and carries a faint lock icon. It works on Home, Tutorial, Payment, Template Selection, Capture, Pool Assignment, AI, Filter and Sharing.
2. If the booth has a PIN, the **Enter Admin PIN** pad appears. Type the PIN. A wrong one shows "Incorrect PIN".

Set the PIN in the dashboard under **Booths > booth > Settings > Menu PIN** (4 to 8 digits, **Set PIN**, **Change**, **Disable**). A booth without one shows the notice "Your admin menu is not PIN-protected. Set a PIN in Dashboard > Booths > Settings…". Set a PIN on every booth in a public place.

On the Login screen, before pairing, five taps within two seconds on a hidden area open the Admin Panel directly.

## The Menu Page

The Menu page has a top bar, a card that tells you whether the booth is ready, a **Settings** column on the right and a footer.

### Top bar

Left to right after **Menu**:

- **Internet: Online** or **Internet: Offline**.
- **API:** the server's response time, for example "API: 120ms", or "API: Offline". The dot turns amber at 500 ms.
- **Uploads:** "N waiting" while photos are still queued, or "up to date". See [Offline Mode](./offline-mode.md).
- The plan badge: **Pix Pro**, **Trial until …**, **Event Pass until HH:mm**, **Watermarked**, **Blocked, all N devices active** or **Pix Pro ended, reconnect to check**. Shortly before a license ends it reads **Event Pass ends at HH:mm**, **Trial ends at HH:mm** or **Pix Pro ends …**; the last one also shows when the card payment for Pix Pro did not go through. See [Pix Pro on the Booth](./licence-on-the-booth.md).
- **Start Booth**, in the corner: back to the customer screens.

The API and Uploads readings are hidden on an unpaired booth.

### The ready card

The card names the booth, with "Kiosk mode" under it, and is headed "Ready to start", or "Before you start" when something below needs you. Each thing to check is a row with a green, amber, red or grey mark:

| Row | What it says |
|---|---|
| **Camera** | "… connected", or "Not connected" with a **Camera Settings** link |
| **Printer** | The selected printer, or "Not selected, so sessions won't print." with **Choose printer**. Only when the booth prints |
| **Session price** | "No price set, so sessions run free." |
| **Payments** | "No payment gateway is connected, so paid sessions cannot charge." |
| **Storage running low** / **Storage almost full** | "N GB free. Photos and printing can fail when the disk is full.", with **Free Up Space**. Shows below 3 GB free, and turns red below 1 GB |
| **Clock** | "This computer's clock is … behind" (or ahead). "Fix the date and time in the system settings. Photos and payments are timed by it." Shows when the clock is more than 2 minutes off |
| **Menu PIN** | "Your admin menu is not PIN-protected. Set a PIN in Dashboard > Booths > Settings to prevent unauthorized access." Can be dismissed |
| **Layout** | "You're using the default Pix Starter layout. Customize your booth's appearance in Pix Studio." On Pix Pro, until dismissed |
| **Unpaired** | "Pair to use your own frames, screens and sharing." |

On an iPhone or iPad, the card also lists the steps to turn on Guided Access while it is off.

Under the rows, two previews: **Start screen**, a small picture of what customers see first, and **Templates · N** with the first six templates.

### Settings column

| Button | What it opens |
|---|---|
| **Camera Settings** | Camera device, live view aids, camera exposure, zoom, rotation, hand sign detection. See [Camera Settings](./camera-setup/camera-settings.md) |
| **Printer Settings** | Printer, media size, orientation, copies, alignment, test print. See [Printer Setup](./printer-setup.md) |
| **Capture Settings** | Video and 360 slow-mo settings for a running event. See [Event Video Modes](./event-video-modes.md) |
| **Hardware API** | Local API, CASH-Interface2 F13, keyboard coin input. See [Hardware Payments](./hardware-payments.md) |
| **Admin Panel** | IDs, start on boot, upload queue, print history, preflight check. See below |
| **Use an Event Pass on this computer** | Only when the computer is watermarked or blocked. See [Pix Pro on the Booth](./licence-on-the-booth.md) |
| **Pair with a code** | Moves this computer to another booth or event without logging out, so its Pix Pro moves with it. After the PIN, if one is set, type the 6-digit code on **Enter pairing code**. A wrong code shows "That code didn't work. Check it, or make a new one on the dashboard." The app then reloads on the new booth or event. On an unpaired booth this reads **Pair to your Pixture account** |
| **Exit** | The Exit card, below |

On a phone or tablet the column is shorter: camera, printer once printing is available, **Send logs to Pixture**, the Event Pass button, pairing and **Exit** with **Logout** only.

### The Exit card

**Exit** opens a card with:

- **Exit App**: closes the app. Not on phones and tablets.
- **Logout**: unlinks the computer from the booth. Double-tap it, then enter the PIN if one is set ("Double-tap Logout, then enter the PIN."). Not on an unpaired booth. What Logout does to Pix Pro and an Event Pass is on [Pix Pro on the Booth](./licence-on-the-booth.md#logout-and-pix-pro).
- **Cancel**.

### Footer

The footer shows the account email and the app version as "Pixture Photobooth v…". Support will ask for that version. Next to it is **Check for Updates**, which turns into "Checking for updates…", "Downloading v…", "v… ready to install" with **Restart & Update**, "You're up to date" or "Update check failed". See [Software Updates](./software-updates.md).

On a computer in Event mode the menu also has **Back to events** and **Extend Event Pass 24h**, and **Start Booth** checks the license first. See [Event Mode](./event-mode.md).

## The Admin Panel

The header reads **Admin Settings**. From the top:

- **Info strip**: the booth, organisation and device IDs. Support may ask for the device ID; it is also on the booth's Device tab in the dashboard.
- **Start on boot**: launches the app when the computer starts, so a booth recovers from a power cut on its own. It is on by default. Turn it off here to stop the app opening at startup: the app writes this choice into the Windows Startup list or macOS Login Items every time it opens, so removing it there alone does not last.
- **UPLOAD QUEUE**: every upload waiting to reach Pixture. Filter with the pills **Queued**, **Uploading**, **Done**, **Failed** and **Retrying**. **Process Now** runs the queue immediately. **Clean Storage** removes local copies that have uploaded. **Retry Failed** and **Clear Failed** appear when anything has failed. A line underneath shows cache and disk use. See [Offline Mode](./offline-mode.md).
- **PRINT HISTORY**: recent sessions, each with a **Print** button to reprint. Use it after "Print issue — photo saved." or when a customer asks for another copy.
- **Preflight Check**: runs the booth's own checks (camera, printer, connection) and reports what is not ready. Run it before opening.
- **Back to Menu**.

## Leaving the Menu

Tap **Start Booth**. The booth returns to the Home screen and nothing from the menu is visible to customers. A session that was running when you opened the menu is not affected by anything you changed; changes apply from the next session.

:::tip
Two taps top-right, PIN, **Admin Panel**, **Print** is the fastest reprint. Teach it to whoever staffs the booth.
:::

## Related

- [Pix Pro on the Booth](./licence-on-the-booth.md)
- [Offline Mode](./offline-mode.md)
- [Booth Management](../dashboard/booth-management.md)
- [Software Updates](./software-updates.md)
- [Event Mode](./event-mode.md)
