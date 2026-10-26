/* ---------- Futures basics ---------- */
const FUT_WHAT = {
  title:'What a futures contract is', min:5,
  cards:[
    {k:'The idea', t:'A price agreed today for a trade later', b:`
      <p class="lead">A futures contract is a promise to buy or sell something at a set price on a set date in the future. The price is fixed now. The money and the goods change hands later.</p>
      <p>The "something" can be a crop, a barrel of oil, a stock index or a currency. Two people make the deal, and each one is betting, or protecting against, where the price will end up.</p>
      <div class="term"><span class="term-k">Key term</span><b>Futures contract:</b> a standard agreement, traded on an exchange, to buy or sell a set amount of an asset at a fixed price on a fixed future date. The buyer is "long" and the seller is "short".</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Who wins and who loses', b:`
      <p>Sidon Bakeries, a made-up company, buys a wheat futures contract at $6.00 a bushel. In this example the contract covers 5,000 bushels, so the deal is worth 5,000 × $6.00 = <b>$30,000</b>.</p>
      <p>On the delivery date, the market price of wheat may be different from $6.00. The contract still settles at $6.00, so one side gains and the other loses:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Wheat ends at $7.20</div>
          <p>Buyer: ($7.20 − $6.00) × 5,000</p>
          <div class="pf-r">Buyer<b class="mono good-t">+$6,000</b></div>
          <div class="pf-r">Seller<b class="mono bad-t">−$6,000</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Wheat ends at $5.10</div>
          <p>Buyer: ($5.10 − $6.00) × 5,000</p>
          <div class="pf-r">Buyer<b class="mono bad-t">−$4,500</b></div>
          <div class="pf-r">Seller<b class="mono good-t">+$4,500</b></div>
        </div>
      </div>
      <p>Every dollar one side wins is a dollar the other side loses. A futures contract creates no new money; it moves it between the two parties.</p>`},
    {k:'The catch', t:'Standard, exchange-traded and rarely delivered', b:`
      <p>A futures contract is not a private handshake. The exchange fixes the size, the quality of the asset and the delivery dates, so every contract of one type is identical. That makes them easy to trade between strangers.</p>
      <p>A clearing house sits in the middle of every trade. It becomes the buyer to every seller and the seller to every buyer, so each side only has to trust the clearing house, not the other trader.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Futures</div><b>Standard and exchange-traded</b><p>Fixed terms, a clearing house, and a price anyone can see.</p></div>
        <div class="col bad"><div class="col-h">Forward</div><b>Private and custom</b><p>Any size or date the two sides agree, but each one carries the risk that the other will not pay.</p></div>
      </div>
      <p>Most traders close their position before the contract ends by making the opposite trade. Few ever take delivery of the wheat or the oil.</p>`},
    {k:'The limit', t:'Settling in goods or in cash', b:`
      <p>Some contracts end with physical delivery of the asset. Others are settled in cash: nobody moves any barrels or bushels, and the loser simply pays the winner the price difference.</p>
      <p>A stock index cannot be delivered at all, so index futures settle in cash.</p>
      <p>A contract has a fixed end date. After that date it no longer exists, so anyone who wants to keep their position has to open a new one in a later contract.</p>
      <p>The next lessons show how traders put money behind these contracts, and what happens to it every day.</p>`}
  ],
  qs:[
    {q:'A futures contract covers 1,000 barrels of crude oil at an agreed price of $75 a barrel. What is the value of the deal?',
     o:['$75,000','$7,500','$1,075','$750'], a:0,
     e:'1,000 barrels × $75 = $75,000. This is the size of the exposure the contract controls.'},
    {q:'A trader is long one futures contract on 5,000 bushels of wheat at $6.00. At the end, the price is $6.80. What is the trader\'s gain?',
     o:['$800','$4,000','$34,000','$0.80'], a:1,
     e:'The gain per bushel is $6.80 − $6.00 = $0.80. 5,000 × $0.80 = $4,000. The seller loses the same $4,000.'},
    {q:'A trader is short one contract on 1,000 barrels at $75. The price at the end is $82. What happens to the trader?',
     o:['Gains $7,000','Gains $82,000','Loses $7,000','Loses $75,000'], a:2,
     e:'The seller agreed to sell at $75 while the market is $82, so loses $7 per barrel. 1,000 × $7 = $7,000.'},
    {q:'What is the main difference between a futures contract and a forward contract?',
     o:['Futures are standard and traded on an exchange with a clearing house; forwards are private and can be customised','Futures have no expiry date','Forwards are always settled in cash','Futures can only be used for crops'], a:0,
     e:'Futures have fixed terms and a clearing house. Forwards are agreed privately, so each side carries the risk that the other will not pay.'},
    {q:'True or false: a trader who buys a futures contract must always take physical delivery of the asset.',
     o:['True','False'], a:1,
     e:'Many contracts are settled in cash, and most traders close their position with an opposite trade before the end, so they never take delivery.'}
  ]
};

const FUT_MARGIN = {
  title:'Margin and marking to market', min:5,
  cards:[
    {k:'The idea', t:'A deposit, topped up every day', b:`
      <p class="lead">You do not pay the full value of a futures contract when you open it. You put down a smaller deposit, called margin, and your account is settled every day as prices move.</p>
      <p>That daily settling stops losses from piling up unpaid. It also means a bad day costs real money straight away, not at the end.</p>
      <div class="term"><span class="term-k">Key term</span><b>Marking to market:</b> at the end of each trading day, the exchange works out each position's gain or loss from the day's closing price and moves that cash between accounts.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Three days on a made-up index', b:`
      <p>A made-up index future pays $50 per index point. The index stands at 4,000, so the contract controls 4,000 × $50 = <b>$200,000</b>. The initial margin is $10,000 (5% of that value) and the maintenance margin is $8,000. A buyer opens one contract at 4,000.</p>
      <div class="kv kv3"><div><b>3,980</b><span>Day 1 close</span></div><div><b>3,950</b><span>Day 2 close</span></div><div><b>3,990</b><span>Day 3 close</span></div></div>
      <p>Day 1: −20 points × $50 = −$1,000, so the account falls from $10,000 to $9,000.</p>
      <p>Day 2: −30 points × $50 = −$1,500, so the account falls to <b class="bad-t">$7,500</b>. That is below the $8,000 maintenance level, so the broker issues a <b>margin call</b>: add $2,500 to bring the account back to $10,000.</p>
      <p>Day 3: +40 points × $50 = +$2,000, so the account rises to $12,000. Gains are paid in the same way as losses.</p>`},
    {k:'The catch', t:'Leverage works in both directions', b:`
      <p>The $200,000 contract needed only $10,000 of margin. That is 20 times leverage ($200,000 ÷ $10,000).</p>
      <p>A 1% move in the index is 1% × $200,000 = $2,000. That is 20% of the margin deposit, from a move most people would call small.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Index rises 1%</div>
          <p>+$2,000 on $10,000 of margin</p>
          <div class="pf-r">Return on margin<b class="mono good-t">+20%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Index falls 1%</div>
          <p>−$2,000 on $10,000 of margin</p>
          <div class="pf-r">Return on margin<b class="mono bad-t">−20%</b></div>
        </div>
      </div>
      <p>The same maths works both ways, so losses can exceed the deposit if the position is not closed in time.</p>`},
    {k:'The limit', t:'What a margin call really means', b:`
      <p>The initial margin is the deposit needed to open a position. The maintenance margin is a lower floor. Only when the account drops below that floor does the call arrive, and the top-up usually has to bring the account back to the initial level, not just over the floor.</p>
      <p>If a trader cannot or will not pay, the broker can close the position, often at a bad moment.</p>
      <p>Margin rules are set by the exchange and the broker, and they change. Exchanges can raise margin when markets get wild, which can force traders out just when prices are moving fastest.</p>`}
  ],
  qs:[
    {q:'An index future pays $20 per index point. The index stands at 5,000. What value does one contract control?',
     o:['$20,000','$250','$100,000','$5,020'], a:2,
     e:'5,000 points × $20 = $100,000. Margin is only a fraction of this.'},
    {q:'A contract controls $100,000 and the margin deposit is $5,000. The index falls 2%. What is the loss as a share of the margin?',
     o:['2%','40%','20%','4%'], a:1,
     e:'The loss is 2% × $100,000 = $2,000. $2,000 ÷ $5,000 = 40% of the deposit. This is leverage working against the trader.'},
    {q:'A trader is short one contract that pays $40 per point, opened at 2,500. The first day closes at 2,470 and the second at 2,490. What is the total result over the two days?',
     o:['+$400','+$1,200','−$800','+$800'], a:0,
     e:'Day 1: the short gains 30 points × $40 = +$1,200. Day 2: the price rises 20 points, so the short loses 20 × $40 = −$800. Total = $1,200 − $800 = +$400.'},
    {q:'An account has $6,000 of initial margin and a $4,500 maintenance level. Losses take it down to $4,200. How much must the trader add to restore the initial level?',
     o:['$300','$4,500','$6,000','$1,800'], a:3,
     e:'The account is below $4,500, so a margin call is triggered. Restoring the initial level means $6,000 − $4,200 = $1,800. Adding only the $300 needed to reach the maintenance level would not be enough.'},
    {q:'Why does the exchange settle gains and losses every day instead of waiting until the contract ends?',
     o:['To raise the fees brokers can charge','To stop large losses building up unpaid, which protects the clearing house and the other side','To make sure prices never move','Because futures cannot be held for more than one day'], a:1,
     e:'If losses built up for months, a trader could walk away from a huge bill. Daily settlement keeps each account topped up and the system safe.'}
  ]
};

const FUT_HEDGE = {
  title:'Hedgers and speculators', min:5,
  cards:[
    {k:'The idea', t:'Two groups on opposite sides', b:`
      <p class="lead">Futures markets exist because two kinds of people need each other. Hedgers want to remove price risk from their business. Speculators take on that risk, hoping to profit from price moves.</p>
      <p>A baker worried about the cost of wheat wants a fixed price. A trader who thinks wheat will rise is happy to take the other end of the deal.</p>
      <div class="term"><span class="term-k">Key term</span><b>Hedging:</b> taking a futures position that moves opposite to a risk you already have, so that a loss on one side is offset by a gain on the other.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Locking in a price', b:`
      <p>Sidon Bakeries needs 50,000 bushels of wheat in three months. Today wheat futures are at $6.00. A contract covers 5,000 bushels, so it buys 10 contracts. It is now worried the price will rise.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Wheat rises to $7.00</div>
          <p>Wheat costs 50,000 × $7.00 = $350,000. The futures gain 50,000 × $1.00 = $50,000.</p>
          <div class="pf-r">Net cost<b class="mono">$300,000</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Wheat falls to $5.00</div>
          <p>Wheat costs 50,000 × $5.00 = $250,000. The futures lose 50,000 × $1.00 = $50,000.</p>
          <div class="pf-r">Net cost<b class="mono">$300,000</b></div>
        </div>
      </div>
      <p>Either way, the bakery pays $300,000, which is $6.00 a bushel. The price risk is gone.</p>`},
    {k:'The catch', t:'What the speculator takes on', b:`
      <p>The bakery gave up the chance to gain if wheat fell. In the second case it paid $300,000 when it could have paid $250,000. Removing risk also removes the upside.</p>
      <p>Now picture a speculator, with no wheat business, who buys one contract at $6.00 with $2,000 of margin. If wheat rises to $6.20, the gain is $0.20 × 5,000 = <b class="good-t">$1,000</b>, which is 50% of the margin. If it falls to $5.80, the loss is the same $1,000.</p>
      <p>Speculators accept risk that others want to shed, and they add trading volume that makes it easier for everyone to get in and out. Many of them lose money.</p>`},
    {k:'In practice', t:'Hedges are not perfect', b:`
      <p>A hedge only works as far as the futures price moves with the price the hedger actually faces. A bakery buying a particular flour grade in Beirut may find that its local price and the exchange price drift apart. That gap is called <b>basis risk</b>.</p>
      <p>A producer can hedge in the other direction. A farmer who sells futures locks in a selling price for a crop that is not yet harvested.</p>
      <p>Hedging costs something too: margin has to be funded, and gains or losses on the futures are paid in cash daily, even though the matching gain or loss on the real goods comes later.</p>`}
  ],
  qs:[
    {q:'Which statement best describes a hedger?',
     o:['Someone who tries to profit from price moves with no link to the asset','Someone who uses futures to reduce a price risk that comes from their own business','Someone who runs the exchange','Someone who only trades after the contract ends'], a:1,
     e:'A hedger already has a price risk, such as a fuel bill or a crop to sell, and uses futures to offset it. A speculator is the one with no other exposure.'},
    {q:'A company will need 40,000 bushels of wheat and buys futures at $5.50. When it buys the wheat, both the wheat price and the futures price are $6.30. What is its net cost, including the futures gain?',
     o:['$252,000','$220,000','$32,000','$188,000'], a:1,
     e:'Wheat costs 40,000 × $6.30 = $252,000. The futures gain is 40,000 × $0.80 = $32,000. Net cost = $252,000 − $32,000 = $220,000, which is $5.50 a bushel.'},
    {q:'A farmer expects 10,000 bushels at harvest and sells futures at $7.00. At harvest, both the crop price and the futures price have fallen to $6.20. What is the farmer\'s total income, counting the futures gain?',
     o:['$62,000','$78,000','$8,000','$70,000'], a:3,
     e:'The crop sells for 10,000 × $6.20 = $62,000. The short futures gain 10,000 × $0.80 = $8,000. Total = $70,000, which is $7.00 a bushel.'},
    {q:'A speculator buys one contract on 5,000 bushels at $6.00, with $2,000 of margin. The price falls to $5.70. What is the loss as a share of the margin?',
     o:['5%','30%','75%','150%'], a:2,
     e:'The loss is $0.30 × 5,000 = $1,500. $1,500 ÷ $2,000 = 75% of the margin.'},
    {q:'A bakery hedges its wheat purchase at $6.00. Wheat then falls to $5.00. What is the result?',
     o:['The bakery still pays about $6.00, because the futures loss cancels the cheaper wheat','The bakery pays $5.00 and keeps the whole gain','The bakery pays $7.00','The futures contract is cancelled'], a:0,
     e:'The futures lose about $1.00 a bushel, cancelling the $1.00 saved on the wheat. The hedge gives certainty, not the gain from a price fall.'}
  ]
};

const FUT_CURVE = {
  title:'Contango and backwardation', min:5,
  cards:[
    {k:'The idea', t:'The price of waiting', b:`
      <p class="lead">A commodity has a price today, called the spot price, and different futures prices for later dates. The way those prices line up is called the futures curve, and its shape tells a story.</p>
      <p>When later prices are higher than today's, the market is in contango. When they are lower, it is in backwardation.</p>
      <div class="term"><span class="term-k">Key term</span><b>Contango:</b> futures prices above the spot price, rising with the delivery date. <b>Backwardation:</b> futures prices below the spot price.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Why the curve slopes up', b:`
      <p>Suppose a commodity costs $100 today. Holding it for six months costs money: financing at 4% a year and storage and insurance at 2% a year, so 6% a year. For half a year, that is 3%.</p>
      <p>A simple estimate of the six-month futures price is $100 × (1 + 0.06 × 0.5) = <b>$103</b>. This is the <b>cost of carry</b>. If futures traded far above $103, someone could buy the commodity, store it and sell futures for a risk-free profit.</p>
      <div class="kv kv3"><div><b>$80</b><span>Spot</span></div><div><b>$83</b><span>3-month future</span></div><div><b>$86</b><span>6-month future</span></div></div>
      <p>A curve like this one, rising by $3 a step, is in contango.</p>`},
    {k:'The catch', t:'Rolling costs money in contango', b:`
      <p>Futures end, so a trader who wants to stay long must "roll": close the old contract and open one for a later date. Compare two markets with the same flat spot price of $80 and a 1,000-barrel contract.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Contango</div>
          <p>Buy the 3-month future at $83. Spot stays at $80, and the future converges down to $80.</p>
          <div class="pf-r">Result<b class="mono bad-t">−$3,000</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Backwardation</div>
          <p>Buy the 3-month future at $77. Spot stays at $80, and the future converges up to $80.</p>
          <div class="pf-r">Result<b class="mono good-t">+$3,000</b></div>
        </div>
      </div>
      <p>This is called roll yield. In contango, holding long futures can lose money even when the spot price does not move.</p>`},
    {k:'In practice', t:'What each shape tends to signal', b:`
      <p>Contango is common when supplies are comfortable and storing is the main cost. Backwardation tends to appear when something is scarce today: buyers pay a premium for goods now rather than later.</p>
      <p>At the final date, the futures price and the spot price must meet, since the contract then becomes a deal for immediate delivery. That is called convergence, and it is why a curve's slope matters to anyone holding positions over time.</p>
      <p>A commodity fund that rolls its long futures every month does not simply earn the spot price move. The roll can add to or take away from the return, depending on the curve.</p>`}
  ],
  qs:[
    {q:'A commodity is $50 today and the 3-month future is $52.50. What is this market called, and what is the premium?',
     o:['Backwardation, 5%','Contango, 5%','Contango, 2.5%','Backwardation, 2.5%'], a:1,
     e:'The future is above spot, so it is contango. The premium is ($52.50 − $50) ÷ $50 = 5%.'},
    {q:'An item is $200 today. Financing and storage together cost 6% a year. Using the simple method, what is a 3-month futures price?',
     o:['$212','$206','$201.50','$203'], a:3,
     e:'3 months is 0.25 years. Carry = 6% × 0.25 = 1.5%. $200 × 1.015 = $203. Using the full 6% would wrongly give $212.'},
    {q:'A commodity is $90 on the spot market. A trader buys a 1,000-barrel future at $86 and spot is still $90 at the end. What is the result?',
     o:['Loss of $4,000','No change','Gain of $4,000','Gain of $90,000'], a:2,
     e:'The futures price converges up to spot: $90 − $86 = $4 a barrel gain. 1,000 × $4 = $4,000. The market is in backwardation.'},
    {q:'What is convergence?',
     o:['The futures price and the spot price becoming equal as the contract reaches its end date','Two exchanges merging their contracts','Contango turning into backwardation','Margin rising as prices fall'], a:0,
     e:'At the end date the contract is a deal for immediate delivery, so the futures price and the spot price must meet.'},
    {q:'A fund rolls long futures every month while the spot price stays flat and the curve is in contango. What is the likely result?',
     o:['The roll adds a steady gain','The roll drags down the return','The roll has no effect','The fund pays no margin'], a:1,
     e:'Each month the fund sells a cheaper expiring contract and buys a dearer later one. Prices then converge down toward flat spot, so the roll costs money.'}
  ]
};

const FUT_PERP = {
  title:'Crypto perpetuals and liquidation', min:5,
  cards:[
    {k:'The idea', t:'A future with no end date', b:`
      <p class="lead">Many crypto exchanges offer perpetual futures. These work like futures but never expire, so a trader can hold the position as long as the account can pay for it.</p>
      <p>With no expiry date, nothing forces the price to meet spot at the end. Instead, a regular payment between traders keeps the two close together.</p>
      <div class="term"><span class="term-k">Key term</span><b>Funding rate:</b> a small payment, usually exchanged every few hours, between traders who are long and those who are short. When the perpetual trades above spot, longs pay shorts, and when below, shorts pay longs.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Leverage and the liquidation price', b:`
      <p>A trader buys 5 units of a made-up coin at $2,000, worth $10,000, with $1,000 of margin. That is 10 times leverage. Suppose the exchange closes the position when the account falls to 0.5% of the position's value.</p>
      <p>Account value at price P = $1,000 + 5 × (P − $2,000). The floor is 0.5% × 5 × P. Setting them equal gives P ≈ <b class="bad-t">$1,809</b>, a fall of about <b>9.5%</b>.</p>
      <div class="kv kv3"><div><b>10×</b><span>Leverage</span></div><div><b>$1,809</b><span>Liquidation price</span></div><div><b class="bad-t">−9.5%</b><span>Fall that wipes out the margin</span></div></div>
      <p>Ignoring that small floor, the margin is gone after a 10% fall ($1,800). Higher leverage brings the liquidation price closer: at 20 times, a 5% fall is enough.</p>`},
    {k:'The catch', t:'Funding adds up', b:`
      <p>Suppose the funding rate is +0.01% every 8 hours, paid by longs. On a $10,000 position, each payment is $10,000 × 0.0001 = <b>$1</b>. With three payments a day, that is $3 a day.</p>
      <p>Small, but it never stops. Over a year, $3 × 365 = <b class="bad-t">$1,095</b>, more than the entire $1,000 margin. Funding rates move up and down with the market, and they can be much larger in frenzied conditions.</p>
      <p>A short position can face the opposite: if the rate turns negative, longs are paid and shorts pay.</p>`},
    {k:'The limit', t:'What liquidation does to you', b:`
      <p>Liquidation happens automatically. The exchange closes the position at the market price, and the trader's margin is lost. In fast markets the closing price can be worse than the liquidation price, and some platforms have rules to share losses when that happens.</p>
      <p>Crypto markets trade around the clock, so a liquidation can happen overnight with nobody watching. Many of these platforms sit outside the rules that protect users of regulated exchanges, and rules differ by country.</p>
      <p>Prices of a coin can move by 10% or more in a day. At high leverage, a move like that can mean losing everything in the account.</p>`}
  ],
  qs:[
    {q:'What is the main way a perpetual future differs from an ordinary future?',
     o:['It has no expiry date','It has no margin','It can only be sold short','It is always settled in physical coins'], a:0,
     e:'A perpetual never ends, so a trader can hold it indefinitely. The funding rate takes over the job of keeping its price near spot.'},
    {q:'A trader opens a $10,000 long position with $1,000 of margin. The price falls 4%. What is the loss as a share of the margin?',
     o:['4%','40%','10%','25%'], a:1,
     e:'The loss is 4% × $10,000 = $400. $400 ÷ $1,000 = 40% of the margin.'},
    {q:'The funding rate is +0.02% per 8-hour period. A long position is worth $20,000. How much does it pay in funding over one day (three periods)?',
     o:['$12','$4','$120','$1.20'], a:0,
     e:'Each payment is $20,000 × 0.0002 = $4. Three payments = $12 a day. The long pays because the rate is positive.'},
    {q:'A trader goes long at $400 with 8 times leverage. Ignoring fees and any maintenance floor, at roughly what price is the margin wiped out?',
     o:['$320','$300','$392','$350'], a:3,
     e:'With 8 times leverage, a fall of 1 ÷ 8 = 12.5% wipes out the margin. $400 × (1 − 0.125) = $350.'},
    {q:'A short position in a perpetual is liquidated when the price moves which way?',
     o:['Down, because the trader has lost value','Sideways for a long time','Up, because a short loses when the price rises','Only after midnight'], a:2,
     e:'A short gains when the price falls and loses when it rises. A large rise can drain the margin and trigger liquidation.'}
  ]
};

const FUT_CHECK = {
  title:'Unit check', min:4, badge:{name:'Futures Fluent', icon:'flag'}, cards:[],
  qs:[
    {q:'A trader is long one contract on 1,000 barrels of oil at $70. The final price is $76. What is the gain?',
     o:['$76,000','$6,000','$600','$70,000'], a:1,
     e:'The gain is ($76 − $70) × 1,000 = $6,000. The seller loses the same amount.'},
    {q:'A made-up index future pays $25 per point. The index is at 4,000 and the margin deposit is $4,000. The index falls 40 points. What is the loss as a share of the margin?',
     o:['25%','2.5%','40%','1%'], a:0,
     e:'The loss is 40 × $25 = $1,000. $1,000 ÷ $4,000 = 25% of the margin, from a fall of only 1% in the index.'},
    {q:'An account has $4,000 of initial margin and a $3,000 maintenance level. Losses take it down to $2,600. How much is the margin call to restore the initial level?',
     o:['$400','$3,000','$1,400','$2,600'], a:2,
     e:'$4,000 − $2,600 = $1,400. Topping up only to the maintenance level ($400) would not be enough.'},
    {q:'A farmer expects 20,000 bushels and sells futures at $6.50. At harvest the crop sells at $5.90 and the futures gain $0.60 a bushel. What is the total income?',
     o:['$118,000','$142,000','$130,000','$12,000'], a:2,
     e:'The crop brings 20,000 × $5.90 = $118,000. The futures gain 20,000 × $0.60 = $12,000. Total = $130,000, which is $6.50 a bushel.'},
    {q:'A fund holds a 1,000-barrel future bought at $63. Spot oil stays at $60 until the contract ends. What is the result?',
     o:['Loss of $3,000','Gain of $3,000','Loss of $63,000','No change'], a:0,
     e:'The futures price converges down to the spot price: ($60 − $63) × 1,000 = −$3,000. This is the cost of contango.'},
    {q:'An item costs $500 today. Financing and storage cost 6% a year in total. Using the simple method, what is a 4-month futures price?',
     o:['$530','$510','$505','$520'], a:1,
     e:'4 months = 1/3 of a year. Carry = 6% × 1/3 = 2%. $500 × 1.02 = $510.'},
    {q:'A trader goes long a perpetual at $250 with 5 times leverage. Ignoring fees and any maintenance floor, at roughly what price is the margin wiped out?',
     o:['$200','$225','$150','$237.50'], a:0,
     e:'At 5 times leverage, a fall of 1 ÷ 5 = 20% wipes out the margin. $250 × 0.80 = $200.'},
    {q:'The funding rate is +0.03% per 8-hour period on a $50,000 position. Over two days (six periods), who pays and how much?',
     o:['Longs pay $15','Shorts pay $90','Shorts pay $15','Longs pay $90'], a:3,
     e:'Each payment is $50,000 × 0.0003 = $15. Six periods = $90. A positive rate means longs pay shorts.'}
  ]
};

const UNIT_FUTURES = {id:'futures', title:'Futures basics', level:'Vault', lessons:[FUT_WHAT, FUT_MARGIN, FUT_HEDGE, FUT_CURVE, FUT_PERP, FUT_CHECK]};

/* Vault unit: no placement questions. */

/* MATHS CHECK: every calculation and its result, for the reviewer. All recomputed in Python.
   Lesson 1 (wheat, 5,000 bushels per contract in the example)
   - Notional 5,000 x 6.00 = 30,000; end 7.20: (7.20-6.00) x 5,000 = +6,000 buyer; end 5.10: (5.10-6.00) x 5,000 = -4,500 buyer
   - Q1: 1,000 x 75 = 75,000. Q2: (6.80-6.00) x 5,000 = 4,000. Q3: (82-75) x 1,000 = 7,000 loss for the short
   Lesson 2 (index, $50 per point)
   - Notional 4,000 x 50 = 200,000; margin 10,000 = 5%; leverage 200,000/10,000 = 20; 1% = 2,000 = 20% of margin
   - Day 1: -20 x 50 = -1,000 -> 9,000. Day 2: -30 x 50 = -1,500 -> 7,500 < 8,000; call 10,000-7,500 = 2,500. Day 3: +40 x 50 = +2,000 -> 12,000
   - Q1: 5,000 x 20 = 100,000. Q2: 2% x 100,000 = 2,000; 2,000/5,000 = 40%. Q3: short, +30 x 40 = 1,200; -20 x 40 = -800; total +400
   - Q4: 6,000 - 4,200 = 1,800 (slip 4,500-4,200 = 300).
   Lesson 3
   - Bakery 50,000 bushels = 10 contracts of 5,000. Price 7.00: cost 350,000, futures gain 50,000, net 300,000. Price 5.00: cost 250,000, futures loss 50,000, net 300,000 = 6.00 a bushel
   - Speculator: 0.20 x 5,000 = 1,000; 1,000/2,000 = 50%
   - Q2: 40,000 x 6.30 = 252,000; gain 40,000 x 0.80 = 32,000; net 220,000 = 5.50 x 40,000. Q3: 10,000 x 6.20 = 62,000; 10,000 x 0.80 = 8,000; total 70,000 = 7.00 x 10,000
   - Q4: (6.00-5.70) x 5,000 = 1,500; 1,500/2,000 = 75%
   Lesson 4
   - Carry: 100 x (1 + 0.06 x 0.5) = 103. Curve 80 / 83 / 86. Roll: contango (80-83) x 1,000 = -3,000; backwardation (80-77) x 1,000 = +3,000
   - Q1: (52.50-50)/50 = 5%. Q2: 6% x 0.25 = 1.5%; 200 x 1.015 = 203 (slip 200 x 1.06 = 212). Q3: (90-86) x 1,000 = 4,000
   Lesson 5 (coin at 2,000; 5 units = 10,000; margin 1,000)
   - Leverage 10,000/1,000 = 10. Liquidation: 1,000 + 5(P-2,000) = 0.005 x 5 x P -> 4.975P = 9,000 -> P = 1,809.05; fall (2,000-1,809.05)/2,000 = 9.55%. Ignoring floor: 1,000/5 = 200 -> 1,800 (10%). 20x -> 5%
   - Funding: 0.0001 x 10,000 = 1 per period; 3 per day; 3 x 365 = 1,095 (> 1,000 margin)
   - Q2: 4% x 10,000 = 400; 400/1,000 = 40%. Q3: 0.0002 x 20,000 = 4; x 3 = 12. Q4: 1/8 = 12.5%; 400 x 0.875 = 350
   Unit check
   - Q1: 6 x 1,000 = 6,000. Q2: 40 x 25 = 1,000; 1,000/4,000 = 25%; 40/4,000 = 1% of the index. Q3: 4,000-2,600 = 1,400; 4,000-3,000... slip 400 = 3,000-2,600
   - Q4: 20,000 x 5.90 = 118,000; 20,000 x 0.60 = 12,000; total 130,000 = 6.50 x 20,000. Q5: (60-63) x 1,000 = -3,000
   - Q6: 6% x 4/12 = 2%; 500 x 1.02 = 510. Q7: 1/5 = 20%; 250 x 0.8 = 200. Q8: 0.0003 x 50,000 = 15; x 6 = 90 */
