---
sidebar_position: 4
title: Vouchers
description: Free, percentage, or fixed-amount codes customers enter at the kiosk -- single codes, batches of up to 1000, expiry, per-booth scope, and offline vouchers.
tags: [dashboard, vouchers, promotions]
---

# Vouchers

A voucher is a code a customer types (or scans) on the kiosk's payment screen.

## Voucher Types

| Type | What it does |
|---|---|
| **Free** | The photo session costs nothing |
| **Percentage** | Takes a percentage off the price (1 to 100%) |
| **Fixed amount** | Takes a fixed amount off, in one currency |

Fixed-amount vouchers can only be redeemed at booths trading in the voucher's currency.

## Creating Vouchers

1. Open **Vouchers** and click **New voucher**.
2. Choose the type and value.
3. Set **max redemptions** (1 for single use), an optional **expiry**, and whether it works at **all booths** or one booth.
4. Save. Codes are case-insensitive on the kiosk.

### Batches

To hand out many codes at once (a corporate order, a flyer campaign), create a **batch** of up to 1000 unique codes. Open the batch to see redemptions per code, export the codes, or **refill** the batch with more.

## Redeeming at the Kiosk

On the payment screen the customer chooses **Use voucher** and types the code with the on-screen keyboard. The kiosk's payment screen can also show a dedicated voucher field, depending on the kiosk design.

## Offline Vouchers

Booths keep working without internet, and so do vouchers: the kiosk verifies short codes locally using a secret it holds for your booth, and reports the redemption when it reconnects. This is what makes a printed voucher or a static QR at the counter safe to use in venues with poor connectivity.

## Tracking

Every redemption appears in **Transactions** with the voucher code, so you can see which promotion brought people in.

:::caution Deactivate, do not delete
Deactivating a voucher keeps its history in Transactions. Deleting removes the code but not the photo sessions it was used on.
:::
