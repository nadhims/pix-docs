---
sidebar_position: 8
title: Sell Sessions Online
description: Give customers a phone page where they buy a photo session at your booth's prices and get a code the booth accepts, even offline.
tags: [tutorials, payments, vouchers, online-shop]
---

# Sell Sessions Online

In this tutorial you will find your online shop link, put its QR code where customers can scan it, and redeem a bought code at the booth. It takes about 10 minutes.

The online shop is a phone page for your booths. Customers pick a package at the booth's prices, pay through your gateway (QRIS in Indonesia, card with Stripe), and get a code that the booth accepts even while it is offline. The code is also emailed to them.

## When to Use It

- **A long queue at a mall booth.** Put the QR at the start of the queue: people pay while they wait and walk up with a code, so the booth never sits on a Payment screen.
- **A pop-up box with weak internet.** Codes bought online work at the booth with no connection, so a dropped Wi-Fi does not stop sales.
- **Selling ahead of an event or a holiday.** Share the link in an invitation or on your social profile, or send it to a host who prepays for their guests.
- **Customers whose wallet app fails at the booth.** They buy on the shop with a card or another app and type the code instead.

Selling for cash at a counter instead? Use a batch of session tickets: see [Sell and Give Vouchers](./vouchers.md).

## Before You Start

- **Pix Pro on the booth computer.** Codes are typed on the Payment screen, which a Pix Starter computer never shows.
- **A payment gateway, connected and Active** (**Settings > Payment Gateway**), that charges in the booth's currency.
- **Prices saved on the booth's Pricing tab**, with **Payment on this booth** on. The shop sells exactly what the booth sells. See [Set Prices, Packages and Extra Prints](./prices-and-packages.md).
- **Pixture Photobooth 1.1.101 or newer** on the booth. Older versions can only take a code for a single session, so the shop sells singles only for them.

## Prepare

- **Choose the link.** Each booth has its own link (the customer lands on that booth's packages). The account link on the Vouchers page lists your booths and the customer picks one.
- **Print the QR big enough** to scan from a step away: about 5 cm across on a table card, larger on a standing sign. Add one line of text, for example "Skip the queue: pay here, type the code at the booth".

## Step 1: Find the Link and QR Code

1. Open **Booths**, click **Configure** on the booth, then the **Pricing** tab. The **Sell sessions online** card at the top shows the booth's link with **Copy**, **Open** and a QR code.

   ![Booth Pricing tab, top, with the Sell sessions online card, its link, Copy, Open and QR](/img/docs/steps/tutorials-sell-sessions-online--booth-pricing-tab.webp)

2. For one link to all your booths, open **Vouchers** and click **Online shop link**. It copies the link; the button reads **Copied!**.

   ![The Vouchers page right after clicking Online shop link: the button reads Copied!](/img/docs/steps/tutorials-sell-sessions-online--vouchers-online-shop-link.webp)

## Step 2: Check the Prices the Shop Will Show

1. On the **Price & packages** sub-tab, review the **Session price**, the **Double** and **Group** packages, the **Additional session price**, the **Print format** and the prints included. The shop shows the same choices as the booth's package picker.

   ![Pricing card with Payment on this booth on and the Price & packages sub-tab: Session price $8.00, Print format, Double $14.00, Group $20.00 and Additional session price](/img/docs/steps/tutorials-sell-sessions-online--booth-pricing-packages.webp)

2. Tax and fees from the **Tax & fees** sub-tab apply to the shop too. Click **Save changes** if you edited anything.

## Step 3: Print or Share the QR Code

1. Save the QR code from the **Sell sessions online** card and print it for the booth or the start of the queue.
2. Share the link ahead of an event: in the invitation, on your social profile, or with a client who prepays for their guests.

<!-- SHOT-NEEDED: hardware: a printed table card with the online shop QR code standing next to a booth -->

## Step 4: What the Customer Sees

1. With the account link, the page first asks them to **Choose your photo booth**. A booth link skips that.
2. **Choose your package** shows the booth's packages, a stepper for additional sessions, the prints included and any tax or fees, with the total.
3. They type their email under **Email for your code** and tap **Proceed to Pay**, then pay by QR through your gateway, or by card when your gateway is Stripe. **I have paid, check again** re-checks a payment the page has not noticed yet.
4. The page says **Paid!** and shows the code with **Copy code**. The code is emailed too.

<!-- SHOT-NEEDED: phone: the online shop on a phone, Choose your package, then the Paid! screen with a made-up code -->

## Step 5: Redeem at the Booth

1. The customer starts a session. On the **Payment** screen, they tap the voucher button (**Use Voucher** in the default design) and type the code.
2. The booth checks the code itself, so it works without internet. The code carries the package that was bought (double, group, additional sessions), and the session continues to the templates.
3. A code works at the booth it was bought for.

## Check It Worked

- Click **Open** on the card and buy a single session with your own phone.
- Type the code into the booth's voucher box. The booth accepts it and continues to the templates.
- The purchase appears in **Transactions**, with the amount paid.

## Tips

- **Online sales always go to the account's Active gateway.** A booth that picks its own gateway on its **Settings** tab still sends online shop sales to the gateway marked **Active**. A venue that must receive these sales directly needs its own Pixture account. See [Create a Payment Gateway](./create-a-payment-gateway.md).
- **One QR per booth** when booths have different prices; the account link when they are all the same.
- **Tell staff the code is the ticket.** A customer with a code skips the Payment screen, so the queue moves faster when staff wave code holders forward.
- **Check the email arrived** on your own test purchase; it is the customer's backup when they close the page.
- **Combine with a promo.** An automatic promo at the booth does not change online prices; keep the shop for full-price pre-sales and the booth for walk-in deals.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The shop offers only a single session, no packages | The booth's app is older than 1.1.101 | Update the booth app from the operator menu |
| The account link says "Nothing for sale here yet", or a booth is missing from its list | Only booths with a saved price and **Payment on this booth** on are listed | Save a price on that booth's Pricing tab and switch payment on |
| The pay step fails with a gateway message | No gateway is Active, or the gateway cannot charge in the booth's currency | Activate a gateway that charges the booth's currency |
| "Enter a valid email so we can send your code." | The email field is empty or mistyped | Type a working email |
| The customer paid but sees no code | The page has not noticed the payment yet | Tap **I have paid, check again**, or check the email |
| The booth refuses the code | The code was mistyped, or it was bought for a different booth | Check the code (codes never contain I, L or O) and the booth it was bought for |

## Related

- [Sell and Give Vouchers](./vouchers.md)
- [Set Prices, Packages and Extra Prints](./prices-and-packages.md)
- [Accept Payments at the Booth](./accept-payments.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Vouchers](../dashboard/vouchers.md)
- [Offline mode](../desktop-app/offline-mode.md)
