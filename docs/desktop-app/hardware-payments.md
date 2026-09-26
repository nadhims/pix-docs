---
sidebar_position: 10
title: Hardware Payments
description: Take coins, banknotes, card taps or DuitNow QR at the booth with a coin acceptor, a Nayax or EDC reader, a Transpire QR DuitNow terminal, or a CASH-Interface2 system, using the kiosk's Hardware API page.
tags: [desktop-app, payments, hardware, coin, nayax, duitnow, transpire-qr]
---

# Hardware Payments

Besides QR payments through your gateway, the booth can take money from hardware attached to the computer: a coin or note acceptor, a Nayax or EDC card reader, or a CASH-Interface2 cash system. Everything is set up on the booth under **Menu > Hardware API**, and the amount the hardware reports is recorded as photo session revenue in the dashboard, not as a free session. This page covers the three ways in, which to choose, and the settings behind each.

## Before You Start

- The hardware is wired to the booth computer and configured on its own side (coin values, price, pulse settings).
- The booth's Payment screen has a **Coin** or **Card** sub-screen designed in the UI Editor if you want guests to see a running total, or the Payment screen is off if the cash system is the gate. See [Payment](./session-flow/payment.md).
- A step-by-step setup, including the Nayax portal values and cash at the counter, is in [Take Card, Coin and Cash Payments](../tutorials/connect-a-coin-or-card-reader.md).

## Keyboard Coin Input

Many acceptors act as a USB keyboard and send one keystroke per coin, note or credit pulse. Pix counts those keystrokes on its Insert Coins and Tap to Pay screens.

1. Set the acceptor to send a single key (for example F1) per unit of value.
2. Open **Menu > Hardware API** on the booth.
3. Turn on **Enable keyboard coin input**.
4. Set **Coin key** to the key the acceptor sends.
5. Set **Value per keystroke** in the booth's currency.

Nayax and EDC readers with a pulse-per-credit output work the same way: map the key and the value per pulse. Fractional currencies settle correctly. No bridge box is needed.

A DuitNow QR terminal from Transpire QR (Malaysia) also sends pulses after a guest pays by QR, so it is set up the same way. See [Setup B4](../tutorials/connect-a-coin-or-card-reader.md#setup-b4-a-duitnow-qr-terminal-in-malaysia-transpire-qr).

## CASH-Interface2 Systems

CASH-Interface2 keystroke software sends a hotkey to whichever window title matches its receiver name. The booth publishes a screen-aware title, so two setups work:

**Setup 1: the cash system is the gate (Payment screen off).** The guest pays first, then the system presses **F13**, which starts the session.

1. In the CASH-Interface2 software set the receiver name to **Pix - START** and the hotkey to F13, with the costs set to your session price.
2. In the UI Editor, turn the Payment screen off and make F13 the only session trigger on the Start Screen.
3. On the booth, under **Menu > Hardware API**, turn on **Treat F13 as the cash system's paid signal**, so those sessions are recorded as paid at the booth's session price.

**Setup 2: pay on the Payment screen (keystroke per pulse).** The system sends one keystroke per pulse and the booth counts them as keyboard coin input, so the guest watches the total climb on the Coin screen. Or, with **Treat F13 as the cash system's paid signal** on, an F13 while the Payment screen is waiting confirms the amount on screen: set the receiver name to **Pix - PAYMENT**, and the booth's window title carries the amount due so the system's variable price follows the package the guest chose.

The Hardware API page shows setup tables for both receiver names. On a Nayax reader, "Cash only" means its inhibit is active, either in the Nayax portal without the wire or because the CASH-Interface2 software is not active; check that before the booth.

## The Local Hardware API

For bridges, PLCs and terminals that can make an HTTP request, the booth runs a small API on the computer.

1. Open **Menu > Hardware API**.
2. Turn on **Enable local API**. It listens on **Port** 14500 by default.
3. Read the **Access token** off the screen and give it to whoever wires the bridge. **Regenerate** issues a new one; every request must carry the token.
4. By default only the booth computer can connect. Turn on **Allow LAN access** to accept a bridge on the same network.

The page lists the endpoints:

| Endpoint | What it does |
|---|---|
| `/api/v1/status` | The current screen, the payment state, and the amount due with its currency, so a bridge reads the price instead of having it configured twice |
| `/api/v1/start` | Starts a session, with the same guards as a guest tap. Refused off the Start screen |
| `/api/v1/payment-complete` | Marks the amount on the Payment screen as paid. Only accepted while the booth is waiting for a hardware payment |

## Which Method to Choose

| Setup | Use |
|---|---|
| Coin or note acceptor with a keyboard mode | Keyboard coin input |
| Nayax or EDC reader with pulse-per-credit output | Keyboard coin input with the reader's value per pulse |
| Transpire QR DuitNow terminal (Malaysia) | Keyboard coin input with its value per pulse, or F13 as a start-gate |
| CASH-Interface2 cash system | F13 with the Pix - START or Pix - PAYMENT receiver |
| A bridge, PLC or terminal that can call a URL | The local Hardware API |

:::caution What the reader charges is up to the reader
Pix records what the hardware reports. It cannot tell a card reader to charge a particular package; set the price on the reader to match Booth Pricing, and offer packages only with a reader that can charge a variable amount.
:::

## Related

- [Take Card, Coin and Cash Payments](../tutorials/connect-a-coin-or-card-reader.md)
- [Payment](./session-flow/payment.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Operator Menu](./admin-panel.md)
