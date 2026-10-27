/* ---------- Crypto and other assets ---------- */
const ALTERNATIVES_BITCOIN = {
  title:'Bitcoin and blockchains', min:5,
  cards:[
    {k:'The idea', t:'A ledger that nobody owns', b:`
      <p class="lead">A ledger is a record of who owns what. A bank keeps its own ledger. A blockchain is a ledger copied across thousands of computers, which all have to agree before anything new is added. Bitcoin, launched in 2009 by someone using the name Satoshi Nakamoto, was the first big use of one.</p>
      <div class="term"><span class="term-k">Key term</span><b>Blockchain:</b> a shared record of transactions, stored in linked batches called blocks and copied across many computers, so no single company controls it. A cryptocurrency is a digital coin recorded on one.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Big falls need bigger rebounds', b:`
      <p>Crypto prices are known for large swings. Take a made-up coin, Cedar Coin, and $10,000 invested in it.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Price falls 60%</div>
          <p>$10,000 becomes $4,000</p>
          <div class="pf-r">Gain needed to get back<b class="mono bad-t">+150%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Down 30%, then up 20%</div>
          <p>$10,000 → $7,000 → $8,400</p>
          <div class="pf-r">Net result<b class="mono bad-t">−16%</b></div>
        </div>
      </div>
      <p>From $4,000 back to $10,000 is a gain of $6,000, which is 150% of $4,000. In the second case, the 20% rise applies to the smaller $7,000, so it adds only $1,400. A loss always needs a bigger percentage gain to undo.</p>`},
    {k:'The catch', t:'No profits to point at', b:`
      <p>A share is a slice of a business that earns profits and may pay dividends. Analysts can compare the price with those earnings. Bitcoin has no earnings, no dividend and no company behind it. Its price depends on what other people will pay for it.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Share in Cedar Tech</div><b>A claim on a business</b><p>Profits, assets and dividends give a way to judge a price.</p></div>
        <div class="col bad"><div class="col-h">A coin like Bitcoin</div><b class="bad-t">No claim on profits</b><p>Its value comes from demand, which can change fast.</p></div>
      </div>
      <p>Bitcoin's supply is fixed by its rules at 21 million coins. A fixed supply limits how many exist. It doesn't guarantee a rising price, because the price also depends on how many people want the coins.</p>`},
    {k:'In practice', t:'Rules, hours and thousands of coins', b:`
      <p>Crypto markets trade around the clock, every day, so prices can move while stock markets are closed. Thousands of other coins exist besides Bitcoin. Many are small and thinly traded, which makes them riskier still.</p>
      <p>No government backs a cryptocurrency. Its legal treatment varies by country: some regulate it, some restrict it, and rules keep changing. Gains and losses may also have tax consequences.</p>
      <p>Finance professionals disagree about where crypto fits in a portfolio. This lesson explains how it works and where the risks lie. It doesn't suggest buying or avoiding it.</p>`}
  ],
  qs:[
    {q:'A made-up coin falls from $60,000 to $30,000. What percentage gain does it need to get back to $60,000?',
     o:['50%','100%','25%','200%'], a:1,
     e:'It needs to rise from $30,000 to $60,000, a gain of $30,000. $30,000 ÷ $30,000 = 100%. The 50% is the size of the fall, which is measured against the higher starting price.'},
    {q:'Lina\'s $5,000 in a coin falls 40%. What percentage gain does she need to get back to $5,000?',
     o:['40%','60%','66.7%','25%'], a:2,
     e:'$5,000 × 0.6 = $3,000. Getting back $2,000 on a base of $3,000 is 2,000 ÷ 3,000 ≈ 66.7%.'},
    {q:'Karim holds $8,000 of a coin. It falls 30% in a week, then rises 20% the week after. What is it worth now?',
     o:['$8,800','$6,720','$8,000','$5,600'], a:1,
     e:'$8,000 × 0.7 = $5,600, then $5,600 × 1.2 = $6,720. The 20% rise applies to the smaller amount, so it doesn\'t cancel the 30% fall.'},
    {q:'What best describes a blockchain?',
     o:['A bank\'s private customer database','A shared record of transactions copied across many computers','A government-issued digital banknote','A type of company share'], a:1,
     e:'A blockchain is a ledger stored on many computers that must agree on each new entry, so no single party controls it.'},
    {q:'True or false: because Bitcoin\'s supply is capped at 21 million coins, its price is guaranteed to rise over time.',
     o:['True','False'], a:1,
     e:'A cap limits supply, but the price also depends on demand. If fewer people want the coins, the price can fall whatever the supply.'}
  ]
};

const ALTERNATIVES_STABLE = {
  title:'Stablecoins and custody', min:5,
  cards:[
    {k:'The idea', t:'A coin pegged to the dollar', b:`
      <p class="lead">Most crypto prices swing wildly, which makes them awkward as money. A stablecoin tries to fix that. It is a token meant to stay at a set value, usually one US dollar, and the company that issues it says it holds reserves to match.</p>
      <div class="term"><span class="term-k">Key term</span><b>Stablecoin:</b> a crypto token designed to hold a steady price, usually $1, with the issuer promising to swap it back for real dollars from a pool of reserves.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Are the reserves really there?', b:`
      <p>A stablecoin is only as safe as its reserves. Take a made-up issuer, Litani Pay, with 100 million tokens in circulation.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Reserves of $100 million</div>
          <p>$1 of backing per token</p>
          <div class="pf-r">Value per token<b class="mono good-t">$1.00</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Reserves of $96 million</div>
          <p>$0.96 of backing per token</p>
          <div class="pf-r">Value per token<b class="mono bad-t">$0.96</b></div>
        </div>
      </div>
      <p>$96 million ÷ 100 million tokens = $0.96. If every holder asked for their money at once, each would get back about 96 cents, so $5,000 of tokens would return $4,800. Reserves held in safe, easily sold assets, such as cash and short-term government bills, make that outcome less likely.</p>`},
    {k:'The catch', t:'When the peg breaks', b:`
      <p>The price of a stablecoin can slip below $1, and holders then rush to redeem, which can make things worse. This is called losing the peg.</p>
      <p>In May 2022, TerraUSD, a stablecoin that relied on a linked token's price rather than ordinary reserves, lost its peg and collapsed. Billions of dollars in value disappeared.</p>
      <p>Questions worth asking about any stablecoin: what are the reserves made of? Who checks them? Can ordinary holders swap tokens for dollars directly? A stablecoin is a promise from a company. It isn't the same as a bank deposit, and protections for bank deposits usually don't carry over.</p>`},
    {k:'In practice', t:'Who holds the keys?', b:`
      <p>Holding crypto means holding a private key, a secret code that proves ownership. There are two ways to store it.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Self-custody</div><b>You hold the key</b><p>Nobody can freeze your coins, but if the key is lost with no backup, the coins are usually gone for good.</p></div>
        <div class="col bad"><div class="col-h">Exchange custody</div><b>The platform holds it</b><p>Easier to recover access, but you depend on the platform staying solvent and honest.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Custody:</b> who actually controls the asset and the key to it. In November 2022 the exchange FTX filed for bankruptcy, and many customers could not withdraw their coins.</div>
      <p>If an exchange fails and customers recover 70 cents per dollar, a $10,000 balance returns $7,000.</p>`}
  ],
  qs:[
    {q:'A stablecoin issuer has 50 million tokens in circulation and $48 million in reserves. What are the reserves per token?',
     o:['$1.04','$0.98','$0.96','$0.04'], a:2,
     e:'$48 million ÷ 50 million = $0.96. $1.04 comes from dividing the other way round.'},
    {q:'Using the same issuer, Hana holds 2,500 tokens. If everyone redeems at once and reserves are shared equally, how much does she get back?',
     o:['$2,500','$2,400','$2,600','$100'], a:1,
     e:'2,500 × $0.96 = $2,400. She would lose $100 of the $2,500.'},
    {q:'Which stablecoin design is most likely to hold its peg?',
     o:['One that relies on a linked token\'s price staying high','One backed by cash and short-term government bills held by the issuer','One with a famous founder','One that promises a yearly return'], a:1,
     e:'Reserves of safe, easily sold assets give the issuer a way to pay holders back. Designs that rely on another token\'s price can unravel together, as TerraUSD did in 2022.'},
    {q:'True or false: with self-custody, losing your private key and any backup usually means losing access to your coins for good.',
     o:['True','False'], a:0,
     e:'No company can reset a private key. That is the trade-off of holding it yourself.'},
    {q:'Zeina keeps $20,000 of coins on an exchange. It fails, and customers recover 65 cents on each dollar. How much does she get back?',
     o:['$7,000','$13,000','$6,500','$15,000'], a:1,
     e:'$20,000 × 0.65 = $13,000, so she loses $7,000.'}
  ]
};

const ALTERNATIVES_GOLD = {
  title:'Gold and commodities', min:5,
  cards:[
    {k:'The idea', t:'Raw materials as investments', b:`
      <p class="lead">Some things are traded in standard, interchangeable form: gold, oil, copper, wheat. Investors can buy exposure to their prices. Gold is the best known, and people have treated it as a store of value for thousands of years.</p>
      <div class="term"><span class="term-k">Key term</span><b>Commodity:</b> a raw material that is traded in a standard form, so one unit is much like another. Prices follow supply and demand.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Gold pays nothing while you wait', b:`
      <p>A share may pay dividends and a bond pays interest. Gold pays neither. Its return comes only from the price changing. Say an ounce is $2,000 (a made-up price), and a savings account pays 4%.</p>
      <div class="kv kv3"><div><b>$80</b><span>Cash interest on $2,000</span></div><div><b>$10</b><span>Storage or fund fee at 0.5%</span></div><div><b class="bad-t">+4.5%</b><span>Rise needed to match cash</span></div></div>
      <p>4% of $2,000 is $80, and 0.5% is $10, so gold needs to reach $2,090 to match the account, which is 90 ÷ 2,000 = 4.5%. A rise from $1,800 to $2,070 would be a gain of <b class="good-t">+15%</b>, since 270 ÷ 1,800 = 0.15.</p>`},
    {k:'The catch', t:'Mining shares swing harder', b:`
      <p>Another way in is to buy shares in a company that digs gold up. Take a made-up miner, Sannine Gold, whose cost is $1,500 for each ounce produced.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Gold at $2,000</div>
          <p>Profit per ounce: $2,000 − $1,500</p>
          <div class="pf-r">Profit<b class="mono">$500</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Gold at $1,800 (−10%)</div>
          <p>Profit per ounce: $1,800 − $1,500</p>
          <div class="pf-r">Profit<b class="mono bad-t">$300</b></div>
        </div>
      </div>
      <p>A 10% fall in gold cuts the miner's profit by 40%, since the cost stays the same. The company's shares carry mining, management and cost risks as well as the gold price.</p>`},
    {k:'In practice', t:'Ways to hold it, and what drives it', b:`
      <p>Exposure comes in several forms. There is physical gold, which has to be stored and insured. There are funds backed by gold, which charge a yearly fee. A 0.4% fee on $10,000 costs $40 a year. There are also futures contracts and mining shares.</p>
      <p>Commodity prices respond to supply and demand. A drought can cut the wheat harvest, so less is available and prices tend to rise. A new oil field can do the opposite.</p>
      <p>Gold is often described as a safe haven in a crisis, but that is a tendency, not a rule. Its price has gone through long stretches of falling or going nowhere. It isn't a promise of protection.</p>`}
  ],
  qs:[
    {q:'Gold rises from $2,000 to $2,300 an ounce. What is the percentage gain?',
     o:['10%','13%','15%','30%'], a:2,
     e:'The gain is $300, and $300 ÷ $2,000 = 15%.'},
    {q:'Rami buys an ounce of gold at $1,600 and sells it a year later at $1,640. A savings account paying 4% would have earned $64 on $1,600. How far did gold fall short of the account, ignoring other costs?',
     o:['$24','$40','$64','It beat the account'], a:0,
     e:'Gold gained $1,640 − $1,600 = $40. The account earned 4% × $1,600 = $64. $64 − $40 = $24.'},
    {q:'A miner\'s cost is $1,200 an ounce. Gold falls from $1,800 to $1,500. By what percentage does its profit per ounce fall?',
     o:['16.7%','25%','50%','20%'], a:2,
     e:'Profit was $1,800 − $1,200 = $600 and is now $1,500 − $1,200 = $300. That is a 50% fall, three times the 16.7% fall in the gold price.'},
    {q:'A gold fund charges 0.5% a year. What does it cost on $8,000?',
     o:['$4','$400','$40','$16'], a:2,
     e:'0.5% × $8,000 = $40.'},
    {q:'Why can a drought push wheat prices up?',
     o:['It cuts supply while demand stays about the same','It raises demand for bread','Farmers suddenly grow more wheat','It lowers costs for farmers'], a:0,
     e:'Prices follow supply and demand. A smaller harvest means less wheat to go round, so buyers tend to pay more.'}
  ]
};

const ALTERNATIVES_PROPERTY = {
  title:'Real estate and REITs', min:5,
  cards:[
    {k:'The idea', t:'Property earns rent', b:`
      <p class="lead">Property can pay in two ways: rent while you own it, and a change in value when you sell. Most people think of owning a flat or a shop outright. There is another route, a company that owns property and sells shares in it.</p>
      <div class="term"><span class="term-k">Key term</span><b>REIT:</b> a real estate investment trust, a company that owns income-producing property and whose shares are traded like stocks. To keep a special tax status, a REIT in the US and many other countries must pay out most of its taxable income to shareholders as dividends.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Gross yield and net yield', b:`
      <p>A made-up flat in Beirut costs $200,000 and rents for $1,000 a month. The yield compares a year's rent with the price.</p>
      <div class="kv kv3"><div><b>$12,000</b><span>Rent for a year</span></div><div><b>6%</b><span>Gross yield</span></div><div><b class="bad-t">4.5%</b><span>Net yield</span></div></div>
      <p>$12,000 ÷ $200,000 = 6%. That is the gross yield, before costs. Now take off $3,000 for repairs, property taxes and empty months. $9,000 ÷ $200,000 = 4.5%, the net yield. The net figure is the one that reaches the owner.</p>`},
    {k:'The catch', t:'Big, slow and costly to exit', b:`
      <p>A flat can't be sold in seconds. A sale can take months, and costs such as agent and legal fees might reach, say, 3% of the price. On $200,000 that is $6,000.</p>
      <div class="split">
        <div class="col good"><div class="col-h">REIT shares</div><b>Easy to trade</b><p>Bought and sold on an exchange in a few seconds, in small amounts.</p></div>
        <div class="col bad"><div class="col-h">A flat</div><b class="bad-t">Hard to sell</b><p>One big lump, one location, and slow to turn into cash.</p></div>
      </div>
      <p>REIT shares are easy to trade, but their prices move with the stock market and often with interest rates too. A REIT paying $1.20 a share on a $20 price has a dividend yield of 1.20 ÷ 20 = 6%, and the price itself can still fall.</p>`},
    {k:'In practice', t:'A mortgage is leverage', b:`
      <p>Most buyers borrow to buy property. That works like margin from the Short selling and margin unit. Say the buyer puts down 25% of $200,000 and takes a loan for the rest.</p>
      <div class="kv"><div><b>$50,000</b><span>Own money in</span></div><div><b>$150,000</b><span>Mortgage</span></div><div><b>$180,000</b><span>Value after a 10% fall</span></div><div><b class="bad-t">−40%</b><span>Loss on own money</span></div></div>
      <p>At $180,000, repaying the $150,000 loan leaves $30,000. The buyer has lost $20,000 of $50,000, which is 40%, from a 10% fall in price. Loans make property gains bigger, and losses too. Mortgage payments are due even when the flat is empty.</p>`}
  ],
  qs:[
    {q:'A flat costs $160,000 and rents for $800 a month. What is the gross yield?',
     o:['5%','6%','12%','0.5%'], a:1,
     e:'Rent for a year is $800 × 12 = $9,600. $9,600 ÷ $160,000 = 6%.'},
    {q:'The same flat has $2,400 of yearly costs. What is the net yield?',
     o:['4.5%','1.5%','6%','7.5%'], a:0,
     e:'Net rent is $9,600 − $2,400 = $7,200. $7,200 ÷ $160,000 = 4.5%.'},
    {q:'Dana owns 500 REIT shares that pay $0.60 a share over a year. How much dividend income is that?',
     o:['$30','$3,000','$833','$300'], a:3,
     e:'500 × $0.60 = $300.'},
    {q:'Nour buys a $300,000 flat with $60,000 of her own money and a $240,000 mortgage. The flat\'s value falls 10%. What is her loss on her own money?',
     o:['10%','30%','50%','5%'], a:2,
     e:'The flat is worth $270,000. After the $240,000 loan, $30,000 is left, so she has lost $30,000 of $60,000, which is 50%.'},
    {q:'Why is a REIT usually easier to sell than a flat?',
     o:['Its price never falls','Its shares trade on an exchange, so a sale takes seconds','It is guaranteed by the government','It has no costs'], a:1,
     e:'REIT shares trade like any stock, so the owner can sell them quickly in any amount. A REIT\'s price can still fall, and trading can still carry costs.'}
  ]
};

const ALTERNATIVES_SCAMS = {
  title:'Scams and red flags', min:5,
  cards:[
    {k:'The idea', t:'Hype attracts fraud', b:`
      <p class="lead">Where money moves fast and the rules are thin, scammers follow. Crypto has more than its share, and the old ones still work too. The best protection is knowing how they are built.</p>
      <div class="term"><span class="term-k">Key term</span><b>Ponzi scheme:</b> a fraud that pays early investors with money from newer ones rather than from any real profit. It lasts only while new money keeps coming in. One of the best-known, run by Bernard Madoff, collapsed in 2008.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Returns that cannot exist', b:`
      <p>Scams love to promise big, steady returns. Check what the promise really says. A scheme advertises 2% a day.</p>
      <div class="kv kv3"><div><b>$1,811</b><span>$1,000 after 30 days</span></div><div><b class="bad-t">$1.38m</b><span>$1,000 after a year</span></div><div><b>10 months</b><span>Cash lasts</span></div></div>
      <p>$1,000 × 1.02<sup>30</sup> ≈ $1,811, and 1.02<sup>365</sup> ≈ 1,377, so $1,000 would grow to about $1.38 million. No real business earns that.</p>
      <p>Now the other side. A scheme holds $100,000 and promises 10% a month, which is $10,000 a month. With no new money and no real profit, the cash lasts $100,000 ÷ $10,000 = 10 months.</p>`},
    {k:'The catch', t:'Pump and dump', b:`
      <p>Another trick targets small, thinly traded coins. A group buys a coin cheaply, hypes it online, and sells to the crowd that follows once the price is high.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">The pump</div>
          <p>Price goes from $0.10 to $0.50</p>
          <div class="pf-r">Rise<b class="mono good-t">+400%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">The dump</div>
          <p>Insiders sell, price drops to $0.08</p>
          <div class="pf-r">Fall<b class="mono bad-t">−84%</b></div>
        </div>
      </div>
      <p>Someone who put $1,000 in at $0.50 holds 2,000 coins. At $0.08 those are worth $160. A related trick, the rug pull, is when a project's creators take the money raised and vanish.</p>`},
    {k:'In practice', t:'Red flags, and what is final', b:`
      <p><b>Warning signs:</b> guaranteed or very high returns; pressure to act today; a stranger who first contacted you by message, often after friendly chat; rewards for recruiting friends; secrecy about how the money is made; being unable to withdraw; no registration with a financial regulator.</p>
      <p><b>Keys and codes:</b> real support staff don't ask for a private key or a recovery phrase. Anyone who has one controls the coins.</p>
      <p><b>Finality:</b> a crypto transfer is usually irreversible. There is no bank to call for a refund, so a mistake or a scam payment generally stays lost.</p>
      <p>A useful test is to ask who pays the return, and where the money comes from. If nobody can answer clearly, the risk is high.</p>`}
  ],
  qs:[
    {q:'A scheme promises 2% a day, compounded. About how much would $1,000 be worth after 30 days if it were true?',
     o:['$1,600','$1,811','$2,000','$1,060'], a:1,
     e:'$1,000 × 1.02 repeated 30 times ≈ $1,811. Simple 2% of $1,000 for 30 days would be $600, giving $1,600, which ignores the compounding.'},
    {q:'A scheme holds $120,000 and has promised investors $6,000 a month. With no new money and no real profit, how long can it keep paying?',
     o:['12 months','5 months','24 months','20 months'], a:3,
     e:'$120,000 ÷ $6,000 = 20 months. Then the cash is gone.'},
    {q:'A small coin is pumped from $0.10 to $0.50, then drops back to $0.10. What is the fall from the top?',
     o:['−20%','−80%','−400%','−50%'], a:1,
     e:'The fall is $0.40, and $0.40 ÷ $0.50 = 80%. The rise from $0.10 to $0.50 is +400%, but a fall is measured against the higher price.'},
    {q:'Which of these is a classic warning sign of a scam?',
     o:['A published audit of the reserves','A guaranteed return and pressure to join today','A registered firm with a physical office','Clear fees that are shown upfront'], a:1,
     e:'Real investments can\'t guarantee returns, and pressure to act fast stops people from checking.'},
    {q:'True or false: if you send crypto to a scammer, your bank can usually reverse the transfer.',
     o:['True','False'], a:1,
     e:'Crypto transfers are usually final. There is no central party that can cancel them, so lost funds generally stay lost.'}
  ]
};

const ALTERNATIVES_CHECK = {
  title:'Unit check', min:4, badge:{name:'Beyond Stocks', icon:'baskets'}, cards:[],
  qs:[
    {q:'A coin falls 75% from its high. What percentage gain does it need to get back to that high?',
     o:['75%','100%','300%','175%'], a:2,
     e:'$100 becomes $25. Getting from $25 back to $100 is a gain of $75 on $25, which is 300%. The 75% is only the size of the fall.'},
    {q:'A stablecoin has 80 million tokens and $76 million in reserves. Layla holds 12,000 tokens. If all holders redeem and reserves are shared equally, how much does she get?',
     o:['$12,000','$11,400','$12,632','$600'], a:1,
     e:'$76 million ÷ 80 million = $0.95 per token. 12,000 × $0.95 = $11,400.'},
    {q:'A miner\'s cost is $1,400 an ounce. Gold rises from $2,000 to $2,200. By what percentage does its profit per ounce rise?',
     o:['10%','33.3%','14.3%','25%'], a:1,
     e:'Profit goes from $600 to $800, a gain of $200 on $600, which is 33.3%. That is more than three times the 10% rise in gold.'},
    {q:'Gold costs $2,000. Held through a fund charging 0.5% a year, how high must it rise over a year just to match a 4% savings account, ignoring other costs?',
     o:['$2,080','$2,090','$2,100','$2,010'], a:1,
     e:'The account earns 4% and the fund costs 0.5%, so gold must rise 4.5%: $2,000 × 1.045 = $2,090. The $2,080 forgets the fee.'},
    {q:'Tarek buys a $240,000 flat with 20% of his own money and a mortgage for the rest. The flat\'s value falls 15%. What is his loss on his own money?',
     o:['15%','45%','60%','75%'], a:3,
     e:'His own money is $48,000 and the loan $192,000. The flat is now worth $204,000, which leaves $12,000 after the loan: a loss of $36,000, which is 75% of $48,000.'},
    {q:'A flat costs $250,000 and rents for $1,500 a month. Yearly costs are $4,500. What is the net yield?',
     o:['7.2%','5.4%','1.8%','6.0%'], a:1,
     e:'Rent for a year is $18,000. Less $4,500 of costs, $13,500 is left. $13,500 ÷ $250,000 = 5.4%. The 7.2% is the gross yield.'},
    {q:'A scheme promises 10% a month, compounded. If it were true, about how much would $1,000 be worth after 12 months?',
     o:['$2,200','$3,138','$1,120','$12,000'], a:1,
     e:'$1,000 × 1.1 repeated 12 times ≈ $3,138. The $2,200 adds 10% of $1,000 twelve times, which ignores compounding. Either way, no real investment delivers this.'},
    {q:'A stranger messages Hana, starts a friendly chat, and then introduces a "stablecoin platform" that guarantees 1% a day. Which response fits what this unit covered?',
     o:['Treat the guarantee and the stranger\'s approach as red flags, and check regulator registration and who pays the return','Send a small amount, since a stablecoin cannot lose value','Share her recovery phrase so they can set up the account','Accept, because stablecoins are insured like bank deposits'], a:0,
     e:'Guaranteed returns and a stranger\'s approach are classic red flags. Stablecoins can lose their peg, protections for bank deposits usually don\'t apply, and a recovery phrase should never be shared.'}
  ]
};

const UNIT_ALTERNATIVES = {id:'alternatives', title:'Crypto and other assets', level:'Intermediate', lessons:[ALTERNATIVES_BITCOIN, ALTERNATIVES_STABLE, ALTERNATIVES_GOLD, ALTERNATIVES_PROPERTY, ALTERNATIVES_SCAMS, ALTERNATIVES_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_ALTERNATIVES = [
  {n:1, q:'A coin falls from $50,000 to $40,000, a fall of 20%. What gain does it need to get back to $50,000?',
   o:['20%','25%','10%','80%'], a:1,
   e:'It must rise $10,000 from $40,000, and $10,000 ÷ $40,000 = 25%. A fall is measured against the higher price, a rise against the lower one.'},
  {n:2, q:'A stablecoin issuer has 50 million tokens in circulation and $45 million in reserves. What are the reserves per token?',
   o:['$1.11','$0.95','$0.90','$0.10'], a:2,
   e:'$45 million ÷ 50 million = $0.90. Holders redeeming at once would get about 90 cents on the dollar.'},
  {n:3, q:'A miner\'s cost is $1,000 an ounce. Gold falls from $1,500 to $1,200. By what percentage does its profit per ounce fall?',
   o:['20%','40%','60%','30%'], a:2,
   e:'Profit goes from $500 to $200, a fall of $300, which is 60%. Gold itself fell only 20%.'},
  {n:4, q:'A flat costs $168,000 and rents for $700 a month. Ignoring costs, what is the yield?',
   o:['4.2%','5%','8.4%','0.4%'], a:1,
   e:'Rent for a year is $700 × 12 = $8,400. $8,400 ÷ $168,000 = 5%.'},
  {n:5, q:'A small coin is pumped from $0.04 to $0.20, then collapses to $0.01. What is the fall from the top?',
   o:['−5%','−19%','−80%','−95%'], a:3,
   e:'The fall is $0.19, and $0.19 ÷ $0.20 = 95%.'}
];

/* MATHS CHECK (all run in Python)
   Lesson 1 · Bitcoin and blockchains
   - $10,000 −60% = $4,000; back to 10,000 = +6,000 ÷ 4,000 = +150%. $10,000 × 0.7 = 7,000; × 1.2 = 8,400; net −16%. Rise adds 1,400.
   - Q1: 60,000 → 30,000; 30,000 ÷ 30,000 = +100%. Q2: 5,000 × 0.6 = 3,000; 2,000 ÷ 3,000 = 66.7%. Q3: 8,000 × 0.7 = 5,600; × 1.2 = 6,720.
   Lesson 2 · Stablecoins and custody
   - 96 ÷ 100 = $0.96; 5,000 × 0.96 = 4,800. Exchange recovery 10,000 × 0.70 = 7,000.
   - Q1: 48 ÷ 50 = 0.96 (50 ÷ 48 = 1.04). Q2: 2,500 × 0.96 = 2,400. Q5: 20,000 × 0.65 = 13,000.
   Lesson 3 · Gold and commodities
   - 4% × 2,000 = 80; 0.5% × 2,000 = 10; needs 4.5% = 90, so $2,090. 1,800 → 2,070 = +270 ÷ 1,800 = 15%.
   - Miner: 2,000 − 1,500 = 500; 1,800 − 1,500 = 300; 300 ÷ 500 − 1 = −40%. Fund fee 0.4% × 10,000 = 40.
   - Q1: 300 ÷ 2,000 = 15%. Q2: gain 40; 4% × 1,600 = 64; 64 − 40 = 24. Q3: 1,800 − 1,200 = 600; 1,500 − 1,200 = 300; −50% (gold −16.7%). Q4: 0.5% × 8,000 = 40.
   Lesson 4 · Real estate and REITs
   - 1,000 × 12 = 12,000; ÷ 200,000 = 6%; (12,000 − 3,000) ÷ 200,000 = 4.5%. 3% × 200,000 = 6,000. REIT 1.20 ÷ 20 = 6%.
   - Mortgage: 25% × 200,000 = 50,000 own; 150,000 loan; −10% → 180,000; − 150,000 = 30,000; loss 20,000 ÷ 50,000 = 40%.
   - Q1: 800 × 12 = 9,600 ÷ 160,000 = 6%. Q2: (9,600 − 2,400) = 7,200 ÷ 160,000 = 4.5%. Q3: 500 × 0.60 = 300. Q4: 300,000 × 0.9 = 270,000 − 240,000 = 30,000; loss 30,000 ÷ 60,000 = 50%.
   Lesson 5 · Scams and red flags
   - 1.02^30 = 1.8114 → $1,811. 1.02^365 = 1,377.4 → $1,377,408 ≈ $1.38 million. 100,000 ÷ (10% × 100,000 = 10,000) = 10 months.
   - Pump: 0.10 → 0.50 = +400%; 0.50 → 0.08 = −84%; 1,000 ÷ 0.50 = 2,000 coins × 0.08 = 160.
   - Q1: 1.02^30 = 1,811.36 (simple 1,000 + 600 = 1,600). Q2: 120,000 ÷ 6,000 = 20. Q3: 0.40 ÷ 0.50 = 80% (rise +400%).
   Unit check
   - C1: 25 → 100 = 75 ÷ 25 = 300% (75% = size of the fall; 175% = 100 + 75).
   - C2: 76 ÷ 80 = 0.95; 12,000 × 0.95 = 11,400 (12,000 ÷ 0.95 = 12,631.6 slip).
   - C3: 2,000 − 1,400 = 600; 2,200 − 1,400 = 800; 200 ÷ 600 = 33.3% (200 ÷ 1,400 = 14.3%).
   - C4: 1.045 × 2,000 = 2,090 (1.04 × 2,000 = 2,080).
   - C5: 240,000 × 0.2 = 48,000 own; loan 192,000; × 0.85 = 204,000; 204,000 − 192,000 = 12,000; loss 36,000 ÷ 48,000 = 75%.
   - C6: 1,500 × 12 = 18,000; − 4,500 = 13,500; ÷ 250,000 = 5.4% (gross 18,000 ÷ 250,000 = 7.2%; costs 4,500 ÷ 250,000 = 1.8%).
   - C7: 1.1^12 = 3.1384 → $3,138. Simple: 1,000 + 12 × 100 = 2,200. Annual 10% of 1,000 = $120 gives $1,120.
   Placement
   - P1: 50,000 × 0.8 = 40,000; 10,000 ÷ 40,000 = 25%. P2: 45 ÷ 50 = 0.90 (50 ÷ 45 = 1.11).
   - P3: 1,500 − 1,000 = 500; 1,200 − 1,000 = 200; fall 300 ÷ 500 = 60% (gold −20%).
   - P4: 700 × 12 = 8,400 ÷ 168,000 = 5%. P5: 0.19 ÷ 0.20 = 95%.
*/
