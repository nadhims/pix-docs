---
sidebar_position: 8
title: Booth Pricing
description: Set what a photo session costs at each booth -- session price, packages, additional sessions, extra prints, print counts, print format, tax and fees, and currency.
tags: [dashboard, pricing, payments]
---

# Booth Pricing

Pricing is set per booth on the booth's **Pricing** tab (**Booths > [booth] > Pricing**). An organization-wide default applies to any booth without its own pricing. The tab has a live preview of the kiosk's payment screen, so you see exactly what customers will see before you save.

## Session Price

The price of one photo session, in the booth's currency. This is what the **Single** package costs.

:::caution Zero is not a price
To run free photo sessions, turn the Payment screen off in the booth's kiosk design instead of entering 0. The kiosk refuses a 0 price so nobody accidentally gives sessions away.
:::

## Packages

Beyond Single, you can offer bundles on the same screen:

| Package | Sessions | Price field |
|---|---|---|
| **Single** | 1 | Session price |
| **Double** | 2 | Double price (leave empty to hide) |
| **Group** | 4 | Group price (leave empty to hide) |

**Additional sessions** adds a stepper so a customer can buy more sessions on top of a package, at the per-session price you set. Leave it empty to hide the stepper.

## Prints per Package

Each package has a **print count**: the total number of printed sheets across its sessions (minimum one per session). Leave it empty to print the kiosk's default copies. A Double with 4 prints gives each of its two sessions 2 sheets.

## Print Format

If your printer cuts each sheet into pieces (a 4x6 with a **2 inch cut** gives two strips; a **triple strip** gives three), choose that under **Print format**. The kiosk then shows customers the number of pieces they take home ("1 Session · 2 Prints") without changing what the printer produces. Keep the print count at the number of sheets.

## Extra Prints

**Extra prints** sets the price of one additional printed copy bought on the sharing screen after the photo session. Leave it empty to hide the option.

## Tax and Fees

- **Tax rate** and **tax label** (for example 11% "PPN"). Choose whether tax is **added on top** of your prices or **already included** in them.
- **Fees** -- optional named fixed or percentage fees (a service fee, a platform fee). They appear as separate lines on the payment screen.

## Payment Timeout

How long the QR code stays valid before the kiosk returns to the start screen. Default 5 minutes.

## Currency

Each booth trades in one currency (set on the booth's **Settings** tab); the organization default applies otherwise. Prices are entered in that currency and reports are kept per currency, never converted. Fixed-amount vouchers only work at booths in the same currency.

## Per-Template Pricing

Different templates can carry different prices at the same booth: add a template-specific price and it overrides the booth price for that template only.

:::tip Test with a voucher
Create a free voucher and run a real photo session to check the payment screen, prints, and sharing before customers do.
:::
