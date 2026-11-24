---
sidebar_position: 9
title: Sell and Give Vouchers
description: Make voucher codes that pay for a photo session at the booth, as session tickets you sell for cash or ahead of time, or as staff passes for free tests and VIPs, one at a time or in batches.
tags: [tutorials, payments, vouchers, cash, staff]
---

# Sell and Give Vouchers

In this tutorial you will make voucher codes that pay for a session at the booth: a staff pass for your own tests, and a batch of session tickets to sell for cash. Then you redeem one at the booth, hand out the rest, and keep the list tidy. It takes about 15 minutes.

A voucher is a code the customer types on the booth's Payment screen instead of paying there. Pixture has two kinds:

- **Session ticket** (made as **Sold session**): a session someone already paid you for, at the counter or ahead of time. Give it a value and it counts as revenue when it is used.
- **Staff pass**: a free session that is not a sale. For your tests, your crew, a VIP or a complaint you want to make right.

Discounts are not vouchers: a percentage or amount off is a promo, made in **Marketing Studio** (see [Run a Promo](./run-a-promo.md)).

## When to Use It

- **A booth with a person at the counter.** The cashier takes cash, hands over a ticket code, and the sale still shows in **Transactions** with its value.
- **A multi-booth studio.** Sell tickets at one counter; customers use them on whichever booth is free.
- **An event or brand activation.** Print 200 ticket codes on cards for the client to give out, each good for one session at your booth.
- **Testing and staff.** A staff pass lets you or your crew run a full session on a paid booth without paying yourself.

Want customers to pay online on their phone and get a code by themselves? Use [Sell Sessions Online](./sell-sessions-online.md) instead.

## Before You Start

- **Pix Pro on the booth computer, with payment on.** Codes are typed on the Payment screen, so a booth on Pix Starter, or with **Payment on this booth** off, never asks for one.
- **Voucher** switched on under **Payment Methods** on the booth design's **Payment Screen** in the UI Editor. It is on in the default design.
- **Internet on the booth.** The booth checks these codes with Pixture when they are typed.
- Owner or admin access (or a role that can manage vouchers).

## Prepare

- **Decide the value of a ticket.** Use the session price of the booth it is for, so your revenue in **Transactions** matches the cash in the till.
- **Name batches so you can find them later**: the place and the month ("City Mall cash, November"), or the client and the event.
- **Pick an end date.** Codes for a day or an event should expire at its end, so a code found weeks later cannot be used.
- **Plan how codes reach people.** Batch codes are 6 characters long; export them and print them on cards, receipts or stickers.

## Step 1: Open Vouchers

1. Click **Vouchers** in the sidebar.
2. The tabs sort your codes: **Session tickets**, **Staff passes**, **From promos** (codes made by a promo) and **Batches**.
3. Click **+ Create**.
4. **Single Voucher** makes one code you type yourself.
5. **Generate Batch** makes many random codes at once.

![Vouchers page with Vouchers in the sidebar, the tabs, + Create, Single Voucher and Generate Batch marked](/img/docs/steps/tutorials-vouchers--create-menu.webp)

## Step 2: Make a Staff Pass

1. Click **+ Create > Single Voucher**, type a **Voucher Code** you can remember (up to 50 characters, for example STAFFTEST), and set **What is it?** to **Staff pass**.

![Create voucher window with What is it? marked, Staff pass selected](/img/docs/steps/tutorials-vouchers--create-single.webp)

Then set **Max Redemptions** (1 means it works once; 30 means 30 sessions, for a whole crew), choose a booth under **Booth Restriction** or leave **All Booths**, add an **Expiration Date (optional)** in your account's timezone, and click **Create Voucher**.

A staff pass never counts as revenue, so it does not make your sales look bigger than they are.

## Step 3: Sell Session Tickets in a Batch

1. Click **+ Create > Generate Batch** and type a **Batch Name**.
2. Set **Number of Codes** (up to 1000; each is a random 6-character code), and **What is it?** to **Sold session**.
3. Enter **Value per Code**: the price the customer paid for one session. It counts as revenue when a code is used.
4. Leave **Max Redemptions per Code** at 1, choose the booth under **Booth Restriction** if the tickets are for one booth, set the **Expiration Date (optional)**, and click **Generate Codes**.

![Generate Batch window with Number of Codes, Value per Code and Generate Codes marked](/img/docs/steps/tutorials-vouchers--create-batch.webp)

The batch appears under the **Batches** tab.

## Step 4: Hand Out the Codes

1. Open the **Batches** tab and click the batch's name. The page lists every code with its **Status**, **Redemptions** and **Last Redeemed**.
2. Click **Export CSV** to download the codes, then print them on cards or give the file to whoever prints them.

![Voucher batch page with the code list and Export CSV marked](/img/docs/steps/tutorials-vouchers--batch-codes.webp)

## Step 5: Use a Code at the Booth

1. The customer starts a session. On the Payment screen they tap the voucher button (**Use Voucher** in the default design) and type the code.
2. The booth checks the code with Pixture. A good code pays for one Single session and the session continues to the templates, with no charge.
3. A code that cannot be used shows why: "This voucher has expired.", "This voucher has been fully redeemed.", "This voucher is not valid for this booth." or "This voucher is no longer active."

![The voucher window with a code typed in and Apply Voucher marked](/img/docs/steps/tutorials-vouchers--voucher-entry.webp)

## Step 6: Keep the List Tidy

- **Deactivate** stops a code from working (a lost card, a staff member who left); **Activate** turns it back on.
- **Refill** gives a used-up code more uses with **Add Uses**, and can set a **New Expiration Date** or **Remove expiry date (never expires)**.
- **Delete** removes a code, or a whole batch from the **Batches** tab.
- Codes from before session tickets and staff passes existed show in a yellow banner (for example "2 codes to sort"). Click **Staff pass** or **Session ticket** once to sort them all.

![The codes to sort banner with its codes and the Staff pass and Session ticket buttons marked](/img/docs/steps/tutorials-vouchers--sort-codes.webp)

## Step 7: Sell Tickets Online (Optional)

Click **Online shop link** at the top of the Vouchers page to copy your online shop link. Customers open it on their phone, pick the booth and a package, pay through your gateway, and get a code the booth accepts even while it is offline. The whole setup is in [Sell Sessions Online](./sell-sessions-online.md).

![Vouchers page with the Online shop link button marked](/img/docs/steps/tutorials-vouchers--online-shop-link.webp)

## Check It Worked

- The code shows on the **Session tickets** or **Staff passes** tab (batch codes under **Batches**).
- Typed at the booth, it starts a session without a payment.
- Its redemption count goes up, and a session ticket with a value shows in **Transactions** with that amount.

## Tips

- **Keep one staff pass for yourself** with plenty of uses and no expiry, restricted to your test booth. It is the fastest way to check a booth after a change.
- **One batch per place and month.** Exported lists then match your cash book, and an expired batch is easy to delete.
- **Restrict tickets to a booth** when booths have different prices, so a cheap ticket cannot be used on the expensive booth.
- **Give the value in the booth's currency.** A code with a value only works at booths priced in that currency.
- **Avoid look-alike letters in codes you type yourself** (I and 1, O and 0), so customers type them right the first time.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The booth never asks for a code | The booth runs free (payment off or Pix Starter), or **Voucher** is off on the design's Payment Screen | Switch payment on and turn **Voucher** on under **Payment Methods** in the UI Editor |
| "This voucher is not valid for this booth." | The code is restricted to another booth (or another Multi-Booth group) | Make a code for this booth, or one for **All Booths** |
| "This voucher has been fully redeemed." | It reached its **Max Redemptions** | **Refill** it with **Add Uses**, or make a new one |
| "This voucher has expired." | Its **Expiration Date** passed (in your account's timezone) | **Refill** with a **New Expiration Date** |
| "This voucher is in IDR and cannot be used at this booth." (or another currency) | The code has a value in a different currency from the booth | Make the code at a value in the booth's currency |
| "Failed to validate voucher. Please try again." | The booth is offline; codes made on the Vouchers page are checked online | Get the booth back online; for offline sales use online shop codes |
| A discount option is missing in **Create voucher** | Discounts are promos | Make them in **Marketing Studio > Promo** |

## Related

- [Sell Sessions Online](./sell-sessions-online.md)
- [Run a Promo](./run-a-promo.md)
- [Take Card, Coin and Cash Payments](./connect-a-coin-or-card-reader.md) (Setup D, cash at the counter)
- [Accept Payments at the Booth](./accept-payments.md)
- [Vouchers reference](../dashboard/vouchers.md)
