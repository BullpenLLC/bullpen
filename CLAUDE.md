# Bullpen (working name)

A mobile app that teaches young people in Lebanon (starting with AUB students) how investing
works, Duolingo style, then lets them compete in a paper-trading season ranked on skill.

The only thing built so far is a clickable prototype: `prototype/index.html`, live at
https://bullpenllc.github.io/bullpen/prototype/ (GitHub Pages, published from `main`). It is one
self-contained HTML file (inline CSS and JS, Google Fonts only). Open it in a browser. Nothing
is saved, all players and numbers are fake.

## What the prototype shows (the core loop)
1. **Onboarding** (on every fresh load): "How much do you know about investing?"
   New to this → Unit 1, Lesson 1. Knows the basics / already invests → an adaptive placement
   test (no lives lost): 5 questions per unit, unit by unit. 4+ right skips the unit and moves on;
   the first unit you don't pass is where you start, at the first lesson you missed (so 5 to 30
   questions). Skipped lessons show "Tested out" and stay open for practice. The test can be
   retaken from Learn or Profile.
2. **Learn** tab: six units on a candlestick path (green = done, gold = next, grey = locked).
   Each unit is 5 lessons (4 cards + 5 questions) and an 8-question unit check with a badge.
   - Unit 1 "How markets work" (Beginner): What a stock is, Risk and return, Diversification,
     Index funds, Fees and compounding.
   - Unit 2 "Reading the market" (Intermediate): Price charts, Market cap, Earnings and P/E,
     Placing orders, Bulls bears and recoveries.
   - Unit 3 "Options basics" (Advanced): What an option is, Call options, Put options,
     In the money?, Expiry and exercise.
   - Unit 4 "Pricing options" (Advanced): Intrinsic and time value, Time decay, Volatility,
     Delta, Reading an option chain.
   - Unit 5 "Option strategies" (Advanced): Buying vs selling, Covered calls, Protective puts,
     Option spreads, Leverage and risk.
   - Unit 6 "Reading company accounts" (Advanced): The income statement, Profit margins,
     The balance sheet, Cash flow, Debt and warning signs.
   A locked unit offers "Test out of Unit N": 6 of 8 on that unit's check skips it.
   Unit 7 (Building a portfolio) is shown as coming next. Answer options are shuffled every
   time a question is shown (true/false stays in order).
3. Quiz rules: wrong answers cost a life (5 lives) and the question comes back at the end of
   the queue. 10 XP per first-try correct answer, 5 XP on a retry, +15 XP for finishing.
   Out of lives shows a "refill or go Pro" sheet. Replays give XP but don't move the path.
4. Result screen: XP, accuracy, streak, badge unlock (Many Baskets, plus one per unit check).
5. **League** tab: weekly Gold League of 30 (top 7 promote, bottom 5 demote), plus AUB,
   Lebanon and Global boards ranked by a "Bullpen rating". Leagues are earned, not paid.
6. **Trade** tab, three views:
   - Competitions: join with a code (demo codes AUB-CUP, FINA-310, IC-2027) or an invite link
     (`?join=CODE` opens an invite screen first). Public competitions anyone can join.
     Create a tournament: name, code-only or public, length, starting cash, assets, size.
     Free = up to 30 players for up to a month; bigger or semester-long uses 1 credit
     (demo player has 1, "Pro includes 1 a month"). Each competition has a code and share link.
     "Options" becomes a tradable asset in tournaments once Unit 3 (Options basics) is finished.
   - Clans: search public clans by name or school, join (or ask to join), create your own.
     Clans rank by the average season score of their top 10 members.
   - Portfolio: the sample portfolio, season score and rules from the original prototype.
   Prizes are trophies and badges, never cash from entry fees.
7. **Profile** tab: level, clan, streak, XP, league, rating, trophies (medals from competitions),
   badges (one per unit check plus general ones), retake placement test, restart demo.

## Where things live in the file
- Lesson content: one object per lesson (`title`, `min`, optional `badge`, `cards`, `qs`), e.g.
  `WHAT_A_STOCK`, `PRICE_CHARTS`, `U3_CALL_OPTIONS`. Each unit is `UNIT_N = {title, level, lessons}`
  ending with a check (`cards:[]`, 8 questions, a `badge`). Units 3+ use `UN_` prefixes.
- `PLACEMENT_UN`: 5 placement questions per unit, each with `n` = the lesson it checks.
- `UNITS`, `PLACEMENT_BLOCKS` and `NEXT_UNIT` (near the content section) register everything.
  To add a unit: write its lessons, check, `UNIT_N` and `PLACEMENT_UN`, then add them to those
  two lists. `LESSONS` (flat list) and `UNIT_START` are built automatically.
- `COMPS`, `PUBLIC_COMPS`, `CLANS`, `TOP5`: sample competitions and clans for the Trade tab.
- `LEAGUE`, `AUB`, `LEB`, `GLOBAL`: sample leaderboard data.
- `INITIAL` / `S`: the demo state (streak, hearts, XP, rating, level, joined competitions, clan, credits, trophies).
- `render*` functions: one per tab. `startLesson(index)` / `startTest(kind, ...)`, `onPrimary`,
  `finish` / `finishTest`: the player. `showOnboard(step)`: onboarding, placement result, invites.
- Colours are CSS variables on `:root`, with a dark theme.

## Open decisions (not settled yet)
- The real name. "Bullpen" is a working name.
- How the "Bullpen rating" is actually calculated (the prototype fakes it as XP x 0.52).
- Where price data for the trading game comes from, and its licence cost.
- Money model: Pro subscription (unlimited lives, advanced units) plus tournament credits for
  big or semester-long tournaments. The prototype's free limit (30 players, up to a month) is a guess.
- Legal: a paper-trading game must not read as investment advice.

## Context from the earlier Bullpen session
Full brief: `docs/Bullpen_Project_Brief.pdf`. Settled decisions:
- 50/50 partnership between the two founders. Pebble (one founder's broker-analytics site) is separate and not part of this project.
- Fake money only. No entry fees or cash prizes (gambling-law risk); prizes come from sponsors.
- Rankings reward skill: knowledge score from lessons plus a trading score on risk-adjusted return over a season.
- Under-18 users (e.g. IC students) can learn and join school-run competitions and clans, but get no public clans, social links, ads or broker referrals.
- Recommended stack for the real app: Expo (React Native) for iOS, Android and web; Supabase; Next.js marketing site on Vercel; RevenueCat for subscriptions.
- Pilot: AUB (finance clubs, OSB professors) and IC. Season 1 targeted for spring semester, Feb 2027.

## Content rules
- All lesson wording is our own. No outside links in lessons (the Investopedia "go deeper" links were removed in October 2026).
- Unit 1 is the beginner unit by design. Experienced users skip it with the placement test or a unit test-out.
- Options units: 1 contract = 100 shares, premiums quoted per share, profit/loss at expiry unless stated.
  Greeks are always described as approximations. Unit 4's example prices come from Black-Scholes
  (zero interest rate, 365-day year), so they agree with each other.
- Every unit gets an independent accuracy review (every number recomputed, every answer key checked)
  before it goes in.

## Progress
`docs/ROADMAP.md` is the progress tracker. Tick its boxes in the same PR that finishes the work.

## Working together (two founders, one repo)
See `docs/how-we-work.md`. In short: never commit straight to `main`; one branch per task; pull `main` before starting; open a pull request and let the other founder review before merging.

## Rules for working on this
- Keep the prototype working as a single file until we decide on a real stack.
- Lesson content must be correct. Check every number and every "right answer".
- Never write anything that tells a user to buy, sell or hold a real asset.
- Plain English everywhere, short sentences, no jargon without a one-line explanation.
- Explain each change in plain words and suggest a commit message.
