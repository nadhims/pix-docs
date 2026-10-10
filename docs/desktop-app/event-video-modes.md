---
sidebar_position: 7
title: Event Video Modes
description: How an event switches its booths to video or 360 slow-mo capture, what the booth's Capture Settings page shows, and what the guest gets.
tags: [desktop-app, events, video, slow-mo]
---

# Event Video Modes

An event can turn every booth in it into a video booth for the day. The mode is chosen once on the event, synced to each booth, and the booth records short clips with the event's overlay, intro and outro instead of taking photos. This page explains where the mode is set, what the booth's Capture Settings page mirrors, how a video session runs, and where the original clip is kept. Video modes need the Pixture Photobooth 1.1.102 or newer.

## Where the Mode Is Chosen

Video is one of the event's booth modes, set per **event**, not per booth:

1. In the dashboard, open **Events**, pick the event and open its **Setup** tab. (Or pick it while creating the event: the wizard's Details step has **Booth mode**.)
2. In the **Booth mode** box, click **Change** and choose **Video** from the Video group. **360 Slow-mo** is marked **Soon** and cannot be chosen unless the event already had it.
3. Fill in the video settings that appear: **Countdown**, **Video length**, **Quality**, **Size**, **Display text before recording**, **Mirror captured videos**, **Keep original clip**, the **Overlay** (or an orientation when there is none) and an optional **Intro video** and **Outro video**. Changes save as you go. The Timeline **Preset**, clip speeds and **Soundtrack** belong to 360 Slow-mo.

An event without a [start screen](../dashboard/event-start-screen.md) has one booth mode, and every computer paired to it uses it. Switching the mode keeps the computers paired; each booth picks it up on its next Start screen. The event's output becomes the video itself, and its screen design runs the Start and Payment screens before recording. Outside an event a booth runs its own mode. See [Events](../dashboard/events.md) and [Run an Event](../tutorials/run-an-event.md).

## The Booth's Capture Settings Page

The operator menu has a **Capture Settings** page whose only job is video and 360 slow-mo. Its subtitle tells you whether it is live: while an event runs it names the event and says the dashboard and this page edit the same settings; with no event running it says the booth shoots photos. It holds the main choices, so a quick change can be made at the booth; **Mirror captured videos**, **Keep original clip**, the orientation and the intro and outro videos are set in the dashboard only:

- Mode pills: **Photo**, **Video**, **360 Slow-mo**.
- **Video** card: **Countdown**, **Video length**, **Quality**, **Size** (Rectangle 720p or 1080p), **Display text before recording**, **Image overlay**.
- **360/Slow-mo** card: **Countdown**, **Quality**, **Size**, **Display text before recording**, **Preset**, **Recording duration**, **Reverse**, **Timeline** (the clip speeds), **Image overlay**.
- **Back** and **Save**. Save confirms **Saved & synced** when an event is running; with no event it says the change was saved on this booth only.

A save at the booth is pushed back to the event, and a save in the dashboard reaches the booth on its next check-in. The photo Session Time and idle timeouts are not on this page; they are Pix Design page settings.

## How a Video Session Runs

Home, Tutorial and Payment run as usual. Then, instead of Template Selection, the booth shows **Video Capture**: the display text, a countdown, and the recording from the live view. The clip is processed on the booth (overlay, slow-mo speed ramps and the reverse pass for a 360 clip, then the event's intro and outro are joined on, plus the soundtrack for a 360 clip) and the **Video Done** screen shows the finished clip. **Done** returns to Home; the booth keeps the video mode for the next round, and the clip reaches the guest through the share page like any other session output.

The intro, outro, overlay and any soundtrack are downloaded once from the event and cached on the booth. A PNG chosen as **Image overlay** on the booth overrides the event's overlay design.

## Portrait Recording

A booth mounted for portrait records in portrait, and a portrait overlay from **Pix Design > GIF/Video overlay** (Portrait 720x1280) fits it. Choose the orientation that matches the overlay you designed.

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
