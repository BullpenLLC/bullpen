/* ---------- Market psychology ---------- */
const PSY_LOSS = {
  title:'Loss aversion', min:4,
  cards:[
    {k:'The idea', t:'Losses sting more than gains please', b:`
      <p class="lead">Finding $100 feels good. Losing $100 feels worse. For most people the pain of a loss is bigger than the pleasure of an equal gain, and that lopsidedness quietly shapes how they invest.</p>
      <div class="term"><span class="term-k">Key term</span><b>Loss aversion:</b> the tendency to feel a loss more strongly than a gain of the same size, so people go out of their way to avoid losses.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'Do the maths', t:'A good bet that feels bad', b:`
      <p>A fair coin is flipped. Heads you win $120. Tails you lose $100. Would you play?</p>
      <p>On paper it is a good deal. Half the time you gain $120 and half the time you lose $100, so the average result per play is 0.5 × $120 − 0.5 × $100 = <b class="good-t">+$10</b>.</p>
      <p>Now say a loss feels twice as heavy as a gain. The bet then feels like this:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">On paper</div>
          <p>Gains and losses count equally</p>
          <div class="pf-r">0.5 × 120 − 0.5 × 100<b class="mono good-t">+$10</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">As it feels</div>
          <p>Each lost dollar counts double</p>
          <div class="pf-r">0.5 × 120 − 0.5 × 200<b class="mono bad-t">−$40</b></div>
        </div>
      </div>
      <p>Someone who weighs losses double would only find a 50/50 bet risking $100 fair if the prize were $200. Many people turn down bets that would pay off on average, and the gap is loss aversion at work.</p>`},
    {k:'The catch', t:'Selling winners, holding losers', b:`
      <p>Loss aversion changes what people do with shares they already own. Say an investor holds two $1,000 positions.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Byblos Foods</div>
          <p>Up 30%</p>
          <div class="pf-r">Now worth<b class="mono good-t">$1,300</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Cedar Tech</div>
          <p>Down 20%</p>
          <div class="pf-r">Now worth<b class="mono bad-t">$800</b></div>
        </div>
      </div>
      <p>Selling the winner locks in a gain, which feels good. Selling the loser turns a paper loss into a real one, which hurts, so it tends to stay in the portfolio "until it comes back".</p>
      <div class="term"><span class="term-k">Key term</span><b>Disposition effect:</b> the habit of selling winners too early and holding losers too long.</div>
      <p>Waiting has a price. From $800, Cedar Tech needs a rise of $200 ÷ $800 = <b>25%</b> just to get back to $1,000.</p>`},
    {k:'In practice', t:'The market does not know your price', b:`
      <p>The price a stock was bought at matters to its owner and to nobody else. The market prices Cedar Tech from its prospects, not from what any holder paid.</p>
      <p>A useful test is to ask: "If I held cash today instead of this stock, would I buy it at this price?" If the honest answer is no, the reason for holding is the loss itself, not the company.</p>
      <p>Some investors write down their exit point before they buy, while they feel calm. That makes the later decision less about pain. A plan is not a guarantee, and it can be wrong, but it stops the loss alone from running the show.</p>
      <p>In Bullpen, a miss costs practice capital and an empty balance means a margin call. It is a safe place to notice how losing feels, with no real money at stake.</p>`}
  ],
  qs:[
    {q:'A fair coin is flipped. Heads wins $150, tails loses $100. What is the average result per play?',
     o:['$50','$125','+$25','−$25'], a:2,
     e:'0.5 × $150 − 0.5 × $100 = $75 − $50 = +$25. Adding the amounts ($150 − $100 = $50) forgets that each outcome happens only half the time.'},
    {q:'A person feels every lost dollar twice as strongly as a gained dollar. In a 50/50 bet risking $100, what is the smallest win that feels fair to them?',
     o:['$100','$150','$50','$200'], a:3,
     e:'The loss feels like $200, so they need 0.5 × win = 0.5 × $200. The win has to be $200.'},
    {q:'An investor bought shares at $80, and they are now worth $60. What rise from $60 gets back to $80?',
     o:['20%','25%','About 33%','40%'], a:2,
     e:'The gap is $20, measured against the current $60: $20 ÷ $60 ≈ 33%. Dividing by the old $80 gives 25%, a common slip.'},
    {q:'Which pattern best fits the disposition effect?',
     o:['Selling shares that have risen quickly, while keeping shares that have fallen','Selling shares that have fallen as soon as they dip','Buying only after prices fall','Holding every share for exactly one year'], a:0,
     e:'The disposition effect is selling winners too early and holding losers too long, because realising a loss hurts more than realising a gain pleases.'},
    {q:'A stock falls 20%. Its owner refuses to sell "until it gets back to what I paid". What is wrong with that thinking?',
     o:['Stocks never recover after a fall','Falls of 20% are always temporary','The market does not know or care what the owner paid, so the price owes them nothing','Selling after a fall is always the better choice'], a:2,
     e:'The decision should rest on the stock\'s prospects from today\'s price. The purchase price is history. Neither "always recovers" nor "always sell" is true.'}
  ]
};

const PSY_OVERCONFIDENCE = {
  title:'Overconfidence', min:5,
  cards:[
    {k:'The idea', t:'Knowing less than we think', b:`
      <p class="lead">Most people think they know more than they do, and that their forecasts are sharper than they are. In investing that shows up as trading too much, taking too much risk and giving too little credit to luck.</p>
      <div class="term"><span class="term-k">Key term</span><b>Overconfidence:</b> trusting your own knowledge, judgement or forecasts more than the evidence supports.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Testing your own ranges', b:`
      <p>Here is a simple test. Answer 20 questions, such as "How many people live in Lebanon?". For each, give a range you are 90% sure contains the true answer.</p>
      <p>If your confidence is right, the truth should land inside your range about 9 times out of 10, so about 18 of 20. The rest should miss.</p>
      <div class="kv"><div><b>90%</b><span>Claimed confidence</span></div><div><b>18</b><span>Inside, if calibrated</span></div><div><b class="bad-t">11</b><span>Rania's actual</span></div><div><b class="bad-t">55%</b><span>Her hit rate</span></div></div>
      <p>Rania's hit rate is 11 ÷ 20 = 55%, nowhere near 90%. Her ranges were too narrow. People tend to land well below their claimed confidence on this test, which is why it is used.</p>
      <div class="term"><span class="term-k">Key term</span><b>Calibration:</b> how closely your stated confidence matches how often you are right.</div>`},
    {k:'The catch', t:'Confidence has a price', b:`
      <p>Overconfident investors tend to trade more, believing each switch will pay. But every switch costs money, through fees and the gap between buying and selling prices.</p>
      <p>Two made-up investors each start with $10,000 and pick investments that earn 8% over the year before costs. Every switch costs 1% of the portfolio.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Patient</div>
          <p>2 switches in the year</p>
          <div class="pf-r">$10,000 × 1.08 × 0.99²<b class="mono">$10,585</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Busy</div>
          <p>20 switches in the year</p>
          <div class="pf-r">$10,000 × 1.08 × 0.99²⁰<b class="mono bad-t">$8,833</b></div>
        </div>
      </div>
      <p>Same 8% before costs, and the busy investor ends below where they started. Switching only pays if each switch adds more than it costs. Studies of ordinary investors have found that those who trade the most tend to do worse.</p>`},
    {k:'In practice', t:'Skill or luck?', b:`
      <p>Good results can come from luck. Flip a coin five times, and the chance of five heads is 0.5⁵ = 1 in 32, or about 3.1%.</p>
      <p>Now picture 1,000 people each making five coin-flip "predictions". About 1,000 ÷ 32 ≈ <b>31</b> of them will get all five right by luck alone. Each will feel like a gifted forecaster.</p>
      <p>The same is true of a short run of winning trades. Five wins in a row can be skill, or it can be one of the lucky 31.</p>
      <p>A dull habit helps: keep a written record of predictions and how sure you were, then check it later. A record shows how often you were right, which memory tends to inflate.</p>`}
  ],
  qs:[
    {q:'Ten questions are each answered with a range the answerer is 90% sure contains the truth. If their confidence is well calibrated, how many ranges should contain the true answer?',
     o:['1','5','9','10'], a:2,
     e:'90% of 10 is 9. Results a little above or below 9 can happen by chance, but a score well below 9 over many questions suggests overconfidence.'},
    {q:'Someone gives 20 answers, each with a range they call 90% sure. Only 12 contain the truth. What does that suggest?',
     o:['Their ranges were too wide','Their confidence matches their accuracy','Their ranges were too narrow, a sign of overconfidence','Nothing, since 12 is more than half'], a:2,
     e:'12 ÷ 20 = 60%, far below the 90% they claimed. They were more sure of themselves than their accuracy justified.'},
    {q:'A $20,000 portfolio loses 0.5% of its value on each of 12 switches in a year, and nothing else changes. Roughly what is it worth at the end?',
     o:['$20,000','About $18,830','$19,400','$17,600'], a:1,
     e:'$20,000 × 0.995¹² ≈ $18,832. Small costs repeated many times add up to a drag of about $1,170, even with no market move.'},
    {q:'160 people each flip a fair coin 4 times. About how many will get four heads?',
     o:['4','16','40','10'], a:3,
     e:'Four heads in a row has a chance of 0.5⁴ = 1 in 16. 160 ÷ 16 = 10 people, by luck alone.'},
    {q:'True or false: a trader who makes five winning trades in a row has proved they are skilled.',
     o:['True','False'], a:1,
     e:'Streaks happen by luck. In a large crowd, some people will always have a run of wins, so a short record is weak evidence of skill.'}
  ]
};

const PSY_HERDING = {
  title:'Herding, FOMO and bubbles', min:5,
  cards:[
    {k:'The idea', t:'Following the crowd', b:`
      <p class="lead">When everyone nearby is buying and prices keep climbing, it is hard to stay out. Copying others is often sensible, since they may know something. But crowds can also feed on themselves, with rising prices attracting buyers who push prices higher still.</p>
      <div class="term"><span class="term-k">Key term</span><b>Herding:</b> making an investment choice mainly because many others are making it, rather than from your own analysis.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Early and late in the same rally', b:`
      <p>Litani Energy, a made-up company, goes from $10 to $30 in six months. That is a gain of $20 ÷ $10 = <b class="good-t">+200%</b>, and everyone is talking about it.</p>
      <div class="term"><span class="term-k">Key term</span><b>FOMO:</b> fear of missing out, the pressure to buy something because others seem to be profiting from it.</div>
      <p>A late buyer jumps in at $30. Then the price slips to $15.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Bought at $10</div>
          <p>Early, before the crowd</p>
          <div class="pf-r">$10 → $15<b class="mono good-t">+50%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Bought at $30</div>
          <p>Late, after the rally</p>
          <div class="pf-r">$30 → $15<b class="mono bad-t">−50%</b></div>
        </div>
      </div>
      <p>The same price, with opposite results. The late buyer now needs the price to double (+100%) just to break even.</p>`},
    {k:'The catch', t:'When price runs ahead of value', b:`
      <p>Cedar Tech earns $1.50 a share. Its price goes from $30 to $90, with no change in earnings. In the Valuation ratios unit, price divided by earnings per share was the P/E ratio.</p>
      <div class="score"><div><b>20</b><span>P/E at $30</span></div><div><b class="bad-t">60</b><span>P/E at $90</span></div><div><b>3×</b><span>Price rise</span></div></div>
      <p>Buyers now pay $60 for every $1 of yearly earnings, three times as much as before, for the same business.</p>
      <div class="term"><span class="term-k">Key term</span><b>Bubble:</b> a stretch when prices rise far above what the underlying assets seem to justify, driven mainly by buyers expecting to sell on to even more buyers.</div>
      <p>A high P/E alone does not prove a bubble, because fast-growing companies can justify high prices. And bubbles are easy to name after they burst and hard to spot while they inflate.</p>`},
    {k:'In practice', t:'A real example: the dot-com bubble', b:`
      <p>In the late 1990s, shares in internet companies soared, often on hopes rather than profits. The Nasdaq Composite, an index heavy with technology shares, closed at about 5,049 in March 2000.</p>
      <p>It then fell for more than two years, reaching about 1,114 in October 2002. That is a fall of roughly <b class="bad-t">78%</b>.</p>
      <div class="kv kv3"><div><b>~5,049</b><span>Peak, Mar 2000</span></div><div><b class="bad-t">~1,114</b><span>Low, Oct 2002</span></div><div><b>+353%</b><span>Rise needed to recover</span></div></div>
      <p>From the low, a rise of about 353% was needed to return to the peak, and the index did not do so until 2015. Some of the companies of that period went on to thrive. Many others disappeared. The index fall says nothing certain about any one share, which is the point: the crowd cannot tell you which is which.</p>`}
  ],
  qs:[
    {q:'A stock rises from $25 to $75. What is the percentage gain?',
     o:['50%','75%','300%','200%'], a:3,
     e:'The gain is $50, measured against the starting $25: $50 ÷ $25 = 200%. Tripling a price is a 200% rise, not 300%.'},
    {q:'Cedar Tech trades at $40 with earnings of $2 a share, a P/E of 20. Its price rises to $100 and earnings stay at $2. What is its P/E now?',
     o:['20','50','60','2.5'], a:1,
     e:'$100 ÷ $2 = 50. The price rose 150% while earnings did not move, so the P/E rose from 20 to 50.'},
    {q:'True or false: if a stock has risen sharply and many people are buying it, that proves it is worth the higher price.',
     o:['True','False'], a:1,
     e:'A crowd of buyers shows what people are paying, not what the business is worth. Rising prices can attract more buyers whatever the business is doing.'},
    {q:'Which best describes FOMO in investing?',
     o:['A calm plan to buy only at fixed prices','Buying mainly because others seem to be profiting, for fear of missing out','Fear of owning any shares','Selling because earnings fell'], a:1,
     e:'FOMO is the pull to join a rally because others are profiting. It replaces analysis with fear of being left behind.'},
    {q:'A stock falls 60% from its peak. What rise from the low does it need to return to the peak?',
     o:['60%','100%','200%','150%'], a:3,
     e:'At the low it is worth 40% of the peak. 1 ÷ 0.4 = 2.5, so it must rise 150%. Matching the fall (60%) is a common slip.'}
  ]
};

const PSY_ANCHORING = {
  title:'Anchoring and confirmation', min:5,
  cards:[
    {k:'The idea', t:'The first number sticks', b:`
      <p class="lead">When people judge a price, they tend to cling to a number they saw earlier, even one that has nothing to do with value. Once they hold a view, they also tend to notice facts that fit it and skim past the ones that do not.</p>
      <div class="term"><span class="term-k">Key term</span><b>Anchoring:</b> leaning too heavily on one reference number, usually the first or most recent one you saw, when judging something.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'A discount from the wrong number', b:`
      <p>Investors often judge a stock against its 52-week high. "It's 37.5% off!" sounds like a bargain. Compare two made-up stocks:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Cedar Tech</div>
          <p>High $80, now $50 · earnings $0.50 a share</p>
          <div class="pf-r">Below high · P/E<b class="mono">37.5% · 100</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Byblos Foods</div>
          <p>High $40, now $30 · earnings $3 a share</p>
          <div class="pf-r">Below high · P/E<b class="mono">25% · 10</b></div>
        </div>
      </div>
      <p>Cedar Tech has the bigger "discount": 1 − 50 ÷ 80 = 37.5%, against 1 − 30 ÷ 40 = 25%. Yet it costs $100 for every $1 of earnings, while Byblos Foods costs $10. The past price tells you where the price has been, not what the business is worth.</p>`},
    {k:'The catch', t:'Anchored to your own cost', b:`
      <p>The anchor many investors know best is the price they paid. Say Hadi bought shares at $60 and they are now $45. He decides to wait until they are back at $60.</p>
      <p>The rise needed is $15 ÷ $45 = <b>33.3%</b>. The market has no idea he paid $60, and two people holding the same shares, one who paid $60 and one who paid $40, face the same future price.</p>
      <p>One way to loosen the anchor is the "cash today" question from the Loss aversion lesson: with the money in cash, would I buy this at $45? The $60 does not appear in that question at all.</p>`},
    {k:'In practice', t:'Seeing only what fits', b:`
      <div class="term"><span class="term-k">Key term</span><b>Confirmation bias:</b> the tendency to look for, notice and remember information that supports what you already believe, and to discount what does not.</div>
      <p>Sami owns Litani Energy shares and hunts for news. He finds 12 pieces of research: 9 are positive and 3 are negative. If he keeps only the 9, he sees a unanimous case. The true picture is 9 ÷ 12 = 75% positive, with a quarter against.</p>
      <p>The 3 he skipped may contain the one fact that matters. Two habits pull in opposite directions:</p>
      <div class="split">
        <div class="col good"><div class="col-h">Counters it</div><b>Argue the other side</b><p>Write down the strongest case against your view before acting.</p></div>
        <div class="col bad"><div class="col-h">Feeds it</div><b>An echo chamber</b><p>Following only people who already agree with you.</p></div>
      </div>
      <p>Anchoring and confirmation work together: the first view you form becomes the anchor, and later evidence is read to fit it.</p>`}
  ],
  qs:[
    {q:'A stock\'s 52-week high was $120 and it now trades at $90. How far below its high is it?',
     o:['25%','33%','30%','75%'], a:0,
     e:'The gap is $30, measured against the high: $30 ÷ $120 = 25%. Dividing by the current $90 gives 33%, a common slip.'},
    {q:'An investor bought at $50 and the price is now $30. What rise gets the shares back to $50?',
     o:['40%','60%','20%','About 67%'], a:3,
     e:'The gap is $20, measured against the current $30: $20 ÷ $30 ≈ 67%. The fall was 40% of $50, but the recovery is measured from the lower price.'},
    {q:'A stock traded at $100 last year and is $70 today. A trader calls it a bargain "at 30% off" without looking at earnings. Which bias is at work?',
     o:['Herding','Loss aversion','Anchoring on a past price','Overconfidence'], a:2,
     e:'The old price is an anchor. Whether $70 is cheap depends on the business\'s earnings and prospects, not on what the price used to be.'},
    {q:'Hadi owns shares and wants a fair view of them. Which habit best works against confirmation bias?',
     o:['Reading more articles from the same bullish sources','Asking only friends who already agree with him','Ignoring all news','Looking for the strongest case against his own view'], a:3,
     e:'Confirmation bias comes from seeking what fits. Deliberately looking for the best opposing case brings back the evidence that is usually skipped.'},
    {q:'True or false: a stock that is 50% below its 52-week high must be cheap.',
     o:['True','False'], a:1,
     e:'A past price is only a past price. A stock can fall 50% and still be expensive if its earnings fell too, or were small to begin with.'}
  ]
};

const PSY_RECENCY = {
  title:'Recency and mental accounting', min:5,
  cards:[
    {k:'The idea', t:'The latest news feels loudest', b:`
      <p class="lead">Recent events feel more important than they are, and money feels different depending on where it came from or what it is for. Both are mental shortcuts that can cost real money.</p>
      <div class="term"><span class="term-k">Key term</span><b>Recency bias:</b> giving too much weight to what happened lately and too little to the longer record when judging what comes next.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'The last year is not the average', b:`
      <p>A made-up fund's yearly returns over ten years, in order: <b class="good-t">+9%</b>, <b class="good-t">+14%</b>, <b class="bad-t">−6%</b>, <b class="good-t">+11%</b>, <b class="good-t">+8%</b>, <b class="good-t">+16%</b>, <b class="bad-t">−12%</b>, <b class="good-t">+13%</b>, <b class="good-t">+3%</b>, <b class="good-t">+24%</b>.</p>
      <p>Add them up: 9 + 14 − 6 + 11 + 8 + 16 − 12 + 13 + 3 + 24 = 80. Divide by 10 and the average year is <b>8%</b>.</p>
      <div class="kv kv3"><div><b>8%</b><span>Average year</span></div><div><b class="good-t">+24%</b><span>Last year</span></div><div><b class="bad-t">−12%</b><span>Worst year</span></div></div>
      <p>An investor who just saw +24% may expect more of the same, three times the long-run average. The pull works in reverse too: after a bad year, people can expect more of it and stay away at the wrong time. The full record, with its good and bad years, is a calmer guide than the latest one.</p>`},
    {k:'The catch', t:'Money in separate pockets', b:`
      <div class="term"><span class="term-k">Key term</span><b>Mental accounting:</b> sorting money into separate "pots" in your head by source or purpose, and treating each pot by its own rules, even though a dollar is a dollar.</div>
      <p>Pots can be useful for budgeting. They also lead to odd choices. Say Rana keeps $2,000 in a savings pot earning 3%, and owes $2,000 on a loan at 12%.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Savings pot</div>
          <p>$2,000 at 3%</p>
          <div class="pf-r">Earns per year<b class="mono good-t">+$60</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Loan pot</div>
          <p>$2,000 at 12%</p>
          <div class="pf-r">Costs per year<b class="mono bad-t">−$240</b></div>
        </div>
      </div>
      <p>Taken together, she is paying $240 − $60 = $180 a year for keeping both pots. Seen as one set of finances, the cost is plain. Kept apart, it hides.</p>`},
    {k:'In practice', t:'"House money"', b:`
      <p>People often treat winnings as "house money", free to gamble with, and take risks with it that they would never take with their salary.</p>
      <p>Lara has $1,000 in savings and wins a $500 prize. She treats the prize as spare, puts all of it into one risky bet and loses it.</p>
      <div class="split">
        <div class="col bad"><div class="col-h">After the win</div><b class="mono">$1,500</b><p>Savings plus prize.</p></div>
        <div class="col bad"><div class="col-h">After the loss</div><b class="mono">$1,000</b><p>Down $500, a third of her wealth ($500 ÷ $1,500).</p></div>
      </div>
      <p>A lost prize dollar is exactly as gone as a lost savings dollar. Judging risk across the whole portfolio, rather than pot by pot, is the usual way to see this. Taking risk is not wrong in itself. The error is treating money as costing less because of where it came from.</p>`}
  ],
  qs:[
    {q:'A fund\'s returns over five years are +10%, +12%, −4%, +6% and +16%. What is the average year?',
     o:['6%','8%','10%','16%'], a:1,
     e:'10 + 12 − 4 + 6 + 16 = 40, and 40 ÷ 5 = 8%. The last year (16%) is double the average.'},
    {q:'Dana keeps $5,000 in a savings account paying 2%, while owing $3,000 on a card charging 20%. What is her net interest over a year?',
     o:['+$100','−$500','−$600','+$400'], a:1,
     e:'She earns $5,000 × 2% = $100 and pays $3,000 × 20% = $600. Net: $100 − $600 = −$500.'},
    {q:'Which is the clearest example of mental accounting?',
     o:['Adding up all holdings to judge total risk','Selling a stock after its earnings fall','Treating a $300 prize as spare money to gamble with, while guarding $300 of savings','Comparing two stocks by their P/E ratios'], a:2,
     e:'The two $300 sums are worth the same, but they are treated differently because of where they came from.'},
    {q:'After the market falls 15% in a month, a new investor assumes it will keep falling at that pace. Which bias is this?',
     o:['Confirmation bias','The disposition effect','Anchoring on a purchase price','Recency bias'], a:3,
     e:'Giving too much weight to the latest move, and too little to the longer record, is recency bias.'},
    {q:'Samer has $600 in savings and wins $200. He treats the win as free money, bets all of it and loses. Compared with the $800 he had after the win, by what percentage is his wealth lower?',
     o:['The same, since it was free money','33%','25%','$600'], a:2,
     e:'He is $200 below $800: $200 ÷ $800 = 25%. Dividing by $600 gives 33%, a slip. The money is lost just as surely as savings would have been.'}
  ]
};

const PSY_CHECK = {
  title:'Unit check', min:4, badge:{name:'Mind Over Market', icon:'flame'}, cards:[],
  qs:[
    {q:'A person feels every loss 2.5 times as strongly as an equal gain. In a 50/50 bet risking $100, what is the smallest win that feels fair to them?',
     o:['$100','$150','$350','$250'], a:3,
     e:'The $100 loss feels like $250, so they need 0.5 × win = 0.5 × $250, a win of $250. At $180 the bet is +$40 on paper, yet it still feels like a loser to them.'},
    {q:'An investor believes each switch between funds will pay off. A $50,000 portfolio loses 1% of its value on every switch, and there are 15 switches in a year. With no other change, roughly what is it worth at the end?',
     o:['$50,000','About $43,000','About $35,000','$47,500'], a:1,
     e:'$50,000 × 0.99¹⁵ ≈ $43,000. Each loss is 1% of what is left, so costs compound. Switching only helps if each switch adds more than it costs.'},
    {q:'Litani Energy rises from $12 to $48, then halves. Rana bought at $48. Dani bought at $12 and still holds. What are their results?',
     o:['Rana −50%, Dani +50%','Rana −100%, Dani +100%','Rana −25%, Dani +100%','Rana −50%, Dani +100%'], a:3,
     e:'Halving $48 gives $24. Rana: $24 ÷ $48 − 1 = −50%. Dani: $24 ÷ $12 − 1 = +100%. Rana now needs a rise of 100% just to break even.'},
    {q:'A stock\'s 52-week high was $100 and it is now 40% below it. Earnings are $0.40 a share. A trader calls it cheap. What is its P/E?',
     o:['15','250','150','24'], a:2,
     e:'The price is $100 × 0.6 = $60. P/E = $60 ÷ $0.40 = 150, which is expensive on earnings. Using the old $100 gives 250, and "40% off" tells nothing about value.'},
    {q:'A fund\'s last eight yearly returns are +3%, +7%, −12%, +5%, +14%, +18%, +22% and +11%. An investor expects the last three years\' average to continue. How does it compare with the eight-year average?',
     o:['They are equal','Exactly double: 17% against 8.5%','Slightly higher: 10% against 8.5%','Lower: 8.5% against 17%'], a:1,
     e:'Eight-year total: 68, and 68 ÷ 8 = 8.5%. Last three: (18 + 22 + 11) ÷ 3 = 17%. Judging by the last stretch doubles the expectation.'},
    {q:'Omar has $8,000 in a savings account paying 2%, and owes $4,000 on a loan at 10%. What is his net interest over a year?',
     o:['+$160','+$560','−$400','−$240'], a:3,
     e:'He earns $8,000 × 2% = $160 and pays $4,000 × 10% = $400. Net: $160 − $400 = −$240. Treating the two as separate pots hides the cost.'},
    {q:'Sami finds 14 research notes on Cedar Tech: 10 back his view and 4 do not. He keeps only the 10 and calls the case unanimous. What share of all the notes backed his view?',
     o:['100%','About 29%','About 71%','10%'], a:2,
     e:'10 ÷ 14 ≈ 71%. About 29% pointed the other way. Keeping only agreeing notes is confirmation bias.'},
    {q:'1,024 people each flip a fair coin 10 times, and each flip is a "prediction". About how many get all ten right by luck alone?',
     o:['About 1','About 10','About 100','None, since ten in a row is impossible'], a:0,
     e:'Ten heads in a row has a chance of 0.5¹⁰ = 1 in 1,024. In a crowd of 1,024, about one person will look like a perfect forecaster by luck.'}
  ]
};

const UNIT_PSYCHOLOGY = {id:'psychology', title:'Market psychology', level:'Intermediate', lessons:[PSY_LOSS, PSY_OVERCONFIDENCE, PSY_HERDING, PSY_ANCHORING, PSY_RECENCY, PSY_CHECK]};

/* Placement: one question per lesson, n = lesson number. Different from the lesson questions. */
const PLACEMENT_PSYCHOLOGY = [
  {n:1, q:'An investor bought a stock at $25. It is now $20. What rise gets it back to $25?',
   o:['20%','25%','5%','50%'], a:1,
   e:'The gap is $5, measured against the current $20: $5 ÷ $20 = 25%. The fall was 20% of $25, but the recovery is measured from the lower price.'},
  {n:2, q:'A person gives 50 answers, each with a range they are 80% sure contains the truth. If they are well calibrated, about how many ranges should contain it?',
   o:['25','45','50','40'], a:3,
   e:'80% of 50 = 40. Far fewer than 40 would mean they were overconfident.'},
  {n:3, q:'A stock rises from $10 to $25 in a few months as a crowd piles in. What is the percentage gain?',
   o:['15%','150%','250%','60%'], a:1,
   e:'The gain is $15, measured against the starting $10: $15 ÷ $10 = 150%.'},
  {n:4, q:'A stock is 30% below its 52-week high. Which conclusion is justified?',
   o:['It is cheap','It is certain to bounce back','Nothing yet: whether it is cheap depends on its earnings and prospects','It is overpriced'], a:2,
   e:'A past price is only an anchor. Cheapness has to be judged against what the business earns and is likely to earn.'},
  {n:5, q:'Dana has $3,000 in savings earning 1.5% and owes $1,000 on a card charging 24%. What is her net interest over a year?',
   o:['+$45','−$195','−$240','+$285'], a:1,
   e:'She earns $3,000 × 1.5% = $45 and pays $1,000 × 24% = $240. Net: $45 − $240 = −$195.'}
];

/* MATHS CHECK (all run in Python)
   Lesson 1 · Loss aversion
   - Coin: 0.5 × 120 − 0.5 × 100 = +10. Loss weighted x2: 0.5 × 120 − 0.5 × 200 = −40. Fair win at x2: 0.5 × W = 0.5 × 200, W = 200.
   - $1,000 × 1.30 = 1,300; $1,000 × 0.80 = 800. Recovery 200 ÷ 800 = 25%.
   - Q1: 0.5 × 150 − 0.5 × 100 = +25 (slips: 150 − 100 = 50; average of stakes 125). Q2: W = 2 × 100 = 200.
   - Q3: 80 → 60, 20 ÷ 60 = 33.3% (slip 20 ÷ 80 = 25%).
   Lesson 2 · Overconfidence
   - 90% of 20 = 18; hit rate 11 ÷ 20 = 55%.
   - 10,000 × 1.08 × 0.99^2 = 10,585.08; 10,000 × 1.08 × 0.99^20 = 8,833.39. (Gross 10,800.)
   - 0.5^5 = 1/32 = 3.125%; 1,000 ÷ 32 = 31.25 ≈ 31.
   - Q1: 90% of 10 = 9. Q2: 12 ÷ 20 = 60%. Q3: 20,000 × 0.995^12 = 18,832.46 (drag 1,167.54; simple 12 × 0.5% = 6% would be 18,800).
   - Q4: 0.5^4 = 1/16; 160 ÷ 16 = 10.
   Lesson 3 · Herding, FOMO and bubbles
   - 10 → 30: +200%. 30 → 15: −50%. 10 → 15: +50%. Break-even from 15 to 30: +100%.
   - Cedar Tech P/E 30 ÷ 1.5 = 20; 90 ÷ 1.5 = 60; price ratio 3x.
   - Nasdaq Composite close 5,048.62 (10 Mar 2000), low close 1,114.11 (9 Oct 2002): 1,114.11 ÷ 5,048.62 − 1 = −77.9% (about 78%);
     5,048.62 ÷ 1,114.11 − 1 = 353.2% (about 353%). Reviewer: confirm the index levels, dates and that the peak was regained in 2015 (April).
   - Q1: 25 → 75 = +200%. Q2: 100 ÷ 2 = 50 (40 ÷ 2 = 20 before). Q5: 1 ÷ 0.4 − 1 = 150%.
   Lesson 4 · Anchoring and confirmation
   - Cedar Tech 1 − 50 ÷ 80 = 37.5%; P/E 50 ÷ 0.5 = 100. Byblos Foods 1 − 30 ÷ 40 = 25%; P/E 30 ÷ 3 = 10.
   - Bought 60, now 45: 15 ÷ 45 = 33.3%. Research 9 of 12 = 75%.
   - Q1: 30 ÷ 120 = 25% (slip 30 ÷ 90 = 33%). Q2: 50 → 30, 20 ÷ 30 = 66.7% (slips 40%, 60%, 20%).
   Lesson 5 · Recency and mental accounting
   - Returns 9, 14, −6, 11, 8, 16, −12, 13, 3, 24: sum 80, average 8%; last year 24 = 3 x 8.
   - 2,000 × 3% = 60; 2,000 × 12% = 240; net −180.
   - Lara: 1,000 + 500 = 1,500; loses 500 → 1,000; 500 ÷ 1,500 = 33.3%.
   - Q1: (10 + 12 − 4 + 6 + 16) ÷ 5 = 8. Q2: 5,000 × 2% = 100; 3,000 × 20% = 600; net −500.
   - Q5: 600 + 200 = 800; loses 200; 200 ÷ 800 = 25% (slip 200 ÷ 600 = 33%).
   Unit check
   - C1: 2.5 × 100 = 250 (at 180: 0.5 × 180 − 0.5 × 100 = +40 on paper). C2: 50,000 × 0.99^15 = 43,003.
   - C3: 48 → 24: −50%; 12 → 24: +100%; break-even +100%.
   - C4: 100 × 0.6 = 60; 60 ÷ 0.4 = 150 (slip 100 ÷ 0.4 = 250).
   - C5: 3 + 7 − 12 + 5 + 14 + 18 + 22 + 11 = 68; 68 ÷ 8 = 8.5; (18 + 22 + 11) ÷ 3 = 17; 17 = 2 x 8.5.
   - C6: 8,000 × 2% = 160; 4,000 × 10% = 400; net −240. C7: 10 ÷ 14 = 71.4%; 4 ÷ 14 = 28.6%.
   - C8: 0.5^10 = 1/1024; 1,024 × 1/1,024 = 1.
   Placement
   - P1: 25 → 20: 5 ÷ 20 = 25% (slip 5 ÷ 25 = 20%). P2: 0.8 × 50 = 40. P3: 10 → 25: 15 ÷ 10 = 150%.
   - P5: 3,000 × 1.5% = 45; 1,000 × 24% = 240; net −195.
*/
