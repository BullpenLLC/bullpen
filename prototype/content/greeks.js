/* ---------- Greeks in depth ---------- */
const GRK_GAMMA = {
  title:'Gamma', min:5,
  cards:[
    {k:'The idea', t:'Delta does not stand still', b:`
      <p class="lead">Delta says how much an option's price moves when the stock moves $1. But delta itself changes as the stock moves. Gamma measures how fast it changes.</p>
      <p>A rough picture: delta is the speed of the option's price, and gamma is how quickly that speed picks up or drops off.</p>
      <div class="term"><span class="term-k">Key term</span><b>Gamma:</b> the change in an option's delta for a $1 move in the stock. A gamma of 0.05 means delta rises by about 0.05 for each $1 the stock rises.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Two $2 moves, two different results', b:`
      <p>Cedar Tech, a made-up stock, trades at $100. Its $100 call has 30 days left and a simple model prices it at <b>$2.86</b>, with a delta of <b>0.51</b> and a gamma of <b>0.056</b>. (The model uses an implied volatility of 25% and ignores interest, to keep things simple.)</p>
      <p>If the stock rises $1, delta climbs to about 0.51 + 0.056 = <b>0.57</b>. The option has become more sensitive.</p>
      <p>Now move the stock $2. Delta alone says 0.51 × $2 = $1.03. Gamma adds a small bonus of ½ × 0.056 × 2² = $0.11.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Stock up $2</div>
          <p>$1.03 + $0.11</p>
          <div class="pf-r">Call gains about<b class="mono good-t">+$1.14</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Stock down $2</div>
          <p>−$1.03 + $0.11</p>
          <div class="pf-r">Call loses about<b class="mono bad-t">−$0.92</b></div>
        </div>
      </div>
      <p>Equal moves, unequal results. The holder gains a little more than they lose, because delta grows on the way up and shrinks on the way down.</p>`},
    {k:'The catch', t:'Where gamma is largest', b:`
      <p>Gamma is not the same for every option. It is biggest for options close to the strike, and it grows sharply as expiry gets near. Same Cedar Tech, same $100 call, different amounts of time left:</p>
      <div class="kv kv3"><div><b>0.023</b><span>6 months left</span></div><div><b>0.056</b><span>30 days left</span></div><div><b class="bad-t">0.176</b><span>3 days left</span></div></div>
      <p>An option far from the strike has little gamma, whatever the time left: a $115 call with 30 days to go has just 0.009, and a deep in-the-money $85 call has 0.004. Delta there is already close to 0 or close to 1 and has little room to change.</p>
      <p>Gamma has a cost. In the same model, the 30-day option loses about $0.048 a day to time decay, and the 3-day option loses about $0.166 a day. More gamma tends to come with faster decay.</p>`},
    {k:'In practice', t:'Who feels gamma', b:`
      <p>Anyone who has bought an option, call or put, is long gamma. Their delta moves in their favour: a call gets more sensitive as the stock rises, and a put gets more sensitive as the stock falls.</p>
      <p>The seller is on the other side. After a big move, the seller's position has drifted against them and the delta they had hedged is out of date.</p>
      <p>Take a market maker who has sold 10 of the Cedar Tech calls (1,000 options). To offset the delta of 0.51 per option, they hold about 514 shares. After a $1 rise, delta is 0.57, so the hedge needs about 569 shares: roughly 55 more, bought at the new, higher price. Near expiry, when gamma is large, that re-hedging has to happen more often.</p>
      <p>Gamma is itself a moving figure, so these are estimates that work best for small moves.</p>`}
  ],
  qs:[
    {q:'A call has a delta of 0.40 and a gamma of 0.05. The stock rises $1. About what is its delta afterwards?',
     o:['0.45','0.35','0.90','0.40'], a:0,
     e:'Delta rises by about gamma for each $1: 0.40 + 0.05 = 0.45. Subtracting (0.35) would be right for a fall, not a rise.'},
    {q:'Which of these options usually has the highest gamma?',
     o:['A deep in-the-money call with 6 months left','An at-the-money option with 6 months left','A far out-of-the-money call with 3 days left','An at-the-money option with 3 days left'], a:3,
     e:'Gamma is largest near the strike and grows as expiry gets close. Options deep in or far out of the money have little gamma, because their delta has little room to change.'},
    {q:'A trader holds 5 call contracts (1 contract = 100 shares). Each option has a gamma of 0.04. The stock rises $1. By about how many shares does the position\'s delta rise?',
     o:['2','200','20','0.2'], a:2,
     e:'Options: 5 × 100 = 500. Delta per option rises by 0.04, so 500 × 0.04 = 20 shares\' worth of extra delta.'},
    {q:'A call has a delta of 0.50 and a gamma of 0.06. The stock rises $2. Using delta and gamma together, about how much does the call\'s price change per share?',
     o:['$1.24','$1.12','$1.00','$0.12'], a:1,
     e:'Delta part: 0.50 × $2 = $1.00. Gamma part: ½ × 0.06 × 2² = $0.12. Total: $1.12.'},
    {q:'True or false: an investor who has bought a put has negative gamma.',
     o:['True','False'], a:1,
     e:'Buying an option, call or put, gives positive gamma. As the stock falls, a bought put\'s delta moves towards −1 and it gains faster. As the stock rises, delta moves towards 0 and it loses more slowly. Both effects help the holder. It is the seller who has negative gamma.'}
  ]
};

const GRK_VEGA = {
  title:'Vega and implied volatility', min:5,
  cards:[
    {k:'The idea', t:'Putting a size on volatility', b:`
      <p class="lead">Option prices rise when implied volatility rises. Vega tells you by how much. It is not the same for every option, and where it is large matters a lot.</p>
      <p>There is a second use for implied volatility: it lets you compare option prices that look unrelated in dollars.</p>
      <div class="term"><span class="term-k">Key term</span><b>Vega:</b> the change in an option's price, per share, for a 1 percentage-point change in implied volatility. A vega of 0.20 means the option gains about $0.20 per share if implied volatility rises from 30% to 31%.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Long-dated options carry more vega', b:`
      <p>Cedar Tech trades at $100. Look at two $100 calls, both priced with an implied volatility of 25% (simple model, interest ignored):</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">30 days left</div>
          <p>Price $2.86 · vega 0.114</p>
          <div class="pf-r">IV 25% → 30%<b class="mono good-t">+$0.57</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">180 days left</div>
          <p>Price $6.99 · vega 0.279</p>
          <div class="pf-r">IV 25% → 30%<b class="mono good-t">+$1.39</b></div>
        </div>
      </div>
      <p>Five points × 0.114 = $0.57 for the short option, and five points × 0.279 = $1.39 for the long one. One contract (100 shares) of the long option gains about $139. The more time left, the more a change in volatility can matter, because there is longer for big swings to happen.</p>
      <p>Vega fades as expiry nears. With 3 days left, the same option has a vega of only 0.036. Vega is also biggest for options near the strike.</p>`},
    {k:'The catch', t:'Short-dated options can still move most', b:`
      <p>Implied volatility does not move by the same amount for every expiry. Before a known event such as earnings, the near-dated options usually jump the most, because the event sits inside their life. Later-dated options barely react.</p>
      <p>Say the 30-day option's IV rises 20 points, from 25% to 45%, while the 180-day option's IV rises 3 points, from 25% to 28%:</p>
      <div class="kv kv3"><div><b class="good-t">+$2.28</b><span>30-day call</span></div><div><b class="good-t">+$0.84</b><span>180-day call</span></div><div><b>0.114 vs 0.279</b><span>Vega of each</span></div></div>
      <p>The option with the smaller vega gains nearly three times as much, because its implied volatility moved so much more. Vega only tells you the size of the effect for each point. You also need to know how many points are coming.</p>`},
    {k:'In practice', t:'Implied volatility as a price quote', b:`
      <p>Traders often quote options by implied volatility instead of dollars. The 30-day and 180-day calls above cost $2.86 and $6.99, which look nothing alike. Both are priced at 25%, so they are priced on the same expectation of swings. The dollar gap only reflects the time left.</p>
      <p>You can also run the model backwards. If the 30-day $100 call trades at $3.52, the volatility that gives that price is about <b>31%</b>. That figure is what the market is implying.</p>
      <p>Two cautions. Implied volatility comes out of a model, so it depends on the model's assumptions. And it is not a forecast that will come true: it is simply what current prices imply. A call and a put with the same strike and expiry have the same vega, because the two prices are tied together (the Put-call parity lesson shows how).</p>`}
  ],
  qs:[
    {q:'An option has a vega of 0.20. Implied volatility rises 3 percentage points and nothing else changes. Roughly what happens to one contract (100 shares)?',
     o:['It gains about $6','It gains about $60','It loses about $60','It gains about $0.60'], a:1,
     e:'3 points × 0.20 = $0.60 per share. One contract covers 100 shares, so $0.60 × 100 = $60. ($0.60 is the per-share figure.)'},
    {q:'You hold 2 contracts, each option with a vega of 0.12. Implied volatility falls 8 points and nothing else changes. Roughly what is the change in value?',
     o:['−$96','+$192','−$192','−$1.92'], a:2,
     e:'8 × 0.12 = $0.96 per share lost. 2 contracts = 200 shares, so $0.96 × 200 = $192, and it is a loss because volatility fell.'},
    {q:'Which of these options usually has the largest vega?',
     o:['An at-the-money option with 1 week left','A deep in-the-money option with 1 week left','An at-the-money option with 6 months left','A far out-of-the-money option with 6 months left'], a:2,
     e:'Vega is largest for options near the strike and with a long time left. Short-dated options have little vega, and so do options far from the strike.'},
    {q:'Call A on one stock costs $2 and has an implied volatility of 40%. Call B on another stock costs $5 and has an implied volatility of 30%. Which is priced on the higher expected volatility?',
     o:['Call B, because it costs more','Call A, because 40% is higher than 30%','Neither, as they are on different stocks','They are the same'], a:1,
     e:'Implied volatility is the volatility expectation built into the price, whatever the dollar cost. A higher price can come from a higher stock price, a longer expiry or a different strike, not just higher volatility.'},
    {q:'True or false: a call and a put with the same strike and expiry on the same stock have the same vega.',
     o:['True','False'], a:0,
     e:'Call and put prices are tied together, so a change in volatility moves both by the same amount. Both options gain value when volatility rises.'}
  ]
};

const GRK_RHO = {
  title:'Rho and early exercise', min:5,
  cards:[
    {k:'The idea', t:'The quiet Greek', b:`
      <p class="lead">Interest rates affect option prices too. Rho measures how much. Higher rates push call prices up and put prices down.</p>
      <p>The reason is the cost of carrying the stock. Owning a call lets you delay paying the strike price, so the cash you keep can earn interest in the meantime. A put is the reverse: it delays the day you receive the strike price.</p>
      <div class="term"><span class="term-k">Key term</span><b>Rho:</b> the change in an option's price, per share, for a 1 percentage-point change in interest rates. Calls have positive rho and puts have negative rho.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Small for short options, bigger for long ones', b:`
      <p>Cedar Tech trades at $100, with an implied volatility of 25% and interest rates at 4%. Raise rates one point, to 5%:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">1-year $100 call</div>
          <p>$11.84 → $12.34</p>
          <div class="pf-r">Change<b class="mono good-t">+$0.50</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">1-year $100 put</div>
          <p>$7.92 → $7.46</p>
          <div class="pf-r">Change<b class="mono bad-t">−$0.46</b></div>
        </div>
      </div>
      <p>Now the same call with only 30 days left: $3.02 → $3.06, a gain of just $0.04. Rho grows with time left, so rates matter far more for options that last a year or more than for monthly ones.</p>
      <p>Central banks usually move rates in steps of a quarter point or so. For the 1-year call that is about $0.12. A 3-point change in implied volatility moves the same option about $1.15, so rho is normally the smallest of the main Greeks.</p>`},
    {k:'The catch', t:'American and European options', b:`
      <p>Some options can be exercised only on the expiry date. Others can be exercised on any day up to expiry. That difference changes how they are priced.</p>
      <div class="term"><span class="term-k">Key term</span><b>American vs European:</b> an American option can be exercised at any time up to expiry. A European option can be exercised only at expiry. Options on single US stocks are American; many index options are European.</div>
      <p>Early exercise is usually a poor idea for a call on a stock that pays no dividend. Selling the option instead keeps its time value, and exercising early would also pay the strike sooner. A deep in-the-money <i>put</i> is different. Take a $40 put with the stock at $5. Exercising now brings in $35 at once, which can earn interest. A European version cannot be exercised early, and a model with 30% volatility, 5% interest and one year left prices it at about $33.05, below its $35 intrinsic value. An American put should not trade below $35, because its holder could exercise straight away.</p>`},
    {k:'In practice', t:'Dividends and early exercise', b:`
      <p>Dividends are the main reason to exercise a call early. A share pays the dividend, but a call does not. A holder who wants the dividend has to own the shares before the ex-dividend date.</p>
      <p>Example: Byblos Foods trades at $60. Its $50 call costs $10.30: $10.00 of intrinsic value and $0.30 of time value. Tomorrow is the ex-dividend date, and the dividend is $1.50. On that day the share price usually drops by about the dividend, so a holder who waits sees the call lose value. A holder who exercises today owns the shares in time to collect the $1.50. The cost is the $0.30 of time value given up. As a rough comparison, that is about $1.20 a share in favour of exercising (interest and taxes ignored).</p>
      <div class="kv kv3"><div><b>$0.30</b><span>Time value given up</span></div><div><b class="good-t">$1.50</b><span>Dividend collected</span></div><div><b class="good-t">+$1.20</b><span>Rough net, per share</span></div></div>
      <p>The same logic shows up for sellers: a short call that is deep in the money, with little time value left and a dividend due, is the one most likely to be assigned early. It is a simplified picture, and real decisions also weigh the interest on the strike paid early.</p>
      <p>Because early exercise adds choice for the holder, American options can be worth a little more than otherwise-identical European ones.</p>`}
  ],
  qs:[
    {q:'A call has a rho of 0.20. Interest rates rise 0.5 percentage points and nothing else changes. Roughly what happens to one contract (100 shares)?',
     o:['It gains about $10','It gains about $20','It loses about $10','It gains about $0.10'], a:0,
     e:'0.5 × 0.20 = $0.10 per share, and one contract covers 100 shares, so about $10. Calls gain when rates rise. ($0.10 is the per-share figure.)'},
    {q:'A put has a rho of −0.15. Interest rates fall 1 percentage point and nothing else changes. Roughly what happens to one contract?',
     o:['It loses about $15','It gains about $15','It gains about $1.50','It gains about $150'], a:1,
     e:'The put changes by −0.15 per point of rise, so a 1-point fall gives +$0.15 per share, or $15 for 100 shares. Puts gain when rates fall.'},
    {q:'Which option is most affected by a change in interest rates?',
     o:['A call with 2 years left','A call with 1 week left','A put with 1 week left','A call that expires today'], a:0,
     e:'Rho grows with the time left until expiry. The longest option is the most exposed.'},
    {q:'An American put has a strike of $60 and the stock is at $8. What is the least it can sensibly trade for?',
     o:['$8','$52','$60','$68'], a:1,
     e:'Its intrinsic value is $60 − $8 = $52. If it traded below that, its holder could exercise at once and lock in $52. ($68 adds the two figures.)'},
    {q:'Why is it usually a poor idea to exercise an American call early on a stock that pays no dividend?',
     o:['Calls cannot be exercised early','You would give up the option\'s time value, which selling the option would keep','Early exercise is taxed more heavily','The seller refuses to deliver the shares'], a:1,
     e:'Exercising captures only intrinsic value, and it also pays the strike earlier. Selling the option instead recovers the time value too. A big upcoming dividend can change that sum.'}
  ]
};

const GRK_PARITY = {
  title:'Put-call parity', min:5,
  cards:[
    {k:'The idea', t:'Calls and puts are linked', b:`
      <p class="lead">A call and a put with the same strike and expiry look like opposite bets, but their prices cannot drift apart freely. A rule ties them to the stock price and to interest rates.</p>
      <p>The rule is useful in two ways: it lets you work out one price from the other, and it flags a price that looks out of line.</p>
      <div class="term"><span class="term-k">Key term</span><b>Put-call parity:</b> for European options on a stock with no dividends, call price − put price = stock price − the strike discounted to today at the interest rate. Both options must share the same strike and expiry.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'The numbers line up', b:`
      <p>Cedar Tech trades at $100. Take the $100 strike, one year to expiry, a 5% interest rate and an implied volatility of 25%. A pricing model gives:</p>
      <div class="kv"><div><b>$12.34</b><span>Call</span></div><div><b>$7.46</b><span>Put</span></div><div><b>$100</b><span>Stock</span></div><div><b>$95.12</b><span>Strike discounted</span></div></div>
      <p>The $100 strike is paid in a year, so today it is worth less. $95.12 is the amount that would grow to $100 in a year at a 5% interest rate (the model assumes interest is added continuously, so this is slightly below $100 ÷ 1.05).</p>
      <p>Call − put = $12.34 − $7.46 = <b>$4.88</b>. Stock − discounted strike = $100 − $95.12 = <b>$4.88</b>. They match.</p>
      <p>Why: portfolio A holds the call plus $95.12 in cash, which grows to $100. Portfolio B holds the put plus the stock. At expiry both are worth whichever is higher, the stock price or $100. Same payoff, so they must cost the same today: $12.34 + $95.12 = $7.46 + $100 = $107.46.</p>`},
    {k:'The catch', t:'When the rule is broken', b:`
      <p>Suppose the call trades at $11.50 and the put at $6.00. Call − put = $5.50, above the fair $4.88. The call is too expensive relative to the put. Someone could do all four of these at once:</p>
      <p>Sell the call, buy the put, buy the stock, and borrow $95.12 (which grows to $100 over the year). Today's cash is $11.50 − $6.00 − $100 + $95.12 = <b class="good-t">+$0.62</b>. At expiry, whatever the stock does, the position nets to zero:</p>
      <div class="kv kv3"><div><b>$0</b><span>Stock at $120</span></div><div><b>$0</b><span>Stock at $100</span></div><div><b>$0</b><span>Stock at $80</span></div></div>
      <p>At $120: the short call costs −$20, the put pays 0, the stock is worth $120, and the loan costs −$100. Total 0. At $80: call 0, put +$20, stock $80, loan −$100. Total 0. The $0.62 is a profit with no risk. Because traders look for gaps like this and trade them away, they tend to vanish within moments.</p>`},
    {k:'In practice', t:'Synthetic stock and the fine print', b:`
      <p>Parity also shows that a bought call plus a sold put, same strike and expiry, behaves like owning the stock. Take the $50 strike:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Stock ends at $56</div>
          <p>Call pays +$6, put expires worthless</p>
          <div class="pf-r">Before premiums<b class="mono good-t">+$6</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Stock ends at $44</div>
          <p>Call expires worthless, put costs −$6</p>
          <div class="pf-r">Before premiums<b class="mono bad-t">−$6</b></div>
        </div>
      </div>
      <p>It gains and loses dollar for dollar with the stock above and below $50, like a position in the shares themselves. The upfront cost is smaller because you owe the strike price at expiry, which works like borrowing. Selling the put also carries real risk if the stock falls a long way.</p>
      <p>Real prices are never exactly on the line. Parity is exact only for European options with no dividends. Dividends, the early exercise of American options, borrowing costs and bid-ask spreads all leave small gaps that are not free money.</p>`}
  ],
  qs:[
    {q:'Ignore interest and dividends. A stock is at $70, and a European $65 call costs $8.50. What should the European $65 put (same expiry) cost?',
     o:['$3.50','$13.50','$5.00','$8.50'], a:0,
     e:'Call − put = stock − strike, so put = call − stock + strike = $8.50 − $70 + $65 = $3.50.'},
    {q:'A stock is at $100. A one-year $100 European call costs $12.00. The strike discounted to today is $95.12. What should the matching put cost? (No dividends.)',
     o:['$7.12','$17.12','$4.88','$12.00'], a:0,
     e:'Put = call − stock + discounted strike = $12.00 − $100 + $95.12 = $7.12.'},
    {q:'What does a bought call plus a sold put, with the same strike and expiry, behave like?',
     o:['A bought put','Owning the stock','Cash in a bank','A sold call'], a:1,
     e:'Above the strike the call gains dollar for dollar. Below it the sold put loses dollar for dollar. That is the profile of owning the stock, measured from the strike.'},
    {q:'Ignore interest and dividends. A stock is at $50. The European $50 call costs $4.00 and the matching $50 put costs $2.50. A trader sells the call, buys the put and buys the stock. What risk-free profit per share does that lock in?',
     o:['$2.50','$1.50','$0','$6.50'], a:1,
     e:'Today the cash flow is +$4.00 − $2.50 − $50 = −$48.50. At expiry the position is always worth exactly $50 (the stock is delivered at $50 if the call is exercised, or sold at $50 through the put). $50 − $48.50 = $1.50.'},
    {q:'A trader finds a call and put pair that is $0.04 out of line with put-call parity. Why might that gap not be free money?',
     o:['Parity only applies on expiry day','Bid-ask spreads, fees and borrowing costs can be bigger than $0.04','Put prices are random','Calls cannot be sold'], a:1,
     e:'Real trading involves a spread between buying and selling prices, fees, and the cost of borrowing. Small gaps often sit inside those costs.'}
  ]
};

const GRK_SKEW = {
  title:'Skew and the VIX', min:5,
  cards:[
    {k:'The idea', t:'One stock, many volatilities', b:`
      <p class="lead">A pricing model that uses one volatility for a stock would give every strike the same implied volatility. Real markets do not. Options at different strikes, on the same stock and expiry, trade at different implied volatilities.</p>
      <p>That pattern across strikes is called skew.</p>
      <div class="term"><span class="term-k">Key term</span><b>Volatility skew:</b> the way implied volatility changes from strike to strike for the same underlying and expiry. For stock indexes, lower strikes (the puts) tend to carry higher implied volatility than higher strikes.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'What skew does to a price', b:`
      <p>Cedar 100, a made-up stock index, stands at 100. Look at 30-day options, priced with a simple model that ignores interest. The at-the-money option has an implied volatility of 22%. Further out:</p>
      <div class="kv kv3"><div><b class="bad-t">28%</b><span>90 put</span></div><div><b>22%</b><span>100 strike</span></div><div><b>19%</b><span>110 call</span></div></div>
      <p>If every strike used 22%, the 90 put would cost <b>$0.12</b>. At its own 28%, it costs <b>$0.34</b>, nearly three times as much.</p>
      <p>The 110 call goes the other way: at a flat 22% it would cost $0.19, but at its own 19% it costs <b>$0.09</b>.</p>
      <p>So the market charges more than a flat-volatility model for the cheap downside puts and less for the upside calls.</p>`},
    {k:'The catch', t:'Why the skew exists', b:`
      <p>The usual explanations are about demand and about how markets behave. Investors who hold lots of shares buy puts as insurance, and that demand pushes the price of those puts up. Stock markets also tend to fall faster than they rise, so a sharp drop is the event many traders worry about most.</p>
      <p>The shape depends on the market. Stock indexes typically slope downward, with the highest implied volatility at low strikes. Single stocks and some commodities and currencies show different shapes: sometimes a smile with higher implied volatility at both ends.</p>
      <p>Skew also moves. After a sharp fall, it often becomes steeper, because fear is higher.</p>`},
    {k:'In practice', t:'The VIX, a market-wide number', b:`
      <p>The VIX is an index published by Cboe. It is built from prices of S&amp;P 500 index options across many strikes, with about 30 days left. It reads as an annual percentage: a VIX of 20 means the options imply an annual volatility of 20%.</p>
      <p>To turn that into a typical move, scale it down. There are about 252 trading days a year (√252 ≈ 15.9) and 12 months (√12 ≈ 3.46).</p>
      <div class="kv kv3"><div><b>1.26%</b><span>Daily, 20 ÷ 15.9</span></div><div><b>5.77%</b><span>Monthly, 20 ÷ 3.46</span></div><div><b>±289</b><span>Points on a 5,000 index in a month</span></div></div>
      <p>This is a one-standard-deviation move. If returns followed a neat bell curve, prices would end outside that range about one time in three. Real markets have more extreme days than a bell curve suggests.</p>
      <p>The VIX says nothing about direction. It tends to jump when stocks fall hard, which is why it is nicknamed the fear gauge, and it rose above 80 in late 2008 and again in March 2020. It is a measure of expected size of moves, not a forecast.</p>`}
  ],
  qs:[
    {q:'What is volatility skew?',
     o:['The gap between the buying price and selling price of an option','Implied volatility differing from strike to strike on the same underlying and expiry','A stock\'s volatility changing from year to year','The difference between a call\'s price and a put\'s price'], a:1,
     e:'Skew is the pattern of implied volatility across strikes. The other options describe the bid-ask spread, volatility over time and the call-put gap.'},
    {q:'On a stock index at 100, the 90-strike put has an implied volatility of 28% while the at-the-money option is at 22%. Which reading is fair?',
     o:['The market charges more for downside protection than a flat-volatility model would','Puts are cheaper than calls','The index must be about to fall','The model is wrong, so the prices are errors'], a:0,
     e:'A higher implied volatility means a higher price for the same strike and expiry. It shows the market placing extra value on protection against falls, not a forecast that the index will fall.'},
    {q:'The VIX reads 24. Taking 252 trading days a year and √252 ≈ 15.9, about what daily move does that imply?',
     o:['6.9%','0.1%','1.5%','0.8%'], a:2,
     e:'24 ÷ 15.9 ≈ 1.5% a day. Dividing by 252 directly gives 0.1%, which is a slip.'},
    {q:'The VIX reads 12. Taking √12 ≈ 3.46, about what one-standard-deviation monthly move does that imply?',
     o:['1.0%','0.8%','12%','3.5%'], a:3,
     e:'12 ÷ 3.46 ≈ 3.5% a month. Dividing by 12 (1.0%) is the common slip, and 0.8% would be the daily figure.'},
    {q:'True or false: a rising VIX means traders expect stock prices to rise.',
     o:['True','False'], a:1,
     e:'The VIX measures the size of moves the options are pricing in, not their direction. It tends to rise when stocks are falling sharply.'}
  ]
};

const GRK_CHECK = {
  title:'Unit check', min:4, badge:{name:'Greeks Specialist', icon:'star'}, cards:[],
  qs:[
    {q:'On a stock index at 100, a 30-day 90-strike put is quoted at an implied volatility of 28%, giving a price of $0.34. A flat-volatility model using the at-the-money 22% would give $0.12. How much more per share does the skew add?',
     o:['$0.12','$0.46','$0.22','$0.34'], a:2,
     e:'$0.34 − $0.12 = $0.22 per share, or $22 per contract. The skewed price is nearly three times the flat-model price.'},
    {q:'A trader owns 2 call contracts (100 shares each). Each option has a delta of 0.50 and a gamma of 0.06. The stock rises $2. Using delta and gamma together, about how much does the position gain?',
     o:['$224','$200','$112','$248'], a:0,
     e:'Per share: 0.50 × $2 = $1.00, plus ½ × 0.06 × 2² = $0.12, so $1.12. Two contracts = 200 shares, so $1.12 × 200 = $224. ($112 is for one contract.)'},
    {q:'A trader holds 3 contracts, each option with a vega of 0.18. Implied volatility falls 6 points and nothing else changes. Roughly what is the change in value?',
     o:['−$108','−$32','+$324','−$324'], a:3,
     e:'6 × 0.18 = $1.08 per share lost. 3 contracts = 300 shares, so $1.08 × 300 = $324 lost.'},
    {q:'A 1-month at-the-money call has a vega of 0.11, and a 6-month at-the-money call on the same stock has a vega of 0.28. Before earnings, the 1-month option\'s implied volatility rises 20 points and the 6-month option\'s rises 3 points. Using vega alone, which gains more per share, and by about how much more?',
     o:['The 6-month, because its vega is bigger','The 1-month, by about $1.36','The 1-month, by about $2.20','They gain the same'], a:1,
     e:'1-month: 20 × 0.11 = $2.20. 6-month: 3 × 0.28 = $0.84. The difference is $2.20 − $0.84 = $1.36. ($2.20 is the 1-month gain, not the gap.)'},
    {q:'A 1-year put has a rho of −0.40. Interest rates rise 0.5 percentage points and nothing else changes. What is the change in value of 3 contracts?',
     o:['+$60','−$120','−$20','−$60'], a:3,
     e:'0.5 × −0.40 = −$0.20 per share. 3 contracts = 300 shares, so −$0.20 × 300 = −$60. Puts lose when rates rise. (−$120 forgets that the rise was only half a point.)'},
    {q:'An American call has a strike of $80, the stock is at $90 and the call costs $10.20. Tomorrow is the ex-dividend date and the dividend is $1.00. Which statement is right, ignoring interest?',
     o:['Exercising today is impossible before expiry','Exercising today can make sense, since the $1.00 dividend is more than the $0.20 of time value given up','Exercising is never worthwhile when the call is in the money','Exercising loses the $10.00 of intrinsic value'], a:1,
     e:'The call is worth $10.00 of intrinsic value plus $0.20 of time value. Exercising gives up the $0.20 but collects the $1.00 dividend, which on this simplified comparison leaves roughly $0.80 per share better off. American calls can be exercised at any time.'},
    {q:'A stock is at $60. A European $60 call with 6 months left costs $4.50. The strike discounted to today is $58.81. Ignoring dividends, what should the matching put cost?',
     o:['$4.50','$5.69','$3.31','−$3.31'], a:2,
     e:'Put = call − stock + discounted strike = $4.50 − $60 + $58.81 = $3.31. ($5.69 adds the stock instead of subtracting it.)'},
    {q:'The VIX reads 30. Taking √12 ≈ 3.46, about what one-standard-deviation monthly move does that imply for an index at 4,000?',
     o:['About ±100 points','About ±76 points','About ±1,200 points','About ±346 points'], a:3,
     e:'30 ÷ 3.46 ≈ 8.66% a month. 8.66% × 4,000 ≈ 346 points. (±1,200 would be the full annual 30%; ±100 divides by 12 instead of √12.)'}
  ]
};

const UNIT_GREEKS = {id:'greeks', title:'Greeks in depth', level:'Vault', lessons:[GRK_GAMMA, GRK_VEGA, GRK_RHO, GRK_PARITY, GRK_SKEW, GRK_CHECK]};

/* Vault unit: no placement questions. */

/* MATHS CHECK: every calculation and its result, for the reviewer. Prices/Greeks from a Black-Scholes model in Python (stdlib math), no dividends.
   Lesson 1 (S=100, K=100, 30 days, IV 25%, r=0)
   - Call 2.8587 (2.86); delta 0.5143 (0.51); gamma 0.0556 (0.056). Delta after +$1 = 0.5693 (0.57) vs 0.5143+0.0556 = 0.5699
   - +$2: delta part 0.5143*2 = 1.0286 (1.03); gamma part 0.5*0.0556*4 = 0.1112 (0.11); total 1.1398 (1.14); actual S=102 price 3.9968, change 1.1381
   - -$2: -1.0286 + 0.1112 = -0.9174 (-0.92); actual S=98 price 1.9418, change -0.9169
   - Gamma ATM: 180d 0.0226 (0.023), 30d 0.0556, 3d 0.1760 (0.176); K=115 30d 0.0089 (0.009); K=85 30d 0.0039 (0.004)
   - Theta per day: 30d->29d -0.0480 (0.048); 3d->2d -0.1659 (0.166)
   - Hedge: 10 contracts = 1,000 options; delta 0.5143 -> 514 shares; delta 0.5693 -> 569; extra 55
   - Q1: 0.40+0.05 = 0.45. Q3: 5*100 = 500; 500*0.04 = 20. Q4: 0.50*2 = 1.00; 0.5*0.06*4 = 0.12; total 1.12 (slip 1.24 = 1.00+0.24)
   Lesson 2 (same option, r=0)
   - 30d vega 0.1143 (0.114); price at IV 30% = 3.4301, change 0.5714 (0.57); 5*0.114 = 0.57
   - 180d price 6.9949 (6.99); vega 0.2791 (0.279); IV 30% price 8.3892, change 1.3942 (1.39); 5*0.279 = 1.395; x100 = 139
   - 3d vega 0.0362 (0.036)
   - Event: 30d IV 25->45: price 5.1432, change 2.2845 (2.28); 180d IV 25->28: price 7.8317, change 0.8368 (0.84). 2.28/0.84 = 2.7 ("nearly three times")
   - Implied vol for a $3.52 price (30d, S=K=100, r=0): solved by bisection = 30.79% (about 31%)
   - Q1: 3*0.20 = 0.60; x100 = $60. Q2: 8*0.12 = 0.96; x200 = 192
   Lesson 3 (S=100, K=100, IV 25%)
   - 1y call r=4%: 11.837 (11.84); r=5%: 12.336 (12.34); change 0.499 (0.50). Rho 0.4938
   - 1y put r=4%: 7.916 (7.92); r=5%: 7.4589 (7.46); change -0.457 (-0.46). Rho -0.467
   - 30d call r=4%: 3.0211 (3.02); r=5%: 3.0626 (3.06); change 0.0415 (0.04)
   - Quarter-point on 1y call: 0.4938*0.25 = 0.123 (0.12). Vega of 1y call 0.3831 * 3 = 1.149 (1.15)
   - Put K=40, S=5, T=1, r=5%, IV 30%: European price 33.049 (33.05); the floor 40*exp(-0.05) - 5 = 33.049 (same); intrinsic 40-5 = 35
   - Byblos: call 10.30; intrinsic 60-50 = 10.00; time value 0.30; dividend 1.50; 1.50-0.30 = 1.20
   - Q1: 0.5*0.20 = 0.10; x100 = 10. Q2: 0.15 x 1 = 0.15; x100 = 15. Q4: 60-8 = 52 (slip 68 = 60+8)
   Lesson 4 (S=100, K=100, T=1, r=5%, IV 25%)
   - PV(K) = 100*exp(-0.05) = 95.1229 (95.12); call 12.336 (12.34); put 7.4589 (7.46); C-P = 4.877 (4.88); S-PV = 4.877 (4.88)
   - Portfolio cost: 12.34 + 95.12 = 107.46; 7.46 + 100 = 107.46
   - Mispricing: 11.50 - 6.00 = 5.50; 5.50 - 4.877 = 0.623; cash today 11.50 - 6.00 - 100 + 95.1229 = 0.6229 (0.62); loan grows 95.1229*exp(0.05) = 100.00
   - Expiry check: S=120: -20+0+120-100 = 0; S=100: 0+0+100-100 = 0; S=80: 0+20+80-100 = 0
   - Q1: 8.50 - 70 + 65 = 3.50. Q2: 12.00 - 100 + 95.12 = 7.12 (slip 17.12 = 12+100-95.12). Q4: 4.00-2.50-50 = -48.50; 50-48.50 = 1.50
   Lesson 5 (S=100, 30 days, r=0)
   - 90 put: IV 22% -> 0.1175 (0.12); IV 28% -> 0.3374 (0.34); ratio 2.87 ("nearly three times")
   - 110 call: IV 22% -> 0.1889 (0.19); IV 19% -> 0.0924 (0.09)
   - sqrt(252) = 15.8745 (15.9); sqrt(12) = 3.4641 (3.46). VIX 20: 20/15.8745 = 1.2599 (1.26%); 20/3.4641 = 5.7735 (5.77%); x5,000 = 288.7 (289)
   - Q3: 24/15.87 = 1.51%. Q4: 12/3.46 = 3.46% (3.5%)
   Unit check
   - Q1: 0.3374 - 0.1175 = 0.2199 (0.22). Q2: 1.00 + 0.12 = 1.12; x200 = 224. Q3: 6*0.18 = 1.08; x300 = 324
   - Q4: 20*0.11 = 2.20; 3*0.28 = 0.84; 2.20-0.84 = 1.36. Q5: 0.5*-0.40 = -0.20; x300 = -60 (slip -120 = -0.40 x 300)
   - Q6: intrinsic 90-80 = 10; call 10.20 so time value 0.20; 1.00-0.20 = 0.80
   - Q7: PV(K) = 60*exp(-0.04*0.5) = 58.8119 (58.81); 4.50 - 60 + 58.81 = 3.31 (slip 5.69 = 4.50+60-58.81)
   - Q8: 30/3.4641 = 8.660%; x4,000 = 346.4 (346); slip 30% x 4,000 = 1,200
   FACTUAL CLAIMS to verify: vega is equal for a call and put with the same strike and expiry; European put can price below intrinsic while an American put cannot; an American call on a non-dividend stock is rarely exercised early; US single-stock options are American and many index options are European; the VIX (Cboe) is built from S&P 500 option prices across strikes with about 30 days to expiry and is quoted as an annualised percentage; VIX closed above 80 in late 2008 and in March 2020; equity index skew slopes downward (higher IV at lower strikes); skew tends to steepen after sharp falls. */
