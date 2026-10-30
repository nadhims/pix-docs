---
sidebar_position: 3
title: Events
description: Create an event for a wedding, expo or festival with its own dates, modes, start screen, outputs, pricing, templates and public album, pair the computers that run it, and let it run itself from creation to the day after its last date.
tags: [dashboard, events, album, event-pass]
---

# Events

An **event** is a booking: a set of dates, a client and a venue, with its own modes, outputs, pricing, templates, screen design and a public album of everything captured. You **pair the computers** that run it, straight from the event page. The event runs itself. It is **ONGOING** from the moment you create it and shows **ENDED** from 06:00 the morning after its last date (your organization's time). There is no Start or End button: an ended event can still be edited and paired until you archive it with **Archive event**.

![Events page with one ongoing event card](/img/docs/events-list.webp)

## The Events List

Each event is a card with its cover photo, name, client, venue, dates, status, a **Landscape UI** or **Portrait UI** chip, its computers, the session count and, for paid events, the revenue. The bar above it has a search box ("Search name, client, venue..."), **Day / Week / Month** pills, **Select** for bulk actions, **Delete** for the selected events, and **+ Create Event**.

## Creating an Event

**+ Create Event** opens a short wizard. A progress bar across the top shows where you are: **Details**, **Templates**, **Screens**, **Payment**, then **Pair**, which happens on the event page once it exists.

![Create Event wizard, Details step with Event Name, Client and the Modes tiles](/img/docs/event-create-wizard.webp)

| Step | What you set |
|---|---|
| **Details** | **Event Name**, **Client**, **Modes**, **Output**, **Event date** (prefilled with today), **Start Time** and **End Time** (both optional) and **Venue** |
| **Templates** | The print templates guests can pick at this event |
| **Screens** | "You set up the start screen on the event page, after you create the event." See [Event Start Screen](./event-start-screen.md) |
| **Payment** | **Pay Per Session**: on, guests pay at the booth with the **Session price**, plus **Double session price**, **Group session price** and **Additional session price**, each behind its own switch and on only if you sell it; off, every session is free, for a hosted wedding or a sponsored booth. **Payment gateway**: leave it on the organization default unless the client needs another. Without a connected gateway, turning on Pay Per Session tells you to connect one first in **Settings > Payment Gateway** |

**Create event** saves it and opens the event page with **Pair a computer** ready.

### Modes

Every new event gets the [event start screen](./event-start-screen.md): guests pick the mode on the booth every session. The wizard's **Modes** offers **Photo**, **Video**, **360/Slow-mo**, **Studio**, **Notes** and **Roaming** ("Each mode except Roaming becomes a button on the start screen. Guests pick one every session.").

### Booth Mode (Older Events)

An event created before the start screen has **one booth mode**, changed with **Change** on the event page ("One mode per event. Booths pick it up at their start screen."). The picker groups the modes:

| Group | Mode | What guests do |
|---|---|---|
| Photo | **Photobooth** | Pick a template and shoot one photo per slot |
| Photo | **Studio** | A timer runs the session; guests shoot freely, then pick their photos. Needs a Studio UI project from Pix Design first |
| Photo | **AI Photobooth** | Marked **Soon** |
| Video | **Video** | Record a short clip with your overlay, for a video guest book. See [Event Video Modes](../desktop-app/event-video-modes.md) |
| Video | **360 Slow-mo** | Marked **Soon** |

### Roaming

**Roaming** is for a photographer who walks around the venue: "A photographer walks around and shoots; each photo gets its own QR." A roaming computer skips the start screen and opens straight into shooting. Each photo is saved as its own session and shown with its own QR code, so guests scan it on the spot. With a DSLR the photographer shoots with the camera's own shutter; with a webcam the booth shows the live view and an on-screen shutter.

Turn it on in the wizard's **Modes** or with **Edit modes** on the event page, then set it on the **Roaming** tab:

| Setting | What it does |
|---|---|
| **QR time** | How long each photo shows with its QR before the next shot: **Skip**, or 5 to 30 seconds (8 by default) |
| **Review** | A look at each shot with Retake before it is saved: **Off**, **3 s**, **5 s** (default), **10 s** or **Until I tap** |
| **Auto print** | "Prints each photo as it is taken, one sheet" |
| **Frame** | A GIF template laid over each photo, or **None** |
| **Roaming computers** | Only when the event also has guest modes: the computers that go round with the photographer. The others show the start screen to guests. The tab shows a "!" until at least one is picked |

When Roaming is the event's only mode, every computer roams. A roaming computer carries a **Roaming** badge in the Computers list. Roaming needs Pixture Photobooth 1.2.2 or newer.

On an older event, changing the booth mode keeps the paired computers paired. Each booth picks the new mode up the next time it shows its Start screen. If the event's screen design does not fit the new mode, the event switches to one that does (a Studio design for Studio, the Default Layout for Photobooth and Video) and says so.

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

The header shows the name, dates and times, the status chip (**ONGOING** from creation, **ENDED** after the last date, **ARCHIVED** once archived), a **PAID SESSIONS** or **FREE FOR GUESTS** badge, "for" followed by the client's name, the venue and **Edit**.

The overview cards count **Sessions**, **Prints**, **Revenue** (paid events only) and **Booths** (the event's computers), with an **Analytics** link to an activity chart and, when staff ran any, a "N staff sessions" chip ("Started by staff with the booth PIN. Not counted as a sale."); show the upload queue (**Uploaded**, **Uploading**, then "All photos uploaded"); and hold the **Link Sharing** switch with the album URL and **Copy**.

Link Sharing is on by default. The public album lives at `pixture.io/album/<slug>`; share the link or the QR with the client and their guests. It shows 48 files a page, with **Previous** and **Next**, and a menu to switch between **Prints**, **Live photos**, **Notes** and **Singles** when the album has more than one kind. Switch it off to make the album private. The booth always shows the album's QR code on the share screen.

The toolbar has **Download all** (every photo as one zip), **Embed** (an iframe snippet for the client's website), **Analytics** (sessions and prints by hour), **Slideshow** (a full-screen loop of the album, shown while sharing is on; see [Slideshow](#slideshow)), **Archive event** and **Delete Event**. **Archive event** is how you finish with an event: "Archived events leave every computer's list. Computers running it go back to their list."

![Embed modal for the public event album](/img/docs/event-embed-modal.webp)

## Where Each Setting Lives

Everything about an event is set on its event page: **Events**, then open the event. The booth's own menu only covers the camera, the printer and its Capture Settings page.

| To change | Go to |
|---|---|
| The modes guests can pick | **Setup** tab > **Booth mode** > **Edit modes** |
| How Notes prints | **Edit modes**, under Notes |
| The start screen: background, text, logo, Gallery and lock buttons, colours | **Appearance** tab > **Edit appearance** |
| The countdown before each photo (1 to 10 seconds) | **Edit appearance** > **Countdown** |
| Session time and note time | **Edit appearance** > **Timer** |
| The templates guests pick from | **Template** tab |
| The GIF frame | **GIF template** tab |
| Mirroring photos, like a selfie | **Mirror** tab |
| Video settings and overlays | **Video** tab |
| 360/Slow-mo settings and overlays | **360/Slow-mo** tab |
| A roaming photographer | **Roaming** tab |
| AI styles (Pix AI beta) | **AI** tab |
| The note template | **Notes** tab |
| What guests get: prints, GIF, live photo, singles | **Output** tab > **Change** |
| Auto print, max prints per session, the Print button on Share | The **Output** window, with **Prints** ticked |
| The album slideshow | **Slideshow** tab |
| Session prices, price per mode, payment gateway | **Edit** at the top of the event page |
| The public album link | The **Link Sharing** switch |
| The computers running the event | **Computers** card > **+ Pair a computer** |

On the booth, **Capture Settings** shows the running event's Video and 360/Slow-mo settings, and a save there changes them on the event too. It has no photo countdown, session time or print settings: those are only on the event page.

## Tabs

### Album

Everything captured during the event, newest first, with a filter by computer, **Select** and **Delete**. "Photos are kept for 60 days." After that a session's files are deleted: its tile shows **Expired** (it can still be selected and deleted), and it leaves the public album and the guest's page. See [Gallery](./gallery.md).

### Setup

![Event Setup tab: the Computers card with a computer on an Event Pass, Booth mode with the Photo and Studio cards and Edit modes, the Appearance tab with Edit appearance, and the Preview](/img/docs/event-setup-computers.webp)

- Everything on this tab saves as you go; a small "Saving…" then "Saved" confirms it.
- **Setup progress.** The same five steps as the wizard. Click a step to jump to the part of the page where it is done. The bar disappears once every step is done.
- **Computers.** Every computer paired to the event, with its state:

  | State | Meaning |
  |---|---|
  | **Pix Pro** | The computer runs on Pix Pro |
  | **Event Pass** with a countdown | An Event Pass is running; the countdown shows the hours left, and the info icon shows when it ends |
  | **Needs Pix Pro or Event Pass** | Paired, but it has no Event Pass or Pix Pro yet. The booth will not start sessions until it has one |
  | **On its event list** | The computer ran this event and is back on its event list, on no booth |
  | **Not paired** | A pairing code was made but no computer used it yet |

  Each row has **Extend 24h** (for a running Event Pass; with no unused pass it opens the Event Pass checkout), **Use Pix Pro** (on a **Needs Pix Pro or Event Pass** row, when a Pix Pro is free in your account) and **Unlink** (except on an **On its event list** row). A **Not paired** row, named "Waiting for a computer", has **Show code**. Once a computer is paired, a line above the list says "This computer has an Event Pass or Pix Pro." (or "All N computers have an Event Pass or Pix Pro."), or "N computers need an Event Pass or Pix Pro." with **Add computer**. On a multi-day event it counts an Event Pass per computer for each day left, so a computer with a running pass can still be counted as short.

  Before any computer is paired the card reads "No computers paired yet": "Pair the computers you'll run at this event. Each one needs an Event Pass or Pix Pro."
- **+ Pair a computer.** Opens the **Pair a computer** popup with a 6-digit code and the line "Open Pixture Photobooth on the booth computer and enter this Pairing Code.", with **Copy code**, **New code** and **Pair later**. If your free trial is unused and no Pix Pro or Event Pass is free for the computer, the popup first shows the **You have a 3-day free trial** card with **Start free trial**, **Get Pix Pro or an Event Pass** and **Later**; on your event day, an Event Pass or Pix Pro keeps the computer running. A line under the code names the Event Pass or Pix Pro waiting for it, for example "You have 1 Event Pass ready." A code is only given when an Event Pass or a spare Pix Pro is available for the computer: an unused Event Pass, or a Pix Pro that is on no computer. Otherwise the popup says "Get Pix Pro or an Event Pass first": "To run this event, each computer needs an Event Pass or Pix Pro. Buy one, then pair here.", with **Add computer** and **Later**. After you pay, the dashboard brings you back to the event and the popup shows "Finishing your payment" until the license lands, then the code.

  ![Pair a computer popup with a 6-digit code, "You have 1 Event Pass ready.", Copy code, New code and Pair later](/img/docs/event-pair-popup.webp)

  ![Pair a computer popup saying "Get Pix Pro or an Event Pass first" with Add computer and Later](/img/docs/event-pair-needs-license.webp)

  A computer paired with an event's code goes into Event mode: it keeps a list of your events and runs whichever one you launch, until you archive it. See [Event Mode](../desktop-app/event-mode.md).
- **Booth mode** (every new event). The event's modes are cards with their picture and name; hover one for its one-line description. Clicking a card opens its settings tab and brings the tab bar to the top: **Photo** and **Studio** open **Template**, **Video** opens **Video**, **360/Slow-mo** opens **360/Slow-mo**, and **Roaming** and **Notes** open their own tabs. **Edit modes** opens the **Booth mode** popup ("The modes guests pick from on this event's start screen."), where you tick modes on or off, choose how Notes prints (**Print with the note**, **No print, QR only** or **Notes after Photo**) and **Save**. One mode always stays on. The tabs under the cards:

  | Tab | What it holds |
  |---|---|
  | **Appearance** | The start screen, with **Edit appearance** and **Try it full screen**. See [Event Start Screen](./event-start-screen.md) |
  | **Template**, **Mirror**, **GIF template** | Photo modes: the templates, mirroring and the GIF frame (below) |
  | **Video**, **360/Slow-mo** | The video settings and each mode's Overlays list. See [Event Video Modes](../desktop-app/event-video-modes.md) |
  | **Roaming** | See [Roaming](#roaming) |
  | **AI** | The AI styles guests pick from (accounts in the Pix AI beta) |
  | **Notes** | The **Note template** guests write on |
  | **Output** | The outputs, with **Change** when the event has a photo mode. With **Prints** ticked, the Output window also holds **Auto print**, **Max prints per session** (1 to 10 sheets, 2 by default) and **Show a Print button on Share** |
  | **Slideshow** | How the album slideshow looks on a venue screen (while Link Sharing is on). See [Slideshow](#slideshow) |

  A tab that needs something shows a "!": **Template** until a template is added, **GIF template** while GIF is an output and no frame is picked, **Output** when no output is on and **Roaming** until a computer is picked to roam. The **Preview** card beside the tabs shows what the open tab sets.
- **Booth mode**, **Output** and **Appearance** (older events, created before the start screen). Each is a box showing the current choice, with **Change**. Appearance lists only screen designs made for the event's booth mode.
- **Template**, **Mirror** and **GIF template** (photo modes; the countdown before each photo and the session and note timers are set in **Edit appearance**, and on an older event the countdown is the one on the Capture page of the event's screen design in the UI Editor). **Template** reads "Assign at least 1 template. Until you do, guests at this event have nothing to pick." **Add templates** and **+ Manage Templates** pick from your own templates; the Manage Templates popup's **Browse template packs** button opens Pixture's free template packs ("Choose a template"), when packs are available: each pack brings its print layouts, a GIF overlay and a matching booth look. The event's template set is exclusive: the booth's own templates are not offered while the event runs. Templates a pack adds from the event belong to that event: they are not in your library and are left out of template usage rankings. Video shows its own settings instead; see [Event Video Modes](../desktop-app/event-video-modes.md). **Template** opens with "Which designs guests can pick at this event. Assign at least one: booths on this event offer only these, not their own library." and a **Preview** card on the right. **Mirror** is "Mirror captured photos": it mirrors the live preview and the saved result, like a selfie. It shows on, like the booths. Until you change it, each booth keeps its own **Mirror live view** setting; once you change it, every booth on a new event follows it.
- **GIF template.** The frame over every GIF guests get. With no GIF templates yet, the tab shows "No GIF templates yet" and **Add a GIF template**; otherwise it is a picker with **No frame**, your frames (a check marks the picked one) and an **Add GIF template** tile. **Add a GIF template** opens a popup ("For this event only"): choose a transparent PNG (1280×720 or 720×1280, up to 10 MB), whose shape sets the orientation and whose file name fills **Name**, then **Add**. The frame belongs to this event: Pix Design and your other events never list it, and it is picked for the event's GIF at once. A frame that belongs to the event has a trash button: "Delete this GIF template? This event goes back to No frame if it was picked." Deleting it also takes it out of the event's video Overlays lists and the Roaming frame. Frames from Pix Design are deleted in Pix Design.

#### Slideshow

**Change** on the **Slideshow** tab opens the slideshow settings, with a live preview and **Open full screen**. New photos join the slideshow on their own.

| Setting | What it does |
|---|---|
| **Screen** | **Fit screen**, **16:9**, **9:16**, or **TV on side** for a screen turned on its side |
| **Background** | **Blurred** (the photo itself, blurred), **Solid** (one colour), **Glow** (a glow of the accent colour) or **Image** (your own background) |
| **Text & colour** | The text and accent colours, or **Match microsite**, and the slideshow font |
| **Caption** | The label ("Photo album" by default; empty hides it), the event name and the date, each with its own font and colour |
| **Show** | Which kinds play: **Prints**, **Singles**, **GIF** and **Live photo** |
| **Timing** | How long each photo stays on screen, 3 to 20 seconds (6 by default) |
| **On screen** | **Event name** and **QR to the album** |

**Save slideshow** keeps the changes.

### Report

Per-computer health for the event, with an Online or Offline badge and the app version: camera, printer, paper remaining, CPU temperature, memory, free storage, API latency, monitor, sessions, prints, active hours, incidents and the printer unit, followed by "Incidents during the event".

![Event Report tab](/img/docs/event-report.webp)

## Editing and Deleting

**Edit** opens the Edit Event modal with the name, client, dates, times, venue, Pay Per Session prices and, once Pay Per Session is on, the payment gateway. On a paid event with a start screen, **Price per mode** gives each mode its own price: **Single**, **Double** and **Group** for Photo, Studio and Notes, and **Single only** for Video, 360/Slow-mo and AI. "Leave empty to use the event price." A booth needs Pixture Photobooth 1.2.2 or newer for these prices; the event page warns about an older one, which sells every mode at the event price until you update it. It is available until the event ends. Computers, booth mode, outputs, screen design and templates are changed on the Setup tab, which stays editable after the event ends, until you archive it. **Delete Event** on the event page, or **Select** then **Delete** on the list, works at any time, even while the event is live. Its computers leave it (an Event Pass or Pix Pro stays on them; an Event mode computer goes back to its event list) and the photos stay in your Gallery; only the event and its album go away.

## Licenses, Pricing and Transactions

- **Each computer on an event needs Pix Pro or an Event Pass**. An **Event Pass** is 24 hours of Pix Pro on one computer, starting when you use it at the booth. **Add computer** opens a choice between **Event Pass** (for an event) and **Pix Pro** (for regular use), each with its own checkout on the [Computers](./billing.md) page. A computer without Pix Pro or an Event Pass stays paired but does not start sessions; there is no watermarked mode on an event.
- **At the booth**, a computer that needs Pix Pro or an Event Pass shows "Use an Event Pass for today?" with **Use Event Pass**, or **Use Pix Pro** if a Pix Pro is free in your account. See [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md).
- **Longer events.** When an Event Pass is running, **Extend 24h** on its row adds 24 hours from one of your unused Event Passes, or opens the Event Pass checkout if you have none.
- **Bringing a computer that already has Pix Pro**: unlink it from its booth on the dashboard first. That puts its Pix Pro back in your account, so the event shows a pairing code and the computer pairs in on its own Pix Pro.
- While the event runs, its session price, packages and gateway replace the booth's own. Tax, fees and currency stay the booth's. The booth shows the Payment screen when the event charges and skips it when the event is free.
- Photo sessions captured during the event carry an event chip on [Transactions](./transactions.md), so the client's takings are easy to pull out.
- **After the event.** The event shows **ENDED** from 06:00 the morning after its last date, but the dates never stop an Event mode computer: it stays signed in and keeps running the event it launched, and you can still pair computers to it, until you click **Archive event**. When the event is archived or deleted, or the computer is unlinked from the event page, the computer goes back to its event list, still signed in. A computer paired to an event before Event mode (an older station) still follows the dates: at 06:00 the morning after the last date it is unlinked and returns to its pairing screen. Each computer's Event Pass or Pix Pro stays on it.

## Related

- [Run an Event](../tutorials/run-an-event.md)
- [Computers](./billing.md)
- [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md)
- [Event Start Screen](./event-start-screen.md)
- [Event Video Modes](../desktop-app/event-video-modes.md)
- [Public Links](../reference/public-links.md)
