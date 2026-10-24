/* ---------- Options basics ---------- */
const U3_WHAT_AN_OPTION = {
  title:'What an option is', min:4,
  cards:[
    {k:'The idea', t:'A right, not a duty', b:`
      <p class="lead">An option is a contract about a stock. It gives its buyer the right to buy or sell that stock at a fixed price, up to a fixed date. The buyer can also just let it go unused.</p>
      <div class="term"><span class="term-k">Key term</span><b>Option:</b> a contract that lets you buy or sell a stock at a set price until a set date. If you own one, using it is your choice, never a duty.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'The parts', t:'Three numbers on every option', b:`
      <p>Byblos Foods trades at $48. Here is one option on it:</p>
      <div class="kv kv3"><div><b>$50</b><span>Strike</span></div><div><b>3 months</b><span>Until expiry</span></div><div><b>$2.00</b><span>Premium</span></div></div>
      <p>The <b>strike</b> is the price the trade would happen at. The <b>expiry</b> is the last day the option exists. After that, it's gone.</p>
      <div class="term"><span class="term-k">Key term</span><b>Premium:</b> the price of the option itself. The buyer pays it up front and doesn't get it back, whatever happens next.</div>`},
    {k:'Two kinds, two sides', t:'Calls, puts, buyers and writers', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Call</div><b>The right to buy</b><p>Gains value when the stock rises.</p></div>
        <div class="col bad"><div class="col-h">Put</div><b>The right to sell</b><p>Gains value when the stock falls.</p></div>
      </div>
      <p>Every option has two sides. The buyer pays the premium and gets the right. The seller collects the premium and takes on a duty: if the buyer uses the right, the seller has to go through with the trade at the strike.</p>
      <div class="term"><span class="term-k">Key term</span><b>Writer:</b> another name for the seller of an option. Writing an option means creating it and selling it to a buyer.</div>`},
    {k:'Do the maths', t:'One contract, 100 shares', b:`
      <p>A US stock option usually covers 100 shares. Premiums are quoted per share, so multiply by 100 to get the real cost. That Byblos Foods option:</p>
      <div class="kv kv3"><div><b>$2.00</b><span>Quoted premium</span></div><div><b>× 100</b><span>Shares per contract</span></div><div><b>$200</b><span>One contract</span></div></div>
      <p>Three contracts would cost $600, ignoring fees. The writer receives that same $600.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Buyer's risk</div><b>Capped at the premium</b><p>If the option is never worth using, the $600 is gone. Nothing more.</p></div>
        <div class="col bad"><div class="col-h">Writer's risk</div><b>Can be far bigger</b><p>The writer keeps the $600, but may have to trade 100 shares per contract at a price much worse than the market's.</p></div>
      </div>`}
  ],
  qs:[
    {q:'What does buying a call option give you?',
     o:['The duty to buy 100 shares at the strike','The right to buy 100 shares at the strike, until expiry','100 shares of the stock straight away','The right to sell 100 shares at the strike'], a:1,
     e:'A call is a right to buy, not a duty. You only buy the shares if you choose to use it.'},
    {q:'An option\'s premium is quoted at $1.50. Ignoring fees, what does one contract cost?',
     o:['$1.50','$15','$150','$1,500'], a:2,
     e:'Premiums are quoted per share, and a contract usually covers 100 shares: $1.50 × 100 = $150.'},
    {q:'When an option is created, who takes on an obligation?',
     o:['The seller (writer)','The buyer','Both of them','Neither of them'], a:0,
     e:'The buyer pays for a right. The seller collects the premium and must go through with the trade if the buyer uses that right.'},
    {q:'True or false: if you buy an option and never use it, the seller gives your premium back.',
     o:['True','False'], a:1,
     e:'The premium is the price of the right. The seller keeps it whether or not the option is ever used.'},
    {q:'Which of these gives its buyer the right to sell shares at a set price by a set date?',
     o:['A call','A limit sell order','A market order','A put'], a:3,
     e:'A put is a right to sell at the strike. A call is a right to buy. A limit order is an instruction you place, not a right you pay for.'}
  ]
};

const U3_CALL_OPTIONS = {
  title:'Call options', min:5,
  cards:[
    {k:'The idea', t:'Paying for the upside', b:`
      <p class="lead">A call lets you buy 100 shares at the strike, however high the market price has gone. At expiry it only makes money if the stock ends above the strike by more than the premium you paid.</p>
      <div class="term"><span class="term-k">Key term</span><b>Breakeven (call):</b> strike + premium. If the stock ends exactly here at expiry, the buyer neither makes nor loses money.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'One call, four endings', b:`
      <p>Cedar Tech is at $50. You buy a call with a $50 strike for $3, so $300 for the contract. Breakeven is $50 + $3 = $53. Your profit at expiry, ignoring fees:</p>
      <div class="kv"><div><b class="bad-t">−$300</b><span>Stock at $45</span></div><div><b class="bad-t">−$300</b><span>Stock at $50</span></div><div><b>$0</b><span>Stock at $53</span></div><div><b class="good-t">+$700</b><span>Stock at $60</span></div></div>
      <p>At $45 or $50, nobody pays $50 for shares they can get for the same or less, so the call expires worthless. At $53 it's worth $3 a share, exactly what you paid. At $60 it lets you buy at $50 shares worth $60: $10 × 100 = $1,000, minus the $300 = <b class="good-t">+$700</b>.</p>`},
    {k:'The shape', t:'Capped loss, open-ended gain', b:`
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Profit at expiry for a $50 call bought for $3. The line is flat at minus $300 up to a stock price of $50, crosses zero at $53, and reaches plus $700 at $60.">
        <line x1="30" y1="86" x2="290" y2="86" stroke="var(--line)" stroke-width="2"/>
        <polyline points="30,110 130,110 160,86" fill="none" stroke="var(--bear-deep)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="160" y1="86" x2="260" y2="6" stroke="var(--bull-deep)" stroke-width="3" stroke-linecap="round"/>
        <circle cx="80" cy="110" r="4" fill="var(--bear)"/>
        <circle cx="130" cy="110" r="4" fill="var(--bear)"/>
        <circle cx="160" cy="86" r="4" fill="var(--ink)"/>
        <circle cx="230" cy="30" r="4" fill="var(--bull)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="30" y="12">Profit per contract</text>
          <text x="26" y="90" text-anchor="end">$0</text>
          <text x="154" y="78" text-anchor="end" fill="var(--ink)">Breakeven</text>
          <text x="238" y="42" fill="var(--bull-ink)">+$700</text>
          <text x="80" y="128" text-anchor="middle" fill="var(--bear-ink)">−$300 max loss</text>
          <text x="80" y="142" text-anchor="middle">$45</text><text x="130" y="142" text-anchor="middle">$50</text><text x="160" y="142" text-anchor="middle">$53</text><text x="230" y="142" text-anchor="middle">$60</text>
          <text x="160" y="156" text-anchor="middle">Stock price at expiry</text>
        </g>
      </svg>
      <p>Up to the strike the line is flat: you can never lose more than the $300 premium. Above the strike, profit rises $100 for every $1 the stock gains, with no fixed ceiling.</p>`},
    {k:'The catch', t:'Leverage cuts both ways', b:`
      <p>With Cedar Tech at $50, compare putting $5,000 into 100 shares with putting $300 into that one call.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">100 shares</div>
          <p>Cost $5,000</p>
          <div class="pf-r">Stock ends at $60<b class="mono good-t">+20%</b></div>
          <div class="pf-r">Stock stays at $50<b class="mono">0%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">One call</div>
          <p>Cost $300</p>
          <div class="pf-r">Stock ends at $60<b class="mono good-t">+233%</b></div>
          <div class="pf-r">Stock stays at $50<b class="mono bad-t">−100%</b></div>
        </div>
      </div>
      <p>The call turns a 20% rise into a 233% gain ($700 on $300). But if the stock goes nowhere, the shares lose nothing and the call loses everything. Timing matters too: a rise that comes after expiry doesn't help.</p>`}
  ],
  qs:[
    {q:'A call has a $70 strike and costs $4. What is its breakeven at expiry?',
     o:['$66','$70','$74','$78'], a:2,
     e:'For a call, breakeven = strike + premium: $70 + $4 = $74.'},
    {q:'You buy a call with a $30 strike for $2. At expiry the stock is at $25. Ignoring fees, what is your result on one contract?',
     o:['−$200','−$500','−$700','$0'], a:0,
     e:'The call expires worthless, so you lose the premium: $2 × 100 = $200.'},
    {q:'You buy a call with a $40 strike for $1.50. At expiry the stock is at $46. What is your profit on one contract?',
     o:['$4.50','$450','$600','$750'], a:1,
     e:'The call is worth $46 − $40 = $6 a share, or $600. Minus the $150 premium: $450.'},
    {q:'True or false: the most a call buyer can lose is the premium they paid.',
     o:['True','False'], a:0,
     e:'If the stock ends at or below the strike, the call expires worthless and the buyer loses the premium. Never more.'},
    {q:'You buy a call with a $25 strike for $2. At expiry the stock is at $26, just above the strike. What is your result?',
     o:['A $100 profit','A $300 profit','You break even','A $100 loss'], a:3,
     e:'The call is worth $26 − $25 = $1 a share, or $100. You paid $200, so you are down $100. You needed the stock above $27 to profit.'}
  ]
};

const U3_PUT_OPTIONS = {
  title:'Put options', min:5,
  cards:[
    {k:'The idea', t:'Paying for the downside', b:`
      <p class="lead">A put lets you sell 100 shares at the strike, however far the market price has fallen. The further the stock drops below the strike, the more the put is worth.</p>
      <div class="term"><span class="term-k">Key term</span><b>Breakeven (put):</b> strike − premium. The stock has to end below this price at expiry for the buyer to make money.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'One put, four endings', b:`
      <p>Litani Energy is at $42. You buy a put with a $40 strike for $2, so $200 for the contract. Breakeven is $40 − $2 = $38. Your profit at expiry, ignoring fees:</p>
      <div class="kv"><div><b class="bad-t">−$200</b><span>Stock at $45</span></div><div><b class="bad-t">−$200</b><span>Stock at $40</span></div><div><b>$0</b><span>Stock at $38</span></div><div><b class="good-t">+$800</b><span>Stock at $30</span></div></div>
      <p>At $40 or above, nobody sells for $40 shares that fetch the same or more in the market, so the put expires worthless. At $38 it's worth $2 a share, exactly what you paid. At $30 it lets you sell for $40 shares worth $30: $10 × 100 = $1,000, minus the $200 = <b class="good-t">+$800</b>.</p>`},
    {k:'The limit', t:'The floor is $0', b:`
      <p>A stock can't fall below $0, so a put's best case has a ceiling: (strike − premium) × 100.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Best case</div><b class="mono">+$3,800</b><p>Litani goes to $0. The put is worth $40 a share, or $4,000, minus the $200 premium.</p></div>
        <div class="col bad"><div class="col-h">Worst case</div><b class="mono">−$200</b><p>Litani ends at $40 or higher. The put expires worthless.</p></div>
      </div>
      <p>A call's gain has no fixed ceiling, but a put's does: ($40 − $2) × 100 = $3,800 here. For the buyer, both share the same worst case: losing the premium.</p>`},
    {k:'In practice', t:'A put as insurance', b:`
      <p>Rania owns 100 Litani shares, bought at $42. She also buys that $40 put for $200. Bad news hits, and the stock ends at $30 on expiry day.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Shares only</div>
          <p>$42 → $30 on 100 shares</p>
          <div class="pf-r">Loss<b class="mono bad-t">−$1,200</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Shares + put</div>
          <p>−$1,200 on the shares, +$1,000 from the put, −$200 premium</p>
          <div class="pf-r">Loss<b class="mono bad-t">−$400</b></div>
        </div>
      </div>
      <p>If Litani had risen instead, the put would have expired worthless. The $200 would have been the cost of cover she didn't need, like an insurance premium. The Option strategies unit looks at this idea in detail.</p>`}
  ],
  qs:[
    {q:'A put has a $60 strike and costs $5. What is its breakeven at expiry?',
     o:['$65','$60','$55','$50'], a:2,
     e:'For a put, breakeven = strike − premium: $60 − $5 = $55.'},
    {q:'You buy a put with a $25 strike for $1. At expiry the stock is at $20. What is your profit on one contract?',
     o:['$100','$400','$500','$600'], a:1,
     e:'The put is worth $25 − $20 = $5 a share, or $500. Minus the $100 premium: $400.'},
    {q:'You buy a put with a $30 strike for $3. What is the most you could make on one contract?',
     o:['Unlimited','$3,000','$2,700','$300'], a:2,
     e:'The best case is the stock going to $0: ($30 − $3) × 100 = $2,700. A stock can\'t fall below $0, so the gain has a ceiling.'},
    {q:'You hold a put with a $50 strike that cost $2. Which stock price at expiry gives you a profit?',
     o:['$51','$49','$48','$47'], a:3,
     e:'Breakeven is $50 − $2 = $48. At $47 the put is worth $300, a $100 profit. At $49 you lose $100, and at $48 you break even.'},
    {q:'You own 100 shares and buy a put on them. What does the put do?',
     o:['It gains value if the shares fall, making up for part of the loss','It removes all risk of losing money on the shares','It refunds its premium if the shares rise','It guarantees the shares will rise'], a:0,
     e:'Like insurance, the put pays out when the shares drop. If they don\'t, the premium is the cost of the cover.'}
  ]
};

const U3_MONEYNESS = {
  title:'In the money?', min:4,
  cards:[
    {k:'The idea', t:'Would it pay to use it now?', b:`
      <p class="lead">Traders label options by where the stock price sits compared with the strike. The label tells you at a glance whether the option would be worth using right now.</p>
      <div class="term"><span class="term-k">Key term</span><b>In the money:</b> an option that would be worth something if used right now. A call is in the money when the stock is above the strike. A put is in the money when the stock is below it.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Three labels', t:'In, at and out', b:`
      <p>A <b>call</b> with a $50 strike, at three stock prices:</p>
      <div class="score"><div><b>$55</b><span>In the money</span></div><div><b>$50</b><span>At the money</span></div><div><b>$45</b><span>Out of the money</span></div></div>
      <p>A <b>put</b> with a $50 strike flips it round:</p>
      <div class="score"><div><b>$45</b><span>In the money</span></div><div><b>$50</b><span>At the money</span></div><div><b>$55</b><span>Out of the money</span></div></div>
      <p>At the money means the stock is at, or very close to, the strike. Traders shorten the labels to ITM, ATM and OTM.</p>`},
    {k:'Do the maths', t:'Intrinsic value', b:`
      <div class="term"><span class="term-k">Key term</span><b>Intrinsic value:</b> what an option would be worth if used right now. Call: stock − strike. Put: strike − stock. If the answer is below zero, it's $0.</div>
      <p>Cedar Tech is at $58. Intrinsic value per share:</p>
      <div class="kv"><div><b class="good-t">$8</b><span>$50 call</span></div><div><b>$0</b><span>$50 put</span></div><div><b>$0</b><span>$65 call</span></div><div><b class="good-t">$7</b><span>$65 put</span></div></div>
      <p>$58 − $50 = $8 for the $50 call, or $800 per contract. $65 − $58 = $7 for the $65 put. The other two are out of the money, so their intrinsic value is $0. It's never negative: nobody uses a right that would lose them money.</p>`},
    {k:'The catch', t:'The price is usually higher', b:`
      <p>Before expiry, options usually cost more than their intrinsic value. Cedar Tech is still at $58, with two months to go:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">$50 call</div>
          <p>Intrinsic value $8.00</p>
          <div class="pf-r">Market price<b class="mono">$8.90</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">$65 call</div>
          <p>Intrinsic value $0</p>
          <div class="pf-r">Market price<b class="mono">$1.15</b></div>
        </div>
      </div>
      <p>An out-of-the-money option has no intrinsic value, yet it still costs something. Where the rest of the price comes from is covered in the Pricing options unit. By the end of expiry day that extra part is gone, and an option is worth just its intrinsic value.</p>`}
  ],
  qs:[
    {q:'A stock is at $72. Which of these options is in the money?',
     o:['A put with a $70 strike','A call with a $75 strike','A call with a $70 strike','A put with a $65 strike'], a:2,
     e:'A call is in the money when the stock is above the strike, and $72 is above $70. The other three are out of the money.'},
    {q:'A put has a $45 strike and the stock is at $39. What is its intrinsic value per share?',
     o:['$0','$6','$39','−$6'], a:1,
     e:'For a put: strike − stock = $45 − $39 = $6.'},
    {q:'A call has an $80 strike and the stock is at $74. What is its intrinsic value per share?',
     o:['$0','−$6','$6','$74'], a:0,
     e:'$74 − $80 is below zero, so the intrinsic value is $0. The call is out of the money.'},
    {q:'A put has a $30 strike and the stock is at $35. How would you describe the put?',
     o:['In the money','At the money','Out of the money','Expired'], a:2,
     e:'A put is in the money only when the stock is below the strike. At $35 the stock is above it, so the put is out of the money.'},
    {q:'A call has a $40 strike. The stock is at $46 and the call costs $7.10. How much of that price is intrinsic value?',
     o:['$1.10','$7.10','$46.00','$6.00'], a:3,
     e:'Intrinsic value = $46 − $40 = $6. The other $1.10 is the part covered in the Pricing options unit.'}
  ]
};

const U3_EXPIRY_EXERCISE = {
  title:'Expiry and exercise', min:5,
  cards:[
    {k:'The idea', t:'Three ways out', b:`
      <p class="lead">An option doesn't last for ever. Whoever holds one has three ways out of it.</p>
      <div class="score"><div><b>Sell</b><span>Close it in the market</span></div><div><b>Exercise</b><span>Use the right</span></div><div><b>Expire</b><span>Let it run out</span></div></div>
      <div class="term"><span class="term-k">Key term</span><b>Exercise:</b> using the option. Exercising a call means buying 100 shares at the strike. Exercising a put means selling 100 shares at the strike.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'At expiry', t:'In the money or worthless', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Ends in the money</div><b>Usually exercised for you</b><p>The US rule is to exercise anything $0.01 or more in the money, unless the holder says not to. Brokers can add rules of their own.</p></div>
        <div class="col bad"><div class="col-h">Ends out of the money</div><b>Expires worthless</b><p>The buyer loses the premium. The seller keeps it and owes nothing more.</p></div>
      </div>
      <p>That rule comes from the US clearing house, the organisation that settles every US-listed option trade. Automatic exercise means real shares and real cash: if a $50 call is exercised, the holder pays $5,000 for 100 shares. If the account can't cover that, brokers deal with it in different ways, such as closing the position before expiry.</p>`},
    {k:'Two styles', t:'American and European', b:`
      <div class="split">
        <div class="col good"><div class="col-h">American-style</div><b>Exercise any day up to expiry</b><p>Most options on single US stocks.</p></div>
        <div class="col good"><div class="col-h">European-style</div><b>Exercise only at expiry</b><p>Many index options, such as those on the S&amp;P 500 index.</p></div>
      </div>
      <p>The names describe the rules, not where the options trade. Either way, many traders close a position by selling the option rather than exercising it. Cedar Tech is at $58, and a $50 call with a month left trades at $8.30:</p>
      <div class="kv kv3"><div><b>$800</b><span>Net from exercising</span></div><div><b class="good-t">$830</b><span>From selling the call</span></div><div><b>$5,000</b><span>Cash needed to exercise</span></div></div>
      <p>Exercising means paying $5,000 for shares worth $5,800, a net $800. Selling the call brings in $830, which is $30 more, and needs no cash for shares. Fees are ignored here.</p>`},
    {k:'The other side', t:'Sellers can be assigned', b:`
      <p>When a holder exercises, a seller of that option is picked, usually at random, and has to carry out the trade.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Put writer</div>
          <p>$40 strike, collected $2. Assigned with the stock at $33: must pay $4,000 for shares worth $3,300.</p>
          <div class="pf-r">After the premium<b class="mono bad-t">−$500</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Call writer</div>
          <p>$50 strike, collected $3, owns no shares. Assigned with the stock at $70: must buy 100 shares for $7,000 and hand them over for $5,000.</p>
          <div class="pf-r">After the premium<b class="mono bad-t">−$1,700</b></div>
        </div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Assignment:</b> being told to carry out the trade on an option you sold. With American-style options it can happen on any day up to expiry, not just at the end.</div>
      <p>A call writer who doesn't own the shares has no cap on the loss, because a stock has no cap on how high it can go.</p>`}
  ],
  qs:[
    {q:'Your call ends 50 cents in the money at expiry, and you have given your broker no instructions. Under the US clearing rule, what normally happens?',
     o:['It expires worthless','It is exercised automatically','The seller decides','Your premium is refunded'], a:1,
     e:'Options that end $0.01 or more in the money are exercised automatically unless the holder says otherwise. Brokers can add their own rules.'},
    {q:'Which style of option can be exercised on any trading day up to expiry?',
     o:['European-style','Both styles','American-style','Neither'], a:2,
     e:'American-style options can be exercised early. European-style ones only at expiry.'},
    {q:'You sold a put with a $35 strike and you are assigned. What must you do?',
     o:['Buy 100 shares at $35','Sell 100 shares at $35','Pay back the premium','Buy 35 shares at the market price'], a:0,
     e:'The put holder is using the right to sell, so the writer must buy 100 shares at the strike: $35 × 100 = $3,500.'},
    {q:'A call ends out of the money at expiry. What happens to it?',
     o:['It is exercised automatically','It rolls over to the next month','The buyer gets half the premium back','It expires worthless and the seller keeps the premium'], a:3,
     e:'Nobody uses a right to buy above the market price. The call is worth nothing and the premium stays with the seller.'},
    {q:'Why do many traders close an option by selling it rather than exercising it?',
     o:['Only the writer can decide when to exercise','Selling often brings in more, and avoids trading 100 shares','Selling locks in a profit every time','Exercising cancels the premium they paid'], a:1,
     e:'Before expiry an option often trades above its intrinsic value, so selling can bring in more. Exercising also means trading 100 shares: a call holder has to pay for them.'}
  ]
};

const U3_CHECK = {
  title:'Unit check', min:4, badge:{name:'Options Rookie', icon:'star'}, cards:[],
  qs:[
    {q:'You buy 3 put contracts with a quoted premium of $0.75. Ignoring fees, what do you pay in total?',
     o:['$2.25','$75','$225','$2,250'], a:2,
     e:'$0.75 × 100 shares × 3 contracts = $225.'},
    {q:'You buy a call with a $120 strike for $6.50. At expiry the stock is at $131. What is your profit on one contract?',
     o:['$1,100','$450','$1,750','$650'], a:1,
     e:'The call is worth $131 − $120 = $11 a share, or $1,100. Minus the $650 premium: $450.'},
    {q:'A stock is at $80. Lina buys 100 shares. Omar buys one call with an $80 strike for $4. At expiry the stock is still at $80. Ignoring fees, where do they stand?',
     o:['Lina is flat, Omar has lost $400','Both are flat','Both have lost $400','Lina has lost $400, Omar is flat'], a:0,
     e:'Lina\'s shares are worth what she paid. Omar\'s call expires worthless, so he loses the whole premium: $4 × 100 = $400.'},
    {q:'You buy a put with a $55 strike for $2.50. At expiry the stock is at $49. What is your profit on one contract?',
     o:['$600','$850','$350','−$250'], a:2,
     e:'The put is worth $55 − $49 = $6 a share, or $600. Minus the $250 premium: $350.'},
    {q:'A stock is at $64. Which option has the highest intrinsic value?',
     o:['A $60 call','A $65 call','A $62 put','A $70 put'], a:3,
     e:'$60 call: $64 − $60 = $4. $70 put: $70 − $64 = $6. The $65 call and the $62 put are out of the money, so $0.'},
    {q:'You hold a call with a $60 strike, and it is exercised at expiry. What happens?',
     o:['You pay $6,000 and receive 100 shares','You receive $6,000 in cash','You pay $60 and receive 1 share','You pay the premium a second time'], a:0,
     e:'Exercising a call means buying 100 shares at the strike: $60 × 100 = $6,000.'},
    {q:'Someone sells a call without owning the shares. What is the most they can lose?',
     o:['The premium they collected','The strike × 100','Nothing, because they were paid up front','There is no fixed limit'], a:3,
     e:'If assigned, they must buy shares at the market price and hand them over at the strike. A stock has no ceiling, so neither does the loss.'},
    {q:'You sold an American-style put. A month before expiry, the stock drops well below the strike. What can happen?',
     o:['You can be assigned early and have to buy 100 shares at the strike','Nothing can happen until expiry day','You must sell 100 shares at the strike','Your premium is returned to the buyer'], a:0,
     e:'American-style options can be exercised on any day, so a writer can be assigned before expiry. A put writer then buys 100 shares at the strike.'}
  ]
};

const UNIT_OPTIONS_BASICS = {id:'options-basics', title:'Options basics', level:'Advanced', lessons:[U3_WHAT_AN_OPTION, U3_CALL_OPTIONS, U3_PUT_OPTIONS, U3_MONEYNESS, U3_EXPIRY_EXERCISE, U3_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_OPTIONS_BASICS = [
  {n:1, q:'Which statement about the buyer of an option is true?',
   o:['They must trade the shares at expiry','They can choose never to use it','They collect the premium','They own the shares from the start'], a:1,
   e:'The buyer pays the premium for a right, not a duty, so they can let it go unused.'},
  {n:2, q:'A call has a $90 strike and costs $5. Above what stock price at expiry does the buyer make a profit?',
   o:['$85','$90','$95','$100'], a:2,
   e:'Breakeven = strike + premium: $90 + $5 = $95.'},
  {n:3, q:'You buy a put with a $20 strike for $1.50. At expiry the stock is at $15. What is your profit on one contract?',
   o:['$150','$350','$500','$650'], a:1,
   e:'The put is worth $20 − $15 = $5 a share, or $500. Minus the $150 premium: $350.'},
  {n:4, q:'A stock is at $100. Which option is out of the money?',
   o:['A $90 call','A $110 put','A $110 call','A $95 call'], a:2,
   e:'A call is out of the money when the stock is below the strike, and $100 is below $110. The $110 put and both lower calls are in the money.'},
  {n:5, q:'You sold a call with a $40 strike and you are assigned. What must you do?',
   o:['Sell 100 shares at $40','Buy 100 shares at $40','Pay back the premium','Nothing, because assignment only affects buyers'], a:0,
   e:'The call holder is buying at $40, so the writer must sell them 100 shares at $40.'}
];
