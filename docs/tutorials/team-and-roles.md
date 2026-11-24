---
sidebar_position: 66
title: Add Your Team and Set Roles
description: Invite staff, partners and managers to your Pixture dashboard, give each one a role that shows only what they need, and limit a role to some booths.
tags: [tutorials, team, members, roles, permissions]
---

# Add Your Team and Set Roles

In this tutorial you will pick or make a role, limit it to the booths a person looks after, invite that person by email, and change, suspend or remove them later. At the end every person on your team logs in with their own email and sees only what their role allows. Allow about 10 minutes.

## When to Use It

- **An event rental business with crew.** Your crew lead needs Events, the Gallery and Health on the day, but not your revenue or your billing. Give them a role without the money cards.
- **A self-service booth in a mall, run with a venue partner.** The venue manager wants to see how their booth is doing. A view-only role limited to that one booth shows them its numbers and nothing from your other booths.
- **A multi-booth studio.** Each branch manager gets a role limited to their branch's booths; you and your business partner keep everything.
- **An accountant or investor.** A role with only **View finance** and **View transactions** lets them check the books without touching a booth.

Staff who only stand at the booth do not need a dashboard account at all: give them the booth's menu PIN instead (see [Lock the Booth and Use the Operator Menu](./operator-menu.md)).

## Before You Start

- Any plan: members and roles work on Pix Starter and Pix Pro.
- You are the account owner, or your role has **Manage users**. Without it you can see Settings > Members but not **+ Invite** or **Manage Roles**.
- The email address of each person. They do not need a Pixture account yet.

## Prepare

Every account starts with five roles. Read them before you make your own; one of them often fits.

| Role | Description on screen | Good for |
|---|---|---|
| **Owner** | Full access to all features. One per organization. | You. Locked: it cannot be edited, deleted or given away |
| **Admin** | Full access except billing management. | A business partner or general manager |
| **Editor** | Manage templates, gallery, and view booths. | A designer who makes templates and screens |
| **Operator** | Operate booths and view data. | A crew lead or branch manager |
| **Viewer** | View-only access to dashboard data. | A venue partner or investor who only looks |

All five cover **All booths**. To limit someone to some booths, make a copy or your own role (Step 3).

A role is built from permissions in groups that follow the sidebar: **Dashboard**, **Booths**, **Transactions**, **Vouchers**, **Marketing Studio**, **Gallery**, **Health**, **Billing**, **Pix Design**, **Users**, **Settings**, **Reports**, **Finance** and **Events**. Most groups have a **View** permission (opens the page) and a **Manage** permission (changes things on it). The Roles page lists them all under **Permission Reference**.

## Step 1: Open Members

1. In the dashboard, click **Settings** in the sidebar.
2. Click **Members**. The table lists everyone on the account with their **Role**, **Booth Access**, **Status** and **Last Active** date.
3. Click **Manage Roles** to see the roles.

![Settings > Members with Settings, Members and Manage Roles marked](/img/docs/steps/tutorials-team-and-roles--members.webp)

## Step 2: Pick a role or start one from a preset

The **Manage Roles** page lists each role with its **Permissions**, **Booth Scope** and **Members**.

1. **Create from Preset** makes an editable copy of **Admin**, **Editor**, **Operator** or **Viewer**. Pick one and click **Create**. When the name is taken, the copy gets a number, such as "Viewer 2".
2. **Create Role** starts from a blank role (next step).
3. **Edit** on a role changes its name, permissions and booths. Changes apply to everyone who has that role.

![Manage Roles page with Create from Preset, Create Role and Edit on the Admin row marked](/img/docs/steps/tutorials-team-and-roles--roles.webp)

The preset roles on the page already work as they are. Make a copy when you want to change one but keep the original.

## Step 3: Make a role for some booths only

1. Click **Create Role** and type a **Role Name**, for example "Grand Mall manager". **Description (optional)** helps you remember what it is for.
2. Under **Permissions**, tick what the person may see and do. For a venue partner: **View dashboard**, **Revenue and metric cards**, **View booths** and **View transactions**.
3. Under **Booth Access**, untick **All booths**, then tick the booths this role can open.
4. Click **Create Role**.

![Create Role with Role Name, the Permissions list, All booths under Booth Access and Create Role marked](/img/docs/steps/tutorials-team-and-roles--create-role.webp)

A role limited to some booths sees only those booths on the Dashboard, Booths, Transactions, Gallery and Health, and can only pair those booths. Finance stays organization-wide for roles that can open it, because it is the books of the whole business.

## Step 4: Invite the person

1. Back on **Settings > Members**, click **+ Invite**.
2. Type their **Email Address**.
3. Pick the **Role**.
4. Click **Send Invitation**. The page says "Invitation sent to" their email.

![Invite Team Member with + Invite, Email Address, Role and Send Invitation marked](/img/docs/steps/tutorials-team-and-roles--invite.webp)

The invitation appears under the **Pending** tab with the role, who invited them and when. It stays valid for 7 days. **Resend** sends it again with another 7 days; **Revoke** cancels it.

## Step 5: What the invited person does

1. They open the email and click **Accept Invitation**.
2. The page reads "Join" and your organization's name, with the role they were invited as.
   - **New to Pixture:** they enter a **Display Name** and a **Password** (at least 8 characters, with an uppercase letter, a lowercase letter, a number and a special character), confirm it and click **Accept Invitation**.
   - **Already have a Pixture account** with that email: they click **Join Organization**.
3. They land in your dashboard, on the first page their role allows.

<!-- SHOT-NEEDED: dashboard: the Accept Invitation page (Join <organization>, Display Name, Password, Accept Invitation) for a made-up invitee -->

Someone who belongs to more than one organization switches between them with the organization switcher at the top of the sidebar.

## Step 6: Change, suspend or remove a member

On **Settings > Members**, open the menu at the end of the person's row:

1. **Change Role** picks another role; click **Update Role**.
2. **Suspend** blocks their access to this account. Their row shows **Suspended**. **Reactivate** lets them back in with the same role.
3. **Remove** takes them off the account for good. To work with them again, invite them again.

<!-- SHOT-NEEDED: dashboard: Settings > Members row menu open on a made-up member, showing Change Role, Suspend and Remove -->

The owner's row has no menu: nobody can change, suspend or remove the owner, and nobody can change, suspend or remove themselves.

## Check It Worked

- The person shows under **Active Members** with the role you gave them and **Active** status.
- Ask them to log in: the sidebar shows only the pages their role opens, and a booth-limited role lists only its booths on **Booths**.
- The **Activity** tab on **Settings > Members** records invitations and changes to members and roles, with who did it and when.

## Tips

- **Hide the money, keep the rest.** On the Dashboard, the cards follow four permissions: **Revenue and metric cards**, **Templates Usage card**, **Latest Session card** and **Health card**. Tick only the cards the person may see. Leave all four unticked and they see every card, so tick at least one when you want to hide revenue.
- **Events need View events.** On an account with events, a role without **View events** sees Pixture Kiosk money only and gets no workspace switcher. See [Pixture Event, Pixture Kiosk and Overview](../dashboard/views.md).
- **Add a second Admin.** If you are the only person who can log in and you lose your phone or password, the business is locked out. An Admin can do everything except manage billing.
- **Change the menu PIN when staff leave.** Removing a member closes the dashboard to them, not the booth. Set a new PIN in **Settings > Security**.
- **One role per kind of job, not per person.** "Branch manager" for three managers is easier to keep right than three roles.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| No **+ Invite** or **Manage Roles** on Members | Your role has **View users** but not **Manage users** | Ask the owner to add **Manage users** to your role |
| "This email is already a member of this organization." | That email already has a place on the account | Find them under **Active Members** and use **Change Role** |
| "This invitation has expired" when they click the link | More than 7 days passed | Click **Resend** on the **Pending** tab |
| "This email already has a Pixture password. Log in with it, or use Forgot password to reset it." | The email has an unconfirmed Pixture password | They reset it with **Forgot password** on the login page, then open the invitation again |
| "You can only give access you have yourself." | You are not the owner, and the role has a permission you do not have | Ask the owner to give that role, or take the permission off |
| "You can only give access to booths you can see yourself." | Your own role is limited to some booths, and the role covers other booths or **All booths** | Limit the role to your booths, or ask the owner |
| "This member has access you do not have. Ask the organization owner." | You tried to change, suspend or remove someone whose role has more access than yours | Ask the owner |
| "This role has no Marketing Studio switches on, which lets it open every Marketing Studio page." | A role with no Marketing Studio permission can open every Marketing Studio page by its address | Tick the Marketing Studio tabs the role should have, or ask the owner |
| Delete on a role refuses with "Reassign them first." | People still have that role | **Change Role** for each of them, then delete |
| The invitation email never arrived | It went to spam, or the address has a typo | Check spam; if the address is wrong, **Revoke** and invite the right one |

## Related

- [Settings](../dashboard/settings.md)
- [Pixture Event, Pixture Kiosk and Overview](../dashboard/views.md)
- [Lock the Booth and Use the Operator Menu](./operator-menu.md)
- [Share Revenue and Profit with Partners](./share-revenue-and-profit.md)
