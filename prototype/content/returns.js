/* ---------- Returns ratios ---------- */
const RET_ROE = {
  title:'Return on equity', min:5,
  cards:[
    {k:'The idea', t:'Profit per dollar of owners\' money', b:`
      <p class="lead">Return on equity asks a simple question: for every dollar that belongs to the shareholders, how much profit did the company make this year? It is one of the most quoted numbers in investing.</p>
      <p>Equity is the owners' share of the balance sheet: assets minus liabilities. Dividing profit by it shows how hard the owners' money is working.</p>
      <div class="term"><span class="term-k">Key term</span><b>Return on equity (ROE):</b> net income divided by shareholders' equity, shown as a percentage. A 15% ROE means $0.15 of profit for each $1 of equity.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Which equity do you use?', b:`
      <p>Zahle Textiles, a made-up company, earns $18M of net income in a year. It pays $6M in dividends. Equity was $90M on the first day, so it ends the year at $90M + $18M − $6M = <b>$102M</b>.</p>
      <p>Equity moved during the year, so there are three possible answers:</p>
      <div class="kv kv3"><div><b>20.0%</b><span>On opening equity ($90M)</span></div><div><b>17.6%</b><span>On closing equity ($102M)</span></div><div><b>18.75%</b><span>On average equity ($96M)</span></div></div>
      <p>Profit is earned across the whole year, so the average is the fairest base. What matters most is using the same method for every company being compared.</p>`},
    {k:'The catch', t:'Shrinking equity lifts ROE', b:`
      <p>ROE can rise without the business improving. Take a company with $15M of net income and $100M of equity: ROE is 15%.</p>
      <p>Now it spends $40M of cash buying back its own shares. Equity falls to $60M. If profit stays at $15M, ROE becomes $15M ÷ $60M = <b class="good-t">25%</b>.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Before the buyback</div>
          <p>$15M ÷ $100M</p>
          <div class="pf-r">ROE<b class="mono">15%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">After the buyback</div>
          <p>$15M ÷ $60M</p>
          <div class="pf-r">ROE<b class="mono good-t">25%</b></div>
        </div>
      </div>
      <p>The company earns the same profit. It just has a smaller base. Big losses in past years can shrink equity in the same way, and so can paying out large dividends.</p>`},
    {k:'The limit', t:'When ROE stops making sense', b:`
      <p>Equity is an accounting figure, built from past profits and share sales. It is not what the company is worth today.</p>
      <p>If equity is zero or negative, which can happen after long losses or very large buybacks, ROE is meaningless. A positive profit divided by a negative number gives a negative ROE, even when the business is doing well.</p>
      <p>A single year can also mislead, because profit may include a one-off gain. It helps to look at ROE over several years, and to read it next to the company's debt.</p>
      <p>The next lessons show how to take ROE apart and compare it with other returns.</p>`}
  ],
  qs:[
    {q:'A company earns net income of $30M and has shareholders\' equity of $200M. What is its ROE?',
     o:['15%','6.7%','20%','30%'], a:0,
     e:'ROE = $30M ÷ $200M = 0.15, which is 15%. Dividing the other way round ($200M ÷ $30M) would give 6.7, which is not a return.'},
    {q:'A company earns $21M. Equity was $100M at the start of the year and $120M at the end. What is its ROE on average equity?',
     o:['17.5%','21.0%','19.1%','10.5%'], a:2,
     e:'Average equity = ($100M + $120M) ÷ 2 = $110M. $21M ÷ $110M = 19.1%. Closing equity gives 17.5% and opening equity gives 21.0%.'},
    {q:'A company earns $12M with equity of $80M. It spends $30M of cash on buying back shares, so equity falls to $50M. If profit is unchanged, what is its ROE afterwards?',
     o:['15%','24%','10.9%','40%'], a:1,
     e:'Before: $12M ÷ $80M = 15%. After: $12M ÷ $50M = 24%. The profit did not change; the equity base shrank.'},
    {q:'Why can a high ROE be misleading?',
     o:['ROE cannot be worked out from public accounts','Buybacks or past losses can shrink equity and lift ROE without the business getting better','A high ROE always means the shares are cheap','ROE only counts cash, not profit'], a:1,
     e:'Because ROE divides by equity, anything that shrinks equity (buybacks, big dividends, past losses) pushes the number up even if the business itself is no better.'},
    {q:'True or false: a company with positive profit and negative shareholders\' equity has a meaningful ROE.',
     o:['True','False'], a:1,
     e:'A positive number divided by a negative one gives a negative ROE, which says nothing useful about how well the business earns. The ratio breaks down when equity is zero or negative.'}
  ]
};

const RET_ROA = {
  title:'Return on assets', min:4,
  cards:[
    {k:'The idea', t:'Profit on everything the company owns', b:`
      <p class="lead">Return on assets measures profit against all of a company's assets, not just the part funded by owners. It asks how well the whole business turns what it owns into profit.</p>
      <p>That makes it easier to compare firms that fund themselves in different ways, because debt does not change the size of the asset base on its own.</p>
      <div class="term"><span class="term-k">Key term</span><b>Return on assets (ROA):</b> net income divided by total assets. A 6% ROA means $0.06 of profit for each $1 of assets.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Same profit, different asset base', b:`
      <p>Two made-up packaging companies each earn $12M. Anjar Packaging has $200M of assets. Tripoli Packaging has $120M.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Anjar Packaging</div>
          <p>$12M ÷ $200M</p>
          <div class="pf-r">ROA<b class="mono">6%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Tripoli Packaging</div>
          <p>$12M ÷ $120M</p>
          <div class="pf-r">ROA<b class="mono good-t">10%</b></div>
        </div>
      </div>
      <p>Same profit, but Tripoli gets it from fewer assets. It uses its machines and stock harder.</p>`},
    {k:'The link', t:'How ROA and ROE connect', b:`
      <p>Anjar's equity is $80M, so it funds $120M of its assets with other people's money (debt and bills). Its ROE is:</p>
      <p>$12M ÷ $80M = <b>15%</b>, against an ROA of 6%.</p>
      <p>Assets are 2.5 times equity ($200M ÷ $80M), and 6% × 2.5 = 15%. That 2.5 is the <b>equity multiplier</b>.</p>
      <div class="kv kv3"><div><b>6%</b><span>ROA</span></div><div><b>×2.5</b><span>Assets ÷ equity</span></div><div><b class="good-t">15%</b><span>ROE</span></div></div>
      <p>The more a company leans on borrowed money, the bigger the gap between ROE and ROA. A company with a positive profit will always show ROE above ROA when its assets exceed its equity.</p>`},
    {k:'The limit', t:'What ROA leaves out', b:`
      <p>ROA mixes two things. Profit is what is left for the owners, after interest has been paid to lenders. Assets are funded by both owners and lenders.</p>
      <p>Some analysts fix that mismatch by adding back interest (after tax) to the top of the ratio. Others keep the simple version. It pays to check which one a data source uses before comparing numbers.</p>
      <p>Assets also sit on the balance sheet at their accounting value, which may be well below or above what they are worth. A firm with old, mostly written-down machines can look better than it really is.</p>`}
  ],
  qs:[
    {q:'A company earns net income of $9M and has total assets of $150M. What is its ROA?',
     o:['6%','16.7%','9%','1.5%'], a:0,
     e:'ROA = $9M ÷ $150M = 0.06, or 6%.'},
    {q:'Two companies each earn $10M. Company A has $100M of assets and Company B has $250M. Which statement is correct?',
     o:['B has the higher ROA, by 6 points','Both have the same ROA','A has the higher ROA, by 6 points','A has the higher ROA, by 2.5 points'], a:2,
     e:'A: $10M ÷ $100M = 10%. B: $10M ÷ $250M = 4%. A is higher by 10% − 4% = 6 points.'},
    {q:'A company has an ROE of 15% and an ROA of 5%. How many times larger are its assets than its equity?',
     o:['10','3','0.33','2'], a:1,
     e:'ROE = ROA × (assets ÷ equity), so assets ÷ equity = 15% ÷ 5% = 3.'},
    {q:'A company has $400M of assets, $100M of equity and an ROA of 4%. What is its ROE?',
     o:['4%','25%','10%','16%'], a:3,
     e:'Net income = 4% × $400M = $16M. ROE = $16M ÷ $100M = 16%. Equivalently, 4% × (400 ÷ 100) = 16%.'},
    {q:'A profitable company has far more assets than equity. How do its ROE and ROA compare?',
     o:['ROE is higher, because the same profit is divided by a smaller number','ROA is higher, because assets are bigger','They are always equal','ROE is lower, because debt costs money'], a:0,
     e:'Equity is only part of total assets. The same profit divided by the smaller equity figure gives the higher percentage.'}
  ]
};

const RET_ROIC = {
  title:'Return on invested capital', min:5,
  cards:[
    {k:'The idea', t:'What the business earns on the money put in', b:`
      <p class="lead">Return on invested capital looks at how much the operating business earns on all the money lenders and owners have put into it. It leaves out the effect of how the company chose to fund itself.</p>
      <p>That makes it a clean way to ask whether the business itself is good, before debt choices get involved.</p>
      <div class="term"><span class="term-k">Key term</span><b>Return on invested capital (ROIC):</b> operating profit after tax, divided by the capital invested in the business (debt plus equity, less spare cash). Operating profit after tax is often called NOPAT.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Building ROIC step by step', b:`
      <p>Batroun Motors, a made-up company, has operating profit (EBIT) of $30M and pays tax at 20%.</p>
      <p>NOPAT = $30M × (1 − 0.20) = <b>$24M</b>.</p>
      <p>Its funding: debt $100M, equity $140M, and $40M of cash it does not need for running the business. Invested capital = $100M + $140M − $40M = <b>$200M</b>.</p>
      <div class="kv kv3"><div><b>$24M</b><span>NOPAT</span></div><div><b>$200M</b><span>Invested capital</span></div><div><b class="good-t">12%</b><span>ROIC</span></div></div>
      <p>$24M ÷ $200M = 12%. Definitions vary, especially for cash, so it is worth checking how a data provider builds the figure.</p>`},
    {k:'The link', t:'ROIC against the cost of the money', b:`
      <p>Capital is not free. Lenders want interest and owners want a return. Suppose Batroun's blended cost of that money is 9%.</p>
      <p>ROIC of 12% is 3 percentage points above 9%. On $200M of capital, that gap is worth about 3% × $200M = <b class="good-t">$6M</b> a year of value created.</p>
      <p>If ROIC were below 9%, the business would be earning less than its capital costs. More growth would then use up value instead of adding it.</p>
      <p>Compare with ROE: Batroun pays $5M of interest on its debt, so net income is ($30M − $5M) × 0.8 = $20M, and ROE is $20M ÷ $140M = 14.3%. Debt lifts ROE above ROIC here, but ROIC is the measure of the business itself.</p>`},
    {k:'The limit', t:'Where ROIC is hard', b:`
      <p>Several choices change the answer: whether operating leases count as debt, how much cash is "spare", and whether goodwill from past takeovers is included. Two analysts can reach different ROIC figures for the same company.</p>
      <p>Cost of capital is an estimate too. The 9% above is an example, not a fact.</p>
      <p>ROIC also shows only the past. A high figure says the business has done well, not that new money will earn the same.</p>`}
  ],
  qs:[
    {q:'A company has operating profit (EBIT) of $40M and pays tax at 25%. What is its NOPAT?',
     o:['$30M','$40M','$10M','$53M'], a:0,
     e:'NOPAT = $40M × (1 − 0.25) = $30M. Dividing by 0.75 would give $53M, which goes the wrong way.'},
    {q:'A company has NOPAT of $30M and invested capital of $250M. What is its ROIC?',
     o:['8.3%','15%','12%','30%'], a:2,
     e:'ROIC = $30M ÷ $250M = 0.12, which is 12%.'},
    {q:'A company has debt of $60M, equity of $90M and $20M of spare cash. What is its invested capital?',
     o:['$170M','$150M','$70M','$130M'], a:3,
     e:'Invested capital = $60M + $90M − $20M = $130M. Adding the cash instead would give $170M.'},
    {q:'A company\'s ROIC is 11% and its cost of capital is 8%. Its invested capital is $300M. About how much value does it create in a year?',
     o:['$9M','$33M','$24M','$3M'], a:0,
     e:'The gap is 11% − 8% = 3 percentage points. 3% × $300M = $9M. ($33M is the whole 11% return and $24M is the whole 8% cost.)'},
    {q:'Why do analysts compare ROIC with the cost of capital?',
     o:['To find the share price','To show whether the business earns more than the money in it costs','To work out the tax rate','To count how many shares there are'], a:1,
     e:'A return above the cost of capital means growth adds value. A return below it means growth uses up more than it earns.'}
  ]
};

const RET_DUPONT = {
  title:'The DuPont breakdown', min:5,
  cards:[
    {k:'The idea', t:'One ROE, three levers', b:`
      <p class="lead">The DuPont breakdown splits ROE into three parts. It shows whether a company earns its return from fat margins, from selling a lot against its assets, or from borrowing.</p>
      <p>Two firms with the same ROE can be very different businesses. This tool reveals which.</p>
      <div class="term"><span class="term-k">Key term</span><b>DuPont breakdown:</b> ROE = net margin × asset turnover × equity multiplier. Net margin is profit ÷ sales. Asset turnover is sales ÷ assets. Equity multiplier is assets ÷ equity.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Two routes to a 15% ROE', b:`
      <p>Akkar Grocers sells a lot on thin margins: sales $600M, net income $12M, assets $150M, equity $80M. Jbeil Design Software sells less but keeps more of it: sales $75M, net income $15M, assets $125M, equity $100M.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Akkar Grocers</div>
          <p>2% margin × 4.0 turnover × 1.875 multiplier</p>
          <div class="pf-r">ROE<b class="mono">15%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Jbeil Design Software</div>
          <p>20% margin × 0.6 turnover × 1.25 multiplier</p>
          <div class="pf-r">ROE<b class="mono">15%</b></div>
        </div>
      </div>
      <p>Check Akkar: $12M ÷ $80M = 15%. The grocer wins on turnover. The software firm wins on margin. Both reach the same number by different routes.</p>`},
    {k:'The catch', t:'Leverage is the easy lever', b:`
      <p>Margin and turnover depend on how good the business is. The equity multiplier only depends on how it is funded.</p>
      <p>Take a firm with a 6% net margin and a turnover of 1.0, so ROA is 6%. See what the multiplier does to ROE:</p>
      <div class="kv kv3"><div><b>6%</b><span>Multiplier 1.0</span></div><div><b>12%</b><span>Multiplier 2.0</span></div><div><b class="bad-t">18%</b><span>Multiplier 3.0</span></div></div>
      <p>ROE triples with no change in the business itself. This simple picture ignores that more debt means more interest, which would trim the margin. It also means more risk if sales fall.</p>`},
    {k:'In practice', t:'Reading the three parts', b:`
      <p>When ROE changes, check which part moved. A rise from higher margin or faster turnover points to a better-run business. A rise from the multiplier alone points to more borrowing.</p>
      <p>Compare with peers too. A grocer with a 2% margin is normal. A software firm with a 2% margin would be a worry.</p>
      <p>Margin × turnover is just ROA: 5% × 2.0 = 10%. So the DuPont breakdown is the ROA and equity-multiplier link from the Return on assets lesson, with ROA split in two.</p>`}
  ],
  qs:[
    {q:'A company has a net margin of 5%, an asset turnover of 2.0 and an equity multiplier of 1.5. What is its ROE?',
     o:['15%','10%','7.5%','8.5%'], a:0,
     e:'ROE = 5% × 2.0 × 1.5 = 15%.'},
    {q:'A company has sales of $400M, net income of $20M and total assets of $200M. What is its asset turnover?',
     o:['10','0.5','2.0','20'], a:2,
     e:'Asset turnover = sales ÷ assets = $400M ÷ $200M = 2.0. Turning it upside down gives 0.5, and dividing by profit instead gives 20 or 10, which are not turnover.'},
    {q:'A company has an ROE of 24%, a net margin of 6% and an asset turnover of 2.0. What is its equity multiplier?',
     o:['4.0','1.0','0.5','2.0'], a:3,
     e:'Margin × turnover = 6% × 2.0 = 12%, which is ROA. Multiplier = 24% ÷ 12% = 2.0.'},
    {q:'A company\'s ROE rose from 10% to 15%. Its margin and asset turnover did not change. What must have changed?',
     o:['Its tax rate fell','Its sales rose','Its equity multiplier rose, meaning more of its assets are funded by debt','Its share price rose'], a:2,
     e:'With margin and turnover fixed, the only DuPont part left is the equity multiplier. A higher multiplier means assets are large relative to equity, so there is more borrowing.'},
    {q:'A company has a 4% net margin and an asset turnover of 2.5. What is its ROA?',
     o:['10%','6.5%','1.6%','100%'], a:0,
     e:'ROA = margin × turnover = 4% × 2.5 = 10%. Adding them (6.5%) or dividing (1.6%) are slips.'}
  ]
};

const RET_COMPARE = {
  title:'Comparing returns across industries', min:5,
  cards:[
    {k:'The idea', t:'A fair comparison needs fair rivals', b:`
      <p class="lead">A return of 7% can be excellent in one industry and poor in another. Business models need different amounts of equipment, stock and borrowing, so returns on capital tend to differ by industry.</p>
      <p>The useful question is whether a company beats its own industry and its own cost of money, not whether its number is bigger than a stranger's.</p>
      <div class="term"><span class="term-k">Key term</span><b>Asset-light business:</b> one that earns its profit without owning much equipment or property. Software and consulting are typical examples. An asset-heavy business needs a lot, like a power grid.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'A software firm and a power grid', b:`
      <p>Cedar Tech, a made-up software firm, has NOPAT of $50M on invested capital of $200M. Litani Grid, a made-up power utility, has NOPAT of $56M on $800M.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Cedar Tech</div>
          <p>$50M ÷ $200M</p>
          <div class="pf-r">ROIC<b class="mono good-t">25%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Litani Grid</div>
          <p>$56M ÷ $800M</p>
          <div class="pf-r">ROIC<b class="mono">7%</b></div>
        </div>
      </div>
      <p>Now bring in the cost of money. Say Cedar's is 10% and the grid's is 5.5%, because its income is steadier. The gaps are 15 points for Cedar ($30M of value a year on $200M) and 1.5 points for the grid ($12M a year on $800M). The grid is not a failure: it is earning more than its capital costs.</p>`},
    {k:'The catch', t:'One year is not the story', b:`
      <p>Some industries swing with the economy. Jabal Steel, another made-up firm, reported these ROEs over the first four years:</p>
      <div class="kv"><div><b>22%</b><span>Year 1</span></div><div><b>18%</b><span>Year 2</span></div><div><b>4%</b><span>Year 3</span></div><div><b class="bad-t">−2%</b><span>Year 4</span></div></div>
      <p>Year 5 was 8%. The simple average is (22 + 18 + 4 − 2 + 8) ÷ 5 = <b>10%</b>. Judging Jabal on year 1 alone would give a very different view from judging it on year 4.</p>
      <p>For cyclical firms, an average over a full cycle is a fairer base.</p>`},
    {k:'The limit', t:'The right measure for the sector', b:`
      <p>Banks and insurers take in other people's money as the raw material of their business. Debt is not funding in the usual sense, so ROIC does not fit them. They tend to be judged on ROE and ROA, along with how much capital regulators require them to hold.</p>
      <p>Accounting rules and tax rates differ between countries too, so comparing across borders needs care.</p>
      <p>A sensible comparison uses the same ratio, built the same way, over several years, among companies in the same industry.</p>`}
  ],
  qs:[
    {q:'Why is it unfair to say a power utility is "worse" than a software firm because its ROIC is lower?',
     o:['Utilities do not report profit','Asset-heavy businesses tend to show lower returns on capital than asset-light ones, so each should be judged against its own industry and cost of money','Software firms never pay tax','ROIC only works for utilities'], a:1,
     e:'A grid needs enormous equipment to earn its profit, so its return per dollar of capital tends to be lower. The fair test is against peers and the cost of capital.'},
    {q:'A steel company\'s ROE over five years was 22%, 18%, 4%, −2% and 8%. What is the simple five-year average?',
     o:['22%','8%','12%','10%'], a:3,
     e:'(22 + 18 + 4 − 2 + 8) ÷ 5 = 50 ÷ 5 = 10%.'},
    {q:'A company has an ROIC of 14%, a cost of capital of 9% and invested capital of $500M. About how much value does it create in a year?',
     o:['$25M','$70M','$45M','$5M'], a:0,
     e:'The gap is 14% − 9% = 5 points. 5% × $500M = $25M. ($70M is the whole 14% return and $45M is the whole 9% cost.)'},
    {q:'Why is ROIC an awkward measure for a bank?',
     o:['Banks are not allowed to publish accounts','Banks hold no assets','Deposits and borrowing are the raw material of a bank\'s business, so treating debt as invested capital does not fit','Banks do not earn profit'], a:2,
     e:'A bank\'s borrowing is part of its day-to-day trade, not just a way to fund machines. Banks tend to be judged on ROE and ROA instead.'},
    {q:'Which comparison is most useful?',
     o:['A bank\'s ROE against a software firm\'s ROE, in one year','A grocer\'s ROIC against its peers\' ROIC, built the same way, over several years','A utility\'s ROA against a retailer\'s ROE','One company\'s best year against another company\'s worst year'], a:1,
     e:'Same industry, same definition and a run of years gives the fairest picture. The other options mix different business models, ratios or time periods.'}
  ]
};

const RET_CHECK = {
  title:'Unit check', min:4, badge:{name:'Return Analyst', icon:'up'}, cards:[],
  qs:[
    {q:'A company earns $24M. Equity was $180M at the start of the year and $220M at the end. What is its ROE on average equity?',
     o:['10.9%','12%','13.3%','24%'], a:1,
     e:'Average equity = ($180M + $220M) ÷ 2 = $200M. $24M ÷ $200M = 12%. Closing equity gives 10.9% and opening equity gives 13.3%.'},
    {q:'A company has an ROA of 6% and its assets are 2.5 times its equity. What is its ROE?',
     o:['8.5%','3.6%','15%','2.4%'], a:2,
     e:'ROE = ROA × equity multiplier = 6% × 2.5 = 15%.'},
    {q:'A company has EBIT of $56M, a 25% tax rate, debt of $150M, equity of $250M and $50M of spare cash. What is its ROIC?',
     o:['12%','10.5%','14%','16%'], a:0,
     e:'NOPAT = $56M × 0.75 = $42M. Invested capital = $150M + $250M − $50M = $350M. ROIC = $42M ÷ $350M = 12%.'},
    {q:'A company has an ROIC of 12%, a cost of capital of 9% and invested capital of $350M. About how much value does it create in a year?',
     o:['$31.5M','$42M','$3.5M','$10.5M'], a:3,
     e:'The gap is 12% − 9% = 3 points. 3% × $350M = $10.5M. ($42M is the whole return and $31.5M is the whole cost.)'},
    {q:'A company has a 4% net margin, an asset turnover of 3.0 and an equity multiplier of 2.0. What is its ROE?',
     o:['12%','9%','24%','6%'], a:2,
     e:'ROE = 4% × 3.0 × 2.0 = 24%. Without the multiplier, ROA is 4% × 3.0 = 12%.'},
    {q:'A company earns $10M with $100M of equity. It spends $50M of cash buying back shares and profit stays at $10M. What is its ROE afterwards?',
     o:['10%','20%','25%','16.7%'], a:1,
     e:'Equity falls to $50M. $10M ÷ $50M = 20%, up from 10%, though profit is unchanged.'},
    {q:'Company A is asset-light with an ROIC of 30% and a cost of capital of 10%. Company B is asset-heavy with an ROIC of 8% and a cost of capital of 6%. How many points wider is A\'s gap?',
     o:['22','20','18','2'], a:2,
     e:'A\'s gap is 30% − 10% = 20 points. B\'s gap is 8% − 6% = 2 points. The difference is 18 points. B still earns more than its capital costs.'},
    {q:'A firm\'s ROE jumps from 8% to 24% in one year. Which finding would show the jump came from borrowing rather than a better business?',
     o:['Its net margin doubled','Its asset turnover tripled','Its equity multiplier rose from 1.5 to 4.5 while margin and turnover stayed the same','Its sales grew faster than its rivals\''], a:2,
     e:'4.5 ÷ 1.5 = 3, which triples ROE (8% to 24%) with no change in margin or turnover. That is leverage, not a better business.'}
  ]
};

const UNIT_RETURNS = {id:'returns', title:'Returns ratios', level:'Vault', lessons:[RET_ROE, RET_ROA, RET_ROIC, RET_DUPONT, RET_COMPARE, RET_CHECK]};

/* Vault unit: no placement questions. */

/* MATHS CHECK: every calculation and its result, for the reviewer. All recomputed in Python.
   Lesson 1 (Zahle Textiles, $M)
   - Closing equity 90 + 18 - 6 = 102; ROE opening 18/90 = 20.0%; closing 18/102 = 17.65% (17.6%); average (90+102)/2 = 96, 18/96 = 18.75%
   - Buyback: 15/100 = 15%; equity 100 - 40 = 60; 15/60 = 25%
   - Q1: 30/200 = 15% (slip 200/30 = 6.67). Q2: avg 110; 21/110 = 19.09%; 21/120 = 17.5%; 21/100 = 21%; 21/200 = 10.5%
   - Q3: 12/80 = 15%; equity 80-30 = 50; 12/50 = 24%; slips 12/110 = 10.9%, 12/30 = 40%
   Lesson 2
   - Anjar 12/200 = 6%; Tripoli 12/120 = 10%; Anjar equity 80: 12/80 = 15%; 200/80 = 2.5; 6% x 2.5 = 15%; funded by others 200-80 = 120
   - Q1: 9/150 = 6% (slip 150/9). Q2: 10/100 = 10%, 10/250 = 4%, gap 6. Q3: 15%/5% = 3
   - Q4: 4% x 400 = 16; 16/100 = 16% (slip 100/400 = 25%)
   Lesson 3 (Batroun Motors, $M)
   - NOPAT 30 x 0.8 = 24; invested capital 100 + 140 - 40 = 200; ROIC 24/200 = 12%
   - Spread 12% - 9% = 3 points; 3% x 200 = 6
   - Interest 5: (30 - 5) x 0.8 = 20; ROE 20/140 = 14.29%
   - Q1: 40 x 0.75 = 30 (slip 40/0.75 = 53.3). Q2: 30/250 = 12%. Q3: 60+90-20 = 130 (slip 170 = 60+90+20)
   - Q4: 3% x 300 = 9; 11% x 300 = 33; 8% x 300 = 24
   Lesson 4
   - Akkar: 12/600 = 2%; 600/150 = 4.0; 150/80 = 1.875; 0.02 x 4 x 1.875 = 15%; 12/80 = 15%
   - Jbeil: 15/75 = 20%; 75/125 = 0.6; 125/100 = 1.25; 0.2 x 0.6 x 1.25 = 15%; 15/100 = 15%
   - Leverage: 6% x 1.0 = 6%; x 2.0 = 12%; x 3.0 = 18% (triple)
   - ROA example 5% x 2.0 = 10%
   - Q1: 0.05 x 2 x 1.5 = 15%. Q2: 400/200 = 2.0 (slips 400/80 = 5.0, 200/400 = 0.5). Q3: 6% x 2.0 = 12%; 24/12 = 2.0
   - Q5: 4% x 2.5 = 10% (slips 4+2.5 = 6.5, 4/2.5 = 1.6)
   Lesson 5
   - Cedar 50/200 = 25%; Litani Grid 56/800 = 7%; spreads (25-10) = 15 points x 200 = 30; (7-5.5) = 1.5 points x 800 = 12
   - Jabal: (22+18+4-2+8)/5 = 50/5 = 10
   - Q3: (14-9) = 5 points x 500 = 25; 14% x 500 = 70; 9% x 500 = 45
   Unit check
   - Q1: avg 200; 24/200 = 12%; 24/220 = 10.9%; 24/180 = 13.3%. Q2: 6% x 2.5 = 15%
   - Q3: 56 x 0.75 = 42; 150+250-50 = 350; 42/350 = 12%. Q4: 3% x 350 = 10.5; 12% x 350 = 42; 9% x 350 = 31.5
   - Q5: 4% x 3 = 12%; x 2 = 24%. Q6: 100-50 = 50; 10/50 = 20%
   - Q7: (30-10) = 20; (8-6) = 2; 20-2 = 18. Q8: 4.5/1.5 = 3; 8% x 3 = 24% */
