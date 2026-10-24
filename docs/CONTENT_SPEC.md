# Bullpen lesson-writing spec

Everyone who writes lessons follows this: founders, Claude sessions and writer agents. Bullpen teaches investing to university students in Lebanon (AUB first), in short lessons with quizzes.

## Where content lives
One unit per file in `prototype/content/`, named after the unit's id, e.g. `prototype/content/valuation.js`. The app loads every file listed in `prototype/content/registry.js`. Never edit `prototype/index.html` to add content.

Good examples to copy the style of: `prototype/content/markets.js` (beginner), `prototype/content/reading-market.js` (diagrams, tiles), `prototype/content/options-basics.js` (payoff chart), `prototype/content/pricing-options.js` (model-based numbers).

## File format
```js
/* ---------- <Unit title> ---------- */
const <ID>_<LESSON1> = { title:'...', min:4, cards:[ ...4 cards... ], qs:[ ...5 questions... ] };
... five lessons ...
const <ID>_CHECK = { title:'Unit check', min:4, badge:{name:'<Badge>', icon:'<icon>'}, cards:[], qs:[ ...8 questions... ] };
const UNIT_<ID> = { id:'<id>', title:'<Unit title>', level:'Beginner|Intermediate|Advanced|Vault', lessons:[<ID>_<LESSON1>, ..., <ID>_CHECK] };
/* Placement: one question per lesson, n = lesson number 1-5. Different from the lesson questions. Vault units skip this. */
const PLACEMENT_<ID> = [ {n:1, q:'...', o:[...], a:0, e:'...'}, ... 5 total ];
/* MATHS CHECK: every calculation and its result, for the reviewer. */
```
`<ID>` is the unit id in capitals (e.g. `VALUATION`). Icons: `book`, `candles`, `trophy`, `up`, `baskets`, `star`, `scale`, `flag`, `shield`, `bolt`, `flame`.

### Lessons
- `title`: 2-4 words, shown in the course list.
- `min`: 4 or 5.
- `cards`: exactly 4, each `{k:'eyebrow', t:'Card title', b:`...html...`}`.
  - Card 1: `k:'The idea'` (the app replaces it with "Unit N · Lesson M"). Starts with `<p class="lead">`, has one key term, ends with `<div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About M min</span></div>`.
  - Cards 2-4: eyebrows like `'Do the maths'`, `'The catch'`, `'The limit'`, `'In practice'`. At least one card per lesson works through real numbers.
- `qs`: exactly 5, `{q, o:[4 options], a:<index of the right one>, e:'why'}`. True/false uses `o:['True','False']`. The app shuffles options, but still vary `a`.

### Building blocks (all styled already)
- `<p class="lead">`, `<p>`.
- Key term: `<div class="term"><span class="term-k">Key term</span><b>Term:</b> definition.</div>`
- Side by side: `<div class="split"><div class="col good"><div class="col-h">Label</div><b>Headline</b><p>Detail.</p></div><div class="col bad">...</div></div>`
- Two cards: `<div class="compare"><div class="pf"><div class="pf-h">Title</div><p>detail</p><div class="pf-r">Label<b class="mono">$1,234</b></div></div> ...</div>`
- Tiles: `<div class="kv">` (4 tiles) or `<div class="kv kv3">` / `<div class="score">` (3 tiles), each `<div><b>value</b><span>label</span></div>`.
- Colour a number: `<b class="good-t">+6%</b>`, `<b class="bad-t">−$300</b>`.
- Diagram (max 2 per unit, only if every coordinate is exact): `<svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="...">`, colours only via `var(--bull)`, `var(--bull-deep)`, `var(--bull-ink)`, `var(--bear)`, `var(--bear-deep)`, `var(--bear-ink)`, `var(--ink)`, `var(--ink-2)`, `var(--line)`, `var(--sky)`; text `font-family="var(--font-mono)" font-size="11"`; keep stacked text lines at least 14px apart.
- In template literals: `&amp;` for &, never a backtick or `${`. Use the real minus sign `−`.

## Hard rules
1. **Own words only.** Facts and definitions belong to nobody, but never copy or closely paraphrase a website or book (Investopedia included). No links.
2. **Refer to other units by name, never by number** ("the Pricing options unit"), because units get reordered.
3. **Plain English, short sentences**, for smart 18-22 year-olds. Explain every term in one line. Not childish, no padding. UK spelling ("practise", "realised"); amounts in US dollars.
4. **Every number and every right answer is correct.** Put every calculation in a Python script and run it. Options: 1 contract = 100 shares, premiums per share, profit/loss at expiry unless stated. Ignore fees and taxes unless the card is about them.
5. **No advice.** Never tell anyone to buy, sell or hold anything real. No "you should". Use made-up companies (Cedar Tech, Byblos Foods, Litani Energy, Sannine Foods...) or describe history accurately.
6. **Honest about risk**, no hype, no invented statistics. A general tendency is phrased as a tendency, without a number.
7. **Plausible wrong options** (real misconceptions, maths slips). Explanations `e` show the working.
8. Placement questions test each lesson's idea with new questions. The unit check has 8 mixed questions covering all five lessons, a bit harder than the quizzes.

## Before handing over
- Parse check (run node from your home folder and pass the full path, since long Windows paths break node's working directory):
  `node -e "const fs=require('fs'); new Function(fs.readFileSync(String.raw\`<full path>\`,'utf8') + '; return UNIT_<ID>;')(); console.log('ok')"`
- Counts: 5 lessons × 4 cards × 5 questions, check 8, placement 5 (except Vault).
- The MATHS CHECK block lists every calculation.
- Reply with: file path, lesson titles, badge, anything you were unsure about.

## Review (a second agent or person, before a unit goes in)
Recompute every number independently, check every answer key has exactly one right option, check every factual claim, check diagrams, check the rules above, fix clear errors in place and list every change.
