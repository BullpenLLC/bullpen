/* ---------- How markets work ---------- */
const WHAT_A_STOCK = {
  title:'What a stock is', min:4,
  cards:[
    {k:'The idea', t:'A small piece of a company', b:`
      <p class="lead">A stock, also called a share, is a small piece of ownership in a company. Buy one and you own part of that business.</p>
      <div class="term"><span class="term-k">Key term</span><b>Equity:</b> another word for ownership. That's why stocks are also called equities, and why "equity markets" means stock markets.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'How big is your slice?', b:`
      <p>A bakery is split into 1,000 shares. The whole business is worth $200,000. You buy 10 shares.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">The bakery</div>
          <p>1,000 shares in total</p>
          <div class="pf-r">Each share is worth<b class="mono">$200</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Your slice</div>
          <p>10 shares out of 1,000</p>
          <div class="pf-r">You own 1%, worth<b class="mono good-t">$2,000</b></div>
        </div>
      </div>
      <p>$200,000 ÷ 1,000 shares = $200 a share. 10 shares × $200 = $2,000, which is 1% of the bakery.</p>`},
    {k:'Making money', t:'Two ways shares pay you', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Way 1</div><b>The price goes up</b><p>Buy a share at $20, sell it later at $26, and you keep the $6 difference.</p></div>
        <div class="col good"><div class="col-h">Way 2</div><b>Dividends</b><p>Some companies pay shareholders part of their profits, often every three months.</p></div>
      </div>
      <p>Many companies, especially young fast-growing ones, pay no dividend. They put their profits back into growing the business instead.</p>
      <div class="term"><span class="term-k">Key term</span><b>Dividend:</b> a cash payment a company makes to its shareholders out of its profits.</div>`},
    {k:'The risk', t:'Prices move every day', b:`
      <p>Shares are bought and sold on a stock exchange, like the New York Stock Exchange or Nasdaq. When more people want to buy a share than sell it, the price rises. When more want to sell, it falls.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Best case</div><b>No upper limit</b><p>A share can end up worth many times what you paid.</p></div>
        <div class="col bad"><div class="col-h">Worst case</div><b>It can go to $0</b><p>If the company fails, shareholders are paid last and can lose everything they put in.</p></div>
      </div>
      <p>If you buy shares with your own money, the most you can lose is what you paid. You can't end up owing more.</p>
      <div class="term"><span class="term-k">Key term</span><b>Stock exchange:</b> a marketplace where buyers and sellers trade shares.</div>`}
  ],
  qs:[
    {q:'What do you get when you buy one share of a company?',
     o:['A small part of the company','A loan you get paid interest on','A job at the company','A fixed monthly payment'], a:0,
     e:'A share is a slice of ownership. Lending money to a company is a bond, which comes in a later lesson.'},
    {q:'A company is split into 2,000 shares. You own 50 of them. What percentage of the company do you own?',
     o:['0.5%','2.5%','5%','25%'], a:1,
     e:'50 ÷ 2,000 = 0.025, which is 2.5%.'},
    {q:'What are the two ways a share can make you money?',
     o:['The price rises, and dividends','Interest, and fees','A salary, and a bonus','Rent, and interest'], a:0,
     e:'You can sell for more than you paid, and some companies pay out part of their profits as dividends.'},
    {q:'Karim buys 10 shares at $40 each and later sells all of them at $55 each. Ignoring fees, what is his profit?',
     o:['$15','$150','$400','$550'], a:1,
     e:'He makes $55 − $40 = $15 on each share. 10 shares × $15 = $150.'},
    {q:'True or false: if a company you bought shares in goes bankrupt, you can end up owing more than you paid.',
     o:['True','False'], a:1,
     e:'When you buy shares with your own money, the most you can lose is what you paid for them.'}
  ]
};

const RISK_AND_RETURN = {
  title:'Risk and return', min:4,
  cards:[
    {k:'The idea', t:'What you get, and how sure you are', b:`
      <p class="lead">Return is how much you gain or lose on an investment. Risk is how uncertain that result is, including the chance you lose money.</p>
      <div class="term"><span class="term-k">Key term</span><b>Return:</b> the gain or loss, usually shown as a percentage of what you put in. $1,000 that grows to $1,100 is a 10% return.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'The trade-off', t:'No free lunch', b:`
      <p>In general, investments that can pay more are also the ones that can drop more. You take on more risk for the chance of a bigger return.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Lower risk</div><b>Smaller, steadier returns</b><p>Bank savings accounts, government bonds.</p></div>
        <div class="col bad"><div class="col-h">Higher risk</div><b>Bigger possible gains and losses</b><p>Shares in single companies, crypto.</p></div>
      </div>
      <p>Higher risk means a wider range of outcomes. It is not a promise of more money: a risky investment can lose badly.</p>
      <div class="term"><span class="term-k">Key term</span><b>Risk-return trade-off:</b> the higher the possible return, the higher the risk you usually have to accept.</div>`},
    {k:'Do the maths', t:'Same average, different ride', b:`
      <p>Two investments each start with $1,000 and run for four years. Both average 6% a year.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Investment A</div>
          <p class="mono">+6% · +6% · +6% · +6%</p>
          <div class="pf-r">$1,000 becomes<b class="mono good-t">$1,262</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Investment B</div>
          <p class="mono">+20% · −10% · +18% · −4%</p>
          <div class="pf-r">$1,000 becomes<b class="mono">$1,223</b></div>
        </div>
      </div>
      <p>B was a much bumpier ride, and the drops cost it more than the average suggests: it ends $39 behind.</p>
      <div class="term"><span class="term-k">Key term</span><b>Volatility:</b> how much a price swings up and down.</div>
      <p>This is why Bullpen seasons rank you on return divided by swings. Wild bets that happen to pay off shouldn't beat steady skill.</p>`},
    {k:'Your timeline', t:'When you need the money matters', b:`
      <p>How much risk makes sense depends partly on when you'll need the money back.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Needed soon</div><b>No time to recover</b><p>A 30% drop the month before tuition is due leaves no time to wait for prices to come back.</p></div>
        <div class="col good"><div class="col-h">Needed in 10+ years</div><b>Time to ride out drops</b><p>One bad year matters less when there are many years left.</p></div>
      </div>
      <p>Time doesn't remove risk. It gives you room to wait instead of being forced to sell at a low point.</p>
      <div class="term"><span class="term-k">Key term</span><b>Time horizon:</b> how long until you need the money you invested.</div>`}
  ],
  qs:[
    {q:'You invest $500 and it grows to $550. What is your return?',
     o:['5%','10%','50%','$10'], a:1,
     e:'You gained $50 on $500. $50 ÷ $500 = 0.10, which is 10%.'},
    {q:'Which of these usually has the lowest risk?',
     o:['A bank savings account','Shares in one new tech company','A cryptocurrency','Shares in one small company'], a:0,
     e:'Its value barely moves. The trade-off is a lower return.'},
    {q:'What does the risk-return trade-off mean?',
     o:['Higher possible returns usually come with more risk','Taking more risk guarantees a higher return','Low-risk investments always lose money','Risk and return have nothing to do with each other'], a:0,
     e:'More risk buys you the chance of a bigger return, not a promise of one.'},
    {q:'Investment A rises 6% every year. Investment B swings between +20% and −10%. Both average about 6% a year. Which is more volatile?',
     o:['A','B','They are equally volatile','There is no way to tell'], a:1,
     e:'Volatility is about the size of the swings. B moves far more from year to year.'},
    {q:"Maya will need her savings for tuition in three months. Why is an investment with big swings a poor fit for that money?",
     o:["A drop might not recover before she needs the money","Investments with big swings can't be sold quickly","Prices only swing over many years","It always loses money over three months"], a:0,
     e:'With a short time horizon, a bad drop could force her to sell at a loss right when tuition is due.'}
  ]
};

const DIVERSIFICATION = {
  title:'Diversification', min:4, badge:{name:'Many Baskets', icon:'baskets'},
  cards:[
    {k:'The idea', t:'Spread your money out', b:`
      <p class="lead">Diversification means splitting your money across many different investments, so one bad result can't sink the whole portfolio.</p>
      <div class="term"><span class="term-k">Key term</span><b>Concentration risk:</b> the danger of having too much of your money riding on a single investment.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'One basket or ten?', b:`
      <p>Two students each invest $1,000. Then one company has terrible news and its shares fall 40%.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Portfolio A</div>
          <p>$1,000 in one company</p>
          <div class="slots"><span class="slot drop"><i style="--h:60%"></i></span></div>
          <div class="pf-r">That company falls 40%<b class="mono bad-t">$600</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Portfolio B</div>
          <p>$100 in each of 10 companies</p>
          <div class="slots">${'<span class="slot"><i></i></span>'.repeat(4)}<span class="slot drop"><i style="--h:60%"></i></span>${'<span class="slot"><i></i></span>'.repeat(5)}</div>
          <div class="pf-r">One falls 40%, the rest hold<b class="mono good-t">$960</b></div>
        </div>
      </div>
      <p>Same bad news. Portfolio A loses $400. Portfolio B loses $40.</p>`},
    {k:'The catch', t:'Different has to mean different', b:`
      <p>Spreading out only helps if your investments don't all move together. Ten tech companies often rise and fall at the same time, so owning all ten is close to one big bet.</p>
      <div class="mix">
        <div class="mix-h"><span>Looks spread out</span><span class="tag bad">Moves together</span></div>
        <div class="chips"><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span></div>
      </div>
      <div class="mix">
        <div class="mix-h"><span>Actually spread out</span><span class="tag good">Moves differently</span></div>
        <div class="chips"><span>Tech</span><span>Healthcare</span><span>Energy</span><span>Bonds</span><span>Gold</span><span>Other countries</span></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Correlation:</b> how closely two investments move together.</div>`},
    {k:'The limit', t:"What it can't protect you from", b:`
      <p>Diversification cuts the risk that comes from any one company. It can't remove the risk that hits the whole market at once.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Reduces</div><b>Company-specific risk</b><p>A scandal, a failed product, a bad CEO.</p></div>
        <div class="col bad"><div class="col-h">Can't remove</div><b>Market risk</b><p>A recession or crash, when most prices fall together.</p></div>
      </div>
      <p>So a diversified portfolio can still lose money in a bad year. It usually loses less than a single bet would.</p>`}
  ],
  qs:[
    {q:'Rana keeps all her savings in shares of one company. Which risk is she most exposed to?',
     o:['Company-specific risk','Only market risk','None, one company is easier to watch','Exchange-rate risk'], a:0,
     e:'With one company, a single piece of bad news hits everything she owns.'},
    {q:'Which portfolio is the most diversified?',
     o:['Five bank stocks from one country','Three tech stocks and two crypto coins','A global stock fund, a bond fund and some gold','One gold fund'], a:2,
     e:'It mixes different asset types and countries, which tend not to move together.'},
    {q:"You hold $100 in each of 10 companies. One falls 50%. The other nine don't move. What is the portfolio worth now?",
     o:['$500','$900','$950','$1,000'], a:2,
     e:'Only $100 was in the falling company, so you lose $50. $1,000 − $50 = $950.'},
    {q:"True or false: a well-diversified portfolio can't lose money in a market crash.",
     o:['True','False'], a:1,
     e:'In a crash most prices fall together. Diversification limits company-specific risk, not market risk.'},
    {q:'Why do 10 tech stocks give less protection than 10 stocks from different sectors?',
     o:['They tend to rise and fall together','Tech companies never pay dividends','You can only own five at a time','They always cost more per share'], a:0,
     e:'When investments are highly correlated, spreading across them barely reduces risk.'}
  ]
};

const INDEX_FUNDS = {
  title:'Index funds', min:4,
  cards:[
    {k:'The idea', t:'Buy the whole list', b:`
      <p class="lead">An index is a list of companies used to measure part of the market. An index fund buys every company on that list, so one purchase gives you a small piece of all of them.</p>
      <div class="term"><span class="term-k">Key term</span><b>S&amp;P 500:</b> an index of about 500 of the largest companies listed in the US. When people say "the market was up today", they often mean this index.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Diversification in one click', b:`
      <p>Remember Lesson 3: spreading money out cuts the damage from any one company. Here is what $100 gets you.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Picking shares</div>
          <p>$100 in single shares</p>
          <div class="pf-r">Enough for<b class="mono">1-2 companies</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Index fund</div>
          <p>$100 in an S&amp;P 500 fund</p>
          <div class="pf-r">A slice of<b class="mono good-t">~500 companies</b></div>
        </div>
      </div>
      <p>Many index funds are ETFs, so you buy and sell them on a stock exchange just like a share.</p>
      <div class="term"><span class="term-k">Key term</span><b>ETF (exchange-traded fund):</b> a fund that trades on a stock exchange like a single share.</div>`},
    {k:'Active or passive', t:'Copy the market or try to beat it', b:`
      <div class="split">
        <div class="col bad"><div class="col-h">Active fund</div><b>Managers pick stocks</b><p>They try to beat the market. Paying them usually means higher fees.</p></div>
        <div class="col good"><div class="col-h">Index fund</div><b>Copies the list</b><p>No stock picking, so fees are usually very low.</p></div>
      </div>
      <p>Beating the market is hard. Over 10 to 15 years, most active US stock funds have done worse than the S&amp;P 500 once fees are taken out, according to S&amp;P's regular SPIVA reports.</p>
      <div class="term"><span class="term-k">Key term</span><b>Expense ratio:</b> the fee a fund charges each year, as a percentage of the money you have in it.</div>`},
    {k:'The limit', t:'You get the market, ups and downs', b:`
      <p>An index fund holds hundreds of companies, but they are all in the same market. When the whole market falls, the fund falls with it.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Removes</div><b>Picking the wrong company</b><p>One company failing barely dents the fund.</p></div>
        <div class="col bad"><div class="col-h">Doesn't remove</div><b>Market risk</b><p>In a crash, most of the list drops together.</p></div>
      </div>
      <p>An index fund won't beat the market. By design it gets the market's return, minus its small fee.</p>`}
  ],
  qs:[
    {q:'What does an index fund do?',
     o:['Buys the companies on an index, so you own a small piece of each','Picks the ten best stocks every year','Promises you will never lose money','Lends your money to the government'], a:0,
     e:'It copies a list of companies. One purchase spreads your money across all of them.'},
    {q:'You put $200 into an S&P 500 index fund. Roughly how many companies do you now own a piece of?',
     o:['1','50','About 500','About 5,000'], a:2,
     e:'The S&P 500 holds about 500 large US companies, and the fund buys all of them.'},
    {q:'Fund A charges 1% a year. Fund B charges 0.05% a year. You have $10,000 in each. How much more does Fund A cost you this year?',
     o:['$5','$95','$100','$995'], a:1,
     e:'1% of $10,000 is $100. 0.05% of $10,000 is $5. $100 − $5 = $95.'},
    {q:"True or false: an index fund can't lose money because it holds hundreds of companies.",
     o:['True','False'], a:1,
     e:'When the whole market falls, most of the companies in the fund fall together.'},
    {q:"What's the main difference between an active fund and an index fund?",
     o:['Active fund managers pick stocks to try to beat the market, usually for higher fees','Index funds are only for professional investors','Active funds always earn more','Index funds pick stocks based on the news'], a:0,
     e:'An index fund just copies the list. An active fund pays people to choose, which costs more and often does worse.'}
  ]
};

const FEES_AND_COMPOUNDING = {
  title:'Fees and compounding', min:5,
  cards:[
    {k:'The idea', t:'Returns that earn returns', b:`
      <p class="lead">Compounding means your gains start earning gains of their own. The longer it runs, the faster your money grows.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Year 1</div>
          <p>10% of $1,000</p>
          <div class="pf-r">You earn<b class="mono good-t">$100</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Year 2</div>
          <p>10% of $1,100</p>
          <div class="pf-r">You earn<b class="mono good-t">$110</b></div>
        </div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Compounding:</b> earning a return on your past returns, not just on the money you first put in.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Time does the heavy lifting', b:`
      <p>$1,000 growing 7% a year, left alone:</p>
      <div class="split">
        <div class="col good"><div class="col-h">After 10 years</div><b class="mono">$1,967</b><p>Almost doubled.</p></div>
        <div class="col good"><div class="col-h">After 30 years</div><b class="mono">$7,612</b><p>More than seven times.</p></div>
      </div>
      <p>After 20 years it's $3,870. So the last 10 years add $3,742, more than the first 20 years put together ($2,870).</p>
      <div class="term"><span class="term-k">Key term</span><b>Rule of 72:</b> divide 72 by the yearly return to estimate how many years it takes to double. At 7%, about 10 years.</div>`},
    {k:'The catch', t:'Fees compound too', b:`
      <p>Two funds both earn 7% a year before fees. You put $10,000 in each and leave it for 30 years.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">0.1% yearly fee</div>
          <p>You keep 6.9% a year</p>
          <div class="pf-r">Ends at<b class="mono good-t">$74,017</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">1% yearly fee</div>
          <p>You keep 6% a year</p>
          <div class="pf-r">Ends at<b class="mono bad-t">$57,435</b></div>
        </div>
      </div>
      <p>A fee gap that looks tiny each year costs $16,582 over 30 years, because every dollar taken in fees stops compounding for you.</p>`},
    {k:'The other side', t:'Compounding works on debt too', b:`
      <p>When you owe money, the interest compounds against you. Unpaid interest gets added to what you owe, and then you pay interest on that too.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Saving at 7%</div><b>Doubles in about 10 years</b><p>72 ÷ 7 ≈ 10.</p></div>
        <div class="col bad"><div class="col-h">Owing at 24%</div><b>Doubles in about 3 years</b><p>72 ÷ 24 = 3. Credit card rates are often this high.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Compound interest:</b> interest charged or earned on both the original amount and the interest already added.</div>`}
  ],
  qs:[
    {q:'$1,000 earns 10% a year, and the gains stay invested. What is it worth after 2 years?',
     o:['$1,100','$1,200','$1,210','$2,000'], a:2,
     e:'Year 1: $1,000 + $100 = $1,100. Year 2: $1,100 + $110 = $1,210.'},
    {q:'Using the rule of 72, roughly how long does money take to double at 8% a year?',
     o:['4 years','9 years','12 years','72 years'], a:1,
     e:'72 ÷ 8 = 9 years.'},
    {q:'The rate is 10% both years. Why does year 2 earn more than year 1?',
     o:["Year 2's 10% is worked out on a bigger amount, including year 1's gain",'The rate quietly goes up','Banks add a loyalty bonus',"It doesn't, both years earn the same"], a:0,
     e:"That's compounding: the base keeps growing, so the same rate earns more each year."},
    {q:'Two funds earn 7% a year before fees. One charges 0.1%, the other 1%. With $10,000 in each for 30 years, roughly how much less does the 1% fund leave you?',
     o:['$90','$2,700','About $16,600',"Nothing, fees that small don't matter"], a:2,
     e:'$74,017 vs $57,435. The fee comes out every year, and that money can no longer compound.'},
    {q:'True or false: compounding only ever works in your favour.',
     o:['True','False'], a:1,
     e:'On debt like credit cards, unpaid interest compounds against you.'}
  ]
};

const UNIT1_CHECK = {
  title:'Unit check', min:4, badge:{name:'Market Basics', icon:'book'}, cards:[],
  qs:[
    {q:'A company has 60,000 shares. You own 300. What percentage of the company do you own?',
     o:['0.05%','0.5%','5%','20%'], a:1,
     e:'300 ÷ 60,000 = 0.005, which is 0.5%.'},
    {q:'You invest $800 and it grows to $920. What is your return?',
     o:['12%','15%','20%','$120'], a:1,
     e:'You gained $120 on $800. $120 ÷ $800 = 0.15, which is 15%.'},
    {q:'Which pair spreads your risk the most?',
     o:['A global stock index fund and a government bond fund','Shares in two oil companies','Shares in two banks','Bitcoin and another cryptocurrency'], a:0,
     e:'Stocks and government bonds often move differently. The other pairs tend to rise and fall together.'},
    {q:'A fund charges 0.5% a year. You have $20,000 in it. What is this year\'s fee?',
     o:['$10','$50','$100','$1,000'], a:2,
     e:'0.5% of $20,000 = 0.005 × $20,000 = $100.'},
    {q:'Using the rule of 72, roughly how long does money take to double at 6% a year?',
     o:['6 years','12 years','18 years','72 years'], a:1,
     e:'72 ÷ 6 = 12 years.'},
    {q:'An S&P 500 index fund holds about 500 companies. Why can it still fall 30% in a year?',
     o:['A market-wide fall hits most of those companies at once','Index funds always lose money in the long run','One bad company can sink the whole fund','The fund manager made bad picks'], a:0,
     e:'Diversification removes company-specific risk, not market risk.'},
    {q:'Which of these usually has the widest range of possible outcomes?',
     o:['Shares in a single young company','A bank savings account','A short-term government bond','An S&P 500 index fund'], a:0,
     e:'One young company can multiply in value or go to zero. The others swing far less.'},
    {q:'Two funds both earn 8% a year before fees. One charges 1.5% a year, the other 0.2%. What happens over 30 years?',
     o:['The 1.5% fund ends with much less, because the fees compound','They end up about the same','The 1.5% fund ends with more because it costs more','Fees only matter in the first year'], a:0,
     e:'Every year the higher fee takes more, and that money stops compounding for you.'}
  ]
};

const UNIT_MARKETS = {id:'markets', title:'How markets work', level:'Beginner', lessons:[WHAT_A_STOCK, RISK_AND_RETURN, DIVERSIFICATION, INDEX_FUNDS, FEES_AND_COMPOUNDING, UNIT1_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_MARKETS = [
  {n:1, q:'A company has 1 million shares. You own 10,000. What share of the company do you own?',
   o:['0.1%','1%','10%','100%'], a:1, e:'10,000 ÷ 1,000,000 = 0.01, which is 1%.'},
  {n:2, q:'An investment offers a higher possible return than a bank savings account. What usually comes with that?',
   o:['A guaranteed profit','A wider range of outcomes, including losses','Lower fees','No chance of losing money'], a:1,
   e:'Higher possible returns come with more risk: the result can land much higher or much lower.'},
  {n:3, q:'Why does owning 20 airline stocks give limited protection?',
   o:['They tend to rise and fall together','Airlines never pay dividends','20 companies is too many to track','Airline shares are too cheap'], a:0,
   e:'Investments that move together don\'t spread your risk much.'},
  {n:4, q:'What does an S&P 500 index fund aim to do?',
   o:['Match the return of about 500 large US companies','Beat the market by picking winners','Avoid any losses','Invest in 500 different countries'], a:0,
   e:'It copies the index rather than trying to beat it.'},
  {n:5, q:'$5,000 earns 10% a year for 2 years, with the gains reinvested. What is it worth?',
   o:['$5,500','$6,000','$6,050','$10,000'], a:2, e:'$5,000 → $5,500 → $6,050.'}
];
