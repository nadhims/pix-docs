---
sidebar_position: 11
title: Health
description: Whether every booth is online and working, with camera, printer, paper and upload signals, a booth view with 60 days of history, and incidents you can filter and download.
tags: [dashboard, health, monitoring]
---

# Health

**Health** is the page to open when a booth misbehaves, or before an event starts. It lists every booth with its status, what the booth is reporting right now, today's count and when it last checked in. Click a booth for its readings and 60 days of history, and open **Incidents** for everything that went wrong.

![Health page: the Live list with Status, Now, Today and Last seen, and the Incidents tab](/img/docs/health.webp)

On an account with events, Health follows the workspace you are in. **Pixture Kiosk** lists your self-service booths, **Pixture Event** lists **Event health**: event booths and any booth attached to an event, and the **Overview** lists every booth. An event booth, or a booth attached to an event, shows only while its event is running or still to come. Once the event is past (from 06:00 the morning after its last date, or once it is ended or archived), its booths leave the list. The Event dashboard also shows a Health card. See [Pixture Event, Pixture Kiosk and Overview](./views.md).

## Live

**Live** is the list of your booths. Booths with a problem come first: Offline, then Critical, Warning and Healthy. The list shows 50 booths per page and refreshes by itself every 30 seconds; the note beside the title says how old the data is.

Search by booth name, pick a **Region**, and filter by **All**, **Critical**, **Warning**, **Offline** or **Healthy**. A status with no booths is left out. Your search and filters stay in the page address, so they survive a reload and you can share the link.

| Column | What it shows |
|---|---|
| Booth | The booth's name, its app version (marked **outdated** when a newer one is out) and its region |
| Status | Healthy, Warning, Critical or Offline |
| Now | What the booth is reporting, in plain words. "No signal for 1h 18m" for an offline booth, "Never connected" for a booth that has not signed in yet, "Dropped 3 times today" for a booth that keeps losing its connection |
| Today | Sessions and prints so far today |
| Last seen | When the computer last checked in |

## Online or Offline

The booth checks in every 5 minutes while it runs. A booth is **Online** when its last check-in is within the last **12 minutes**, and **Offline** after that. The same rule is used on the Booths page, the Dashboard and the booth's activity log, so they never disagree.

Offline does not always mean something is wrong. A booth switched off outside opening hours is Offline too. Look at Last seen: a booth that went quiet at closing time is fine, one that went quiet mid-afternoon needs a call.

## What the Signals Mean

| Signal | What it tells you | Where to look next |
|---|---|---|
| Camera | The booth cannot see or talk to the camera | Cable and power, then the setup page for your camera in [Supported Cameras](../reference/supported-cameras.md) |
| Printer | The printer is out of paper, jammed, has its cover open, is off, paused, in error or missing, or the last print failed (app 1.2.41 or newer) | The printer itself, then [Printer Setup](../desktop-app/printer-setup.md) |
| Paper | Media is low or out | Reload, then press **New roll loaded** (below) or **New roll** on the booth. The count updates after the next print |
| Uploads | Photo sessions are waiting to upload, usually on slow venue Wi-Fi | Nothing is lost; customers' QR links open once the queue clears. See [Offline Mode](../desktop-app/offline-mode.md) |
| Disk | The computer is running out of space | Clear old files on the booth PC |
| Memory | The computer is short of memory | Restart the Pixture Photobooth app |

## Booth View

Click a booth to open its view. It has three tabs.

![Health booth view, Now tab: the problem on top, the readings, today's count and the printer](/img/docs/health-booth-detail.webp)

- **Now**: any problem on top, with what to do about it. Below it, the booth's readings (connection, camera, printer, paper, storage, uploads, network, memory, temperature), today's sessions and prints, the printer with its paper, the plan, and since when the booth has been online. A reading the booth does not send says "Not reported". An offline booth shows no readings: the last ones it sent may no longer be true.
- **History**: the last 60 days, one line per day. The bar runs from midnight to midnight: green is the time the booth was online, red is time without a signal. The right side says how the day went: the number of sessions, "Offline 38 min", "Offline all day" or "No record". Click a day for the exact times.
- **Incidents**: what went wrong on this booth in the last 60 days.

![Health booth view, History tab: one bar per day for 60 days](/img/docs/health-booth-history.webp)

### New Roll Loaded

For a booth computer, the **Printer** section of the Now tab shows "About N of N left", the roll and when it was loaded, or "Not counted yet". After you load a new roll, click **New roll loaded**, pick the roll size or a **Custom amount**, and click **Start counting**. The booth picks it up at its next check-in, within 5 minutes, and starts counting from the full roll. Needs Pixture Photobooth 1.2.44 or newer. See [Paper Counter](../desktop-app/printer-setup.md#paper-counter).

## Incidents

The **Incidents** tab lists every time a booth went offline or its camera, printer, paper, screen, memory or temperature failed. The number on the tab is how many are still open.

![Health Incidents tab: totals, filters and the list of incidents](/img/docs/health-incidents.webp)

- Three totals for the period you picked: **Open now**, **Incidents** and **Time offline**.
- Filter by period (**Last 24 hours**, **7 days**, **30 days** or **60 days**), by type, and by **Open** or **Resolved**. The search and Region at the top of the page apply here too.
- Each row shows when it started, the booth, what happened, how long it lasted and whether it is still open. Click a row for the details and the likely cause, when Pixture could work one out.
- **Download CSV** saves every incident that matches your filters, to send to Pixture support or to keep for your own records.

An incident closes by itself when the booth recovers. Incidents are kept for 90 days.

## App Version and Updates

The version of the Pixture Photobooth app each computer runs is listed on the [Computers](./billing.md) page, in the Version column. The booth updates itself; see [Software Updates](../desktop-app/software-updates.md).

:::tip Name your booths by place
Health lists booths by booth name. A name like "Grand Mall L2" makes this page readable at a glance; rename from the chevron menu on the Booths page.
:::

## Related

- [Dashboard Home](./dashboard-home.md)
- [Troubleshooting](../desktop-app/troubleshooting.md)
- [Booth Operations Checklist](../guides/booth-operations-checklist.md)
