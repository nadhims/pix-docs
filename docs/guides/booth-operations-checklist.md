---
sidebar_position: 1
title: Booth Operations Checklist
description: What to check before opening, during the day, at closing and once a week to keep a Pixture booth running without surprises.
tags: [guides, checklist, operations]
---

# Booth Operations Checklist

A smooth booth day comes down to a few checks at the right moments. Run through this list when you open, glance at the dashboard during the day, close properly, and do a short review once a week. At the end you know the booth is licensed, printing, uploading and up to date.

## Before Opening

1. Plug the computer into **power** and switch off sleep for the day.
2. Connect the camera, switch it on and check its battery. On a Canon, set the body to M, Av or Tv for manual control from the kiosk.
3. Load **printer paper and ribbon**.
4. Open the operator menu (tap the top-right corner of the kiosk twice), go to **Printer Settings** and press the test print button. Guest printing stays disabled until a printer is selected under **PRINTER DEVICE**.
5. Check the footer of the operator menu: **Internet: Online**.
6. Check the licence badge in the same footer. It should read **Pix Pro**, **Pass until** a time later than closing, or **Trial until** a later date. **Watermarked** means the account has no Pix Pro; **Blocked, all N devices active** means this computer needs a place on your subscription. Fix either on the **Licenses** page of the dashboard, or tap **Use a pass on this device**.
7. Tap **Start Booth** and leave the kiosk on the start screen.
8. Run one full photo session: capture, print and scan the QR on the Sharing screen with your phone.

:::tip
Venue Wi-Fi is the most common failure on launch day. Bring a phone hotspot as a backup.
:::

## During the Day

1. Open **Health** in the Pixture dashboard from your phone. Each booth shows Status, Issues, Today, Paper and Last seen. A booth is online when it has checked in within the last 12 minutes.
2. Watch the **Paper** column and replace media before it runs out.
3. On the kiosk, glance at the operator menu footer: **Uploads: up to date** is what you want. **Uploads: N waiting** means photos are queued; that is normal for a moment after each session and during a network drop.
4. If the operator menu shows a clock banner, the computer's clock is more than 2 minutes off. Fix the time in the operating system.

### Common issues

| Problem | What to do |
|---|---|
| Camera disconnects | Unplug and reconnect the USB cable. The kiosk reconnects on its own. If capture waits on "Camera is warming up" for more than 30 seconds, the session ends and returns to the start screen by itself. |
| A print did not come out | The kiosk retries a print 3 times, 5 seconds apart. If it still fails, the guest sees a print issue notice and the photo is saved. Reprint from the operator menu: **Admin Panel > PRINT HISTORY > Print**. |
| Uploads waiting for a long time | Check the internet. Network failures retry on their own and never give up. Items marked **Failed** in **Admin Panel > UPLOAD QUEUE** can be sent again with **Retry Failed**. |
| Storage low notice in the operator menu | The kiosk warns below 3 GB free and cleans up below 1 GB. Tap **Free Up Space**, or use **Admin Panel > Clean Storage**. |

## Closing

1. Finish the last session and return to the start screen.
2. Leave the app running on the start screen with internet for a few minutes so the upload queue empties (**Uploads: up to date** in the operator menu footer).
3. Updates install while the booth is idle. If the operator menu shows **Restart & Update**, tap it before you shut down.
4. Only then close the app and power off.

:::caution
Never power off while the footer still says **Uploads: N waiting**. Those photos are only on this computer until they upload.
:::

## Weekly

1. In the operator menu, tap **Check for Updates** so the booth is on the current version. The version is shown in the footer and on the dashboard's **Health** page.
2. Open **Gallery** in the dashboard and look through the week's photos for focus, exposure and alignment problems.
3. If you charge guests, open **Transactions** and use **Export Excel** to keep a copy of the week.
4. Store spare paper and ribbon dry and flat.

## Related

- [Printer Setup](../desktop-app/printer-setup.md)
- [Admin Panel](../desktop-app/admin-panel.md)
- [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md)
- [Booth Management](../dashboard/booth-management.md)
