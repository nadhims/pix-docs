---
sidebar_position: 3
title: Payment
description: When the Payment screen appears, the QR, voucher, coin and card steps, packages, tax and fees, voucher and pickup codes, and the idle timers.
tags: [desktop-app, photo-session, payment, qris]
---

# Payment

The Payment screen is where the guest pays for the photo session before choosing a template. This page covers when the screen shows, each of its steps, what the price card contains, which codes the voucher box accepts, and how long the booth waits before giving up. Prices and packages come from [Booth Pricing](../../dashboard/booth-pricing.md); the screen's look comes from the Payment Screen tab of the UI Editor.

## When the Screen Shows

- The screen shows when **Payment on this booth** is on under **Booths > booth > Pricing**. With the switch off, every session is free and the booth skips Payment. Do not price a session at 0 to make it free: 0 is not a price, and the booth refuses it.
- A Pix Starter (watermarked) computer always skips Payment.
- Before skipping, the booth confirms the session really is free with a fresh price check of up to 1.5 seconds, so an old cached price never lets a paid booth run free.
- While an event with **Pay Per Session** runs, the event's price and gateway replace the booth's.
- A booth set to **Central cashier** in a Multi-Booth group opens Payment directly on the code step, because the guest pays at the cashier and brings a code.

## The Price Card

Guests pick **Single**, **Double** (2 sessions) or **Group** (4 sessions) when you offer them, and can add **additional sessions** with a stepper. The card shows the prints included, using the **Print format** from Booth Pricing: a 2 inch cut shows two strips per sheet, a triple strip three. That number is what the guest takes home; the printer still prints one sheet per print. **Tax** and **fees** appear as their own lines under the subtotal, either added on top or shown as included, and the tax label follows the currency (IVA for Mexico and Chile, for example). Every currency displays the way the dashboard shows it.

## Steps

The screen starts on the methods you have designed, then moves to a sub-step:

- **QR / QRIS.** The booth shows a QR code from your payment gateway. In Indonesia that is QRIS through DOKU, Midtrans or Xendit, scanned with any banking or e-wallet app. Elsewhere it is a Stripe QR code that opens the checkout on the guest's phone. The booth creates the charge only when the guest asks for it, so no bank QR is minted for a guest who just looks. The QR image is served through Pixture rather than fetched from the gateway directly, so it loads on venue networks that block other hosts. The code stays valid for the **Payment timeout** set under **Booth Pricing > Time**.
- **Voucher.** The guest types a code into the voucher box and taps the button or presses Enter. The box accepts 6, 7 or 8 character codes: single and batch vouchers from the dashboard's **Vouchers** page (6), package codes bought in the online voucher shop (7, they carry Single, Double or Group), and group codes bought at a Multi-Booth central cashier (8, they work at any booth in the group). Offline voucher codes are checked on the booth itself, so they work without internet. A voucher that covers the whole price goes straight to Payment Success.
- **Coin.** A running total while a coin or note acceptor sends keystrokes. See [Hardware Payments](../hardware-payments.md).
- **Card.** Waits for a card reader or cash system to report the payment. Outside Indonesia, Stripe Terminal card readers are the usual choice. Packages need a reader that can charge a variable amount.
- **Payment Success.** Every paid route ends here, including a voucher that covered everything. It dwells 3 seconds by default, and the guest can tap any empty area to continue sooner. A free session skips it.

## AI Portrait Pickup

On accounts with the AI portrait shop (available to beta accounts), a guest who bought a print on the share page gets a 7-character pickup code. They type it into the voucher box on this screen. The booth shows "Printing your portrait. Take it from the tray.", prints the portrait, and returns to Start after about 6 seconds.

## Timers

All three are page settings in the UI Editor under **Payment > Timeout**:

| Timer | Default | What happens |
|---|---|---|
| Idle on the Payment screen | 120 s (0 = never) | Back to Start |
| Idle on the Voucher, Coin or Card step | 60 s | Back to the payment methods |
| Success dwell | 3 s (0 = wait for a tap) | Continues to Template Selection |

## Bonus Session

If Marketing Studio's Bonus Session is on for the booth, a guest who has just paid is offered a free second session, optionally after leaving an email or phone number.

:::tip Test with a free voucher
A single-use free voucher lets you walk through the whole paid flow, prints and sharing included, without moving any money.
:::

## Related

- [Booth Pricing](../../dashboard/booth-pricing.md)
- [Accept Payments](../../tutorials/accept-payments.md)
- [Hardware Payments](../hardware-payments.md)
- [UI Editor](../../dashboard/pix-design/ui-editor.md)
