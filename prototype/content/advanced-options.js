/* ---------- Advanced option strategies ---------- */
const ADV_OPTIONS_STRADDLES = {
  title:'Buying a straddle', min:4,
  cards:[
    {k:'The idea', t:'A bet on a big move, either way', b:`
      <p class="lead">Sometimes traders expect a stock to make a big move but can't tell which way. A straddle can make money from a large move in either direction.</p>
      <div class="term"><span class="term-k">Key term</span><b>Straddle:</b> buying a call and a put on the same stock, with the same strike and the same expiry. If the stock rises, the call pays. If it falls, the put pays.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Two premiums, two breakevens', b:`
      <p>Cedar Tech trades at $50. Hadi buys the $50 call for $3 and the $50 put for $2.50, both expiring in 3 months. He pays $5.50 a share, or $550 for the pair.</p>
      <div class="kv"><div><b>$550</b><span>Total cost</span></div><div><b class="bad-t">−$550</b><span>Max loss</span></div><div><b>$44.50</b><span>Lower breakeven</span></div><div><b>$55.50</b><span>Upper breakeven</span></div></div>
      <p>Breakevens: strike ± total premium. $50 − $5.50 = $44.50 and $50 + $5.50 = $55.50. Whichever option pays has to cover both premiums, not just its own.</p>
      <p>Max loss: if Cedar Tech ends exactly at $50, both options expire worthless and all $550 is gone.</p>`},
    {k:'The shape', t:'A V with its point below zero', b:`
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Profit at expiry for a $50 straddle bought for $5.50. A V shape: minus $550 at a stock price of $50, crossing zero at $44.50 and $55.50, and plus $450 at $40 and at $60.">
        <line x1="40" y1="70" x2="260" y2="70" stroke="var(--line)" stroke-width="2"/>
        <polyline points="95,70 150,125 205,70" fill="none" stroke="var(--bear-deep)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="50" y1="25" x2="95" y2="70" stroke="var(--bull-deep)" stroke-width="3" stroke-linecap="round"/>
        <line x1="205" y1="70" x2="250" y2="25" stroke="var(--bull-deep)" stroke-width="3" stroke-linecap="round"/>
        <circle cx="50" cy="25" r="4" fill="var(--bull)"/>
        <circle cx="250" cy="25" r="4" fill="var(--bull)"/>
        <circle cx="95" cy="70" r="4" fill="var(--ink)"/>
        <circle cx="205" cy="70" r="4" fill="var(--ink)"/>
        <circle cx="150" cy="125" r="4" fill="var(--bear)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="40" y="12">Profit per pair</text>
          <text x="34" y="74" text-anchor="end">$0</text>
          <text x="44" y="29" text-anchor="end" fill="var(--bull-ink)">+$450</text>
          <text x="256" y="29" fill="var(--bull-ink)">+$450</text>
          <text x="164" y="128" fill="var(--bear-ink)">−$550 max loss</text>
          <text x="50" y="142" text-anchor="middle">$40</text><text x="95" y="142" text-anchor="middle">$44.50</text><text x="150" y="142" text-anchor="middle">$50</text><text x="205" y="142" text-anchor="middle">$55.50</text><text x="250" y="142" text-anchor="middle">$60</text>
          <text x="150" y="156" text-anchor="middle">Stock price at expiry</text>
        </g>
      </svg>
      <p>Below $50, the put gains $100 for every $1 the stock falls. Above $50, the call gains $100 for every $1 it rises. At $40 or at $60, one option is worth $10 a share: $1,000 − $550 = <b class="good-t">+$450</b>.</p>
      <p>The upside has no ceiling. The downside stops at a price of $0, where the put is worth $5,000: a $4,450 profit.</p>`},
    {k:'The catch', t:'Paying for two options', b:`
      <p>Hadi pays for two lots of time value, and both shrink every day the stock sits still. The price also depends on implied volatility: when traders already expect a big move, both options cost more and the breakevens sit further out.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Buying a straddle</div><b>Loss capped at $550</b><p>The most Hadi can lose is the two premiums.</p></div>
        <div class="col bad"><div class="col-h">Selling a straddle</div><b>No limit on the loss</b><p>The seller collects $550 but loses beyond the breakevens, and the call they sold has no ceiling.</p></div>
      </div>`}
  ],
  qs:[
    {q:'What is a straddle?',
     o:['Buying a call and a put with the same strike and expiry','Buying a call and selling a put with the same strike','Buying a call and a put with different strikes','Buying 100 shares and a put on them'], a:0,
     e:'A straddle pairs a call and a put at one strike and one expiry. Different strikes make a strangle, the next lesson. Shares plus a put is a protective put.'},
    {q:'A stock is at $80. You buy the $80 call for $4 and the $80 put for $3.50, same expiry. What are the breakevens at expiry?',
     o:['$76.50 and $84','$72.50 and $87.50','$76 and $83.50','$72.50 and $80'], a:1,
     e:'Total premium: $4 + $3.50 = $7.50. Breakevens: $80 − $7.50 = $72.50 and $80 + $7.50 = $87.50. Each option has to cover both premiums, not just its own.'},
    {q:'You buy a $30 straddle: the call costs $1.60 and the put $1.40. At expiry the stock is at $36. What is your profit on one contract of each?',
     o:['$600','$440','$0','$300'], a:3,
     e:'The call is worth $36 − $30 = $6, or $600. The put expires worthless. Total paid: ($1.60 + $1.40) × 100 = $300. $600 − $300 = $300.'},
    {q:'When does a straddle buyer lose the most at expiry?',
     o:['When the stock falls to $0','When the stock ends at either breakeven','When the stock ends exactly at the strike','When the stock rises sharply'], a:2,
     e:'At the strike, both options expire worthless and the whole premium is lost. At a breakeven the result is $0, and big moves either way make money.'},
    {q:'True or false: the seller of a straddle can lose no more than the premium they collected.',
     o:['True','False'], a:1,
     e:'The premium is the most a seller can make, not lose. Beyond the breakevens they lose money, and the call they sold has no ceiling.'}
  ]
};

const ADV_OPTIONS_STRANGLES = {
  title:'Buying a strangle', min:4,
  cards:[
    {k:'The idea', t:'A cheaper bet on a big move', b:`
      <p class="lead">A strangle is the straddle's cheaper cousin. Both options are out of the money, so they cost less, but the stock has to move further before the trade makes money.</p>
      <div class="term"><span class="term-k">Key term</span><b>Strangle:</b> buying an out-of-the-money call and an out-of-the-money put on the same stock, with the same expiry. The call's strike is above the stock price and the put's is below it.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Wider breakevens', b:`
      <p>Cedar Tech is still at $50. Hadi buys the $55 call for $1.20 and the $45 put for $1.00, both expiring in 3 months, like his straddle. Total: $2.20 a share, or $220.</p>
      <div class="kv"><div><b>$220</b><span>Total cost</span></div><div><b class="bad-t">−$220</b><span>Max loss</span></div><div><b>$42.80</b><span>Lower breakeven</span></div><div><b>$57.20</b><span>Upper breakeven</span></div></div>
      <p>Lower breakeven: put strike − total premium. $45 − $2.20 = $42.80.</p>
      <p>Upper breakeven: call strike + total premium. $55 + $2.20 = $57.20.</p>
      <p>Anywhere from $45 to $55 at expiry, both options expire worthless and all $220 is lost.</p>`},
    {k:'Side by side', t:'Straddle or strangle?', b:`
      <p>Hadi's straddle against this strangle, at expiry:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Straddle</div>
          <p>$50 call + $50 put: $550</p>
          <div class="pf-r">Ends at $50<b class="mono bad-t">−$550</b></div>
          <div class="pf-r">Ends at $56<b class="mono good-t">+$50</b></div>
          <div class="pf-r">Ends at $62<b class="mono good-t">+$650</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Strangle</div>
          <p>$55 call + $45 put: $220</p>
          <div class="pf-r">Ends at $50<b class="mono bad-t">−$220</b></div>
          <div class="pf-r">Ends at $56<b class="mono bad-t">−$120</b></div>
          <div class="pf-r">Ends at $62<b class="mono good-t">+$480</b></div>
        </div>
      </div>
      <p>The strangle costs $330 less, so it loses less if the stock goes nowhere. But it needs Cedar Tech below $42.80 or above $57.20, against $44.50 and $55.50 for the straddle. At $56 the straddle makes money and the strangle doesn't.</p>`},
    {k:'The catch', t:'Cheap for a reason', b:`
      <p>Out-of-the-money options cost less because the stock is less likely to get far enough for them to pay. The further apart the strikes, the cheaper the strangle, and the bigger the move it needs.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Buying a strangle</div><b>Loss capped at $220</b><p>The most Hadi can lose is the two premiums.</p></div>
        <div class="col bad"><div class="col-h">Selling a strangle</div><b>No limit on the loss</b><p>The seller keeps all $220 anywhere from $45 to $55. Past the breakevens they lose, and the call they sold has no ceiling.</p></div>
      </div>
      <p>The next lesson adds two more options to a sold strangle to put a cap on that loss.</p>`}
  ],
  qs:[
    {q:'A stock is at $80. Which of these is a strangle?',
     o:['Buy the $80 call and the $80 put, same expiry','Buy the $75 call and sell the $85 call, same expiry','Buy the $85 call and the $75 put, same expiry','Sell the $85 call and buy 100 shares'], a:2,
     e:'A strangle buys an out-of-the-money call (strike above the price) and an out-of-the-money put (strike below it). The same strike for both makes a straddle. The other two are a bull call spread and a covered call.'},
    {q:'A stock is at $100. You buy the $110 call for $2 and the $90 put for $1.50, same expiry. What are the breakevens at expiry?',
     o:['$86.50 and $113.50','$88.50 and $112','$96.50 and $103.50','$90 and $110'], a:0,
     e:'Total premium: $2 + $1.50 = $3.50. Lower: $90 − $3.50 = $86.50. Upper: $110 + $3.50 = $113.50. Each side has to cover both premiums.'},
    {q:'Same strangle: $110 call for $2, $90 put for $1.50. At expiry the stock is at $104. What is the result on one contract of each?',
     o:['+$400','$0','−$200','−$350'], a:3,
     e:'$104 is between $90 and $110, so both options expire worthless. The whole $350 premium is lost.'},
    {q:'Same strangle. At expiry the stock is at $80. What is the result?',
     o:['+$1,000','+$650','+$850','−$350'], a:1,
     e:'The put is worth $90 − $80 = $10, or $1,000. The call expires worthless. $1,000 − $350 = $650.'},
    {q:'Compared with a straddle on the same stock and expiry, a strangle usually:',
     o:['Costs less, but needs a bigger move to make money','Costs more, but needs a smaller move','Costs less and needs a smaller move','Has no limit on how much the buyer can lose'], a:0,
     e:'Out-of-the-money options are cheaper, so the strangle costs less. But the stock has to get past a strike and then cover the premium, so the breakevens sit further out.'}
  ]
};

const ADV_OPTIONS_IRON_CONDORS = {
  title:'Iron condors', min:5,
  cards:[
    {k:'The idea', t:'A bet on a quiet stock', b:`
      <p class="lead">A straddle or strangle buyer wants a big move. An iron condor is built for the opposite: a stock that stays inside a range until expiry.</p>
      <div class="term"><span class="term-k">Key term</span><b>Iron condor:</b> selling an out-of-the-money put spread and an out-of-the-money call spread on the same stock, with the same expiry. The trader collects a net credit up front: more premium comes in than goes out.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Four options, one credit', b:`
      <p>Cedar Tech is at $50. Maya makes four trades, all expiring in 3 months:</p>
      <div class="split">
        <div class="col good"><div class="col-h">Put spread</div><b>Sell $45, buy $40</b><p>$1.00 − $0.30 = $0.70 credit</p></div>
        <div class="col good"><div class="col-h">Call spread</div><b>Sell $55, buy $60</b><p>$1.20 − $0.40 = $0.80 credit</p></div>
      </div>
      <div class="kv"><div><b class="good-t">+$150</b><span>Max profit</span></div><div><b class="bad-t">−$350</b><span>Max loss</span></div><div><b>$43.50</b><span>Lower breakeven</span></div><div><b>$56.50</b><span>Upper breakeven</span></div></div>
      <p>Net credit: $0.70 + $0.80 = $1.50 a share, or $150.</p>
      <p>Max profit: anywhere from $45 to $55, all four options expire worthless and Maya keeps the $150.</p>
      <p>Max loss: at $40 or below, or $60 or above, one spread is worth its full $5 width. (5 − 1.50) × 100 = $350.</p>
      <p>Breakevens: $45 − $1.50 = $43.50 and $55 + $1.50 = $56.50.</p>`},
    {k:'The shape', t:'A flat top and two floors', b:`
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Profit at expiry for the iron condor. Flat at minus $350 at $40 or below, rising through zero at $43.50 to a flat plus $150 between $45 and $55, then falling through zero at $56.50 to a flat minus $350 at $60 or above.">
        <line x1="40" y1="46" x2="290" y2="46" stroke="var(--line)" stroke-width="1.5"/>
        <polyline points="40,116 80,116 108,46" fill="none" stroke="var(--bear-deep)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="108,46 120,16 200,16 212,46" fill="none" stroke="var(--bull-deep)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="212,46 240,116 280,116" fill="none" stroke="var(--bear-deep)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="108" cy="46" r="4" fill="var(--ink)"/>
        <circle cx="212" cy="46" r="4" fill="var(--ink)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="34" y="20" text-anchor="end">+$150</text><text x="34" y="50" text-anchor="end">$0</text><text x="34" y="120" text-anchor="end">−$350</text>
          <text x="160" y="32" text-anchor="middle" fill="var(--bull-ink)">Max profit</text>
          <text x="62" y="128" text-anchor="middle" fill="var(--bear-ink)">Max loss</text><text x="258" y="128" text-anchor="middle" fill="var(--bear-ink)">Max loss</text>
          <text x="80" y="142" text-anchor="middle">$40</text><text x="120" y="142" text-anchor="middle">$45</text><text x="160" y="142" text-anchor="middle">$50</text><text x="200" y="142" text-anchor="middle">$55</text><text x="240" y="142" text-anchor="middle">$60</text>
          <text x="160" y="156" text-anchor="middle">Stock price at expiry</text>
        </g>
      </svg>
      <p>Between $45 and $55, Maya keeps the full $150. Past a sold strike, each $1 the stock moves costs her $100, until the option she bought stops the loss at $40 or $60. The dots mark the breakevens, $43.50 and $56.50.</p>`},
    {k:'The catch', t:'Small wins, bigger losses', b:`
      <p>The trade risks $350 to make $150. One full loss wipes out the gains from more than two full wins, so winning often isn't enough on its own.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Iron condor</div>
          <p>Collects $150</p>
          <div class="pf-r">Worst case<b class="mono bad-t">−$350</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Sold strangle only</div>
          <p>Collects ($1.00 + $1.20) × 100 = $220</p>
          <div class="pf-r">Worst case<b class="mono bad-t">No limit</b></div>
        </div>
      </div>
      <p>The $40 put and $60 call cost $70 of the credit. In return they cap the loss. Like most sold stock options, the $45 put and $55 call can also be assigned before expiry. The Managing positions lesson covers what that means.</p>`}
  ],
  qs:[
    {q:'A stock is at $100. Which four trades, all with the same expiry, make an iron condor?',
     o:['Buy the $95 put, sell the $90 put, buy the $105 call, sell the $110 call','Sell the $95 put, buy the $90 put, sell the $105 call, buy the $110 call','Buy the $100 call and the $100 put','Sell the $95 put and the $105 call only'], a:1,
     e:'An iron condor sells the nearer out-of-the-money options and buys the ones further out, for a net credit. The first choice is the reverse and costs money. Selling only the $95 put and $105 call is a sold strangle, with no cap on the loss.'},
    {q:'An iron condor has a $90/$95 put spread and a $105/$110 call spread, for a $2 total credit. What is its maximum loss?',
     o:['$200','$500','$300','$700'], a:2,
     e:'Each spread is $5 wide. If one ends fully in the money it costs $5, offset by the $2 credit: (5 − 2) × 100 = $300.'},
    {q:'Same iron condor, $2 credit. Between which prices at expiry does it make money?',
     o:['Between $95 and $105','Between $93 and $107','Between $90 and $110','Between $97 and $103'], a:1,
     e:'Breakevens: $95 − $2 = $93 and $105 + $2 = $107. The credit lets the stock go $2 past each sold strike before the trade loses.'},
    {q:'Same iron condor. At expiry the stock is at $108. What is the result?',
     o:['−$100','+$200','−$300','+$100'], a:0,
     e:'The puts expire worthless. The $105 call sold is worth $3 and the $110 call bought is worthless, so the call spread costs $300. $200 credit − $300 = −$100.'},
    {q:'Why does an iron condor include the two options that are bought?',
     o:['They make the possible profit unlimited','They raise the credit collected','They stop the sold options from being assigned','They cap the loss, in return for a smaller credit'], a:3,
     e:'Without them, the trade is a sold strangle: a bigger credit, but no ceiling on the loss above the call strike. The bought options use up part of the credit and cap the loss.'}
  ]
};

const ADV_OPTIONS_CALENDARS = {
  title:'Calendar spreads', min:5,
  cards:[
    {k:'The idea', t:'Same strike, two dates', b:`
      <p class="lead">The spreads so far used one expiry date. A calendar spread uses two: it sells an option that expires soon and buys one that expires later, at the same strike.</p>
      <div class="term"><span class="term-k">Key term</span><b>Calendar spread:</b> selling a near-dated option and buying a later-dated option of the same type (two calls or two puts) at the same strike. Also called a time spread. It costs a net debit.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Why it works', b:`
      <p>Cedar Tech is at $50. Illustrative prices, with implied volatility at 30%:</p>
      <div class="kv kv3"><div><b>$1.72</b><span>Sell: $50 call, 30 days</span></div><div><b>$2.42</b><span>Buy: $50 call, 60 days</span></div><div><b>$70</b><span>Net debit</span></div></div>
      <p>$2.42 − $1.72 = $0.70 a share, or $70.</p>
      <p>Time decay speeds up near expiry. Say Cedar Tech sits at $50 for 30 days and IV stays at 30%. The near call loses all $1.72. The far call now has 30 days left, so it's worth $1.72, the near call's price at the start. It lost only $2.42 − $1.72 = $0.70.</p>`},
    {k:'At the near expiry', t:'Best if the stock stays put', b:`
      <p>When the near call expires, the spread is worth the far call minus whatever the near call is worth. With Cedar Tech still at $50, the near call is worthless and the far call is worth $1.72: $1.72 − $0.70 = $1.02 a share, or <b class="good-t">+$102</b>.</p>
      <div class="kv kv3"><div><b class="bad-t">−$48</b><span>Stock at $45</span></div><div><b class="good-t">+$102</b><span>Stock at $50</span></div><div><b class="bad-t">−$40</b><span>Stock at $55</span></div></div>
      <p>At $45, the far call has dropped to about $0.22. At $55, the near call is worth $5 and the far call about $5.30, so the pair is worth about $0.30. Illustrative prices again, with IV still 30%. A move either way costs more than time decay earned.</p>`},
    {k:'The limit', t:'Roughly capped, not fixed', b:`
      <p>A big move pushes the spread's value toward zero. Far below the strike, both calls are nearly worthless. Far above it, both are worth about their intrinsic value. So if both are closed at the near expiry, the most the spread can lose is about the $70 paid. It's approximate, because bid-ask spreads and fees can add to it.</p>
      <div class="split">
        <div class="col good"><div class="col-h">IV rises</div><b>Helps</b><p>The later-dated call has more vega, so it gains more than the near one.</p></div>
        <div class="col bad"><div class="col-h">IV falls</div><b>Hurts</b><p>The spread can lose money even with the stock right at $50.</p></div>
      </div>
      <p>If the far call isn't closed at the near expiry, it's just a bought option, still losing time value. The same idea works with two puts.</p>`}
  ],
  qs:[
    {q:'What is a calendar spread?',
     o:['Buying a call and a put with the same strike and expiry','Selling a near-dated option and buying a later-dated one at the same strike','Buying one call and selling another with a higher strike, same expiry','Buying a near-dated option and selling a later-dated one at the same strike'], a:1,
     e:'A calendar spread sells the option that expires sooner and buys the one that expires later, same strike and same type. The last choice is the reverse.'},
    {q:'A stock is at $80. You sell the 1-month $80 call for $2.10 and buy the 3-month $80 call for $3.66. What is the net debit on one contract of each?',
     o:['$1.56','$366','$576','$156'], a:3,
     e:'$3.66 − $2.10 = $1.56 a share. × 100 = $156.'},
    {q:'Why can a calendar spread make money if the stock stays near the strike?',
     o:['The near option loses time value faster than the later one','Both options gain value as time passes','The later option gains time value every day','Implied volatility always rises before the near expiry'], a:0,
     e:'Time decay speeds up near expiry. The option sold drains quickly, while the one bought keeps more of its value.'},
    {q:'Same spread, $156 paid. Both options are closed when the near one expires. Roughly what is the most it can lose?',
     o:['$366','There is no limit','About $156','$210'], a:2,
     e:'A big move either way pushes the pair\'s value toward zero, so the loss is roughly capped at the debit paid. It\'s approximate, because fees and bid-ask spreads add to it.'},
    {q:'True or false: if implied volatility falls, a calendar spread tends to lose value, even with the stock at the strike.',
     o:['True','False'], a:0,
     e:'The later-dated option has more vega, so a fall in implied volatility takes more off the option bought than off the one sold.'}
  ]
};

const ADV_OPTIONS_MANAGING = {
  title:'Managing positions', min:5,
  cards:[
    {k:'The idea', t:'No need to wait for expiry', b:`
      <p class="lead">Most payoffs in this unit are worked out at expiry. But an options trade can be closed on any trading day, at whatever the options are worth then.</p>
      <div class="term"><span class="term-k">Key term</span><b>Closing a position:</b> making the opposite trade to the one that opened it. Selling an option you bought, or buying back one you sold.</div>
      <div class="split">
        <div class="col good"><div class="col-h">Lock in a gain</div><b>Iron condor: +$110</b><p>Maya's iron condor collected $1.50. With a month left and Cedar Tech at $50, closing all four options costs a net $0.40: (1.50 − 0.40) × 100 = $110, and no more risk of losing $350.</p></div>
        <div class="col bad"><div class="col-h">Cut a loss</div><b>Straddle: −$100</b><p>Hadi's straddle cost $5.50. A month later, with 2 months left, Cedar Tech still at $50 and IV unchanged, it's worth about $4.50. Selling it loses $100 instead of risking all $550.</p></div>
      </div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Around earnings', t:'The move has to beat the IV drop', b:`
      <p>Qadisha Games is at $40 and reports results tonight. With IV at 80%, its $40 call and $40 put, 10 days from expiry, cost $2.11 each. A straddle costs $4.22, or $422. By the next morning the stock is up $3 to $43, and IV has dropped to 40%:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Before the report</div>
          <p>Call $2.11 + put $2.11</p>
          <div class="pf-r">Straddle<b class="mono">$4.22</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">After the report</div>
          <p>Call $3.16 + put $0.16</p>
          <div class="pf-r">Straddle<b class="mono bad-t">$3.32</b></div>
        </div>
      </div>
      <p>A 7.5% jump, and the straddle still lost $90. With IV at 40%, the stock needed to move about $4.10 either way overnight just to break even. (Illustrative prices.)</p>
      <p>Selling the straddle before the report collects those high prices instead, but loses if the move turns out bigger than the market expected.</p>`},
    {k:'Rolling', t:'Swapping for a later option', b:`
      <p>Sami owns 100 Byblos Foods shares and sold a $55 call on them for $1.50. Expiry is in 3 days and the stock is at $57, so his shares are likely to be called away. To keep them, he can roll the call. Illustrative prices:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Roll out</div>
          <p>Buy back the $55 call for $2.10. Sell next month's $55 call for $3.10.</p>
          <div class="pf-r">Net credit<b class="mono good-t">+$100</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Roll up and out</div>
          <p>Buy back the $55 call for $2.10. Sell next month's $60 call for $0.90.</p>
          <div class="pf-r">Net debit<b class="mono bad-t">−$120</b></div>
        </div>
      </div>
      <p>Rolling up to $60 costs $120 now. In return, if the shares are called away later, Sami sells them at $60 each instead of $55: $500 more for 100 shares.</p>
      <div class="term"><span class="term-k">Key term</span><b>Rolling:</b> closing an option position and opening a similar one with a later expiry, a different strike, or both, usually in one order.</div>`},
    {k:'The catch', t:'Rolling doesn\'t undo a loss', b:`
      <p>Sami's first call was sold for $1.50 and bought back for $2.10: a $60 loss on that call, whichever way he rolls. A credit on the roll comes from selling a new call, which ties his shares up for another month.</p>
      <div class="term"><span class="term-k">Key term</span><b>Early assignment:</b> being assigned on an option you sold before its expiry date. It's more likely when the option is deep in the money with little time value left, because the holder gives up little by exercising.</div>
      <p>A sold call carries extra risk just before a dividend: a holder may exercise early to own the shares in time to collect it.</p>
      <p>In a spread, early assignment changes the position. If the $45 put in Maya's iron condor were assigned, she would have to buy 100 shares at $45. The $40 put she bought still limits the loss, but she now holds shares, which takes cash or margin.</p>`}
  ],
  qs:[
    {q:'The day before earnings, with the stock at $60, a $60 call and a $60 put cost $2.66 each. You buy both. The next day the stock is at $63, the call is worth $3.35 and the put $0.35. What is the result if you close the straddle?',
     o:['+$300','+$69','−$532','−$162'], a:3,
     e:'Paid: $2.66 × 2 = $5.32. Now worth: $3.35 + $0.35 = $3.70. ($3.70 − $5.32) × 100 = −$162. The stock moved, but the drop in implied volatility took more.'},
    {q:'You sold an iron condor for a $1.80 credit. A week later you can close all four options for a net $0.60. If you close now, what is your profit on one contract of each?',
     o:['$180','$120','$60','$240'], a:1,
     e:'You keep the difference: ($1.80 − $0.60) × 100 = $120. Closing also ends the risk of a bigger loss before expiry.'},
    {q:'What does rolling an option mean?',
     o:['Closing it and opening a similar one with a later expiry, a different strike, or both','Exercising it before expiry','Letting it expire and buying the same one again','Turning a call into a put'], a:0,
     e:'A roll is two trades, usually sent as one order: close the old option and open the new one.'},
    {q:'You sold a put, and now buy it back for $3.40. At the same time you sell a later-dated put at the same strike for $4.10. What is the net of the roll on one contract?',
     o:['A net debit of $70','A net credit of $410','A net credit of $70','A net debit of $750'], a:2,
     e:'You receive $4.10 and pay $3.40: $0.70 a share in your favour. × 100 = a $70 net credit.'},
    {q:'Which option that you sold is most likely to be assigned early?',
     o:['One far out of the money','One with months left and lots of time value','One exactly at the money on the day you sold it','One deep in the money with little time value left'], a:3,
     e:'Exercising early throws away any time value left. When there is little left, the holder gives up little by exercising.'}
  ]
};

const ADV_OPTIONS_CHECK = {
  title:'Unit check', min:4, badge:{name:'Volatility Trader', icon:'flame'}, cards:[],
  qs:[
    {q:'You buy a $60 straddle: the call costs $3.20 and the put $2.80. At expiry the stock is at $52. What is your profit?',
     o:['+$800','+$520','+$200','−$600'], a:2,
     e:'The put is worth $60 − $52 = $8, or $800. The call expires worthless. Paid: ($3.20 + $2.80) × 100 = $600. $800 − $600 = $200.'},
    {q:'A stock is at $100. A $100 straddle costs $8. A strangle with the $105 call and the $95 put costs $3.50. Same expiry. At expiry the stock is at $108. What are the results?',
     o:['Straddle +$800, strangle +$300','Straddle $0, strangle −$50','Straddle $0, strangle +$300','Straddle −$800, strangle −$350'], a:1,
     e:'Straddle: the call is worth $8, exactly what was paid, so $0. Strangle: the $105 call is worth $3 against $3.50 paid, so −$50. The strangle was cheaper but needed a bigger move.'},
    {q:'A stock is at $70. A strangle uses the $75 call at $1.20 and the $65 put at $0.80. How far does the stock have to move by expiry for the strangle to break even?',
     o:['$5 either way','$2 either way','$9 either way','$7 either way'], a:3,
     e:'Total premium: $2. Breakevens: $65 − $2 = $63 and $75 + $2 = $77. Both are $7 from $70.'},
    {q:'An iron condor uses a $70/$75 put spread and an $85/$90 call spread, for a $1.40 credit. At expiry the stock is at $73.50. What is the result?',
     o:['+$140','−$360','−$10','+$10'], a:2,
     e:'The $75 put sold is worth $1.50. Everything else expires worthless. $1.40 credit − $1.50 = −$0.10 a share, or −$10.'},
    {q:'An iron condor has spreads $10 wide and collects a $2.50 credit. What are its maximum profit and maximum loss?',
     o:['$250 and $750','$250 and $1,000','$750 and $250','$250 and $1,250'], a:0,
     e:'Max profit is the credit: $250. Max loss: (10 − 2.50) × 100 = $750. It risks three times what it can make.'},
    {q:'Ahmad sells a 1-month $40 put for $1.30 and buys a 3-month $40 put for $2.26. What does he pay, and where does he want the stock when the 1-month put expires?',
     o:['$356, close to $40','$96, far below $40','$130, far above $40','$96, close to $40'], a:3,
     e:'Net debit: ($2.26 − $1.30) × 100 = $96. Like a call calendar, it does best with the stock near the strike, so the near put expires worthless while the later one keeps its time value.'},
    {q:'The day before earnings, with the stock at $80, Nour sells an $80 straddle for $8. The next day the stock is at $84, implied volatility has dropped, and the straddle is worth $6.10. If she buys it back, what is her result?',
     o:['−$400','+$190','−$190','+$800'], a:1,
     e:'She collected $8 and pays $6.10 to close: ($8 − $6.10) × 100 = $190. The fall in implied volatility outweighed the $4 move. A bigger move could have cost her far more.'},
    {q:'Two weeks before expiry, the stock in Dana\'s iron condor has fallen far below the strike of the put she sold, and that put has almost no time value left. What extra risk does she face?',
     o:['She may be assigned early and have to buy 100 shares at that put\'s strike','Her maximum loss becomes unlimited','The put she bought can be taken away','She must sell 100 shares at the strike of the call she sold'], a:0,
     e:'A deep in-the-money option with little time value left is a likely candidate for early exercise. If assigned, she buys 100 shares at the strike. The put she bought still limits the loss.'}
  ]
};

const UNIT_ADV_OPTIONS = {id:'advanced-options', title:'Advanced option strategies', level:'Advanced', lessons:[ADV_OPTIONS_STRADDLES, ADV_OPTIONS_STRANGLES, ADV_OPTIONS_IRON_CONDORS, ADV_OPTIONS_CALENDARS, ADV_OPTIONS_MANAGING, ADV_OPTIONS_CHECK]};

/* Placement: one question per lesson, n = lesson number 1-5. Different from the lesson questions. */
const PLACEMENT_ADV_OPTIONS = [
  {n:1, q:'You buy a $25 call for $1.50 and a $25 put for $1.20, same expiry. Where are the breakevens at expiry?',
   o:['$23.80 and $26.50','$22.30 and $27.70','$25 and $27.70','$19.60 and $30.40'], a:1,
   e:'Total premium: $1.50 + $1.20 = $2.70. Breakevens: $25 − $2.70 = $22.30 and $25 + $2.70 = $27.70.'},
  {n:2, q:'A stock is at $40. You buy the $44 call for $0.90 and the $36 put for $0.60, same expiry. At expiry the stock is at $47. What is your profit?',
   o:['+$300','+$210','−$150','+$150'], a:3,
   e:'The call is worth $47 − $44 = $3, or $300. The put expires worthless. Paid: ($0.90 + $0.60) × 100 = $150. $300 − $150 = $150.'},
  {n:3, q:'A stock is at $200. An iron condor uses a $185/$190 put spread and a $210/$215 call spread, for a $1.75 credit. Where must the stock end at expiry for the trade to make money?',
   o:['Between $190 and $210','Between $185 and $215','Between $188.25 and $211.75','Between $191.75 and $208.25'], a:2,
   e:'Breakevens: $190 − $1.75 = $188.25 and $210 + $1.75 = $211.75. Between them, the credit outweighs anything the sold options are worth.'},
  {n:4, q:'A trader sells a 2-week $60 call and buys a 2-month $60 call. The stock is at $60 when the 2-week call expires. What is true at that moment?',
   o:['The call sold expires worthless, and the call bought still has time value','Both calls are worthless','The trader must buy 100 shares at $60','The spread has lost all it cost'], a:0,
   e:'At the strike, the expiring call has no intrinsic value, so it is worthless. The later call still has about six weeks left, so it keeps time value. That gap is where a calendar spread makes its money.'},
  {n:5, q:'A trader sold a call for $1.20. Near expiry it costs $1.90 to buy back. She rolls it, selling a later-dated call with a higher strike for $1.40. What is the net of the roll on one contract?',
   o:['A net credit of $20','A net debit of $50','A net debit of $70','A net credit of $140'], a:1,
   e:'The roll is the buyback plus the new sale: $1.40 − $1.90 = −$0.50, a net debit of $50. The original $1.20 isn\'t part of the roll. On the first call alone she lost $70.'}
];

/* MATHS CHECK (all P&L per one contract of each option = 100 shares, at expiry, no fees, unless stated)
   Lesson 1 straddle, Cedar Tech $50: call $3 + put $2.50 = $5.50 → $550. Breakevens 50 − 5.50 = 44.50, 50 + 5.50 = 55.50.
     At $50: both worthless → −$550. At $40: put 10 → 1,000 − 550 = +$450. At $60: call 10 → +$450. At $0: put 50 → 5,000 − 550 = +$4,450.
     Diagram: x = 50 + (price − 40) × 10, y = 70 − profit ÷ 10. (40,+450)→(50,25); (44.50,0)→(95,70); (50,−550)→(150,125); (55.50,0)→(205,70); (60,+450)→(250,25).
     Q2: 4 + 3.50 = 7.50 → 72.50 / 87.50 (distractors 80 − 3.50 = 76.50, 80 + 4 = 84; 80 − 4 = 76, 80 + 3.50 = 83.50).
     Q3: call (36 − 30) × 100 = 600 − (1.60 + 1.40) × 100 = +$300 (distractor 600 − 160 = 440).
   Lesson 2 strangle: $55 call 1.20 + $45 put 1.00 = 2.20 → $220. Breakevens 45 − 2.20 = 42.80, 55 + 2.20 = 57.20. 45 to 55: −$220.
     Compare: at 50: straddle −550, strangle −220. At 56: straddle 600 − 550 = +50; strangle 100 − 220 = −120. At 62: straddle 1,200 − 550 = +650; strangle 700 − 220 = +480. 550 − 220 = 330.
     Q2: 2 + 1.50 = 3.50 → 90 − 3.50 = 86.50, 110 + 3.50 = 113.50 (distractors 90 − 1.50 = 88.50, 110 + 2 = 112; 100 ± 3.50).
     Q3: at 104 both worthless → −$350. Q4: at 80 put 10 → 1,000 − 350 = +$650 (distractor 1,000 − 150 = 850).
   Lesson 3 iron condor: sell 45p 1.00, buy 40p 0.30 → 0.70; sell 55c 1.20, buy 60c 0.40 → 0.80; credit 1.50 → $150.
     Max profit 45–55: +$150. Max loss (5 − 1.50) × 100 = $350 at ≤40 or ≥60. Breakevens 45 − 1.50 = 43.50, 55 + 1.50 = 56.50.
     Sold strangle alone: 1.00 + 1.20 = 2.20 → $220; wings 0.30 + 0.40 = 0.70 → $70. 350 ÷ 150 = 2.33 (more than two full wins).
     Diagram: x = 40 + (price − 35) × 8, y = 46 − profit × 0.2. (35,−350)→(40,116); (40,−350)→(80,116); (43.50,0)→(108,46); (45,+150)→(120,16);
       (55,+150)→(200,16); (56.50,0)→(212,46); (60,−350)→(240,116); (65,−350)→(280,116); $50 → x 160.
     Q2: (5 − 2) × 100 = $300. Q3: 95 − 2 = 93, 105 + 2 = 107. Q4: at 108, call spread 108 − 105 = 3 → 200 − 300 = −$100.
     Chain plausibility: Black-Scholes with r ≈ 4%, 3 months, IV ≈ 27.7% gives $50 call 3.00 / put 2.50 exactly, $55 call 1.18, $60 call 0.38,
       $45 put 0.74, $40 put 0.12 at flat IV; the chosen $1.00 / $0.30 puts assume the usual extra price on out-of-the-money puts.
   Lesson 4 calendar (Black-Scholes, zero interest rate, 365-day year, IV 30%, stock $50, strike $50):
     30-day call 1.7151 → $1.72; 60-day call 2.4247 → $2.42; debit 2.42 − 1.72 = 0.70 → $70 (model 0.7097).
     At near expiry (IV still 30%): S 50: far call 1.7151 → $1.72; 1.72 − 0.70 = 1.02 → +$102. Far call lost 2.42 − 1.72 = 0.70.
     S 45: far call 0.2172 → $0.22; 0.22 − 0.70 = −$48. S 55: far call 5.3043 → $5.30; 5.30 − 5 = 0.30; 0.30 − 0.70 = −$40.
     Spread value at near expiry is ≥ 0 at every price tested (20 to 100), so the loss there is at most about the $70 debit. Far call vega > near call vega.
     Q2: $80 call, 1-month 2.10 → implied IV 22.96%; 3-month (91 days) at the same IV 3.6561 → $3.66. 3.66 − 2.10 = 1.56 → $156 (distractor 3.66 + 2.10 = 5.76 → $576).
   Lesson 5:
     Condor buyback with 30 days left, S 50: model 0.38 (flat IV) to 0.44 (modest put skew) → $0.40; (1.50 − 0.40) × 100 = +$110.
     Straddle a month after purchase (3-month chain above, 61 days left), S 50: 4.51 → about $4.50; (4.50 − 5.50) × 100 = −$100.
     Earnings (Black-Scholes, zero rate, 365 days): $40, IV 80%, 10 days: call = put = 2.1115 → $2.11 each, straddle 4.22 → $422.
       Next day $43, IV 40%, 9 days: call 3.1613 → $3.16, put 0.1613 → $0.16; 3.32 − 4.22 = −0.90 → −$90. 3 ÷ 40 = 7.5%.
       Next-day breakevens 35.86 and 44.08 → about $4.10 either way (up 4.08, down 4.14).
     Rolling (Black-Scholes, zero rate, IV 30%, S 57): $55 call 3 days 2.07 → $2.10; next month (31 days) $55 call 3.11 → $3.10; $60 call 0.88 → $0.90.
       Roll out 3.10 − 2.10 = +1.00 → +$100. Roll up and out 0.90 − 2.10 = −1.20 → −$120. First call 1.50 − 2.10 = −0.60 → −$60. Sold at $60 not $55 if called: (60 − 55) × 100 = $500 more.
     Review: condor buyback with each leg kept at its own 3-month implied IV is 0.46, so $0.40 sits inside 0.38–0.46.
     Q1: $60, IV 75% → 40%, 8 → 7 days, S 63: before 2.6564 → $2.66 each; after call 3.3542 → $3.35, put 0.3542 → $0.35.
       3.70 − 5.32 = −1.62 → −$162 (distractor call only 3.35 − 2.66 = 0.69 → $69).
     Q2: (1.80 − 0.60) × 100 = $120. Q4: 4.10 − 3.40 = 0.70 → $70 credit.
   Unit check: C1 (60 − 52) × 100 = 800 − 600 = +$200 (distractor 800 − 280 = 520).
     C2 at 108: straddle 8 − 8 = $0; strangle (108 − 105) − 3.50 = −0.50 → −$50 (distractor 3 × 100 = 300).
     C3: 1.20 + 0.80 = 2 → 63 and 77, both $7 from 70. C4: 75 − 73.50 = 1.50; 1.40 − 1.50 = −0.10 → −$10 (distractor (5 − 1.40) × 100 = 360).
     C5: credit $250; (10 − 2.50) × 100 = $750. C6: $40 put, 1-month 1.30 → IV 28.42%; 3-month (91 days) 2.2629 → $2.26; 2.26 − 1.30 = 0.96 → $96 (distractor 356).
     C7: $80 straddle $8 before = IV 75.8% with 10 days; after, 9 days, IV 50%, S 84: 6.0957 → $6.10; (8 − 6.10) × 100 = +$190.
   Placement: P1 1.50 + 1.20 = 2.70 → 22.30 / 27.70 (distractors 25 − 1.20 = 23.80, 25 + 1.50 = 26.50; 25 ± 5.40 = 19.60 / 30.40).
     P2 call (47 − 44) × 100 = 300 − 150 = +$150 (distractor 300 − 90 = 210). P3 190 − 1.75 = 188.25, 210 + 1.75 = 211.75.
     P5 1.40 − 1.90 = −0.50 → $50 debit (distractors 1.40 − 1.20 = 0.20 → $20; 1.90 − 1.20 = 0.70 → $70 loss on the first call).
*/
