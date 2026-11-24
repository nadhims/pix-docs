---
sidebar_position: 24
title: Share One Printer Between Booths
description: Run two or more booths on one photo printer by sharing it over the local network from the computer it is plugged into, then pick it on every booth and keep the queue moving on a busy day.
tags: [tutorials, printer, multi-booth, network, hardware]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Share One Printer Between Booths

In this tutorial you will share a printer from the computer it is plugged into, add it on every other booth computer, and pick it in the booth app, so two or more booths print on one printer. Allow about 30 minutes for two booths, all on the same network.

The booth app prints through the computer's own printing, not straight to the printer. So any printer the computer can print on, the booth can use, including one plugged into another computer and shared over the network.

## When to Use It

- **A multi-booth studio** with two or three booths in one room and one fast dye-sub, which prints a 4x6 in roughly 10 to 20 seconds.
- **A wedding or corporate event** with a booth and a roaming station, and one printer at a print table where staff hand out the prints.
- **A pop-up box next to a main booth**, to save buying, carrying and feeding a second printer.

Not a good fit for two busy self-service booths far apart, or when the network is Wi-Fi only and shaky: then give each booth its own printer. Two booths finishing at the same moment means one customer waits one print.

## Before You Start

- Any plan: printer sharing is done by the computers, not by Pixture.
- The printer working on the computer it is plugged into (the **host**). See [Set Up a Printer](./set-up-a-printer.md). The host does not need the Pixture Photobooth app: a spare laptop works.
- Every booth computer and the host on the same local network. A cable (Ethernet) is far more reliable than Wi-Fi.
- An administrator account on the host: Windows asks for one to change sharing.
- The printer's driver installer for every booth computer.

## Prepare

- **Name the host simply,** for example `PRINT-HOST`, and give the printer a short share name without spaces, for example `DNP-RX1`. You will type both on Windows booths.
- **Keep the host awake:** sleep off, automatic restarts off for the event day, and on mains power. If the host sleeps, every booth stops printing.
- **Wire it if you can.** A small network switch and short Ethernet cables to each computer take two minutes to set up and stop most lost prints.

## Step 1: Share the printer from the host

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

1. Open **System Settings > General > Sharing**.
2. Turn on **Printer Sharing**.
3. Click the info button next to it, select the printer, and leave **Everyone** allowed to print.

Apple: a printer that is already on the network itself (a network or AirPrint printer) does not need sharing; every computer can add it directly.

<!-- SHOT-NEEDED: mac: System Settings > General > Sharing with Printer Sharing switched on and the printer ticked -->

</TabItem>
<TabItem value="windows" label="Windows">

1. Open **Settings > Bluetooth & devices > Printers & scanners** (Windows 10: **Settings > Devices > Printers & scanners**) and select the printer.
2. Open **Printer properties**, then the **Sharing** tab, and click **Change Sharing Options** if the boxes are greyed out.
3. Tick **Share this printer** and note the **Share name**.
4. Set the network to **Private**, and check that network discovery and file and printer sharing are on for private networks. Microsoft: the network needs to be Private for the printer to be shared.

<!-- SHOT-NEEDED: windows: Printer properties > Sharing tab with Share this printer and the Share name marked -->

</TabItem>
</Tabs>

## Step 2: Add the shared printer on every booth computer

1. Install the **same printer driver** on the booth computer. The booth reads paper sizes from it.
2. Add the shared printer:

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

Open **System Settings > Printers & Scanners**, click **Add Printer, Scanner, or Fax**, and pick the printer listed under the host's name.

<!-- SHOT-NEEDED: mac: Add Printer window with the shared printer under the host's name -->

</TabItem>
<TabItem value="windows" label="Windows">

In **Printers & scanners**, click **Add device**. If the printer does not show, choose to add it manually and type the path, for example `\\PRINT-HOST\DNP-RX1`. If the name does not work, use the host's IP address instead, for example `\\192.168.1.20\DNP-RX1`.

<!-- SHOT-NEEDED: windows: Add a printer by name with the \\PRINT-HOST\DNP-RX1 path typed -->

</TabItem>
</Tabs>

3. Print a test page from the booth computer, outside the booth app.

## Step 3: Pick the shared printer in the booth app

1. On the booth, open the operator menu and tap **Printer Settings**.
2. Under **PRINTER DEVICE**, pick the shared printer. Tap **↻** if it is not listed yet.
3. Set **MEDIA SIZE (LOADED PAPER)** to the paper in the host's printer, and **ORIENTATION** to **Landscape** for a DNP.
4. Tap **Test Print**, check the sheet, then tap **Save Printer Settings**.

![Printer Settings with PRINTER DEVICE, MEDIA SIZE, ORIENTATION and Save Printer Settings marked](/img/docs/steps/tutorials-set-up-a-printer--printer-device.webp)

Repeat on every booth that prints on this printer.

## Step 4: Test a busy moment

1. Start a session on two booths at the same time and finish both.
2. Both prints come out, one after the other, in the order they arrived at the host.
3. Turn the host's Wi-Fi or cable off for a moment and print again: the booth retries, and a print that never arrives can be printed again from **Admin Panel > Print history**.

## Check It Worked

- Every booth's operator menu shows **Printer** with the shared printer's name.
- A session on each booth prints on the shared printer.
- Two sessions at once both print, one after the other.

## Tips

- **Set the 2-inch cut on the host.** Paper size and cut are driver settings of the printer, so set them on the host once. If you use 2-inch cut templates, print one from every booth before the event.
- **Do not trust the paper counter on a shared printer.** Each booth counts only its own prints, so every booth's count is too high. Watch the printer, or start the counter on one booth and fix it by hand with **Fix the count**.
- **Keep the host's print queue window open,** so a paper jam or an empty roll is seen at once. Nobody else is watching the host.
- **Reprint from the booth that took the photo:** **Admin Panel > Print history > Print again** on that booth. A reprint does not use the template's 2 inch cut (only the printer's own cut setting) and prints **COPIES PER SESSION** sheets.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The printer is not in the booth's **PRINTER DEVICE** list | Not added on that computer, or its driver is missing | Add it in the computer's printer settings, install the driver, then tap **↻** |
| **STATUS** next to **Printer** reads **Not Found** | The host is off, asleep, or the share was removed | Wake the host and print a test page from the booth computer |
| Windows cannot find `\\PRINT-HOST\DNP-RX1` | The network is Public, or the name does not resolve | Set the network to **Private** on both; type the host's IP address instead |
| Prints come out the wrong size | **MEDIA SIZE** differs from the paper in the host's printer | Match **MEDIA SIZE (LOADED PAPER)** on every booth |
| Prints arrive late or are lost on Wi-Fi | The network dropped while the print was sent | Use Ethernet; reprint from **Admin Panel > Print history** |
| Jobs stop for every booth | A jam or empty roll on the host | Clear the error on the host; waiting prints continue |

## Related

- [Set Up a Printer](./set-up-a-printer.md)
- [Sharing One Printer Between Booths (guide)](../guides/shared-printer.md)
- [Multi-Booth Setup](../guides/multi-booth-setup.md)
- [Supported Printers](../reference/supported-printers.md)
