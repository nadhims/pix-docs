---
sidebar_position: 3
title: Upload and Sharing Problems
description: "Fixes for upload and QR sharing problems: photos stuck on \"Uploads: N waiting\" while the booth is online, the customer's QR page loading forever or showing \"No connection\", photos missing after a computer was reset or unlinked, uploads marked Failed, the dashboard showing a running booth as Offline, a customer who lost their link, and a photo deleted by mistake."
tags: [troubleshooting, uploads, sharing, offline]
---

# Upload and Sharing Problems

Start here when photos do not reach the Gallery or the customer's QR link. Every photo is saved on the booth computer first and uploads from a queue, so a photo that has not uploaded yet is almost always still on that computer. Problems are ordered by how often operators report them.

:::caution
Never reset, reinstall, unlink or switch off a booth computer while the operator menu footer reads **Uploads: N waiting**. Those photos exist only on that computer until they upload.
:::

### Photos never upload although the booth is online

**On screen:** The operator menu footer reads "Internet: Online" but "Uploads: N waiting" for a long time. The customer link stays on **Uploading Photo**. The logs show `getaddrinfo ENOTFOUND`.

**Also described as:** "foto yang sedang diupload retrying terus", "upload stuck", "QR loading lama sekali", "photos not in the gallery".

**Check first:** The menu footer: **Internet** and **Uploads**. On the dashboard, the booth shows Online on **Booths**.

**Fix:**
1. Connect the booth computer to a phone hotspot or another internet connection.
2. Open **Admin Panel > Uploads** and tap **Upload now**.
3. If the waiting photos upload within a minute or two, the venue network was blocking Pixture's photo storage. The QR links customers already have start working; nobody needs to retake a photo.
4. For later events at that venue, run the booth on a hotspot or 4G router, or ask the venue's IT team to allow `*.r2.cloudflarestorage.com`. On a home or small shop router, setting the computer's DNS to 1.1.1.1 and 8.8.8.8 can also fix it.

**Still stuck:** If the photos do not upload on a hotspot either, send support the booth name, the time of the session and the logs. See [Where the Logs Are](../desktop-app/troubleshooting.md#where-the-logs-are).

### The customer's QR page keeps loading {#the-guests-qr-page-keeps-loading}

**On screen:** On the booth's Sharing screen, "No connection — your photos will appear at this link once the booth reconnects." The menu footer reads "Internet: Offline".

**Also described as:** "scan QR loading terus", "link foto tidak terbuka", "QR doesn't show my photos".

**Check first:** Is the booth computer on, with Pixture Photobooth open and online? A computer that is switched off, asleep or closed cannot upload.

**Fix:**
1. Get the booth online: switch the computer on, open the app, fix the internet.
2. Wait. The queue retries network failures for as long as it takes and drains on its own; the customer's link fills in as soon as the photos arrive.
3. To push it straight away, tap **Admin Panel > Uploads > Upload now**.
4. For a venue without internet, see [Offline Mode](../desktop-app/offline-mode.md).

**Still stuck:** Send support the booth name and the time of the session.

### Photos are missing after the computer was reset

**On screen:** Sessions taken on that computer are not in the Gallery, and the computer has since been reset, reinstalled, logged out or unlinked.

**Also described as:** "ada foto yang hilang", "foto tidak ada setelah reset laptop", "photos lost after reinstall".

**Check first:** Do not reinstall or clean anything else on that computer.

**Fix:**
1. **Contact support now.** Photos that had not uploaded were only on that computer.
2. If the disk was not wiped, the finished photos may still be in the upload queue folder: `%APPDATA%\pix-desktopapp\offline-queue\composites` on Windows, `~/Library/Application Support/pix-desktopapp/offline-queue/composites` on macOS. Copy that folder somewhere safe before doing anything else.

**Still stuck:** Send support the booth name, the dates of the missing sessions and whether the folder above still has files.

### Upload items show Failed

**On screen:** **Admin Panel > Uploads** lists items as **Failed**.

**Also described as:** "upload gagal", "failed uploads".

**Check first:** Network failures never turn into Failed; they retry forever. Failed means Pixture answered and rejected the upload repeatedly.

**Fix:**
1. On a stable connection, tap **Retry failed**.
2. Do not tap **Clear failed** unless support asks you to: it discards those items.

**Still stuck:** If they fail again, send support the booth name, the time of the sessions and the logs.

### The dashboard shows the booth Offline while it is running

**On screen:** **Booths** or the **Health** page shows the booth as Offline.

**Also described as:** "booth offline padahal nyala", "status offline".

**Check first:** The booth's menu footer **Internet** line.

**Fix:**
1. The booth checks in every 5 minutes, and the dashboard shows Offline after 12 minutes without one. Check the booth's internet.
2. A booth just reconnected takes a few minutes to show Online again.

**Still stuck:** Send support the booth name and the app version.

### A customer lost their QR code or link {#a-guest-lost-their-qr-code-or-link}

**On screen:** Nothing. The QR code only shows on the Sharing screen at the end of the session.

**Also described as:** "minta foto lagi", "guest lost the QR", "how to get the photo again".

**Check first:** The session's time and booth.

**Fix:**
1. Open **Gallery**, filter by the booth and the day, and find the session.
2. Download the photo and send it to the customer. See [Gallery](../dashboard/gallery.md).

**Still stuck:** Session not in the Gallery? See [Photos are missing although uploads are up to date](#photos-are-missing-although-uploads-are-up-to-date).

### Photos are missing although uploads are up to date

**On screen:** The menu footer reads "Uploads: up to date", but a session is not in the Gallery.

**Also described as:** "foto tidak ada di gallery", "session missing".

**Check first:** The Gallery filtered by booth and day. Photos are deleted automatically 60 days after the session.

**Fix:**
1. **Contact support now** with the booth name and the time of the session.

**Still stuck:** Support looks it up from the booth's logs.

### A photo was deleted by mistake

**On screen:** The photo is gone from the Gallery.

**Also described as:** "foto kehapus", "deleted photo, is there a trash bin".

**Check first:** When it was deleted. There is no restore button in the dashboard.

**Fix:**
1. **Contact support within 30 days** of deleting it, with the booth and roughly when the photo was taken. After 30 days it cannot be recovered.

**Still stuck:** See [Gallery](../dashboard/gallery.md).

## Related

- [Offline Mode](../desktop-app/offline-mode.md)
- [Operator Menu](../desktop-app/admin-panel.md)
- [Gallery](../dashboard/gallery.md)
- [Troubleshooting](../desktop-app/troubleshooting.md)
