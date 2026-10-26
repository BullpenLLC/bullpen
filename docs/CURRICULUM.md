# Bullpen curriculum

The full course: what Bullpen teaches, in what order, and how it's assessed. Topic coverage was checked against Investopedia's sections and against CFA Institute, SEC investor.gov, FINRA, the Options Industry Council and others (see `docs/research/investopedia-topic-map.md`). All wording in the app is our own.

**Status key:** ✅ live in the app · 🔍 written, in review · ✍️ being written · ⏳ planned

## Shape of the course
- **Main path:** 4 stages, 18 units, about 108 lessons. Each unit has 5 lessons (4 cards and 5 questions each) plus an 8-question unit check with a badge.
- **Stage exams:** 15 questions drawn from the whole stage; 12 right earns a shareable certificate.
- **The Vault:** optional deep dives into finance fundamentals (accounts, valuation, the maths of money, the Greeks), with bonus Vault points and badges. Open in any order.
- **Placement test:** 2 questions per unit, stage by stage. You skip every stage where you miss at most one, and start at the first lesson you missed.
- **Daily review:** brings back questions you missed, mixed with ones from finished lessons.

## Stage 1 · Foundations (Beginner)
How markets work, reading prices, building a portfolio, and the two building blocks: funds and bonds.

| Unit | Lessons | Status |
|---|---|---|
| How markets work | What a stock is · Risk and return · Diversification · Index funds · Fees and compounding | ✅ |
| Reading the market | Price charts · Market cap · Earnings and P/E · Placing orders · Bulls, bears and recoveries | ✅ |
| Building a portfolio | Goals and time horizon · Asset allocation · ETFs and mutual funds · Dollar-cost averaging · Rebalancing | ✅ |
| ETFs in depth | How an ETF works · Reading an ETF · Kinds of ETF · Bond and commodity ETFs · Leveraged and inverse ETFs | ✅ |
| Bonds and interest rates | What a bond is · Present value and prices · Yield to maturity · Duration and rate risk · Credit ratings and default | ✅ |

## Stage 2 · Analysing stocks (Intermediate)
Valuing a company, what drives its price, and the economy around it.

| Unit | Lessons | Status |
|---|---|---|
| Valuation ratios | P/E in depth · The PEG ratio · Book and sales ratios · Enterprise value and EBITDA · Dividend yield and payout | ✅ |
| Growth, value and dividends | Growth vs value · Dividend investing · Buybacks vs dividends · Factor investing · Quality and ESG | ✅ |
| Company events | Earnings season · Dividend dates · Buybacks and dilution · Going public · Mergers and takeovers | ✅ |
| Money, rates and the economy | Inflation and real returns · Central banks and rates · The yield curve · Data that moves markets · Currencies and exchange rates | ✅ |
| Sectors and the economy | Sectors · Cyclical vs defensive · The business cycle · Sector rotation · Commodity-linked sectors | ✅ |

## Stage 3 · Trading and risk (Intermediate)
Measuring risk (which the season score is built on), reading price trends, and the traps.

| Unit | Lessons | Status |
|---|---|---|
| Measuring risk | Volatility and standard deviation · Drawdowns · Beta and correlation · The Sharpe ratio · Position sizing and stop-losses | ✅ |
| Reading price trends | Trends and trendlines · Support and resistance · Moving averages · Momentum: RSI and MACD · Volume and chart limits | ✅ |
| Short selling and margin | Buying on margin · Margin calls · How short selling works · Short squeezes · Liquidity and slippage | ✅ |
| Market psychology | Loss aversion · Overconfidence · Herding, FOMO and bubbles · Anchoring and confirmation · Recency and mental accounting | ✅ |
| Crypto and other assets | Bitcoin and blockchains · Stablecoins and custody · Gold and commodities · Real estate and REITs · Scams and red flags | ✍️ |

## Stage 4 · Options (Advanced)
From what an option is to multi-leg strategies.

| Unit | Lessons | Status |
|---|---|---|
| Options basics | What an option is · Call options · Put options · In the money? · Expiry and exercise | ✅ |
| Pricing options | Intrinsic and time value · Time decay · Volatility · Delta · Reading an option chain | ✅ |
| Option strategies | Buying vs selling · Covered calls · Protective puts · Option spreads · Leverage and risk | ✅ |
| Advanced option strategies | Straddles · Strangles · Iron condors · Calendar spreads · Earnings and rolling | ✅ |

## The Vault (optional deep dives)

| Unit | Lessons | Status |
|---|---|---|
| Reading company accounts | The income statement · Profit margins · The balance sheet · Cash flow · Debt and warning signs | ✅ |
| Time value of money | Today vs tomorrow · Future value · Present value · Annuities and loans · NPV and IRR | ✅ |
| Statements in depth | How the statements link · Adjusted vs reported earnings · Depreciation and capex · Share count and dilution · Reading an annual report | ⏳ |
| Health-check ratios | Liquidity · Leverage and interest cover · Turnover and efficiency · Working capital and the cash cycle · Quality of earnings | ⏳ |
| Returns ratios | ROE · ROA · ROIC · The DuPont breakdown · Comparing returns across industries | ⏳ |
| Valuing a company | Intrinsic vs market value · Forecasting free cash flow · Discount rates: WACC and CAPM · Terminal value and sensitivity · Comparables and margin of safety | ⏳ |
| Futures basics | What a futures contract is · Margin and marking to market · Hedgers and speculators · Contango and backwardation · Crypto perpetuals and liquidation | ⏳ |
| Greeks in depth | Gamma · Vega and implied volatility · Rho and early exercise · Put-call parity · Skew and the VIX | ⏳ |

## Levels, leagues and rewards
- **Points:** 10 per first-try right answer, 5 on a retry, +15 for finishing a lesson, 5 per right answer in a review, +100 for passing a stage exam.
- **Investor levels:** Intern (0) · Analyst (500) · Associate (1,500) · Vice President (3,500) · Director (7,000) · Portfolio Manager (12,000) · Partner (20,000).
- **Weekly leagues:** Penny · Small-cap · Mid-cap · Large-cap · Blue-chip. 30 players each; top 7 move up, bottom 5 move down.
- **Practice capital:** $5k per session, −$1k per miss in a lesson; a "margin call" when it runs out (refills over time, unlimited with Pro).
- **Badges:** one per unit check (main and Vault), plus streak, competition and season badges.
- **Certificates:** one per stage exam passed.

## Deliberately left out
Personal finance (budgets, mortgages, insurance, US retirement accounts), tax, forex/CFD day trading, Elliott wave/Fibonacci/candle-pattern catalogues, exotic derivatives, and private equity/VC in depth. Reasons are in the research file.

## How a unit gets made
Writer (following `docs/CONTENT_SPEC.md`) → independent reviewer (recomputes every number, checks every answer and fact, fixes in place) → `node tools/check-content.js` → registered in `prototype/content/registry.js` → tested in the browser → merged. A finance professor's review of everything is planned before the AUB pilot.
