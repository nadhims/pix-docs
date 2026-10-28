---
sidebar_position: 5
title: Printer Problems
description: "Fixes for printer problems on the booth: finding the printer settings, a printer missing from the list or \"Not Found\", a paper size missing from MEDIA SIZE, two strips per sheet, customers getting no print, \"Print issue, photo saved\", a job stuck in the Windows queue, off-centre prints, the wrong number of prints and a dye-sub printer that stops."
tags: [troubleshooting, printer, printing]
---

# Printer Problems

Start here when the booth does not print, or prints the wrong size or number. Printer settings live on the booth, in the operator menu, not in the dashboard. Problems are ordered by how often operators ask about them; the full setup is on [Printer Setup](../desktop-app/printer-setup.md).

### I cannot find the printer settings, or my printer is not listed

**On screen:** On Admin Panel, "No printer configured — open Printer Settings". In the operator menu checklist, **Printer** "Not selected, so sessions won't print." On Printer Settings, "Guest printing is disabled until a printer is selected." or "Not Found — check USB/power, then Refresh".

**Also described as:** "dimana setting printer", "printer tidak muncul", "printer not detected".

**Check first:** Can the computer print a test page on its own, outside the app?

**Fix:**
1. Printer settings are on the booth: open the operator menu and tap **Printer Settings** (or **Choose printer** in the menu checklist).
2. Install the printer's driver and add it in **System Settings > Printers & Scanners** (macOS) or **Settings > Bluetooth & devices > Printers & scanners** (Windows). Print a test page there.
3. Back in **Printer Settings**, tap the refresh button next to **PRINTER DEVICE** and pick the printer.
4. "Not Found": the printer chosen before is not answering. Check its USB cable and power, then refresh.

**Still stuck:** Send support the printer model and a photo of the **STATUS** block on Printer Settings.

### My paper size is not in MEDIA SIZE

**On screen:** "Paper sizes reported by the printer driver." The size you need is not in the **MEDIA SIZE (LOADED PAPER)** list.

**Also described as:** "ukuran kertasnya tidak ada", "cara buat ukuran kertas manual", "paper size missing".

**Check first:** The list comes from the printer driver, so the driver decides what is offered.

**Fix:**
1. Update the printer's driver from the maker, then reopen **Printer Settings**.
2. Open **ADVANCED SETTINGS > Open Printer Properties** and check the driver's paper sizes and options there. Some sizes, such as a 2-inch cut on a dye-sub printer, must be enabled in the driver.
3. Pick the closest size the driver offers that matches the paper actually loaded.

**Still stuck:** Send support the printer model, the driver version and the size you need.

### I want two strips on one sheet

**On screen:** No error.

**Also described as:** "cara biar print 2 dalam satu kertas", "2x6 strips", "photo strip cut".

**Check first:** **Booths > booth > Configure > Pricing > Print format**.

**Fix:**
1. Set **Print format** to **2 inch cut** (2 prints per sheet) or **Triple strip** (3 per sheet). Use a template designed for the strip layout.
2. On a dye-sub printer, turn on the 2-inch cut in the printer driver as well.
3. Counts stay in sheets: **COPIES PER SESSION** and every price are per sheet of paper.

**Still stuck:** See [Booth Pricing](../dashboard/booth-pricing.md).

### Customers never get a print {#guests-never-get-a-print}

**On screen:** No error. Sessions finish, but nothing comes out.

**Also described as:** "tidak mau print", "no print after session".

**Check first:** Printer Settings **STATUS**, and the booth's **Print Output** switch.

**Fix:**
1. No printer selected: pick one under **PRINTER DEVICE**.
2. Printer selected: turn on **Print Output** under **Booths > booth > Settings > Output Settings**.
3. Then run a test print from Printer Settings.

**Still stuck:** Send support the booth name and the printer model.

### The customer saw "Print issue, photo saved" {#the-guest-saw-print-issue-photo-saved}

**On screen:** "Print issue, photo saved. Staff: reprint from Admin Panel → Print History".

**Also described as:** "print gagal", "print error".

**Check first:** The printer: paper, ribbon, power, a jam, or an error light.

**Fix:**
1. The printer refused the job three times. Fix the printer first.
2. Reprint: operator menu, **Admin Panel**, **Print history**, then **Print again** next to the session.
3. The photo was uploaded and shared as normal.

**Still stuck:** Send support the printer model and the time.

### A print job is stuck in the Windows print queue

**On screen:** The job sits in the Windows print queue and never prints.

**Also described as:** "print nyangkut", "printer queue stuck".

**Check first:** The Windows print queue for the printer.

**Fix:**
1. Windows accepted the job, so the booth will not retry it.
2. In Windows, cancel all documents in that printer's queue, then turn the printer off and on.
3. Reprint from **Admin Panel > Print history**.

**Still stuck:** Send support the printer model and the logs.

### The print is off-centre or has a white edge

**On screen:** No error.

**Also described as:** "print tidak center", "ada pinggiran putih".

**Check first:** **Printer Settings > ORIENTATION** and **PRINT ALIGNMENT**.

**Fix:**
1. Use **Landscape** for a dye-sub printer such as DNP.
2. Adjust **PRINT ALIGNMENT** (**Scale**, **Horizontal Offset**, **Vertical Offset**) and test print until the borders match.
3. For borderless printing, turn it on in **Open Printer Properties**.

**Still stuck:** Send support a photo of the print and the printer model.

### The wrong number of prints comes out

**On screen:** No error.

**Also described as:** "print kebanyakan", "print cuma satu".

**Check first:** **Printer Settings > COPIES PER SESSION**, and the prints included in the customer's package on the booth's **Pricing** tab.

**Fix:**
1. Copies are counted in sheets. A 2 inch cut prints two strips on each sheet.
2. Set **COPIES PER SESSION** in sheets.

**Still stuck:** See [Printer Setup](../desktop-app/printer-setup.md).

### A dye-sub printer stops in the middle of the day

**On screen:** The printer shows an error light, and customers see "Print issue, photo saved".

**Also described as:** "printer berhenti", "ribbon habis".

**Check first:** The printer's own display or lights.

**Fix:**
1. Reload paper and ribbon. General tip: dye-sub printers stop when the ribbon and paper sizes do not match, or when either runs out, and a partly used ribbon cannot be resumed.
2. Turn the printer off and on.
3. Reprint the missed sessions from **Admin Panel > Print history**.

**Still stuck:** Send support the printer model and its error code.

## Related

- [Printer Setup](../desktop-app/printer-setup.md)
- [Supported Printers](../reference/supported-printers.md)
- [Shared Printer](../guides/shared-printer.md)
- [Troubleshooting](../desktop-app/troubleshooting.md)
