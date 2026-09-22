---
sidebar_position: 4
title: Assigning Templates
description: Put a template on one booth, several booths or an event, and understand what guests see when an event takes over a booth.
tags: [dashboard, pix-design, templates, booths, events]
---

# Assigning Templates

A template only reaches guests once it is assigned. Assignment is the link between a template project and a booth: the booth's Templates screen shows exactly the templates assigned to it, and nothing else. One template can sit on many booths, and one booth can carry many templates. By the end of this page you will know the three ways to assign in the dashboard and how events change the picture.

## Three Ways to Assign

### From the template card

Best when one design should go to many booths.

1. Open **Pix Design > Template Editor**.
2. Open the card menu on the template and choose **Assign to booths**.
3. Tick **All booths**, or tick individual booths.
4. Click **Apply**.

The same modal appears on the first save of a new template, right after **Name Your Template**.

### From Manage Template

Best when you are already in the list and want to work booth by booth.

1. Click **Manage Template** in the Template Projects header.
2. Pick a booth. The dashboard jumps to that booth's **Templates** tab.
3. Continue with **Manage Templates**, below.

### From the booth's Templates tab

Best when you are setting up one booth and want to see its whole set.

1. Open **Booths**, click the booth, then the **Templates** tab. The **Assigned Templates** card lists what the booth has, with an **All Categories** filter.

   ![Booth Templates tab with Assigned Templates, the category filter and Manage Templates](/img/docs/booth-templates-tab.webp)

2. Click **Manage Templates**.
3. Use the filters to find designs: **Assigned** / **Not Assigned**, **All Categories**, **All Sizes**, **All Media**.

   ![Manage Templates modal on a booth with Assigned and Not Assigned filters, sizes, media and Save Templates](/img/docs/booth-manage-templates-modal.webp)

4. Tick the templates the booth should offer and untick any it should drop.
5. Click **Save Templates**.

One template on the tab carries a **Default** badge, marking the booth's default template.

## What Happens Next

The booth picks up the change on its next idle refresh, usually within seconds, without a restart. A photo session already in progress finishes with the template the guest chose; the next session sees the new set.

On the kiosk, guests see the assigned templates as cards on the Templates screen, grouped by the category buttons if your templates carry categories. See [Template Selection](../../desktop-app/session-flow/template-selection.md) for the guest side.

:::caution
A booth with no templates assigned has nothing for guests to pick. Keep at least one template on every booth that runs sessions, and match the paper: a 4x6" Normal template on a strip printer will not print as intended.
:::

## Events Use Their Own Set

An event carries its own templates, separate from the booths' everyday set. While the event runs (its dates plus one night of grace), every booth in the event shows the event's templates instead of its own. When the event ends, the booths return to their usual assignments by themselves.

You set the event's templates on the event's **Setup** tab, in the **Template** card:

- **Choose a template** opens the browser of free template packs from Pixture, when packs are available. Each pack brings its print layouts, a GIF overlay and a matching kiosk look, and **Use this pack** copies all of that into the event.
- **Manage Templates** opens the same modal as on a booth, so you can pick from your own template projects.

![Manage Templates modal on an event](/img/docs/event-manage-templates-modal.webp)

Until at least one template is assigned, the card warns: "Assign at least 1 template. Until you do, guests at this event have nothing to pick." The **Templates** picker on the Create Event form does the same job at creation time. See [Events](../events.md).

## Checking Where a Template Is Used

Each card on the Template Projects list shows a booth count badge, such as "20 booths". Open **Assign to booths** from the card menu to see which booths are ticked and to add or remove some. **Manage Template** lists booths from the other direction.

## Pix Starter

Pix Starter accounts come with two ready-made 4x6" templates, Classic Black and Classic White, and both can be assigned to any booth. Creating more templates needs Pix Pro. See [Pix Design Overview](./overview.md).

## Related

- [Template Editor](./creating-templates.md)
- [Folders and Categories](./folders-and-collections.md)
- [Booth Management](../booth-management.md)
- [Events](../events.md)
