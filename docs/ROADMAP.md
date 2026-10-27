# Bullpen roadmap

Where we are and what's next. Tick a box in the same pull request that finishes the work, so this page is always current.

**Last updated:** 26 October 2026
**Now:** Phase 1, the clickable prototype, v0.2: every unit in docs/CURRICULUM.md is written, reviewed and in the local build (19 main units, 8 Vault units). Not yet on the live link: GitHub push is waiting for the founder sign-in.
**Next:** Push and merge to publish, finance professor review, then student interviews at AUB and IC.
**Live prototype:** https://bullpenllc.github.io/bullpen/prototype/

## How the pieces fit

| Piece | What it is | Status |
|---|---|---|
| Prototype (`prototype/index.html`) | One HTML file that runs in any browser. Fake data, nothing saved. For showing students and testing the idea. | In progress |
| Lesson content | The cards and questions. Written once, reused in the real app. | Units 1-6 done (36 lessons) |
| Real app | Expo (React Native): one codebase that builds the iPhone app, the Android app and a web version. Supabase for accounts and leaderboards. | Not started |
| Marketing website | Landing page and waitlist on Vercel (Next.js). Separate from the app. | Not started |

The prototype's code will not become the real app. It is a sketch for testing. What carries over is the lesson content, the design (colours, screens, flow) and the rules (XP, lives, leagues).

## Phase 0: Setup
- [x] GitHub repo (`BullpenLLC/bullpen`) with `main` and pull requests
- [x] Project brief and teamwork guide (`docs/`)
- [ ] Make the GitHub repo private
- [ ] Add Alex's GitHub account as a collaborator (repo Settings → Collaborators)
- [ ] LLC and operating agreement
- [ ] Shared business bank account
- [ ] D-U-N-S number (needed for the Apple developer account)

## Phase 1: Prototype (now)
- [x] Core loop: learn path, lesson player, lives, XP, result screen, share card
- [x] League, Trade (teaser) and Profile tabs with sample data
- [x] Lesson 1: What a stock is
- [x] Lesson 2: Risk and return
- [x] Lesson 3: Diversification
- [x] Lesson 4: Index funds
- [x] Lesson 5: Fees and compounding
- [x] Lesson 6: Unit check (mixed review of lessons 1-5)
- [x] Unit 2, Reading the market: Price charts, Market cap, Earnings and P/E, Placing orders, Bulls bears and recoveries, Unit check
- [x] Level picker and placement test on first open; skipped lessons stay open
- [x] "Test out of Unit N" on locked units
- [x] Trade tab: join competitions by code or invite link, public competitions, create a tournament (free small, credits for big)
- [x] Clans: search, join or request, create
- [x] Trophies on the profile
- [x] Unit 3: Options basics
- [x] Unit 4: Pricing options (time value, time decay, volatility, delta, option chains)
- [x] Unit 5: Option strategies (covered calls, protective puts, spreads, leverage and risk)
- [x] Unit 6: Reading company accounts
- [x] Adaptive placement test across all units; answer options shuffled
- [x] Options unlock as a tournament asset after Unit 3
- [x] Building a portfolio, Valuation ratios (incl. PEG), Time value of money (Vault)
- [x] Redesign away from Duolingo: course list, flat UI, practice capital, market-cap leagues, investor levels
- [x] Stage exams and certificates; stage-by-stage placement; daily review; the Vault; in-app Guide
- [x] Content in one file per unit; tools/check-content.js; GitHub Action on every PR
- [x] docs/CURRICULUM.md and docs/DEVELOPMENT_PLAN.md
- [x] All units in docs/CURRICULUM.md (19 main, 8 Vault)
- [x] Put the prototype online so anyone can open it with a link (phones included): https://bullpenllc.github.io/bullpen/prototype/
- [ ] Finance professor reviews all six units

## Phase 2: Test demand (weeks 1-3)
- [ ] Interview 15-20 AUB students and a few at IC, using the prototype
- [ ] Contact AUB finance clubs and OSB professors; find a co-host for Season 1
- [ ] Landing page with waitlist
- [ ] Write up what we learned in `CLAUDE.md`

## Phase 3: Real app, first version (weeks 4-12)
- [ ] Set up Expo app and Supabase project
- [ ] Accounts and profiles
- [ ] Lessons, XP, lives, streaks (lesson content moved from the prototype)
- [ ] Weekly leagues with promotion and demotion
- [ ] School, country and global leaderboards
- [ ] Trading game: stocks, ETFs, crypto, gold; scored per season
- [ ] Competitions, invite codes and links, clans (real accounts and backend)
- [ ] Tournament credits and Pro (RevenueCat)
- [ ] Price data provider chosen and paid for
- [ ] Web version live for the AUB pilot

## Phase 4: Launch Season 1 (Feb 2027)
- [ ] Apple developer account and App Store listing
- [ ] Google Play account and closed test (12 testers, 14 days)
- [ ] "AUB Investing Cup, Season 1" with sponsored prize
- [ ] Pro subscription (RevenueCat)
