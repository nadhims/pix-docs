---
sidebar_position: 9
title: Run a Promo
description: Run a happy hour, a launch week or a promo code at your booths, with an amount or percentage off, a promo price or Pay 1 get 1, on the days, hours and booths you choose.
tags: [tutorials, payments, promo, marketing-studio, discounts]
---

# Run a Promo

In this tutorial you will set up a promo that lowers the price at your booths by itself during quiet hours, or when a customer types a code, and watch it appear on the booth's Start and Payment screens. It takes about 10 minutes.

A promo never changes your booth prices: it sits on top of them for the days, hours and booths you pick, then stops by itself.

## When to Use It

- **A mall booth with quiet afternoons.** A **Happy Hour** of 30% off from Monday to Thursday, 13:00 to 16:00, fills the hours nobody comes.
- **Opening week at a new spot.** A **Promo price** for the first two weeks gets people to try the booth, with a **Limit** so it cannot cost you more than you planned.
- **A campaign with a partner.** A café or a radio station hands out **one code** (or many single-use codes) and you see how many came from them.
- **Groups of friends.** **Pay 1 get 1** gives a second session free after a paid one: two prints for the price of one, and a longer queue that draws more people in.

Want to give sessions away completely (tests, staff, VIPs)? Use a staff pass in [Sell and Give Vouchers](./vouchers.md). Running an event where the client pays? Promos never run during an event.

## Before You Start

- **Pix Pro on each booth computer** the promo should run on. Promos never run on Pix Starter booths; the Promo page tells you when some of your booths are on Starter.
- **Pixture Photobooth 1.2.30 or newer** on the booths. Update from the operator menu.
- **Prices on the booth's Pricing tab**, with **Payment on this booth** on. A promo lowers a price, so a free booth has nothing to lower. See [Set Prices, Packages and Extra Prints](./prices-and-packages.md).
- An **Active** payment gateway, for the customers who still pay something.

## Prepare

- **Do the money first.** Work out what one session costs you (paper, ink, rent share) and never promo below it unless it is a deliberate launch. For example, with a single session at Rp 35.000, 30% off is Rp 24.500.
- **Pick one goal per promo:** fill quiet hours (automatic, by hours), reward a partner's audience (a code), or raise the spend per visit (Pay 1 get 1).
- **Write down the dates and hours in the booth's local time.** A booth in Bali runs on Bali time even if your account is set to Jakarta.

## Step 1: Open Promo

1. Click **Marketing Studio** in the sidebar, then the **Promo** tab.
2. Click **+ New promo**. The editor opens with a **Booth preview · Payment** on the right that shows what customers will see.

![Marketing Studio Promo tab with the promo list and + New promo marked](/img/docs/steps/tutorials-run-a-promo--promo-list.webp)

## Step 2: Choose the Deal

1. **Name**: what customers see, so make it short (for example Happy Hour).
2. **Promo type**:
   - **% off**: a percentage off every package.
   - **Amount off**: a fixed amount off, in the booth's currency.
   - **Promo price**: your own **Single**, **Double** and **Group** prices. Leave Double or Group empty to keep the booth price.
   - **Pay 1 get 1 (free extra session)**: after a paid session, the customer gets one more session free.

If the deal would make a session free at one of the booths, the editor warns "This makes the session free at" that booth. Lower the discount, unless free is what you want.

![New promo editor with Name, Promo type and the Booth preview · Payment marked](/img/docs/steps/tutorials-run-a-promo--promo-editor-deal.webp)

## Step 3: Choose How It Applies

1. **Method**: **Automatic** (it applies by itself whenever it is on) or **With a code** (only customers who type the code get it).
2. For **With a code**, choose **Codes**:
   - **One code** that everyone types (up to 24 characters, for example JUNI30).
   - **Many single-use** codes: enter **How many** (up to 1000) and an optional **Prefix**, then click **Add codes**. **Copy all** copies the list for your partner.

Customers type a promo code in the same voucher box on the Payment screen as any voucher. The codes also show on the **Vouchers** page under **From promos**.

## Step 4: Set When and Where

1. **Days & hours**: tick the days and set the hours for each, or **All day**. Hours are the **Booth's local time**.
2. **Dates**: a start and an end date. Empty means it starts today and has no end.
3. **Booths**: **All booths**, a Multi-Booth group, or single booths.
4. **Limit**: how many uses **per day** and **in total**. Empty means **No limit**.
5. **Start screen**: switch on **Show the promo to people walking past** to put a line like "Happy Hour −30% · ends in 01:42" on the booth's Start screen.
6. Click **Save promo**.

![New promo editor with Days & hours, Dates, Booths, Limit, Start screen and Save promo marked](/img/docs/steps/tutorials-run-a-promo--promo-editor-when.webp)

## Step 5: Ask for Contacts After Pay 1 get 1 (Optional)

With a Pay 1 get 1 promo, the booth can ask the customer for an email or phone number before the free session starts, so you can send them offers later.

1. Open **Booths**, click **Configure** on the booth, then the **Pricing** tab.
2. Under **Ask for contact after Pay 1 get 1**, choose **Email**, **Phone** or **Email + phone** (or **Don't ask**). It saves at once.

Contacts go to **Marketing Studio > Audience**.

## Check It Worked

- The promo shows on the Promo list under **Live now** (or **Scheduled** until it starts).
- Within about a minute, the booth's Payment screen shows the promo price with the old price struck through, and the Start screen line if you switched it on.
- For a code: type it on the Payment screen; the price drops and the booth says the promo was applied.
- For Pay 1 get 1: after a paid session, the Sharing screen says "You got 1 free session!" with **Start free session**.

![The Payment screen with the promo badge and the struck-through price on the package cards marked](/img/docs/steps/tutorials-run-a-promo--promo-payment.webp)

## Tips

- **Short and specific beats big.** "Weekday 13:00 to 16:00, 30% off" fills quiet hours without teaching customers to wait for a discount at the weekend.
- **Always set a Limit on a launch promo.** It caps the cost if the promo is more popular than you expected.
- **One discount per session.** When several automatic promos run at once, the booth uses the one with the lowest Single price; a code that is not better than the running promo shows "Your ... price is already better." **Pay 1 get 1** adds on top of a discount.
- **Pause instead of delete** if the promo comes back next month: open the row's menu and click **Pause**, then **Resume** later.
- **See what it brought in** under **Marketing Studio > Performance**: **Promo uses**, **Pay 1 get 1 granted** and **Pay 1 get 1 used**.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The promo does not show on one booth | The booth is on Pix Starter, an event is running on it, it is outside the promo's days, hours or dates, or the booth app is older than 1.2.30 | Check the booth's computer has Pix Pro, end the event, check the schedule in the booth's local time, update the booth app |
| "Promos run on Pix Pro booths · 1 of yours is on Starter" | One of your booths runs on Pix Starter | Put Pix Pro on that computer, or leave that booth out of the promo |
| The code is refused | The promo is paused or ended, its **Limit** is used up, a single-use code was already used, or the code is for other booths | Check the promo's row on the Promo page; add more codes or raise the limit |
| "Your ... price is already better." | An automatic promo already gives a lower price | Nothing to fix: the customer gets the better price |
| An **Amount off** or **Promo price** promo does not run at a booth in another country | Those two types are set in one currency and only run at booths priced in it | Make a separate promo for the booths in each currency, or use **% off**, which works in any currency |
| No free session after a paid one with Pay 1 get 1 | The session was not paid (a staff pass, a free booth), or it was already a free session | Pay 1 get 1 only follows a session paid at the booth |

## Related

- [Set Prices, Packages and Extra Prints](./prices-and-packages.md)
- [Sell and Give Vouchers](./vouchers.md)
- [Accept Payments at the Booth](./accept-payments.md)
- [Marketing Studio reference](../dashboard/marketing-studio.md)
