---
sidebar_position: 2
title: Multi-Booth Setup
description: Run several booths from one Pixture account, group them into a Multi-Booth with shared settings, a shared queue and a central cashier, and license one computer per booth.
tags: [guides, multi-booth, management]
---

# Multi-Booth Setup

One Pixture account can run any number of booths. Each booth is a free profile with its own templates, kiosk design, pricing and history. When several booths work together at one venue, a **Multi-Booth** group lets you set them up once, share one queue and sell sessions from one cashier. At the end you have a group of booths that share settings, each paired to its own computer with its own Pix Pro.

## Before you start

- One computer per booth. A booth can only be paired to one computer, and a computer to one booth.
- Pix Pro is per computer. Each computer in the group needs its own place on your subscription or a Day Pass. See [Plans & Pricing](../pricing/plans.md).
- Group codes for a central cashier need the Pix Desktop App 1.1.102 or newer on every booth.

## Step 1: Create the group

1. Open **Booths** in the Pixture dashboard and tap **+ New Booth**.
2. Switch to the **Multi-Booth** tab.
3. Enter a **Name** for the group and set **How many photo booths?**.
4. Create the group. It appears in the Booths list with the type Multi-Booth, and each booth inside it is a normal booth.

To add booths later, open the group and tap **+ Add booths**. **Rename** changes the group name.

## Step 2: Set up the group once

Open the group from the Booths list. It has six tabs.

1. **Photo Booths**: the booths in the group and their status.
2. **Templates**: pick the templates every booth in the group offers.
3. **UI Project**: pick the kiosk design for the group.
4. **Queue**: tap **Set up shared queue** to run one queue for the whole group, then **Open TV view** to show it on a screen at the venue.
5. **Cashier**: see the next step.
6. **Settings**: the pricing form, the same as a single booth's Pricing tab.

Tap **Save for all booths** to push the tabs' settings to every booth in the group.

## Step 3: Choose how guests pay

On the **Cashier** tab, **How guests pay** has two options.

- **Pay at the booth**: each kiosk shows its own Payment screen, as a single booth does.
- **Central cashier**: guests pay one person at a counter and receive a code. Add what the cashier sells under **Products** with **Add product**. Each sale produces an 8-character group code that works at any booth in the group. On a Central Cashier booth the kiosk opens the Payment screen straight on the code step, and the code box accepts codes of 6 to 8 characters.

## Step 4: Pair one computer per booth

1. Open each booth from the group's **Photo Booths** tab and go to its **Device** tab.
2. Tap **Generate code**, then enter the code in the Pix Desktop App on that booth's computer.
3. Check the licence badge in the kiosk's operator menu. It should read **Pix Pro** or **Pass until** a time. A computer past your subscription's limit is **Blocked**: add devices under **Licenses > Add more devices**, or use a pass on it.

## Regions for many locations

If you run booths in several places, give each booth a region so you can filter by it.

1. Open the booth and go to **Settings > Booth Info**.
2. Under **Region**, tap **+ New**, name it in **Create Region**, then **Save Changes**.

The Booths list, the Dashboard and Health pages filter by region with **All Regions**.

## Tips

- Name booths and groups by venue or position ("Hall A left"). Labels on the computers themselves save confusion when you set up several before shipping them out.
- Get one booth fully working, then copy its settings to the others with **Save for all booths**.
- Each location needs its own reliable internet. Two booths at one venue can share a connection; two venues cannot.

## Related

- [Booth Management](../dashboard/booth-management.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Sharing One Printer Between Booths](./shared-printer.md)
- [Add or Move a Computer](../tutorials/add-or-move-a-computer.md)
