/* ---------- Statements in depth ---------- */
const STM_LINK = {
  title:'How the statements link', min:5,
  cards:[
    {k:'The idea', t:'Three reports, one story', b:`
      <p class="lead">The income statement, balance sheet and cash flow statement aren't three separate stories. They're three views of the same year, and the numbers in one flow into the others.</p>
      <p>This unit follows Sannine Foods, a made-up packaged-food maker. Once you can see how its three reports connect, mistakes and oddities stand out much faster.</p>
      <div class="term"><span class="term-k">Key term</span><b>Retained earnings:</b> the part of past profits a company has kept instead of paying out. It sits inside shareholders' equity, so each year's profit, less any dividends, adds to it.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Sannine at the start of the year', b:`
      <p>Here is Sannine's balance sheet on the first day of the year, in millions of dollars:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">What it owns</div>
          <p>Cash $20M<br>Owed by customers $15M<br>Inventory $10M<br>Factories and machines $95M</p>
          <div class="pf-r">Assets<b class="mono">$140M</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">What it owes, and what's left</div>
          <p>Supplier bills $12M<br>Bank debt $40M<br>Shareholders' equity $88M</p>
          <div class="pf-r">Liabilities + equity<b class="mono">$140M</b></div>
        </div>
      </div>
      <p>During the year Sannine earns $12M of net income and pays $4M in dividends. Equity ends the year at $88M + $12M − $4M = <b>$96M</b>. That is the income statement reaching into the balance sheet.</p>`},
    {k:'The link', t:'From profit to cash to the balance sheet', b:`
      <p>Now the cash flow statement. Sannine's year had these events:</p>
      <p>Depreciation of $10M (a cost with no cash leaving). Customers owing $3M more. Inventory up $2M. Supplier bills up $1M. New factory equipment of $18M. Debt repaid: $5M. Dividends: $4M.</p>
      <p>$12M net income + $10M depreciation − $3M − $2M + $1M = <b>$18M operating cash flow</b>.</p>
      <p>$18M − $18M capex − $5M debt repaid − $4M dividends = −$9M. Cash falls from $20M to <b class="bad-t">$11M</b>.</p>
      <div class="kv"><div><b>$11M</b><span>Closing cash</span></div><div><b>$103M</b><span>Factories and machines</span></div><div><b>$35M</b><span>Bank debt</span></div><div><b>$96M</b><span>Equity</span></div></div>
      <p>Factories and machines: $95M + $18M of new equipment − $10M depreciation = $103M.</p>`},
    {k:'The check', t:'Does the balance sheet still balance?', b:`
      <p>Every piece we moved has to land somewhere on the closing balance sheet. Add it up:</p>
      <div class="split">
        <div class="col good"><div class="col-h">Assets</div><b>$144M</b><p>Cash $11M + owed by customers $18M + inventory $12M + factories $103M.</p></div>
        <div class="col good"><div class="col-h">Liabilities + equity</div><b>$144M</b><p>Supplier bills $13M + debt $35M + equity $96M.</p></div>
      </div>
      <p>It balances, because each event touched at least two lines. Buying equipment cut cash and raised machines. Repaying debt cut cash and cut liabilities.</p>
      <p>That's a useful test in real life. If a company's closing cash on the balance sheet doesn't match the end of its cash flow statement, or its equity doesn't move by profit less dividends and other disclosed items, something needs explaining.</p>`}
  ],
  qs:[
    {q:"A company starts the year with shareholders' equity of $50M. It earns net income of $9M and pays $3M in dividends. With nothing else changing, what is its equity at year end?",
     o:['$62M','$59M','$56M','$47M'], a:2,
     e:'Equity rises by profit and falls by dividends: $50M + $9M − $3M = $56M.'},
    {q:'Which link joins the income statement to the balance sheet?',
     o:['Revenue becomes an asset',"Net income, less dividends, adds to shareholders' equity",'Interest becomes a liability','Tax becomes cash'], a:1,
     e:'The profit a company keeps (net income less dividends) is added to retained earnings, inside equity.'},
    {q:'A company starts with $8M of cash. Its operating cash flow is $14M, it spends $10M on capex, pays $2M in dividends and repays $3M of debt. What is its closing cash?',
     o:['$7M','$15M','$17M','$9M'], a:0,
     e:'$8M + $14M − $10M − $2M − $3M = $7M.'},
    {q:'A company pays $5M in cash for new machinery. What happens straight away to its total assets and its profit?',
     o:['Assets fall $5M and profit falls $5M','Assets are unchanged (cash down, machinery up) and profit is not cut by $5M that day','Assets rise $5M','Profit rises $5M'], a:1,
     e:'The $5M turns from cash into machinery, so total assets stay the same. The cost then reaches profit slowly, as depreciation.'},
    {q:'A customer pays a $1M bill it had owed for a month. What is the effect on the company?',
     o:['Revenue rises $1M','Net income rises $1M','Cash rises $1M and money owed by customers falls $1M','Equity rises $1M'], a:2,
     e:'The sale was counted as revenue last month. Now one asset (money owed) simply turns into another (cash).'}
  ]
};

const STM_ADJUSTED = {
  title:'Adjusted vs reported earnings', min:5,
  cards:[
    {k:'The idea', t:'Two profit numbers for one year', b:`
      <p class="lead">Many companies announce two profit figures: the reported one, built by the usual accounting rules, and an adjusted one, with some costs taken out. The gap between them can be large.</p>
      <p>Adjusted figures have no single official definition. Each company picks what to leave out, and those choices can change from one year to the next.</p>
      <div class="term"><span class="term-k">Key term</span><b>Adjusted earnings:</b> profit after the company has removed items it calls unusual or non-cash. Reported earnings are the figure from the income statement itself.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Byblos Foods: from $40M to $60M', b:`
      <p>Byblos Foods, a made-up company, has 20M shares. Its reported net income is $40M. Its adjusted figure adds back three items (all after tax):</p>
      <p>$40M reported<br>+ $6M restructuring costs<br>+ $9M stock-based pay<br>+ $5M amortisation of brands it bought<br>= <b>$60M adjusted</b></p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Reported</div>
          <p>$40M ÷ 20M shares</p>
          <div class="pf-r">EPS<b class="mono">$2.00</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Adjusted</div>
          <p>$60M ÷ 20M shares</p>
          <div class="pf-r">EPS<b class="mono good-t">$3.00</b></div>
        </div>
      </div>
      <p>Adjusted profit is 50% higher, and so is EPS. A P/E worked out on adjusted EPS will look lower than one on reported EPS, so check which one is being used.</p>`},
    {k:'The catch', t:'When "one-off" comes back every year', b:`
      <p>Some add-backs have a fair case. Others are a cost the business keeps paying. Look at Byblos's restructuring costs over the first four years:</p>
      <div class="kv"><div><b>$6M</b><span>Year 1</span></div><div><b>$5M</b><span>Year 2</span></div><div><b>$7M</b><span>Year 3</span></div><div><b>$6M</b><span>Year 4</span></div></div>
      <p>Year 5 was $6M too, so the five-year total is $30M, an average of $6M. A cost that appears in every year is part of how the business runs.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Stock-based pay</div><b>"It's not cash"</b><p>True, but staff are paid in new shares, which spreads profit over more shares. It is a real cost to owners.</p></div>
        <div class="col good"><div class="col-h">Brand amortisation</div><b>A non-cash charge</b><p>The cash went out when the brands were bought. Many analysts accept removing it, though the choice is theirs.</p></div>
      </div>`},
    {k:'The limit', t:'Adjustments can cut profit too', b:`
      <p>Adjusting isn't always flattering. Qadisha Paper, another made-up company, reported net income of $30M, which included an $8M after-tax gain from selling land.</p>
      <p>$30M reported − $8M one-off gain = <b>$22M</b> underlying profit.</p>
      <p>A sale of land is the kind of event that really doesn't repeat, so leaving it out gives a better picture of normal earnings.</p>
      <p>So the test isn't whether a figure is "adjusted". For each item ask: will this happen again? Did a cost really leave the owners worse off? And does the company show, line by line, how it gets from the reported figure to the adjusted one?</p>`}
  ],
  qs:[
    {q:'A company reports net income of $25M. It adds back $4M of restructuring and $3M of amortisation (both after tax). What is its adjusted net income?',
     o:['$18M','$25M','$32M','$28M'], a:2,
     e:'$25M + $4M + $3M = $32M.'},
    {q:'Why should an investor be careful with adjusted earnings?',
     o:['They are illegal to publish','Each company chooses what to leave out, so the figure can flatter results','They are always lower than reported earnings','They are the only figure that counts'], a:1,
     e:'There is no single definition, so the same company can leave out items that make a year look better.'},
    {q:'A company reports net income of $18M. That includes a $5M one-off gain, and it also adds back $2M of one-off costs. What is its adjusted net income?',
     o:['$15M','$25M','$11M','$20M'], a:0,
     e:'Remove the gain and add back the costs: $18M − $5M + $2M = $15M.'},
    {q:'A company has 15M shares. Its adjusted net income is $45M and its reported net income is $30M. How much higher is adjusted EPS than reported EPS?',
     o:['$3.00','$0.50','$2.00','$1.00'], a:3,
     e:'Adjusted EPS = $45M ÷ 15M = $3.00. Reported EPS = $30M ÷ 15M = $2.00. The gap is $1.00.'},
    {q:'A company leaves stock-based pay out of its adjusted profit because "it isn\'t cash". What is wrong with that reasoning?',
     o:['Nothing, because non-cash costs are not real','Staff pay is always paid in cash','The pay is made in shares, which leave existing owners with a smaller slice','Stock-based pay only happens once'], a:2,
     e:'Paying staff in shares means issuing more shares, so existing owners hold a smaller slice. It is a real cost, just not a cash one.'}
  ]
};

const STM_DEPRECIATION = {
  title:'Depreciation and capex', min:5,
  cards:[
    {k:'The idea', t:'Spending now, cost later', b:`
      <p class="lead">When a company buys something that lasts, the cash leaves at once but the cost reaches profit slowly. Two numbers track that gap: capital expenditure (the cash spent) and depreciation (the share charged to each year).</p>
      <p>Comparing the two tells you whether a company is building up its factories and equipment, or letting them wear down.</p>
      <div class="term"><span class="term-k">Key term</span><b>Book value of an asset:</b> what it cost, minus the depreciation charged so far. It's an accounting figure, not what the asset would sell for.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Straight-line, with a leftover value', b:`
      <p>A company buys a machine for $120,000. It expects to use it for 8 years and then sell it for scrap at $20,000. Only the part that gets used up is charged:</p>
      <p>($120,000 − $20,000) ÷ 8 = <b>$12,500 a year</b>.</p>
      <p>After 3 years, depreciation charged is 3 × $12,500 = $37,500. Book value is $120,000 − $37,500 = <b>$82,500</b>.</p>
      <div class="kv kv3"><div><b>$120,000</b><span>Cost</span></div><div><b class="bad-t">$37,500</b><span>Charged after 3 years</span></div><div><b>$82,500</b><span>Book value</span></div></div>
      <p>This is straight-line depreciation: the same charge each year. Other methods charge more in the early years. The company chooses its estimates of life and leftover value, so they shape profit too.</p>`},
    {k:'The catch', t:'Capitalise it, or expense it?', b:`
      <p>Not every spend is charged the same way. A cost that gives lasting benefits can be capitalised: put on the balance sheet and spread over time. Otherwise it's expensed: charged to profit straight away.</p>
      <p>Take a $9M software project at a company whose profit before this cost is $20M:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Expensed in year 1</div>
          <p>$20M − $9M</p>
          <div class="pf-r">Year 1 profit<b class="mono bad-t">$11M</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Spread over 3 years</div>
          <p>$20M − $3M</p>
          <div class="pf-r">Year 1 profit<b class="mono good-t">$17M</b></div>
        </div>
      </div>
      <p>Over three years the total is the same: $11M + $20M + $20M = $51M, and $17M × 3 = $51M. But the choice moves profit between years, so it's worth knowing which a company used.</p>`},
    {k:'In practice', t:'Capex against depreciation', b:`
      <p>Back at Sannine Foods from the first lesson: capex of $18M against depreciation of $10M.</p>
      <p>$18M ÷ $10M = <b>1.8×</b>. It is adding to its asset base faster than the old equipment is being used up.</p>
      <p>If instead capex were $6M against $10M of depreciation, the ratio would be <b>0.6×</b>. Held for years, that can mean equipment is wearing out faster than it's replaced.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Maintenance capex</div><b>Keeping things running</b><p>Replacing worn-out ovens or trucks. Needed just to stand still.</p></div>
        <div class="col good"><div class="col-h">Growth capex</div><b>Expanding</b><p>New factories or shops, to sell more later.</p></div>
      </div>
      <p>A low ratio isn't always bad, since a firm may be shrinking on purpose, but it is a question to ask. Companies rarely split the two kinds of capex precisely.</p>`}
  ],
  qs:[
    {q:'A company buys a machine for $90,000. It expects to use it for 8 years and then sell it for $10,000. What is the straight-line depreciation each year?',
     o:['$11,250','$10,000','$8,750','$12,500'], a:1,
     e:'($90,000 − $10,000) ÷ 8 = $10,000 a year. Dividing the full $90,000 by 8 would give $11,250, which ignores the leftover value.'},
    {q:'A $60,000 delivery van is depreciated over 5 years with no leftover value. What is its book value after 2 years?',
     o:['$36,000','$12,000','$24,000','$48,000'], a:0,
     e:'Depreciation is $60,000 ÷ 5 = $12,000 a year. After 2 years $24,000 is charged, so book value is $60,000 − $24,000 = $36,000.'},
    {q:'A company has profit of $30M before a $12M project cost. It spreads the cost over 4 years instead of expensing it. How much higher is its year 1 profit?',
     o:['$12M','$3M','$9M','$27M'], a:2,
     e:'Expensed, year 1 profit is $30M − $12M = $18M. Spread out, it is $30M − $3M = $27M. The difference is $9M.'},
    {q:'A company spends $24M on capex and has $16M of depreciation. What is its capex-to-depreciation ratio?',
     o:['0.67×','8×','1.5×','1.67×'], a:2,
     e:'$24M ÷ $16M = 1.5×. It is investing more than the year\'s depreciation charge.'},
    {q:'A company\'s capex has been well below its depreciation for several years. What is the most sensible reading?',
     o:['It is certain to fail','Its equipment may be wearing out faster than it is replaced, which is worth looking into','Its profit must be rising','Its depreciation must be wrong'], a:1,
     e:'It is a warning sign worth a question, not proof of trouble. The company might be shrinking on purpose.'}
  ]
};

const STM_DILUTION = {
  title:'Share count and dilution', min:5,
  cards:[
    {k:'The idea', t:'EPS depends on the share count', b:`
      <p class="lead">Earnings per share is profit divided by shares. So when a company's number of shares changes, EPS changes, even if profit doesn't. Reading a share count properly matters as much as reading profit.</p>
      <p>Companies report two counts. Basic is the shares actually in issue. Diluted adds shares that could appear from things already promised, like options given to staff.</p>
      <div class="term"><span class="term-k">Key term</span><b>Dilution:</b> a rise in the number of shares, which shrinks each existing share's slice of the company's profit and ownership.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Basic and diluted EPS', b:`
      <p>Litani Energy, a made-up company, earns $24M. It has 10M shares in issue. Staff awards and options could add 0.8M more shares.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Basic</div>
          <p>$24M ÷ 10M shares</p>
          <div class="pf-r">EPS<b class="mono">$2.40</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Diluted</div>
          <p>$24M ÷ 10.8M shares</p>
          <div class="pf-r">EPS<b class="mono bad-t">$2.22</b></div>
        </div>
      </div>
      <p>The diluted figure is the cautious one, since it assumes those extra shares exist. Analysts often prefer it when comparing companies.</p>`},
    {k:'The catch', t:'Issuing new shares', b:`
      <p>If Litani sells new shares to raise money, every existing owner's slice gets smaller. Suppose an investor holds 500,000 shares, which is 5% of 10M.</p>
      <p>Litani issues 2.5M new shares. There are now 12.5M. The investor's 500,000 shares are <b>500,000 ÷ 12.5M = 4.0%</b>.</p>
      <div class="score"><div><b>5%</b><span>Before</span></div><div><b class="bad-t">4%</b><span>After</span></div><div><b>0</b><span>Shares sold</span></div></div>
      <p>The investor still owns exactly the same shares. Whether that's a problem depends on what the money is used for. New shares that fund profitable growth can leave owners better off, and ones that don't can leave them worse off.</p>`},
    {k:'The limit', t:'Buybacks work the other way', b:`
      <p>A buyback is when a company uses cash to buy its own shares, making them disappear. If Litani buys back 0.5M shares, 9.5M remain.</p>
      <p>$24M ÷ 9.5M = <b>$2.53</b>, against $2.40 before, a 5.3% rise with no change in profit.</p>
      <p>But it isn't free: at $30 a share, the buyback cost $15M of cash. And if the company has been issuing 0.5M shares a year to staff, buying back 0.5M merely holds the count flat while the cash goes.</p>
      <p>A steady share count therefore doesn't prove nothing has happened. Check shares issued and shares bought back across the year.</p>`}
  ],
  qs:[
    {q:'A company earns $30M. It has 12M shares in issue, and 12.5M including possible new shares from options. What is its diluted EPS?',
     o:['$2.50','$2.40','$2.60','$2.45'], a:1,
     e:'Diluted EPS uses the larger count: $30M ÷ 12.5M = $2.40. Basic EPS is $30M ÷ 12M = $2.50.'},
    {q:'An investor owns 1M shares of a 50M-share company. It issues 10M new shares. What share of the company does the investor now own?',
     o:['2%','1.67%','1%','1.5%'], a:1,
     e:'There are now 60M shares. 1M ÷ 60M = 1.67%, down from 2%.'},
    {q:'What does the diluted share count include that the basic count does not?',
     o:['Shares the company has bought back','Shares owned by directors','Shares that could be created from options and similar awards','Shares of rival companies'], a:2,
     e:'Diluted adds the extra shares that existing promises (options, awards) could create.'},
    {q:'A company with 20M shares earns $40M and buys back 2M of its shares. Assuming profit is unchanged, what is its EPS afterwards?',
     o:['$2.00','$2.50','$1.80','$2.22'], a:3,
     e:'18M shares remain. $40M ÷ 18M = $2.22, up from $2.00.'},
    {q:'True or false: if a company\'s share count is the same at the start and end of the year, no new shares were issued during it.',
     o:['True','False'], a:1,
     e:'It may have issued shares (for example to staff) and bought back the same number, spending cash to keep the count flat.'}
  ]
};

const STM_ANNUAL_REPORT = {
  title:'Reading an annual report', min:5,
  cards:[
    {k:'The idea', t:'Where things are kept', b:`
      <p class="lead">An annual report is long, and most readers don't need every page. Knowing what each section is for helps you find the part that answers your question.</p>
      <p>The three statements sit in the middle. The parts around them explain what the numbers mean.</p>
      <div class="term"><span class="term-k">Key term</span><b>Notes to the accounts:</b> the pages after the statements that explain how the numbers were built, and break them down. They cover things like debts, lawsuits and the biggest customers.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'The map', t:'What each section answers', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Business and risks</div><b>What does it do?</b><p>The company describes its business and lists the risks it sees.</p></div>
        <div class="col good"><div class="col-h">Management discussion</div><b>Why did it change?</b><p>Management explains the year in words, and what it expects next.</p></div>
      </div>
      <div class="split">
        <div class="col good"><div class="col-h">The statements</div><b>What are the numbers?</b><p>Income statement, balance sheet, cash flow statement.</p></div>
        <div class="col good"><div class="col-h">The notes</div><b>What is behind them?</b><p>Breakdowns, accounting choices, debts due, lawsuits.</p></div>
      </div>
      <p>Management's discussion is written by the company, so it is the company's story. The notes tend to be drier, and often more revealing.</p>`},
    {k:'Do the maths', t:'Using the notes: segments and customers', b:`
      <p>Cedar Tech, a made-up company, grew revenue from $160M to $200M, up 25%. The notes split it into two segments:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Segment A</div>
          <p>$110M to $120M</p>
          <div class="pf-r">Growth<b class="mono">9.1%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Segment B</div>
          <p>$50M to $80M</p>
          <div class="pf-r">Growth<b class="mono good-t">60%</b></div>
        </div>
      </div>
      <p>The 25% hides a story: most of the growth came from the smaller segment. Segment B added $30M of the $40M increase.</p>
      <p>The notes also say one customer is 35% of revenue: 0.35 × $200M = <b>$70M</b>. Losing that customer would hurt a lot.</p>`},
    {k:'The limit', t:'What the auditor does and does not say', b:`
      <p>An independent firm of auditors checks the accounts and gives an opinion. A clean opinion says the statements fairly show the company's position, in all material ways, under the accounting rules.</p>
      <p>It does <b>not</b> say the company is a good investment, that the price is fair, or that nothing can go wrong. Auditors work from samples and information the company gives them.</p>
      <p>One thing to look for is a going-concern warning, where the auditor says there's serious doubt the company can keep operating for the next year or so. It is a major red flag, and rare.</p>
      <p>A good habit is to read the risk section, the discussion, then the notes on debt and customers, before looking at a single ratio.</p>`}
  ],
  qs:[
    {q:'Where in an annual report would you most likely find details of a lawsuit against the company and when its loans are due?',
     o:['The cover page','The notes to the accounts','The share price chart',"The chairman's photo page"], a:1,
     e:'The notes break down debts, commitments and legal matters behind the statement totals.'},
    {q:'A company\'s revenue rose from $80M to $100M. What was the growth?',
     o:['20%','25%','80%','125%'], a:1,
     e:'The $20M increase ÷ the earlier $80M = 25%. Dividing by the new $100M gives 20%, which is the wrong base.'},
    {q:'Which section is written by management to explain why the year\'s numbers moved and what comes next?',
     o:["The auditor's report",'The notes to the accounts','The balance sheet','The management discussion'], a:3,
     e:'The management discussion gives the company\'s own explanation of the results and its outlook.'},
    {q:'The notes say that one customer made up 40% of a company\'s $250M revenue. How much revenue came from that customer?',
     o:['$100M','$10M','$40M','$150M'], a:0,
     e:'0.40 × $250M = $100M. That is a big dependence on one customer.'},
    {q:'An auditor gives a clean opinion on a company\'s accounts. What does this tell you?',
     o:['The shares are a good investment','The company will not fail','The statements fairly show its position under the accounting rules','All the profit is in cash'], a:2,
     e:'A clean opinion is about whether the accounts are fairly presented. It says nothing about future results or the share price.'}
  ]
};

const STM_CHECK = {
  title:'Unit check', min:4, badge:{name:'Statement Sleuth', icon:'book'}, cards:[],
  qs:[
    {q:'A company starts with $12M of cash. Net income is $10M, depreciation $4M, customers owe it $3M more, capex is $6M and dividends are $2M. Ignoring everything else, what is its closing cash?',
     o:['$15M','$18M','$21M','$9M'], a:0,
     e:'Operating cash flow = $10M + $4M − $3M = $11M. Closing cash = $12M + $11M − $6M − $2M = $15M.'},
    {q:'A company reports net income of $50M. It adds back $8M of restructuring and $6M of stock pay, and takes out a $4M one-off gain. What is adjusted net income?',
     o:['$68M','$60M','$52M','$64M'], a:1,
     e:'$50M + $8M + $6M − $4M = $60M.'},
    {q:'A $240,000 machine has a leftover value of $40,000 and a 5-year life. What is the straight-line depreciation each year?',
     o:['$48,000','$40,000','$50,000','$32,000'], a:1,
     e:'($240,000 − $40,000) ÷ 5 = $40,000. Using the full cost would give $48,000, which ignores the leftover value.'},
    {q:'A company has profit of $15M before an $8M cost. If the cost is spread over 4 years rather than expensed, how much higher is year 1 profit?',
     o:['$2M','$8M','$13M','$6M'], a:3,
     e:'Expensed: $15M − $8M = $7M. Spread: $15M − $2M = $13M. The difference is $6M.'},
    {q:'A company earns $36M with 15M shares in issue, and 16M including options. What is its diluted EPS?',
     o:['$2.40','$2.25','$2.50','$2.00'], a:1,
     e:'$36M ÷ 16M = $2.25. Basic EPS would be $36M ÷ 15M = $2.40.'},
    {q:'An investor holds 4% of a company with 25M shares, which is 1M shares. The company issues 5M new shares. What is the investor\'s new stake?',
     o:['4%','3.33%','3%','2%'], a:1,
     e:'There are now 30M shares. 1M ÷ 30M = 3.33%.'},
    {q:'The notes say two customers each account for 25% of a company\'s $300M revenue. How much revenue depends on those two?',
     o:['$75M','$90M','$150M','$300M'], a:2,
     e:'25% + 25% = 50%, and 50% of $300M = $150M.'},
    {q:'A company\'s capex has been $5M a year against depreciation of $12M, for three years. Which statement fits best?',
     o:['It is growing fast','Its depreciation figure must be wrong','Its equipment may be wearing out faster than it is replaced, so it\'s worth asking why','It is certain to go bankrupt'], a:2,
     e:'A ratio of about 0.42× held for years is a question to ask. It could be deliberate shrinking, so it\'s not proof of trouble.'}
  ]
};

const UNIT_STATEMENTS = {id:'statements', title:'Statements in depth', level:'Vault', lessons:[STM_LINK, STM_ADJUSTED, STM_DEPRECIATION, STM_DILUTION, STM_ANNUAL_REPORT, STM_CHECK]};

/* Vault unit: no placement questions. */

/* MATHS CHECK: every calculation and its result, for the reviewer. All recomputed in Python.
   Lesson 1 (Sannine, $M)
   - Opening: assets 20+15+10+95 = 140; liabilities+equity 12+40+88 = 140
   - Equity: 88 + 12 - 4 = 96
   - Operating cash flow: 12 + 10 - 3 - 2 + 1 = 18
   - Net cash change: 18 - 18 - 5 - 4 = -9; closing cash 20 - 9 = 11
   - Machines 95 + 18 - 10 = 103; owed by customers 15+3 = 18; inventory 10+2 = 12; supplier bills 12+1 = 13; debt 40-5 = 35
   - Closing assets 11+18+12+103 = 144; liabilities+equity 13+35+96 = 144
   - Q1: 50+9-3 = 56. Q3: 8+14-10-2-3 = 7.
   Lesson 2
   - Byblos: 40+6+9+5 = 60; EPS 40/20 = 2.00, 60/20 = 3.00; 60/40 = 1.5 (+50%)
   - Restructuring 6+5+7+6+6 = 30; average 6
   - Qadisha: 30 - 8 = 22
   - Q1: 25+4+3 = 32. Q3: 18-5+2 = 15. Q4: 45/15 = 3.00; 30/15 = 2.00; gap 1.00
   Lesson 3
   - (120,000-20,000)/8 = 12,500; 3 x 12,500 = 37,500; 120,000-37,500 = 82,500
   - Expensed: 20-9 = 11; spread 9/3 = 3, 20-3 = 17; totals 11+20+20 = 51 = 17x3
   - Capex/depreciation: 18/10 = 1.8; 6/10 = 0.6
   - Q1: (90,000-10,000)/8 = 10,000 (slip 90,000/8 = 11,250). Q2: 60,000/5 = 12,000; 60,000-24,000 = 36,000
   - Q3: 30-12 = 18; 12/4 = 3, 30-3 = 27; diff 9. Q4: 24/16 = 1.5
   Lesson 4
   - Basic 24/10 = 2.40; diluted 24/10.8 = 2.2222 -> 2.22
   - Stake 500,000/10M = 5%; 10M+2.5M = 12.5M; 500,000/12.5M = 4.0%
   - Buyback: 10M-0.5M = 9.5M; 24/9.5 = 2.5263 -> 2.53; 2.5263/2.4 = 1.0526 (+5.3%); 0.5M x $30 = $15M
   - Q1: 30/12.5 = 2.40; 30/12 = 2.50. Q2: 50M+10M = 60M; 1/60 = 1.67%; 1M/50M = 2%
   - Q4: 20M-2M = 18M; 40/18 = 2.2222 -> 2.22; 40/20 = 2.00
   Lesson 5
   - Cedar Tech: 200/160 - 1 = 25%; A 120/110 - 1 = 9.09%; B 80/50 - 1 = 60%; increase 40, B added 30
   - 0.35 x 200 = 70
   - Q2: 100/80 - 1 = 25% (slip 20/100 = 20%). Q4: 0.40 x 250 = 100
   Unit check
   - Q1: 10+4-3 = 11; 12+11-6-2 = 15. Q2: 50+8+6-4 = 60. Q3: (240,000-40,000)/5 = 40,000 (slip 48,000)
   - Q4: 15-8 = 7; 8/4 = 2, 15-2 = 13; diff 6. Q5: 36/16 = 2.25; 36/15 = 2.40
   - Q6: 25M+5M = 30M; 1/30 = 3.33%. Q7: 0.5 x 300 = 150. Q8: 5/12 = 0.417 */
