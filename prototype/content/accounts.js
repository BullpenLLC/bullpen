/* ---------- Reading company accounts ---------- */
const U6_INCOME_STATEMENT = {
  title:'The income statement', min:5,
  cards:[
    {k:'The idea', t:'Where the profit comes from', b:`
      <p class="lead">Companies listed on a stock exchange publish their accounts regularly. The income statement is the place to start: it shows the money that came in over a period, and how much was left after each kind of cost.</p>
      <p>All through this unit we'll follow Cedar Coffee Co., a made-up chain of coffee shops that also sells bags of beans to supermarkets.</p>
      <div class="term"><span class="term-k">Key term</span><b>Income statement:</b> a report of a company's revenue, costs and profit over a period, such as a year. It's also called the profit and loss statement, or P&amp;L.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:"Cedar Coffee's year, step by step", b:`
      <p>Each step takes away one more kind of cost. Here is Cedar's last year:</p>
      <div class="kv"><div><b>$50M</b><span>Revenue</span></div><div><b>$30M</b><span>Gross profit</span></div><div><b>$8M</b><span>Operating profit</span></div><div><b class="good-t">$5M</b><span>Net income</span></div></div>
      <p>$50M revenue − $20M cost of goods sold = <b>$30M gross profit</b>.</p>
      <p>$30M − $22M operating expenses = <b>$8M operating profit</b>.</p>
      <p>$8M − $1M interest − $2M tax = <b class="good-t">$5M net income</b>.</p>`},
    {k:'What goes where', t:'Sorting the costs', b:`
      <p>Revenue is all the money from sales: every latte and every bag of beans. Then the costs come off in layers.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Cost of goods sold</div><b>What goes into each sale</b><p>Beans, milk and cups. Sell more coffee and this cost grows with it.</p></div>
        <div class="col bad"><div class="col-h">Operating expenses</div><b>The cost of running things</b><p>Rent, staff, marketing and head office. Much of this stays the same on busy and quiet days.</p></div>
      </div>
      <p>After that come interest on borrowed money, then tax.</p>
      <p>Companies don't all sort their costs the same way. One may count shop staff as cost of goods sold, another as an operating expense, so it's worth checking before comparing two companies.</p>`},
    {k:'In practice', t:'Each line answers a question', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Gross profit</div><b>Does the product pay?</b><p>What's left after the cost of making what was sold.</p></div>
        <div class="col good"><div class="col-h">Operating profit</div><b>Does the business pay?</b><p>Before interest and tax, so companies with more or less debt are easier to compare.</p></div>
      </div>
      <p>Net income is what's left for shareholders, and it's the profit used to work out EPS. A one-off event, like selling a building, can push it up or down for a single year.</p>
      <p>And revenue isn't profit at all. Sales can grow fast while the company still loses money.</p>
      <div class="term"><span class="term-k">Key term</span><b>Net income:</b> the profit left after every cost, including interest and tax. It's often called the bottom line, because it's the last line of the statement.</div>`}
  ],
  qs:[
    {q:'A bakery has revenue of $2M. The flour, butter and packaging that went into what it sold cost $800,000. What is its gross profit?',
     o:['$800,000','$1.2M','$2M','$2.8M'], a:1,
     e:'Gross profit = revenue − cost of goods sold. $2M − $0.8M = $1.2M.'},
    {q:'For a coffee chain, which of these is an operating expense rather than a cost of goods sold?',
     o:['Coffee beans','Paper cups','Head office rent','Milk'], a:2,
     e:'Head office rent is a cost of running the business. Beans, cups and milk go straight into what is sold.'},
    {q:'A company has an operating profit of $12M. It pays $2M in interest and $3M in tax. What is its net income?',
     o:['$7M','$10M','$9M','$17M'], a:0,
     e:'Net income is what\'s left after interest and tax: $12M − $2M − $3M = $7M.'},
    {q:'True or false: a company whose revenue grew 30% last year must have made a profit.',
     o:['True','False'], a:1,
     e:'Revenue is sales, not profit. If costs grew even faster, the company could still have made a loss.'},
    {q:'Which line is the "bottom line", the profit used to work out EPS?',
     o:['Revenue','Gross profit','Operating profit','Net income'], a:3,
     e:'Net income is the profit left after every cost, including interest and tax.'}
  ]
};

const U6_MARGINS = {
  title:'Profit margins', min:4,
  cards:[
    {k:'The idea', t:'Profit as a share of sales', b:`
      <p class="lead">Is $5M of profit a lot? That depends on whether it came from $50M of sales or $500M. A margin shows each profit line as a percentage of revenue.</p>
      <p>Here are Cedar Coffee's three profit lines from Lesson 1, each divided by its $50M of revenue:</p>
      <div class="score"><div><b>60%</b><span>Gross margin</span></div><div><b>16%</b><span>Operating margin</span></div><div><b>10%</b><span>Net margin</span></div></div>
      <div class="term"><span class="term-k">Key term</span><b>Margin:</b> a profit line ÷ revenue. Cedar's 10% net margin means it keeps $10 of profit from every $100 customers spend.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Same sales, different profit', b:`
      <p>Juniper Juice, another made-up chain, also has $50M of revenue. But it pays more for rent and staff, so less is left over.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Cedar Coffee</div>
          <p>$5M net income ÷ $50M revenue</p>
          <div class="pf-r">Net margin<b class="mono good-t">10%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Juniper Juice</div>
          <p>$1.5M net income ÷ $50M revenue</p>
          <div class="pf-r">Net margin<b class="mono bad-t">3%</b></div>
        </div>
      </div>
      <p>From every $100 of sales, Cedar keeps $10 and Juniper keeps $3. Juniper has a much thinner cushion: a rise in costs that Cedar could absorb might push Juniper into a loss.</p>`},
    {k:'Why they differ', t:'Every industry has its own normal', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Software company</div><b>Usually high margins</b><p>Once the program is built, selling it to one more customer costs very little.</p></div>
        <div class="col bad"><div class="col-h">Supermarket</div><b>Usually thin margins</b><p>It resells goods from suppliers at a small markup and competes hard on price.</p></div>
      </div>
      <p>A thin margin isn't a failure. A supermarket can do well by selling a huge amount at a small profit each time.</p>
      <p>Like P/E, margins are most useful next to similar companies. A supermarket's margin next to a software company's tells you about their industries, not which one is better run.</p>`},
    {k:'Warning sign', t:'Watch the direction', b:`
      <p>One year's margin tells you less than the trend. Here is Cedar's operating margin over three years. Year 3 is the year from Lesson 1.</p>
      <div class="score"><div><b>20%</b><span>Year 1</span></div><div><b>18%</b><span>Year 2</span></div><div><b class="bad-t">16%</b><span>Year 3</span></div></div>
      <p>Revenue grew from $40M to $50M, up 25%. Operating profit barely moved: $8M, then $8.1M, then $8M. Costs rose faster than sales and ate all the growth.</p>
      <p>A shrinking margin is a reason to ask why. Maybe bean prices or rents went up, or Cedar cut its prices to fight a rival. Sometimes there's a good answer, like spending on new shops that haven't paid off yet.</p>`}
  ],
  qs:[
    {q:'A company has revenue of $200M and net income of $10M. What is its net margin?',
     o:['2%','5%','10%','20%'], a:1,
     e:'$10M ÷ $200M = 0.05, which is 5%.'},
    {q:'A shop has revenue of $80,000 and gross profit of $20,000. What is its gross margin?',
     o:['75%','20%','25%','40%'], a:2,
     e:'$20,000 ÷ $80,000 = 0.25, which is 25%. The other 75% went on the cost of goods sold.'},
    {q:'Two companies each have $100M of revenue. A has net income of $12M, and B has $4M. Which statement is true?',
     o:['A has a 12% net margin and B has 4%','They have the same margin, because revenue is equal','B has a 12% net margin and A has 4%','B is more profitable, because it spends more'], a:0,
     e:'$12M ÷ $100M = 12% and $4M ÷ $100M = 4%. Same sales, very different profit.'},
    {q:'Why do supermarkets tend to have thinner margins than software companies?',
     o:['They sell fewer items','They pay more tax','Software is cheaper to advertise','They resell goods from suppliers at a small markup'], a:3,
     e:'A supermarket buys goods and sells them on for a little more. Selling software to one more customer costs very little.'},
    {q:"A company's net margin went from 14% to 11% to 8% over three years, while sales grew. What is the most sensible reading?",
     o:['Nothing to see, since sales grew','Costs are rising faster than sales, which is worth looking into','The company is certain to go bankrupt','It is getting more efficient'], a:1,
     e:'A falling margin means costs are taking a bigger bite out of each $100 of sales. It\'s a reason to find out why, not proof of trouble.'}
  ]
};

const U6_BALANCE_SHEET = {
  title:'The balance sheet', min:5,
  cards:[
    {k:'The idea', t:'What it owns and what it owes', b:`
      <p class="lead">The income statement covers a period. The balance sheet is a snapshot of one day: what the company owns, what it owes, and what's left for its owners. Here is Cedar Coffee's at the end of last year.</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Two bars of the same length. Top: Cedar Coffee's assets, $40M. Bottom: liabilities of $15M plus equity of $25M, also $40M.">
        <line x1="30" y1="34" x2="30" y2="112" stroke="var(--ink-2)" stroke-width="1" stroke-dasharray="3 3"/>
        <line x1="270" y1="34" x2="270" y2="112" stroke="var(--ink-2)" stroke-width="1" stroke-dasharray="3 3"/>
        <rect x="30" y="34" width="240" height="26" rx="4" fill="var(--sky)"/>
        <rect x="30" y="86" width="90" height="26" rx="4" fill="var(--bear)"/>
        <rect x="120" y="86" width="150" height="26" rx="4" fill="var(--bull)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="36" y="26">Assets: what it owns</text><text x="264" y="26" text-anchor="end">$40M</text>
          <text x="36" y="78">Liabilities + equity</text><text x="264" y="78" text-anchor="end">$40M</text>
          <text x="75" y="128" text-anchor="middle" fill="var(--bear-ink)">Liabilities $15M</text>
          <text x="195" y="128" text-anchor="middle" fill="var(--bull-ink)">Equity $25M</text>
          <text x="75" y="142" text-anchor="middle">what it owes</text>
          <text x="195" y="142" text-anchor="middle">owners' share</text>
        </g>
      </svg>
      <div class="term"><span class="term-k">Key term</span><b>The balance sheet equation:</b> assets = liabilities + shareholders' equity. Everything the company owns was paid for with money it owes or with money that belongs to its owners.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Three parts', t:"Owns, owes, and what's left", b:`
      <p><b>Assets</b> are what the company owns: cash, money customers still owe it, inventory (goods waiting to be sold), and things like shops and machines.</p>
      <p><b>Liabilities</b> are what it owes: unpaid bills from suppliers, bank loans and other borrowing.</p>
      <p><b>Shareholders' equity</b> is assets minus liabilities: the part that belongs to the owners.</p>
      <div class="term"><span class="term-k">Key term</span><b>Current vs long-term:</b> current items turn into cash, or must be paid, within a year. Long-term items last longer, like a shop or a five-year loan.</div>`},
    {k:'Do the maths', t:"Cedar Coffee's balance sheet", b:`
      <div class="compare">
        <div class="pf">
          <div class="pf-h">What it owns</div>
          <p>Cash $5M<br>Owed by supermarkets $3M<br>Unsold beans and cups $2M<br>Shops and machines $30M</p>
          <div class="pf-r">Assets<b class="mono">$40M</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">What it owes, and what's left</div>
          <p>Supplier bills $5M<br>Bank loans $10M<br>Shareholders' equity $25M</p>
          <div class="pf-r">Liabilities + equity<b class="mono">$40M</b></div>
        </div>
      </div>
      <p>Liabilities: $5M + $10M = $15M. Add $25M of equity and you get $40M, the same as the assets. Equity is whatever is left after everything it owes, so the two sides always match.</p>
      <p>The cash, money owed and unsold beans ($10M) are current assets. The shops and machines ($30M) are long-term.</p>`},
    {k:'In practice', t:'Cash, debt and book value', b:`
      <p>Three numbers on the balance sheet get the most attention:</p>
      <div class="kv kv3"><div><b>$5M</b><span>Cash</span></div><div><b class="bad-t">$10M</b><span>Debt</span></div><div><b class="good-t">$25M</b><span>Equity</span></div></div>
      <p>Cash is the cushion for a bad year. Debt means borrowed money, here Cedar's bank loans, and it must be repaid with interest in good years and bad. Supplier bills are liabilities, but they aren't debt.</p>
      <div class="term"><span class="term-k">Key term</span><b>Book value:</b> another name for shareholders' equity. It's the accountants' value of the owners' stake, not what the market pays. Things like a brand or loyal customers often don't appear as assets at all, which is one reason market cap can be far above book value. It can also sit below it, for example when investors expect losses.</div>`}
  ],
  qs:[
    {q:"A company has $500M of assets and $300M of liabilities. What is its shareholders' equity?",
     o:['$800M','$300M','$200M','$500M'], a:2,
     e:'Equity = assets − liabilities. $500M − $300M = $200M.'},
    {q:'Which of these is a liability?',
     o:['Cash in the bank','A bank loan the company must repay','Coffee machines it owns','Money customers owe it'], a:1,
     e:'A liability is something the company owes. Money customers owe it is an asset, because the company will receive it.'},
    {q:'Which of these is a current asset?',
     o:['Inventory it expects to sell in the next few months','A shop the company owns','A 10-year bank loan','A delivery van it plans to use for 8 years'], a:0,
     e:'Current assets turn into cash within a year. The shop and van last much longer, and a loan is a liability, not an asset.'},
    {q:'A company has $90M of assets and $40M of shareholders\' equity. How much are its liabilities?',
     o:['$40M','$130M','$90M','$50M'], a:3,
     e:'Assets = liabilities + equity, so liabilities = $90M − $40M = $50M.'},
    {q:"True or false: a company's book value is always the same as its market cap.",
     o:['True','False'], a:1,
     e:'Book value is the accountants\' figure for equity. Market cap is what investors pay for all the shares, which can be far higher or lower.'}
  ]
};

const U6_CASH_FLOW = {
  title:'Cash flow', min:5,
  cards:[
    {k:'The idea', t:'Profit is not cash', b:`
      <p class="lead">Profit is the accountants' measure of how the year went. Cash is the money actually in the bank. Staff, suppliers and lenders get paid in cash, not profit.</p>
      <p>The two can drift a long way apart, which is why companies publish a third report.</p>
      <div class="term"><span class="term-k">Key term</span><b>Cash flow statement:</b> a report of the cash that actually came in and went out over a period. It sits next to the income statement and the balance sheet.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Why they differ', t:'Timing and non-cash costs', b:`
      <div class="split">
        <div class="col bad"><div class="col-h">Timing</div><b>Sold now, paid later</b><p>Supermarkets pay Cedar weeks after delivery. The sale counts as revenue straight away, but the cash comes later. Unsold beans tie up cash too.</p></div>
        <div class="col good"><div class="col-h">Non-cash costs</div><b>A cost with no cash leaving</b><p>Depreciation lowers profit every year, but the cash left on the day the machine was bought.</p></div>
      </div>
      <p>More money owed by customers, or more unsold stock, than a year earlier pulls cash below profit. Depreciation pushes it above.</p>
      <div class="term"><span class="term-k">Key term</span><b>Depreciation:</b> spreading the cost of something long-lasting over the years it's used. A $10,000 machine that lasts 5 years costs $2,000 a year on the income statement.</div>`},
    {k:'Do the maths', t:'Cedar Coffee: from profit to cash', b:`
      <p>Start from Cedar's $5M net income and adjust it to cash:</p>
      <p>$5M net income<br>+ $3M depreciation (already inside its $22M of operating expenses)<br>− $1M more owed by supermarkets than a year earlier<br>− $1M more unsold beans than a year earlier<br>= <b>$6M operating cash flow</b></p>
      <p>Cedar also spent $4M on new shops and machines. Spending on things that last for years is called capital expenditure, or capex.</p>
      <div class="kv kv3"><div><b>$6M</b><span>Operating cash flow</span></div><div><b class="bad-t">−$4M</b><span>Capex</span></div><div><b class="good-t">$2M</b><span>Free cash flow</span></div></div>
      <div class="term"><span class="term-k">Key term</span><b>Free cash flow:</b> operating cash flow − capital expenditure. It's the cash left over to repay debt, pay shareholders or keep in the bank.</div>`},
    {k:'The catch', t:'Profitable, and out of cash', b:`
      <p>A fast-growing company can report a profit every quarter and still run out of money. Each new order means paying for inventory and staff now, while customers pay weeks or months later.</p>
      <div class="split">
        <div class="col good"><div class="col-h">On paper</div><b>Profitable</b><p>Sales count as soon as they're made.</p></div>
        <div class="col bad"><div class="col-h">In the bank</div><b>Running dry</b><p>Bills fall due before customers pay.</p></div>
      </div>
      <p>If it can't borrow or raise new money to cover the gap, it can't pay its bills, however good the profits look. That's why investors check whether cash flow keeps up with profit over several years.</p>`}
  ],
  qs:[
    {q:'A company buys a $50,000 oven that will last 10 years. If it spreads the cost evenly, what is the depreciation each year?',
     o:['$500','$50,000','$10,000','$5,000'], a:3,
     e:'$50,000 ÷ 10 years = $5,000 a year.'},
    {q:'A company has operating cash flow of $30M and capital expenditure of $12M. What is its free cash flow?',
     o:['$42M','$12M','$18M','$30M'], a:2,
     e:'Free cash flow = operating cash flow − capital expenditure. $30M − $12M = $18M.'},
    {q:'When working out operating cash flow from profit, why is depreciation added back?',
     o:['It lowered profit, but no cash left the company this year','It is new cash lent by the bank','It is money paid to shareholders','It is a tax refund'], a:0,
     e:'Depreciation is a cost on paper. The cash for the machine left when it was bought, not this year.'},
    {q:'In the last week of a quarter, a company sells $2M of goods. Its customers will pay in 90 days. What happens that quarter?',
     o:['Revenue and cash both rise by $2M',"Revenue rises, but the cash hasn't arrived yet","Cash rises, but revenue doesn't",'Neither changes until the customers pay'], a:1,
     e:'The sale counts as revenue when it is made. The cash only arrives when customers pay.'},
    {q:'Which of these can push a profitable company into running out of cash?',
     o:['Its depreciation rises','It pays its suppliers later','It grows fast, and customers pay long after it has paid for inventory and staff','Its share price falls'], a:2,
     e:'Fast growth means paying for more inventory and staff up front, while the cash from customers arrives later.'}
  ]
};

const U6_DEBT_WARNINGS = {
  title:'Debt and warning signs', min:5,
  cards:[
    {k:'The idea', t:'Borrowed money cuts both ways', b:`
      <p class="lead">Debt lets a company grow faster than its own money allows. But interest is due in good years and bad, and if things go wrong, lenders are paid before shareholders.</p>
      <div class="term"><span class="term-k">Key term</span><b>Debt-to-equity:</b> total debt ÷ shareholders' equity. It shows how much the company has borrowed for each $1 that belongs to its owners.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Two ratios, two companies', b:`
      <p>Birch Burgers is a made-up chain that borrowed heavily to open new restaurants. Here it is next to Cedar Coffee.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Cedar Coffee</div>
          <p>Debt $10M, equity $25M<br>Operating profit $8M, interest $1M</p>
          <div class="pf-r">Debt-to-equity<b class="mono">0.4</b></div>
          <div class="pf-r">Interest coverage<b class="mono good-t">8×</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Birch Burgers</div>
          <p>Debt $30M, equity $10M<br>Operating profit $6M, interest $4M</p>
          <div class="pf-r">Debt-to-equity<b class="mono bad-t">3.0</b></div>
          <div class="pf-r">Interest coverage<b class="mono bad-t">1.5×</b></div>
        </div>
      </div>
      <p>$10M ÷ $25M = 0.4 and $8M ÷ $1M = 8. $30M ÷ $10M = 3 and $6M ÷ $4M = 1.5. Some websites divide total liabilities instead of debt, so the same company can show different figures.</p>
      <div class="term"><span class="term-k">Key term</span><b>Interest coverage:</b> operating profit ÷ interest expense. It shows how many times over the company's profit could pay its interest bill.</div>`},
    {k:'The catch', t:'When profits fall', b:`
      <p>Interest doesn't shrink when business slows. Say operating profit halves at both companies:</p>
      <div class="split">
        <div class="col good"><div class="col-h">Cedar Coffee</div><b class="mono">$4M vs $1M</b><p>Profit still covers the interest 4 times.</p></div>
        <div class="col bad"><div class="col-h">Birch Burgers</div><b class="mono">$3M vs $4M</b><p>Profit no longer covers the interest bill.</p></div>
      </div>
      <p>High debt-to-equity and low interest coverage both mean less room for a bad year. Lenders may charge more or refuse to lend again, and if the company can't pay, shareholders are last in line.</p>
      <p>Businesses with very steady sales can usually carry more debt than ones whose sales swing.</p>`},
    {k:'Warning signs', t:'Things worth a closer look', b:`
      <p>Investors scan the accounts for patterns like these:</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Margins</div><b>Shrinking for years</b><p>Costs keep rising faster than sales.</p></div>
        <div class="col bad"><div class="col-h">Debt</div><b>Rising faster than profit</b><p>More of the growth is paid for with borrowed money.</p></div>
      </div>
      <div class="split">
        <div class="col bad"><div class="col-h">Cash</div><b>Well below profit</b><p>Year after year, profit isn't turning into cash.</p></div>
        <div class="col bad"><div class="col-h">Adjustments</div><b>"One-offs" every year</b><p>"Adjusted" profit leaves out costs called one-off. If they keep coming back, they're normal costs.</p></div>
      </div>
      <p>None of these on its own proves a company is in trouble. A fast-growing company may have cash flow below profit for a while, and a price war can squeeze margins for a year or two. Each sign is a reason to find out why.</p>`}
  ],
  qs:[
    {q:"A company has $40M of debt and $80M of shareholders' equity. What is its debt-to-equity ratio?",
     o:['2.0','0.5','40','0.33'], a:1,
     e:'Debt ÷ equity = $40M ÷ $80M = 0.5.'},
    {q:'A company has an operating profit of $30M and pays $5M in interest. What is its interest coverage?',
     o:['6×','0.17×','25×','35×'], a:0,
     e:'Operating profit ÷ interest = $30M ÷ $5M = 6.'},
    {q:"A company's interest coverage falls from 6× to 1.2×. What does that mean?",
     o:['It has paid off most of its debt','It is now more profitable','It has much less room to keep paying interest if profits dip','Its shares are now cheaper'], a:2,
     e:'At 1.2×, operating profit only just covers the interest bill. A small fall in profit could leave it short.'},
    {q:"Over three years, a company's debt doubled while its operating profit grew 10%. How is this best described?",
     o:['Proof the company will fail','A sign of strong growth','Not relevant to shareholders','A warning sign worth looking into'], a:3,
     e:'Debt rising much faster than profit is a warning sign. On its own it doesn\'t prove trouble: the borrowing may fund something that hasn\'t paid off yet.'},
    {q:'Every year, a company reports an "adjusted" profit that leaves out "one-off" restructuring costs. What does this suggest?',
     o:['The costs may really be a normal part of running the business','Adjusted profit is always the more accurate number','The company must be hiding a loss','One-off costs never matter to shareholders'], a:0,
     e:'A cost that comes back every year isn\'t really one-off. It\'s a warning sign to look into, not proof of anything.'}
  ]
};

const U6_CHECK = {
  title:'Unit check', min:4, badge:{name:'Account Reader', icon:'shield'}, cards:[],
  qs:[
    {q:'A company has revenue of $90M, cost of goods sold of $50M, operating expenses of $25M, interest of $4M and tax of $3M. What is its net income?',
     o:['$40M','$15M','$8M','$11M'], a:2,
     e:'$90M − $50M = $40M gross profit. $40M − $25M = $15M operating profit. $15M − $4M − $3M = $8M.'},
    {q:'A company has revenue of $120M, gross profit of $48M and operating profit of $18M. What are its gross and operating margins?',
     o:['40% and 15%','48% and 18%','40% and 37.5%','60% and 15%'], a:0,
     e:'Divide each profit line by revenue: $48M ÷ $120M = 40% and $18M ÷ $120M = 15%.'},
    {q:"A company has $12M of cash, $30M of other assets and $25M of liabilities. What is its shareholders' equity?",
     o:['$5M','$17M','$42M','$67M'], a:1,
     e:'Assets are $12M + $30M = $42M. Equity = $42M − $25M = $17M.'},
    {q:'A company reports net income of $10M. It had $4M of depreciation, and the money customers owe it rose by $6M. Ignoring everything else, what is its operating cash flow?',
     o:['$8M','$12M','$20M','$0'], a:0,
     e:'Add back depreciation and take off the cash still owed: $10M + $4M − $6M = $8M.'},
    {q:'Companies A and B both report net income of $20M. A has free cash flow of $18M. B has free cash flow of −$5M, for the third year running. Which statement fits best?',
     o:['Both are equally healthy, since profit is the same','B must be about to go bankrupt','A must be hiding costs',"B's profit isn't turning into cash, which is worth looking into"], a:3,
     e:'Cash staying well below profit for years is a warning sign. There may be an innocent reason, like heavy spending to grow, but it\'s worth understanding why.'},
    {q:'A company has debt of $90M, equity of $60M, operating profit of $15M and interest of $6M. What are its debt-to-equity ratio and interest coverage?',
     o:['0.67 and 2.5×','1.5 and 2.5×','1.5 and 9×','0.67 and 0.4×'], a:1,
     e:'Debt-to-equity = $90M ÷ $60M = 1.5. Interest coverage = $15M ÷ $6M = 2.5.'},
    {q:'Which pair of companies is it most sensible to compare on net margin?',
     o:['A software company and a supermarket','A bank and a coffee chain','Two supermarket chains','Any two companies with the same revenue'], a:2,
     e:'Normal margins vary a lot by industry, so they are most useful between similar businesses.'},
    {q:'Which statement about warning signs in company accounts is true?',
     o:['One warning sign proves a company is in trouble','A company with no warning signs is a safe investment','Warning signs only show up in the income statement','Each sign is a reason to dig deeper, and several at once matter more'], a:3,
     e:'No single sign proves trouble, and no clean set of accounts guarantees safety. Signs can show up in all three reports.'}
  ]
};

const UNIT_ACCOUNTS = {id:'accounts', title:'Reading company accounts', level:'Vault', lessons:[U6_INCOME_STATEMENT, U6_MARGINS, U6_BALANCE_SHEET, U6_CASH_FLOW, U6_DEBT_WARNINGS, U6_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_ACCOUNTS = [
  {n:1, q:'A shop has revenue of $500,000, cost of goods sold of $300,000 and operating expenses of $150,000. What is its operating profit?',
   o:['$200,000','$50,000','$350,000','$150,000'], a:1,
   e:'$500,000 − $300,000 = $200,000 gross profit. $200,000 − $150,000 = $50,000.'},
  {n:2, q:'A company earns $6M of net income on $40M of revenue. What is its net margin?',
   o:['6%','85%','15%','40%'], a:2,
   e:'$6M ÷ $40M = 0.15, which is 15%.'},
  {n:3, q:'Which equation is always true for a balance sheet?',
   o:["Assets = liabilities + shareholders' equity",'Assets = revenue − costs',"Equity = assets + liabilities","Liabilities = assets + equity"], a:0,
   e:'Everything a company owns is paid for either with money it owes or with money that belongs to its owners.'},
  {n:4, q:'A company has operating cash flow of $25M and spends $9M on new machines and buildings. What is its free cash flow?',
   o:['$34M','$9M','$25M','$16M'], a:3,
   e:'Free cash flow = operating cash flow − capital expenditure. $25M − $9M = $16M.'},
  {n:5, q:'A company has an operating profit of $10M and an interest bill of $8M. What is its interest coverage, and what does it suggest?',
   o:['1.25×: little room if profits fall',"0.8×: it can't pay its interest",'80×: very safe','$2M: comfortable'], a:0,
   e:'$10M ÷ $8M = 1.25. Profit only just covers interest, so a small dip could leave it short.'}
];
