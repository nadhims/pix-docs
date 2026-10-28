---
sidebar_position: 1
title: Camera Problems
description: "Fixes for camera problems on the Pixture Photobooth app: camera not detected or \"Camera Disconnected\", a camera model that does not work, capture failing while live view works, the camera stopping during the day, \"Camera Cooling Down\", \"Camera is warming up\", the booth picking the webcam, exposure controls that do nothing and the macOS camera permission."
tags: [troubleshooting, camera, desktop-app]
---

# Camera Problems

Start here when the booth cannot see, control or fire the camera. Problems are ordered by how often operators report them. Photos that come out sideways or mirrored are covered on [Templates and Screens](./templates-and-screens.md), because the fix is a setting rather than the camera.

### The camera is not detected

**On screen:** On Home, "⚠ Camera Disconnected" with "Please contact staff for assistance". On the Camera Settings preview, "No Preview" with "No camera detected", "Camera sidecar disconnected" or "Sidecar connection failed — check Diagnostics". In the Preflight Check, "No cameras found — check USB connection". On a Sony, Nikon or Fujifilm the **Error** line can name the cause, for example "Sony connect failed (…) — is USB mode set to PC Remote and the Sony driver installed?", "Fujifilm connect failed … set the camera's USB connection mode to USB Tether Shooting Auto" or "Nikon connect failed … close NX Tether / Nikon apps and replug the camera".

**Also described as:** "kamera tidak terdeteksi", "kamera tak dapat connect", "it says camera disconnected, contact staff", "camera not found".

**Check first:** The operator menu's **Before you start** list shows **Camera** "Not connected". Open **Camera Settings** and read the **STATUS** block: **Sidecar** is the camera helper inside the app, **Camera** says whether a body is connected, and **Error** shows the last thing the camera reported.

**Fix:**
1. Unplug the USB cable and plug it straight into a port on the computer, not a hub or a front-panel port. If that does not help, try another cable. General tip: some USB cables only charge and carry no data, and they look identical.
2. Close every other program that talks to the camera: EOS Utility, Lightroom, Sony Imaging Edge, Fujifilm X Acquire, NX Tether and similar. Only one program can hold the camera.
3. Set the camera's USB mode. A Sony needs **PC Remote**; a Fujifilm needs **USB TETHER SHOOTING AUTO** (**PC SHOOT AUTO** on older bodies). See [Sony Alpha Setup](../desktop-app/camera-setup/sony-alpha.md) and [Fujifilm Setup](../desktop-app/camera-setup/fujifilm.md).
4. A Sony on Windows needs Sony's driver once: **Camera Settings > Show Diagnostics > Install Sony Driver**, approve the Windows prompt, then replug.
5. Turn the camera off and on again. Check it has power: a flat battery or a sleeping camera looks exactly like a missing one.
6. Restart the app completely: operator menu, **Exit**, **Exit App**, then open Pixture Photobooth again. This also restarts the camera helper.
7. With more than one camera plugged in, pick yours under **CAMERA DEVICE** and tap **Set as Default**.
8. General tip: turn off the camera's Wi-Fi and Bluetooth. Many bodies stop USB control while a wireless connection is on.
9. General tip, Windows: in the power plan, turn off **USB selective suspend**, and in Device Manager untick "Allow the computer to turn off this device to save power" on the USB hubs. Windows can otherwise cut the camera after it has been idle.

**Still stuck:** Check the model is on [Supported Cameras](../reference/supported-cameras.md). Then send support the app version from the menu footer, the camera model, a photo of the **STATUS** block, and the camera log: **Camera Settings > Show Diagnostics > Copy Today's Logs**. See [Where the Logs Are](../desktop-app/troubleshooting.md#where-the-logs-are).

### My camera model does not work

**On screen:** Nothing, or the camera is never detected.

**Also described as:** "pake sony a6400 bisa?", "kamera saya tidak didukung", "does my camera work with Pixture", "Lumix not detected".

**Check first:** Find the exact model on [Supported Cameras](../reference/supported-cameras.md). Canon EOS, Sony Alpha, Nikon Z and Fujifilm X and GFX bodies are supported over USB.

**Fix:**
1. Sony A6400, A6600, A7 III and the first ZV-E10, and Nikon D-series DSLRs, cannot be controlled over USB, because the makers do not offer remote control for them.
2. For those, and for any other brand, use the camera through a capture card or use a webcam. See [Webcam Fallback](../desktop-app/camera-setup/webcam-fallback.md).
3. A supported model that is still not detected: follow [The camera is not detected](#the-camera-is-not-detected).

**Still stuck:** Send support the exact model name and the app version.

### Capture fails although live view works

**On screen:** For the customer, "Hmm, the camera didn't respond — let's try again". On Camera Settings, the **Error** line ends in "Capture command failed", after a code such as `TAKE_PICTURE_NO_CARD_NG`, `TAKE_PICTURE_CARD_PROTECT_NG`, `TAKE_PICTURE_NO_LENS_NG` or `LOW_BATTERY`.

**Also described as:** "error capture command failed", "live view jalan tapi tidak bisa foto", "camera doesn't take the picture".

**Check first:** The code in front of "Capture command failed" on **Camera Settings > STATUS > Error** names the reason.

**Fix:**
1. `NO_CARD`: put a memory card in the camera. `CARD_PROTECT`: unlock the card's write-protect switch. `CARD_NG`: replace or reformat the card in the camera.
2. `NO_LENS`: seat the lens properly. `MOVIE` in the code: turn the camera from movie mode to photo mode.
3. `LOW_BATTERY`: power the camera from the mains with an AC adapter or dummy battery.
4. In a dim booth the lens may fail to focus. Add light, or switch the lens to manual focus and prefocus once the framing is set.
5. A Fujifilm set to HEIF takes the shot but no photo arrives. Set the image format to JPEG. See [Fujifilm Setup](../desktop-app/camera-setup/fujifilm.md).
6. Replug the USB cable, then restart the app: operator menu, **Exit**, **Exit App**, and open it again.
7. A single "didn't respond" is retried by the booth on its own. If it repeats, shorten the USB run or use a powered hub.

**Still stuck:** Send support the full **Error** line, the camera model and the camera log (**Show Diagnostics > Copy Today's Logs**).

### The camera stops working during the day

**On screen:** On Home, "Camera Not Responding" with "Attempting to recover...". If recovery fails, "Booth Temporarily Unavailable" with "Please contact staff or try another booth".

**Also described as:** "kamera putus sendiri", "camera disconnects after a while", "booth says temporarily unavailable", "it worked this morning".

**Check first:** **Camera Settings > STATUS** and the **CAMERA LOG** under **Show Diagnostics**. The booth retries the camera by itself several times before it shows "Booth Temporarily Unavailable"; from there it needs you.

**Fix:**
1. Check the camera is awake and powered. Turn off auto power-off on the body and run it from the mains, not a battery.
2. Replug the USB cable, straight into the computer.
3. Restart the app: operator menu, **Exit**, **Exit App**, and open Pixture Photobooth again.
4. Keep the USB cable under about 2 metres, or use a powered hub for a longer run.
5. General tip, Windows: turn off **USB selective suspend** in the power plan, and switch off sleep for the day.

**Still stuck:** Send support the time it happened, the app version and the camera log.

### "Camera Cooling Down" on the Home screen

**On screen:** "Camera Cooling Down" with "Please wait a moment".

**Also described as:** "kamera panas", "camera overheating", "camera cooling down".

**Check first:** The camera itself reported a high temperature, usually after hours of live view in a closed booth.

**Fix:**
1. Wait. The screen clears when the camera reports a normal temperature again.
2. Give the camera air: open the booth enclosure or add ventilation, and keep it out of direct sun and stage lights.
3. Run the camera from the mains rather than a battery.

**Still stuck:** If it comes back every hour, send support the camera model and the camera log.

### "Camera is warming up" stays on screen

**On screen:** "Camera is warming up" with "Please wait a moment...", then "Camera not responding" with "Returning to home...".

**Also described as:** "stuck on warming up", "kamera warming up terus".

**Check first:** The booth waited 30 seconds for the camera's live view and got nothing.

**Fix:**
1. Check the camera's power and cable.
2. Open **Camera Settings** and read **STATUS** and the **CAMERA LOG**.
3. Then follow [The camera is not detected](#the-camera-is-not-detected).

**Still stuck:** Send support the camera log.

### The booth uses the laptop webcam instead of the camera

**On screen:** The live view shows the laptop's built-in camera.

**Also described as:** "pakai webcam laptop, bukan kamera", "it's using the wrong camera".

**Check first:** **Camera Settings > CAMERA DEVICE**. With **Auto-detect**, the app takes the first camera it finds; if the camera body was not ready at launch, that is the webcam.

**Fix:**
1. Check the camera's cable and power.
2. Pick the camera body under **CAMERA DEVICE** and tap **Set as Default**, so the booth uses it after every restart.

**Still stuck:** Follow [The camera is not detected](#the-camera-is-not-detected).

### Exposure controls do nothing

**On screen:** "Set camera to M / Av / Tv mode for manual control" on a Canon, "M / A / S" on the others.

**Also described as:** "ISO tidak berubah", "settings don't apply to the camera".

**Check first:** The mode dial on the camera body.

**Fix:**
1. Set the dial to M, Av or Tv on a Canon, or M, A or S on the others. In other modes the camera ignores what the app sends.
2. Focus mode is set on the body, not in the app.

**Still stuck:** See [Camera Settings](../desktop-app/camera-setup/camera-settings.md).

### No camera on a Mac

**On screen:** No live view from a webcam on macOS.

**Also described as:** "mac tidak bisa akses kamera", "camera permission".

**Check first:** **System Settings > Privacy & Security > Camera**.

**Fix:**
1. Allow Pixture Photobooth there.
2. Restart the app.

This permission only covers webcams. A Canon, Sony, Nikon or Fujifilm connected over USB does not use it.

**Still stuck:** Send support the app version and the macOS version.

### "BRIDGE_NOT_CONNECTED" on a Mac

**On screen:** "BRIDGE_NOT_CONNECTED: Camera sidecar not connected", and no camera of any kind connects, not even the built-in webcam.

**Also described as:** "camera sidecar not connected", "kamera tidak terdeteksi di Mac".

**Check first:** The app version at the bottom of the operator menu.

**Fix:**
1. Update to Pixture Photobooth 1.2.18 or later from [pixture.io/download](https://pixture.io/download). Versions before 1.2.18 could not start the camera helper on macOS 13 to 15.
2. Open the app again and check **Camera Settings > STATUS**.

**Still stuck:** Send support the app version, the macOS version and the camera log (**Camera Settings > Show Diagnostics > Copy Today's Logs**).

### A Sony works on Windows but not on a Mac

**On screen:** On the Mac, the Sony is listed but never connects; the **Error** line or CAMERA LOG shows "Sony connect failed (0x8208)". The same camera and cable work on a Windows computer.

**Also described as:** "sony bisa di windows tapi tidak di mac", "PC Remote not detected on MacBook".

**Check first:** The camera's USB mode is **PC Remote**, and the app is 1.2.18 or later.

**Fix:**
1. This is a known issue on some Macs: macOS takes hold of the camera before the app can. A fix is coming in the next app update.
2. Until then, run the booth on a Windows computer with the same camera.
3. The Mac needs no Sony driver and no camera permission for this, so do not change those.

**Still stuck:** Send support the macOS version and the camera log.

## Related

- [Camera Settings](../desktop-app/camera-setup/camera-settings.md)
- [Canon EOS Setup](../desktop-app/camera-setup/canon-eos.md)
- [Supported Cameras](../reference/supported-cameras.md)
- [Troubleshooting](../desktop-app/troubleshooting.md)
