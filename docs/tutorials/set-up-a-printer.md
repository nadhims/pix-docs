---
sidebar_position: 23
title: Set Up a Printer
description: Install a photo printer, pick it on the booth with the right paper and orientation, line up the print, cut 4x6 sheets into 2x6 strips on a DNP, and let the booth count the paper left on the roll.
tags: [tutorials, printer, printing, dnp, paper counter, hardware]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set Up a Printer

In this tutorial you will install a photo printer on the booth computer, pick it on the booth with the paper that is loaded, line up a test print, optionally cut every 4x6 sheet into two 2x6 strips, and start the paper counter so you know when the roll runs low. Allow about 30 minutes, plus a few sheets of paper for test prints.

## When to Use It

- **Your first booth, or a new printer.** Every printer needs this once on each computer.
- **Photo strips at an event rental.** A DNP that cuts 4x6 sheets into two 2x6 strips gives every guest a strip, and one for the couple.
- **A self-service mall booth** where nobody watches the printer: the paper counter warns you in the operator menu and on **Health** before the roll runs out.
- **Prints come out off-centre or with a white edge** after a driver update or a new paper type.

Two or more booths and only one printer? Do this tutorial on the computer the printer is plugged into, then [Share One Printer Between Booths](./share-a-printer.md).

## Before You Start

- Any plan: printing works the same on Pix Starter, Pix Pro and an Event Pass.
- A printer that prints a test page from the computer on its own. Any printer that Windows or macOS can print on works; see [Supported Printers](../reference/supported-printers.md).
- Paper and ribbon (dye-sub) or ink loaded, and templates made for that paper size. See [Design a Print Template](./design-a-print-template.md).
- Pixture Photobooth 1.2.44 or newer for the paper counter.
- The menu PIN, if the booth has one.

## Prepare

- **Dye-sub or inkjet?** Dye-sublimation printers (DNP, HiTi, Mitsubishi, Kodak, Canon Selphy) print dry in seconds and are what most booths use. Inkjets (Epson EcoTank, SureLab) are cheaper per print but slower, and prints need a moment to dry.
- **Match three sizes:** the paper in the printer, the **MEDIA SIZE** on the booth, and the template's print size. A 4x6 template on 6x8 paper prints small with white edges.
- **Plug the printer straight into the computer**, with a USB cable that stays in. Keep the printer on mains power, not a power strip that someone switches off.
- **Keep spare paper and ribbon at the booth.** A printer can run out at any point in the day.

## Step 1: Install the printer on the computer

1. Install the maker's driver (DNP, HiTi, Epson and so on) from the maker's website.
2. Print a test page from the computer, outside the booth app.

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

Open **System Settings > Printers & Scanners**, add the printer if it is not listed, select it and print a test page from any app (for example a photo in Preview).

</TabItem>
<TabItem value="windows" label="Windows">

Open **Settings > Bluetooth & devices > Printers & scanners** (Windows 11) or **Settings > Devices > Printers & scanners** (Windows 10), select the printer and choose **Print test page**.

<!-- SHOT-NEEDED: windows: Printers & scanners with the DNP printer selected and Print test page marked -->

</TabItem>
</Tabs>

If the test page does not print here, the booth cannot print either. Fix the driver first.

## Step 2: Pick the printer and paper on the booth

1. Open the operator menu (tap the top-right corner twice) and tap **Printer Settings**.
2. Under **PRINTER DEVICE**, pick your printer. Plugged it in after opening the page? Tap **↻** to refresh the list.
3. Under **MEDIA SIZE (LOADED PAPER)**, pick the paper that is really loaded. The list comes from the printer driver, so it only shows sizes your printer supports.
4. Under **ORIENTATION**, pick **Landscape** for a dye-sub printer such as a DNP ("Use Landscape for dye-sub printers (e.g. DNP) that feed paper with the long edge first."). Most inkjets want **Portrait**.
5. Tap **Save Printer Settings**.

![Printer Settings with PRINTER DEVICE, MEDIA SIZE, ORIENTATION and Save Printer Settings marked](/img/docs/steps/tutorials-set-up-a-printer--printer-device.webp)

Until a printer is picked, **STATUS** reads "Guest printing is disabled until a printer is selected." and sessions finish without printing.

## Step 3: Set copies and line up a test print

1. Set **COPIES PER SESSION** with **−** and **+** (1 to 10): the sheets each session prints when the package the customer bought does not set its own number of prints. Extra prints a customer buys are added on top.
2. Under the preview, pick **Test Card (default)** or one of your templates, and tap **Test Print**. The test uses what is on screen now, saved or not, and prints one sheet.
3. Look at the sheet. If it is off-centre or cut at an edge, adjust **PRINT ALIGNMENT**: **Scale** (85% to 115%) to add or remove margin, **Horizontal Offset** and **Vertical Offset** (-10 mm to +10 mm) to shift it. Print again until the borders match.
4. Tap **Save Printer Settings**.

![Printer Settings scrolled to COPIES PER SESSION and PRINT ALIGNMENT, with Test Print and Save Printer Settings marked](/img/docs/steps/tutorials-set-up-a-printer--printer-alignment.webp)

Driver options such as colour density or borderless printing are under **ADVANCED SETTINGS > Open Printer Properties**.

## Step 4: Cut 4x6 sheets into 2x6 strips (DNP, optional)

DNP printers with a cutter (DS620, DS-RX1, DS820, DS40) can cut each 4x6 sheet into two 2x6 strips. Turn the cut on for the whole printer, or only for the templates that need it.

**For the whole printer:**

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

On **Printer Settings**, set **2-INCH CUT** to **On** ("Cuts each 4x6 print into two 2x6 strips."). It shows only when the printer's driver has a 2-inch cut. The change applies at once and is saved as the printer's own setting.

![Printer Settings with the 2-INCH CUT Off and On buttons marked](/img/docs/steps/tutorials-set-up-a-printer--two-inch-cut.webp)

</TabItem>
<TabItem value="windows" label="Windows">

Tap **ADVANCED SETTINGS > Open Printer Properties** on **Printer Settings**. The driver's printing preferences open: tick **2inch cut** and click **OK**. The booth app goes back to full screen when you tap it again.

<!-- SHOT-NEEDED: windows: DNP Printing preferences with the 2inch cut option marked -->

</TabItem>
</Tabs>

**Only for some templates:** in the dashboard, click **Pix Design**, open **Template Editor** and click **New Project**. In **Create Template Project**, pick the Media Type **2 inch cut (4R)**, the Print Size **4x6"**, upload the design and click **Create Project**. Prints of that template are cut, whatever the printer's own setting, on Mac and Windows. Other templates print as whole sheets. A reprint with **Admin Panel > Print history > Print again** is the exception: it is cut only if the printer's own 2-inch cut is on, and it prints **COPIES PER SESSION** sheets.

![Create Template Project with the 2 inch cut (4R) media type, the 4x6 print size and Create Project marked](/img/docs/steps/tutorials-set-up-a-printer--template-media.webp)

**Design the template for the cut.** The cutter splits the 4x6 sheet down the middle, so the design must hold two identical 2x6 strips side by side. The number of photos a customer takes still follows the photo slots: for two identical strips of 3 photos, put the same 3 slots in each half. A printer without a cutter prints the sheet whole.

Last, in the dashboard, open the booth's **Pricing** tab and set **Print format** to **2 inch cut** (2 prints per sheet), so the Payment screen tells the customer they get 2 strips per print. It only changes the numbers customers read; printing is unchanged.

## Step 5: Start the paper counter

Most printers never tell the computer how much paper is left. The booth counts it for you.

1. Load a new roll.
2. On **Printer Settings**, tap **New roll loaded** on the **PAPER** card (or, in the operator menu, **New roll** on the **Paper** row).
3. Pick the roll size for your printer, for example **4x6 700 prints** on a DS-RX1, or type a **Custom amount** (1 to 5,000 prints) from the box.
4. Tap **Start counting**.

![PAPER card on Printer Settings with New roll loaded marked](/img/docs/steps/tutorials-set-up-a-printer--new-roll.webp)

![New roll loaded popup with the roll sizes and Start counting marked](/img/docs/steps/tutorials-set-up-a-printer--new-roll-popup.webp)

Every printed sheet takes one off the count. The booth keeps counting offline, remembers the roll size for next time, and never stops a print because of the count. A DNP on a Mac with DNP's own driver reports its paper itself: the card then says "from printer" and the booth does not count.

## Check It Worked

- The operator menu shows **Printer** with your printer's name and **Paper** "About 546 of 700 left" (your own numbers).
- A test session prints on the right paper, centred, with no white edge.
- With the cut on, each sheet comes out as two 2x6 strips.

![Operator menu with the Paper row marked](/img/docs/steps/tutorials-set-up-a-printer--menu-paper.webp)

## Tips

- **Reprint fast at an event:** operator menu, **Admin Panel**, **Print history**, **Print again**. When a print fails, the customer reads "Print issue, photo saved. Staff: reprint from Admin Panel → Print History". A reprint does not use the template's 2 inch cut (only the printer's own cut setting) and prints **COPIES PER SESSION** sheets.
- **The count wrong?** On the **PAPER** card, tap **Fix the count** and type how many prints are really left.
- **Load paper from the dashboard:** on **Health**, open the booth and click **New roll loaded**. The booth picks it up on its next check-in. Handy when staff at the venue change the roll and tell you by chat.
- **Paper running low** shows at 20% left, and **Paper is probably out** at 0. When the printer itself reports it is out of paper, the menu asks "New roll loaded?" with a **Yes** button for the last roll size.
- **Counts are sheets.** Everything the booth counts, and every price for prints, is a sheet of paper, even when the sheet is cut into strips.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| Sessions finish but nothing prints | No printer picked, or **Print Output** is off for the booth | Pick the printer (Step 2); check **Booths > booth > Settings > Print Output** in the dashboard |
| **STATUS** next to **Printer** reads **Not Found** | The printer is off, unplugged, or was renamed | Turn it on, plug it in, tap **↻**, and pick it again |
| The printer is not in **PRINTER DEVICE** | The driver is not installed | Install the driver and print a test page from the computer (Step 1) |
| Prints are small with white edges | **MEDIA SIZE** or the template does not match the paper | Match the paper, **MEDIA SIZE** and the template's print size |
| The picture is turned on the paper | Wrong **ORIENTATION** | **Landscape** for a DNP and most dye-subs |
| Prints are slightly off-centre | Every driver crops a little differently | **PRINT ALIGNMENT** (Step 3) |
| The 2-inch cut does not happen | The printer has no cutter, or the cut is off for it and the template is not tagged | Turn on **2-INCH CUT** (Mac) or **2inch cut** in the driver (Windows), or use the **2 inch cut (4R)** media type |
| The two strips are different | The design is not two identical halves | Repeat the same strip on both halves of the 4x6 template |
| **Paper** reads "Not counted yet" | No roll was started | Tap **New roll**, pick the size, **Start counting** |

More cases: [Printer Problems](../troubleshooting/printer.md).

## Related

- [Printer Setup](../desktop-app/printer-setup.md)
- [Supported Printers](../reference/supported-printers.md)
- [Share One Printer Between Booths](./share-a-printer.md)
- [Design a Print Template](./design-a-print-template.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Health](../dashboard/health.md)
