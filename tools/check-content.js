// Checks every lesson file in prototype/content against docs/CONTENT_SPEC.md.
// Usage (from the repo root):  node tools/check-content.js
// Exit code 0 = all good, 1 = problems found.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'prototype');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const files = [...html.matchAll(/<script src="(content\/[^"]+\.js)"><\/script>/g)].map(m => m[1]);
const onDisk = fs.readdirSync(path.join(root, 'content')).filter(f => f.endsWith('.js')).map(f => 'content/' + f);
const problems = [];
onDisk.filter(f => !files.includes(f)).forEach(f => problems.push(`${f} exists but isn't loaded in index.html`));

const src = files.map(f => fs.readFileSync(path.join(root, f), 'utf8')).join('\n;\n');
const names = [...src.matchAll(/^const ([A-Za-z0-9_]+) =/gm)].map(m => m[1]);
names.filter((n, i) => names.indexOf(n) !== i).forEach(n => problems.push(`duplicate name ${n}`));

let STAGES, VAULT;
try { ({ STAGES, VAULT } = new Function(src + '; return {STAGES, VAULT};')()); }
catch (e) { console.log('Content failed to load:', e.message); process.exit(1); }

const seen = new Map();
function checkUnit(U, where, needsPlacement) {
  const tag = `${where} "${U.title}"`;
  if (!U.id) problems.push(`${tag}: missing id`);
  const L = U.lessons || [];
  if (L.length !== 6) problems.push(`${tag}: ${L.length} lessons (want 5 + check)`);
  L.slice(0, -1).forEach(l => {
    if (l.cards.length !== 4 || l.qs.length !== 5) problems.push(`${tag} / ${l.title}: ${l.cards.length} cards, ${l.qs.length} questions`);
    const m = l.cards[0] && l.cards[0].b.match(/About (\d) min/);
    if (!m || +m[1] !== l.min) problems.push(`${tag} / ${l.title}: "About N min" doesn't match min`);
  });
  const chk = L[L.length - 1];
  if (!chk || chk.cards.length !== 0 || chk.qs.length !== 8 || !chk.badge) problems.push(`${tag}: unit check should have 0 cards, 8 questions and a badge`);
  const qs = L.flatMap(l => l.qs).concat(needsPlacement ? (U.placement || []) : []);
  if (needsPlacement && (!U.placement || U.placement.map(q => q.n).join('') !== '12345')) problems.push(`${tag}: placement needs 5 questions with n = 1..5`);
  qs.forEach(q => {
    const short = q.q.slice(0, 60);
    if (!(q.a >= 0 && q.a < q.o.length)) problems.push(`${tag}: answer index out of range: ${short}`);
    if (new Set(q.o).size !== q.o.length) problems.push(`${tag}: duplicate options: ${short}`);
    if (!q.e) problems.push(`${tag}: no explanation: ${short}`);
    if (seen.has(q.q)) problems.push(`${tag}: question repeated from ${seen.get(q.q)}: ${short}`);
    seen.set(q.q, U.title);
  });
  const text = L.flatMap(l => l.cards.map(c => c.b + ' ' + c.t)).concat(qs.map(q => q.q + ' ' + q.o.join(' ') + ' ' + q.e)).join('\n');
  [[/investopedia/i, 'mentions Investopedia'], [/\byou should\b/i, 'says "you should"'], [/https?:\/\//i, 'contains a link'], [/\bUnit \d/, 'refers to a unit by number']]
    .forEach(([re, msg]) => { if (re.test(text)) problems.push(`${tag}: ${msg}`); });
  return L.length;
}

let lessons = 0;
STAGES.forEach((st, i) => st.units.forEach(U => { lessons += checkUnit(U, `Stage ${i + 1} (${st.title})`, true); }));
VAULT.forEach(U => { lessons += checkUnit(U, 'Vault', false); });
const units = STAGES.reduce((n, st) => n + st.units.length, 0);
console.log(`${STAGES.length} stages, ${units} main units, ${VAULT.length} Vault units, ${lessons} lessons and checks, ${seen.size} questions`);
STAGES.forEach((st, i) => console.log(`  Stage ${i + 1} ${st.title}: ${st.units.map(U => U.title).join(', ')}`));
console.log(`  Vault: ${VAULT.map(U => U.title).join(', ')}`);
if (problems.length) { console.log(`\n${problems.length} problem(s):`); problems.forEach(p => console.log('  - ' + p)); process.exit(1); }
console.log('All content checks passed.');
