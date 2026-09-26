---
sidebar_position: 8
title: Payment Setups by Use Case
description: The payment setup that fits each way of running a photo booth, from event rentals and self-service mall booths to multi-booth studios and pop-up boxes, with the Pixture settings for each.
tags: [tutorials, payments, use-cases, events, self-service, pop-up]
---

# Payment Setups by Use Case

There are four ways to run a photo booth business, and each one gets paid differently. An event booth is paid by the client before the day starts, a mall booth is paid by every guest, a studio has a person at the counter, and a pop-up box works wherever the crowd is this weekend, sometimes without reliable internet. This page matches each of them to a Pixture setup, so you can pick one and follow the tutorial for it. For the whole setup of each model, not only payments, see [Use Cases](../use-cases/overview.md).

| You run | Who pays, and when | Setup in Pixture | Hardware |
|---|---|---|---|
| **Event rental** (weddings, corporate dinners, launches) | The client pays a flat fee per event; guests pay nothing | An **Event** with **Free for guests**, no Payment screen | None |
| **Self-service booth** (mall corridor, café, campus, cinema lobby) | Every guest, at the booth, unattended | A gateway with **QR Pay** and **Voucher**, packages, optional card reader or coin box | Optional: Stripe Terminal reader, or a coin or note acceptor and Nayax reader on a CASH-Interface2 board |
| **Multi-booth studio** (four to eight booths, one attendant) | Every guest, at the counter or at the booth | One gateway for all booths, **Voucher codes** for cash at the counter, prices per booth | Optional card reader at the counter |
| **Pop-up box** (markets, festivals, campus fairs) | Every guest, at the stall, often on mobile data | A gateway for QR, **online packages** and voucher codes that work offline, a Day Pass per event day | None |

## Event Rental

The booth travels to the customer. The client pays you a flat fee per event, typically a few hundred to a couple of thousand dollars for a few hours, and their guests use the booth for free. Payment in Pixture is therefore not about charging guests but about making sure nobody is asked to pay.

**Set it up**

1. Create an **Event** for the date, with its own name, client and venue. A fresh event is **Free for guests** with **Link Sharing** on, so booths that follow the event skip the Payment screen and every guest gets their photos by QR gallery. See [Run an Event](./run-an-event.md).
2. Assign the booths you bring to the event. They follow the event's dates and switch back the night after it ends.
3. If the client sells something at the event, say a sponsor charging for a keepsake print, give the event its own gateway under **Edit > Payment gateway** so the money goes to their account. See [Create a Payment Gateway](./create-a-payment-gateway.md), Step 8.
4. Extras that earn on top of the fee: **Sell AI Portraits** on the guest share page, and an event template pack or exclusive templates the client approves in advance.

**What to watch**

- Keep **Payment on this booth** on the booth's Pricing tab for your self-service work; the event setting overrides it while the event runs.
- A computer you only use at events can run on a **Day Pass** instead of a monthly licence. See [Add or Move a Computer](./add-or-move-a-computer.md).
- Planners want a vendor who never causes a complaint. Test the booth with a free voucher the day before, and put the operator PIN on the booth so guests cannot reach the menu.

## Self-Service Booth

A fixed unit in a mall corridor, a café, a campus lobby or a cinema foyer that runs itself: guests walk up, pay per session, take their photos and leave with a strip. This is the model where the payment setup matters most, because there is nobody to help a guest who cannot pay.

**Set it up**

1. Connect a gateway: **DOKU** for QRIS in Indonesia, **Stripe** elsewhere. Run the test charge. See [Create a Payment Gateway](./create-a-payment-gateway.md).
2. On the booth's **Pricing** tab, switch **Payment on this booth** on, set the **Session price** and the **Print format** for your paper, and add **Double** and **Group** packages if you want the upsell. See [Accept Payments at the Booth](./accept-payments.md).
3. In the UI Editor, keep **QR Pay** and **Voucher** on. Add **Debit/Credit Card** if you install a reader, **Coin Acceptor** if you install a coin or note box. See [Take Card, Coin and Cash Payments](./connect-a-coin-or-card-reader.md).
4. Set the **Payment timeout** on the Time sub-tab so an abandoned payment returns the booth to the Start screen, and turn on **Extra print price** if guests may buy more prints on the Sharing screen.
5. Add a **Menu PIN** on the booth's Settings tab and check the **Health** page for printer paper, camera and online status from wherever you are.

**Cash without a person.** Outside Indonesia a **Stripe Terminal** reader is the simplest card option. For coins and notes anywhere, a CASH-Interface2 kit with the **start-gate** setup keeps the booth honest: the guest pays first, the machine starts by itself, and the session is recorded at the session price. Use the **pay on the Payment screen** setup instead if you sell packages and your reader can charge a variable amount. In Malaysia, a Transpire QR terminal on the same kind of board lets guests pay by DuitNow QR at the booth; see [Setup B4](./connect-a-coin-or-card-reader.md#setup-b4-a-duitnow-qr-terminal-in-malaysia-transpire-qr).

**What to watch**

- Your landlord is a partner: a revenue share of 20 to 50 percent is common for a café or corridor spot. **Transactions > Export Excel** for the month is your share statement.
- A stale frame set is the fastest way to lose repeat customers. Rotate templates from the dashboard; the booth picks them up on its own.
- Guests who cannot scan a QR code still need a way to pay. **Voucher** plus the online shop link covers a guest whose wallet app is out of credit: they buy a package on their phone and type the code.

## Multi-Booth Studio

The Korean-style studio: four to eight booths side by side in one unit, each with its own theme, and one attendant covering all of them. Revenue scales per booth while rent and staff stay flat, so the setup is about running every booth from one place and letting the attendant take money without touching each machine.

**Set it up**

1. Connect one gateway. It is the **Organization Default**, so every booth in the studio charges through it, in the same currency.
2. Price each booth on its own **Pricing** tab, so a themed booth can cost more than the plain one, and put a **Print format** on each that matches its printer's paper.
3. For cash at the counter, generate a batch of **voucher codes** with a **Value per Code** equal to the session price. The attendant sells codes; guests type them on any booth. That keeps cash sales in **Transactions** like every other sale. See [Take Card, Coin and Cash Payments](./connect-a-coin-or-card-reader.md), Setup D.
4. Consider **Studio Mode** for the timed, pick-your-favourites session that studios sell, with prices per time package. See [Studio Mode](./studio-mode.md).
5. Keep templates in folders per booth or season, assign them from **Pix Design**, and compare booths on the **Transactions** booth filter and the **Health** page.

**What to watch**

- Eight booths means eight printers and eight computers to keep in sync. Use the dashboard for every change and never carry designs on a USB stick.
- Once three or four studios open in the same mall, prices drop. Packages (double, group) and extra prints protect the ticket size better than a lower session price.
- A **Menu PIN** per booth and named staff accounts under **Settings > Members** stop an attendant's mistake from spreading to every booth.

## Pop-Up Box

A knockdown box that packs into a car and sets up in under an hour at a market, festival or campus fair. Guests pay per session; you pay a stall fee. Income is bursty, a month's worth in one good weekend, and the internet is whatever the venue has.

**Set it up**

1. Connect a gateway for QR payments, the same one as for a fixed booth.
2. Put the booth's computer on a **Day Pass** for each event day, or on Pix Pro if you go out most weekends. See [Add or Move a Computer](./add-or-move-a-computer.md).
3. Switch on the **online shop link** under **Vouchers** and put it on a sign at the stall. Guests buy a package on their phone, get a code, and the booth accepts it even when the venue's Wi-Fi drops. See [Sell Sessions Online](./sell-sessions-online.md).
4. For cash, take it at the stall and hand over codes from a **voucher batch** generated before you leave, with the event date as the **Expiration Date**.
5. Bring a 4G router or a phone hotspot for the QR payments and the uploads; the booth keeps sessions in its queue and uploads them when the connection returns.

**What to watch**

- A coin acceptor is impractical in a box you assemble on site; codes and QR do the job.
- The booth is your testing ground for frames, prices and locations. Compare weekends on the **Transactions** period filter before you commit to a fixed spot.
- The following you build at pop-ups is what sells events later; keep **Link Sharing** on so every guest leaves with a gallery link and your branding.

## Attended Booth With a Cashier

A café, a hotel lobby or a single booth with staff nearby often ends up between the models: guests can pay at the booth, but many would rather pay the person. Use both: **QR Pay** and **Voucher** on the Payment screen, and a voucher batch at the till with the session price as the code's value. Every sale, by phone or by hand, shows up in the same **Transactions** list.

## Related

- [Create a Payment Gateway](./create-a-payment-gateway.md)
- [Accept Payments at the Booth](./accept-payments.md)
- [Take Card, Coin and Cash Payments](./connect-a-coin-or-card-reader.md)
- [Sell Sessions Online](./sell-sessions-online.md)
- [Run an Event](./run-an-event.md)
