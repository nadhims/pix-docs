---
sidebar_position: 0
title: How Pixture Works
description: The words and pieces of Pixture in one page, the booth, the Pix Desktop App, the dashboard, templates, UI projects and the share page, and how they fit together.
tags: [getting-started, concepts, glossary]
---

# How Pixture Works

Pixture is software for running a photobooth business. Before you set anything up, it helps to know the handful of words the rest of these docs use and how the pieces connect. This page covers them in the order you meet them. For any other word, see the [Glossary](../reference/glossary.md).

![How Pixture fits together. At your venue, the booth: a computer running the Pix Desktop App, with a camera, a printer and a touchscreen, where a guest runs a photo session and leaves with a print and a QR code. Online at pixture.io, the dashboard: booths, Pix Design (templates, UI projects, microsite), events, payments and licenses, and the gallery, transactions and health. The dashboard sends designs and prices to the booth, the booth sends back photos, sessions and status, and the guest scans the QR code to open their share page on their phone.](/img/docs/how-pixture-works.svg)

## The Three Places

Everything in Pixture happens in one of three places:

1. **At your venue**, the **booth**: the photobooth guests stand in, with a computer, a camera, a printer and a screen.
2. **Online at pixture.io**, the **dashboard**: where you set up booths, design what guests see, set prices and read your numbers. You can use it from any browser, including your phone.
3. **On the guest's phone**, the **share page**: where each guest downloads their photos after scanning the QR code on the booth.

The dashboard and the booth stay in sync over the internet. Change a price or a design in the dashboard and the booth picks it up by itself; take a photo at the booth and it appears in the dashboard.

## At Your Venue

**Booth.** The photobooth guests use: a computer with a touchscreen, a camera and usually a printer, in whatever cabinet, box or stand you built or bought, where guests take photos of themselves and walk away with prints and digital copies. Each booth also has its own page in the dashboard (below), so "booth" means the same thing in both places.

**Computer.** The Mac or Windows PC inside the booth. One computer runs one booth. Pixture's paid plan, Pix Pro, is bought per computer; the dashboard also calls a computer a **device**.

**Pix Desktop App.** The Pixture app you install on the booth computer. It runs the screens guests touch, drives the camera and printer, and talks to the dashboard. See [Install the Pix Desktop App](./download-desktop-app.md).

**Camera and printer.** A camera body on USB, or a webcam, and a photo printer. See [Supported Cameras](../reference/supported-cameras.md) and [Supported Printers](../reference/supported-printers.md).

**Photo session.** One guest's (or group's) turn at the booth: start, pay, pick a template, take the photos, choose a filter, then print and share. Sessions are what the dashboard counts and what you charge for.

**Operator menu.** The booth's hidden staff menu, opened by tapping the top-right corner twice. Camera, printer and payment hardware settings live there, locked with a **Menu PIN**. See [Operator Menu](../desktop-app/admin-panel.md).

## In the Dashboard

**Dashboard.** Pixture's web app at pixture.io, where you run the business. See [Know Your Way Around the Dashboard](./access-dashboard.md).

**The booth's page.** Every booth has a page in the dashboard, under **Booths**, with its templates, screen design, prices, settings and history. You connect the booth's computer to it once, with a 6-digit **pairing code**, and from then on everything you set there reaches that booth. See [Pair Your First Booth](./pair-your-first-booth.md).

**Pix Design.** The design studio inside the dashboard. It holds everything guests see:

- **Template**: the print layout, a design with photo slots that the guest's photos are placed into. It becomes the printed photo and the picture on the share page. Made in the **Template Editor**.
- **UI project**: the booth's screen design, every screen the guest touches, from the Start screen to Sharing. Made in the **UI Editor**.
- **Microsite**: the look of the guest's share page, your logo, colours and buttons.
- **Filters and overlays**: colour looks guests can choose, and artwork drawn over GIFs and videos.

**Event.** A dated job, such as a wedding or a launch, with its own booths, templates, look and prices, and an album for your client. See [Events](../dashboard/events.md).

**Payment gateway.** Your own merchant account (DOKU in Indonesia, Stripe elsewhere) that lets guests pay at the booth. Pixture never holds the money. See [Create a Payment Gateway](../tutorials/create-a-payment-gateway.md).

**Licenses.** The page where you put Pix Pro on your computers. See [Plans & Pricing](../pricing/plans.md).

## On the Guest's Phone

**Share page.** The page that opens when a guest scans the QR code on the booth's Sharing screen. It holds their finished photo, the single shots, the GIF and the live photo, each with a download button. **Microsite** is the name for the share page's design, which you set in Pix Design.

**Album.** For events: one public page with every photo from the event, for your client to share with their guests.

## Words That Sound Alike

| These words | The difference |
|---|---|
| Booth, photobooth | The same thing: the machine guests use at your venue. Its settings live on the booth's page in the dashboard |
| Computer, device | The same thing: the PC inside a booth. The Licenses page calls it a device |
| Template, UI project | A **template** is what gets printed; a **UI project** is what the screen shows |
| Share page, microsite, album | The **share page** is one guest's photos; the **microsite** is how every share page looks; the **album** is every photo of an event |
| Pixture, Pix | **Pixture** is the company and the dashboard; **Pix** names its products: Pix Desktop App, Pix Design, Pix Pro, Pix Starter, Pix AI |

## Where Things Are Set

| You want to change | Where |
|---|---|
| Prices, packages, which templates a booth offers | Dashboard, the booth's page |
| What the print looks like | Dashboard, Pix Design > Template Editor |
| What the booth screens look like | Dashboard, Pix Design > UI Editor |
| What the guest's share page looks like | Dashboard, Pix Design > Microsite |
| Camera exposure, printer, coin or card reader | At the booth, operator menu |
| Pix Pro on a computer | Dashboard, Licenses |

## Next Steps

- [Getting Started](./overview.md), the fifteen-minute path to your first photo session
- [Use Cases](../use-cases/overview.md), how Pixture fits a self-service booth, event rentals, a multi-booth studio or a pop-up
- [Glossary](../reference/glossary.md), every other word, A to Z
