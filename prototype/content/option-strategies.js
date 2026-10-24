/* ---------- Option strategies ---------- */
const U5_BUY_VS_SELL = {
  title:'Buying vs selling', min:5,
  cards:[
    {k:'The idea', t:'Two sides of every contract', b:`
      <p class="lead">Every option has a buyer and a seller. The buyer pays the premium and gets a right. The seller collects that premium and takes on an obligation.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Buyer</div><b>Pays the premium</b><p>Gets the right to buy (call) or sell (put). The most they can lose is the premium.</p></div>
        <div class="col bad"><div class="col-h">Seller</div><b>Collects the premium</b><p>Must sell (call) or buy (put) 100 shares at the strike if assigned.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Writing an option:</b> selling an option to open a new position. The seller is also called the writer.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'One call, two sides', b:`
      <p>Cedar Tech trades at $50. Nadia buys the $55 call for $2 and Karim is the one who sells it. Nadia pays $200 for one contract, and Karim collects it.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Ends at $50</div>
          <p>Below the strike, so the call expires worthless.</p>
          <div class="pf-r">Karim<b class="mono good-t">+$200</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Ends at $70</div>
          <p>The call is worth $15 a share, or $1,500.</p>
          <div class="pf-r">Karim<b class="mono bad-t">−$1,300</b></div>
        </div>
      </div>
      <p>Nadia gets the exact opposite: −$200 in the first case, +$1,300 in the second. Ignoring fees, one side's gain is the other side's loss.</p>`},
    {k:'The catch', t:'Naked calls have no ceiling', b:`
      <p>Karim doesn't own any Cedar Tech shares. If the call is exercised, he has to buy 100 shares at the market price, whatever it is, and hand them over for $55 each.</p>
      <div class="term"><span class="term-k">Key term</span><b>Naked option:</b> an option sold without owning the shares, or holding the cash, that would cover the obligation. Also called uncovered.</div>
      <p>Say a takeover bid sends the stock to $90. Karim buys at $90 and sells at $55: (90 − 55 − 2) × 100 = <b class="bad-t">−$3,300</b>.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Most he can make</div><b>$200</b><p>The full premium, if the stock ends at or below $55.</p></div>
        <div class="col bad"><div class="col-h">Most he can lose</div><b>No limit</b><p>A share price has no ceiling, so neither does his loss.</p></div>
      </div>`},
    {k:'The limit', t:'Naked puts stop at zero', b:`
      <p>Selling a put is the opposite promise: to buy 100 shares at the strike if assigned. A price can't fall below $0, so the loss has a limit. It can still be large.</p>
      <div class="kv kv3"><div><b>$45</b><span>Put strike</span></div><div><b>$1.50</b><span>Premium</span></div><div><b class="bad-t">−$4,350</b><span>Loss if the stock hits $0</span></div></div>
      <p>The seller pays $4,500 for shares worth nothing and keeps the $150 premium: (45 − 1.50) × 100 = $4,350.</p>
      <p>Because sellers can end up owing money, brokers ask for approval before customers can sell options, and require collateral to be kept in the account.</p>
      <div class="term"><span class="term-k">Key term</span><b>Margin:</b> cash or shares a broker requires you to keep in your account to cover what you might owe on options you sold.</div>`}
  ],
  qs:[
    {q:'Nadia buys one put with a premium of $3.20. What is the most she can lose?',
     o:['$3.20','$320','$3,200','There is no limit'], a:1,
     e:'A buyer can lose at most the premium. Premiums are quoted per share, so $3.20 × 100 = $320.'},
    {q:'Which of these positions has no limit on how much it can lose?',
     o:['Buying a call','Buying a put','Selling a put without the cash set aside','Selling a call without owning the shares'], a:3,
     e:'The seller of a naked call may have to buy shares at any price to hand over. A naked put\'s worst case stops at a price of $0.'},
    {q:'Karim sells a naked $40 put for $2. What is the most he can lose?',
     o:['$200','$3,800','$4,000','There is no limit'], a:1,
     e:'Worst case, the stock goes to $0 and he still pays $40 a share. (40 − 2) × 100 = $3,800.'},
    {q:'True or false: the seller of an option collects the premium when the trade opens.',
     o:['True','False'], a:0,
     e:'The buyer pays the premium up front, and the seller keeps it whatever happens next.'},
    {q:'Why do brokers require collateral, called margin, from people who sell options?',
     o:['The seller has to pay the premium to the broker','It is a fee the exchange charges on every trade','A seller may owe money if the price moves the wrong way','It is only needed when buying options'], a:2,
     e:'Sellers take on an obligation. Collateral makes sure they can pay if the trade goes against them.'}
  ]
};

const U5_COVERED_CALLS = {
  title:'Covered calls', min:4,
  cards:[
    {k:'The idea', t:'Selling a call on shares you own', b:`
      <p class="lead">If you already own 100 shares, you can sell one call on them. If the call is exercised, you hand over shares you already have, so the naked-call problem from Lesson 1 goes away.</p>
      <div class="term"><span class="term-k">Key term</span><b>Covered call:</b> owning 100 shares and selling one call on them, to collect the premium as income.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Income, with a ceiling', b:`
      <p>Lina bought 100 Cedar Tech shares at $50. She sells the $55 call for $2 and collects $200.</p>
      <div class="kv"><div><b>$50</b><span>Paid per share</span></div><div><b>$2</b><span>Premium</span></div><div><b class="good-t">$700</b><span>Max profit</span></div><div><b>$48</b><span>Breakeven</span></div></div>
      <p>Max profit: at $55 or above, her shares get sold at $55. She makes $5 a share on them, plus the $2 premium: (55 − 50 + 2) × 100 = $700.</p>
      <p>Breakeven: the premium lowers her cost from $50 to $48 a share.</p>`},
    {k:'The catch', t:'Capped above, cushioned a little below', b:`
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Ends at $65</div>
          <p>Shares alone: +$1,500</p>
          <div class="pf-r">Covered call<b class="mono good-t">+$700</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Ends at $40</div>
          <p>Shares alone: −$1,000</p>
          <div class="pf-r">Covered call<b class="mono bad-t">−$800</b></div>
        </div>
      </div>
      <p>Above $55, every extra dollar goes to the call buyer. Below $48, Lina loses money like any shareholder, just $200 less, because the premium only covers $2 a share.</p>`},
    {k:'In practice', t:'Called away', b:`
      <p>If Cedar Tech ends above $55, Lina will usually be assigned and her shares sold at $55. She keeps the $200 premium either way.</p>
      <div class="term"><span class="term-k">Key term</span><b>Called away:</b> when shares you own are sold at the strike because a call you sold was exercised.</div>
      <p>A covered call swaps big possible gains for cash today. It fits a view that the stock will drift sideways or rise only a little before expiry.</p>
      <p>The shares and the call are tied together: selling the shares while the call is still open would leave a naked call behind.</p>`}
  ],
  qs:[
    {q:'What is a covered call?',
     o:['Buying 100 shares and buying a call on them','Owning 100 shares and selling one call on them','Selling a call without owning the shares','Selling 100 shares and buying a call'], a:1,
     e:'The shares cover the call: if it is exercised, the seller delivers shares they already own.'},
    {q:'Rami bought 100 shares at $30 and sells the $33 call for $1. What is his maximum profit at expiry?',
     o:['$100','$300','$400','There is no limit'], a:2,
     e:'His shares can be called away at $33. (33 − 30 + 1) × 100 = $400.'},
    {q:'Same trade: Rami paid $30 a share and collected $1 for the call. Where does he break even at expiry?',
     o:['$29','$31','$33','$34'], a:0,
     e:'The $1 premium lowers his cost: $30 − $1 = $29.'},
    {q:'Lina owns shares bought at $50 and sold the $55 call. The stock jumps to $80 by expiry. What did the call make her give up?',
     o:['The premium she collected','The gain from $50 to $55','Nothing, covered calls keep all the upside','The gain above $55'], a:3,
     e:'Her shares are sold at $55, so the rise from $55 to $80 goes to the call buyer. She still keeps the premium.'},
    {q:'True or false: a covered call fully protects the shares if their price crashes.',
     o:['True','False'], a:1,
     e:'The premium only softens the fall by the amount collected. Below breakeven, the loss is the shares\' loss minus the premium.'}
  ]
};

const U5_PROTECTIVE_PUTS = {
  title:'Protective puts', min:4,
  cards:[
    {k:'The idea', t:'Insurance for your shares', b:`
      <p class="lead">Own 100 shares and buy one put on them. If the price crashes, the put lets you sell at the strike, so the losses stop there.</p>
      <div class="term"><span class="term-k">Key term</span><b>Protective put:</b> buying a put on shares you already own, to lock in a minimum price you can sell them for until expiry.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Setting a floor', b:`
      <p>Omar bought 100 Cedar Tech shares at $50. He buys the $45 put for $1.50, which costs $150.</p>
      <div class="kv"><div><b>$45</b><span>Floor</span></div><div><b>$1.50</b><span>Premium</span></div><div><b class="bad-t">−$650</b><span>Max loss</span></div><div><b>$51.50</b><span>Breakeven</span></div></div>
      <p>Max loss: $5 a share from $50 down to the $45 floor, plus the $1.50 premium. (50 − 45 + 1.50) × 100 = $650.</p>
      <p>Breakeven: the shares have to rise enough to pay for the put. $50 + $1.50 = $51.50.</p>`},
    {k:'At expiry', t:'Crash or rally', b:`
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Ends at $30</div>
          <p>Shares alone: −$2,000</p>
          <div class="pf-r">With the put<b class="mono bad-t">−$650</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Ends at $70</div>
          <p>Shares alone: +$2,000</p>
          <div class="pf-r">With the put<b class="mono good-t">+$1,850</b></div>
        </div>
      </div>
      <p>At $30, the put is worth (45 − 30) × 100 = $1,500, which cancels every dollar lost below $45. At $70, the put expires worthless and Omar keeps the whole rise, minus the $150 it cost. There is no cap on the upside.</p>`},
    {k:'The catch', t:'Insurance isn\'t free', b:`
      <p>The premium is paid whether the crash comes or not. If the same protection cost $1.50 every three months, a year of it would cost $6 a share: 12% of what Omar paid.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Higher strike</div><b>Higher floor</b><p>Less loss before the put starts paying, but a bigger premium.</p></div>
        <div class="col good"><div class="col-h">Lower strike</div><b>Cheaper</b><p>A smaller premium, but a bigger drop before the put helps.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Hedge:</b> a position taken to reduce the risk of another one. A protective put hedges shares.</div>`}
  ],
  qs:[
    {q:'Sara owns 100 shares bought at $80 and buys the $75 put for $2. What is her maximum loss at expiry?',
     o:['$200','$500','$700','$8,000'], a:2,
     e:'(80 − 75 + 2) × 100 = $700: $500 from the shares falling to the strike, plus the $200 premium.'},
    {q:'Same trade. Where does Sara break even at expiry?',
     o:['$73','$77','$78','$82'], a:3,
     e:'The shares need to rise enough to cover the $2 premium: $80 + $2 = $82.'},
    {q:'What does a protective put do to the upside of the shares?',
     o:['Caps it at the strike','Leaves it open, minus the premium paid','Doubles it','Removes it completely'], a:1,
     e:'If the price rises, the put expires worthless. Every gain is kept, less what the put cost.'},
    {q:'In a protective put, what does the strike price act as?',
     o:['A floor: the price the shares can be sold at however far they fall','A ceiling on the gains','The price paid for the shares','The breakeven price'], a:0,
     e:'The put gives the right to sell at the strike, so losses below it are covered.'},
    {q:'True or false: if the stock rises and the put is never used, the premium is refunded.',
     o:['True','False'], a:1,
     e:'Like an insurance premium, it is paid whether or not the protection is needed.'}
  ]
};

const U5_SPREADS = {
  title:'Option spreads', min:5,
  cards:[
    {k:'The idea', t:'Buy one, sell one', b:`
      <p class="lead">A spread pairs two options on the same stock: you buy one and sell another. In this lesson, the one you sell pays for part of the one you buy, and in return it limits how much you can make.</p>
      <div class="term"><span class="term-k">Key term</span><b>Option spread:</b> buying one option and selling another of the same type (two calls or two puts) on the same stock. In this lesson both have the same expiry and different strikes.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'The bull call spread', b:`
      <p>Cedar Tech is at $50. Tarek buys the $50 call for $4 and sells the $55 call for $1.50, same expiry. He pays a net $2.50 a share, or $250. That's called a net debit.</p>
      <div class="kv"><div><b>$250</b><span>Net debit</span></div><div><b class="bad-t">−$250</b><span>Max loss</span></div><div><b class="good-t">+$250</b><span>Max profit</span></div><div><b>$52.50</b><span>Breakeven</span></div></div>
      <p>Max loss: at $50 or below, both calls expire worthless and the $250 is gone.</p>
      <p>Max profit: at $55 or above, the pair is worth the $5 gap between the strikes. (5 − 2.50) × 100 = $250.</p>
      <p>Breakeven: lower strike + debit. $50 + $2.50 = $52.50.</p>`},
    {k:'The shape', t:'Capped on both sides', b:`
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Profit at expiry of the bull call spread. A flat loss of $250 at $50 or below, rising through zero at $52.50, and a flat profit of $250 at $55 or above.">
        <line x1="40" y1="74" x2="290" y2="74" stroke="var(--line)" stroke-width="1.5"/>
        <g stroke="var(--line)" stroke-width="1.5" stroke-dasharray="3 4">
          <line x1="120" y1="18" x2="120" y2="130"/><line x1="160" y1="18" x2="160" y2="130"/><line x1="200" y1="18" x2="200" y2="130"/>
        </g>
        <polyline points="40,124 120,124 160,74" fill="none" stroke="var(--bear-deep)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="160,74 200,24 280,24" fill="none" stroke="var(--bull-deep)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="34" y="28" text-anchor="end">+$250</text><text x="34" y="78" text-anchor="end">$0</text><text x="34" y="128" text-anchor="end">−$250</text>
          <text x="120" y="141" text-anchor="middle">$50</text><text x="160" y="141" text-anchor="middle">$52.50</text><text x="200" y="141" text-anchor="middle">$55</text>
          <text x="160" y="155" text-anchor="middle">Stock price at expiry</text>
          <text x="240" y="16" text-anchor="middle" fill="var(--bull-ink)">Max profit</text><text x="80" y="116" text-anchor="middle" fill="var(--bear-ink)">Max loss</text>
        </g>
      </svg>
      <p>Compare it with buying the $50 call alone for $4, which costs $400 and has no cap:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Ends at $55</div>
          <p>Call alone: +$100</p>
          <div class="pf-r">Spread<b class="mono good-t">+$250</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Ends at $60</div>
          <p>Call alone: +$600</p>
          <div class="pf-r">Spread<b class="mono good-t">+$250</b></div>
        </div>
      </div>
      <p>The spread does better on a modest rise. The call alone does better on a big one.</p>`},
    {k:'The mirror image', t:'The bear put spread', b:`
      <p>To aim for a profit from a fall instead, flip it: buy a put and sell a put with a lower strike, same expiry. The loss is capped at the debit, and the profit at the gap between the strikes minus the debit.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Bull call spread</div><b>Gains if the stock rises</b><p>Buy the lower-strike call, sell the higher one.</p></div>
        <div class="col bad"><div class="col-h">Bear put spread</div><b>Gains if the stock falls</b><p>Buy the higher-strike put, sell the lower one.</p></div>
      </div>`}
  ],
  qs:[
    {q:'Ali buys the $40 call for $3 and sells the $45 call for $1, same expiry. What is his maximum loss?',
     o:['$100','$200','$300','$400'], a:1,
     e:'The net debit is $3 − $1 = $2 a share. $2 × 100 = $200.'},
    {q:'Same spread. What is Ali\'s maximum profit?',
     o:['$500','$200','There is no limit','$300'], a:3,
     e:'(Gap between strikes − debit) × 100 = (5 − 2) × 100 = $300.'},
    {q:'Same spread. Where does Ali break even at expiry?',
     o:['$41','$42','$43','$47'], a:1,
     e:'Lower strike + debit: $40 + $2 = $42.'},
    {q:'In a bull call spread, why sell the higher-strike call?',
     o:['To cut the cost of the trade, in return for capping the profit','To make the possible profit unlimited','To get more upside than a call alone','To avoid paying any premium at all'], a:0,
     e:'The premium collected pays for part of the call bought, but gains stop at the higher strike.'},
    {q:'Which of these is a bear put spread?',
     o:['Buy a lower-strike put, sell a higher-strike put, same expiry','Buy a put and a call at the same strike','Buy a higher-strike put, sell a lower-strike put, same expiry','Sell a put and buy 100 shares'], a:2,
     e:'It mirrors the bull call spread: the put bought has the higher strike, and the cheaper put sold below it caps the gain. It profits if the stock falls.'}
  ]
};

const U5_LEVERAGE = {
  title:'Leverage and risk', min:5,
  cards:[
    {k:'The idea', t:'Small money, big exposure', b:`
      <p class="lead">One call contract gives exposure to 100 shares for a fraction of their price. That magnifies percentage gains and losses, in both directions.</p>
      <div class="term"><span class="term-k">Key term</span><b>Leverage:</b> getting exposure to more of an asset than the money you put in, so a small price move becomes a big percentage gain or loss.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Same $5,000, two ways', b:`
      <p>Cedar Tech is at $50. Jana puts $5,000 into 100 shares. Ziad puts $5,000 into the $50 call at $2.50: that's $250 a contract, so 20 contracts covering 2,000 shares.</p>
      <p>At expiry the stock is at $60, up 20%.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Jana: shares</div>
          <p>100 shares × $10 rise</p>
          <div class="pf-r">Profit<b class="mono good-t">+$1,000</b></div>
          <div class="pf-r">Return<b class="mono good-t">+20%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Ziad: calls</div>
          <p>20 × ($10 − $2.50) × 100</p>
          <div class="pf-r">Profit<b class="mono good-t">+$15,000</b></div>
          <div class="pf-r">Return<b class="mono good-t">+300%</b></div>
        </div>
      </div>`},
    {k:'The other way', t:'When the move doesn\'t come', b:`
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Ends at $45</div>
          <p>Jana: −$500 (−10%)</p>
          <div class="pf-r">Ziad<b class="mono bad-t">−$5,000</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Ends at $50</div>
          <p>Jana: $0 (0%)</p>
          <div class="pf-r">Ziad<b class="mono bad-t">−$5,000</b></div>
        </div>
      </div>
      <p>A 10% dip costs Jana $500 and wipes out all of Ziad's $5,000. Even if the stock goes nowhere, his calls expire worthless. He needs $52.50 just to break even.</p>
      <p>Short-dated options with strikes far from the price are the extreme case. A $60 call with a week left might cost $0.10, but the stock would have to rise more than 20% in that week for it to make money at expiry. Many options like these expire worthless.</p>`},
    {k:'In practice', t:'Sizing the trade', b:`
      <p>A bought option can go to zero, so traders often decide in advance how much any one trade is allowed to lose, and size it to fit.</p>
      <p>Say a rule caps the possible loss on any one trade at 5% of a $10,000 account: $500. At $250 a contract, that's 2 contracts, not 20.</p>
      <div class="term"><span class="term-k">Key term</span><b>Position sizing:</b> choosing how much to put into one trade based on how much you could lose on it.</div>
      <p>Sellers face one more risk: most US stock options can be exercised on any day before expiry, so a seller can be assigned early.</p>
      <p>In Bullpen, options trades use fake money, so a strategy that loses costs nothing real.</p>`}
  ],
  qs:[
    {q:'A stock is at $30. Dana puts $3,000 into 20 contracts of the $30 call at $1.50. At expiry the stock is at $33. What is her profit?',
     o:['$300','$1,500','$3,000','$6,000'], a:2,
     e:'Each call is worth $3, so each contract makes ($3 − $1.50) × 100 = $150. 20 × $150 = $3,000, a 100% gain.'},
    {q:'Same setup, but at expiry the stock is at $29. How do 100 shares bought for $3,000 compare with Dana\'s calls?',
     o:['Shares −$100, calls −$100','Shares −$100, calls −$3,000','Both lose $3,000','Shares −$3,000, calls −$100'], a:1,
     e:'The shares lose $1 each: −$100. The calls are below the strike, so they expire worthless: −$3,000.'},
    {q:'Why do many short-dated options with strikes far from the current price expire worthless?',
     o:['The stock needs a big move in very little time','Exchanges cancel them before expiry','Their premiums are too high to sell','They can only be exercised on the first day'], a:0,
     e:'With only days left, the stock must jump past a distant strike just for the option to be worth anything at expiry.'},
    {q:'Why do traders limit how much of their account any one options trade can lose?',
     o:['Brokers forbid larger trades','Options always lose money','It lowers the premium they pay','The whole premium can go to zero'], a:3,
     e:'A bought option can expire worthless. Sizing each trade so a total loss is bearable stops one bad trade from sinking the account.'},
    {q:'True or false: the seller of a US stock option can only be assigned on the expiry date.',
     o:['True','False'], a:1,
     e:'Most US stock options can be exercised on any day before expiry, so sellers can be assigned early.'}
  ]
};

const U5_CHECK = {
  title:'Unit check', min:4, badge:{name:'Strategist', icon:'bolt'}, cards:[],
  qs:[
    {q:'Maya sold a naked $70 call for $3. At expiry the stock is at $95. What is her loss?',
     o:['$300','$2,200','$2,500','$2,800'], a:1,
     e:'She must hand over shares worth $95 for $70: (95 − 70) × 100 = $2,500, minus the $300 premium = $2,200.'},
    {q:'A trader sells a naked $60 put for $2.50. What is the most the trade can lose?',
     o:['$250','$6,000','$5,750','There is no limit'], a:2,
     e:'If the stock goes to $0, the seller still pays $60 a share. (60 − 2.50) × 100 = $5,750.'},
    {q:'Lina bought 100 shares at $40 and sold the $45 call for $1.20. At expiry the stock is at $52. What is her total profit?',
     o:['$120','$620','$1,200','$1,320'], a:1,
     e:'Her shares are called away at $45. (45 − 40 + 1.20) × 100 = $620. Holding the shares alone would have made $1,200.'},
    {q:'Omar bought 100 shares at $60 and the $55 put for $2. At expiry the stock is at $40. What is his total result?',
     o:['−$200','−$500','−$700','−$2,200'], a:2,
     e:'Shares lose $2,000, the put is worth (55 − 40) × 100 = $1,500, and it cost $200. −$2,000 + $1,500 − $200 = −$700.'},
    {q:'A trader buys the $100 call for $6 and sells the $110 call for $2, same expiry. At expiry the stock is at $107. What is the profit?',
     o:['$700','$600','−$400','$300'], a:3,
     e:'The $100 call is worth $7 and the $110 call expires worthless. ($7 − $4 debit) × 100 = $300.'},
    {q:'An investor owns 100 shares and wants to cap the possible loss while keeping the upside open. Which position does that?',
     o:['Selling a covered call','Buying a protective put','Selling a naked put','A bull call spread'], a:1,
     e:'A put sets a floor at its strike, and the shares keep all their upside, less the premium.'},
    {q:'A stock is at $40. $4,000 buys either 100 shares or 20 contracts of the $40 call at $2. At expiry the stock is at $44. What are the two returns?',
     o:['Shares +10%, calls +10%','Shares +4%, calls +40%','Shares +10%, calls +100%','Shares +10%, calls +200%'], a:2,
     e:'Shares: $400 on $4,000 = +10%. Calls: ($4 − $2) × 100 × 20 = $4,000 on $4,000 = +100%.'},
    {q:'Hana has a $20,000 account and a rule that no single trade can lose more than 2% of it. The calls she is looking at cost $1.60. What is the most contracts the rule allows?',
     o:['2','3','25','250'], a:0,
     e:'2% of $20,000 is $400. Each contract costs $1.60 × 100 = $160 and can go to zero. 2 contracts risk $320; 3 would risk $480.'}
  ]
};

const UNIT_OPTION_STRATEGIES = {id:'option-strategies', title:'Option strategies', level:'Advanced', lessons:[U5_BUY_VS_SELL, U5_COVERED_CALLS, U5_PROTECTIVE_PUTS, U5_SPREADS, U5_LEVERAGE, U5_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_OPTION_STRATEGIES = [
  {n:1, q:'Compared with buying an option, what is true about selling one?',
   o:['The seller pays the premium and can lose only that','The seller collects the premium but can lose far more than it','The seller has no obligations','Selling is only allowed on expiry day'], a:1,
   e:'The seller is paid up front, but takes on the duty to buy or sell shares if assigned, which can cost much more than the premium.'},
  {n:2, q:'Leo bought 100 shares at $20 and sold the $22 call for $0.80. At expiry the stock is at $30. What is his profit?',
   o:['$80','$280','$1,000','$1,080'], a:1,
   e:'His shares are called away at $22. (22 − 20 + 0.80) × 100 = $280.'},
  {n:3, q:'Rana bought 100 shares at $100 and the $90 put for $3. At expiry the stock is at $70. What is her total result?',
   o:['−$300','−$1,000','−$1,300','−$3,300'], a:2,
   e:'The put lets her sell at $90. (100 − 90 + 3) × 100 = $1,300 lost, however far the stock falls.'},
  {n:4, q:'A trader buys the $20 call for $2.75 and sells the $25 call for $0.75, same expiry. At expiry the stock is at $30. What is the profit?',
   o:['$1,000','$725','$500','$300'], a:3,
   e:'The debit is $2. Above $25 the spread is worth the $5 gap: (5 − 2) × 100 = $300.'},
  {n:5, q:'A stock is at $50. Jad buys 100 shares, and Nour spends the same $5,000 on $50 calls. At expiry the stock is still at $50. What happens?',
   o:['Both break even','Jad breaks even and Nour loses all $5,000','Both lose everything','Nour gains thanks to leverage'], a:1,
   e:'At the strike the calls have no intrinsic value, so they expire worthless. Jad\'s shares are worth what he paid.'}
];
