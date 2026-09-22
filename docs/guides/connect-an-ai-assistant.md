---
sidebar_position: 6
title: Connect an AI Assistant
description: Let Claude, ChatGPT or Claude Code set up your photobooth and answer questions about your business through the Pixture connector.
tags: [guides, ai, mcp, setup]
---

# Connect an AI Assistant

Pixture has a connector for AI assistants. Once connected, an assistant can read your business (booths, revenue, sessions, templates) and do a few safe things for you: finish your setup, create a pairing code for the kiosk, assign templates, create vouchers. It works with Claude, ChatGPT and Claude Code, and it only ever sees the business you signed in with.

You do not need this to use Pixture. It is a second way to get set up, for people who already talk to an assistant every day.

## What it can do on each plan

| | Pix Starter (free) | Pix Pro |
|---|---|---|
| Guided setup: brand, currency, timezone, booth name | Yes | Yes |
| Pairing code for the kiosk app | Yes | Yes |
| Booth list, booth health, template list | Yes | Yes |
| Product help (how payments, filters, vouchers work) | Yes | Yes |
| Revenue, sessions, transactions, leaderboard | -- | Yes |
| Business review, booth diagnosis | -- | Yes |
| Assign templates, create vouchers and promotions, import transactions | -- | Yes |

Every action an assistant takes is written to your audit log, and it acts with the permissions of the account that connected it.

## Connect

The connector address is:

```
https://pixture.io/mcp/tenant
```

You will also find it, with a copy button, on your dashboard under **Settings › Connected AI apps**.

### Claude (web or desktop)

1. Open **Settings › Connectors** and choose **Add custom connector**.
2. Paste the connector address and continue.
3. A Pixture sign-in page opens. Sign in with your Pixture account and approve.

Once connected, type `/pix-onboarding` in a new chat to start the guided setup.

### ChatGPT

1. Turn on **Developer mode** under Settings › Connectors (available on paid plans).
2. Choose **Create**, paste the connector address, and continue.
3. Sign in with your Pixture account on the page that opens and approve.

ChatGPT does not show the guided-setup command, so paste the setup prompt below instead.

### Claude Code

```
claude mcp add --transport http pixture https://pixture.io/mcp/tenant
```

The first call opens the Pixture sign-in page in your browser.

## The setup prompt

Paste this once you are connected and the assistant will walk you through going live, one step at a time:

```
You're connected to my Pixture photobooth business through the Pixture connector.
Call pix_tenant_setup_status first, then walk me through going live one short
message at a time: confirm my brand name, currency and timezone with
pix_tenant_apply_setup; help me install the Pix app on the booth computer; give
me a pairing code with pix_tenant_pairing_code and check setup status until the
kiosk is paired; then a first test session. If I ask how anything works, use
pix_tenant_help.
```

The three steps it will take you through are the same three the dashboard shows until your booth is live: install the Pix app on the booth computer, pair it with a code, run a first test session. A laptop webcam is enough for the test.

## Things an assistant cannot do

- Install the Pix app or sign in to it. That happens on the booth computer.
- Upload a logo or design templates and kiosk screens. Those need the browser.
- Buy Pix Pro or a Day Pass. Payments stay on the Devices page.
- See any other Pixture business, or create accounts.

## Disconnect

**Settings › Connected AI apps** lists every connected assistant with a **Disconnect** button. Access ends within a minute.
