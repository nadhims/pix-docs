---
sidebar_position: 13
title: Troubleshooting
description: Where to start when a booth misbehaves. A symptom table that points to the detailed troubleshooting page for the camera, pairing and Pix Pro, uploads and sharing, templates and screens, the printer, payments and the computer, the quick checks that solve most cases, when to contact support at once, and where the logs are.
tags: [desktop-app, troubleshooting, support]
---

# Troubleshooting

This page is the first stop when a booth misbehaves. Find the symptom in the table and open its page: every problem there lists the on-screen text, what to check first, the fix in order, and what to send support. If nothing matches, run the quick checks below.

## Find Your Problem

| Symptom | Page |
|---|---|
| "⚠ Camera Disconnected", "No camera detected", camera not found | [Camera: not detected](../troubleshooting/camera.md#the-camera-is-not-detected) |
| Camera model does not work (Sony A6400, Nikon D-series, other brands) | [Camera: model does not work](../troubleshooting/camera.md#my-camera-model-does-not-work) |
| "Capture command failed", "the camera didn't respond" | [Camera: capture fails](../troubleshooting/camera.md#capture-fails-although-live-view-works) |
| "Camera Not Responding", "Booth Temporarily Unavailable", "Camera Cooling Down", "Camera is warming up" | [Camera Problems](../troubleshooting/camera.md) |
| Generate code greyed out, "Pix Starter runs on one computer", "All N computers are in use" | [Pairing: no code](../troubleshooting/pairing-and-licence.md#i-cannot-get-a-pairing-code) |
| "Invalid pairing code", code expired or already used | [Pairing: code refused](../troubleshooting/pairing-and-licence.md#the-booth-says-the-code-is-invalid-used-or-expired) |
| Old computer still on the booth after Logout | [Pairing: old computer](../troubleshooting/pairing-and-licence.md#the-old-computer-is-still-on-the-booth-after-logout) |
| Event Pass bought but still **Watermarked**, "Device limit reached", Pix Pro ended | [Pairing and Pix Pro Problems](../troubleshooting/pairing-and-licence.md) |
| "Uploads: N waiting" for a long time, upload retrying, guest link stuck on **Uploading Photo** | [Uploads: never upload](../troubleshooting/uploads-and-sharing.md#photos-never-upload-although-the-booth-is-online) |
| "No connection — your photos will appear at this link once the booth reconnects.", QR page keeps loading | [Uploads: QR keeps loading](../troubleshooting/uploads-and-sharing.md#the-guests-qr-page-keeps-loading) |
| Photos missing after a reset, reinstall or unlink; Failed uploads; a guest lost the QR | [Upload and Sharing Problems](../troubleshooting/uploads-and-sharing.md) |
| "No Templates Assigned", new template not on the booth | [Screens: template missing](../troubleshooting/templates-and-screens.md#my-template-is-not-on-the-booth) |
| The operator menu will not open, Esc does nothing | [Screens: menu](../troubleshooting/templates-and-screens.md#the-operator-menu-will-not-open) |
| Photo not inside the frame, photos sideways, photos mirrored | [Templates and Screens Problems](../troubleshooting/templates-and-screens.md) |
| Voucher or payment screen at a free booth | [Screens: voucher at a free booth](../troubleshooting/templates-and-screens.md#a-voucher-or-payment-screen-shows-at-a-free-booth) |
| Design cut off, bands at the edges, app not full screen | [Screens: cut off](../troubleshooting/templates-and-screens.md#the-booth-screen-looks-cut-off-or-is-not-full-screen) |
| Printer settings, printer "Not Found", paper size missing, 2 strips per sheet | [Printer Problems](../troubleshooting/printer.md) |
| "Print issue, photo saved", no print, stuck Windows queue, off-centre print | [Printer Problems](../troubleshooting/printer.md) |
| Test charge "declined by the provider", no Payment screen, empty QR, "merchant not found" | [Payment Problems](../troubleshooting/payments.md) |
| Coins or card reader not counted, voucher code refused | [Payment Problems](../troubleshooting/payments.md) |
| Install warning, **Clock** warning, **Storage running low**, app freezes, no restart after a power cut | [App and Computer Problems](../troubleshooting/app-and-computer.md) |

## Quick Checks

These solve most cases. Do them in order.

1. **Read the operator menu.** Double-tap the lock corner (top right unless moved in Pix Design) and read **Before you start**: Camera, Printer, Licence, Storage and Clock each say what is wrong.
2. **Read the footer.** "Internet: Online/Offline", "Uploads: N waiting / up to date" and the version, "Pixture Photobooth v…".
3. **Replug the camera** straight into a port on the computer, and close EOS Utility, Lightroom or any other camera program.
4. **Restart the app completely**: operator menu, **Exit**, **Exit App**, then open Pixture Photobooth again.
5. **Check the dashboard.** On **Booths**, is the booth Online, and what does its Plan say? On the booth's **Computer** tab, is the right computer linked?
6. **Uploads waiting while online?** Switch the booth to a phone hotspot and tap **Admin Panel > Uploads > Upload now**.
7. **Update the app** with **Check for Updates** in the menu footer.
8. **Never reset, reinstall, unlink or switch off** a computer whose footer reads "Uploads: N waiting".

## Contact Support at Once

Do not troubleshoot these yourself; contact support straight away with the booth name and the time:

- A guest's money was taken but no photo session ran, or a guest was charged twice.
- Photos are missing after the computer was reset, reinstalled or unlinked.
- Photos are missing from the Gallery although the footer read "Uploads: up to date".

## Where the Logs Are

- **macOS**: `~/Library/Application Support/pix-desktopapp/logs`
- **Windows**: `%APPDATA%\pix-desktopapp\logs`

The camera's own log is on the Camera Settings page: **Show Diagnostics**, then **CAMERA LOG** and **Copy Today's Logs**. Support can also request a booth's logs from the dashboard, so you do not need to copy files off a booth that is online.

## Getting Help

1. Note the app version from the operator menu footer and the booth name.
2. Note the time the problem happened, so support can find it in the logs.
3. Contact support from the dashboard's **Help** chat, or on WhatsApp at +62 851-2135-5870.

## Related

- [Operator Menu](./admin-panel.md)
- [Offline Mode](./offline-mode.md)
- [Pix Pro on the Booth](./licence-on-the-booth.md)
- [Printer Setup](./printer-setup.md)
