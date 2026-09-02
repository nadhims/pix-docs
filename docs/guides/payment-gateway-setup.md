---
sidebar_position: 3
title: Payment Gateway Setup
description: Connect DOKU so customers can pay for photo sessions by QRIS at the kiosk, test in sandbox, and go live.
tags: [guides, payment, doku, qris]
---

# Payment Gateway Setup

Pix takes kiosk payments by **QRIS** through **DOKU**. Customers scan the QR on the kiosk with any Indonesian bank or e-wallet app, the money settles to your DOKU account, and Pix takes no cut of it.

If you prefer cash or card hardware instead of (or as well as) QRIS, see [Hardware Payments](../desktop-app/hardware-payments.md).

## Other Gateways and International Operators

The **Settings > Payment Gateway** picker also offers **Midtrans** and **Xendit** (Indonesia — QRIS, e-wallets, cards) and **Stripe** for operators outside Indonesia: card payments, plus physical tap-to-pay card readers via **Stripe Terminal** (readers are assigned per booth in Settings).

QRIS is Indonesia's national QR payment standard and only exists there. For operators outside Indonesia, describe scan-to-pay generically as **"QR code payment"** — whether it is available depends on the payment methods enabled on the Stripe account.

## Step 1: Get a DOKU Account

1. Register at DOKU and complete business verification. DOKU's review typically takes a few business days.
2. In the DOKU dashboard, open your **API credentials**. You will need the **Client ID**, **Secret key**, and the **RSA private key** used to sign requests. Keep the private key safe; Pix stores it encrypted and never shows it again.

## Step 2: Connect It in Pix

1. In the Pix Dashboard, open **Settings > Payment Gateway**.
2. Choose **DOKU**, paste the credentials, and save.
3. Leave the environment on **Sandbox** for now.

## Step 3: Test in Sandbox

1. Set a price on a test booth in [Booth Pricing](../dashboard/booth-pricing.md).
2. Run a photo session on the kiosk and pay the sandbox QR with DOKU's test app or simulator.
3. Confirm the kiosk moves to the success screen and the payment shows in **Transactions**.

## Step 4: Go Live

Switch the environment to **Production** in **Settings > Payment Gateway**. New photo sessions charge real money from that moment; sessions already on the payment screen finish on the previous setting.

## Per-Booth and Per-Event Gateways

The organization gateway applies everywhere by default. A booth (on its **Settings** tab) or an event can override it with different DOKU credentials, useful when a venue or client must receive the money directly.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Kiosk shows "payment unavailable" | Gateway not connected, or wrong credentials | Re-check **Settings > Payment Gateway** and save again |
| QR shown but payment never confirms | DOKU cannot reach Pix to confirm | Check the gateway environment (sandbox vs production) matches the app the customer paid with |
| Payment confirmed but no session recorded | Kiosk offline at the moment of payment | The kiosk reconciles when it reconnects; check **Transactions** after a few minutes |
| Amount differs from the package price | Tax or fees applied | See tax and fee settings in [Booth Pricing](../dashboard/booth-pricing.md) |

:::tip Vouchers for testing
Once live, use a single-use free voucher rather than a real payment to test changes to prices or kiosk designs.
:::
