---
sidebar_position: 4
title: Templates and Screens Problems
description: "Fixes for template and booth screen problems: \"No Templates Assigned\" or a template missing on the booth, the operator menu that will not open, photos not inside the frame, sideways photos, mirrored or reversed photos, a voucher or payment screen on a free booth, a booth screen that looks cut off or is not full screen, and slow template loading."
tags: [troubleshooting, templates, pix-design, ui-editor]
---

# Templates and Screens Problems

Start here when the booth shows the wrong design, the wrong screens, or photos that sit wrongly in the print. Most of these are settings in Pix Design rather than faults. Problems are ordered by how often operators report them.

### My template is not on the booth

**On screen:** "No Templates Assigned" with "Go to Dashboard > Booths > (booth) > Templates to assign templates." Or the booth runs, but your new template is not among the choices.

**Also described as:** "sudah setting template tapi tidak ada di booth", "template tidak muncul", "template baru tidak keluar".

**Check first:** **Booths > booth > Configure > Templates**: is the template ticked there? If the booth is running an event, the event's **Template** list is the only one it offers.

**Fix:**
1. A saved template reaches a booth only once it is assigned. Assign it from the booth's **Templates** tab, or from the template card menu with **Assign to booths**. See [Assigning Templates](../dashboard/pix-design/assigning-templates.md).
2. On an event, add the template to the event's **Template** setting instead. The booth's own templates are not offered while the event runs. See [Events](../dashboard/events.md).
3. Give the booth a moment online to pick the change up.

**Still stuck:** Send support the booth name and the template name.

### The operator menu will not open

**On screen:** Nothing happens when you tap the top-right corner. Or the **Enter Admin PIN** pad appears and says "Incorrect PIN".

**Also described as:** "cara buka panel admin", "dulu bisa pakai Esc, sekarang tidak bisa", "tidak ada menu kamera setting", "where is the settings menu".

**Check first:** Which corner the lock is set to: **Pix Design > UI Editor > Start Screen**, the **Lock button** setting. It can be **Top right** (the default), **Top left**, **Bottom right** or **Bottom left**.

**Fix:**
1. Tap the lock corner twice within three seconds. A faint padlock marks it; the padlock is hidden when part of your design covers that corner, but the double tap still works there.
2. On an event's Start screen the lock is a visible button: tap it. Its corner is the **Lock button** setting on the event's start screen. The other event screens keep it in the top right.
3. There is no keyboard shortcut. The Esc key does not open the menu.
4. A PIN is set: type it on the **Enter Admin PIN** pad. Forgotten it? In the dashboard open **Booths > booth > Settings > Menu PIN** and change or disable it.

**Still stuck:** Send support the booth name and a photo of the screen. See [Operator Menu](../desktop-app/admin-panel.md).

### The photo is not inside the frame

**On screen:** No error. The photo is hidden behind the design, or a white or coloured box sits where the photo should be.

**Also described as:** "template PNG tidak kedeteksi", "foto tidak masuk frame", "why can't I set up the slot".

**Check first:** Open the template in **Pix Design > Template Editor** and look at the **Photo Slots** panel. A slot appears for each transparent area of the PNG.

**Fix:**
1. The photo shows only through fully transparent areas of the PNG. Export the design as a PNG with a see-through window where each photo goes; a JPG or a white box is not transparent.
2. Already uploaded with solid boxes? Use **Remove BG** in the editor to make them transparent, or draw a slot over the artwork and leave **Cut out artwork** ticked.
3. Save, and the booth picks the change up.

**Still stuck:** See [Template Editor](../dashboard/pix-design/creating-templates.md), then send support the template name.

### Photos come out sideways

**On screen:** No error. The camera is mounted in portrait, but photos come out landscape or turned.

**Also described as:** "kamera diputar jadi portrait tapi hasilnya masih landscape", "foto miring", "photo is rotated".

**Check first:** The app version in the menu footer, and **Camera Settings > CAMERA ROTATION**.

**Fix:**
1. Update the app. Versions before 1.1.107 could turn photos from some cameras twice.
2. On **Camera Settings**, set **CAMERA ROTATION** to 90, 180 or 270 until the preview stands the right way up. It applies to the live view, the photos and the prints.
3. For a portrait booth screen, use a portrait UI project too. See [The booth screen looks cut off](#the-booth-screen-looks-cut-off-or-is-not-full-screen).

**Still stuck:** Send support the camera model, the app version and a sample print.

### Photos are mirrored or reversed

**On screen:** No error. Text in the background reads backwards on the photo and print, or the photo is the other way round from what you expect.

**Also described as:** "kenapa hasilnya jadi terbalik", "foto kebalik", "prints are mirrored".

**Check first:** **Camera Settings > MIRROR LIVE VIEW**. It is the same switch as **Pix Design > UI Editor > Capture > Live View > Mirror live view**, and it is on by default.

**Fix:**
1. With **Mirror live view** on, guests see themselves like a mirror and the saved photo is mirrored the same way, like a selfie. Turn it off for photos that read the right way round, as the camera sees them.
2. Change it on Camera Settings or in Pix Design. It is a UI project setting, so every booth on that UI project follows.
3. On an event, the event's **Mirror** setting ("Mirror captured photos") decides instead. See [Events](../dashboard/events.md).
4. Only one photo flipped? The guest tapped **Mirror** on the Review screen for that photo. See [Review and Adjust](../desktop-app/session-flow/review-and-adjust.md).

**Still stuck:** Send support the booth name and a sample print.

### A voucher or payment screen shows at a free booth

**On screen:** At every start the Payment screen or the voucher box ("Enter Voucher Code", **Apply Voucher**) appears, although the booth should be free.

**Also described as:** "voucher code masih muncul setiap mau foto", "kenapa ada halaman bayar", "payment screen at a free event".

**Check first:** Is the booth on an event? Then the event decides. If not, open the booth's UI project in **Pix Design > UI Editor > Payment Screen**: is **Voucher** on under **Payment Methods**? It is on by default.

**Fix:**
1. On a booth (not an event), the Payment screen shows at every start while its **Voucher** method is on, even when the price is 0 and **Payment on this booth** is off. That is how a booth gated by voucher codes works.
2. To run free, open **Pix Design > UI Editor > Payment Screen** and, under **Payment Page Settings**, untick **Enabled in session flow**. Or keep the page and turn off **Voucher** under **Payment Methods**, and remove any voucher button you added to the design.
3. Save the UI project, then restart the booth app: operator menu, **Exit**, **Exit App**, and open it again.
4. On an event, the event's **Pay Per Session** switch decides: off, every session is free. Run a one-off free event from the **Events** page. See [Events](../dashboard/events.md) and [Run an Event](../tutorials/run-an-event.md).

**Still stuck:** Send support the booth name and the name of its UI project.

### The countdown did not change

**On screen:** The booth still counts down from 3 (or the old number) after the countdown was changed.

**Also described as:** "sudah diubah countdown ke 5, tapi masih mulai dari 3 detik", "countdown setting not working".

**Check first:** Which mode is the booth in? The booth's **Capture Settings** page (Photo, Video and 360/Slow-mo cards, "No ongoing event — this booth shoots photos") and the event's **Video** and **360/Slow-mo** tabs apply only in **Event mode**. In **Kiosk mode** the countdown comes from the booth's UI project.

**Fix:**
1. **Kiosk mode:** open **Pix Design > UI Editor**, open the UI project the booth uses, go to the **Capture** page and set the **countdown** in its page settings. **Session Time** and the **Camera trigger** are set there too.
2. Save the UI project, then start a new session on the booth to check.
3. **Event mode:** set the countdown on the event (**Events**, the event, **Setup**, the mode's tab). See [Event Video Modes](../desktop-app/event-video-modes.md).

**Still stuck:** Send support the booth name and the name of its UI project.

### Guests cannot retake

**On screen:** The Review screen after each shot has no way to take the photo again, or every tap moves on to the next shot, although session time is left.

**Also described as:** "tidak bisa retake padahal waktu masih ada", "foto ulang tidak bisa", "retake button missing".

**Check first:** The booth's UI project in **Pix Design > UI Editor > Review** tab. With **Advanced mode** on, the booth shows only what the design has: a guest can retake only if a **Retake Button** or a click area with the action **Retake** is on the page.

**Fix:**
1. On the **Review** tab, select each button and click area and check its action. A new button or click area on this page starts as **Next**, so a design built from click areas easily ends up with Next everywhere.
2. Set one of them to **Retake**, or add a **Retake Button**. Or turn **Advanced mode** off: the fixed Review layout always has Retake.
3. Check **Review Settings**: Retake shows only while the hide-Retake switch is off.
4. Save the UI project and start a new session to check. Retake still disappears on its own when the **Session Time** runs out.

**Still stuck:** Send support the booth name and the name of its UI project.

### The booth screen looks cut off or is not full screen

**On screen:** No error. The design looks different on the booth than in the editor, has bands at the edges, or the app sits in a window.

**Also described as:** "desain UI tidak sesuai dengan device", "tampilan terpotong", "aplikasi tidak full layar".

**Check first:** The UI project's **Orientation** (**Landscape** 1920 x 1080 or **Portrait** 1080 x 1920) against the booth's screen.

**Fix:**
1. The booth scales the whole design to fit the screen and keeps its shape, so a landscape design on a portrait screen, or the other way round, shows small with bands. Use a UI project whose orientation matches the screen. See [UI Editor](../dashboard/pix-design/ui-editor.md).
2. The login and pairing screen is a normal window by design. The booth goes full screen once it is paired.
3. A paired booth still in a window: operator menu, **Exit**, **Exit App**, and open it again.

**Still stuck:** Send support a photo of the booth screen, the screen's resolution and the UI project name.

### The booth is slow to load templates

**On screen:** Template cards fill in one by one.

**Also described as:** "template lama munculnya", "loading templates is slow".

**Check first:** The booth's internet.

**Fix:**
1. Thumbnails are still downloading. Give it a moment.
2. Run a test session before opening, so the booth has the templates and screens cached.

**Still stuck:** Send support the booth name and the time.

## Related

- [Assigning Templates](../dashboard/pix-design/assigning-templates.md)
- [UI Editor](../dashboard/pix-design/ui-editor.md)
- [Camera Settings](../desktop-app/camera-setup/camera-settings.md)
- [Troubleshooting](../desktop-app/troubleshooting.md)
