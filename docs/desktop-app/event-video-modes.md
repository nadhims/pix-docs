---
sidebar_position: 7
title: Event Video Modes
description: How an event switches its booths to video or 360 slow-mo capture, what the booth's Capture Settings page shows, and what the guest gets.
tags: [desktop-app, events, video, slow-mo]
---

# Event Video Modes

An event can turn every booth in it into a video booth for the day. The mode is chosen once on the event, synced to each booth, and the booth records short clips with the event's intro, outro, soundtrack and overlay instead of taking photos. This page explains where the mode is set, what the booth's Capture Settings page mirrors, how a video session runs, and where the original clip is kept. Video modes need Pix Desktop App 1.1.102 or newer.

## Where the Mode Is Chosen

Photo, Video and 360 Slow-mo are set per **event**, not per booth:

1. In the dashboard, open **Events**, pick the event and open its **Setup** tab.
2. Under **Booth mode**, choose **Photo**, **Video** or **360 Slow-mo**.
3. Fill in the video settings below it: **Display text before recording**, the Timeline **Preset**, the clip recording duration and speed, a **Soundtrack**, and the **Overlay**. **Preview** shows the result.
4. Click **Save**.

All booths in the event share the mode. Outside an event a booth always shoots photos. **360 Slow-mo** shows "Soon" in the dashboard and cannot be chosen unless the event already had it enabled. See [Events](../dashboard/events.md) and [Run an Event](../tutorials/run-an-event.md).

## The Booth's Capture Settings Page

The operator menu has a **Capture Settings** page whose only job is video and 360 slow-mo. Its subtitle tells you whether it is live: "Synced with event X…" while an event runs, or "No ongoing event — this booth shoots photos…" otherwise. It shows the same choices as the event's Setup tab, so a change can be made at the booth or in the dashboard:

- Mode pills: **Photo**, **Video**, **360 Slow-mo**.
- **Video** card: **Countdown**, **Video length**, **Quality**, **Size** (Rectangle 720p or 1080p), **Display text before recording**, **Image overlay**.
- **360/Slow-mo** card: **Countdown**, **Quality**, **Size**, **Display text before recording**, **Preset**, **Recording duration**, **Reverse**, **Timeline** (the clip speeds), **Image overlay**.
- **Back** and **Save**. Save confirms "Saved & synced ✓" when an event is running, or "Saved here — no ongoing event" when it is not.

A save at the booth is pushed back to the event, and a save in the dashboard reaches the booth on its next check-in. The photo Session Time and idle timeouts are not on this page; they are Pix Design page settings.

## How a Video Session Runs

Home, Tutorial and Payment run as usual. Then, instead of Template Selection, the booth shows **Video Capture**: the display text, a countdown, and the recording from the live view. The clip is processed on the booth (overlay, slow-mo speed ramps and the reverse pass for a 360 clip, then the event's intro, outro and soundtrack are joined on) and the **Video Done** screen shows the finished clip. **Done** returns to Home; the booth keeps the video mode for the next round, and the clip reaches the guest through the share page like any other session output.

The intro, outro, soundtrack and overlay are downloaded once from the event and cached on the booth. A PNG chosen as **Image overlay** on the booth overrides the event's overlay design.

## Portrait Recording

A booth mounted for portrait records in portrait, and a portrait overlay from **Pix Design > GIF/Video overlay** (Portrait 720x1280) fits it. Choose the orientation that matches the overlay you designed.

## Keep Original Clip

With **Keep original clip** on, the booth also saves the untouched recording, before overlay, intro and outro, to the computer's Videos folder under **Pix Originals** as `Pix_<session>_original.mp4`. Only the finished clip is uploaded to the share page; the original stays on the booth for your own editing.

:::caution
Video is recorded from the camera's live view, so the clip's quality is the live view quality, not the full sensor resolution. A Canon body with a clean, well-lit live view gives the best result.
:::

## Related

- [Events](../dashboard/events.md)
- [Run an Event](../tutorials/run-an-event.md)
- [Photo Session Flow Overview](./session-flow/overview.md)
- [Operator Menu](./admin-panel.md)
