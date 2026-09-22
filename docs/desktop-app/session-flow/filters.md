---
sidebar_position: 6
title: Filters
description: Photo filters customers can apply after capture in the Pix Desktop App -- 14 built-in filters plus custom .CUBE LUT support.
tags: [desktop-app, photo session, filters, effects, lut]
---

# Filters

The filter step is an optional part of the photo session flow that lets customers apply a color grading effect to their captured photos before sharing.

## How It Works

After capture, if filters are enabled for the booth, customers see a scrollable strip of filter previews below their photo. Each preview shows the actual photo with the filter applied, so customers know exactly what they're choosing. Tap a filter to select it, then continue to sharing.

<!-- Screenshot: Filter selection screen with preview and filter thumbnails -->

Filter previews are generated in the background, so the interface stays responsive even with many filters available.

## Built-In Filters

The Pix Desktop App ships with 14 curated filters (plus **Original**, which applies none) designed to look great on photobooth captures:

- **Original** -- no filter applied (always available)
- **Warm Vintage** -- warm tones with subtle fading for a retro feel
- **Cool Blue** -- blue-shifted tones for a modern look
- **Black & White Classic** -- timeless monochrome conversion
- **Sunset Glow** -- golden warmth inspired by golden hour
- **Film Noir** -- dramatic contrast with deep shadows
- **Soft Pastel** -- gentle softening for a dreamy effect
- **Golden Hour** -- warm highlights with soft contrast
- **Moody Teal** -- teal-and-orange cinematic grading
- **Sepia Tone** -- classic brown-tinted vintage
- **High Contrast** -- boosted contrast for dramatic results
- **Faded Film** -- desaturated analog film emulation
- **Rose Tint** -- soft pink warmth
- **Arctic** -- cool, desaturated blue tones
- **Cinematic** -- Hollywood-style color grading

## Custom .CUBE LUT Filters

For operators who want precise color grading control, Pix supports uploading custom .CUBE LUT files -- the same format used by professional video editors and colorists.

**To upload custom filters:**

1. Open the Pix dashboard.
2. Navigate to the **Filters** section.
3. Upload your `.cube` file (standard 3D LUT format).
4. The filter appears alongside the built-in options for any booth it's assigned to.

 Custom filters are managed per-booth from the dashboard, so you can curate different looks for different kiosk locations.

:::tip
Create signature filters that match your brand. Clients remember the unique look of your photos, and custom LUTs let you build a distinctive visual style.
:::

## Per-Booth Filter Assignment

By default, all filters (built-in + custom) are available on every booth. You can customize which filters appear for specific booths:

1. Open booth settings in the dashboard.
2. Open the booth and go to its **Filters** tab.
3. Select which filters to include and set their display order.

This lets you curate location-specific filter sets -- for example, only warm tones for a beachside cafe location or only high-contrast options for a corporate brand activation.

## Enabling Filters

Filters are enabled on each booth from the Pix dashboard:

1. Open your booth settings.
2. Toggle **Enable Filters** on.

When disabled, the photo session skips the filter step and goes straight from capture to sharing.

## Performance

Filter processing happens entirely on-device using 3D LUT trilinear interpolation. No internet connection is required. Preview generation takes milliseconds, and final filter application to all captured photos completes in under a second.

## Skipping Filters

For high-traffic kiosk locations where speed is a priority, disable the filter step to shave a few seconds off each photo session. Customers go directly from capture to sharing.
