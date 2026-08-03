---
sidebar_position: 7
title: Offline Resilience
description: How the Pix Desktop App handles sessions and uploads when internet connectivity is lost.
tags: [desktop-app, offline, queue, resilience]
---

# Offline Resilience

The Pix Desktop App is designed to keep running even when your internet connection drops. The kiosk should never go down because of a WiFi hiccup.

## How It Works

When the app detects it is offline, it continues operating normally with a few adjustments:

- **Sessions run uninterrupted** -- capture, compositing, filters, and printing all work without internet.
- **Uploads are queued** -- photos that would normally upload to the Pix cloud are stored locally and placed in an upload queue.
- **QR codes are deferred** -- the sharing screen shows a message that the photo will be available online once connectivity is restored.

:::info
The app caches your booth configuration, templates, and branding locally. Even if the internet drops at any point during operation, the booth will keep working with the last synced configuration.
:::

## Upload Queue

Every session produces soft files that need to reach the Pix cloud (composites, GIFs, live photo videos, singles). When online, these upload immediately. When offline, they enter a persistent queue.

The queue:

- **Persists across restarts** -- queued items survive app restarts and even system reboots.
- **Auto-retries** -- when connectivity returns, the queue begins processing automatically. Failed uploads are retried with exponential backoff.
- **Preserves order** -- uploads are processed in the order they were captured.

<!-- Screenshot: Upload queue indicator showing pending items -->

## Dead-Letter Handling

If an upload fails repeatedly (e.g., the file is corrupt or the server rejects it), the item is moved to a **dead-letter queue** after multiple retries. Dead-lettered items:

- Are not retried automatically
- Can be inspected and retried manually from the [Admin Panel](./admin-panel.md)
- Include error details to help diagnose the failure

:::caution
Check the dead-letter queue periodically, especially after stretches of poor connectivity. A few items ending up there is normal, but a large number may indicate a configuration issue.
:::

## Working Without Internet

For kiosk locations with no internet access at all (remote sites, no WiFi), the booth works perfectly for capture and print. Microsites (QR code sharing and guest pages) will become available once you reconnect the device to the internet and the queue drains.

:::tip
If you know a kiosk location has no reliable internet, pre-sync your booth by launching the app and completing one test session while online. This ensures all templates and branding are cached locally.
:::

## Monitoring Queue Status

The app shows a small indicator in the corner when items are queued. You can view detailed queue status in the [Admin Panel](./admin-panel.md).
