---
sidebar_position: 1
title: Set Up a Booth From Scratch
description: Create a booth in the Pixture dashboard, give it templates, a kiosk design, filters and pricing, pair the booth computer and run a test photo session.
tags: [tutorials, booths, setup, pairing]
---

# Set Up a Booth From Scratch

In this tutorial you will create a booth in the Pixture dashboard, assign print templates, choose the kiosk design and filters, set a price or make photo sessions free, check the outputs, pair the booth computer and run a test session. Allow about 30 minutes, plus the time to install the Pix Desktop App.

## Before You Start

- A Pixture account, with the dashboard open at pixture.io.
- The [Pix Desktop App](../getting-started/download-desktop-app.md) installed on the booth computer, with the camera and printer connected.
- On Pix Starter, one computer can be paired and every photo, print and GIF carries the Pixture watermark. Pix Pro removes the watermark and unlocks payments at the kiosk. See [Plans & Pricing](../pricing/plans.md).

## Step 1: Create the booth

1. In the sidebar click **Booths**, then **+ New Booth**.
2. On the **Single booth** tab, type a **Booth Name** that tells you where the booth is or what it is for, and a **Location** if you like.
3. Click **Create**.

![Create Booth modal on the Single booth tab with Booth Name and Location filled in](/img/docs/booths-create-modal.webp)

The new booth appears in the list with a dash under **DEVICE** and **PLAN**, because no computer is paired yet. Click **Configure** to open it. The first time it opens, the popup "Pair your booth first" offers **Generate pairing code**. Click **Maybe later** for now; you pair the computer in Step 7, once the booth is ready for guests.

## Step 2: Assign print templates

1. Open the **Templates** tab and click **Manage Templates**.

![Booth Templates tab with the Assigned Templates card and the Manage Templates button](/img/docs/booth-templates-tab.webp)

2. Tick every template this booth should offer. The **Assigned / Not Assigned**, **All Categories**, **All Sizes** and **All Media** filters narrow the list.
3. Click **Save Templates**.

![Manage Templates modal listing templates with their size and media type and the Save Templates button](/img/docs/booth-manage-templates-modal.webp)

A new account comes with two ready-made 4x6 templates, Classic Black and Classic White. On Pix Starter these are the two templates you can use; Pix Pro lets you design as many as you like in Pix Design (see [Design a Print Template](./design-a-print-template.md)). Assign at least one template, or guests have nothing to pick.

## Step 3: Choose the kiosk design

1. Open the **UI Project** tab.
2. Pick a design from the dropdown. It is grouped by **Photobooth mode**, **Studio mode** and **Simple mode**, and the tab shows the resulting **Booth mode**.
3. Click **Save**.

![Booth UI Project tab with the dropdown grouped by Photobooth, Studio and Simple mode and the Save button](/img/docs/booth-ui-project-tab.webp)

Every account starts with the default kiosk design, so you can leave this as it is and come back once you have built your own (see [Customise the Kiosk Screens](./customise-kiosk-screens.md)). Studio mode needs Pix Desktop App 1.1.98 or newer on the booth computer.

## Step 4: Choose filters

1. Open the **Filters** tab. With no explicit assignments, every filter is available on the booth by default, so you can skip this step.
2. To offer only some filters, click **Manage Filters**, tick the ones you want (or **Select all**), and click **Save Filter Assignments**.

Pixture ships 14 built-in filters. **Pix Design > Photo Filters** lets you upload your own .cube files, which then appear here under **Custom**.

## Step 5: Set the price, or make sessions free

1. Open the **Pricing** tab.
2. Set the **Payment on this booth** switch. On, guests pay the prices below at the kiosk. Off, every session is free and the kiosk skips the Payment screen; your prices are kept for later.
3. On **Price & packages**, enter the **Session price**. Pick the **Print format** that matches your paper (Standard, 2 inch cut or Triple strip), and turn on **Double session price**, **Group session price** or **Additional session price** if you offer packages.
4. Click **Save changes** in the save bar.

![Booth Pricing tab with the Sell sessions online card, the Payment on this booth switch, the live kiosk preview and the Price & packages form](/img/docs/booth-pricing-full.webp)

Taking payments at the kiosk needs a payment gateway under **Settings > Payment Gateway**, or a coin or card reader (see [Connect a Coin Acceptor or Card Reader](./connect-a-coin-or-card-reader.md)). On Pix Starter the kiosk skips the Payment screen, so sessions stay free until the computer runs Pix Pro. The other sub-tabs set the **Payment timeout** (**Time**), an **Extra print price** for the sharing screen (**Extra prints**) and **Tax & fees**. See [Booth Pricing](../dashboard/booth-pricing.md).

## Step 6: Check outputs and the operator PIN

1. Open the **Settings** tab.
2. Under **Output Settings**, switch on what the booth should produce: **Singles Upload**, **GIF Upload**, **Live Photo Upload** and **Print Output**. Click **Save Output Settings**.
3. Under **Menu PIN**, enter a PIN of 4 to 8 digits and click **Set PIN**, so guests cannot open the operator menu on the kiosk.

![Booth Settings tab with Output Settings switches, Payment Gateway, Booth Info, Currency and Menu PIN](/img/docs/booth-settings-tab.webp)

The same tab sets the booth's **Active Gateway** (**Organization Default** unless this booth needs a different one), its **Region** and its **Currency**.

## Step 7: Pair the computer

1. Open the **Device** tab and, under **Pairing & access**, click **Generate code**.
2. The **Pair Pixture App** modal shows a 6-digit code that expires in 10 minutes. **Copy Code** puts it on the clipboard; **Regenerate** issues a fresh one.

![Pair Pixture App modal with the 6-digit code, the expiry countdown, Copy Code, Regenerate and Done](/img/docs/booth-pairing-code.webp)

3. On the booth computer, open the Pix Desktop App and enter the code on its pairing screen.
4. Back in the dashboard, click **Done**.

If the modal shows "Device limit reached" instead of a code, every place on your subscription is taken. See [Add a Second Computer or Move Pix Pro](./add-or-move-a-computer.md).

## Step 8: Run a test photo session

1. On the kiosk, tap the Start screen to begin a session.
2. Pick a template, pose for the shots, choose a filter and continue to the Sharing screen.
3. Scan the QR code with your phone and check that the print comes out.

:::tip Testing with payment on
If **Payment on this booth** is on, either switch it off for the test or create a voucher under **Vouchers > + Create > Single Voucher** with the discount type **Free Session**, and enter its code on the Payment screen.
:::

## Check It Worked

- The booth page header shows **Online** and the plan for the computer: **Pix Pro until** a date, **Trial until** a date, or Watermarked on Pix Starter.
- **Booths** lists the computer under **DEVICE** and the plan under **PLAN**.
- **Gallery** shows the test photos, and the dashboard home shows a banner saying your booth is live, with **View gallery**.
- **Health** lists the booth as Healthy, with its paper level and last seen time.

![Booth page of a paired booth showing Online, the Pix Pro badge, the property grid and the tab bar](/img/docs/booth-overview.webp)

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| The pairing code is refused | Codes expire after 10 minutes | Click **Regenerate** and enter the new code |
| "Device limit reached" instead of a code | Every place on your subscription is active, or this is a second computer on Pix Starter | Deactivate a computer on the Licenses page, add a device, or use a Day Pass. Pix Starter runs one computer |
| The booth shows Offline or Unknown | No contact from the computer in the last 12 minutes | Check the computer's internet connection and that the Pix Desktop App is running |
| Guests see no templates | Nothing is assigned on the Templates tab | Assign at least one template and click **Save Templates** |
| Every session is free | **Payment on this booth** is off, or the computer is on Pix Starter | Turn the switch on and connect a gateway; Pix Starter skips the Payment screen |
| Photos carry a Pixture watermark | The computer is on Pix Starter | Start the free trial or buy Pix Pro on the Licenses page |

## Related

- [Booth Management](../dashboard/booth-management.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Your First Photo Session](../getting-started/your-first-session.md)
- [Pair Your First Booth](../getting-started/pair-your-first-booth.md)
