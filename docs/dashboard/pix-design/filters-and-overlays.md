---
sidebar_position: 6
title: Photo Filters and Overlays
description: Add your own .cube colour filters next to the built-in ones, choose which filters each booth offers, and upload transparent overlays for GIFs and event videos.
tags: [dashboard, pix-design, filters, overlays, gif]
---

# Photo Filters and Overlays

Two pages in Pix Design change the look of the photos themselves rather than the layout around them. **Photo Filters** holds the colour grades a customer can pick on the Filter screen. **GIF/Video overlay** holds transparent frames drawn on animated GIFs and event videos. By the end of this page you will have a custom filter on a booth and an overlay ready for its GIFs.

## Photo Filters

![Photo Filters page with the built-in filters and Upload Filter](/img/docs/pix-design-filters.webp)

Pixture ships 14 built-in filters. You can add up to 50 of your own as .cube LUT files, the colour-grading format most photo and video tools export. A filter is applied to everything the customer takes home: the print, the animated GIF and the live photo all get the same grade.

### Upload a filter

**Upload Filter** takes a **Filter Name** (the label under the card on the booth) and a **.cube File**: a 3D LUT with a `LUT_3D_SIZE` of 2 to 256, up to 50 MB. The filter appears under **Custom Filters** with a preview on a sample photo; **Delete Filter** removes it. Uploading needs Pix Pro.

![Upload Filter modal with Filter Name and .cube File](/img/docs/pix-design-upload-filter-modal.webp)

### Choose which filters a booth offers

A booth with no filters chosen offers every filter, built-in and custom. **Booths** > booth > **Filters** > **Manage Filters** picks a shorter list; **Save Filter Assignments** keeps it. Once a booth has a list, filters you upload later are not added to it.

Step by step, with how to make a .cube that works at a booth: [Add Filters to Your Booth](../../tutorials/add-filters.md).

### What the customer sees {#what-the-guest-sees}

The Filter screen comes after capture. The **Filter Strip** block lists the booth's filters as cards, in the grid you shaped in the UI Editor, and the **Filter Preview** block shows the customer's photo with the chosen filter applied. The screen can be turned off with **Enabled in session flow**, in which case photos go out unfiltered. See [UI Editor](./ui-editor.md#filter) and [Filters on the booth](../../desktop-app/session-flow/filters.md).

:::tip
A brand look usually needs one or two filters, not fourteen. Assign a short set per booth so the Filter screen stays quick to use.
:::

## GIF/Video Overlay

![GIF/Video overlay page with + Add overlay](/img/docs/pix-design-overlays.webp)

An overlay is a transparent PNG drawn over every frame of a session's animated GIF, and over the guest video at an event in Video or 360 Slow-mo mode. Use it for a frame, a logo corner or an event name.

### Add an overlay

**+ Add overlay** takes a **Transparent PNG** (Landscape 1280×720 or Portrait 720×1280, up to 10 MB), a **Name** (from the file name if left empty) and an **Orientation**, set from the file. **Delete** removes an overlay. Step by step, with design know-how: [Add GIF and Video Overlays](../../tutorials/gif-and-video-overlays.md).

![Add overlay window with Transparent PNG, Name, Orientation and the Add overlay button](/img/docs/steps/dashboard-pix-design-filters-and-overlays--pix-design-add-overlay-modal.webp)

### Choose where it is used

- **Per booth:** **Booths > booth > Settings**, pick the overlay under **GIF overlay** and click **Save**. Every session GIF from that booth carries it.
- **Per event:** on the event's **Setup** tab, pick the **Image overlay**. The event's GIFs and videos carry it while the event runs. Free template packs from Pixture bring a matching overlay of their own.

Match the orientation to the booth's camera framing: a landscape booth needs a landscape overlay.

## Pix Starter

Both pages open on Pix Starter, but saving in Pix Design needs Pix Pro, so uploading a filter or an overlay is a Pix Pro action. The built-in filters are available to every booth.

## Related

- [UI Editor](./ui-editor.md)
- [Booth Management](../booth-management.md)
- [Filters on the booth](../../desktop-app/session-flow/filters.md)
- [Event video modes](../../desktop-app/event-video-modes.md)
