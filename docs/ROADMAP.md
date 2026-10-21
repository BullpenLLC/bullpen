# Bullpen roadmap

Where we are and what's next. Tick a box in the same pull request that finishes the work, so this page is always current.

**Last updated:** 21 October 2026
**Now:** Phase 1, the clickable prototype. Unit 1 lessons 1-5 are playable.
**Next:** Lesson 6 (Unit check), then student interviews at AUB and IC.
**Live prototype:** https://bullpenllc.github.io/bullpen/prototype/

## How the pieces fit

| Piece | What it is | Status |
|---|---|---|
| Prototype (`prototype/index.html`) | One HTML file that runs in any browser. Fake data, nothing saved. For showing students and testing the idea. | In progress |
| Lesson content | The cards and questions. Written once, reused in the real app. | 5 of 6 Unit 1 lessons done |
| Real app | Expo (React Native): one codebase that builds the iPhone app, the Android app and a web version. Supabase for accounts and leaderboards. | Not started |
| Marketing website | Landing page and waitlist on Vercel (Next.js). Separate from the app. | Not started |

The prototype's code will not become the real app. It is a sketch for testing. What carries over is the lesson content, the design (colours, screens, flow) and the rules (XP, lives, leagues).

## Phase 0: Setup
- [x] GitHub repo (`BullpenLLC/bullpen`) with `main` and pull requests
- [x] Project brief and teamwork guide (`docs/`)
- [ ] Make the GitHub repo private
- [ ] LLC and operating agreement
- [ ] Shared business bank account
- [ ] D-U-N-S number (needed for the Apple developer account)

## Phase 1: Prototype (now)
- [x] Core loop: learn path, lesson player, lives, XP, result screen, share card
- [x] League, Trade (teaser) and Profile tabs with sample data
- [x] Investopedia "go deeper" links on every card
- [x] Lesson 1: What a stock is
- [x] Lesson 2: Risk and return
- [x] Lesson 3: Diversification
- [x] Lesson 4: Index funds
- [x] Lesson 5: Fees and compounding
- [ ] Lesson 6: Unit check (mixed review of lessons 1-5)
- [x] Put the prototype online so anyone can open it with a link (phones included): https://bullpenllc.github.io/bullpen/prototype/
- [ ] Finance professor reviews all Unit 1 content

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
- [ ] Price data provider chosen and paid for
- [ ] Web version live for the AUB pilot

## Phase 4: Launch Season 1 (Feb 2027)
- [ ] Apple developer account and App Store listing
- [ ] Google Play account and closed test (12 testers, 14 days)
- [ ] "AUB Investing Cup, Season 1" with sponsored prize
- [ ] Pro subscription (RevenueCat)
