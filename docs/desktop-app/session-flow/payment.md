---
sidebar_position: 4
title: Payment
description: How customers pay at the kiosk -- QRIS through your gateway, vouchers, coins and cards, and how packages, tax, and the success screen appear.
tags: [desktop-app, session-flow, payment, qris]
---

# Payment

The Payment screen appears after the start screen when a booth has pricing configured. Everything on it comes from [Booth Pricing](../../dashboard/booth-pricing.md) and the booth's kiosk design.

## Choosing a Package

Customers pick **Single**, **Double** (2 sessions), or **Group** (4 sessions) if you offer them, and can add **additional sessions** with a stepper. The card shows the number of prints included, using the **print format** you set (a 2 inch cut shows two prints per sheet). Tax and fees are listed as separate lines under the subtotal.

## Ways to Pay

| Method | How it works |
|---|---|
| **QRIS** | The kiosk shows a QR code from your connected DOKU account. The customer scans with any Indonesian banking or e-wallet app; the kiosk confirms within seconds |
| **Voucher** | The customer taps **Use voucher** and types a code. Free, percentage, and fixed-amount vouchers are supported, and codes verify even when the booth is offline. See [Vouchers](../../dashboard/vouchers.md) |
| **Coins, notes, cards** | With a coin acceptor, Nayax/EDC reader, or CASH-Interface2 system attached. See [Hardware Payments](../hardware-payments.md) |

The QR code stays valid for the **payment timeout** set in Booth Pricing (default 5 minutes); after that the kiosk returns to the start screen.

## The Success Screen

Every paid route ends on the Payment Success screen, which you can design in the UI Editor. It shows for a few seconds by default, then moves on; the customer can tap anywhere to continue sooner.

## Free Photo Sessions

To run a booth for free, turn the **Payment screen off** in the booth's kiosk design (UI Editor). Do not set the price to 0; the kiosk refuses a zero price so nobody gives sessions away by accident.

## Bonus Session

If the booth has **Bonus** enabled in Marketing Studio, a customer who has just paid is offered a free second session, optionally after leaving a contact. See [Marketing Studio](../../dashboard/marketing-studio.md).

## Design

The Payment screen is fully designable in the [UI Editor](../../dashboard/pix-design/ui-editor.md): package cards, the QR popup's branding, and separate sub-pages for voucher entry, coins, cards, and success.

:::tip Test with a free voucher
A single-use free voucher lets you walk through the whole paid flow, including prints and sharing, without moving money.
:::
