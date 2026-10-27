/* ---------- Money, rates and the economy ---------- */
const MACRO_INFLATION = {
  title:'Inflation and real returns', min:5,
  cards:[
    {k:'The idea', t:'When money buys less', b:`
      <p class="lead">Inflation is a general rise in prices across an economy. When prices rise, each dollar buys a little less than it did before.</p>
      <div class="term"><span class="term-k">Key term</span><b>Inflation:</b> how fast prices rise overall, usually given as a yearly percentage. At 3% inflation, a set of everyday purchases that cost $100 a year ago costs $103 now.</div>
      <p>The other side of it is buying power: what your money can actually get you. Inflation eats into it, even when the number in your account stays the same.</p>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Measuring it', t:'The shopping basket', b:`
      <p>Statisticians track the prices of a fixed basket of things households buy: food, rent, transport, clothes, phone bills and more. Each month they price the same basket again and compare it with a year earlier.</p>
      <div class="kv kv3"><div><b>$200</b><span>Basket a year ago</span></div><div><b>$208</b><span>Same basket now</span></div><div><b class="bad-t">4%</b><span>Inflation</span></div></div>
      <p>$208 ÷ $200 = 1.04, so prices rose 4% over the year. Most countries publish a figure like this every month, including the US and Lebanon.</p>
      <div class="term"><span class="term-k">Key term</span><b>CPI (consumer price index):</b> a measure of what a typical basket of household goods and services costs, tracked over time. Its yearly change is the most quoted inflation figure.</div>
      <p>Your own inflation can differ. If rent is a big part of your spending and rents rise fastest, your costs climb faster than the average.</p>`},
    {k:'Do the maths', t:'Real returns', b:`
      <p>The return shown on your statement is the nominal return. The real return is how much more you can buy with it.</p>
      <p><b>Quick version: real return ≈ nominal return − inflation</b></p>
      <p><b>Exact version: real return = (1 + nominal) ÷ (1 + inflation) − 1</b></p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Low inflation</div>
          <p>5% return, 3% inflation. Quick version: 2%.</p>
          <div class="pf-r">Real return<b class="mono good-t">+1.94%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">High inflation</div>
          <p>10% return, 50% inflation. Quick version: −40%.</p>
          <div class="pf-r">Real return<b class="mono bad-t">−26.67%</b></div>
        </div>
      </div>
      <p>Why the exact version works: $1,000 grows to $1,050, while a basket that cost $1,000 now costs $1,030. $1,050 ÷ $1,030 = 1.0194, so you can buy 1.94% more. The quick version is close when both numbers are small. When inflation is high, it can be far off: 1.10 ÷ 1.50 − 1 = −26.67%.</p>
      <div class="term"><span class="term-k">Key term</span><b>Real return:</b> the return after taking inflation into account. It measures the change in what your money can buy.</div>`},
    {k:'History', t:'When cash loses its value', b:`
      <p>Cash earns nothing, so inflation shrinks it every year. At 3% inflation, $1,000 kept in cash for 10 years buys only what $744.09 buys today: $1,000 ÷ 1.03^10 = $744.09.</p>
      <p>Lebanon shows how fast it can happen. The Lebanese pound, or lira, was pegged at 1,507.5 to the dollar from 1997. After the financial crisis began in 2019 it collapsed, and by February 2023 it had lost more than 98% of its pre-crisis value, according to the World Bank.</p>
      <div class="score"><div><b class="bad-t">155%</b><span>Inflation, 2021</span></div><div><b class="bad-t">171%</b><span>Inflation, 2022</span></div><div><b class="bad-t">221%</b><span>Inflation, 2023</span></div></div>
      <p>Those are World Bank figures for Lebanon's yearly average inflation. Prices in lira more than doubled in each of those years, so savings kept in lira lost most of their buying power. Lesson 5 looks at how the country turned to the dollar.</p>`}
  ],
  qs:[
    {q:'Inflation is 4% a year. A basket of groceries cost $250 a year ago. What does the same basket cost now?',
     o:['$254','$260','$290','$240'], a:1,
     e:'4% of $250 is $10, so the basket costs $250 × 1.04 = $260. $254 adds $4 instead of 4%.'},
    {q:'A savings account pays 6% a year while inflation is 2%. Using the quick version, roughly what is the real return?',
     o:['8%','3%','4%','12%'], a:2,
     e:'Real return ≈ nominal − inflation = 6% − 2% = 4%. The exact version gives 1.06 ÷ 1.02 − 1 = 3.92%. Adding the two (8%) or dividing them (3%) are slips.'},
    {q:'An investment returns 8% in a year when inflation is 5%. Using the exact version, what is the real return?',
     o:['2.86%','3%','13.4%','1.6%'], a:0,
     e:'1.08 ÷ 1.05 − 1 = 0.0286, which is 2.86%. 3% is the quick estimate, and 13.4% multiplies instead of dividing.'},
    {q:'True or false: if your savings grow 10% in a year when inflation is 12%, you can buy more at the end of the year than at the start.',
     o:['True','False'], a:1,
     e:'The real return is negative: 1.10 ÷ 1.12 − 1 = −1.79%. The balance grew, but prices grew faster.'},
    {q:'Why can the inflation you feel be higher than the official CPI figure?',
     o:['The CPI only counts luxury goods','Inflation is only measured once every ten years','Your salary went up','You spend more than average on the things whose prices rose fastest'], a:3,
     e:'The CPI tracks an average basket. If more of your money goes on things rising fastest, such as rent, your own costs climb faster than the average.'}
  ]
};

const MACRO_CENTRAL_BANKS = {
  title:'Central banks and rates', min:5,
  cards:[
    {k:'The idea', t:'The bank behind the banks', b:`
      <p class="lead">A central bank manages a country's money. It issues the currency, watches over the banks, and sets a key short-term interest rate that spreads through the whole economy.</p>
      <p>The US has the Federal Reserve, often called the Fed. The euro area has the European Central Bank. Lebanon has the Banque du Liban.</p>
      <div class="term"><span class="term-k">Key term</span><b>Policy rate:</b> the short-term interest rate a central bank sets. The rates banks charge on loans and pay on savings tend to move with it. The Fed's is a target range for the rate banks charge each other on overnight loans.</div>
      <p>Many central banks, including the Fed and the European Central Bank, aim for inflation of about 2% a year over time. The Fed also has a goal of maximum employment.</p>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'How it works', t:'Two directions', b:`
      <div class="split">
        <div class="col bad"><div class="col-h">Raise rates</div><b>Press the brakes</b><p>Loans cost more and saving pays more, so people and companies tend to borrow and spend less. Slower spending usually means prices rise more slowly.</p></div>
        <div class="col good"><div class="col-h">Cut rates</div><b>Ease off</b><p>Borrowing gets cheaper, which tends to support spending, hiring and growth. Kept too low for too long, it can push inflation up.</p></div>
      </div>
      <p>Byblos Foods has borrowed $20 million at a rate that moves with the policy rate. Its rate rises from 3% to 5.5%:</p>
      <div class="kv kv3"><div><b>$600,000</b><span>Interest a year at 3%</span></div><div><b>$1,100,000</b><span>Interest a year at 5.5%</span></div><div><b class="bad-t">−$500,000</b><span>Change in profit before tax</span></div></div>
      <p>Rate changes work slowly. They can take many months to show up fully in spending, jobs and prices.</p>`},
    {k:'Do the maths', t:'Why rates move markets', b:`
      <p><b>Bonds.</b> As the Bonds and interest rates unit showed, when market rates rise, the prices of existing bonds fall, and long bonds fall the most.</p>
      <p><b>Shares.</b> A share is worth the profits investors expect from it over the years. Higher rates make money that arrives later worth less today, and safer investments now pay more, so investors often pay less for shares. Here is present value, from the Bonds and interest rates unit, as rates rise from 6% to 8%:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">$100 of profit in 1 year</div>
          <p>Worth $94.34 at 6%, $92.59 at 8%</p>
          <div class="pf-r">Change<b class="mono bad-t">−1.9%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">$100 of profit in 10 years</div>
          <p>Worth $55.84 at 6%, $46.32 at 8%</p>
          <div class="pf-r">Change<b class="mono bad-t">−17%</b></div>
        </div>
      </div>
      <p>So companies whose profits lie far in the future tend to be hit hardest when rates rise. This is a tendency, not a rule: news about profits and the mood of the market move prices too.</p>`},
    {k:'History', t:'2022: rates up fast', b:`
      <p>US inflation reached 9.1% in June 2022, the highest in about 40 years. Between March 2022 and July 2023, the Fed raised its target range from 0–0.25% to 5.25–5.5%, one of its fastest rounds of increases in decades.</p>
      <p>In 2022, US shares and US bonds both lost more than 10%. That is unusual: in many past share-price falls, bonds held up. Inflation then eased, and the Fed began cutting in September 2024.</p>
      <div class="term"><span class="term-k">Key term</span><b>Hawkish and dovish:</b> a central bank leaning towards higher rates to fight inflation is called hawkish. One leaning towards lower rates to support growth is called dovish.</div>
      <p>Markets often move more on what they expect a central bank to do next than on what it does today. This is history, not a forecast.</p>`}
  ],
  qs:[
    {q:'A central bank raises its policy rate. What is it usually trying to do?',
     o:['Make loans cheaper to boost spending','Push share prices up','Slow borrowing and spending so that prices rise more slowly','Raise the prices of existing bonds'], a:2,
     e:'Higher rates make borrowing dearer and saving more rewarding, which tends to cool spending and, over time, inflation.'},
    {q:'Litani Energy has $40 million of loans at a rate that moves with the policy rate. Its rate rises from 2% to 4.5%. How much more interest does it pay each year?',
     o:['$100,000','$1 million','$1.8 million','$2.5 million'], a:1,
     e:'The rate rises by 2.5 points: 2.5% × $40 million = $1 million. $1.8 million is the whole interest bill at 4.5%, not the increase.'},
    {q:'Why do higher interest rates often weigh on share prices?',
     o:['Future profits are worth less today, and safer investments pay more','Companies must pay higher dividends by law','Shares pay a fixed coupon that looks worse next to new bonds','Central banks sell shares when they raise rates'], a:0,
     e:'Discounting at a higher rate shrinks the value of future profits, and safer options like savings and bonds now compete harder for investors\' money.'},
    {q:'$100 of profit is expected in 5 years. At a 5% rate it is worth $78.35 today. What is it worth at 7%?',
     o:['$78.35','$65.00','$93.46','$71.30'], a:3,
     e:'$100 ÷ 1.07^5 = $100 ÷ 1.40255 = $71.30. $93.46 discounts for only one year, and $65 just takes off 7% a year for five years without compounding.'},
    {q:'True or false: when a central bank cuts its policy rate, share prices always rise.',
     o:['True','False'], a:1,
     e:'Cuts tend to support shares, but a cut often comes because the economy is weakening, and falling profits can push prices down. If the cut was expected, it may already be priced in.'}
  ]
};

const MACRO_YIELD_CURVE = {
  title:'The yield curve', min:5,
  cards:[
    {k:'The idea', t:'A rate for every length of loan', b:`
      <p class="lead">Governments borrow for many lengths of time, from a few weeks to 30 years or more. Each length has its own yield. Line them up from shortest to longest and you get the yield curve.</p>
      <div class="term"><span class="term-k">Key term</span><b>Yield curve:</b> a line showing the yields on a government's bonds at each maturity, on one day. In the US, people watch the curve for Treasuries, the US government's bonds.</div>
      <p>Yield, from the Bonds and interest rates unit, is a bond's return as a yearly percentage of its price. The curve shows that return for every length of loan at once.</p>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'The shapes', t:'Normal, flat, inverted', b:`
      <p>Most of the time, longer loans pay more. Lenders usually want extra to tie their money up for longer.</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Two example yield curves, with maturities evenly spaced. Normal curve slopes up: 1 year 3.3%, 2 years 3.5%, 5 years 4.0%, 10 years 4.5%, 30 years 4.8%. Inverted curve slopes down: 1 year 5.0%, 2 years 4.8%, 5 years 4.2%, 10 years 3.9%, 30 years 3.8%.">
        <line x1="10" y1="124" x2="290" y2="124" stroke="var(--line)" stroke-width="2"/>
        <polyline points="25,108 75,100 125,80 175,60 225,48" fill="none" stroke="var(--bull)" stroke-width="2.5" stroke-linejoin="round"/>
        <polyline points="25,40 75,48 125,72 175,84 225,88" fill="none" stroke="var(--bear)" stroke-width="2.5" stroke-linejoin="round"/>
        <g fill="var(--bull-deep)"><circle cx="25" cy="108" r="3"/><circle cx="75" cy="100" r="3"/><circle cx="125" cy="80" r="3"/><circle cx="175" cy="60" r="3"/><circle cx="225" cy="48" r="3"/></g>
        <g fill="var(--bear-deep)"><circle cx="25" cy="40" r="3"/><circle cx="75" cy="48" r="3"/><circle cx="125" cy="72" r="3"/><circle cx="175" cy="84" r="3"/><circle cx="225" cy="88" r="3"/></g>
        <g font-family="var(--font-mono)" font-size="11" text-anchor="middle" fill="var(--ink-2)">
          <text x="25" y="140">1 yr</text><text x="75" y="140">2 yr</text><text x="125" y="140">5 yr</text><text x="175" y="140">10 yr</text><text x="225" y="140">30 yr</text>
          <text x="75" y="38" fill="var(--bear-ink)">4.8%</text><text x="75" y="116" fill="var(--bull-ink)">3.5%</text>
          <text x="175" y="50" fill="var(--bull-ink)">4.5%</text><text x="175" y="100" fill="var(--bear-ink)">3.9%</text>
          <text x="150" y="156">Yield by years to maturity</text>
        </g>
        <g font-family="var(--font-mono)" font-size="11">
          <text x="233" y="52" fill="var(--bull-ink)">Normal</text><text x="233" y="92" fill="var(--bear-ink)">Inverted</text>
        </g>
      </svg>
      <p><b>Normal:</b> slopes up, with long yields above short ones. <b>Flat:</b> about the same yield at every length. <b>Inverted:</b> slopes down, with short yields above long ones.</p>
      <div class="term"><span class="term-k">Key term</span><b>Inverted yield curve:</b> when short-term government bonds yield more than long-term ones. It's unusual, and investors watch for it closely.</div>`},
    {k:'Do the maths', t:'Reading the gap', b:`
      <p>A widely quoted measure of the curve's slope is the 10-year yield minus the 2-year yield.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Normal</div>
          <p>2-year 3.5% · 10-year 4.5%</p>
          <div class="pf-r">10-year minus 2-year<b class="mono good-t">+1.0 point</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Inverted</div>
          <p>2-year 4.8% · 10-year 3.9%</p>
          <div class="pf-r">10-year minus 2-year<b class="mono bad-t">−0.9 points</b></div>
        </div>
      </div>
      <p>On the inverted curve, $10,000 of 2-year bonds bought at face value earns $480 a year at 4.8%. The same amount in 10-year bonds earns $390 a year at 3.9%, even though the money is tied up five times as long.</p>
      <p>Why accept less for longer? Short yields closely follow the policy rate. Long yields reflect where investors expect rates to be over many years. If they expect the central bank to cut rates later, often because they expect the economy to weaken, long yields can sink below short ones.</p>
      <div class="term"><span class="term-k">Key term</span><b>Basis point:</b> one hundredth of a percentage point. A gap of −0.9 points is −90 basis points.</div>`},
    {k:'The limit', t:'A warning light, not a clock', b:`
      <p>In the US, an inverted curve has come before every recession for more than 60 years, according to research at the Federal Reserve Bank of San Francisco. That is why it gets so much attention.</p>
      <div class="split">
        <div class="col good"><div class="col-h">What it has done</div><b>Often come first</b><p>Recessions have tended to follow an inversion, sometimes after a long wait.</p></div>
        <div class="col bad"><div class="col-h">What it can't do</div><b>Tell you when</b><p>The wait has varied a lot, and an inversion has not always led to a recession.</p></div>
      </div>
      <p>In July 2022 the US 2-year/10-year curve inverted and stayed that way for about two years, the longest stretch on record. No recession came during that time.</p>
      <div class="term"><span class="term-k">Key term</span><b>Recession:</b> a broad fall in economic activity lasting more than a few months, with output, jobs and spending shrinking.</div>`}
  ],
  qs:[
    {q:'The 2-year government bond yields 4.0% and the 10-year yields 4.6%. Which describes the curve?',
     o:['Inverted, with a gap of −0.6 points','Normal, with a gap of +8.6 points','Normal, with a gap of +0.6 points','Flat, with no gap'], a:2,
     e:'The longer bond yields more, so the curve slopes up. 10-year minus 2-year = 4.6% − 4.0% = +0.6 points. 8.6 adds the two yields.'},
    {q:'What does an inverted yield curve mean?',
     o:['Long-term bonds yield more than short-term ones','Short-term government bonds yield more than long-term ones','Bond prices are falling','Every maturity has the same yield'], a:1,
     e:'Inverted means the curve slopes down: short yields sit above long yields. Every maturity at the same yield would be a flat curve.'},
    {q:'The 2-year yield is 5.1% and the 10-year yield is 4.2%. What is the 10-year minus 2-year gap, in basis points?',
     o:['−90','+90','−9','+930'], a:0,
     e:'4.2% − 5.1% = −0.9 points. One point is 100 basis points, so the gap is −90. +930 adds the two yields.'},
    {q:'Why can long-term yields fall below short-term yields?',
     o:['Long bonds carry no risk at all','Governments are banned from paying more on long bonds','Short bonds pay no coupons','Investors expect the central bank to cut rates in future'], a:3,
     e:'Long yields reflect expected rates over many years. If investors expect cuts later, often because they expect a slowdown, long yields can drop below short ones.'},
    {q:'True or false: once the yield curve inverts, a recession reliably follows within a year.',
     o:['True','False'], a:1,
     e:'Inversions have often come before US recessions, but the wait has varied a lot. The US curve inverted in July 2022 and stayed inverted for about two years with no recession in that time.'}
  ]
};

const MACRO_DATA = {
  title:'Data that moves markets', min:4,
  cards:[
    {k:'The idea', t:"The economy's report cards", b:`
      <p class="lead">Governments and central banks publish economic figures on a set calendar. Investors watch them closely for clues about growth, inflation and where interest rates are heading.</p>
      <div class="kv"><div><b>GDP</b><span>Growth</span></div><div><b>Jobs</b><span>Employment</span></div><div><b>CPI</b><span>Inflation</span></div><div><b>Rates</b><span>Central bank meetings</span></div></div>
      <div class="term"><span class="term-k">Key term</span><b>GDP (gross domestic product):</b> the total value of the goods and services an economy produces in a period. GDP growth is how fast that total rises.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'The big four', t:'What each one tells you', b:`
      <p><b>GDP.</b> Most big economies publish it every three months. It's the broadest measure of how the economy is doing.</p>
      <p><b>Jobs.</b> The US jobs report usually comes out on the first Friday of the month. It shows how many jobs were added and the unemployment rate. If 8 million people are looking for work in a labour force of 160 million, the rate is 8 ÷ 160 = 5%.</p>
      <p><b>Inflation.</b> The CPI comes out every month (Lesson 1).</p>
      <p><b>Central bank meetings.</b> The Fed's rate-setting committee meets eight times a year. Investors study the decision and every word of the statement that comes with it.</p>
      <div class="term"><span class="term-k">Key term</span><b>Unemployment rate:</b> the share of the labour force (everyone working or looking for work) who are looking for a job but don't have one.</div>`},
    {k:'Do the maths', t:'The surprise is what counts', b:`
      <p>Before each release, economists publish forecasts. Their average, the consensus, is already reflected in prices. So markets react to the gap between the actual figure and the forecast.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Month A</div>
          <p>Inflation forecast 3.0%, actual 3.0%</p>
          <div class="pf-r">Surprise<b class="mono">0</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Month B</div>
          <p>Inflation forecast 3.0%, actual 3.4%</p>
          <div class="pf-r">Surprise<b class="mono bad-t">+0.4 points</b></div>
        </div>
      </div>
      <p>Month A changes little. In Month B, inflation came in hotter than expected, so investors may expect rates to stay higher for longer. A real case: US inflation for June 2022 came in at 9.1%, against forecasts of about 8.8%.</p>
      <p>It works the other way too. If GDP was forecast to shrink 1.0% and it shrinks 0.4%, the news is bad but 0.6 points better than feared, and prices can rise.</p>
      <div class="term"><span class="term-k">Key term</span><b>Priced in:</b> when an expected event is already reflected in market prices, so it moves them little when it happens.</div>`},
    {k:'The twist', t:'Good news can be bad news', b:`
      <p>Strong data sounds good for shares. But if it suggests prices will keep rising, investors may expect the central bank to keep rates higher for longer, and higher rates weigh on share prices (Lesson 2).</p>
      <div class="split">
        <div class="col good"><div class="col-h">One reading</div><b>Good for profits</b><p>A strong jobs report means more people earning and spending.</p></div>
        <div class="col bad"><div class="col-h">Another reading</div><b>Higher rates for longer</b><p>If it points to more inflation, bond yields can jump and shares can fall.</p></div>
      </div>
      <p>Weak data can do the opposite: shares sometimes rise on bad news, if it makes rate cuts look more likely. Which reading wins changes over time, and nobody can reliably call it in advance.</p>
      <div class="term"><span class="term-k">Key term</span><b>Revision:</b> a later update to a published figure as more information comes in. GDP and jobs numbers are often revised, sometimes by a lot.</div>`}
  ],
  qs:[
    {q:'Economists expected the economy to add 180,000 jobs last month. The report shows 250,000. What is the surprise?',
     o:['250,000 more jobs than expected','70,000 more jobs than expected','70,000 fewer jobs than expected','430,000 more jobs than expected'], a:1,
     e:'Surprise = actual − forecast = 250,000 − 180,000 = +70,000. Markets react to that gap, not to the 250,000 on its own.'},
    {q:'Economists expected inflation of 2.8%. The figure comes in at exactly 2.8%, and prices barely move. Why?',
     o:['The expected figure was already priced in','Inflation figures never move markets','Markets ignore figures until they are revised','Inflation only matters once it passes 5%'], a:0,
     e:'Prices already reflected the 2.8% forecast. With no surprise, there was little new to react to.'},
    {q:'A jobs report comes in much stronger than expected, and shares fall. What is the most likely reason?',
     o:['More jobs always means lower profits','Shares always fall on the first Friday of the month','Investors expect the central bank to keep rates higher for longer','Strong jobs data makes bonds pay lower coupons'], a:2,
     e:'Good news can be bad news: a hot economy can mean more inflation, which can keep rates high, and higher rates weigh on share prices.'},
    {q:'GDP was forecast to shrink 1.5% this quarter. It shrinks 0.5%. How might markets read it?',
     o:['A 0.5% fall always sends shares down','The economy grew 1%','It makes no difference, since GDP fell either way','Bad news, but better than feared, so prices can rise'], a:3,
     e:'The economy still shrank, but by 1 point less than expected: −0.5 − (−1.5) = +1. Markets react to the surprise, and this one was positive.'},
    {q:'In a country, 150 million people are working or looking for work. 9 million of them are looking but have no job. What is the unemployment rate?',
     o:['6%','6.4%','16.7%','9%'], a:0,
     e:'Unemployment rate = 9 million ÷ 150 million = 0.06, which is 6%. 6.4% divides by the 141 million with jobs instead of the whole labour force.'}
  ]
};

const MACRO_CURRENCIES = {
  title:'Currencies and exchange rates', min:5,
  cards:[
    {k:'The idea', t:'The price of money', b:`
      <p class="lead">An exchange rate is the price of one currency in another. If €1 costs $1.10, then $1 buys about €0.91, since 1 ÷ 1.10 = 0.909.</p>
      <div class="term"><span class="term-k">Key term</span><b>Exchange rate:</b> how much of one currency you get for one unit of another. When a currency buys more of another than before, it has strengthened. When it buys less, it has weakened.</div>
      <p>Rates between major currencies move every day, with trade, interest rates and what investors expect. Higher interest rates tend to draw in foreign money and strengthen a currency. Some countries instead peg their currency, holding it at a fixed rate to another, often the dollar.</p>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Imports get dearer', b:`
      <p>A phone costs $500. Its dollar price doesn't change, but its price in lira depends on the exchange rate. Before Lebanon's crisis, the official rate was 1,507.5 lira per dollar. From early 2024 it was 89,500:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">1,507.5 lira per dollar</div>
          <p>$500 × 1,507.5</p>
          <div class="pf-r">Price in lira<b class="mono">753,750</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">89,500 lira per dollar</div>
          <p>$500 × 89,500</p>
          <div class="pf-r">Price in lira<b class="mono bad-t">44,750,000</b></div>
        </div>
      </div>
      <p>The same phone costs about 59 times as many lira. Lebanon relies heavily on imports, including food and fuel, paid for in dollars, so the weaker lira fed straight into higher prices (Lesson 1).</p>
      <p>A weaker currency also makes a country's exports and holidays cheaper for foreigners, which can help some local businesses.</p>`},
    {k:'Do the maths', t:'Currency risk', b:`
      <p>Investing abroad means two bets: the asset, and the currency it's priced in. A US investor buys €10,000 of European shares when €1 = $1.10, paying $11,000. A year later:</p>
      <div class="kv"><div><b class="good-t">+8%</b><span>Shares, in euros</span></div><div><b>€10,800</b><span>Value in euros</span></div><div><b>$1.00</b><span>New price of €1</span></div><div><b class="bad-t">−1.82%</b><span>Return in dollars</span></div></div>
      <p>€10,800 × $1.00 = $10,800, against $11,000 paid: $10,800 ÷ $11,000 − 1 = −1.82%. The euro fell 9.09%, which more than wiped out the 8% gain. Had the euro risen to $1.20 instead, the shares would be worth $12,960, a 17.82% gain.</p>
      <p><b>Return in your currency = (1 + asset return) × (1 + currency change) − 1</b></p>
      <p>It works for Lebanese investors too. For someone who counts in lira, a US fund that is flat in dollars gains in lira whenever the lira weakens.</p>
      <div class="term"><span class="term-k">Key term</span><b>Currency risk:</b> the chance that exchange-rate moves shrink, or boost, a return once it is converted back into your own currency. Some funds hedge it, which removes most of it at a cost.</div>`},
    {k:'History', t:'Lebanon and the dollar', b:`
      <p>Lebanon was heavily dollarised long before 2019. The lira was pegged to the dollar, both currencies were used every day, and most bank deposits were in dollars.</p>
      <div class="term"><span class="term-k">Key term</span><b>Dollarisation:</b> when people in a country use the US dollar, alongside or instead of their own currency, to save, set prices and pay.</div>
      <p>From late 2019, banks limited dollar withdrawals and transfers abroad. Savers could often get their dollar deposits out only in small amounts, or in lira at rates well below the market rate. Trust in the banks and in the lira collapsed.</p>
      <p>People turned to paper dollars. In 2023 shops and supermarkets were allowed to price goods in dollars, and the World Bank estimated that Lebanon's cash economy in dollars was almost half the size of its GDP in 2022.</p>`}
  ],
  qs:[
    {q:'€1 costs $1.25. How many euros does $1 buy?',
     o:['€1.25','€0.75','€0.80','€1.20'], a:2,
     e:'1 ÷ 1.25 = 0.80, so $1 buys €0.80. Taking 0.25 off 1 (€0.75) is not the same as dividing.'},
    {q:'A laptop costs $800. The local currency weakens from 4 to 5 per dollar. By how much does the laptop\'s local price rise?',
     o:['20%','25%','By $200','It stays the same'], a:1,
     e:'$800 × 4 = 3,200 before and $800 × 5 = 4,000 after. 4,000 ÷ 3,200 − 1 = 25%. The 20% is how much value the local currency lost (1 − 4 ÷ 5), not the price rise.'},
    {q:'A US investor holds UK shares. Over a year they rise 6% in pounds, and the pound rises 4% against the dollar. What is the return in dollars?',
     o:['1.76%','10%','6%','10.24%'], a:3,
     e:'1.06 × 1.04 − 1 = 0.1024, which is 10.24%. Adding 6% and 4% gives 10%, close but not exact. 1.76% treats the pound as having fallen.'},
    {q:'Karim, in Beirut, counts his savings in lira. His US fund is flat in dollars over a year, while the lira weakens from 40,000 to 50,000 per dollar (made-up rates). What is his return in lira?',
     o:['+25%','0%','+20%','−20%'], a:0,
     e:'Each dollar is now worth 50,000 lira instead of 40,000: 50,000 ÷ 40,000 − 1 = 25%. If lira prices rose as well, his real gain is smaller (Lesson 1).'},
    {q:'What does dollarisation mean?',
     o:["A country's central bank buying US shares",'People using the US dollar alongside or instead of their own currency','A currency rising against the dollar','Banks paying interest only in dollars'], a:1,
     e:'In a dollarised economy, people save, set prices or pay in dollars, as many in Lebanon have done.'}
  ]
};

const MACRO_CHECK = {
  title:'Unit check', min:4, badge:{name:'Macro Mind', icon:'up'}, cards:[],
  qs:[
    {q:'A fund returns 12% in a year when inflation is 9%. Using the exact formula, what is the real return?',
     o:['3%','2.75%','22.08%','1.33%'], a:1,
     e:'1.12 ÷ 1.09 − 1 = 0.0275, which is 2.75%. 3% is the quick estimate, 22.08% multiplies instead of dividing, and 1.33 is 12 ÷ 9.'},
    {q:'$5,000 sits in cash for 3 years while inflation runs at 5% a year. At the end, what does it buy in today\'s dollars?',
     o:['$4,250','$4,286.88','$4,319.19','$5,000'], a:2,
     e:'$5,000 ÷ 1.05^3 = $5,000 ÷ 1.157625 = $4,319.19. $4,250 takes off 15% in one go, and $4,286.88 is $5,000 × 0.95^3, which cuts slightly too much each year.'},
    {q:'Cedar Tech expects most of its profits more than ten years from now. Byblos Foods makes steady profits today. Interest rates rise sharply and nothing else changes. Whose share price is usually more exposed?',
     o:["Cedar Tech's","Byblos Foods'",'Both equally',"Neither, since share prices don't depend on rates"], a:0,
     e:'Distant profits lose more value when discounted at a higher rate. Going from 6% to 8%, $100 due in 10 years loses 17% of its value today, while $100 due in 1 year loses 1.9%.'},
    {q:'A central bank raises its policy rate sharply. Investors expect it to cut rates in a couple of years as growth slows. What tends to happen to the yield curve?',
     o:['Long-term yields rise more than short-term ones, so it steepens','All yields fall by the same amount',"It can't change, because bond coupons are fixed",'Short-term yields rise more than long-term ones, so it flattens or inverts'], a:3,
     e:'Short yields closely follow the policy rate. Long yields reflect expected rates over many years, and expected cuts hold them down. Short yields rising faster flattens the curve, or inverts it.'},
    {q:'The 2-year yield is 4.6% and the 10-year yield is 4.1%. Which is right?',
     o:['Normal curve, gap of +0.5 points','Inverted curve, gap of −50 basis points','Inverted curve, gap of −5 basis points','Flat curve, no gap'], a:1,
     e:'4.1% − 4.6% = −0.5 points, which is −50 basis points. Short above long means inverted.'},
    {q:'The US yield curve inverts. Which statement is the most accurate?',
     o:['It has come before US recessions for decades, but the timing varies and it can stay inverted for years without one','A recession will start within six months','It has never been followed by a recession','It means long-term government bonds will default'], a:0,
     e:'It has preceded every US recession for more than 60 years, but the wait has varied. In 2022 to 2024 it stayed inverted for about two years with no recession in that time.'},
    {q:'Economists expected inflation of 3.2%. It comes in at 2.9%. Bond yields fall and shares rise. What is the most likely reason?',
     o:['Inflation of 2.9% is always good for shares','Company profits rose by 0.3%','Lower-than-expected inflation makes rate cuts look more likely','The central bank must cut rates the next day'], a:2,
     e:'The figure was 0.3 points below forecast. Markets reacted to the surprise: cooler inflation raised hopes of lower rates, which lifted bond and share prices.'},
    {q:'A US investor buys $12,000 of European shares when €1 = $1.20. A year later the shares are down 5% in euros, and €1 = $1.30. What is the return in dollars?',
     o:['−5%','+3.33%','+8.33%','+2.92%'], a:3,
     e:'$12,000 ÷ 1.20 = €10,000, which falls to €9,500. €9,500 × $1.30 = $12,350, and $12,350 ÷ $12,000 − 1 = 2.92%. Adding +8.33% (the euro) and −5% (the shares) gives 3.33%, close but not exact.'}
  ]
};

const UNIT_MACRO = {id:'macro', title:'Money, rates and the economy', level:'Intermediate', lessons:[MACRO_INFLATION, MACRO_CENTRAL_BANKS, MACRO_YIELD_CURVE, MACRO_DATA, MACRO_CURRENCIES, MACRO_CHECK]};

/* Placement: one question per lesson, n = lesson number 1-5. Different from the lesson questions. */
const PLACEMENT_MACRO = [
  {n:1, q:'Savings earn 4% a year while inflation is 6%. Roughly what is the real return?',
   o:['About +2%','About +10%','About −2%','0%, since the balance grew'], a:2,
   e:'Real return ≈ 4% − 6% = −2%. The exact version gives 1.04 ÷ 1.06 − 1 = −1.89%. The balance grew, but prices grew faster.'},
  {n:2, q:"Inflation is well above a central bank's target. What is the usual policy move to bring it down?",
   o:['Raise the policy rate','Cut the policy rate','Leave rates alone and wait','Set the policy rate to zero'], a:0,
   e:'Higher rates make borrowing dearer and saving more rewarding, which tends to slow spending and, over time, price rises.'},
  {n:3, q:'The 2-year government bond yields 3.0% and the 10-year yields 4.2%. Which describes the curve?',
   o:['Inverted, because the 2-year is lower','Normal, with the 10-year 1.2 points higher','Flat','Normal, with a gap of 7.2 points'], a:1,
   e:'Longer yields above shorter ones means a normal, upward curve. 4.2% − 3.0% = 1.2 points. 7.2 adds the yields.'},
  {n:4, q:'When a jobs report comes out, what usually moves prices the most?',
   o:['Whether any jobs were added at all',"Last year's figure",'The size of the labour force','How far the figure lands from what was expected'], a:3,
   e:'Forecasts are already priced in, so markets react to the surprise: actual minus expected.'},
  {n:5, q:'A US investor holds foreign shares. Over a year they rise 20% in the local currency, and that currency falls 20% against the dollar. What is the return in dollars?',
   o:['0%, the two cancel out','−4%','+4%','−40%'], a:1,
   e:'1.20 × 0.80 − 1 = −0.04, which is −4%. The 20% fall applies to a bigger amount, so the moves don\'t cancel.'}
];

/* MATHS CHECK: every calculation and its result, for the reviewer (verified in Python).
   Lesson 1, Inflation and real returns
   - 3% inflation: $100 × 1.03 = $103.
   - Basket: $208 ÷ $200 = 1.04 → 4%.
   - Real return 5% nominal, 3% inflation: quick 2%; exact 1.05 ÷ 1.03 − 1 = 1.9417% ≈ 1.94%. $1,050 ÷ $1,030 = 1.0194.
   - Real return 10% nominal, 50% inflation: quick −40%; exact 1.10 ÷ 1.50 − 1 = −26.667% ≈ −26.67%.
   - Cash: $1,000 ÷ 1.03^10 = $744.09.
   - Inflation tiles (World Bank, inflation consumer prices, annual % for Lebanon, via FRED FPCPITOTLZGLBN): 2021 154.76% ≈ 155%;
     2022 171.21% ≈ 171%; 2023 221.34% ≈ 221%. All above 100%, so average prices more than doubled each year.
   - Q1: $250 × 1.04 = $260. Slips: $254 (+$4), $290, $240.
   - Q2: 6 − 2 = 4%; exact 1.06 ÷ 1.02 − 1 = 3.92%. Slips: 6 + 2 = 8, 6 ÷ 2 = 3, 6 × 2 = 12.
   - Q3: 1.08 ÷ 1.05 − 1 = 2.857% ≈ 2.86%. Slips: 3% quick; 1.08 × 1.05 − 1 = 13.4%; 8 ÷ 5 = 1.6.
   - Q4: 1.10 ÷ 1.12 − 1 = −1.79%.
   Lesson 2, Central banks and rates
   - Byblos Foods: $20m × 3% = $600,000; $20m × 5.5% = $1,100,000; difference $500,000.
   - PV of $100: 1 year at 6% $94.34, at 8% $92.59, change −1.85% ≈ −1.9%; 10 years at 6% $55.84, at 8% $46.32, change −17.05% ≈ −17%.
   - Fed: target range 0–0.25% before 16 March 2022 (raised to 0.25–0.5% that day); 5.25–5.5% from 26 July 2023 (Fed press releases).
     First cut 18 September 2024. US CPI 9.1% year on year in June 2022, largest rise since late 1981.
   - 2022: S&P 500 about −19.4% (price), −18.1% (total return); Bloomberg US Aggregate bond index about −13%. Both more than 10%.
   - Q2: 2.5% × $40m = $1,000,000. Slips: 4.5% × $40m = $1.8m; 0.25% × $40m = $100,000; $2.5m.
   - Q4: 1.05^5 = 1.27628, $100 ÷ 1.27628 = $78.35; 1.07^5 = 1.40255, $100 ÷ 1.40255 = $71.30.
     Slips: $100 ÷ 1.07 = $93.46; $100 − 5 × $7 = $65.00.
   Lesson 3, The yield curve
   - Normal: 4.5 − 3.5 = +1.0 point. Inverted: 3.9 − 4.8 = −0.9 points = −90 bp.
   - $10,000 × 4.8% = $480; $10,000 × 3.9% = $390. 10 ÷ 2 = 5 times as long.
   - Diagram: y = 20 + (5.5 − yield) × 40, x = 25, 75, 125, 175, 225 for 1, 2, 5, 10, 30 years (evenly spaced, not to scale; the
     aria-label says so). Normal 3.3, 3.5, 4.0, 4.5, 4.8 → y 108, 100, 80, 60, 48. Inverted 5.0, 4.8, 4.2, 3.9, 3.8 → y 40, 48, 72, 84, 88.
     Value labels: 4.8% at y 38 (10 above its point), 3.5% at y 116 (16 below), 4.5% at y 50, 3.9% at y 100.
     Nearest line to each label: inverted line at x 62 is y 45.9 (label 4.8% text ends at 38); normal line at x 62–88 is y 102.1–94.8
     (label 3.5% text from about 108); normal line at x 162–188 is y 65.2–56.9 (label 4.5% at 50); inverted line at x 162–188 is
     y 80.9–85.0 (label 3.9% text from about 92). End labels Normal y 52, Inverted y 92 at x 233. Axis labels y 140, caption y 156.
   - Inversion facts: FRBSF Economic Letter 2018-07 (Bauer and Mertens): every US recession in the past 60 years was preceded by an
     inverted curve, with one exception where an inversion was not followed by a recession; the 2019 inversion came before the 2020
     recession. US 2-year/10-year curve inverted July 2022 to about August/September 2024, the longest on record (passed the 1978
     record in March 2024). NBER's latest dated turning points are the February 2020 peak and April 2020 trough, so no recession
     in that period.
   - Q1: 4.6 − 4.0 = +0.6; slip 4.6 + 4.0 = 8.6. Q3: 4.2 − 5.1 = −0.9 = −90 bp; slip 5.1 + 4.2 = 9.3 = 930 bp.
   Lesson 4, Data that moves markets
   - Unemployment: 8m ÷ 160m = 5%.
   - Surprise: 3.4 − 3.0 = +0.4 points. June 2022 US CPI 9.1% vs about 8.8% expected (gap 0.3).
   - GDP: −0.4 − (−1.0) = +0.6 points better than feared.
   - Fed's FOMC: eight scheduled meetings a year.
   - Q1: 250,000 − 180,000 = 70,000; slip 250,000 + 180,000 = 430,000. Q4: −0.5 − (−1.5) = +1.
   - Q5: 9 ÷ 150 = 6%; slip 9 ÷ 141 = 6.38% ≈ 6.4%; 150 ÷ 9 = 16.7.
   Lesson 5, Currencies and exchange rates
   - 1 ÷ 1.10 = 0.909 ≈ €0.91.
   - Phone: $500 × 1,507.5 = 753,750; $500 × 89,500 = 44,750,000; 89,500 ÷ 1,507.5 = 59.37 ≈ 59 times.
     Rates: 1,507.5 official from December 1997 to 31 January 2023; 15,000 from 1 February 2023; 89,500 official from early 2024
     (BDL Central Council decision, February 2024, applied from 31 January 2024).
   - Euro example: €10,000 × 1.10 = $11,000; €10,000 × 1.08 = €10,800; × $1.00 = $10,800; 10,800 ÷ 11,000 − 1 = −1.818% ≈ −1.82%.
     Euro change 1.00 ÷ 1.10 − 1 = −9.09%; check 1.08 × 0.90909 − 1 = −1.82%. At $1.20: €10,800 × 1.20 = $12,960; ÷ $11,000 − 1 = 17.82%.
   - Q1: 1 ÷ 1.25 = 0.80. Q2: 800 × 4 = 3,200; 800 × 5 = 4,000; 4,000 ÷ 3,200 − 1 = 25%; 1 − 4 ÷ 5 = 20%.
   - Q3: 1.06 × 1.04 − 1 = 10.24%; 1.06 × 0.96 − 1 = 1.76%. Q4: 50,000 ÷ 40,000 − 1 = 25%; 1 − 40,000 ÷ 50,000 = 20%.
   - Lebanon facts: World Bank Lebanon Economic Monitor, Spring 2023 (press release 16 May 2023): the currency lost more than 98% of its
     pre-crisis value by February 2023; dollarised cash economy about $9.9 billion, 45.7% of GDP in 2022 ("almost half of GDP");
     2022 inflation averaged 171.2%. Check: 1 − 1,507.5 ÷ 89,500 = 98.3%. Banks imposed informal limits on dollar withdrawals and
     transfers abroad from autumn 2019 (AFP, Bloomberg, Al Jazeera reports, Nov 2019 to Feb 2020); later central bank schemes let
     depositors take dollar deposits out in lira at rates below the market rate. Economy Ministry allowed shops and supermarkets to
     price in dollars from March 2023. Foreign-currency share of private bank deposits was about 70% at end 2018 and 76% at end 2019
     (BLOMINVEST, from BDL data), so "most bank deposits were in dollars".
   Unit check
   - C1: 1.12 ÷ 1.09 − 1 = 2.752% ≈ 2.75%; slips 3%, 1.12 × 1.09 − 1 = 22.08%, 12 ÷ 9 = 1.33.
   - C2: 1.05^3 = 1.157625; $5,000 ÷ 1.157625 = $4,319.19; slips $5,000 × 0.85 = $4,250; $5,000 × 0.95^3 = $4,286.88.
   - C3: as Lesson 2 card 3: −17.05% for 10 years vs −1.85% for 1 year (6% → 8%).
   - C5: 4.1 − 4.6 = −0.5 points = −50 bp.
   - C7: 2.9 − 3.2 = −0.3 points.
   - C8: $12,000 ÷ 1.20 = €10,000; × 0.95 = €9,500; × 1.30 = $12,350; 12,350 ÷ 12,000 − 1 = 2.917% ≈ 2.92%.
     Slips: 1.30 ÷ 1.20 − 1 = 8.33%; 8.33 − 5 = 3.33%; −5% ignores the currency.
   Placement
   - P1: 4 − 6 = −2%; exact 1.04 ÷ 1.06 − 1 = −1.89%.
   - P3: 4.2 − 3.0 = 1.2 points; slip 4.2 + 3.0 = 7.2.
   - P5: 1.20 × 0.80 − 1 = −4%.
*/
