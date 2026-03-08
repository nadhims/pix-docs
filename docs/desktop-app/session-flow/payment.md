---
sidebar_position: 3
title: Payment
description: Configuring the optional payment step in the photobooth session flow.
tags: [desktop-app, session, payment, gateway]
---

# Payment

The payment step is an optional gate in the session flow. When enabled, guests must complete a payment before proceeding to template selection and capture.

## When to Use Payment

- **Paid public booths** -- shopping malls, arcades, or venues where each session has a per-use fee
- **Premium add-ons** -- charge for prints or extra features at an otherwise free event
- **Revenue-generating installations** -- permanent photobooth setups that operate as a business

For free events (corporate parties, weddings, marketing activations), simply leave the payment step disabled and guests skip straight to template selection.

## Configuring Payment

Payment settings are managed from the Pix dashboard:

1. Go to your booth's settings in the dashboard.
2. Enable **Payment Required** for the session flow.
3. Configure your **payment gateway** credentials.
4. Set the **price per session**.

<!-- Screenshot: Payment configuration in the dashboard -->

:::info
The available payment gateways depend on your region and plan. Check the Pix dashboard for the gateways currently supported in your area.
:::

## Guest Experience

When payment is enabled, the flow looks like this:

1. Guest taps **Start** on the home screen.
2. The payment screen appears showing the session price.
3. Guest completes payment through the configured gateway.
4. On successful payment, the session proceeds to template selection.

If payment fails or is cancelled, the guest returns to the home screen.

:::tip
Keep the payment amount visible and the process quick. Long payment flows increase the chance guests will walk away before completing a session.
:::

## Skipping Payment

To disable the payment step:

- Set the booth to **free mode** in the dashboard, or
- Use the **Starter plan**, which does not support payment gates

When disabled, guests move directly from the home screen to template selection with no interruption.

## Revenue Tracking

All payment transactions are logged in your Pix dashboard. You can view revenue per booth, per day, and per session in the analytics section.
