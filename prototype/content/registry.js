/* ---------- Course registry ----------
   The order of everything. Stages make up the main path; the Vault holds optional deep dives.
   To add a unit: create content/<id>.js (see docs/CONTENT_SPEC.md), add a <script> tag for it in
   index.html before this file, and list it below with its placement questions (Vault units have none). */
function withPlacement(U, P){ U.placement = P; return U; }

const STAGES = [
  {id:'foundations', title:'Foundations', level:'Beginner', blurb:'How markets work, reading prices, and the basic tools.',
   units:[withPlacement(UNIT_MARKETS, PLACEMENT_MARKETS), withPlacement(UNIT_READING_MARKET, PLACEMENT_READING_MARKET)]},
  {id:'options', title:'Options', level:'Advanced', blurb:'Calls, puts, pricing and strategies.',
   units:[withPlacement(UNIT_OPTIONS_BASICS, PLACEMENT_OPTIONS_BASICS), withPlacement(UNIT_PRICING_OPTIONS, PLACEMENT_PRICING_OPTIONS), withPlacement(UNIT_OPTION_STRATEGIES, PLACEMENT_OPTION_STRATEGIES)]}
];

/* The Vault: optional deep dives into finance fundamentals. Bonus points, own badges, not in the placement test. */
const VAULT = [UNIT_ACCOUNTS];

/* Teaser shown after the last unit of the main path. */
const NEXT_UNIT = 'Building a portfolio';
