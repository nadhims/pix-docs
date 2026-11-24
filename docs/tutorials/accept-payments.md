---
sidebar_position: 6
title: Accept Payments at the Booth
description: Connect a payment gateway, set what a photo session costs at one booth, choose what the Payment screen offers, and take the first QR or card payment on the booth.
tags: [tutorials, payments, pricing, payment-gateway]
---

# Accept Payments at the Booth

In this tutorial you will connect a payment gateway, set what a photo session costs at one booth, choose what the booth's Payment screen offers, run a first paid session and find the money in **Transactions**. It takes about 20 minutes, plus whatever time your gateway needs to approve your merchant account.

## When to Use It

- **A self-service booth in a mall, café or cinema lobby.** Every customer pays at the booth by QR code (or card), with nobody at the counter.
- **A multi-booth studio.** Each booth shows its own price; one gateway takes the money for all of them.
- **A pop-up box at a weekend market.** Customers pay by phone at the stall, so you never handle change.
- **An event where the client sells sessions** (a sponsor charging for a keepsake print, for example). Turn on payment for that event only.

Not for an event rental where the client pays you a flat fee: switch payment off and guests never see a Payment screen (see [Run an Event](./run-an-event.md)).

## Before You Start

- **Pix Pro on the booth computer.** A Pix Starter computer is watermarked and never shows the Payment screen, so it never charges.
- **A merchant account with a supported gateway** and its keys. See [Create a Payment Gateway](./create-a-payment-gateway.md) for which provider fits your country.
- **The booth paired and online**, with at least one template assigned.
- Owner or admin access to the Pixture dashboard.

:::caution
Payments go straight from the customer to your own gateway account. Pixture never holds your money, so a wrong key means charges that look fine on the dashboard but never pay out. Step 2 catches that.
:::

## Step 1: Connect a Gateway

No merchant account yet, or unsure where each key lives on the provider's dashboard? [Create a Payment Gateway](./create-a-payment-gateway.md) walks through that first; come back here once the gateway card shows on your Settings page.

1. Go to **Settings > Payment Gateway** and click **Add Payment Gateway**.
2. Choose your provider: **DOKU**, **Midtrans** or **Xendit** for QRIS in Indonesia, **Razorpay** in India, **Kashier** in Egypt, **HitPay** in Malaysia and Singapore, **Stripe** for card payments everywhere else.

   ![Add Payment Gateway modal, step 1, Choose your payment provider: Midtrans, Xendit, DOKU, Stripe, Razorpay (India), Kashier (Egypt), HitPay (Malaysia, Singapore)](/img/docs/steps/tutorials-accept-payments--settings-gateway-providers.webp)

3. Fill in the keys from your gateway's merchant dashboard.
   - **DOKU:** **Secret Key**, **Brand ID** (the `BRN-` number under your business name in the DOKU Dashboard), **QRIS Client ID** (numbers only, from DOKU's **QRIS Credential Settings** tab), and a **Merchant Private Key (RSA 2048)**, each with a **How to find this?** expander. Click **Generate for me** if you do not have one. Turn on **Sandbox Mode** only while testing with DOKU test credentials.

     ![Add Payment Gateway modal, DOKU form with Secret Key, Brand ID, QRIS Client ID, Merchant Private Key and Sandbox Mode](/img/docs/steps/tutorials-accept-payments--settings-gateway-doku.webp)

   - **Stripe:** the **Secret Key**. It must start with `sk_` or `rk_`; Pixture checks the key when you save. There is no Sandbox switch for Stripe: the key itself decides test or live, and an `sk_test_` key creates charges that never pay out.

     ![Add Payment Gateway modal, Stripe form with the Secret key field](/img/docs/steps/tutorials-accept-payments--settings-gateway-stripe.webp)

4. Click **Continue**, then **Connect Gateway**.
5. On the new card, click **Activate**. A new gateway is saved switched off, and booths charge through the one marked **Active**.

## Step 2: Run a Test Charge

1. On the gateway card, click **Test**. A result window shows whether the gateway accepted a small charge and how to verify it on the gateway's side.
2. If the test fails, click **Edit**, paste the keys again and test once more. With Stripe, a rejected key is usually something else copied from the Stripe dashboard (an API key ID or a publishable key) instead of the secret key.

![Payment Gateway section with a connected gateway card and its Edit and Test buttons](/img/docs/steps/tutorials-accept-payments--settings-gateway-card.webp)

## Step 3: Set Prices on the Booth

1. Open **Booths**, click **Configure** on the booth, then the **Pricing** tab. Turn **Payment on this booth** on. The preview on the left shows the booth's payment screen as you edit.

   ![Booth Pricing tab, full page, with the Payment on this booth switch, live preview and Price & packages](/img/docs/steps/tutorials-accept-payments--booth-pricing-full.webp)

2. On **Price & packages**, enter the **Session price** (it must be above 0) and pick the **Print format** that matches your paper. Add **Double**, **Group** and **Additional session** packages if you sell them.

   ![Pricing card with Payment on this booth on and the Price & packages sub-tab: Session price $8.00, Print format, Double $14.00, Group $20.00 and Additional session price](/img/docs/steps/tutorials-accept-payments--booth-pricing-packages.webp)

3. Set the **Payment timeout** on **Time**, the **Extra print price** on **Extra prints**, and tax or fees on **Tax & fees** if you need them, then click **Save changes**.

   ![Pricing card on the Tax & fees sub-tab: a 10% Sales tax, Charge to Guest, Fees and + Add fee](/img/docs/steps/tutorials-accept-payments--booth-pricing-tax-fees.webp)

Every field, with the know-how for packages, print counts and tax, is in [Set Prices, Packages and Extra Prints](./prices-and-packages.md).

## Step 4: Choose What the Payment Screen Offers

What the customer can tap on the Payment screen comes from the booth's screen design in the UI Editor, not from the Pricing tab.

1. Open **Pix Design**, open the booth's screen design in the UI Editor, and click the **Payment Screen** tab.
2. Under **Payment Methods**, keep **QR Pay** (your gateway) and **Voucher** on. Turn on **Debit/Credit Card** only with a card reader and **Coin Acceptor** only with a coin or note box (see [Take Card, Coin and Cash Payments](./connect-a-coin-or-card-reader.md)). The last method that is on cannot be turned off.
3. Leave **Enabled in session flow** on. When it is off, the booth skips the Payment screen.
4. Click **Save**.

![UI Editor on the Payment Screen tab with Payment Screen, the Payment Methods switches, Enabled in session flow and Save marked](/img/docs/steps/tutorials-accept-payments--ui-editor-payment.webp)

:::caution One design, many booths
A screen design can be used by several booths. **Enabled in session flow** off makes every booth on that design skip the Payment screen, and a booth with a price then gives sessions away. If one booth must run free, switch payment off on that booth's **Pricing** tab instead, or give it its own copy of the design.
:::

## Step 5: Use a Different Gateway on One Booth (Optional)

1. On the booth's **Settings** tab, find **Payment Gateway** and set **Active Gateway** to **Organization Default** or a specific gateway, then click **Save**. The same tab holds the booth's **Currency**; the gateway must be able to charge in it.

   ![Booth Settings tab with Output Settings, Payment Gateway, Booth Info, Currency and Menu PIN](/img/docs/steps/tutorials-accept-payments--booth-settings-tab.webp)

## Step 6: What the Customer Sees

1. After the Start screen (and the Custom Screen, if you turned it on), the booth shows the **Payment** screen with the price and, if you sell packages, a package picker with the print counts, subtotal, fees and tax.
2. With a QRIS gateway, a QR code appears with the amount and a countdown. The customer scans it with any wallet app and pays on their phone.
3. With Stripe, the QR opens a Stripe checkout page on the customer's phone, where they pay by card.
4. Once the gateway confirms, the booth moves on to template selection by itself. (With **Advanced mode** on and a **Payment Success** page designed, that page shows first, for the time you set.)

<!-- SHOT-NEEDED: booth: the Payment screen with the Single, Double and Group package cards and the QR code with its countdown -->

## Step 7: Find the Money

1. Open **Transactions**. Each paid session is a row; the cards on top show Total Transactions, Total Revenue, Payment Success and Session Completion for the period you pick (Day, Week, Month or Custom).

   ![Transactions page with search, booth filter, period pills, Sync with payment gateway and Export Excel icons, and the four stat cards](/img/docs/steps/tutorials-accept-payments--transactions.webp)

2. If a payment reached your gateway but is missing here, click the **Sync with payment gateway** icon, set a Start Date and End Date and click **Run Sync**. Use the **Export Excel** icon for your accountant.

## Step 8: Test Without Spending Money

1. Open **Vouchers**, click **+ Create**, then **Single Voucher**. Enter a **Voucher Code**, set **What is it?** to **Staff pass** (a free session that is not a sale), and click **Create Voucher**.

   ![Create voucher window with Voucher Code, What is it? (Sold session or Staff pass), Max Redemptions, Booth Restriction and Expiration Date](/img/docs/steps/tutorials-accept-payments--vouchers-create-single.webp)

2. On the booth's Payment screen, tap the voucher button (**Use Voucher** in the default design) and type the code. The session continues like a paid one, with no charge created.

More on codes in [Sell and Give Vouchers](./vouchers.md).

## Check It Worked

- Start a session on the booth. The Payment screen shows your price and a QR code.
- Pay with your own phone (or a Staff pass). The booth confirms the payment and continues to templates.
- The session appears as a row in **Transactions**, and the real payment appears in your gateway's own dashboard.

## Tips

- **Do one real, small payment yourself before opening.** It proves the keys, the gateway's QR channel, the booth's internet and **Transactions** in one go.
- **Keep Voucher on** next to QR Pay. A customer whose wallet app fails can still buy a code on your online shop or from staff.
- **Set the Payment timeout to what a real customer needs.** Too short and people lose the QR while they open their banking app; too long and an abandoned payment blocks the booth.
- **Check the gateway's currency when you change a booth's currency.** A gateway can only charge the currencies it supports.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The booth never shows a Payment screen | The computer is on Pix Starter, **Payment on this booth** is off, or **Enabled in session flow** is off on the design's Payment Screen | Put Pix Pro on the computer, switch payment on, or turn the Payment Screen back on in the UI Editor |
| A free booth (payment off) asks the first customer for a voucher or a payment | Pixture Photobooth before 1.2.21 asked a free booth for a voucher whenever its Payment Screen had the Voucher method on, which every default design has. A booth that has lost internet also cannot check that it is free, so it may show the Payment screen until the connection is back | Update the booth app from the operator menu. For a booth that should never charge, also open its design in **Pix Design > UI Editor**, click **Payment Screen**, turn **Enabled in session flow** off and click **Save** (only on a design that no paid booth uses) |
| "Enter a price, or switch payment off above." when saving | The session price is 0 | Free sessions are the switch at the top of the Pricing tab, never a price of 0 |
| "Payment isn't available right now. Please ask the booth staff for help." | No gateway on the account is marked **Active** | Click **Activate** on the gateway card in **Settings > Payment Gateway** |
| Stripe charges succeed but nothing pays out | The saved key is an `sk_test_` key | Paste the live `sk_live_` key, save, and run the test charge again |
| The QR tile stays blank while the countdown runs | The booth could not download the QR image | Check the booth's internet connection and start the payment again |
| The customer's wallet says the merchant was not found ("Merchant tidak ditemukan") | The message comes from the customer's wallet: weak mobile data, or a QR that expired (it lasts as long as the **Payment timeout**) | Cancel and start a fresh payment |
| A payment reached the gateway but the session shows no revenue | The confirmation did not reach Pixture | Run **Sync with payment gateway** on the Transactions page for that date |

## Related

- [Create a Payment Gateway](./create-a-payment-gateway.md)
- [Set Prices, Packages and Extra Prints](./prices-and-packages.md)
- [Sell and Give Vouchers](./vouchers.md)
- [Payment Setups by Use Case](./payment-setups-by-use-case.md)
- [Take Card, Coin and Cash Payments](./connect-a-coin-or-card-reader.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Transactions](../dashboard/transactions.md)
- [The Payment screen on the booth](../desktop-app/session-flow/payment.md)
