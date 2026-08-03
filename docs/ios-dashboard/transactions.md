---
sidebar_position: 6
title: Transactions
description: View transaction history, search and filter payments, and export data as CSV.
tags: [transactions, payments, export, csv]
---

# Transactions

The Transactions screen tracks every payment processed through your booths. Use it to reconcile revenue, investigate specific payments, or export data for your accounting.

<!-- Screenshot: Transactions list -->

## Transaction List

Each transaction entry shows:

- **Amount** — the payment total
- **Status** — Paid, Pending, Failed, or Refunded
- **Booth** — which booth processed the payment
- **Payment Method** — the gateway used (Xendit, DOKU, Midtrans, or cash)
- **Timestamp** — when the transaction occurred

Click any transaction to see the full detail view, including the payment gateway reference ID, customer contact info (if provided), and the photo session it's linked to.

## Searching Transactions

The search bar lets you find transactions by:

- Transaction ID or reference number
- Customer email or phone number
- Amount (exact match)

This is useful when a customer disputes a charge or your payment gateway dashboard shows a transaction you need to cross-reference.

## Filtering

Use the filter controls to narrow the list:

- **Date Range** — set a start and end date
- **Booth** — filter by one or more booths
- **Status** — show only Paid, Pending, Failed, or Refunded
- **Payment Gateway** — filter by Xendit, DOKU, or Midtrans

:::tip
To quickly review failed transactions, set the status filter to "Failed" and check if there's a pattern — it might indicate a gateway configuration issue at a specific booth.
:::

## CSV Export

To export transaction data:

1. Apply any filters you want (the export respects active filters).
2. Click the **Export** button (download icon).
3. Choose **CSV** format.
4. The file downloads to your device — save it, email it, or import it into your accounting software.

:::info
Exported CSV files include all transaction fields: ID, amount, status, booth, gateway, reference, timestamp, and customer contact info. Column headers are included in the first row.
:::

## Reconciliation Tips

- Export weekly or monthly CSVs and compare totals against your payment gateway dashboard.
- Use the status filter to flag any "Pending" transactions that haven't resolved — these may need manual follow-up with your gateway provider.
