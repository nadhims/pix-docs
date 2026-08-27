---
sidebar_position: 7
title: Hardware Payments
description: Take coins, banknotes, or card taps at the kiosk with a coin acceptor, Nayax or EDC reader, or a CASH-Interface2 system -- no payment gateway needed.
tags: [desktop-app, payments, hardware, coin, nayax]
---

# Hardware Payments

Besides QRIS through your payment gateway, the Pix Desktop App can accept payment from hardware attached to the kiosk computer. Everything below is configured on the kiosk under **Menu > API Settings**, and the amount paid is recorded as photo session revenue in the dashboard.

## Coin and Banknote Acceptors (Keyboard Mode)

Many acceptors can be set to act as a USB keyboard, sending one keystroke per coin or note. Pix counts those keystrokes while its "Insert coins" screen is open.

1. Configure the acceptor to send a single key (for example `F1`) per unit of value.
2. On the kiosk, enable **Coin key**, choose the key it sends, and enter the **value per keystroke** in your currency.
3. Design the Payment screen in the [UI Editor](../dashboard/pix-design/ui-editor.md) with a coin sub-page, so customers see the running total.

No bridge box is needed for this mode.

## Nayax and EDC Card Readers

Readers that report a completed payment as keystrokes (one per credit pulse) work the same way as keyboard-mode acceptors: map the key and the value per pulse.

## The Local Hardware API

For bridges and card terminals that talk over the network, Pix runs a small HTTP API on the kiosk:

- Enable it under **Menu > API Settings**. It listens on port **14500**.
- A **token** is generated on first enable; every request must carry it.
- By default it accepts connections from the kiosk computer only. Turn on **Allow LAN** to accept a bridge on the same network.

The API marks the amount currently shown on the payment screen as paid, and only while the kiosk is actually waiting for payment. The settings page shows copy-ready request examples for your integrator.

## CASH-Interface2 and F13 Systems

Coin systems built on CASH-Interface2 press the **F13** key into the Pix window when the customer has paid:

- With the Payment screen **on**, F13 on the payment screen confirms payment for the displayed amount. The kiosk publishes the amount in its window title in the `#amount#` format the interface reads, so variable pricing works.
- With the Payment screen **off**, F13 acts as a start button. Turn on **Count F13 starts as paid sessions** so those sessions are recorded at the booth's Single price and your revenue reports stay honest.

F13 sessions only count as paid when Pix can see they were started by the hardware, so keyboard-connected systems must send the real F13 key.

## Which Method to Choose

| Setup | Use |
|---|---|
| Coin or note acceptor with a keyboard mode | Coin key |
| Nayax / EDC reader with pulse-per-credit output | Coin key with the reader's value per pulse |
| A bridge, PLC, or terminal that can make an HTTP request | Local Hardware API |
| CASH-Interface2 based cash system | F13 |

:::caution What the reader charges is up to the reader
Pix records what the hardware reports. Pix cannot tell a card reader to charge a specific package price; set the price on the reader to match Booth Pricing.
:::
