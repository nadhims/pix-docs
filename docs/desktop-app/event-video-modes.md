---
sidebar_position: 7
title: Event Video Modes
description: How an event switches its booths to video or 360 slow-mo capture, the Overlays list each video mode has, what the booth's Capture Settings page shows, and what the guest gets.
tags: [desktop-app, events, video, slow-mo]
---

# Event Video Modes

An event can turn every booth in it into a video booth for the day. The mode is chosen once on the event, synced to each booth, and the booth records short clips with the event's overlays, intro and outro instead of taking photos. This page explains where the mode is set, what the booth's Capture Settings page mirrors, how a video session runs, and where the original clip is kept. Video modes need the Pixture Photobooth 1.1.102 or newer.

## Where the Mode Is Chosen

Video is one of the event's booth modes, set per **event**, not per booth:

1. In the dashboard, open **Events**, pick the event and open its **Setup** tab. (Or pick it while creating the event: the wizard's Details step has **Booth mode**, or **Modes** when the start screen is on.)
2. On an event with a [start screen](../dashboard/event-start-screen.md), click **Edit modes**, tick **Video** or **360/Slow-mo** and **Save**; then click the mode's card to open its tab. On an event without one, click **Change** in the **Booth mode** box and choose **Video** from the Video group; there **360 Slow-mo** is marked **Soon** and cannot be chosen unless the event already had it.
3. Fill in the settings on the **Video** or **360/Slow-mo** tab. **General**: **Countdown**, **Video length** (Video only), **Quality**, **Size**, **Orientation** (**Landscape 16:9** or **Portrait 9:16**), **Display text before recording**, and for Video **Mirror captured videos** and **Keep original clip**. Then the **Overlays** list (below) and an optional **Intro video** and **Outro video** (MP4 or MOV, up to 30 MB). The **Timeline** (**Preset**, **Reverse**, clip durations and speeds) and the **Soundtrack** (MP3, M4A, AAC or WAV, up to 15 MB) belong to 360/Slow-mo. Changes save as you go.

An event without a [start screen](../dashboard/event-start-screen.md) has one booth mode, and every computer paired to it uses it. Switching the mode keeps the computers paired; each booth picks it up on its next Start screen. The event's output becomes the video itself, and its screen design runs the Start and Payment screens before recording. Outside an event a booth runs its own mode. See [Events](../dashboard/events.md) and [Run an Event](../tutorials/run-an-event.md).

## Overlays

The **Video** and **360/Slow-mo** tabs each have their own **Overlays** list: what is laid over the guest's clip. **Add overlay** offers:

| Choice | What it adds |
|---|---|
| **Still frame** | "Your PNG, like names and the date". A PNG up to 10 MB that belongs to this event; once the event has frames, it opens a picker with **Upload PNG** and this event's frames, its GIF templates included |
| **Moving effect** | "Sparkles, hearts, confetti and more": Pixture's six moving effects (**Sparkles**, **Hearts**, **Confetti**, **Bokeh**, **Stars**, **Snow**), plus the effects you uploaded |
| **Your own effect** | "MOV (HEVC) or WebM with see-through parts, or GIF, up to 30 MB". It is kept for your account, so your other events can add it too |
| **From Pix Design** | "Overlays you made in Pix Design" |

Each row shows a small picture of the overlay, its name, a **Still** or **Moving** tag and a remove button. A moving row has **Strength** (10 to 100%, how strongly the overlay shows) and, for Pixture's effects, **Colour**. A still frame whose shape is not the tab's **Orientation** warns, for example "Made for portrait. Videos here are landscape." The list holds up to 20 overlays; **Add overlay** turns off at 20. With nothing added it reads "No overlays added yet".

Click a row to see it in the **Preview** card, laid over the recording the way the booth lays it: a still frame stretched to the video, a moving effect cropped from the centre, at its Strength and Colour. **Use my camera** shows it over your own camera. An own MOV plays only in Safari, and Safari drops an own WebM's see-through parts, so in those cases the card shows "Plays on the booth" instead.

**How the booth uses the list.** With two or more overlays the tab says "Guests get them in turn, one per video." Each computer works down the list in order, one overlay per guest, and starts again at the top after the last. A retake keeps the same overlay; the next guest gets the next one. Each computer keeps its own place in the list, also after a restart. A still frame shows over the live view while the guest records; a moving effect is added when the clip is processed. If the overlay cannot be laid over the clip, the guest still gets the video without it. The list needs Pixture Photobooth 1.2.12 or newer; an older booth uses only the first still frame in the list.

## The Booth's Capture Settings Page

The operator menu has a **Capture Settings** page whose only job is video and 360 slow-mo. Its subtitle tells you whether it is live: while an event runs it names the event and says the dashboard and this page edit the same settings; with no event running it says the booth shoots photos. It holds the main choices, so a quick change can be made at the booth; **Mirror captured videos**, **Keep original clip**, the orientation and the intro and outro videos are set in the dashboard only:

- Mode pills: **Photo**, **Video**, **360 Slow-mo**.
- **Video** card: **Countdown**, **Video length**, **Quality**, **Size** (Rectangle 720p or 1080p), **Display text before recording**, **Image overlay**.
- **360/Slow-mo** card: **Countdown**, **Quality**, **Size**, **Display text before recording**, **Preset**, **Recording duration**, **Reverse**, **Timeline** (the clip speeds), **Image overlay**.
- **Back** and **Save**. Save confirms **Saved & synced** when an event is running; with no event it says the change was saved on this booth only.

A save at the booth is pushed back to the event, except overlays: the event's Overlays lists change only in the dashboard. A save in the dashboard reaches the booth on its next check-in. The photo Session Time and idle timeouts are not on this page; they are Pix Design page settings.

## How a Video Session Runs

Home, Tutorial and Payment run as usual. Then, instead of Template Selection, the booth shows **Video Capture**: the display text, a countdown, and the recording from the live view. In Video mode the booth also records the guest's voice from the computer's default microphone (a Mac asks for access once); without a microphone the video is silent. 360/Slow-mo records no voice, only its soundtrack. The clip is processed on the booth (overlay, slow-mo speed ramps and the reverse pass for a 360 clip, then the event's intro and outro are joined on, plus the soundtrack for a 360 clip).

On an event with a start screen, the session then ends on the event's Share screen, as a photo session does: the video plays large beside **Scan QR**, with **Complete** in the corner, and nothing prints. Otherwise the booth shows "Your video is on its way!" with the QR code and **Done**. Either way the booth keeps the video mode for the next round. The guest's page for a Video or 360 session offers only the video: one **Video** button, no prints, GIF or **Download All**, and "Your video is still uploading. This page refreshes by itself when it's ready." while it uploads.

The intro, outro, overlays and any soundtrack are downloaded once from the event and cached on the booth. A PNG chosen as **Image overlay** on the booth's Capture Settings page overrides the event's Overlays list on that computer.

## Portrait Recording

Set **Orientation** on the Video or 360/Slow-mo tab to **Portrait 9:16** for a booth mounted for portrait. A portrait overlay from **Pix Design > GIF/Video overlay** (Portrait 720x1280) fits it; a still frame of the other shape shows a warning in the Overlays list.

## Keep Original Clip

**Keep original clip** ("Also saves the video without the overlay") is on by default. The booth then also saves the untouched recording, before overlay, intro and outro, to the computer's Videos folder under **Pix Originals** as `Pix_<session>_original.mp4`. Only the finished clip is uploaded to the share page; the original stays on the booth for your own editing.

:::caution
Video is recorded from the camera's live view, so the clip's quality is the live view quality, not the full sensor resolution. A Canon body with a clean, well-lit live view gives the best result.
:::

## Related

- [Events](../dashboard/events.md)
- [Run an Event](../tutorials/run-an-event.md)
- [Photo Session Flow Overview](./session-flow/overview.md)
- [Operator Menu](./admin-panel.md)
