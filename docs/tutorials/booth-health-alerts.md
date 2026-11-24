---
sidebar_position: 11
title: Watch Booth Health and Get Alerts
description: See which booths are online and working, give each booth opening hours so a closed night is not an outage, get alerts on your iPhone, and report, note and resolve incidents with your team.
tags: [tutorials, health, monitoring, alerts, incidents, opening hours]
---

# Watch Booth Health and Get Alerts

In this tutorial you will read the **Health** page, open one booth to see what it reports, give your booths opening hours, turn on alerts on your iPhone, and log, annotate and close incidents. At the end you will know within minutes when a booth stops working, without standing next to it. Allow about 20 minutes.

## When to Use It

- **A self-service booth in a mall.** Nobody watches it. Opening hours plus alerts tell you when it did not open on time, went offline in the afternoon, or ran out of paper, before the venue calls you.
- **A multi-booth studio.** Ten booths in five places: **Live** puts the ones with a problem on top, and **History** shows which venue loses the most hours over two months.
- **Event rental.** Before guests arrive, open **Event health** and check that every event booth is online with its camera and printer ready.
- **A pop-up box.** Report the things the booth cannot see (a payment that would not go through, a power cut, a customer complaint) so you have a record when you talk to the venue.

Health shows what the booth reports. It does not fix the camera or printer for you: for that, see [Troubleshooting](../desktop-app/troubleshooting.md).

## Before You Start

- Any plan: Health works on Pix Starter and Pix Pro.
- Booths paired and running the Pixture Photobooth app. Printer faults need app 1.2.41 or newer, the paper counter needs 1.2.44 or newer.
- To change opening hours, your role must manage booths and include every booth in the account. Anyone who can open Health can read everything and report incidents.
- For alerts: an iPhone with the Pixture Manager app, signed in to your account. See [Run Your Account from Your iPhone](./iphone-app.md).

## Prepare

- **Name each booth by place** ("Grand Mall L2", "Airport T3 Gate 5"). Health, alerts and the incident list all show booth names, and "Booth 3" tells you nothing at 7 in the morning.
- **Write down each venue's real hours**, including the days it opens later. You set them once per pattern ("Mall hours", "Evenings"), not once per booth.
- **Know your paper rolls.** The paper count starts from the roll size you pick, for example 400 prints for a DNP 4x6 roll.

## Step 1: Read the Live list

1. Click **Health** in the sidebar. **Live** lists every booth, problems first: Offline, then Critical, Warning, Healthy, and Closed last. Click a status pill to show only those booths.
2. **Now** says what the booth reports in plain words: "Printer · Paper Jam", "Camera · Disconnected", "Did not open today", or "All good".
3. **Hours today** shows the booth's opening hours and when it came online ("Online at 09:58", "Not online yet"), once it has hours (Step 3).
4. **Last 14 days** is one square per day: green open all day, amber a late start or short outage, red an hour or more lost.
5. **Last seen** is when the computer last checked in.

![Health Live tab with the status pills, Now, Hours today, Last 14 days and Last seen marked](/img/docs/steps/tutorials-booth-health-alerts--live.webp)

The booth checks in every 5 minutes while it runs. It is **Online** when its last check-in is less than 12 minutes old, **Offline** after that. The list refreshes itself every 30 seconds. A version marked **outdated** means a newer Pixture Photobooth app is out.

On an account with events, Health follows your workspace: **Pixture Kiosk** lists self-service booths, **Pixture Event** shows **Event health** (event booths, only while their event is running or still to come), the **Overview** lists every booth.

## Step 2: Open one booth

Click a booth row.

1. A problem shows on top with what to do: "Printer: Paper Jam. Open the printer cover and carefully remove the jammed paper."
2. The readings: connectivity, camera, printer, paper, storage, upload queue, network, memory and temperature. "Not reported" means this booth does not send that reading.
3. Under **Printer**, after you load a new roll, click **New roll loaded**, pick the roll size (or **Custom amount**) and click **Start counting**. The booth picks it up within 5 minutes and counts down from the full roll.
4. **History** (the last 60 days, one bar per day), **Incidents** (this booth only) and **Hours** (change this one booth's hours).

![A booth's Now tab with the problem, the readings, New roll loaded and the History, Incidents and Hours tabs marked](/img/docs/steps/tutorials-booth-health-alerts--booth-view.webp)

An offline booth shows no readings: what it sent last may no longer be true.

## Step 3: Give your booths opening hours

Without hours, every night a booth is switched off counts as an outage. With hours, Health knows the difference.

1. On the **Live** tab, click **Opening hours**.
2. Click **Add hours**, name them ("Mall hours"), set the opening and closing time for each day, switch off closed days, and click **Save hours**. Tick **New booths start on these hours** on the hours most of your booths use.
3. Click the booth count beside the hours ("142 booths") and tick the booths that follow them.
4. Set **Count as late after**: 5, 15 or 30 minutes after opening time.

![Opening hours with the Opening hours button, Add hours, the booth count and Count as late after marked](/img/docs/steps/tutorials-booth-health-alerts--opening-hours.webp)

What changes for a booth with hours:

- Off outside its hours or on a closed day: **Closed**. No incident and no alert.
- Off inside its hours: **Offline**, an incident, and an alert.
- Not online by opening time plus the late allowance: an **Opened late** incident and one "not open yet" alert. Once it comes online the day reads "Online 47 min late".

:::info Hours start tomorrow
"Changes apply from tomorrow. Times follow your account's time zone." Today is never judged again. Hours end at midnight at the latest; hours past midnight and one-off holiday dates are not supported yet. Opening hours are for self-service booths: **Pixture Event** does not show the button.
:::

## Step 4: Turn on alerts on your iPhone

Health alerts arrive as push notifications in the Pixture Manager iPhone app, on every iPhone signed in to the account. There are no alert emails or WhatsApp messages for booth problems.

1. Install Pixture Manager and sign in with your Pixture account.
2. Allow notifications when the app asks, or turn on **Push Notifications** in the app's **Settings**.
3. Open **Notification Settings** and choose which alerts this iPhone gets.

<!-- SHOT-NEEDED: phone: Pixture Manager Notification Settings screen with Push Notifications and the alert switches marked -->

What sends an alert:

| Alert | When |
|---|---|
| Booth offline | No check-in for 12 minutes (inside its hours, when it has hours) |
| Back online | It returns after being offline. A booth with hours switched on in the morning sends nothing |
| Not open yet | A booth with hours is not online by opening time plus the late allowance |
| Booth error | The camera, the printer (paper out, jam, cover open, off, error, missing), the screen, memory, temperature, low storage, or a wrong computer clock. Once per new problem |
| Paper low | At 20% of the roll and again at 10 prints left, then once more when it reaches 0 |

The same alert about the same thing on the same booth is sent at most once every 5 minutes, so a flickering printer does not flood your phone.

## Step 5: Work through incidents

Every outage, late opening and camera, printer, paper, screen, memory or temperature failure becomes an incident.

1. Click the **Incidents** tab. The number on it is how many are still open.
2. Pick the period (**Last 24 hours**, **Last 7 days**, **Last 30 days** or **Last 60 days**), a type, and **Open** or **Resolved**.
3. **Reported by** says **Automatic** or the name of the person who reported it.
4. **Download CSV** saves every incident that matches your filters, to send to Pixture support or keep for the venue.

![Health Incidents tab with the tab, the filters, Reported by and Download CSV marked](/img/docs/steps/tutorials-booth-health-alerts--incidents.webp)

Click a row for its details, its notes, and the likely cause when Pixture could work one out. An automatic incident closes itself when the booth recovers. Incidents are kept for 90 days.

## Step 6: Report what the booth cannot see

1. Click **Report incident**, then **Choose** the booth. (Inside a booth's view, its **Incidents** tab has the same button with the booth already chosen.)
2. Under **What happened**, pick Printer error, Camera error, Payment problem, Screen disconnected, Power or internet, Customer complaint or Other.
3. Set **Started**.
4. Write a **Note**: what you saw, who called, what you tried.
5. Leave **Still happening** on, or switch it off and set when it **Ended**.
6. Click **Report incident**.

![Report incident with Choose, What happened, Started, Note, Still happening and Report incident marked](/img/docs/steps/tutorials-booth-health-alerts--report-incident.webp)

A reported incident never sends an alert, and the booth's own readings never close it.

## Step 7: Add notes and mark it resolved

1. Open an incident and type in **Add a note**.
2. Click **Save note**. Each note keeps who wrote it and when.
3. Click **Mark resolved** when it is fixed.

![An incident with Add a note, Save note and Mark resolved marked](/img/docs/steps/tutorials-booth-health-alerts--notes.webp)

Notes work on automatic incidents too, but only a reported incident has **Mark resolved**. A report cannot be edited or deleted afterwards: add a note to correct it.

## Step 8: Look back over 60 days

1. Click the **History** tab: one row per booth, one square per day, today on the right.
2. The legend: **Open all day**, **Late or short outage** (under 1 hour lost), **Down over 1 hour**, **Closed**, **No record**.
3. Sort by **Least open first** to see the booths that lose the most time, or by **Name**.
4. **Download CSV** saves one line per booth per day.

![Health History tab with the History tab, the legend, Least open first and Download CSV marked](/img/docs/steps/tutorials-booth-health-alerts--history.webp)

The column on the right is how much of its opening hours each booth was open. A booth without hours has no percentage: it is green on days it was online and hollow on the others.

## Check It Worked

- Quit the Pixture Photobooth app on a test booth during its opening hours. Within about 12 minutes it shows **Offline** in red, an **Offline** incident opens, and your iPhone gets an alert.
- Start the app again: the booth turns Healthy, the incident closes, and a "back online" alert arrives.
- A booth with hours that is switched off at night shows **Closed** and sends nothing.

## Tips

- **Check Live 30 minutes before opening and before an event.** Camera, printer and paper problems show before the first customer does.
- **Press New roll loaded every time you change paper.** The count only works from a known full roll; without it the booth cannot warn you about paper.
- **Use a note as a shift handover.** "Printer cleaned, 280 sheets left, ribbon low" on the incident tells the next person what was done.
- **Send the CSV, not screenshots,** when you ask Pixture support about a booth: it has the times and the details.
- **Read History before renewing a venue deal.** A venue whose booth is red every Saturday has a power or Wi-Fi problem worth raising.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| A booth is Offline every night | It has no opening hours | Give it hours (Step 3); off outside them becomes Closed |
| The booth is fine but shows Offline | The app is closed, the computer slept, or the venue Wi-Fi dropped for over 12 minutes | Check the booth's internet and that sleep is off. See [Make the Booth Start by Itself After a Power Cut](./start-after-a-power-cut.md) |
| New hours do nothing today | Hours start the day after you set or change them | Wait until tomorrow |
| No **Opening hours** button | You are in Pixture Event, or your role does not manage every booth | Switch to Pixture Kiosk, or ask the owner |
| Paper shows nothing | The booth has not counted a roll yet, runs app older than 1.2.44, or is offline | Update the app, then **New roll loaded** |
| No alerts on my iPhone | Notifications are off for the app or for that alert, or the iPhone is signed in to another account | Turn on **Push Notifications** and the alert in **Notification Settings** |
| A reported incident is still open after the booth recovered | Reported incidents only close by hand | Open it and click **Mark resolved** |

## Related

- [Health](../dashboard/health.md)
- [Read Your Dashboard](./read-your-dashboard.md)
- [Run Your Account from Your iPhone](./iphone-app.md)
- [Printer Setup](../desktop-app/printer-setup.md)
- [Booth Operations Checklist](../guides/booth-operations-checklist.md)
