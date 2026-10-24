/* ---------- Reading the market ---------- */
const PRICE_CHARTS = {
  title:'Price charts', min:4,
  cards:[
    {k:'The idea', t:'Four prices in one candle', b:`
      <p class="lead">Most trading apps show prices as candlesticks. Each candle sums up one period, such as one day, with four prices: open, high, low and close.</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Two candles. Green: close above open. Red: close below open. Thin wicks reach the high and low.">
        <line x1="60" y1="10" x2="60" y2="132" stroke="var(--bull-deep)" stroke-width="3" stroke-linecap="round"/>
        <rect x="42" y="32" width="36" height="72" rx="5" fill="var(--bull)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="86" y="14">High</text><text x="86" y="37">Close</text><text x="86" y="107">Open</text><text x="86" y="134">Low</text>
          <text x="214" y="14" text-anchor="end">High</text><text x="214" y="37" text-anchor="end">Open</text><text x="214" y="107" text-anchor="end">Close</text><text x="214" y="134" text-anchor="end">Low</text>
          <text x="60" y="154" text-anchor="middle" fill="var(--bull-ink)">Closed higher</text><text x="240" y="154" text-anchor="middle" fill="var(--bear-ink)">Closed lower</text>
        </g>
        <line x1="240" y1="10" x2="240" y2="132" stroke="var(--bear-deep)" stroke-width="3" stroke-linecap="round"/>
        <rect x="222" y="32" width="36" height="72" rx="5" fill="var(--bear)"/>
      </svg>
      <div class="term"><span class="term-k">Key term</span><b>Body and wicks:</b> the thick body runs from the open to the close. The thin wicks stretch to the period's high and low.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Read one candle', t:'What happened that day', b:`
      <p>A stock's daily candle shows these four prices:</p>
      <div class="kv"><div><b>$50</b><span>Open</span></div><div><b>$54</b><span>High</span></div><div><b>$48</b><span>Low</span></div><div><b>$53</b><span>Close</span></div></div>
      <p>It closed above where it opened, so the candle is green. The body runs from $50 to $53. The wicks reach up to $54 and down to $48.</p>
      <p>Change for the day: $53 − $50 = <b>+$3</b>, and $3 ÷ $50 = <b class="good-t">+6%</b>.</p>`},
    {k:'Zoom out', t:'The timeframe changes the story', b:`
      <p>A candle can cover one minute, one day or one week. The same stock can look like it's crashing on an hourly chart and climbing steadily on a yearly one.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Past week</div><b>−8%</b><p>Five red candles in a row.</p></div>
        <div class="col good"><div class="col-h">Past year</div><b>+40%</b><p>A steady climb with a small dip at the end.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Volume:</b> how many shares changed hands in a period. A big move on high volume means a lot of buyers or sellers took part.</div>`},
    {k:'The limit', t:'Charts show the past, not the future', b:`
      <p>A chart tells you what the price did. It doesn't tell you why it moved, or what it will do next.</p>
      <p>People look for patterns in charts, but a pattern that worked before is no guarantee it will work again. Research on whether chart patterns beat the market after trading costs is mixed at best.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Charts are good for</div><b>Seeing what happened</b><p>Trends, swings and how far a price has fallen from its high.</p></div>
        <div class="col bad"><div class="col-h">Charts can't</div><b>Predict tomorrow</b><p>Prices react to news nobody has seen yet.</p></div>
      </div>`}
  ],
  qs:[
    {q:'On a daily candle, what does the top of the upper wick show?',
     o:["The day's highest price",'The closing price','The opening price',"The day's average price"], a:0,
     e:'The wicks stretch to the highest and lowest prices of the period.'},
    {q:'A stock opens at $40 and closes at $37. On most charts, what colour is that candle?',
     o:['Green','Red','Grey','It depends on the volume'], a:1,
     e:'It closed below where it opened, so it is a falling, red candle.'},
    {q:'A stock opens at $50 and closes at $53. What was its change that day?',
     o:['+3%','+6%','+53%','+$53'], a:1,
     e:'It rose $3 on a $50 start. $3 ÷ $50 = 6%.'},
    {q:'Which statement about price charts is true?',
     o:['They show what happened, not what will happen next','A rising chart guarantees more gains','Candle patterns reliably predict tomorrow','Charts show how much profit a company makes'], a:0,
     e:'Charts record past prices. Future prices depend on news nobody has seen yet.'},
    {q:'A stock is down 8% this week but up 40% over the past year. What does this show?',
     o:['The timeframe you look at changes the story','The stock is crashing','The yearly chart must be wrong','Weekly charts are more accurate'], a:0,
     e:'Zooming in or out can make the same stock look very different.'}
  ]
};

const MARKET_CAP = {
  title:'Market cap', min:4,
  cards:[
    {k:'The idea', t:'Price alone tells you little', b:`
      <p class="lead">A $500 share doesn't mean a bigger company than a $50 share. To know a company's size, you also need to know how many shares exist.</p>
      <div class="term"><span class="term-k">Key term</span><b>Market cap:</b> share price × number of shares. It's what the stock market says the whole company is worth.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Which company is bigger?', b:`
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Company A</div>
          <p>$500 a share × 10 million shares</p>
          <div class="pf-r">Market cap<b class="mono">$5 billion</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Company B</div>
          <p>$50 a share × 2 billion shares</p>
          <div class="pf-r">Market cap<b class="mono good-t">$100 billion</b></div>
        </div>
      </div>
      <p>Company B's shares cost a tenth as much, but the company is 20 times bigger.</p>`},
    {k:'Stock splits', t:'More slices, same pizza', b:`
      <p>A company can split each share into several. The price per share drops, you get more shares, and the total value stays the same.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Before a 10-for-1 split</div><b class="mono">2 × $600</b><p>Worth $1,200.</p></div>
        <div class="col good"><div class="col-h">After</div><b class="mono">20 × $60</b><p>Still worth $1,200.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Stock split:</b> dividing each share into more shares at a lower price, without changing the company's value.</div>`},
    {k:'Size groups', t:'Large, mid and small', b:`
      <p>Investors often group companies by market cap. The exact lines vary, but these are common:</p>
      <div class="score"><div><b>$10B+</b><span>Large-cap</span></div><div><b>$2B–10B</b><span>Mid-cap</span></div><div><b>$0.3B–2B</b><span>Small-cap</span></div></div>
      <p>Smaller companies can grow faster, but their prices usually swing more. Large companies tend to be steadier.</p>`}
  ],
  qs:[
    {q:'A company\'s shares cost $20, and there are 500 million of them. What is its market cap?',
     o:['$10 million','$500 million','$1 billion','$10 billion'], a:3,
     e:'$20 × 500 million = $10 billion.'},
    {q:'Company X\'s shares cost $400. Company Y\'s cost $40. Which company is bigger?',
     o:['Company X','Company Y',"You can't tell without knowing how many shares each has",'They are the same size'], a:2,
     e:'Size is price × number of shares. The price alone doesn\'t tell you.'},
    {q:'You own 3 shares at $900 each. The company does a 3-for-1 split. What do you own now?',
     o:['9 shares at $300','3 shares at $300','9 shares at $900','1 share at $2,700'], a:0,
     e:'Three times the shares at a third of the price. Still $2,700 in total.'},
    {q:'Using the common size groups, a company worth $50 billion is:',
     o:['Large-cap','Mid-cap','Small-cap','Micro-cap'], a:0,
     e:'Anything above about $10 billion is usually called large-cap.'},
    {q:'Which statement is usually true?',
     o:["Smaller companies' prices tend to swing more than large ones","Small-cap stocks are always safer","Market cap measures a company's profit","A lower share price means a cheaper company"], a:0,
     e:'Smaller companies can grow faster, but their prices usually move more.'}
  ]
};

const EARNINGS_PE = {
  title:'Earnings and P/E', min:5,
  cards:[
    {k:'The idea', t:'What the company earns', b:`
      <p class="lead">Earnings are a company's profit after all its costs. Split them across all the shares and you get earnings per share.</p>
      <div class="kv kv3"><div><b>$2B</b><span>Yearly profit</span></div><div><b>1B</b><span>Shares</span></div><div><b class="good-t">$2</b><span>Earnings per share</span></div></div>
      <div class="term"><span class="term-k">Key term</span><b>EPS (earnings per share):</b> profit ÷ number of shares.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'The P/E ratio', b:`
      <p>The P/E ratio compares the share price with earnings per share. It tells you how many dollars investors pay for each $1 of yearly profit.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Company A</div>
          <p>Price $30 ÷ EPS $3</p>
          <div class="pf-r">P/E<b class="mono">10</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Company B</div>
          <p>Price $100 ÷ EPS $2</p>
          <div class="pf-r">P/E<b class="mono">50</b></div>
        </div>
      </div>
      <p>Investors pay $10 for each $1 of Company A's profit, and $50 for each $1 of Company B's.</p>
      <div class="term"><span class="term-k">Key term</span><b>P/E ratio:</b> share price ÷ earnings per share.</div>`},
    {k:'Reading it', t:'High or low, not good or bad', b:`
      <div class="split">
        <div class="col good"><div class="col-h">High P/E</div><b>Big expectations</b><p>Investors expect fast growth, or the price has run ahead of the business.</p></div>
        <div class="col bad"><div class="col-h">Low P/E</div><b>Low expectations</b><p>Slow growth, a problem investors are worried about, or a bargain.</p></div>
      </div>
      <p>P/E only makes sense next to similar companies. Two supermarket chains are a fair comparison. A bank and a software start-up aren't.</p>`},
    {k:'The limit', t:'When P/E breaks down', b:`
      <p>If a company made a loss, P/E has no meaning. And one strange year, like a one-off sale of a building, can make earnings look better or worse than normal.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Trailing P/E</div><b>Last year's earnings</b><p>Real numbers, but about the past.</p></div>
        <div class="col good"><div class="col-h">Forward P/E</div><b>Next year's forecast</b><p>About the future, but only a guess.</p></div>
      </div>`}
  ],
  qs:[
    {q:'A company earns $500 million in a year and has 250 million shares. What is its EPS?',
     o:['$0.50','$2','$5','$250'], a:1,
     e:'$500 million ÷ 250 million shares = $2 a share.'},
    {q:'A share costs $60 and the company\'s EPS is $3. What is its P/E ratio?',
     o:['3','18','20','63'], a:2,
     e:'$60 ÷ $3 = 20.'},
    {q:'A company has a P/E of 40. What does that usually tell you?',
     o:['Investors expect strong growth','The company is losing money','The shares are cheap','It pays a large dividend'], a:0,
     e:'Paying $40 for each $1 of profit only makes sense if investors expect profits to grow.'},
    {q:'Which P/E comparison makes the most sense?',
     o:['Two supermarket chains','A bank and a software start-up','A company\'s P/E and its share price','Gold and a tech stock'], a:0,
     e:'P/E is most useful between similar businesses.'},
    {q:'A company made a loss last year. What is its trailing P/E?',
     o:['It has no meaningful P/E','Zero','Very high','The same as its share price'], a:0,
     e:'With negative earnings, the ratio doesn\'t mean anything.'}
  ]
};

const PLACING_ORDERS = {
  title:'Placing orders', min:4,
  cards:[
    {k:'The idea', t:'Two prices, not one', b:`
      <p class="lead">For every buyer there's a seller. At any moment a stock has two prices: what buyers are offering and what sellers are asking.</p>
      <div class="kv kv3"><div><b>$99.90</b><span>Bid (buyers)</span></div><div><b>$100.10</b><span>Ask (sellers)</span></div><div><b class="bad-t">$0.20</b><span>Spread</span></div></div>
      <div class="term"><span class="term-k">Key term</span><b>Bid-ask spread:</b> the gap between the highest price a buyer will pay and the lowest price a seller will accept.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Order types', t:'Speed or price: pick one', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Market order</div><b>Fills now</b><p>Buys at the best ask, or sells at the best bid, straight away. The exact price isn't guaranteed.</p></div>
        <div class="col good"><div class="col-h">Limit order</div><b>Your price or better</b><p>"Buy at $98 or less." The price is guaranteed, but it may never fill.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Limit order:</b> an order to buy or sell only at a price you set, or better.</div>`},
    {k:'Do the maths', t:'The hidden cost of the spread', b:`
      <p>You buy 50 shares at the ask of $100.10, then change your mind and sell straight away at the bid of $99.90.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Lost to the spread</div><b class="mono">$10</b><p>$0.20 × 50 shares, before any fees.</p></div>
        <div class="col good"><div class="col-h">Where it's smaller</div><b>Busy stocks</b><p>Lots of buyers and sellers keep the gap tight.</p></div>
      </div>
      <p>Rarely traded stocks and small coins often have much wider spreads.</p>`},
    {k:'In Bullpen', t:'How the trading game fills orders', b:`
      <p>When prices move fast, a market order can fill at a worse price than the one you saw. That's called slippage.</p>
      <p>In Bullpen's trading game, every order fills at the next market price after you tap, never at an old price on screen. It works like a real market order, so nobody can game a stale price.</p>
      <div class="term"><span class="term-k">Key term</span><b>Slippage:</b> the difference between the price you expected and the price you actually got.</div>`}
  ],
  qs:[
    {q:'The bid is $24.95 and the ask is $25.05. If you buy with a market order right now, about what do you pay?',
     o:['$24.95','$25.00','$25.05','$25.10'], a:2,
     e:'A market buy fills at the ask: the lowest price a seller will accept.'},
    {q:'Which order type guarantees your price but might never fill?',
     o:['Market order','Limit order','Both','Neither'], a:1,
     e:'A limit order only fills at your price or better. If the market never gets there, it doesn\'t fill.'},
    {q:'The bid is $9.98 and the ask is $10.02. You buy 200 shares and sell them straight away. How much do you lose to the spread?',
     o:['$0.04','$4','$8','$40'], a:2,
     e:'The spread is $0.04 a share. $0.04 × 200 = $8.'},
    {q:'You only want to buy if the price drops to $45 or lower. Which order do you place?',
     o:['A limit buy at $45','A market buy now','A market sell','A limit sell at $45'], a:0,
     e:'A limit buy at $45 only fills at $45 or less.'},
    {q:'Why do rarely traded stocks tend to have wider spreads?',
     o:['Fewer buyers and sellers are competing on price','Exchanges charge more for them','They are always more profitable','The law requires it'], a:0,
     e:'With little competition, the gap between bids and asks stays wide.'}
  ]
};

const BULLS_AND_BEARS = {
  title:'Bulls, bears and recoveries', min:5,
  cards:[
    {k:'The idea', t:'Naming the moves', b:`
      <p class="lead">Markets go through long rises and sharp falls. The names tell you how big a fall was.</p>
      <div class="score"><div><b>10–20%</b><span>Correction</span></div><div><b>20%+</b><span>Bear market</span></div><div><b>Long rise</b><span>Bull market</span></div></div>
      <div class="term"><span class="term-k">Key term</span><b>Drawdown:</b> how far a price has fallen from its last peak.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Losses need bigger gains to undo', b:`
      <p>After a fall, you're climbing back from a smaller amount, so the percentage you need is bigger than the one you lost.</p>
      <div class="score"><div><b class="bad-t">−10%</b><span>needs +11%</span></div><div><b class="bad-t">−20%</b><span>needs +25%</span></div><div><b class="bad-t">−50%</b><span>needs +100%</span></div></div>
      <p>$1,000 that falls 50% is $500. A 50% rise from there only gets you to $750.</p>`},
    {k:'History', t:'Real falls, real recoveries', b:`
      <div class="split">
        <div class="col bad"><div class="col-h">2007–2009</div><b>S&amp;P 500 fell ~57%</b><p>It took until 2013 to get back to its old high.</p></div>
        <div class="col bad"><div class="col-h">2020</div><b>Fell ~34% in a month</b><p>It was back at its high by August, about 5 months after the low.</p></div>
      </div>
      <p>Recoveries aren't guaranteed to be quick. Japan's Nikkei index took about 34 years to get back to its 1989 peak.</p>`},
    {k:'The trap', t:'Big rebounds hide next to big falls', b:`
      <p>Some of the market's biggest one-day gains came within days of its worst falls, for example in October 2008 and March 2020.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Sold in the panic</div><b>Locked in the loss</b><p>And often missed the rebound days.</p></div>
        <div class="col good"><div class="col-h">Stayed invested</div><b>Rode it out</b><p>Only works if you don't need the money soon (Lesson 2).</p></div>
      </div>
      <p>This is history, not a promise. Nobody knows when a fall will end.</p>`}
  ],
  qs:[
    {q:'A market falls 25% from its peak. What is that usually called?',
     o:['A bear market','A correction','A bull market','A recession'], a:0,
     e:'A fall of 20% or more from the peak is usually called a bear market.'},
    {q:'Your $2,000 portfolio falls 50%. What rise do you need to get back to $2,000?',
     o:['50%','75%','100%','200%'], a:2,
     e:'You\'re down to $1,000. Getting back to $2,000 means doubling: +100%.'},
    {q:'A portfolio falls 20%, then rises 20%. Where does it end up?',
     o:['Back to even','Down 4%','Up 4%','Down 20%'], a:1,
     e:'$100 → $80 → $96. The rise is 20% of a smaller amount.'},
    {q:'A market drops 12% from its peak. What is that usually called?',
     o:['A bear market','A correction','A crash','A bull market'], a:1,
     e:'A fall of 10% to 20% is usually called a correction.'},
    {q:'After its March 2020 low, roughly how long did the S&P 500 take to get back to its February high?',
     o:['About 2 weeks','About 5 months','About 5 years','It never got back'], a:1,
     e:'It hit its low on 23 March and set a new high in August 2020.'}
  ]
};

const UNIT2_CHECK = {
  title:'Unit check', min:4, badge:{name:'Chart Reader', icon:'candles'}, cards:[],
  qs:[
    {q:'A daily candle opens at $120, closes at $126, has a high of $129 and a low of $118. How tall is its body?',
     o:['$3','$6','$9','$11'], a:1,
     e:'The body runs from the open to the close: $126 − $120 = $6.'},
    {q:'A company has 300 million shares at $50 each. What is its market cap?',
     o:['$350 million','$1.5 billion','$15 billion','$150 billion'], a:2,
     e:'$50 × 300 million = $15 billion.'},
    {q:'A share costs $45 and EPS is $1.50. What is the P/E ratio?',
     o:['15','30','43.5','67.5'], a:1,
     e:'$45 ÷ $1.50 = 30.'},
    {q:'Two software companies have P/E ratios of 15 and 60. What is the most likely reason for the gap?',
     o:['Investors expect the P/E 60 company to grow much faster','The P/E 60 company is cheaper','The P/E 15 company is losing money','They are worth exactly the same'], a:0,
     e:'A high P/E usually means investors are paying up for expected growth.'},
    {q:'A rarely traded stock has a bid of $3.00 and an ask of $3.10. You buy 1,000 shares and sell them straight away. What do you lose to the spread?',
     o:['$10','$100','$310','$3,100'], a:1,
     e:'$0.10 a share × 1,000 shares = $100.'},
    {q:'Getting a specific price matters more to you than getting filled quickly. Which order fits?',
     o:['A limit order','A market order','Either, they work the same way','Neither'], a:0,
     e:'A limit order only fills at your price or better.'},
    {q:'What does a 2-for-1 stock split change?',
     o:['The number of shares and the price per share, not the total value','The total value of your shares','The company\'s profit','Nothing at all'], a:0,
     e:'You get twice the shares at half the price. The total stays the same.'},
    {q:'A portfolio falls from $10,000 to $7,000. Roughly what rise gets it back to $10,000?',
     o:['30%','43%','70%','100%'], a:1,
     e:'It needs $3,000 on top of $7,000. $3,000 ÷ $7,000 ≈ 43%.'}
  ]
};

const UNIT_READING_MARKET = {id:'reading-market', title:'Reading the market', level:'Intermediate', lessons:[PRICE_CHARTS, MARKET_CAP, EARNINGS_PE, PLACING_ORDERS, BULLS_AND_BEARS, UNIT2_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_READING_MARKET = [
  {n:1, q:'A daily candle opens at $80, closes at $76, and its low is $74. Where is the bottom of the lower wick?',
   o:['$76','$80','$74','$78'], a:2, e:'The lower wick reaches the day\'s low: $74.'},
  {n:2, q:'Shares cost $25, and there are 4 billion of them. What is the market cap?',
   o:['$4 billion','$25 billion','$100 billion','$1 trillion'], a:2, e:'$25 × 4 billion = $100 billion.'},
  {n:3, q:'A share costs $90 and earnings per share are $4.50. What is the P/E ratio?',
   o:['4.5','20','40.5','85.5'], a:1, e:'$90 ÷ $4.50 = 20.'},
  {n:4, q:'You only want to sell if you get $120 a share or more. Which order fits?',
   o:['A market sell','A limit sell at $120','A limit buy at $120','A market buy'], a:1, e:'A limit sell at $120 only fills at $120 or higher.'},
  {n:5, q:'A stock falls 40%. What rise brings it back to where it started?',
   o:['40%','60%','About 67%','140%'], a:2, e:'It\'s at 60% of its old price. 100 ÷ 60 ≈ 1.67, so it needs about +67%.'}
];
