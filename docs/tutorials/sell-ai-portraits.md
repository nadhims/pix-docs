---
sidebar_position: 10
title: Sell AI Portraits From the Share Page (Beta)
description: Let customers buy an AI portrait of their booth photo from their share page, digital or printed at the booth, by setting up credits, presets and a price.
tags: [tutorials, pix-ai, beta, share-page, payments]
---

# Sell AI Portraits From the Share Page (Beta)

In this tutorial you will buy Pix AI credits, put AI presets on a booth, set a portrait price and make your first sale from a customer's share page. It takes about 20 minutes.

:::info Beta
Pix AI, the AI portrait shop and AI credits are open to beta accounts only. If you do not see the **Pix AI** card (with a **Beta** badge) on **Pix Design**, ask Pixture through the **Help** button to turn it on for your account.
:::

## When to Use It

- **A self-service mall booth.** Customers already scan the share QR for their photos. A banner on that page sells a second product with no extra work at the booth.
- **A themed studio or seasonal pop-up.** Offer looks that match the season (a holiday card, a film poster) as an add-on to the normal strip.
- **An event with a sponsor.** A printed AI portrait picked up at the booth makes a keepsake guests talk about.

The portrait is sold after the session, on the customer's phone. It adds to what a session earns, it does not replace your price.

### What the Customer Sees

1. After a photo session, the customer opens their share page and finds a banner above their photos: "One shot, a new look".
2. The banner opens the shop page. The customer picks one of their photos and one look, taps **Generate**, chooses digital or digital + print when the booth offers a print, and pays through your payment gateway (QRIS in Indonesia, card elsewhere).
3. The portrait is generated, usually within a minute, and appears on the share page under "Your AI portrait is ready".
4. With a print, the customer also gets a 7-character pickup code. They start a session at the booth and type it in the voucher box on the **Payment** screen. The booth shows "Printing your portrait. Take it from the tray.", prints it and returns to the Start screen. Each code prints once.

## Before You Start

- **A beta account** with Pix AI turned on.
- **Pix Pro on the booth computer**, with **Singles Upload** on under **Booths > [booth] > Settings > Output Settings**. The shop works from the customer's single photos.
- **A payment gateway, connected and Active**, that charges in the booth's currency (**Settings > Payment Gateway**).
- **Pixture Photobooth 1.1.110 or newer** on the booth if you want to offer prints.

## Prepare

- **Price the portrait against its cost.** Each portrait uses 1 credit. Check the cost per image on the credits page, then set a price that leaves a clear margin, for example Rp 25.000 digital and Rp 40.000 with a print.
- **Choose two to four looks**, not twenty. A short list sells better on a phone screen, and every look should suit the people who use that booth.
- **Test every look on a sample photo** before selling it (Step 2): faces, glasses and group shots behave differently per look.

## Step 1: Buy AI Credits

1. Open **Computers** and click **Manage credits** on the **Pix AI credits** card. The page shows **Credits left**, the **Cost per image** and **How you pay**.

   ![Pix AI credits page with Credits left, Buy more, cost per image, How you pay and the credit packs](/img/docs/steps/tutorials-sell-ai-portraits--licenses-ai-credits.webp)

2. Click **Buy more** and pick a credit pack, or choose a monthly plan whose credits reset each month. Packs never expire, and every booth in your account shares them.

## Step 2: Put Presets on the Booth

1. Go to **Pix Design > Pix AI**. The page has your **Saved presets**, a **Browse catalogue** button, a **Test a preset** panel and **Recent generations**.

   ![Pix AI (Beta) page before any preset is saved: No presets yet with Browse catalogue, and the Test a preset panel](/img/docs/steps/tutorials-sell-ai-portraits--pix-design-ai.webp)

2. Click **Browse catalogue**, tick the looks you want to sell and click **Add**.

   ![Browse AI presets modal with tickable preset cards and Add](/img/docs/steps/tutorials-sell-ai-portraits--pix-design-ai-browse-modal.webp)

3. On each saved preset, assign the booths that may sell it (or all booths). Only presets assigned to a booth appear in that booth's shop.
4. Try a look before selling it: in **Test a preset**, add a photo or use the sample photo, pick the preset and click **Generate**. A test costs 1 credit.

## Step 3: Set the Price on the Booth

1. Open **Booths**, click **Configure** on the booth, then the **Pricing** tab and scroll down. Beta accounts see a card called **AI portrait on the share page**.

   ![Booth Pricing tab with the AI portrait on the share page card, the Sell AI portraits on the share page and Offer a print at this booth switches, and Save marked](/img/docs/steps/tutorials-sell-ai-portraits--booth-pricing-full.webp)

2. Turn on **Sell AI portraits on the share page** and enter the **Price per portrait**.
3. To sell prints, turn on **Offer a print at this booth** and enter the **Digital + print price** (the portrait and the print together).
4. Click **Save** on the card.

## Step 4: Check the Gateway and the Payment Switch

1. On the booth's **Settings** tab, check the booth's **Currency** and the **Active Gateway**. The account needs an **Active** gateway that can charge in that currency, or the shop cannot take payment.
2. Keep **Payment on this booth** on at the top of the Pricing tab. Pickup codes are typed on the Payment screen, so a booth with payment off cannot hand out prints.

![Booth Settings tab with Payment Gateway and Active Gateway, Booth Info and Currency](/img/docs/steps/tutorials-sell-ai-portraits--booth-settings-tab.webp)

## Step 5: Try It as a Customer

1. Run a session on the booth and scan the share QR with your phone. The banner sits above the photos.
2. Pick a photo and a look, tap **Generate**, pay, and wait while the page says "Warming up" and "Almost there". The portrait appears on your share page.
3. If you chose a print, take the pickup code to the booth, start a session, and type it on the Payment screen. The booth prints the portrait and returns to Start.

<!-- SHOT-NEEDED: phone: a made-up customer's share page with the "One shot, a new look" banner, then the look picker -->

## Step 6: See the Sales

- **Transactions** lists each sale as a row labelled **AI portrait** or **AI portrait + print**, counted in Total Revenue and in the Excel export. These rows are not tied to a photo session.
- The **Dashboard** revenue card includes them.
- **Pix Design > Pix AI** lists the recent generations, and the **Pix AI credits** card on **Computers** shows the credits left.

## Check It Worked

- The share page of a fresh session shows the "One shot, a new look" banner.
- A test purchase delivers a portrait to the share page and appears in **Transactions** as **AI portrait**.
- **Credits left** is one lower.

## Tips

- **Show a sample at the booth.** A printed before-and-after next to the share QR sells more portraits than the banner alone.
- **Watch your credits before a busy weekend.** With no credits left, the banner disappears; nobody sees an error, you just stop selling.
- **Keep the booth online** if you sell prints. The print option only shows while the booth has checked in during the last 12 minutes.
- **Swap looks with the seasons** and remove the ones nobody buys; **Recent generations** shows which looks people pick.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| No banner on the share page | A piece is missing: Pix AI not on for the account, no credits left, no preset assigned to that booth, the Pricing card switch off or without a price, no Active gateway for the booth's currency, or **Singles Upload** off | Go through Steps 1 to 4 for that booth |
| The shop offers digital only | **Offer a print at this booth** is off, or the booth is offline | Turn the print on; prints are offered only while the booth checked in during the last 12 minutes |
| The booth refuses the pickup code | The code belongs to another booth, was already used, or the portrait is not ready yet. A booth with **Payment on this booth** off has no voucher box at all | Check the code and the booth; switch payment on |
| The customer paid but the portrait never arrived | Generation is retried; if it keeps failing, no credit is used | Refund the customer from your gateway's dashboard |

## Related

- [Pix AI](../dashboard/pix-design/pix-ai.md)
- [Set Prices, Packages and Extra Prints](./prices-and-packages.md)
- [Transactions](../dashboard/transactions.md)
- [Accept Payments at the Booth](./accept-payments.md)
