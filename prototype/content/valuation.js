/* ---------- Valuation ratios ---------- */
const VALUATION_PE_DEPTH = {
  title:'P/E in depth', min:5,
  cards:[
    {k:'The idea', t:'P/E is only the start', b:`
      <p class="lead">The Reading the market unit showed P/E as share price ÷ EPS. Professionals push further. Which year's earnings? Compared with what? And are those earnings normal?</p>
      <p>Analysts are people, often at banks or research firms, who are paid to study companies and forecast their results.</p>
      <div class="term"><span class="term-k">Key term</span><b>Consensus forecast:</b> the average of the EPS forecasts made by the analysts who follow a company. Forward P/E is usually built on it.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Trailing vs forward', b:`
      <p>Cedar Tech's shares cost $60. Over the last 12 months it earned $2.40 a share. Analysts expect $3.00 a share over the next 12 months.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Trailing P/E</div>
          <p>$60 ÷ $2.40 earned</p>
          <div class="pf-r">P/E<b class="mono">25</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Forward P/E</div>
          <p>$60 ÷ $3.00 forecast</p>
          <div class="pf-r">P/E<b class="mono">20</b></div>
        </div>
      </div>
      <p>Same price, two answers. Expected growth makes the forward P/E lower than the trailing one. An expected fall makes it higher: Litani Energy, at $40, earned $5.00 a share (trailing P/E 8), but analysts expect $2.50 (forward P/E 16).</p>
      <p>A forward P/E is only as good as the forecast behind it.</p>`},
    {k:'Flip it over', t:'Earnings yield', b:`
      <div class="term"><span class="term-k">Key term</span><b>Earnings yield:</b> EPS ÷ share price. It's the P/E flipped over and shown as a percentage: how much yearly profit each $1 of share price buys.</div>
      <div class="kv kv3"><div><b>10%</b><span>P/E of 10</span></div><div><b>5%</b><span>P/E of 20</span></div><div><b>2.5%</b><span>P/E of 40</span></div></div>
      <p>That makes it easy to hold a share up against a bond, which is a loan to a government or company that pays fixed interest. Say a government bond pays 4.5% a year. Cedar Tech's trailing P/E of 25 is an earnings yield of 1 ÷ 25 = 4%, less than the bond. Its buyers are counting on profits growing.</p>
      <p>This is only a rough sense check. Bond interest is fixed, while profits can grow, shrink or vanish, and often only part of them is paid out. Bonds carry risk too: in 2020 Lebanon stopped paying its dollar bonds.</p>`},
    {k:'The trap', t:'Cheap-looking at the top', b:`
      <p>Normal P/E levels differ by industry. Investors tend to pay more for each $1 of profit when it's expected to grow fast or is very steady, and less when it's slow-growing or hard to predict.</p>
      <p>Profits at cyclical companies swing with the economy, and that can turn P/E upside down. Here is Batroun Steel at the top of a boom, and two years later:</p>
      <div class="split">
        <div class="col bad"><div class="col-h">At the peak</div><b>P/E 5</b><p>$50 share ÷ $10 EPS. Looks cheap.</p></div>
        <div class="col bad"><div class="col-h">In the slump</div><b>P/E 15</b><p>$30 share ÷ $2 EPS. Looks pricier, after a 40% fall.</p></div>
      </div>
      <p>The P/E of 5 came from profits that were unusually high and didn't last.</p>
      <div class="term"><span class="term-k">Key term</span><b>Cyclical company:</b> one whose profits rise and fall with the economy, like steelmakers, carmakers and airlines.</div>`}
  ],
  qs:[
    {q:'A share costs $45. EPS over the last 12 months was $1.80, and analysts forecast $2.25 for the next 12 months. What are its trailing and forward P/E?',
     o:['20 and 25','25 and 20','4% and 5%','25 and 18'], a:1,
     e:'Trailing: $45 ÷ $1.80 = 25. Forward: $45 ÷ $2.25 = 20. The forward P/E is lower because earnings are expected to grow.'},
    {q:'A stock has a P/E of 25. What is its earnings yield?',
     o:['25%','2.5%','4%','0.4%'], a:2,
     e:'Earnings yield is the P/E flipped over: 1 ÷ 25 = 0.04, which is 4%.'},
    {q:"A company's trailing P/E is 15 and its forward P/E is 30, at the same share price. What are analysts expecting?",
     o:['Earnings to fall by half','Earnings to double','The share price to double','A loss next year'], a:0,
     e:"Same price, twice the P/E, so the forecast EPS is half of last year's. For example, $30 ÷ $2 = 15 and $30 ÷ $1 = 30."},
    {q:'A steelmaker trades on a P/E of 4 just after its best year ever. Why might that low P/E mislead?',
     o:['A P/E of 4 is always a bargain',"Steelmakers don't report earnings",'A low P/E means the price is about to rise',"Its profits may be at a peak that won't last"], a:3,
     e:'Cyclical profits swing with the economy. At the top of the cycle, earnings are unusually high, which makes the P/E look low.'},
    {q:'True or false: a share with an earnings yield of 6% pays its owners 6% a year in cash, just like a bond paying 6%.',
     o:['True','False'], a:1,
     e:"Earnings yield measures profit, not cash paid out. Companies often keep part of their profit, and profit can rise or fall. A bond's interest is fixed."}
  ]
};

const VALUATION_PEG = {
  title:'The PEG ratio', min:4,
  cards:[
    {k:'The idea', t:'Adding growth to P/E', b:`
      <p class="lead">A P/E of 30 looks pricey next to a P/E of 15. But if the first company's profits are growing six times as fast, it might not be. The PEG ratio puts price and growth into one number.</p>
      <div class="term"><span class="term-k">Key term</span><b>PEG ratio:</b> P/E ÷ expected yearly growth in EPS, with the growth written as a plain number. A P/E of 20 with 10% expected growth gives 20 ÷ 10 = 2.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Fast grower vs slow grower', b:`
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Jounieh Games</div>
          <p>P/E 30, EPS expected to grow 30% a year</p>
          <div class="pf-r">PEG<b class="mono">30 ÷ 30 = 1.0</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Byblos Foods</div>
          <p>P/E 15, EPS expected to grow 5% a year</p>
          <div class="pf-r">PEG<b class="mono">15 ÷ 5 = 3.0</b></div>
        </div>
      </div>
      <p>On P/E, Byblos Foods costs half as much. Per point of expected growth, Jounieh Games costs a third as much.</p>
      <p>If both forecasts came true for five years and the share prices stayed put, Jounieh's P/E on its new earnings would fall to about 8, and Byblos's to about 12.</p>`},
    {k:'Reading it', t:'A rough convention, not a law', b:`
      <p>A common rule of thumb says a PEG around 1 means a share is fairly priced for its growth. By the same rule, well below 1 looks cheap for the growth, and well above 1 looks expensive.</p>
      <p>That's a convention, not a law. Nothing in the maths makes 1 special, and what investors accept varies between markets and over time.</p>
      <div class="split">
        <div class="col good"><div class="col-h">PEG helps with</div><b>Fast vs slow growers</b><p>It puts companies growing at different speeds on one scale.</p></div>
        <div class="col bad"><div class="col-h">PEG ignores</div><b>How safe the growth is</b><p>Risk, debt, and how many years the growth can last.</p></div>
      </div>`},
    {k:'The limit', t:'Built on a guess', b:`
      <p>The growth figure is a forecast, and forecasts are often wrong. Change the forecast and the PEG changes with it.</p>
      <p>Another fast grower trades on a P/E of 24. Analysts expect its EPS to grow 24% next year, then slow down, averaging 12% a year over five years.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Next year's growth</div><b>PEG 1.0</b><p>24 ÷ 24.</p></div>
        <div class="col good"><div class="col-h">Five-year average</div><b>PEG 2.0</b><p>24 ÷ 12.</p></div>
      </div>
      <p>Different websites use different forecasts, so the same company can show different PEGs. And PEG breaks when growth is zero or negative. You can't divide by zero, and a P/E of 12 with earnings shrinking 4% a year gives 12 ÷ −4 = −3, which means nothing.</p>`}
  ],
  qs:[
    {q:'A company has a P/E of 24, and its EPS is expected to grow 12% a year. What is its PEG ratio?',
     o:['0.5','288','2','12'], a:2,
     e:'PEG = P/E ÷ growth = 24 ÷ 12 = 2.'},
    {q:'Company A has a P/E of 40 and expected growth of 20% a year. Company B has a P/E of 18 and expected growth of 18%. Which has the lower PEG?',
     o:['A, because its growth is higher','A, with a PEG of 0.5','They have the same PEG',"B, with a PEG of 1 against A's 2"], a:3,
     e:'A: 40 ÷ 20 = 2. B: 18 ÷ 18 = 1.'},
    {q:'A company has a P/E of 14, and its earnings are forecast to shrink 7% a year. What does its PEG tell you?',
     o:['It is very cheap, with a PEG of −2','Nothing useful: PEG only works when earnings are growing','It is fairly priced, with a PEG of 2','It is expensive, with a PEG of 98'], a:1,
     e:'14 ÷ −7 = −2, but a negative PEG has no sensible meaning. PEG only works when earnings are expected to grow.'},
    {q:'True or false: a PEG of 0.7 means the share price will rise.',
     o:['True','False'], a:1,
     e:'PEG is a rough guide built on a forecast. The growth may not happen, and the price may not move the way the ratio suggests.'},
    {q:'A company has a P/E of 30. Analysts expect EPS to grow 25% next year, but only 10% a year on average over five years. What PEG does each forecast give?',
     o:['1.2 and 3','0.83 and 0.33','3 and 1.2','750 and 300'], a:0,
     e:'30 ÷ 25 = 1.2. 30 ÷ 10 = 3. Same company, very different PEGs, so it matters which growth figure is used.'}
  ]
};

const VALUATION_BOOK_SALES = {
  title:'Book and sales ratios', min:5,
  cards:[
    {k:'The idea', t:'When earnings are not enough', b:`
      <p class="lead">P/E needs a steady profit to work. When profit is small, missing or swings a lot from year to year, investors compare the price with what a company owns, or with what it sells.</p>
      <div class="term"><span class="term-k">Key term</span><b>Price-to-book (P/B):</b> share price ÷ book value per share. Book value is shareholders' equity: what the company owns minus what it owes, as its accounts record it.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Price-to-book at a bank', b:`
      <p>Hermel Bank has $2B of shareholders' equity and 100 million shares. Its shares cost $16.</p>
      <div class="kv kv3"><div><b>$20</b><span>Book value per share</span></div><div><b>$16</b><span>Share price</span></div><div><b>0.8</b><span>P/B</span></div></div>
      <p>$2B ÷ 100 million = $20 of book value per share, and $16 ÷ $20 = 0.8. The other route gives the same answer: market cap is $16 × 100 million = $1.6B, and $1.6B ÷ $2B = 0.8.</p>
      <p>A P/B below 1 means the market values the bank at less than its own accounts do. It might be a bargain, or investors might expect some of its loans never to be repaid.</p>
      <p>P/B suits banks and other asset-heavy firms, because their value sits mostly in things the accounts record, like loans, bonds, property and machines.</p>`},
    {k:'No profit yet', t:'Price-to-sales', b:`
      <p>Young companies often lose money for years while they grow. With no profit there's no meaningful P/E, but there are sales. P/S is also used when a normally profitable company has a bad year.</p>
      <div class="term"><span class="term-k">Key term</span><b>Price-to-sales (P/S):</b> market cap ÷ yearly revenue. Revenue is all the money from sales, before any costs.</div>
      <p>Hamra Robotics is worth $800M on the stock market. It sold $200M of robots last year and made a loss.</p>
      <div class="kv kv3"><div><b>$800M</b><span>Market cap</span></div><div><b>$200M</b><span>Revenue</span></div><div><b>4</b><span>P/S</span></div></div>
      <p>$800M ÷ $200M = 4. Investors are paying $4 for each $1 of yearly sales, betting that the sales turn into profit later.</p>`},
    {k:'The limit', t:'What each ratio misses', b:`
      <div class="split">
        <div class="col bad"><div class="col-h">P/B</div><b>Misses what isn't on the books</b><p>Cedar Tech, a software firm, has a market cap of $12B and book value of $1B: a P/B of 12. Its code, brand and staff barely show up in its accounts.</p></div>
        <div class="col bad"><div class="col-h">P/S</div><b>Ignores profit margins</b><p>Two firms each have a P/S of 2. One keeps 2% of its sales as profit, the other 20%. Their P/Es are 100 and 10.</p></div>
      </div>
      <p>Profit is sales × margin, so P/E = P/S ÷ margin: 2 ÷ 0.02 = 100 and 2 ÷ 0.20 = 10. Book value can mislead too: a bank's loans are only worth their book value if borrowers repay.</p>
      <p>Each ratio sees one part of the picture, which is why investors usually look at several together.</p>`}
  ],
  qs:[
    {q:"A company has a market cap of $3B and shareholders' equity of $2B. What is its P/B?",
     o:['0.67','1.5','$1B','5'], a:1,
     e:'P/B = market cap ÷ equity = $3B ÷ $2B = 1.5.'},
    {q:'For which business does P/B usually tell you the most?',
     o:['A software company','A fashion brand','A bank','A video game studio'], a:2,
     e:"A bank's assets are mostly loans and bonds that its accounts record. The others' most valuable assets, like code and brands, mostly aren't on the balance sheet."},
    {q:'A young company has $50M of yearly revenue, makes a loss, and has a market cap of $400M. What is its P/S?',
     o:['8','0.125','$350M','It has none, because it makes a loss'], a:0,
     e:'P/S = $400M ÷ $50M = 8. P/S works without a profit, which is when it is most used.'},
    {q:'A bank trades at a P/B of 0.7. Which reading makes most sense?',
     o:['It is certain to be a bargain','Its shares cost $0.70','It must have made a loss this year','The market values it below its accounts: a bargain, or doubts about its loans'], a:3,
     e:'P/B below 1 means the market price is below book value. That can mean a bargain, or that investors think the accounts overstate what its loans are worth.'},
    {q:'Two retailers each have a P/S of 1. Why can they still be very different value for money?',
     o:['P/S already includes profit, so they are equal','P/S ignores how much of each sale becomes profit','The one with more shares is cheaper','P/S only works for banks'], a:1,
     e:'The same P/S means the same price for each $1 of sales. A retailer keeping 5 cents of each $1 as profit has a P/E of 1 ÷ 0.05 = 20. One keeping 1 cent has a P/E of 1 ÷ 0.01 = 100.'}
  ]
};

const VALUATION_EV_EBITDA = {
  title:'Enterprise value and EBITDA', min:5,
  cards:[
    {k:'The idea', t:'The price of the whole business', b:`
      <p class="lead">Market cap is the price of all the shares. But whoever buys a whole company also takes on its debts and gets its cash. Enterprise value counts both.</p>
      <div class="term"><span class="term-k">Key term</span><b>Enterprise value (EV):</b> market cap + debt − cash. Fuller versions used by professionals add a few more items, but this is the core.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Same market cap, different price tag', b:`
      <p>Sannine Foods and Rachaya Foods each have a market cap of $500M. Sannine has no debt and $100M of cash. Rachaya has borrowed $300M and holds $50M of cash.</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Bars of enterprise value against a dashed line at the shared $500M market cap. Sannine Foods, $400M, stops short of the line. Rachaya Foods, $750M, runs well past it.">
        <rect x="30" y="46" width="120" height="22" rx="4" fill="var(--sky)"/>
        <rect x="30" y="98" width="225" height="22" rx="4" fill="var(--sky)"/>
        <line x1="180" y1="22" x2="180" y2="126" stroke="var(--ink-2)" stroke-width="1" stroke-dasharray="3 3"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="180" y="16" text-anchor="middle">Market cap $500M</text>
          <text x="30" y="40">Sannine Foods</text><text x="270" y="40" text-anchor="end" fill="var(--ink)">EV $400M</text>
          <text x="30" y="92">Rachaya Foods</text><text x="270" y="92" text-anchor="end" fill="var(--ink)">EV $750M</text>
          <text x="150" y="146" text-anchor="middle">Debt pushes EV up, cash pulls it down</text>
        </g>
      </svg>
      <p>Sannine: $500M + $0 − $100M = $400M. Rachaya: $500M + $300M − $50M = $750M.</p>
      <p>A buyer of Rachaya takes on $300M of loans that must be repaid, so the whole business costs far more than its share price suggests. Market cap alone would make the two look the same.</p>`},
    {k:'Like with like', t:'EBITDA and EV/EBITDA', b:`
      <div class="term"><span class="term-k">Key term</span><b>EBITDA:</b> earnings before interest, tax, depreciation and amortisation. Roughly, operating profit (profit from the business itself, before interest and tax) with depreciation and amortisation added back.</div>
      <p>Depreciation spreads the cost of things like machines over the years they're used. Amortisation does the same for things you can't touch, like patents.</p>
      <p>Sannine and Rachaya each have EBITDA of $50M.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Market cap ÷ EBITDA</div><b>10 and 10</b><p>They look the same. Rachaya's debt is invisible.</p></div>
        <div class="col good"><div class="col-h">EV ÷ EBITDA</div><b>8 and 15</b><p>Sannine, then Rachaya. The debt is counted.</p></div>
      </div>
      <p>EBITDA is earned before lenders get their interest, so it belongs to lenders and shareholders together. EV is the price of both, so EV/EBITDA compares like with like.</p>`},
    {k:'The limit', t:'What EBITDA leaves out', b:`
      <p>Machines, planes and phone networks wear out and must be replaced. EBITDA leaves out that spending.</p>
      <div class="term"><span class="term-k">Key term</span><b>Capital expenditure (capex):</b> spending on things that last for years, like machines, buildings and networks.</div>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Company A</div>
          <p>EBITDA $100M, capex $10M a year</p>
          <div class="pf-r">Left after capex<b class="mono">$90M</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Company B</div>
          <p>EBITDA $100M, capex $70M a year</p>
          <div class="pf-r">Left after capex<b class="mono bad-t">$30M</b></div>
        </div>
      </div>
      <p>Same EBITDA, but B has a third as much left, before paying any interest or tax. EBITDA also isn't an official accounting figure, so companies choose how to work it out. It's usually bigger than profit, so it can make results look better than they are.</p>`}
  ],
  qs:[
    {q:'A company has a market cap of $800M, debt of $200M and cash of $50M. What is its enterprise value?',
     o:['$1,050M','$650M','$950M','$750M'], a:2,
     e:'EV = market cap + debt − cash = $800M + $200M − $50M = $950M.'},
    {q:'Why does enterprise value add debt to market cap?',
     o:['Debt makes a company more valuable','Whoever buys the whole company takes on its debt','Debt is a kind of cash','Lenders own most of the shares'], a:1,
     e:'Buying the whole business means buying the shares and taking on the loans. EV counts both.'},
    {q:'A company has a market cap of $2B, no debt and $500M of cash. Which statement is true?',
     o:['Its EV is $2.5B','Its EV is $2B, because it has no debt','EV can never be below market cap','Its EV is $1.5B, below its market cap'], a:3,
     e:'$2B + $0 − $0.5B = $1.5B. Spare cash brings EV below market cap.'},
    {q:'A company has an EV of $1.2B and EBITDA of $150M. What is its EV/EBITDA?',
     o:['8','0.125','$1.05B','18'], a:0,
     e:'$1,200M ÷ $150M = 8.'},
    {q:'A telecom company has high EBITDA but must spend heavily on new equipment every year. Why might EBITDA flatter it?',
     o:['EBITDA counts that spending twice','EBITDA includes interest it earns','EBITDA leaves out the cost of replacing equipment','EBITDA is a figure fixed by law'], a:2,
     e:'EBITDA is worked out before depreciation and ignores capital spending, so the real cost of keeping the network running never shows up in it.'}
  ]
};

const VALUATION_DIVIDENDS = {
  title:'Dividend yield and payout', min:4,
  cards:[
    {k:'The idea', t:'The cash part of the return', b:`
      <p class="lead">Some companies pay part of their profit to shareholders in cash, as dividends. Two ratios show how big that payment is for the price, and whether the company can afford it.</p>
      <div class="term"><span class="term-k">Key term</span><b>Dividend yield:</b> the yearly dividend per share ÷ the share price, as a percentage. A $100 share paying $3 a year has a 3% yield.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Yield and payout ratio', b:`
      <p>Saida Power pays a dividend of $0.50 a share every three months. Its shares cost $50, and it earns $4 a share.</p>
      <div class="kv kv3"><div><b>$2</b><span>Yearly dividend</span></div><div><b>4%</b><span>Dividend yield</span></div><div><b>50%</b><span>Payout ratio</span></div></div>
      <p>$0.50 × 4 = $2 a year. $2 ÷ $50 = 4%, so 100 shares cost $5,000 and pay $200 a year. And $2 ÷ $4 = 50%: half the profit goes out as dividends, and half stays in the business.</p>
      <div class="term"><span class="term-k">Key term</span><b>Payout ratio:</b> dividends ÷ earnings, or dividend per share ÷ EPS. The part not paid out can fund growth, repay debt or sit as a cushion.</div>`},
    {k:'The trap', t:'When a high yield is a warning', b:`
      <p>Yield rises when the price falls. Akkar Shipping paid $3 a share in dividends last year. Then shipping hit a slump.</p>
      <div class="split">
        <div class="col good"><div class="col-h">A year ago</div><b>Yield 5%</b><p>$3 ÷ $60 share. It earned $6 a share, so the payout ratio was 50%.</p></div>
        <div class="col bad"><div class="col-h">Now</div><b>Yield 12%</b><p>$3 ÷ $25 share. It earns $2 a share, so paying $3 means a payout ratio of 150%.</p></div>
      </div>
      <p>The 12% is based on a dividend the company can't currently afford out of profit. If it cuts the dividend to $1, the yield at $25 is just 4%.</p>
      <div class="term"><span class="term-k">Key term</span><b>Yield trap:</b> a share whose yield looks high only because its price has fallen, while the dividend itself is at risk of a cut.</div>`},
    {k:'The limit', t:'A dividend is not a promise', b:`
      <p>Bond interest is a debt the borrower must pay. A dividend is decided by the board, the group of directors who oversee the company, and it can be cut or stopped at any time.</p>
      <p>In 2020, UK regulators asked the big UK banks to cancel their dividends, and many other companies around the world cut or paused theirs as profits fell.</p>
      <p>A dividend isn't free money either. The cash leaves the company, so the share price tends to drop by roughly the dividend when the shares stop carrying the right to it.</p>
      <div class="term"><span class="term-k">Key term</span><b>Ex-dividend date:</b> the first day a buyer of the share doesn't get the next dividend. Leaving other news aside, the price tends to drop by about the dividend that day.</div>`}
  ],
  qs:[
    {q:'A share costs $80 and pays a dividend of $0.60 every quarter. What is its dividend yield?',
     o:['0.75%','3%','2.4%','7.5%'], a:1,
     e:'$0.60 × 4 = $2.40 a year. $2.40 ÷ $80 = 0.03, which is 3%.'},
    {q:'A company has EPS of $5 and pays dividends of $4 a share. What is its payout ratio?',
     o:['125%','20%','80%','4%'], a:2,
     e:'Payout ratio = dividend ÷ EPS = $4 ÷ $5 = 0.8, which is 80%.'},
    {q:"A company's dividend hasn't changed, but its yield has risen from 4% to 10%. What happened to its share price?",
     o:['It rose 150%','It fell 6%','Nothing, yields move on their own','It fell 60%'], a:3,
     e:'Yield = dividend ÷ price. With the same dividend, going from 4% to 10% means the price fell to 4 ÷ 10 = 40% of what it was: a 60% fall.'},
    {q:"A company's payout ratio is 140%. What does that mean?",
     o:['It pays out more than it earns, which only lasts while it has savings or can borrow','It keeps 40% of its profit','Its dividend is very safe','Its share price is 140% of its earnings'], a:0,
     e:'Paying $1.40 for every $1 of profit means the extra has to come from cash reserves or borrowing. That can\'t go on for ever.'},
    {q:'True or false: once a company starts paying a dividend, it has to keep paying it.',
     o:['True','False'], a:1,
     e:'The board decides each dividend and can cut or stop it at any time. Unlike bond interest, it is not a debt.'}
  ]
};

const VALUATION_CHECK = {
  title:'Unit check', min:4, badge:{name:'Value Hunter', icon:'scale'}, cards:[],
  qs:[
    {q:'A share trades at $36 on a trailing P/E of 18. Analysts expect EPS to grow 20% next year. If the price stays at $36, what is the forward P/E?',
     o:['15','21.6','14.4','18'], a:0,
     e:'Trailing EPS = $36 ÷ 18 = $2. Next year: $2 × 1.2 = $2.40. Forward P/E = $36 ÷ $2.40 = 15.'},
    {q:'A stock has a P/E of 12.5. A government bond pays 5% a year. Which comparison is right?',
     o:["The earnings yield is 12.5%, more than twice the bond's","The earnings yield is 0.8%, far below the bond's","The earnings yield is 8%, above the bond's 5%, but profits aren't fixed like bond interest",'The earnings yield is 8%, so the stock is sure to return more than the bond'], a:2,
     e:'Earnings yield = 1 ÷ 12.5 = 8%. It beats the bond on paper, but profits can shrink and are not all paid out, while bond interest is fixed.'},
    {q:'Company X has a P/E of 45 and expected EPS growth of 15% a year. Company Y has a P/E of 20 and expected growth of 25%. Which statement is right?',
     o:['X looks cheaper for its growth, with the lower PEG','Y has a PEG of 0.8 and X a PEG of 3, but both rest on forecasts','Y has a PEG of 1.25 and X a PEG of 0.33','Their PEGs are equal'], a:1,
     e:'X: 45 ÷ 15 = 3. Y: 20 ÷ 25 = 0.8. Y looks cheaper for its expected growth, but only if the forecasts come true.'},
    {q:"A bank has 400 million shares priced at $15 and shareholders' equity of $8B. What is its P/B?",
     o:['1.33','0.75','20','6'], a:1,
     e:'Market cap = 400 million × $15 = $6B. P/B = $6B ÷ $8B = 0.75. (Book value per share is $20, and $15 ÷ $20 gives the same 0.75.)'},
    {q:'Two companies both have a P/S of 3. A keeps 30% of its revenue as net profit, and B keeps 3%. What are their P/E ratios?',
     o:['A: 100, B: 10','Both 3','A: 0.9, B: 0.09','A: 10, B: 100'], a:3,
     e:'Profit = revenue × margin, so P/E = P/S ÷ margin. A: 3 ÷ 0.30 = 10. B: 3 ÷ 0.03 = 100. Same P/S, very different price for each $1 of profit.'},
    {q:'A company has a market cap of $2B, debt of $500M, cash of $700M and EBITDA of $200M. What is its EV/EBITDA?',
     o:['10','12.5','16','9'], a:3,
     e:'EV = $2,000M + $500M − $700M = $1,800M. $1,800M ÷ $200M = 9. Its cash is bigger than its debt, so EV is below market cap.'},
    {q:'Two companies each have EBITDA of $100M and an EV/EBITDA of 8. A spends $15M a year on new equipment, and B spends $75M. Which is true?',
     o:['They are equally good value, since their ratios match','A must have more debt','B has far less left after paying for equipment, so its EBITDA flatters it','EBITDA already takes equipment spending into account'], a:2,
     e:'After capex, A has $100M − $15M = $85M and B has $100M − $75M = $25M. EBITDA ignores capex, so the same ratio hides a big difference.'},
    {q:'A share costs $40 and pays $3.20 a year in dividends. Its EPS is $2.50. What are its dividend yield and payout ratio, and what do they suggest?',
     o:['8% and 128%: it pays out more than it earns, so the dividend may be at risk','8% and 78%: the dividend is comfortably covered','12.5% and 78%: an unusually generous, safe dividend','6.25% and 128%: a modest but safe yield'], a:0,
     e:'Yield = $3.20 ÷ $40 = 8%. Payout = $3.20 ÷ $2.50 = 128%. Paying out more than it earns is a common sign of a dividend that may be cut.'}
  ]
};

const UNIT_VALUATION = {id:'valuation', title:'Valuation ratios', level:'Intermediate', lessons:[VALUATION_PE_DEPTH, VALUATION_PEG, VALUATION_BOOK_SALES, VALUATION_EV_EBITDA, VALUATION_DIVIDENDS, VALUATION_CHECK]};

/* Placement: one question per lesson, n = lesson number 1-5. Different from the lesson questions. */
const PLACEMENT_VALUATION = [
  {n:1, q:'A share costs $50 and EPS is $2.50. What is its earnings yield?',
   o:['20%','2.5%','5%','50%'], a:2,
   e:'Earnings yield = EPS ÷ price = $2.50 ÷ $50 = 0.05, which is 5%. It is the P/E of 20 flipped over.'},
  {n:2, q:'Company A has a P/E of 20 and expected EPS growth of 25% a year. Company B has a P/E of 12 and expected growth of 6%. Which has the lower PEG?',
   o:['B, because its P/E is lower',"A, with a PEG of 0.8 against B's 2",'B, with a PEG of 0.5','They are the same'], a:1,
   e:'A: 20 ÷ 25 = 0.8. B: 12 ÷ 6 = 2. A lower P/E does not mean a lower PEG.'},
  {n:3, q:'A software company trades at 15 times its book value. What is the most likely reason?',
   o:['Its accounts must be wrong','It has a lot of debt','It is about to go bankrupt',"Much of its value, like code and its brand, isn't on its balance sheet"], a:3,
   e:'Book value counts what the accounts record. A software firm\'s most valuable assets mostly aren\'t recorded, so its P/B is often high.'},
  {n:4, q:'A company has a market cap of $1B, no debt and $250M of cash. What is its enterprise value?',
   o:['$1.25B','$1B','$750M','$250M'], a:2,
   e:'EV = market cap + debt − cash = $1,000M + $0 − $250M = $750M.'},
  {n:5, q:'A share costs $40 and pays $2 of dividends a year. Its EPS is $2.50. What are its dividend yield and payout ratio?',
   o:['5% and 80%','20% and 125%','5% and 125%','6.25% and 80%'], a:0,
   e:'Yield = $2 ÷ $40 = 5%. Payout = $2 ÷ $2.50 = 80%.'}
];

/* MATHS CHECK: every calculation and its result, for the reviewer.
   (Recomputed in Python: 138 of 138 checks pass.)
   Lesson 1, P/E in depth
     Cedar Tech: 60 ÷ 2.40 = 25 (trailing); 60 ÷ 3.00 = 20 (forward)
     Litani Energy: 40 ÷ 5.00 = 8 (trailing); 40 ÷ 2.50 = 16 (forward)
     Earnings yield: 1 ÷ 10 = 10%; 1 ÷ 20 = 5%; 1 ÷ 40 = 2.5%; 1 ÷ 25 = 4% (vs 4.5% bond)
     Batroun Steel: 50 ÷ 10 = 5; 30 ÷ 2 = 15; (30 − 50) ÷ 50 = −40%
     Q1: 45 ÷ 1.80 = 25; 45 ÷ 2.25 = 20. Distractors: 1.80 ÷ 45 = 4%, 2.25 ÷ 45 = 5%, 45 ÷ 2.50 = 18
     Q2: 1 ÷ 25 = 4%
     Q3: same price, P/E 15 → 30 means forecast EPS = 15 ÷ 30 = half. Example 30 ÷ 2 = 15, 30 ÷ 1 = 30
   Lesson 2, The PEG ratio
     Key term: 20 ÷ 10 = 2. Lead: 30% ÷ 5% = 6 times as fast
     Jounieh Games: 30 ÷ 30 = 1.0. Byblos Foods: 15 ÷ 5 = 3.0. P/E 15 vs 30 = half; PEG 1 vs 3 = a third
     Five years: 30 ÷ 1.30^5 = 8.08 (about 8); 15 ÷ 1.05^5 = 11.75 (about 12)
     Card 4: 24 ÷ 24 = 1.0; 24 ÷ 12 = 2.0; 12 ÷ −4 = −3
     Q1: 24 ÷ 12 = 2. Distractors 12 ÷ 24 = 0.5, 24 × 12 = 288
     Q2: A 40 ÷ 20 = 2; B 18 ÷ 18 = 1. Distractor 20 ÷ 40 = 0.5
     Q3: 14 ÷ −7 = −2. Distractor 14 × 7 = 98
     Q5: 30 ÷ 25 = 1.2; 30 ÷ 10 = 3. Distractors 25 ÷ 30 = 0.83, 10 ÷ 30 = 0.33, 30 × 25 = 750, 30 × 10 = 300
   Lesson 3, Book and sales ratios
     Hermel Bank: $2B ÷ 100M = $20 BVPS; 16 ÷ 20 = 0.8; 16 × 100M = $1.6B; 1.6 ÷ 2 = 0.8
     Hamra Robotics: 800 ÷ 200 = 4
     Cedar Tech: 12 ÷ 1 = 12
     P/S 2: 2 ÷ 0.02 = 100; 2 ÷ 0.20 = 10
     Q1: 3 ÷ 2 = 1.5. Distractor 2 ÷ 3 = 0.67
     Q3: 400 ÷ 50 = 8. Distractor 50 ÷ 400 = 0.125
     Q5 explanation: P/S 1 with 5% margin: 1 ÷ 0.05 = 20; with 1% margin: 1 ÷ 0.01 = 100
   Lesson 4, Enterprise value and EBITDA
     Sannine: 500 + 0 − 100 = 400. Rachaya: 500 + 300 − 50 = 750
     Market cap ÷ EBITDA: 500 ÷ 50 = 10 for both. EV ÷ EBITDA: 400 ÷ 50 = 8; 750 ÷ 50 = 15
     SVG scale 0.3 px per $1M from x = 30: Sannine bar 0.3 × 400 = 120 wide (ends x = 150);
       Rachaya bar 0.3 × 750 = 225 wide (ends x = 255); market cap line at 30 + 0.3 × 500 = 180.
       Text rows at y = 16, 40, 92, 146; bars at y 46-68 and 98-120 (all gaps of 14px or more)
     Capex: 100 − 10 = 90; 100 − 70 = 30; 30 ÷ 90 = a third
     Q1: 800 + 200 − 50 = 950. Distractors 800 + 200 + 50 = 1,050; 800 − 200 + 50 = 650; 800 − 50 = 750
     Q3: 2,000 + 0 − 500 = 1,500
     Q4: 1,200 ÷ 150 = 8. Distractors 150 ÷ 1,200 = 0.125; 1,200 − 150 = 1,050
   Lesson 5, Dividend yield and payout
     Key term: 3 ÷ 100 = 3%
     Saida Power: 0.50 × 4 = $2; 2 ÷ 50 = 4%; 2 ÷ 4 = 50%; 100 × $50 = $5,000; 100 × $2 = $200
     Akkar Shipping: 3 ÷ 60 = 5%; 3 ÷ 6 = 50%; 3 ÷ 25 = 12%; 3 ÷ 2 = 150%; after cut 1 ÷ 25 = 4%
     Q1: 0.60 × 4 = 2.40; 2.40 ÷ 80 = 3%. Distractor 0.60 ÷ 80 = 0.75%
     Q2: 4 ÷ 5 = 80%. Distractors 5 ÷ 4 = 125%, 1 ÷ 5 = 20%
     Q3: 4 ÷ 10 = 0.4 of the old price, so −60%
     Q4: 140% = $1.40 paid per $1 of profit
   Unit check
     C1: 36 ÷ 18 = 2; 2 × 1.2 = 2.40; 36 ÷ 2.40 = 15. Distractors 18 × 1.2 = 21.6, 18 × 0.8 = 14.4
     C2: 1 ÷ 12.5 = 8%
     C3: X 45 ÷ 15 = 3; Y 20 ÷ 25 = 0.8. Distractors 25 ÷ 20 = 1.25, 15 ÷ 45 = 0.33
     C4: 400M × 15 = $6B; 6 ÷ 8 = 0.75; BVPS 8B ÷ 400M = $20; 15 ÷ 20 = 0.75. Distractor 8 ÷ 6 = 1.33
     C5: 3 ÷ 0.30 = 10; 3 ÷ 0.03 = 100. Distractors 3 × 0.30 = 0.9, 3 × 0.03 = 0.09
     C6: 2,000 + 500 − 700 = 1,800; 1,800 ÷ 200 = 9. Distractors 2,000 ÷ 200 = 10, 2,500 ÷ 200 = 12.5, 3,200 ÷ 200 = 16
     C7: 100 − 15 = 85; 100 − 75 = 25
     C8: 3.20 ÷ 40 = 8%; 3.20 ÷ 2.50 = 128%. Distractors 2.50 ÷ 3.20 = 78%, 40 ÷ 3.20 = 12.5, 2.50 ÷ 40 = 6.25%
   Placement
     P1: 2.50 ÷ 50 = 5%; 50 ÷ 2.50 = 20
     P2: A 20 ÷ 25 = 0.8; B 12 ÷ 6 = 2. Distractor 6 ÷ 12 = 0.5
     P4: 1,000 + 0 − 250 = 750
     P5: 2 ÷ 40 = 5%; 2 ÷ 2.50 = 80%. Distractors 40 ÷ 2 = 20, 2.50 ÷ 2 = 125%, 2.50 ÷ 40 = 6.25%
*/
