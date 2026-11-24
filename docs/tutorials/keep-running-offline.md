---
sidebar_position: 25
title: Keep the Booth Running Offline
description: Prepare a booth for a venue with bad or no internet, know what keeps working offline (sessions, prints, QR links, payment codes and vouchers), and make sure every photo uploads before anyone resets the computer.
tags: [tutorials, offline, uploads, internet, payments]
---

# Keep the Booth Running Offline

In this tutorial you will get a booth ready for a venue with weak or no internet, run sessions through an outage, watch the photos waiting to upload, and send them once the line is back. Allow 10 minutes before the event and 5 minutes after.

The booth is built for venue internet: every photo is saved on the booth computer first and uploaded later. The one way to lose photos is to wipe or reset that computer before they have uploaded. An operator did exactly that: the PC was reset with a day of photos still waiting, and those photos were gone. Step 4 makes sure it never happens to you.

## When to Use It

- **An event rental at a wedding hall, beach or outdoor venue** where the Wi-Fi is weak, overloaded or missing.
- **A self-service mall booth** whose internet drops for an hour on a busy Saturday.
- **A pop-up box running on a phone hotspot** that comes and goes.
- **Before you reset, reinstall, replace or move a booth computer:** check that nothing is still waiting to upload.

Not a replacement for internet when you sell sessions with QR payments: customers pay with their own phones instead (Step 2), which takes a little longer.

## Before You Start

- Any plan. A Pix Pro computer stays Pix Pro while offline; see [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md) for what happens if the plan ends during an outage.
- A booth that has been online at least once since it was set up, so it has its screens, templates, menu PIN and payment-code key on the computer.
- The menu PIN, if the booth has one.

## Prepare

- **Open the booth online before you leave for the venue,** and run one test session. That downloads the latest screen design, templates and settings.
- **Change designs, templates and prices before you go,** not at the venue. An offline booth keeps running with what it last downloaded.
- **Bring a backup line:** a phone hotspot or a 4G router. Even a weak connection for a few minutes after the event lets the photos upload.
- **Check free disk space.** Waiting photos stay on the computer. A booth that is offline for days needs room for them.

## Step 1: Check the booth is up to date

1. Open the operator menu (tap the top-right corner twice).
2. Look at the bar at the top: **Internet: Online**, and **Uploads: up to date**.
3. Tap **Start Booth**.

If **Uploads** shows a number waiting, let it reach **up to date** before you unplug and travel.

## Step 2: Run sessions offline

When the internet drops, the booth carries on:

- **Photos, filters and prints** run on the booth computer as usual.
- **The QR code still shows** on the Sharing screen. If the photos have not uploaded yet, the screen tells the customer there is no connection and that the photos will appear at the link once the booth reconnects. The link works once the booth catches up, so tell customers to keep the photo of the QR.
- **QR payments need internet.** On a booth that takes payments, the Payment screen changes to **No internet at this booth** with a QR code. The customer scans with their own phone, pays there on their own mobile data, and types the code from their phone into the booth with **Enter Code**. The booth checks the code itself.
- **Voucher codes** from your online voucher shop or a central cashier (6, 7 or 8 characters) are checked on the booth itself, so they work offline too.
- **Coin and note acceptors** talk to the booth directly and keep working. A card reader needs its own connection to the bank.
- **The menu PIN** works with the last PIN the booth downloaded.

![No internet at this booth with the payment QR and Enter Code marked](/img/docs/steps/tutorials-keep-running-offline--offline-payment.webp)

## Step 3: Watch the photos waiting to upload

1. In the operator menu, the top bar shows **Uploads** with a number waiting while photos wait for the internet.
2. Tap **Admin Panel**. Under **Uploads**, one row per session shows its state: **Uploaded**, **Uploading**, **Waiting** or **Failed**. Tap a state to show only those sessions, and **Today**, **Yesterday**, **Last 7 days** or **All** to pick the days.
3. When the internet is back, the booth sends them by itself. To send them now, tap **Upload now**.

![Admin Settings with Uploads, the Waiting count and Upload now marked](/img/docs/steps/tutorials-keep-running-offline--uploads.webp)

A network failure never uses up a session's tries: the booth keeps trying until the line is back. Sessions show **Failed** only when Pixture refused an upload many times. Tap **Retry failed** to try them again.

## Step 4: Check before a reset, reinstall or new computer

Waiting photos exist only on that computer. Before anyone resets Windows, reinstalls the app, logs the booth out or swaps the computer:

1. Connect the booth to the internet.
2. Open **Admin Panel** and pick **All** under **Uploads**.
3. Make sure **Waiting**, **Uploading** and **Failed** all show 0, and the header says "All uploaded". If not, tap **Upload now** (or **Retry failed**) and wait.
4. Only then reset or replace the computer.

## Check It Worked

- After the outage, the operator menu shows **Internet: Online** and **Uploads: up to date**.
- **Admin Panel > Uploads** shows the day's sessions as **Uploaded**.
- The sessions are in the dashboard's **Gallery**, and the customers' QR links open their photos.

## Tips

- **Never tap Clear failed to "tidy up".** It deletes those photos from the computer for good; they were never uploaded. Try **Retry failed** first.
- **Clean storage is safe for uploaded photos only.** It deletes the photo files kept on the computer; waiting photos are kept, but **Print again** stops working for the cleaned sessions.
- **The booth makes room by itself** when free disk space drops below 1 GB, deleting already-uploaded files first, and warns you in the menu with **Free Up Space** below 3 GB.
- **The dashboard shows the booth Offline** after it has been out of touch for a while. That is normal during an outage; its photos arrive when it reconnects.
- **Put a small sign by the booth** at a venue with bad internet: the photos appear at the QR link once the booth is back online.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| **Uploads** stays on "waiting" although the internet is back | The booth has not retried yet | Tap **Upload now** in **Admin Panel** |
| Sessions show **Failed** | Pixture refused the upload many times | Tap **Retry failed**; if they fail again, send the booth logs to support before doing anything else |
| The Payment screen says "Offline payment isn't set up on this booth yet." | The booth has not been online since it was set up, so it has no payment-code key | Connect the booth once, then try again |
| A customer's QR link shows no photos | The session has not uploaded yet | Get the booth online and tap **Upload now**; the link fills in |
| Photos are missing after the computer was reset | They had not uploaded before the reset | Contact support at once and do not touch that computer again. See [Photos are missing after the computer was reset](../troubleshooting/uploads-and-sharing.md#photos-are-missing-after-the-computer-was-reset) |
| The booth shows an old design or old prices | It is offline and runs with what it last downloaded | Get it online; it updates by itself |

## Related

- [Offline Mode](../desktop-app/offline-mode.md)
- [Lock the Booth and Use the Operator Menu](./operator-menu.md)
- [Upload and Sharing Problems](../troubleshooting/uploads-and-sharing.md)
- [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md)
