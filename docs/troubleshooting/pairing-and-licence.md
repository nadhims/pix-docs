---
sidebar_position: 2
title: Pairing and Pix Pro Problems
description: "Fixes for pairing and licence problems: Generate code greyed out or refused, \"Invalid pairing code\", an expired or used code, the old computer still on the booth after Logout, an Event Pass bought but the booth still watermarked, \"Device limit reached\", a popup saying Pix Pro or the pass ended, and \"Pix Pro ended, reconnect to check\"."
tags: [troubleshooting, pairing, pix-pro, event-pass]
---

# Pairing and Pix Pro Problems

Start here when a computer will not pair to a booth, or pairs but runs watermarked or blocked. Problems are ordered by how often operators report them. In the dashboard, pairing lives on the booth's **Computer** tab (the booth app's help text still calls it the Device tab), and Pix Pro and Event Passes live on the **Computers** page in the sidebar.

### I cannot get a pairing code

**On screen:** In the dashboard, **Generate code** is greyed out with "Unlink the current computer before pairing a new one." Or the **Pair a computer** popup says "Pix Starter runs on one computer" ("Add Pix Pro to pair a second computer."), "All N computers are in use" ("Deactivate one to free it up, or add another computer to your subscription.") or, on an event, "Get Pix Pro or an Event Pass first".

**Also described as:** "code isn't generating", "generate code tidak mau diklik", "kode pairing belum muncul", "where is the pairing code".

**Check first:** **Booths > booth > Configure > Computer**. Is a computer already listed there? Then check the plan: Pix Starter, Pix Pro, or Event Passes.

**Fix:**
1. **Where the code is:** **Booths**, pick the booth, **Configure**, the **Computer** tab, **Generate code**. The 6-digit code goes into the pairing screen on the booth computer.
2. **Greyed out:** the booth already has a computer. One booth holds one computer. Click **Unlink** on the same tab, then **Generate code**. Replacing a booth's computer this way always works, even on Pix Starter.
3. **"Pix Starter runs on one computer":** another booth already has your one Pix Starter computer. Unlink it from that booth, or add Pix Pro or an Event Pass on the **Computers** page.
4. **"All N computers are in use":** every Pix Pro place on your subscription is on a computer. On **Computers**, **Deactivate** one you no longer use, or **Add computer**.
5. **On an event, "Get Pix Pro or an Event Pass first":** each event computer needs an Event Pass or Pix Pro. Buy one, then pair from the event's **+ Pair a computer**. See [Events](../dashboard/events.md).

**Still stuck:** Send support the booth name and a screenshot of the Computer tab or the popup.

### The booth says the code is invalid, used or expired

**On screen:** On the booth's pairing screen: "Invalid pairing code. Please check the code and try again.", "This pairing code has already been used. Please generate a new code from the dashboard." or "This pairing code has expired. Please generate a new code from the dashboard."

**Also described as:** "kode pairing tidak bisa", "code expired", "invalid code".

**Check first:** The countdown in the **Pair a computer** popup. A code lasts 10 minutes and works once.

**Fix:**
1. Make sure you typed the newest code. **New code** and every new **Generate code** cancel the previous one.
2. Expired or used: click **New code** in the popup and type it within 10 minutes.
3. Type the code on the booth computer, in Pixture Photobooth's **Pairing Code** tab, not on the computer you use for the dashboard.

**Still stuck:** If a fresh code still fails, send support the booth name, the exact message and the time you tried.

### The old computer is still on the booth after Logout

**On screen:** The booth's **Computer** tab still lists the old computer, and **Generate code** stays greyed out.

**Also described as:** "sudah logout di komputer lama tapi kodenya belum muncul", "logout didn't unlink".

**Check first:** **Booths > booth > Configure > Computer**.

**Fix:**
1. Logout on the booth unlinks the computer only when the booth reaches Pixture at that moment. A computer that was offline, switched off or reset never told the dashboard.
2. Click **Unlink** on the Computer tab, then **Generate code** for the new computer.
3. Before you reset, reinstall or hand over a computer, check the menu footer reads **Uploads: up to date**. See [Photos are missing after the computer was reset](./uploads-and-sharing.md).

**Still stuck:** Send support the booth name and the old computer's name.

### I bought an Event Pass but the booth is still watermarked

**On screen:** The menu badge reads **Watermarked**, and photos carry the Pixture watermark. Starting a pass on a computer that never paired shows "This device is not registered with Pixture yet. Pair it to a booth first, then try again."

**Also described as:** "sudah bayar, cara klaimnya gimana", "event pass sudah dibeli tapi masih watermark", "how do I use my pass".

**Check first:** You are standing at the booth computer, not the computer you use for the dashboard. The booth is paired and online.

**Fix:**
1. An Event Pass never starts by itself. On the booth computer, open the operator menu and tap **Use an Event Pass on this computer**. Its 24 hours start now.
2. On an event, the booth shows "Use an Event Pass for today?" instead: tap **Use Event Pass**.
3. Check the badge now reads **Event Pass until HH:mm**.

**Still stuck:** Send support the booth name and a photo of the operator menu with its badge. See [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md).

### "Device limit reached"

**On screen:** On the booth, "Device limit reached". Guests see "Please call the operator." The menu badge reads "Blocked, all N devices active".

**Also described as:** "what does device limit mean", "booth blocked", "tidak bisa mulai sesi".

**Check first:** The **Computers** page: how many places your Pix Pro subscription has and which computers hold them.

**Fix:**
1. **Deactivate** a computer you no longer use on **Computers**, or **Add computer** to buy another place.
2. The blocked computer picks up Pix Pro on its next check-in, within a few minutes.
3. For one day, an Event Pass also unblocks it: **Use an Event Pass on this computer** in the operator menu.

**Still stuck:** Send support the booth name and a screenshot of the Computers page.

### A popup says the Event Pass, trial or Pix Pro has ended

**On screen:** "Your Event Pass has ended", "Your free trial has ended" or Pix Pro ended on this computer, with **Manage devices** and **Keep the watermark for now**.

**Also described as:** "event pass habis", "trial ended", "watermark muncul lagi".

**Check first:** The menu badge, and the **Computers** page.

**Fix:**
1. Tap **Manage devices** and scan the QR code to open the Computers page on your phone.
2. Start another Event Pass with **Use an Event Pass on this computer**, or renew Pix Pro. A session already running finishes clean.

**Still stuck:** Send support the booth name and the time the popup appeared.

### "Pix Pro ended, reconnect to check"

**On screen:** The menu badge reads "Pix Pro ended, reconnect to check".

**Also described as:** "pix pro ended", "watermark padahal sudah langganan".

**Check first:** The menu footer line **Internet**.

**Fix:**
1. Pix Pro expired while the booth was offline, so it turned watermarked. Get the booth online.
2. On its next check-in it clears the watermark if your account still has a place for it.

**Still stuck:** Send support the booth name and the app version.

### Cannot re-pair after Logout

**On screen:** Pairing is refused although the computer was logged out.

**Also described as:** "tidak bisa pairing lagi setelah logout".

**Check first:** The app version in the menu footer.

**Fix:**
1. Update the app. Older versions left Pix Pro on the computer at Logout; current versions return Pix Pro and the trial to your account.
2. A running Event Pass leaves the computer at Logout but keeps running with the same end time. The next event computer that starts its booth continues it; a computer in Kiosk mode cannot.

**Still stuck:** Send support the app version and the booth name.

## Related

- [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md)
- [Computers and Pairing](../dashboard/device-management.md)
- [Add or Move a Computer](../tutorials/add-or-move-a-computer.md)
- [Troubleshooting](../desktop-app/troubleshooting.md)
