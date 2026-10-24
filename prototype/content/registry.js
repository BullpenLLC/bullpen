/* ---------- Course registry ----------
   The order of everything. Stages make up the main path; the Vault holds optional deep dives.
   To add a unit: create content/<id>.js (see docs/CONTENT_SPEC.md), add a <script> tag for it in
   index.html before this file, and list it below with its placement questions (Vault units have none). */
function withPlacement(U, P){ U.placement = P; return U; }

const STAGES = [
  {id:'foundations', title:'Foundations', level:'Beginner', blurb:'How markets work, reading prices, and building a portfolio.',
   units:[withPlacement(UNIT_MARKETS, PLACEMENT_MARKETS), withPlacement(UNIT_READING_MARKET, PLACEMENT_READING_MARKET), withPlacement(UNIT_PORTFOLIO, PLACEMENT_PORTFOLIO)]},
  {id:'analysing', title:'Analysing stocks', level:'Intermediate', blurb:'Valuing a company, what moves its price, and the economy around it.',
   units:[withPlacement(UNIT_VALUATION, PLACEMENT_VALUATION)]},
  {id:'options', title:'Options', level:'Advanced', blurb:'Calls, puts, pricing and strategies.',
   units:[withPlacement(UNIT_OPTIONS_BASICS, PLACEMENT_OPTIONS_BASICS), withPlacement(UNIT_PRICING_OPTIONS, PLACEMENT_PRICING_OPTIONS), withPlacement(UNIT_OPTION_STRATEGIES, PLACEMENT_OPTION_STRATEGIES), withPlacement(UNIT_ADV_OPTIONS, PLACEMENT_ADV_OPTIONS)]}
];

/* The Vault: optional deep dives into finance fundamentals. Bonus points, own badges, not in the placement test. */
const VAULT = [UNIT_ACCOUNTS, UNIT_TVM];

/* Teaser shown after the last unit of the main path. */
const NEXT_UNIT = 'ETFs in depth, Bonds, Trading and risk, and more';
