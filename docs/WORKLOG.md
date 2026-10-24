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
