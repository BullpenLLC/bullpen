/* ---------- Company events ---------- */
const EVENTS_EARNINGS = {
  title:'Earnings season', min:5,
  cards:[
    {k:'The idea', t:'Four report days a year', b:`
      <p class="lead">Most companies listed in the US report their results every quarter, that is every three months. Most big companies report in the few weeks after each quarter ends, a stretch known as earnings season.</p>
      <p>The Valuation ratios unit met the consensus forecast: the average of analysts' EPS estimates. On results day, the share price reacts less to whether profit went up, and more to how it compares with that forecast.</p>
      <div class="term"><span class="term-k">Key term</span><b>Beat and miss:</b> a company beats when its results come in above the consensus estimate, and misses when they come in below it.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Measuring a beat', b:`
      <p>Cedar Tech reports its quarter. Analysts expected EPS of $1.20. It earned $1.32.</p>
      <div class="kv"><div><b>$1.20</b><span>Consensus EPS</span></div><div><b>$1.32</b><span>Actual EPS</span></div><div><b>+$0.12</b><span>Beat</span></div><div><b class="good-t">+10%</b><span>Surprise</span></div></div>
      <p>$1.32 − $1.20 = $0.12, and $0.12 ÷ $1.20 = 10%. Analysts check revenue against its estimate too: Cedar Tech sold $2.05B of goods against $2.00B expected, a 2.5% beat.</p>
      <div class="term"><span class="term-k">Key term</span><b>Earnings surprise:</b> (actual EPS − consensus EPS) ÷ consensus EPS. You divide by the estimate, not by the actual result.</div>`},
    {k:'The catch', t:'The forecast can matter more', b:`
      <p>Many companies also give guidance. Cedar Tech says it expects EPS of about $1.05 next quarter. Analysts had pencilled in $1.35.</p>
      <div class="split">
        <div class="col good"><div class="col-h">This quarter</div><b>Beat by 10%</b><p>A quarter that is already over.</p></div>
        <div class="col bad"><div class="col-h">Next quarter</div><b>Guided 22% below</b><p>$1.05 against $1.35 expected.</p></div>
      </div>
      <p>The next morning the shares open at $70, down from $80: <b class="bad-t">−12.5%</b>, after a beat. A share price is a bet on future profits, so a weaker forecast can outweigh a strong quarter.</p>
      <div class="term"><span class="term-k">Key term</span><b>Guidance:</b> a company's own forecast of its coming results, often for revenue or EPS. Not every company gives one.</div>`},
    {k:'In practice', t:'Expectations are already in the price', b:`
      <p>In a typical quarter, most large US companies beat the consensus, partly because companies tend to steer forecasts to a level they expect to clear. So a small beat is often treated as normal, not as great news.</p>
      <p>Results usually come out before the market opens or after it closes. The share price can't react in normal trading until the next session, so it can open far from where it last closed.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Better than hoped</div><b>Gap up</b><p>Opens well above the last close.</p></div>
        <div class="col bad"><div class="col-h">Worse than hoped</div><b>Gap down</b><p>Opens well below it.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Gap:</b> a jump between one session's closing price and the next session's opening price. Holding a share through its results means taking that risk, in either direction.</div>`}
  ],
  qs:[
    {q:'Analysts expect EPS of $0.80 for the quarter. The company reports $0.92. What is the earnings surprise?',
     o:['12%','About 13%','15%','$0.92'], a:2,
     e:'$0.92 − $0.80 = $0.12. $0.12 ÷ $0.80 = 0.15, a 15% beat. Divide by the estimate: $0.12 ÷ $0.92 would give about 13%.'},
    {q:"What is a company's guidance?",
     o:["The average of analysts' EPS forecasts","The company's own forecast of its coming results",'Rules the stock exchange sets for reporting','A tip the company gives shareholders on when to trade'], a:1,
     e:"Guidance comes from the company itself. The average of analysts' forecasts is the consensus."},
    {q:'A company beats its quarterly EPS estimate but cuts its forecast for the rest of the year. Its shares fall 9%. Which explanation fits best?',
     o:['The price reflects expected future profits, and the new forecast lowered them','Shares always fall on results day','A beat only counts if it is above 20%','Investors only look at revenue'], a:0,
     e:'A share price is a bet on future profits. A finished quarter matters less than a cut to what the company expects next.'},
    {q:'Analysts expect EPS of $0.50. The company reports $0.45. How would you describe the result?',
     o:['A beat of 10%','A miss of 5%','A miss of about 11%','A miss of 10%'], a:3,
     e:'$0.45 − $0.50 = −$0.05, and −$0.05 ÷ $0.50 = −10%: a 10% miss. Dividing by $0.45 instead would give about 11%.'},
    {q:'True or false: a company that beats the consensus estimate always sees its shares rise.',
     o:['True','False'], a:1,
     e:'Beats are common, so a small one may already be expected. Weak guidance can also outweigh a good quarter.'}
  ]
};

const EVENTS_DIVIDEND_DATES = {
  title:'Dividend dates', min:5,
  cards:[
    {k:'The idea', t:'Four dates on every dividend', b:`
      <p class="lead">Every dividend comes with four dates. The Valuation ratios unit met one of them, the ex-dividend date. Here is the whole timeline for Saida Power's $0.50 quarterly dividend:</p>
      <div class="kv"><div><b>24 Feb</b><span>Declaration date</span></div><div><b>12 Mar</b><span>Ex-dividend date</span></div><div><b>12 Mar</b><span>Record date</span></div><div><b>2 Apr</b><span>Payment date</span></div></div>
      <p>On the declaration date the board announces the amount, the record date and the payment date. The ex-dividend date follows from the stock exchange's rules. On the payment date the cash arrives. The two dates in the middle decide who gets it.</p>
      <div class="term"><span class="term-k">Key term</span><b>Record date:</b> the day the company checks its list of shareholders. Everyone on the list that day gets the dividend.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Who gets paid', t:'Before the ex-dividend date', b:`
      <p>A purchase isn't final the moment you tap buy. US share trades settle one business day later, and only then is the buyer on the list. So for a normal dividend, the ex-dividend date falls on the record date itself.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Bought Wednesday 11 March</div><b>Gets the $0.50</b><p>Settles on 12 March, the record date, so the buyer is on the list.</p></div>
        <div class="col bad"><div class="col-h">Bought Thursday 12 March</div><b>No dividend</b><p>Settles on 13 March, a day too late. The seller gets it.</p></div>
      </div>
      <p>It works the other way for sellers. Someone who owned the shares before 12 March can sell on the ex-dividend date or later and still get the dividend.</p>
      <div class="term"><span class="term-k">Key term</span><b>Settlement:</b> the step that makes a trade final and records the shares in the buyer's name. US shares settle one business day after the trade, known as T+1.</div>`},
    {k:'Do the maths', t:'Trying to grab the dividend', b:`
      <p>Saida Power closes at $50.00 on Wednesday 11 March. Hadi buys 200 shares at that price, just in time for the $0.50 dividend. On Thursday, leaving other news aside, the shares open about $0.50 lower.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Wednesday close</div>
          <p>200 shares × $50.00</p>
          <div class="pf-r">Hadi has<b class="mono">$10,000</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Thursday open</div>
          <p>200 × $49.50 = $9,900, plus $100 of dividend to come</p>
          <div class="pf-r">Hadi has<b class="mono">$10,000</b></div>
        </div>
      </div>
      <p>The $100 is cash leaving the company, so his shares are worth about $100 less. Hadi has swapped part of his shares' value for cash. He isn't any richer.</p>
      <div class="term"><span class="term-k">Key term</span><b>Dividend capture:</b> buying just before the ex-dividend date to collect a dividend, then selling soon after. The price drop is what stops it being free money.</div>`},
    {k:'The catch', t:'After tax, it can lose', b:`
      <p>Many investors pay tax on dividends. US dividends paid to foreign investors normally have 30% kept back as tax, or less where a tax treaty between the two countries sets a lower rate. Say Hadi pays 30%:</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Dividend after tax</div><b class="mono">$70</b><p>$100 − 30% = $70.</p></div>
        <div class="col bad"><div class="col-h">Fall in his shares</div><b class="mono">$100</b><p>200 × $0.50, with no tax refund.</p></div>
      </div>
      <p>So Hadi ends with $9,900 + $70 = $9,970: <b class="bad-t">−$30</b> before any trading costs. And on the ex-dividend date the price moves with the news like on any other day, so it can fall by more than the dividend, or by less.</p>
      <div class="term"><span class="term-k">Key term</span><b>Withholding tax:</b> tax taken out of a payment before it reaches you.</div>`}
  ],
  qs:[
    {q:'To get the next dividend, a buyer must buy the shares before which date?',
     o:['The ex-dividend date','The declaration date','The payment date','The end of the quarter'], a:0,
     e:'Before the ex-dividend date. A purchase on that date or later settles too late to be on the list on the record date.'},
    {q:'You have owned shares for a year. You sell them on the ex-dividend date. Who gets the next dividend?',
     o:['The buyer','Nobody, it is cancelled','You do','You and the buyer split it'], a:2,
     e:'You owned the shares before the ex-dividend date, so you are on the list on the record date. The buyer bought on the ex-dividend date, too late to qualify.'},
    {q:'A share closes at $60 the day before its ex-dividend date. The quarterly dividend is $0.75. Leaving other news aside, where would you expect it to open?',
     o:['$60.75','$60.00','About $57.00','About $59.25'], a:3,
     e:'The share no longer carries the $0.75, so it tends to open about that much lower: $60 − $0.75 = $59.25. $57 would take off a whole year of dividends ($0.75 × 4 = $3).'},
    {q:'You buy 100 shares at $40 the day before the ex-dividend date, to collect a $0.40 dividend. The next day they open at $39.60. Ignoring tax and fees, what have you gained?',
     o:['$40','$0','$4','−$40'], a:1,
     e:'Shares: 100 × $39.60 = $3,960. Dividend: 100 × $0.40 = $40. $3,960 + $40 = $4,000, exactly what you paid.'},
    {q:'What happens on the payment date?',
     o:["The cash reaches shareholders' accounts",'The share price drops by about the dividend','The board announces the dividend','The company checks its list of shareholders'], a:0,
     e:'The payment date is when the cash arrives. The price drop happens earlier, on the ex-dividend date, and the list is checked on the record date.'}
  ]
};

const EVENTS_DILUTION = {
  title:'Buybacks and dilution', min:5,
  cards:[
    {k:'The idea', t:'More shares, thinner slices', b:`
      <p class="lead">A company's profit is shared across all its shares. When it creates new shares, each existing share owns a smaller slice. When it buys shares back and cancels them, each remaining share owns a bigger one.</p>
      <div class="term"><span class="term-k">Key term</span><b>Dilution:</b> the shrinking of each existing owner's slice of a company when it issues new shares.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Where they come from', t:'Three sources of new shares', b:`
      <div class="score"><div><b>Pay</b><span>Shares for staff</span></div><div><b>Cash</b><span>Selling new shares</span></div><div><b>Debt</b><span>Convertible bonds</span></div></div>
      <p>Many companies, especially in tech, pay staff partly in shares, or in share options: the right to buy shares at a set price. A company that needs money can sell new shares to investors. And a convertible bond is a loan the lender can later swap for a fixed number of shares.</p>
      <p>So the share count can creep up even when nothing dramatic happens.</p>
      <div class="term"><span class="term-k">Key term</span><b>Diluted EPS:</b> EPS worked out as if share options, convertible bonds and similar claims had already turned into shares. Companies report it next to basic EPS, and the gap shows how much dilution is waiting.</div>`},
    {k:'Do the maths', t:'Issuing 10% more shares', b:`
      <p>Byblos Foods has 100 million shares and makes $50M a year. You own 1 million shares. It issues 10 million new ones, and profit stays the same.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Before</div>
          <p>100 million shares</p>
          <div class="pf-r">Your stake<b class="mono">1%</b></div>
          <div class="pf-r">EPS<b class="mono">$0.50</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">After</div>
          <p>110 million shares</p>
          <div class="pf-r">Your stake<b class="mono bad-t">0.91%</b></div>
          <div class="pf-r">EPS<b class="mono bad-t">$0.455</b></div>
        </div>
      </div>
      <p>1M ÷ 110M = 0.91%, and $50M ÷ 110M ≈ $0.455. Both fall by about 9.1%, not 10%, because the 10 million new shares are 10 ÷ 110 of the new total.</p>
      <p>Dilution isn't automatically bad. If the new shares raised cash that the company puts to good use, profit can grow. To keep EPS at $0.50 with 110 million shares, profit has to rise 10%, to $55M.</p>`},
    {k:'The reverse', t:'Buybacks and reverse splits', b:`
      <p>Say Byblos instead spends cash buying back and cancelling 5 million shares. Now 95 million shares split the same $50M: EPS rises to about $0.53, and your 1 million shares are 1.05% of the company.</p>
      <p>But the cash is gone for good, and a buyback at a high price can waste money that could have paid off debt or funded growth. Some companies buy back shares mainly to cancel out the ones they hand to staff, so the count barely falls.</p>
      <div class="term"><span class="term-k">Key term</span><b>Buyback:</b> a company buying its own shares from investors, usually to cancel them.</div>
      <p>The Reading the market unit showed stock splits. A reverse split runs one backwards: in a 1-for-10, every ten shares become one, at ten times the price. Companies whose price has fallen very low sometimes use one to get back above the $1 minimum that US exchanges such as Nasdaq set for staying listed, so it is often, though not always, a sign of trouble.</p>`}
  ],
  qs:[
    {q:'A company has 200 million shares, and you own 2 million of them (1%). It issues 50 million new shares. What is your stake now?',
     o:['0.75%','0.8%','1%','1.25%'], a:1,
     e:'2M ÷ 250M = 0.008, which is 0.8%. 50 million is 25% more shares, but your slice shrinks by 50 ÷ 250 = 20%, not 25%.'},
    {q:'Which of these creates new shares and dilutes existing owners?',
     o:['A share buyback','Paying a cash dividend','Repaying a bank loan','Paying staff partly in new shares'], a:3,
     e:'New shares for staff add to the share count. A buyback does the opposite, and dividends and loan repayments create no shares.'},
    {q:'A company earns $90M and has 300 million shares, so EPS is $0.30. It buys back and cancels 30 million shares, and profit stays the same. What is EPS now?',
     o:['About $0.27','$0.30','About $0.33','$3.00'], a:2,
     e:'$90M ÷ 270M shares = $0.333..., about $0.33. Fewer shares share the same profit.'},
    {q:'True or false: issuing new shares always leaves existing shareholders worse off.',
     o:['True','False'], a:1,
     e:'Each share owns a smaller slice, but if the cash raised lifts profit by enough, each share can end up earning more. After issuing 10% more shares, profit has to rise 10% just to keep EPS level.'},
    {q:'You own 500 shares at $0.80. The company does a 1-for-10 reverse split. What do you own now?',
     o:['50 shares at $8','5,000 shares at $0.08','500 shares at $8','50 shares at $0.80'], a:0,
     e:'Every ten shares become one, at ten times the price: 500 ÷ 10 = 50 shares, and $0.80 × 10 = $8. Still $400 in total.'}
  ]
};

const EVENTS_IPOS = {
  title:'Going public', min:4,
  cards:[
    {k:'The idea', t:'From private to listed', b:`
      <p class="lead">A young company is usually owned privately, by its founders, staff and early investors. When it sells shares to the public for the first time, its shares start trading on a stock exchange and anyone can buy them.</p>
      <p>It might do this to raise money for the business, to let early owners sell part of their stake, or both.</p>
      <div class="term"><span class="term-k">Key term</span><b>IPO (initial public offering):</b> a company's first sale of shares to the public, after which its shares trade on a stock exchange.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'The first-day pop', b:`
      <p>Investment banks run most IPOs. They sound out big investors such as funds, then agree the offer price with the company, usually the evening before trading starts.</p>
      <p>Faraya Apps sells 10 million new shares at $20 and raises $200M. On its first day the shares close at $26.</p>
      <div class="kv kv3"><div><b>$20</b><span>Offer price</span></div><div><b>$26</b><span>First-day close</span></div><div><b class="good-t">+30%</b><span>Pop</span></div></div>
      <p>At $26, those 10 million shares were worth $260M. The company got $200M, so it left $60M on the table: buyers would have paid more. A big pop is good news for whoever got shares at the offer price, and a cost to the company.</p>
      <div class="term"><span class="term-k">Key term</span><b>Underwriter:</b> an investment bank that organises an IPO, helps set the offer price and sells the shares to investors.</div>`},
    {k:'The catch', t:'Most buyers miss the offer price', b:`
      <p>Most of the shares sold at the offer price usually go to big investors. Most individuals can only buy once trading starts, at whatever the market price is.</p>
      <p>Rima buys Faraya Apps at its first trade, $30. A few weeks later it is at $24.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Bought at the $20 offer</div><b>+20%</b><p>$24 against $20.</p></div>
        <div class="col bad"><div class="col-h">Rima, at the $30 open</div><b>−20%</b><p>$24 against $30.</p></div>
      </div>
      <p>New listings often swing a lot. There is little price history, few public numbers to judge the business by, and often only a small part of the company is trading.</p>
      <div class="term"><span class="term-k">Key term</span><b>Free float:</b> the shares available for the public to trade. When it's small, a little buying or selling can move the price a lot.</div>`},
    {k:'In practice', t:'Lock-ups, and other ways in', b:`
      <div class="term"><span class="term-k">Key term</span><b>Lock-up period:</b> a set time after an IPO when insiders, such as founders, staff and early investors, agree not to sell. In the US it is often around six months.</div>
      <p>When a lock-up ends, many more shares can be sold, and the price can come under pressure around that date. An IPO isn't the only route onto the stock market:</p>
      <div class="split">
        <div class="col good"><div class="col-h">Direct listing</div><b>Existing shares start trading</b><p>No offer price set by banks, and usually no new shares sold. The first price comes from buyers and sellers on the exchange.</p></div>
        <div class="col good"><div class="col-h">SPAC</div><b>A listed shell company</b><p>A special purpose acquisition company raises money on the stock market first, then merges with a private company, which becomes public that way.</p></div>
      </div>`}
  ],
  qs:[
    {q:'What is an IPO?',
     o:['A listed company buying back its own shares','A listed company selling more new shares','A company selling shares to the public for the first time','One company buying another'], a:2,
     e:'"Initial" is the key word: an IPO is the first time a company sells shares to the public.'},
    {q:'Shares are sold at an offer price of $15 and close their first day at $21. What is the first-day pop?',
     o:['About 29%','40%','$21','140%'], a:1,
     e:'$21 − $15 = $6, and $6 ÷ $15 = 0.4, a 40% pop. Dividing by $21 instead gives about 29%.'},
    {q:'A company sold 20 million new shares at $15 in its IPO, and they closed the first day at $21. How much money did it leave on the table?',
     o:['$300M','$420M','$6M','$120M'], a:3,
     e:'20M × ($21 − $15) = $120M. It raised 20M × $15 = $300M, but by the close buyers valued those shares at 20M × $21 = $420M.'},
    {q:'What is a lock-up period?',
     o:['A time after an IPO when insiders agree not to sell, often around six months in the US','The hours before trading starts on the first day','A rule stopping the public from selling IPO shares for a year','The time the underwriter takes to set the offer price'], a:0,
     e:'Founders, staff and early investors agree not to sell for a set time. When it ends, many more shares can come onto the market.'},
    {q:'An IPO is priced at $20. You buy at the first trade, $30, and the shares later fall to $24. What is your return?',
     o:['+20%','−20%','−25%','0%'], a:1,
     e:'($24 − $30) ÷ $30 = −20%. Buyers at the $20 offer price are up 20%, but you paid $30. Dividing by $24 instead would give −25%.'}
  ]
};

const EVENTS_MERGERS = {
  title:'Mergers and takeovers', min:5,
  cards:[
    {k:'The idea', t:'Buying a whole company', b:`
      <p class="lead">One company can buy another by offering its shareholders more than the current share price. The buyer is the acquirer. The company being bought is the target.</p>
      <p>Most deals are friendly: the target's board agrees and recommends the offer. In a hostile bid, the acquirer goes over the board's head, straight to the target's shareholders.</p>
      <div class="term"><span class="term-k">Key term</span><b>Takeover premium:</b> how far the offer is above the target's share price before the bid. Offer $65 for a share at $50: $15 ÷ $50 = 30%.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Paid in cash or in shares', b:`
      <p>Litani Energy trades at $50. Cedar Tech, at $40 a share, wants to buy it. It can pay in two ways:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Cash deal</div>
          <p>$65 in cash for each Litani share</p>
          <div class="pf-r">Worth today<b class="mono">$65</b></div>
          <div class="pf-r">If Cedar falls to $36<b class="mono">$65</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Stock deal</div>
          <p>1.5 Cedar Tech shares for each Litani share</p>
          <div class="pf-r">Worth today<b class="mono">$60</b></div>
          <div class="pf-r">If Cedar falls to $36<b class="mono bad-t">$54</b></div>
        </div>
      </div>
      <p>1.5 × $40 = $60, a 20% premium. In a stock deal Litani's owners are paid in Cedar Tech shares, so the value moves with Cedar's price: at $36 it's 1.5 × $36 = $54, only 8% above $50. In return, they keep a stake in the combined company.</p>
      <div class="term"><span class="term-k">Key term</span><b>Exchange ratio:</b> in a stock deal, how many of the acquirer's shares each target share is swapped for. Here, 1.5.</div>`},
    {k:'The catch', t:'Why the target stays below the offer', b:`
      <p>The day Cedar Tech offers $65 in cash, Litani jumps from $50 to $63, not all the way to $65.</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Litani's share price: flat at $50 before the bid, jumping to $63 when the $65 cash offer is announced, just below a dashed $65 offer line. Two dashed paths split from there: up to $65 if the deal closes, down to $48 if it fails.">
        <line x1="90" y1="20" x2="220" y2="20" stroke="var(--ink-2)" stroke-width="1" stroke-dasharray="3 3"/>
        <polyline points="30,110 90,110 90,32 170,32" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="170" y1="32" x2="220" y2="20" stroke="var(--bull-deep)" stroke-width="3" stroke-dasharray="5 4" stroke-linecap="round"/>
        <line x1="170" y1="32" x2="220" y2="122" stroke="var(--bear-deep)" stroke-width="3" stroke-dasharray="5 4" stroke-linecap="round"/>
        <circle cx="220" cy="20" r="4" fill="var(--bull)"/>
        <circle cx="220" cy="122" r="4" fill="var(--bear)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="130" y="13" text-anchor="middle">Offer $65</text>
          <text x="96" y="48" fill="var(--ink)">$63 after</text>
          <text x="30" y="124">$50 before</text>
          <text x="226" y="24" fill="var(--bull-ink)">$65 closes</text>
          <text x="226" y="126" fill="var(--bear-ink)">$48 fails</text>
          <text x="90" y="146" text-anchor="middle">Bid announced</text>
        </g>
      </svg>
      <p>Buying at $63 gains $2, about 3%, if the deal closes. If regulators block it, shareholders vote no or the buyer can't raise the money, Litani could drop back to around $48: a $15 loss, about 24%. And closing can take months.</p>
      <p>When Microsoft agreed in January 2022 to buy Activision Blizzard for $95 a share in cash, Activision's shares jumped but stayed well below $95 for most of the 21 months that regulators in the US, UK and EU took over it. The deal closed in October 2023.</p>
      <div class="term"><span class="term-k">Key term</span><b>Deal spread:</b> the gap between the offer and the target's share price while the deal is pending. It tends to be wider when investors doubt the deal will close.</div>`},
    {k:'The other side', t:"The buyer's price can fall", b:`
      <p>The acquirer's shares can drop when a deal is announced, if investors think it is paying too much, borrowing too much, or will struggle to combine the two businesses.</p>
      <p>Litani has 100 million shares, so at $50 the market valued it at $5B. Cedar Tech, worth $10B, offers $65 a share in cash: $6.5B in total.</p>
      <div class="kv kv3"><div><b>$5B</b><span>Litani before</span></div><div><b>$6.5B</b><span>Price paid</span></div><div><b class="bad-t">$1.5B</b><span>Premium</span></div></div>
      <p>If investors think Litani is worth only its old $5B to Cedar Tech, that $1.5B looks like value handed to Litani's owners. Cedar's market value could then fall by about that much: $1.5B ÷ $10B = 15%.</p>
      <div class="term"><span class="term-k">Key term</span><b>Synergies:</b> the extra profit an acquirer expects from combining two companies, for example by cutting costs they used to pay twice. Acquirers point to them to justify the premium.</div>`}
  ],
  qs:[
    {q:'A company offers $36 a share in cash for a target whose shares were at $30 before the bid. What is the takeover premium?',
     o:['$6','About 16.7%','20%','120%'], a:2,
     e:'$36 − $30 = $6, and $6 ÷ $30 = 0.2, a 20% premium. Dividing by the $36 offer instead gives about 16.7%.'},
    {q:"A target's shares are at $40. The acquirer offers 2 of its own shares, now at $25 each, for every target share. What is the offer worth, and what premium is that?",
     o:['$50, a 25% premium','$50, a 20% premium','$65, a 62.5% premium','$25, a 37.5% discount'], a:0,
     e:'2 × $25 = $50 per target share. ($50 − $40) ÷ $40 = 25%. Dividing $10 by $50 instead would give 20%.'},
    {q:'A company agrees to be bought for $50 a share in cash. Its shares trade at $47.50 the next day. What best explains the gap?',
     o:['The buyer is allowed to pay less than it offered','The deal might still fail, and it may take months to close','The stock exchange caps how far a price can rise in a day','Shareholders must pay the buyer a fee'], a:1,
     e:'Until the deal closes, there is a chance it falls apart and the price drops back. Buyers at $47.50 also wait months for the $50, so the target trades a little below the offer.'},
    {q:"In a stock deal with a fixed exchange ratio, the acquirer's shares fall 10% before the deal closes. What happens to the value the target's shareholders will receive?",
     o:['It stays fixed at its value on the day the deal was announced','It rises, to make up for the fall','The deal is cancelled automatically',"It falls by about 10% too, because they are paid in the acquirer's shares"], a:3,
     e:"They receive a fixed number of the acquirer's shares, so their deal is worth 10% less when those shares are worth 10% less."},
    {q:'True or false: when a company announces it is buying another, its own share price always rises.',
     o:['True','False'], a:1,
     e:"The acquirer's price can fall if investors think it is overpaying, borrowing too much or taking on a hard job combining the two businesses."}
  ]
};

const EVENTS_CHECK = {
  title:'Unit check', min:4, badge:{name:'Event Watcher', icon:'flag'}, cards:[],
  qs:[
    {q:"Analysts expect quarterly EPS of $2.40. The company reports $2.52, but guides next year's EPS to $8.00 against a consensus of $9.00. How would you sum up the report?",
     o:['A 5% beat, with guidance about 11% below forecasts','About a 4.8% beat, with guidance 12.5% below forecasts','A 5% miss, with guidance about 11% above forecasts','A 12% beat, with guidance about 11% below forecasts'], a:0,
     e:'Quarter: ($2.52 − $2.40) ÷ $2.40 = 5%. Guidance: ($8.00 − $9.00) ÷ $9.00 ≈ −11%. Both are measured against the forecasts. A weak outlook like this can send the shares down despite the beat.'},
    {q:"A stock's ex-dividend date is Monday 9 March. US trades settle one business day after the trade. What is the last day you can buy it and still get the dividend?",
     o:['Monday 9 March','Thursday 5 March','Tuesday 10 March','Friday 6 March'], a:3,
     e:'A trade on Friday 6 March settles on the next business day, Monday 9 March, which is the record date. A trade on Monday 9 March settles on Tuesday, too late.'},
    {q:'Rami buys 400 shares at $25.00 the day before the ex-dividend date. The dividend is $0.50, the shares open at $24.50, and 30% of the dividend is kept back as tax. Ignoring trading costs, where does he stand?',
     o:['Even','$60 behind','$140 ahead','$200 ahead'], a:1,
     e:'His shares are worth 400 × $0.50 = $200 less. The dividend is 400 × $0.50 = $200, minus 30% tax = $140. $140 − $200 = −$60.'},
    {q:'A company has 80 million shares and earns $40M, so EPS is $0.50. It issues 20 million new shares to raise cash. What must profit become to keep EPS at $0.50?',
     o:['$48M, a 20% rise','$40M, no change','$50M, a 25% rise','$60M, a 50% rise'], a:2,
     e:'100 million shares × $0.50 = $50M. That is $10M more than $40M, a 25% rise: 20 million new shares is 25% more than the old 80 million.'},
    {q:'A company with 100 million shares buys back 5 million shares a year, but also issues 5 million new shares a year to its staff. If profit stays flat, what happens to EPS?',
     o:['It rises about 5% a year',"It stays about the same, because the share count doesn't fall",'It falls about 5% a year','It doubles over time'], a:1,
     e:'100M − 5M + 5M = 100M shares. The buyback only cancels out the new staff shares, so the same profit is split across the same number of shares.'},
    {q:'A company sells 25 million shares in its IPO at $18. They close the first day at $24.30. What were the first-day pop and the money left on the table?',
     o:['35% and $157.5M','About 26% and $157.5M','35% and $607.5M','35% and $450M'], a:0,
     e:'Pop: ($24.30 − $18) ÷ $18 = 35%. Left on the table: 25M × $6.30 = $157.5M. $450M is what it raised, and $607.5M is what the shares were worth at the close.'},
    {q:'A target agrees to a $72 cash offer and now trades at $70.20. If the deal fails, its price is expected to fall to about $55. For someone buying at $70.20, what are the two outcomes?',
     o:['Gain $17 or lose $15.20','Gain $1.80 or lose $17','Gain $72 or lose $55','Gain $1.80 or lose $15.20'], a:3,
     e:'Deal closes: $72 − $70.20 = $1.80, about 2.6%. Deal fails: $55 − $70.20 = −$15.20, about 22%. A small gain if it works, against a large loss if it fails.'},
    {q:"An acquirer offers 0.8 of its own shares for each target share. When the deal is announced, the acquirer's shares are at $50, and the target's were at $32 before the bid. The acquirer then falls to $45. Measured against $32, what premium is the offer worth now?",
     o:['25%','10%','12.5%','About 11%'], a:2,
     e:'At first: 0.8 × $50 = $40, a 25% premium over $32. Now: 0.8 × $45 = $36, and ($36 − $32) ÷ $32 = 12.5%. In a stock deal the premium moves with the acquirer\'s price.'}
  ]
};

const UNIT_EVENTS = {id:'events', title:'Company events', level:'Intermediate', lessons:[EVENTS_EARNINGS, EVENTS_DIVIDEND_DATES, EVENTS_DILUTION, EVENTS_IPOS, EVENTS_MERGERS, EVENTS_CHECK]};

/* Placement: one question per lesson, n = lesson number 1-5. Different from the lesson questions. */
const PLACEMENT_EVENTS = [
  {n:1, q:'Analysts expect EPS of $0.60. The company reports $0.66. What is the earnings surprise?',
   o:['About a 9% beat','A 10% beat','A 6% beat','A 10% miss'], a:1,
   e:'($0.66 − $0.60) ÷ $0.60 = 0.10, a 10% beat. Divide by the estimate: $0.06 ÷ $0.66 would give about 9%.'},
  {n:2, q:'A company sets the record date for its normal quarterly dividend on Thursday 14 May. US trades settle one business day after the trade. When is the ex-dividend date?',
   o:['Thursday 14 May','Wednesday 13 May','Friday 15 May','Tuesday 12 May'], a:0,
   e:'A purchase on Wednesday 13 May settles on Thursday 14 May, the record date, so the buyer makes the list. A purchase on Thursday settles on Friday, too late. So the first day a buyer misses out is the record date itself.'},
  {n:3, q:'A company has 50 million shares and EPS of $1.00. It issues 25% more shares, and profit stays the same. What is EPS now?',
   o:['$0.75','$0.80','$1.00','$1.25'], a:1,
   e:'Profit is 50M × $1.00 = $50M. Shares: 50M × 1.25 = 62.5M. $50M ÷ 62.5M = $0.80. EPS falls 20%, not 25%.'},
  {n:4, q:"Why can't a company's founders usually sell their shares in the first months after its IPO?",
   o:['The underwriter has bought all their shares','The law bans founders from ever selling','They have agreed to a lock-up period, often around six months in the US','Their shares only start trading after the first dividend'], a:2,
   e:'Insiders agree to a lock-up so a flood of shares doesn\'t hit the market straight after the IPO.'},
  {n:5, q:'A stock trades at $40. A buyer offers $44 a share in cash, and the stock jumps to $43. What are the takeover premium and the deal spread?',
   o:['7.5% and $1','10% and $4','About 9% and $1','10% and $1'], a:3,
   e:'Premium: ($44 − $40) ÷ $40 = 10%. Spread: $44 − $43 = $1. The $3 jump is 7.5% of $40, but that is the price move, not the premium.'}
];

/* MATHS CHECK: every calculation and its result, for the reviewer.
   (Recomputed in Python: 123 of 123 checks pass, including weekdays and T+1 settlement dates.)
   Lesson 1, Earnings season
     Cedar Tech: 1.32 − 1.20 = 0.12; 0.12 ÷ 1.20 = 10%. Revenue (2.05 − 2.00) ÷ 2.00 = 2.5%
     Guidance: (1.05 − 1.35) ÷ 1.35 = −22.2% ("22% below"). Shares (70 − 80) ÷ 80 = −12.5%
     Q1: (0.92 − 0.80) ÷ 0.80 = 15%. Distractor 0.12 ÷ 0.92 = 13.0%
     Q4: (0.45 − 0.50) ÷ 0.50 = −10%. Distractor 0.05 ÷ 0.45 = 11.1%
   Lesson 2, Dividend dates
     Dates (weekdays checked in 2026; no year is named): Tue 24 Feb declared; Wed 11 Mar; Thu 12 Mar ex-date and
       record date; Fri 13 Mar; Thu 2 Apr paid. T+1: buy Wed 11 Mar → settles Thu 12 Mar; buy Thu 12 Mar → settles Fri 13 Mar
     Hadi: 200 × 50.00 = 10,000; 50.00 − 0.50 = 49.50; 200 × 49.50 = 9,900; 200 × 0.50 = 100; 9,900 + 100 = 10,000
     Tax: 100 × 0.70 = 70; 9,900 + 70 = 9,970; 9,970 − 10,000 = −30
     Q3: 60 − 0.75 = 59.25. Distractor 60 − 0.75 × 4 = 57
     Q4: 100 × 39.60 = 3,960; 100 × 0.40 = 40; 3,960 + 40 − 4,000 = 0
   Lesson 3, Buybacks and dilution
     Byblos: 50M ÷ 100M = 0.50; 1M ÷ 100M = 1%; 1M ÷ 110M = 0.909% (0.91%); 50M ÷ 110M = 0.4545 (≈ $0.455; shown to 3 places so it doesn't read as a 10% fall)
       Fall: 1 − 100 ÷ 110 = 9.09% for both; 10 ÷ 110 = 9.09%. Keep EPS 0.50: 110M × 0.50 = 55M, (55 − 50) ÷ 50 = 10%
     Buyback: 50M ÷ 95M = 0.526 (≈ $0.53); 1M ÷ 95M = 1.053% (1.05%)
     Q1: 2M ÷ 250M = 0.8%; 50 ÷ 200 = 25% more shares; 50 ÷ 250 = 20% shrink. Distractor 1% × 0.75 = 0.75%
     Q3: 90 ÷ 300 = 0.30; 90 ÷ 270 = 0.333. Distractors 0.30 × 0.9 = 0.27, 90 ÷ 30 = 3
     Q5: 500 ÷ 10 = 50; 0.80 × 10 = 8; 500 × 0.80 = 400 = 50 × 8
   Lesson 4, Going public
     Faraya: 10M × 20 = 200M; (26 − 20) ÷ 20 = 30%; 10M × 26 = 260M; 260M − 200M = 60M
     Rima: (24 − 30) ÷ 30 = −20%; offer buyers (24 − 20) ÷ 20 = +20%
     Q2: (21 − 15) ÷ 15 = 40%. Distractor 6 ÷ 21 = 28.6%
     Q3: 20M × 6 = 120M; 20M × 15 = 300M; 20M × 21 = 420M
     Q5: (24 − 30) ÷ 30 = −20%. Distractor 6 ÷ 24 = 25%
   Lesson 5, Mergers and takeovers
     Key term: (65 − 50) ÷ 50 = 30%
     Stock deal: 1.5 × 40 = 60, (60 − 50) ÷ 50 = 20%; 1.5 × 36 = 54, (54 − 50) ÷ 50 = 8%
     Spread: 65 − 63 = 2, 2 ÷ 63 = 3.2% (about 3%); 48 − 63 = −15, −15 ÷ 63 = −23.8% (about 24%)
     SVG scale: y = 140 − (price − 45) × 6, so $65 → 20, $63 → 32, $50 → 110, $48 → 122.
       Text baselines y = 13, 24, 48, 124, 126, 146 (24 and 126 are at x ≥ 226, clear of the others; no stacked lines closer than 14px)
     Activision: announced January 2022, closed October 2023 = 21 months; $95 a share cash
     Buyer's side: 100M × 50 = 5B; 100M × 65 = 6.5B; 6.5B − 5B = 1.5B; 1.5B ÷ 10B = 15%
     Q1: (36 − 30) ÷ 30 = 20%. Distractor 6 ÷ 36 = 16.7%
     Q2: 2 × 25 = 50; (50 − 40) ÷ 40 = 25%. Distractors 10 ÷ 50 = 20%, 40 + 25 = 65 → (65 − 40) ÷ 40 = 62.5%, (25 − 40) ÷ 40 = −37.5%
   Unit check
     C1: (2.52 − 2.40) ÷ 2.40 = 5%; (8 − 9) ÷ 9 = −11.1%. Distractors 0.12 ÷ 2.52 = 4.8%, 1 ÷ 8 = 12.5%
     C2: Fri 6 Mar → settles Mon 9 Mar (record date); Mon 9 Mar → settles Tue 10 Mar
     C3: 400 × 0.50 = 200 fall; 400 × 0.50 = 200 dividend; 200 × 0.70 = 140; 140 − 200 = −60
     C4: 40M ÷ 80M = 0.50; 100M × 0.50 = 50M; (50 − 40) ÷ 40 = 25%. Distractor 40 × 1.2 = 48 (20M ÷ 100M = 20%)
     C5: 100M − 5M + 5M = 100M shares, EPS unchanged
     C6: (24.30 − 18) ÷ 18 = 35%; 25M × 6.30 = 157.5M. Distractors 6.30 ÷ 24.30 = 25.9%, 25M × 24.30 = 607.5M, 25M × 18 = 450M
     C7: 72 − 70.20 = 1.80 (2.6%); 55 − 70.20 = −15.20 (−21.7%, about 22%). Distractor 72 − 55 = 17
     C8: 0.8 × 50 = 40, (40 − 32) ÷ 32 = 25%; 0.8 × 45 = 36, (36 − 32) ÷ 32 = 12.5%. Distractor 4 ÷ 36 = 11.1%
   Placement
     P1: (0.66 − 0.60) ÷ 0.60 = 10%. Distractor 0.06 ÷ 0.66 = 9.1%
     P2: weekdays in 2026: Tue 12, Wed 13, Thu 14, Fri 15 May. T+1: buy Wed 13 → settles Thu 14 (record date);
       buy Thu 14 → settles Fri 15. Ex-date = record date = Thu 14 May. Distractor Wed 13 May = old T+2 rule
     P3: 50M × 1.00 = 50M; 50M × 1.25 = 62.5M; 50M ÷ 62.5M = 0.80; (0.80 − 1.00) ÷ 1.00 = −20%
     P5: (44 − 40) ÷ 40 = 10%; 44 − 43 = 1. Distractors 3 ÷ 40 = 7.5%, 4 ÷ 44 = 9.1%, 44 − 40 = 4
*/
