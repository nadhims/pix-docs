---
sidebar_position: 3
title: Payment Gateway Reference
description: The payment gateways Pixture connects to (Midtrans, Xendit, DOKU, Stripe, Razorpay, Kashier), what each form asks for, sandbox rules, per-booth and per-event gateways, currencies and troubleshooting.
tags: [guides, payment, gateway, doku, stripe, qris, razorpay, kashier, upi, instapay]
---

# Payment Gateway Reference

A payment gateway lets guests pay for a photo session by scanning a QR code on the booth. The money goes to your own gateway account; Pixture takes no share of it. This page is the reference for the gateway settings. For the step-by-step walk-through from opening the merchant account to the test charge, follow [Create a Payment Gateway](../tutorials/create-a-payment-gateway.md); for prices and the first paid session, [Accept Payments](../tutorials/accept-payments.md).

## Before you start

- A verified merchant account with one of the providers below.
- Pix Pro on the booth PC. On Pix Starter the booth skips the Payment screen.
- A price on the booth's **Pricing** tab, with **Payment on this booth** switched on.

## Providers

| Provider | Where it works | What guests use |
|---|---|---|
| **Midtrans** | Indonesia | QRIS |
| **Xendit** | Indonesia, Philippines, Thailand, Singapore | QRIS (IDR), QR Ph (PHP), PromptPay (THB), PayNow QR (SGD) |
| **DOKU** | Indonesia | QRIS |
| **Razorpay** | India | UPI QR, scanned with any UPI app (Google Pay, PhonePe, Paytm, BHIM) |
| **Kashier** | Egypt | A QR that opens Kashier's payment page: card (incl. Meeza), mobile wallet (Vodafone Cash and others) or InstaPay |
| **Stripe** | Worldwide | QR code payment on their phone, or a Stripe Terminal card reader |

QRIS is Indonesia's national QR payment standard. In India the booth shows a UPI QR through Razorpay, in Egypt a Kashier QR, and in the Philippines, Thailand and Singapore the local QR through Xendit. Everywhere else, Stripe shows a QR code that opens a card payment on the guest's phone. Malaysia's DuitNow QR is not available through a gateway yet; see [Setup B4](../tutorials/connect-a-coin-or-card-reader.md#setup-b4-a-duitnow-qr-terminal-in-malaysia-transpire-qr) for a DuitNow QR terminal.

## Connecting a gateway

1. Open **Settings > Payment Gateway** and tap **Add Payment Gateway**.
2. Under **Choose your payment provider**, pick **Midtrans**, **Xendit**, **DOKU**, **Stripe**, **Razorpay (India)** or **Kashier (Egypt)**, then **Continue**.
3. Fill in the provider's fields:
   - **Midtrans:** **Server Key** and **Client Key**.
   - **DOKU:** **Merchant ID** and a **Private key**. Tap **Generate for me** if you do not have one yet.
   - **Stripe:** your **Secret key**. It must start with `sk_` or `rk_` and is verified when you save.
   - **Xendit:** the credentials the form asks for, from your Xendit dashboard. For PHP, THB or SGD booths the Xendit account must be registered in that country, and the Pix webhook URL also goes into Xendit's **Payments API** webhook (`payment.capture`).
   - **Razorpay:** the **Key ID** (`rzp_live_`, or `rzp_test_` to try it without real money) and the **Key Secret**, from Razorpay **Account & Settings > API Keys**. Razorpay switches UPI QR codes on by request: ask Razorpay support to enable **QR Codes (UPI)** and **QR image content** on your account. For instant confirmations, add the Pix webhook URL (shown under **Edit**) in Razorpay **Account & Settings > Webhooks** with a secret of your own and the `qr_code.credited` and `qr_code.closed` events, then paste the same secret in **Edit**. Without it, payments are still confirmed by polling.
   - **Kashier:** the **Secret Key**, the **Payment API Key** (Kashier **Developers > API Integration**) and the **Merchant ID**, which starts with `MID-` and sits under your business name at the top left of the Kashier dashboard. Live payments need a completed Kashier application. Keys copied in Kashier's Test Mode need **Sandbox Mode** on.
4. Set the **Currency** and, if your provider needs it, the **Webhook** (optional). The gateway card shows the webhook URL to paste into the provider's dashboard.
5. Switch **Sandbox Mode** on for a test account, off for live.
6. Tap **Connect Gateway**.

The gateway card now shows **Edit** and **Test**.

## Sandbox and live

- **Midtrans and DOKU:** **Sandbox Mode** is real. On, the booth talks to the provider's sandbox and test apps pay; off, real money moves.
- **Stripe:** there is no sandbox switch. The key decides: an `sk_test_` key charges Stripe's test mode and those payments **never pay out**, even though they look successful in the dashboard. Paste the live key before opening to guests.

## The test charge

1. On the gateway card, tap **Test**.
2. Scan the QR in the result modal with a payment app that matches the mode (a test app for sandbox, a real one for live).
3. The modal confirms the payment or shows the provider's reason for the failure and offers **Edit gateway**.

Run the test charge again after any change to keys or mode.

## Per-booth and per-event gateways

The gateway under Settings is the **Organization Default**. Two places can override it, useful when a venue or client must receive the money directly.

- **Booth:** open the booth, go to **Settings > Payment Gateway**, choose the gateway under **Active Gateway**, then **Save**.
- **Event:** in **Events**, open the event and tap **Edit**. Under **Payment gateway**, pick the gateway instead of "Organization default", then **Save Changes**. Sessions captured during the event charge through it.

## Currencies

Each gateway charges only certain currencies:

| Gateway | Currencies |
|---|---|
| Midtrans, DOKU | IDR |
| Xendit | IDR, PHP, THB, SGD |
| Razorpay | INR |
| Kashier | EGP |
| Stripe | Any other currency |

The booth's currency picks the QR, so a Xendit booth priced in PHP shows QR Ph. The dashboard refuses the combination when you set a booth's currency (booth **Settings > Booth Info > Currency**), assign a gateway or change the organization's default currency.

## Stripe: QR payment or a card reader

Both are set up from the same Stripe gateway.

- **QR payment:** no hardware. The booth shows a Stripe QR code on its Payment screen; the guest scans it and pays on their phone.
- **Stripe Terminal:** a card reader at the booth, so guests tap or insert a card. Readers are assigned per booth in Settings. Recommended reader: **UX700**.

## Cash, coins and other card terminals

Coin acceptors, bill validators and keystroke card readers do not go through a gateway. They are set up on the booth under the operator menu's **Hardware API** page. See [Hardware Payments](../desktop-app/hardware-payments.md).

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| The booth skips the Payment screen | Payment is off on the booth, or the computer is watermarked | Switch on **Payment on this booth** on the Pricing tab; check the plan badge in the operator menu |
| Payment unavailable on the booth | No gateway connected, or wrong keys | Re-check **Settings > Payment Gateway**, then run **Test** |
| QR shown but the payment never confirms | Sandbox and the guest's app do not match, or the webhook is missing | Match **Sandbox Mode** to the app the guest paid with; paste the webhook URL into the provider's dashboard |
| Stripe payments succeed but no money arrives | An `sk_test_` key | **Edit** the gateway and paste the live key |
| Payment confirmed but no session recorded | The booth was offline at that moment | Wait a few minutes, then check **Transactions**; **Sync with payment gateway** pulls missing payments for a date range |
| Amount differs from the package price | Tax or fees applied | See **Tax & fees** on the booth's Pricing tab |

:::tip Vouchers for testing
Once live, use a single-use free voucher rather than a real payment to test changes to prices or screen designs.
:::

## Related

- [Accept Payments](../tutorials/accept-payments.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Hardware Payments](../desktop-app/hardware-payments.md)
- [Settings](../dashboard/settings.md)
