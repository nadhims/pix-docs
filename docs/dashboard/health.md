---
sidebar_position: 11
title: Health
description: Whether every booth is online and working, with opening hours per booth, a day-by-day record of the last 60 days, and incidents you can report, annotate and download.
tags: [dashboard, health, monitoring]
---

# Health

**Health** is the page to open when a booth misbehaves, or before an event starts. It has three tabs. **Live** lists every booth with its status, what it is reporting right now and when it last checked in. **Incidents** is everything that went wrong, including what your team reports by hand. **History** is every booth, day by day, for the last 60 days.

![Health page, Live tab: each booth with its status, what it reports now, its hours today, the last 14 days as squares, today's count and when it was last seen](/img/docs/health.webp)

On an account with events, Health follows the workspace you are in. **Pixture Kiosk** lists your self-service booths, **Pixture Event** lists **Event health**: event booths and any booth attached to an event, and the **Overview** lists every booth. An event booth, or a booth attached to an event, shows only while its event is running or still to come. Once the event is past (from 06:00 the morning after its last date, or once it is ended or archived), its booths leave the list. The Event dashboard also shows a Health card. See [Pixture Event, Pixture Kiosk and Overview](./views.md).

## Live

**Live** is the list of your booths. Booths with a problem come first: Offline, then Critical, Warning and Healthy, and Closed booths last. The list shows 50 booths per page and refreshes by itself every 30 seconds; the note beside the title says how old the data is.

Search by booth name, pick a **Region**, and filter by **All**, **Critical**, **Warning**, **Offline**, **Healthy** or **Closed**. A status with no booths is left out. Your search and filters stay in the page address, so they survive a reload and you can share the link.

| Column | What it shows |
|---|---|
| Booth | The booth's name, its app version (marked **outdated** when a newer one is out) and its region |
| Status | Healthy, Warning, Critical, Offline or Closed. Offline is red when the booth should be open right now |
| Now | What the booth is reporting, in plain words. "No signal for 1h 18m" for an offline booth, "Never connected" for a booth that has not signed in yet, "Dropped 3 times today" for a booth that keeps losing its connection |
| Hours today | The booth's opening hours today and when it came online: "Online at 09:58", "Online 47 min late" or "Not online yet". Shown once a booth has [opening hours](#opening-hours) |
| Last 14 days | One square per day, the same squares as the [History](#history) tab. Hover one to read the day, click it to open that day |
| Today | Sessions and prints so far today |
| Last seen | When the computer last checked in |

## Online or Offline

The booth checks in every 5 minutes while it runs. A booth is **Online** when its last check-in is within the last **12 minutes**, and **Offline** after that. The same rule is used on the Booths page, the Dashboard and the booth's activity log, so they never disagree.

Offline does not always mean something is wrong. A booth switched off at closing time is Offline too. Give your booths [opening hours](#opening-hours) and Health tells the two apart: a booth that is off outside its hours is **Closed**, and Offline then means "should be open and is not".

## Opening Hours

Tell Health when each booth is meant to be open, and it stops treating every night as an outage.

![Opening hours: named weekly hours, the booths that follow each, and the late allowance](/img/docs/health-opening-hours.webp)

1. On the Live tab, click **Opening hours**.
2. Click **Add hours**, give them a name ("Mall hours"), and set each day's opening and closing time. Switch a day off for a closed day.
3. Click the booth count beside the hours and tick the booths that follow them.
4. Tick **New booths start on these hours** on the hours most of your booths use.

What changes for a booth that has hours:

- Off outside its hours, or on a closed day: the status is **Closed**. No incident, no alert, and no "back online" alert when it is switched on in the morning.
- Off inside its hours: **Offline** in red, with the usual incident and alert.
- Not online by opening time plus the late allowance: an **Opened late** incident and one "not open yet" alert. It closes when the booth comes online, and then reads "Online 47 min late". Pick the allowance under **Count as late after**: 5, 15 or 30 minutes.

Good to know:

- Hours start counting the day after you set or change them. Today and past days are never judged again.
- Times follow your account's time zone.
- The latest closing time is midnight. Hours that run past midnight, and one-off closed dates such as holidays, are not supported yet.
- You need to manage every booth in the account to change opening hours. Anyone who can open Health sees them.
- A booth with no hours works as before: every time it goes quiet for 12 minutes is an Offline incident.
- Opening hours are for self-service booths. The **Pixture Event** workspace does not show the button.

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

Click a booth to open its view. It has four tabs (three in Pixture Event, where booths have no opening hours).

![Health booth view, Now tab: the problem on top, the readings, today's count and the printer](/img/docs/health-booth-detail.webp)

- **Now**: any problem on top, with what to do about it. Below it, the booth's readings (connection, camera, printer, paper, storage, uploads, network, memory, temperature), today's sessions and prints, the printer with its paper, the plan, and since when the booth has been online. A reading the booth does not send says "Not reported". An offline booth shows no readings: the last ones it sent may no longer be true.
- **History**: the last 60 days, one line per day. The bar runs from midnight to midnight: green is the time the booth was online. For a booth with opening hours, a late start is amber and time down inside its hours is red; nights stay plain. The right side says how the day went: the number of sessions, "Online 47 min late", "Down 1h 18m", "Did not open", "Closed" or "No record". The totals on top are **Open in its hours**, **Time down** and **Late opens**. A booth without hours shows "Offline 38 min" or "Offline all day" instead. Click a day for the exact times.
- **Incidents**: what went wrong on this booth in the last 60 days, and **Report incident** for this booth.
- **Hours**: today's hours and which hours the booth follows, with a way to change them for this one booth.

![Health booth view, History tab: one bar per day, a late start in amber, time down in red, and the day's result on the right](/img/docs/health-booth-history.webp)

### New Roll Loaded

For a booth computer, the **Printer** section of the Now tab shows "About N of N left", the roll and when it was loaded, or "Not counted yet". After you load a new roll, click **New roll loaded**, pick the roll size or a **Custom amount**, and click **Start counting**. The booth picks it up at its next check-in, within 5 minutes, and starts counting from the full roll. Needs Pixture Photobooth 1.2.44 or newer. See [Paper Counter](../desktop-app/printer-setup.md#paper-counter).

## Incidents

The **Incidents** tab lists every time a booth went offline, opened late, or its camera, printer, paper, screen, memory or temperature failed, plus anything your team reported by hand. The number on the tab is how many are still open.

![Health Incidents tab: totals, filters, Report incident, and the list with who reported each one](/img/docs/health-incidents.webp)

- Totals for the period you picked: **Open now**, **Incidents**, **Time offline** and, once a booth has opening hours, **Opened late**.
- Filter by period (**Last 24 hours**, **7 days**, **30 days** or **60 days**), by type, and by **Open** or **Resolved**. The search and Region at the top of the page apply here too.
- Each row shows when it started, the booth, what happened, how long it lasted, who reported it (a name, or **Automatic**) and whether it is still open. Click a row for the details, the notes and the likely cause, when Pixture could work one out.
- **Download CSV** saves every incident that matches your filters, to send to Pixture support or to keep for your own records.

An automatic incident closes by itself when the booth recovers. Incidents are kept for 90 days.

### Report an Incident

Some problems the booth cannot see: a payment that would not go through, a customer complaint, a power cut. Report them so they sit in the same list.

![Report incident: one booth, what happened, when it started and a note](/img/docs/health-report-incident.webp)

1. On the Incidents tab, click **Report incident**. Inside a booth's view, the same button on its Incidents tab already has that booth chosen.
2. Choose the booth and what happened: Printer error, Camera error, Payment problem, Screen disconnected, Power or internet, Customer complaint or Other.
3. Set when it started and add a note. Switch **Still happening** off if it is already over, and say when it ended.

A reported incident never sends an alert, and the booth's own readings never close it.

### Notes and Mark Resolved

![An incident: when it started, who reported it, the notes and the note box](/img/docs/health-incident-notes.webp)

Open any incident to read its notes or add one. Each note keeps who wrote it and when. Notes work on automatic incidents too.

A reported incident stays open until someone clicks **Mark resolved**. An automatic incident has no such button: it closes when the booth recovers.

Anyone who can open Health can report, add notes and resolve, for the booths their role includes. A report cannot be edited or deleted afterwards; add a note to correct it.

## History

**History** is every booth by day for the last 60 days, the same length of time photos are kept. One row per booth, one square per day, today on the right.

![Health History tab: one row per booth and one square per day for 60 days](/img/docs/health-history.webp)

| Square | The day |
|---|---|
| Green | Open all day |
| Amber, half filled | Less than 1 hour lost: a late start or a short outage |
| Red | 1 hour or more lost inside its hours |
| Flat line | A closed day |
| Hollow | No record, or the booth was offline and has no opening hours |

- Hover a square to read the day. Click it to open that booth's History on that day.
- The right column is how much of its opening hours the booth was open. Order the list by **Least open first** or by **Name**.
- A booth without opening hours is green on the days it was online and hollow on the others. It has no percentage and comes last.
- **Download CSV** saves one line per booth per day.

## App Version and Updates

The version of the Pixture Photobooth app each computer runs is listed on the [Computers](./billing.md) page, in the Version column. The booth updates itself; see [Software Updates](../desktop-app/software-updates.md).

:::tip Name your booths by place
Health lists booths by booth name. A name like "Grand Mall L2" makes this page readable at a glance; rename from the chevron menu on the Booths page.
:::

## Related

- [Dashboard Home](./dashboard-home.md)
- [Troubleshooting](../desktop-app/troubleshooting.md)
- [Booth Operations Checklist](../guides/booth-operations-checklist.md)
