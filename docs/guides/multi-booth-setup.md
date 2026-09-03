---
sidebar_position: 2
title: Multi-Booth Setup
description: How to create and manage multiple photobooth stations from a single Pix account.
tags: [guides, multi-booth, management]
---

# Multi-Booth Setup

Pix supports running multiple booths under one account. Each booth has its own templates, settings, and photo session history -- but you manage them all from a single Pix Dashboard.

:::info Licences are per computer
Plans are bought per computer, not per account. Booths cost nothing: create as many as you like. Every computer that needs Pix Pro features needs its own Pix Pro subscription or Day Pass; the rest keep running with the Pixture watermark. Licences move between computers from **Devices**.
:::

## Step 1: Create Your Booths

1. Open the **Pix Dashboard** and go to **Booths**
2. Click **Add Booth** and give it a descriptive name (e.g., "Mall Kiosk 1", "Cafe Location")
3. Repeat for each fixed location where you're running a booth

:::tip
Name booths by their location -- it makes monitoring much easier when you're managing several kiosk locations.
:::

<!-- Screenshot: Creating a new booth in Pix Dashboard -->

## Step 2: Assign Templates to Each Booth

Each booth can have its own set of templates, letting you offer different photo layouts at different locations.

1. Go to **Pix Design** in the Pix Dashboard
2. Select a template and open its details
3. Under **Booth Assignments**, choose which booths should use this template
4. Repeat for each template you want to assign

A single template can be assigned to multiple booths, or you can give each booth a unique set.

:::info
Templates are managed centrally in Pix Design and pushed to booths via the CMS. Changes sync automatically the next time the desktop app refreshes.
:::

## Step 3: Log In to Each Desktop App

On each physical booth computer:

1. Open the **Pix Desktop App**
2. Log in with your account credentials
3. When prompted, **select the correct booth** from the list
4. The app loads that booth's templates, settings, and home layout

Each desktop app instance is tied to one booth at a time. Make sure you pick the right one during login.

:::caution
Double-check the booth name after login. A booth can only be paired to one computer at a time, so two kiosks can never report as the same booth and analytics will be inaccurate.
:::

<!-- Screenshot: Booth selection screen in Desktop App -->

## Step 4: Monitor All Booths from Dashboard

The Pix Dashboard home screen gives you a live overview of all active booths:

- **photo session counts** for each booth in real time
- **Upload status** -- see if any booth has pending uploads
- **Revenue** -- track per-booth earnings if you charge customers

Click any booth card to drill into its photo sessions, gallery, and analytics.

<!-- Screenshot: Dashboard home showing multiple active booths -->

## Tips for Managing Multiple Locations

- **Label your hardware.** Put the booth name on each laptop with tape, especially if you're configuring several before shipping them out to their locations.
- **Plan connectivity per location.** Each site needs its own reliable connection -- mall Wi-Fi, cafe Wi-Fi, or a dedicated mobile hotspot. Don't assume one connection can serve multiple locations.
- **Stagger setup.** Get one location fully working before starting the next -- it's easier to troubleshoot one at a time.
- **Arrange a local point of contact** at each location (venue staff on-site) for basic issues like paper jams, plus a regular visit schedule of your own for maintenance and restocking.
