---
sidebar_position: 5
title: Connect a Coin Acceptor or Card Reader
description: Take coins, notes or card taps at the booth with a card reader through Stripe, a keystroke cash system such as CASH-Interface2 or Nayax, or your own bridge on the local Hardware API.
tags: [tutorials, payments, hardware, coin, nayax, cash-interface2]
---

# Connect a Coin Acceptor or Card Reader

In this tutorial you will pick one of the three ways to take money from hardware at the booth, wire it into the kiosk, and check that the paid photo sessions show up as revenue in the dashboard. Allow about 30 minutes for a keystroke setup, longer if you build a bridge.

## Before You Start

- Pix Pro on the booth computer. On Pix Starter the kiosk skips the Payment screen, so nothing can be charged.
- The hardware wired to the booth computer and configured on its own side: coin values, price, pulse or keystroke output.
- The booth's **Pricing** tab set: **Payment on this booth** on and a **Session price** (see [Booth Pricing](../dashboard/booth-pricing.md)).
- Pix Desktop App 1.1.87 or newer, so that hardware payments are recorded as revenue.
- The kiosk pages in this tutorial have no screenshots; they are described in words.

## Pick Your Option

| You have | Use | Where it is set up |
|---|---|---|
| A card reader and a Stripe account | Option A: a Stripe Terminal reader through the Stripe gateway | Dashboard, **Settings > Payment Gateway** |
| A coin or note acceptor, or a Nayax, Ingenico or ePort reader on a CASH-Interface2 board | Option B: keystrokes | Kiosk, operator menu > **Hardware API**, plus the UI Editor |
| A PLC, bridge box or terminal that can call a URL | Option C: the local Hardware API | Kiosk, operator menu > **Hardware API** |

## Option A: A card reader through Stripe

Guests tap or insert a card on a Stripe Terminal reader at the booth. The payment goes through your Stripe account, the same gateway that shows a Stripe QR code on the Payment screen.

1. Open **Settings > Payment Gateway** and click **Add Payment Gateway**.
2. Under **Choose your payment provider**, pick **Stripe**, then **Continue**.

![Add Payment Gateway modal, step 1, with the Midtrans, Xendit, DOKU and Stripe providers](/img/docs/steps/tutorials-connect-a-coin-or-card-reader--settings-gateway-providers.webp)

3. Paste your Stripe **Secret key** (it must start with `sk_` or `rk_`; use the live key, since an `sk_test_` key never pays out) and click **Connect Gateway**.

![Add Payment Gateway modal with the Stripe form](/img/docs/steps/tutorials-connect-a-coin-or-card-reader--settings-gateway-stripe.webp)

4. On the booth's **Settings** tab, set **Active Gateway** to the Stripe gateway if the organization default is something else.
5. Set up the reader itself and which booth it belongs to as described in [Payment Gateway Reference](../guides/payment-gateway-setup.md).

Stripe charges in any currency, so this is the option outside Indonesia. In Indonesia, QRIS through Midtrans, Xendit or DOKU covers QR code payments; for a card reader at the booth, use Option B with an EDC terminal that has a pulse or keystroke output.

## Option B: A keystroke cash system (CASH-Interface2, coin acceptors, Nayax)

CASH-Interface2 boards and similar cash systems talk to the booth by pressing keys. Their software sends a hotkey to whichever window's title matches its "receiver name". The Pix Desktop App changes its window title per screen (**Pix - START** on the Start screen, **Pix - PAYMENT** on the Payment screen), so the system knows where the booth is. Two setups work.

### Setup B1: the cash system is the gate (Payment screen off)

The guest pays the cash system first. When the credit reaches the price, the system presses **F13** and the session starts. The booth records that session as paid at the booth's session price.

1. In the cash system's software, set the receiver name to **Pix - START**, the hotkey to **F13**, and the cost to your session price. On a Nayax reader, set the credit per pulse to match the board's channel value.
2. In the UI Editor, open the booth's UI project. On the **Payment Screen** tab, turn **Enabled in session flow** off. On the **Start Screen** tab, under **SESSION TRIGGER**, tick **F13** only and untick **Touch Screen**, the keys and **Start Button**, so nobody can start a session without paying. **Save**.

![UI Editor on the Start Screen with the Session Trigger checkboxes, including F13](/img/docs/steps/tutorials-connect-a-coin-or-card-reader--pix-design-ui-editor-start.webp)

3. On the booth, open the operator menu (tap the top-right corner twice within 3 seconds and enter the PIN if one is set) and tap **Hardware API**. In the CASH-Interface2 section, turn on **Treat F13 as the cash system's paid signal**. The page shows a setup table for the **Pix - START** receiver you can copy from.
4. Tap **Start Booth** and feed the acceptor: the session should start on its own once the price is reached.

### Setup B2: pay on the Payment screen (keystroke per pulse)

The guest sees the price on the booth's Payment screen and feeds the acceptor; the booth counts each keystroke and continues when the total is reached. This is the setup for plain coin or note acceptors in keyboard mode, and for Nayax, Ingenico or ePort readers with a pulse-per-credit output.

1. Set the acceptor or reader to send one key (for example F1) per unit of value; on a CASH-Interface2 board, one keystroke per pulse.
2. In the UI Editor, design the **coins** sub-screen of the **Payment Screen** (and **card**, for a card reader) so guests watch the total climb, and keep the Payment Screen enabled. **Save**.
3. On the booth, open the operator menu > **Hardware API**. Under **Keyboard coin input**, turn on **Enable keyboard coin input**, set **Coin key** to the key the hardware sends, and **Value per keystroke** to what one keystroke is worth in the booth's currency. Fractional currencies settle correctly.
4. Run a test: start a session, open the Coin (or Card) step on the Payment screen, and feed the acceptor until the total is reached. The booth moves to the success screen.

Packages (double, group and additional sessions) change the amount due, so offer them only with a reader that can charge a variable amount. The **Price & packages** tab says the same.

![Pricing sub-tab Price & packages with Session price, Print format and the package toggles](/img/docs/booth-pricing-packages.webp)

### Variant: a CASH-Interface2 system confirming the amount on the Payment screen

If the system should confirm the whole amount in one go rather than pulse by pulse, set its receiver name to **Pix - PAYMENT** with hotkey **F13**, keep the Payment Screen enabled, and turn on **Treat F13 as the cash system's paid signal** on the Hardware API page. While the Payment screen waits, the booth's window title carries the amount due, so the system's variable price setting follows the package the guest picked; an F13 then marks that amount as paid.

:::caution Never add a second trigger to a paid start
With Setup B1, F13 must stay the only session trigger. A Start Button or Touch Screen trigger next to it lets guests start for free.
:::

## Option C: Your own bridge on the local Hardware API

If your hardware can make an HTTP request (a PLC, a bridge box, a card terminal with a webhook), the booth runs a small API on the computer.

1. On the booth, open the operator menu > **Hardware API**.
2. Turn on **Enable local API**. It listens on **Port** 14500 by default; change it if that port is taken.
3. Leave **Allow LAN access** off if the bridge runs on the booth computer itself; turn it on if the bridge sits elsewhere on the same network.
4. Read the **Access token** off the screen and put it in your bridge. **Regenerate** issues a new token and invalidates the old one.

Every request must carry the token. The page lists the endpoints:

| Endpoint | Use it to |
|---|---|
| `GET /api/v1/status` | Read the current screen, the payment state, and the amount due with its currency, so the bridge takes the price from the booth instead of holding its own copy |
| `GET /api/v1/start` | Start a session, with the same guards as a guest tap. Refused (409) when the booth is not on the Start screen |
| `GET /api/v1/payment-complete` | Mark the amount on the Payment screen as paid. Accepted only while the booth is waiting for a hardware payment; otherwise 409 |

A typical bridge polls `/api/v1/status`, waits until the booth is on the Payment screen, charges the amount it reads there, and calls `/api/v1/payment-complete` once the reader confirms. A start-gate bridge charges a fixed price first and calls `/api/v1/start`. Check the status before taking money: a Blocked computer refuses to start sessions.

## Check It Worked

1. Run a paid test session with the hardware.
2. In the dashboard, open **Transactions**: the session is listed with the amount the hardware reported, not as a free session, and it counts toward **Total Revenue**.
3. The dashboard home **Revenue** card picks it up as well.

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Coins go in but nothing happens on the Start screen (B1) | The receiver name does not match the window title, or F13 is not ticked as a trigger | Use **Pix - START** exactly; tick **F13** on the Start Screen |
| Sessions start without payment (B1) | **Touch Screen** or **Start Button** is still ticked | Leave **F13** as the only session trigger |
| Paid sessions show as free in Transactions | **Treat F13 as the cash system's paid signal** is off, or the app is older than 1.1.87 | Turn the toggle on; update the app from the operator menu |
| The total on the Coin screen climbs by the wrong amount (B2) | **Value per keystroke** does not match the acceptor's unit | Correct one of them |
| A Nayax reader shows "Cash only" | Its inhibit is active: the portal inhibit is on without the wire, or the CASH-Interface2 software is not active | Fix it on the Nayax side first |
| The bridge gets 409 | Wrong screen for that call | Poll `/api/v1/status`; call `/start` only on the Start screen and `/payment-complete` only while a payment is awaited |
| The bridge's requests are rejected | Missing or old token | Copy the current **Access token**; **Regenerate** invalidates the old one |
| The Payment screen never appears | **Payment on this booth** is off, or the computer is on Pix Starter | Turn the switch on; the computer needs Pix Pro |

## Related

- [Hardware Payments](../desktop-app/hardware-payments.md)
- [Payment Gateway Reference](../guides/payment-gateway-setup.md)
- [Payment](../desktop-app/session-flow/payment.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
