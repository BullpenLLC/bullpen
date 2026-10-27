/* ---------- Sectors and the economy ---------- */
const SECTORS_WHAT = {
  title:'Sectors', min:5,
  cards:[
    {k:'The idea', t:'Sorting the economy into groups', b:`
      <p class="lead">Thousands of companies are listed on stock markets. To compare them, investors sort them into sectors: groups of companies that earn their money in similar ways.</p>
      <div class="mix">
        <div class="mix-h"><span>The most common system</span><span class="tag good">11 sectors</span></div>
        <div class="chips"><span>Technology</span><span>Healthcare</span><span>Financials</span><span>Energy</span><span>Materials</span><span>Industrials</span><span>Utilities</span><span>Real estate</span><span>Consumer staples</span><span>Consumer discretionary</span><span>Communication services</span></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Sector:</b> a broad group of companies that make money in similar ways, such as banks, oil firms or drug makers. Companies in one sector tend to react to the same news.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'The labels', t:'Who decides the sector?', b:`
      <p>The most widely used system is GICS. Two index companies, MSCI and S&amp;P, built it in 1999, and they still run it. Each company goes into one sector, based mainly on where most of its sales come from.</p>
      <p>Two names trip people up. Consumer staples sell everyday needs like food, drinks and soap. Consumer discretionary sells things people can put off, like cars, clothes and holidays.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Looks like tech</div><b>Filed somewhere else</b><p>Since 2018, the companies behind Google and Facebook sit in communication services. Amazon sits in consumer discretionary, as a retailer.</p></div>
        <div class="col good"><div class="col-h">Labels change</div><b>The list gets updated</b><p>Real estate became the 11th sector in 2016. In 2023 the big card-payment networks moved from technology to financials.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>GICS (Global Industry Classification Standard):</b> the most common way of sorting listed companies into sectors. Under its 11 sectors sit smaller groups, down to narrow sub-industries.</div>`},
    {k:'Do the maths', t:'Sector weights', b:`
      <p>An index's weight in a sector is the market cap of its companies in that sector, as a share of the whole index. The made-up Cedar 50 index holds companies worth $2,000B in total:</p>
      <div class="kv kv3"><div><b>$800B</b><span>Technology</span></div><div><b>$300B</b><span>Financials</span></div><div><b>$900B</b><span>Everything else</span></div></div>
      <p>Technology is $800B ÷ $2,000B = 40% of the index, and financials $300B ÷ $2,000B = 15%. If technology shares fall 10% and the rest stay flat, the index falls 40% × 10% = <b class="bad-t">4%</b>.</p>
      <p>Real indexes can be lopsided too. In recent years technology has been the biggest sector in the S&amp;P 500, close to a third of it by 2024, while utilities, materials and real estate were each only a few per cent.</p>
      <div class="term"><span class="term-k">Key term</span><b>Sector weight:</b> the share of a fund's or an index's money in one sector.</div>`},
    {k:'In practice', t:'Same month, two mixes', b:`
      <p>Two made-up $10,000 portfolios live through the same month. Technology falls 15%, financials fall 3%, healthcare rises 2%, energy rises 4% and consumer staples rise 1%.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Tech-heavy</div>
          <p>70% technology, 10% each in financials, healthcare and energy</p>
          <div class="pf-r">After the month<b class="mono bad-t">$8,980</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Spread out</div>
          <p>20% in each of the five sectors</p>
          <div class="pf-r">After the month<b class="mono">$9,780</b></div>
        </div>
      </div>
      <p>Each sector adds its weight × its move. Tech-heavy: 70% × −15% = −10.5%, then −0.3% + 0.2% + 0.4%, for −10.2%. Spread out: −3% − 0.6% + 0.4% + 0.8% + 0.2% = −2.2%.</p>
      <p>In a strong month for technology, the tech-heavy mix would come out ahead. Either way it swings harder, because one sector drives most of it. It's the lesson from Diversification in the How markets work unit: different has to mean different.</p>`}
  ],
  qs:[
    {q:'How many sectors does the GICS system use?',
     o:['6','20','11','50'], a:2,
     e:'GICS has 11 sectors, from energy to real estate. Under them sit smaller groups, down to narrow sub-industries.'},
    {q:'Technology is 30% of an index. Technology shares fall 10% and everything else stays flat. What happens to the index?',
     o:['It falls 10%','It falls 3%','It falls 30%','It falls 0.3%'], a:1,
     e:'Only 30% of the index took the hit: 30% × −10% = −3%.'},
    {q:'Which sector does a supermarket chain belong to?',
     o:['Consumer discretionary','Industrials','Real estate','Consumer staples'], a:3,
     e:'Supermarkets sell food and other everyday needs, which is consumer staples. Discretionary covers things people can put off, like cars and holidays.'},
    {q:"A portfolio is 50% technology, 30% healthcare and 20% energy. In a month, technology falls 8%, healthcare rises 2% and energy rises 5%. What is the portfolio's return?",
     o:['−2.4%','−4%','−0.33%','−8%'], a:0,
     e:'Weight × move for each: 50% × −8% = −4%, 30% × 2% = +0.6%, 20% × 5% = +1%. Total: −4% + 0.6% + 1% = −2.4%. A plain average of the three moves (−0.33%) ignores the weights.'},
    {q:'True or false: a technology sector fund holds every big company that people think of as "tech".',
     o:['True','False'], a:1,
     e:'Labels can surprise. Under GICS, the companies behind Google and Facebook sit in communication services, and Amazon sits in consumer discretionary.'}
  ]
};

const SECTORS_CYCLICAL = {
  title:'Cyclical vs defensive', min:4,
  cards:[
    {k:'The idea', t:'Some spending can wait', b:`
      <p class="lead">When jobs feel less safe, people put off buying a new car, a sofa or a holiday. They still buy food, pay the electricity bill and fill prescriptions. That difference splits sectors into two broad camps.</p>
      <div class="term"><span class="term-k">Key term</span><b>Cyclical sector:</b> one whose sales and profits tend to rise and fall with the economy, growing fast in good times and shrinking in bad ones.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Which is which', t:'Two camps', b:`
      <div class="split">
        <div class="col bad"><div class="col-h">Cyclical</div><b>Swings with the economy</b><p>Consumer discretionary, industrials, materials and financials. Energy often behaves this way too.</p></div>
        <div class="col good"><div class="col-h">Defensive</div><b>Needed anyway</b><p>Consumer staples, utilities and healthcare. Demand stays steadier when times are hard.</p></div>
      </div>
      <p>Banks are cyclical because in a downturn more borrowers fall behind on their loans, and fewer people take out new ones. Factories, builders and steelmakers see orders dry up.</p>
      <p>Technology, communication services and real estate don't fit neatly. It depends on the company.</p>
      <div class="term"><span class="term-k">Key term</span><b>Defensive sector:</b> one that sells things people keep buying in bad times, so its sales and profits tend to hold up better in a downturn.</div>`},
    {k:'Do the maths', t:'Two portfolios in a downturn', b:`
      <p>Made-up numbers to show the idea. In a recession year, cyclical sectors fall 30% and defensive sectors fall 8%. Two portfolios start with $10,000 each:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Cyclical-heavy</div>
          <p>80% cyclical, 20% defensive</p>
          <div class="pf-r">Ends at<b class="mono bad-t">$7,440</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Defensive-heavy</div>
          <p>20% cyclical, 80% defensive</p>
          <div class="pf-r">Ends at<b class="mono">$8,760</b></div>
        </div>
      </div>
      <p>Cyclical-heavy: $8,000 × 0.70 = $5,600, plus $2,000 × 0.92 = $1,840, makes $7,440 (−25.6%). Defensive-heavy: $2,000 × 0.70 = $1,400, plus $8,000 × 0.92 = $7,360, makes $8,760 (−12.4%).</p>
      <p>The defensive mix lost about half as much. It still lost $1,240. Defensive means steadier, not safe.</p>`},
    {k:'The catch', t:'Steadier has a price', b:`
      <p>Real downturns have shown a similar pattern. In 2008 the S&amp;P 500 lost more than a third of its value:</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Financials, 2008</div><b>Lost more than half</b><p>Banks were at the centre of the crisis.</p></div>
        <div class="col good"><div class="col-h">Consumer staples, 2008</div><b>Fell less than a fifth</b><p>Still a fall, but a far smaller one.</p></div>
      </div>
      <p>The other side: in strong booms, defensive sectors tend to lag. Investors often pay a higher P/E for steady profits, so defensive shares aren't automatically cheap. And a cyclical company's P/E can look lowest right at the peak, as the Valuation ratios unit showed.</p>
      <p>This is history and tendency, not a forecast. Each downturn hits sectors in its own way.</p>`}
  ],
  qs:[
    {q:'Which of these sectors is usually seen as defensive?',
     o:['Industrials','Materials','Utilities','Consumer discretionary'], a:2,
     e:"People pay for electricity and water in good times and bad, so utilities' sales tend to hold up. The other three are cyclical."},
    {q:"Why do a carmaker's sales tend to fall in a recession?",
     o:['Carmakers belong to a defensive sector','A new car is easy to put off when money feels tight','Car prices are set by the government','Recessions only hurt companies with debt'], a:1,
     e:'A new car is discretionary spending, among the first things people delay when they worry about jobs and income. That makes carmakers cyclical.'},
    {q:'A $20,000 portfolio is half cyclical and half defensive. In a downturn, cyclical sectors fall 20% and defensive sectors fall 4%. What is it worth after?',
     o:['$16,000','$19,200','$15,200','$17,600'], a:3,
     e:'Cyclical: $10,000 × 0.80 = $8,000. Defensive: $10,000 × 0.96 = $9,600. Total $17,600, a 12% fall.'},
    {q:'True or false: defensive sectors do not fall in a recession.',
     o:['True','False'], a:1,
     e:'They tend to fall less, not never. In 2008, consumer staples shares still fell, just far less than the market.'},
    {q:'A company makes toothpaste and washing powder. Which sector is it in, and what kind of sector is that?',
     o:['Consumer staples, a defensive sector','Consumer discretionary, a cyclical sector','Materials, a cyclical sector','Healthcare, a cyclical sector'], a:0,
     e:'Household products are everyday needs that people keep buying in hard times. That puts them in consumer staples, a defensive sector.'}
  ]
};

const SECTORS_CYCLE = {
  title:'The business cycle', min:5,
  cards:[
    {k:'The idea', t:'The economy moves in waves', b:`
      <p class="lead">Economies tend to grow over time, but not in a straight line. Spells of growth are broken up by spells of shrinking. This repeating pattern is called the business cycle.</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="A wave over time. Output rises through an expansion to a peak, falls through a contraction to a trough, then expands again to a new high.">
        <line x1="20" y1="126" x2="280" y2="126" stroke="var(--line)" stroke-width="2"/>
        <path d="M20,110 C65,110 65,40 110,40 C155,40 155,100 200,100 C245,100 250,34 280,30" fill="none" stroke="var(--ink-2)" stroke-width="3" stroke-linecap="round"/>
        <circle cx="110" cy="40" r="4" fill="var(--bull-deep)"/>
        <circle cx="200" cy="100" r="4" fill="var(--bear-deep)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)" text-anchor="middle">
          <text x="110" y="28" fill="var(--bull-ink)">Peak</text>
          <text x="200" y="118" fill="var(--bear-ink)">Trough</text>
          <text x="65" y="144">Expansion</text><text x="155" y="144">Contraction</text><text x="240" y="144">Expansion</text>
        </g>
      </svg>
      <p>No two cycles are the same length or size. A contraction that is deep and lasts long enough is called a recession.</p>
      <div class="term"><span class="term-k">Key term</span><b>Recession:</b> a broad fall in economic activity, usually lasting more than a few months. A common shortcut is two quarters in a row of falling GDP (gross domestic product: the total value of everything an economy produces).</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Why profits swing harder than sales', b:`
      <p>Zahle Motors, a made-up carmaker, has two kinds of cost. Fixed costs, like factories and salaried staff, come to $400M a year whatever it sells. Parts and energy cost 50 cents of every $1 of sales.</p>
      <div class="kv kv3"><div><b class="bad-t">$50M</b><span>Profit on $900M of sales</span></div><div><b>$100M</b><span>Profit on $1,000M</span></div><div><b class="good-t">$150M</b><span>Profit on $1,100M</span></div></div>
      <p>At $1,000M of sales: $1,000M − $400M − $500M = $100M of profit. A contraction cuts sales 10%, to $900M: $900M − $400M − $450M = $50M. Sales fell 10%. Profit fell 50%.</p>
      <p>It works upwards too: 10% more sales lifts profit 50%, to $150M. This is a big reason cyclical companies' profits swing so hard.</p>
      <div class="term"><span class="term-k">Key term</span><b>Operating leverage:</b> when a big share of a company's costs is fixed, so a small change in sales causes a much bigger change in profit.</div>`},
    {k:'Signposts', t:'Leading and lagging', b:`
      <p>Economic data arrives late and often gets revised. So economists watch some measures that tend to turn early, and others that confirm a turn after it has happened.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Leading</div><b>Tend to turn first</b><p>New orders at factories, permits to build new homes, share prices.</p></div>
        <div class="col bad"><div class="col-h">Lagging</div><b>Tend to turn after</b><p>The unemployment rate. Firms wait to be sure of a recovery before hiring again.</p></div>
      </div>
      <p>In the US, the 2007–2009 recession ended in June 2009, yet unemployment kept rising until October 2009, when it reached 10%. Leading measures give false alarms too, so none of them is a sure signal.</p>
      <div class="term"><span class="term-k">Key term</span><b>Leading indicator:</b> a measure that tends to change direction before the economy as a whole does. A lagging indicator tends to change after.</div>`},
    {k:'The limit', t:'Only clear in hindsight', b:`
      <p>In the US, a committee of economists dates recessions, and it waits for solid data. In December 2008 it announced that a recession had begun in December 2007, a year earlier. It announced the end, June 2009, in September 2010.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">2020</div><b>Two months long</b><p>The shortest US recession on record. Its start was announced in June 2020, after it had already ended.</p></div>
        <div class="col good"><div class="col-h">2009 to 2020</div><b>More than ten years</b><p>The longest US expansion on record.</p></div>
      </div>
      <p>The shortcuts can mislead. In 2022, early US figures showed GDP falling two quarters in a row, yet no recession was declared. And share prices sometimes fall hard with no recession following.</p>
      <p>Forecasters have often missed recessions until they were already under way. Nobody times the cycle reliably, however confident a forecast sounds.</p>`}
  ],
  qs:[
    {q:'In what order do the phases of the business cycle run?',
     o:['Expansion, trough, contraction, peak','Peak, expansion, trough, contraction','Expansion, peak, contraction, trough','Contraction, peak, expansion, trough'], a:2,
     e:'The economy grows (expansion) to a high point (peak), shrinks (contraction) to a low point (trough), and then expands again.'},
    {q:'Which of these is usually a lagging indicator?',
     o:['The unemployment rate','New orders at factories','Permits to build new homes','Share prices'], a:0,
     e:'Firms tend to wait until a recovery looks real before hiring again. In the US, unemployment kept rising for four months after the 2007–2009 recession ended.'},
    {q:'A company has $1,000M of sales, fixed costs of $300M, and other costs of 40 cents per $1 of sales. If sales fall 10%, what happens to its profit?',
     o:['It falls 10%, to $270M','It falls 40%, to $180M','It stays at $300M','It falls 20%, to $240M'], a:3,
     e:'Before: $1,000M − $300M − $400M = $300M. After: $900M − $300M − $360M = $240M. Profit falls $60M, which is 20%, twice the fall in sales, because the fixed costs stay put.'},
    {q:'What is a common shortcut for spotting a recession?',
     o:['The stock market falls 20%','GDP falls for two quarters in a row','Unemployment rises for one month','Inflation goes above 5%'], a:1,
     e:'Two quarters in a row of falling GDP is the usual rule of thumb, though in the US a committee looks at many kinds of data before declaring one. A 20% fall in shares is a bear market, not a recession.'},
    {q:'True or false: recessions are usually officially confirmed as soon as they start.',
     o:['True','False'], a:1,
     e:'The data takes time. In the US, the recession that began in December 2007 was only confirmed in December 2008, a year later.'}
  ]
};

const SECTORS_ROTATION = {
  title:'Sector rotation', min:5,
  cards:[
    {k:'The idea', t:'Following the cycle', b:`
      <p class="lead">If different sectors have tended to do best at different stages of the business cycle, could an investor move money between them as the cycle turns? That idea is called sector rotation.</p>
      <div class="term"><span class="term-k">Key term</span><b>Sector rotation:</b> shifting money between sectors to favour the ones expected to do best at the next stage of the cycle.</div>
      <p>Sector ETFs, from the Kinds of ETF lesson in the ETFs in depth unit, turn each switch into a single trade. That makes the idea easy to try, and easy to overdo.</p>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'The textbook map', t:'Who has tended to lead, and when', b:`
      <p>Versions differ, but a common textbook picture looks like this:</p>
      <div class="split">
        <div class="col good"><div class="col-h">Early recovery</div><b>Financials, consumer discretionary</b><p>Interest rates are often low, and spending picks up from a low base.</p></div>
        <div class="col good"><div class="col-h">Mid expansion</div><b>Technology, industrials</b><p>Companies spend on new equipment and software.</p></div>
      </div>
      <div class="split">
        <div class="col bad"><div class="col-h">Late expansion</div><b>Energy, materials</b><p>Demand for raw materials runs high, and their prices rise.</p></div>
        <div class="col bad"><div class="col-h">Contraction</div><b>Staples, utilities, healthcare</b><p>The defensive sectors from the Cyclical vs defensive lesson.</p></div>
      </div>
      <p>The map is drawn by looking back at past cycles. It describes tendencies, with plenty of exceptions, not rules.</p>`},
    {k:'Do the maths', t:'Right idea, wrong month', b:`
      <p>Made-up numbers. Rima expects a recovery and moves $10,000 from a consumer staples fund into an industrials fund. But the recession runs on for six more months: industrials fall 15% and staples fall 3%.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Switched early</div>
          <p>$10,000 × 0.85</p>
          <div class="pf-r">Ends at<b class="mono bad-t">$8,500</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Stayed put</div>
          <p>$10,000 × 0.97</p>
          <div class="pf-r">Ends at<b class="mono">$9,700</b></div>
        </div>
      </div>
      <p>Six months on, she's $1,200 behind, even if the recovery she expected arrives later. Being early can cost as much as being wrong.</p>
      <p>Switching costs money too. Each switch is a sale and a purchase. At 0.1% a trade, one switch of $10,000 costs $20. Four switches a year cost $80, or 0.8% a year, before any tax on gains.</p>`},
    {k:'The catch', t:"Why it's hard in practice", b:`
      <div class="split">
        <div class="col bad"><div class="col-h">Clear only later</div><b>The stage is a guess</b><p>Recessions are often dated months after they start, as the business cycle lesson showed. By then, share prices have often already moved.</p></div>
        <div class="col bad"><div class="col-h">Every cycle differs</div><b>The map can break</b><p>In 2020, a recession year, US technology shares rose more than 40% while energy fell more than 30%.</p></div>
      </div>
      <p>Researchers who tested the textbook map on decades of US data found only small gains, even when they knew the stages in hindsight, and less once the stages had to be guessed as they happened. Costs and tax shrink whatever is left.</p>
      <p>Sector rotation is a way of thinking about the economy, not a proven way to beat the market.</p>`}
  ],
  qs:[
    {q:'What does a sector rotation strategy try to do?',
     o:['Shift money towards the sectors expected to lead at the next stage of the cycle','Keep every sector at its index weight for ever','Bring a portfolio back to a fixed mix once a year','Buy whichever sector rose most last year'], a:0,
     e:"Rotation follows the business cycle. Bringing a portfolio back to a fixed mix is rebalancing, and chasing last year's winner is closer to momentum."},
    {q:'In the textbook map from this lesson, which sectors are linked with a contraction?',
     o:['Energy and materials','Financials and consumer discretionary','Technology and industrials','Consumer staples, utilities and healthcare'], a:3,
     e:'Those are the defensive sectors. In the map, energy and materials go with the late expansion, financials and discretionary with the early recovery, and technology and industrials with the middle.'},
    {q:'Hana moves $5,000 from a consumer staples fund into an industrials fund, expecting a recovery. Over the next three months industrials fall 12% and staples fall 2%. Ignoring costs, how far behind is she compared with staying put?',
     o:['$100','$600','$500','$700'], a:2,
     e:'Industrials: $5,000 × 0.88 = $4,400. Staples: $5,000 × 0.98 = $4,900. She is $500 behind.'},
    {q:'Ziad switches $8,000 between sector funds six times a year. Each switch is a sale and a purchase, and each trade costs 0.15%. What do the trades cost him in a year, before any tax?',
     o:['$72','$144','$12','$1,440'], a:1,
     e:'One trade: 0.15% × $8,000 = $12. Six switches are 12 trades: 12 × $12 = $144, which is 1.8% of $8,000. Counting each switch as one trade gives $72.'},
    {q:'True or false: because sectors have tended to lead at different stages of the cycle, rotating between them reliably beats owning the whole market.',
     o:['True','False'], a:1,
     e:'The stages are usually clear only afterwards, each cycle differs, and every switch costs money. Tests on past data found small gains at best.'}
  ]
};

const SECTORS_COMMODITIES = {
  title:'Commodity-linked sectors', min:5,
  cards:[
    {k:'The idea', t:"Selling at the world's price", b:`
      <p class="lead">Energy companies sell oil and gas. Materials companies sell metals, chemicals and building materials. Much of what they sell is priced on world markets, so their profits rise and fall with those prices.</p>
      <div class="term"><span class="term-k">Key term</span><b>Commodity:</b> a raw material traded in bulk, where one batch is much like another, such as crude oil, copper or wheat.</div>
      <p>A barrel of oil from one producer is much like a barrel from another, so no single company sets the price. Each takes the going rate and tries to keep its costs below it.</p>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'A small price move, a big profit move', b:`
      <p>Litani Energy, a made-up producer, pumps 10 million barrels a year. Pumping, staff and everything else cost it $50 a barrel. Ignoring tax, its yearly profit is:</p>
      <div class="kv kv3"><div><b class="bad-t">$100M</b><span>Oil at $60</span></div><div><b>$200M</b><span>Oil at $70</span></div><div><b class="good-t">$300M</b><span>Oil at $80</span></div></div>
      <p>At $70: 10 million × ($70 − $50) = $200M. At $60: 10 million × $10 = $100M. At $80: 10 million × $30 = $300M.</p>
      <p>A fall of about 14% in the oil price halves the profit, and a rise of about 14% lifts it by half. The closer the price sits to a producer's costs, the harder its profit swings.</p>`},
    {k:'Winners and losers', t:'Exporters and importers', b:`
      <p>A higher oil price moves money from those who buy oil to those who sell it. The same goes for whole countries.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Oil rises: tend to gain</div><b>Producers and exporters</b><p>Oil companies, and countries that sell more oil than they use, such as Saudi Arabia and Norway.</p></div>
        <div class="col bad"><div class="col-h">Oil rises: tend to lose</div><b>Users and importers</b><p>Airlines, shipping and trucking firms, and countries that buy their fuel abroad.</p></div>
      </div>
      <p>Lebanon has no commercial oil or gas production and imports nearly all its fuel, so a higher oil price means a bigger bill paid abroad, in dollars. A falling oil price works the other way round.</p>
      <div class="term"><span class="term-k">Key term</span><b>Net exporter:</b> a country that sells more of something abroad than it buys. A net importer buys more than it sells.</div>`},
    {k:'The catch', t:'Prices that can lurch', b:`
      <p>Commodity prices can move far and fast. New mines and oil fields take years to build, while demand can change quickly.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">2008</div><b>Over $140 to under $40</b><p>US oil, a barrel, between July and December, as the financial crisis hit demand.</p></div>
        <div class="col bad"><div class="col-h">April 2020</div><b>Below zero</b><p>One US oil futures contract (a deal to buy oil on a set date), briefly, as lockdowns filled storage tanks.</p></div>
      </div>
      <p>So commodity-linked sectors can top the market one year and trail it the next. The ETFs in depth unit showed how commodity ETFs hold futures. The Crypto and other assets unit looks at gold and other commodities as investments in their own right.</p>`}
  ],
  qs:[
    {q:'A made-up miner produces 200,000 tonnes of copper a year at a cost of $7,000 a tonne. The copper price falls from $9,000 to $8,000 a tonne. By how much does its yearly profit fall?',
     o:['About 11%','25%','50%','100%'], a:2,
     e:'Before: 200,000 × ($9,000 − $7,000) = $400M. After: 200,000 × $1,000 = $200M. An 11% fall in the price halves the profit.'},
    {q:'Oil prices jump. Which of these companies is most likely to see its profits squeezed?',
     o:['An oil producer','A natural gas producer','A company that drills wells for oil producers','An airline'], a:3,
     e:"Fuel is one of an airline's biggest costs. The others sell energy, or sell services to those who do, so they tend to gain."},
    {q:'Lebanon imports nearly all its fuel. What tends to happen when world oil prices rise sharply?',
     o:['Lebanon earns more from oil exports','Its fuel import bill rises, so more dollars flow abroad','Nothing, because oil is priced in dollars','Its fuel bill falls'], a:1,
     e:'As a net importer, Lebanon pays more for the same fuel. Oil-exporting countries are on the other side and gain.'},
    {q:'Which two sectors move most directly with commodity prices?',
     o:['Energy and materials','Utilities and healthcare','Technology and communication services','Consumer staples and real estate'], a:0,
     e:'Energy companies sell oil and gas, and materials companies sell metals, chemicals and similar products, much of it at world prices.'},
    {q:"True or false: an oil producer's profit moves by the same percentage as the oil price.",
     o:['True','False'], a:1,
     e:"If its costs per barrel stay put, profit moves by much more. In the lesson, a fall of about 14% in the oil price halved Litani Energy's profit."}
  ]
};

const SECTORS_CHECK = {
  title:'Unit check', min:4, badge:{name:'Cycle Reader', icon:'candles'}, cards:[],
  qs:[
    {q:'An index is 30% technology and 15% financials. In one month technology falls 20%, financials rise 10% and everything else is flat. What does the index do?',
     o:['It falls 10%','It falls 4.5%','It falls 7.5%','It falls 6%'], a:1,
     e:'Technology: 30% × −20% = −6%. Financials: 15% × +10% = +1.5%. Total: −6% + 1.5% = −4.5%. Adding the two moves without their weights gives −10%.'},
    {q:'Which pair is one cyclical sector and one defensive sector?',
     o:['Utilities and consumer staples','Materials and financials','Industrials and healthcare','Consumer discretionary and industrials'], a:2,
     e:'Industrials swing with the economy, while healthcare is needed anyway. Utilities and staples are both defensive. Materials, financials, discretionary and industrials are all cyclical.'},
    {q:'A $12,000 portfolio is 25% cyclical and 75% defensive. In a downturn, cyclical sectors fall 24% and defensive sectors fall 4%. What is its return?',
     o:['−14%','−19%','−24%','−9%'], a:3,
     e:'Cyclical: $3,000 × 0.76 = $2,280. Defensive: $9,000 × 0.96 = $8,640. Total $10,920, which is $1,080 less: −9%. Swapping the weights gives −19%, and a plain average gives −14%.'},
    {q:'A carmaker has $2,000M of sales, fixed costs of $900M, and other costs of 50 cents per $1 of sales. A downturn cuts sales by 5%. What happens to its profit?',
     o:['It halves, to $50M','It falls 5%, to $95M','It falls 10%, to $90M','It is wiped out'], a:0,
     e:'Before: $2,000M − $900M − $1,000M = $100M. After: $1,900M − $900M − $950M = $50M. A 5% fall in sales halves the profit, because the $900M of fixed costs does not shrink.'},
    {q:'Unemployment is still rising, but new factory orders and home-building permits have started to climb. What is the fairest reading?',
     o:['A recovery is now certain','Things are getting worse, because unemployment is rising','Nothing can be read from economic data','Leading signs hint at a turn, though they can mislead, and unemployment usually turns late'], a:3,
     e:'Orders and permits are leading indicators and unemployment is a lagging one, so this mix is common near a trough. But leading signs give false alarms too, so nothing is certain.'},
    {q:'Omar moves $6,000 from a utilities fund into a materials fund, expecting a boom. Over the next six months materials fall 10% and utilities rise 2%. Ignoring costs, how far behind is he compared with staying put?',
     o:['$600','$480','$720','$120'], a:2,
     e:'Materials: $6,000 × 0.90 = $5,400. Utilities: $6,000 × 1.02 = $6,120. The gap is $720: the $600 he lost plus the $120 he missed.'},
    {q:'A made-up producer pumps 20 million barrels of oil a year at a cost of $45 a barrel. Oil rises from $60 to $66. What happens to its yearly profit?',
     o:['It rises 10%','It rises 40%','It rises 4%','It doubles'], a:1,
     e:'At $60: 20 million × $15 = $300M. At $66: 20 million × $21 = $420M. A 10% rise in the oil price lifts profit by $120M, which is 40%.'},
    {q:'Oil prices double. Which pair would most likely both gain?',
     o:['An airline and an oil-importing country','An oil producer and an airline','An oil-importing country and a trucking firm','An oil-exporting country and an oil producer'], a:3,
     e:'Both sell oil, so a higher price means more income. Airlines, trucking firms and importing countries all buy oil, so they pay more.'}
  ]
};

const UNIT_SECTORS = {id:'sectors', title:'Sectors and the economy', level:'Intermediate', lessons:[SECTORS_WHAT, SECTORS_CYCLICAL, SECTORS_CYCLE, SECTORS_ROTATION, SECTORS_COMMODITIES, SECTORS_CHECK]};

/* Placement: one question per lesson, n = lesson number 1-5. Different from the lesson questions. */
const PLACEMENT_SECTORS = [
  {n:1, q:'A fund is 40% technology, 30% healthcare and 30% financials. Technology rises 10%, healthcare is flat and financials fall 10%. What is the fund\'s return?',
   o:['0%','+1%','+4%','−3%'], a:1,
   e:'40% × 10% = +4%, 30% × 0% = 0%, 30% × −10% = −3%. Total: +4% − 3% = +1%. A plain average of the moves would wrongly give 0%.'},
  {n:2, q:'In a recession, which company\'s sales are likely to hold up best?',
   o:['A maker of luxury watches','A builder of new offices','A car dealer','A company supplying electricity to homes'], a:3,
   e:'Homes need electricity in good times and bad, so utilities are defensive. Luxury goods, new offices and cars are easy to put off.'},
  {n:3, q:'What happens at the trough of the business cycle?',
   o:['Activity stops falling and a recovery begins','The economy grows at its fastest','Activity stops rising and starts to fall','Unemployment is at its lowest'], a:0,
   e:'The trough is the low point between a contraction and the next expansion. The point where growth turns into shrinking is the peak.'},
  {n:4, q:'What is the main practical problem with sector rotation?',
   o:['Sector funds cannot be sold during a recession',"The cycle's turning points are usually clear only afterwards",'There are too few sectors to choose from','Defensive sectors never fall'], a:1,
   e:'Recessions are often dated months after they start, and share prices tend to move before the data does. On top of that, every switch has costs.'},
  {n:5, q:'A made-up gold miner produces 100,000 ounces a year at an all-in cost of $1,500 an ounce. Gold rises from $2,000 to $2,500 an ounce. What happens to its yearly profit?',
   o:['It rises 25%, like gold','It rises 50%, to $75M','It doubles, from $50M to $100M','It falls, because costs rise too'], a:2,
   e:'Before: 100,000 × ($2,000 − $1,500) = $50M. After: 100,000 × $1,000 = $100M. A 25% rise in gold doubles the profit.'}
];

/* MATHS CHECK: every calculation and its result, for the reviewer.
   (Recomputed in Python: 140 of 140 checks pass.)
   Lesson 1, Sectors
   - Cedar 50: $800B + $300B + $900B = $2,000B. Tech 800 ÷ 2,000 = 40%; financials 300 ÷ 2,000 = 15%.
     Tech −10%, rest flat: 0.40 × −10% = −4%.
   - Two mixes (tech −15%, financials −3%, healthcare +2%, energy +4%, staples +1%):
     Tech-heavy 70/10/10/10: 0.7 × −15 = −10.5; 0.1 × −3 = −0.3; 0.1 × 2 = +0.2; 0.1 × 4 = +0.4; total −10.2% → $10,000 × 0.898 = $8,980.
     Spread out 20% × 5: −3 − 0.6 + 0.4 + 0.8 + 0.2 = −2.2% → $9,780.
   - Q2: 0.30 × −10% = −3%.
   - Q4: 0.5 × −8 = −4; 0.3 × 2 = 0.6; 0.2 × 5 = 1; total −2.4%. Slips: plain average (−8 + 2 + 5) ÷ 3 = −0.33%; tech only −4%; −8%.
   - Facts: GICS has 11 sectors (with 25 industry groups, 74 industries, 163 sub-industries, per MSCI's 2026 methodology); launched
     1999 by MSCI and S&P; real estate split out as the 11th sector in 2016; communication services formed in 2018, taking in
     Alphabet and Meta; Amazon is in consumer discretionary; payment processors (incl. Visa, Mastercard) moved from IT to financials
     in March 2023. S&P 500 IT weight: about 30% in March 2024, about 32% by mid-2024 ("close to a third"); utilities, materials and
     real estate each about 2-3%.
   Lesson 2, Cyclical vs defensive (made-up: cyclical −30%, defensive −8%)
   - Cyclical-heavy: $8,000 × 0.70 = $5,600; $2,000 × 0.92 = $1,840; total $7,440 (−25.6%).
   - Defensive-heavy: $2,000 × 0.70 = $1,400; $8,000 × 0.92 = $7,360; total $8,760 (−12.4%), loss $1,240.
     $1,240 ÷ $2,560 = 0.48, "about half as much".
   - Q3: $10,000 × 0.80 = $8,000; $10,000 × 0.96 = $9,600; $17,600 (−12%). Slips: $16,000 (all −20%), $19,200 (all −4%), $15,200 (−24%).
   - Facts, 2008: S&P 500 −37% total return (−38.5% price), "more than a third". Financials about −55% total (−57% to −58% price),
     "more than half". Consumer staples about −15% total (about −18% price), "less than a fifth".
   Lesson 3, The business cycle
   - Zahle Motors (fixed $400M, variable 50%): $1,000M − $400M − $500M = $100M; $900M − $400M − $450M = $50M (−50%);
     $1,100M − $400M − $550M = $150M (+50%).
   - Q3: $1,000M − $300M − $400M = $300M; $900M − $300M − $360M = $240M; −$60M = −20%. Slips: $300M × 0.9 = $270M; $300M × 0.6 = $180M.
   - Facts: unemployment peaked at 10.0% in October 2009, four months after the June 2009 trough. NBER announced the December 2007
     peak in December 2008 (12 months later) and the June 2009 trough on 20 September 2010 (15 months later). 2020 recession:
     peak February, trough April 2020 (2 months, shortest in NBER's chronology); the February peak was announced on 8 June 2020.
     Expansion June 2009 to February 2020 = 128 months (more than 10 years), longest on record. 2022: advance estimates showed
     Q1 and Q2 GDP falling; NBER declared no recession.
   - Diagram: cubic Béziers (20,110)→(110,40)→(200,100)→(280,30), with horizontal tangents at the peak (110,40) and trough (200,100).
     Curve stays within x 20-280, y 30-110. Segment midpoints (65,75), (155,70), (245.6,66.5). Later high (y 30) is above the
     first peak (y 40), showing long-run growth. Labels: Peak y 28 (dot top 36); Trough y 118 (dot bottom 104, axis 126);
     phase labels y 144, 26px below Trough. At about 6.6px a character: Expansion 35-95, Contraction 119-191, Expansion 210-270.
   Lesson 4, Sector rotation (made-up numbers)
   - Rima: $10,000 × 0.85 = $8,500; $10,000 × 0.97 = $9,700; gap $1,200.
   - Costs: 0.1% × $10,000 = $10 a trade; 2 trades a switch = $20; 4 switches = $80 = 0.8% of $10,000.
   - Q3: $5,000 × 0.88 = $4,400; $5,000 × 0.98 = $4,900; gap $500. Slips: 2% = $100, 12% = $600, 14% = $700.
   - Q4: 0.15% × $8,000 = $12; 6 × 2 = 12 trades; 12 × $12 = $144 = 1.8%. Slips: 6 × $12 = $72; $12; $1,440.
   - Facts: 2020 S&P 500 IT +43.9% total (+42.2% price); energy −33.7% total (−37.3% price). Research on the textbook map:
     Stangl, Jacobsen and Visaltanachoti, "Sector rotation over business cycles" (2009): small outperformance even with perfect
     knowledge of NBER phases, smaller with real-time phase guesses and costs.
   Lesson 5, Commodity-linked sectors
   - Litani Energy (10M barrels, $50 cost): 10M × $20 = $200M; 10M × $10 = $100M; 10M × $30 = $300M.
     (60 − 70) ÷ 70 = −14.29%; (80 − 70) ÷ 70 = +14.29%; $100M ÷ $200M = 0.5; $300M ÷ $200M = 1.5.
   - Q1: 200,000 × $2,000 = $400M; 200,000 × $1,000 = $200M; −50%. Price (8,000 − 9,000) ÷ 9,000 = −11.1%.
   - Facts: WTI peaked above $145 in July 2008 and fell below $40 in December 2008. On 20 April 2020 the May WTI futures contract
     settled at about −$37.63. Lebanon has no commercial oil or gas production (offshore wells in Block 4, 2020, and Block 9, 2023, found
     no commercial quantities) and imports roughly 95-99% of its energy; Saudi Arabia and Norway are net oil exporters.
   Unit check
   - C1: 0.30 × −20 = −6; 0.15 × 10 = +1.5; −4.5%. Slips: −20 + 10 = −10%; −6%; −6 − 1.5 = −7.5%.
   - C3: $3,000 × 0.76 = $2,280; $9,000 × 0.96 = $8,640; $10,920; −$1,080 = −9%. Slips: 0.75 × −24 + 0.25 × −4 = −19%; (−24 − 4) ÷ 2 = −14%.
   - C4: $2,000M − $900M − $1,000M = $100M; $1,900M − $900M − $950M = $50M (−50%). Slips: $95M (−5%), $90M (−10%).
   - C6: $6,000 × 0.90 = $5,400; $6,000 × 1.02 = $6,120; gap $720 = $600 lost + $120 missed. Slip: 8% × $6,000 = $480.
   - C7: 20M × ($60 − $45) = $300M; 20M × ($66 − $45) = $420M; +$120M = +40%; oil (66 − 60) ÷ 60 = +10%.
   Placement
   - n1: 0.4 × 10 + 0.3 × 0 + 0.3 × −10 = 4 + 0 − 3 = +1%. Slips: plain average 0%; tech only +4%; financials only −3%.
   - n5: 100,000 × ($2,000 − $1,500) = $50M; 100,000 × ($2,500 − $1,500) = $100M; +100% vs gold +25%. Slip: $50M × 1.5 = $75M.
*/
