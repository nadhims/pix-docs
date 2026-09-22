---
sidebar_position: 7
title: Filters
description: The filter strip guests choose from, the 14 built-in looks and custom .cube filters, per-booth assignment, and how the chosen filter reaches every output.
tags: [desktop-app, photo-session, filters, effects, lut]
---

# Filters

The Filter screen lets the guest pick a colour look for their photos before sharing. This page covers what the guest sees, the built-in and custom filters, how to choose which filters a booth offers, how to turn the screen on or off, and where the chosen look ends up. Filtering happens on the booth, so it needs no internet.

## What the Guest Sees

The screen shows a **Filter Preview** block with the guest's photos and a **Filter Strip** below or beside it. The strip is a grid of cards, each showing one of the photos with that filter applied, so the guest sees the real result before choosing. Tapping a card applies it to the preview; the guest then taps Next. **Original** is always in the strip and applies nothing.

The strip's grid, card size and card ratio (from 16:9 to 1:1, square by default) are set on the Filter Strip block in the UI Editor. The cards take their corner radius from the strip.

## Where the Filter Goes

The chosen filter is applied to the print, the GIF and the live photo alike, so the animation and the clip on the share page match the print in the guest's hand. Only the photos are graded; the template's background and borders stay as designed.

## Built-in Filters

The booth ships with 14 looks, plus Original:

- **Warm Vintage**, **Cool Blue**, **Black & White Classic**, **Sunset Glow**, **Film Noir**, **Soft Pastel**, **Golden Hour**, **Moody Teal**, **Sepia Tone**, **High Contrast**, **Faded Film**, **Rose Tint**, **Arctic** and **Cinematic**.

## Custom .cube Filters

Custom filters are standard 3D LUT files in the `.cube` format, the same format colourists use in video editing, so you can build a signature look for your brand and put it on every booth.

1. In the dashboard, open **Pix Design > Photo Filters**.
2. Click **Upload Filter**, give it a **Filter Name** and choose the **.cube File**.
3. The filter joins the built-in ones for every booth that has it assigned.

Each organisation can hold up to 50 custom filters. **Delete Filter** removes one.

## Choosing Filters per Booth

By default every booth offers all filters, built-in and custom, and the Filters tab says so: "No explicit assignments — all filters available by default." To curate a set for one booth:

1. Open **Booths**, pick the booth and open its **Filters** tab.
2. Click **Manage Filters**.
3. Tick the filters to offer. **Select all** and the Assigned, Not Assigned, All Types and Custom filters help with long lists.
4. Click **Save Filter Assignments**.

A beachside booth can offer warm looks only, a corporate activation only monochrome; the booth picks the change up on its next check-in.

## Turning the Screen On or Off

The Filter screen is a page of the booth's UI project. In the UI Editor, open the **Filter** tab and tick or untick **Enabled in session flow** in the page settings. With it off, the session goes from Capture straight to Sharing, which shaves a few seconds off every session at a high-traffic booth.

:::tip
Previews render on the booth and appear in the background while the guest looks, so a long strip of custom filters does not slow the screen down.
:::

## Related

- [Pix Design](../../dashboard/pix-design/overview.md)
- [Booth Management](../../dashboard/booth-management.md)
- [UI Editor](../../dashboard/pix-design/ui-editor.md)
- [Sharing](./sharing.md)
