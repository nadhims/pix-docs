---
sidebar_position: 4
title: Public Links
description: Every public web address a guest or customer can see from Pixture, what it shows, and where you turn each one on.
tags: [reference, links, share-page, album, online-shop]
---

# Public Links

Pixture puts a few pages on the open web for your guests and clients. This page lists each one, what it shows and where it is switched on. Pages you use yourself (the dashboard, the docs, the download page) are at the end.

## Share page

**`pixture.io/s/{code}`**, one per photo session.

What the guest sees: their photos, GIF and live photo from that session, with your branding from **Pix Design > Microsite**. On Pix Starter the photos carry the Pixture watermark.

Where it comes from: the QR code on the kiosk's **Sharing** screen, and the QR printed on the sheet if the template has a QR code slot. The page fills as the booth uploads; during a network drop the QR still shows and the photos appear at the link once the booth reconnects.

Photos stay available until you delete them in the dashboard's **Gallery**. Deleted photos are removed for good after 30 days.

## AI portrait shop

**`pixture.io/s/{code}/ai`**, available to beta accounts.

What the guest sees: a shop on their share page where they buy an AI portrait made from their session photos, as a digital file or as a print picked up at the booth. A print purchase gives a 7-character pickup code that the guest types into the voucher box on the kiosk's Payment screen (Pix Desktop App 1.1.110 or newer).

Where it is turned on: open the booth, go to the **Pricing** tab and, under **AI portrait on the share page**, switch on **Sell AI portraits on the share page** and set the price. **Offer a print at this booth** adds the print option.

## Event album

**`pixture.io/album/{slug}`**, one per event.

What the guest sees: every photo from the event, from all its booths, as a public album with a slideshow.

Where it is turned on: open the event in **Events** and switch **Link Sharing** on. **Copy** gives you the link, **Slideshow** opens the full-screen view for a venue screen, and **Embed** gives code for the client's website. Switch Link Sharing off to take the album down.

## Online session shop

**`pixture.io/voucher/{slug}?booth=...`**, one per booth.

What the customer sees: the booth's packages (Single, Double, Group, additional sessions) at the prices from its Pricing tab, paid on their phone. They receive a 7-character code that the kiosk redeems even when it is offline.

Where it comes from: the **Sell online** button on any row of the **Booths** list (link and a QR PNG), the **Sell sessions online** card on the booth's **Pricing** tab, or **Online shop link** on the **Vouchers** page. Needs Pix Desktop App 1.1.101 or newer on the booth.

## Frame Lab guest upload page

A page where guests design and pay for their own frame before their session, then use the code at the booth.

Where it comes from: **Marketing Studio > Frame Lab** shows the shared **Guest upload page** QR and lets you set the **Page banner**, and each booth's Frame Lab settings have **Share with your customers** with the link and **Download QR**. Frame Lab needs Pix Pro.

## Pages for you

| Page | Address | What it is |
|---|---|---|
| Pixture dashboard | `pixture.io` | Sign in to set up booths, design, watch health and manage billing |
| Licenses shortcut | `pixture.io/licenses` | Opens your Licenses page. The kiosk shows it as a QR code under **Manage devices** when Pix Pro or a pass ends on that computer |
| Documentation | `docs.pixture.io` | These pages |
| Download | The **Download** link on pixture.io | The Pix Desktop App for macOS and Windows |

## Related

- [Events](../dashboard/events.md)
- [Sell Sessions Online](../tutorials/sell-sessions-online.md)
- [Marketing Studio](../dashboard/marketing-studio.md)
- [Microsite](../dashboard/pix-design/microsite.md)
