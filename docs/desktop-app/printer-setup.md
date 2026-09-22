---
sidebar_position: 4
title: Printer Setup
description: Choosing a printer, media size and alignment on the kiosk, running a test print, and what happens when a print fails during a photo session.
tags: [desktop-app, printer, printing, setup]
---

# Printer Setup

By the end of this page the booth prints to your printer with the right paper size and alignment, you have run a test print, and you know how to reprint a photo session if a print fails. Printer settings live on the booth in **Printer Settings**, and the print itself fires on the Sharing screen at the end of every session.

## Before You Start

- A printer installed at the operating system level and able to print a test page on its own. Check **System Settings > Printers & Scanners** on macOS or **Settings > Bluetooth & devices > Printers & scanners** on Windows.
- The templates assigned to the booth match your paper size. See [Supported Printers](../reference/supported-printers.md) and, for a printer shared by several booths, [Shared Printer](../guides/shared-printer.md).

Dye-sublimation printers (DNP, HiTi, Mitsubishi and similar) are the usual choice for photobooths: fast, dry to the touch and predictable per-print cost. Any printer the computer can print to works, including network printers.

## Setting Up the Printer

1. Open the operator menu with two taps on the top-right corner and tap **Printer Settings**.
2. Under **PRINTER DEVICE**, pick your printer. The list is every printer the operating system knows.
3. Under **MEDIA SIZE (LOADED PAPER)**, pick the paper that is actually loaded. The sizes come from the printer driver, so only what the printer supports is listed. 4x6" (10x15 cm) is the photobooth standard and is also cut into two 2x6" strips.
4. Under **ORIENTATION**, choose **Portrait** or **Landscape**. The page hints "Use Landscape for dye-sub printers (e.g. DNP)", because their drivers expect the long edge across.
5. Set **COPIES PER SESSION** to the number of sheets each photo session should print.
6. Use the preview at the top of the page: pick a template (the default is **Test Card (default)**) and tap the test print button. Check colour, alignment and paper feed on the print that comes out.
7. If the print sits off-centre, adjust **PRINT ALIGNMENT**: **Scale**, **Horizontal Offset** and **Vertical Offset**. Print again until the borders match.
8. For driver-level options such as colour density or borderless printing, open **ADVANCED SETTINGS > Open Printer Properties**.

The **STATUS** block at the bottom shows **Printer**, **Name** and **Available**. Until a printer is selected it reads "Guest printing is disabled until a printer is selected.", and no session prints.

## Printing During a Photo Session

The print is sent when the guest reaches the Sharing screen. Whether the booth prints at all is the **Print Output** switch on the booth's **Settings** tab in the dashboard (**Booths > booth > Settings > Output Settings**). Copies follow **COPIES PER SESSION** here and the prints included in the package the guest bought under Booth Pricing.

If the printer does not accept the job, the booth retries up to 3 times, 5 seconds apart. A job that is stuck in the Windows print queue is not retried, because the operating system has already accepted it. When every attempt fails the guest sees "Print issue — photo saved. Staff: reprint from Admin Panel → Print History", and the photo is still uploaded and shared as normal.

To reprint:

1. Open the operator menu and tap **Admin Panel**.
2. Scroll to **PRINT HISTORY**.
3. Tap **Print** next to the session.

## Print Counts Are Sheets

Everything the booth counts, and everything Booth Pricing prices, is a sheet of paper. If Booth Pricing's **Print format** is set to **2 inch cut** (2 per sheet) or **Triple strip** (3 per sheet), the Payment screen shows the number of strips the guest takes home, but the printer still receives one sheet per print. Set **COPIES PER SESSION** in sheets. See [Booth Pricing](../dashboard/booth-pricing.md).

:::caution
Keep spare media and ribbon at the booth. A dye-sub printer can run out at any point in the day, and a partly used ribbon roll cannot be resumed.
:::

## Related

- [Supported Printers](../reference/supported-printers.md)
- [Shared Printer](../guides/shared-printer.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Operator Menu](./admin-panel.md)
