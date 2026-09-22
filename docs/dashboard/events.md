---
sidebar_position: 3
title: Events
description: Book your booths for a wedding, expo or festival with their own dates, pricing, templates and a public album. An event runs itself from creation to the day after its last date.
tags: [dashboard, events, album]
---

# Events

An **event** is a booking pointed at your booths: a set of dates, a client and a venue, with its own pricing, templates, kiosk design and a public album of everything captured. The event runs itself. It is **ONGOING** from the moment you create it when today falls within its dates, it ends by itself the day after its last date, and its booths follow the dates plus one night of grace, so a party that runs past midnight still counts. There is no Start or End button.

![Events page with one ongoing event card](/img/docs/events-list.webp)

## The Events List

Each event is a card with its cover photo, dates and status. The bar above it has a search box ("Search name, client, venue..."), **Day / Week / Month** pills, **Select** for bulk actions, **Delete** for the selected events, and **+ Create Event**.

## Creating an Event

1. Click **+ Create Event**.
2. Fill in the form below. The date is prefilled with today and the end date is optional.
3. Save. The event is live for its dates from that moment.

![Create Event modal, full form: Pay Per Session, Booths, Kiosk UI, Templates](/img/docs/events-create-modal-full.webp)

| Field | What it is |
|---|---|
| **Event Name**, **Client**, **Venue** | Shown in the header and searchable in the list |
| **Event date**, **End date** | One day or a range |
| **Start time**, **End time** | The hours shown on the event page |
| **Booths** | Tick the booths that run this event. A booth already paired to a permanent kiosk is hidden unless it has run an event before |
| **Pay Per Session** | On: guests pay at the kiosk with the **Session price**, **Double session price**, **Group session price** and **Additional session price** you enter here. Off: every session is free, for a hosted wedding or a sponsored booth |
| **Payment gateway** | The gateway that takes this event's payments. Leave it on the organization default unless the client needs another |
| **Kiosk UI** | The kiosk design every booth shows during the event |
| **Templates** | The print templates guests can pick |

## The Event Page

![Event page: name, date, ONGOING chip, FREE FOR GUESTS badge, Link Sharing switch, overview cards, Album, Setup and Report tabs](/img/docs/event-detail.webp)

The header shows the name, dates and times, the status chip (**ONGOING** while today is within the dates, **Ended** afterwards), a **Paid sessions** or **FREE FOR GUESTS** badge, "for" followed by the client's name, the venue and **Edit**.

The overview cards count Sessions, Prints, Revenue and Booths, show the upload queue (Uploaded, Uploading, then "All photos uploaded"), the **Link Sharing** switch with the album URL and **Copy**, and recent activity.

Link Sharing is on by default. The public album lives at `pixture.io/album/<slug>`; share the link or the QR with the client and their guests. Switch it off to make the album private.

The toolbar has **Download all** (every photo as one zip), **Embed** (an iframe snippet for the client's website), **Analytics** (sessions and prints by hour), **Slideshow** (a full-screen loop of the album, shown while sharing is on) and **Delete Event**.

![Embed modal for the public event album](/img/docs/event-embed-modal.webp)

## Tabs

### Album

Everything captured during the event, newest first, with a booth filter, **Select** and **Delete**.

### Setup

![Event Setup tab: Booths, Booth mode (Photo, Video, 360 Slow-mo), Template, Kiosk UI, Gallery](/img/docs/event-setup.webp)

- **Booths.** Each booth on the event with its pairing state, **Pair Booth** (a pairing code for a new computer), **Unlink** and **Remove**. **+ Add booth** opens the Add booths modal: **Add to event** for booths that are ready, **Add devices** for booths whose computer has no Pix Pro yet, and **Create booth** when you need a fresh one.
- **Booth mode.** **Photo**, **Video** or **360 Slow-mo** (marked SOON). The mode is set per event, so every booth on it records the same way. Video shows its own settings: **Display text before recording**, **Timeline Preset**, clip duration and speed, **Soundtrack**, **Overlay** and a **Preview**. See [Event Video Modes](../desktop-app/event-video-modes.md).
- **Template.** "Assign at least 1 template. Until you do, guests at this event have nothing to pick." **Choose a template** opens the free Pixture template packs, when packs are available: each pack brings its print layouts, a GIF overlay and a matching kiosk look, and **Use this pack** copies all three into the event. **Manage Templates** picks from your own templates; **Image overlay** sets the frame burned into GIFs and videos. The event's template set is exclusive: the booth's own templates are not offered while the event runs.
- **Kiosk UI.** **Manage UI Project** keeps the booth's own kiosk design or pins one to the event.
- **Gallery QR.** Shows the album's QR code on the kiosk so guests find their photos. Click **Save** after changing it.

![Add booths modal on an event](/img/docs/event-add-booths-modal.webp)

### Report

Per-booth health for the event: camera, printer, paper, memory and disk, sessions, prints and active hours, followed by "Incidents during the event".

![Event Report tab](/img/docs/event-report.webp)

## Editing and Deleting

**Edit** opens the Edit Event modal with the name, client, dates, times, venue, Pay Per Session prices and payment gateway. Booths, kiosk design and templates are changed on the Setup tab. **Delete Event** on the event page works at any time, even while the event is live (the list's bulk **Delete** skips ongoing events); the booths and their photo sessions stay in your account, only the event and its album go away.

## Licences, Pricing and Transactions

- Each booth on an event needs Pix Pro on its computer or an unspent Day Pass in your pool. **Licenses > Events** lists every event with **Ready**, **No booth** or "N without Pix Pro or a pass". Buy passes on the [Licenses](./billing.md) page; a pass is used from the kiosk's operator menu on the day.
- While the event runs, its session price, packages and gateway replace the booth's own. Tax, fees and currency stay the booth's. The kiosk shows the Payment screen when the event charges and skips it when the event is free.
- Photo sessions captured during the event carry an event chip on [Transactions](./transactions.md), so the client's takings are easy to pull out.

## Related

- [Run an Event](../tutorials/run-an-event.md)
- [Licenses](./billing.md)
- [Event Video Modes](../desktop-app/event-video-modes.md)
- [Public Links](../reference/public-links.md)
