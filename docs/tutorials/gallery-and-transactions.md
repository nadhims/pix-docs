---
sidebar_position: 12
title: Find a Photo or a Payment
description: Find one customer's photo and send them their link again, download many photos at once, find one payment, check it against your payment gateway, and export the month for your bookkeeping.
tags: [tutorials, gallery, transactions, photos, payments, export]
---

# Find a Photo or a Payment

In this tutorial you will find a photo in the **Gallery** and send the customer their link again, download a batch of photos as a zip, then find a payment in **Transactions**, check it against your payment gateway, and export a month to a spreadsheet. Allow about 15 minutes.

## When to Use It

- **A self-service booth in a mall.** A customer messages you: "I paid but lost my QR code." Find their session by booth and time, open it, and send them the link.
- **Event rental.** After a wedding, filter the Gallery to the event and download every photo for the couple, or export the event's takings for the client.
- **A multi-booth studio.** At the end of the month, export Transactions to Excel for your bookkeeper and compare the total with your payment gateway's own report.
- **Any booth with QR payments.** A customer says they paid but the booth did not start. Find the row, check it with **Validate**, and refund or start a session with full facts.

For totals and trends rather than single items, use [Read Your Dashboard](./read-your-dashboard.md).

## Before You Start

- Any plan: the Gallery and Transactions work on Pix Starter and Pix Pro.
- Your role decides what you see: team members see only their booths, and only roles that can manage the gallery see **Select** and delete. **Sync with payment gateway** needs access to every booth.
- Photos are kept for **60 days** after the session. Anything you want to keep longer, download before then.

## Step 1: Narrow the Gallery

1. Click **Gallery** in the sidebar. Type a booth or template name in **Search booth, template...** and press Enter.
2. Pick one booth in **All Booths** (in Pixture Event the menu is **All Events**, to pick one event).
3. Pick **All**, **Day**, **Week** or **Month**.
4. Click the date to choose a period or your own range.
5. **Select** starts picking photos (Step 3).

![Gallery top bar with search, All Booths, All Day Week Month, the date and Select marked](/img/docs/steps/tutorials-gallery-and-transactions--gallery-filters.webp)

The newest photos come first, each with its booth and time. Search matches booth and template names only, so the fastest way to one customer's photo is booth plus **Day** plus the time they give you.

## Step 2: Send one photo again, or download it

1. Click the photo: the customer's share page opens in a new tab, the same page their QR code opened. Copy its address from the browser and send it to the customer on WhatsApp or email.
2. Hover the photo and click **Download** to save the full-size print file to your computer.
3. The small camera icon under the photo, **Camera settings**, shows what the camera used for this shot, handy when one booth's photos look darker than another's.
4. Hover and click **Delete** to remove the photo from the Gallery and the customer's share page.

<!-- SHOT-NEEDED: dashboard: Gallery photo card on hover with the Download, Delete and Camera settings buttons marked -->

:::caution Delete is final for you
A deleted photo disappears at once, and "This photo will be permanently removed after 30 days." There is no restore button. If you deleted the wrong one, contact Pixture support within those 30 days with the booth and roughly when it was taken.
:::

## Step 3: Download many photos at once

1. Filter first (Step 1), then click **Select**.
2. Tick photos, or click **Select All** for everything in the current filter. In Select mode a click anywhere on a photo ticks it.
3. Click **Download Selected** to get one zip, or **Delete Selected** to remove them.

![Gallery in Select mode with three photos ticked and Select All and Download Selected marked](/img/docs/steps/dashboard-gallery--gallery-select.webp)

The zip has one folder per session, named by date, time and share code, with every file the session made: the print (or video), the GIF, the single shots and so on. Photos older than 60 days have no file any more and are left out. For every photo of an event at once, **Download all** on the event page is faster.

## Step 4: Find a payment

1. Click **Transactions** in the sidebar. Search a booth or template name.
2. Pick one booth in **All Booths**.
3. Pick **Day**, **Week** or **Month**.
4. Click the date to choose your own start and end dates.

![Transactions top bar with search, All Booths, Day Week Month and the date marked](/img/docs/steps/tutorials-gallery-and-transactions--tx-filters.webp)

In **Pixture Event** the page is called **Event sales** and lists only event money. If your booths sell in more than one currency, pick it in the **Showing** pills: totals are never converted or added up.

## Step 5: Read the totals and the row

1. **Total Revenue**: every successful payment in the period, sessions, Frame Lab and sales with no session such as online vouchers. It matches the Dashboard for the same period.
2. **Payment Success**: how many payment attempts went through ("622 paid / 27 failed"). A sudden drop points at the gateway or the venue's internet.
3. **Payment** on each row: **Success**, **Pending**, **Failed**, **Refunded**, **Voucher**, or **Staff** (started with the booth PIN, not a sale).
4. **Type**: Promo, Ticket, Package, Bonus, Frame Lab, Imported, or **Orphan Payment** (the gateway confirmed a payment that no photo session claimed, often a customer who paid and walked away).

![Transactions with Total Revenue, Payment Success and the Payment and Type columns marked](/img/docs/steps/tutorials-gallery-and-transactions--tx-read.webp)

Rows from an event carry an event chip, so a client's takings are easy to pick out.

## Step 6: Check a payment and export the month

1. **Validate** (the magnifier in **Actions**, on paid, pending and failed rows) asks your gateway about this one payment and shows **Ours** next to **Gateway**, with "Amount mismatch" or "Status mismatch" when they differ.
2. **Sync with payment gateway** opens **Gateway Sync**: pick a **Start Date** and **End Date** and click **Run Sync**. Payments your gateway confirmed but the booth missed (for example when the venue's internet dropped mid-payment) are added.
3. **Export Excel** downloads the filtered list as an .xlsx file.

![Transactions with the Actions column, Sync with payment gateway and Export Excel marked](/img/docs/steps/tutorials-gallery-and-transactions--tx-tools.webp)

Pixture has no refund button: refund in your payment gateway's own dashboard.

## Check It Worked

- Run a test session: it appears first in the Gallery, and its click opens the share page the booth's QR code showed.
- A zip from **Download Selected** opens with one folder per session.
- The **Export Excel** file lists the same rows as the page for the same filters.

## Tips

- **Ask for booth and time.** "Grand Mall, about 4 pm Saturday" finds a photo in seconds; a name does not, since the Gallery has no customer names.
- **Reconcile weekly, not monthly.** Run the same week in Transactions and your gateway's report. A payment the gateway has and Transactions lacks: run **Sync with payment gateway** for that day before you assume it is lost.
- **Orphan Payment = someone paid for nothing.** Check it with **Validate**, then refund it in your gateway or invite the customer back for a session.
- **Delete rehearsals.** Test sessions count on the Dashboard. Filter to the booth and day, **Select All**, **Delete Selected**.
- **Back up before day 60.** For a client who wants their event photos long term, download the zip in the first weeks.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| A photo tile says **Expired** | It is more than 60 days old and its files are deleted | Nothing can bring it back; download earlier next time |
| Search finds nothing | Search matches booth and template names, not customers or codes | Clear the search and filter by booth and day |
| No **Select** button | Your role cannot manage the gallery | Ask the owner to change your role |
| A paid customer's session is missing in Transactions | The booth lost internet during payment | **Sync with payment gateway** for that day |
| No **Sync with payment gateway** icon | Your role covers only some booths | Ask someone with access to every booth |
| Event money is not in the list | You are in Pixture Kiosk, which leaves out event sales | Switch to Pixture Event (**Event sales**) or the Overview |
| Totals differ from my gateway | Test (sandbox) payments are never counted, and each sale belongs to the day its money settled | Compare live payments by settlement date |

## Related

- [Gallery](../dashboard/gallery.md)
- [Transactions](../dashboard/transactions.md)
- [Read Your Dashboard](./read-your-dashboard.md)
- [Create a Payment Gateway](./create-a-payment-gateway.md)
- [Share Revenue and Profit with Partners](./share-revenue-and-profit.md)
