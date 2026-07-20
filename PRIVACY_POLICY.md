# Privacy Policy for Bandwidth

**Last updated:** June 24th, 2026

## 1. Introduction

Bandwidth ("the Bot") is the official Discord bot of the Pretendo Network community, operated by the Pretendo Network team. The Bot provides community features for the Pretendo Network Discord server, such as looking up console error codes, answering common support questions, submitting moderator applications and user reports, running polls, self-assignable roles, and collecting network captures for development. This policy explains what information the Bot processes, how it is used, and the choices available to you.

This policy supplements, and does not replace, [Discord's Privacy Policy](https://discord.com/privacy) and [Terms of Service](https://discord.com/terms). Use of the Bot within Discord is also subject to Discord's Developer Policy.

## 2. Information Collected Through Discord

When the Bot is active in the server, or when you interact with it, it may process:

- **Discord identifiers**: your User ID, username, display name/nickname, tag, and avatar. These are used to operate commands, identify you in moderator applications and reports, and assign roles.
- **Server roles**: read and modified to manage verification, self-assignable notification roles (e.g., `@Updates`, `@StreamPing`), and to determine permissions for certain commands.
- **Message content**: messages sent in the server are processed to provide automated help responses, to power community jokes, and to remind users about network-dump submissions. Message content is processed in real time and is **not** stored in the Bot's database, except where you explicitly cause it to be recorded (see Sections 3 and 4).
- **Member join events**: used to send a welcome message and to assign an "unverified" role to new members.

The following data may be created and stored alongside your Discord User ID by interacting with the Bot:

- **Automatic-help preference**: if you opt out of automatic help (via the `Disable Automatic Help` button or the `/toggle-automatic-help` command), your User ID is stored so the Bot stops responding to your messages automatically.
- **Command cooldowns**: timestamps recording when you last used certain commands, used to enforce rate limits.
- **Poll votes**: when you vote in a poll, your User ID is recorded so you cannot vote more than once. Individual votes are otherwise tallied as aggregate counts.

**Direct messages are not monitored.** If you message the Bot directly, it replies directing you to the appropriate support channels. Your direct messages are not stored, logged, or forwarded.

## 3. Moderator Applications and Reports

Certain features let you submit information that the Bot forwards to private, staff-only channels in the Discord server:

- **Moderator applications**: when you submit an application via `/mod-application`, the Bot collects your answers to the application questions (prior experience, timezone/availability, reason for applying, your **PNID** (Pretendo Network ID), and any additional information you provide), along with your Discord identifiers, and posts them to a private moderator-review channel.
- **User reports**: when you report a user, the Bot records the reported user's and your Discord identifiers, the channel, your stated reason, and a transcript of recent messages from that channel, and posts them to a private reports channel for review.
- **Piracy reports**: when you flag a message as relating to piracy, the Bot records the flagged message's content and author, your Discord identifiers, and the channel, and posts them to the private reports channel. This action is logged to prevent abuse.

These submissions are stored as part of the relevant private channel's message history.

## 4. Network Capture Submissions

The Bot allows community members to submit network captures to assist Pretendo Network development via the `/upload-network-dump` command. These submissions are posted to a private, development-only channel. Only certain members of the development team maintain access to this channel, submissions are not available to all team members. Submissions may include:

- **Capture files**: packet captures (e.g., PCAP/PCAPNG), HTTP proxy archives (e.g., HAR, Charles, or Fiddler sessions), and console task databases (Wii U/3DS BOSS databases).
- **Credentials and identifiers you provide**: depending on the capture type, you may supply a NEX username (PID) and NEX password, used to interpret the capture.
- **Your description** of what occurred during the captured session, plus your Discord identifiers (so the submission can be attributed).

***Network captures and proxy dumps can contain sensitive information, including account tokens, credentials, and other personal data present in your console's network traffic. Only submit captures you are comfortable sharing with select members of the Pretendo Network development team, and only credentials you are willing to disclose.***

## 5. Aggregate / Statistical Information

The Bot displays community-wide statistics that are not tied to individual identities, such as live member, human, and bot counts shown as automatically updating channels. These figures are derived from server membership and are presented in aggregate form.

## 6. How We Use Information

We use the information described above to:

- Operate Bot commands and community features.
- Process moderator applications and user/piracy reports submitted to staff.
- Collect and review network captures submitted for Pretendo Network development and debugging.
- Display community statistics.

We do not use this information for advertising, or for any purpose unrelated to operating the Bot and the Pretendo Network Discord server.

## 7. Data Storage and Retention

- Bot preference and operational records (automatic-help opt-outs, command cooldowns, poll votes, server settings, and rules) are stored in a local database operated alongside the Bot, retained for as long as needed for the related feature or until deleted as described in Section 9.
- Moderator applications, reports, and network captures are stored as messages in the private Discord channels they are posted to, and are retained as part of those channels' history.
- Live member-count channels reflect current membership only and do not retain historical per-member data.

## 8. Data Sharing and Disclosure

- We do not sell information or share it with advertisers or unrelated third parties.
- Moderator applications, reports, piracy flags, and network captures are accessible only within the private staff or development channels used to operate the server and the Bot.

## 9. Your Rights and Choices

- **Automatic help:** you can opt out of automatic help at any time using the `Disable Automatic Help` button or the `/toggle-automatic-help` command, and re-enable it the same way.
- **Self-assignable roles:** you can add or remove notification roles at any time from the role-selection menu.
- **Submissions:** moderator applications, reports, and network captures are sent at your initiative. If you wish to have a submission removed, contact the Pretendo Network team (see Section 11).
- **Leaving the server:** stops further data collection through the Bot. Information you previously submitted to staff or development channels may persist in those channels' history.

## 10. Changes to This Policy

We may update this Privacy Policy to reflect changes to the Bot or its features. Material changes will be announced in the server's announcements channel. The "Last updated" date above reflects the most recent revision.

## 11. Contact Us

If you have questions about this Privacy Policy, or wish to make a request regarding your data, please contact the Pretendo Network team via the [Pretendo Network Discord server](https://discord.gg/pretendo) or through the [Issues section](https://github.com/PretendoNetwork/Bandwidth/issues) of the Bot's repository.
