---
sidebar_position: 5
title: Sharing One Printer Between Booths
description: Run two or more Pixture booths on a single photo printer using your operating system's printer sharing. The computer holding the printer does not need the Pix Desktop App.
tags: [guides, printer, multi-booth, network]
---

# Sharing One Printer Between Booths

The Pix Desktop App prints through your operating system, not directly to the printer. Any printer that Windows or macOS can see, the kiosk can print to, including a printer plugged into a **different computer** and shared over your local network. That makes a common setup possible: two or more kiosks, one dye-sub printer. At the end of this guide every kiosk prints to the same printer and you know what to watch on a busy day.

:::tip The host does not need the Pix Desktop App
The computer the printer is plugged into only needs the printer driver and sharing switched on. It can be a spare laptop or a PC running something else entirely.
:::

## How it works

1. **Host**: the computer physically connected to the printer shares it over the network.
2. **Kiosks**: each kiosk adds that shared printer as a network printer and selects it in the Pix Desktop App.
3. Every kiosk sends its print jobs to the host, whose print queue prints them in the order they arrive.

## Step 1: Share the printer on the host

**Windows**

1. Install the printer driver (DNP, HiTi, Mitsubishi, etc.) and confirm a test page prints.
2. Open **Settings > Bluetooth & devices > Printers & scanners**, select the printer, then **Printer properties > Sharing**.
3. Tick **Share this printer** and note the share name (for example `DNP-DS-RX1`).
4. Make sure **Network discovery** and **File and printer sharing** are on for your network (Private profile).

**macOS**

1. Install the driver and confirm a test page prints.
2. Open **System Settings > General > Sharing** and switch on **Printer Sharing**.
3. Select the printer and allow **Everyone** (or the users you want).

## Step 2: Add the shared printer on each kiosk

1. Install the **same printer driver** on the kiosk. Windows needs the driver locally even for a shared printer, and it is where paper size and cut mode are read from.
2. Add the printer:
   - **Windows**: **Printers & scanners > Add device**, or type the share path directly, e.g. `\\HOST-PC\DNP-DS-RX1`.
   - **macOS**: **Printers & Scanners > Add Printer**; the shared printer appears under the host's name.
3. Print a test page from the kiosk's operating system before opening the Pix Desktop App.

## Step 3: Select it in the Pix Desktop App

1. On the kiosk, open the operator menu (tap the top-right corner twice) and tap **Printer Settings**.
2. Under **PRINTER DEVICE**, pick the shared printer. It appears with the same name as any local printer.
3. Set **MEDIA SIZE (LOADED PAPER)** to match the media in the host's printer. For a dye-sub such as a DNP, set **ORIENTATION** to **Landscape**.
4. Press the test print button and check the sheet.

Repeat on every kiosk that should print to the same printer. The **STATUS** section confirms the printer is available; guest printing is disabled until a printer is selected.

## What to expect

- **Jobs print in arrival order.** If two kiosks finish sessions at the same time, the second guest waits one print cycle (roughly 10 to 20 seconds on a dye-sub).
- **Each kiosk only knows about its own job.** The kiosk shows "printing" while the job is sent; it cannot see how many jobs from other kiosks are queued ahead.
- **Paper size and cut mode** (for example a 2-inch cut on 4x6 media) are driver settings on the host. Set them there once; every kiosk inherits them.
- **Media counts and printer status** shown in the kiosk and on the Health page come from the kiosk's own driver, so they may be blank or approximate for a shared printer. Watch the physical printer.

## Keep the host reliable

The kiosk retries a failed print up to 3 times, 5 seconds apart. It does not retry a job that the host's queue accepted and then left stuck. When that happens the guest sees a print issue notice, the photo is saved, and staff can reprint it from the operator menu under **Admin Panel > PRINT HISTORY**. To avoid silent misses on a busy day:

- Use **wired Ethernet** between the host and the kiosks. Wi-Fi drops are the most common cause of lost prints.
- Disable **sleep** and **automatic restarts** on the host for the day.
- Keep the host's print queue window open so a jam or empty media is spotted quickly. Nobody on the host is otherwise watching it.
- If the host is a Windows laptop, plug it into power. On battery, Windows may power down the USB port the printer is on.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Printer not in the kiosk's list | Not added at the OS level, or driver missing | Add the shared printer in the kiosk's OS printer settings and install the driver, then reopen **Printer Settings** |
| STATUS shows the printer as not available | Host offline, asleep, or the share was removed | Wake the host and confirm the kiosk can print a test page from its OS |
| Prints come out the wrong size | Paper size set differently on host and kiosk | Match **MEDIA SIZE (LOADED PAPER)** to the media in the host's driver settings |
| Jobs stuck in the queue | Printer error on the host (jam, media out) | Clear the error on the host; queued jobs resume. Reprint anything missing from **Admin Panel > PRINT HISTORY** |

## Related

- [Printer Setup](../desktop-app/printer-setup.md)
- [Multi-Booth Setup](./multi-booth-setup.md)
- [Supported Printers](../reference/supported-printers.md)
