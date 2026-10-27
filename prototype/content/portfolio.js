/* ---------- Building a portfolio ---------- */
const PORTFOLIO_GOALS = {
  title:'Goals and time horizon', min:4,
  cards:[
    {k:'The idea', t:'Start with the why and the when', b:`
      <p class="lead">A portfolio is built backwards from a goal. The first questions come before any investment is picked: what is the money for, and when will it be needed?</p>
      <div class="term"><span class="term-k">Key term</span><b>Goal:</b> what the money is for, how much it takes and by when. "$5,000 for a master's deposit by September 2029" is a goal. "Make money" isn't.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Same fall, different deadlines', b:`
      <p>Nadine and Sami each put $4,000 into a stock fund. In its first year the fund falls 30%, to $2,800.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Nadine</div>
          <p>Needs the money in 1 year, for a deposit</p>
          <div class="pf-r">Short of her goal by<b class="mono bad-t">$1,200</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Sami</div>
          <p>Needs the money in 15 years</p>
          <div class="pf-r">Years left to recover<b class="mono good-t">14</b></div>
        </div>
      </div>
      <p>Getting back to $4,000 takes a rise of about 43% ($1,200 ÷ $2,800). Sami has years for that to happen, though it isn't guaranteed. Nadine has no time at all.</p>
      <p>That's why a widely used principle is to keep money needed within the next few years out of investments that swing a lot.</p>`},
    {k:'In practice', t:'A buffer for surprises', b:`
      <p>Life brings bills nobody planned for: a medical cost, a laptop that dies, a job that ends. Many people keep a cash buffer for these before they invest, so a surprise can be paid for without selling investments.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">No buffer</div><b>Sell to pay</b><p>A $1,500 repair lands during a market fall. Investments get sold at a low price.</p></div>
        <div class="col good"><div class="col-h">With a buffer</div><b>Pay from cash</b><p>The bill comes out of the buffer. The investments are left alone.</p></div>
      </div>
      <p>The right size is personal. A few months of essential costs is a common target. If rent, food and transport come to $700 a month, three months is $2,100.</p>
      <div class="term"><span class="term-k">Key term</span><b>Emergency fund:</b> cash set aside only for surprises, kept somewhere easy to reach and out of investments that swing in price.</div>`},
    {k:'Two different limits', t:'Tolerance and capacity', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Risk tolerance</div><b>How big a drop you can live with</b><p>About nerves. Could you watch your savings fall 30% without selling in a panic?</p></div>
        <div class="col good"><div class="col-h">Risk capacity</div><b>How much you can afford to lose</b><p>About facts: when the money is needed, your income, and whether a loss would wreck your plans.</p></div>
      </div>
      <p>The two can disagree. Hadi says a 40% drop wouldn't bother him, so his tolerance is high. But his savings pay next year's rent, so his capacity is low.</p>
      <p>When they clash, a common approach is to let the lower of the two set the limit.</p>`}
  ],
  qs:[
    {q:'Which of these is a clear investment goal?',
     o:['Make as much money as possible','$3,000 for a car by June 2028','Beat my friends in the trading game','Buy whatever is going up'], a:1,
     e:'A clear goal says what the money is for, how much it takes and by when. The others have no amount or date.'},
    {q:'Tarek needs $5,000 for a deposit in one year. He puts it in a stock fund, which falls 25% that year. How far short of his goal is he?',
     o:['$250','$1,000','$1,250','$3,750'], a:2,
     e:'25% of $5,000 is $1,250, so the fund is worth $3,750. That is $1,250 short, with no time left to wait.'},
    {q:"Jad says he wouldn't mind if his investments fell 40%. But he needs the money for tuition in eight months. Which is low?",
     o:['His risk capacity','His risk tolerance','Both','Neither'], a:0,
     e:"His nerves can handle a drop (high tolerance), but he can't afford one this close to a big bill (low capacity)."},
    {q:'What is the main job of an emergency fund?',
     o:['To earn more than stocks over time','To cover fund fees','To replace the need for diversification','To pay for surprises without selling investments'], a:3,
     e:"A cash buffer means an unexpected bill doesn't force a sale, perhaps right after a fall."},
    {q:'True or false: a long time horizon removes the risk of losing money.',
     o:['True','False'], a:1,
     e:"Time gives room to wait out falls, but recoveries can be slow and aren't guaranteed."}
  ]
};

const PORTFOLIO_ALLOCATION = {
  title:'Asset allocation', min:5,
  cards:[
    {k:'The idea', t:'Choosing the mix', b:`
      <p class="lead">Asset allocation is how you split your money between different types of investment. The three basic types are stocks, bonds and cash.</p>
      <div class="score"><div><b>Stocks</b><span>Biggest swings</span></div><div><b>Bonds</b><span>Usually steadier</span></div><div><b>Cash</b><span>Steadiest, usually lowest return</span></div></div>
      <div class="term"><span class="term-k">Key term</span><b>Asset allocation:</b> the split of a portfolio between types of investment, such as 60% stocks and 40% bonds, often written 60/40.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'A bad year for stocks', b:`
      <p>Three portfolios each start with $10,000. In one year, stocks fall 20% and bonds rise 2%.</p>
      <div class="score"><div><b class="bad-t">−17.8%</b><span>90/10: $8,220</span></div><div><b class="bad-t">−11.2%</b><span>60/40: $8,880</span></div><div><b class="bad-t">−4.6%</b><span>30/70: $9,540</span></div></div>
      <p>The 60/40 working: $6,000 × 0.80 = $4,800 in stocks, plus $4,000 × 1.02 = $4,080 in bonds. Total $8,880.</p>
      <div class="term"><span class="term-k">Key term</span><b>Bond:</b> a loan to a government or company. It pays interest and gives the money back on a set date, unless the borrower can't pay.</div>`},
    {k:'The trade-off', t:'Smaller falls, smaller gains', b:`
      <p>Now a good year: stocks rise 20% and bonds rise 2%. Same three portfolios:</p>
      <div class="score"><div><b class="good-t">+18.2%</b><span>90/10: $11,820</span></div><div><b class="good-t">+12.8%</b><span>60/40: $11,280</span></div><div><b class="good-t">+7.4%</b><span>30/70: $10,740</span></div></div>
      <p>Across the two example years, the 90/10 mix swings from −17.8% to +18.2%. The 30/70 mix only moves from −4.6% to +7.4%. More bonds means a smoother ride, and over long periods it has usually meant less growth.</p>
      <p>For a diversified portfolio, this split usually matters far more to how much it swings than which particular funds sit inside it.</p>`},
    {k:"It's personal", t:'No single right mix', b:`
      <p>A sensible mix depends on the things from earlier in this unit: the goal, the time horizon, and risk tolerance and capacity.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Long horizon, high capacity</div><b>More room for stocks</b><p>Time to wait out falls, and a loss wouldn't wreck the plan.</p></div>
        <div class="col bad"><div class="col-h">Short horizon, low capacity</div><b>Less room for stocks</b><p>A fall could hit just when the money is needed.</p></div>
      </div>
      <p>Bonds aren't a perfect cushion either. In 2022, US stocks and US bonds both fell by more than 10%.</p>`}
  ],
  qs:[
    {q:'Lina is saving for a goal 30 years away. Her aunt needs her savings in two years. Why might their sensible mixes be very different?',
     o:['Older people are not allowed to own stocks','Bonds only suit young people','There is one correct mix, so one of them is wrong','Their time horizons and capacity for loss are different'], a:3,
     e:'Allocation is personal. Lina has decades to wait out falls. Her aunt could be hit by a fall just before she needs the money.'},
    {q:'A $20,000 portfolio is 50% stocks and 50% bonds. Stocks fall 10% and bonds rise 4%. What is it worth after the year?',
     o:['$18,000','$19,000','$19,400','$20,800'], a:2,
     e:'Stocks: $10,000 × 0.90 = $9,000. Bonds: $10,000 × 1.04 = $10,400. Total $19,400, a 3% fall.'},
    {q:'Stocks have a great year and bonds barely move. Which mix would usually gain the most?',
     o:['30% stocks, 70% bonds','60% stocks, 40% bonds','90% stocks, 10% bonds','100% cash'], a:2,
     e:'The bigger the share in stocks, the more the portfolio moves with them, up or down.'},
    {q:'True or false: bonds always rise when stocks fall.',
     o:['True','False'], a:1,
     e:'They often hold up better, but not always. In 2022, US stocks and US bonds both fell by more than 10%.'},
    {q:'What is a bond?',
     o:['A loan to a government or company that pays interest','A slice of ownership in a company','A fund that copies an index','A fee charged by a broker'], a:0,
     e:"Buying a bond means lending money. The borrower pays interest and repays the loan on a set date, unless it can't pay."}
  ]
};

const PORTFOLIO_FUNDS = {
  title:'ETFs and mutual funds', min:5,
  cards:[
    {k:'The idea', t:'One basket, many owners', b:`
      <p class="lead">A fund pools money from many investors and invests it as one portfolio. A fund can hold stocks, bonds or both, and each investor owns a slice of the whole thing.</p>
      <div class="term"><span class="term-k">Key term</span><b>Fund:</b> a pool of investors' money run as a single portfolio. Buying into it gives you a stake in every investment inside.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Two wrappers', t:'How you buy in', b:`
      <div class="split">
        <div class="col good"><div class="col-h">ETF</div><b>Trades all day</b><p>Bought and sold on a stock exchange, like a share. The price moves through the day.</p></div>
        <div class="col good"><div class="col-h">Mutual fund</div><b>One price a day</b><p>Bought from and sold back to the fund company. All orders in before the daily cut-off get the same price, usually worked out after the market closes.</p></div>
      </div>
      <p>A fund that owns $30 million of investments, owes nothing and has 1.5 million fund shares has a NAV of $30 million ÷ 1.5 million = $20 a share.</p>
      <div class="term"><span class="term-k">Key term</span><b>NAV (net asset value):</b> what everything in a fund is worth, minus anything it owes, divided by the number of fund shares. Mutual funds are bought and sold at this price.</div>`},
    {k:'Do the maths', t:'Fees in dollars', b:`
      <p>The wrapper and the strategy are separate choices. An index fund copies a list and an active fund pays managers to pick, as the How markets work unit showed. Either can be an ETF or a mutual fund.</p>
      <p>The yearly cost is the expense ratio. On a $10,000 balance:</p>
      <div class="kv kv3"><div><b>$3</b><span>0.03% fee</span></div><div><b>$20</b><span>0.20% fee</span></div><div><b class="bad-t">$75</b><span>0.75% fee</span></div></div>
      <p>The working: 0.75% × $10,000 = 0.0075 × $10,000 = $75. That's $72 a year more than the cheapest, and money lost to fees stops compounding for you.</p>`},
    {k:'Look inside', t:'Holdings and tracking', b:`
      <p>A fund's <b>holdings</b> are the list of everything it owns. Most funds publish them regularly. They can show that two funds with different names own many of the same big companies, so owning both spreads your money less than it seems.</p>
      <p>An index fund aims to <b>track</b> its index: to match its return as closely as it can. Say an index rises 10.00% in a year and a fund tracking it rises 9.95%. On $10,000 that's $995 instead of $1,000. The $5 gap is about the size of its 0.05% fee.</p>
      <div class="term"><span class="term-k">Key term</span><b>Tracking difference:</b> the gap between a fund's return and its index's return. A gap much bigger than the fee suggests the fund copies its index poorly.</div>`}
  ],
  qs:[
    {q:'What is the main difference in how ETFs and mutual funds trade?',
     o:['ETFs trade on an exchange all day; mutual fund orders get one price a day','Mutual funds trade all day; ETFs trade once a week','ETFs can only hold bonds','There is no difference'], a:0,
     e:'An ETF is bought and sold like a share. A mutual fund is bought from the fund company at a price set once a day, usually after the market closes.'},
    {q:'Fund A charges 0.40% a year and Fund B charges 0.10%. You have $10,000 in each. How much more does Fund A cost this year?',
     o:['$3','$30','$40','$300'], a:1,
     e:'0.40% of $10,000 = $40. 0.10% of $10,000 = $10. $40 − $10 = $30.'},
    {q:'True or false: every ETF is an index fund.',
     o:['True','False'], a:1,
     e:'ETF describes how a fund trades, not its strategy. Many ETFs track an index, but some are run by managers who pick.'},
    {q:'An index rose 6.00% last year. A fund tracking it rose 5.80%. On $10,000, how many dollars did the fund trail by?',
     o:['$580','$200','$20','$2'], a:2,
     e:'The index made $600 on $10,000 and the fund made $580. $600 − $580 = $20.'},
    {q:"What are a fund's holdings?",
     o:['The fees it charges','The investors who own it','Its price at the end of the day','The list of investments it owns'], a:3,
     e:'Holdings are what the fund owns. Checking them shows where the money is really invested.'}
  ]
};

const PORTFOLIO_DCA = {
  title:'Dollar-cost averaging', min:5,
  cards:[
    {k:'The idea', t:'Same amount, every month', b:`
      <p class="lead">Dollar-cost averaging means investing a fixed amount on a fixed schedule, whatever the price. $100 on the 1st of every month, for example.</p>
      <p>For many students it isn't a special tactic. It's simply what happens when part of each month's income gets invested.</p>
      <div class="term"><span class="term-k">Key term</span><b>Dollar-cost averaging:</b> investing the same dollar amount at regular intervals, so you buy more shares when prices are low and fewer when they're high.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Five months, $100 each', b:`
      <p>A fund's price over five months goes $10, $8, $5, $8, $10. You invest $100 each month, buying part of a share where needed (many apps allow this).</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Bar chart of shares bought each month with $100: 10 shares at $10 in January, 12.5 at $8 in February, 20 at $5 in March, 12.5 at $8 in April, 10 at $10 in May.">
        <line x1="20" y1="124" x2="280" y2="124" stroke="var(--line)" stroke-width="2"/>
        <rect x="34" y="84" width="32" height="40" rx="4" fill="var(--bull)"/>
        <rect x="84" y="74" width="32" height="50" rx="4" fill="var(--bull)"/>
        <rect x="134" y="44" width="32" height="80" rx="4" fill="var(--bull-deep)"/>
        <rect x="184" y="74" width="32" height="50" rx="4" fill="var(--bull)"/>
        <rect x="234" y="84" width="32" height="40" rx="4" fill="var(--bull)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink)" text-anchor="middle">
          <text x="150" y="14">Shares bought with $100</text>
          <text x="50" y="78">10</text><text x="100" y="68">12.5</text><text x="150" y="38">20</text><text x="200" y="68">12.5</text><text x="250" y="78">10</text>
        </g>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)" text-anchor="middle">
          <text x="50" y="140">at $10</text><text x="100" y="140">at $8</text><text x="150" y="140">at $5</text><text x="200" y="140">at $8</text><text x="250" y="140">at $10</text>
          <text x="50" y="154">Jan</text><text x="100" y="154">Feb</text><text x="150" y="154">Mar</text><text x="200" y="154">Apr</text><text x="250" y="154">May</text>
        </g>
      </svg>
      <p>March's $100 bought twice as many shares as January's, because the price was half as high.</p>`},
    {k:'The result', t:'Average cost vs average price', b:`
      <div class="score"><div><b>$500</b><span>Invested</span></div><div><b>65</b><span>Shares bought</span></div><div><b class="good-t">$7.69</b><span>Average cost per share</span></div></div>
      <p>The average price over the five months was $8.20 ($41 ÷ 5). But you paid $7.69 a share on average ($500 ÷ 65), because the cheap months bought more shares.</p>
      <p>With the price back at $10, the 65 shares are worth $650. All $500 put in at the first $10 would have bought 50 shares, now worth $500. This path was picked to show the effect: the price dipped, then came back.</p>
      <div class="term"><span class="term-k">Key term</span><b>Average cost per share:</b> total invested ÷ total shares bought. With a fixed amount each time, it always comes out at or below the average price.</div>`},
    {k:'The limit', t:"What it can't do", b:`
      <div class="split">
        <div class="col bad"><div class="col-h">Prices only fall</div><b>Still a loss</b><p>$100 a month at $10, $9, $8, $7, $6 ends worth $387. A $500 lump sum would be worth $300. Monthly buying lost less, but still lost $113.</p></div>
        <div class="col bad"><div class="col-h">Prices only rise</div><b>Lump sum ahead</b><p>At $10, $11, $12, $13, $14, $500 invested at the start ends at $700. Monthly buying ends at $592.</p></div>
      </div>
      <p>In the past, big stock markets have risen more often than they've fallen. So studies of past data have found that investing a lump sum straight away has tended to end ahead of spreading it out, though not every time.</p>
      <p>Spreading it out can make big swings easier to live with, and it takes guessing the perfect day out of the picture.</p>`}
  ],
  qs:[
    {q:'Which of these is dollar-cost averaging?',
     o:['Waiting for a big fall, then investing everything','Investing only when the news is good','Selling a little every time the price rises','Investing $150 on the 1st of every month, whatever the price'], a:3,
     e:'A fixed amount on a fixed schedule, without trying to pick the moment.'},
    {q:'You invest $60 a month. The price is $6, then $4, then $3. What is your average cost per share?',
     o:['$3.00','$4.00','$4.33','$4.50'], a:1,
     e:'Shares bought: 10 + 15 + 20 = 45. You invested $180. $180 ÷ 45 = $4.00, below the average price of $4.33.'},
    {q:'Why does dollar-cost averaging give an average cost below the average price?',
     o:['Brokers give discounts on regular orders','Prices always rise over time','The same amount buys more shares when the price is low','It only buys on days when the price falls'], a:2,
     e:'Cheap months buy more shares, so they count for more in your average cost.'},
    {q:"True or false: dollar-cost averaging guarantees you won't lose money.",
     o:['True','False'], a:1,
     e:'If prices keep falling, regular buying still ends in a loss. It just buys more cheap shares along the way.'},
    {q:'You have $1,200 to invest. Prices rise steadily all year. Which ends with more: all $1,200 at the start, or $100 a month?',
     o:['$100 a month','All at the start','They end the same','There is no way to tell'], a:1,
     e:'Each month the price is higher, so money invested later buys fewer shares. All at the start buys the most shares at the lowest price.'}
  ]
};

const PORTFOLIO_REBALANCING = {
  title:'Rebalancing a portfolio', min:5,
  cards:[
    {k:'The idea', t:'Mixes drift', b:`
      <p class="lead">Over time, the parts of a portfolio grow at different speeds. The mix you chose slowly drifts, and the risk drifts with it.</p>
      <div class="term"><span class="term-k">Key term</span><b>Rebalancing:</b> buying, selling or both to bring a portfolio back to its target mix.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'How a 60/40 mix drifts', b:`
      <p>$10,000 starts at 60% stocks and 40% bonds. Over a year, stocks rise 30% and bonds stay flat.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">At the start</div>
          <p>$6,000 stocks · $4,000 bonds</p>
          <div class="pf-r">Mix<b class="mono">60/40</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">A year later</div>
          <p>$7,800 stocks · $4,000 bonds</p>
          <div class="pf-r">Mix<b class="mono bad-t">66/34</b></div>
        </div>
      </div>
      <p>The total is now $11,800. Stocks are $7,800 ÷ $11,800 = 66.1% of it. Nobody touched the portfolio, but it now holds more stocks than planned, so the next fall would hit it harder.</p>`},
    {k:'Do the maths', t:'Getting back to 60/40', b:`
      <p>60% of $11,800 is $7,080. Stocks are $720 over that, and bonds are $720 under their $4,720 target.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Sell and buy</div><b>Move $720</b><p>Sell $720 of stocks, buy $720 of bonds. That leaves $7,080 and $4,720.</p></div>
        <div class="col good"><div class="col-h">Add new money</div><b>$1,200 into bonds</b><p>Nothing is sold. $7,800 and $5,200 make $13,000, which is 60/40 again.</p></div>
      </div>
      <p>Rebalancing trims what has done well and tops up what has lagged. It isn't a forecast. It keeps the risk where it was meant to be. If stocks keep beating bonds for years, a portfolio that was never rebalanced would end with more money, and more risk.</p>`},
    {k:'In practice', t:'When, and what it costs', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Calendar</div><b>On a set date</b><p>For example once a year, whatever has happened.</p></div>
        <div class="col good"><div class="col-h">Threshold</div><b>When it drifts too far</b><p>For example when any part is more than 5 percentage points off target. The 66.1% above would trigger it.</p></div>
      </div>
      <p>Rebalancing isn't free. Selling can mean trading costs and, in many countries, tax on any gain. The rules differ from place to place. Putting new money into whatever is under target is one way to sell less.</p>
      <div class="term"><span class="term-k">Key term</span><b>Percentage point:</b> the plain gap between two percentages. Going from 60% to 66% is a rise of 6 percentage points.</div>`}
  ],
  qs:[
    {q:"Why does a portfolio's mix drift over time?",
     o:['Its parts grow at different speeds','Fund managers change it every month','Fees are only charged on bonds',"It doesn't, the mix stays fixed"], a:0,
     e:'If stocks grow faster than bonds, their share of the total rises, even if nobody buys or sells.'},
    {q:'A $20,000 portfolio starts at 50% stocks and 50% bonds. Stocks rise 20% and bonds stay flat. What share is now in stocks?',
     o:['50%','About 54.5%','60%','About 45.5%'], a:1,
     e:'Stocks: $10,000 × 1.20 = $12,000. Total: $12,000 + $10,000 = $22,000. $12,000 ÷ $22,000 ≈ 54.5%.'},
    {q:'Which of these is threshold rebalancing?',
     o:['Rebalancing every 1 January','Never rebalancing','Rebalancing when any part drifts more than a set amount from target, such as 5 percentage points','Selling everything when markets fall'], a:2,
     e:'A threshold rule acts when the drift gets big enough. A calendar rule acts on a set date.'},
    {q:'A portfolio targets 60% stocks and 40% bonds. It holds $9,000 in stocks and $5,000 in bonds. Without selling anything, how much new money into bonds brings it back to 60/40?',
     o:['$4,000','$1,400','$600','$1,000'], a:3,
     e:'For $9,000 to be 60%, the total must be $9,000 ÷ 0.6 = $15,000. Bonds then need to be $6,000, so add $1,000.'},
    {q:'True or false: rebalancing can come with costs, such as trading fees and, in many countries, tax on gains.',
     o:['True','False'], a:0,
     e:'Selling can bring fees and tax, depending on where you live. Putting new money into whatever is under target is one way to sell less.'}
  ]
};

const PORTFOLIO_CHECK = {
  title:'Unit check', min:4, badge:{name:'Portfolio Builder', icon:'baskets'}, cards:[],
  qs:[
    {q:"Lea sells in a panic after every small dip. But her money isn't needed for 20 years, and she has a steady income. Which best describes her?",
     o:['High tolerance, low capacity','Low tolerance, high capacity','High tolerance, high capacity','Low tolerance, low capacity'], a:1,
     e:"Her nerves can't take drops (low tolerance), but her finances could absorb them (high capacity)."},
    {q:"A $15,000 portfolio is 80% stocks and 20% bonds. Stocks fall 25% and bonds rise 3%. What is the portfolio's return for the year?",
     o:['−25%','−20%','−19.4%','−11%'], a:2,
     e:'Stocks: $12,000 × 0.75 = $9,000. Bonds: $3,000 × 1.03 = $3,090. Total $12,090. $12,090 ÷ $15,000 = 0.806, a 19.4% fall.'},
    {q:'An ETF and a mutual fund track the same index and charge the same fee. What is the main practical difference?',
     o:['The ETF trades all day on an exchange; the mutual fund gets one price a day','The ETF must hold different companies','The mutual fund is guaranteed not to lose money','The ETF must beat the index'], a:0,
     e:'Same strategy, different wrapper. The wrapper changes how and when you can buy and sell.'},
    {q:'A fund charging 0.20% a year tracks an index that rose 10.00%. The fund rose 9.80%. On $10,000, how far behind was it, and what explains most of the gap?',
     o:['$2, the fee','$20, the fee','$200, poor stock picking','$20, the bid-ask spread'], a:1,
     e:'$1,000 vs $980 is a $20 gap. 0.20% of $10,000 is also $20, so the fee explains it.'},
    {q:'You invest $120 a month. The price is $12, then $6, then $8. What is your average cost per share?',
     o:['$8.67','$9.00','$8.00','$6.00'], a:2,
     e:'Shares: 10 + 20 + 15 = 45. Invested: $360. $360 ÷ 45 = $8.00. The average price was $8.67, higher because the cheap month bought more shares.'},
    {q:'Which statement about dollar-cost averaging is true?',
     o:['It guarantees a profit if you keep going long enough','It always beats investing a lump sum','It only works when prices rise',"It brings your average cost below the average price, but can't stop losses if prices keep falling"], a:3,
     e:'Buying more when prices are low lowers the average cost. But if prices only fall, you still lose, and when prices rise a lump sum has tended to do better.'},
    {q:'A $10,000 portfolio targets 70% stocks and 30% bonds. Stocks fall 20% and bonds rise 5%. To get back to 70/30 by moving money, what happens?',
     o:['Move $525 from bonds into stocks','Move $525 from stocks into bonds','Move $1,400 from bonds into stocks','Nothing, it is still 70/30'], a:0,
     e:'Stocks: $7,000 × 0.80 = $5,600. Bonds: $3,000 × 1.05 = $3,150. Total $8,750. 70% of that is $6,125, so stocks need $525 more, taken from bonds.'},
    {q:'A portfolio targets 60% stocks and rebalances when it drifts more than 5 percentage points. After a rally it is worth $20,000, of which $13,200 is stocks. What does the rule do?',
     o:['Nothing: stocks are inside the threshold','Rebalance: move $1,200 from stocks to bonds','Rebalance: move $1,320 from stocks to bonds','Nothing: threshold rules only act once a year'], a:1,
     e:'$13,200 ÷ $20,000 = 66%, which is 6 points over target, so the rule triggers. 60% of $20,000 is $12,000, so $1,200 moves to bonds.'}
  ]
};

const UNIT_PORTFOLIO = {id:'portfolio', title:'Building a portfolio', level:'Beginner', lessons:[PORTFOLIO_GOALS, PORTFOLIO_ALLOCATION, PORTFOLIO_FUNDS, PORTFOLIO_DCA, PORTFOLIO_REBALANCING, PORTFOLIO_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_PORTFOLIO = [
  {n:1, q:'What is the difference between risk tolerance and risk capacity?',
   o:['They mean the same thing','Tolerance is set by law, capacity by your bank','Tolerance is how big a drop you can live with; capacity is how much you can afford to lose','Capacity is how much you can live with emotionally; tolerance is how much money you have'], a:2,
   e:'Tolerance is about nerves. Capacity is about your finances: when you need the money and what a loss would do to your plans.'},
  {n:2, q:'A $10,000 portfolio is 40% stocks and 60% bonds. Stocks fall 15% and bonds rise 5%. What is its return for the year?',
   o:['−15%','−10%','−5%','−3%'], a:3,
   e:'Stocks: $4,000 × 0.85 = $3,400. Bonds: $6,000 × 1.05 = $6,300. Total $9,700, which is −3%.'},
  {n:3, q:'You place an order for a mutual fund at 11am. What price do you usually get?',
   o:['The price at 11am',"The day's NAV, worked out after the market closes",'The lowest price of the day',"Last week's price"], a:1,
   e:'Mutual funds are priced once a day. Orders in before the cut-off all get that day\'s NAV.'},
  {n:4, q:'You invest $90 a month at prices of $9, $6 and $18. What is your average cost per share?',
   o:['$11','$6','$9','$18'], a:2,
   e:'Shares: 10 + 15 + 5 = 30. $270 ÷ 30 = $9. The average price was $11.'},
  {n:5, q:'A $10,000 portfolio is 50% stocks and 50% bonds. Stocks rise 40% and bonds stay flat. How much moves from stocks to bonds to get back to 50/50?',
   o:['$500','$1,000','$1,200','$2,000'], a:1,
   e:'Stocks: $7,000. Bonds: $5,000. Total $12,000, so each half should be $6,000. Move $1,000.'}
];

/* MATHS CHECK: every calculation and its result, for the reviewer (verified in Python).
   Lesson 1, Goals and time horizon
   - $4,000 × 0.70 = $2,800; short by $4,000 − $2,800 = $1,200; rise needed $1,200 ÷ $2,800 = 42.86% ≈ 43%.
   - Sami: 15 − 1 = 14 years left after the first year.
   - Buffer: $700 × 3 = $2,100.
   - Q2: $5,000 × 0.75 = $3,750; short $1,250.
   Lesson 2, Asset allocation (start $10,000; bad year stocks −20%, bonds +2%)
   - 90/10: $9,000 × 0.80 = $7,200 + $1,000 × 1.02 = $1,020 → $8,220 (−17.8%).
   - 60/40: $6,000 × 0.80 = $4,800 + $4,000 × 1.02 = $4,080 → $8,880 (−11.2%).
   - 30/70: $3,000 × 0.80 = $2,400 + $7,000 × 1.02 = $7,140 → $9,540 (−4.6%).
   - Good year (stocks +20%, bonds +2%): 90/10 $10,800 + $1,020 = $11,820 (+18.2%); 60/40 $7,200 + $4,080 = $11,280 (+12.8%);
     30/70 $3,600 + $7,140 = $10,740 (+7.4%).
   - Q2: $10,000 × 0.90 = $9,000; $10,000 × 1.04 = $10,400; total $19,400 (−3%). Slip: ignoring the bond gain gives $19,000.
   - 2022 fact: S&P 500 total return about −18%; Bloomberg US Aggregate bond index about −13%. Both fell more than 10%.
   Lesson 3, ETFs and mutual funds
   - NAV: $30,000,000 ÷ 1,500,000 = $20.
   - Fees on $10,000: 0.03% = $3; 0.20% = $20; 0.75% = $75; $75 − $3 = $72.
   - Tracking: 10.00% of $10,000 = $1,000; 9.95% = $995; gap $5; 0.05% fee on $10,000 = $5.
   - Q2: 0.40% → $40; 0.10% → $10; difference $30.
   - Q4: 6.00% → $600; 5.80% → $580; gap $20.
   Lesson 4, Dollar-cost averaging ($100 a month)
   - Prices $10, $8, $5, $8, $10 → shares 10, 12.5, 20, 12.5, 10 = 65. Invested $500. Average cost $500 ÷ 65 = $7.6923 ≈ $7.69.
     Average price ($10 + $8 + $5 + $8 + $10) ÷ 5 = $41 ÷ 5 = $8.20. End value 65 × $10 = $650. Lump sum: $500 ÷ $10 = 50 shares → $500.
   - March vs January: 20 ÷ 10 = 2 (twice as many).
   - Diagram: 4px per share, baseline y=124. Heights 40, 50, 80, 50, 40 → tops 84, 74, 44, 74, 84. Labels 6px above each top.
   - Falling $10, $9, $8, $7, $6: shares 10 + 11.111 + 12.5 + 14.286 + 16.667 = 64.563; × $6 = $387.38 ≈ $387; loss $112.62 ≈ $113.
     Lump sum 50 × $6 = $300.
   - Rising $10, $11, $12, $13, $14: shares 10 + 9.091 + 8.333 + 7.692 + 7.143 = 42.259; × $14 = $591.63 ≈ $592. Lump sum 50 × $14 = $700.
   - Q2: $60 at $6, $4, $3 → 10 + 15 + 20 = 45 shares; $180 ÷ 45 = $4.00; average price $13 ÷ 3 = $4.33.
   - Q5: with every price higher than the first, a lump sum at the start buys the most shares (e.g. 12 months at $100…$111: $1,332 vs $1,263.91).
   - Average cost ≤ average price always holds for fixed amounts (harmonic mean ≤ arithmetic mean).
   Lesson 5, Rebalancing
   - $6,000 × 1.30 = $7,800; bonds $4,000; total $11,800. Weights 66.10% / 33.90% → 66/34.
   - Target 60%: $11,800 × 0.6 = $7,080; bonds $4,720. Move $7,800 − $7,080 = $720.
   - New money: $7,800 ÷ 0.6 = $13,000; bonds $13,000 − $7,800 = $5,200; add $5,200 − $4,000 = $1,200.
   - Drift 66.10 − 60 = 6.1 points > 5.
   - Q2: $12,000 ÷ $22,000 = 54.55% ≈ 54.5%; bonds 45.45%.
   - Q4: $9,000 ÷ 0.6 = $15,000; bonds $6,000; add $1,000. Slip: 40% of $14,000 − $5,000 = $600.
   Unit check
   - Q2: $12,000 × 0.75 = $9,000; $3,000 × 1.03 = $3,090; $12,090 ÷ $15,000 = 0.806 → −19.4%. Slips: 0.8 × −25% = −20%; (−25 + 3) ÷ 2 = −11%.
   - Q4: $1,000 − $980 = $20; 0.20% × $10,000 = $20.
   - Q5: $120 at $12, $6, $8 → 10 + 20 + 15 = 45 shares; $360 ÷ 45 = $8.00; average price $26 ÷ 3 = $8.67.
   - Q7: $7,000 × 0.80 = $5,600; $3,000 × 1.05 = $3,150; total $8,750; 70% = $6,125; move $525 into stocks; bonds $2,625 = 30%.
     Slip: $7,000 × 0.20 = $1,400.
   - Q8: $13,200 ÷ $20,000 = 66% → 6 points over; 60% × $20,000 = $12,000; move $1,200. Slip: 10% × $13,200 = $1,320.
   Placement
   - n2: $4,000 × 0.85 = $3,400; $6,000 × 1.05 = $6,300; $9,700 → −3%.
   - n4: $90 at $9, $6, $18 → 10 + 15 + 5 = 30 shares; $270 ÷ 30 = $9; average price $33 ÷ 3 = $11.
   - n5: $5,000 × 1.40 = $7,000; bonds $5,000; total $12,000; half $6,000; move $1,000. */
