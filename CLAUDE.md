# Bullpen (working name)

A mobile app that teaches young people in Lebanon (starting with AUB students) how investing
works, Duolingo style, then lets them compete in a paper-trading season ranked on skill.

The only thing built so far is a clickable prototype: `prototype/index.html`. It is one
self-contained HTML file (inline CSS and JS, Google Fonts only). Open it in a browser. Nothing
is saved, all players and numbers are fake.

## What the prototype shows (the core loop)
1. **Learn** tab: Unit 1 "How markets work", six lessons on a candlestick path
   (green = done, gold = next, grey = locked). Lessons 1-3 are playable (What a stock is,
   Risk and return, Diversification): 4 teaching cards, then 5 multiple-choice questions each.
   The demo starts with lessons 1-2 done; tap a finished lesson to open it, tap again to practise it.
   Replays give XP but don't move you along the path or unlock badges.
2. Quiz rules: wrong answers cost a life (5 lives) and the question comes back at the end of
   the queue. 10 XP per first-try correct answer, 5 XP on a retry, +15 XP for finishing.
   Out of lives shows a "refill or go Pro" sheet.
3. Result screen: XP, accuracy, streak, badge unlock ("Many Baskets"), share card.
4. **League** tab: weekly Gold League of 30 (top 7 promote, bottom 5 demote), plus AUB,
   Lebanon and Global boards ranked by a "Bullpen rating".
5. **Trade** tab: teaser for "AUB Investing Cup", Season 1 starting Feb 2027. $10,000 fake money,
   stocks/ETFs/crypto/gold, ranked by return divided by volatility so luck doesn't win.
   Orders fill at the next market price. One account per phone number.
6. **Profile** tab: streak, XP, league, rating, badges.

## Where things live in the file
- `PATH`, `LESSONS` (one object per lesson: `title`, `min`, optional `badge`, `cards`, `qs`): all lesson content.
  Add a new lesson by writing its object and appending it to `LESSONS` in path order.
- `LEAGUE`, `AUB`, `LEB`, `GLOBAL`: sample leaderboard data.
- `INITIAL` / `S`: the demo state (streak, hearts, XP, rating).
- `render*` functions: one per tab. `startLesson(index)`, `onPrimary`, `finish`: the lesson player.
- Colours are CSS variables on `:root`, with a dark theme.

## Open decisions (not settled yet)
- The real name. "Bullpen" is a working name.
- Stack for the real app (native, React Native/Expo, or PWA first).
- How the "Bullpen rating" is actually calculated (the prototype fakes it as XP x 0.52).
- Where price data for the trading game comes from, and its licence cost.
- Money model: Pro subscription for unlimited lives is only hinted at.
- Legal: a paper-trading game must not read as investment advice.

## Context from the earlier Bullpen session
Full brief: `docs/Bullpen_Project_Brief.pdf`. Settled decisions:
- 50/50 partnership between the two founders. Pebble (one founder's broker-analytics site) is separate and not part of this project.
- Fake money only. No entry fees or cash prizes (gambling-law risk); prizes come from sponsors.
- Rankings reward skill: knowledge score from lessons plus a trading score on risk-adjusted return over a season.
- Under-18 users (e.g. IC students) get the learning side only: no social links, ads or broker referrals.
- Recommended stack for the real app: Expo (React Native) for iOS, Android and web; Supabase; Next.js marketing site on Vercel; RevenueCat for subscriptions.
- Pilot: AUB (finance clubs, OSB professors) and IC. Season 1 targeted for spring semester, Feb 2027.

## Investopedia references
- Each lesson card can carry `ref: {title, url}`; the player shows it as a "Go deeper on Investopedia" link. `PATH_REFS` holds one reference per lesson on the unit path for when those lessons are written.
- We link to Investopedia for depth. We never copy its text, definitions or images into lessons: all lesson wording is our own.
- Link to stable term pages (`https://www.investopedia.com/terms/<letter>/<slug>.asp`).

## Working together (two founders, one repo)
See `docs/how-we-work.md`. In short: never commit straight to `main`; one branch per task; pull `main` before starting; open a pull request and let the other founder review before merging.

## Rules for working on this
- Keep the prototype working as a single file until we decide on a real stack.
- Lesson content must be correct. Check every number and every "right answer".
- Never write anything that tells a user to buy, sell or hold a real asset.
- Plain English everywhere, short sentences, no jargon without a one-line explanation.
- Explain each change in plain words and suggest a commit message.
