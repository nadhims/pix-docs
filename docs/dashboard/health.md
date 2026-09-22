---
sidebar_position: 11
title: Health
description: Whether every booth is online and working, with camera, printer, paper and upload signals, the booth detail panel, and error records you can download.
tags: [dashboard, health, monitoring]
---

# Health

**Health** is the page to open when a booth misbehaves, or before an event starts. It lists every booth with its status, what the kiosk is reporting, today's count, the paper level and when it last checked in.

![Health page: booth rows with Status, Issues, Today, Paper and Last seen, Error records and Download CSV](/img/docs/health.webp)

## Filters

Search by booth name, and filter by **All**, **Critical**, **Warning**, **Healthy** or **Offline**.

## Columns

| Column | What it shows |
|---|---|
| Booth | The booth and the name of its computer |
| Status | Healthy, Warning, Critical or Offline |
| Issues | What the kiosk is reporting, in plain words |
| Today | Sessions so far today |
| Paper | The printer's remaining media, where the driver reports it |
| Last seen | When the computer last checked in |

## Online or Offline

The kiosk checks in every 5 minutes while it runs. A booth is **Online** when its last check-in is within the last **12 minutes**, and **Offline** after that. The same rule is used on the Booths page, the Dashboard and the booth's activity log, so they never disagree.

Offline does not always mean something is wrong. A booth switched off outside opening hours is Offline too. Look at Last seen: a booth that went quiet at closing time is fine, one that went quiet mid-afternoon needs a call.

## What the Signals Mean

| Signal | What it tells you | Where to look next |
|---|---|---|
| Camera | The kiosk cannot see or talk to the camera | Cable and power, then [Camera Setup](../desktop-app/camera-setup/canon-eos.md) |
| Printer | The printer is missing, paused or in error | The printer itself, then [Printer Setup](../desktop-app/printer-setup.md) |
| Paper | Media is low or out | Reload; the count comes from the printer driver |
| Uploads | Photo sessions are waiting to upload, usually on slow venue Wi-Fi | Nothing is lost; guests' QR links open once the queue clears. See [Offline Mode](../desktop-app/offline-mode.md) |
| Disk | The computer is running out of space | Clear old files on the kiosk computer |
| Memory | The computer is short of memory | Restart the Pix Desktop App |

## Booth Detail Panel

Click a booth row to open its detail panel: the signals above with their last values, today's sessions and prints, and the recent errors from this booth.

![Health booth detail panel](/img/docs/health-booth-detail.webp)

## Error Records

At the bottom of the page, **Error records** lists the errors your kiosks reported. Pick a range (**Last 24h**, **7 days**, **30 days** or **On a specific date**) and click **Download CSV** to send the file to Pixture support, or to keep for your own records.

## App Version and Updates

The version of the Pix Desktop App each computer runs is listed on the [Licenses](./billing.md) page, in the Version column. The current version is 1.1.115. The kiosk updates itself; see [Software Updates](../desktop-app/software-updates.md).

:::tip Name your computers
Health lists booths with the name of their computer. Naming each one by place on the booth's **Device** tab makes this page readable at a glance.
:::

## Related

- [Dashboard Home](./dashboard-home.md)
- [Troubleshooting](../desktop-app/troubleshooting.md)
- [Booth Operations Checklist](../guides/booth-operations-checklist.md)
