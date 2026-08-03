---
sidebar_position: 8
title: Vouchers
description: Create discount codes, set expiry dates, and track redemptions with the Vouchers feature.
tags: [vouchers, discounts, promotions]
---

# Vouchers

Vouchers let you offer discount codes to guests. Use them for promotions, limited-time pricing, or loyalty rewards. You can control how many times a code can be used and when it expires.

<!-- Screenshot: Voucher list -->

## Creating a Voucher

1. Open **Vouchers** from the sidebar.
2. Click **+ New Voucher**.
3. Fill in the details:
   - **Code** — the text guests enter (e.g., "WEEKEND20", "FREEPHOTO"). Codes are case-insensitive.
   - **Discount Type** — percentage off or fixed amount off.
   - **Discount Value** — the percentage (e.g., 25%) or fixed amount (e.g., Rp 10,000).
   - **Max Redemptions** — total number of times this code can be used (leave blank for unlimited).
   - **Expiry Date** — when the voucher stops working.
4. Click **Create**.

:::tip
For limited-time vouchers, set the expiry date to the day after the promotion ends. This way the code works during the promotion window but can't be reused later.
:::

## Managing Vouchers

The voucher list shows all codes with their status:

| Status | Meaning |
|--------|---------|
| **Active** | Code is live and can be redeemed |
| **Expired** | Past the expiry date |
| **Depleted** | Max redemptions reached |
| **Disabled** | Manually deactivated |

Click any voucher to edit its details or disable it. You can also extend the expiry date or increase the redemption limit after creation.

## Tracking Redemptions

Each voucher's detail page shows:

- **Total Redemptions** — how many times the code has been used
- **Remaining** — how many uses are left (if a max was set)
- **Redemption History** — a list of every use, including the booth, session, timestamp, and discount applied

:::caution
Voucher codes must be unique across your organization. If you try to create a code that already exists, you'll see an error.
:::

## Best Practices

- Use short, memorable codes that guests can type easily on a touchscreen.
- Set reasonable redemption limits to prevent abuse.
- Review the redemption history after each promotion period to measure its effectiveness.

:::info
Vouchers apply at the session level. When a guest enters a valid code, the discount is applied to their session payment before processing through the payment gateway.
:::
