---
sidebar_position: 67
title: Set Your Country, Currency and Language
description: Set the time zone and currency your account reports in, give a booth in another country its own currency and clock, and choose the language of your dashboard and of the booth screens guests see.
tags: [tutorials, settings, currency, timezone, language]
---

# Set Your Country, Currency and Language

In this tutorial you will set your account's time zone and default currency, pick the language guests see on your booths, switch your own dashboard between English and Bahasa Indonesia, and give one booth its own currency and time zone. Pixture has no single "country" setting: these four settings are what make the account fit your country. Allow about 5 minutes.

## When to Use It

- **Right after you sign up.** Pixture fills in a time zone and a currency for you. Check both before you set any price: prices are typed in the currency, and reports count days in the time zone.
- **A booth in another country.** Your account is in Indonesia (IDR) and you put a self-service booth in a Kuala Lumpur mall. Give that booth MYR and the Malaysian time zone; the rest stay in IDR.
- **An Indonesian crew or guests.** Set the booth language to Bahasa Indonesia so the prompts guests read at the booth are in Indonesian, and let each team member pick their own dashboard language.

Do not change the default currency to "convert" your prices: Pixture never converts amounts. To move a whole business to another currency, plan to retype your prices (see the caution in Step 2).

## Before You Start

- Any plan: these settings work on Pix Starter and Pix Pro.
- To save the account settings, your role needs **Manage settings** (owners and admins have it). For a booth's currency and time zone, **Manage booths**. Anyone can change their own dashboard language.
- To charge in another currency, a payment gateway that can charge it. Midtrans and DOKU charge IDR only; Stripe charges most currencies. See [Create a Payment Gateway](./create-a-payment-gateway.md).

## Step 1: Check the time zone

1. In the dashboard, click **Settings** in the sidebar.
2. Click **Preferences**. The **Localization** card holds every setting in this tutorial.
3. Under **Timezone**, pick your zone, for example **Asia/Jakarta**.
4. Click **Save**. The page says "Timezone updated successfully."

![Settings > Preferences with Settings, Preferences, the Timezone list and its Save marked](/img/docs/steps/tutorials-country-currency-language--timezone.webp)

All dashboard dates show in this time zone, and the Day, Week and Month on your reports start and end by its clock. Booths get it at their next sync and show times in it.

## Step 2: Set the default currency

1. Under **Default currency**, pick the currency by its code, such as **IDR · Indonesian Rupiah** or **USD · US Dollar**.
2. Click **Save**. If you are changing an existing currency, read the popup ("Prices are never converted automatically.") and click **OK** to go on.

![Default currency with the currency list and Save marked](/img/docs/steps/tutorials-country-currency-language--currency.webp)

Every booth uses this currency unless it has its own (Step 5).

:::caution Prices keep their numbers
Switching currency never converts anything. A price of 35,000 in IDR becomes 35,000 in USD. Right after a switch, open each booth's **Pricing** tab and retype your prices, packages and voucher amounts. Past sessions keep the currency they were earned in and stay visible under it.
:::

Pixture refuses the switch when it would break something, and says why: your payment gateway cannot charge the new currency, or you have a running or upcoming event that charges money ("Finish or edit your events before changing the currency."), or a booth runs an app too old for the new currency.

## Step 3: Pick the booth language

1. Under **Booth language**, pick **English** or **Bahasa Indonesia**.
2. Click **Save**. The page says "Booth language updated. Kiosks pick it up on their next sync."

![Booth language with its list and Save marked](/img/docs/steps/tutorials-country-currency-language--booth-language.webp)

One setting covers every booth on the account. It changes the prompts the booth app writes for you, such as the photo consent question, the warning before a session times out, "Time's up. No more retakes.", and the popup where guests email their photos. Text you typed yourself in Pix Design (buttons, titles, your own consent text) stays exactly as you wrote it, so write it in the language you want guests to read.

## Step 4: Pick your dashboard language

1. Under **Language**, click **English** or **Bahasa Indonesia**. The page reloads in that language.

![Language with the English and Bahasa Indonesia buttons marked](/img/docs/steps/tutorials-country-currency-language--dashboard-language.webp)

The same switch is in the account menu: click your initials at the top right, then **Language**. The choice is yours only and is kept in this browser, so set it again on another computer or phone.

:::info Not every page is translated yet
Bahasa Indonesia covers the sidebar, the top bar and account menu, the Dashboard home, most of Finance, the login, sign-up and invitation pages and the main pages of the public website. Most other pages, such as Booths, Events, Gallery, Health, Pix Design and most of Settings, still show English. Anything not translated yet shows in English.
:::

## Step 5: Give one booth its own currency and time zone

1. Click **Booths** in the sidebar, open the booth and open its **Settings** tab.
2. Under **Currency**, choose **Different for this booth** and pick the currency.
3. Click **Save Currency**. The page says "Currency set to" the code, and that existing prices were not converted.
4. Under **Time zone**, pick the booth's zone instead of **Same as organization**.
5. Click **Save Time Zone**.

![Booth Settings tab with Settings, Different for this booth, Save Currency, Time zone and Save Time Zone marked](/img/docs/steps/tutorials-country-currency-language--booth-currency.webp)

Now open the booth's **Pricing** tab and set its prices in the new currency. Until you do, the booth shows "This booth is in" the currency "but has no" price in it yet, and sessions run free.

The booth's time zone runs its own clock for promo schedules and the queue line. To undo, choose **Same as organization** and save.

## Check It Worked

- **Settings > Preferences** shows your time zone, currency and booth language after a reload.
- The Dashboard's dates and today's numbers match your local day.
- After the booth's next sync, run a test session: the consent question and other built-in prompts appear in the booth language.
- A booth with its own currency shows prices in that currency on its **Pricing** tab, and its sessions appear under that currency in reports.

## Tips

- **Several currencies, no mixing.** Once your booths trade in more than one currency, a **Showing** row of currency buttons appears at the top of the Dashboard, Transactions, Vouchers and Finance. Each currency has its own figures; nothing is added together or converted.
- **Event prices are in the account currency.** A booth on a running or upcoming event cannot switch to another currency until that event is over.
- **The dashboard labels move with the language.** In Bahasa Indonesia, **Settings** reads "Pengaturan", **Transactions** "Transaksi" and **Finance** "Keuangan". These docs use the English names.
- **Booth language is account-wide.** If one booth needs another language, write that booth's own screens in Pix Design in that language and give it its own screen design.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| Today's sessions show under yesterday | The time zone is wrong | Set the right **Timezone** in **Settings > Preferences** (Step 1) |
| After a currency switch, a Rp 35.000 price reads $35,000 | Amounts are never converted | Retype the prices on each booth's **Pricing** tab |
| "Finish or edit your events before changing the currency." | An event that charges money is running or coming up | Wait until it ends, or edit its payment settings, then switch |
| "Your active payment gateway (...) charges ... only." or "Stripe can't charge ..." | Your gateway cannot take that currency | Pick another currency, or give the booths a gateway that charges it |
| A booth refuses its own currency and names an event | That booth is on a running or upcoming event, whose prices are in the account currency | Switch after the event |
| "This booth is in ... but has no ... price yet" | The booth changed currency and has no price in it | Set prices on the booth's **Pricing** tab |
| The booth still shows English prompts | The booth has not synced since you saved | Wait for its next sync, or restart the Pixture Photobooth app |
| The dashboard went back to English | The language is kept per browser | Pick it again on this browser |
| No **Save** buttons on Preferences | Your role has no **Manage settings** | Ask the owner |

## Related

- [Settings](../dashboard/settings.md)
- [Create a Payment Gateway](./create-a-payment-gateway.md)
- [Add Your Team and Set Roles](./team-and-roles.md)
- [Read Your Dashboard](./read-your-dashboard.md)
