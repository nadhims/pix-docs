---
sidebar_position: 52
title: Set Up a Multi-Booth Group
description: Group the booths at one venue so they share templates, a screen design and prices, sell sessions from one cashier, and run one queue line.
tags: [tutorials, multi-booth, cashier, kiosk, management]
---

# Set Up a Multi-Booth Group

In this tutorial you will group the booths at one venue into a Multi-Booth, give them one set of templates, one screen design and one price list, choose whether customers pay at each booth or at a central cashier, and pair a computer to every booth. Allow about 20 minutes for the dashboard, plus a few minutes per computer at the venue.

## When to Use It

- **A multi-booth studio.** Four booths in one shop should look and cost the same. Set it once for the group instead of four times.
- **A mall with a counter.** Customers pay one cashier for a package (and maybe a keychain or a magnet), get a code, and use it at whichever booth is free.
- **A queue line.** The queue line lives inside a Multi-Booth group, so you need one even for a single busy booth. See [Run a Queue Line](./queue-line.md).
- **Many booths across a city.** Group the booths of each venue, and use **Region** to filter the dashboard by area.

Not needed for one booth that has its own look and prices and no queue: a single booth works on its own.

## Before You Start

- **One computer per booth.** A booth pairs to one computer, and a computer to one booth.
- **A license per computer.** Pix Pro is per computer: Pix Starter runs one computer, so a group of two or more booths needs Pix Pro or an Event Pass on each extra computer. See [Plans & Pricing](../pricing/plans.md).
- **Pixture Photobooth 1.1.102 or newer** on the booths if you sell codes at a central cashier.
- **Templates and a screen design** ready in Pix Design, and a payment gateway in **Settings > Payment Gateway** if customers pay on screen or online.

## Prepare

- **Name by position.** Pixture names the booths after the group ("City Walk Studio 1", "City Walk Studio 2"). Rename them by place ("Hall A left") if staff need to tell them apart, and stick the name on each booth.
- **Decide how customers pay** before you set prices: **Pay at the booth** (each booth shows its own Payment screen) or **Central cashier** (one counter sells codes that work at every booth).
- **For a central cashier, list your products**: what each costs, how many photo sessions it gives, and any item handed over at the counter (a magnet, a keychain).
- **Label the computers** before you take them to the venue, so the right computer pairs to the right booth.

## Step 1: Create the Group

1. Open **Booths** and click **+ New Booth**.
2. Switch to the **Multi-Booth** tab.
3. Type the group's **Name** (the venue, for example "City Walk Studio").
4. Set **How many photo booths?** (1 to 20). Each photo booth is named automatically.
5. Click **Create**.

![Create Booth window with + New Booth, the Multi-Booth tab, Name, How many photo booths? and Create marked](/img/docs/steps/tutorials-multi-booth-group--create-multibooth.webp)

New booths start on Pix Starter; you upgrade their computers under **Computers**. To put booths you already have into the group, open it and click **+ Add booths**, then tick them. **Rename** changes the group's name.

## Step 2: Find Your Way Around the Group

Open the group from the Booths list. It has six tabs:

1. **Photo Booths**: the booths, their status, plan and session price. **Configure** opens a booth; its arrow has **Pairing code**, **Apply pricing to all booths** and **Remove from group**.
2. **Templates**: one set of templates for every booth.
3. **UI Project**: one screen design for every booth.
4. **Queue**: the queue line and the queue display (Pix Pro).
5. **Cashier**: how customers pay, the prices, and what a central cashier sells.
6. **Settings**: the group's name and **Delete Multi-Booth**.

![A Multi-Booth group page with the Photo Booths, Templates, UI Project, Queue, Cashier and Settings tabs](/img/docs/steps/guides-multi-booth-setup--booth-group.webp)

## Step 3: Give Every Booth the Same Templates and Design

1. On **Templates**, click **Manage Templates**, tick the templates and save. Saving gives every booth exactly this set; templates that were on some booths only are replaced.
2. On **UI Project**, pick the screen design in the list and click **Save for all booths**. Leave the default to use the standard Pixture screens.

![Multi-Booth UI Project tab with the design picker and Save for all booths marked](/img/docs/steps/tutorials-multi-booth-group--group-ui-project.webp)

## Step 4: Choose How Customers Pay

1. Open **Cashier**. Under **How guests pay**, pick one and click **Save**:
   - **Pay at the booth**: "Guests pay on the kiosk with the package pricing below."
   - **Central cashier**: "Sell custom products at the counter and online; codes work at every booth here."
2. **With Pay at the booth**, set the **Pricing** below (**Price & packages**, **Time**, **Extra prints**, **Tax & fees**) and click **Save changes**. Saving writes the same pricing to every booth in the group. If the booths had different prices, a warning says "Booths currently have different pricing" and shows which booth the values come from. To copy one booth's pricing to the rest instead, use **Apply pricing to all booths** on that booth's arrow in **Photo Booths**.
3. **With Central cashier**, click **Add product** and fill in **Name**, **Description**, **Price** and an optional **Photo**. Under **Booth sessions** pick **Single** (1 session), **Double** (2), **Group** (4) or **No booth sessions** for merchandise only, add **Extra sessions** if you like, and list **Items handed over at the counter**. Save.
4. Under **Sell sessions online** (or **Sell products online** with a central cashier), **Copy** the link or print the QR code. Customers open it, pay, and get a code.

![Cashier tab with Central cashier picked, two products in the Products table and Add product marked](/img/docs/steps/tutorials-multi-booth-group--group-cashier.webp)

Each central cashier sale gives an 8-character code (shown as four characters, a dash and four more) that works at any booth in the group. The booth opens its Payment screen straight on the code step. A code works until the end of the day after the sale, in the booth's local time (its own time zone, or your account's when the booth has none), on booths with Pixture Photobooth 1.2.53 or newer. Older booths stop at the end of that day in UTC time. The email and the **Tickets** list show the last day it works, as "Valid until".

## Step 5: Pair One Computer per Booth

1. In **Photo Booths**, open a booth's arrow and pick **Pairing code** (or **Configure**, then the **Computer** tab).
2. Click **Generate code** and type the code in the Pixture Photobooth app on that booth's computer.
3. Repeat for every booth. Each row's status changes from **Not paired** once its computer is in.

![A booth Computer tab with the Computer tab and Generate code marked](/img/docs/steps/guides-multi-booth-setup--booth-device-tab-unpaired.webp)

On each computer, check the plan in the operator menu: it should say Pix Pro or an Event Pass. A computer beyond what your plan covers is blocked: add computers under **Computers > Add computer**, or use an Event Pass on it. See [Add a Second Computer or Move Pix Pro](./add-or-move-a-computer.md).

## Step 6: Add Regions When You Run Many Venues (Optional)

1. Open a booth and go to **Settings > Booth Info**.
2. Under **Region**, click **+ New**, name it in **Create Region**, then **Save Changes**.

The Booths list, the Dashboard and Health filter by region with **All Regions**.

## Check It Worked

- The **Photo Booths** tab lists every booth with its computer paired and the same session price.
- Every booth shows the same screen design and template set at the next session.
- With a central cashier, sell a test product from the shop link, type the code on any booth in the group, and the session starts.

## Tips

- **Get one booth perfect first,** then copy its pricing with **Apply pricing to all booths** and save its templates and design for the group.
- **A booth can still differ.** A booth's own **Configure > Pricing** stays editable for a one-off change, until you save the group's pricing again.
- **Sell merchandise at the counter too.** A product with **No booth sessions** and items like a magnet works as a simple counter sale.
- **One internet per venue is fine.** Booths at one venue can share a connection; each venue needs its own.
- **Deleting a group never deletes booths.** **Delete Multi-Booth** ungroups them, and it is refused while any booth's computer is on Pix Pro.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| A cashier code is refused at the booth | The booth runs an app older than 1.1.102, or the code is from another group, or it expired | Update the app; check the code was sold for this group and has not expired |
| "Session codes from this counter need Pixture Photobooth 1.1.102 or newer" on the Cashier tab | No booth in the group runs a new enough app yet | Update the booths; physical items can be sold now |
| One booth shows different prices | Its own Pricing tab was changed after the group was saved | Save the group's pricing again, or **Apply pricing to all booths** from the right booth |
| **+ Add booths** says "Every active booth is already in a group" | Every booth already belongs to a group | Remove the booth from its other group first, or create a new booth |
| **Delete Multi-Booth** is refused | A booth's computer in the group is on Pix Pro | Unlink or move those computers first, or keep the group |
| A computer is blocked after pairing | It is past the computers your plan covers | Add a computer under **Computers > Add computer**, or use an Event Pass |

## Related

- [Multi-Booth Setup guide](../guides/multi-booth-setup.md)
- [Run a Queue Line](./queue-line.md)
- [Set Prices, Packages and Extra Prints](./prices-and-packages.md)
- [Add a Second Computer or Move Pix Pro](./add-or-move-a-computer.md)
- [Booth Management](../dashboard/booth-management.md)
