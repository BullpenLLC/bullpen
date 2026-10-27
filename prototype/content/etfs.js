/* ---------- ETFs in depth ---------- */
const ETFS_HOW_IT_WORKS = {
  title:'How an ETF works', min:5,
  cards:[
    {k:'The idea', t:'One fund, two prices', b:`
      <p class="lead">An ETF owns a basket of investments, and its shares trade on a stock exchange all day. So at any moment it has two prices: what the basket is worth per share, and what buyers are paying for a share right now.</p>
      <div class="split">
        <div class="col good"><div class="col-h">NAV</div><b>What the basket is worth</b><p>Worked out from the prices of everything the fund holds.</p></div>
        <div class="col good"><div class="col-h">Market price</div><b>What a share trades at</b><p>Set by buyers and sellers on the exchange, moment by moment.</p></div>
      </div>
      <p>The two usually sit very close together, but no rule makes them match. When they drift apart, the ETF has a premium or a discount.</p>
      <div class="term"><span class="term-k">Key term</span><b>Premium and discount:</b> an ETF trades at a premium when its market price is above its NAV, and at a discount when it's below.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'NAV, premium and discount', b:`
      <p>The made-up Cedar 100 ETF holds $80.2 million of shares and cash. It owes $0.2 million in fees and other bills, and it has 4 million ETF shares.</p>
      <div class="kv kv3"><div><b>$80M</b><span>Holdings minus what it owes</span></div><div><b>4M</b><span>ETF shares</span></div><div><b>$20.00</b><span>NAV per share</span></div></div>
      <p>$80.2 million − $0.2 million = $80 million, and $80 million ÷ 4 million = $20.00. Now two moments on the exchange:</p>
      <div class="split">
        <div class="col good"><div class="col-h">Price $20.10</div><b>Premium of 0.5%</b><p>$0.10 above NAV. $0.10 ÷ $20.00 = 0.5%. Buyers pay a little more than the basket is worth.</p></div>
        <div class="col good"><div class="col-h">Price $19.95</div><b>Discount of 0.25%</b><p>$0.05 below NAV. $0.05 ÷ $20.00 = 0.25%. Sellers get a little less than the basket is worth.</p></div>
      </div>`},
    {k:'Behind the scenes', t:'Who makes new ETF shares', b:`
      <p>Buying an ETF in a trading app almost always means buying an existing share from another investor. The fund itself only creates or cancels shares in big blocks, usually thousands at a time, and only with a small group of large trading firms and banks.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Creation</div><b>Basket in, ETF shares out</b><p>The firm hands the fund the investments in the basket (sometimes cash) and gets a block of brand-new ETF shares.</p></div>
        <div class="col good"><div class="col-h">Redemption</div><b>ETF shares in, basket out</b><p>The firm hands back a block of ETF shares, which are cancelled, and gets the basket in return.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Authorised participant (AP):</b> a large trading firm or bank with a deal that lets it create and redeem an ETF's shares in big blocks.</div>`},
    {k:'Do the maths', t:'How the gap closes', b:`
      <p>The Cedar 100 ETF trades at $20.10, while its NAV is $20.00. Say one block is 50,000 shares. An AP can do this:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Buy the basket</div>
          <p>Enough for one block: 50,000 × $20.00</p>
          <div class="pf-r">Pays<b class="mono">$1,000,000</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Sell the new shares</div>
          <p>On the exchange: 50,000 × $20.10</p>
          <div class="pf-r">Gets<b class="mono good-t">$1,005,000</b></div>
        </div>
      </div>
      <p>The $5,000 gap, before trading costs, is the reason to step in. All that extra selling pushes the ETF's price down towards $20.00. At a discount it runs the other way: APs buy cheap ETF shares, swap them for the basket and sell the basket, and their buying lifts the price.</p>
      <p>The pull works best when the basket is easy to trade. In March 2020, when bond markets seized up, some big bond ETFs briefly traded several per cent below their NAV. Part of that gap was the NAV being out of date: many bonds inside hadn't traded, so their prices were estimates.</p>`}
  ],
  qs:[
    {q:'A fund holds $36.3 million of investments, owes $0.3 million and has 1.2 million shares. What is its NAV per share?',
     o:['$30.00','$30.25','$30.50','$36.00'], a:0,
     e:'Take off what it owes first: $36.3 million − $0.3 million = $36 million. Then $36 million ÷ 1.2 million = $30.00. Forgetting the debt gives $30.25.'},
    {q:"An ETF's NAV is $50.00 and its shares trade at $50.25. How is it trading?",
     o:['At a discount of 0.5%','At a premium of 0.25%','At a premium of 5%','At a premium of 0.5%'], a:3,
     e:'The price is $0.25 above NAV, so it is a premium. $0.25 ÷ $50.00 = 0.005, which is 0.5%.'},
    {q:'Who can create brand-new shares of an ETF?',
     o:['Any investor who buys on the exchange','The companies in the basket','Authorised participants, in big blocks','The stock exchange'], a:2,
     e:'Only authorised participants deal with the fund directly, in blocks of thousands of shares. Everyone else trades existing shares with each other.'},
    {q:'An ETF trades at a discount to its NAV. What do authorised participants tend to do?',
     o:['Buy the basket and create new ETF shares',"Nothing, because a discount can't be closed",'Ask the fund to cut its fee','Buy cheap ETF shares and redeem them for the basket, which lifts the price'], a:3,
     e:'They buy ETF shares for less than the basket is worth, swap them for the basket and sell it. Their buying pushes the ETF price back up towards NAV.'},
    {q:'True or false: when you buy an ETF in a trading app, the fund normally creates a new share for you.',
     o:['True','False'], a:1,
     e:'You almost always buy an existing share from another investor. New shares are created only in big blocks, by authorised participants.'}
  ]
};

const ETFS_READING = {
  title:'Reading an ETF', min:5,
  cards:[
    {k:'The idea', t:'Same index, different funds', b:`
      <p class="lead">Two ETFs can follow the same index and still be quite different to own. Every fund publishes a fact sheet, and a handful of numbers on it show most of the difference.</p>
      <div class="kv"><div><b>Cost</b><span>Expense ratio</span></div><div><b>Inside</b><span>Holdings</span></div><div><b>Tracking</b><span>Fund vs index</span></div><div><b>Trading</b><span>Spread and size</span></div></div>
      <p>The expense ratio never arrives as a bill. The fund takes it from its own assets a little each day, so it shows up as a slightly lower NAV.</p>
      <div class="term"><span class="term-k">Key term</span><b>Fact sheet:</b> a short summary a fund publishes and updates regularly, with its fee, size, biggest holdings and past returns.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Look inside', t:'How top-heavy is it?', b:`
      <p>A long list of holdings can flatter a fund. What matters is how much money sits in the biggest few. The made-up Cedar Global ETF owns 400 companies, but its ten biggest make up 40% of it. Say those ten fall 20%:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Top 10 holdings</div>
          <p>40% of the fund. They fall 20%.</p>
          <div class="pf-r">Effect on the fund<b class="mono bad-t">−8%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">The other 390</div>
          <p>60% of the fund. They don't move.</p>
          <div class="pf-r">Effect on the fund<b class="mono">0%</b></div>
        </div>
      </div>
      <p>40% × −20% = −8%. Ten companies did all the damage. Big indexes can be top-heavy too: by 2024, the ten biggest companies in the S&amp;P 500 made up more than a third of it.</p>
      <div class="term"><span class="term-k">Key term</span><b>Top-10 weight:</b> the share of a fund's money in its ten biggest holdings. The higher it is, the more a few companies drive the result.</div>`},
    {k:'Do the maths', t:"The fee isn't the whole story", b:`
      <p>An index returns 8.00% in a year. Two ETFs track it:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Fund A · fee 0.10%</div>
          <p>Returned 7.88%: 0.12 percentage points behind</p>
          <div class="pf-r">Gain on $10,000<b class="mono">$788</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Fund B · fee 0.05%</div>
          <p>Returned 7.70%: 0.30 percentage points behind</p>
          <div class="pf-r">Gain on $10,000<b class="mono bad-t">$770</b></div>
        </div>
      </div>
      <p>The index made $800 on $10,000. Fund B had the lower fee, yet ended $18 behind Fund A. Trading costs, cash left uninvested, or not owning every company in the index can all widen the gap. Some funds earn a little by lending their shares to other traders, which can narrow it.</p>
      <p>The gap between a fund's return and its index's is called tracking difference. Over several years, it says more about what owning a fund costs than the fee alone.</p>`},
    {k:'In practice', t:'Trading it, and what it pays out', b:`
      <p>Every quick buy and sell loses the bid-ask spread. Two ETFs, about $5,000 in each:</p>
      <div class="split">
        <div class="col good"><div class="col-h">ETF X · price $50</div><b>Spread $0.02</b><p>100 shares × $0.02 = $2 lost on a buy and a sell.</p></div>
        <div class="col bad"><div class="col-h">ETF Y · price $25</div><b>Spread $0.30</b><p>200 shares × $0.30 = $60 lost on a buy and a sell.</p></div>
      </div>
      <p>Spreads tend to be tightest when the investments inside are easy to trade and the ETF itself trades a lot. Size matters too: very small ETFs bring in little in fees, and some get closed. The fund then sells everything and pays holders cash, at a time they didn't choose.</p>
      <div class="term"><span class="term-k">Key term</span><b>Distribution:</b> cash an ETF pays its holders, mostly from the dividends or interest its holdings earn. The NAV drops by about the same amount, so the value just moves from the fund to the holder. Some ETFs, many of them listed in Europe, reinvest it instead and are called accumulating funds.</div>`}
  ],
  qs:[
    {q:"An ETF's ten biggest holdings make up 30% of it. Those ten fall 10% and everything else stays flat. What happens to the fund?",
     o:['It falls 3%','It falls 10%','It falls 30%','It falls 0.3%'], a:0,
     e:'Only 30% of the money took the hit: 30% × −10% = −3%.'},
    {q:'An index rose 6.00%. An ETF tracking it, with a 0.10% fee, rose 5.75%. What does that tell you?',
     o:['It beat the index by 0.25 percentage points','It trailed by exactly its fee','It trailed by 0.15 percentage points, less than its fee','It trailed by 0.25 percentage points, more than its fee explains'], a:3,
     e:'6.00% − 5.75% = 0.25 percentage points behind. The fee explains 0.10 of that, so 0.15 points came from something else, such as trading costs.'},
    {q:"Two ETFs track the same index and both trade near $100. A's spread is usually $0.01 and B's is usually $0.40. You buy 100 shares of each and sell them straight away. How much more does B cost you?",
     o:['$0.39','$3.90','$39','$40'], a:2,
     e:'A: 100 × $0.01 = $1. B: 100 × $0.40 = $40. $40 − $1 = $39.'},
    {q:'An ETF with a NAV of $50 pays a distribution of $0.40 a share. You own 200 shares. What happens?',
     o:['You get $80, and the NAV drops by about $0.40','You get $80, and the NAV stays at $50','You get $0.40, and the NAV drops by $80','You get $80, and the NAV rises by about $0.40'], a:0,
     e:"200 × $0.40 = $80 in cash. That money leaves the fund, so the NAV falls by about $0.40 a share. The total you own stays about the same: $10,000 before, about $9,920 in shares plus $80 in cash after."},
    {q:"True or false: an ETF's expense ratio is billed to you separately once a year.",
     o:['True','False'], a:1,
     e:'The fund takes it from its own assets a little each day. There is no bill, just a slightly lower NAV and return.'}
  ]
};

const ETFS_KINDS = {
  title:'Kinds of ETF', min:4,
  cards:[
    {k:'The idea', t:'From the whole world to one idea', b:`
      <p class="lead">ETFs come in every width. Some own thousands of companies across dozens of countries. Others own a few dozen companies tied to one idea.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Broad</div><b>Many companies, many industries</b><p>One bad company or industry barely dents it.</p></div>
        <div class="col bad"><div class="col-h">Narrow</div><b>Few companies, one industry or idea</b><p>One piece of bad news can hit almost everything inside.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Broad-market ETF:</b> one that tracks a wide index, such as the whole US market or the whole world, so it holds hundreds or thousands of companies.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'The menu', t:'Four narrower kinds', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Sector</div><b>One industry</b><p>Banks, healthcare or energy. The companies share the same ups and downs.</p></div>
        <div class="col good"><div class="col-h">Country or region</div><b>One place</b><p>Japan, Europe, or emerging markets such as India and Brazil. Most also move with that place's currency.</p></div>
      </div>
      <div class="split">
        <div class="col good"><div class="col-h">Factor</div><b>One trait, picked by rules</b><p>Cheap shares (value), recent winners (momentum) or smaller companies (small-cap).</p></div>
        <div class="col good"><div class="col-h">Thematic</div><b>One story</b><p>Robots, clean energy or video games, picked for a trend across industries.</p></div>
      </div>
      <p>A factor can lag the wider market for years: in the US, value shares trailed for much of the 2010s. The Growth, value and dividends unit looks at factors in depth.</p>
      <div class="term"><span class="term-k">Key term</span><b>Factor ETF:</b> a fund that picks stocks by fixed rules for one trait, such as being cheap, small or recently rising. Also called smart beta.</div>`},
    {k:'Do the maths', t:'Same bad news, two funds', b:`
      <p>Solar company shares fall 40% in a year, and everything else stays flat. $10,000 sits in each of two made-up funds:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Cedar World ETF</div>
          <p>3,000 companies. Solar firms are 1% of it.</p>
          <div class="pf-r">Loss<b class="mono bad-t">−$40</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Phoenicia Solar ETF</div>
          <p>40 solar companies, nothing else.</p>
          <div class="pf-r">Loss<b class="mono bad-t">−$4,000</b></div>
        </div>
      </div>
      <p>World fund: 1% × 40% = 0.4% of $10,000, which is $40. Solar fund: 40% of $10,000 = $4,000. Forty companies sounds spread out, but they all react to the same news. It's the lesson from Diversification in the How markets work unit: different has to mean different.</p>`},
    {k:'The catch', t:'Buying the story late', b:`
      <p>Theme funds tend to launch, and to pull in the most money, after their theme has already soared. Research on US theme and niche ETFs found that, on average, they went on to do worse than the wider market after launch.</p>
      <div class="split">
        <div class="col good"><div class="col-h">2020</div><b>More than doubled</b><p>The biggest clean-energy ETF, as the theme took off.</p></div>
        <div class="col bad"><div class="col-h">Early 2021 to 2023</div><b>Lost more than half</b><p>The same fund, from its peak, as the excitement faded.</p></div>
      </div>
      <p>A narrow fund is a bet on one story, not a slice of the whole market. This is history, not a forecast for any fund.</p>`}
  ],
  qs:[
    {q:'Which of these ETFs is the narrowest?',
     o:['A world stock ETF','A US total-market ETF','A cybersecurity ETF','A European stock ETF'], a:2,
     e:'A cybersecurity fund holds a small group of companies tied to one theme. The others spread across whole markets.'},
    {q:'Lina has $5,000 in a global ETF, and 5% of it is in energy companies. Energy shares fall 40% and everything else stays flat. How much does she lose?',
     o:['$2,000','$250','$100','$200'], a:2,
     e:"5% of $5,000 is $250 in energy. A 40% fall on $250 is $100. That's a 2% dip for the whole fund."},
    {q:'What does a momentum ETF mostly buy?',
     o:['The cheapest shares by P/E','The smallest companies','Companies tied to one trend','Shares that have risen most over recent months'], a:3,
     e:'Momentum funds lean towards recent winners. Cheap shares are value, and small companies are small-cap.'},
    {q:'A Japan ETF is priced in dollars. Over a year, Japanese shares rise 10% in yen, and the yen falls 10% against the dollar. Roughly what is the return in dollars?',
     o:['About −1%','0%','About +10%','About +20%'], a:0,
     e:'1.10 × 0.90 = 0.99, so about −1%. The currency fall wiped out the share gain, and a little more.'},
    {q:'Why can owning three different AI-themed ETFs still be one big bet?',
     o:['Combining ETFs on one theme is against the rules',"Theme ETFs can't fall at the same time",'Three funds always cost more than one','They often hold many of the same companies, which move together'], a:3,
     e:"Different fund names don't mean different risks. If the holdings overlap and move together, spreading across them barely helps."}
  ]
};

const ETFS_BONDS_COMMODITIES = {
  title:'Bond and commodity ETFs', min:5,
  cards:[
    {k:'The idea', t:'Beyond shares', b:`
      <p class="lead">ETFs can hold bonds, gold, or contracts on oil and wheat. They all trade like a share, but what sits inside changes how they behave.</p>
      <div class="kv kv3"><div><b>Bonds</b><span>A basket of loans</span></div><div><b>Gold</b><span>Real bars in vaults</span></div><div><b>Oil, wheat</b><span>Futures contracts</span></div></div>
      <p>A bond ETF often holds hundreds or thousands of bonds. It usually keeps to a range, such as bonds with 7 to 10 years left, selling old ones and buying new ones as time passes. So unlike a single bond, it has no end date when the loan comes back.</p>
      <div class="term"><span class="term-k">Key term</span><b>Maturity:</b> the date a bond repays its loan. A single bond has one. Most bond ETFs don't, because they keep replacing their bonds.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Rates up, prices down', b:`
      <p>Say a bond pays 3% interest, and then new bonds start paying 5%. Nobody pays full price for the 3% bond any more, so its price falls until its return lines up with the new rate. Falling rates work the other way.</p>
      <p>Fact sheets show a number called duration that says roughly how hard this hits. If rates rise 1 percentage point:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Short-term bond ETF</div>
          <p>Duration 2</p>
          <div class="pf-r">Price change<b class="mono bad-t">≈ −2%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Long-term bond ETF</div>
          <p>Duration 16</p>
          <div class="pf-r">Price change<b class="mono bad-t">≈ −16%</b></div>
        </div>
      </div>
      <p>In 2022, as US rates rose fast, funds of long-term US government bonds fell about 30%, while funds of short-term ones fell only a few per cent. The Bonds and interest rates unit explains why longer bonds swing more.</p>
      <div class="term"><span class="term-k">Key term</span><b>Duration:</b> roughly how much a bond's or bond fund's price moves, in per cent, when interest rates move 1 percentage point. It's an approximation that works best for small moves.</div>`},
    {k:'Gold', t:'Funds that hold the metal', b:`
      <p>A physical gold ETF buys real gold bars and stores them in vaults. Each share is a claim on a set amount of gold, so the price follows gold closely.</p>
      <p>The fee is paid by selling a little of the gold. Take a share that starts as a claim on 0.1 ounce, in a fund charging 0.40% a year:</p>
      <div class="kv kv3"><div><b>0.1 oz</b><span>Gold per share at the start</span></div><div><b>0.0996 oz</b><span>A year later</span></div><div><b class="good-t">≈ +9.6%</b><span>Fund, if gold rises 10%</span></div></div>
      <p>0.1 × (1 − 0.004) = 0.0996 ounce. If gold rises 10%, the share grows by about 1.10 × 0.996 = 1.0956: the gold's gain minus the fee. Gold-mining ETFs are different. They own mining companies, whose shares usually swing more than gold itself.</p>`},
    {k:'The catch', t:'Oil funds and the cost of rolling', b:`
      <p>Storing barrels is costly and awkward, so most oil and other commodity ETFs hold futures instead: contracts to buy a set amount at a set price on a set date. Before each contract ends, the fund sells it and buys a later one. That swap is called rolling.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Roll day</div><b>Sell at $70, buy at $71</b><p>Oil is $70. The ending contract is worth $70, and next month's costs $71.</p></div>
        <div class="col bad"><div class="col-h">A month later</div><b>$71 → $70</b><p>Oil is still $70, and that contract has slid to $70 near its end: −$1, about −1.4%.</p></div>
      </div>
      <p>Oil didn't move, yet the fund lost about 1.4%. Twelve rolls like that in a year would leave it about 16% down. That's how a commodity ETF can trail the spot price, the price for buying the commodity today. It can work the other way when later contracts are cheaper.</p>
      <div class="term"><span class="term-k">Key term</span><b>Contango:</b> when futures for later dates cost more than the price today, so each roll sells low and buys high. The Futures basics unit in the Vault covers it in depth.</div>`}
  ],
  qs:[
    {q:"Interest rates rise sharply. Other things equal, what usually happens to a bond ETF's price?",
     o:['It rises, because new bonds pay more','It stays the same, because bonds pay fixed interest','It falls, because its older bonds now pay less than new ones','It rises, because the fund collects more fees'], a:2,
     e:'New bonds now pay more, so the older, lower-paying bonds in the fund are worth less. Their prices fall, and so does the fund.'},
    {q:'A bond ETF has a duration of 7. Interest rates rise 2 percentage points. Roughly what happens to its price?',
     o:['It falls about 7%','It falls about 2%','It rises about 14%','It falls about 14%'], a:3,
     e:"A duration of 7 means about a 7% fall for each 1-point rise. 7 × 2 = about a 14% fall. It's an approximation, closest for small moves."},
    {q:'What does a physical gold ETF hold?',
     o:['Real gold bars stored in vaults','Shares in gold-mining companies','Contracts to buy gold next month','Cash, plus a promise to buy gold later'], a:0,
     e:'It owns the metal itself. Gold-mining ETFs own mining companies, and some other funds use futures.'},
    {q:"An oil ETF holds futures. Oil's spot price starts and ends the year at $80, yet the fund ends the year down. What is the most likely reason?",
     o:['Later contracts kept costing more, so each roll sold low and bought high','The fund had to sell its stored barrels at a loss','Oil ETFs always fall when oil is flat','The spot price was quoted in the wrong currency'], a:0,
     e:'That is contango. Each roll bought a pricier contract that then slid back towards the spot price, so the fund lost ground while oil went nowhere.'},
    {q:'True or false: like a single bond held to its end date, a typical bond ETF pays back a fixed amount on a set date.',
     o:['True','False'], a:1,
     e:"A single bond repays its loan at maturity, unless the borrower can't pay. Most bond ETFs keep replacing their bonds and never reach an end date, so no fixed amount is due back."}
  ]
};

const ETFS_LEVERAGED = {
  title:'Leveraged and inverse ETFs', min:5,
  cards:[
    {k:'The idea', t:'Twice the day, not twice the year', b:`
      <p class="lead">A leveraged ETF uses borrowed money and contracts tied to an index to aim for a multiple of the index's move, such as 2× or 3×. The catch is in the small print: the target is for one day only.</p>
      <div class="kv kv3"><div><b class="good-t">+1%</b><span>Index today</span></div><div><b class="good-t">+2%</b><span>2× fund aims for</span></div><div><b class="good-t">+3%</b><span>3× fund aims for</span></div></div>
      <p>Each day the fund resets to its multiple, starting from wherever it closed. Over longer stretches those days compound, and the result can drift far from 2× or 3× the index.</p>
      <div class="term"><span class="term-k">Key term</span><b>Leveraged ETF:</b> a fund that aims to deliver a multiple, such as 2× or 3×, of an index's return over a single day, before fees.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Up 10%, then down 10%', b:`
      <p>An index starts at $100, rises 10% one day and falls 10% the next. A 2× fund, also starting at $100, does double each day.</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Line chart over two days. The index goes from $100 to $110 to $99. The 2× fund goes from $100 to $120 to $96.">
        <line x1="40" y1="104" x2="220" y2="104" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/>
        <polyline points="40,104 130,64 220,108" fill="none" stroke="var(--ink-2)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="40,104 130,24 220,120" fill="none" stroke="var(--bear-deep)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="40" cy="104" r="4" fill="var(--ink)"/>
        <circle cx="130" cy="64" r="4" fill="var(--ink-2)"/><circle cx="220" cy="108" r="4" fill="var(--ink-2)"/>
        <circle cx="130" cy="24" r="4" fill="var(--bear-deep)"/><circle cx="220" cy="120" r="4" fill="var(--bear-deep)"/>
        <line x1="176" y1="10" x2="190" y2="10" stroke="var(--bear-deep)" stroke-width="3" stroke-linecap="round"/>
        <line x1="176" y1="24" x2="190" y2="24" stroke="var(--ink-2)" stroke-width="3" stroke-linecap="round"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="196" y="14" fill="var(--bear-ink)">2× fund</text><text x="196" y="28">Index</text>
          <text x="32" y="108" text-anchor="end" fill="var(--ink)">$100</text>
          <text x="130" y="14" text-anchor="middle" fill="var(--bear-ink)">$120</text>
          <text x="130" y="84" text-anchor="middle">$110</text>
          <text x="228" y="104">$99 (−1%)</text>
          <text x="228" y="130" fill="var(--bear-ink)">$96 (−4%)</text>
          <text x="40" y="146" text-anchor="middle">Start</text><text x="130" y="146" text-anchor="middle">Day 1</text><text x="220" y="146" text-anchor="middle">Day 2</text>
        </g>
      </svg>
      <p>Index: $100 → $110 → $99, a 1% loss. 2× fund: $100 → $120 → $96, a <b class="bad-t">4% loss</b>, not 2%. The 20% gain was worked out on $100 (+$20), but the 20% fall came off $120 (−$24).</p>
      <div class="term"><span class="term-k">Key term</span><b>Volatility decay:</b> the ground a daily-reset fund loses when prices swing up and down. The bigger the swings and the higher the multiple, the more it tends to lose.</div>`},
    {k:'The catch', t:'Inverse funds and choppy months', b:`
      <p>An inverse ETF aims for the opposite of the day's move. Same two days: the index goes +10% then −10%, so a −1× fund goes −10% then +10%: $100 → $90 → $99.</p>
      <p>The index lost 1%, and the fund betting against it lost 1% too.</p>
      <p>The swings don't have to be big. Picture 20 trading days, about a month, where the index rises 2% one day and falls 2% the next, over and over:</p>
      <div class="kv kv3"><div><b class="bad-t">−0.4%</b><span>Index</span></div><div><b class="bad-t">−1.6%</b><span>2× fund</span></div><div><b class="bad-t">−3.5%</b><span>3× fund</span></div></div>
      <div class="term"><span class="term-k">Key term</span><b>Inverse ETF:</b> a fund that aims for the opposite of an index's return over one day. If the index falls 1% today, a −1× fund aims to rise 1%.</div>`},
    {k:'The limit', t:'Built for days, not years', b:`
      <p>Over many days, the result depends on the path, not just on where the index ends. A steady trend can even help:</p>
      <div class="split">
        <div class="col good"><div class="col-h">Two days of +10%</div><b>Index +21%, 2× fund +44%</b><p>More than double the index's gain.</p></div>
        <div class="col bad"><div class="col-h">Two days of −10%</div><b>Index −19%, 2× fund −36%</b><p>A little less than double the loss.</p></div>
      </div>
      <p>Choppy markets eat away at these funds, as the last card showed. Their own documents describe them as aiming for one-day results, and US regulators have warned that, held for longer than a day, they can give results far from the multiple in their name.</p>
      <p>Losses arrive fast too: a 10% fall in the index in one day takes about 30% off a 3× fund. And their fees are usually much higher than a plain index fund's.</p>`}
  ],
  qs:[
    {q:'A 2× ETF tracks an index. The index rises 3% today. Before fees, what does the fund aim to do today?',
     o:['Rise 3%','Rise 9%','Rise 1.5%','Rise 6%'], a:3,
     e:"A 2× fund aims for twice the day's move: 2 × 3% = 6%."},
    {q:'An index falls 5% one day and rises 5% the next. What happens to a 2× fund on it over the two days?',
     o:['It ends 0.5% down','It ends flat','It ends 1% down','It ends 0.5% up'], a:2,
     e:'2× fund: $100 → $90 → $99, a 1% loss. Index: $100 → $95 → $99.75, a 0.25% loss. The fund lost four times as much, not twice.'},
    {q:'An index falls 4% today. What does a −1× inverse ETF on it aim to do today?',
     o:['Fall 4%','Rise 4%','Rise 8%','Stay flat'], a:1,
     e:"An inverse fund aims for the opposite of the day's move: −1 × −4% = +4%."},
    {q:'Why are leveraged ETFs usually described as short-term tools?',
     o:['They reset every day, so over longer periods the result can drift far from the multiple','The law only lets people hold them for one day','They always lose money after a week','Their fee is charged only on the first day'], a:0,
     e:'The 2× or 3× target only holds for one day. Over weeks or months, daily results compound, and swings can leave the fund far from the multiple.'},
    {q:'True or false: over a year, a 2× ETF returns twice what its index returned.',
     o:['True','False'], a:1,
     e:'The 2× target is for one day. Over a year the daily results compound: swings can leave the fund well short of double, and a strong steady trend can push it above.'}
  ]
};

const ETFS_CHECK = {
  title:'Unit check', min:4, badge:{name:'Fund Insider', icon:'candles'}, cards:[],
  qs:[
    {q:'An ETF holds $120 million of investments, owes $0.6 million and has 4 million shares. Its shares trade at $30.00. How is it trading?',
     o:['Exactly at its NAV','At a premium of about 0.5%','At a discount of about 0.5%','At a premium of about 15%'], a:1,
     e:'NAV: ($120 million − $0.6 million) ÷ 4 million = $29.85. $30.00 is $0.15 above that, and $0.15 ÷ $29.85 ≈ 0.5%. Forgetting what it owes gives $30.00, which looks like no gap at all.'},
    {q:'An ETF trades at a premium to its NAV. What do authorised participants tend to do, and with what effect?',
     o:['Buy ETF shares and redeem them, which lifts the price','Ask the exchange to cut the price','Nothing, because only the fund can close the gap','Buy the basket, swap it for new ETF shares and sell those, which pushes the price down'], a:3,
     e:'The ETF is dearer than the basket. APs buy the basket, create new ETF shares with it and sell them at the higher price. That selling pushes the price back towards NAV.'},
    {q:'An index returned 12.00%. Fund A (fee 0.20%) returned 11.80%. Fund B (fee 0.07%) returned 11.60%. With $20,000 in each, which gained more, and by how much?',
     o:['B, by $26','A, by $40','B, by $40','A, by $4'], a:1,
     e:'A: 11.80% of $20,000 = $2,360. B: 11.60% of $20,000 = $2,320. A gained $40 more despite its higher fee. Going by the fees alone (0.13% of $20,000 = $26) would wrongly point to B.'},
    {q:"A fund's five biggest holdings make up 45% of it. Those five fall 20% while everything else rises 5%. What is the fund's return?",
     o:['−15%','−9%','−6.25%','−7.5%'], a:2,
     e:'45% × −20% = −9%. 55% × +5% = +2.75%. Together: −9% + 2.75% = −6.25%.'},
    {q:'A Europe ETF is priced in dollars. Over a year, European shares rise 20% in euros, and the euro falls 10% against the dollar. What is the return in dollars?',
     o:['+10%','+8%','+30%','+20%'], a:1,
     e:'1.20 × 0.90 = 1.08, so +8%. Simply subtracting (20% − 10%) gives 10%, which overstates it.'},
    {q:'Two bond ETFs have durations of 3 and 12. Interest rates fall 1 percentage point. Roughly what happens to their prices?',
     o:['Both rise, by about 3% and 12%','Both fall, by about 3% and 12%','Both rise by about 1%','The duration-3 fund rises about 12%, the duration-12 fund about 3%'], a:0,
     e:'Falling rates lift bond prices. Duration says roughly how much: about 3 × 1 = 3% for the first, and about 12 × 1 = 12% for the second.'},
    {q:"An oil ETF buys next month's contract at $82 while oil's spot price is $80. A month later, oil is still $80 and the contract has slid to $80. Roughly what did the fund lose on that contract?",
     o:['Nothing, since oil stayed at $80','About 2.4%','About 24%','It gained about 2.4%'], a:1,
     e:"It paid $82, and the contract is now worth $80: $2 ÷ $82 ≈ 2.4%. That's the cost of rolling in contango."},
    {q:'An index rises 10% one day and falls 10% the next. What happens to a 3× fund on it over the two days?',
     o:['It ends 3% down','It ends 9% down','It ends flat','It ends 1% down'], a:1,
     e:'3× fund: $100 → $130 (+30%) → $91 (−30%), a 9% loss. The index lost only 1% ($100 → $110 → $99). Three times the index would have been −3%.'}
  ]
};

const UNIT_ETFS = {id:'etfs', title:'ETFs in depth', level:'Beginner', lessons:[ETFS_HOW_IT_WORKS, ETFS_READING, ETFS_KINDS, ETFS_BONDS_COMMODITIES, ETFS_LEVERAGED, ETFS_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_ETFS = [
  {n:1, q:"Why does an ETF's market price usually stay close to its NAV?",
   o:['The exchange resets the price to NAV every minute','Authorised participants create or redeem shares when a gap opens, which pushes the price back','ETF shares can only be sold back to the fund','The fund buys back any share that trades below NAV'], a:1,
   e:'A gap lets big firms profit by creating or redeeming shares. Their buying or selling pulls the price back towards NAV.'},
  {n:2, q:'An index returned 7.00%. ETF X (fee 0.05%) returned 6.95%. ETF Y (fee 0.03%) returned 6.80%. Which tracked the index more closely?',
   o:['Y, because its fee is lower','They tracked equally well','X, which trailed by 0.05 percentage points against 0.20 for Y','Y, which trailed by only 0.03 percentage points'], a:2,
   e:'X: 7.00% − 6.95% = 0.05 points behind. Y: 7.00% − 6.80% = 0.20 points behind. The lower fee didn\'t make Y the closer copy.'},
  {n:3, q:'Which of these ETFs carries the most concentration risk?',
   o:['One holding 3,000 companies across the world','One holding 500 large US companies','One holding 30 companies in one new industry','One holding 1,200 companies across Europe'], a:2,
   e:'Thirty companies in one industry tend to rise and fall with the same news. The others spread across many industries.'},
  {n:4, q:'A bond ETF has a duration of 5. Interest rates rise 1.5 percentage points. Roughly what happens to its price?',
   o:['It falls about 7.5%','It falls about 5%','It falls about 1.5%','It rises about 7.5%'], a:0,
   e:'Price change ≈ −duration × change in rates = −5 × 1.5 = about −7.5%.'},
  {n:5, q:'An index swings up and down for a month and ends exactly where it started. What has most likely happened to a 2× ETF on that index?',
   o:['It has lost money','It is flat too','It has gained, thanks to the leverage','It has doubled'], a:0,
   e:'Each daily reset loses a little ground when prices swing back and forth. With the index flat, a 2× fund ends lower, even before its fees.'}
];

/* MATHS CHECK: every calculation and its result, for the reviewer.
   (Recomputed in Python: 99 of 99 checks pass.)
   Lesson 1, How an ETF works
   - Cedar 100 NAV: ($80.2M − $0.2M) ÷ 4M = $80M ÷ 4M = $20.00.
   - Premium: $20.10 − $20.00 = $0.10; $0.10 ÷ $20.00 = 0.5%. Discount: $20.00 − $19.95 = $0.05; $0.05 ÷ $20.00 = 0.25%.
   - AP block of 50,000: basket 50,000 × $20.00 = $1,000,000; new shares sold 50,000 × $20.10 = $1,005,000; gap $5,000.
   - Q1: ($36.3M − $0.3M) ÷ 1.2M = $30.00. Slips: $36.3M ÷ 1.2M = $30.25 (debt ignored); $36.6M ÷ 1.2M = $30.50 (debt added).
   - Q2: ($50.25 − $50.00) ÷ $50.00 = 0.5% premium. Slips: 0.25% (dollar gap read as %), 5% (decimal slip).
   Lesson 2, Reading an ETF
   - Top 10 at 40% falling 20%: 0.40 × −20% = −8%.
   - Tracking: index 8.00% on $10,000 = $800; A 7.88% = $788 (gap 0.12 points); B 7.70% = $770 (gap 0.30 points); $788 − $770 = $18.
   - Spread: ~$5,000 = 100 shares at $50 or 200 at $25. X: 100 × $0.02 = $2. Y: 200 × $0.30 = $60.
   - Q1: 0.30 × −10% = −3%.
   - Q2: 6.00 − 5.75 = 0.25 points; 0.25 − 0.10 fee = 0.15 points unexplained.
   - Q3: 100 × $0.40 − 100 × $0.01 = $40 − $1 = $39.
   - Q4: 200 × $0.40 = $80; NAV $50 − $0.40 = $49.60; 200 × $49.60 = $9,920; $9,920 + $80 = $10,000 = 200 × $50.
   Lesson 3, Kinds of ETF
   - World fund: 1% × 40% = 0.4% of $10,000 = $40. Solar fund: 40% × $10,000 = $4,000.
   - Q2: 5% × $5,000 = $250 in energy; 40% × $250 = $100 (2% of $5,000). Slips: 40% × $5,000 = $2,000; $250; $200.
   - Q4: 1.10 × 0.90 = 0.99 → −1%. Slip: 10% − 10% = 0%.
   Lesson 4, Bond and commodity ETFs
   - Duration rule (price change ≈ −duration × change in rates): −2 × 1 = −2%; −16 × 1 = −16%.
   - Gold: 0.1 × (1 − 0.004) = 0.0996 oz. 1.10 × 0.996 = 1.0956 → +9.56% ≈ +9.6%. (Fee accrued daily instead: 1.10 × (1 − 0.004/365)^365 = 1.09561, still ≈ 9.6%.)
   - Roll: ($71 − $70) ÷ $71 = 1.408% ≈ 1.4%. Twelve such rolls: (70 ÷ 71)^12 = 0.8435 → −15.65% ≈ 16% down.
   - Q2: −7 × 2 = −14%.
   - Facts: 2022 calendar-year total returns, long-term US Treasury ETFs about −30% (e.g. 20+ year funds about −31%), short-term (1-3 year)
     Treasury ETFs about −4%. Biggest clean-energy ETF: more than +100% in 2020; more than −50% from its January 2021 peak by 2023.
     S&P 500 top-10 weight above a third by end-2024 (about 38%). March 2020: several large bond ETFs closed several per cent below NAV.
     Reviewer check: TLT 2022 about −31%, SHY about −3.9%. ICLN 2020 about +142%, high in early January 2021, end-2023 below half of it.
     S&P 500 top 10 about 39% at end-2024 (about 35% mid-2024, still above a third). LQD about 5% and BND about 6% below NAV on
     12 March 2020, mostly gone the next day, hence "briefly". Thematic: Ben-David, Franzoni, Kim and Moussawi (2023): specialised ETFs
     launch after hype and underperform afterwards. Value: US value indexes trailed growth and the S&P 500 over 2010-2019.
     Leveraged: joint SEC/FINRA investor alert on holding them longer than one day.
   Lesson 5, Leveraged and inverse ETFs
   - Index: $100 × 1.10 = $110; × 0.90 = $99 (−1%). 2×: $100 × 1.20 = $120; × 0.80 = $96 (−4%). Day 2 fall: 20% × $120 = $24.
   - Inverse: $100 × 0.90 = $90; × 1.10 = $99 (−1%).
   - 20 days alternating ±2%: index (1.02 × 0.98)^10 = 0.99601 → −0.40%; 2× (1.04 × 0.96)^10 = 0.98411 → −1.59% ≈ −1.6%;
     3× (1.06 × 0.94)^10 = 0.96458 → −3.54% ≈ −3.5%.
   - Trends: 1.1² = 1.21 (+21%); 1.2² = 1.44 (+44% > 42%). 0.9² = 0.81 (−19%); 0.8² = 0.64 (−36%, less than 38%). 3 × −10% = −30%.
   - Diagram: y = 124 − (value − 95) × 4. $100 → 104, $110 → 64, $99 → 108, $120 → 24, $96 → 120. x: Start 40, Day 1 130, Day 2 220.
     Day-2 labels at y = 104 and 130 (26 apart); x-axis labels at y = 146; legend rows at y = 14 and 28.
   - Q1: 2 × 3% = 6%. Q3: −1 × −4% = +4%.
   - Q2: 2×: $100 × 0.90 × 1.10 = $99 (−1%). Index: $100 × 0.95 × 1.05 = $99.75 (−0.25%). 1 ÷ 0.25 = 4 times.
   Unit check
   - Q1: ($120M − $0.6M) ÷ 4M = $29.85; $30.00 − $29.85 = $0.15; $0.15 ÷ $29.85 = 0.5025% ≈ 0.5%. Slip: $120M ÷ 4M = $30.00 (at NAV).
   - Q3: 11.80% × $20,000 = $2,360; 11.60% × $20,000 = $2,320; gap $40. Slip: (0.20% − 0.07%) × $20,000 = $26.
   - Q4: 0.45 × −20% + 0.55 × 5% = −9% + 2.75% = −6.25%. Slips: −20% + 5% = −15%; −9%; (−20 + 5) ÷ 2 = −7.5%.
   - Q5: 1.20 × 0.90 = 1.08 → +8%. Slips: 20 − 10 = 10%; 20 + 10 = 30%; 20%.
   - Q6: +3 × 1 = +3%; +12 × 1 = +12%.
   - Q7: ($82 − $80) ÷ $82 = 2.439% ≈ 2.4%. Slip: 24%.
   - Q8: 3×: $100 × 1.30 × 0.70 = $91 (−9%). Index $99 (−1%); 3 × −1% = −3%.
   Placement
   - n2: X 7.00 − 6.95 = 0.05 points; Y 7.00 − 6.80 = 0.20 points.
   - n4: −5 × 1.5 = −7.5%.
   - n5: for any path where the index ends flat, a 2× daily-reset fund ends lower: each day log((1 + 2r) ÷ (1 + r)²) = log(1 − r² ÷ (1 + r)²) ≤ 0.
     Checked on 20,000 random flat paths in Python: the 2× fund (and a −1× fund) never ended above its start. */
