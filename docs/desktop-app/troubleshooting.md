---
sidebar_position: 13
title: Troubleshooting
description: Symptom, likely cause and fix for the common camera, printer, network, payment, licence, clock and storage problems on the Pix Desktop App, and where the logs are.
tags: [desktop-app, troubleshooting, support]
---

# Troubleshooting

This page is the first stop when a booth misbehaves. Each table lists a symptom, the most likely cause and the fix, grouped by camera, printer, network and uploads, payment, licence, and the computer itself. At the end you will find where the logs live and how to get them to support.

## Camera

| Symptom | Likely cause | Fix |
|---|---|---|
| Live view is blank, STATUS shows no camera | USB cable or port, or another program holds the camera | Unplug and replug, quit EOS Utility or Lightroom, try a port on the computer rather than a hub, restart the app |
| Camera detected but exposure controls do nothing | The mode dial is not on M, Av or Tv | Set the dial to M, Av or Tv; focus mode is set on the body |
| "Camera is warming up" stays on screen, then "Camera not responding / Returning to home..." | The camera did not come up within 30 seconds | Check power and cable, then open **Camera Settings** and read the **STATUS** block and **CAMERA LOG** |
| "Hmm, the camera didn't respond — let's try again" during a session | No frame arrived within 15 seconds of the shot; the booth retries the slot on its own | If it repeats, shorten the USB run or use a powered hub; check the camera is on mains power |
| Photos come out sideways | The camera is mounted on its side | Update to 1.1.107 or newer; if still turned, set **CAMERA ROTATION** on Camera Settings |
| Booth uses the laptop webcam instead of the Canon | Auto-detect could not find the Canon at launch | Check the cable, then pick the Canon under **CAMERA DEVICE** and tap **Set as Default** |
| No camera permission on macOS | Pix is not allowed to use the camera | **System Settings > Privacy & Security > Camera**, allow Pix |
| Camera drops out during the day | A long USB cable or a sleeping camera | Keep the cable under about 2 metres, use a powered hub, turn off auto power-off on the body |

## Printer

| Symptom | Likely cause | Fix |
|---|---|---|
| The printer is not in the **PRINTER DEVICE** list | Not installed at the operating system level | Add it under **Printers & Scanners** (macOS) or **Printers & scanners** (Windows), print a test page there, then reopen **Printer Settings** |
| Guests never get a print, STATUS reads "Guest printing is disabled until a printer is selected." | No printer chosen on the booth | Pick the printer under **PRINTER DEVICE** |
| Guests never get a print, printer is selected | **Print Output** is off for the booth | Turn it on under **Booths > booth > Settings > Output Settings** |
| Guest saw "Print issue — photo saved. Staff: reprint from Admin Panel → Print History" | The printer refused the job 3 times (out of media, offline, paper jam) | Fix the printer, then **Admin Panel > PRINT HISTORY > Print** to reprint. The photo was still uploaded |
| Print is off-centre or has a white edge | Alignment or orientation | Adjust **PRINT ALIGNMENT** (Scale, Horizontal Offset, Vertical Offset); use **Landscape** for a dye-sub printer such as DNP |
| Job sits in the Windows print queue and never prints | Windows accepted the job, so the booth will not retry it | Clear the Windows queue, check the printer, reprint from Print History |
| Wrong number of prints | Copies are counted in sheets | Set **COPIES PER SESSION** in sheets; a 2 inch cut prints two strips per sheet |

## Network and Uploads

| Symptom | Likely cause | Fix |
|---|---|---|
| Guests see "No connection — your photos will appear at this link once the booth reconnects." | The venue internet is down or cannot reach Pixture | Photos are queued; fix the connection and the queue drains on its own. The link still works |
| Menu footer reads "Uploads: N waiting" for a long time | Network failures retrying; they never give up | Check the venue line. Tap **Admin Panel > Process Now** once it is back |
| Items show **Failed** in the Upload Queue | The server rejected the upload repeatedly | **Retry Failed** on a stable connection. If they fail again, contact support with the booth name and time |
| Dashboard shows the booth Offline although it is running | No heartbeat for 12 minutes | The booth beats every 5 minutes; check its internet. A booth marked Offline has been out of touch for a while |
| Booth is slow to load templates | Thumbnails are still downloading | Cards fill in progressively; give it a moment, or run a test session before opening so assets are cached |

## Payment

| Symptom | Likely cause | Fix |
|---|---|---|
| The QR tile stays empty but the timer runs | The QR image could not be loaded | The image is served through Pixture, so check the booth's internet first, then the gateway's status under **Settings > Payment Gateway** |
| Guest's wallet says "merchant not found" (or "merchant tidak ditemukan") | The wallet on the guest's phone could not resolve the QR: poor mobile data, or a QR that expired after the payment timeout | Ask the guest to try again on a fresh QR, or use a voucher. This is not the booth's connection |
| Payment screen never appears | **Payment on this booth** is off, or the computer is watermarked | Turn the switch on under **Booths > booth > Pricing**; put Pix Pro or a pass on the computer |
| Coins are not counted | Keyboard coin input is off or the key is wrong | **Menu > Hardware API > Enable keyboard coin input**, match **Coin key** to what the acceptor sends |
| Cash system sessions show as free | F13 is not treated as paid | Turn on **Treat F13 as the cash system's paid signal** under **Menu > Hardware API** |
| Nayax reader says "Cash only" | The reader's inhibit is active | Check the Nayax portal's inhibit setting and that the CASH-Interface2 software is active |
| Voucher code refused | Wrong length or a spent code | Codes are 6, 7 or 8 characters; check remaining uses on the Vouchers page |

## Licence

| Symptom | Likely cause | Fix |
|---|---|---|
| Every photo carries the Pixture watermark | Pix Starter, or a pass, trial or subscription that ended | Put Pix Pro or a pass on the computer: **Use a pass on this device** in the menu, or **Licenses** in the dashboard |
| Booth shows "Device limit reached", guests see "Please call the operator." | All device places on a Pix Pro account are in use | **Licenses > Deactivate** a computer you no longer use, or **Add more devices** |
| A popup says the Day Pass, trial or Pix Pro ended | The licence ran out | Scan the **Manage devices** QR or open **Licenses**; a running session finishes clean |
| Badge reads "Pix Pro ended, reconnect to check" | The licence expired while the booth was offline | Reconnect; the booth checks in and clears the watermark if the account has a place for it |
| Cannot re-pair after Logout | On an old version the licence was left on the computer | Update the app; Logout now returns Pix Pro or the trial to the pool. A Day Pass stays on the computer by design |

## The Computer

| Symptom | Likely cause | Fix |
|---|---|---|
| A clock banner in the operator menu | The computer's clock is more than 2 minutes off | Set the clock to automatic in the operating system; payments and licence checks depend on it |
| "Storage low" in the menu | Less than 3 GB free | Tap **Free Up Space**, or **Admin Panel > Clean Storage**; below 1 GB the booth cleans up on its own |
| The app is unresponsive or closed on its own | A transient fault or the computer under load | Restart the app, close other programs, check disk space, update to the current version |
| The app did not come back after a power cut | **Start on boot** is off | Turn it on in **Admin Panel** |

## Where the Logs Are

- **macOS**: `~/Library/Application Support/pix-desktopapp/logs`
- **Windows**: `%APPDATA%\pix-desktopapp\logs`

The camera's own log is on the Camera Settings page under **CAMERA LOG**. Support can also request a booth's logs from the dashboard, so you do not need to copy files off a booth that is online.

## Getting Help

1. Note the app version from the operator menu footer and the booth name.
2. Note the time the problem happened, so support can find it in the logs.
3. Contact support from the dashboard's **Help** chat, or on WhatsApp at +62 851-2135-5870.

## Related

- [Operator Menu](./admin-panel.md)
- [Offline Mode](./offline-mode.md)
- [Licence on the Booth](./licence-on-the-booth.md)
- [Printer Setup](./printer-setup.md)
