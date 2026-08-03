---
sidebar_position: 10
title: Booth Pricing
description: Configure per-booth and per-template pricing rules that determine what customers pay per photo session.
tags: [pricing, booths, templates, revenue]
---

# Booth Pricing

Booth pricing controls what customers pay for each photobooth photo session. You can set pricing at the booth level, the template level, or both — giving you flexibility across different kiosk locations.

## How Pricing Works

When a customer starts a photo session, the price is determined by this priority:

1. **Template-specific price** (if set) — overrides the booth default
2. **Booth default price** — applies when no template price is set
3. **Free** — if neither is configured, photo sessions are free

This means you can set a base price on the booth and override it for premium templates (e.g., GIF or video templates at a higher rate).

<!-- Screenshot: Booth pricing settings -->

## Setting Booth Pricing

1. Go to **Booths** and click the booth you want to configure.
2. Click **Pricing**.
3. Set the **Default Photo Session Price** (e.g., Rp 20,000).
4. Click **Save**.

All photo sessions at this booth will use this price unless a template-specific price overrides it.

:::tip
For free-photo session promotions (like a launch period where a sponsor covers the cost), leave the booth price at zero. Customers won't see a payment screen at all.
:::

## Per-Template Pricing

To charge different amounts for different template styles:

1. In the booth's **Pricing** section, click **Template Pricing**.
2. You'll see a list of templates assigned to this booth.
3. Click a template and enter its price.
4. Click **Save**.

| Template | Price | How It Works |
|----------|-------|-------------|
| Classic 4x6 | (no override) | Uses booth default (Rp 20,000) |
| Photo Strip | Rp 25,000 | Overrides booth default |
| GIF Template | Rp 35,000 | Overrides booth default |

## Pricing and Payments

When a photo session has a price greater than zero, the booth app displays a payment screen before the photo session begins. The customer pays through your configured [payment gateway](./billing.md), and the transaction is recorded in [Transactions](./transactions.md).

:::caution
Changing a booth's pricing takes effect immediately for new photo sessions. Photo Sessions already in progress are not affected.
:::

:::info
If you're running a pay-per-photo session model, make sure you've configured at least one payment gateway in **Billing** before setting prices. Without a gateway, customers won't be able to pay.
:::
