---
sidebar_position: 4
title: Booths
description: The Booths list, creating single and Multi-Booth setups, and every tab on a booth's page from Templates to Settings.
tags: [dashboard, booths, management]
---

# Booths

A **booth** is one kiosk: a place, a computer and the templates, design and prices it runs. Booths are free profiles, so create one per station or venue. What a booth can do depends on the computer paired to it: Pix Pro, watermarked on Pix Starter, or blocked when a Pix Pro account has more computers than devices.

![Booths page of a Pix Pro account: Booth, Type, Region, Device, Plan, Templates columns and Configure buttons](/img/docs/booths-list.webp)

## The Booths List

| Column | What it shows |
|---|---|
| BOOTH | Name and location |
| TYPE | Single or Multi-Booth |
| REGION | The region set on the booth's Settings tab |
| DEVICE | The paired computer, or nothing |
| PLAN | **Pix Pro**, **Blocked**, **Watermarked**, or a dash when no computer is linked |
| TEMPLATES | How many templates are assigned |

Search by name, region, device or plan. **Filter** narrows by region, status (Online or Offline) and plan. Each row has **Configure**, which opens the booth page, and a chevron with **Rename**, **Unlink device** and **Delete booth**.

![Booths row chevron menu: Rename, Unlink device, Delete booth](/img/docs/booths-row-menu.webp)

**Delete booth** takes two steps: **Send verification code**, then the 6-digit code from your email and **Delete**. Photo sessions already captured stay in Gallery and Transactions. A booth whose computer is running Pix Pro cannot be deleted; deactivate that computer on the Licenses page first.

## Creating a Booth

1. Click **+ New Booth**.
2. On the **Single booth** tab, enter a **Booth Name** and an optional **Location**. Name it by place, not by plan: "Grand Mall L2" ages better than "Pro Booth 1".
3. Click **Create**.

![Create Booth modal, Single booth tab, with Booth Name and Location filled](/img/docs/booths-create-modal.webp)

The **Multi-Booth** tab creates a group instead: a **Name** and **How many photo booths?**. A group is several kiosks at one venue sharing a queue and, if you want, a central cashier. Its page has the tabs Photo Booths, Templates, UI Project, Queue (**Set up shared queue**, **Open TV view**), Cashier (**Pay at the booth** or **Central cashier**, with products) and Settings, plus **Save for all booths**. See [Multi-Booth Setup](../guides/multi-booth-setup.md).

![Create Booth modal, Multi-Booth tab: Name and How many photo booths](/img/docs/booths-create-multibooth.webp)

## The Booth Page

![Booth page of a paired Pix Pro booth: Online status, Pix Pro until, property grid and tabs](/img/docs/booth-overview.webp)

The header shows the status pill (**Online** when the computer has checked in within the last 12 minutes, **Offline** when it has not, **Unknown** when no computer is paired), the licence badge ("Pix Pro until", "Day pass until", "Trial until", Watermarked, Blocked, or a dash), "Last seen", and a menu with **Rename Booth**. The property grid below jumps to each part of the setup: Templates, Filters, UI Project, Frame Lab, Session Price, Payment Gateway, Device, Kiosk Settings and Output Settings.

### Templates

**Assigned Templates**, with a category filter and **Manage Templates**. The modal filters Assigned / Not Assigned, categories, sizes and media; tick the templates and click **Save Templates**. See [Assigning Templates](./pix-design/assigning-templates.md).

![Booth Templates tab: Assigned Templates, category filter, Manage Templates](/img/docs/booth-templates-tab.webp)

![Manage Templates modal on a booth: Assigned and Not Assigned, sizes, media, Save Templates](/img/docs/booth-manage-templates-modal.webp)

### Filters

**Booth Filters** and **Manage Filters**: Select all, Assigned / Not Assigned, All Types / Custom, then **Save Filter Assignments**. With no explicit assignment, every filter is available on the kiosk.

![Booth Filters tab: Booth Filters, Manage Filters](/img/docs/booth-filters-tab.webp)

### UI Project

The kiosk design this booth runs, grouped by **Photobooth mode**, **Studio mode** and **Simple mode**. Pick one and click **Save**; the tab then shows "Booth mode". Studio mode needs Pix Desktop App 1.1.98 or newer. See [UI Editor](./pix-design/ui-editor.md) and [Studio Sessions](../desktop-app/studio-sessions.md).

![Booth UI Project tab: dropdown grouped by Photobooth, Studio and Simple mode, Save](/img/docs/booth-ui-project-tab.webp)

### Pricing

Session price, packages, print format, timeout, extra prints, tax and fees, and the **Payment on this booth** switch. See [Booth Pricing](./booth-pricing.md).

### Activity Log

Time, Event and Description for everything that happened on this booth: pairing, online and offline changes, settings saved.

![Booth Activity Log tab](/img/docs/booth-activity-log-tab.webp)

### Device

Pair, rename, unlink or remove the computer. See [Devices and Pairing](./device-management.md).

### Settings

![Booth Settings tab, full page: Output Settings, Payment Gateway, Booth Info, Currency, Menu PIN, Import Transactions, Danger Zone](/img/docs/booth-settings-tab.webp)

| Section | Controls |
|---|---|
| **Output Settings** | **Singles Upload**, **GIF Upload**, **Live Photo Upload**, **Print Output**, then **Save Output Settings**; a **GIF overlay** picker with its own **Save**. Marked Pix Pro on Starter |
| **Payment Gateway** | **Active Gateway**: Organization Default or one gateway from Settings, then **Save** |
| **Booth Info** | Booth Name with **Rename**; Region (**No Region**, or **+ New** to create one), then **Save Changes** |
| **Currency** | **Same as organization** or **Different for this booth**, then **Save Currency**. No conversion: a booth reports in its own currency. Anything other than rupiah needs Stripe; DOKU, Midtrans and Xendit take rupiah only |
| **Menu PIN** | 4 to 8 digits that lock the kiosk's operator menu: **Set PIN**, **Change**, **Disable** |
| **Import Transactions** | **Download CSV Template**, drop a .csv or .xlsx (10 MB, 10,000 rows), **Confirm Import**. **Delete All Imported Data** undoes it |
| **Danger Zone** | **Deactivate Booth**, the same two-step delete as the list |

## Frame Lab

Click the **Frame Lab** cell in the property grid. The page explains the guest flow (Upload, Pay, Get Voucher, Use at Booth, See Result), has the enable switch (Pix Pro), the guest link with **Download QR**, page branding with a live preview, and the configuration: **Price**, **Canvas size** and **Voucher expiry** in hours, then **Save changes**. Recent uploads are listed below. The same settings for every booth at once live in [Marketing Studio](./marketing-studio.md).

![Booth Frame Lab page: How Frame Lab Works, share link and QR, configuration](/img/docs/booth-frame-lab.webp)

## Related

- [Booth Pricing](./booth-pricing.md)
- [Devices and Pairing](./device-management.md)
- [Set Up a Booth](../tutorials/set-up-a-booth.md)
- [Multi-Booth Setup](../guides/multi-booth-setup.md)
