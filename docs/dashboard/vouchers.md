---
sidebar_position: 8
title: Vouchers
description: Single vouchers and batches of up to 1000 codes, free, fixed-amount or percentage, plus the online shop link and how guests redeem codes at the kiosk.
tags: [dashboard, vouchers, promotions]
---

# Vouchers

A voucher is a code a guest types into the voucher box on the kiosk's Payment screen. It can make the photo session free, take a fixed amount off, or take a percentage off. Make them one at a time for a partner or an influencer, or in a batch of up to 1000 for a corporate order or a flyer campaign.

![Vouchers page with existing vouchers: Vouchers and Batches tabs, Refill and Delete on each row](/img/docs/vouchers-list.webp)

## The Vouchers Page

Two tabs, **Vouchers** and **Batches**, each with its count. The buttons at the top are **Online shop link** and **+ Create**, which opens a menu with **Single Voucher** and **Generate Batch**.

![+ Create menu on Vouchers: Single Voucher, Generate Batch](/img/docs/vouchers-create-menu.webp)

## Creating a Single Voucher

1. Click **+ Create** and choose **Single Voucher**.
2. Fill in the form.
3. Save.

![Create Voucher modal: Voucher Code, Discount Type, Discount Value, Max Redemptions, Booth Restriction, Expiration Date](/img/docs/vouchers-create-single.webp)

| Field | What it is |
|---|---|
| **Voucher Code** | The code the guest types |
| **Discount Type** | **Free Session**, **Fixed Amount** or **Percentage** |
| **Discount Value** | The amount or percentage. Not shown for Free Session |
| **Max Redemptions** | How many times the code works. 1 for single use |
| **Booth Restriction** | All booths, or one booth only |
| **Expiration Date** | Optional. The code stops working after this date |

A Fixed Amount voucher carries a currency and works only at booths trading in that currency. Free Session and Percentage vouchers work everywhere.

## Generating a Batch

1. Click **+ Create** and choose **Generate Batch**.
2. Enter a **Batch Name**, the **Number of Codes** (up to 1000) and **Max Redemptions per Code**.
3. Click **Generate Codes**.

![Generate Batch modal: Batch Name, Number of Codes, Max Redemptions per Code, Generate Codes](/img/docs/vouchers-generate-batch.webp)

Every code in a batch is 6 characters and unique. Open a batch on the **Batches** tab to see Total Codes, Redeemed, Remaining and Total Value Redeemed, and the codes themselves.

![Vouchers page, Batches tab](/img/docs/vouchers-batches.webp)

## Refill and Delete

Each voucher or batch row has two actions.

| Action | What it does |
|---|---|
| **Refill** | Opens **Add Uses** and **New Expiration Date**, so a code that ran out keeps its name and history |
| **Delete** | Removes the code. Photo sessions it was used on stay in Transactions |

## The Online Shop Link

**Online shop link** copies the link to your online shop, where guests pick a package, pay, and receive a code the booth accepts. Each booth's own link, with a QR to print, is at the top of its [Pricing](./booth-pricing.md) tab.

![Online shop link popup on the Vouchers page](/img/docs/vouchers-online-shop-link.webp)

## How Guests Redeem

On the kiosk's Payment screen the guest opens the voucher box and types the code on the on-screen keyboard. Codes are not case sensitive. The length tells the kiosk what it is looking at:

| Length | Comes from |
|---|---|
| 6 characters | A voucher or batch code made on this page |
| 7 characters | The online shop (Pix Desktop App 1.1.101 or newer) |
| 8 characters | A group session code from a Multi-Booth cashier |

The kiosk checks codes without waiting for the server, so a printed voucher or a code bought online still works when the venue's internet is down. The redemption is reported once the booth reconnects.

## Tracking

Every redemption appears in [Transactions](./transactions.md) with the voucher code, and the **Vouchers** card on the [Dashboard](./dashboard-home.md) counts redemptions for the selected period. Marketing Studio > Performance keeps a running total.

:::tip A voucher is the cheapest test session
Before a launch, make a Free Session voucher with one redemption and run the whole flow at the booth. You see the Payment screen, the print and the sharing page exactly as a guest would.
:::

## Related

- [Booth Pricing](./booth-pricing.md)
- [Sell Sessions Online](../tutorials/sell-sessions-online.md)
- [Payment screen on the kiosk](../desktop-app/session-flow/payment.md)
