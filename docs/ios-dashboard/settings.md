---
sidebar_position: 11
title: Settings
description: Configure timezone, notifications, account preferences, and sign out from the Settings screen.
tags: [ios, settings, timezone, notifications, account]
---

# Settings

The Settings screen holds your account-level preferences — timezone, notifications, and sign-out. Access it from the sidebar or the gear icon in the navigation bar.

<!-- Screenshot: Settings screen -->

## Timezone

Your timezone setting determines how timestamps are displayed throughout the app — in analytics, transaction logs, session history, and the gallery.

1. Tap **Timezone**.
2. Select your timezone from the list (e.g., "Asia/Jakarta", "America/New_York").
3. Tap **Save**.

:::caution
Changing your timezone does not alter existing data — it only changes how timestamps are displayed going forward. Historical sessions retain their original timestamps.
:::

:::tip
If you operate booths in multiple time zones, set your dashboard timezone to your primary location. Individual booth timezones can be configured separately in their booth settings.
:::

## Notifications

Control which push notifications the app sends to your device:

| Notification | Description |
|-------------|-------------|
| **Booth Offline** | Alerts when a booth loses connection |
| **Daily Summary** | End-of-day recap with session count and revenue |
| **Payment Failed** | Alerts when a guest payment fails |
| **Plan Expiring** | Reminder before your subscription renews or expires |

Toggle each notification type on or off based on your preference. Booth Offline notifications are enabled by default and recommended for kiosk operators.

:::info
Push notifications require notification permissions in iOS Settings. If you're not receiving alerts, check **Settings > Notifications > Pix Dashboard** on your device.
:::

## Account

The account section shows:

- **Email** — your login email address
- **Organization** — the organization your account belongs to
- **Role** — Owner, Admin, or Operator

Tap **Change Password** to update your password. You'll need to enter your current password for verification.

## Biometric Login

If your device supports Face ID or Touch ID, you can enable biometric login for faster access. Toggle **Face ID / Touch ID** in the account section. Once enabled, you can unlock the app without entering your password each time.

## Sign Out

Tap **Sign Out** at the bottom of the settings screen. This clears your session and returns you to the login screen. You'll need to enter your credentials (or use biometrics) to sign back in.
