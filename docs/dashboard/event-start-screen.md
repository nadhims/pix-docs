---
sidebar_position: 3.5
title: Event Start Screen
description: Pick the modes guests can choose at your event and design the first screen they see, with background, text, logo, gallery and lock, colours, countdown and session timer, plus where print settings live.
tags: [dashboard, events, start-screen, booth-modes]
---

# Event Start Screen

Every new event gets a **start screen**. It is the first screen guests see on the booth, and the only one you design: every other screen uses the Pixture event design in your colours. Your own custom UI projects, set on a booth, still work as before.

## Where to Set It Up

Create the event first. The create form asks which modes to offer; its **Screens** step only says "You set up the start screen on the event page, after you create the event." Then open the event page and, on the **Appearance** tab under Booth mode, click **Edit appearance**. **Try it full screen** previews the whole event.

Events created before the start screen keep working as they are, with one booth mode and a screen design.

## The Editor

**Edit appearance** opens the editor: a live preview of the booth with **Landscape** and **Portrait** switches, and a rail of settings on the side: **Modes**, **Background**, **Text**, **Logo**, **Gallery & lock**, **Colours**, **Countdown** and **Timer**. Click a part of the preview, like the title or the logo, to open its settings. **Preview** at the top tries the whole event full screen with your changes, saved or not. **Save** saves it, and booths pick it up right away.

## Modes

The modes are **Photo**, **Video**, **360/Slow-mo**, **Studio**, **Notes** and **Roaming**. Each one you turn on becomes a round button, and guests pick one every session, except **Roaming**: a roaming computer skips the start screen (see [Roaming](./events.md#roaming)). The event page shows the modes you picked as cards under Booth mode; turn them on or off with **Edit modes** there (the editor's **Change modes on the event page** leads to it).

**Photo**, **Studio** and **Notes** need at least one template on the event.

In the editor's **Modes** group:

- **Hint line** turns the small "Tap a mode to start" line above the buttons on or off.
- **Pictures** sets the style of the pictures on the buttons: **Illustration**, **Mono** or **Icon**. Click a mode's picture to use your own.

## Look

### Background

Pick **Photo or video** (upload a JPG, PNG or WebP photo, or an MP4 or WebM video), **Colour**, or **Live view**, where guests see themselves behind the buttons like a mirror. **Darken** (0 to 80%) keeps the words easy to read, and **Blur** (0 to 100%) softens the picture. New events start on Live view, 70% darker with 80% blur.

### Text

Three lines, in the screen's order: **Subtitle** (a lead-in such as "Wedding of"), **Title** and **Date**. Each line has its own switch (off hides it and keeps its words), font, size from 60% to 200%, and colour: **Auto** picks one that stays easy to read on your background, or set your own. **Use event date** fills the Date line from the event.

Pick a built-in font or upload your own (WOFF2, WOFF, TTF or OTF, up to 4 MB). Uploaded fonts are saved for your other events too.

### Logo

Upload a PNG, SVG or WebP; a see-through background looks best. **Position** is **Above**, **Instead** (of the title), **Corner**, **Bottom** or **Free**, where you drag it anywhere on the screen. **Size** goes from 60 to 320 px.

### Gallery & Lock

- **Gallery button**: guests can reopen photos taken on this booth during this event, to scan or print again.
- **Lock button**: "Always on". It opens the admin menu on the booth, behind the PIN. Pick its **Corner** and **Opacity** (20 to 100%).
- **Tags**: the words under the buttons. Switch **Gallery**, **Mode names**, **Filter names** and **Scan QR and Print** off for a picture-only look.

### Colours

Pick a theme: **Your brand** (when your brand is set up), **Pixture**, **Forest**, **Ink blue**, **Plum** or **Cream**. Or set your own **Primary**, **Secondary**, **Background** and **Mode circles** colours. Primary buttons can be **Gradient** or **Flat**.

### Countdown

The seconds the booth counts down before each photo, from 1 to 10. 3 seconds by default.

### Timer

- **Session time**: how long guests have to take their photos: **Booth's own** (the session time from each booth's Pix Design layout), **No limit**, **60 s**, **90 s**, **2 min** or **3 min**. When time is up, the booth moves on with the photos taken.
- **Note time** (with Notes on): how long guests have to write their note, from 30 seconds to 3 minutes. 90 seconds by default.

## Printing

**Auto print**, **Max prints per session** (counted in sheets) and **Show a Print button on Share** are not part of the start screen design. Set them on the event page, in the **Output** window when **Prints** is ticked, or on the **Printing** line under Start screen when the event page has no Output window. **Show a Print button on Share** is on by default: "Guests can print again up to the limit. Turn off to only auto print."

## Payment and Staff

When the event takes payment, guests pay after tapping a mode, and turning payment on needs a session price. Each mode can have its own price; see [Editing and Deleting](./events.md#editing-and-deleting). Staff can start a free staff session with the booth PIN. It shows as **Staff** on Transactions, is counted in the event's "staff sessions" chip, and is never counted as revenue.

## Booths and Versions

Booths in the event pick up your changes when you save. A booth needs Pixture Photobooth 1.2.1 or newer to show the start screen as designed, and 1.2.2 or newer to charge each mode its own price (an older one sells every mode at the event price). The event page names each booth that needs an update, for example "Booth 1 runs an older Pixture Photobooth. Update it to show this start screen as designed." A booth older than 1.2.0 keeps running Photo strip from the event's default UI project. Update the app on any booth that should show the mode buttons.

## Related

- [Events](./events.md)
- [Event Video Modes](../desktop-app/event-video-modes.md)
- [Run an Event](../tutorials/run-an-event.md)
