---
sidebar_position: 3
title: Payment
description: Configuring the optional payment step in the photobooth photo session flow.
tags: [desktop-app, photo session, payment, gateway]
---

# Payment

The payment step is an optional gate in the photo session flow. When enabled, customers must complete a payment before proceeding to template selection and capture.

## When to Use Payment

- **Paid public booths** -- shopping malls, arcades, or venues where each photo session has a per-use fee
- **Premium add-ons** -- charge for prints or extra features while the base photo session stays free
- **Revenue-generating installations** -- permanent photobooth setups that operate as a business

For promotional periods where photo sessions are free (launch campaigns, brand activations, marketing promotions), simply leave the payment step disabled and customers skip straight to template selection.

## Configuring Payment

Payment settings are managed from the Pix dashboard:

1. Go to your booth's settings in the dashboard.
2. Enable **Payment Required** for the photo session flow.
3. Configure your **payment gateway** credentials.
4. Set the **price per photo session**.

<!-- Screenshot: Payment configuration in the dashboard -->

:::info
The available payment gateways depend on your region and plan. Check the Pix dashboard for the gateways currently supported in your area.
:::

## Customer Experience

When payment is enabled, the flow looks like this:

1. Customer taps **Start** on the home screen.
2. The payment screen appears showing the photo session price.
3. Customer completes payment through the configured gateway.
4. On successful payment, the photo session proceeds to template selection.

If payment fails or is cancelled, the customer returns to the home screen.

:::tip
Keep the payment amount visible and the process quick. Long payment flows increase the chance customers will walk away before completing a photo session.
:::

## Skipping Payment

To disable the payment step:

- Set the booth to **free mode** in the dashboard, or
- Use the **Starter plan**, which does not support payment gates

When disabled, customers move directly from the home screen to template selection with no interruption.

## Revenue Tracking

All payment transactions are logged in your Pix dashboard. You can view revenue per booth, per day, and per photo session in the analytics section.
