---
title: Release Notes
description: What changed in recent versions of the Pixture Photobooth app.
---

# Pixture Photobooth app Release Notes

The Pixture Photobooth app updates itself in the background and asks to restart when the booth is idle. See [Software Updates](/docs/desktop-app/software-updates). The version a booth is running is shown at the bottom of its operator menu and on the dashboard's Health page.

## 1.2.38 (8 November 2026, Mac and Windows)

- **Max prints per session** for an event now goes up to 99 (it was 10). Set it on the event page: **Output** › **Change** › **Max prints per session**. Booths on 1.2.37 or older still stop at 10.

## 1.2.37 (7 November 2026, Mac and Windows)

- Canon: new **EXTERNAL FLASH** switch in **Camera Settings** › **CAPTURE**. Canon DSLRs such as the EOS 600D do not fire a non-Canon flash or a wireless trigger during live view, which the booth uses. With the switch on, the booth pauses live view for each photo so the flash fires. See [Lighting & Flash](/docs/desktop-app/camera-setup/lighting-and-flash).
- Canon: the **Camera Settings** menus (ISO, aperture, shutter speed and the rest) list only the values the camera allows, and follow the mode dial and the lens. They used to show Canon's whole list.
- New **Queue Line**: customers take a number on their phone and a screen calls them to the booth. Every booth in the Multi-Booth group needs 1.2.37 or newer. See [Queue Line](/docs/guides/queue-line).

## 1.2.36 (7 November 2026, Mac and Windows)

- The **Print** button on the Share screen appears right away. On some Windows computers it took up to 10 seconds, while the app waited for a slow printer list.

## 1.2.35 (6 November 2026, Mac and Windows)

- The sign-in screen no longer offers **Try it without an account**. Every booth runs on a Pixture account; a computer that was running without one asks you to sign in at its next start.
- Tapping **Retake** after the session time is up shows "Time's up. No more retakes." instead of doing nothing.
- The strip and live photo on the Sharing screen fill their box edge to edge, with no rounded corners.
- On weak Wi-Fi, **Start** no longer waits up to 4 seconds for a layout check the booth made in the last two minutes.
- The filter screen opens and responds more smoothly: filter previews are prepared in the background.

## 1.2.34 (5 November 2026)

- On a portrait event start screen, the mode buttons sit two per row with every row centred. A single mode no longer sits off to the left. See [Event Start Screen](/docs/dashboard/event-start-screen).

## 1.2.33 (5 November 2026)

- Email and text fields on the booth share one full touch keyboard, with capitals, numbers and every symbol. Email fields keep **@** and **.com** on the letters page.
- The PIN pad also takes a physical keyboard: the number keys or the numpad, Backspace, Enter to check and Escape to cancel.

## 1.2.32 (5 November 2026)

- New **Photo review** setting for events, under **Timer** in the start screen editor: how long each photo stays on screen with Retake and Next before the booth moves on. 10 seconds by default. See [Event Start Screen](/docs/dashboard/event-start-screen).

## 1.2.31 (5 November 2026, Mac and Windows)

- New **Email my photos**: Pix Pro booths show an **Email** button on the sharing screens, so people send their photos to themselves. See [Email My Photos](/docs/desktop-app/session-flow/email-my-photos).

## 1.2.30 (5 November 2026, Mac and Windows)

- Promos from **Marketing Studio** › **Promo** reach the booth. Discounted packages show a badge, the old price struck through and a countdown to the end of the promo. See [Marketing Studio](/docs/dashboard/marketing-studio).
- A promo that ends while a customer is choosing is never charged at the old price: the booth goes back to the packages with "That promo just ended."
- Promo codes typed in the voucher box apply to the chosen package. The start screen can show a promo line, and Pay 1 get 1 promos offer the free extra session.

## 1.2.29 (4 November 2026, Mac and Windows)

- New **Photographer** mode, which replaces Roaming. A photographer shoots each group, and every group gets its print and QR. See [Photographer](/docs/dashboard/events#photographer).
- New **Mingle** mode: carry the booth to your guests. It runs the Photo session on a computer you carry around. See [Mingle](/docs/dashboard/events#mingle).
- A Kiosk computer gets its own video and slow-mo settings (clip length and so on) back after leaving an event.

## 1.2.28 (4 November 2026, Mac and Windows)

- A computer used for both Kiosk and Event no longer keeps the event's GIF, video or slow-mo overlay in Kiosk sessions after leaving the event. It was applied even after the GIF template was deleted. A computer that already had a leftover overlay clears it on its next check-in.

## 1.2.27 (2 November 2026)

- A Sony on a Mac no longer makes the booth restart the camera after most Studio shots. The booth now treats the live view as frozen only when the picture stays the same for 5 seconds, which a Sony saving a photo never reaches.

## 1.2.26 (2 November 2026)

- A camera restart in the middle of a Studio session no longer deletes the live photo frames of the shots already taken, so the session keeps its live photo.

## 1.2.25 (31 October 2026, Mac)

- On a Mac, **MEDIA SIZE** in **Printer Settings** lists the printer driver's own paper names with their sizes, and marks 4x6" (10x15 cm) as **4R**. Some printers, such as the Epson L8050, showed no 4R before. See [Printer Setup](/docs/desktop-app/printer-setup).
- Windows stays on 1.2.24; nothing changed there.

## 1.2.24 (31 October 2026, Mac and Windows)

- New event **Steps**: the start screen editor can turn off **Adjust your photos**, **Choose a filter** or **Retake** for quicker Photo and Notes sessions. See [Event Start Screen](/docs/dashboard/event-start-screen#steps).

## 1.2.23 (30 October 2026, Mac and Windows)

- When a template uses one photo in more than one slot, the strip on the booth shows each copy with its photo, as on the print.
- The sign-in screen says why a sign-in failed instead of "HTTP 401:".

## 1.2.22 (29 October 2026, Mac)

- New **2-INCH CUT** switch in the booth's **Printer Settings** for DNP printers on a Mac, so a 2-inch cut template is cut into two strips. See [Printer Setup](/docs/desktop-app/printer-setup) and [Printer troubleshooting](/docs/troubleshooting/printer).
- A Mac-only release. Windows stays on 1.2.21.

## 1.2.21 (29 October 2026, Mac and Windows)

- With **Payment on this booth** off, the booth skips the Payment screen, whatever payment methods its UI project's Payment page has. Before, a Payment page with the **Voucher** method on still asked for a code. See [Booth Pricing](/docs/dashboard/booth-pricing).
- Windows booths move up from 1.2.17 and also get Newspaper mode and the corner padlock from 1.2.19.

## 1.2.20 (29 October 2026, Mac)

- Fujifilm and Nikon cameras are detected on a Mac. Since their support arrived in 1.1.123, a Mac did not find them. See [Fujifilm](/docs/desktop-app/camera-setup/fujifilm) and [Nikon Z](/docs/desktop-app/camera-setup/nikon-z).
- Windows stays on 1.2.17.

## 1.2.19 (28 October 2026, Mac)

- New **Newspaper** mode: customers see themselves live in a newspaper page on the Start screen, swipe between newspapers, pay, then fill the page shot by shot. It uses templates whose **Media Type** is **Newspaper**. See [UI Editor](/docs/dashboard/pix-design/ui-editor).
- Every Pix Design page, Start included, shows the faint corner padlock: double-tap the corner to open the operator menu, then type the PIN if your account has one. It replaces the round lock button; event screens keep their own lock button.
- A Sony such as the A7 IV connects on a Mac. macOS kept hold of the camera, so the connection failed after a few seconds.
- Windows stays on 1.2.17; these changes reach Windows in 1.2.21.

## 1.2.18 (27 October 2026, Mac)

- Cameras work again on Macs running macOS 13 to 15. Since late September the app's camera helper failed to start on those versions, so no camera (Canon, Sony, Nikon, Fujifilm or webcam) could connect, and the booth showed `BRIDGE_NOT_CONNECTED`. Download the update from [pixture.io/download](https://pixture.io/download).
- Windows stays on 1.2.17; this fix only affects Macs.

## 1.2.17 (26 October 2026, Windows)

- Fixes "Camera Disconnected" on Windows booths where the camera helper could not unpack its files. Install it from [pixture.io/download](https://pixture.io/download); the booth stays paired.

## 1.2.16 (24 October 2026, Mac and Windows)

- The start-up screen no longer hangs on "Restoring cached data" when the venue's internet stalls while the booth downloads new template art. It gives up after 30 seconds and loads the art when it is needed.

## 1.2.15 (23 October 2026)

- **Start Booth** moves to the corner of the operator menu's top bar, and **Exit** to the bottom of the settings column.
- **Launch event** goes straight to the start screen when Pix Pro or an Event Pass is already running on the computer.
- **Back to events** always returns to the event list in one tap.

## 1.2.14 (23 October 2026)

- New operator menu: a top bar with the Internet, API and Uploads status and the plan badge, a card that checks the camera, printer, price, payments, storage and clock before you start, with start screen and template previews, and the settings buttons in a column on the right. See [Operator Menu](/docs/desktop-app/admin-panel).

## 1.2.13 (23 October 2026, Mac and Windows)

- Video mode records the guest's voice through the computer's default microphone. A Mac asks for microphone access once. 360/Slow-mo stays music only, and a computer without a microphone makes a silent video as before. See [Event Video Modes](/docs/desktop-app/event-video-modes).

## 1.2.12 (23 October 2026, Mac and Windows)

- Event Video and 360/Slow-mo sessions end on the event Share screen, with the video playing beside **Scan QR**.
- An event can have a list of video overlays: each guest gets the next one in turn. Still and moving overlays both work, and if an overlay cannot be laid over the clip, the guest still gets the video without it. See [Event Video Modes](/docs/desktop-app/event-video-modes).

## 1.2.11 (23 October 2026, Mac and Windows)

- A fresh install on a Mac goes full screen after pairing, without a restart.
- **Exit** and **Logout** never end an event, and the booth no longer asks "Is the event over?". An event ends by its dates or from the dashboard.

## 1.2.10 (22 October 2026, Mac and Windows)

- The sign-in and pairing screens open in a normal window you can move and close. The booth goes full screen once it is paired, and back to a window after a logout.

## 1.2.9 (21 October 2026, Mac and Windows)

- **Event mode**: an event computer stays signed in between events and opens on the list of your events. Pick one and click **Launch event**; **Start Booth** in the operator menu puts Pix Pro or an Event Pass on the computer. Email sign-in can also put a computer in Event mode, and an archived event sends the computer back to its list. See [Event Mode](/docs/desktop-app/event-mode).
- Payment method tiles follow your Brand colour.
- Text and icons over a photo or live view background stay light and readable, whatever the screen's background colour.
- Dashboard links in the app open in the computer's browser.

## 1.2.8 (17 October 2026, Mac and Windows)

- Accounts in the Pix AI beta whose UI project has no AI page no longer get a blank page after the photos.

## 1.2.7 (17 October 2026, Mac and Windows)

- Pix AI comes back by itself after the booth restarts. Available to beta accounts.

## 1.2.6 (17 October 2026, Mac and Windows)

- An event's settings are kept through a restart, even without internet.
- Notes at events: the guest writes on the event's note template, which shows their latest photo. The note is saved as its own file, so the photo strip and live photo stay clean.
- **Adjust your photos**: after the last shot, Photo and Notes sessions can show every photo at once to move, zoom and swap them. See [Review and Adjust](/docs/desktop-app/session-flow/review-and-adjust).

## 1.2.5 (17 October 2026, Mac and Windows)

- Payment method pictures fill their tiles.
- Category buttons animate and can be centred.
- The **Share buttons** block can show the QR code right on the screen.

## 1.2.4 (17 October 2026, Mac and Windows)

- **Several modes on one booth.** A UI project can offer Photo, Studio and Notes side by side: the Start screen gets **Mode buttons** and each session follows the mode the customer taps. Each mode can have its own price under **Price per mode** on the booth's Pricing tab. See [UI Editor](/docs/dashboard/pix-design/ui-editor) and [Booth Pricing](/docs/dashboard/booth-pricing).
- New **Payment methods** block, one tile per method, hidden when a method is not available. The **Cash** tile opens "Insert cash" and says how many coins or notes to put in when the booth knows their value.
- New **Share buttons** block with **Scan QR**, **AirDrop** on a Mac and **Print**. Print asks for payment first when extra prints have a price, and reads **Extra print** when the screen already prints by itself. There are no free extra prints unless you set some.
- Pix Design pages move like the event screens. Timers show as a clock pill whose last seconds turn red, and the Start screen shows the lock button in the corner and at the opacity set in Pix Design.
- Template cards scroll in the same carousel as the event's Pick a layout screen.
- One Review design for events and Pix Design: **Next** shows the time left, such as "Next (8s)". On Review, customers drag a photo to move it, pinch to zoom, and **Mirror** flips every photo of the session.

## 1.2.3 (16 October 2026)

- Unlinking a computer on the dashboard signs the booth out at its next idle moment on the start screen, never in the middle of a session.
- Mac booths can send the photos to a guest's iPhone with AirDrop from the event Share screen.
- With no menu PIN, the event lock button opens the operator menu on a double tap instead of a press and hold.
- Event screens fill any screen shape with no bars, and Capture is a full-screen live view with icon-only Retake and Mirror.
- The event filter screen shows the print with the filters in one row under it, and is skipped when the Pix Design Filter page is off.

## 1.2.2 (15 October 2026, Mac and Windows)

- Each event mode can have its own price. See [Events](/docs/dashboard/events).
- **AI** joins the event modes for accounts in the Pix AI beta: the guest picks a style, takes one photo and gets an AI portrait in the event's layout. See [Pix AI](/docs/dashboard/pix-design/pix-ai).
- Event sessions get a **Choose a filter** screen with **Next**, a review of each shot beside the strip so far, and a Share screen that shows the print and the live photo.
- The event payment popup is redesigned, with a **QR payment** tab (QRIS payment on rupiah booths) and a small **Staff access** link.
- On event Capture, the live view shows only the photo's crop, darkened under **TAP TO START**. One countdown ring runs, and each shot flies into its place in the tray.

## 1.2.1 (15 October 2026, Mac and Windows)

- New **Show a Print button on Share** setting for events, on by default. Off, guests only get the auto print. When the limit is reached the button reads "No prints left".
- More event start screen design: subtitle, title and date lines with their own size, colour and show switch, three new fonts, a free logo position, a hint line switch and background blur. See [Event Start Screen](/docs/dashboard/event-start-screen).
- The event lock button always shows on the start screen, with an opacity setting. With no menu PIN it opens the operator menu after a 1.5-second hold.
- Events can set the **Session time** and the **Note time**. The session clock shows on Capture, and a strip cut short by the time repeats the photos already taken.
- Events choose how Notes prints: the print with the note, soft files only, or the strip without the note.
- Event modes are named **Photo**, **Notes** and **360/Slow-mo**.
- New **Roaming** mode (now [Photographer](/docs/dashboard/events#photographer)): a photographer shoots, and each photo is its own session, with **Retake** or **Use photo** before it is saved.
- On or after an event's last day, an event computer asks "Is the event over?" before it exits or logs out. (Removed in 1.2.11.)

## 1.2.0 (10 October 2026, Mac and Windows)

- New event **start screen**: guests pick a mode (Photo, Video, 360/Slow-mo, Studio or Notes) from round buttons on a screen you design on the event page. Events created before it keep working as they are. See [Event Start Screen](/docs/dashboard/event-start-screen).
- Event sessions run on the Pixture event screens in your colours: Pick a layout, Capture with a countdown ring and a tray of shots, a look and filter screen, Write a note and Share.
- Share prints one sheet by itself and keeps to the event's prints per session. A **Gallery** button reopens this booth's event sessions to scan or print again.
- When the event takes payment, guests pay in a popup after tapping a mode. Staff can start a free staff session with the menu PIN (4 to 8 digits); the PIN pad locks for 60 seconds after 5 wrong tries.

## 1.1.132 (9 October 2026, Mac and Windows)

- Codes from the online session shop grant the package the customer bought (Double, Group or extra sessions) again. Since 1.1.101 they granted one Single session. See [Sell Sessions Online](/docs/tutorials/sell-sessions-online).
- On a touchscreen, only the booth's own keypad opens; the system keyboard no longer pops up as well.

## 1.1.131 (9 October 2026, Mac and Windows)

- The app is now called **Pixture Photobooth** (it was Pix), on the Mac, in the Windows shortcuts and in the operator menu's version line. It updates in place and keeps the booth's sign-in, pairing, settings and waiting uploads. Window titles keep their "Pix" names, so cash systems set up with them keep working. See [Installation](/docs/desktop-app/installation).

## 1.1.130 (8 October 2026)

- Behind-the-scenes fixes and stability work.

## 1.1.129 (8 October 2026)

- A computer just paired to an event no longer shows "Device limit reached, please call the operator" over its "Use an Event Pass for today?" screen.

## 1.1.128 (7 October 2026)

- New drawing screen for Notes sessions: customers draw on their photos with a pen, marker, pencil or highlighter, a colour wheel, swatches and a size slider, with erase, undo and redo. The drawing goes on the print, the share and the live photo. See [UI Editor](/docs/dashboard/pix-design/ui-editor).

## 1.1.127 (4 October 2026, Mac and Windows)

- On an event computer without Pix Pro or an Event Pass, the start screen asks "Use an Event Pass for today?" with **Use Event Pass**, **Use Pix Pro** when one is free, or a QR code to **Buy Event Passes** on your phone. See [Pix Pro on the Booth](/docs/desktop-app/licence-on-the-booth).
- New **Pair with a code** in the operator menu moves a running computer to another booth or event without logging out, so its Pix Pro moves with it.

## 1.1.126 (3 October 2026)

- A tap beside the payment QR no longer cancels the payment. Customers steadying their phone to scan had cancelled payments that their bank still completed. While a QR is showing, only the corner X closes it.

## 1.1.125 (29 September 2026)

- Behind-the-scenes fixes and stability work.

## 1.1.124 (29 September 2026)

- Camera settings are saved as soon as the camera confirms a change. A quick **Save** could store the old value, so settings seemed to shift after a session.

## 1.1.123 (28 September 2026)

- Support for Sony Alpha, Nikon Z and Fujifilm X and GFX cameras. See [Supported Cameras](/docs/reference/supported-cameras).

## 1.1.122 (27 September 2026)

- Behind-the-scenes fixes and stability work.

## 1.1.121 (26 September 2026)

- Filtered live photos no longer swap red and blue.
- Lighter on low-end PCs: live view, hand gestures, filters and video encoding use less of the computer, with the same output quality.
- Live photo clips keep their full length when the camera is late or a dialog covers the window.
- New **Graphics acceleration** setting in **Admin Panel** › **System**: Auto, On or Off. Auto keeps it off on Windows and on on Mac; if the graphics card crashes, the app turns it off by itself.
- The Admin Panel's uploads list shows one status per session (Uploaded, Uploading, Waiting or Failed) with a date filter, next to a tidier print history.

## 1.1.120 (26 September 2026)

- The line under the payment QR follows the booth's currency, naming QRIS, QR Ph, PromptPay or PayNow, or "Scan with your phone camera to pay" for a card checkout link.

## 1.1.119 (26 September 2026)

- New **Mirror live view** switch in **Camera Settings**. It is the same switch as Pix Design's Capture setting, so every booth on the UI project follows it.

## 1.1.118 (25 September 2026)

- Overlapping photo slots are drawn in the order set in the template editor with **Bring to front** and **Send to back**.
- A booth priced at 0 shows the Payment screen when its Voucher payment method is on, so customers enter a code. (Changed in 1.2.21: with payment off, the booth skips Payment.)

## 1.1.117 (23 September 2026)

- The QR block's code fills the block, as the editor draws it, instead of sitting small with a wide margin.

## 1.1.116 (23 September 2026)

- Live photos no longer show black bars when the Live View block uses a Camera Frame ratio.
- On a screen shaped differently from the design, the bands beside a background picture continue its edge, with no seam or hairline.

## 1.1.115 (22 September 2026)

- Apple Silicon Macs run live photos, filters and GIFs natively again. The app now bundles its own arm64 video tools, so Rosetta is no longer needed. Encoding had failed on Apple Silicon without Rosetta since 1.1.111.
- The live photo tile on the Sharing screen stops waiting if encoding fails, instead of spinning.

## 1.1.114 (21 September 2026)

- New **Preview Cards** block for the Capture screen in Pix Design: one square card per template slot, numbered while empty, filled as each shot lands, with the current slot ringed. The row scrolls when a template has many slots.

## 1.1.113 (21 September 2026)

- Live photos compose and encode much faster on the Sharing screen. They had taken 30 to 60 seconds.

## 1.1.112 (21 September 2026)

- The event's GIF overlay is now drawn on session GIFs.
- Tap-to-start works on the first launch after installing.

## 1.1.111 (20 September 2026)

- Bad venue internet no longer loses photos. Network failures retry on a short schedule (up to every 5 minutes) and never count toward the upload give-up limit.
- AI generation runs as a job and the booth checks on it for up to 5 minutes, so a slow generation no longer times out. Available to beta accounts.

## 1.1.110 (19 September 2026)

- **AI portrait pickup**: a guest who bought an AI portrait print on their phone gets a 7-character pickup code. Typed into the voucher box on the Payment screen, the booth prints the portrait, shows "Printing your portrait. Take it from the tray." and returns to the start screen. Available to beta accounts.

## 1.1.109 (15 September 2026)

- Before skipping the Payment screen for a free session, the booth confirms the price with a fresh check (up to 1.5 seconds), so a booth that was just switched to paid does not give away a session.

## 1.1.107 and 1.1.108 (15 September 2026)

- Stills from a vertically mounted Canon are no longer sideways.
- The crop guide follows the actual camera frame for portrait-mounted cameras.

## 1.1.106 (14 September 2026)

- Every ISO currency displays the way the dashboard shows it, for example MX$150.50 or KWD 1.250. Needed for booths priced in a currency other than rupiah or dollars.
- The tax label follows the currency (IVA for MXN and CLP).
- Coin payments settle correctly on currencies with fractional units.

## 1.1.105 (10 September 2026)

- When Pix Pro, an Event Pass or the free trial ends on a computer, the popup names what ended and offers **Manage devices**, a QR code to your Licenses page on pixture.io. Guests see "Please call the operator."

## 1.1.104 (9 September 2026)

- **Pix Pro per computer.** Pix Starter accounts run watermarked with printing on. On a Pix Pro account, a computer beyond the devices you own is blocked: it refuses to start sessions and shows a notice.
- New **Use a pass on this device** button and a licence badge in the operator menu. The start screen only informs; actions sit behind the PIN.
- Notices on the idle screen 60 and 15 minutes before an Event Pass or trial ends, and a banner when a payment fails.
- Output never downgrades in the middle of a session. If the computer is offline when Pix Pro ends, it turns watermarked rather than blocked.
- **Try it without an account** on the login screen runs the booth with built-in frames and screens, watermarked, without cloud sharing.

## 1.1.103 (5 September 2026)

- The operator menu shows a banner when the computer's clock is more than 2 minutes off, since a wrong clock breaks payments and licence checks.

## 1.1.102 (5 September 2026)

- **Multi-Booth group codes**: 8-character codes bought at a central cashier work at any booth in the group. The voucher box accepts 6 to 8 characters, and Central Cashier booths open the Payment screen straight on the code step.
- Event video mode reaches the booth, with the event's intro, outro and soundtrack added to the guest's video, portrait recording, the overlay designed in the dashboard, and a **Keep original clip** option that saves the untouched recording next to the app's videos.
- Template cards on the booth use the thumbnail rendered by Pix Design.

## 1.1.101 (28 August 2026)

- Vouchers bought in the online session shop carry the package (Single, Double, Group and additional sessions) in a 7-character code. Older 6-character codes still work and grant one Single session.

## 1.1.100 (28 August 2026)

- New **CAMERA ROTATION** setting (0, 90, 180 or 270) under Camera Settings for cameras mounted sideways or upside down.
- Studio mode: every shot from the pool is shared as a single, and pool shots get live photos.

## 1.1.99 (28 August 2026)

- Studio mode: **Done** appears only once the template's minimum number of shots is reached, and the last-shot card opens a session gallery where a shot can be removed.
- The built-in buttons on the Review screen size to their blocks, and the Retake button and photo counter can be switched off in Pix Design.

## 1.1.98 (28 August 2026)

- **Studio mode.** The guest takes free shots, then assigns them to the template's slots on the Assign photos screen. The shoot ends on time, on a shot count or when the guest taps Done, with a cap of 40 shots. Each shot gets a Next or Retake review.
- A remote shutter (clicker, foot switch or F13 key) takes the shot in Studio mode.

## 1.1.97 (27 August 2026)

- The package picker on the payment screen now uses its full width, so booths with a single package no longer get a cramped "Additional sessions" row.

## 1.1.96 (27 August 2026)

- **Print format**: the payment screen shows the number of pieces guests take home when Booth Pricing is set to 2 inch cut or triple strip. What is printed does not change.
- The total line on the payment screen now counts prints correctly for multi-session purchases.

## 1.1.95 (25 August 2026)

- **Tax and fees** from Booth Pricing are shown on the payment screen as separate lines, with the subtotal sent to the payment gateway.
- The QR payment popup can be branded from the UI Editor, and the print mockup follows the print format, up to 12 prints.
- Operator settings pages use a consistent slider control.

## 1.1.94 (24 August 2026)

- Live photos are ready in about a second on the Sharing screen instead of about eight.
- Live Photos now carry the guest's chosen filter, as the composite and GIF already did.
- Live Photos match the mirror orientation of the prints on webcam booths.
- Template cards on the booth draw the card shadow set in Pix Design.

## Earlier

Older versions are listed in the dashboard's Health page per booth. If a booth is more than a few versions behind, leave it on the start screen with internet for a few minutes and it will update itself.
