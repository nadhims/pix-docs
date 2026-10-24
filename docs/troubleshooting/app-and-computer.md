---
sidebar_position: 7
title: App and Computer Problems
description: "Fixes for problems with the Pixture Photobooth app and the booth computer: the app will not download or install, the app sits in a window, the Clock warning, Storage running low or almost full, the app freezing or closing, the app not starting after a power cut, and the computer sleeping during an event."
tags: [troubleshooting, desktop-app, installation, computer]
---

# App and Computer Problems

Start here when the problem is the app or the computer rather than the camera, printer or uploads. Problems are ordered by how often operators report them. The operator menu lists most of these under **Before you start** when it opens.

### The app will not download or install

**On screen:** A browser or Windows warning, such as Windows SmartScreen's "Windows protected your PC".

**Also described as:** "download diblokir, katanya unsafe download", "tidak bisa download aplikasi di Windows", "can't install the app".

**Check first:** You downloaded the installer from [pixture.io/download](https://pixture.io/download), and the computer is a Mac on macOS 13 or later or a 64-bit Windows 10 or 11 PC.

**Fix:**
1. Windows SmartScreen: click **More info**, then **Run anyway**. The Windows installer is not code-signed yet, so SmartScreen warns the first time.
2. macOS: open Pixture Photobooth from Applications and click **Open** when macOS asks to confirm.
3. General tip: if the browser flags the download, choose to keep the file. Only do this for the installer from pixture.io.

**Still stuck:** Send support the operating system version and a screenshot of the warning. See [Installation](../desktop-app/installation.md).

### The app sits in a window, not full screen

**On screen:** The app shows in a normal window with a title bar.

**Also described as:** "aplikasi tidak full layar", "cara agar aplikasi booth full screen".

**Check first:** Is the computer paired? The login and pairing screen is a normal window by design.

**Fix:**
1. Pair the computer. The booth goes full screen once it is in use.
2. A paired booth still in a window: operator menu, **Exit**, **Exit App**, then open Pixture Photobooth again.
3. A design that looks cut off or banded is a UI project setting. See [Templates and Screens Problems](./templates-and-screens.md#the-booth-screen-looks-cut-off-or-is-not-full-screen).

**Still stuck:** Send support the app version and a photo of the screen.

### The operator menu shows a Clock warning

**On screen:** **Clock**: "This computer's clock is 5 min behind. Fix the date and time in the system settings. Photos and payments are timed by it." The amount and "behind" or "ahead" follow your clock.

**Also described as:** "jam komputer salah", "clock warning".

**Check first:** The computer's date, time and time zone.

**Fix:**
1. Set the date and time to automatic in the operating system's settings.
2. Reopen the operator menu. The warning clears when the clock is within 2 minutes.

**Still stuck:** Send support the app version.

### Storage running low or almost full

**On screen:** **Storage running low** (under 3 GB free) or **Storage almost full** (under 1 GB), with "Photos and printing can fail when the disk is full." and **Free Up Space**.

**Also described as:** "storage penuh", "disk full".

**Check first:** The menu footer **Uploads** line. Photos that have not uploaded are never cleaned away.

**Fix:**
1. Tap **Free Up Space**, then **Clean storage** in the Admin Panel. It removes local copies of photos that have already uploaded.
2. Below 1 GB the booth also cleans up by itself.
3. If the Admin Panel says it has nothing left to clean, delete other files on the computer.

**Still stuck:** Send support the free space shown and the **Uploads** line.

### The app freezes or closes by itself

**On screen:** The app stops responding, or disappears.

**Also described as:** "aplikasi hang", "aplikasi tertutup sendiri", "app crashed".

**Check first:** Free disk space, other programs running, and the app version.

**Fix:**
1. Restart the app: operator menu, **Exit**, **Exit App**, then open it again. If the menu does not open, restart the computer.
2. Close other programs, and check free disk space.
3. Update to the current version with **Check for Updates** in the menu footer.
4. Check the computer meets the [System Requirements](../reference/system-requirements.md): 8 GB of RAM at least.

**Still stuck:** Send support the time it happened, the app version and the logs. See [Where the Logs Are](../desktop-app/troubleshooting.md#where-the-logs-are).

### The app did not come back after a power cut

**On screen:** The computer restarted to its desktop, without the booth.

**Also described as:** "setelah mati listrik aplikasi tidak jalan", "app doesn't start automatically".

**Check first:** **Admin Panel > Start on boot**.

**Fix:**
1. Turn on **Start on boot** in the Admin Panel. The app then opens whenever the computer starts.
2. Open Pixture Photobooth now by hand.

**Still stuck:** Send support the app version and the operating system.

### The computer sleeps during an event

**On screen:** The screen goes dark, or the camera disconnects after the booth has been idle.

**Also described as:** "laptop sleep sendiri", "layar mati sendiri".

**Check first:** The computer's power and sleep settings.

**Fix:**
1. Plug the computer into power and switch off sleep for the day.
2. General tip: set the display to never turn off, and on Windows turn off **USB selective suspend** in the power plan so the camera is not cut when idle.

**Still stuck:** See [Booth Operations Checklist](../guides/booth-operations-checklist.md).

## Related

- [Installation](../desktop-app/installation.md)
- [Operator Menu](../desktop-app/admin-panel.md)
- [Software Updates](../desktop-app/software-updates.md)
- [Troubleshooting](../desktop-app/troubleshooting.md)
