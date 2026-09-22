---
sidebar_position: 4
title: Add a Second Computer or Move Pix Pro
description: Add a device to your subscription for a new booth computer, move Pix Pro from one computer to another, and use Day Passes for single event days.
tags: [tutorials, licenses, devices, pix-pro, day-pass]
---

# Add a Second Computer or Move Pix Pro

In this tutorial you will add a device to your subscription so a second booth computer runs Pix Pro, pair that computer, move Pix Pro from an old computer to a new one, and use a Day Pass for a single event day. Allow about 15 minutes, plus checkout.

## Before You Start

- Owner or billing access to the Pixture dashboard.
- The new computer with the Pix Desktop App installed, and a booth created for it (see [Set Up a Booth From Scratch](./set-up-a-booth.md)).
- A card for checkout; in Indonesia, QRIS, bank transfer or a card.

## How Devices Work

One device on your subscription runs one computer. The **Licenses** page counts them: **Devices 2 of 3** means three places, two in use. A computer with a place runs Pix Pro. On a Pix Pro account, a computer without a place is **Blocked**: it stays paired and keeps its settings, but will not start a photo session until you deactivate another computer or add a device. Pix Starter has no subscription: one computer is paired and everything is watermarked.

A spare place attaches itself. The next computer that connects takes it, so you never assign a computer by hand; you only **Deactivate** the one you want to free.

## Step 1: Add a device to your subscription

1. Click **Licenses** in the sidebar and check the **Devices** card.

![Licenses page of a Pix Pro account with the Devices, Subscription, Next renewal and Passes cards and the Active devices table](/img/docs/licenses-devices.webp)

2. Click **Add more devices**. The modal reads "One device runs one computer. Pick how long, and how many."

![Add devices modal with the How many devices stepper, See volume pricing and the Pix Pro plan cards](/img/docs/licenses-add-devices.webp)

3. Set **How many devices?** The counter shows **Devices** now and **Updated devices** after the purchase.

![Add devices modal with the quantity stepper set to 3 devices](/img/docs/licenses-add-devices-quantity.webp)

4. Click **See volume pricing** to see how the per-device price changes with quantity; several devices bought together cost less each.

![Volume pricing table with Day Pass, Monthly and Yearly prices per quantity](/img/docs/licenses-volume-pricing.webp)

5. Click **Select** on **Pix Pro (1 Month)** ($40 per computer per month, cancel anytime) or **Pix Pro (1 Year)** ($25 per computer per month, billed $300 per year, marked BEST VALUE) and complete checkout. If you already pay by card, a **Confirm this charge** step shows the amount and **Add and pay**.

From Indonesia the same modal shows rupiah prices, prepaid: Pix Pro (1 Month) Rp 850.000 and Pix Pro (1 Year) Rp 6.500.000, with a promo code field.

## Step 2: Pair the new computer

1. Open **Booths**, click **Configure** on the new booth, open the **Device** tab and click **Generate code**.
2. Enter the 6-digit code in the Pix Desktop App on the new computer within 10 minutes.
3. The computer takes the free place on its first check-in and appears under **Active devices** with **Pix Pro** in the **LICENSE** column.

Buy first, then pair: when every place is taken and there are no unspent passes, the pairing code is refused with "Device limit reached".

## Step 3: Move Pix Pro to another computer

You are retiring a booth computer and want its Pix Pro on the replacement. Nothing is bought; the place moves.

1. On **Licenses**, find the old computer under **Active devices** and click **Deactivate**.
2. In **Deactivate this computer**, read the note: a place on your subscription frees up. Click **Deactivate**, or **Keep Pix Pro** to back out.

![Deactivate this computer modal with Keep Pix Pro and Deactivate](/img/docs/licenses-deactivate-modal.webp)

3. Pair the new computer (Step 2). If it is already paired and Blocked, just leave the Pix Desktop App running: the next computer that checks in takes the place.

Two other actions free the place as well: logging the kiosk out (operator menu > **Logout**) and **Unlink** on the booth's **Device** tab. Both return Pix Pro, or the free trial, to the pool, and the next computer to check in takes it. A Day Pass does not move; see Step 4.

:::caution The place goes to whoever checks in first
If several Blocked computers are online, the first one to connect after you deactivate takes the freed place. Deactivate while only the intended computer is running the Pix Desktop App.
:::

## Step 4: Use a Day Pass for one event day

A Day Pass is Pix Pro on one computer for 24 hours from the moment you use it: $5 (Rp 85.000) per computer per day.

1. On **Licenses**, click **Buy passes** on the **Passes** card (or **Add more devices** and pick **Pix Pro (1 Day)**), choose how many and pay. Unspent passes show on the **Passes** card.

![Buy passes flow opened from the Passes card](/img/docs/licenses-buy-passes.webp)

2. On the day, at the booth: open the operator menu (tap the top-right corner twice within 3 seconds and enter the PIN if one is set) and tap **Use a pass on this device**. The button appears only while the computer has no Pix Pro. The booth must be online at that moment.
3. The operator menu badge now reads **Pass until** a time. The kiosk warns on its idle screen 60 and 15 minutes before the pass ends; when it ends, a popup names what ended and guests see "Please call the operator."

Rules that only apply to passes:

- A pass is used from the booth, never from the dashboard.
- A pass ends where it started. **Deactivate** on a computer running a pass ends the pass; it cannot be moved or used again. Logging the kiosk out leaves the pass on that computer.
- A computer paired while you hold unspent passes stays **Blocked** until a pass is used on it. Pixture never spends a pass for you, since that would start the 24 hours without asking.

## Step 5: On Pix Starter

Pix Starter has no subscription. **Licenses** reads "No devices yet", one computer is paired, and every photo, print and GIF carries the Pixture watermark. A second computer is refused at the pairing code. To run more computers, start the 3-day free trial (one computer) or click **Add more devices**.

![Licenses page of a Pix Starter account with No devices yet, Subscription, Passes and Add more devices](/img/docs/licenses-starter.webp)

## Before Pix Pro Ends

- A subscription that will not renew warns 7 days and 1 day ahead by email and a dashboard banner, and the booth page badge shows the end date (**Pix Pro until** a date).
- A failed renewal charge sends an email and shows a banner at once. The **LICENSE** column reads **Pix Pro, payment failed** and the kiosk shows a payment-failed banner. You have 3 days to fix the card under **Settings > Pixture billing** before the computer is Blocked.
- A Day Pass or the free trial warns on the kiosk idle screen 60 and 15 minutes before the end.
- When the last place ends, the account returns to Pix Starter, watermarked.

## Check It Worked

- The **Devices** card counts the new computer, and its row under **Active devices** shows **Pix Pro** with today's **FIRST SEEN** date.
- **Booths** shows **Pix Pro** under **PLAN** for that booth.
- The kiosk operator menu badge reads **Pix Pro**, and a test session has no watermark.

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Pairing shows "Device limit reached" | Every place is taken and there is no unspent pass, or this is a second computer on Pix Starter | Deactivate a computer, add a device or buy a pass. Pix Starter runs one computer |
| The new computer is paired but Blocked | No free place, or you hold unspent passes and none is used on it yet | Deactivate another computer or add a device; or **Use a pass on this device** |
| Deactivate freed a place but the new computer is still Blocked | It has not checked in yet, or another computer took the place | Make sure the Pix Desktop App is running and online; check **Active devices** |
| A pass disappeared after Deactivate | Deactivate ends a pass | Buy another pass; deactivate only subscription computers you mean to move |
| **LICENSE** reads **Pix Pro, payment failed** | The renewal charge failed | Update the card under **Settings > Pixture billing** within 3 days |
| Kiosk badge reads "Pix Pro ended, reconnect to check" | The computer was offline when its period ended | Reconnect it; the kiosk checks again |

## Related

- [Device Management](../dashboard/device-management.md)
- [Devices & Billing](../dashboard/billing.md)
- [Licence on the Booth](../desktop-app/licence-on-the-booth.md)
- [Plans & Pricing](../pricing/plans.md)
