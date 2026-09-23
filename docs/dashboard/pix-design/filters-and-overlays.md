---
sidebar_position: 6
title: Photo Filters and Overlays
description: Add your own .cube colour filters next to the built-in ones, choose which filters each booth offers, and upload transparent overlays for GIFs and event videos.
tags: [dashboard, pix-design, filters, overlays, gif]
---

# Photo Filters and Overlays

Two pages in Pix Design change the look of the photos themselves rather than the layout around them. **Photo Filters** holds the colour grades a guest can pick on the Filter screen. **GIF/Video overlay** holds transparent frames drawn on animated GIFs and event videos. By the end of this page you will have a custom filter on a booth and an overlay ready for its GIFs.

## Photo Filters

![Photo Filters page with the built-in filters and Upload Filter](/img/docs/pix-design-filters.webp)

Pixture ships 14 built-in filters. You can add up to 50 of your own as .cube LUT files, the colour-grading format most photo and video tools export. A filter is applied to everything the guest takes home: the print, the animated GIF and the live photo all get the same grade.

### Upload a filter

1. Open **Pix Design > Photo Filters**.
2. Click **Upload Filter**.

   ![Upload Filter modal with Filter Name and .cube File](/img/docs/pix-design-upload-filter-modal.webp)

3. Enter a **Filter Name**. This is the label under the filter card on the kiosk, so keep it short.
4. Choose the **.cube File** and confirm.

The filter appears next to the built-in ones with a preview on a sample photo. **Delete Filter** removes a custom filter; the built-in ones stay.

### Choose which filters a booth offers

By default a booth offers every filter, built-in and custom. To narrow it:

1. Open **Booths**, click the booth, then the **Filters** tab. The **Booth Filters** card shows the current set; with no explicit assignment it notes that all filters are available by default.

   ![Booth Filters tab with Booth Filters and Manage Filters](/img/docs/booth-filters-tab.webp)

2. Click **Manage Filters**.

   ![Manage Filters modal with Select all, Assigned and Not Assigned, All Types and Custom](/img/docs/booth-manage-filters-modal.webp)

3. Tick the filters this booth should show. **Select all** ticks everything; **Assigned** / **Not Assigned** and **All Types** / **Custom** narrow the list.
4. Click **Save Filter Assignments**.

### What the guest sees

The Filter screen comes after capture. The **Filter Strip** block lists the booth's filters as cards, in the grid you shaped in the UI Editor, and the **Filter Preview** block shows the guest's photo with the chosen filter applied. The screen can be turned off with **Enabled in session flow**, in which case photos go out unfiltered. See [UI Editor](./ui-editor.md#filter) and [Filters on the kiosk](../../desktop-app/session-flow/filters.md).

:::tip
A brand look usually needs one or two filters, not fourteen. Assign a short set per booth so the Filter screen stays quick to use.
:::

## GIF/Video Overlay

![GIF/Video overlay page with + Add overlay](/img/docs/pix-design-overlays.webp)

An overlay is a transparent PNG drawn over every frame of a session's animated GIF, and over the guest video at an event in Video or 360 Slow-mo mode. Use it for a frame, a logo corner or an event name.

### Add an overlay

1. Open **Pix Design > GIF/Video overlay**.
2. Click **+ Add overlay**.
3. Choose the **Transparent PNG**, give it a **Name**, and pick the **Orientation**: **Landscape** (1280 x 720) or **Portrait** (720 x 1280). Make the PNG that exact size; the transparent area is where the photos show through.
4. Confirm. **Delete** removes an overlay you no longer need.

### Choose where it is used

- **Per booth:** **Booths > booth > Settings**, pick the overlay under **GIF overlay** and click **Save**. Every session GIF from that booth carries it.
- **Per event:** on the event's **Setup** tab, pick the **Image overlay**. The event's GIFs and videos carry it while the event runs. Free template packs from Pixture bring a matching overlay of their own.

Match the orientation to the booth's camera framing: a landscape booth needs a landscape overlay.

## Pix Starter

Both pages open on Pix Starter, but saving in Pix Design needs Pix Pro, so uploading a filter or an overlay is a Pix Pro action. The built-in filters are available to every booth.

## Related

- [UI Editor](./ui-editor.md)
- [Booth Management](../booth-management.md)
- [Filters on the kiosk](../../desktop-app/session-flow/filters.md)
- [Event video modes](../../desktop-app/event-video-modes.md)
