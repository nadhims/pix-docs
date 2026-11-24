---
sidebar_position: 2.7
title: Add GIF and Video Overlays
description: Design a transparent frame at the right size, add it in Pix Design, and put it on a booth's GIFs or on an event's GIFs, videos and 360 clips.
tags: [tutorials, pix-design, overlays, gif, video]
---

# Add GIF and Video Overlays

In this tutorial you will design a transparent frame (an overlay), add it to Pix Design, and put it on the animated GIFs of a booth, or on the GIFs, videos and 360/Slow-mo clips of an event. Allow about 15 minutes, plus your design time.

An overlay is a see-through PNG drawn over every frame of the GIF or video. Use it for a logo in the corner, the event name and date, or a decorative border. The print has its own design: see [Design a Print Template](./design-a-print-template.md).

## When to Use It

- **Event rental:** the couple's names and the date on every GIF and 360 clip. Guests post them, and every post carries the event and your logo.
- **Self-service mall booth:** a small logo and your social handle in a corner of every GIF, so shared GIFs bring people back to the booth.
- **Pop-up box for a brand:** the sponsor's logo and campaign line on every clip, which is often exactly what the sponsor pays for.
- **Multi-booth studio:** one house frame on every branch's GIFs.

Skip the overlay when the GIF should stay clean, for example an art-gallery client who wants nothing over the photos. The booth then gives plain GIFs.

## Before You Start

- **Plan:** adding an overlay in Pix Design needs Pix Pro or the free trial. On an event, every computer needs Pix Pro or an Event Pass anyway.
- **GIFs switched on:** for a booth, **GIF Upload** on its **Settings** tab under **Output Settings**; for an event, GIF ticked in the event's **Output**.
- **A design tool** that exports PNG with transparency.

## Prepare

- **Size:** exactly **1280 x 720 px** for landscape or **720 x 1280 px** for portrait. The orientation of the PNG sets the shape of the GIF, so match it to how your booth frames people: a landscape booth needs a landscape overlay.
- **Transparent middle:** faces are in the middle. Keep it fully see-through and put your logo, names and date in a band along one edge or in a corner.
- **Leave a safe margin.** The booth scales the overlay evenly to cover the whole GIF frame. When a frame has a different shape from your PNG, the overlay is cropped evenly on two opposite edges, so keep text and logos well away from the edges and check a test GIF.
- **Readable on any photo:** white text with a soft dark shadow, or text on a solid band, stays readable on both bright and dark backgrounds.
- **File:** PNG with transparency, up to 10 MB.

## Step 1: Add the overlay in Pix Design

1. In the sidebar, click **Pix Design**.
2. Click **GIF/Video overlay**.

![Pix Design page with Pix Design in the sidebar and the GIF/Video overlay card marked](/img/docs/steps/tutorials-gif-and-video-overlays--hub.webp)

3. Click **+ Add overlay**, choose your PNG under **Transparent PNG**, and type a **Name** (left empty, it takes the file name). **Orientation** is set from the file you chose: check it says **Landscape (1280×720)** or **Portrait (720×1280)** as you meant.
4. Click **Add overlay**. The overlay shows on the page with its orientation.

![Add overlay window with Transparent PNG and Orientation marked as 3 and the Add overlay button as 4](/img/docs/steps/dashboard-pix-design-filters-and-overlays--pix-design-add-overlay-modal.webp)

## Step 2: Put it on a booth's GIFs

1. In the sidebar, click **Booths** and open the booth.
2. Open the **Settings** tab.
3. Under **GIF overlay**, pick your overlay ("Transparent frame burned into this booth's session GIFs.").
4. Click **Save** next to it.

![Booth Settings tab with Booths, the Settings tab, the GIF overlay menu and its Save button marked](/img/docs/steps/tutorials-gif-and-video-overlays--booth-gif-overlay.webp)

Every session GIF from this booth now carries the frame. Pick **None** and **Save** to take it off.

## Step 3: Put it on an event (optional)

On the event page, open the **Setup** tab and find the **Booth mode** card.

**For the event's GIFs:**

1. Open the **GIF template** tab ("The frame over every GIF guests get.") and click your overlay. **No frame** takes it off. **Add GIF template** adds a frame for this event only, without going through Pix Design.

![Booth mode card on an event with the GIF template tab marked](/img/docs/steps/tutorials-gif-and-video-overlays--event-gif-template.webp)

The tab shows a "!" while GIF is an output and no frame is picked.

**For Video and 360/Slow-mo clips** (when those modes are on):

1. Open the **Video** or **360/Slow-mo** tab and find **Overlays**.
2. Click **Add overlay** and pick one of:
   - **From Pix Design**: the overlays you added in Step 1.
   - **Still frame**: your PNG, like names and the date.
   - **Moving effect**: sparkles, hearts, confetti and more, made by Pixture.
   - **Your own effect**: a MOV (HEVC) or WebM with see-through parts, or a GIF, up to 30 MB.

![Booth mode card on the Video tab with the Add overlay menu open: From Pix Design, Still frame, Moving effect and Your own effect](/img/docs/steps/tutorials-gif-and-video-overlays--video-overlay-menu.webp)

With more than one overlay in the list, guests get them in turn, one per video. See [Event Video Modes](../desktop-app/event-video-modes.md).

## Check It Worked

- The booth's **Settings** tab shows your overlay under **GIF overlay** after the page reloads.
- On the booth, run a test session and scan the QR code: the GIF on the guest page has your frame, with nothing important cut off at the edges.
- At an event, record one test video or 360 clip and check the overlay on the guest page before guests arrive.

## Tips

- **Test with a real person.** A frame that looks fine on an empty background can cover a chin or a hat. Shoot a test GIF with someone standing where guests stand.
- **One overlay per event, made from a copy.** Keep a master file with your logo in place, and change only the names and date for each event.
- **Portrait for phone stories.** A portrait (720 x 1280) GIF fills a phone screen when guests post it as a story. Use it when your booth frames people standing.
- **On Pix Starter** the Pixture watermark is drawn on top of everything, overlay included.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| "Please choose a transparent PNG." | The file is not a PNG (for example a JPG renamed to .png) | Export a real PNG with transparency |
| "File too large. Maximum 10 MB." | The PNG is bigger than 10 MB | Export at exactly 1280 x 720 or 720 x 1280; a frame that size is far below the limit |
| The logo or text is cut off at the edge of the GIF | The overlay is scaled evenly to cover the frame (never stretched), and when the PNG's shape differs from the frame the extra is cropped | Move text and logos further from the edges, or re-export the PNG at 1280 x 720 or 720 x 1280 |
| The GIF has no frame | No overlay picked, or the event or booth setting was not saved | Pick it under **GIF overlay** and click **Save**, or pick it on the event's **GIF template** tab |
| The overlay is not in the booth's **GIF overlay** list | It was added on an event with **Add GIF template**, which is for that event only | Add it in **Pix Design > GIF/Video overlay** |

## Related

- [Photo Filters and Overlays reference](../dashboard/pix-design/filters-and-overlays.md)
- [Event Video Modes](../desktop-app/event-video-modes.md)
- [Events](../dashboard/events.md)
- [Add Filters to Your Booth](./add-filters.md)
- [Design a Print Template](./design-a-print-template.md)
