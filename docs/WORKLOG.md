# Bullpen work log

The running log for the long build push that started on 24 October 2026. Every session (and every automatic 45-minute relaunch) reads this first, picks up the next open item, and updates it before stopping.

## The goal (from the founder)
- Finish every unit of the curriculum: a full guide, assessments and levels.
- Shift the interface so it isn't a copy of Duolingo.
- A separate extra "Vault" of deep dives into finance fundamentals (accounts, valuation), for bonus points.
- Use Investopedia's topic coverage as a checklist for what to teach. Never copy its wording.
- Write a complete development plan, and keep improving the app until everything is done.

## How we work
- Branch: `dev/curriculum-v2`. Merge into `main` through a pull request after each batch, once it's tested.
- Lesson content goes in `prototype/content/*.js`, one file per unit, following `docs/CONTENT_SPEC.md`.
- Every unit goes through two steps before it's added: a writer agent, then an independent reviewer agent that recomputes every number and checks every answer key.
- Test in the browser at phone size before each merge, and check that the live link updates afterwards.

## Status
See the checklists in `docs/CURRICULUM.md` (content) and `docs/DEVELOPMENT_PLAN.md` (app). This log only records what happened in each session.

### 24 Oct 2026, session 1
- Created this log, `docs/CONTENT_SPEC.md` and the `dev/curriculum-v2` branch. Set the 45-minute relaunch.
- Split content into prototype/content/*.js + registry; added tools/check-content.js and a GitHub Action.
- Redesign (course list, flat UI, practice capital, market-cap leagues, investor levels) and new features:
  stage exams + certificates, stage-by-stage placement, daily review, the Vault, Guide, level-ups.
- Research: Investopedia blocks automated access; topic map built from its published sections plus CFA,
  SEC, FINRA, OIC etc. (docs/research). Curriculum reordered: Options last, risk in Stage 3.
- Wrote docs/CURRICULUM.md and docs/DEVELOPMENT_PLAN.md.
- Batch 1 written + reviewed: Building a portfolio, Valuation ratios, Time value of money (live).
  Advanced option strategies written, in review. Batch 2 started: ETFs in depth, Bonds and interest rates.
- Session limit hit once (agents resumed). The founder set a /loop every 20 minutes to continue.
- Next: review/register Advanced options, ETFs, Bonds; then Stage 2 (Growth value dividends, Company
  events, Money rates economy, Sectors), Stage 3 (5 units), Vault (6 units).
- BLOCKER (24 Oct, ~08:30): GitHub rejects the saved login ("Bad credentials"); git push waits for a sign-in
  only the founder can do. Commits pile up locally on dev/curriculum-v2 until the founder runs `git push`
  in the bullpen folder and signs in. Then: push, open PR dev/curriculum-v2 → main, merge, check live link.
- Also done: Advanced option strategies reviewed + registered; progress now saved in the browser;
  invite links skip onboarding for returning players. In progress: ETFs in depth (writing), Bonds (review),
  Growth value dividends + Company events (writing).


### 24 Oct 2026, session 2 (after the usage-limit reset, ~16:10)
- The 20-minute /loop survived the restart. GitHub login still blocked (see above); commits stay local.
- Added host tools for created tournaments (start, CSV standings, end + trophies) and a Pro preview sheet.
- Resumed: Bonds review, Growth value dividends writer, Company events writer. Started: ETFs in depth review,
  Money rates economy writer, Sectors and the economy writer.
- Next after these: register + test Bonds, ETFs, Growth value dividends, Company events, Money rates
  economy, Sectors (completes Stages 1-2); then Stage 3 (Measuring risk, Reading price trends, Short
  selling and margin, Market psychology, Crypto and other assets) and the Vault (Statements in depth,
  Health-check ratios, Returns ratios, Valuing a company, Futures basics, Greeks in depth).
- (~16:45) Usage limit reached. Done this session: Bonds and ETFs in depth reviewed, registered, tested and
  committed (Stage 1 complete: 5 units). Written and IN REVIEW (files present, not registered): styles.js
  (Growth, value and dividends), events.js (Company events). BEING WRITTEN (may be partial): macro.js,
  sectors.js, risk.js, trends.js. Resume those agents or re-run them, then review, register, test.
  Still blocked: GitHub login. ~11 commits local on dev/curriculum-v2, not on GitHub, live site not updated.

### 24 Oct 2026, session 3 (evening)
- Founder: keep building locally, resume agents (GitHub login still pending).
- Growth, value and dividends reviewed, registered, tested, committed.
- In review: Company events, Money rates economy, Sectors, Measuring risk, Reading price trends.
- Being written: Short selling and margin, Market psychology, Crypto and other assets.
- When Measuring risk + Reading price trends pass: add a "Trading and risk" stage in registry.js between
  Analysing stocks and Options. Then the Vault batch: Statements in depth, Health-check ratios,
  Returns ratios, Valuing a company (DCF), Futures basics, Greeks in depth.
- PAUSED by the founder (all agents and the server stopped; the 20-minute loop removed).
  Live in the local build: 16 main units (Stages 1-2 complete; Trading and risk has Measuring risk and
  Reading price trends; Options complete) + 2 Vault units. Stopped mid-write, NOT registered:
  Short selling and margin, Market psychology, Crypto and other assets, Statements in depth,
  Health-check ratios, Returns ratios (any partial files in prototype/content/ are unreviewed drafts).
  Not started: Valuing a company (DCF), Futures basics, Greeks in depth.
  GitHub login still needed before anything is published.

### 26 Oct 2026, session 4
- Resumed by the founder, max 2 agents at a time. Short selling and margin and Market psychology written,
  reviewed, registered, browser-tested, committed (Stage 3 now has 4 of 5 units; 18 main units total when Crypto lands).
- In progress: Crypto and other assets (writing). Then the Vault: Statements in depth, Health-check ratios,
  Returns ratios, Valuing a company, Futures basics, Greeks in depth.
- Crypto and other assets reviewed, registered, tested, committed. Stage 3 complete (5 units). Next: Vault batch.
- Statements in depth (Vault) reviewed, registered, tested, committed. Health-check ratios being written.
- Health-check ratios (Vault) reviewed, registered, tested, committed. Returns ratios being written.
- Returns ratios (Vault) reviewed, registered, tested, committed. Valuing a company being written; then Futures basics, Greeks in depth.
- Valuing a company (Vault) reviewed, registered, tested, committed. Futures basics in review; Greeks in depth being written.
- Futures basics (Vault) reviewed, registered, tested, committed. Greeks in depth being written (last unit).
- Greeks in depth reviewed, registered, tested. ALL curriculum units are done (19 main, 8 Vault). Nothing left to write. Only blocker: GitHub sign-in (git push), then PR dev/curriculum-v2 -> main and merge.

### 27 Oct 2026
- Founder signed in; dev/curriculum-v2 merged to main as PR #7 (CI green). Live link now shows all 19 main + 8 Vault units.

- Class mode preview built in the prototype (teacher space, assign + due dates, class progress, CSV grades, class tournament, student join with school-paid Pro). Next: institutional plan + mock admin screen, then the trading section.
- Institution plan (docs/INSTITUTIONS.md) and mock admin screen added. Next: the trading section.
- Trading section built: working practice account in the Trade tab (sample prices, market + limit orders, positions, season score; competitions rank it). Not yet: short selling, margin, options, live prices.
