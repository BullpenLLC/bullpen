/* ---------- Time value of money ---------- */
const TVM_TODAY_TOMORROW = {
  title:'Today vs tomorrow', min:4,
  cards:[
    {k:'The idea', t:'Sooner beats later', b:`
      <p class="lead">Offer someone $1,000 today or $1,000 in a year, and nearly everyone takes it today. They're right to. Money in hand can do things that money promised for later can't.</p>
      <p>Bond prices, loan payments and company valuations all rest on this one idea.</p>
      <div class="term"><span class="term-k">Key term</span><b>Time value of money:</b> the idea that an amount of money today is worth more than the same amount in the future.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Three reasons', t:'Why waiting costs something', b:`
      <p><b>1. It could be earning.</b> Money you have now can go into savings or an investment straight away. Waiting means giving up that return.</p>
      <p><b>2. Prices rise.</b> Inflation means the same money buys a little less each year. In Lebanon after 2019, prices in lira rose so fast that savings held in lira lost most of their buying power.</p>
      <p><b>3. Promises can break.</b> A payment due later might arrive late, or not at all. Money already in hand doesn't depend on anyone keeping a promise.</p>
      <div class="term"><span class="term-k">Key term</span><b>Opportunity cost:</b> what you give up by choosing one option over the next best one. The return you miss by waiting is an opportunity cost.</div>`},
    {k:'Do the maths', t:'Putting a price on waiting', b:`
      <p>A savings account pays 5% a year. Compare two offers:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">$1,000 today</div>
          <p>Saved at 5% for a year</p>
          <div class="pf-r">Worth in a year<b class="mono good-t">$1,050</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">$1,040 in a year</div>
          <p>Nothing to do but wait</p>
          <div class="pf-r">Worth in a year<b class="mono">$1,040</b></div>
        </div>
      </div>
      <p>$1,000 × 1.05 = $1,050, which beats $1,040. The later offer is bigger on paper but worth less, because waiting costs the 5% that could have been earned.</p>
      <p>Inflation bites too. If prices rise 3% over the year, $1,000 next year buys about what $970.87 buys today: $1,000 ÷ 1.03 = $970.87.</p>`},
    {k:'In practice', t:'The discount rate', b:`
      <p>To compare money at different dates, finance uses one number: the yearly return given up by waiting. In the savings example, that was 5%.</p>
      <div class="term"><span class="term-k">Key term</span><b>Discount rate:</b> the yearly return you could earn elsewhere, at similar risk, on money you have today. It's the price of waiting.</div>
      <div class="split">
        <div class="col good"><div class="col-h">Safer promise</div><b>Lower discount rate</b><p>A payment from a government with a long record of paying on time.</p></div>
        <div class="col bad"><div class="col-h">Riskier promise</div><b>Higher discount rate</b><p>A payment from a young company that may not survive.</p></div>
      </div>
      <p>The riskier the promise, the more return people demand for waiting, so the less it's worth today. The next lessons turn this into formulas.</p>`}
  ],
  qs:[
    {q:'Which of these is NOT a reason money today is worth more than the same amount later?',
     o:['Money received later is always taxed more','It could earn a return in the meantime','Inflation can shrink what it buys','A payment due later might never arrive'], a:0,
     e:'The three reasons are the return you miss, inflation, and the risk that the payment never comes. Tax has nothing to do with the basic idea.'},
    {q:'A savings account pays 4% a year. Which is worth more: $500 today, or $515 in one year?',
     o:["$515 in a year, because it's the bigger number",'$500 today, because saved at 4% it grows to $520','They are worth exactly the same','$515 in a year, because inflation rewards waiting'], a:1,
     e:'$500 × 1.04 = $520 in a year, which beats $515. Waiting would cost more than it pays.'},
    {q:'Nour turns down a summer job paying $2,000 to take an unpaid course instead. What is the $2,000 an example of?',
     o:['Compounding','A discount rate','Inflation','An opportunity cost'], a:3,
     e:'Opportunity cost is what you give up by choosing one option over the next best one. Here, that is the $2,000 of pay.'},
    {q:"Prices rise 5% over the next year. In today's money, roughly what will $1,050 received next year buy?",
     o:['$950','$1,050','$1,000','$1,102.50'], a:2,
     e:'$1,050 ÷ 1.05 = $1,000. Prices rose by the same 5%, so it buys what $1,000 buys today.'},
    {q:'Two promises of $1,000 in a year: one from a government with a long record of paying, one from a small new company. Which would people usually apply a higher discount rate to?',
     o:['The government, because it is bigger',"The small company, because there's more chance it doesn't pay",'Neither: both promise $1,000','The government, because its promise is safer'], a:1,
     e:'A riskier promise needs a higher rate to be worth waiting for, which makes it worth less today.'}
  ]
};

const TVM_FUTURE_VALUE = {
  title:'Future value', min:5,
  cards:[
    {k:'The idea', t:'Growing money forward', b:`
      <p class="lead">Future value answers one question: if money grows at a steady rate, what will it be worth later? It's the compounding from the How markets work unit, written as a formula.</p>
      <p><b>FV = PV × (1 + r)^n</b></p>
      <p>PV is the money you start with. r is the rate per period, as a decimal, so 6% is 0.06. n is the number of periods. The ^n means "multiply by (1 + r), n times".</p>
      <div class="term"><span class="term-k">Key term</span><b>Future value (FV):</b> what an amount today grows to after a number of periods at a given rate.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'$2,000 at 6% for 5 years', b:`
      <p>FV = $2,000 × 1.06^5 = $2,000 × 1.06 × 1.06 × 1.06 × 1.06 × 1.06 = <b class="good-t">$2,676.45</b></p>
      <div class="kv"><div><b>$2,000</b><span>Today</span></div><div><b>$2,120</b><span>Year 1</span></div><div><b>$2,382</b><span>Year 3</span></div><div><b class="good-t">$2,676</b><span>Year 5</span></div></div>
      <p>Simple interest pays only on the original amount: 6% of $2,000 is $120 a year, so $2,600 after 5 years. The extra $76.45 is interest earned on interest.</p>
      <p>The rule of 72 from the How markets work unit is a quick shortcut for this same formula.</p>`},
    {k:'How often', t:'Yearly vs monthly', b:`
      <p>Two accounts both quote 12% a year on $1,000. One adds interest once a year. The other adds 1% every month (12% ÷ 12).</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Yearly</div>
          <p>$1,000 × 1.12</p>
          <div class="pf-r">After a year<b class="mono">$1,120.00</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Monthly</div>
          <p>$1,000 × 1.01^12</p>
          <div class="pf-r">After a year<b class="mono good-t">$1,126.83</b></div>
        </div>
      </div>
      <p>Monthly interest starts earning interest sooner, so the same quoted 12% works out to 12.68% over a year. Adding interest every day gives 12.75%. More often helps, but by less and less.</p>
      <div class="term"><span class="term-k">Key term</span><b>Effective annual rate (EAR):</b> the true yearly return once compounding is counted. EAR = (1 + r ÷ m)^m − 1, where r is the quoted yearly rate and m is how many times a year interest is added.</div>`},
    {k:'The catch', t:'Match the rate to the period', b:`
      <p>r and n have to use the same period. With monthly interest, r is the monthly rate and n counts months.</p>
      <p>$5,000 at 6% a year, added monthly, for 3 years: r = 6% ÷ 12 = 0.5% and n = 3 × 12 = 36.</p>
      <p>FV = $5,000 × 1.005^36 = <b class="good-t">$5,983.40</b></p>
      <p>Mix them up, using 6% with n = 36, and you get $40,736, as if the money earned 6% every month for three years.</p>
      <p>Debt works the same way. A credit card charging 24% a year, added monthly, really costs 1.02^12 − 1 = 26.82% a year.</p>`}
  ],
  qs:[
    {q:'$1,500 goes into an account paying 5% a year, added yearly. What is it worth after 3 years?',
     o:['$1,725.00','$1,653.75','$1,736.44','$1,575.00'], a:2,
     e:'FV = $1,500 × 1.05^3 = $1,500 × 1.157625 = $1,736.44. $1,725 is simple interest, which leaves out interest on interest.'},
    {q:'An account pays 6% a year, with interest added monthly. Which r and n give its value after 2 years?',
     o:['r = 6%, n = 2','r = 0.5%, n = 24','r = 6%, n = 24','r = 0.5%, n = 2'], a:1,
     e:'Monthly interest means monthly periods: r = 6% ÷ 12 = 0.5% and n = 2 × 12 = 24 months.'},
    {q:'$10,000 earns 10% a year. Account A adds it once a year. Account B adds 5% every six months. What does each hold after one year?',
     o:['A $11,000, B $11,025','Both $11,000','A $11,000, B $12,100','A $11,025, B $11,000'], a:0,
     e:"A: $10,000 × 1.10 = $11,000. B: $10,000 × 1.05^2 = $11,025. B's first half-year of interest earns interest too."},
    {q:'A credit card charges 18% a year, with interest added monthly. What is its effective annual rate?',
     o:['18.00%','1.50%','19.25%','19.56%'], a:3,
     e:'The monthly rate is 18% ÷ 12 = 1.5%. EAR = 1.015^12 − 1 = 19.56%. 19.25% is what adding interest quarterly would give.'},
    {q:'$1,000 at 8% a year grows to $2,158.92 in 10 years. What is it worth after 20 years?',
     o:['$4,317.85','$2,600.00','$4,660.96','$3,317.85'], a:2,
     e:'FV = $1,000 × 1.08^20 = $4,660.96. The second 10 years multiply the balance by 1.08^10 ≈ 2.16 again, not by 2, so simply doubling to $4,317.85 falls short.'}
  ]
};

const TVM_PRESENT_VALUE = {
  title:'Present value', min:5,
  cards:[
    {k:'The idea', t:'Pulling money back to today', b:`
      <p class="lead">Future value grows money forward. Present value runs the same formula backwards: what is an amount paid later worth right now?</p>
      <p><b>PV = FV ÷ (1 + r)^n</b></p>
      <p>Here r is the discount rate: the yearly return given up by waiting.</p>
      <div class="term"><span class="term-k">Key term</span><b>Discounting:</b> working out what a future amount is worth today, by taking out the return it could have earned in the meantime.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'$1,000 in 5 years, at 8%', b:`
      <p>PV = $1,000 ÷ 1.08^5 = $1,000 ÷ 1.469328 = <b class="good-t">$680.58</b></p>
      <div class="kv kv3"><div><b>$1,000</b><span>Paid in 5 years</span></div><div><b>8%</b><span>Discount rate</span></div><div><b class="good-t">$680.58</b><span>Worth today</span></div></div>
      <p>Check it forwards: $680.58 saved at 8% for 5 years grows to $1,000. So for anyone who can earn 8%, $680.58 today and $1,000 in 5 years are worth the same.</p>`},
    {k:'Two levers', t:'Higher rates, longer waits', b:`
      <p>What $1,000 paid later is worth today. First, waiting longer at 8%:</p>
      <div class="score"><div><b>$925.93</b><span>In 1 year</span></div><div><b>$680.58</b><span>In 5 years</span></div><div><b class="bad-t">$463.19</b><span>In 10 years</span></div></div>
      <p>Then a higher rate, all paid in 10 years:</p>
      <div class="score"><div><b>$675.56</b><span>At 4%</span></div><div><b>$463.19</b><span>At 8%</span></div><div><b class="bad-t">$321.97</b><span>At 12%</span></div></div>
      <p>Both levers shrink present value, and together they shrink it fast. Money promised far in the future, at a high discount rate, is worth surprisingly little today.</p>`},
    {k:'In practice', t:'Comparing two offers', b:`
      <p>A competition prize: $5,000 now, or $5,600 in 2 years. Bring the later one back to today and compare.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">At a 6% rate</div>
          <p>$5,600 ÷ 1.06^2 = $5,600 ÷ 1.1236</p>
          <div class="pf-r">Worth today<b class="mono bad-t">$4,983.98</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">At a 5% rate</div>
          <p>$5,600 ÷ 1.05^2 = $5,600 ÷ 1.1025</p>
          <div class="pf-r">Worth today<b class="mono good-t">$5,079.37</b></div>
        </div>
      </div>
      <p>At 6%, the $5,000 now is worth slightly more. At 5%, the $5,600 later is. There's no single right answer: it turns on the discount rate, which depends on what the money could earn and how sure the later payment is.</p>`}
  ],
  qs:[
    {q:'What is $2,000, paid in 3 years, worth today at a 5% discount rate?',
     o:['$1,700.00','$1,727.68','$1,904.76','$2,315.25'], a:1,
     e:'PV = $2,000 ÷ 1.05^3 = $2,000 ÷ 1.157625 = $1,727.68. $2,315.25 grows the money forward instead of discounting it.'},
    {q:'The amount and the wait stay the same, but the discount rate rises. What happens to the present value?',
     o:['It rises','It stays the same','It falls','It doubles'], a:2,
     e:'You divide by (1 + r)^n. A bigger r makes that number bigger, so the present value shrinks.'},
    {q:'At a 10% discount rate, which of these is worth the most today?',
     o:['$1,300 in 3 years','$1,000 today','$1,200 in 2 years','$1,150 in 1 year'], a:3,
     e:'In today\'s money: $1,150 ÷ 1.1 = $1,045.45, $1,000, $1,200 ÷ 1.21 = $991.74 and $1,300 ÷ 1.331 = $976.71.'},
    {q:'What does "discounting" mean in finance?',
     o:['Working out what a future amount is worth today','Selling something below its usual price',"Growing today's money forward at a rate","Taking fees off an investment's return"], a:0,
     e:'Discounting takes a future amount and removes the return it could have earned while you waited.'},
    {q:'Someone can earn 6% a year. They are offered $10,000 in 4 years in exchange for $8,000 today. What is that $10,000 worth to them today?',
     o:['$12,624.77, more than the $8,000','About $7,920.94, a little less than the $8,000','Exactly $8,000','$10,000, since the amount is fixed'], a:1,
     e:'PV = $10,000 ÷ 1.06^4 = $10,000 ÷ 1.262477 = $7,920.94. At 6%, paying $8,000 for it means paying about $79 more than it is worth to them.'}
  ]
};

const TVM_ANNUITIES = {
  title:'Annuities and loans', min:5,
  cards:[
    {k:'The idea', t:'Equal payments, regular dates', b:`
      <p class="lead">A lot of money moves in equal amounts on a schedule: rent, loan instalments, a pension, a phone contract. Finance has one name for all of them.</p>
      <div class="term"><span class="term-k">Key term</span><b>Annuity:</b> a series of equal payments made at regular intervals, like every month or every year.</div>
      <p>You could value one by discounting each payment separately. A single formula does the same job in one step.</p>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Three payments, two ways', b:`
      <p>$1,000 at the end of each year for 3 years, at a 5% discount rate. One by one:</p>
      <p>$1,000 ÷ 1.05 = $952.38<br>$1,000 ÷ 1.05^2 = $907.03<br>$1,000 ÷ 1.05^3 = $863.84<br>Total: <b>$2,723.25</b></p>
      <p>Or in one step:</p>
      <p><b>PV = PMT × [1 − (1 + r)^−n] ÷ r</b></p>
      <p>PMT is each payment, and (1 + r)^−n just means 1 ÷ (1 + r)^n. So: $1,000 × [1 − 0.8638376] ÷ 0.05 = $1,000 × 2.723248 = <b class="good-t">$2,723.25</b>.</p>
      <p>The formula assumes each payment comes at the end of its period.</p>`},
    {k:'Loans', t:'Working out a monthly payment', b:`
      <p>A loan is an annuity seen from the lender's side: they hand over a sum today and get equal payments back. Rearranged to find the payment:</p>
      <p><b>PMT = PV × r ÷ [1 − (1 + r)^−n]</b></p>
      <p>A $20,000 student loan at 6% a year, repaid monthly over 10 years: r = 6% ÷ 12 = 0.5% and n = 120 months.</p>
      <p>PMT = $20,000 × 0.005 ÷ [1 − 1.005^−120] = $100 ÷ 0.450367 = <b>$222.04</b> a month.</p>
      <div class="kv kv3"><div><b>$222.04</b><span>Each month</span></div><div><b>≈$26,645</b><span>Paid in total</span></div><div><b class="bad-t">≈$6,645</b><span>Interest</span></div></div>
      <p>120 × $222.04 = $26,644.80. Take off the $20,000 borrowed, and about $6,645 is interest.</p>`},
    {k:'The catch', t:'Longer loans cost more', b:`
      <p>The same $20,000 at 6%, over 5 years instead of 10:</p>
      <div class="split">
        <div class="col good"><div class="col-h">5 years</div><b class="mono">$386.66 a month</b><p>About $3,200 of interest in total.</p></div>
        <div class="col bad"><div class="col-h">10 years</div><b class="mono">$222.04 a month</b><p>About $6,645 of interest, more than twice as much.</p></div>
      </div>
      <p>A smaller payment is easier to fit in a budget, but interest runs for longer. In month one, 0.5% of $20,000 is $100 of interest, so only $122.04 of the $222.04 cuts the amount owed. As the balance falls, more of each payment goes to the loan itself.</p>
      <div class="term"><span class="term-k">Key term</span><b>Amortisation:</b> paying off a loan in equal instalments. Each payment covers that period's interest, and the rest reduces the amount owed.</div>`}
  ],
  qs:[
    {q:'Someone will receive $500 at the end of each year for 4 years. At a 6% discount rate, what is that stream worth today?',
     o:['$2,000.00','$1,584.19','$2,187.31','$1,732.55'], a:3,
     e:'PV = $500 × [1 − 1.06^−4] ÷ 0.06 = $500 × 3.465106 = $1,732.55. $2,000 ignores the wait, and $2,187.31 is what the payments grow to by year 4.'},
    {q:'Which of these is an annuity?',
     o:['A single $5,000 payment in 3 years','$250 paid on the first of every month for 2 years','A dividend that changes every year','A lottery prize paid all at once'], a:1,
     e:'An annuity is a series of equal payments at regular intervals. The others are one-off or uneven.'},
    {q:'A $10,000 loan at 12% a year is repaid monthly over 2 years. What is the monthly payment?',
     o:['$416.67','$516.67','$470.73','$1,284.63'], a:2,
     e:'r = 12% ÷ 12 = 1% and n = 24. PMT = $10,000 × 0.01 ÷ [1 − 1.01^−24] = $100 ÷ 0.212434 = $470.73. $416.67 leaves out interest, and $1,284.63 wrongly uses 12% as a monthly rate.'},
    {q:'A $9,000 loan is repaid with 36 monthly payments of $300. How much interest is paid in total?',
     o:['$10,800','$300','$1,800','$9,000'], a:2,
     e:'Total paid: 36 × $300 = $10,800. Take off the $9,000 borrowed, and $1,800 is interest.'},
    {q:'A loan of the same amount at the same rate is spread over 8 years instead of 4. What happens?',
     o:['Lower monthly payments, but more interest overall','Higher monthly payments and less interest overall','Lower monthly payments and less interest overall','The same total interest, spread more thinly'], a:0,
     e:'Spreading the loan out lowers each payment, but interest is charged for longer, so the total cost rises.'}
  ]
};

const TVM_NPV_IRR = {
  title:'NPV and IRR', min:5,
  cards:[
    {k:'The idea', t:'Is it worth what it costs?', b:`
      <p class="lead">Companies weigh projects that cost money today and pay back over years: a new machine, a new shop, a new product. Net present value puts the cost and the payback in today's dollars, so they can be compared fairly.</p>
      <p>Cash flows are the money a project brings in, or costs, in each period.</p>
      <p><b>NPV = PV of future cash flows − cost today</b></p>
      <div class="term"><span class="term-k">Key term</span><b>Net present value (NPV):</b> what a project's future cash is worth today, minus what it costs today. A positive NPV means the project earns more than the discount rate, so at that rate it adds value.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:"Byblos Foods' new oven", b:`
      <p>Byblos Foods, a made-up bakery chain, can buy an oven for $10,000. It expects the oven to bring in $4,000, $4,500 and $5,000 of extra cash over the next 3 years. Its discount rate is 10%.</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Paired bars for each year: the cash when paid and what it is worth today at 10%. Year 1: $4,000, worth $3,636. Year 2: $4,500, worth $3,719. Year 3: $5,000, worth $3,757. The later the cash arrives, the more it shrinks. Total worth today: $11,112.">
        <rect x="60" y="6" width="10" height="10" rx="2" fill="var(--bull)"/>
        <rect x="180" y="6" width="10" height="10" rx="2" fill="var(--sky)"/>
        <rect x="60" y="28" width="144" height="12" rx="3" fill="var(--bull)"/>
        <rect x="60" y="42" width="130.9" height="12" rx="3" fill="var(--sky)"/>
        <rect x="60" y="68" width="162" height="12" rx="3" fill="var(--bull)"/>
        <rect x="60" y="82" width="133.9" height="12" rx="3" fill="var(--sky)"/>
        <rect x="60" y="108" width="180" height="12" rx="3" fill="var(--bull)"/>
        <rect x="60" y="122" width="135.2" height="12" rx="3" fill="var(--sky)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="74" y="15">Cash when paid</text><text x="194" y="15">Worth today</text>
          <text x="0" y="45">Year 1</text><text x="0" y="85">Year 2</text><text x="0" y="125">Year 3</text>
          <text x="209" y="38" fill="var(--ink)">$4,000</text><text x="195.9" y="52">$3,636</text>
          <text x="227" y="78" fill="var(--ink)">$4,500</text><text x="198.9" y="92">$3,719</text>
          <text x="245" y="118" fill="var(--ink)">$5,000</text><text x="200.2" y="132">$3,757</text>
          <text x="150" y="154" text-anchor="middle" fill="var(--ink)">Total worth today: $11,112</text>
        </g>
      </svg>
      <p>$4,000 ÷ 1.1 + $4,500 ÷ 1.1^2 + $5,000 ÷ 1.1^3 = $3,636 + $3,719 + $3,757 = $11,112 (to the nearest dollar).</p>
      <p>NPV = $11,112 − $10,000 = <b class="good-t">+$1,112</b>. At 10%, the oven is worth more than it costs.</p>`},
    {k:'The break-even rate', t:'Internal rate of return', b:`
      <p>Raise the discount rate and the future cash is worth less. At 20%, the same oven has an NPV of about −$648: $3,333 + $3,125 + $2,894 − $10,000.</p>
      <div class="score"><div><b class="good-t">+$1,112</b><span>NPV at 10%</span></div><div><b>$0</b><span>NPV at ≈16%</span></div><div><b class="bad-t">−$648</b><span>NPV at 20%</span></div></div>
      <p>Somewhere in between, NPV is exactly zero. There's usually no simple formula for that rate, so spreadsheets find it by trial and error. For the oven it's about 16.0%.</p>
      <div class="term"><span class="term-k">Key term</span><b>Internal rate of return (IRR):</b> the discount rate that makes a project's NPV exactly zero. For a project that costs money up front and pays back later, an IRR above the discount rate means a positive NPV.</div>`},
    {k:'The limit', t:'Only as good as the guesses', b:`
      <p>The cash flows are forecasts. If the oven brings in 20% less each year ($3,200, $3,600 and $4,000), its NPV at 10% drops to about −$1,110, and its IRR to about 3.8%.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Forecasts</div><b>Easy to be too hopeful</b><p>Fairly small changes in expected cash can flip NPV from positive to negative.</p></div>
        <div class="col bad"><div class="col-h">The rate</div><b>A judgement call</b><p>At 10% the oven adds value. At 20% it doesn't.</p></div>
      </div>
      <p>IRR has quirks of its own. It ignores size: at a 10% discount rate, a one-year project returning 40% on $1,000 adds about $273, while one returning 18% on $1 million adds about $72,727. And if cash flows switch between in and out more than once, there can be more than one IRR.</p>
      <p>NPV and IRR are only as reliable as the numbers fed into them.</p>`}
  ],
  qs:[
    {q:'A project costs $5,000 today and pays $6,000 in one year. At a 10% discount rate, what is its NPV?',
     o:['$1,000.00','$545.45','$5,454.55','$454.55'], a:3,
     e:'PV of the $6,000 = $6,000 ÷ 1.1 = $5,454.55. NPV = $5,454.55 − $5,000 = $454.55.'},
    {q:'At an 8% discount rate, a project has an NPV of −$2,000. What does that mean?',
     o:['It will lose $2,000 for certain','It earns less than 8%, so at that rate it takes away value','It earns exactly 8%','It earns more than 8%'], a:1,
     e:'Its cash, discounted at 8%, is worth less than its cost. That is not a certain loss: the forecasts could turn out better or worse.'},
    {q:"What is a project's internal rate of return (IRR)?",
     o:['The discount rate that makes its NPV exactly zero','The interest rate on the loan used to pay for it','Its total profit divided by its cost','The rate of inflation over its life'], a:0,
     e:'IRR is the break-even discount rate: the rate at which the present value of the cash coming in exactly equals the cost.'},
    {q:'A project costs money up front and pays back over the next 5 years. Its IRR is 12%, and the company uses a 9% discount rate. What is its NPV at 9%?',
     o:['Negative','Zero','Positive',"It can't be known without more numbers"], a:2,
     e:'For a cost up front followed by cash coming in, NPV falls as the rate rises and hits zero at the IRR. At 9%, below the 12% IRR, NPV is positive.'},
    {q:'Two analysts value the same project and get very different NPVs. What is the most likely reason?',
     o:['NPV changes every day with the share price','One of them must have made an arithmetic slip','NPV and IRR always disagree','They used different cash flow forecasts or discount rates'], a:3,
     e:'NPV rests on two judgement calls: the forecasts and the rate. Change either one and the answer moves.'}
  ]
};

const TVM_CHECK = {
  title:'Unit check', min:4, badge:{name:'Time Traveller', icon:'flag'}, cards:[],
  qs:[
    {q:'A savings account pays 4% a year, and prices also rise 4% over the year. In terms of what it can buy, what happens to $1,000 left there for the year?',
     o:['It buys 4% more','It buys about the same as $1,000 did','It buys 8% more','It buys 4% less'], a:1,
     e:"It grows to $1,040, but things cost 4% more. $1,040 ÷ 1.04 = $1,000 in today's money, so its buying power stays the same."},
    {q:'$3,000 earns 9% a year, with interest added monthly. What is it worth after 2 years?',
     o:['$3,540.00','$3,564.30','$23,733.25','$3,589.24'], a:3,
     e:'r = 9% ÷ 12 = 0.75% and n = 24. FV = $3,000 × 1.0075^24 = $3,589.24. $3,564.30 adds interest yearly, and $23,733.25 wrongly uses 9% as a monthly rate.'},
    {q:'Bank A pays 7.2% a year, added once a year. Bank B pays 7% a year, added monthly. Which pays more over a year?',
     o:['Bank B: 7% added monthly works out to about 7.23%','Bank A: 7.2% is higher than 7%','They pay exactly the same','Bank B: 7% added monthly works out to 84%'], a:0,
     e:"B's effective annual rate = (1 + 0.07 ÷ 12)^12 − 1 = 7.23%, just above A's 7.2%. The quoted rate alone can mislead."},
    {q:'A prize is $10,000 now or $12,000 in 3 years. Which is worth more today at a 5% discount rate, and which at 8%?',
     o:['$12,000 later at both rates','$10,000 now at both rates','$12,000 later at 5%, $10,000 now at 8%','$10,000 now at 5%, $12,000 later at 8%'], a:2,
     e:'At 5%: $12,000 ÷ 1.157625 = $10,366.05, more than $10,000. At 8%: $12,000 ÷ 1.259712 = $9,525.99, less than $10,000.'},
    {q:'At a 5% discount rate, which is worth more today: $10,000 now, or $2,400 at the end of each year for 5 years?',
     o:['$10,000 now, since the $2,400 payments are spread out','They are worth exactly the same','The $2,400 a year: worth $10,390.74 today','The $2,400 a year: worth $12,000 today'], a:2,
     e:'PV = $2,400 × [1 − 1.05^−5] ÷ 0.05 = $2,400 × 4.329477 = $10,390.74, more than $10,000. Adding the payments up to $12,000 ignores the wait.'},
    {q:'A $12,000 loan at 12% a year is repaid with 36 monthly payments of $398.57. How much of the first payment reduces the amount owed?',
     o:['$120.00','$398.57','$333.33','$278.57'], a:3,
     e:"First month's interest: 1% of $12,000 = $120. The rest, $398.57 − $120 = $278.57, pays down the loan."},
    {q:'A project costs $8,000 today and brings in $3,000 a year for 3 years. At an 8% discount rate, what is its NPV?',
     o:['+$1,000.00','−$268.71','+$268.71','$7,731.29'], a:1,
     e:'PV = $3,000 × [1 − 1.08^−3] ÷ 0.08 = $3,000 × 2.577097 = $7,731.29. NPV = $7,731.29 − $8,000 = −$268.71. The $9,000 total looks like a gain until the wait is priced in.'},
    {q:'A project costs $1,000 today and pays $1,210 in 2 years, with nothing in between. What is its IRR?',
     o:['10%','21%','10.5%','1.21%'], a:0,
     e:'IRR is the rate where NPV = 0: $1,000 × (1 + r)^2 = $1,210, so (1 + r)^2 = 1.21 and r = 10%. 10.5% splits the $210 gain evenly across the years and ignores compounding.'}
  ]
};

const UNIT_TVM = {id:'tvm', title:'Time value of money', level:'Vault', lessons:[TVM_TODAY_TOMORROW, TVM_FUTURE_VALUE, TVM_PRESENT_VALUE, TVM_ANNUITIES, TVM_NPV_IRR, TVM_CHECK]};

/* Vault unit: no placement questions. */

/* MATHS CHECK: every calculation and its result, for the reviewer. All recomputed in Python.
   Formulas: FV = PV(1+r)^n; PV = FV/(1+r)^n; annuity PV = PMT[1-(1+r)^-n]/r; PMT = PV*r/[1-(1+r)^-n];
   EAR = (1+r/m)^m - 1; NPV = -cost + sum CF_t/(1+r)^t; IRR found by bisection on NPV = 0.

   Lesson 1
   - $1,000 x 1.05 = $1,050 (beats $1,040)
   - $1,000 / 1.03 = $970.87
   - Q2: $500 x 1.04 = $520 (> $515)
   - Q4: $1,050 / 1.05 = $1,000; distractor $1,050 x 1.05 = $1,102.50

   Lesson 2
   - $2,000 x 1.06^5 = $2,676.45; year 1 $2,120; year 2 $2,247.20; year 3 $2,382.03; year 4 $2,524.95
   - Simple interest: $2,000 + 5 x $120 = $2,600; extra from compounding $76.45
   - $1,000 x 1.12 = $1,120.00; 1.01^12 = 1.126825 -> $1,126.83; EAR 12.68%
   - Daily: (1 + 0.12/365)^365 - 1 = 12.75%
   - $5,000 x 1.005^36 = $5,000 x 1.196681 = $5,983.40; wrong (6%, n = 36): $40,736.26
   - 1.02^12 - 1 = 26.82%
   - Q1: $1,500 x 1.05^3 = $1,500 x 1.157625 = $1,736.44; simple $1,725.00; 2 years $1,653.75; 1 year $1,575.00
   - Q3: $10,000 x 1.10 = $11,000; $10,000 x 1.05^2 = $11,025; slip $10,000 x 1.1^2 = $12,100
   - Q4: 1.015^12 - 1 = 19.56%; quarterly (1.045)^4 - 1 = 19.25%
   - Q5: $1,000 x 1.08^10 = $2,158.92; $1,000 x 1.08^20 = $4,660.96; double $4,317.85; 1.08^10 = 2.158925 (about 2.16);
     simple $1,000 + 20 x $80 = $2,600; gain added twice $1,000 + 2 x $1,158.92 = $3,317.85

   Lesson 3
   - 1.08^5 = 1.469328; $1,000 / 1.469328 = $680.58; check $680.58 x 1.469328 = $1,000.00
   - At 8%: 1 yr $925.93, 5 yrs $680.58, 10 yrs $463.19
   - 10 yrs: 4% $675.56, 8% $463.19, 12% $321.97
   - $5,600 / 1.1236 = $4,983.98 (< $5,000); $5,600 / 1.1025 = $5,079.37 (> $5,000)
   - Q1: $2,000 / 1.157625 = $1,727.68; FV slip $2,315.25; 1 yr $1,904.76; simple $1,700
   - Q3: $1,150/1.1 = $1,045.45; $1,200/1.21 = $991.74; $1,300/1.331 = $976.71; $1,000
   - Q5: $10,000 / 1.262477 = $7,920.94; gap to $8,000 = $79.06; FV slip $12,624.77

   Lesson 4
   - $1,000/1.05 = $952.38; /1.05^2 = $907.03; /1.05^3 = $863.84; sum $2,723.25
   - 1.05^-3 = 0.8638376; (1 - 0.8638376)/0.05 = 2.723248; x $1,000 = $2,723.25
   - Student loan $20,000, r = 0.005, n = 120: 1.005^-120 = 0.549633; 1 - that = 0.450367;
     PMT = $100 / 0.450367 = $222.04; total 120 x $222.04 = $26,644.80; interest $6,644.80 (exact $6,644.92)
   - 5 years, n = 60: PMT = $386.66; total $23,199.60; interest $3,199.60; ratio 6,644.80/3,199.60 = 2.08
   - Month 1: $20,000 x 0.005 = $100 interest; $222.04 - $100 = $122.04
   - Q1: $500 x 3.465106 = $1,732.55; $2,000/1.06^4 = $1,584.19; FV of payments $2,187.31
   - Q3: 1 - 1.01^-24 = 0.212434; $100 / 0.212434 = $470.73; no interest $416.67;
     flat $12,400/24 = $516.67; 12% per month slip PMT($10,000, 0.12, 24) = $1,284.63
   - Q4: 36 x $300 = $10,800; - $9,000 = $1,800 (implied rate about 1.02% a month)

   Lesson 5
   - PVs at 10%: $4,000/1.1 = $3,636.36; $4,500/1.21 = $3,719.01; $5,000/1.331 = $3,756.57
     whole dollars $3,636 + $3,719 + $3,757 = $11,112; exact total $11,111.95; NPV +$1,111.95 -> +$1,112
   - At 20%: $3,333.33 + $3,125.00 + $2,893.52 = $9,351.85; NPV -$648.15 -> -$648
     (whole dollars $3,333 + $3,125 + $2,894 = $9,352)
   - IRR (bisection) = 15.975% -> about 16.0%; NPV at 15% = +$168.49, at 16% = -$4.20
   - Forecasts 20% lower ($3,200, $3,600, $4,000): PVs $2,909.09 + $2,975.21 + $3,005.26 = $8,889.56;
     NPV -$1,110.44; IRR 3.80%
   - Size: 1-yr $1,000 -> $1,400 at 10%: NPV $272.73; 1-yr $1,000,000 -> $1,180,000 at 10%: NPV $72,727.27
   - Q1: $6,000/1.1 = $5,454.55; NPV $454.55; slip $6,000 - $5,454.55 = $545.45
   - Diagram: x = 60 + amount x 0.036. Cash bars widths 144, 162, 180. PV bars widths
     3,636.36 x 0.036 = 130.9, 3,719.01 x 0.036 = 133.9, 3,756.57 x 0.036 = 135.2.
     Labels at bar end + 5: 209, 195.9, 227, 198.9, 245, 200.2. Stacked text lines 14px apart.

   Unit check
   - C1: $1,000 x 1.04 = $1,040; / 1.04 = $1,000
   - C2: 1.0075^24 = 1.196414; x $3,000 = $3,589.24; simple $3,540.00; yearly $3,000 x 1.09^2 = $3,564.30;
     9% per month slip $3,000 x 1.09^24 = $23,733.25
   - C3: (1 + 0.07/12)^12 - 1 = 7.229%; 7 x 12 = 84
   - C4: $12,000 / 1.157625 = $10,366.05; $12,000 / 1.259712 = $9,525.99
   - C5: (1 - 1.05^-5)/0.05 = 4.329477; x $2,400 = $10,390.74; plain sum $12,000
   - C6: PMT($12,000, 0.01, 36) = $398.57; interest $120; $398.57 - $120 = $278.57; $12,000/36 = $333.33
   - C7: (1 - 1.08^-3)/0.08 = 2.577097; x $3,000 = $7,731.29; NPV -$268.71; plain $9,000 - $8,000 = $1,000
   - C8: (1,210/1,000)^(1/2) - 1 = 10%; simple 210/1,000/2 = 10.5%; total 21%
*/
