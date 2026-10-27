# Bullpen (working name)

A mobile app that teaches young people in Lebanon (starting with AUB students) how investing
works, in short lessons with quizzes, then lets them compete in a paper-trading season ranked on skill.

The only thing built so far is a clickable prototype, live at
https://bullpenllc.github.io/bullpen/prototype/ (GitHub Pages, published from `main`):
`prototype/index.html` (the app) plus `prototype/content/*.js` (one file per unit). Progress is
saved in the browser on that device only (localStorage, never sent anywhere), by lesson name so
reordering units doesn't shift it; "Restart the demo" wipes it. A new player starts from zero (no streak,
points, trophies; rating 1,000). All other players and numbers are fake.

## Key docs (read these first)
- `docs/CURRICULUM.md`: every stage, unit and lesson, with status. The source of truth for content.
- `docs/DEVELOPMENT_PLAN.md`: architecture, data model, features, trading game rules, compliance, money, phases, backlog.
- `docs/CONTENT_SPEC.md`: how to write a unit. Follow it exactly.
- `docs/ROADMAP.md`: checklist by phase. `docs/WORKLOG.md`: session log of the current build push.
- `docs/research/investopedia-topic-map.md`: topic coverage check and sources.

## What the prototype shows
1. **Onboarding:** "How much do you know about investing?" New → start at Unit 1. Knows the basics /
   already invests → a placement test: 2 questions per unit, stage by stage. A stage is skipped if you
   miss at most 1; in the first stage you don't pass, you start at the first lesson you missed.
   Skipped lessons show "Tested out" and stay open. Invite links (`?join=CODE`) show the invite first.
2. **Learn** tab with three views:
   - **Course:** stages with unit cards, progress bars and lesson rows. Finished units fold away.
     A locked unit offers a test-out (6 of 8 on the previous unit's check). Each stage ends with an
     exam (15 questions, 12 to pass → certificate). A daily review appears once 3+ lessons are done
     (missed questions first, no capital at risk).
   - **Vault:** optional deep dives with Vault points and badges, open in any order.
   - **Guide:** the whole path, assessments, investor levels, leagues and practice-capital rules.
3. **Lessons:** 4 cards then 5 questions, options shuffled. A flag button reports a problem with the exact
   card or question (saved on the device, listed on Profile, copied as text to send on WhatsApp). A miss costs $1k of practice capital
   ($5k to start) and the question comes back; out of capital = "margin call". Points: 10 first try,
   5 on retry, +15 to finish. The first card's "Unit N · Lesson M" label is computed by the app.
4. **Result:** points, hit rate, streak, promotions (investor titles Intern → Partner), badges.
5. **League** tab: weekly league of 30 (Penny / Small-cap / Mid-cap / Large-cap / Blue-chip). New players
   start in Penny, which has no demotion zone. Plus AUB, Lebanon and Global boards by Bullpen rating.
6. **Trade** tab: competitions (join by code: AUB-CUP, FINA-310, IC-2027, or invite link; create a
   tournament: free up to 30 players and a month, bigger or semester-long uses a credit), clans
   (search, join/request, create) and a sample portfolio. Options become a tournament asset after the
   Options basics unit. Hosts of a created tournament get host tools: start it (demo classmates),
   download standings as CSV, end it and award trophies to the top 3. Prizes are trophies and badges,
   never cash. A Bullpen Pro preview (example prices, "would you pay?") opens from the margin call
   and Profile.
7. **Profile:** investor level and progress, stats, certificates, trophies, badges (one per unit,
   main and Vault), retake placement, restart demo.

## Where things live
- `prototype/content/<id>.js`: one unit each (`UNIT_<ID>`, its lessons, `PLACEMENT_<ID>`).
- `prototype/content/registry.js`: `STAGES` (main path order), `VAULT`, `NEXT_UNIT`. To add a unit:
  write the file per `docs/CONTENT_SPEC.md`, get it reviewed, add a `<script>` tag in `index.html`
  before `registry.js`, list it in the registry, run `node tools/check-content.js`.
- `prototype/index.html`: the app. Inside the script: derived structures (`UNITS`, `LESSONS`,
  `UNIT_START`, `LEVELS`, `TIERS`), `render*` per tab (`renderCourse`, `renderVault`, `renderGuide`),
  the player (`startLesson`, `startTest(kind)` for placement/testout/exam/review, `onPrimary`,
  `finish`, `finishTest`), onboarding (`showOnboard(step)`), Trade (`COMPS`, `CLANS`), profile.
- `tools/check-content.js`: validates all content; runs in GitHub Actions on every PR.

## Settled decisions
- 50/50 partnership between the two founders. Pebble (one founder's broker-analytics site) is separate.
- Fake money only. No entry fees or cash prizes (gambling-law risk); prizes come from sponsors.
- Rankings reward skill: knowledge score from lessons plus a trading score on risk-adjusted return.
- Under-18 users can learn and join school-run competitions and clans, but get no public clans,
  social links, ads or broker referrals.
- Finance-native mechanics instead of Duolingo's: practice capital and margin calls, market-cap
  leagues, investor titles, flat UI, a course list instead of a winding path.
- Stack for the real app: Expo (React Native) for iOS, Android and web; Supabase; Next.js marketing
  site on Vercel; RevenueCat for subscriptions (details in DEVELOPMENT_PLAN.md).
- Pilot: AUB (finance clubs, OSB professors) and IC. Season 1 targeted for February 2027.

## Open decisions
- The real name ("Bullpen" is a working name).
- How the Bullpen rating is calculated (the prototype fakes it as points × 0.52).
- Price data provider and licence cost.
- Pricing: Pro, tournament credits, school licences (the free tournament limit of 30 players is a guess).
- Legal review of sponsored prizes and of the "not advice" wording.

## Content rules
- All wording is our own; no outside links; refer to units by name, never number.
- Every number and right answer must be correct. Every unit gets an independent review before it goes in.
- Never tell a user to buy, sell or hold a real asset.
- Plain English, short sentences, UK spelling, US dollars.

## Working together
See `docs/how-we-work.md`: branch per task, pull `main` first, pull request, `check-content` must pass,
test in the browser at phone size, then merge. The founder building the base may merge their own PRs
without waiting for review.
