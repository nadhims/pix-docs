---
sidebar_position: 26
title: Use a Button Box
description: Let customers take, retake and keep photos with a real button, clicker or foot switch. Set the Capture, Retake and Keep keys once in the dashboard and every booth on your account follows.
tags: [tutorials, button box, button keys, hardware, capture]
---

# Use a Button Box

In this tutorial you will plug a USB button box, clicker or foot switch into the booth computer, teach the dashboard which button does **Capture**, **Retake** and **Keep**, and test it in a session. The keys are set once for your whole account: every design and every booth uses them. Allow about 15 minutes.

## When to Use It

- **A self-service mall booth or self photo studio** with a big arcade button on the counter: customers know what to press, and the touchscreen stays clean.
- **A booth with the screen out of reach,** such as a tall mirror booth or a screen behind glass: a wired button or foot switch takes its place.
- **Group photos at an event rental:** a wireless clicker in the guest's hand, so nobody runs back to the screen.
- **A pop-up box** where the button box is part of the cabinet you built.

Not needed if customers tap the screen happily. And if you want the camera's own shutter button to take the photo, use the design's **Trigger** **Camera shutter** instead: then the button keys are switched off.

## Before You Start

- Any plan. The keys are saved for the account, separately from the design.
- A booth computer (Mac or Windows) with Pixture Photobooth **1.2.49 or newer**. Not phones or tablets.
- A dashboard account that can edit designs in **Pix Design**.
- The button device. It must type a key on the computer, like a keyboard does: most USB arcade button boxes, presentation clickers and USB foot switches do.

## Prepare

### Pick keys nobody types by accident

The booth listens for the key the button types. Allowed keys: **F1** to **F24**, **Space**, **Enter**, **Num Enter**, **Page Up**, **Page Down**, the arrow keys, **Home**, **End**, letters, digits and number pad digits. Ctrl, Cmd and Alt combinations, Esc, Tab, and volume or media keys cannot be used.

- **Best: F13 to F24.** No keyboard types them by accident, and macOS does not use them. On a Mac, avoid F1 to F12: macOS uses some for Mission Control, Show Desktop and the screen brightness.
- **A presentation clicker** usually types **Page Up** and **Page Down**: use one for **Capture** and the other for **Keep**.
- **A programmable button box or foot switch:** set its buttons with the maker's tool, for example F13, F14 and F15.

### Test the button first

Plug the box into the booth computer, open any text editor, and press each button. A button set to a letter, digit or Space types it. F-keys type nothing in a text editor, so test those on the booth in Step 4. A box that types nothing at all on any key is not acting as a keyboard, and the booth cannot use it.

## Step 1: Open the Capture page in the UI Editor

1. In the dashboard, click **Pix Design**, then **UI Editor**.
2. Open any design. The keys are the same for every design, so it does not matter which.
3. Open the **Capture** page, and click an empty part of the canvas so no block is selected.
4. In the panel on the right, find **Button keys** ("All designs and booths"). It has three rows: **Capture**, **Retake** and **Keep**.

![UI Editor Capture page with the Button keys section (Capture, Retake, Keep) marked](/img/docs/steps/tutorials-use-a-button-box--ui-editor-button-keys.webp)

## Step 2: Press each button to set its key

1. Click the field on the **Capture** row. It shows **Press your button…**
2. Press the button on your box. The key saves at once and you see **Saved for all designs**.
3. Do the same for **Retake** and **Keep**.

Box not plugged into the computer you are using? Click the small arrow next to a field and pick the key from the list. Click **×** to clear a key. Press Esc to stop listening without saving.

Each key can only be on one action. A key that is not allowed shows "That key can't be used".

## Step 3: Let the booths pick it up

Booths that are online get the new keys on their own, without a restart. A booth in the middle of a session takes them when it is back on the Home screen.

## Step 4: Test a session with the buttons

1. Start a normal session on the booth.
2. On the Capture screen, press **Capture**: the photo is taken, the same as tapping the shutter.
3. Press **Retake** to take that photo again, and **Keep** to keep it and move on to the next photo, or finish.
4. Hold a button down: it fires once, not again and again.

<!-- SHOT-NEEDED: hardware: arcade button box with three buttons labelled Capture, Retake and Keep next to the booth screen -->

## Check It Worked

- Each button does its action on the booth's Capture screen.
- The buttons work on every booth of the account, and in events too.
- Holding a button, or a cheap button that bounces, never takes two photos.

## Tips

- **Label the buttons** on the box ("Photo", "Again", "Next") in the words your customers use.
- **Retake does nothing** when the design hides the Retake button, or at an event whose Retake step is off. That is on purpose.
- **The buttons only act on the Capture screen.** They do not start a session from the Home screen: that is the design's own start trigger on the Start screen. If a key is set in both places, the key set in **Button keys** wins on the Capture screen.
- **A keyboard on the booth?** Avoid letters and **Space** as button keys, so a curious customer typing does not take photos.
- **Coin or card reader software that types a key** (for example F13 for a paid session) works on the Start and Payment screens. Do not give the same key to a button. See [Connect a Coin or Card Reader](./connect-a-coin-or-card-reader.md).

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| Pressing a button does nothing on the booth | The booth app is older than 1.2.49, or the box does not type a key | Update the app; test the box in a text editor (Prepare) |
| Nothing happens, even on 1.2.49 | The design's **Trigger** is **Camera shutter** | Use another trigger; with **Camera shutter** the booth leaves the shot to the camera |
| "That key can't be used" | Ctrl, Cmd or Alt was held, or the key is not on the allowed list | Program the box to type F13 to F24, or pick a key from the list with the arrow |
| "Two buttons can't use the same key." | The key is already set on another row | Clear it there first, or use a different key |
| **Retake** does nothing | Retake is off in the design or in the event | Turn the Retake button or step on, or leave Retake unset |
| On a Mac, a button opens Mission Control or changes brightness | macOS uses that F-key | Use F13 or higher |
| The key changed in the dashboard, but a booth still uses the old one | The booth is offline or mid-session | Get it online and back to the Home screen |

## Related

- [Button keys](../dashboard/pix-design/button-keys.md)
- [UI Editor](../dashboard/pix-design/ui-editor.md)
- [Customise the Booth Screens](./customise-kiosk-screens.md)
- [Connect a Coin or Card Reader](./connect-a-coin-or-card-reader.md)
