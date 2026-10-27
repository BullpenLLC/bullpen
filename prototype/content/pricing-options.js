/* ---------- Pricing options ---------- */
const U4_TIME_VALUE = {
  title:'Intrinsic and time value', min:4,
  cards:[
    {k:'The idea', t:'Two parts to every premium', b:`
      <p class="lead">Most options cost more than their intrinsic value, the amount you'd get by exercising today. The extra is what buyers pay for the time left before expiry.</p>
      <p><b>Premium = intrinsic value + time value</b></p>
      <div class="term"><span class="term-k">Key term</span><b>Time value:</b> the part of the premium above intrinsic value, also called extrinsic value. It's the price of the chance that the option becomes worth more before it expires.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Splitting an in-the-money call', b:`
      <p>Cedar Tech trades at $55. A $50 call that expires in two months costs $7.</p>
      <div class="kv kv3"><div><b>$7</b><span>Premium</span></div><div><b>$5</b><span>Intrinsic value</span></div><div><b class="good-t">$2</b><span>Time value</span></div></div>
      <p>Exercising today gets you a $55 share for $50, so $55 − $50 = $5 is intrinsic value. The other $7 − $5 = $2 is time value.</p>
      <p>Per contract that's $700 in total: $500 of intrinsic value and $200 of time value.</p>`},
    {k:'Out of the money', t:'All of the price is time', b:`
      <p>Same stock, same expiry. A $60 call costs about $2.35. Exercising it would mean paying $60 for a $55 share, so its intrinsic value is $0. Every cent of its premium is time value.</p>
      <p>Time value is usually largest at the money, where the outcome is most uncertain. Time value of Cedar Tech calls, all with the same expiry:</p>
      <div class="score"><div><b>$0.75</b><span>$45 call, deep in</span></div><div><b class="good-t">$4.20</b><span>$55 call, at the money</span></div><div><b>$1.20</b><span>$65 call, far out</span></div></div>
      <p>The $45 call costs about $10.75, but $10 of that is intrinsic value.</p>`},
    {k:'At expiry', t:'Time value runs out', b:`
      <p>At expiry there's no time left, so time value is zero. The option is worth exactly its intrinsic value. Back to the $50 call bought for $7 with Cedar Tech at $55:</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Stock still $55</div><b>Call worth $5</b><p>The buyer loses $2 a share, or $200 a contract, even though the stock didn't fall.</p></div>
        <div class="col good"><div class="col-h">Stock at $62</div><b>Call worth $12</b><p>$12 − $7 = $5 profit a share, or $500 a contract.</p></div>
      </div>
      <p>The $2 of time value is a cost the buyer has to win back. That's why the stock has to finish above $57, not just above $55, for this call to make money.</p>`}
  ],
  qs:[
    {q:'A stock trades at $42. A $40 call on it costs $3.50. How much of the premium is time value?',
     o:['$1.50','$2.00','$3.50','$5.50'], a:0,
     e:'Intrinsic value is $42 − $40 = $2. Time value is $3.50 − $2 = $1.50.'},
    {q:'A stock trades at $30. A $35 put on it costs $6. What is its intrinsic value?',
     o:['$1','$6','$5','$0'], a:2,
     e:'For a put, intrinsic value is strike minus stock price: $35 − $30 = $5. The other $1 is time value.'},
    {q:'A stock trades at $64. A $70 call on it costs $1.20. How much of that is time value?',
     o:['$0','$6','$7.20','All $1.20'], a:3,
     e:'The call is out of the money, so its intrinsic value is $0. The whole premium is time value.'},
    {q:'True or false: on its expiry date, an option is worth only its intrinsic value.',
     o:['True','False'], a:0,
     e:'With no time left, time value is zero. Only intrinsic value remains.'},
    {q:'You pay $4.50 for a $30 call when the stock is at $32. At expiry the stock is still at $32. Ignoring fees, what is your result per contract?',
     o:['$0, since the stock didn\'t move','−$250','−$200','−$450'], a:1,
     e:'At expiry the call is worth $32 − $30 = $2. You paid $4.50, so you lose $2.50 × 100 = $250.'}
  ]
};

const U4_TIME_DECAY = {
  title:'Time decay', min:4,
  cards:[
    {k:'The idea', t:'Time value leaks away', b:`
      <p class="lead">Time value doesn't vanish in one go on expiry day. A little drains out every day, and the drain speeds up as expiry gets close.</p>
      <div class="term"><span class="term-k">Key term</span><b>Time decay:</b> the fall in an option's price that comes only from time passing, with the stock price and everything else unchanged.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'The shape', t:'Slow at first, then fast', b:`
      <p>Take a $50 call on a stock that sits at exactly $50 until expiry. Its whole price is time value. Here's how it drains:</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Curve of the call's price against days left. It starts at $3.46 with 90 days left, is $2.00 with 30 days left and falls to $0 at expiry, dropping more steeply near the end.">
        <line x1="30" y1="128" x2="282" y2="128" stroke="var(--line)" stroke-width="2"/>
        <line x1="196.7" y1="72" x2="196.7" y2="128" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/>
        <polyline points="30.0,24.1 43.9,27.0 57.8,30.1 71.7,33.2 85.6,36.4 99.4,39.7 113.3,43.2 127.2,46.8 141.1,50.5 155.0,54.5 168.9,58.7 182.8,63.2 196.7,68.0 210.6,73.2 224.4,79.0 238.3,85.6 252.2,93.3 257.8,97.0 263.3,101.1 266.1,103.5 268.9,106.1 271.7,109.0 274.4,112.5 275.8,114.6 277.2,117.0 278.6,120.2 279.3,122.5 280.0,128.0" fill="none" stroke="var(--bear)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="30" cy="24.1" r="4" fill="var(--bear-deep)"/><circle cx="196.7" cy="68" r="4" fill="var(--bear-deep)"/><circle cx="280" cy="128" r="4" fill="var(--bear-deep)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="38" y="18" fill="var(--ink)">$3.46</text><text x="204" y="62" fill="var(--ink)">$2.00</text><text x="286" y="124" fill="var(--ink)">$0</text>
          <text x="30" y="146">90 days left</text><text x="196.7" y="146" text-anchor="middle">30 days</text><text x="280" y="146" text-anchor="end">Expiry</text>
        </g>
      </svg>
      <p>From 90 to 60 days left, it loses about $0.63. Over the last 30 days it loses all $2.00, more than three times as much. (Prices from a standard pricing model, with nothing but time changing.)</p>`},
    {k:'Do the maths', t:'Theta: the daily cost', b:`
      <p>With 14 days left, the same call costs about $1.37 and has a theta of about −0.05. If nothing else changes, by tomorrow it would be worth about $1.32.</p>
      <div class="term"><span class="term-k">Key term</span><b>Theta:</b> roughly how much an option's price drops in one day if nothing else changes. It's quoted per share, so multiply by 100 for a contract.</div>
      <p>A theta of −0.05 means about $5 a day per contract. Theta isn't fixed, though. For this call it grows as expiry nears:</p>
      <div class="kv"><div><b class="bad-t">−0.02</b><span>90 days left</span></div><div><b class="bad-t">−0.03</b><span>30 days</span></div><div><b class="bad-t">−0.05</b><span>14 days</span></div><div><b class="bad-t">−0.07</b><span>7 days</span></div></div>`},
    {k:'The catch', t:'Right, but too slow', b:`
      <p>Time works against buyers: the time value they paid for shrinks every day. It works for sellers, who collected that time value, though sellers carry the risk of a big move against them.</p>
      <p>Say you pay $2.00 for a $50 call with 30 days left, with the stock at $50. You expect a rise, and the stock does climb to $51.50. When it gets there matters:</p>
      <div class="split">
        <div class="col good"><div class="col-h">Rise comes tomorrow</div><b>Call ≈ $2.85</b><p>About +$85 a contract. Plenty of time value is left.</p></div>
        <div class="col bad"><div class="col-h">Rise comes at expiry</div><b>Call = $1.50</b><p>Only intrinsic value is left: −$50 a contract.</p></div>
      </div>
      <p>Same stock, same move, opposite results. An option buyer needs the direction and the timing to work out.</p>`}
  ],
  qs:[
    {q:'An option has a theta of −0.08. If nothing else changes, about how much does one contract lose in a day?',
     o:['$0.08','$0.80','$8','$80'], a:2,
     e:'Theta is per share: $0.08 × 100 shares = about $8 a day.'},
    {q:'For an at-the-money option, when does time value usually drain fastest?',
     o:['In the final weeks before expiry','Right after the option is first listed','At the same pace every day','Only on expiry day itself'], a:0,
     e:'Decay is slow while expiry is far off and speeds up in the last few weeks.'},
    {q:'The stock price and everything else stay the same for a week. Who does time decay help?',
     o:['The option buyer','The option seller','Neither, since the stock didn\'t move','Both equally'], a:1,
     e:'The seller collected the premium, and its time value shrinks each day. That shrinking is the buyer\'s loss.'},
    {q:'You pay $1.50 for a $40 call. At expiry the stock is at $41. Ignoring fees, what is your result per contract?',
     o:['+$100','$0','−$150','−$50'], a:3,
     e:'At expiry the call is worth $41 − $40 = $1. You paid $1.50, so you lose $0.50 × 100 = $50.'},
    {q:'True or false: if the stock doesn\'t move at all, an option buyer at least breaks even.',
     o:['True','False'], a:1,
     e:'Time value drains away even when the stock stands still, so the buyer loses money.'}
  ]
};

const U4_VOLATILITY = {
  title:'Volatility', min:5,
  cards:[
    {k:'The idea', t:'Bigger swings, pricier options', b:`
      <p class="lead">The more a stock is expected to jump around, the more its options cost. That goes for calls and for puts.</p>
      <p>An option buyer can lose no more than the premium, but a big swing can make the option worth many times that. Wider expected swings mean a better chance of a big payout, so sellers charge more.</p>
      <div class="term"><span class="term-k">Key term</span><b>Volatility:</b> how much a stock's price tends to swing up and down. It's usually written as a yearly percentage. A higher number means bigger swings.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Same price, different swings', b:`
      <p>Two made-up stocks both trade at $50. Sannine Foods barely moves. Qadisha Games swings wildly. Here are their $50 calls, both with 30 days left:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Sannine Foods</div>
          <p>Volatility 20%</p>
          <div class="pf-r">$50 call costs<b class="mono">$1.14</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Qadisha Games</div>
          <p>Volatility 60%</p>
          <div class="pf-r">$50 call costs<b class="mono bad-t">$3.43</b></div>
        </div>
      </div>
      <p>Same share price, same strike, same expiry, yet the jumpy stock's call costs about three times as much. Their $50 puts show the same gap.</p>`},
    {k:'Two kinds', t:'Looking back, looking ahead', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Historical volatility</div><b>Looks back</b><p>How much the price actually swung, measured from past prices. Also called realised volatility.</p></div>
        <div class="col good"><div class="col-h">Implied volatility</div><b>Looks ahead</b><p>The size of swings that today's option prices are pricing in.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Implied volatility (IV):</b> the volatility you'd have to plug into a pricing model to get the option's current market price. High IV means expensive options.</div>
      <p>The two can differ a lot. Before big news, IV is often well above the stock's historical volatility, because traders expect a jump.</p>`},
    {k:'The catch', t:'Right direction, still a loss', b:`
      <p>IV often climbs before a known event like an earnings report, then drops sharply once the news is out. Traders call this an IV crush. Litani Power reports tonight:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Before the report</div>
          <p>Stock $50 · IV 80% · 14 days left</p>
          <div class="pf-r">$50 call<b class="mono">$3.10</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">After the report</div>
          <p>Stock $51 · IV 40% · 13 days left</p>
          <div class="pf-r">$50 call<b class="mono bad-t">$2.05</b></div>
        </div>
      </div>
      <p>The stock rose, yet the call lost about $1.05 a share, or $105 a contract. The fall in IV outweighed the $1 rise.</p>
      <div class="term"><span class="term-k">Key term</span><b>Vega:</b> roughly how much an option's price changes when IV moves 1 percentage point, other things equal. This call's vega was about 0.04, so a 40-point drop in IV takes off about $1.60 a share.</div>`}
  ],
  qs:[
    {q:'Two stocks both trade at $80. Their $80 calls expire on the same day. One stock swings far more than the other. Which call costs more?',
     o:['The call on the steadier stock','The call on the more volatile stock','Neither: same price, same strike, same cost','You can\'t tell without their earnings'], a:1,
     e:'Bigger expected swings mean a better chance of a big payout, so that option costs more.'},
    {q:'Traders start expecting bigger swings in a stock. Other things equal, what happens to its put prices?',
     o:['They rise, just like call prices','They fall, because call prices rise','They don\'t change: only calls react','They fall to their intrinsic value'], a:0,
     e:'Higher expected volatility raises the price of both calls and puts.'},
    {q:'What is implied volatility?',
     o:['How much the stock actually moved over the past year','The company\'s own forecast for its share price','The gap between the bid and the ask','The size of swings built into the option\'s current price'], a:3,
     e:'IV is worked out backwards from the option\'s market price. Past moves are historical volatility.'},
    {q:'An option has a vega of 0.12. Implied volatility rises 5 percentage points and nothing else changes. Roughly how much does one contract gain?',
     o:['$0.60','$6','$60','$600'], a:2,
     e:'$0.12 × 5 = $0.60 a share. × 100 shares = about $60 a contract.'},
    {q:'A stock rises after its earnings report, but a call bought the day before has lost value. What is the most likely reason?',
     o:['Implied volatility dropped once the news was out','Calls always lose value after earnings','One day of time decay wiped out the gain','The stock\'s bid-ask spread widened'], a:0,
     e:'IV is often high before earnings and drops sharply after. That drop can outweigh a move in the right direction.'}
  ]
};

const U4_DELTA = {
  title:'Delta', min:5,
  cards:[
    {k:'The idea', t:'How closely the option follows', b:`
      <p class="lead">When the stock moves $1, an option usually moves by less. Delta puts a number on how much.</p>
      <div class="term"><span class="term-k">Key term</span><b>Delta:</b> roughly how much an option's price changes when the stock moves $1, other things equal. Calls run from 0 to 1. Puts run from −1 to 0, because they gain when the stock falls.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'A $1 move', b:`
      <p>Cedar Tech is at $50. Its $50 call and $50 put, 30 days from expiry, both cost $2.00. The call's delta is 0.52 and the put's is −0.48. Then the stock rises $1:</p>
      <div class="kv"><div><b>$2.00</b><span>Call before</span></div><div><b class="good-t">≈$2.52</b><span>Call after</span></div><div><b>$2.00</b><span>Put before</span></div><div><b class="bad-t">≈$1.52</b><span>Put after</span></div></div>
      <p>Call: $2.00 + $0.52 ≈ $2.52, or about +$52 a contract. Put: $2.00 − $0.48 ≈ $1.52, or about −$48 a contract.</p>
      <p>A pricing model puts them at $2.56 and $1.56. Close, but not exact, because delta is an estimate.</p>`},
    {k:'In practice', t:'Where delta sits', b:`
      <p>Deltas of Cedar Tech calls with the stock at $50, all 30 days from expiry:</p>
      <div class="score"><div><b>0.04</b><span>$60 call, far out</span></div><div><b>0.52</b><span>$50 call, at the money</span></div><div><b class="good-t">0.99</b><span>$40 call, deep in</span></div></div>
      <p>Puts mirror this with a minus sign: deep in-the-money puts sit near −1, far out-of-the-money puts near 0.</p>
      <p>Per contract, delta works like a share count. One call with a delta of 0.40 moves roughly like 40 shares: a $1 rise in the stock adds about $0.40 × 100 = $40.</p>`},
    {k:'The limit', t:'Delta moves too', b:`
      <p>Delta works for small moves. As the stock moves, delta itself changes, and the speed of that change is called gamma.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Stock +$1</div><b>Estimate ≈ $2.52</b><p>Model: $2.56. Close enough.</p></div>
        <div class="col bad"><div class="col-h">Stock +$10</div><b>Estimate ≈ $7.20</b><p>Model: $10.08. Delta climbed from 0.52 to 0.97 on the way up.</p></div>
      </div>
      <p>Traders also read delta as rough odds of finishing in the money: a 0.30 delta as roughly a 30% chance. That's a rule of thumb from a model, not a forecast. And finishing in the money isn't the same as making a profit: the stock also has to cover the premium.</p>`}
  ],
  qs:[
    {q:'A call has a delta of 0.60. The stock rises $2. Other things equal, roughly how much does the call\'s price change per share?',
     o:['+$0.30','+$1.20','+$2.00','+$0.60'], a:1,
     e:'0.60 × $2 = about +$1.20 a share.'},
    {q:'A put has a delta of −0.30. The stock rises $1. Roughly what happens to the put\'s price?',
     o:['It falls about $0.30','It rises about $0.30','It falls about $1','It doesn\'t change'], a:0,
     e:'A negative delta means the put moves against the stock. A $1 rise takes off about $0.30.'},
    {q:'Which call is most likely to have a delta near 0.95?',
     o:['One far out of the money','One at the money','One deep in the money','Any call with one day left'], a:2,
     e:'Deep in the money, a call moves almost dollar for dollar with the stock.'},
    {q:'You own 3 call contracts, each with a delta of 0.50. Roughly how many shares does your position move like?',
     o:['1.5','50','300','150'], a:3,
     e:'0.50 × 100 shares × 3 contracts = 150 shares.'},
    {q:'A call has a delta of 0.25. Which reading is fair?',
     o:['A 25% chance of making a profit','Roughly a 1-in-4 chance of finishing in the money','It gains 25% for every $1 the stock rises','It costs 25% of the share price'], a:1,
     e:'Delta is a rough guide to the odds of finishing in the money. A profit needs more: the stock must also cover the premium.'}
  ]
};

const U4_OPTION_CHAIN = {
  title:'Reading an option chain', min:4,
  cards:[
    {k:'The idea', t:'One table, every strike', b:`
      <p class="lead">Brokers list a stock's options in one table. Pick an expiry date and you see every strike, with calls on one side and puts on the other.</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Option chain for Cedar Tech at $52, 30 days to expiry. Strikes $45, $50, $55 and $60 run down the middle, with call bids and asks on the left and put bids and asks on the right. In-the-money calls ($45, $50) and puts ($55, $60) are shaded.">
        <rect x="0" y="46" width="120" height="48" rx="6" fill="var(--line)"/>
        <rect x="180" y="94" width="120" height="48" rx="6" fill="var(--line)"/>
        <line x1="0" y1="41" x2="300" y2="41" stroke="var(--line)" stroke-width="2"/>
        <g font-family="var(--font-mono)" font-size="11" text-anchor="middle" fill="var(--ink-2)">
          <text x="60" y="14" fill="var(--bull-ink)" font-weight="700">CALLS</text><text x="240" y="14" fill="var(--bear-ink)" font-weight="700">PUTS</text>
          <text x="30" y="34">Bid</text><text x="90" y="34">Ask</text><text x="150" y="34">Strike</text><text x="210" y="34">Bid</text><text x="270" y="34">Ask</text>
          <text x="30" y="62">7.05</text><text x="90" y="62">7.25</text><text x="150" y="62" fill="var(--ink)" font-weight="700">$45</text><text x="210" y="62">0.14</text><text x="270" y="62">0.18</text>
          <text x="30" y="86">3.15</text><text x="90" y="86">3.25</text><text x="150" y="86" fill="var(--ink)" font-weight="700">$50</text><text x="210" y="86">1.15</text><text x="270" y="86">1.25</text>
          <text x="30" y="110">0.95</text><text x="90" y="110">1.00</text><text x="150" y="110" fill="var(--ink)" font-weight="700">$55</text><text x="210" y="110">3.90</text><text x="270" y="110">4.05</text>
          <text x="30" y="134">0.18</text><text x="90" y="134">0.21</text><text x="150" y="134" fill="var(--ink)" font-weight="700">$60</text><text x="210" y="134">8.10</text><text x="270" y="134">8.30</text>
          <text x="150" y="156">Stock at $52 · shaded = in the money</text>
        </g>
      </svg>
      <div class="term"><span class="term-k">Key term</span><b>Option chain:</b> the table of all the calls and puts on one stock for a chosen expiry date.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'The other columns', b:`
      <p>Tap the $55 call and the chain shows more about it:</p>
      <div class="kv"><div><b>$0.97</b><span>Last</span></div><div><b>2,140</b><span>Volume</span></div><div><b>15,600</b><span>Open interest</span></div><div><b>35%</b><span>IV</span></div></div>
      <p><b>Last</b> is the price of the most recent trade. <b>Volume</b> is how many contracts traded today. <b>IV</b> is implied volatility, from Lesson 3.</p>
      <p>Buying one contract at the $1.00 ask costs $1.00 × 100 = $100. To make money at expiry, Cedar Tech has to finish above $55 + $1.00 = $56.</p>
      <div class="term"><span class="term-k">Key term</span><b>Open interest:</b> how many contracts have been opened and not yet closed, exercised or expired.</div>`},
    {k:'The catch', t:'Quiet options, wide spreads', b:`
      <p>Options on busy stocks trade all day, so bids and asks sit close together. Options that rarely trade can have a big gap.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Busy option</div>
          <p>Cedar Tech $50 call: bid $3.15, ask $3.25</p>
          <div class="pf-r">Lost to the spread<b class="mono">$10</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Rarely traded</div>
          <p>A small company's $70 call: bid $0.80, ask $1.20</p>
          <div class="pf-r">Lost to the spread<b class="mono bad-t">$40</b></div>
        </div>
      </div>
      <p>Buying one contract at the ask and selling straight away at the bid costs $0.10 × 100 = $10 on the busy option, about 3% of the $325 paid. On the quiet one it costs $0.40 × 100 = $40, a third of the $120 paid.</p>
      <p>On quiet options the last price can be hours or days old, so it may say little about what you'd pay now.</p>`},
    {k:'Behind the numbers', t:'Where fair value comes from', b:`
      <p>Pricing models estimate what an option is worth. The best known, Black-Scholes, was published in 1973, and the work behind it won a Nobel prize in economics in 1997.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Easy to look up</div><b>Four inputs</b><p>Stock price, strike, time to expiry and interest rates.</p></div>
        <div class="col bad"><div class="col-h">Has to be estimated</div><b>Volatility</b><p>Nobody knows how much the stock will swing before expiry.</p></div>
      </div>
      <p>Traders often run the model backwards: they start from the option's market price and solve for the volatility that fits. That's the implied volatility from Lesson 3. A model gives an estimate, and real prices also move with supply and demand.</p>
      <div class="term"><span class="term-k">Key term</span><b>Black-Scholes model:</b> a formula that estimates an option's fair value from the stock price, strike, time to expiry, volatility and interest rates. It was built for options that can only be exercised at expiry, but traders use it as a guide for the rest too.</div>`}
  ],
  qs:[
    {q:'In a typical option chain, what runs down the middle?',
     o:['The expiry dates','The strike prices','The stock\'s price history','The implied volatilities'], a:1,
     e:'Strikes sit in the middle, with calls on one side and puts on the other.'},
    {q:'A call shows a bid of $3.40 and an ask of $3.60. Ignoring fees, what does one contract cost if you buy at the ask?',
     o:['$3.60','$340','$360','$3,600'], a:2,
     e:'Premiums are quoted per share: $3.60 × 100 = $360.'},
    {q:'What does open interest tell you?',
     o:['How many contracts are still open','How many contracts traded today','The price of the last trade','How many people follow the stock'], a:0,
     e:'Open interest counts contracts not yet closed, exercised or expired. Today\'s trading is volume.'},
    {q:'A rarely traded option has a bid of $0.50 and an ask of $0.90. You buy 2 contracts at the ask and sell them straight away at the bid. What do you lose?',
     o:['$40','$80','$0.80','$180'], a:1,
     e:'The spread is $0.40 a share. $0.40 × 100 shares × 2 contracts = $80.'},
    {q:'Which Black-Scholes input can\'t be looked up and has to be estimated?',
     o:['The stock price','The strike','Time to expiry','Volatility'], a:3,
     e:'Nobody knows how much the stock will swing before expiry. The other inputs are known today.'}
  ]
};

const U4_CHECK = {
  title:'Unit check', min:4, badge:{name:'Greeks Graduate', icon:'scale'}, cards:[],
  qs:[
    {q:'A stock trades at $73. A $75 put on it costs $4.10. How does the premium split?',
     o:['$2 intrinsic, $2.10 time value','$4.10 intrinsic, $0 time value','$0 intrinsic, $4.10 time value','$2.10 intrinsic, $2 time value'], a:0,
     e:'Intrinsic value: $75 − $73 = $2. Time value: $4.10 − $2 = $2.10.'},
    {q:'You pay $6 for a $100 call when the stock is at $103. At expiry the stock is at $104. Ignoring fees, what is your result per contract?',
     o:['+$100','+$400','−$200','−$600'], a:2,
     e:'At expiry the call is worth $104 − $100 = $4. You paid $6, so you lose $2 × 100 = $200. The stock rose, but not enough to cover the time value.'},
    {q:'An option costs $2.40 and has a theta of −0.06. Five days pass and nothing else changes. Roughly what is it worth per share?',
     o:['$2.34','$2.10','$1.80','$2.40'], a:1,
     e:'About $0.06 × 5 = $0.30 drains away: $2.40 − $0.30 ≈ $2.10. Theta can grow over those days, so this is a rough estimate.'},
    {q:'An option has a vega of 0.15. After an earnings report, implied volatility falls from 60% to 45%. Other things equal, roughly what happens to one contract?',
     o:['It falls about $2.25','It falls about $22.50','It falls about $225','It falls about $15'], a:2,
     e:'A 15-point drop × $0.15 = about $2.25 a share. × 100 shares = about $225 a contract.'},
    {q:'A stock has swung about 25% a year in the past, but its options show an implied volatility of 60%. What does that suggest?',
     o:['The stock will rise 60% this year','The historical figure must be wrong','The options are mispriced and will soon fall','Option prices assume bigger swings ahead than the stock has shown'], a:3,
     e:'Implied volatility looks ahead. A high IV means traders are pricing in bigger moves, often because news is coming.'},
    {q:'You own 2 put contracts, each with a delta of −0.35. The stock rises $3. Roughly how does your position\'s value change?',
     o:['+$210','−$210','−$105','−$70'], a:1,
     e:'−0.35 × $3 = −$1.05 a share. × 100 shares × 2 contracts = about −$210.'},
    {q:'A call has a delta of 0.50. The stock jumps $10 in a day. Why is "+$5 a share" likely too low?',
     o:['Delta is quoted per contract, not per share','Time decay works in the buyer\'s favour on big moves','Delta rises as the call goes deeper into the money','Implied volatility always rises by the same amount'], a:2,
     e:'Delta is for small moves. As the stock climbs, delta climbs toward 1 (that change is gamma), so the call gains more than the estimate.'},
    {q:'A call in an option chain shows a last price of $2.00, a bid of $1.20, an ask of $1.40 and volume 0 today. Ignoring fees, about what would one contract cost to buy right now?',
     o:['$200','$120','$130','$140'], a:3,
     e:'A buy fills at the ask: $1.40 × 100 = $140. The $2.00 last trade happened before today and may be stale.'}
  ]
};

const UNIT_PRICING_OPTIONS = {id:'pricing-options', title:'Pricing options', level:'Advanced', lessons:[U4_TIME_VALUE, U4_TIME_DECAY, U4_VOLATILITY, U4_DELTA, U4_OPTION_CHAIN, U4_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_PRICING_OPTIONS = [
  {n:1, q:'A stock trades at $88. An $80 call on it costs $9.50. How much of that is time value?',
   o:['$8','$1.50','$9.50','$0.50'], a:1,
   e:'Intrinsic value: $88 − $80 = $8. Time value: $9.50 − $8 = $1.50.'},
  {n:2, q:'Two at-the-money calls on the same stock are identical, except one expires in 2 weeks and the other in 4 months. If the stock doesn\'t move, which loses more value over the next week?',
   o:['The 2-week call','The 4-month call','They lose the same','Neither loses value'], a:0,
   e:'Time decay speeds up near expiry, so the call with 2 weeks left loses more each day.'},
  {n:3, q:'Why do option prices often rise in the days before an earnings report?',
   o:['Companies raise strike prices before reports','Time value grows as expiry gets closer','Traders expect a bigger swing, so implied volatility rises','Interest rates rise before every report'], a:2,
   e:'A known event raises the expected swing. Higher implied volatility means pricier calls and puts.'},
  {n:4, q:'A call has a delta of 0.70. The stock falls $1. Other things equal, roughly what happens to the call?',
   o:['It rises about $0.70','It falls about $0.30','It falls about $1','It falls about $0.70'], a:3,
   e:'Delta 0.70 means about $0.70 of movement per $1 in the stock, in the same direction.'},
  {n:5, q:'In an option chain, what does the volume column show?',
   o:['Contracts still open','Contracts traded today','How many shares the company has','The size of the bid-ask spread'], a:1,
   e:'Volume counts today\'s trades. Contracts still open is open interest.'}
];
