---
sidebar_position: 7
title: Billing
description: Manage your Pix plan, configure payment gateways, and view invoices from the Billing tab.
tags: [billing, payments, gateways, plans]
---

# Billing

The Billing tab handles two things: your Pix subscription plan and the payment gateways your booths use to accept customer payments.

## Your Plan

The top section shows your current Pix subscription:

- **Plan Name** — Starter, Day Pass, or Pix Pro (Monthly/Yearly)
- **Status** — Active, Expiring, or Expired
- **Renewal Date** — when your next billing cycle starts
- **Booth Limit** — how many booths your plan supports

<!-- Screenshot: Billing plan overview -->

To change plans, click **Manage Plan**. You'll see the available options with pricing. Upgrades take effect immediately; downgrades apply at the end of your current billing period.

:::info
The Starter plan is free and supports one booth, print-only, with the default template and no editors. Upgrade to Pix Pro for full access to Pix Design, sharing, analytics, and unlimited templates.
:::

## Payment Gateway Configuration

Your booths can accept payments from customers (e.g., pay-per-photo session). Pix supports three Indonesian payment gateways:

| Gateway | Supported Methods |
|---------|------------------|
| **Xendit** | Bank transfer, e-wallets (OVO, DANA, GoPay), credit cards |
| **DOKU** | Bank transfer, e-wallets, convenience store |
| **Midtrans** | Bank transfer, e-wallets, credit cards, QRIS |

### Setting Up a Gateway

1. Click **Payment Gateways** in the Billing tab.
2. Click **Add Gateway**.
3. Select your provider (Xendit, DOKU, or Midtrans).
4. Enter your API keys (found in your gateway's merchant dashboard).
5. Click **Verify & Save** — Pix will test the connection.

:::caution
Keep your API keys confidential. Use production keys for live booths and sandbox/test keys only during setup. Never share keys in screenshots or support tickets.
:::

## Invoices

Scroll down in the Billing tab to see your invoice history. Each invoice shows the amount, date, and payment status. Click an invoice to view or share the PDF.

:::tip
Set up a dedicated email for invoice notifications so billing records are easy to find during tax season.
:::
