---
sidebar_position: 5
title: Sharing One Printer Between Booths
description: Run two or more Pix booths on a single photo printer using your operating system's printer sharing. The computer holding the printer does not need Pix installed.
tags: [guides, printer, multi-booth, network]
---

# Sharing One Printer Between Booths

Pix prints through your operating system, not directly to the printer. Any printer that Windows or macOS can see, Pix can print to -- including a printer that is plugged into a **different computer** and shared over your local network.

That makes a common setup possible: two (or more) kiosks, one dye-sub printer.

:::tip The host does not need Pix
The computer the printer is plugged into only needs the printer driver and sharing switched on. It can be a spare laptop or a PC running something else entirely. Pix is only needed on the kiosks.
:::

## How It Works

1. **Host**: the computer physically connected to the printer shares it over the network.
2. **Kiosks**: each kiosk adds that shared printer as a network printer and selects it in Pix.
3. Every kiosk sends its print jobs to the host, whose print queue prints them in the order they arrive.

## Step 1: Share the Printer on the Host

**Windows**

1. Install the printer driver (DNP, HiTi, Mitsubishi, etc.) and confirm a test page prints.
2. Open **Settings > Bluetooth & devices > Printers & scanners**, select the printer, then **Printer properties > Sharing**.
3. Tick **Share this printer** and note the share name (for example `DNP-DS-RX1`).
4. Make sure **Network discovery** and **File and printer sharing** are on for your network (Private profile).

**macOS**

1. Install the driver and confirm a test page prints.
2. Open **System Settings > General > Sharing** and switch on **Printer Sharing**.
3. Select the printer and allow **Everyone** (or the users you want).

## Step 2: Add the Shared Printer on Each Kiosk

1. Install the **same printer driver** on the kiosk. Windows needs the driver locally even for a shared printer, and it is where paper size and cut mode are read from.
2. Add the printer:
   - **Windows**: **Printers & scanners > Add device**, or type the share path directly, e.g. `\\HOST-PC\DNP-DS-RX1`.
   - **macOS**: **Printers & Scanners > Add Printer**; the shared printer appears under the host's name.
3. Print a test page from the kiosk's operating system before opening Pix.

## Step 3: Select It in Pix

1. In the Pix Desktop App, open the **Admin Panel** and go to the **Printer** settings.
2. Under **Printer device**, pick the shared printer. It appears with the same name as any local printer (use the refresh button if it is not listed yet).
3. Set **Media size (loaded paper)** to match the media in the host's printer, then press **Test Print**.

Repeat on every kiosk that should print to the same printer.

## What to Expect

- **Jobs print in arrival order.** If two kiosks finish sessions at the same time, the second customer waits one print cycle (roughly 10 to 20 seconds on a dye-sub).
- **Each kiosk only knows about its own job.** Pix shows "printing" while the job is sent; it cannot see how many jobs from other kiosks are queued ahead.
- **Paper size and cut mode** (for example a 2-inch cut on 4x6 media) are driver settings on the host. Set them there once; every kiosk inherits them.
- **Media counts and printer status** shown in Pix come from the kiosk's own driver, so they may be blank or approximate for a shared printer. Watch the physical printer.

## Keep the Host Reliable

Pix does not retry a print job that fails because the host went away. To avoid silent misses on a busy day:

- Use **wired Ethernet** between the host and the kiosks. Wi-Fi drops are the most common cause of lost prints.
- Disable **sleep** and **automatic restarts** on the host for the day.
- Keep the host's print queue window open so a jam or empty media is spotted quickly. Nobody on the host is otherwise watching it.
- If the host is a Windows laptop, plug it into power. On battery, Windows may power down the USB port the printer is on.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Printer not in Pix's list on the kiosk | Not added at the OS level, or driver missing | Add the shared printer in the kiosk's OS printer settings and install the driver, then reopen the Admin Panel |
| Pix says "printer not ready" | Host offline, asleep, or the share was removed | Wake the host and confirm the kiosk can print a test page from its OS |
| Prints come out the wrong size | Paper size set differently on host and kiosk | Match the paper size in Pix to the media in the host's driver settings |
| Jobs stuck in the queue | Printer error on the host (jam, media out) | Clear the error on the host; queued jobs resume automatically |

For general printer setup, see [Printer Setup](../desktop-app/printer-setup.md). For running several booths under one account, see [Multi-Booth Setup](./multi-booth-setup.md).
