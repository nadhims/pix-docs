---
sidebar_position: 3
title: Payment Gateway Setup
description: Configure Xendit, DOKU, or Midtrans to accept payments from your photobooth guests.
tags: [guides, payments, billing, xendit, doku, midtrans]
---

# Payment Gateway Setup

If you charge guests per session, Pix integrates with three payment gateways popular in Southeast Asia. You configure your gateway once in the iOS Dashboard, and payments flow automatically during booth sessions.

## Supported Gateways

| Gateway | Best For | Payment Methods |
|---------|----------|-----------------|
| **Xendit** | Broad coverage, easy onboarding | QRIS, bank transfer, e-wallets, cards |
| **DOKU** | Established Indonesian businesses | QRIS, bank transfer, e-wallets |
| **Midtrans** | Versatility, Gopay/Shopeepay focus | QRIS, e-wallets, cards, bank transfer |

:::info
You only need one active gateway. Choose the one that best fits your region and preferred payment methods.
:::

## General Setup Steps

The process is similar for all three gateways:

### 1. Create a Gateway Account

- Sign up at your chosen gateway's website ([xendit.co](https://xendit.co), [doku.com](https://doku.com), or [midtrans.com](https://midtrans.com))
- Complete business verification (KYC) — this typically takes 1-3 business days
- Once approved, you'll have access to your dashboard and API credentials

### 2. Get Your API Keys

- In your gateway dashboard, locate the **API Keys** or **Settings > Integration** section
- Copy your **Server Key** (secret) and **Client Key** (public)
- Some gateways also require a **Merchant ID** or **Callback Token**

:::caution
Never share your Server Key publicly. It grants full access to your payment account. Only enter it in the iOS Dashboard's secure billing settings.
:::

### 3. Configure in iOS Dashboard

1. Open the **iOS Dashboard** and go to **Billing > Payment Gateways**
2. Select your gateway from the list
3. Enter your API keys and merchant ID
4. Tap **Save**

<!-- Screenshot: Payment gateway configuration in iOS Dashboard -->

### 4. Set Your Pricing

1. Go to **Billing > Session Pricing**
2. Set the price per session (or per print, depending on your model)
3. Choose which booths this pricing applies to

## Testing Payments

Before going live at your location, always test the full payment flow:

1. **Use sandbox/test mode.** All three gateways offer test credentials — switch to these in the iOS Dashboard before testing.
2. **Run a full session.** On the desktop app, go through capture and trigger the payment screen.
3. **Complete a test payment.** Use the gateway's test card numbers or test QRIS codes.
4. **Verify the transaction.** Check that it appears in both the gateway dashboard and the iOS Dashboard under Billing > Transactions.

:::tip
Keep sandbox mode on during rehearsals and setup. Switch to production keys only when you're ready for real payments. The toggle is in **Billing > Payment Gateways**.
:::

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Gateway not configured" error | Verify API keys are entered correctly in iOS Dashboard |
| Payment screen not appearing | Check that session pricing is set and assigned to the booth |
| Transaction stuck as "pending" | Check your internet connection; pending transactions retry automatically |
| Callback/webhook failures | Ensure your gateway's callback URL points to `api.pixapp.id` |
