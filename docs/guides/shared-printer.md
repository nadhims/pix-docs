---
sidebar_position: 5
title: Sharing One Printer Between Booths
description: Run two or more Pixture booths on a single photo printer using your operating system's printer sharing. The computer holding the printer does not need the Pixture Photobooth app.
tags: [guides, printer, multi-booth, network]
---

# Sharing One Printer Between Booths

The Pixture Photobooth app prints through your operating system, not directly to the printer. Any printer that Windows or macOS can see, the booth can print to, including a printer plugged into a **different computer** and shared over your local network. That makes a common setup possible: two or more booths, one dye-sub printer. At the end of this guide every booth prints to the same printer and you know what to watch on a busy day.

:::tip The host does not need the Pixture Photobooth app
The computer the printer is plugged into only needs the printer driver and sharing switched on. It can be a spare laptop or a PC running something else entirely.
:::

## Step by step

The full setup, with screenshots and the Mac and Windows steps side by side, is in the tutorial [Share One Printer Between Booths](../tutorials/share-a-printer.md). In short:

1. **Host:** share the printer from the computer it is plugged into (Windows: **Printer properties > Sharing > Share this printer**; macOS: **System Settings > General > Sharing > Printer Sharing**).
2. **Booths:** install the same driver, add the shared printer, and print a test page from the computer.
3. **Booth app:** in **Printer Settings**, pick it under **PRINTER DEVICE**, match **MEDIA SIZE (LOADED PAPER)** to the host's paper, and save.

## What to expect

- **Jobs print in arrival order.** If two booths finish at the same time, the second customer waits one print.
- **Each booth only knows about its own job.** It cannot see prints from other booths queued ahead.
- **Paper size and cut mode** (for example a 2-inch cut on 4x6 media) are driver settings on the host. Set them there once.
- **The paper counter counts each booth's own prints only,** so on a shared printer it reads high. Watch the physical printer.
- **Use wired Ethernet and keep the host awake.** Wi-Fi drops and a sleeping host are the most common causes of lost prints. Staff can reprint from **Admin Panel > Print history**.

## Related

- [Share One Printer Between Booths (tutorial)](../tutorials/share-a-printer.md)
- [Printer Setup](../desktop-app/printer-setup.md)
- [Multi-Booth Setup](./multi-booth-setup.md)
- [Supported Printers](../reference/supported-printers.md)
