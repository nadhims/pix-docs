---
sidebar_position: 2
title: Home Screen
description: Configuring the home screen that guests see when approaching the photobooth.
tags: [desktop-app, session, home-screen, branding]
---

# Home Screen

The home screen is the first thing guests see when they approach your photobooth. It displays your branding and a clear call-to-action to start a session.

## CMS-Driven Layout

The home screen layout is managed entirely from your Pix dashboard -- no code or app changes required. The layout engine renders pages based on a CMS configuration that includes:

- **Background image or color** -- full-screen backdrop for your booth
- **Logo** -- your organization or event logo
- **Text blocks** -- welcome messages, event name, instructions
- **Start button** -- the primary call-to-action that kicks off the session flow

<!-- Screenshot: Home screen with custom branding and start button -->

:::tip
Design your home screen to be visually inviting and obvious. A large, centered "Tap to Start" button works best in kiosk settings where guests need zero instruction.
:::

## Customizing the Home Screen

To update the home screen:

1. Log into your Pix dashboard at [pixapp.id](https://pixapp.id).
2. Navigate to your booth's settings.
3. Edit the **Home Page** layout -- upload backgrounds, add text, position your logo.
4. Save. The desktop app pulls the new layout on its next sync (usually within seconds).

## Branding

Your home screen should match your event or business branding. You can customize:

- Background image (recommended: match your display resolution, e.g., 1920x1080)
- Logo placement and size
- Button color and text
- Font and text color for any on-screen copy

:::info
Changes made in the dashboard are reflected in the app without needing to restart. The app syncs layout data from the API periodically and on each session reset.
:::

## Attract Mode

When the booth is idle, the home screen serves as an attract screen. Guests walking by should immediately understand they can interact with it. Consider:

- Using motion or animation in your background (supported via video backgrounds)
- Keeping text minimal and large
- Placing the booth at eye level with the screen facing foot traffic

## Idle Timeout

If a session is in progress but the guest stops interacting, the app returns to the home screen after the configured idle timeout. This keeps the booth available for the next guest.
