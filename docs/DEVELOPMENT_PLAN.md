# Bullpen development plan

The whole plan, from today's clickable prototype to a launched app and beyond. It covers architecture, every feature, the trading game, compliance, money, analytics, testing, team process, risks and the long list of later ideas. Content is planned in `docs/CURRICULUM.md`; progress is ticked in `docs/ROADMAP.md`.

## 1. What we're building
Bullpen teaches university students how investing works in short lessons, then lets them test it in a fake-money trading game ranked on skill. Five pillars:
1. **Learn:** a full course from "what is a stock" to options and valuation, with real numbers in every lesson and honest risk warnings.
2. **Prove it:** quizzes, unit checks, stage exams, certificates and an adaptive placement test.
3. **Compete:** weekly leagues, school and country rankings, clans, and tournaments anyone can host with a code.
4. **Practise:** paper trading with real prices, scored on risk-adjusted return, so skill beats luck.
5. **Belong:** campus-first (AUB, IC), clubs and classes, sponsor-backed seasons.

What makes it ours, not a Duolingo clone: finance-native mechanics (practice capital and margin calls, market-cap leagues, investor titles), the trading game, school competitions, and depth (options, valuation, the Vault).

## 2. Where we are (October 2026)
A clickable prototype at https://bullpenllc.github.io/bullpen/prototype/: one HTML app plus `prototype/content/*.js`, no backend, nothing saved. It already shows the full experience:
- the course list with stages, units, lessons, unit checks, stage exams and certificates
- the Vault
- a Guide
- the placement test and test-outs
- the daily review
- practice capital, points, investor levels, leagues and badges
- competitions (codes, invite links, creating tournaments), clans and a sample portfolio
- profile and share cards

Content is written by agents to `docs/CONTENT_SPEC.md`, reviewed independently, and checked by `tools/check-content.js`.

## 3. Architecture for the real app
| Layer | Choice | Why |
|---|---|---|
| App (iOS, Android, web) | Expo (React Native) + TypeScript, Expo Router | One codebase, cloud builds without a Mac, web for the pilot |
| Animation and charts | Reanimated, Skia (charts), Rive (celebrations) | Smooth on cheap Android phones |
| Backend | Supabase: Postgres, Auth (phone OTP + email), Row Level Security, Edge Functions, Realtime | Fast to build, SQL, scales far enough |
| Jobs | Supabase cron / Edge Functions | Weekly league reset, price snapshots, season scoring |
| Market data | A licensed provider with redistribution rights (delayed 15-minute or end-of-day for stocks/ETFs; crypto real-time) behind our own cache | Cost control; one place to swap providers |
| Payments | RevenueCat (App Store, Google Play), Stripe on web via a US LLC | Subscriptions + credits; Stripe isn't available in Lebanon |
| Analytics | PostHog (events, funnels, feature flags) | Retention and experiments |
| Errors | Sentry | Crash and error tracking |
| Marketing site | Next.js on Vercel | Landing page, waitlist, SEO, certificate pages |
| Content | Lesson JSON generated from `prototype/content/*.js`, versioned in Git | Same review pipeline as today |
| CI/CD | GitHub Actions (content check, type check, tests on every PR); EAS Build/Submit; Vercel deploys | Nothing broken reaches students |

### Data model (first version)
- `users` (id, handle, school, country, birth year band, level choice, created_at)
- `profiles_public` (handle, avatar, school, clan, investor title)
- `progress` (user, lesson_id, status: done/tested_out, best_hit_rate, completed_at)
- `attempts` (user, lesson_id or test kind, answers, score, points, started/finished)
- `missed_questions` (user, question_id, times_missed, last_seen): drives the daily review
- `points_ledger` (user, source, amount, created_at): the single source for totals, weekly league points and levels
- `streaks` (user, current, best, last_active_date, freezes)
- `certificates` (user, stage_id, score, of, issued_at, public_slug)
- `leagues` (week, tier, group_id); `league_members` (group_id, user, weekly_points, final_rank)
- `clans` (id, name, school, visibility, owner); `clan_members` (clan, user, role)
- `competitions` (id, code, name, host, visibility, starts, ends, cash, assets, max_players, tier/credit used); `competition_members`
- `portfolios` (user, competition_id, cash); `orders` (portfolio, symbol, side, qty, type, placed_at, filled_at, fill_price, status); `positions`
- `prices` (symbol, ts, price) cache; `daily_marks` (portfolio, date, value) for scoring
- `subscriptions` and `credits` (from RevenueCat/Stripe webhooks)
- `content_versions` (which lesson version each attempt used)

All tables locked down with Row Level Security; public views expose only handles and scores.

## 4. Features in detail
### 4.1 Learning engine
- **Lessons:** 4 cards then 5 questions, answers shuffled, misses requeued. Tracks hit rate and time.
- **Practice capital:** $5k (5 × $1k) per session. Refills 1k per 30 minutes, or instantly with Pro. Tests, exams and reviews never cost capital.
- **Points:** as in the curriculum. All points go through `points_ledger`.
- **Streaks:** one lesson or review a day. Streak freezes are earned or bought, and streak repair is a Pro perk.
- **Daily review (spaced repetition):** missed questions come back after 1, 3, 7 and 21 days (Leitner boxes), mixed with older correct ones.
- **Placement test:** 2 questions per unit, stage by stage, as in the prototype. Can be retaken.
- **Test-outs, unit checks, stage exams, certificates:** as in the prototype. Certificates get a public verification page on the website (`bullpen.app/c/<slug>`) that can be added to a CV.
- **The Vault:** separate progress and points. A "Vault master" badge for clearing it all.
- **Content versioning:** every attempt records the lesson version, so fixes don't break history.
- **Accessibility:** screen-reader labels on every diagram, dynamic type, colour-blind-safe up/down colours, reduced motion.
- **Languages:** English first. Arabic (right-to-left) is the next major release, then French. All UI strings go through i18n from day one.

### 4.2 Social and competition
- **Weekly leagues:** groups of 30 by tier, formed Monday, settled Sunday night. Top 7 move up, bottom 5 move down. Inactive players are dropped from groups.
- **School, country and global boards:** ranked by Bullpen rating, which blends a knowledge score and a trading score (formula in 4.3).
- **Clans:** search, join or request, admins and roles. A clan's score is the average season score of its top 10 members. Under-18s can only join clans their school creates.
- **Competitions:** created with a code and an invite link. Free up to 30 players and a month; bigger or semester-long ones cost a credit. Hosts get a dashboard (players, standings, export).
- **Share cards:** result, rank, certificate and competition cards with deep links that open the invite flow.
- **Moderation:** handles and clan names are filtered, reportable and reviewable. There is no free chat in the first version.

### 4.3 The trading game
- **Assets:**
  - first version: stocks and ETFs (US-listed), crypto majors and gold
  - after the Options basics unit: options on large US stocks, end-of-day prices
- **Order rules:** market and limit orders. A market order fills at the next price after it's placed, never a stale one. Limit orders fill when the price crosses. Each order is charged a small simulated spread and fee, to teach costs.
- **Corporate actions:** splits and dividends applied automatically. Delisted symbols are closed at their last price.
- **Season score:** annualised return ÷ annualised volatility of daily portfolio returns (a Sharpe ratio with a zero risk-free rate). A player needs at least 10 trading days and 3 trades to rank. Ties go to the lower maximum drawdown.
- **Bullpen rating:**
  - starts at 1,000
  - changes with each knowledge assessment and each season result
  - leans towards the most recent season (formula to be tuned with pilot data)
- **Anti-cheat:**
  - one account per phone number, plus device fingerprinting
  - no resets mid-season
  - orders time-stamped by the server
  - suspicious accounts flagged (many accounts from one device, mirrored trades)
- **Fake money only.** Prizes are trophies, badges and sponsor gifts, never cash from entry fees.

### 4.4 Profiles and progress
Investor title and level bar, streak, points, league, rating, lessons done, Vault points, certificates, trophies and badges. Activity heatmap. A public profile shows only what the user chooses.

### 4.5 Notifications
Streak reminders at the user's usual time, league movement, competition start/end, invite accepted, new unit released. Capped at one a day by default, with easy controls.

### 4.6 Money
- **Pro (monthly/yearly):**
  - unlimited capital
  - streak repair
  - all Vault units (the first Vault unit is free)
  - detailed trade analytics
  - 1 tournament credit a month
  - no ads
- **Credits:** for big or semester-long tournaments.
- **School and club licences:** per semester. Class dashboards, assignments, grade export, branded competitions.
- **Sponsors:** banks and fintechs sponsor seasons, prizes and course units ("Saving 101, presented by ...").
- **Certificates:** a paid verified certificate with a proctored exam, later.
- **Broker referrals:** adults only, clearly disclosed, after the learning path. Never shown to under-18s.
- **Regional pricing:** lower prices for Lebanon, standard in the Gulf and elsewhere.

## 5. Compliance and safety
- **Not advice:** every screen with prices or strategies carries an education-only note. Nothing tells a user to buy, sell or hold a real asset. Content review enforces this.
- **No gambling:** no entry fees, no cash prizes from player money, and credits can't be cashed out. Sponsored prizes need a lawyer's review in each market.
- **Minors:** 13+ only. 13-17 year olds get school-run competitions and clans, but no public clans, social links, ads or broker referrals. Parental consent where the law requires it.
- **Privacy:** Lebanon's data law (81/2018), GDPR for EU users, data export and deletion, minimal data collection.
- **App stores:**
  - Simulated-trading apps are allowed with clear labels.
  - Digital purchases go through in-app purchase.
  - US web checkout links follow current rules.
- **Market data licences:** display rights for delayed or end-of-day data, plus attribution.
- **Content accuracy:** independent review of every unit, a finance professor's sign-off before the pilot, and a "Report a problem" button on every card.

## 6. Analytics and success measures
- **Activation:** % who finish lesson 1, % who finish placement.
- **Retention:** D1, D7, D30. Target 25%+ of AUB pilot players still active at week 4.
- **Learning:** lessons per active day, hit rate trend, review completion.
- **Social:** players brought in per competition, clan join rate, share-card taps.
- **Money:** Pro conversion (aim 2-3%), credit purchases, school licences signed.
- **Quality:** reported content problems per 1,000 lessons, crash-free sessions.

## 7. Testing and quality
- `tools/check-content.js` runs on every pull request (GitHub Action).
- Unit tests for the scoring engine, order fills, league settlement, placement logic and points.
- End-to-end tests (Playwright on web, Maestro on mobile) for onboarding, a lesson, an exam, joining a competition and a trade.
- Test at phone size on a cheap Android device before every release.
- Release to a beta group first (TestFlight, Google closed testing).

## 8. Phases and milestones
| Phase | When | Done when |
|---|---|---|
| 1. Prototype | Oct-Nov 2026 | All 18 main units and 8 Vault units written and reviewed; prototype shows every feature; professor review booked |
| 2. Test demand | Nov 2026 | 15-20 AUB and IC interviews; findings in CLAUDE.md; Season 1 co-host found; landing page and waitlist live |
| 3. MVP build | Nov 2026-Jan 2027 | Expo app with accounts, lessons, review, placement, exams, leagues, competitions, clans and paper trading (stocks, ETFs, crypto, gold); Supabase; analytics; Pro via RevenueCat |
| 4. Pilot (web) | Feb 2027 | AUB Investing Cup Season 1 running on the web version |
| 5. Store launch | Mar-Apr 2027 | App Store and Google Play live; options trading after the Options basics unit |
| 6. Grow | 2027 | Arabic version; other Lebanese universities; Gulf universities; school licences; sponsors |
| 7. Deepen | 2027-2028 | AI trade coach; live events; teacher assignments; more Vault units |

## 9. Team and process
- **Roles:** one founder leads outreach, content direction and partnerships. The other leads building, or content and video, by strength. Claude agents write and review content to the spec.
- **Repo:** branch per task, pull request, `check-content` passes, browser test, merge. `main` deploys the prototype automatically.
- **Weekly:** a planning call, a written update, and ROADMAP ticks.
- **Docs that must stay current:** CLAUDE.md (decisions), CURRICULUM.md, ROADMAP.md, CONTENT_SPEC.md, this file.

## 10. Risks and how we handle them
| Risk | Mitigation |
|---|---|
| Students try it once and drift away | Streaks, review, leagues, campus competitions; measure D7/D30 in the pilot and fix before scaling |
| A content error damages trust | Writer → reviewer → checker → professor; report button; fast fixes via content versioning |
| Market data costs too much | Delayed or end-of-day data, cached; start with fewer symbols; sponsor-funded data |
| Legal problems with prizes or advice | No entry fees, education-only labels, a lawyer before sponsored prizes, no personal recommendations |
| Payments from Lebanon | US LLC + Stripe on web; app-store billing in the apps |
| Cheating in competitions | One account per phone, server-side fills, anomaly flags, no resets |
| Copying concerns | All wording original; research files list sources; topics are facts |
| Founders' time is split | Clear roles, agents for content, small weekly scope |

## 11. Later ideas (the backlog)
- **AI trade coach:** reviews a week of trades and explains mistakes in plain words, with links to lessons. Never says what to buy.
- **"Explain this" button** on any card for a simpler version, generated from our own text.
- **Live events:** earnings-week challenges, Fed-day prediction quizzes (no money), market-crash history replays.
- **Replay mode:** trade through a historical period (2008, 2020) at speed.
- **Teacher tools:** assign units, see class progress, export grades, run class tournaments. (Prototype of Class mode built Oct 2026; the real app needs teacher accounts, rosters and privacy rules for under-18s.)
- **Creator leagues:** finance creators host leagues for their followers.
- **Pebble link (separate company):** a verified real-portfolio league for adults via Pebble's broker connections, with a revenue share agreed in writing.
- **Widgets and watch:** streak and capital on the home screen; a daily question on the watch.
- **Audio lessons** for commutes; flashcard mode; offline packs.
- **Alumni mentors:** AUB alumni in finance host Q&A weeks.
- **Seasonal themes**, profile cosmetics, team jerseys for clans.
- **Accessibility deep pass,** dyslexia-friendly font option.
- **More Vault units:** behavioural finance research, portfolio theory (efficient frontier), fixed-income maths, real estate valuation, Islamic finance basics (relevant regionally).
