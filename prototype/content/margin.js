/* ---------- Short selling and margin ---------- */
const MARGIN_BUYING = {
  title:'Buying on margin', min:5,
  cards:[
    {k:'The idea', t:'Investing with borrowed money', b:`
      <p class="lead">Most investors buy with their own cash. A broker can also lend you money to buy more than your cash allows, with the shares you buy held as security for the loan. That is called buying on margin.</p>
      <div class="term"><span class="term-k">Key term</span><b>Buying on margin:</b> borrowing from your broker to buy shares, so your position is bigger than the cash you put in. The loan charges interest, and the broker can sell the shares if things go badly.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Same shares, double the swing', b:`
      <p>Two made-up investors each start with $5,000 and look at Cedar Tech, priced at $50. One uses only cash. The other borrows another $5,000.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Cash only</div>
          <p>100 shares · $5,000</p>
          <div class="pf-r">Price +20% to $60<b class="mono good-t">+$1,000</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">On margin</div>
          <p>200 shares · $5,000 borrowed</p>
          <div class="pf-r">Price +20% to $60<b class="mono good-t">+$2,000</b></div>
        </div>
      </div>
      <p>The margin investor's shares are now worth $12,000. After repaying the $5,000 loan, $7,000 is left, a gain of $2,000 on the original $5,000: <b class="good-t">+40%</b>, against +20% for the cash investor.</p>
      <p>It cuts the other way too. If the price falls 20% to $40, the shares are worth $8,000 and $3,000 is left after the loan: a loss of $2,000, or <b class="bad-t">−40%</b>. The cash investor loses 20%.</p>`},
    {k:'The catch', t:'Interest, and a quick wipe-out', b:`
      <p>The loan isn't free. Say the broker charges 8% a year on the $5,000.</p>
      <div class="kv kv3"><div><b>$400</b><span>Interest for a year</span></div><div><b class="good-t">+32%</b><span>Price +20%, after interest</span></div><div><b class="bad-t">−8%</b><span>Price flat, after interest</span></div></div>
      <p>Interest of $400 comes off the $2,000 gain, leaving $1,600, which is 32% of $5,000. If the price goes nowhere, the interest still has to be paid, so the investor ends the year down $400.</p>
      <p>The loan must be repaid however the shares do. With the $10,000 position, a 50% fall leaves shares worth $5,000, exactly the amount owed. All of the investor's own money is gone, before interest.</p>
      <div class="term"><span class="term-k">Key term</span><b>Leverage:</b> using borrowed money so that a given price move has a bigger effect on your own money. Here, position ÷ own money = $10,000 ÷ $5,000 = 2, so every price move counts twice.</div>`},
    {k:'The limit', t:'How much can you borrow?', b:`
      <p>Brokers don't lend without limits. In the US, a common rule is that at least half of a share purchase is paid with the investor's own cash. That caps leverage at 2 when the position is opened. Brokers can ask for more, and rules differ by country and by broker.</p>
      <p>A smaller loan works the same way, just with less effect. With $6,000 of cash and a $3,000 loan, the position is $9,000 and leverage is 9,000 ÷ 6,000 = 1.5. A 10% rise gives $900 on the $6,000: <b class="good-t">+15%</b>.</p>
      <p>The rule of thumb: the return on your own money is roughly the price move multiplied by the leverage, then reduced by interest. Margin makes gains and losses both bigger, and it adds a cost that cash buyers don't pay.</p>`}
  ],
  qs:[
    {q:'Lina has $4,000 of her own and borrows $4,000 to buy $8,000 of Byblos Foods shares. The shares rise 10%. Ignoring interest, what is her gain on her own $4,000?',
     o:['10%','20%','5%','40%'], a:1,
     e:'The shares are worth $8,800. After repaying the $4,000 loan, $4,800 is left: a gain of $800 on $4,000, which is 20%. Leverage of 2 doubles the 10% move.'},
    {q:'Same position, but the shares fall 30% instead. Ignoring interest, what is her loss on her own $4,000?',
     o:['30%','15%','60%','100%'], a:2,
     e:'The shares are worth $5,600. After repaying the $4,000 loan, $1,600 is left: a loss of $2,400 on $4,000, which is 60%.'},
    {q:'Karim buys $10,000 of shares, $5,000 of it borrowed at 6% a year. After one year the share price is exactly where he bought. Ignoring everything else, what is his result?',
     o:['He breaks even','He gains $300','He loses $600','He loses $300'], a:3,
     e:'Interest is 6% of the $5,000 borrowed = $300. The shares haven\'t moved, so the interest is a pure loss. Charging 6% on the whole $10,000 ($600) is a slip.'},
    {q:'True or false: if you borrow half the price of a share purchase, a 50% fall in the share price wipes out your own money (before interest).',
     o:['True','False'], a:0,
     e:'Buy $10,000 with $5,000 borrowed. A 50% fall leaves shares worth $5,000, which all goes to repay the loan. Nothing is left for the investor.'},
    {q:'Rami has $6,000 and borrows $3,000 to buy $9,000 of shares. The price rises 10%. Ignoring interest, what is his return on his own $6,000?',
     o:['10%','30%','15%','9%'], a:2,
     e:'The shares gain $900. $900 ÷ $6,000 = 15%. That is the 10% move times leverage of 9,000 ÷ 6,000 = 1.5.'}
  ]
};

const MARGIN_CALLS = {
  title:'Margin calls', min:5,
  cards:[
    {k:'The idea', t:'When the broker wants more', b:`
      <p class="lead">A broker lends against your shares. If the shares drop, the loan gets riskier for the broker. So the account has to keep a minimum share of its value as the investor's own money. If it slips below that, the broker steps in.</p>
      <div class="term"><span class="term-k">Key term</span><b>Margin call:</b> a demand from your broker to add cash or sell shares, because your own share of the account has fallen below the required minimum.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Watching the equity slip', b:`
      <p>The investor's own share of the account is called equity: <b>equity = value of shares − loan</b>. The minimum, as a share of value, is the maintenance margin. Here the broker asks for 25%.</p>
      <p>Take the account from the Buying on margin lesson: 200 Cedar Tech shares bought at $50, with a $5,000 loan.</p>
      <div class="kv"><div><b>$50</b><span>Equity 50%</span></div><div><b>$40</b><span>Equity 37.5%</span></div><div><b>$35</b><span>Equity 28.6%</span></div><div><b class="bad-t">$32</b><span>Equity 21.9%: call</span></div></div>
      <p>At $40 the shares are worth $8,000, so equity is $3,000, and 3,000 ÷ 8,000 = 37.5%. At $32 they are worth $6,400, equity is $1,400, and 1,400 ÷ 6,400 = 21.9%, below 25%.</p>
      <p>The trigger sits at $5,000 ÷ (200 × 0.75) ≈ <b>$33.33</b>. That is a one-third fall from $50, even though the investor only put in half the money.</p>`},
    {k:'The catch', t:'Two ways out, and a third', b:`
      <p>At $32 the shares are worth $6,400. The broker needs equity of 25% × $6,400 = $1,600, and the account has $1,400. The shortfall is $200. There are two ways to fix it.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Add cash</div>
          <p>Deposit the shortfall and use it to pay down the loan</p>
          <div class="pf-r">Equity $1,600 ÷ $6,400<b class="mono">25%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Sell shares</div>
          <p>Sell 25 shares ($800) to repay the loan</p>
          <div class="pf-r">Equity $1,400 ÷ $5,600<b class="mono">25%</b></div>
        </div>
      </div>
      <p>Selling needs a bigger amount ($800) than the shortfall ($200), because selling leaves equity unchanged and only lowers the requirement, by 25 cents for each dollar sold. $200 ÷ 0.25 = $800.</p>
      <p>The third way is that the investor does nothing. Account agreements usually let the broker sell shares without asking first, at the price available at that moment. The investor doesn't get to pick the timing.</p>`},
    {k:'The limit', t:'When prices gap past the line', b:`
      <p>A margin call assumes there is time to react. Prices sometimes jump. If bad news comes out overnight and Cedar Tech opens at $20, the 200 shares are worth $4,000 against a $5,000 loan.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Cash buyer</div><b>Loses at most the cash put in</b><p>Shares can fall to zero, but nothing is owed on top.</p></div>
        <div class="col bad"><div class="col-h">Margin investor</div><b class="bad-t">Owes $1,000 more</b><p>Selling everything covers only $4,000 of the $5,000 loan.</p></div>
      </div>
      <p>The investor's $5,000 is gone and a further $1,000 is owed to the broker. That is why margin can lose more than the money put in.</p>
      <p>A forced sale also locks in the loss. If the price recovers afterwards, the investor no longer holds the shares to benefit.</p>`}
  ],
  qs:[
    {q:'An account holds $12,000 of shares with a $4,000 loan. What share of the account\'s value is the investor\'s own equity?',
     o:['33.3%','66.7%','75%','50%'], a:1,
     e:'Equity = $12,000 − $4,000 = $8,000. $8,000 ÷ $12,000 ≈ 66.7%. The loan is the other 33.3%.'},
    {q:'An account now holds $5,000 of shares with a $4,000 loan. The broker requires equity of 30% of the shares\' value. How much cash would end the margin call?',
     o:['$300','$1,000','$500','$1,500'], a:2,
     e:'Equity is $5,000 − $4,000 = $1,000. The broker needs 30% × $5,000 = $1,500. The shortfall is $500. Paying $500 off the loan gives equity of $1,500 ÷ $5,000 = 30%.'},
    {q:'True or false: if an investor ignores a margin call, the broker may sell shares from the account for them, at whatever price is available.',
     o:['True','False'], a:0,
     e:'Account agreements usually allow forced sales. The investor doesn\'t choose which shares are sold or when.'},
    {q:'Karim buys 100 shares at $80 ($8,000), with $4,000 of it borrowed. The broker\'s maintenance requirement is 25%. Below roughly what share price does a margin call arise?',
     o:['$60.00','$40.00','$53.33','$20.00'], a:2,
     e:'The call comes when equity falls to 25% of value: $4,000 ÷ (100 × 0.75) ≈ $53.33. $60 is a 25% fall from $80, but that ignores the loan. $40 is where equity hits zero.'},
    {q:'Dana buys 100 shares at $40 with $2,000 of the $4,000 borrowed. Bad news arrives overnight, and the shares open at $15. The broker sells everything. How much does she still owe?',
     o:['Nothing; she just loses her $2,000','$500','$2,000','$1,500'], a:1,
     e:'The 100 shares sell for $1,500, which doesn\'t cover the $2,000 loan. She lost all her own money and still owes $2,000 − $1,500 = $500.'}
  ]
};

const MARGIN_SHORT = {
  title:'How short selling works', min:5,
  cards:[
    {k:'The idea', t:'Selling what you don\'t own', b:`
      <p class="lead">A normal investor buys first and sells later. A short seller does it in the other order. They borrow shares, sell them straight away, and hope to buy them back later at a lower price.</p>
      <div class="term"><span class="term-k">Key term</span><b>Short selling:</b> borrowing shares, selling them now, and buying them back later to return to the lender. It profits if the price falls and loses if it rises.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Profit from a fall', b:`
      <p>Cedar Tech trades at $40. A trader borrows 100 shares through a broker and sells them for $4,000. Later she buys 100 shares on the market and hands them back. That last step is called covering the short.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Price falls to $30</div>
          <p>Buys back for $3,000</p>
          <div class="pf-r">Profit<b class="mono good-t">+$1,000</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Price rises to $55</div>
          <p>Buys back for $5,500</p>
          <div class="pf-r">Loss<b class="mono bad-t">−$1,500</b></div>
        </div>
      </div>
      <p>Profit = price sold at − price bought back, times the number of shares. The $1,000 gain is 25% of the $4,000 sale, and the $1,500 loss is 37.5% of it.</p>`},
    {k:'The catch', t:'Capped gain, uncapped loss', b:`
      <p>A share can't fall below zero, but it has no ceiling. That makes short selling lopsided.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Best case</div><b>+$4,000</b><p>The price goes to zero. The shares are bought back for nothing, and the whole $4,000 is profit.</p></div>
        <div class="col bad"><div class="col-h">Worst case</div><b class="bad-t">No limit</b><p>At $80 the loss is $4,000. At $120 it is $8,000, twice the sale proceeds.</p></div>
      </div>
      <p>A person who buys shares can lose at most what they paid. A short seller can lose many times what the sale brought in. That is why the broker holds the sale money, asks for extra cash as security, and can issue margin calls, as in the Margin calls lesson.</p>`},
    {k:'In practice', t:'The costs that eat into it', b:`
      <p>Short selling has running costs that a buyer doesn't pay.</p>
      <p><b>Borrow fee.</b> Lenders charge for the shares. At 3% a year on $4,000, that is $120 a year, or $30 for three months.</p>
      <p><b>Dividends.</b> The real owner of the shares is still entitled to the dividend. The short seller has to pay it. If Cedar Tech pays $0.50 a share, 100 shares cost $50.</p>
      <p>Say the price drops from $40 to $36 over three months. Gross profit is 100 × $4 = $400. Take off the $30 fee and the $50 dividend, and $320 is left.</p>
      <p>Shares can also be recalled by the lender, forcing an early cover, and hard-to-borrow stocks carry higher fees. In a crisis, regulators have sometimes restricted short selling for a while.</p>`}
  ],
  qs:[
    {q:'Hana borrows and sells 200 shares of Litani Energy at $25. She buys them back at $20. What is her profit, ignoring costs?',
     o:['$500','$5,000','$1,000','−$1,000'], a:2,
     e:'She sold at $25 and bought back at $20: $5 a share × 200 = $1,000. $5,000 is the sale amount, not the profit.'},
    {q:'Same trade, but the price rises to $31 and she buys back there. What is her result, ignoring costs?',
     o:['−$600','−$1,200','−$5,000','−$6,200'], a:1,
     e:'She sold at $25 and buys back at $31: a loss of $6 a share × 200 = $1,200. $6,200 is the buy-back cost, not the loss.'},
    {q:'Zeina shorts 100 shares at $50. What is the most she can possibly gain, ignoring costs?',
     o:['Unlimited','$5,000','$10,000','$500'], a:1,
     e:'The best case is the price falling to zero, so she buys back for nothing and keeps the whole $5,000. A price can\'t fall below zero.'},
    {q:'A trader shorts 50 shares at $60. While she is short, the company pays a $1 dividend a share. She buys back at $54. Ignoring other costs, what is her net result?',
     o:['$300','$250','$350','$50'], a:1,
     e:'Price gain: $6 × 50 = $300. She owes the dividend, $1 × 50 = $50. Net: $300 − $50 = $250. Adding the dividend ($350) is the wrong direction.'},
    {q:'Why can a short seller lose more than the money the sale brought in?',
     o:['Brokers charge a fee equal to the sale amount','The shares must be returned at the original price','Nothing limits how high the price can go, and the shares must be bought back at whatever it is','They can\'t; the loss is capped at the sale amount'], a:2,
     e:'A buyer can lose at most 100% of what they paid. A short seller faces a price that can keep rising, so the loss can pass 100% of the sale proceeds.'}
  ]
};

const MARGIN_SQUEEZE = {
  title:'Short squeezes', min:5,
  cards:[
    {k:'The idea', t:'When shorts must buy', b:`
      <p class="lead">Every short seller has to buy the shares back one day. That makes them future buyers. If the price rises sharply, many of them may rush to buy at the same time, and their buying lifts the price even more.</p>
      <div class="term"><span class="term-k">Key term</span><b>Short squeeze:</b> a fast price rise that forces short sellers to buy back shares to cut their losses. Their buying pushes the price up further.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'How crowded is the short?', b:`
      <p>Two numbers show how exposed a stock is. The float is the number of shares available for trading. Short interest is how many of them have been sold short.</p>
      <p>A made-up company, Beirut Motors, has a float of 10 million shares. 4 million are sold short, and the stock trades 500,000 shares a day on average.</p>
      <div class="kv kv3"><div><b>40%</b><span>Short interest</span></div><div><b>500,000</b><span>Shares a day</span></div><div><b class="bad-t">8 days</b><span>Days to cover</span></div></div>
      <p>4 million ÷ 10 million = 40%. Days to cover is short interest in shares ÷ average daily volume: 4,000,000 ÷ 500,000 = 8. If short sellers bought back at a pace equal to the stock's whole normal daily volume, it would take 8 days to close every short.</p>
      <div class="term"><span class="term-k">Key term</span><b>Days to cover:</b> how many days of normal trading it would take for all short sellers to buy back their shares. A higher number means a more crowded exit.</div>`},
    {k:'The catch', t:'How a squeeze feeds itself', b:`
      <p>A trader shorts 100 shares of a stock at $20, receiving $2,000. Good news arrives and the price climbs.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Price at $30</div>
          <p>Buy-back costs $3,000</p>
          <div class="pf-r">Loss<b class="mono bad-t">−$1,000</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Price at $40</div>
          <p>Buy-back costs $4,000</p>
          <div class="pf-r">Loss<b class="mono bad-t">−$2,000</b></div>
        </div>
      </div>
      <p>At $30 she has lost half the sale proceeds. At $40 she has lost all of it. Some traders cover early. Others get margin calls and are forced to. Each buy order adds to the demand, which lifts the price, which hurts the remaining shorts.</p>
      <p>The size matters. If shorts in Beirut Motors needed to buy back 2 million shares, that would be 2,000,000 ÷ 500,000 = 4 days of normal volume, wanted at once.</p>`},
    {k:'In practice', t:'A real case, and the warning', b:`
      <p>In January 2021, the shares of GameStop, a US video-game retailer, rose from under $20 at the start of the month to over $300 within weeks. A large share of the float had been sold short, and many short sellers closed their positions at heavy losses as the price climbed. Afterwards, the price fell back sharply, and many who bought near the top lost money.</p>
      <p>That story is not a template. Heavy short interest alone doesn't cause a squeeze. Many heavily shorted stocks keep falling, and the short sellers are proved right.</p>
      <p>Squeezes are also hard to time. A price that looks stretched can keep climbing for a long while, and a short seller must keep funding the account the whole time. Short interest can even pass 100% of the float, since a borrowed share can be sold, then lent and sold short again.</p>`}
  ],
  qs:[
    {q:'A stock\'s float is 20 million shares, and 5 million of them are sold short. What is the short interest as a share of the float?',
     o:['4%','25%','20%','75%'], a:1,
     e:'5 million ÷ 20 million = 25%. The figure 4 comes from dividing the other way round, which isn\'t a percentage of the float.'},
    {q:'6 million shares are sold short, and the stock trades 1.5 million shares a day on average. What are the days to cover?',
     o:['0.25 days','9 days','1.5 days','4 days'], a:3,
     e:'Days to cover = short interest in shares ÷ average daily volume = 6,000,000 ÷ 1,500,000 = 4.'},
    {q:'What makes a short squeeze feed itself?',
     o:['Short sellers selling more shares as the price rises','Companies issuing new shares','Short sellers buying back to close their positions, which adds demand and pushes the price higher','The broker lowering the margin requirement'], a:2,
     e:'Buying back is the only way to close a short. When many shorts do it at once, the extra demand lifts the price and hurts the shorts still holding on.'},
    {q:'A trader shorted 200 shares at $15. The price spikes to $24. What is the loss if she buys back there?',
     o:['$1,800','$9','$3,000','$4,800'], a:0,
     e:'The loss per share is $24 − $15 = $9, and 9 × 200 = $1,800. $4,800 is the buy-back cost, and $3,000 is the original sale amount.'},
    {q:'True or false: if a stock has a very high short interest, a squeeze is certain.',
     o:['True','False'], a:1,
     e:'A high short interest makes a squeeze possible, not certain. Many heavily shorted stocks keep falling, and no squeeze happens.'}
  ]
};

const MARGIN_LIQUIDITY = {
  title:'Liquidity and slippage', min:5,
  cards:[
    {k:'The idea', t:'The price on screen is for a small order', b:`
      <p class="lead">A quoted price tells you what a small order costs right now. A big order, or an order in a quiet stock, may cost more. The easier it is to trade without moving the price, the more liquid the market is.</p>
      <div class="term"><span class="term-k">Key term</span><b>Liquidity:</b> how easily and cheaply you can buy or sell an asset without moving its price. Large, busy stocks tend to be liquid. Small, rarely traded ones tend not to be.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'The spread is a cost', b:`
      <p>In the Reading the market unit, the spread was the gap between the bid (what buyers offer) and the ask (what sellers want). Buy at the ask and sell straight back at the bid, and the gap is lost.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Byblos Foods: busy</div>
          <p>Bid $19.90 · ask $20.10</p>
          <div class="pf-r">Gap $0.20 on a $20.00 midpoint<b class="mono">1%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Small-cap: quiet</div>
          <p>Bid $4.80 · ask $5.20</p>
          <div class="pf-r">Gap $0.40 on a $5.00 midpoint<b class="mono bad-t">8%</b></div>
        </div>
      </div>
      <p>For 500 shares of Byblos Foods: buying at $20.10 costs $10,050, selling at $19.90 brings in $9,950. The round trip costs $100 before anything else happens. In the quiet stock, the price must rise about 8% before the trader is level.</p>`},
    {k:'The catch', t:'Big orders walk up the book', b:`
      <p>The ask price is only good for a limited number of shares. A buyer who wants more has to take the next, higher offers. Here are the sell offers for Byblos Foods:</p>
      <p>300 shares at $20.10 · 400 at $20.20 · 300 at $20.30</p>
      <p>A market order to buy 1,000 shares eats all three: $6,030 + $8,080 + $6,090 = $20,200. The average price is $20.20, not the $20.10 on the screen. The $0.10 a share gap is $100 in total.</p>
      <div class="term"><span class="term-k">Key term</span><b>Slippage:</b> the gap between the price you expected when you placed an order and the average price you actually got.</div>
      <p>A limit order caps the price you'll pay. If the offers above are all that's available, a limit buy at $20.15 for 1,000 shares would fill only the first 300 shares and wait for the rest.</p>`},
    {k:'The limit', t:'Why it matters for margin and shorts', b:`
      <p>Liquidity is thinnest at the worst moments. In a panic, buyers step back, spreads widen and each sale moves the price more.</p>
      <p>That is the danger for leveraged traders. A forced sale after a margin call takes whatever price is on offer. A short seller covering in a squeeze is a forced buyer in a market that has little for sale.</p>
      <p>Size against volume is the test. Selling 50,000 shares of a stock that trades 100,000 a day means supplying half a day's volume, and the price may drop while the order works through.</p>
      <p>None of this tells anyone what to trade. It shows why the price you see and the price you get can differ.</p>`}
  ],
  qs:[
    {q:'A stock has a bid of $9.95 and an ask of $10.05. A trader buys one share at the ask and sells it straight back at the bid. What does that round trip cost per share?',
     o:['$0.05','$0.20','$10.00','$0.10'], a:3,
     e:'$10.05 − $9.95 = $0.10 a share. $0.05 is only half of the gap.'},
    {q:'A stock has a bid of $4.75 and an ask of $5.25. The midpoint is $5.00. The spread is what percentage of the midpoint?',
     o:['0.5%','5%','10%','50%'], a:2,
     e:'The spread is $5.25 − $4.75 = $0.50. $0.50 ÷ $5.00 = 10%.'},
    {q:'Sell offers for a stock: 100 shares at $8.00, 200 at $8.05, 300 at $8.15. A market order to buy 600 shares fills against all of them. To the nearest cent, what is the average price paid?',
     o:['$8.09','$8.00','$8.07','$8.15'], a:0,
     e:'Total cost: $800 + $1,610 + $2,445 = $4,855. $4,855 ÷ 600 ≈ $8.09. Averaging the three prices without weighting them by size gives $8.07, a slip.'},
    {q:'A limit order to buy 700 shares at $20.15 meets offers of 300 shares at $20.10 and 400 at $20.20. What happens?',
     o:['All 700 fill at an average of about $20.16','300 shares fill at $20.10, and the other 400 stay unfilled','Nothing fills','All 700 fill at $20.15'], a:1,
     e:'A limit order never pays above its limit. $20.20 is above $20.15, so only the first 300 shares fill.'},
    {q:'A trader must sell 40,000 shares of a stock that trades about 80,000 shares a day. What share of a normal day\'s volume is that?',
     o:['2%','200%','40%','50%'], a:3,
     e:'40,000 ÷ 80,000 = 50%. An order that large can move the price while it is being filled.'}
  ]
};

const MARGIN_CHECK = {
  title:'Unit check', min:4, badge:{name:'Margin Master', icon:'bolt'}, cards:[],
  qs:[
    {q:'Nour has $6,000 and borrows $6,000 to buy $12,000 of shares. The broker needs equity of at least 25% of the shares\' value. Below roughly what value of shares does she get a margin call?',
     o:['$9,000','$6,000','$8,000','$7,500'], a:2,
     e:'The call comes when equity falls to 25% of value: value − $6,000 = 0.25 × value, so 0.75 × value = $6,000, and value = $8,000. $9,000 is a 25% fall from $12,000, which ignores the loan.'},
    {q:'Omar has $5,000 and borrows $5,000 at 8% a year to buy $10,000 of shares. After a year the shares are up 30%. After repaying the loan and interest, what is his return on his own $5,000?',
     o:['60%','30%','22%','52%'], a:3,
     e:'The shares are worth $13,000. He repays $5,000 plus $400 interest, leaving $7,600: a gain of $2,600, which is 52%. Ignoring interest gives 60%. Subtracting 8 from 30 gives 22%, a slip.'},
    {q:'Rima buys 100 shares at $60 with $3,000 of the $6,000 borrowed. Overnight bad news sends the price to $25, and the broker sells everything. What is her total loss on her own money?',
     o:['$3,000','$3,500','$2,500','$500'], a:1,
     e:'The shares sell for $2,500, which leaves $500 owed on the $3,000 loan. She lost her own $3,000 and owes $500 more: $3,500 in all. Her loss is bigger than her original stake.'},
    {q:'Tarek shorts 400 shares at $18. He pays a borrow fee of 4% a year on the sale amount for 6 months, then buys back at $15. Ignoring dividends, what is his net profit?',
     o:['$1,056','$1,200','$1,344','$912'], a:0,
     e:'Sale amount: 400 × $18 = $7,200. Price gain: 400 × $3 = $1,200. Fee: $7,200 × 4% × 0.5 = $144. Net: $1,200 − $144 = $1,056. A full year\'s fee would give $912.'},
    {q:'Layla shorts a stock at $25. It climbs to $60 before she buys back. Her loss is what percentage of the money she received from the sale?',
     o:['35%','58%','140%','240%'], a:2,
     e:'Loss per share: $60 − $25 = $35. $35 ÷ $25 = 140%. Dividing by $60 gives 58%, which uses the wrong base.'},
    {q:'A stock has a float of 12 million shares, with 3 million sold short, and trades 400,000 shares a day. A squeeze forces shorts to buy back 1 million shares in one day. How many times the average daily volume is that?',
     o:['0.4 times','2.5 times','7.5 times','25 times'], a:1,
     e:'1,000,000 ÷ 400,000 = 2.5. Dividing the other way gives 0.4. The 7.5 is the days to cover for all 3 million shares, not for 1 million.'},
    {q:'A thin stock has bids of 500 shares at $3.90 and 500 at $3.80, and offers of 500 at $4.00 and 500 at $4.10. A trader buys 1,000 shares at market, then sells 1,000 at market straight away. What does the round trip cost?',
     o:['$100','$300','$400','$200'], a:3,
     e:'Buy: $2,000 + $2,050 = $4,050. Sell: $1,950 + $1,900 = $3,850. Cost: $4,050 − $3,850 = $200. Using only the best bid and ask ($4.00 and $3.90) would suggest $100.'},
    {q:'A margin call forces Omar to sell 30,000 shares of a stock that trades about 60,000 shares a day. Which statement fits?',
     o:['The sale will fill at the last quoted price','Thin stocks can\'t have margin calls','The sale is half a day\'s volume, so it may push the price down while it fills, making the loss bigger','The exchange pauses trading until the sale is done'], a:2,
     e:'30,000 ÷ 60,000 = 50% of a normal day. Orders that large tend to move the price, and forced sellers take whatever is on offer.'}
  ]
};

const UNIT_MARGIN = {id:'margin', title:'Short selling and margin', level:'Intermediate', lessons:[MARGIN_BUYING, MARGIN_CALLS, MARGIN_SHORT, MARGIN_SQUEEZE, MARGIN_LIQUIDITY, MARGIN_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_MARGIN = [
  {n:1, q:'Hadi puts in $2,500 and borrows $2,500 to buy $5,000 of shares. The price falls 20%. Ignoring interest, what is his loss on his own $2,500?',
   o:['20%','40%','50%','10%'], a:1,
   e:'The shares are worth $4,000. After repaying the $2,500 loan, $1,500 is left: a loss of $1,000 on $2,500, which is 40%. Leverage of 2 doubles the 20% fall.'},
  {n:2, q:'An account holds $6,000 of shares with a $4,500 loan. The broker requires equity of 30% of the shares\' value. How much cash brings the account back to the minimum?',
   o:['$300','$450','$1,500','$0, there is no margin call'], a:0,
   e:'Equity is $6,000 − $4,500 = $1,500, which is 25%. The broker needs 30% × $6,000 = $1,800. The shortfall is $300.'},
  {n:3, q:'A trader shorts 300 shares at $12 and buys them back at $9.50. What is her profit, ignoring costs?',
   o:['$2.50','$750','$3,600','$2,850'], a:1,
   e:'Profit per share: $12 − $9.50 = $2.50. 2.5 × 300 = $750. $3,600 is the sale amount, and $2,850 is the buy-back cost.'},
  {n:4, q:'A stock\'s float is 8 million shares. 2 million are sold short, and it trades 250,000 shares a day. What are the days to cover?',
   o:['25 days','8 days','4 days','0.125 days'], a:1,
   e:'2,000,000 ÷ 250,000 = 8 days. Short interest here is 25% of the float, which is a different measure.'},
  {n:5, q:'A stock has a bid of $29.80 and an ask of $30.20. A trader buys 100 shares at the ask and sells them straight back at the bid. What does the round trip cost?',
   o:['$0.40','$20','$40','$3,020'], a:2,
   e:'The gap is $30.20 − $29.80 = $0.40 a share. 0.40 × 100 = $40.'}
];

/* MATHS CHECK (all run in Python)
   Lesson 1 · Buying on margin
   - Cash 100 shares at $50 = $5,000; +20% to $60: +$1,000 (+20%). Margin 200 shares, $10,000, loan $5,000; at $60 value $12,000, equity $7,000, gain $2,000 = 40%.
     At $40 value $8,000, equity $3,000, loss $2,000 = −40% (cash buyer −$1,000 = −20%).
   - Interest 8% × $5,000 = $400. Price +20%: $2,000 − $400 = $1,600 = 32% of $5,000. Price flat: −$400 = −8%.
   - 50% fall: $10,000 → $5,000 = loan, equity 0. Leverage $10,000 ÷ $5,000 = 2. Alt: $9,000 ÷ $6,000 = 1.5; +10% = $900 ÷ $6,000 = 15%.
   - Q1: $8,000 × 1.1 = $8,800 − $4,000 = $4,800; +$800 ÷ $4,000 = 20%. Q2: $8,000 × 0.7 = $5,600 − $4,000 = $1,600; −$2,400 = −60%.
   - Q3: 6% × $5,000 = $300 (slip 6% × $10,000 = $600). Q4: $10,000 × 0.5 = $5,000 = loan.
   - Q5: $9,000 × 10% = $900 ÷ $6,000 = 15% (slip $900 ÷ $9,000 = 10%).
   Lesson 2 · Margin calls (loan $5,000, 200 shares, maintenance 25%)
   - Equity ratio = (value − loan) ÷ value. $50: 5,000 ÷ 10,000 = 50%. $40: 3,000 ÷ 8,000 = 37.5%. $35: 2,000 ÷ 7,000 = 28.57%. $32: 1,400 ÷ 6,400 = 21.875% ≈ 21.9%.
   - Trigger: 5,000 ÷ (200 × 0.75) = $33.33; fall from $50 = 33.3%.
   - At $32: required 25% × 6,400 = 1,600; equity 1,400; shortfall $200; deposit $200 → 1,600 ÷ 6,400 = 25%.
     Sell 25 shares = $800 (25 × 32): value 5,600, loan 4,200, equity 1,400 → 1,400 ÷ 5,600 = 25%.
   - Gap to $20: 200 × 20 = $4,000 − $5,000 loan = −$1,000 (owes $1,000).
   - Q1: 12,000 − 4,000 = 8,000 ÷ 12,000 = 66.7%. Q2: 5,000 − 4,000 = 1,000; 30% × 5,000 = 1,500; shortfall 500; (1,000 + 500) ÷ 5,000 = 30%.
   - Q4: 4,000 ÷ (100 × 0.75) = $53.33 (slips: 80 × 0.75 = 60; 4,000 ÷ 100 = 40 zero equity; 80 × 0.25 = 20).
   - Q5: 100 × 15 = 1,500 − 2,000 loan = −500 (owes $500).
   Lesson 3 · How short selling works
   - 100 shares at $40 = $4,000. Cover at $30 = $3,000 → +$1,000 (25%). Cover at $55 = $5,500 → −$1,500 (−37.5%).
   - Best case $4,000. $80: 4,000 − 8,000 = −$4,000. $120: 4,000 − 12,000 = −$8,000 (200% of proceeds).
   - Fee 3% × 4,000 = $120 a year; ÷ 4 = $30. Dividend 100 × $0.50 = $50. $40 → $36: 100 × 4 = $400 − 30 − 50 = $320.
   - Q1: 200 × (25 − 20) = $1,000. Q2: 200 × (25 − 31) = −$1,200 (31 × 200 = 6,200). Q3: 100 × 50 = $5,000.
   - Q4: 50 × 6 = 300 − (50 × 1 = 50) = $250 (slip 350).
   Lesson 4 · Short squeezes
   - Short interest 4M ÷ 10M = 40%. Days to cover 4,000,000 ÷ 500,000 = 8. Covering 2M ÷ 500k = 4 days of volume.
   - Short 100 at $20 = $2,000. At $30: −$1,000 (50% of proceeds). At $40: −$2,000 (100%).
   - GameStop: closed 4 Jan 2021 about $17, closed 27 Jan 2021 about $348 (so "under $20 to over $300"); reviewer to verify wording.
   - Q1: 5 ÷ 20 = 25% (slip 20 ÷ 5 = 4). Q2: 6,000,000 ÷ 1,500,000 = 4. Q4: 200 × (24 − 15) = $1,800 (200 × 24 = 4,800; 200 × 15 = 3,000).
   Lesson 5 · Liquidity and slippage
   - Byblos Foods: spread 20.10 − 19.90 = 0.20; 0.20 ÷ 20.00 = 1%. 500 sh: 500 × 20.10 = 10,050; 500 × 19.90 = 9,950; cost $100.
   - Quiet stock: 5.20 − 4.80 = 0.40; 0.40 ÷ 5.00 = 8%.
   - Book: 300 × 20.10 = 6,030; 400 × 20.20 = 8,080; 300 × 20.30 = 6,090; total 20,200; average 20.20; vs 20.10 ask: $0.10 × 1,000 = $100.
   - Limit buy at 20.15: fills only the 300 at 20.10 (20.20 and 20.30 are above the limit).
   - Q1: 10.05 − 9.95 = 0.10. Q2: 5.25 − 4.75 = 0.50; 0.50 ÷ 5.00 = 10% (÷ 5.25 = 9.5%, not offered).
   - Q3: 100 × 8.00 + 200 × 8.05 + 300 × 8.15 = 800 + 1,610 + 2,445 = 4,855; ÷ 600 = 8.0917 ≈ $8.09 (unweighted mean of prices 8.0667 ≈ 8.07).
   - Q4: only 300 shares at 20.10 fill (6,030). Q5: 40,000 ÷ 80,000 = 50%. Card 4: 50,000 ÷ 100,000 = 50%.
   Unit check
   - C1: value − 6,000 = 0.25 × value → value = 6,000 ÷ 0.75 = $8,000 (12,000 × 0.75 = 9,000 slip).
   - C2: 10,000 × 1.3 = 13,000; − 5,000 − (8% × 5,000 = 400) = 7,600; gain 2,600 ÷ 5,000 = 52%. No interest: 3,000 ÷ 5,000 = 60%. 30 − 8 = 22.
   - C3: 100 × 25 = 2,500; loan 3,000; owes 500. Own money lost 3,000 + 500 = 3,500 (= 100 × (60 − 25)).
   - C4: 400 × 18 = 7,200; 400 × 3 = 1,200; fee 7,200 × 4% × 0.5 = 144; net 1,056. Full-year fee 288 → 912. 1,200 + 144 = 1,344.
   - C5: (60 − 25) ÷ 25 = 140% (35 ÷ 60 = 58.3%; 60 ÷ 25 = 240%).
   - C6: 1,000,000 ÷ 400,000 = 2.5 (400,000 ÷ 1,000,000 = 0.4; 3,000,000 ÷ 400,000 = 7.5 days to cover). Short interest 3 ÷ 12 = 25%.
   - C7: buy 500 × 4.00 + 500 × 4.10 = 4,050; sell 500 × 3.90 + 500 × 3.80 = 3,850; cost 200. Top of book only: (4.00 − 3.90) × 1,000 = 100. Worst levels: (4.10 − 3.80) × 1,000 = 300.
   - C8: 30,000 ÷ 60,000 = 50%.
   Placement
   - P1: 5,000 × 0.8 = 4,000 − 2,500 loan = 1,500; loss 1,000 ÷ 2,500 = 40%.
   - P2: 6,000 − 4,500 = 1,500 (25%); 30% × 6,000 = 1,800; shortfall 300.
   - P3: 300 × (12 − 9.5) = 750 (300 × 12 = 3,600; 300 × 9.5 = 2,850).
   - P4: 2,000,000 ÷ 250,000 = 8 days (short interest 2 ÷ 8 = 25%).
   - P5: (30.20 − 29.80) × 100 = $40.
*/
