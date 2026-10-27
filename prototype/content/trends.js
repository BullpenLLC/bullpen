/* ---------- Reading price trends ---------- */
const TRENDS_LINES = {
  title:'Trends and trendlines', min:4,
  cards:[
    {k:'The idea', t:'Which way is it heading?', b:`
      <p class="lead">In the Price charts lesson of the Reading the market unit, you read one candle at a time. Zoom out and the candles form zigzags. A trend is the direction those zigzags have been taking.</p>
      <div class="term"><span class="term-k">Key term</span><b>Trend:</b> the general direction a price has moved over a stretch of time: up, down or sideways.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Read the swings', t:'Higher highs, higher lows', b:`
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="An uptrend over 25 days. The price zigzags upwards: peaks at $50, $55 and $60, dips at $40, $45 and $50. A dashed trendline runs through the three dips.">
        <line x1="30" y1="130" x2="264" y2="78" stroke="var(--sky)" stroke-width="2" stroke-dasharray="4 4"/>
        <polyline points="30,130 75,90 120,110 165,70 210,90 255,50" fill="none" stroke="var(--bull-deep)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="75" cy="90" r="4" fill="var(--bull)"/><circle cx="165" cy="70" r="4" fill="var(--bull)"/><circle cx="255" cy="50" r="4" fill="var(--bull)"/>
        <circle cx="30" cy="130" r="4" fill="var(--ink)"/><circle cx="120" cy="110" r="4" fill="var(--ink)"/><circle cx="210" cy="90" r="4" fill="var(--ink)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="20" y="16" fill="var(--bull-ink)">Higher highs, higher lows</text>
          <text x="75" y="80" text-anchor="middle">$50</text><text x="165" y="60" text-anchor="middle">$55</text><text x="255" y="40" text-anchor="middle">$60</text>
          <text x="30" y="148" text-anchor="middle">$40</text><text x="120" y="128" text-anchor="middle">$45</text><text x="210" y="108" text-anchor="middle">$50</text>
          <text x="290" y="104" text-anchor="end">Trendline</text>
        </g>
      </svg>
      <p>Each peak beats the one before, and each dip stops higher than the last. That is an uptrend.</p>
      <div class="score"><div><b>Up</b><span>Higher highs and lows</span></div><div><b>Down</b><span>Lower highs and lows</span></div><div><b>Sideways</b><span>A flat range</span></div></div>
      <div class="term"><span class="term-k">Key term</span><b>Range:</b> a sideways stretch where the price keeps moving between roughly the same high and low.</div>`},
    {k:'Do the maths', t:'Drawing a trendline', b:`
      <p>In that chart, the dips came on day 0 ($40), day 10 ($45) and day 20 ($50). A straight line joins all three.</p>
      <div class="kv kv3"><div><b>$5</b><span>Rise per 10 days</span></div><div><b>$0.50</b><span>Rise per day</span></div><div><b>$53</b><span>Line on day 26</span></div></div>
      <p>If the line carries on, on day 26 it sits at $40 + 26 × $0.50 = $53. A close of $51 that day would be $2 below it. Traders call that breaking the trendline. It isn't yet a lower low, since $51 is still above the last dip of $50. And it tells you what happened, not what happens next.</p>
      <div class="term"><span class="term-k">Key term</span><b>Trendline:</b> a straight line through the dips of an uptrend, or the peaks of a downtrend. Any two points make a line, so many traders want a third touch before taking one seriously.</div>`},
    {k:'The limit', t:'Trends end without warning', b:`
      <p>A trend describes the past. Nothing makes it continue. One earnings report or a surprise rate decision can end it in a day.</p>
      <div class="split">
        <div class="col good"><div class="col-h">A trend tells you</div><b>Which way it has moved</b><p>And how steadily.</p></div>
        <div class="col bad"><div class="col-h">It can't tell you</div><b>When it will end</b><p>Or why it started.</p></div>
      </div>
      <p>Trends also depend on the timeframe. As the Price charts lesson showed, a stock can rise on a weekly chart and fall on an hourly one. And trendlines are a judgement call: two traders can draw different lines on the same chart.</p>
      <p>Does following trends pay? The evidence is mixed. Some long studies find prices have tended to keep drifting the same way for a while. Others find the effect is small, comes with long losing stretches, and shrinks after trading costs.</p>`}
  ],
  qs:[
    {q:"A stock's last three peaks were $30, $34 and $37, and its last three dips were $26, $29 and $33. Which describes it?",
     o:['An uptrend','A downtrend','A sideways range','A false breakout'], a:0,
     e:'Each peak and each dip is higher than the one before: higher highs and higher lows.'},
    {q:'Which pattern defines a downtrend?',
     o:['Higher highs and higher lows','Highs and lows at the same levels','Lower highs and lower lows','Higher highs and lower lows'], a:2,
     e:'A downtrend is the mirror image of an uptrend: each peak and each dip is lower than the last.'},
    {q:'An uptrend line runs through dips of $60 on day 0 and $66 on day 12. If it keeps the same slope, where is the line on day 20?',
     o:['$66','$70','$72','$80'], a:1,
     e:'$6 over 12 days is $0.50 a day. Day 20: $60 + 20 × $0.50 = $70.'},
    {q:'In an uptrend, what does a trendline usually join?',
     o:['The peaks','The opening prices','The days with the most volume','The dips'], a:3,
     e:'In an uptrend the line runs under the price, through the dips. In a downtrend it runs over the price, through the peaks.'},
    {q:'A stock has made higher highs and higher lows for six months. What does that tell you?',
     o:['It will keep rising for at least another month','How it has moved, not how it will move next','It must fall soon, because trends always reverse','It is cheap compared with its profits'], a:1,
     e:'A trend describes past prices. It can carry on or end at any time, often on news nobody saw coming.'}
  ]
};

const TRENDS_LEVELS = {
  title:'Support and resistance', min:4,
  cards:[
    {k:'The idea', t:'Floors and ceilings', b:`
      <p class="lead">Some prices keep coming back. A stock falls to about $20 three times and bounces each time. Traders call that level support. A level where rises keep stalling is called resistance.</p>
      <div class="term"><span class="term-k">Key term</span><b>Support and resistance:</b> price levels where falls (support) or rises (resistance) have tended to stop before, because buyers or sellers showed up there.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Read the chart', t:'A range, then a breakout', b:`
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="A stock bounces between support at $20 and resistance at $25, touching each level twice. Then it climbs through $25 to $28.">
        <line x1="10" y1="60" x2="290" y2="60" stroke="var(--bear-deep)" stroke-width="2" stroke-dasharray="4 4"/>
        <line x1="10" y1="120" x2="290" y2="120" stroke="var(--bull-deep)" stroke-width="2" stroke-dasharray="4 4"/>
        <polyline points="20,96 55,60 95,120 135,60 175,120 215,84 270,24" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="55" cy="60" r="4" fill="var(--bear)"/><circle cx="135" cy="60" r="4" fill="var(--bear)"/>
        <circle cx="95" cy="120" r="4" fill="var(--bull)"/><circle cx="175" cy="120" r="4" fill="var(--bull)"/>
        <circle cx="270" cy="24" r="4" fill="var(--ink)"/>
        <g font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)">
          <text x="10" y="48" fill="var(--bear-ink)">Resistance $25</text>
          <text x="10" y="138" fill="var(--bull-ink)">Support $20</text>
          <text x="262" y="16" text-anchor="end" fill="var(--ink)">Breakout to $28</text>
        </g>
      </svg>
      <p>For weeks this stock bounced between $20 and $25. Then it pushed through $25 and kept going. Traders call that a breakout.</p>
      <p>Once a level breaks, traders often flip its role. Old resistance at $25 becomes a level they watch as possible support. If support breaks instead, the old floor becomes a possible ceiling.</p>
      <div class="term"><span class="term-k">Key term</span><b>Breakout:</b> a move through support or resistance. If it soon slips back into the old range, traders call it a false breakout.</div>`},
    {k:'Why there', t:'Round numbers and old highs', b:`
      <p>Support and resistance come from people's habits, not from any rule of the market. Two common explanations:</p>
      <div class="split">
        <div class="col good"><div class="col-h">Round numbers</div><b>$50, $100, $1,000</b><p>Many buyers and sellers place orders at round prices, so orders bunch up there.</p></div>
        <div class="col good"><div class="col-h">Old highs</div><b>Waiting to break even</b><p>People who bought at an old peak and watched it fall may sell when the price gets back there.</p></div>
      </div>
      <p>A level is a zone, not an exact price. "Support at $20" might mean dips stop anywhere from $19.60 to $20.40. And the more traders watch a level, the more orders gather there. That is part of why levels can matter at all.</p>`},
    {k:'The catch', t:'False breakouts', b:`
      <p>Breakouts often fail. The price pokes through a level, then falls back into the old range. Traders call that a false breakout. Suppose the stock in the chart had done this instead:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">The breakout</div>
          <p>Closes at $25.40, above $25 resistance. A trader buys 100 shares.</p>
          <div class="pf-r">Cost<b class="mono">$2,540</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Two days later</div>
          <p>Back at $24.20, inside the range.</p>
          <div class="pf-r">Loss, ignoring fees<b class="mono bad-t">−$120</b></div>
        </div>
      </div>
      <p>($25.40 − $24.20) × 100 = $120, about 4.7%. Nobody can tell in advance which breakouts will hold. Some traders wait for a second close above the level, or for heavy volume. Those filters fail too, and waiting often means buying higher.</p>
      <div class="term"><span class="term-k">Key term</span><b>False breakout:</b> a move through support or resistance that quickly reverses back into the old range.</div>`}
  ],
  qs:[
    {q:'A stock has dropped to about $40 three times this year and bounced each time. What do traders call $40?',
     o:['Resistance','Support','A trendline','A breakout'], a:1,
     e:'A level where falls have tended to stop is called support.'},
    {q:'Why do round numbers like $100 often act as support or resistance?',
     o:['Many traders place orders at round prices, so orders bunch up there','Exchanges pause trading at round numbers',"A company's value is always a round number",'Moving averages always sit on round numbers'], a:0,
     e:'It comes from people\'s habits: more orders sit at $100 than at $99.37, and that cluster can slow a move.'},
    {q:'A stock breaks above resistance at $50. A trader buys 200 shares at $51, and the price slips back to $48.50. What is the loss, ignoring fees?',
     o:['$2.50','$300','$500','$600'], a:2,
     e:'$51 − $48.50 = $2.50 a share. $2.50 × 200 = $500.'},
    {q:'A stock breaks above resistance at $30, climbs to $34, then drifts back towards $30. How do many traders now see $30?',
     o:['As a level that must now hold','As resistance, exactly as before','As meaningless now','As possible support'], a:3,
     e:'Broken resistance is often watched as possible support. It is a habit of traders, not a rule the price must follow.'},
    {q:'True or false: a breakout above resistance means the price will keep rising.',
     o:['True','False'], a:1,
     e:'Breakouts often fail and fall back into the range. Nobody can tell in advance which ones will hold.'}
  ]
};

const TRENDS_AVERAGES = {
  title:'Moving averages', min:5,
  cards:[
    {k:'The idea', t:'Smoothing out the noise', b:`
      <p class="lead">Daily prices jump around. A moving average smooths out the jumps by averaging the last few closing prices. Each day it moves forward: the newest close comes in and the oldest drops out.</p>
      <div class="term"><span class="term-k">Key term</span><b>Simple moving average (SMA):</b> the plain average of the last N closing prices. A 5-day SMA averages the last five closes.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'A 5-day average, step by step', b:`
      <p>Seven daily closes for Sannine Foods:</p>
      <p class="mono">$20 · $21 · $23 · $22 · $24 · $26 · $25</p>
      <div class="kv kv3"><div><b>$22.00</b><span>Day 5</span></div><div><b>$23.20</b><span>Day 6</span></div><div><b>$24.00</b><span>Day 7</span></div></div>
      <p>Day 5: ($20 + $21 + $23 + $22 + $24) ÷ 5 = $110 ÷ 5 = $22. On day 6 the $20 from day 1 drops out and the $26 comes in: $116 ÷ 5 = $23.20. Day 7: $120 ÷ 5 = $24.</p>
      <p>The average is smoother than the price. On day 7 the stock slipped from $26 to $25, yet the average still rose, because the $21 that dropped out was lower than the new $25. The close of $25 sat above the 5-day average of $24.</p>`},
    {k:'In practice', t:'50 days and 200 days', b:`
      <p>Charts often show much longer averages. Two common choices:</p>
      <div class="split">
        <div class="col good"><div class="col-h">50-day</div><b>About 10 weeks</b><p>Follows the price more closely, so it turns sooner.</p></div>
        <div class="col good"><div class="col-h">200-day</div><b>About 40 weeks</b><p>Smoother and slower. Used to describe the longer trend.</p></div>
      </div>
      <p>A trading week has five days, so 50 trading days is about 10 weeks and 200 is about 40. Many traders describe a price above its 200-day average as being in a longer uptrend, and below it as being in a downtrend. That describes the past. It isn't a forecast.</p>
      <div class="term"><span class="term-k">Key term</span><b>Lag:</b> the delay before an indicator reacts. An average is built from past prices, so it usually turns after the price does.</div>`},
    {k:'The catch', t:'Crossovers lag, and often mislead', b:`
      <p>A stock sits at $20 for weeks, then jumps to $30 and stays there. Its 5-day average over the next five days:</p>
      <p class="mono">$22 → $24 → $26 → $28 → $30</p>
      <p>It takes five days to catch up. A 200-day average would take 200.</p>
      <p>When the 50-day average crosses above the 200-day, traders call it a golden cross. Crossing below is a death cross. Because both averages lag, much of the move has often happened by the time they cross. In sideways markets they can cross back and forth, giving signals that go nowhere. Traders call that a whipsaw.</p>
      <p>Early studies of old US stock prices found some average rules seemed to work. Later studies that counted trading costs, or tested newer years, often found the edge had faded or gone.</p>`}
  ],
  qs:[
    {q:'Five daily closes are $10, $12, $11, $13 and $14. What is the 5-day simple moving average?',
     o:['$12.50','$12','$14','$60'], a:1,
     e:'($10 + $12 + $11 + $13 + $14) ÷ 5 = $60 ÷ 5 = $12.'},
    {q:'A 5-day average uses closes of $30, $32, $31, $33 and $34. The next day closes at $36. What is the new 5-day average?',
     o:['$32.00','$32.67','$34.00','$33.20'], a:3,
     e:'The oldest close, $30, drops out and $36 comes in: ($32 + $31 + $33 + $34 + $36) ÷ 5 = $166 ÷ 5 = $33.20.'},
    {q:'What is a "golden cross"?',
     o:['The 50-day average crossing above the 200-day average','The 50-day average crossing below the 200-day average','The price hitting a new all-time high','The price crossing above a trendline'], a:0,
     e:'Crossing below is called a death cross. Both are built from past prices, so they come late and are often wrong.'},
    {q:'Why does a 200-day average react more slowly than a 50-day one?',
     o:['It is only updated once a month','It leaves out the days the price fell','Each new close is only 1 of 200 prices, so it moves the average less','It uses weekly prices instead of daily ones'], a:2,
     e:'A new close is 1/200 of a 200-day average but 1/50 of a 50-day one, so it shifts the longer average far less.'},
    {q:'A stock closes above its 200-day average. What does that tell you?',
     o:['Its profits are growing','It will keep rising for months','It closed above its average close of the last 200 trading days','A golden cross has just happened'], a:2,
     e:'That is all it says. Traders read it as a sign the longer trend has been up, but it says nothing certain about what comes next.'}
  ]
};

const TRENDS_MOMENTUM = {
  title:'Momentum: RSI and MACD', min:5,
  cards:[
    {k:'The idea', t:'How strong, not just which way', b:`
      <p class="lead">A trend tells you the direction. Momentum indicators try to measure how strong the recent move has been. Two of the most common, RSI and MACD, appear on most trading apps.</p>
      <div class="term"><span class="term-k">Key term</span><b>Momentum:</b> the strength of a recent price move: how far and how steadily the price has gone one way.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'RSI, simplified', b:`
      <p>RSI (relative strength index) compares recent gains with recent losses, on a scale from 0 to 100. A simplified version over six daily moves:</p>
      <p class="mono">$50 → $52 → $51 → $54 → $52 → $53 → $56</p>
      <div class="kv"><div><b class="good-t">$9</b><span>Total gains</span></div><div><b class="bad-t">$3</b><span>Total losses</span></div><div><b>3</b><span>RS</span></div><div><b>75</b><span>RSI</span></div></div>
      <p>Gains: $2 + $3 + $1 + $3 = $9, an average of $9 ÷ 6 = $1.50 a day. Losses: $1 + $2 = $3, an average of $0.50. RS = $1.50 ÷ $0.50 = 3. RSI = 100 − 100 ÷ (1 + 3) = 100 − 25 = 75.</p>
      <p>This is a simplified version. The usual RSI looks back 14 periods and smooths its averages in a special way. The idea is the same: the bigger the gains compared with the losses, the closer to 100.</p>`},
    {k:'MACD', t:'The gap between two averages', b:`
      <p>MACD (moving average convergence divergence) sounds harder than it is. It takes a fast average of the price and subtracts a slow one. The standard settings use 12 days and 26 days.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">This week</div>
          <p>12-day $52.40 − 26-day $50.10</p>
          <div class="pf-r">MACD<b class="mono good-t">+2.30</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Two weeks later</div>
          <p>12-day $51.60 − 26-day $50.80</p>
          <div class="pf-r">MACD<b class="mono">+0.80</b></div>
        </div>
      </div>
      <p>Above zero, recent prices are running above the longer average. A shrinking gap means the rise is losing speed, even though MACD is still positive. Many charts add a signal line, a 9-day average of MACD itself, and traders watch where the two cross.</p>
      <div class="term"><span class="term-k">Key term</span><b>Exponential moving average (EMA):</b> an average that gives more weight to recent days. MACD uses EMAs, so it reacts a little faster than simple averages of the same length.</div>`},
    {k:'The catch', t:'Rules of thumb, not rules', b:`
      <p>An RSI above 70 is often called overbought, and one below 30 oversold. Some traders use 80 and 20 instead. These are habits, not laws.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">RSI above 70</div><b>It rose a lot lately</b><p>In a strong rise, RSI can stay above 70 for weeks while the price keeps climbing.</p></div>
        <div class="col bad"><div class="col-h">RSI below 30</div><b>It fell a lot lately</b><p>A falling stock can stay "oversold" while it keeps falling.</p></div>
      </div>
      <p>Both indicators are built from past prices, so they lag, and in choppy markets they flip back and forth. When they are tested as stand-alone buy and sell rules, the evidence is mixed at best.</p>
      <div class="term"><span class="term-k">Key term</span><b>Overbought and oversold:</b> labels for an RSI above 70 or below 30. They describe how far the price has already moved, not what it will do next.</div>`}
  ],
  qs:[
    {q:'In a simplified RSI, the gains over the period add up to $8 and the losses to $2. What is the RSI?',
     o:['20','75','80','4'], a:2,
     e:'Both averages divide by the same number of days, so RS = $8 ÷ $2 = 4. RSI = 100 − 100 ÷ (1 + 4) = 100 − 20 = 80.'},
    {q:'By the usual convention, what is an RSI of 25 called?',
     o:['Overbought','Oversold','Neutral','A death cross'], a:1,
     e:'Below 30 is usually called oversold. It describes a big recent fall, not a promise of a bounce.'},
    {q:"A stock's RSI has been above 70 for three weeks, and its price has kept climbing. What does this show?",
     o:['The price must fall tomorrow','The RSI has been worked out wrongly','RSI only works on falling stocks','An "overbought" reading can last a long time in a strong rise'], a:3,
     e:'Above 70 only means the price has risen a lot lately. In a strong rise it can stay there for weeks.'},
    {q:"A stock's 12-day EMA is $41.50 and its 26-day EMA is $43.00. What is its MACD?",
     o:['+1.50','−1.50','+84.50','+0.97'], a:1,
     e:'MACD = fast average − slow average = $41.50 − $43.00 = −1.50. Below zero means recent prices are running below the longer average.'},
    {q:'Why do RSI and MACD often give signals late?',
     o:['They are worked out from past prices','Exchanges delay the data on purpose','They only update once a week',"They are based on a company's earnings"], a:0,
     e:'Both are built from prices that have already happened, so they can only react after a move has started.'}
  ]
};

const TRENDS_VOLUME = {
  title:'Volume and chart limits', min:5,
  cards:[
    {k:'The idea', t:'How many took part', b:`
      <p class="lead">Volume, from the Price charts lesson in the Reading the market unit, is how many shares changed hands. Traders use it to judge how much buying or selling stood behind a move.</p>
      <div class="term"><span class="term-k">Key term</span><b>Confirmation:</b> when a second clue, such as heavy volume, points the same way as a price move. It makes a move look more convincing. It doesn't make it certain.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Heavy or light?', b:`
      <p>Byblos Foods usually trades about 2 million shares a day. On two different days it rose 5%:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Day A</div>
          <p>Up 5% on 6 million shares</p>
          <div class="pf-r">Versus normal<b class="mono">3×</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Day B</div>
          <p>Up 5% on 1.2 million shares</p>
          <div class="pf-r">Versus normal<b class="mono">0.6×</b></div>
        </div>
      </div>
      <p>6 million ÷ 2 million = 3 times the usual volume. 1.2 million ÷ 2 million = 0.6, a bit over half. Many traders see Day A as a move with real weight behind it. They treat Day B with more caution, because a few orders can push a price further when trading is thin.</p>
      <p>The same goes for breakouts from the Support and resistance lesson: one on heavy volume is usually taken more seriously. Either way, volume describes what happened, not what comes next.</p>`},
    {k:'The trap', t:'Hindsight and overfitting', b:`
      <p>Patterns look obvious after the fact. On an old chart you can see exactly where a trend began and ended. At the time, nobody could.</p>
      <p>Testing rules on old prices has a similar trap. Imagine 200 trading rules that are really just random. If each has a 1-in-20 chance of looking good on past data by luck, about 10 of them will look like winners.</p>
      <div class="kv kv3"><div><b>200</b><span>Random rules</span></div><div><b>1 in 20</b><span>Look good by luck</span></div><div><b class="bad-t">~10</b><span>False winners</span></div></div>
      <p>Their past records look real, but there was nothing behind them to repeat.</p>
      <div class="term"><span class="term-k">Key term</span><b>Overfitting:</b> tuning a rule so closely to past prices that it captures luck instead of something that will happen again.</div>`},
    {k:'The limit', t:'Costs and the news', b:`
      <p>Costs eat small edges. Say a rule makes 0.3% per trade on average, before costs, and each trade costs 0.2% in spread and fees.</p>
      <div class="kv kv3"><div><b>0.3%</b><span>Edge before costs</span></div><div><b class="bad-t">−0.2%</b><span>Costs per trade</span></div><div><b>0.1%</b><span>What's left</span></div></div>
      <p>Two-thirds of the edge is gone. If costs were 0.4%, the same rule would lose 0.1% a trade.</p>
      <p>And charts don't know the news. An earnings surprise or a rate decision can move a price in minutes, whatever the lines said. The tools in this unit describe what prices have done, and they help you read a chart and follow traders' language. They are not a reliable way to predict prices.</p>
      <div class="term"><span class="term-k">Key term</span><b>Edge:</b> the average gain a trading rule makes per trade. To be worth anything, it has to be bigger than the costs of trading.</div>`}
  ],
  qs:[
    {q:"A stock normally trades 500,000 shares a day. Today it rises 4% on 2 million shares. How does today's volume compare with normal?",
     o:['Half of normal','Twice normal','4 times normal','40 times normal'], a:2,
     e:'2,000,000 ÷ 500,000 = 4, so four times the usual volume.'},
    {q:'A small stock jumps 6% on a day when very few shares trade. How do many traders read that?',
     o:['As a strong, confirmed move','With caution, since a few orders can push a thinly traded price','As proof the rise will continue',"As a sign the company's profits rose"], a:1,
     e:'Light volume means few people took part, so the move has little confirmation behind it.'},
    {q:'What is overfitting?',
     o:['Holding too many stocks at once','Using a 200-day average instead of a 50-day one','Tuning a rule so closely to past prices that it mostly captures luck','Trading a stock with unusually high volume'], a:2,
     e:'An overfitted rule looks brilliant on old data because it has learned that data\'s luck, which won\'t repeat.'},
    {q:'A rule makes 0.25% per trade on average before costs. Each trade costs 0.15% in spread and fees. What is left per trade?',
     o:['0.40%','0.10%','0.25%','−0.10%'], a:1,
     e:'0.25% − 0.15% = 0.10%. Costs have taken 60% of the edge.'},
    {q:'A stock has a clean uptrend on rising volume. Then it falls 15% in one day. What is the most likely kind of cause?',
     o:['News the chart could not show, such as weak earnings','The trendline was drawn wrongly','Volume was too high','The 200-day average pulled it down'], a:0,
     e:'Charts only record past trading. Surprise news can move a price at once, whatever the chart looked like.'}
  ]
};

const TRENDS_CHECK = {
  title:'Unit check', min:4, badge:{name:'Trend Reader', icon:'candles'}, cards:[],
  qs:[
    {q:"A stock's last three peaks were $80, $76 and $71, and its last three dips $70, $66 and $63. What is the trend, and where would a trendline go?",
     o:['Uptrend, through the dips','Downtrend, through the peaks','Downtrend, through the dips','Sideways, along the middle'], a:1,
     e:'Lower highs and lower lows make a downtrend. Its trendline runs above the price, through the peaks.'},
    {q:'An uptrend line runs through dips of $24 on day 0 and $27 on day 15. On day 25 the stock closes at $28. Where is that close compared with the line?',
     o:['$1 above the line','Exactly on the line','$1 below the line','$4 below the line'], a:2,
     e:'The line rises $3 in 15 days, $0.20 a day. Day 25: $24 + 25 × $0.20 = $29. The close of $28 is $1 below it.'},
    {q:'A stock has bounced between $40 and $46 for months. It closes at $46.80, and a trader buys 150 shares. A week later it closes at $44.10. What happened, and what is the loss, ignoring fees?',
     o:['A false breakout; $120 loss','A false breakout; $270 loss','A confirmed breakout; no loss','A false breakout; $405 loss'], a:3,
     e:'It broke above $46, then fell back into the range. ($46.80 − $44.10) × 150 = $2.70 × 150 = $405.'},
    {q:'Cedar Tech breaks above resistance on twice its usual volume. Which statement is most accurate?',
     o:['The breakout is now certain to hold','Many traders see the volume as confirmation, but the breakout can still fail','Heavy volume means the move will reverse','Volume only matters when prices fall'], a:1,
     e:'Heavy volume makes a breakout look more convincing. It is not a guarantee: breakouts on heavy volume can fail too.'},
    {q:'A stock sits at $50 for months, then jumps to $60 and stays there. What is its 5-day simple moving average on the third day at $60?',
     o:['$55','$56','$58','$60'], a:1,
     e:'The last five closes are $50, $50, $60, $60, $60. $280 ÷ 5 = $56. The average needs five days at $60 to reach $60.'},
    {q:'In a simplified RSI, gains add up to $3 and losses to $9. What is the RSI, and what label do traders use?',
     o:['75, overbought','33, oversold','25, oversold','25, overbought'], a:2,
     e:'RS = $3 ÷ $9 = 1/3. RSI = 100 − 100 ÷ (1 + 1/3) = 100 − 75 = 25. Below 30 is called oversold, which describes a big recent fall, not a coming bounce.'},
    {q:"A stock's MACD shrinks from +3.0 to +0.5 over two weeks. What does that describe?",
     o:['The fast average is closing in on the slow one, so the rise has lost speed','The stock has entered a downtrend','A golden cross','A reliable signal to sell'], a:0,
     e:'MACD is still positive, so the fast average is still above the slow one, but the gap has shrunk. It describes fading momentum, not a forecast.'},
    {q:'Someone tests 400 random trading rules on ten years of old prices. If each has a 1-in-20 chance of looking good by luck, about how many will look like winners?',
     o:['None','2','20','200'], a:2,
     e:'400 × 1/20 = 20. Their records look real but come from luck. That is overfitting.'}
  ]
};

const UNIT_TRENDS = {id:'trends', title:'Reading price trends', level:'Intermediate', lessons:[TRENDS_LINES, TRENDS_LEVELS, TRENDS_AVERAGES, TRENDS_MOMENTUM, TRENDS_VOLUME, TRENDS_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_TRENDS = [
  {n:1, q:"A stock's recent peaks were $12.00, $12.10 and $11.90, and its dips $10.00, $10.10 and $9.95. What is it doing?",
   o:['Rising in an uptrend','Falling in a downtrend','Moving sideways in a range','Breaking out'], a:2,
   e:'The peaks and dips stay at about the same levels, with no steady run of higher or lower ones. That is a sideways range.'},
  {n:2, q:'A stock has stalled near $75 four times this year, falling back each time. What do traders call $75?',
   o:['Support','Resistance','A moving average','An oversold level'], a:1,
   e:'A level where rises have tended to stall is called resistance.'},
  {n:3, q:'Five daily closes are $8, $9, $9, $10 and $14. What is the 5-day simple moving average, and where is the last close?',
   o:['$10, with the last close above it','$10, with the last close below it','$12.50, with the last close above it','$9, with the last close above it'], a:0,
   e:'$8 + $9 + $9 + $10 + $14 = $50, and $50 ÷ 5 = $10. The last close, $14, is above it.'},
  {n:4, q:'In a simplified RSI, the average daily gain is $0.90 and the average daily loss is $0.60. What is the RSI?',
   o:['40','50','60','150'], a:2,
   e:'RS = $0.90 ÷ $0.60 = 1.5. RSI = 100 − 100 ÷ (1 + 1.5) = 100 − 40 = 60.'},
  {n:5, q:'A stock rises 3% on a day when only a third of its usual volume trades. What is the most reasonable reading?',
   o:['Few shares changed hands, so many traders would treat the move with caution','The rise is confirmed by heavy trading','Low volume means it will fall tomorrow',"The company's profits must have fallen"], a:0,
   e:'Light volume means the move has little confirmation. It does not say which way the price goes next.'}
];

/* MATHS CHECK: every calculation and its result, for the reviewer (verified in Python).
   Simplified RSI: RS = total gains ÷ total losses (the averages share the same divisor, so it cancels); RSI = 100 − 100 ÷ (1 + RS).
   Lesson 1, Trends and trendlines
   - Diagram: price → y = 130 − 4 × (price − 40); day → x = 30 + 9 × day.
     Day 0 $40 (30,130); day 5 $50 (75,90); day 10 $45 (120,110); day 15 $55 (165,70); day 20 $50 (210,90); day 25 $60 (255,50).
     Trendline price = $40 + $0.50 × day: day 0 (30,130), day 10 (120,110), day 20 (210,90), day 26 $53 → (264,78). Slope −52/234 = −2/9 per px.
     Labels clear of the line: line y at x 110/130 = 112.2/107.8 (label "$45" spans y 120-128); at x 200/220 = 92.2/87.8 ("$50" spans y 100-108); at x 231 = 85.3 ("Trendline" spans y 96-104).
   - Card 3: ($45 − $40) ÷ 10 = ($50 − $45) ÷ 10 = $0.50 a day; $5 per 10 days. Day 26: $40 + 26 × $0.50 = $53. Close $51 → $53 − $51 = $2 below; $51 > last dip $50, so not a lower low.
   - Q1: peaks 30 < 34 < 37, dips 26 < 29 < 33 → uptrend.
   - Q3: ($66 − $60) ÷ 12 = $0.50 a day; day 20: $60 + 20 × $0.50 = $70. Slips: $66 + $6 = $72; $60 + 20 × $1 = $80.
   Lesson 2, Support and resistance
   - Diagram: price → y = 120 − 12 × (price − 20): $20 → 120, $22 → 96, $23 → 84, $25 → 60, $28 → 24.
     Path (20,96) $22, (55,60) $25, (95,120) $20, (135,60) $25, (175,120) $20, (215,84) $23, (270,24) $28.
     Last leg crosses $25 (y=60) at x = 215 + 55 × 24/60 = 237. At x=262 it is at y = 32.7 (label "Breakout to $28" spans y 8-16).
   - Card 4: $25.40 × 100 = $2,540; ($25.40 − $24.20) × 100 = $120; $1.20 ÷ $25.40 = 4.72% ≈ 4.7%.
   - Q3: ($51 − $48.50) × 200 = $500. Slips: ($50 − $48.50) × 200 = $300; ($51 − $48) × 200 = $600; $2.50 per share only.
   Lesson 3, Moving averages
   - Card 2 closes 20, 21, 23, 22, 24, 26, 25: day 5 sum 110 ÷ 5 = $22.00; day 6 sum 116 ÷ 5 = $23.20; day 7 sum 120 ÷ 5 = $24.00. Day 7 close $25 > $24. Day 6 → 7: close 26 → 25 (down) while SMA 23.20 → 24.00 (up), since (25 − 21) ÷ 5 = +0.80.
   - Card 3: 50 ÷ 5 = 10 weeks; 200 ÷ 5 = 40 weeks (5 trading days a week, ignoring holidays).
   - Card 4: closes 20, 20, 20, 20 then 30 every day: 5-day SMAs (80+30)/5 = 22, (60+60)/5 = 24, 26, 28, 30. An N-day SMA reaches a new flat level after N days, so a 200-day takes 200.
   - Q1: (10 + 12 + 11 + 13 + 14) ÷ 5 = 60 ÷ 5 = $12. Slip: last four ÷ 4 = 50 ÷ 4 = $12.50.
   - Q2: old (30+32+31+33+34) ÷ 5 = $32.00; new (32+31+33+34+36) ÷ 5 = 166 ÷ 5 = $33.20. Slips: all six ÷ 6 = 196 ÷ 6 = $32.67; (32 + 36) ÷ 2 = $34.00.
   - Q4: 1/200 = 0.005 vs 1/50 = 0.02 of the average per close.
   Lesson 4, Momentum: RSI and MACD
   - Card 2 closes 50, 52, 51, 54, 52, 53, 56 → moves +2, −1, +3, −2, +1, +3. Gains 2+3+1+3 = 9; losses 1+2 = 3.
     Average gain 9 ÷ 6 = 1.50; average loss 3 ÷ 6 = 0.50; RS = 3; RSI = 100 − 100 ÷ 4 = 75.
   - Card 3: $52.40 − $50.10 = +2.30; $51.60 − $50.80 = +0.80.
   - Q1: RS = 8 ÷ 2 = 4; RSI = 100 − 100 ÷ 5 = 80. Slips: 100 ÷ 5 = 20; 100 − 100 ÷ 4 = 75; RS alone = 4.
   - Q4: $41.50 − $43.00 = −1.50. Slips: +1.50 (reversed); 41.50 + 43.00 = 84.50; 41.50 ÷ 43.00 = 0.965 ≈ 0.97.
   Lesson 5, Volume and chart limits
   - Card 2: 6M ÷ 2M = 3×; 1.2M ÷ 2M = 0.6×.
   - Card 3: 200 × 1/20 = 10.
   - Card 4: 0.3% − 0.2% = 0.1% left; 0.2 ÷ 0.3 = 2/3 of the edge gone; 0.3% − 0.4% = −0.1%.
   - Q1: 2,000,000 ÷ 500,000 = 4.
   - Q4: 0.25% − 0.15% = 0.10%; 0.15 ÷ 0.25 = 60% of the edge.
   Unit check
   - Q1: peaks 80 > 76 > 71, dips 70 > 66 > 63 → downtrend, line through the peaks.
   - Q2: ($27 − $24) ÷ 15 = $0.20 a day; day 25: $24 + 25 × $0.20 = $29; $28 − $29 = −$1. Slip: $27 + 25 × $0.20 = $32 → $4 below.
   - Q3: ($46.80 − $44.10) × 150 = $2.70 × 150 = $405. Slips: ($46.80 − $46) × 150 = $120; $2.70 × 100 = $270.
   - Q5: (50 + 50 + 60 + 60 + 60) ÷ 5 = 280 ÷ 5 = $56. Slips: (50 + 4 × 60) ÷ 5 = $58; midpoint $55.
   - Q6: RS = 3 ÷ 9 = 1/3; RSI = 100 − 100 ÷ (4/3) = 100 − 75 = 25. Slip: RS × 100 = 33.
   - Q8: 400 × 1/20 = 20.
   Placement
   - n3: (8 + 9 + 9 + 10 + 14) ÷ 5 = 50 ÷ 5 = $10; last close $14 > $10. Slip: 50 ÷ 4 = $12.50.
   - n4: RS = 0.90 ÷ 0.60 = 1.5; RSI = 100 − 100 ÷ 2.5 = 60. Slips: 100 ÷ 2.5 = 40; RS × 100 = 150.
*/
