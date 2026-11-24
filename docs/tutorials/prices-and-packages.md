---
sidebar_position: 7
title: Set Prices, Packages and Extra Prints
description: Set what a session costs at one booth, sell Double and Group packages and extra sessions, charge for extra prints, price each mode, and add tax and fees, with the preview showing what customers will see.
tags: [tutorials, payments, pricing, packages, tax]
---

# Set Prices, Packages and Extra Prints

In this tutorial you will set a booth's session price, add packages for couples and groups, sell extra prints after the photos, and add tax and fees, while the preview shows the booth's payment screen exactly as customers will see it. It takes about 15 minutes per booth.

## When to Use It

- **A self-service mall booth.** One clear price per session, plus a **Double** and a **Group** package so friends who come together spend more in one go.
- **A multi-booth studio.** Each booth has its own Pricing tab, so the themed booth can cost more than the plain one. A Multi-Booth group has the same tab on its group page, applied to every booth in the group.
- **A pop-up box at a festival.** Sell **Extra prints** on the Sharing screen: customers who love the strip pay for copies for their friends, right there.
- **A business that must show tax.** Add the tax rate and label, and choose whether it is added on top or already in the price.

Not needed for an event that the client pays as a flat fee: switch **Payment on this booth** off (or run the booth in an Event that is free for guests) and nobody sees a price.

## Before You Start

- **Pix Pro on the booth computer.** On Pix Starter the booth never shows the Payment screen, so prices are not used.
- **A payment gateway, connected and Active**, that charges in the booth's currency. See [Create a Payment Gateway](./create-a-payment-gateway.md).
- **The booth's currency set** on its **Settings** tab before you type prices.
- Owner or admin access to the dashboard.

## Prepare

- **Work out the package prices first.** A package should cost less per session than buying singles, or nobody picks it. For example, in Indonesia: Single Rp 35.000, Double Rp 60.000 (Rp 30.000 each), Group of 4 Rp 100.000 (Rp 25.000 each).
- **Count prints as sheets of paper.** The printer counts sheets. A 4x6 sheet cut into two 2x6 strips is one sheet to the printer and two prints to the customer. Set **Print format** to **2 inch cut** and the booth shows 2 prints per sheet; the number you type stays the number of sheets.
- **Know your paper cost** before you price **Extra prints**: one extra print is one more sheet, so the price should cover the sheet and leave a margin.
- **Coin box or pulse card reader?** Every price must be a whole number of pulses (see [Take Card, Coin and Cash Payments](./connect-a-coin-or-card-reader.md)), and fixed-price readers cannot charge packages.

## Step 1: Open the Booth's Pricing Tab

1. Click **Booths** in the sidebar, then **Configure** on the booth.
2. Click the **Pricing** tab. The left side is a live preview of the booth's payment screen; the right side holds the settings.

![Booth page with Booths in the sidebar and the Pricing tab marked](/img/docs/steps/tutorials-prices-and-packages--pricing-tab.webp)

## Step 2: Set the Price and the Packages

1. **Payment on this booth**: on. Off means every session is free and the booth skips the Payment screen; your prices are kept for later.
2. Open the **Price & packages** sub-tab.
3. **Session price**: what one session costs. It must be more than 0.
4. **Print format**: **Standard** (1 print per sheet), **2 inch cut** (2 prints per sheet) or **Triple strip** (3 prints per sheet). It only changes the print counts customers read; printing itself is the same.
5. **Prints included · Single**: how many sheets a Single session prints, 1 to 20. Leave it empty to keep the printer's default copies.
6. **Double session price**: switch it on and enter the price for 2 full sessions. Its **Prints included** is the total for both sessions, at least 2.
7. **Group session price**: switch it on for 4 full sessions. Its **Prints included** is at least 4.
8. **Additional session price**: switch it on to show an **Additional sessions** stepper, so customers can add more sessions at this price each.
9. Click **Save changes**.

![Pricing tab with Payment on this booth, the Price & packages sub-tab, Session price, Print format, Prints included, Double, Group, Additional session price and Save changes marked](/img/docs/steps/tutorials-prices-and-packages--packages.webp)

As soon as a package is on, a blue note reminds you that packages need a reader that can charge a variable amount. That only matters for coin boxes and pulse card readers; QR and Stripe charge any amount.

## Step 3: Price Each Mode (Optional)

When the booth's Pix Design screen design offers two or more modes (Photo and AI, for example), a **Price per mode** grid appears under the packages on **Price & packages**.

1. Type a **Single** (and, where the mode sells them, **Double** and **Group**) price for each mode. Some modes are **Single only**.
2. Leave a box empty to use the booth's own price for that package.
3. Click **Save changes**.

![Price per mode grid on Price & packages for a booth whose design has four modes, with Save changes marked](/img/docs/steps/tutorials-prices-and-packages--price-per-mode.webp)

## Step 4: Set How Long Customers Have to Pay

1. Open the **Time** sub-tab.
2. Set **Payment timeout**, from 30 to 1800 seconds: how long the booth waits for an unpaid session before it cancels it. 300 seconds (5 minutes) suits most QR payments.

![Pricing tab on the Time sub-tab with Time and Payment timeout marked](/img/docs/steps/tutorials-prices-and-packages--time.webp)

## Step 5: Sell Extra Prints

1. Open the **Extra prints** sub-tab.
2. Switch on **Extra print price (sharing screen)**.
3. Enter the price per copy. Click **Save changes**.

![Pricing tab on the Extra prints sub-tab with Extra prints, the switch and the price marked](/img/docs/steps/tutorials-prices-and-packages--extra-prints.webp)

After the photos, the Sharing screen shows an **Extra prints** button. The customer picks how many, pays by QR through your gateway, and the printer runs the copies. The button only appears while a gateway is active and payment is on for the booth.

## Step 6: Add Tax and Fees (Optional)

1. Open the **Tax & fees** sub-tab.
2. **Tax**: the rate in percent (0 to 100) and the label customers see on the tax line, up to 20 characters. Leave the rate empty for no tax.
3. **Charge to**: **Guest** (the tax is added on top of the prices), or **Included in the prices** (the line shows as incl.).
4. **+ Add fee** for a service fee: a name, **Amount** or **% of subtotal**, and the value. Up to 5 fees; each shows as its own line, and fees are taxed together with the subtotal. Click **Save changes**.

![Pricing tab on the Tax & fees sub-tab with Tax & fees, the tax rate and label, Charge to and + Add fee marked](/img/docs/steps/tutorials-prices-and-packages--tax-fees.webp)

## Check It Worked

- The preview on the left shows your package cards, the subtotal, tax and fees, and the total.
- The save bar reads **All changes saved**.
- Start a session on the booth: the Payment screen shows the same cards and total. The booth reads the price at the start of every session, so the next customer already sees a change.

## Tips

- **Three choices are plenty.** Single, Double and Group, or Single plus Additional sessions. More cards slow customers down at the booth.
- **Anchor with the Group price.** Showing a Group card at a lower price per session makes the Double look like the sensible choice.
- **Discounts are Promos, not prices.** For a happy hour or a launch week, keep these prices and add a promo in **Marketing Studio > Promo** (see [Run a Promo](./run-a-promo.md)).
- **Free for a day?** Switch **Payment on this booth** off and back on later; your prices are kept.
- **Same prices on many booths?** Put them in a Multi-Booth group and set them once on the group's Pricing tab.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| "Enter a price, or switch payment off above." | The session price is 0 or empty | Enter a price above 0, or switch **Payment on this booth** off for free sessions |
| "A price must be more than 0. Leave it empty to use the booth's price." | A box in **Price per mode** has 0 | Empty the box, or type a real price |
| A yellow banner says "This booth is in MYR but has no MYR price yet" (or another currency) and sessions run free | The booth's currency is not the account's currency, and the account-wide price does not carry over | Set a price on this booth's Pricing tab in its own currency |
| The booth prints twice as many sheets as expected | **Prints included** was set to prints, not sheets, with **2 inch cut** | Set the count in sheets (1 sheet = 2 strips) |
| No **Extra prints** button on the Sharing screen | **Extra print price** is off, payment is off on the booth, or no gateway is active | Switch them on, and activate a gateway |
| Packages appear on the booth but a coin box only charges the single price | Pulse and keystroke readers are usually fixed price | Keep packages off on that booth, or use a reader that charges a variable amount |
| "Couldn't save changes. Check your connection and try again." | The save did not reach Pixture | Check your connection and click **Retry** |

## Related

- [Accept Payments at the Booth](./accept-payments.md)
- [Run a Promo](./run-a-promo.md)
- [Sell Sessions Online](./sell-sessions-online.md)
- [Take Card, Coin and Cash Payments](./connect-a-coin-or-card-reader.md)
- [Booth Pricing reference](../dashboard/booth-pricing.md)
