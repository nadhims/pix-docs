---
sidebar_position: 4
title: Template Selection
description: How guests choose a print design on the booth, where the templates come from, and how events, template packs and plan limits change the set.
tags: [desktop-app, photo-session, templates]
---

# Template Selection

After Home, the optional Tutorial and Payment, the guest picks the design their photos will go into. This page explains what the guest sees, where the booth gets its templates, and what changes the set: your booth assignments, plan limits, and a running event.

## What the Guest Sees

The screen shows a **Template Cards** block with one card per assigned template. Each card is the thumbnail rendered by the Pix Design template editor, so it looks exactly like the finished print. The first template is preselected so the large preview is never empty; the guest taps a card to choose it and taps Next (or the card, depending on your design) to move on to Capture.

Two details make the screen feel quick on a booth with many designs:

- A **category rail** runs alongside the cards. Templates with a category get their own button; the rail scrolls when there are more categories than fit. Uncategorised templates show under All.
- Cards **load progressively** and fade in as their thumbnails arrive, so the guest can start choosing while the rest are still coming.

The card layout, spacing, corner radius, selection ring and shadow are all set on the Template Cards block in the UI Editor's **Templates** tab.

## Where the Templates Come From

Only templates assigned to the booth appear:

1. In the dashboard, open **Booths**, pick the booth and open its **Templates** tab.
2. Click **Manage Templates**, tick the designs you want and click **Save Templates**. You can also assign a design to several booths at once from Pix Design with **Assign to booths**.

The booth's Templates tab marks one of the assigned designs with a **Default** badge. Changes reach the booth on its next check-in, usually within seconds. Templates are made in the Pix Design template editor; see [Pix Design](../../dashboard/pix-design/overview.md). The number of shots in the session is the number of photo slots in the chosen design.

## Plan Limits

- **Pix Starter**: up to 2 templates, and the output carries the Pixture watermark.
- **Pix Pro** (subscription, Day Pass or trial): unlimited templates.

On Pix Starter you can open the template editor and try any design, but saving needs Pix Pro. See [Plans](../../pricing/plans.md).

## During an Event

While an event runs on the booth, the event's template set replaces the booth's own. The event set is exclusive: if the event has no templates, the guest has nothing to pick, which is why the event's Setup tab says to assign at least one. The quickest way to fill an event is a **template pack**: **Events > event > Setup > Choose a template** opens the pack browser, and **Use this pack** copies the pack's print layouts, a GIF overlay and a matching kiosk UI project into the event. The booth follows the event's dates plus one night of grace, then returns to its own templates. See [Events](../../dashboard/events.md).

If the event pins Video or 360 Slow-mo, this screen is skipped altogether and the booth records instead. See [Event Video Modes](../event-video-modes.md).

## Design

The page background, the Template Cards block and any Next button, text or timer are arranged in the UI Editor. The page's idle timer sits in its page settings. A booth with two to four designs keeps the choice fast; more is fine, the rail and progressive loading are built for it.

## Related

- [Pix Design](../../dashboard/pix-design/overview.md)
- [Booth Management](../../dashboard/booth-management.md)
- [Events](../../dashboard/events.md)
- [Capture Modes](./capture-modes.md)
