# Bullpen (working name)

A mobile app that teaches young people in Lebanon (starting with AUB students) how investing
works, Duolingo style, then lets them compete in a paper-trading season ranked on skill.

The only thing built so far is a clickable prototype: `prototype/index.html`. It is one
self-contained HTML file (inline CSS and JS, Google Fonts only). Open it in a browser. Nothing
is saved, all players and numbers are fake.

## What the prototype shows (the core loop)
1. **Learn** tab: Unit 1 "How markets work", six lessons on a candlestick path
   (green = done, gold = next, grey = locked). Only lesson 3, Diversification, is playable:
   4 teaching cards, then 5 multiple-choice questions.
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
- `PATH`, `LESSON` (cards + questions): all lesson content.
- `LEAGUE`, `AUB`, `LEB`, `GLOBAL`: sample leaderboard data.
- `INITIAL` / `S`: the demo state (streak, hearts, XP, rating).
- `render*` functions: one per tab. `startLesson`, `onPrimary`, `finish`: the lesson player.
- Colours are CSS variables on `:root`, with a dark theme.

## Open decisions (not settled yet)
- The real name. "Bullpen" is a working name.
- Stack for the real app (native, React Native/Expo, or PWA first).
- How the "Bullpen rating" is actually calculated (the prototype fakes it as XP x 0.52).
- Where price data for the trading game comes from, and its licence cost.
- Money model: Pro subscription for unlimited lives is only hinted at.
- Legal: a paper-trading game must not read as investment advice.

## Context from the earlier Bullpen session
<!-- Paste the key decisions from the original Bullpen conversation here:
     who it's for, what the student interviews found, pricing, roadmap, anything ruled out. -->

## Rules for working on this
- Keep the prototype working as a single file until we decide on a real stack.
- Lesson content must be correct. Check every number and every "right answer".
- Never write anything that tells a user to buy, sell or hold a real asset.
- Plain English everywhere, short sentences, no jargon without a one-line explanation.
- Explain each change in plain words and suggest a commit message.
