---
sidebar_position: 8
title: Vouchers
description: Session tickets, staff passes and promo codes, single vouchers and batches of up to 1000 codes, the online shop link and how customers redeem codes at the booth.
tags: [dashboard, vouchers, promotions]
---

# Vouchers

A voucher is a code a customer types into the voucher box on the booth's Payment screen. It is either a session someone already paid for, or a free staff session. Make them one at a time for a partner or an influencer, or in a batch of up to 1000 for a corporate order or a flyer campaign. Discounts are not vouchers: they are promos, made in [Marketing Studio > Promo](./marketing-studio.md#promo).

## The Vouchers Page

The buttons at the top are **Online shop link**, **Template shop link**, **Get-my-photos link** and **+ Create**, which opens a menu with **Single Voucher** and **Generate Batch**. The tabs, each with its count:

| Tab | What it holds |
|---|---|
| **Session tickets** | "Sessions you sell ahead of time." Codes for a session that is already paid for |
| **Staff passes** | "Free entry for troubleshooting or a reshoot." Free sessions that are not a sale |
| **From promos** | Codes made by a promo in Marketing Studio. They are read-only here: **Open promo** takes you to the promo. Older discount codes show as **Discount code (older)** |
| **Batches** | Codes generated together, with **View** for the codes |

If older codes are not yet sorted, a banner lists the codes to sort with **Staff pass** and **Session ticket** buttons. One click sorts them all.

![+ Create menu on Vouchers: Single Voucher, Generate Batch](/img/docs/vouchers-create-menu.webp)

## Creating a Single Voucher

1. Click **+ Create** and choose **Single Voucher**.
2. Fill in the form.
3. Click **Create Voucher**.

| Field | What it is |
|---|---|
| **Voucher Code** | The code the customer types |
| **What is it?** | **Sold session** (a session ticket) or **Staff pass** (free) |
| **Value** | Sold session only, optional. What you sold the voucher for. It "Counts as revenue when the voucher is redeemed" |
| **Max Redemptions** | How many times the code works. "1 = single-use, higher = multi-use" |
| **Booth Restriction** | **All Booths**, or one booth only |
| **Expiration Date (optional)** | The code stops working after this date, in your organization's timezone |

## Generating a Batch

1. Click **+ Create** and choose **Generate Batch**.
2. Enter a **Batch Name** and the **Number of Codes** (up to 1000), pick **What is it?** (**Sold session** or **Staff pass**), and set **Value per Code**, **Max Redemptions per Code**, **Booth Restriction** and **Expiration Date (optional)**.
3. Click **Generate Codes**.

Every code in a batch is 6 characters and unique. Open a batch on the **Batches** tab to see Total Codes, Redeemed, Remaining and Total Value Redeemed, and the codes themselves.

![Vouchers page, Batches tab](/img/docs/vouchers-batches.webp)

## Refill and Delete

Each voucher or batch row has two actions.

| Action | What it does |
|---|---|
| **Refill** | Opens **Add Uses** and **New Expiration Date**, so a code that ran out keeps its name and history |
| **Delete** | Removes the code. Photo sessions it was used on stay in Transactions |

## The Online Shop Link

**Online shop link** copies the link to your online shop, where customers pick a package, pay, and receive a code the booth accepts. Each booth's own link, with a QR to print, is at the top of its [Pricing](./booth-pricing.md) tab.

![Online shop link popup on the Vouchers page](/img/docs/vouchers-online-shop-link.webp)

## How Customers Redeem {#how-guests-redeem}

On the booth's Payment screen the customer opens the voucher box and types the code on the on-screen keyboard. Codes are not case sensitive. The length tells the booth what it is looking at:

| Length | Comes from |
|---|---|
| 6 characters | A voucher or batch code made on this page |
| 7 characters | The online shop (Pixture Photobooth 1.1.101 or newer) |
| 8 characters | A group session code from a Multi-Booth cashier |

A code bought online or from a Multi-Booth cashier carries its package inside the code, so the booth accepts it even when the venue's internet is down. The redemption is reported once the booth reconnects.

## Tracking

Every redemption appears in [Transactions](./transactions.md) with the voucher code, and the **Vouchers** card on the [Dashboard](./dashboard-home.md) counts redemptions for the selected period. **Marketing Studio > Performance** counts **Tickets used** and **Staff passes used**.

:::tip A voucher is the cheapest test session
Before a launch, make a **Staff pass** with one redemption and run the whole flow at the booth. You see the Payment screen, the print and the sharing page exactly as a customer would.
:::

## Related

- [Booth Pricing](./booth-pricing.md)
- [Sell Sessions Online](../tutorials/sell-sessions-online.md)
- [Payment screen on the booth](../desktop-app/session-flow/payment.md)
