/* ---------- Course registry ----------
   The order of everything. Stages make up the main path; the Vault holds optional deep dives.
   To add a unit: create content/<id>.js (see docs/CONTENT_SPEC.md), add a <script> tag for it in
   index.html before this file, and list it below with its placement questions (Vault units have none). */
function withPlacement(U, P){ U.placement = P; return U; }

const STAGES = [
  {id:'foundations', title:'Foundations', level:'Beginner', blurb:'How markets work, reading prices, building a portfolio, funds and bonds.',
   units:[withPlacement(UNIT_MARKETS, PLACEMENT_MARKETS), withPlacement(UNIT_READING_MARKET, PLACEMENT_READING_MARKET), withPlacement(UNIT_PORTFOLIO, PLACEMENT_PORTFOLIO), withPlacement(UNIT_ETFS, PLACEMENT_ETFS), withPlacement(UNIT_BONDS, PLACEMENT_BONDS)]},
  {id:'analysing', title:'Analysing stocks', level:'Intermediate', blurb:'Valuing a company, what moves its price, and the economy around it.',
   units:[withPlacement(UNIT_VALUATION, PLACEMENT_VALUATION), withPlacement(UNIT_STYLES, PLACEMENT_STYLES), withPlacement(UNIT_EVENTS, PLACEMENT_EVENTS), withPlacement(UNIT_MACRO, PLACEMENT_MACRO), withPlacement(UNIT_SECTORS, PLACEMENT_SECTORS)]},
  {id:'trading', title:'Trading and risk', level:'Intermediate', blurb:'Measuring risk, reading price trends, and the traps traders fall into.',
   units:[withPlacement(UNIT_RISK, PLACEMENT_RISK), withPlacement(UNIT_TRENDS, PLACEMENT_TRENDS), withPlacement(UNIT_MARGIN, PLACEMENT_MARGIN), withPlacement(UNIT_PSYCHOLOGY, PLACEMENT_PSYCHOLOGY), withPlacement(UNIT_ALTERNATIVES, PLACEMENT_ALTERNATIVES)]},
  {id:'options', title:'Options', level:'Advanced', blurb:'Calls, puts, pricing and strategies.',
   units:[withPlacement(UNIT_OPTIONS_BASICS, PLACEMENT_OPTIONS_BASICS), withPlacement(UNIT_PRICING_OPTIONS, PLACEMENT_PRICING_OPTIONS), withPlacement(UNIT_OPTION_STRATEGIES, PLACEMENT_OPTION_STRATEGIES), withPlacement(UNIT_ADV_OPTIONS, PLACEMENT_ADV_OPTIONS)]}
];

/* The Vault: optional deep dives into finance fundamentals. Bonus points, own badges, not in the placement test. */
const VAULT = [UNIT_ACCOUNTS, UNIT_TVM, UNIT_STATEMENTS, UNIT_HEALTH, UNIT_RETURNS, UNIT_DCF];

/* Teaser shown after the last unit of the main path. */
const NEXT_UNIT = 'ETFs in depth, Bonds, Trading and risk, and more';
