/* ---------- Health-check ratios ---------- */
const HEALTH_LIQUIDITY = {
  title:'Liquidity', min:4,
  cards:[
    {k:'The idea', t:'Can it pay the bills this year?', b:`
      <p class="lead">A company can be profitable and still be unable to pay a supplier on Friday. Liquidity ratios compare what the company could turn into cash soon with what it has to pay out soon.</p>
      <p>Our test case for the whole unit is Batroun Bikes, a made-up chain of bike shops.</p>
      <div class="term"><span class="term-k">Key term</span><b>Current ratio:</b> current assets ÷ current liabilities. Current liabilities are the bills and debts due within a year. A ratio of 1.5 means $1.50 of near-term assets for every $1 due.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:"Batroun Bikes' three liquidity ratios", b:`
      <p>Batroun's current assets are $4M of cash, $6M owed by customers and $10M of unsold bikes and parts: $20M in all. Its current liabilities are $12M.</p>
      <div class="score"><div><b>1.67</b><span>Current ratio</span></div><div><b>0.83</b><span>Quick ratio</span></div><div><b class="bad-t">0.33</b><span>Cash ratio</span></div></div>
      <p>Current ratio: $20M ÷ $12M = 1.67.</p>
      <p>Quick ratio: ($4M + $6M) ÷ $12M = 0.83. Unsold stock is left out.</p>
      <p>Cash ratio: $4M ÷ $12M = 0.33. Only cash counts.</p>
      <div class="term"><span class="term-k">Key term</span><b>Quick ratio:</b> (cash + money owed by customers) ÷ current liabilities. Stock can take months to sell, and may sell at a discount, so this version leaves it out.</div>`},
    {k:'The catch', t:'Same bills, different quality of cover', b:`
      <p>Zahle Cycles, another made-up shop chain, has $6M of cash, $7M owed by customers and only $2M of stock. That is $15M of current assets against $10M of current liabilities.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Batroun Bikes</div>
          <p>Half its cover is unsold stock</p>
          <div class="pf-r">Current ratio<b class="mono">1.67</b></div>
          <div class="pf-r">Quick ratio<b class="mono bad-t">0.83</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Zahle Cycles</div>
          <p>Mostly cash and customer bills</p>
          <div class="pf-r">Current ratio<b class="mono">1.5</b></div>
          <div class="pf-r">Quick ratio<b class="mono good-t">1.3</b></div>
        </div>
      </div>
      <p>Zahle: $15M ÷ $10M = 1.5, and ($6M + $7M) ÷ $10M = 1.3. Batroun looks safer on the current ratio, but it depends on selling its stock to meet its bills. Zahle is closer to being able to pay them today.</p>`},
    {k:'The limit', t:'A snapshot, with no single right answer', b:`
      <p>These ratios use balance sheet figures from one day. Cash that arrives next week, or a bill due tomorrow, isn't visible in them.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Low can be normal</div><b>Paid at the till</b><p>A business whose customers pay on the spot and whose suppliers wait can run with a ratio below 1 and be fine.</p></div>
        <div class="col bad"><div class="col-h">High can be wasteful</div><b>Idle or slow assets</b><p>A very high ratio may mean cash sitting unused, or stock that isn't selling.</p></div>
      </div>
      <p>The useful comparisons are against the same company's past, and against similar companies.</p>`}
  ],
  qs:[
    {q:'A company has current assets of $30M and current liabilities of $20M. What is its current ratio?',
     o:['0.67','1.0','1.5','10'], a:2,
     e:'Current ratio = current assets ÷ current liabilities = $30M ÷ $20M = 1.5. The flipped figure, 0.67, divides the wrong way round.'},
    {q:'A company has $5M of cash, $7M owed by customers, $18M of inventory and $15M of current liabilities. What is its quick ratio?',
     o:['2.0','1.2','0.33','0.8'], a:3,
     e:'Quick ratio = ($5M + $7M) ÷ $15M = 0.8. Including the inventory would give $30M ÷ $15M = 2.0, and cash alone gives 0.33.'},
    {q:'Why does the quick ratio leave out inventory?',
     o:['Inventory is a long-term asset','Stock can take time to sell and may sell at a discount','Inventory is not an asset at all','Stock is always worth more than its book value'], a:1,
     e:'Inventory is a current asset, but turning it into cash depends on finding buyers, and the price may drop.'},
    {q:'A company has $3M of cash and $12M of current liabilities. What is its cash ratio?',
     o:['4.0','0.75','0.25','3.0'], a:2,
     e:'Cash ratio = $3M ÷ $12M = 0.25.'},
    {q:'A company has current assets of $10M and current liabilities of $5M, a ratio of 2.0. It uses $3M of cash to pay supplier bills. What is the ratio afterwards?',
     o:['It stays at 2.0','3.5','1.4','0.7'], a:1,
     e:'Current assets fall to $7M and current liabilities fall to $2M. $7M ÷ $2M = 3.5. The ratio rose, though the company has less cash.'}
  ]
};

const HEALTH_LEVERAGE = {
  title:'Leverage and interest cover', min:5,
  cards:[
    {k:'The idea', t:'Debt, after counting the cash', b:`
      <p class="lead">The Reading company accounts unit introduced debt-to-equity and interest coverage. Two refinements sharpen the picture: count the cash a company holds against its debt, and measure debt against the profit it earns each year.</p>
      <p>Meet Tripoli Tiles, a made-up tile maker.</p>
      <div class="term"><span class="term-k">Key term</span><b>Net debt:</b> total debt − cash. It can be negative, which means the company holds more cash than it owes.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'How many years of earnings is the debt?', b:`
      <p>Tripoli has $60M of debt and $20M of cash. Its EBITDA is $20M.</p>
      <div class="term"><span class="term-k">Key term</span><b>EBITDA:</b> earnings before interest, tax, depreciation and amortisation. Think of it as operating profit with depreciation and amortisation added back.</div>
      <div class="kv kv3"><div><b>$40M</b><span>Net debt</span></div><div><b>$20M</b><span>EBITDA</span></div><div><b class="good-t">2.0×</b><span>Net debt ÷ EBITDA</span></div></div>
      <p>Net debt: $60M − $20M = $40M. Net debt ÷ EBITDA: $40M ÷ $20M = 2.0×.</p>
      <p>That reads as "about two years of EBITDA to clear the net debt". It's a rough yardstick, since tax, new machines and dividends all take a share of the cash.</p>`},
    {k:'Two kinds of cover', t:'EBITDA cover or EBIT cover?', b:`
      <p>Tripoli's interest bill is $4M and its depreciation is $8M. Interest cover can be measured on either profit line.</p>
      <div class="split">
        <div class="col good"><div class="col-h">EBITDA ÷ interest</div><b class="mono">$20M ÷ $4M = 5×</b><p>Looks comfortable, but it ignores that machines wear out.</p></div>
        <div class="col good"><div class="col-h">EBIT ÷ interest</div><b class="mono">$12M ÷ $4M = 3×</b><p>EBIT (earnings before interest and tax) is $20M − $8M of depreciation. Stricter, because replacing worn-out kit is a real cost.</p></div>
      </div>
      <p>The same company can show 5× or 3× depending on the version, so check which one a website or report is using before comparing.</p>`},
    {k:'The catch', t:'A heavier load, and a thinner cushion', b:`
      <p>Sidon Steel, also made up, has $90M of debt, $5M of cash, EBITDA of $17M, depreciation of $8M and interest of $9M.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Tripoli Tiles</div>
          <p>Net debt $40M</p>
          <div class="pf-r">Net debt ÷ EBITDA<b class="mono good-t">2.0×</b></div>
          <div class="pf-r">EBIT cover<b class="mono good-t">3×</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Sidon Steel</div>
          <p>Net debt $85M</p>
          <div class="pf-r">Net debt ÷ EBITDA<b class="mono bad-t">5.0×</b></div>
          <div class="pf-r">EBIT cover<b class="mono bad-t">1.0×</b></div>
        </div>
      </div>
      <p>Sidon: $90M − $5M = $85M, and $85M ÷ $17M = 5.0×. EBIT is $17M − $8M = $9M, and $9M ÷ $9M = 1.0×. Every dollar of operating profit goes on interest.</p>
      <p>Counting cash against debt assumes the cash is free to use. A company may need much of it to run day to day.</p>`}
  ],
  qs:[
    {q:'A company has $80M of debt and $25M of cash. What is its net debt?',
     o:['$105M','$25M','$80M','$55M'], a:3,
     e:'Net debt = debt − cash = $80M − $25M = $55M.'},
    {q:'A company has net debt of $45M and EBITDA of $15M. What is its net debt ÷ EBITDA?',
     o:['0.33×','3.0×','30×','60×'], a:1,
     e:'$45M ÷ $15M = 3.0×. The 0.33× answer divides the wrong way round.'},
    {q:'A company has EBITDA of $36M, depreciation of $12M and interest of $9M. What is its EBIT interest cover?',
     o:['4.0×','5.3×','1.3×','2.7×'], a:3,
     e:'EBIT = $36M − $12M = $24M. $24M ÷ $9M = 2.67, about 2.7×. The 4.0× figure uses EBITDA, and 5.3× adds the depreciation twice.'},
    {q:'A company has $30M of cash and $20M of debt. What does its net debt of −$10M tell us?',
     o:['It owes $10M more than it holds','The figures must contain a mistake','It holds more cash than debt, a net cash position of $10M','It has no debt at all'], a:2,
     e:'$20M − $30M = −$10M. The company still has debt, but its cash is larger.'},
    {q:'Two companies have the same net debt ÷ EBITDA. Which can usually carry that debt more safely?',
     o:['The one whose sales swing with the economy','The one with the steadier, more predictable sales','Neither, because the ratio settles it','The one with the most shareholders'], a:1,
     e:"Predictable profits make it likelier that interest will be covered in a bad year. A ratio on its own can't show that."}
  ]
};

const HEALTH_TURNOVER = {
  title:'Turnover and efficiency', min:4,
  cards:[
    {k:'The idea', t:'How hard are the assets working?', b:`
      <p class="lead">Two shops with the same sales can be run very differently. Turnover ratios ask how often a company sells through its stock, collects what customers owe, and generates sales from what it owns.</p>
      <p>This lesson uses a 360-day year to keep the sums tidy. Many analysts use 365, and the answers shift only slightly.</p>
      <div class="term"><span class="term-k">Key term</span><b>Inventory turnover:</b> cost of goods sold ÷ average inventory. It shows how many times a year the stock sells out and is replaced.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:"Batroun Bikes' turnover", b:`
      <p>Batroun's year: revenue $60M, cost of goods sold $36M. Over the year its inventory averaged $9M, the money owed by customers averaged $5M, and total assets averaged $40M.</p>
      <div class="kv"><div><b>4×</b><span>Inventory turnover</span></div><div><b>90</b><span>Days of stock</span></div><div><b>30</b><span>Days to collect</span></div><div><b>1.5×</b><span>Asset turnover</span></div></div>
      <p>Inventory: $36M ÷ $9M = 4×, and 360 ÷ 4 = 90 days of stock.</p>
      <p>Customers: $60M ÷ $5M = 12×, and 360 ÷ 12 = 30 days for customers to pay.</p>
      <p>Assets: $60M ÷ $40M = 1.5. Each $1 of assets produced $1.50 of sales.</p>
      <div class="term"><span class="term-k">Key term</span><b>Days sales outstanding:</b> 360 ÷ (revenue ÷ average money owed by customers). It's the typical number of days customers take to pay. <b>Asset turnover</b> is revenue ÷ average total assets.</div>`},
    {k:'In practice', t:'Faster is not automatically better', b:`
      <p>Zahle Cycles has cost of goods sold of $20M and average inventory of $2M. That is 10 turns a year, or 36 days of stock.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Zahle: 10×</div><b>Stock moves fast</b><p>Less money sits on shelves, and there's less risk of stale stock.</p></div>
        <div class="col bad"><div class="col-h">Too lean?</div><b>Empty shelves</b><p>Run stock too low and customers who find nothing to buy go elsewhere.</p></div>
      </div>
      <p>Batroun's 4× could be a weakness, or it could reflect pricier bikes that naturally sell slowly. Turnover differs a lot by business, so it's best compared with similar companies and with the company's own past.</p>`},
    {k:'The catch', t:'Use cost, and watch the trend', b:`
      <p>Inventory is recorded at cost, so the ratio divides by cost of goods sold. Using revenue would include the profit markup and make stock look as if it moves faster than it does.</p>
      <p>The direction matters more than one year. Suppose a company's inventory turnover slips from 6× to 5× to 4× while its sales stay flat:</p>
      <div class="score"><div><b>6×</b><span>Year 1</span></div><div><b>5×</b><span>Year 2</span></div><div><b class="bad-t">4×</b><span>Year 3</span></div></div>
      <p>Stock is piling up faster than it sells. That may mean it ordered too much, or the products are going out of favour and may need discounts later. It's a prompt to ask why, not proof of a problem.</p>`}
  ],
  qs:[
    {q:'A company has cost of goods sold of $90M and average inventory of $15M. What is its inventory turnover?',
     o:['0.17×','15×','6×','75×'], a:2,
     e:'$90M ÷ $15M = 6×. The 0.17× answer divides the wrong way round.'},
    {q:'A grocer turns its inventory over 24 times a year. Using a 360-day year, about how long does stock sit before it sells?',
     o:['15 days','24 days','30 days','90 days'], a:0,
     e:'360 ÷ 24 = 15 days.'},
    {q:'A company has revenue of $48M and an average of $6M owed by customers. Using a 360-day year, how many days do customers take to pay?',
     o:['6 days','8 days','288 days','45 days'], a:3,
     e:'$48M ÷ $6M = 8 turns, and 360 ÷ 8 = 45 days.'},
    {q:'A company has revenue of $150M and average total assets of $100M. What is its asset turnover?',
     o:['0.67×','1.5×','50×','15×'], a:1,
     e:'$150M ÷ $100M = 1.5. Each $1 of assets produced $1.50 of sales.'},
    {q:"A company's inventory turnover falls from 8× to 5× while its sales stay flat. What is the most sensible reading?",
     o:['Customers are paying faster','Stock is selling more quickly','It is taking longer to sell its stock, which is worth looking into','The company has more cash'], a:2,
     e:'Fewer turns with flat sales means more stock is sitting around. There may be an innocent reason, but it needs explaining.'}
  ]
};

const HEALTH_WORKING_CAPITAL = {
  title:'Working capital and the cash cycle', min:5,
  cards:[
    {k:'The idea', t:'Cash stuck in the middle', b:`
      <p class="lead">A shop pays for stock, waits to sell it, then waits again for the customer to pay. Meanwhile its own suppliers want paying. The short-term cushion that has to bridge that gap is the company's working capital.</p>
      <div class="term"><span class="term-k">Key term</span><b>Working capital:</b> current assets − current liabilities. It's the short-term cushion the business runs on day to day.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'The cash conversion cycle', b:`
      <p>From the Liquidity lesson, Batroun Bikes has $20M of current assets and $12M of current liabilities, so its working capital is $20M − $12M = $8M.</p>
      <p>The cash conversion cycle measures the gap in days. Batroun holds stock for 90 days and collects from customers in 30 (both from the last lesson). Its suppliers are paid in 40 days: average bills owed to suppliers of $4M, divided by $36M of cost of goods sold, times 360.</p>
      <div class="kv kv3"><div><b>90</b><span>Days of stock</span></div><div><b>+ 30</b><span>Days to collect</span></div><div><b class="good-t">− 40</b><span>Days to pay</span></div></div>
      <p>90 + 30 − 40 = <b>80 days</b>.</p>
      <div class="term"><span class="term-k">Key term</span><b>Cash conversion cycle:</b> days of stock + days to collect − days to pay suppliers. It's how long, on average, a dollar spent on stock stays out of reach before it comes back as cash.</div>`},
    {k:'Why it matters', t:'What a day of the cycle costs', b:`
      <p>Batroun's cost of goods sold is $36M a year, or $36M ÷ 360 = $0.1M a day. Holding 10 fewer days of stock would free up 10 × $0.1M = <b class="good-t">$1M</b>. Stock would drop from $9M to $8M.</p>
      <p>Growth works the other way. Suppose stock, customer bills and supplier bills all grow in line with a 25% rise in sales:</p>
      <div class="kv kv3"><div><b>$10M</b><span>Net cash tied up now</span></div><div><b>$12.5M</b><span>After growth</span></div><div><b class="bad-t">$2.5M</b><span>Extra cash needed</span></div></div>
      <p>Today: $9M stock + $5M owed by customers − $4M owed to suppliers = $10M. Times 1.25 = $12.5M. A growing company has to fund that extra $2.5M before the sales cash comes in, which is how a profitable company can run short.</p>`},
    {k:'The catch', t:'A short cycle is not always a strong one', b:`
      <p>Chouf Mart, a made-up grocery chain, holds stock for 20 days, collects from customers in 2 days (most pay at the till) and pays suppliers in 45 days.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Chouf Mart</div><b class="mono">20 + 2 − 45 = −23</b><p>A negative cycle: customers' cash arrives before suppliers must be paid.</p></div>
        <div class="col bad"><div class="col-h">A warning</div><b>Stretching suppliers</b><p>Paying suppliers later shortens the cycle, but suppliers may cut credit or raise prices.</p></div>
      </div>
      <p>A negative cycle comes from the way some businesses work. It isn't strength or weakness by itself. And the year-end figures can miss seasonal peaks, when stock and bills swell for a few weeks.</p>`}
  ],
  qs:[
    {q:'A company has current assets of $45M and current liabilities of $30M. What is its working capital?',
     o:['$75M','$15M','$30M','$1.5M'], a:1,
     e:'Working capital = current assets − current liabilities = $45M − $30M = $15M.'},
    {q:'A company holds stock for 50 days, collects from customers in 40 days and pays suppliers in 30 days. What is its cash conversion cycle?',
     o:['120 days','20 days','40 days','60 days'], a:3,
     e:'50 + 40 − 30 = 60 days. Adding all three would give 120.'},
    {q:'A company has average bills owed to suppliers of $6M and cost of goods sold of $72M. Using a 360-day year, how many days does it take to pay suppliers?',
     o:['12 days','60 days','30 days','72 days'], a:2,
     e:'$6M ÷ $72M × 360 = 30 days.'},
    {q:'A company has cost of goods sold of $54M. Using a 360-day year, how much cash is released if it holds 10 fewer days of stock?',
     o:['$5.4M','$0.15M','$15M','$1.5M'], a:3,
     e:'$54M ÷ 360 = $0.15M a day. 10 days × $0.15M = $1.5M.'},
    {q:"A company's sales are flat, but its cash conversion cycle lengthens from 45 to 75 days. What does this mean?",
     o:['Less money is tied up in the business','More cash is stuck for longer in each cycle, so more funding is needed','Its profit must have risen','Nothing, as long as profit is unchanged'], a:1,
     e:"Thirty extra days means more money tied up in stock and customer bills, even though sales haven't changed."}
  ]
};

const HEALTH_QUALITY = {
  title:'Quality of earnings', min:5,
  cards:[
    {k:'The idea', t:'Is the profit real and repeatable?', b:`
      <p class="lead">Two companies can report the same profit and deserve different levels of trust. Quality of earnings asks whether profit is backed by cash, comes from normal trading, and is likely to happen again.</p>
      <div class="term"><span class="term-k">Key term</span><b>Cash conversion:</b> operating cash flow ÷ net income. Above 1 means the company collected more cash than the profit it reported; well below 1 means profit isn't arriving as cash.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Same profit, different cash', b:`
      <p>Two made-up companies each report $10M of net income.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Shouf Lamps</div>
          <p>Net income $10M<br>Operating cash flow $11M</p>
          <div class="pf-r">Cash conversion<b class="mono good-t">1.1</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Akkar Appliances</div>
          <p>Net income $10M<br>Operating cash flow $3M</p>
          <div class="pf-r">Cash conversion<b class="mono bad-t">0.3</b></div>
        </div>
      </div>
      <p>$11M ÷ $10M = 1.1 and $3M ÷ $10M = 0.3. Akkar's profit is mostly on paper so far. One weak year may have a harmless cause, like a large order not yet paid, so the pattern over several years counts for more.</p>`},
    {k:'Where the gap hides', t:"Akkar's customer bills", b:`
      <p>Akkar's revenue grew from $50M to $60M, up 20%. The money owed to it by customers grew from $5M to $8M, up 60%.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Last year</div><b class="mono">$5M ÷ $50M × 360</b><p>Customers took 36 days to pay.</p></div>
        <div class="col bad"><div class="col-h">This year</div><b class="mono">$8M ÷ $60M × 360</b><p>Customers now take 48 days to pay.</p></div>
      </div>
      <p>A sale counts as revenue when it's made, not when it's paid. If bills grow much faster than sales, customers may be paying later, or the company may have loosened its credit terms to push sales. Either way, some of the profit hasn't turned into cash yet.</p>`},
    {k:'In practice', t:'Choices inside the accounts', b:`
      <p>Companies have some freedom in how they record costs. Take Pine Pixels, a made-up software firm. Before counting a $4M cost of building a new product, its profit is $10M.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Expense it now</div>
          <p>$10M − $4M</p>
          <div class="pf-r">Profit<b class="mono">$6M</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Capitalise it</div>
          <p>$10M − $1M (one quarter of $4M)</p>
          <div class="pf-r">Profit<b class="mono">$9M</b></div>
        </div>
      </div>
      <p>To capitalise a cost is to record it as an asset and spread it over several years, here 4. Cash spent is $4M either way. The rules allow this in certain cases, so it isn't wrong in itself. What counts is whether the policy is consistent, and how it compares with similar companies.</p>`}
  ],
  qs:[
    {q:'A company reports net income of $20M and operating cash flow of $24M. What is its cash conversion?',
     o:['0.83','4.0','1.2','44'], a:2,
     e:'$24M ÷ $20M = 1.2. The 0.83 figure divides the wrong way round.'},
    {q:'A company reports net income of $15M and operating cash flow of $6M. What is its cash conversion?',
     o:['2.5','0.4','9','0.6'], a:1,
     e:'$6M ÷ $15M = 0.4. Only 40 cents of cash arrived for each $1 of profit.'},
    {q:"A company's revenue rose 10% but the money owed by customers rose 40%. What is the best reading?",
     o:['Cash flow must be rising faster than sales','Customers may be paying later, or credit terms were loosened, which is worth looking into','The sales are certainly fake','Nothing, because receivables always grow faster than sales'], a:1,
     e:"Customer bills would normally grow roughly in line with sales. Much faster growth suggests profit is arriving as cash more slowly. It needs explaining, but it doesn't prove wrongdoing."},
    {q:'A firm spends $6M developing a product. If it capitalises the cost and spreads it evenly over 3 years instead of expensing it at once, by how much is its first-year profit higher?',
     o:['$6M','$2M','$4M','$0'], a:2,
     e:'Expensing: $6M comes off profit in year 1. Capitalising: $6M ÷ 3 = $2M. Profit is $6M − $2M = $4M higher. The cash spent is the same.'},
    {q:"True or false: a cash conversion of 0.6 in a single year proves that a company's profits are fake.",
     o:['True','False'], a:1,
     e:"One weak year can have an innocent cause, such as a big order that hasn't been paid yet. A repeated pattern over several years is more telling."}
  ]
};

const HEALTH_CHECK = {
  title:'Unit check', min:4, badge:{name:'Ratio Inspector', icon:'scale'}, cards:[],
  qs:[
    {q:'A company has $6M of cash, $9M owed by customers, $15M of inventory and $20M of current liabilities. What are its current ratio and quick ratio?',
     o:['1.5 and 0.3','1.5 and 0.75','0.75 and 1.5','2.0 and 0.75'], a:1,
     e:'Current assets = $6M + $9M + $15M = $30M, so current ratio = $30M ÷ $20M = 1.5. Quick ratio = ($6M + $9M) ÷ $20M = 0.75. The 0.3 figure is cash alone.'},
    {q:'A company has $150M of debt, $30M of cash, EBITDA of $40M, depreciation of $10M and interest of $12M. What are its net debt ÷ EBITDA and EBIT interest cover?',
     o:['3.75× and 2.5×','3.0× and 3.3×','4.0× and 2.5×','3.0× and 2.5×'], a:3,
     e:'Net debt = $150M − $30M = $120M, and $120M ÷ $40M = 3.0×. EBIT = $40M − $10M = $30M, and $30M ÷ $12M = 2.5×. 3.75× ignores the cash; 3.3× uses EBITDA for the cover; 4.0× divides by EBIT.'},
    {q:'A company has cost of goods sold of $120M, revenue of $150M and average inventory of $20M. Using a 360-day year, what are its inventory turnover and days of stock?',
     o:['7.5× and 48 days','6× and 60 days','6× and 6 days','3× and 120 days'], a:1,
     e:'Turnover uses cost of goods sold: $120M ÷ $20M = 6×, and 360 ÷ 6 = 60 days. Using revenue would give 7.5× and 48 days, which is the slip to avoid.'},
    {q:'A company holds stock for 75 days, collects from customers in 45 days and pays suppliers in 60 days. What is its cash conversion cycle?',
     o:['180 days','−30 days','15 days','60 days'], a:3,
     e:'75 + 45 − 60 = 60 days. Adding all three gives 180, and subtracting both from the stock days gives −30.'},
    {q:"A company's stock ($30M), customer bills ($20M) and supplier bills ($10M) all grow 20% as sales grow. How much extra cash does it need to fund this?",
     o:['$10M','$12M','$8M','$48M'], a:2,
     e:'Net cash tied up now: $30M + $20M − $10M = $40M. After 20% growth: $48M. The extra is $8M. Forgetting the supplier bills gives $10M.'},
    {q:'A company has reported cash conversion near 0.5 for three years, and its customer bills keep growing faster than its sales. What is the fairest comment?',
     o:['Its profit is only partly turning into cash, which is worth investigating','Its earnings are definitely fraudulent','Nothing here matters, since profit is positive','Its liquidity must be excellent'], a:0,
     e:"A repeated shortfall plus slower collection is a quality-of-earnings flag. It doesn't prove wrongdoing, but it deserves an explanation."},
    {q:'A grocery chain has a current ratio of 0.8. Customers pay at the till, and the chain pays suppliers weeks after delivery. Which is the fairest comment?',
     o:['Any ratio below 1 means it will fail','A ratio below 1 can be normal in this kind of business, so check the trend and the cash','It must have too much stock','The ratio is meaningless for any company'], a:1,
     e:"When cash comes in before bills fall due, a low current ratio isn't unusual. The trend, and whether cash keeps pace, tell more than the one figure."},
    {q:'A firm capitalises a $9M cost and spreads it evenly over 3 years instead of expensing it at once. By how much is its first-year profit higher?',
     o:['$3M','$9M','$12M','$6M'], a:3,
     e:'Expensing: $9M off profit. Capitalising: $9M ÷ 3 = $3M. The difference is $9M − $3M = $6M. The cash spent is the same either way.'}
  ]
};

const UNIT_HEALTH = {id:'health', title:'Health-check ratios', level:'Vault', lessons:[HEALTH_LIQUIDITY, HEALTH_LEVERAGE, HEALTH_TURNOVER, HEALTH_WORKING_CAPITAL, HEALTH_QUALITY, HEALTH_CHECK]};

/* Vault unit: no placement questions. */

/* MATHS CHECK: every calculation and its result, for the reviewer. All recomputed in Python (360-day year used for all day counts).
   Lesson 1: Batroun CA 4+6+10 = 20, CL 12: current 1.667, quick 10/12 = 0.833, cash 4/12 = 0.333.
     Zahle CA 6+7+2 = 15, CL 10: current 1.5, quick 13/10 = 1.3.
     Q1 30/20 = 1.5; Q2 (5+7)/15 = 0.8 (all CA 30/15 = 2.0, cash 5/15 = 0.33, 18/15 = 1.2 unused); Q4 3/12 = 0.25;
     Q5 CA 10-3 = 7, CL 5-3 = 2: 7/2 = 3.5 (before 10/5 = 2.0; 7/5 = 1.4; 7/10 = 0.7).
   Lesson 2: Tripoli net debt 60-20 = 40; 40/20 = 2.0; EBITDA cover 20/4 = 5; EBIT 20-8 = 12, 12/4 = 3.
     Sidon net debt 90-5 = 85; 85/17 = 5.0; EBIT 17-8 = 9; 9/9 = 1.0.
     Q1 80-25 = 55; Q2 45/15 = 3.0; Q3 EBIT 36-12 = 24, 24/9 = 2.667 (36/9 = 4.0; (36+12)/9 = 5.33; 12/9 = 1.33); Q4 20-30 = -10.
   Lesson 3: Batroun 36/9 = 4, 360/4 = 90; 60/5 = 12, 360/12 = 30; 60/40 = 1.5. Zahle 20/2 = 10, 360/10 = 36.
     Q1 90/15 = 6 (15/90 = 0.167); Q2 360/24 = 15; Q3 48/6 = 8, 360/8 = 45 (48*6 = 288 distractor); Q4 150/100 = 1.5 (100/150 = 0.667).
   Lesson 4: WC 20-12 = 8; DPO 4/36*360 = 40; CCC 90+30-40 = 80; daily COGS 36/360 = 0.1, 10 days = 1.0 (9 -> 8);
     net tied up 9+5-4 = 10; x1.25 = 12.5; extra 2.5. Chouf Mart 20+2-45 = -23.
     Q1 45-30 = 15; Q2 50+40-30 = 60 (sum 120); Q3 6/72*360 = 30 (72/6 = 12); Q4 54/360 = 0.15, x10 = 1.5.
   Lesson 5: 11/10 = 1.1; 3/10 = 0.3. Akkar revenue 50 -> 60 = +20%; receivables 5 -> 8 = +60%; 5/50*360 = 36, 8/60*360 = 48.
     Pine Pixels 10-4 = 6; capitalised over 4 years 4/4 = 1, 10-1 = 9.
     Q1 24/20 = 1.2 (20/24 = 0.833); Q2 6/15 = 0.4; Q4 6 expensed vs 6/3 = 2: higher by 4.
   Unit check: Q1 30/20 = 1.5, 15/20 = 0.75, 6/20 = 0.3. Q2 net debt 120, 120/40 = 3.0, 150/40 = 3.75, EBIT 30, 30/12 = 2.5, 40/12 = 3.33, 120/30 = 4.0.
     Q3 120/20 = 6, 360/6 = 60; revenue basis 150/20 = 7.5, 360/7.5 = 48. Q4 75+45-60 = 60 (180; 75-45-60 = -30).
     Q5 30+20-10 = 40, x1.2 = 48, extra 8 (without supplier bills: 50 x 0.2 = 10). Q8 9 - 9/3 = 6.
*/
