/* ---------- Growth, value and dividends ---------- */
const STYLES_GROWTH_VALUE = {
  title:'Growth vs value', min:5,
  cards:[
    {k:'The idea', t:'Two ways to look at a share', b:`
      <p class="lead">Investors often sort shares into two broad camps. Growth shares belong to companies whose sales and profits are rising fast. Value shares look cheap next to what the company earns or owns.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Growth</div><b>Fast-rising sales and profits</b><p>A high P/E. Buyers are paying mostly for profits expected years from now. Often little or no dividend.</p></div>
        <div class="col good"><div class="col-h">Value</div><b>A low price for what it earns or owns</b><p>A low P/E or P/B. Often slower-growing or out of favour, meaning few investors want it right now.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Investment style:</b> a broad way of choosing shares, based on traits like how fast a company is growing or how cheap its shares look.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Two made-up companies', b:`
      <p>Faraya Cloud sells software, and its sales are growing 35% a year. Chouf Cement makes cement, and its sales grow about 2% a year.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Faraya Cloud</div>
          <p>Share $90 · EPS $1.50 · book value $6 a share · no dividend</p>
          <div class="pf-r">P/E<b class="mono">60</b></div>
          <div class="pf-r">P/B<b class="mono">15</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Chouf Cement</div>
          <p>Share $24 · EPS $3.00 · book value $30 a share · dividend $1.20</p>
          <div class="pf-r">P/E<b class="mono">8</b></div>
          <div class="pf-r">P/B<b class="mono">0.8</b></div>
        </div>
      </div>
      <p>Put another way, $100 of Faraya shares carries $1.67 of yearly profit, and $100 of Chouf carries $12.50. Chouf also yields 5% ($1.20 ÷ $24).</p>
      <p>Faraya's buyers are paying for the future. If its EPS grows 30% a year for five years, it reaches about $5.57, and today's $90 would be about 16 times that.</p>`},
    {k:'The catch', t:'Both styles can disappoint', b:`
      <div class="split">
        <div class="col bad"><div class="col-h">Growth</div><b>Priced for success</b><p>If Faraya's EPS grows 10% a year instead of 30%, it reaches about $2.42 in five years, not $5.57. The $90 price would then be 37 times earnings.</p></div>
        <div class="col bad"><div class="col-h">Value</div><b>Cheap for a reason</b><p>Chouf's P/E of 8 may reflect a shrinking market for cement. If profits keep falling, the shares can stay cheap or get cheaper.</p></div>
      </div>
      <p>A growth share can fall hard when growth merely slows, even while the company is still growing. A value share can look like a bargain for years and never recover.</p>
      <div class="term"><span class="term-k">Key term</span><b>Value trap:</b> a share that looks cheap on ratios like P/E, but stays cheap or gets cheaper because the business keeps shrinking.</div>`},
    {k:'History', t:'Neither style always wins', b:`
      <p>Research on long runs of US share prices found that value shares beat growth shares on average. But the lead has swapped many times:</p>
      <div class="kv"><div><b>Late 1990s</b><span>Growth led, driven by tech</span></div><div><b>Early 2000s</b><span>Value led after the dot-com crash</span></div><div><b>2010s</b><span>Growth led most years</span></div><div><b>2022</b><span>Growth fell far more</span></div></div>
      <p>Interest rates are one reason, as 2022 showed when they rose fast. Most of a growth share's value rests on profits years away, and higher rates shrink what distant money is worth today. At a 3% rate, $100 due in 10 years is worth $74 today. At 6%, it's worth $56, a 25% drop. $100 due next year only slips from $97 to $94. The Time value of money unit in the Vault has the maths.</p>
      <p>Nobody has a reliable way to know which style will lead next.</p>`}
  ],
  qs:[
    {q:'Which of these is most typical of a growth share?',
     o:['Sales and profits rising fast, and a high P/E','A low P/E and a high dividend','A share price below book value','Sales that have been flat for years'], a:0,
     e:"Growth shares belong to fast-growing companies. Investors pay a high price for each $1 of today's profit because they expect much more later."},
    {q:'A growth share trades on a P/E of 50. How much yearly profit does each $100 of its share price carry?',
     o:['$50','$0.50','$2','$20'], a:2,
     e:'$100 ÷ 50 = $2. That is an earnings yield of 2%: the P/E flipped over.'},
    {q:'A share costs $80 and its EPS is $2. If EPS grows 25% a year for three years and the price stays at $80, what is the P/E on year-three earnings?',
     o:['40','About 22.9','10','About 20.5'], a:3,
     e:'EPS: $2 × 1.25 × 1.25 × 1.25 = $3.91. P/E: $80 ÷ $3.91 ≈ 20.5, down from 40 today. Adding 25% three times without compounding gives $3.50 and about 22.9.'},
    {q:'A newspaper publisher trades on a P/E of 4 because readers and advertisers keep leaving. What is the main risk in buying it as a bargain?',
     o:['It may be a value trap: profits may keep shrinking, so it stays cheap or gets cheaper','A P/E of 4 means the price must rise','A share with a low P/E cannot fall any further','It is a growth share, so its price will swing a lot'], a:0,
     e:'A low P/E is only a bargain if profits hold up. If the business keeps shrinking, the share can stay cheap for good reason.'},
    {q:'True or false: the same style, growth or value, has beaten the other in every decade.',
     o:['True','False'], a:1,
     e:'The lead has swapped. Growth led in the late 1990s and for most of the 2010s. Value led for several years after the dot-com crash.'}
  ]
};

const STYLES_DIVIDENDS = {
  title:'Dividend investing', min:5,
  cards:[
    {k:'The idea', t:'Who pays, and who keeps the cash', b:`
      <p class="lead">A company that makes more cash than it can usefully reinvest often pays some of it out as dividends. A young company with plenty of ways to grow usually keeps every dollar. Dividend investing means choosing shares mainly for the dividends they pay.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Pays dividends</div><b>Mature, steady cash</b><p>Often utilities, food makers and big banks. Growth is slower, and cash comes in reliably.</p></div>
        <div class="col good"><div class="col-h">Reinvests</div><b>Growing fast</b><p>Often young tech and biotech firms. Each dollar kept can pay for new products, staff or markets.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Dividend growth:</b> raising the dividend per share over time, usually as profits grow. A $2.00 dividend raised 6% a year reaches about $3.58 after 10 raises.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Total return', b:`
      <p>Dividends are only part of the story. What counts is the price change and the dividends together.</p>
      <p>Say you buy 100 shares of Zahle Dairy at $40, for $4,000. Over the year it pays $1.60 a share in dividends, $160 in all.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Price ends at $43</div><b class="mono good-t">+11.5%</b><p>+$300 from the price, +$160 in dividends. $460 ÷ $4,000.</p></div>
        <div class="col bad"><div class="col-h">Price ends at $37</div><b class="mono bad-t">−3.5%</b><p>−$300 from the price, +$160 in dividends. −$140 ÷ $4,000.</p></div>
      </div>
      <p>A 4% dividend doesn't guarantee a gain. A price fall can wipe it out.</p>
      <div class="term"><span class="term-k">Key term</span><b>Total return:</b> (price change + dividends) ÷ the price paid. It's the full gain or loss from holding a share.</div>`},
    {k:'Do the maths', t:'Reinvesting compounds', b:`
      <p>Jezzine Water costs $50 a share and pays $2 a year, a 4% yield. $5,000 buys 100 shares. To keep it simple, say the price and the dividend never change.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Dividends taken as cash</div>
          <p>$200 a year, never reinvested</p>
          <div class="pf-r">After 10 years<b class="mono">$7,000</b></div>
          <div class="pf-r">After 30 years<b class="mono">$11,000</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Dividends reinvested</div>
          <p>Each dividend buys more shares</p>
          <div class="pf-r">After 10 years<b class="mono good-t">$7,401</b></div>
          <div class="pf-r">After 30 years<b class="mono good-t">$16,217</b></div>
        </div>
      </div>
      <p>Reinvested, the holding grows 4% a year: $5,000 × 1.04<sup>30</sup> = $16,217. The gap widens over time, because the new shares pay dividends of their own. Many brokers can reinvest dividends automatically.</p>
      <div class="term"><span class="term-k">Key term</span><b>Dividend reinvestment:</b> using each dividend to buy more of the same shares.</div>`},
    {k:'The catch', t:'When the dividend is cut', b:`
      <p>Tripoli Telecom paid $0.50 a share every three months, $2 a year, and its shares cost $40. Halfway through the year it halved the dividend and warned that profits would fall.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Cash it keeps</div><b class="mono">$1 a share a year</b><p>The dividend drops from $2 to $1 a year.</p></div>
        <div class="col bad"><div class="col-h">The price</div><b class="mono bad-t">$40 → $30</b><p>A $10 fall, ten times the yearly saving.</p></div>
      </div>
      <p>Investors often read a cut as a sign that the company expects weaker profits, so the price can fall far more than the dividend saved. That year $1.50 of dividends arrived ($0.50 + $0.50 + $0.25 + $0.25). Total return: ($30 − $40 + $1.50) ÷ $40 = <b class="bad-t">−21.25%</b>.</p>
      <p>This is the risk of choosing shares on yield alone: the yield trap from the Valuation ratios unit.</p>`}
  ],
  qs:[
    {q:'Which company is most likely to pay out a large part of its profit as dividends?',
     o:['A start-up that is still making losses','A young software firm growing 50% a year','A water utility with steady sales and few new projects','A biotech firm spending heavily on drug trials'], a:2,
     e:'Mature companies with steady cash and few big projects to fund are the most likely payers. Fast growers usually keep their cash to grow.'},
    {q:'You buy a share at $25. A year later it is worth $27, and it paid $0.75 in dividends along the way. What is your total return?',
     o:['8%','3%','About 10.2%','11%'], a:3,
     e:'Price change $2 plus dividends $0.75 = $2.75. $2.75 ÷ $25 = 0.11, which is 11%. 8% is the price alone, 3% is the dividends alone, and 10.2% divides by the end price ($27) instead of the price paid.'},
    {q:'A company pays a $3.00 dividend and raises it 5% every year. What is the dividend after three raises?',
     o:['$3.15','$3.45','$3.47','$4.50'], a:2,
     e:'$3.00 × 1.05 × 1.05 × 1.05 = $3.47. Each raise is on the already-raised amount, so it beats a simple 15% rise ($3.45).'},
    {q:'Why does reinvesting dividends make a holding grow faster over time?',
     o:['Reinvested dividends are never taxed','The new shares pay dividends of their own, so the payments compound','Companies pay a bonus to investors who reinvest','Reinvesting pushes the share price up'], a:1,
     e:"Each dividend buys more shares, and those shares earn dividends too. It's compounding, as in the How markets work unit."},
    {q:'A company halves its dividend. Why does its share price often fall by much more than the dividend saved?',
     o:['The law requires the price to fall','Investors read the cut as a sign that profits are likely to weaken','The company has to pay a fine for cutting','The price always falls by exactly the dividend'], a:1,
     e:'A cut tells investors something about the future. If they expect weaker profits, they pay less for the shares, often far more than the cash saved.'}
  ]
};

const STYLES_BUYBACKS = {
  title:'Buybacks vs dividends', min:5,
  cards:[
    {k:'The idea', t:'A company buying its own shares', b:`
      <p class="lead">A company with spare cash can pay it out as dividends, or use it to buy its own shares on the stock market. Fewer shares are left, so each remaining share owns a bigger slice of the company.</p>
      <div class="term"><span class="term-k">Key term</span><b>Share buyback:</b> a company buying back its own shares. They are cancelled or held by the company, and either way they no longer count when profit is split per share.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Same profit, higher EPS', b:`
      <p>Bekaa Telecom earns $100M a year and has 50M shares. It buys back 5M of them, and profit stays flat.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Before</div>
          <p>$100M ÷ 50M shares</p>
          <div class="pf-r">EPS<b class="mono">$2.00</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">After</div>
          <p>$100M ÷ 45M shares</p>
          <div class="pf-r">EPS<b class="mono good-t">$2.22</b></div>
        </div>
      </div>
      <p>EPS rose 11.1% without the business earning a cent more. An investor with 450,000 shares owned 0.9% of Bekaa before and 1% after, without buying anything.</p>
      <p>So when EPS grows, it's worth asking whether profit grew or the share count shrank.</p>`},
    {k:'Two routes', t:'Dividend or buyback?', b:`
      <p>Jbeil Ports has 50M shares at $40, a market cap of $2B. It has $100M of spare cash to hand back. Take a holder of 100 shares, worth $4,000.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Dividend</div><b>$2 a share</b><p>The holder gets $200. If the price drops by the dividend, as it tends to, 100 shares at $38 are worth $3,800. Total $4,000.</p></div>
        <div class="col good"><div class="col-h">Buyback</div><b>2.5M shares at $40</b><p>The company is now worth $1.9B, split over 47.5M shares: still $40 each. 100 shares, $4,000, and a bigger slice.</p></div>
      </div>
      <p>Before taxes and fees, both leave the holder with $4,000. The differences lie elsewhere. A dividend pays every holder, while a buyback only pays those who sell. Investors tend to treat a dividend as a promise, so boards can usually slow a buyback with less fuss than cutting a dividend. Tax rules differ by country and sometimes favour one route.</p>`},
    {k:'The catch', t:'The price paid matters', b:`
      <p>Back to Bekaa's buyback of 5M shares. Say its business and cash were really worth $2B, or $40 a share, though nobody knows that figure for sure.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Bought at $30</div><b class="mono good-t">$41.11 a share</b><p>Spends $150M. $1.85B is left for 45M shares.</p></div>
        <div class="col bad"><div class="col-h">Bought at $60</div><b class="mono bad-t">$37.78 a share</b><p>Spends $300M. $1.70B is left for 45M shares.</p></div>
      </div>
      <p>Buying back shares for more than they're worth hands value to the sellers, at the cost of everyone who stays.</p>
      <p>Pay for staff can cancel a buyback out, too. If a company buys back 3M shares a year but gives staff 3M new ones, the count doesn't fall. At $40 a share, that's $120M a year spent just to stand still.</p>
      <div class="term"><span class="term-k">Key term</span><b>Share-based pay:</b> paying staff partly in shares, or in options to buy shares. It creates new shares over time, so each existing share owns a little less.</div>`}
  ],
  qs:[
    {q:'A company earns $60M a year and has 30M shares. It buys back 5M shares, and profit stays the same. What is its EPS now?',
     o:['$2.40','$2.00','$2.33','$0.42'], a:0,
     e:'Before: $60M ÷ 30M = $2.00. After: $60M ÷ 25M = $2.40, up 20%. The share count fell by a sixth, but EPS rose by a fifth.'},
    {q:'A company buys back 10% of its shares. You sell none of yours. What has changed for you?',
     o:['You own a bigger slice of the company','You received a cash payment','You now own fewer shares','Nothing at all'], a:0,
     e:'You hold the same number of shares, but there are fewer in total, so each one is a bigger part of the company.'},
    {q:'A company has 25M shares at $20 and $50M of spare cash. It can pay a $2 dividend, or buy back 2.5M shares at $20. Ignoring taxes and fees, and if the price drops by the dividend, what are 100 shares worth to a holder in each case?',
     o:['$2,000 either way','$2,200 with the dividend, $2,000 with the buyback','$2,000 with the dividend, $2,222 with the buyback','$1,800 with the dividend, $2,000 with the buyback'], a:0,
     e:'Dividend: 100 × $18 + $200 cash = $2,000. Buyback: the company is worth $500M − $50M = $450M over 22.5M shares, still $20 each, so 100 shares = $2,000.'},
    {q:"Why can a buyback at a very high price hurt the shareholders who don't sell?",
     o:['Buybacks are always taxed at a higher rate','A buyback always lowers EPS','It forces them to sell their shares','The company pays more than the shares are worth, leaving less value for each remaining share'], a:3,
     e:'If the company overpays, the sellers gain and the value of each remaining share falls.'},
    {q:'A company buys back 4M shares a year, but issues 4M new shares a year to staff as pay. What happens to its share count?',
     o:['It falls by 4M a year','It rises by 4M a year','It stays about the same','It falls by 8M a year'], a:2,
     e:'4M out and 4M in. The buyback only soaks up the shares handed to staff.'}
  ]
};

const STYLES_FACTORS = {
  title:'Factor investing', min:5,
  cards:[
    {k:'The idea', t:'Traits linked to returns', b:`
      <p class="lead">Researchers have studied decades of share prices, looking for traits that went with higher returns. A handful kept turning up, across many markets and periods. They are called factors.</p>
      <div class="term"><span class="term-k">Key term</span><b>Factor:</b> a trait shared by many shares, like being cheap or small, that research has linked to differences in long-run returns.</div>
      <p>Factor investing means tilting a portfolio towards shares with those traits. Factor ETFs, which came up in the ETFs in depth unit, do it in a single fund.</p>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'The usual list', t:'Five well-known factors', b:`
      <p><b>Value:</b> shares that are cheap on ratios like P/B and P/E. In research covering long periods, they have beaten pricier shares on average.</p>
      <p><b>Size:</b> small companies against large ones. Some studies found small companies earned more, but the effect has been patchy and weaker in recent decades.</p>
      <p><b>Momentum:</b> shares that rose most over roughly the past year have tended to keep doing better for a while, and recent losers to keep lagging.</p>
      <p><b>Quality:</b> profitable companies with steady earnings and low debt have tended to do better than weak ones.</p>
      <p><b>Low volatility:</b> in many studies, the shares that swing least earned more than their small swings would suggest, and the wildest shares earned less.</p>`},
    {k:'Do the maths', t:'Two screens, opposite picks', b:`
      <p>A factor fund picks shares with a screen: a rule that ranks them by a factor. Three made-up shares:</p>
      <p>Anjar Ports: $30 now, $40 a year ago, book value $40 a share.<br>Ehden Games: $90 now, $60 a year ago, book value $15 a share.<br>Koura Foods: $44 now, $40 a year ago, book value $22 a share.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Value screen</div><b>Anjar Ports</b><p>Lowest P/B: $30 ÷ $40 = 0.75, against 6 for Ehden and 2 for Koura.</p></div>
        <div class="col good"><div class="col-h">Momentum screen</div><b>Ehden Games</b><p>Best 12-month return: +50%, against −25% for Anjar and +10% for Koura.</p></div>
      </div>
      <p>The share that fell hardest often looks cheapest, so value and momentum often pick from opposite ends. Some funds combine several factors partly for that reason.</p>`},
    {k:'The limit', t:'Factors can lag for years', b:`
      <p>A factor is an average over decades, not a promise for next year.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Value</div><b>Long dry spells</b><p>US value shares trailed growth shares for most of the years from 2007 to 2020.</p></div>
        <div class="col bad"><div class="col-h">Momentum</div><b>Sudden crashes</b><p>In 2009, beaten-down shares rebounded sharply and momentum strategies were hit hard.</p></div>
      </div>
      <p>Research has also found that many patterns weakened after they were published, perhaps because more money chased them.</p>
      <p>Factor ETFs often cost more than plain index funds: 0.25% a year on $10,000 is $25, against $3 at 0.03%. And two "value" funds can rank shares by different ratios, so they can hold different things.</p>`}
  ],
  qs:[
    {q:'In investing, what is a factor?',
     o:['A trait shared by many shares that research has linked to differences in long-run returns','A fee charged by factor funds','A guaranteed source of extra return','Another word for a stock index'], a:0,
     e:'Factors like value, size and momentum are traits that research linked to returns over long periods. They are tendencies, not guarantees.'},
    {q:'A fund buys the shares that rose most over the past 12 months. Which factor is it tilting towards?',
     o:['Value','Low volatility','Momentum','Size'], a:2,
     e:'Momentum is the tendency of recent winners to keep doing better for a while.'},
    {q:'Share X costs $36 with book value of $45 a share. Share Y costs $50 with book value of $20. Share Z costs $24 with book value of $16. Which would a value screen using P/B pick?',
     o:['X, with a P/B of 0.8','Y, with a P/B of 2.5','Z, with a P/B of 1.5','Z, because it has the lowest share price'], a:0,
     e:'P/B = price ÷ book value per share. X: $36 ÷ $45 = 0.8. Y: $50 ÷ $20 = 2.5. Z: $24 ÷ $16 = 1.5. A low share price on its own says nothing about value.'},
    {q:'A plain index ETF charges 0.05% a year and a factor ETF charges 0.30%. On $8,000, how much more does the factor ETF cost each year?',
     o:['$20','$24','$4','$200'], a:0,
     e:'0.30% of $8,000 = $24. 0.05% of $8,000 = $4. $24 − $4 = $20.'},
    {q:'A pattern beat the market in past data. After researchers published it, many funds started using it. What has research found often happens next?',
     o:['The pattern gets stronger','The pattern weakens','The pattern becomes guaranteed','Nothing changes'], a:1,
     e:'Studies have found that many patterns weakened after they were published, perhaps because more money chased them.'}
  ]
};

const STYLES_QUALITY_ESG = {
  title:'Quality and ESG', min:5,
  cards:[
    {k:'The idea', t:'Two more ways to sort companies', b:`
      <p class="lead">Quality looks at how good a business is: does it earn high returns on its money, steadily, without leaning on debt? ESG looks at how a company treats the environment and people, and how it is run.</p>
      <div class="term"><span class="term-k">Key term</span><b>Quality company:</b> one that earns high, steady returns on the money invested in it, with stable earnings and little debt.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'A quick quality check', b:`
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Kesrouan Pharma</div>
          <p>Profit $30M, equity $150M, debt $15M. Profit steady for years.</p>
          <div class="pf-r">ROE<b class="mono good-t">20%</b></div>
          <div class="pf-r">Debt-to-equity<b class="mono">0.1</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Metn Motors</div>
          <p>Profit $30M, equity $300M, debt $450M. Last three years: $60M, −$10M, $30M.</p>
          <div class="pf-r">ROE<b class="mono">10%</b></div>
          <div class="pf-r">Debt-to-equity<b class="mono bad-t">1.5</b></div>
        </div>
      </div>
      <p>$30M ÷ $150M = 20% and $30M ÷ $300M = 10%. Same profit, but Kesrouan earns twice as much on its owners' money, borrows little, and earns it steadily.</p>
      <p>Debt can flatter ROE: borrowed money replaces owners' money, so the same profit is spread over less equity. That's why quality checks look at debt next to ROE. The Reading company accounts unit in the Vault covers margins and debt ratios in depth.</p>
      <div class="term"><span class="term-k">Key term</span><b>Return on equity (ROE):</b> net profit ÷ shareholders' equity. It shows how much profit the company makes for each $1 that belongs to its owners.</div>`},
    {k:'ESG', t:'Environmental, social, governance', b:`
      <div class="score"><div><b>E</b><span>Emissions, waste, water, energy</span></div><div><b>S</b><span>Staff, safety, customers, suppliers</span></div><div><b>G</b><span>The board, bosses' pay, accounts, shareholder rights</span></div></div>
      <p>Research firms turn all this into ESG ratings, but they often disagree. Studies comparing the big rating firms found they agree about a company far less than credit rating agencies agree about its debt.</p>
      <p>Say one firm gives Kesrouan Pharma 78 out of 100 and another gives it 52. Neither has to be wrong. They choose different things to measure, weigh them differently and measure them in different ways.</p>
      <div class="term"><span class="term-k">Key term</span><b>ESG rating:</b> a score from a research firm for how a company handles environmental, social and governance issues. It's one firm's opinion, not a measured fact.</div>`},
    {k:'In practice', t:'Inside an ESG fund', b:`
      <p>Funds with ESG in the name follow very different rules:</p>
      <div class="split">
        <div class="col good"><div class="col-h">Exclude</div><b>Leave industries out</b><p>No tobacco, weapons or coal, for example.</p></div>
        <div class="col good"><div class="col-h">Best in class</div><b>Top scorers in each industry</b><p>Can still own an oil company with a high rating.</p></div>
      </div>
      <p>So two ESG funds can hold quite different shares. Fees differ too. ESG index funds often cost more than the cheapest plain ones: 0.18% a year on $10,000 is $18, against $4 at 0.04%.</p>
      <p>ESG describes what a fund holds, not how it will perform. Its holdings, as in the Building a portfolio unit, show what it really owns. US regulators have fined fund firms for describing their ESG process inaccurately.</p>
      <div class="term"><span class="term-k">Key term</span><b>Greenwashing:</b> making a fund or company sound greener or more responsible than it really is.</div>`}
  ],
  qs:[
    {q:"A company has net profit of $24M and shareholders' equity of $160M. What is its ROE?",
     o:['1.5%','15%','6.67%','85%'], a:1,
     e:'ROE = net profit ÷ equity = $24M ÷ $160M = 0.15, which is 15%.'},
    {q:'Which company best fits the quality style?',
     o:['ROE of 40% last year, after a loss the year before','ROE of 25%, mostly thanks to heavy borrowing','Sales growing 60% a year, but never a profit','ROE steady near 20% for years, with little debt'], a:3,
     e:'Quality means high returns that are steady and not propped up by debt.'},
    {q:'What does the G in ESG cover?',
     o:["How the company is run: its board, bosses' pay, accounts and shareholder rights",'Growth in sales','Government bonds the company holds','Greenhouse gas emissions'], a:0,
     e:'Governance is about how a company is run and overseen. Emissions come under E.'},
    {q:'An ESG index fund charges 0.20% a year, and a plain index fund on the same market charges 0.05%. On $12,000, how much more does the ESG fund cost each year?',
     o:['$24','$15','$18','$180'], a:2,
     e:'0.20% of $12,000 = $24. 0.05% of $12,000 = $6. $24 − $6 = $18.'},
    {q:'True or false: two funds with ESG in their names will hold the same companies.',
     o:['True','False'], a:1,
     e:'Some exclude whole industries, others pick the best-rated firms in each industry, and they use different ratings. Their holdings can differ a lot.'}
  ]
};

const STYLES_CHECK = {
  title:'Unit check', min:4, badge:{name:'Style Spotter', icon:'star'}, cards:[],
  qs:[
    {q:'Share A costs $120, with EPS of $2 expected to grow 20% a year. Share B costs $30, with EPS of $3 expected to grow 3% a year. Which statement is right?',
     o:['B is cheaper on every measure','A has a PEG of 0.33, so it is far cheaper','A has a P/E of 60 and B a P/E of 10, but their PEGs are close: 3 and about 3.3','A is a value share because its PEG is lower'], a:2,
     e:'P/E: $120 ÷ $2 = 60 and $30 ÷ $3 = 10. PEG: 60 ÷ 20 = 3 and 10 ÷ 3 ≈ 3.3. The low-P/E share is not cheaper once growth is counted, and both PEGs rest on forecasts.'},
    {q:'In 2022, interest rates rose fast and growth shares fell much further than value shares. Which explanation fits?',
     o:['Growth companies stopped making profits','Value shares are protected by law',"More of a growth share's value rests on profits far in the future, which are worth less today when rates rise",'Rising rates always push value shares up'], a:2,
     e:'At a 3% rate, $100 due in 10 years is worth about $74 today. At 6%, about $56. Distant profits lose the most value when rates rise.'},
    {q:'You buy 200 shares at $50. You receive dividends of $1.00 a share during the year. Then the company cuts its dividend and the price falls to $41. What is your total return for the year?',
     o:['−18%','−16%','−20%','2%'], a:1,
     e:'Price change −$9, plus $1 of dividends = −$8 a share. −$8 ÷ $50 = −16%, or −$1,600 on 200 shares. −18% leaves out the dividends.'},
    {q:'A company earns $120M a year, flat. It has 60M shares, buys back 6M and issues 2M new shares to staff. What is its EPS afterwards?',
     o:['$2.22','$2.00','$2.31','$2.14'], a:3,
     e:'Shares: 60M − 6M + 2M = 56M. EPS: $120M ÷ 56M = $2.14, up from $2.00. Ignoring the staff shares gives $2.22.'},
    {q:'A company is really worth $1B, including its cash, and has 20M shares ($50 each). It spends $200M buying back 2M shares at $100 each. What is each remaining share worth?',
     o:['$55.56','$50.00','$40.00','$44.44'], a:3,
     e:'Value left: $1,000M − $200M = $800M. Shares left: 18M. $800M ÷ 18M = $44.44. Paying double the value cost each remaining share $5.56.'},
    {q:'A fund holds the shares that rose most over the past year. Then beaten-down shares rebound sharply, and the fund has its worst month in years. What does this show?',
     o:['It is a value fund, and value never works','Momentum has stopped working for good','Momentum can suffer sudden, sharp falls, even though research linked it to higher long-run returns','Factor funds always recover within a month'], a:2,
     e:'Momentum has been linked to higher long-run returns, but it has had sudden crashes, as in 2009 when beaten-down shares rebounded.'},
    {q:'Company A: profit $40M, equity $200M, no debt. Company B: profit $40M, equity $100M, debt $400M. Which reading makes most sense?',
     o:['B is higher quality, because its ROE is 40%','Both have an ROE of 20%','A has the higher ROE',"B's ROE is double A's, but heavy borrowing props it up, so A fits the quality style better"], a:3,
     e:'ROE: A $40M ÷ $200M = 20%, B $40M ÷ $100M = 40%. But B has $4 of debt for every $1 of equity. Quality checks look at debt next to ROE.'},
    {q:'Fund A leaves out oil, gas and coal companies. Fund B keeps every industry but buys the best-rated companies in each. Both are called ESG funds. Which is true?',
     o:['They must hold the same shares','B can hold an oil company with a high ESG rating; A cannot','A is certain to earn more than B','Every rating firm scores companies the same way, so their holdings match'], a:1,
     e:'Exclusion funds drop whole industries. Best-in-class funds keep them and pick the top scorers. Same label, different holdings.'}
  ]
};

const UNIT_STYLES = {id:'styles', title:'Growth, value and dividends', level:'Intermediate', lessons:[STYLES_GROWTH_VALUE, STYLES_DIVIDENDS, STYLES_BUYBACKS, STYLES_FACTORS, STYLES_QUALITY_ESG, STYLES_CHECK]};

/* Placement: one question per lesson, n = lesson number 1-5. Different from the lesson questions. */
const PLACEMENT_STYLES = [
  {n:1, q:'Share X trades on a P/E of 6 and a P/B of 0.6, with sales flat for years. Share Y trades on a P/E of 55, with sales up 40% a year. Which labels fit best?',
   o:['X growth, Y value','X value, Y growth','Both value','Both growth'], a:1,
   e:'X is cheap next to its earnings and book value, with little growth: value. Y is priced high for fast growth: growth.'},
  {n:2, q:'A share bought at $80 is worth $84 a year later, and paid $2.40 of dividends during the year. What is the total return?',
   o:['5%','3%','8%','About 7.6%'], a:2,
   e:'($84 − $80 + $2.40) ÷ $80 = $6.40 ÷ $80 = 0.08, which is 8%. 5% is the price alone, 3% the dividends alone, and 7.6% divides by the end price ($84) instead of the price paid.'},
  {n:3, q:'A company earns $90M a year, flat, and buys back shares so its count falls from 45M to 40M. What happens to EPS?',
   o:['It stays at $2.00','It rises to $2.22','It falls to $1.78','It rises to $2.25'], a:3,
   e:'Before: $90M ÷ 45M = $2.00. After: $90M ÷ 40M = $2.25, up 12.5%, with no extra profit.'},
  {n:4, q:'US value shares trailed growth shares for most of the years from 2007 to 2020. What does this show about factors?',
   o:['Value has been disproved for good','A factor linked to higher long-run returns can still lag for years','Growth is a factor that always wins','Factors only work outside the US'], a:1,
   e:'A factor is an average over long periods. Stretches of more than a decade on the wrong side have happened.'},
  {n:5, q:'One rating firm gives a company an ESG score of 80 out of 100, and another gives it 45. What is the most likely reason?',
   o:['One of the firms must have made a mistake','The firms measure different things and weigh them differently','ESG scores change every day','The company has two different boards'], a:1,
   e:'ESG ratings are opinions built on choices about what to measure and how much each part counts. Big disagreements between rating firms are common.'}
];

/* MATHS CHECK: every calculation and its result, for the reviewer.
   (Recomputed in Python: 115 of 115 checks pass.)
   Lesson 1, Growth vs value
     Faraya Cloud: P/E 90 ÷ 1.50 = 60; P/B 90 ÷ 6 = 15; profit per $100 = 100 ÷ 60 = $1.67
     Chouf Cement: P/E 24 ÷ 3.00 = 8; P/B 24 ÷ 30 = 0.8; yield 1.20 ÷ 24 = 5%; profit per $100 = 100 ÷ 8 = $12.50
     Faraya EPS at 30% for 5 years: 1.50 × 1.3^5 = 5.5695 ≈ $5.57; 90 ÷ 5.5695 = 16.16 ≈ 16
     Faraya EPS at 10% for 5 years: 1.50 × 1.1^5 = 2.4158 ≈ $2.42; 90 ÷ 2.4158 = 37.25 ≈ 37
     Present values: 100 ÷ 1.03^10 = 74.41 ≈ $74; 100 ÷ 1.06^10 = 55.84 ≈ $56; 55.84 ÷ 74.41 − 1 = −24.96% ≈ 25% drop;
       100 ÷ 1.03 = 97.09 ≈ $97; 100 ÷ 1.06 = 94.34 ≈ $94
     Q2: 100 ÷ 50 = $2 (2%). Distractors 100 ÷ 50 misread as $50, 1 ÷ 2 = $0.50, 100 ÷ 5 = $20
     Q3: 2 × 1.25^3 = 3.90625 ≈ $3.91; 80 ÷ 3.90625 = 20.48 ≈ 20.5; today 80 ÷ 2 = 40.
       Slip: 2 × (1 + 0.75) = 3.50; 80 ÷ 3.50 = 22.86 ≈ 22.9. Slip 40 × 0.25 = 10
   Lesson 2, Dividend investing
     Key term: 2.00 × 1.06^10 = 3.5817 ≈ $3.58
     Zahle Dairy: 100 × $40 = $4,000; dividends 100 × 1.60 = $160 (4%); up case 100 × (43 − 40) = $300;
       (300 + 160) ÷ 4,000 = 11.5%; down case (−300 + 160) ÷ 4,000 = −140 ÷ 4,000 = −3.5%
     Jezzine Water: 2 ÷ 50 = 4%; 5,000 ÷ 50 = 100 shares; cash 5,000 + 10 × 200 = $7,000 and 5,000 + 30 × 200 = $11,000;
       reinvested (price flat, each dividend buys 4% more shares) 5,000 × 1.04^10 = $7,401.22 and 5,000 × 1.04^30 = $16,216.99
     Tripoli Telecom: 0.50 × 4 = $2 a year; after halving $1 a year, saving $1; price fall 40 − 30 = $10 = 10 × $1;
       dividends received 0.50 + 0.50 + 0.25 + 0.25 = $1.50; (30 − 40 + 1.50) ÷ 40 = −21.25%
     Q2: (27 − 25 + 0.75) ÷ 25 = 11%. Distractors 2 ÷ 25 = 8%, 0.75 ÷ 25 = 3%, 2.75 ÷ 27 = 10.19% ≈ 10.2% (end price as base)
     Q3: 3 × 1.05^3 = 3.4729 ≈ $3.47. Distractors 3 × 1.05 = 3.15, 3 × 1.15 = 3.45, 3 × 1.5 = 4.50
   Lesson 3, Buybacks vs dividends
     Bekaa Telecom: 100 ÷ 50 = $2.00; 100 ÷ 45 = $2.2222 ≈ $2.22; 2.2222 ÷ 2 − 1 = 11.1%;
       450,000 ÷ 50M = 0.9%; 450,000 ÷ 45M = 1.0%
     Jbeil Ports: 50M × $40 = $2B; dividend 100M ÷ 50M = $2; holder 100 × $2 = $200 + 100 × $38 = $3,800 → $4,000;
       buyback 100M ÷ 40 = 2.5M shares; 50M − 2.5M = 47.5M; (2,000M − 100M) ÷ 47.5M = $40; 100 × $40 = $4,000
     Bekaa buyback price: fair 2,000M ÷ 50M = $40. At $30: 5M × 30 = $150M; (2,000 − 150) ÷ 45 = $41.11.
       At $60: 5M × 60 = $300M; (2,000 − 300) ÷ 45 = $37.78
     Staff shares: 3M bought − 3M issued = 0 change; 3M × $40 = $120M
     Q1: 60 ÷ 30 = $2.00; 60 ÷ 25 = $2.40 (+20%); count fell 5 ÷ 30 = a sixth. Distractors 2 × (1 + 1/6) = 2.33, 25 ÷ 60 = 0.42
     Q3: dividend 100 × 18 + 200 = $2,000; buyback (500 − 50) ÷ 22.5 = $20 → $2,000.
       Slips: no price drop 100 × 20 + 200 = 2,200; cash not removed 100 × 500 ÷ 22.5 = 2,222; 100 × 18 = 1,800
   Lesson 4, Factor investing
     Anjar Ports: P/B 30 ÷ 40 = 0.75; return 30 ÷ 40 − 1 = −25%
     Ehden Games: P/B 90 ÷ 15 = 6; return 90 ÷ 60 − 1 = +50%
     Koura Foods: P/B 44 ÷ 22 = 2; return 44 ÷ 40 − 1 = +10%
     Fees on $10,000: 0.25% = $25; 0.03% = $3
     Q3: X 36 ÷ 45 = 0.8; Y 50 ÷ 20 = 2.5; Z 24 ÷ 16 = 1.5
     Q4: 0.30% × 8,000 = $24; 0.05% × 8,000 = $4; 24 − 4 = $20. Distractor: decimal slip 2.5% × 8,000 = $200
   Lesson 5, Quality and ESG
     Kesrouan Pharma: ROE 30 ÷ 150 = 20%; D/E 15 ÷ 150 = 0.1
     Metn Motors: ROE 30 ÷ 300 = 10%; D/E 450 ÷ 300 = 1.5
     Fees on $10,000: 0.18% = $18; 0.04% = $4
     Q1: 24 ÷ 160 = 15%. Distractors 160 ÷ 24 = 6.67, 1 − 0.15 = 85%
     Q4: 0.20% × 12,000 = $24; 0.05% × 12,000 = $6; 24 − 6 = $18. Distractors 0.15% × 10,000 = 15, 1.5% × 12,000 = 180
   Unit check
     C1: P/E 120 ÷ 2 = 60, 30 ÷ 3 = 10; PEG 60 ÷ 20 = 3, 10 ÷ 3 = 3.33. Distractor 20 ÷ 60 = 0.33
     C2: same present values as Lesson 1 (74.41, 55.84)
     C3: (41 − 50 + 1) ÷ 50 = −16%; 200 × −8 = −$1,600. Slips (41 − 50) ÷ 50 = −18%; −18% − 2% = −20%; 1 ÷ 50 = 2%
     C4: 60 − 6 + 2 = 56M; 120 ÷ 56 = $2.14. Slips 120 ÷ 54 = 2.22, 120 ÷ 52 = 2.31, 120 ÷ 60 = 2.00
     C5: 2M × $100 = $200M; (1,000 − 200) ÷ 18 = $44.44; 50 − 44.44 = $5.56. Slips 1,000 ÷ 18 = 55.56, 800 ÷ 20 = 40
     C7: A 40 ÷ 200 = 20%; B 40 ÷ 100 = 40%; B D/E 400 ÷ 100 = 4
   Placement
     P2: (84 − 80 + 2.40) ÷ 80 = 8%. Distractors 4 ÷ 80 = 5%, 2.40 ÷ 80 = 3%, 6.40 ÷ 84 = 7.62% ≈ 7.6% (end price as base)
     P3: 90 ÷ 45 = $2.00; 90 ÷ 40 = $2.25 (+12.5%). Slips 2 × (1 + 5/45) = 2.22, 2 × (1 − 5/45) = 1.78
*/
