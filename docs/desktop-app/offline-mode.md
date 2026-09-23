---
sidebar_position: 9
title: Offline Mode
description: What the booth does when the venue internet drops, how the upload queue retries, what the operator sees in the Admin Panel, and how the licence and payments behave offline.
tags: [desktop-app, offline, queue, resilience]
---

# Offline Mode

Venue internet is the least reliable part of a booth, so the Pix Desktop App is built to keep taking, printing and sharing photos through it. This page explains what happens during a session when the line drops, how the upload queue retries and when it gives up, what the Admin Panel shows, how storage is kept under control, and how vouchers and the licence behave without internet.

## During a Session

Nothing stops. Capture, review, filters and printing run entirely on the booth, and the kiosk design, templates and branding are cached on the computer, so the booth runs with its last synced setup. Every photo is saved locally first and placed in the upload queue. On the Sharing screen the QR code still appears; if nothing has uploaded after 15 seconds the guest reads "No connection — your photos will appear at this link once the booth reconnects." The link works as soon as the booth catches up.

## The Upload Queue

Every session produces uploads: the session record, the composite, the singles, the GIF and the live photo. The queue keeps them on disk, survives app restarts and reboots, and processes them in capture order.

The queue tells two kinds of failure apart:

- **Network failures** (no DNS, connection reset, the network changed) retry every 30 seconds, doubling up to a 5 minute wait, for as long as it takes. They never count toward giving up, so a flaky venue line cannot lose a photo.
- **Server errors** (Pixture answered, but rejected the upload) back off up to an hour between tries and give up after 20 attempts for a session record or 30 for a file. Those items show as **Failed** in the Admin Panel.

Completed items are pruned after 7 days, failed items after 30. Photos that have uploaded are safe in your Gallery regardless of what happens to the booth afterwards.

## Watching the Queue

The operator menu footer shows a status line: "Internet: Online/Offline · API: Nms · Uploads: N waiting / up to date". For detail, open **Admin Panel** and scroll to **UPLOAD QUEUE**:

- The filter pills **Queued**, **Uploading**, **Done**, **Failed** and **Retrying** narrow the list.
- **Process Now** runs the queue immediately instead of waiting for the next retry.
- **Retry Failed** puts every Failed item back in the queue; **Clear Failed** discards them. Both appear only when something has failed.
- **Clean Storage** removes local copies of items that have already uploaded.

A cache and disk line underneath shows how much space the booth is using. See [Operator Menu](./admin-panel.md).

## Storage

The booth cleans up on its own when free disk space drops below 1 GB, and warns you in the operator menu, with a **Free Up Space** button, when it drops below 3 GB. A booth that has been offline for days can hold a lot of pending uploads; get it online before the disk fills.

## Payments Offline

- **Vouchers** keep working. Offline voucher codes (6, 7 or 8 characters) are checked on the booth itself, so a code from the online shop or a central cashier redeems without internet.
- **QR payments** need the gateway, so they need internet. A guest cannot pay by QRIS or Stripe QR while the line is down.
- **Coin and card readers** attached to the computer talk to the booth locally and keep working; the session is recorded as paid and uploaded when the line returns.

## The Licence Offline

The booth does not phone home to stay licensed. If a pass, trial or subscription expires while the booth is offline, the booth turns **watermarked**, never blocked, and the badge reads "Pix Pro ended, reconnect to check". It clears on the next check-in if the account still has a place for the computer. See [Licence on the Booth](./licence-on-the-booth.md).

## Heartbeat and the Dashboard

The booth sends a heartbeat every 5 minutes while idle. The dashboard's Health page, Booths list and booth page show the booth as **Offline** once 12 minutes have passed without one. A short outage will not flip the status; a booth showing Offline has been out of touch for a while.

:::tip
For a venue you know has no internet, launch the app and run one test session while online first. That caches the kiosk design and templates so the booth is ready when you arrive.
:::

## Related

- [Operator Menu](./admin-panel.md)
- [Sharing](./session-flow/sharing.md)
- [Licence on the Booth](./licence-on-the-booth.md)
- [Troubleshooting](./troubleshooting.md)
