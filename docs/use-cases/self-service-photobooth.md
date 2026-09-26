---
sidebar_position: 1
title: Self-Service Photobooth
description: Run an unattended photo booth in a mall, café, campus or cinema with Pixture, from the plan and payments to locking the booth, watching it remotely and keeping frames fresh.
tags: [use-cases, self-service, unattended, payments]
---

# Self-Service Photobooth

A self-service booth is a fixed unit in a place people already wait or linger: a mall corridor, a café, a campus food court, a cinema lobby. Guests walk up, pay per session, take their photos and leave with a print and a link to their digital copies. Nobody is standing next to it, so the booth has to take payment by itself, lock guests out of its settings, and tell you when it needs paper. This page shows how to set that up in Pixture.

## How It Makes Money

Guests pay per photo session, usually the price of a cup of coffee. Income grows with foot traffic, and the spot matters more than the booth: most operators pay the landlord a fixed rent, a share of sales, or both. Add-ons raise the ticket: a double or group session, extra prints, and repeat visits from guests who come back for a new frame.

## The Setup

### 1. License the computer

A booth that opens every day runs on **Pix Pro**, monthly or yearly, on its computer. Pix Starter is free but watermarked and skips the Payment screen, so it cannot charge guests. See [Plans & Pricing](../pricing/plans.md).

### 2. Take payment without a person

1. Connect a gateway: DOKU for QRIS in Indonesia, Stripe everywhere else. See [Create a Payment Gateway](../tutorials/create-a-payment-gateway.md).
2. On the booth's **Pricing** tab, switch **Payment on this booth** on, set the **Session price**, and add **Double** or **Group** packages if you want the upsell. Turn on **Extra print price** so guests can buy more prints on the Sharing screen. See [Accept Payments at the Booth](../tutorials/accept-payments.md).
3. Set the **Payment timeout** so an abandoned payment returns the booth to the Start screen.
4. For guests who would rather pay with a card or cash, add a Stripe Terminal card reader, a coin or note acceptor, or a Nayax reader. See [Take Card, Coin and Cash Payments](../tutorials/connect-a-coin-or-card-reader.md).
5. Keep **Voucher** on the Payment screen and share the **Online shop link** from **Vouchers**, so a guest whose wallet fails can buy a session on their phone and type the code. See [Sell Sessions Online](../tutorials/sell-sessions-online.md).

### 3. Lock the booth

- Set a **Menu PIN** on the booth's **Settings** tab, so guests cannot open the operator menu. See [Operator Menu](../desktop-app/admin-panel.md).
- In the booth's UI project, make sure only the triggers you want can start a session; a paid booth should not start on a tap without paying. See [Customise the Kiosk Screens](../tutorials/customise-kiosk-screens.md).

### 4. Watch it from anywhere

- **Health** shows whether the booth is online and whether the camera, printer, paper and uploads are fine, so you know to refill before a guest finds an empty printer. See [Health](../dashboard/health.md).
- **Dashboard** and **Transactions** show sessions and money by day, week or month. **Export Excel** on Transactions gives you the monthly statement for a revenue-share landlord. See [Transactions](../dashboard/transactions.md).
- When the internet drops, the booth keeps taking and printing photos and uploads them when the line comes back. See [Offline Mode](../desktop-app/offline-mode.md).

### 5. Keep guests coming back

- Change templates from the dashboard whenever you like; the booth picks them up by itself. A stale frame set is the fastest way to lose repeat guests. See [Design a Print Template](../tutorials/design-a-print-template.md).
- **Marketing Studio** (Pix Pro) asks guests for consent to hear from you, and can give them a **Bonus Session** or let them design their own frame with **Frame Lab**. See [Marketing Studio](../dashboard/marketing-studio.md) and [Frame Lab](../tutorials/frame-lab.md).
- **Pix AI** portraits on the share page add a paid extra without any work at the booth. See [Sell AI Portraits](../tutorials/sell-ai-portraits.md).

## Daily Routine

Check paper and the printer before opening, glance at **Health** during the day, and look at the day's sessions at closing. The [Booth Operations Checklist](../guides/booth-operations-checklist.md) has the full list.

## Typical Numbers

From the Pixture Photobooth Playbook (September 2026), for one mall-grade booth at about US$4 a session: 18 sessions a day brings roughly US$2,160 a month, 25 a day about US$3,000, and 40 a day about US$4,800. With around US$7,500 to build the booth and US$1,300 a month in fixed costs, a good spot pays the booth back in about seven months. These are estimates; your rent and prices decide the real figures.

## Related

- [Payment Setups by Use Case](../tutorials/payment-setups-by-use-case.md#self-service-booth)
- [Set Up a Booth From Scratch](../tutorials/set-up-a-booth.md)
- [Multi-Booth Studio](./multi-booth-studio.md), when one booth becomes several
