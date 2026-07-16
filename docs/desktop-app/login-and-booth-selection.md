---
sidebar_position: 3
title: Login & Booth Selection
description: How to log in and select which booth to operate in the Pix Desktop App.
tags: [desktop-app, login, booth, setup]
---

# Login & Booth Selection

Before you can start running sessions, you need to sign in and pick which booth this device will operate as.

## Signing In

1. Launch the Pix Desktop App.
2. Enter your **pixture.io** email and password.
3. Tap **Sign In**.

The app authenticates against the Pix API and stores a secure session token. You will stay logged in across restarts unless you explicitly sign out.

<!-- Screenshot: Login screen with email and password fields -->

:::tip
Use the same credentials you use to log into the Pix dashboard at [pixture.io](https://pixture.io). If you have not created an account yet, sign up on the website first.
:::

## Choosing a Booth

After signing in, the app displays a list of booths associated with your organization. Select the booth this device should operate as.

Each booth has its own:

- **Templates** assigned from Pix Studio
- **Session history** and analytics
- **Settings** such as capture mode and sharing options

<!-- Screenshot: Booth selection list -->

:::info
If you only have one booth, the app selects it automatically and skips the picker screen.
:::

## Switching Booths

To switch to a different booth without logging out:

1. Open the **Admin Panel** (keyboard shortcut or settings menu).
2. Select **Switch Booth**.
3. Choose the new booth from the list.

The app reloads the new booth's configuration, templates, and branding. Any pending uploads from the previous booth remain in the queue and continue uploading in the background.

## Multiple Devices, Same Booth

Only one device should be active per booth at a time. If a second device logs in to the same booth, the first device will continue to function but session data may overlap. Create separate booths in the dashboard if you run multiple devices simultaneously.

## Signing Out

Open the Admin Panel and select **Sign Out**. This clears the session token and returns you to the login screen. Queued uploads will pause until the next sign-in.
