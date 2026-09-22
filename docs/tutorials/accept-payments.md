---
sidebar_position: 6
title: Accept Payments at the Booth
description: Connect a payment gateway, set what a photo session costs at one booth, and take the first QR or card payment on the kiosk.
tags: [tutorials, payments, pricing, payment-gateway]
---

# Accept Payments at the Booth

In this tutorial you will connect a payment gateway to your Pixture account, set what a photo session costs at one booth, run a first paid session and find the money in **Transactions**. It takes about 20 minutes, plus whatever time your gateway needs to approve your merchant account.

## Before You Start

- **Pix Pro on the booth's computer.** A Pix Starter computer is watermarked and skips the Payment screen, so it never charges.
- **A merchant account with a supported gateway** and its API keys. In Indonesia that is Midtrans, Xendit or DOKU (QRIS). Everywhere else it is Stripe (card).
- **The booth paired and online**, with at least one template assigned.
- Owner or admin access to the Pixture dashboard.

:::caution
Payments go straight from the guest to your own gateway account. Pixture never holds your money, so a wrong key means charges that look fine on the dashboard but never pay out. Step 2 catches that.
:::

## Step 1: Connect a Gateway

1. Go to **Settings > Payment Gateway** and click **Add Payment Gateway**.
2. Choose your provider: **Midtrans**, **Xendit** or **DOKU** for QRIS in Indonesia, **Stripe** for card payments everywhere else.

   ![Add Payment Gateway modal, step 1, Choose your payment provider: Midtrans, Xendit, DOKU, Stripe](/img/docs/settings-gateway-providers.webp)

3. Fill in the keys from your gateway's merchant dashboard. Each field has a **How to find this?** expander.
   - **DOKU:** Secret Key, Client ID, Merchant ID, and a Merchant Private Key (RSA 2048). Click **Generate for me** if you do not have one. Turn on **Sandbox Mode** only while testing with DOKU test credentials.

     ![Add Payment Gateway modal, DOKU form with Secret Key, Client ID, Merchant ID, Merchant Private Key and Sandbox Mode](/img/docs/settings-gateway-doku.webp)

   - **Midtrans:** Server Key and Client Key.
   - **Stripe:** the Secret key. It must start with `sk_` or `rk_`; Pixture checks the key when you save. There is no Sandbox switch for Stripe: the key itself decides test or live, and an `sk_test_` key creates charges that never pay out.

     ![Add Payment Gateway modal, Stripe form with the Secret key field](/img/docs/settings-gateway-stripe.webp)

4. Click **Continue**, then **Connect Gateway**.

## Step 2: Run a Test Charge

1. On the gateway card, click **Test**. A result window shows whether the gateway accepted a small charge and how to verify it on the gateway's side.
2. If the test fails, click **Edit**, paste the keys again and test once more. With Stripe, a rejected key is usually something else copied from the Stripe dashboard (an API key ID or a publishable key) instead of the secret key.

## Step 3: Set Prices on the Booth

1. Open **Booths**, click **Configure** on the booth, then the **Pricing** tab. Turn **Payment on this booth** ON. The preview on the left shows the kiosk's payment screen as you edit.

   ![Booth Pricing tab, full page, with the Payment on this booth switch, live preview and Price & packages](/img/docs/booth-pricing-full.webp)

2. On **Price & packages**, enter the **Session price** (it must be above 0). Pick the **Print format** that matches your paper: **Standard** (1 print per sheet), **2 inch cut** (2 per sheet) or **Triple strip** (3 per sheet). Turn on **Double session price**, **Group session price** (4 sessions) and **Additional session price** if you sell packages, each with its **Prints included**.

   ![Pricing sub-tab Price & packages: Session price, Print format, Double, Group and Additional session price](/img/docs/booth-pricing-packages.webp)

3. On **Time**, set the **Payment timeout** (30 to 1800 seconds), how long the guest has to pay. On **Extra prints**, turn on **Extra print price** if guests may buy more prints on the Sharing screen.
4. On **Tax & fees**, enter the tax percentage and label, choose **Charge to**: **Guest** (added on top of the prices) or **Included in the prices** (shown as incl.), and add any fixed or percentage fees with **+ Add fee**. Click **Save changes** in the save bar.

   ![Pricing sub-tab Tax & fees: Tax, Charge to, Fees and + Add fee](/img/docs/booth-pricing-tax-fees.webp)

:::note
Print counts are sheets of paper. A 4x6 sheet with a 2 inch cut is one sheet to the printer and two prints to the guest. Set **Prints included** to 1 and **Print format** to **2 inch cut**; the kiosk then shows "2 prints". Setting the count to 2 prints two sheets.
:::

## Step 4: Use a Different Gateway on One Booth (Optional)

1. On the booth's **Settings** tab, find **Payment Gateway** and set **Active Gateway** to **Organization Default** or a specific gateway, then click **Save**. The same tab holds the booth's **Currency**; the active gateway must be able to charge in it.

   ![Booth Settings tab with Output Settings, Payment Gateway, Booth Info, Currency and Menu PIN](/img/docs/booth-settings-tab.webp)

## Step 5: What the Guest Sees

1. After the Start screen (and the Tutorial, if enabled), the kiosk shows the **Payment** screen with the price and, if you sell packages, a package picker with the print counts, subtotal, fees and tax.
2. With a QRIS gateway, a QR code appears with the amount and a countdown. The guest scans it with any wallet app and pays on their phone.
3. With Stripe, the QR opens a Stripe checkout page on the guest's phone, where they pay by card.
4. Once the gateway confirms the payment, the kiosk shows the **Payment Success** screen for a few seconds (tap anywhere to continue) and moves on to template selection. Coin and card readers connected to the booth use the same screen through the **Coin** and **Card** steps.

## Step 6: Find the Money

1. Open **Transactions**. Each paid session is a row; the cards on top show Total Transactions, Total Revenue, Payment Success and Session Completion for the period you pick (Day, Week, Month or Custom).

   ![Transactions page with search, booth filter, period pills, Sync with payment gateway and Export Excel icons, and the four stat cards](/img/docs/transactions.webp)

2. If a payment reached your gateway but is missing here, click the **Sync with payment gateway** icon, set a Start Date and End Date and click **Run Sync**. Use the **Export Excel** icon for your accountant.

## Step 7: Test Without Spending Money

1. Open **Vouchers**, click **+ Create**, then **Single Voucher**. Enter a **Voucher Code**, set **Discount Type** to **Free Session**, a **Max Redemptions** count and, if you like, a **Booth Restriction** and an **Expiration Date**.

   ![Create Voucher modal with Voucher Code, Discount Type, Discount Value, Max Redemptions, Booth Restriction and Expiration Date](/img/docs/vouchers-create-single.webp)

2. On the booth's Payment screen, tap **Voucher** and type the code. A voucher that covers the whole price shows the Payment Success screen and continues like a paid session, with no charge created.

## Check It Worked

- Start a session on the booth. The Payment screen shows your price and a QR code.
- Pay with your own phone (or a Free Session voucher). The kiosk shows **Payment Success** and continues to templates.
- The session appears as a row in **Transactions**, and the real payment appears in your gateway's own dashboard.

## Troubleshooting

| What you see | What to check |
|---|---|
| The kiosk never shows a Payment screen | The computer is on Pix Starter (watermarked), **Payment on this booth** is OFF, or the Payment Screen has **Enabled in session flow** unticked in the booth's UI project (**Pix Design > UI Editor**). |
| "Enter a price, or switch payment off above" when saving | The session price must be above 0. Free sessions are the switch at the top of the Pricing tab, never a price of 0. |
| Stripe charges succeed but nothing pays out | The saved key is an `sk_test_` key. Paste the live `sk_live_` key, save, and run the test charge again. |
| The QR tile stays blank while the countdown runs | The booth could not download the QR image. Check the booth's internet connection and start the payment again. |
| The guest's wallet says the merchant was not found ("Merchant tidak ditemukan") | That message comes from the guest's wallet, not the booth: weak mobile data at the venue, or a QR that expired after about 5 minutes. Cancel and start a fresh payment. |
| A payment reached the gateway but the session shows no revenue | Run **Sync with payment gateway** on the Transactions page for that date. |

## Related

- [Booth Pricing](../dashboard/booth-pricing.md)
- [Payment gateway setup](../guides/payment-gateway-setup.md)
- [Transactions](../dashboard/transactions.md)
- [The Payment screen on the booth](../desktop-app/session-flow/payment.md)
