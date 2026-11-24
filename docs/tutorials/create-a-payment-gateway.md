---
sidebar_position: 6
title: Create a Payment Gateway
description: Open a merchant account with DOKU, Stripe or another supported provider, collect the keys Pixture asks for, connect and activate the gateway, run the test charge, and add the optional webhook and card readers.
tags: [tutorials, payments, payment-gateway, doku, stripe, qris]
---

# Create a Payment Gateway

A payment gateway is the service that sits between your booth and your bank. It shows the QR code or card request, checks that the customer actually paid, tells the booth to unlock the photo session, and settles the money into your business account a day or three later. Pixture never holds the money: it goes from the customer to your own gateway account, and Pixture only asks the gateway whether the payment went through.

In this tutorial you will open a merchant account, collect the keys Pixture needs, connect and activate the gateway, run the test charge and, for Stripe, add the optional webhook and card readers. The Pixture side takes about 30 minutes. The provider's own business check takes anywhere from a day to two weeks, so start with that.

## When to Use It

- **A self-service booth in a mall or a café.** Nobody stands next to it, so the booth has to take the money itself. A gateway is what turns the Payment screen into a QR code that customers can pay.
- **A pop-up box at a market or festival.** Customers pay by phone at the stall, and the same gateway sells sessions ahead of time on your online shop.
- **A multi-booth studio.** One gateway serves every booth in the studio, so one account receives all the money and **Transactions** shows every sale.
- **An event where a sponsor or the client wants the money.** Add a second gateway in their name and pick it for that event only.

Do you only rent booths for events where the client pays you a flat fee and guests pay nothing? You do not need a gateway: run the booth free (see [Run an Event](./run-an-event.md)).

## Before You Start

- **A registered business and a business bank account.** Gateways will not onboard you without both. In Indonesia that is a KBLI 74201 registration plus an NIB through OSS; in Malaysia an SSM registration; in the United States an LLC plus a sales tax permit is the usual minimum.
- **Owner or admin access** to the Pixture dashboard.
- **Pix Pro on the booth computer** for the test at the booth. On Pix Starter the booth skips the Payment screen.

## Prepare

- **Pick the provider by country, not by fee.** The provider has to charge in the currency your booth is priced in, and the customer has to be able to pay with the app already on their phone. The table in Step 1 does that matching for you.
- **Decide test or live before you copy keys.** Every provider has test keys (no real money) and live keys. Keep the two apart in a note, because a test key looks fine in Pixture and simply never pays out.
- **Have your phone ready** with a banking or wallet app (or a card, for Stripe). The last check is a real payment of your own.

## Step 1: Pick the Provider

| You are in | Use | Customers pay with |
|---|---|---|
| Indonesia | **DOKU** | QRIS from any wallet or banking app |
| India | **Razorpay** | UPI QR from any UPI app (Google Pay, PhonePe, Paytm, BHIM) |
| Egypt | **Kashier** | Card, mobile wallet or InstaPay on Kashier's payment page, opened from a QR |
| Philippines, Thailand, Singapore | **Xendit** | QR Ph, PromptPay or PayNow QR, from any local banking or wallet app |
| Malaysia, Singapore | **HitPay** | DuitNow QR (MYR) or PayNow QR (SGD), from any local banking or wallet app. DuitNow needs a verified Malaysian business account |
| Anywhere else | **Stripe** | A card on their phone through a QR code, or a tap on a Stripe Terminal reader at the booth |

Midtrans and Xendit are also on the list for Indonesian merchants who already have an account there. Midtrans and DOKU charge in rupiah only; Xendit charges IDR, PHP, THB and SGD, HitPay MYR and SGD, Razorpay INR and Kashier EGP. A booth priced in any other currency needs Stripe. Setup fields for each provider are also in the [Payment Gateway Reference](../guides/payment-gateway-setup.md#connecting-a-gateway).

## Step 2: Open the Merchant Account

1. **DOKU:** register as a business at doku.com, complete the verification with your business registration, the owner's ID and the bank account, and ask for QRIS to be activated. You start in the sandbox and receive live keys once verification is done.
2. **Stripe:** create an account at stripe.com and complete **Activate your account** with the business details and the payout bank account. Test keys are available at once; live keys appear when the account is activated.
3. **Any other provider:** sign up on its site as a business and finish its verification. Each one has a test mode you can use in the meantime.

While you wait for verification, everything below works with the provider's test keys. Swap them for the live keys before you open to customers.

## Step 3: Collect the Keys

**DOKU** needs four values. The first three come from the DOKU Dashboard; the fourth is made in Pixture.

| Field in Pixture | Where to find it | Looks like |
|---|---|---|
| **Secret Key** | DOKU Dashboard > Settings > Account > API Keys > **Active Secret Key**. Click Reveal Key, pass the OTP, copy | `SK-RG...` |
| **Brand ID** | DOKU Dashboard, top left, under your business name | `BRN-0216-1770968840103` |
| **QRIS Client ID** | DOKU Dashboard > Settings > Checkout Appearance > **QRIS Credential Settings** tab > **Client ID**. Numbers only | `114621` |
| **Merchant Private Key (RSA 2048)** | In the Pixture form, click **Generate for me**. Pixture creates the key pair in your browser and shows the public key; paste that public key in DOKU Dashboard > Settings > Account > API Keys > **Edit Merchant Public Key** | `-----BEGIN PRIVATE KEY-----` |

**Stripe** needs one value.

| Field in Pixture | Where to find it | Looks like |
|---|---|---|
| **Secret Key** | Stripe Dashboard > Developers > API keys. Copy the secret key itself | `sk_live_...`, or a restricted key `rk_...` |

Stripe shows a secret key only once. If yours is gone, click **Create secret key** and copy the new one. Two things that look right but are not the key: the publishable key (`pk_...`) and the **Copy API key ID** entry in the key's menu, which gives an `mk_...` string. An `sk_test_...` key connects fine and looks fine in Transactions, but it charges Stripe's test mode and never pays out.

**The other providers:**

| Provider | Fields in Pixture | Where to find them |
|---|---|---|
| **Midtrans** | **Server Key** | Midtrans Dashboard, Settings > Access Keys |
| **Xendit** | **Server Key** (Xendit calls it the secret API key) | Xendit Dashboard, Settings > API Keys |
| **Razorpay** | **Key Secret** and **Key ID** (`rzp_live_...`) | Razorpay > Account & Settings > API Keys > Generate Key. The Key Secret is shown only once. UPI QR codes are switched on by request: ask Razorpay support |
| **Kashier** | **Secret Key**, **Payment API Key** and **Merchant ID** (`MID-...`) | Kashier > Developers > API Integration; the Merchant ID sits under your business name, top left |
| **HitPay** | **API Key** | HitPay > Developers > API Keys |

## Step 4: Connect the Gateway in Pixture

1. Open **Settings > Payment Gateway** and click **Add Payment Gateway**.
2. Under **Choose your payment provider**, pick the provider and click **Continue**.

![Add Payment Gateway modal, step 1, Choose your payment provider: Midtrans, Xendit, DOKU, Stripe, Razorpay (India), Kashier (Egypt), HitPay (Malaysia, Singapore)](/img/docs/steps/tutorials-create-a-payment-gateway--settings-gateway-providers.webp)

3. Paste the values from Step 3. Each field has a **How to find this?** expander with the same path as the tables above.
   - **DOKU:** Secret Key, Brand ID, QRIS Client ID and the Merchant Private Key (click **Generate for me**, then copy the public key it shows into the DOKU Dashboard before you continue). Turn **Sandbox Mode** on while you use sandbox keys, and off with the live keys.

![Add Payment Gateway modal, DOKU form with Secret Key, Brand ID, QRIS Client ID, Merchant Private Key, Generate for me and Sandbox Mode](/img/docs/steps/tutorials-create-a-payment-gateway--settings-gateway-doku.webp)

   - **Stripe:** the Secret Key. **Currency** stays on **Organization default** unless this gateway charges in a different currency from your account. There is no Sandbox switch for Stripe or Razorpay: the key decides test or live. Leave the **Webhook** section alone for now; it is not needed to take payments.

![Add Payment Gateway modal, Stripe form with the Secret Key field, Currency and the optional Webhook note](/img/docs/steps/tutorials-create-a-payment-gateway--settings-gateway-stripe.webp)

   - **Midtrans, Xendit, Kashier, HitPay:** the fields from the table, and **Sandbox Mode** on only for test keys.

4. Click **Connect Gateway**. Pixture checks a Stripe key with Stripe as it saves; a wrong or incomplete key is refused here rather than at the booth.

## Step 5: Activate It

When no gateway on the account is active, a new live gateway is switched on as soon as you save it. Otherwise it is saved switched off, with "Saved. Click Activate to take payments with this gateway." Booths on **Organization Default**, your online shop and Frame Lab charge through the gateway marked **Active**.

1. If the new card has no **Active** badge, click **Activate**. A gateway in test (sandbox) mode always waits for you to click it.
2. Only one gateway is active at a time: activating one switches the other off. A booth or an event that picks a gateway by name charges through it whether or not it is active (Step 9).

![Payment Gateway section with a connected gateway card and its Edit and Test buttons](/img/docs/steps/tutorials-create-a-payment-gateway--settings-gateway-card.webp)

<!-- SHOT-NEEDED: dashboard: Settings > Payment Gateway with a freshly connected, inactive gateway card showing the Activate button next to Edit and Test -->

## Step 6: Run the Test Charge

1. On the gateway card, click **Test**. Pixture asks the gateway for a small test charge.
2. The result window says **Connection works** and how to check it on the provider's side. For a QR gateway, scan the QR it shows with a wallet that matches the mode: a test wallet in sandbox, a real wallet live.
3. If it fails, the window says **Connection failed** with "The provider did not accept the test charge" (or, for Stripe, "Stripe did not accept the key on this gateway"). Click **Edit gateway**, paste the keys again, check that the channel (QRIS, or card payments on Stripe) is active on the provider's dashboard, and test once more.

Run the test again after any change to keys or mode, and once more when you switch from sandbox to live.

## Step 7: Add the Webhook (Optional)

Payments are confirmed without a webhook: the booth keeps asking the gateway until the payment is through. A webhook lets the provider push the confirmation as well, which shaves a few seconds off the wait. Stripe, Razorpay and HitPay have one.

1. On the gateway card, find **Webhook URL (optional)** and click **Copy**.
2. In the Stripe Dashboard, go to **Developers > Webhooks > Add destination**, paste the URL and pick the `checkout.session` events. (Razorpay: **Account & Settings > Webhooks**, tick `qr_code.credited` and `qr_code.closed`, type a secret of your own. HitPay: **Developers > Webhook Endpoints**, tick `payment_request.completed` and `charge.created`.)
3. Copy the signing secret the provider shows (`whsec_...` on Stripe, your own secret on Razorpay, the **Salt** on HitPay).
4. Back in Pixture, click **Edit** on the card, paste the secret into the webhook field and save.

## Step 8: Add Stripe Terminal Card Readers (Optional)

With a Stripe Terminal reader at the booth, customers tap or insert a card instead of scanning a QR code. The reader belongs to your Stripe account and is assigned to a booth in Pixture.

1. Register the reader in the Stripe Dashboard under **Terminal**, at the location of the booth, and connect it to the booth's Wi-Fi.
2. On the Stripe gateway card in Pixture, open **Card readers (Stripe Terminal)**. Every booth has a dropdown that reads **No reader (QR payment)** until you pick a reader.
3. Pick the reader for the booth. Its Payment screen now asks for a tap on the reader instead of showing a QR code. Choose **No reader (QR payment)** to go back.

More on readers, coin boxes and cash in [Take Card, Coin and Cash Payments](./connect-a-coin-or-card-reader.md).

## Step 9: Decide Which Booths Use It

- **Every booth:** nothing to do. Each booth's **Active Gateway** reads **Organization Default**, which is the gateway marked **Active**.
- **One booth on a different gateway** (a venue or client that must receive the money directly): open **Booths**, click **Configure** on the booth, then the **Settings** tab. Under **Payment Gateway**, set **Active Gateway** and click **Save**. The same tab holds the booth's **Currency**; the gateway must be able to charge in it.

![Booth Settings tab with Output Settings, Payment Gateway, Booth Info, Currency and Menu PIN](/img/docs/booth-settings-tab.webp)

- **One event on a different gateway** (a client who must receive the event's money): in **Events**, open the event, click **Edit**, and pick the gateway under **Payment gateway**. It does not need to be **Active**: leave your usual gateway active for your other booths.

- **Online shop and Frame Lab:** sales on your online shop link and in Frame Lab always charge the account's **Active** gateway, whatever a booth picks on its **Settings** tab. A venue that must receive its online sales directly needs its own Pixture account.

Keep one gateway **Active** at all times: booths on **Organization Default**, your online shop and Frame Lab all charge through it.

The gateway only decides where the money goes. What a session costs is set per booth on the **Pricing** tab; see [Set Prices, Packages and Extra Prints](./prices-and-packages.md).

## Check It Worked

- The gateway card shows the **Active** badge, and **Test** says **Connection works**.
- A booth with **Payment on this booth** switched on shows a QR code (or the reader's prompt) on its Payment screen.
- A payment made with your own phone appears on the provider's dashboard and as a row in **Transactions**.

## Tips

- **Test with a real, small payment before the first customer.** Set the session price low for ten minutes, pay it with your own phone, check **Transactions** and your provider's dashboard, then put the real price back.
- **Write down which key is which.** Most failed setups are a test key in a live gateway, or the other way round.
- **One gateway per country.** If you run booths in two countries, connect one gateway for each and pick it per booth on the booth's **Settings** tab, together with the booth's **Currency**.
- **Rotate keys when staff leave** who had access to the provider's dashboard. Paste the new key with **Edit** and run **Test**.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The booth says "Payment isn't available right now. Please ask the booth staff for help." | The booth uses **Organization Default** and no gateway on the account is marked **Active** (it was connected but never activated) | Click **Activate** on the gateway card (Step 5), or pick a gateway for this booth on its **Settings** tab (Step 9) |
| "Connection failed" with HTTP 401 or 403 | A key is wrong, or from the other mode | Re-copy each key from the provider's dashboard and match **Sandbox Mode** to the keys you pasted |
| Stripe refuses the key when you save | You pasted a publishable key (`pk_`), an API key ID (`mk_`) or a cut-off key | Create a new secret key in Stripe and paste the whole `sk_live_...` string |
| The DOKU test says the signature is invalid | The public key in the DOKU Dashboard does not match the private key in Pixture | Click **Generate for me** again, paste the new public key into **Edit Merchant Public Key**, save both sides, and test |
| Stripe payments succeed but nothing pays out | The saved key is `sk_test_...` | Edit the gateway, paste the live key, test again |
| The booth shows a QR code although a reader is assigned | The reader is offline in Stripe, or the booth's dropdown still reads **No reader (QR payment)** | Bring the reader online, then pick it in the dropdown |
| A payment shows on the provider's dashboard but not in Transactions | The confirmation did not reach Pixture | Open **Transactions**, click **Sync with payment gateway**, and run it for that date |
| The online shop says the booth's currency cannot be charged | The gateway charges a different currency from the booth | Use a gateway for that currency, or change the booth's **Currency** |

## Related

- [Accept Payments at the Booth](./accept-payments.md)
- [Set Prices, Packages and Extra Prints](./prices-and-packages.md)
- [Take Card, Coin and Cash Payments](./connect-a-coin-or-card-reader.md)
- [Payment Setups by Use Case](./payment-setups-by-use-case.md)
- [Payment Gateway Reference](../guides/payment-gateway-setup.md)
- [Settings](../dashboard/settings.md)
