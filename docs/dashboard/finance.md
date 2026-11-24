---
sidebar_position: 7.5
title: Finance
description: Profit and loss for your photobooth business, costs, paper and tax, and partners who share revenue or profit, such as a venue, an investor or staff.
tags: [dashboard, finance, profit, costs, partners, tax]
---

# Finance

**Finance** shows what your business earned, what it cost and who gets what. It has three tabs: **Profit & Loss**, **Costs** and **Partners**. Pick the period at the top: a month and a year, or **All months** for the year so far.

![Finance, Profit & Loss tab for October 2026: Total revenue, Total costs, Net profit and Owner's net, the profit and loss statement, Profit distribution and Performance by unit](/img/docs/finance-profit-and-loss.webp)

Profit & Loss, Costs, paper, tax and booking fees are free on every plan. **Partners** and the PDF statements are part of paid Pix Pro (monthly or yearly). An Event Pass or the free trial does not unlock them.

## Profit & Loss

Four figures at the top: **Total revenue**, **Total costs**, **Net profit** with its margin, and **Owner's share**, what is left for you after partners. When an investor's capital is repaid from your share, the last figure reads **Owner's net**, after the repayment.

The statement below follows the usual order of a profit and loss report:

| Line | What it is |
|---|---|
| Revenue | **Kiosk sales**, **Event sales** and **Booking fees**, each on its own line. Sales are the same numbers as the Dashboard |
| Variable costs | Costs that move with sales: venue revenue shares, **Paper and consumables**, and one-time costs such as event crew |
| Contribution margin | Revenue minus variable costs |
| Fixed costs | Costs that repeat every month: salaries, internet, rent, the Pix Pro subscription, depreciation |
| Profit before tax | Contribution margin minus fixed costs |
| Tax | Each tax you set on the Costs tab |
| Net profit | What the business made, before it is shared |

**Profit distribution**, on the right, shows how the net profit is shared: each partner's share, then **Retained by owner**. A capital repayment appears below it as its own line.

**Performance by unit** lists every kiosk and event with its revenue, net profit and margin. Click a row to open that kiosk or event on its own.

### One Kiosk or Event

The **View** picker at the top shows **All kiosks and events** or one kiosk. Choose one, or click a row in Performance by unit. A single kiosk or event shows its own revenue, its own costs and the partners set on that kiosk. Whole-business partners and costs on the whole business are left out, so the numbers add up to the business only in **All kiosks and events**.

![Finance for one kiosk: Mall Kota's revenue, venue revenue share, paper, internet and camera depreciation, and its contribution margin](/img/docs/finance-one-kiosk.webp)

## Booking Fees

What a client pays you for an event is its **booking fee**. Enter it on the event: open the event in **Events**, then the **Report** tab. The **Money** card comes first.

![Money card of an event: a booking fee and guest sales under Revenue, paper and crew under Costs, and the event's net profit](/img/docs/finance-event-money.webp)

- **Add booking fee** sets the amount, **Edit** changes it and **Remove fee** takes it off. The amount must be above 0.
- The fee needs the event date and counts in that month. Until then, the card shows "Counts in" and the month.
- The card also shows **Guest sales**, what guests paid at the booth, the event's costs and its **Net profit**, over the whole event.
- **Add cost** adds a one-time cost to the event. **Edit costs in Finance** opens the Costs tab.

On Finance, booking fees have their own revenue line, **Booking fees**, and count in the event's numbers. Setting a fee needs **Manage finance**. With only **View finance**, the card shows the figures and an empty fee reads "Not set".

## Costs

![Finance, Costs tab: Fixed costs, Variable costs, Paper with a default paper, and Tax](/img/docs/finance-costs.webp)

**Add cost** asks for a description, an amount, a **Cost type** and where it belongs.

| Cost type | When it counts |
|---|---|
| **One-time** | Once, in the month it happens. A repair, event crew, transport |
| **Monthly** | Every month from its first month until you set a last month. Rent, salaries, internet |
| **Depreciation** | A purchase spread evenly over its useful life. A Rp 18.000.000 camera over 36 months counts Rp 500.000 a month |

**Allocate to** puts the cost on the **Whole business**, one kiosk or one event. A cost on a kiosk counts in that kiosk's own numbers. A cost on the whole business counts only in the business total.

The add-cost dialog has a **Pix Pro subscription** shortcut: it fills in the name and makes it monthly. Type the amount you pay.

![Add cost dialog: Description, Amount, Cost type One-time, Monthly or Depreciation, Month and Allocate to](/img/docs/finance-add-cost.webp)

Editing or removing a cost changes every month it applies to. To stop a monthly cost from now on and keep the months before, edit it and set its last month.

Costs the page adds by itself are marked **automatic**: the paper line, and venue revenue shares from the Partners tab. Change those where they come from.

### Paper

Paper is priced per sheet. **Add paper**, name it (for example "DNP 4R"), enter the cost per sheet and choose its kiosks. One paper is the **Default**, used by every kiosk with no other paper.

Each month, **Paper and consumables** is the sheets each kiosk printed times that kiosk's paper price. Sheets are counted from the sessions, so nothing needs entering by hand.

### Tax

**Add tax** sets a name, a rate and what it is charged on: **Revenue** (for example Indonesia's 0.5% final income tax for small businesses) or **Profit before tax**. Taxes are taken before profit is shared, so every profit share is a share of profit after tax.

## Partners

A partner is anyone who gets part of the money: a **Venue**, an **Investor**, **Staff** or **Other**. A partner's deal is one or more **terms**.

![Finance, Partners tab: a venue on a revenue share, an investor on a profit share with a capital repayment, staff on a profit share, and the owner's remainder](/img/docs/finance-partners.webp)

| Term | What the partner gets | Where it shows |
|---|---|---|
| **Revenue share** | A percentage of revenue, whatever the profit | Variable costs |
| **Profit share** | A percentage of net profit. Nothing in a month with a loss | Profit distribution |
| **Fixed monthly amount** | The same amount every month, such as rent or a retainer | Fixed costs |
| **Capital repayment** | Money they put in, paid back in equal monthly instalments | Below the profit distribution. It is not a cost |
| **Minimum guarantee** | At least this much a month from their percentage terms. The page tops them up when their share falls short | Next to their share |

Each term has a **Scope**: the **Whole business** or chosen kiosks. A share on chosen kiosks is a share of those kiosks together. Revenue shares on one kiosk, or on the whole business, cannot add up to more than 100%. The same goes for profit shares.

![Edit partner dialog: an investor with a 40% profit share on the whole business and a capital repayment of Rp 60.000.000 over 24 months, paid from the owner's share](/img/docs/finance-partner-dialog.webp)

### Capital Repayment

Enter the capital, the number of months and the first month. The instalment is the capital divided by the months, and the last one takes any rounding. **Paid from** decides where it comes from:

- **Owner's share** (the default). Profit is shared first, then the instalment comes out of what you keep. Partners' profit shares are not reduced.
- **Kiosk profit, before split.** The instalment comes off the profit first, and every profit share on the same kiosks is a share of what is left.

An instalment is due every month of the schedule, also in a month with a loss.

### When a Change Applies

Adding or editing a partner asks **Changes apply from**: this month, an earlier month, or **The start**. Months before the chosen month keep their numbers. Choose **The start** to fix a typo or a deal that always applied. A change cannot start in a future month: make it when that month comes.

**Remove** ends a partner from this month. Earlier months keep their numbers. A partner added this month by mistake is deleted completely.

### Event Money

A session at an event counts under the event, not under the kiosk it ran on. A share set on a kiosk sees only that kiosk's own sales. If you share event income with a partner, set their terms on the **Whole business**. Booking fees count there too.

## Statements as PDF

Two PDFs, for your records or to send to a partner. Both cover the period chosen at the top.

- **Export PDF** on the **Profit & Loss** tab downloads the **Profit and Loss Statement**: the statement, the profit distribution and performance by unit. It is for the whole business, so the button is hidden while **View** shows one kiosk or event.
- **Statement** on a partner's row on the **Partners** tab downloads that partner's statement. It shows only their own figures: what they are due and how it is worked out. It never shows another partner's name or your share. A revenue share adds gross sales by week, a profit share the net profit it comes from, and a capital repayment the capital account.

<div className="row">
<div className="col col--6">

![Profit and Loss Statement PDF for October 2026, number PL-2026-10: revenue, costs, net profit, profit distribution and performance by unit](/img/docs/finance-pl-pdf.webp)

</div>
<div className="col col--6">

![Revenue share statement PDF for a venue, number RS-2026-10-001: amount due, the 20% revenue share and gross sales by week](/img/docs/finance-partner-statement-pdf.webp)

</div>
</div>

Each PDF has:

- Your logo from **Pix Design > Brand**, or the first letter of your business name on your accent colour, with the business name and the account owner's email.
- A number: **PL** for Profit and Loss, then **IS** (Investor), **PS** (Profit share), **RS** (Revenue share) or **ST** (Partner statement) for partners. October 2026 is PL-2026-10, and IS-2026-10-003 is partner number 003. Any other period, such as **All months**, gives the year only: PL-2026.
- Your dashboard language, English or Bahasa Indonesia.
- "Management report, unaudited" at the foot, and "Made with Pixture" unless you switched off the [Pixture footer](./pix-design/brand.md#pixture-footer).

The PDFs are part of paid Pix Pro. Without it, **Export PDF** carries a **Pix Pro** tag and opens the Computers page.

## Who Can See Finance

Owners and admins see Finance. For other members, a role needs **View finance** to open the page, and **Manage finance** to add or change costs, paper, tax and partners. Set them under **Settings > Members > Manage Roles**.

## Common Questions

**Why is my revenue different from the Dashboard?** Kiosk sales and Event sales use the same rules as the Dashboard. Finance adds booking fees, so Total revenue is the Dashboard's revenue plus the booking fees of events dated in the same period.

**Where did Expenses, Venues, Reports, Capital, Tax Summary, Invoices and Clients go?** They are part of Finance now. Their old addresses open the matching tab: Expenses and Tax Summary open **Costs**, Venues and Capital open **Partners**, and Reports opens **Profit & Loss**. Invoices and Clients open Finance: enter what a client pays as the event's [booking fee](#booking-fees).

**Can I record a cost that is shared by several kiosks?** Put it on the **Whole business**, or enter a separate cost on each kiosk.

**Can I see next month?** No. The year view and the month picker stop at the current month.

## Related

- [Track Profit and Loss](../tutorials/profit-and-loss.md)
- [Share Revenue and Profit with Partners](../tutorials/share-revenue-and-profit.md)
- [Dashboard Home](./dashboard-home.md)
- [Transactions](./transactions.md)
- [Computers](./billing.md)
