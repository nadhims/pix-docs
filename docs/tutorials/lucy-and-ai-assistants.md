---
sidebar_position: 69
title: Ask Lucy and Connect Claude or ChatGPT
description: Get answers and small changes from Lucy in the dashboard and the iPhone app, and connect Claude, ChatGPT or Claude Code to your Pixture business with the Pixture connector.
tags: [tutorials, lucy, ai, mcp, claude, chatgpt]
---

# Ask Lucy and Connect Claude or ChatGPT

In this tutorial you will ask Lucy, the Pixture guide built into the dashboard and the iPhone app, a question about your own booths, let her make a small change for you, and reach a person when you need one. Then you will connect your own AI assistant (Claude, ChatGPT or Claude Code) to your business with the Pixture connector. Allow about 5 minutes for Lucy and 10 for the connector.

Lucy needs nothing set up: she is already on every dashboard page. The connector is for owners who already talk to an assistant every day and want their booth numbers in the same chat.

## When to Use It

- **A new operator stuck on pairing.** Ask Lucy "How do I pair a booth?" and she shows your pairing code with the steps, without leaving the page.
- **A self-service booth that went quiet.** Ask Lucy "How is Grand Mall L2 doing today?" or ask her to pull the booth's log. She reads its health and, if the booth is online, its latest log.
- **An event rental after a busy weekend.** Ask Lucy for 20 free-session vouchers for the bride's family. She proposes them, you tap the button, they exist.
- **A multi-booth studio planning the month.** Connect Claude and ask for a business review: like-for-like revenue, the busiest days and hours, booths that fall behind, templates nobody picks. It can remember notes you give it ("mall renovation until March") for the next review.

Not for emergencies at a live event: tap **Chat with our team on WhatsApp** in Lucy's chat to reach a person. And no assistant can buy Pix Pro or Event Passes; that stays on the **Computers** page.

## Before You Start

- **Lucy:** any plan, in the dashboard and in the iPhone app. Questions work on Pix Starter. Changes she makes for you (vouchers, folders and names in Pix Design) need Pix Pro or an Event Pass on the account.
- **The connector:** any Pixture plan, but on Pix Starter only the setup and basic tools answer (see the table in Step 5).
- Both act with **your** role: a team member who cannot see revenue gets no revenue from Lucy or from an assistant either. Lucy also keeps a member who is limited to some booths to those booths.
- For the connector, one of these:
  - **Claude** on the web or the desktop app. Custom connectors work on every Claude plan; the Free plan allows one ([Anthropic help](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp)).
  - **ChatGPT** on the web. On Pro, custom servers can only read; full use (actions too) is on Business, Enterprise and Edu, where an admin adds it ([OpenAI help](https://help.openai.com/en/articles/12584461-developer-mode-apps-and-full-mcp-connectors-in-chatgpt-beta)).
  - **Claude Code** in a terminal.

## Step 1: Ask Lucy in the dashboard

1. Click the round button with Lucy's face at the bottom right of any dashboard page. (It is hidden inside the Template Editor and the UI Editor, where it would cover the design.)
2. Type your question in plain words, in any language, or tap one of the suggested questions under the chat.
3. On pages that have one, the **Tour this page** chip walks you through the page.
4. Stuck on something you can see? Attach a screenshot (PNG, JPG or WebP) with the picture button next to the text box, so Lucy sees what you see.

![Lucy's chat panel open on the Dashboard with the Ask Lucy button, the text box, a suggested question, Tour this page and the screenshot button marked](/img/docs/steps/tutorials-lucy-and-ai-assistants--lucy-panel.webp)

Good questions to start with: "What did I make this week?", "Which booth earned most last month?", "Is my Kiosk 2 booth OK?", "Which templates do customers pick?", "How do I set up QRIS?".

Lucy answers in the language of your dashboard or browser. When she guessed it, a chip under the chat switches to the other language in one tap. Her **News** tab lists Pixture's latest updates.

## Step 2: Let Lucy make a change

1. Ask for the change, for example "Make 10 free-session vouchers for Sunny Side Mall, one use each, until 31 December".
2. Lucy describes exactly what will happen and adds a confirm button under her reply. Nothing changes until you tap it.
3. Tap it. The button reads **Done** once the change is made.

<!-- SHOT-NEEDED: dashboard: a Lucy reply proposing 10 vouchers with the confirm button marked -->

What Lucy can change: vouchers (up to 100 at a time; bigger batches on the **Vouchers** page), and in Pix Design, folders (create, rename), moving designs into folders and renaming a design. Each needs the matching role permission and Pix Pro or an Event Pass on the account. The confirm button only works for the person it was made for, and only once.

## Step 3: Reach a person

1. Tap **Chat with our team on WhatsApp** in Lucy's chat to talk to the Pixture team.
2. When Lucy cannot answer, she may pass the question on herself: she says "I've asked the team. Their answer will show up here."
3. While the team is on the thread, the chat says "The Pixture team is on this thread. They'll reply here." Their reply appears in the same chat.

## Step 4: Ask Lucy on your iPhone

1. In Pixture Manager, tap the small tab with Lucy's face on the edge of the screen.
2. Ask as you would on the website. **Clear chat** starts over, and **Chat with our team on WhatsApp** reaches a person.

<!-- SHOT-NEEDED: phone: Lucy's chat in Pixture Manager with the Lucy tab, the text box, Clear chat and the WhatsApp button marked -->

Lucy in the app cannot sell anything. Ask her about buying Pix Pro or Event Passes and she points you to the Pixture website. See [Run Your Account from Your iPhone](./iphone-app.md).

## Step 5: Copy the connector address

1. In the dashboard, click **Settings** in the sidebar.
2. Click **General**.
3. Under **Connected AI apps**, click **Copy** next to **Connector URL** (`https://pixture.io/mcp/tenant`).
4. Click **Copy** next to **Setup prompt** too, if you are setting up a new account. You will paste it in Step 7.

![Settings > General with Settings, General, the Connector URL Copy button and the Setup prompt Copy button marked](/img/docs/steps/tutorials-lucy-and-ai-assistants--connected-ai-apps.webp)

What an assistant can do depends on your plan:

| | Pix Starter | Pix Pro or Event Pass |
|---|---|---|
| Who you are: business, currency, timezone, plan, your permissions | Yes | Yes |
| Guided setup: brand name, currency, timezone, first booth name | Yes | Yes |
| A pairing code for the booth app | Yes | Yes |
| Booth list, one booth's health, template list | Yes | Yes |
| How Pixture works (payments, filters, vouchers and more) | Yes | Yes |
| Revenue, sessions, transactions, best booths, template ranking, computers and their Pix Pro | No | Yes |
| Business review, why one booth is behind, notes it remembers | No | Yes |
| Assign templates, create vouchers and promotions, import old transactions | No | Yes |

On Pix Starter the other tools answer with one sentence: they need Pix Pro or an Event Pass. Add one on the **Computers** page and they start working within a few minutes, without connecting again.

## Step 6: Add the connector to your assistant

### Claude (web or desktop)

1. Go to **Customize > Connectors**, click **+ Add**, then **Add custom connector**.
2. Enter a name (for example "Pixture") and paste the connector address. Click **Continue**, keep the sign-in settings Claude detects, and click **Add**.
3. In a chat, click **+**, then **Connectors**, and switch Pixture on for that chat.

On a Claude Team or Enterprise plan, an owner adds it once under **Organization settings > Connectors**, then each person clicks **Connect** under **Customize > Connectors**.

### ChatGPT (web)

1. Go to **Plugins**, click **+**, then **Add custom MCP server**.
2. Enter a name, paste the connector address under **Connection**, tick **I understand and want to continue** and choose **Create as a plugin**.
3. Install it, start a new chat, type **@** and pick it.

### Claude Code

Run this in a terminal:

```
claude mcp add --transport http pixture https://pixture.io/mcp/tenant
```

The first time Claude Code uses it, the Pixture sign-in page opens in your browser.

<!-- SHOT-NEEDED: dashboard: Claude's Add custom connector dialog with the name and the connector address filled in (claude.ai, made-up account) -->

:::info The dashboard's hint may use older menu names
Claude and ChatGPT rename their menus from time to time. If a menu above has moved, search their help for "custom connector" (Claude) or "custom MCP server" (ChatGPT). The connector address stays the same.
:::

## Step 7: Sign in and approve

1. A Pixture page opens. Sign in with your Pixture account (Google, Apple or email, as on the website).
2. Read **Connect ... to Pixture?**: it names your business and lists what the assistant will be able to do. On Pix Starter it adds a note that analytics and action tools unlock with Pix Pro.
3. Click **Approve**. **Deny** cancels and nothing is connected.

![The Pixture page "Connect Claude to Pixture?" for a made-up business, with the title, Approve and Deny marked](/img/docs/steps/tutorials-lucy-and-ai-assistants--consent.webp)

4. Back in the assistant, ask something: "What did my booths make this month?" On a new account, paste the setup prompt from Step 5 and the assistant walks you through install, pairing and a first test session. The dashboard says typing `/pix-onboarding` in Claude does the same.

The connector tells the assistant to check with you before any change (vouchers, template assignment, setup), and Pixture keeps a record of every change it makes.

## Check It Worked

- **Settings > General > Connected AI apps** lists the assistant with the date it **Connected** and when it was **Last used**.
- Asked "Who am I?", the assistant names your business, its currency and timezone.
- In the dashboard, Lucy answers "What did I make today?" with the same figure as the Dashboard's Revenue card.

## Tips

- **Ask the assistant for a weekly review on Monday mornings.** "Run my Pixture business review" gives like-for-like revenue, busy hours, booths that fall behind and templates to retire. Tell it why a week was odd ("rain all weekend") and it keeps the note for the next review.
- **Let it launch a promo end to end.** "Make 50 codes for 20% off for the Grand Mall anniversary, valid until the 30th" creates the codes and a note, and the next review measures how many were used.
- **Give staff their own login.** An assistant connected by a staff account only sees what that staff role sees, and **Disconnect** on one grant leaves the others working.
- **Lucy has a daily quota.** 100 messages per account per day and 10 a minute. For long analysis, use the connector.
- **Disconnect when you stop using it.** Click **Disconnect** next to the assistant under **Connected AI apps**. It loses access within a minute.
- **Bring old numbers in.** On Pix Pro an assistant can import past sales from a CSV for one booth: it shows a preview first and imports only after you confirm.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The assistant says a tool "requires Pix Pro or an Event Pass" | The account is on Pix Starter | Add Pix Pro or an Event Pass on **Computers**. The tools work within a few minutes, no need to connect again |
| The assistant says your role does not include a permission | Your role does not allow it | Ask the owner to add the permission under **Settings > Members** |
| ChatGPT reads but will not create vouchers | ChatGPT Pro only allows reading from custom servers | Use Claude, or a ChatGPT Business, Enterprise or Edu workspace |
| A disconnected assistant still answered | Disconnecting takes up to a minute | Wait a minute and try again: it now gets no answer |
| Lucy says "Today's chat quota is used up" | The account used its 100 messages for today | Try again tomorrow, or use the connector or WhatsApp |
| Lucy says "Slow down a little" | More than 10 messages in a minute | Wait a minute |
| Lucy's confirm button says it expired | Proposals only last a short time and work once | Ask Lucy to propose the change again |
| Lucy cannot pull a booth's log | The booth app is closed, the computer is asleep or offline | Start the booth; it uploads the log on its next check-in |

## Related

- [Connect an AI Assistant](../guides/connect-an-ai-assistant.md)
- [Run Your Account from Your iPhone](./iphone-app.md)
- [Notifications, Lucy and Settings](../iphone-app/notifications-lucy-and-settings.md)
- [Add Your Team and Set Roles](./team-and-roles.md)
- [Settings](../dashboard/settings.md)
