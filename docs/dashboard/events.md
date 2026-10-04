---
sidebar_position: 3
title: Events
description: Create an event for a wedding, expo or festival with its own dates, booth mode, outputs, pricing, templates and public album, pair the computers that run it, and let it run itself from creation to the day after its last date.
tags: [dashboard, events, album, event-pass]
---

# Events

An **event** is a booking: a set of dates, a client and a venue, with its own booth mode, outputs, pricing, templates, screen design and a public album of everything captured. You **pair the computers** that run it, straight from the event page. The event runs itself. It is **ONGOING** from the moment you create it, it ends by itself the day after its last date, and its computers follow the dates plus one night of grace, so a party that runs past midnight still counts. There is no Start or End button.

![Events page with one ongoing event card](/img/docs/events-list.webp)

## The Events List

Each event is a card with its cover photo, dates and status. The bar above it has a search box ("Search name, client, venue..."), **Day / Week / Month** pills, **Select** for bulk actions, **Delete** for the selected events, and **+ Create Event**.

## Creating an Event

**+ Create Event** opens a short wizard. A progress bar across the top shows where you are: **Details**, **Templates**, **Screens**, **Payment**, then **Pair**, which happens on the event page once it exists.

![Create Event wizard, Details step with Booth mode and Output](/img/docs/event-create-wizard.webp)

| Step | What you set |
|---|---|
| **Details** | **Event Name**, **Client**, **Booth mode**, **Output**, **Event date** (prefilled with today), **Start time**, **End time** and **Venue** |
| **Templates** | The print templates guests can pick at this event |
| **Screens** | The **Appearance**: the screen design the booth shows during the event. The list shows only designs made for the event's booth mode |
| **Payment** | **Pay Per Session**: on, guests pay at the booth with the **Session price**, **Double session price**, **Group session price** and **Additional session price** you enter here; off, every session is free, for a hosted wedding or a sponsored booth. **Payment gateway**: leave it on the organization default unless the client needs another |

**Create event** saves it and opens the event page with **Pair a computer** ready.

### Booth Mode

Each event has **one booth mode**, picked in the wizard and changed later with **Change** on the event page. The picker groups the modes:

| Group | Mode | What guests do |
|---|---|---|
| Photo | **Photobooth** | Pick a template and shoot one photo per slot |
| Photo | **Studio** | A timer runs the session; guests shoot freely, then pick their photos. Needs a Studio UI project from Pix Design first |
| Photo | **AI Photobooth** | Marked **Soon** |
| Video | **Video** | Record a short clip with your overlay, for a video guest book. See [Event Video Modes](../desktop-app/event-video-modes.md) |
| Video | **360 Slow-mo** | Marked **Soon** |

Changing the mode keeps the paired computers paired. Each booth picks the new mode up the next time it shows its Start screen. If the event's screen design does not fit the new mode, the event switches to one that does (a Studio design for Studio, the Default Layout for Photobooth and Video) and says so.

### Output

**Output** is what guests get from a photo session, and it follows the booth mode. For photo modes, tick any of four, all on by default:

| Output | What it is |
|---|---|
| **Prints** | The printed strip or card from the booth's printer |
| **GIF** | The shots as a short looping animation to share |
| **Live photo** | A moving clip of each shot, like a phone Live Photo |
| **Singles** | The raw photos straight from the camera, without the template |

For Video the output is the video itself. Every computer paired to the event follows the event's outputs, whatever its booth had before.

## The Event Page

![Event page: name, date, ONGOING chip, FREE FOR GUESTS badge, Link Sharing switch, overview cards, Album, Setup and Report tabs](/img/docs/event-detail.webp)

The header shows the name, dates and times, the status chip (**ONGOING** from creation, **Ended** after the last date), a **Paid sessions** or **FREE FOR GUESTS** badge, "for" followed by the client's name, the venue and **Edit**.

The overview cards count Sessions, Prints and Revenue, show the upload queue (Uploaded, Uploading, then "All photos uploaded"), the **Link Sharing** switch with the album URL and **Copy**, and recent activity.

Link Sharing is on by default. The public album lives at `pixture.io/album/<slug>`; share the link or the QR with the client and their guests. Switch it off to make the album private. The booth always shows the album's QR code on the share screen.

The toolbar has **Download all** (every photo as one zip), **Embed** (an iframe snippet for the client's website), **Analytics** (sessions and prints by hour), **Slideshow** (a full-screen loop of the album, shown while sharing is on) and **Delete Event**.

![Embed modal for the public event album](/img/docs/event-embed-modal.webp)

## Tabs

### Album

Everything captured during the event, newest first, with a filter by computer, **Select** and **Delete**.

### Setup

![Event Setup tab: setup progress, Computers card, Booth mode, Output and Appearance](/img/docs/event-setup-computers.webp)

- **Setup progress.** The same five steps as the wizard. Click a step to jump to the part of the page where it is done. The bar disappears once every step is done.
- **Computers.** Every computer paired to the event, with its state:

  | State | Meaning |
  |---|---|
  | **Pix Pro** | The computer runs on Pix Pro |
  | **Event Pass** with a countdown | An Event Pass is running; the countdown shows the hours left, and the info icon shows when it ends |
  | **Needs license** | Paired, but it has no Event Pass or Pix Pro yet. The booth will not start sessions until it has one |
  | **Not paired** | A pairing code was made but no computer used it yet |

  Each row has **Extend 24h** (for a running Event Pass), **Use Pix Pro** (when a Pix Pro is free in your account) and **Unlink**. A line above the list says "You're covered", or how many computers still need an Event Pass or Pix Pro, with **Buy license**.
- **Pair a computer.** Shows a 6-digit code to enter in the Pixture desktop app. A code is only given when a license is available for the computer: an unused Event Pass, or a Pix Pro that is on no computer. Otherwise the popup says "Get a license first" with **Buy license**, and after you pay, the dashboard brings you back to the event with the code ready.
- **Booth mode**, **Output** and **Appearance.** Each is a box showing the current choice, with **Change**. Appearance lists only screen designs made for the event's booth mode.
- **Template**, **Countdown**, **Mirror** and **Overlay** (photo modes). **Template** reads "Assign at least 1 template. Until you do, guests at this event have nothing to pick." **Add templates** and **Manage Templates** pick from your own templates; **Browse template packs** opens Pixture's free template packs, when packs are available: each pack brings its print layouts, a GIF overlay and a matching booth look. The event's template set is exclusive: the booth's own templates are not offered while the event runs. Video shows its own settings instead; see [Event Video Modes](../desktop-app/event-video-modes.md).

### Report

Per-computer health for the event: camera, printer, paper, memory and disk, sessions, prints and active hours, followed by "Incidents during the event".

![Event Report tab](/img/docs/event-report.webp)

## Editing and Deleting

**Edit** opens the Edit Event modal with the name, client, dates, times, venue, Pay Per Session prices and payment gateway. Computers, booth mode, outputs, screen design and templates are changed on the Setup tab. **Delete Event** on the event page works at any time, even while the event is live (the list's bulk **Delete** skips ongoing events); the photo sessions stay in your account, only the event and its album go away.

## Licenses, Pricing and Transactions

- **Each computer on an event needs a license**: Pix Pro, or an **Event Pass**, which is 24 hours of Pix Pro on one computer, starting when you use it at the booth. **Buy license** opens a choice between **Event Pass** (for an event) and **Pix Pro** (for regular use), each with its own checkout on the [Devices](./billing.md) page. A computer without a license stays paired but does not start sessions; there is no watermarked mode on an event.
- **At the booth**, a computer that needs a license shows "Use an Event Pass for today?" with **Use Event Pass**, or **Use Pix Pro** if a Pix Pro is free in your account. See [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md).
- **Longer events.** When an Event Pass is running, **Extend 24h** on its row adds 24 hours from one of your unused Event Passes, or opens the Event Pass checkout if you have none.
- **Bringing a computer that already has Pix Pro**: unlink it from its booth on the dashboard first. That puts its Pix Pro back in your account, so the event shows a pairing code and the computer pairs in on its own Pix Pro.
- While the event runs, its session price, packages and gateway replace the booth's own. Tax, fees and currency stay the booth's. The booth shows the Payment screen when the event charges and skips it when the event is free.
- Photo sessions captured during the event carry an event chip on [Transactions](./transactions.md), so the client's takings are easy to pull out.

## Related

- [Run an Event](../tutorials/run-an-event.md)
- [Devices](./billing.md)
- [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md)
- [Event Video Modes](../desktop-app/event-video-modes.md)
- [Public Links](../reference/public-links.md)
