/* ---------- Measuring risk ---------- */
const RISK_VOLATILITY = {
  title:'Volatility and standard deviation', min:5,
  cards:[
    {k:'The idea', t:'Putting a number on swings', b:`
      <p class="lead">In the How markets work unit, volatility meant how much a price swings. To compare two investments, you need to measure it. The usual measure is the standard deviation of returns.</p>
      <div class="term"><span class="term-k">Key term</span><b>Standard deviation:</b> how far returns typically land from their average. Small means steady. Large means the returns jump around.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Five months, one number', b:`
      <p>A fund's last five monthly returns: <b class="good-t">+2%</b>, <b class="bad-t">−2%</b>, <b class="good-t">+3%</b>, 0%, <b class="good-t">+2%</b>.</p>
      <p><b>1. Average:</b> (2 − 2 + 3 + 0 + 2) ÷ 5 = 1%.</p>
      <p><b>2. Gaps from the average:</b> +1, −3, +2, −1, +1. Square them so the pluses and minuses can't cancel out: 1 + 9 + 4 + 1 + 1 = 16.</p>
      <p><b>3. Divide, then take the square root:</b> 16 ÷ 4 = 4, and √4 = 2%.</p>
      <div class="kv kv3"><div><b>1%</b><span>Average month</span></div><div><b>16</b><span>Squared gaps</span></div><div><b class="bad-t">2%</b><span>Standard deviation</span></div></div>
      <p>We divided by 4, one less than the 5 returns. That's the sample method, the usual choice when measuring from past data. Dividing by 5 gives about 1.8%. With hundreds of returns, the two barely differ.</p>`},
    {k:'Annualising', t:'From months and days to a year', b:`
      <p>Volatility is usually quoted per year. Swings partly cancel out from one period to the next, so they don't add up in a straight line. Instead, multiply by the square root of the number of periods in a year.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Monthly returns</div><b class="mono">× √12</b><p>2% a month × 3.46 ≈ 6.9% a year.</p></div>
        <div class="col good"><div class="col-h">Daily returns</div><b class="mono">× √252</b><p>1% a day × 15.87 ≈ 15.9% a year.</p></div>
      </div>
      <p>Why 252? Markets are shut at weekends and on public holidays. 365 days minus 104 weekend days leaves 261, and the holidays bring it to about 252 trading days. That's the standard figure.</p>
      <p>The square-root rule assumes each period's return doesn't depend on the last one. It's a convention, not a law of nature.</p>
      <div class="term"><span class="term-k">Key term</span><b>Annualised volatility:</b> the standard deviation of returns scaled up to a one-year figure, so investments measured over different periods can be compared.</div>`},
    {k:'Reading it', t:'Higher volatility, wider range', b:`
      <p>Two made-up funds both average 8% a year. Their volatility is very different.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Sannine Fund</div>
          <p>Volatility 10%</p>
          <div class="pf-r">Typical year<b class="mono">−2% to +18%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Qadisha Fund</div>
          <p>Volatility 40%</p>
          <div class="pf-r">Typical year<b class="mono bad-t">−32% to +48%</b></div>
        </div>
      </div>
      <p>If returns followed a bell curve, about two years in three would land within one standard deviation of the average: 8% ± 10%, or 8% ± 40%. Real markets have more extreme days than a bell curve predicts, so treat this as a rough guide.</p>
      <p>Same average, very different chances of a bad year.</p>`}
  ],
  qs:[
    {q:'Fund A\'s monthly returns have a standard deviation of 1%. Fund B\'s is 5%. What does that tell you?',
     o:['B\'s monthly returns tend to land much further from their average','B earns five times as much as A','B is certain to lose money more often','A returns exactly 1% every month'], a:0,
     e:'Standard deviation measures how spread out returns are around their average. On its own, it says nothing about how much a fund earns.'},
    {q:'A savings account pays exactly 0.3% every month. What is the standard deviation of its monthly returns?',
     o:['0.3%','3.6%','0%','1%'], a:2,
     e:'Every month equals the average, so every gap is 0. No swings means a standard deviation of 0.'},
    {q:'A stock\'s monthly returns have a standard deviation of 3%. Roughly what is its annualised volatility?',
     o:['3%','36%','About 10.4%','0.25%'], a:2,
     e:'Multiply by √12, not by 12: 3% × 3.46 ≈ 10.4%. Swings partly cancel out over the year.'},
    {q:'A portfolio\'s daily returns have a standard deviation of 2%. Roughly what is its annualised volatility?',
     o:['About 38.2%','About 31.7%','24%','504%'], a:1,
     e:'Multiply by √252, the number of trading days: 2% × 15.87 ≈ 31.7%. Using √365 (about 38.2%) counts days when markets are shut.'},
    {q:'Two funds both average 6% a year. Fund A\'s volatility is 5% and Fund B\'s is 25%. Which statement is true?',
     o:['B will earn more over time','A can\'t have a losing year','They carry the same risk, since the average is the same','B\'s yearly results are likely to land much further from 6%, in both directions'], a:3,
     e:'Higher volatility means a wider range of outcomes. A can still lose money, just less often and by less.'}
  ]
};

const RISK_DRAWDOWNS = {
  title:'Drawdowns', min:4,
  cards:[
    {k:'The idea', t:'The worst fall along the way', b:`
      <p class="lead">A return tells you where a portfolio ended up. It doesn't tell you how rough the ride was. In the Reading the market unit, a drawdown was how far a price has fallen from its last peak. The worst one over a period gets its own name.</p>
      <div class="term"><span class="term-k">Key term</span><b>Maximum drawdown:</b> the biggest fall from a peak to a later low over a period, as a percentage of that peak.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'Finding the worst fall', b:`
      <p>A portfolio over eight months:</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Line chart of a portfolio's value over eight months: $10,000, $11,000, $12,000, $10,200, $10,800, $13,000, $11,700, $12,500. Dashed lines mark the biggest fall, from $12,000 down to $10,200, which is 15%.">
        <polyline points="30,140 65,100 100,60 135,132 170,108 205,20 240,72 275,40" fill="none" stroke="var(--bull)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
        <line x1="100" y1="60" x2="135" y2="60" stroke="var(--bear-deep)" stroke-width="2" stroke-dasharray="4 4"/>
        <line x1="135" y1="60" x2="135" y2="132" stroke="var(--bear-deep)" stroke-width="2" stroke-dasharray="4 4"/>
        <circle cx="100" cy="60" r="4" fill="var(--ink)"/><circle cx="135" cy="132" r="4" fill="var(--bear-deep)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="30" y="156" text-anchor="middle">$10,000</text>
          <text x="100" y="50" text-anchor="middle" fill="var(--ink)">$12,000</text>
          <text x="135" y="152" text-anchor="middle" fill="var(--ink)">$10,200</text>
          <text x="205" y="12" text-anchor="middle">$13,000</text>
          <text x="240" y="90" text-anchor="middle">$11,700</text>
          <text x="275" y="28" text-anchor="middle">$12,500</text>
          <text x="141" y="98" fill="var(--bear-ink)">−15%</text>
        </g>
      </svg>
      <p>Each fall is measured from the peak before it. $12,000 to $10,200 is a fall of $1,800, and $1,800 ÷ $12,000 = 15%. $13,000 to $11,700 is $1,300 ÷ $13,000 = 10%.</p>
      <p>The maximum drawdown is <b class="bad-t">15%</b>, even though the portfolio ended up <b class="good-t">+25%</b>.</p>`},
    {k:'The catch', t:'Same return, different ride', b:`
      <p>Two portfolios both turn $10,000 into $12,000 in a year, a 20% return.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Steady</div>
          <p>Climbs with small dips</p>
          <div class="pf-r">Maximum drawdown<b class="mono">5%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Bumpy</div>
          <p>Falls from $11,000 to $7,150, then recovers</p>
          <div class="pf-r">Maximum drawdown<b class="mono bad-t">35%</b></div>
        </div>
      </div>
      <p>On paper they tie. In real life, watching a third of the money disappear tempts many people to sell near the bottom, which locks in the loss.</p>
      <p>The maths from the Bulls, bears and recoveries lesson applies too: from $7,150, it takes a rise of about 54% just to get back to $11,000.</p>`},
    {k:'The limit', t:'One number, not the whole story', b:`
      <p>Maximum drawdown counts only the single worst fall. It doesn't say how often the portfolio fell, or how long it took to climb back.</p>
      <div class="term"><span class="term-k">Key term</span><b>Underwater:</b> a portfolio is underwater while it sits below its last peak. The time until it sets a new peak is its recovery time.</div>
      <p>It also depends on the period you look at. A longer history can only show the same worst fall or a deeper one.</p>
      <p>In Bullpen's trading game, if two players finish with the same season score, the one with the smaller maximum drawdown ranks higher.</p>`}
  ],
  qs:[
    {q:'A portfolio goes from $8,000 to $10,000, falls to $7,500, then climbs to $11,000. What is its maximum drawdown?',
     o:['6.25%','25%','About 33%','0%, since it ended higher'], a:1,
     e:'Measure from the peak before the fall: ($10,000 − $7,500) ÷ $10,000 = 25%. Dividing by the low ($2,500 ÷ $7,500 ≈ 33%) or measuring from the start ($500 ÷ $8,000 = 6.25%) are common slips.'},
    {q:'True or false: a portfolio that ends the year up 30% can\'t have had a large drawdown during the year.',
     o:['True','False'], a:1,
     e:'The ending return says nothing about the ride. $100 can fall to $60, a 40% drawdown, and still finish the year at $130.'},
    {q:'Two portfolios both returned 15% last year. A\'s maximum drawdown was 8%. B\'s was 40%. Which statement fits?',
     o:['They were equally risky, since the return was the same','A had a lower return','B must have made more trades','B went through a much deeper fall on the way'], a:3,
     e:'Same ending return, very different ride. B\'s holders watched 40% of its peak value disappear at one point in the year.'},
    {q:'A portfolio\'s maximum drawdown was 25%. What rise did it need from the low just to get back to its old peak?',
     o:['25%','About 33%','50%','About 20%'], a:1,
     e:'At the low it was worth 75% of the peak. 100 ÷ 75 ≈ 1.33, so it needed a rise of about 33%.'},
    {q:'In Bullpen\'s trading game, two players finish a season with the same season score. Who ranks higher?',
     o:['The one with the higher return','The one with the smaller maximum drawdown','The one who made more trades','The one who joined first'], a:1,
     e:'Ties go to the smaller maximum drawdown: the same score, reached with a gentler worst fall.'}
  ]
};

const RISK_BETA = {
  title:'Beta and correlation', min:5,
  cards:[
    {k:'The idea', t:'Moving together, in numbers', b:`
      <p class="lead">The How markets work unit described correlation as how closely two investments move together. Here it gets a number, from −1 to +1.</p>
      <div class="score"><div><b>−1</b><span>Exact opposites</span></div><div><b>0</b><span>No steady link</span></div><div><b>+1</b><span>In lockstep</span></div></div>
      <div class="term"><span class="term-k">Key term</span><b>Correlation coefficient:</b> a number from −1 to +1 for how two returns move together. Near +1, they tend to rise and fall at the same time. Near 0, one tells you little about the other. Near −1, when one rises the other tends to fall.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Beta: moving with the market', b:`
      <div class="term"><span class="term-k">Key term</span><b>Beta:</b> how much a stock tends to move when the whole market moves 1%. "The market" usually means a broad index such as the S&amp;P 500.</div>
      <p>A beta of 1 tends to move in step with the market. Above 1, a stock tends to react more strongly to the market's moves. Below 1, less strongly. Say the market falls 4% in a week:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Cedar Tech</div>
          <p>Beta 1.5</p>
          <div class="pf-r">Tends to move about<b class="mono bad-t">−6%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Sannine Foods</div>
          <p>Beta 0.5</p>
          <div class="pf-r">Tends to move about<b class="mono bad-t">−2%</b></div>
        </div>
      </div>
      <p>1.5 × −4% = −6%, and 0.5 × −4% = −2%. If the market rose 4% instead, the same betas point to about +6% and +2%. "Tends to" matters: on any one day, company news can push a stock anywhere.</p>`},
    {k:'Under the hood', t:'Where beta comes from', b:`
      <p>Beta joins correlation to volatility from the Volatility and standard deviation lesson:</p>
      <p><b>Beta = correlation × (stock's volatility ÷ market's volatility)</b></p>
      <p>With the market's volatility at 15%:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Cedar Tech</div>
          <p>Correlation 0.75 · volatility 30%</p>
          <div class="pf-r">0.75 × 30 ÷ 15<b class="mono">1.5</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Litani Mining</div>
          <p>Correlation 0.2 · volatility 40%</p>
          <div class="pf-r">0.2 × 40 ÷ 15<b class="mono">≈0.53</b></div>
        </div>
      </div>
      <p>Litani Mining swings more than Cedar Tech, yet has the lower beta. Beta only captures the swings that come with the market.</p>
      <p>Beta is estimated from past returns, often a few years of weekly or monthly data. It changes over time, and different data sources can show different betas for the same stock.</p>`},
    {k:'In practice', t:'Why low correlation helps', b:`
      <p>Two made-up funds each have a volatility of 20% and the same expected return. A portfolio holds half of each. Its swings depend on how the two move together:</p>
      <div class="score"><div><b>20%</b><span>Correlation +1</span></div><div><b>17.3%</b><span>Correlation 0.5</span></div><div><b class="good-t">14.1%</b><span>Correlation 0</span></div></div>
      <p>The expected return of the mix stays the same. Only the swings shrink. That's the case for diversification in numbers: the same return with smaller swings.</p>
      <p>The catch: correlations aren't fixed. In a crash, many assets tend to fall together, just when spreading out matters most.</p>`}
  ],
  qs:[
    {q:'Two stocks have a correlation of −0.8. What does that mean?',
     o:['When one rises, the other tends to fall','They tend to rise and fall together','Their prices have nothing to do with each other','One is 80% riskier than the other'], a:0,
     e:'A correlation near −1 means the two tend to move in opposite directions.'},
    {q:'A stock has a beta of 1.3. The market rises 2% today. Roughly how does the stock tend to move?',
     o:['+1.3%','+2%','+2.6%','+3.3%'], a:2,
     e:'Beta × market move: 1.3 × 2% = 2.6%. It\'s a tendency, because company news can move the stock on any day.'},
    {q:'A stock\'s correlation with the market is 0.6. Its volatility is 25% and the market\'s is 15%. What is its beta?',
     o:['0.36','1.0','1.67','0.6'], a:1,
     e:'Beta = correlation × (stock volatility ÷ market volatility) = 0.6 × 25 ÷ 15 = 1.0.'},
    {q:'A portfolio is split half and half between two funds with the same volatility. Which correlation between them gives the smallest swings?',
     o:['+1.0','+0.9','+0.6','+0.2'], a:3,
     e:'The lower the correlation, the more their swings cancel out. At +1.0 there is no cancelling at all.'},
    {q:'True or false: a stock\'s beta is fixed, like its ticker symbol.',
     o:['True','False'], a:1,
     e:'Beta is estimated from past returns. It changes as the business and the market change, and it depends on the period measured.'}
  ]
};

const RISK_SHARPE = {
  title:'The Sharpe ratio', min:5,
  cards:[
    {k:'The idea', t:'Return per unit of swing', b:`
      <p class="lead">A return on its own doesn't say how much risk was taken to get it. The Sharpe ratio divides the reward by the swings.</p>
      <p><b>Sharpe ratio = (return − risk-free rate) ÷ volatility</b></p>
      <p>The risk-free rate is what you could earn with almost no risk, such as the interest on short-term US government debt. Taking it away leaves the extra return earned for taking risk.</p>
      <div class="term"><span class="term-k">Key term</span><b>Sharpe ratio:</b> the return above the risk-free rate for each unit of volatility. It's named after the economist William Sharpe, who proposed it in 1966.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Bigger return or better return?', b:`
      <p>Two made-up investors over one year, with a risk-free rate of 4%:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Rania: a few wild bets</div>
          <p>Return 30% · volatility 40%</p>
          <div class="pf-r">(30 − 4) ÷ 40<b class="mono">0.65</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Sami: spread out</div>
          <p>Return 12% · volatility 8%</p>
          <div class="pf-r">(12 − 4) ÷ 8<b class="mono good-t">1.00</b></div>
        </div>
      </div>
      <p>Rania made more money. Sami earned more for the risk he took: each 1% of swings brought him 1% of extra return, against 0.65% for Rania.</p>`},
    {k:'In Bullpen', t:'The season score is this ratio', b:`
      <p>Bullpen's trading game ranks players by a season score: return ÷ swings. It's the Sharpe ratio with the risk-free rate set to zero.</p>
      <div class="term"><span class="term-k">Key term</span><b>Season score:</b> a player's annualised return divided by the annualised volatility of their portfolio's daily returns.</div>
      <p>Rania would score 30 ÷ 40 = 0.75. Sami would score 12 ÷ 8 = <b class="good-t">1.5</b>, twice as much.</p>
      <p>Going all in on one wild stock can top the return table if it happens to jump, but the huge swings shrink the score. If the gamble fails, the return is negative, and so is the score.</p>
      <p>Bet size alone doesn't help either. If half the money sits in cash earning nothing, the return and the swings both roughly halve, so the score stays about the same. It mainly rewards how good the bets are, not how big.</p>`},
    {k:'The limit', t:'What the ratio misses', b:`
      <div class="split">
        <div class="col bad"><div class="col-h">Ups count as risk</div><b>All swings are equal</b><p>A sudden jump up adds to volatility just like a drop, even though nobody minds it.</p></div>
        <div class="col bad"><div class="col-h">Based on the past</div><b>Not a forecast</b><p>A high ratio last season says nothing certain about the next one.</p></div>
      </div>
      <p>Some strategies make small, steady gains for months, then lose a lot in one go. Until that day, their Sharpe ratio looks excellent. Over a few weeks, luck can still move the number a lot.</p>
      <div class="term"><span class="term-k">Key term</span><b>Sortino ratio:</b> a cousin of the Sharpe ratio that counts only the downward swings.</div>`}
  ],
  qs:[
    {q:'A portfolio returned 10% with a volatility of 16%. The risk-free rate was 2%. What is its Sharpe ratio?',
     o:['0.5','0.625','1.6','8'], a:0,
     e:'(10% − 2%) ÷ 16% = 8 ÷ 16 = 0.5. Forgetting the risk-free rate gives 0.625.'},
    {q:'In Bullpen, a player\'s annualised return is 18% and the annualised volatility of their daily returns is 24%. What is their season score?',
     o:['1.33','0.75','−6','0.43'], a:1,
     e:'Season score = return ÷ swings = 18 ÷ 24 = 0.75. Dividing the other way gives 1.33.'},
    {q:'Two players finish a Bullpen season. Hadi made 45% with 60% volatility. Lara made 16% with 10% volatility. Who ranks higher?',
     o:['Hadi, because his return is higher','They tie','Lara, with a score of 1.6 against Hadi\'s 0.75','Hadi, because he took more risk'], a:2,
     e:'Hadi: 45 ÷ 60 = 0.75. Lara: 16 ÷ 10 = 1.6. The score rewards return per unit of swing, not return alone.'},
    {q:'Which is a known weakness of the Sharpe ratio?',
     o:['It ignores returns completely','It can only be used for bonds','A sudden jump up counts as risk, just like a drop','It always favours the highest return'], a:2,
     e:'Volatility counts swings in both directions. The Sortino ratio counts only the downward ones.'},
    {q:'True or false: a portfolio with a high Sharpe ratio last year will have a high one this year.',
     o:['True','False'], a:1,
     e:'The ratio is worked out from past returns. It describes what happened, not what will happen.'}
  ]
};

const RISK_SIZING = {
  title:'Position sizing and stop-losses', min:5,
  cards:[
    {k:'The idea', t:'Decide the loss first', b:`
      <p class="lead">Before a trade, many traders decide how much they are willing to lose if it goes wrong. Then they work out how big the trade can be.</p>
      <div class="term"><span class="term-k">Key term</span><b>Position sizing:</b> choosing how much to put into one trade, based on how much it could lose.</div>
      <p>A common rule of thumb is to risk only a small, fixed share of the portfolio on any one trade, such as 1% or 2%. It's a way many traders think, not a rule anyone has to follow.</p>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'From risk to share count', b:`
      <p>A $10,000 portfolio risks 1% per trade, so the most this trade is meant to lose is $100. Cedar Tech is at $50, and the plan is to get out if it falls to $45.</p>
      <div class="kv"><div><b>$100</b><span>Planned loss</span></div><div><b>$5</b><span>Risk per share</span></div><div><b class="good-t">20</b><span>Shares</span></div><div><b>$1,000</b><span>Position</span></div></div>
      <p>$10,000 × 1% = $100. $50 − $45 = $5 a share. $100 ÷ $5 = 20 shares, a $1,000 position.</p>
      <p>The position is 10% of the portfolio, but the planned loss is 1%. A closer exit at $48 allows 50 shares. A wider one at $40 allows only 10.</p>`},
    {k:'The catch', t:'Stops can slip', b:`
      <div class="term"><span class="term-k">Key term</span><b>Stop-loss order:</b> an order to sell automatically if the price falls to a level you set, called the stop. Once triggered, it becomes a market order.</div>
      <p>A market order fills at the next available price. In a fast fall, or when bad news comes out overnight and the stock opens far lower, that can be well below the stop. It's the slippage from the Placing orders lesson in the Reading the market unit.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">The plan</div>
          <p>Sells at the $45 stop</p>
          <div class="pf-r">20 × $5<b class="mono bad-t">−$100</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Opens at $40</div>
          <p>Sells near $40</p>
          <div class="pf-r">20 × $10<b class="mono bad-t">−$200</b></div>
        </div>
      </div>
      <p>A stop-limit order sets a lowest acceptable price instead, but in a gap it may not sell at all. And a stop can't tell a brief dip from a real fall: the price can trigger it and bounce straight back.</p>`},
    {k:'The limit', t:'Small risks can still add up', b:`
      <p>Why keep each risk small? Losing streaks happen. Here is $10,000 after ten losing trades in a row:</p>
      <div class="split">
        <div class="col good"><div class="col-h">1% risked each time</div><b class="mono">$9,044</b><p>Down about 10%.</p></div>
        <div class="col bad"><div class="col-h">10% risked each time</div><b class="mono">$3,487</b><p>Down about 65%. Getting back needs +187%.</p></div>
      </div>
      <p>Sizing each trade doesn't fix concentration risk, from the How markets work unit. Five trades risking 1% each, all in bank stocks, act like one big bet. One bad day for banks can hit all five stops at once: a 5% loss, or more if prices gap.</p>`}
  ],
  qs:[
    {q:'A trader has $20,000 and risks 1% per trade. She buys at $40 with a stop at $36. How many shares fit the rule?',
     o:['200','500','50','20'], a:2,
     e:'1% of $20,000 = $200. $40 − $36 = $4 a share. $200 ÷ $4 = 50 shares.'},
    {q:'Same trade, but the stop moves from $36 down to $32. How many shares now fit the $200 risk limit?',
     o:['100','25','50','None'], a:1,
     e:'The risk per share doubles to $8. $200 ÷ $8 = 25 shares. A wider stop means a smaller position.'},
    {q:'A stop-loss is set at $45. Bad news comes out overnight and the stock opens at $41. Roughly what price does the stop-loss sell at?',
     o:['About $41','$45','$43','It doesn\'t sell'], a:0,
     e:'Once triggered, a stop-loss becomes a market order. It fills at the next available price, here about $41.'},
    {q:'A $10,000 account loses 10% of its value on each of 5 trades in a row. About how much is left?',
     o:['$5,000','$9,500','About $5,905','About $6,500'], a:2,
     e:'Each loss is 10% of what is left: $10,000 × 0.9 × 0.9 × 0.9 × 0.9 × 0.9 ≈ $5,905.'},
    {q:'A trader holds five positions, each sized to risk 1%. All five are oil companies. What is the main problem?',
     o:['Five positions is too few to use stop-losses','Oil shares can\'t have stop-losses','Nothing: 1% each keeps the total risk at 1%','They tend to move together, so one oil-price drop can hit all five stops at once'], a:3,
     e:'Five correlated trades act like one big bet. If all five stops are hit, the loss is at least 5%.'}
  ]
};

const RISK_CHECK = {
  title:'Unit check', min:4, badge:{name:'Risk Manager', icon:'scale'}, cards:[],
  qs:[
    {q:'A fund\'s monthly returns over five months are +6%, −1%, +3%, −1%, +3%. Using the sample method (dividing by one less than the count), what is the standard deviation?',
     o:['2%','About 2.7%','3%','9%'], a:2,
     e:'Average: 10 ÷ 5 = 2%. Gaps: +4, −3, +1, −3, +1. Squares: 16 + 9 + 1 + 9 + 1 = 36. 36 ÷ 4 = 9, and √9 = 3%. Dividing by 5 gives about 2.7%. Forgetting the square root gives 9.'},
    {q:'A portfolio goes $50,000 → $56,000 → $49,000 → $60,000 → $51,000 → $58,000. What is its maximum drawdown?',
     o:['12.5%','15%','About 18.3%','16%'], a:1,
     e:'Falls from a peak to a later low: $56,000 → $49,000 is 12.5%, and $60,000 → $51,000 is 15%. The $49,000 low came before the $60,000 peak, so pairing them (about 18.3%) isn\'t a drawdown.'},
    {q:'Batroun Mining\'s volatility is 45% and the market\'s is 15%. Their correlation is 0.3. What is Batroun Mining\'s beta?',
     o:['0.9','3.0','0.1','0.3'], a:0,
     e:'Beta = 0.3 × 45 ÷ 15 = 0.9. The stock swings three times as much as the market, but only loosely with it, so its beta is below 1.'},
    {q:'Over a year, Portfolio A returned 14% with 20% volatility. Portfolio B returned 9% with 10% volatility. With a 4% risk-free rate, how do their Sharpe ratios compare?',
     o:['A\'s is higher','B\'s is higher','They are equal, 0.5 each','They are equal, 0.7 each'], a:2,
     e:'A: (14 − 4) ÷ 20 = 0.5. B: (9 − 4) ÷ 10 = 0.5. With Bullpen\'s zero risk-free rate they would differ: 0.7 for A, 0.9 for B.'},
    {q:'Omar ends a Bullpen season fully invested, with a score of 1.2. Had he kept half his money in cash earning nothing, and made the same trades with the rest, roughly what would his score have been?',
     o:['About 0.6','About 2.4','Zero','About 1.2'], a:3,
     e:'Half the money in the same trades means roughly half the return and half the swings. Half ÷ half leaves the ratio about where it was.'},
    {q:'A $25,000 account risks 1% per trade. A trader buys at $80 with a stop at $75, sized to the rule. The stock then opens at $70 after bad news overnight. Roughly what is the loss?',
     o:['$250','$500','$1,250','$3,500'], a:1,
     e:'1% of $25,000 = $250. $250 ÷ $5 = 50 shares. The stop fills near $70, not $75: 50 × $10 = $500, double the plan.'},
    {q:'Two funds each have a volatility of 30%. A portfolio holds half of each. If their correlation is +1, what is the portfolio\'s volatility?',
     o:['15%','30%','About 21.2%','60%'], a:1,
     e:'With a correlation of +1 the two move in lockstep, so the mix swings exactly as much as each: 30%. At a correlation of 0 it would be about 21.2%.'},
    {q:'A player\'s portfolio has a daily volatility of 1.2% and an annualised return of 19%. Roughly what is the season score?',
     o:['About 15.8','About 0.83','About 0.06','About 1.0'], a:3,
     e:'Annualise the swings first: 1.2% × √252 ≈ 19.0%. Then 19 ÷ 19.0 ≈ 1.0. Using √365 gives about 0.83. Skipping the annualising gives about 15.8.'}
  ]
};

const UNIT_RISK = {id:'risk', title:'Measuring risk', level:'Intermediate', lessons:[RISK_VOLATILITY, RISK_DRAWDOWNS, RISK_BETA, RISK_SHARPE, RISK_SIZING, RISK_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_RISK = [
  {n:1, q:'A stock\'s daily returns have a standard deviation of 1.5%. Roughly what is its annualised volatility?',
   o:['1.5%','18%','About 24%','378%'], a:2,
   e:'Multiply by √252, the number of trading days: 1.5% × 15.87 ≈ 23.8%, about 24%.'},
  {n:2, q:'A portfolio goes $20,000 → $25,000 → $20,000 → $26,000. What is its maximum drawdown?',
   o:['20%','25%','0%, since it ended higher','30%'], a:0,
   e:'From the $25,000 peak to the $20,000 low: $5,000 ÷ $25,000 = 20%. Dividing by the low instead gives 25%, a common slip.'},
  {n:3, q:'A stock has a beta of 0.8. The market falls 10%. Roughly how does the stock tend to move?',
   o:['−10%','−8%','−12.5%','+8%'], a:1,
   e:'Beta × market move: 0.8 × −10% = −8%.'},
  {n:4, q:'A portfolio returned 15% with a volatility of 30%. The risk-free rate was 3%. What is its Sharpe ratio?',
   o:['0.5','2.0','0.4','12'], a:2,
   e:'(15% − 3%) ÷ 30% = 12 ÷ 30 = 0.4. Leaving out the risk-free rate gives 0.5.'},
  {n:5, q:'An $8,000 account risks 2% per trade. A trader buys at $30 with a stop at $26. How many shares fit the rule?',
   o:['160','40','267','80'], a:1,
   e:'2% of $8,000 = $160. $30 − $26 = $4 a share. $160 ÷ $4 = 40 shares.'}
];

/* MATHS CHECK (all run in Python)
   Lesson 1 · Volatility and standard deviation
   - Returns +2, −2, +3, 0, +2: mean 5 ÷ 5 = 1%. Gaps +1, −3, +2, −1, +1. Squares 1 + 9 + 4 + 1 + 1 = 16.
     Sample: 16 ÷ 4 = 4, √4 = 2%. Population: √(16 ÷ 5) = 1.789 ≈ 1.8%.
   - √12 = 3.4641; 2% × √12 = 6.928 ≈ 6.9%. √252 = 15.8745; 1% × √252 = 15.87 ≈ 15.9%. 365 − 104 = 261.
   - Normal distribution within ±1 sd = 68.27% (about two in three). 8 ± 10 = −2 to +18; 8 ± 40 = −32 to +48.
   - Q3: 3 × √12 = 10.39 ≈ 10.4% (slips: 3 × 12 = 36, 3 ÷ 12 = 0.25). Q4: 2 × √252 = 31.749 ≈ 31.7%;
     2 × √365 = 38.21; 2 × 12 = 24; 2 × 252 = 504.
   Lesson 2 · Drawdowns
   - Values 10,000 / 11,000 / 12,000 / 10,200 / 10,800 / 13,000 / 11,700 / 12,500.
     12,000 → 10,200: 1,800 ÷ 12,000 = 15%. 13,000 → 11,700: 1,300 ÷ 13,000 = 10%. Max drawdown 15%. Return 12,500 ÷ 10,000 − 1 = 25%.
   - SVG: x = 30 + 35i; y = 140 − (value − 10,000) ÷ 25 → (30,140) (65,100) (100,60) (135,132) (170,108) (205,20) (240,72) (275,40).
   - 11,000 × 0.65 = 7,150 (−35%). 11,000 ÷ 7,150 − 1 = 53.8% ≈ 54%. 10,000 → 12,000 = +20%.
   - Q1: 10,000 → 7,500 = 25% (slips 2,500 ÷ 7,500 = 33.3%; 500 ÷ 8,000 = 6.25%). Q2: 100 → 60 = 40% drawdown, ends 130 = +30%.
   - Q4: 1 ÷ 0.75 − 1 = 33.3%.
   Lesson 3 · Beta and correlation
   - 1.5 × −4% = −6%; 0.5 × −4% = −2%. Cedar Tech 0.75 × 30 ÷ 15 = 1.5. Litani Mining 0.2 × 40 ÷ 15 = 0.533.
   - 50/50 mix of two 20% funds: σ = √(0.25·400 + 0.25·400 + 2·0.25·ρ·400) → ρ 1: 20%, ρ 0.5: 17.32%, ρ 0: 14.14%.
   - Q2: 1.3 × 2 = 2.6%. Q3: 0.6 × 25 ÷ 15 = 1.0 (slips 0.6 × 15 ÷ 25 = 0.36; 25 ÷ 15 = 1.67).
   - Q4: mix volatility at ρ 1 / 0.9 / 0.6 / 0.2 = 20 / 19.49 / 17.89 / 15.49%, so +0.2 is smallest.
   Lesson 4 · The Sharpe ratio
   - Rania (30 − 4) ÷ 40 = 0.65; Sami (12 − 4) ÷ 8 = 1.00. Season scores 30 ÷ 40 = 0.75, 12 ÷ 8 = 1.5.
   - Half in cash: exact only with simple (arithmetic) annualising and the invested share held at 50%. Reviewer simulation, seasons
     scoring ~1.2 at full size: compounded, held at 50% → ~1.19-1.24; half left in cash with no rebalancing (cash share drifts)
     → ~1.05-1.16 for volatility 15-60%. Hence "roughly"/"about" in the text; 1.2 stays the clearly closest option in C5.
   - Q1: (10 − 2) ÷ 16 = 0.5 (slip 10 ÷ 16 = 0.625). Q2: 18 ÷ 24 = 0.75 (24 ÷ 18 = 1.33; 18 − 24 = −6; 18 ÷ 42 = 0.43).
   - Q3: Hadi 45 ÷ 60 = 0.75; Lara 16 ÷ 10 = 1.6.
   Lesson 5 · Position sizing and stop-losses
   - 10,000 × 1% = 100; 50 − 45 = 5; 100 ÷ 5 = 20 shares; 20 × 50 = 1,000 (10% of portfolio). Stop 48: 100 ÷ 2 = 50. Stop 40: 100 ÷ 10 = 10.
   - Gap to 40: 20 × 10 = 200.
   - 10,000 × 0.99^10 = 9,043.82 (−9.6%, about 10%). 10,000 × 0.9^10 = 3,486.78 (−65.1%); 1 ÷ 0.9^10 − 1 = 186.8% ≈ 187%.
   - Q1: 20,000 × 1% = 200; 200 ÷ 4 = 50. Q2: 200 ÷ 8 = 25. Q4: 10,000 × 0.9^5 = 5,904.90.
   Unit check
   - C1: +6, −1, +3, −1, +3: mean 2. Gaps +4, −3, +1, −3, +1. Squares sum 36. 36 ÷ 4 = 9, √9 = 3%. Population √(36 ÷ 5) = 2.683.
   - C2: 56,000 → 49,000 = 12.5%; 60,000 → 51,000 = 15% (max). 60,000 → 49,000 = 18.3% (not a drawdown). Return 58,000 ÷ 50,000 − 1 = 16%.
   - C3: 0.3 × 45 ÷ 15 = 0.9 (45 ÷ 15 = 3.0; 0.3 × 15 ÷ 45 = 0.1).
   - C4: A (14 − 4) ÷ 20 = 0.5; B (9 − 4) ÷ 10 = 0.5. Zero risk-free: 14 ÷ 20 = 0.7; 9 ÷ 10 = 0.9.
   - C6: 25,000 × 1% = 250; 250 ÷ 5 = 50 shares; 50 × (80 − 70) = 500 (50 × 70 = 3,500).
   - C7: ρ +1: 0.5 × 30 + 0.5 × 30 = 30%. ρ 0: 30 × √0.5 = 21.21%.
   - C8: 1.2 × √252 = 19.05; 19 ÷ 19.05 = 0.997 ≈ 1.0. 19 ÷ 1.2 = 15.83. 1.2 × √365 = 22.93; 19 ÷ 22.93 = 0.83. 1.2 ÷ 19 = 0.06.
   Placement
   - P1: 1.5 × √252 = 23.81 ≈ 24% (1.5 × 12 = 18; 1.5 × 252 = 378). P2: 25,000 → 20,000 = 20% (5,000 ÷ 20,000 = 25%).
   - P3: 0.8 × −10 = −8% (−10 ÷ 0.8 = −12.5). P4: (15 − 3) ÷ 30 = 0.4 (15 ÷ 30 = 0.5; 30 ÷ 15 = 2).
   - P5: 8,000 × 2% = 160; 160 ÷ 4 = 40 (8,000 ÷ 30 = 266.7).
*/
