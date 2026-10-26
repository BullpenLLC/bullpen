/* ---------- Valuing a company ---------- */
const DCF_INTRINSIC = {
  title:'Intrinsic vs market value', min:5,
  cards:[
    {k:'The idea', t:'Price is one number, value is another', b:`
      <p class="lead">A share price tells you what people are paying today. Intrinsic value is an estimate of what the business is worth, based on the cash it can produce for its owners over time. The two can sit apart for long stretches.</p>
      <p>This unit builds that estimate step by step, using a method called discounted cash flow, or DCF. The answer is never exact. It is a reasoned range, and the useful part is seeing which assumptions drive it.</p>
      <div class="term"><span class="term-k">Key term</span><b>Intrinsic value:</b> your estimate of what a business is worth from the cash it is expected to generate, whatever the market happens to be paying right now.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Akkar Solar: price against estimate', b:`
      <p>Akkar Solar, a made-up company, has 20M shares trading at $14. Its market value is 20M × $14 = <b>$280M</b>.</p>
      <p>After building a forecast, an analyst estimates the business is worth $350M. Per share, that is $350M ÷ 20M = <b>$17.50</b>.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">What the market pays</div>
          <p>20M shares × $14</p>
          <div class="pf-r">Market value<b class="mono">$280M</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">What the analyst estimates</div>
          <p>$350M ÷ 20M shares = $17.50</p>
          <div class="pf-r">Intrinsic value<b class="mono">$350M</b></div>
        </div>
      </div>
      <p>The price is 1 − 280 ÷ 350 = <b>20% below</b> the estimate. Said the other way round, the estimate is 350 ÷ 280 − 1 = 25% above the price. The two percentages differ because they use different starting points.</p>`},
    {k:'The catch', t:'Value is an opinion with a range', b:`
      <p>Two careful analysts can value the same company differently, because each makes different calls about growth, costs and risk. So a sensible estimate comes as a range.</p>
      <p>Say the analyst's range for Akkar Solar is $300M to $400M. Per share, that is <b>$15 to $20</b>.</p>
      <div class="score"><div><b>$15</b><span>Low case</span></div><div><b>$17.50</b><span>Middle case</span></div><div><b>$20</b><span>High case</span></div></div>
      <p>At $14 the price is under even the low case. At $18 it would sit inside the range, and the estimate would say little. The market is not "wrong" just because it disagrees with one model. It may be pricing in something the model left out.</p>`},
    {k:'The limit', t:'A gap is not a prediction', b:`
      <p>If the price is below an estimate of value, that does not mean the price will rise soon, or at all. Prices can stay below value for years. Equally, the estimate itself might simply be too high.</p>
      <p>What the gap does give is a question: <b>what does the market believe that my model does not, or the other way round?</b></p>
      <div class="split">
        <div class="col good"><div class="col-h">Useful for</div><b>Testing assumptions</b><p>It shows what would need to be true for today's price to make sense.</p></div>
        <div class="col bad"><div class="col-h">Not useful for</div><b>Timing</b><p>It says nothing about when, or whether, price and value will meet.</p></div>
      </div>
      <p>The rest of the unit shows how to build the estimate, and how fragile it can be.</p>`}
  ],
  qs:[
    {q:'A company has 30M shares trading at $12. What is its market value?',
     o:['$42M','$2.5M','$360M','$18M'], a:2,
     e:'Market value = shares × price = 30M × $12 = $360M.'},
    {q:'An analyst estimates a share is worth $60. It trades at $45. By what percentage is the price below the estimate?',
     o:['33%','15%','75%','25%'], a:3,
     e:'The gap is $15, measured against the $60 estimate: 15 ÷ 60 = 25%. Measuring it against the $45 price gives 33%, which is how far the estimate is above the price.'},
    {q:'Which best describes intrinsic value?',
     o:['The latest share price','An estimate of a business\'s worth from the cash it is expected to produce','The value of its buildings','The highest price the shares have ever reached'], a:1,
     e:'Intrinsic value is a judgement about what the business is worth from its future cash flows, separate from the day\'s price.'},
    {q:'One analyst values a company at $22 a share and another at $16. The price is $19. What does this mainly show?',
     o:['One of them must have made an arithmetic error','Estimates depend on assumptions, so careful people can reach different values','The price is certainly correct','The company cannot be valued'], a:1,
     e:'Different views on growth, costs and risk lead to different values. Neither is automatically wrong.'},
    {q:'True or false: if a share trades below an estimate of its intrinsic value, it is certain to rise to that value.',
     o:['True','False'], a:1,
     e:'The estimate may be too high, and prices can stay below value for a long time. A gap raises a question, not a guarantee.'}
  ]
};

const DCF_FCF = {
  title:'Forecasting free cash flow', min:5,
  cards:[
    {k:'The idea', t:'The cash left for the people who funded it', b:`
      <p class="lead">A DCF starts with a forecast of free cash flow: the cash a business makes from its operations each year after paying tax and after spending what it needs to keep and grow those operations.</p>
      <p>It is counted before any interest on debt, so it belongs to everyone who funds the business, lenders and shareholders together. How the business is funded is dealt with later, in the discount rate.</p>
      <div class="term"><span class="term-k">Key term</span><b>Free cash flow (FCF):</b> operating profit after tax, plus depreciation, minus capital spending, minus any increase in working capital (money tied up in stock and unpaid customer bills).</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Zahle Metals: year 1', b:`
      <p>Zahle Metals, a made-up company, had revenue of $200M this year. The forecast assumes revenue grows 10%, an operating profit margin of 15% and tax of 25%. Each year, depreciation is 4% of revenue, capital spending 6%, and working capital rises by 2%.</p>
      <p>Revenue: $200M × 1.10 = <b>$220M</b>.<br>Operating profit: 15% × $220M = $33M.<br>After tax: $33M × (1 − 0.25) = <b>$24.75M</b>.</p>
      <p>Add depreciation (4% × $220M = $8.8M). Take away capital spending (6% × $220M = $13.2M) and the rise in working capital (2% × $220M = $4.4M).</p>
      <p>$24.75M + $8.8M − $13.2M − $4.4M = <b>$15.95M</b>.</p>
      <div class="kv"><div><b>$24.75M</b><span>Profit after tax</span></div><div><b>+$8.8M</b><span>Depreciation</span></div><div><b class="bad-t">−$13.2M</b><span>Capital spending</span></div><div><b class="bad-t">−$4.4M</b><span>Working capital</span></div></div>`},
    {k:'The catch', t:'Small changes in growth compound', b:`
      <p>Suppose growth is 6% a year, not 10%. Year 3 revenue would be $200M × 1.06³ = <b>$238.2M</b>, against $200M × 1.10³ = $266.2M.</p>
      <p>With the same margins and cost shares, year 3 free cash flow is about <b>$17.27M</b> on 6% growth and <b>$19.30M</b> on 10%.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">10% growth</div>
          <p>Year 3 revenue $266.2M</p>
          <div class="pf-r">Year 3 FCF<b class="mono">$19.30M</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">6% growth</div>
          <p>Year 3 revenue $238.2M</p>
          <div class="pf-r">Year 3 FCF<b class="mono bad-t">$17.27M</b></div>
        </div>
      </div>
      <p>That is about 10.5% less cash in year 3 from a four-point change in growth, and the gap keeps widening every year after.</p>`},
    {k:'The limit', t:'Why FCF and not profit', b:`
      <p>Net income can be a poor guide to cash. Depreciation lowers profit but no cash leaves that year. Capital spending does take cash out, but only reaches profit slowly. A fast-growing firm can report a profit while its free cash flow is negative.</p>
      <p>Forecasts also get less reliable the further out they go. Most DCFs forecast about five to ten years in detail, then use a single estimate for everything after that, which a later lesson covers.</p>
      <p>A good forecast has a reason behind each assumption: past growth, the size of the market, what rivals earn, and what the company says about its plans. A margin that jumps up with no explanation deserves a question.</p>`}
  ],
  qs:[
    {q:'A company has operating profit of $50M and a 20% tax rate. Depreciation is $6M, capital spending $9M, and working capital rises by $4M. What is its free cash flow?',
     o:['$33M','$43M','$25M','$37M'], a:0,
     e:'After tax: $50M × 0.80 = $40M. Then $40M + $6M − $9M − $4M = $33M.'},
    {q:'Why is depreciation added back when working out free cash flow?',
     o:['It is a cash payment to lenders','It lowered profit but no cash left the business in that year','It is a tax refund','It measures growth'], a:1,
     e:'Depreciation is an accounting charge. Profit is reduced by it, but the cash was spent earlier, when the asset was bought.'},
    {q:'A company\'s revenue is $400M and is forecast to grow 5%. With a 10% operating margin and 30% tax, what is year 1 profit after tax?',
     o:['$28.0M','$29.4M','$40.0M','$42.0M'], a:1,
     e:'Revenue is $400M × 1.05 = $420M. Operating profit is 10% × $420M = $42M. After tax: $42M × 0.70 = $29.4M.'},
    {q:'Which change, on its own, lowers a company\'s free cash flow in a year?',
     o:['A fall in capital spending','A lower tax rate','Customers taking longer to pay, so more money is tied up in unpaid bills','A one-off cut in operating costs'], a:2,
     e:'Customers who owe more raise working capital, which is subtracted. Less capital spending, a lower tax rate and lower costs all raise FCF.'},
    {q:'Why is free cash flow for a DCF usually counted before interest on debt?',
     o:['Interest is not a real cost','So the cash flows belong to all funders, with the cost of funding handled in the discount rate','Because lenders are paid last','Because interest is always tax-free'], a:1,
     e:'Counting before interest values the whole business. The cost of debt and equity then enters through the discount rate.'}
  ]
};

const DCF_WACC = {
  title:'Discount rates: WACC and CAPM', min:5,
  cards:[
    {k:'The idea', t:'Riskier cash is worth less', b:`
      <p class="lead">Future cash flows are shrunk back to today's value using a discount rate. A riskier business gets a higher rate, so its future cash counts for less.</p>
      <p>For a whole business, that rate is usually the weighted average cost of capital, or WACC: a blend of what the company's shareholders and lenders each expect to earn. (The Time value of money unit covers the discounting itself.)</p>
      <div class="term"><span class="term-k">Key term</span><b>WACC:</b> the average return a company must earn to satisfy its funders, weighting the cost of equity and the after-tax cost of debt by how much of each it uses.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Cost of equity with CAPM', b:`
      <p>The capital asset pricing model, CAPM, estimates what shareholders require: a safe return plus extra for risk.</p>
      <p><b>Cost of equity = risk-free rate + beta × equity risk premium.</b></p>
      <p>Beta is how strongly a share has tended to move with the market. A beta of 1 moves with it, above 1 swings more, below 1 swings less. The equity risk premium is the extra return investors expect from shares over a safe asset.</p>
      <p>Chouf Dairy, a made-up company, has a risk-free rate of 4%, an equity risk premium of 5% and a beta of 1.2:</p>
      <p>4% + 1.2 × 5% = <b>10%</b>.</p>
      <div class="kv kv3"><div><b>4%</b><span>Risk-free</span></div><div><b>1.2 × 5%</b><span>Beta × premium</span></div><div><b>10%</b><span>Cost of equity</span></div></div>`},
    {k:'The blend', t:'Adding debt to get WACC', b:`
      <p>Chouf Dairy borrows at 6%. Interest is tax-deductible, so with a 25% tax rate the after-tax cost is 6% × (1 − 0.25) = <b>4.5%</b>.</p>
      <p>It is funded 70% by equity and 30% by debt (using market values):</p>
      <p>WACC = 0.70 × 10% + 0.30 × 4.5% = 7% + 1.35% = <b>8.35%</b>.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Beta 1.2</div>
          <p>Equity cost 10%</p>
          <div class="pf-r">WACC<b class="mono">8.35%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Beta 0.8</div>
          <p>Equity cost 4% + 0.8 × 5% = 8%</p>
          <div class="pf-r">WACC<b class="mono good-t">6.95%</b></div>
        </div>
      </div>
      <p>At 6.95%: 0.70 × 8% + 0.30 × 4.5% = 5.6% + 1.35%. A steadier business gets a lower rate, so its cash flows are worth more today.</p>`},
    {k:'The catch', t:'Every input is an estimate', b:`
      <p>Beta is measured from past price moves, which may not repeat. The equity risk premium has no single agreed figure. Different respectable sources pick different numbers.</p>
      <p>Debt looks cheaper than equity, so more of it seems to cut WACC. But more debt makes the shares riskier, which raises the cost of equity. It is not a free saving.</p>
      <p>For companies in higher-risk countries, analysts often add a country risk premium, and keep the cash flows and the rate in the same currency. Mixing a dollar rate with local-currency cash flows gives wrong answers.</p>
      <p>Because the rate matters so much, the next lesson tests what happens when it moves by a point or two.</p>`}
  ],
  qs:[
    {q:'Risk-free rate 3%, beta 1.5, equity risk premium 6%. What is the CAPM cost of equity?',
     o:['9%','12%','10.5%','13.5%'], a:1,
     e:'3% + 1.5 × 6% = 3% + 9% = 12%.'},
    {q:'A company borrows at 8% and pays tax at 25%. What is its after-tax cost of debt?',
     o:['8%','2%','6%','10%'], a:2,
     e:'8% × (1 − 0.25) = 6%, because interest reduces the tax bill.'},
    {q:'A company is 60% equity with a cost of 11% and 40% debt with an after-tax cost of 5%. What is its WACC?',
     o:['8.0%','8.6%','9.2%','16%'], a:1,
     e:'0.60 × 11% + 0.40 × 5% = 6.6% + 2.0% = 8.6%.'},
    {q:'All else equal, what happens to a DCF value if the discount rate is raised?',
     o:['It rises','It falls, because future cash flows are discounted more heavily','It does not change','It becomes negative'], a:1,
     e:'A higher rate shrinks every future cash flow more when brought back to today, so the value falls.'},
    {q:'What does a beta of 0.5 suggest?',
     o:['The share has tended to move about half as much as the market','The share will lose half its value','The company is half as profitable','The share pays a 0.5% dividend'], a:0,
     e:'Beta compares past price swings with the market\'s. 0.5 means smaller swings than the market, which feeds into a lower cost of equity.'}
  ]
};

const DCF_TERMINAL = {
  title:'Terminal value and sensitivity', min:5,
  cards:[
    {k:'The idea', t:'What happens after the forecast ends?', b:`
      <p class="lead">A business doesn't stop after year five. Terminal value is a single figure that stands in for all the cash flows after the forecast period. In many DCFs it is the largest part of the answer.</p>
      <p>The usual method assumes cash flow grows at a steady rate, forever, from the last forecast year.</p>
      <div class="term"><span class="term-k">Key term</span><b>Terminal value:</b> the estimated value, at the end of the forecast, of all later cash flows. With steady growth: next year's cash flow ÷ (discount rate − growth rate).</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'A five-year DCF', b:`
      <p>Jbeil Logistics, a made-up company, has forecast free cash flows of $10M, $11M, $12M, $13M and $14M over five years. The discount rate is 9% and long-run growth is 3%.</p>
      <p>Each year is divided by 1.09 raised to that year's number. They come to $9.17M, $9.26M, $9.27M, $9.21M and $9.10M. Together, <b>$46.01M</b>.</p>
      <p>Terminal value at year 5: $14M × 1.03 ÷ (0.09 − 0.03) = $14.42M ÷ 0.06 = <b>$240.3M</b>. Brought back five years: $240.3M ÷ 1.09⁵ = <b>$156.2M</b>.</p>
      <div class="score"><div><b>$46.0M</b><span>Years 1-5</span></div><div><b>$156.2M</b><span>Terminal value, today</span></div><div><b>$202.2M</b><span>Enterprise value</span></div></div>
      <p>The terminal value supplies 156.2 ÷ 202.2 = <b>77%</b> of the total. So the assumptions behind it matter far more than any single forecast year.</p>`},
    {k:'The catch', t:'The sensitivity grid', b:`
      <p>Now vary the two big inputs. Enterprise value, in $M, for long-run growth of 2%, 3% and 4% (in that order) at three discount rates:</p>
      <p>At 8%: <b>209.3 · 243.6 · 295.0</b></p>
      <p>At 9%: <b>178.6 · 202.2 · 235.3</b></p>
      <p>At 10%: <b>155.6 · 172.7 · 195.4</b></p>
      <p>Moving the rate from 9% to 10% cuts the value from $202.2M to $172.7M, about 14.6%. The range across the grid runs from $155.6M to $295.0M, nearly double.</p>
      <p>Showing a grid like this, rather than a single figure, is honest about the uncertainty.</p>`},
    {k:'In practice', t:'From enterprise value to a share price', b:`
      <p>The DCF gives the value of the whole business. To get to shareholders, take away net debt (debt minus cash). Say Jbeil has net debt of $60M and 10M shares:</p>
      <p>$202.2M − $60M = $142.2M. Divided by 10M shares: <b>$14.22</b>.</p>
      <p>Across the grid, the same step gives $9.56 (10% rate, 2% growth) to $23.50 (8% rate, 4% growth).</p>
      <div class="split">
        <div class="col good"><div class="col-h">Growth method</div><b>Cash grows steadily</b><p>Needs growth below the discount rate and below the long-run pace of the economy.</p></div>
        <div class="col good"><div class="col-h">Exit-multiple method</div><b>Sell at a multiple</b><p>Applies a peer multiple, say 8 × final-year EBITDA, then discounts it back.</p></div>
      </div>
      <p>The growth rate can't reach the discount rate, or the formula breaks. And it can't sensibly stay above the economy's growth forever, or the company would eventually be bigger than the whole economy.</p>`}
  ],
  qs:[
    {q:'A final-year free cash flow is $20M. The discount rate is 10% and long-run growth is 4%. What is the terminal value at the end of the forecast?',
     o:['$333.3M','$346.7M','$148.6M','$200.0M'], a:1,
     e:'$20M × 1.04 ÷ (0.10 − 0.04) = $20.8M ÷ 0.06 = $346.7M. Skipping the growth step gives $333.3M.'},
    {q:'The present value of five years of forecast cash flows is $60M. The present value of the terminal value is $140M. What share of the total comes from the terminal value?',
     o:['30%','43%','60%','70%'], a:3,
     e:'The total is $200M. 140 ÷ 200 = 70%.'},
    {q:'A DCF puts a company\'s enterprise value at $202.2M. Raising the discount rate by one point, with growth held the same, lowers it to $172.7M. About what percentage fall is that?',
     o:['1%','14.6%','17.1%','29.5%'], a:1,
     e:'(202.2 − 172.7) ÷ 202.2 = 14.6%. A one-point change in the rate has a big effect.'},
    {q:'Why can the long-run growth rate in a terminal value not be set at or above the discount rate?',
     o:['It would be taxed','The formula divides by (rate − growth), so it would break or give an absurd value','Growth rates must be whole numbers','Lenders forbid it'], a:1,
     e:'If growth equals the rate, the divisor is zero. If it is higher, the value turns negative, which makes no sense.'},
    {q:'A company\'s final-year EBITDA is $30M. Using the exit-multiple method with a multiple of 8 and a 10% rate over 5 years, what is the terminal value in today\'s money?',
     o:['$240.0M','$149.0M','$186.3M','$24.0M'], a:1,
     e:'The terminal value is 8 × $30M = $240M at year 5. Today: $240M ÷ 1.10⁵ = $149.0M. Forgetting to discount gives $240M.'}
  ]
};

const DCF_COMPS = {
  title:'Comparables and margin of safety', min:5,
  cards:[
    {k:'The idea', t:'A second opinion from the neighbours', b:`
      <p class="lead">A DCF is built from a company's own forecast. A comparables check values it from what the market pays for similar businesses. If the two answers are far apart, one of the assumptions needs another look.</p>
      <p>The ratios used here, such as enterprise value to EBITDA, are covered in the Valuation ratios unit.</p>
      <div class="term"><span class="term-k">Key term</span><b>Comparables:</b> similar listed companies whose valuation multiples are applied to the company being valued, to see what it would be worth at their prices.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Valuing Batroun Beverages from its peers', b:`
      <p>Batroun Beverages, a made-up company, has EBITDA of $40M, net debt of $60M and 20M shares. Five similar companies trade at enterprise value to EBITDA multiples of 7, 8, 9, 9 and 10. The middle one, the median, is 9.</p>
      <p>Enterprise value: 9 × $40M = <b>$360M</b>.<br>Equity value: $360M − $60M = $300M.<br>Per share: $300M ÷ 20M = <b>$15.00</b>.</p>
      <div class="score"><div><b>$13.00</b><span>At a multiple of 8</span></div><div><b>$15.00</b><span>At 9</span></div><div><b>$17.00</b><span>At 10</span></div></div>
      <p>At 8: (8 × $40M − $60M) ÷ 20M = $13. At 10: (10 × $40M − $60M) ÷ 20M = $17. So the peers give a range of $13 to $17.</p>`},
    {k:'The catch', t:'Peers can be wrong together', b:`
      <p>Comparables carry the market's mood. If every company in the group is priced too highly, the comparison will say the same of the company being valued. No peer is a perfect match either: growth, debt, margins and countries differ.</p>
      <div class="split">
        <div class="col good"><div class="col-h">DCF</div><b>Own cash flows</b><p>Less tied to market mood, but depends heavily on forecasts and the rate.</p></div>
        <div class="col good"><div class="col-h">Comparables</div><b>Market's pricing</b><p>Quick and grounded in real prices, but inherits any mispricing in the group.</p></div>
      </div>
      <p>If the DCF says $18 and the peers say $13 to $17, the useful step is to ask why. Perhaps the forecast is more optimistic than the peers' growth, or it has a lower discount rate.</p>`},
    {k:'The limit', t:'Margin of safety', b:`
      <p>Every estimate could be wrong, so careful investors like to see a cushion between their estimate of value and the price. That gap is the margin of safety.</p>
      <p>If value is estimated at $15 and the price is $12: ($15 − $12) ÷ $15 = <b>20%</b>.</p>
      <p>Now suppose the true value turns out to be $12, 20% lower than the estimate. The cushion has been used up completely. If the true value was $10, the cushion was too small.</p>
      <p>A margin of safety reduces the damage from errors. It is not a guarantee: the estimate can be wrong by more than the gap, and the price may stay put. A valuation is a tool for asking questions about assumptions, not a recommendation to do anything.</p>`}
  ],
  qs:[
    {q:'Five peers trade at enterprise value to EBITDA of 6, 8, 9, 10 and 14. What is the median?',
     o:['9','9.4','10','8'], a:0,
     e:'In order, the middle value of the five is 9. The average is (6 + 8 + 9 + 10 + 14) ÷ 5 = 9.4, which one extreme peer pulls up.'},
    {q:'A company has EBITDA of $30M, net debt of $50M and 11M shares. Peers trade at 9 times EBITDA. What value per share does that imply?',
     o:['$24.55','$20.00','$25.00','$18.18'], a:1,
     e:'Enterprise value is 9 × $30M = $270M. Take off net debt: $220M. Divide by 11M shares: $20.00. Forgetting to take off net debt gives $24.55.'},
    {q:'A share is estimated to be worth $50, and the price is $40. What is the margin of safety, as a share of the estimated value?',
     o:['25%','10%','20%','80%'], a:2,
     e:'($50 − $40) ÷ $50 = 20%. Dividing by the $40 price gives 25%, a different measure.'},
    {q:'Why can a comparables valuation be misleading?',
     o:['Peers always have the same business model','If the whole group is mispriced, the comparison inherits that mispricing','Multiples cannot be calculated','It ignores the share price completely'], a:1,
     e:'It uses market prices, so a group priced too high or too low by the market passes that error to the answer.'},
    {q:'True or false: a margin of safety guarantees that an investor will not lose money.',
     o:['True','False'], a:1,
     e:'It is a cushion against errors, not a guarantee. The estimate can be wrong by more than the cushion, and prices can fall anyway.'}
  ]
};

const DCF_CHECK = {
  title:'Unit check', min:4, badge:{name:'Value Detective', icon:'scale'}, cards:[],
  qs:[
    {q:'A DCF gives an enterprise value of $480M. The company has debt of $120M and cash of $40M, and 16M shares. What value per share does that imply?',
     o:['$22.50','$30.00','$25.00','$21.25'], a:2,
     e:'Net debt = $120M − $40M = $80M. Equity = $480M − $80M = $400M. Per share: $400M ÷ 16M = $25. Ignoring cash and subtracting only debt gives $22.50.'},
    {q:'A company has operating profit of $60M, tax of 25%, depreciation of $10M, capital spending of $18M and a $7M rise in working capital. What is free cash flow?',
     o:['$30M','$37M','$45M','$40M'], a:0,
     e:'After tax: $60M × 0.75 = $45M. Then $45M + $10M − $18M − $7M = $30M.'},
    {q:'Risk-free rate 4%, beta 1.2, equity risk premium 5%. The company is 75% equity, 25% debt with an after-tax debt cost of 4.8%. What is its WACC?',
     o:['7.8%','8.7%','10.0%','9.2%'], a:1,
     e:'Cost of equity = 4% + 1.2 × 5% = 10%. WACC = 0.75 × 10% + 0.25 × 4.8% = 7.5% + 1.2% = 8.7%.'},
    {q:'Final-year free cash flow is $25M, the discount rate is 9% and long-run growth is 3%. What is the terminal value?',
     o:['$416.7M','$429.2M','$208.3M','$277.8M'], a:1,
     e:'$25M × 1.03 ÷ 0.06 = $25.75M ÷ 0.06 = $429.2M. Leaving out the growth step gives $416.7M.'},
    {q:'Which combination would raise a DCF value the most, all else equal?',
     o:['A higher discount rate and lower growth','A lower discount rate and higher long-run growth','A higher discount rate and higher growth','No change either way'], a:1,
     e:'A lower rate shrinks future cash flows less, and higher growth lifts the terminal value. Both raise the value.'},
    {q:'An investor estimates a share is worth $48 and the price is $36. What is the margin of safety as a share of the estimated value?',
     o:['33%','12%','75%','25%'], a:3,
     e:'($48 − $36) ÷ $48 = 25%. Dividing by the $36 price gives 33%, a different measure.'},
    {q:'A DCF puts a company at $18 a share. Peers\' multiples suggest $13 to $17. What is the most sensible next step?',
     o:['Discard the peer figures','Look for why the two disagree, such as a more optimistic forecast or a lower discount rate','Average them and stop','Assume the DCF is exactly right'], a:1,
     e:'A gap between methods points to an assumption worth testing. Neither answer is exact.'},
    {q:'A terminal value of $300M arrives at the end of year 5. The present value of the forecast cash flows is $64M and the discount rate is 10%. What is the enterprise value?',
     o:['$364.0M','$186.3M','$250.3M','$236.0M'], a:2,
     e:'$300M ÷ 1.10⁵ = $186.3M today. Add $64M: $250.3M. Adding the undiscounted $300M gives $364M.'}
  ]
};

const UNIT_DCF = {id:'dcf', title:'Valuing a company', level:'Vault', lessons:[DCF_INTRINSIC, DCF_FCF, DCF_WACC, DCF_TERMINAL, DCF_COMPS, DCF_CHECK]};

/* Vault unit: no placement questions. */

/* MATHS CHECK: every calculation and its result, for the reviewer. All recomputed in Python.
   Lesson 1 (Akkar Solar)
   - Market value 20M x $14 = $280M; estimate $350M / 20M = $17.50
   - Price below estimate 1 - 280/350 = 20%; estimate above price 350/280 - 1 = 25%
   - Range $300M-$400M / 20M = $15-$20
   - Q1: 30M x 12 = $360M. Q2: 1 - 45/60 = 25% (slip 60/45 - 1 = 33.3%)
   Lesson 2 (Zahle Metals, $M)
   - Revenue 200 x 1.10 = 220; operating profit 15% x 220 = 33; after tax 33 x 0.75 = 24.75
   - Depreciation 4% x 220 = 8.8; capex 6% x 220 = 13.2; working capital 2% x 220 = 4.4
   - FCF 24.75 + 8.8 - 13.2 - 4.4 = 15.95
   - 6% growth year 3: revenue 200 x 1.06^3 = 238.2032, FCF 17.2697 (-> 17.27); 10% growth year 3: revenue 266.2, FCF 19.2995 (-> 19.30); shortfall 1 - 17.2697/19.2995 = 10.5%
     (year 3 FCF = revenue x [0.15 x 0.75 + 0.04 - 0.06 - 0.02] = revenue x 0.0725)
   - Q1: 50 x 0.8 = 40; 40 + 6 - 9 - 4 = 33. Q3: 400 x 1.05 = 420; 10% = 42; 42 x 0.7 = 29.4 (slip 28.0 = 400 x 0.1 x 0.7)
   Lesson 3 (Chouf Dairy)
   - Cost of equity 4% + 1.2 x 5% = 10%; after-tax debt 6% x 0.75 = 4.5%
   - WACC 0.7 x 10% + 0.3 x 4.5% = 8.35%; beta 0.8: 4% + 0.8 x 5% = 8%; 0.7 x 8% + 0.3 x 4.5% = 6.95%
   - Q1: 3% + 1.5 x 6% = 12%. Q2: 8% x 0.75 = 6%. Q3: 0.6 x 11% + 0.4 x 5% = 8.6%
   Lesson 4 (Jbeil Logistics, $M)
   - PVs at 9%: 9.17, 9.26, 9.27, 9.21, 9.10; sum 46.01
   - TV 14 x 1.03 / 0.06 = 240.33; PV 240.33 / 1.09^5 = 156.20; EV 202.21; TV share 77.2%
   - Grid EV (rate x growth 2/3/4%): 8%: 209.3, 243.6, 295.0; 9%: 178.6, 202.2, 235.3; 10%: 155.6, 172.7, 195.4
   - 9% to 10% at 3%: 1 - 172.68/202.21 = 14.6%
   - Equity 202.21 - 60 = 142.21; per share (10M) $14.22; grid corners: 10%/2%: (155.6-60)/10 = $9.56; 8%/4%: (295.0-60)/10 = $23.50
   - Q1: 20 x 1.04 / 0.06 = 346.7 (slips 20/0.06 = 333.3; 20 x 1.04 / 0.14 = 148.6). Q2: 140/200 = 70%
   - Q5: 8 x 30 = 240; 240 / 1.1^5 = 149.02
   Lesson 5 (Batroun Beverages)
   - Median of 7, 8, 9, 9, 10 = 9 (mean 8.6); EV 9 x 40 = 360; equity 360 - 60 = 300; 300/20 = $15
   - Multiple 8: (320 - 60)/20 = $13; multiple 10: (400 - 60)/20 = $17
   - Margin of safety (15 - 12)/15 = 20%
   - Q1: median of 6, 8, 9, 10, 14 = 9; mean 47/5 = 9.4. Q2: 9 x 30 = 270; 270 - 50 = 220; 220/11 = $20.00 (slip 270/11 = 24.55)
   - Q3: (50 - 40)/50 = 20% (slip 10/40 = 25%)
   Unit check
   - Q1: net debt 120 - 40 = 80; 480 - 80 = 400; 400/16 = $25 (slip 360/16 = 22.5)
   - Q2: 60 x 0.75 = 45; 45 + 10 - 18 - 7 = 30
   - Q3: 4% + 1.2 x 5% = 10%; 0.75 x 10% + 0.25 x 4.8% = 8.7%
   - Q4: 25 x 1.03 / 0.06 = 429.17 (slip 25/0.06 = 416.7)
   - Q6: (48 - 36)/48 = 25% (slip 12/36 = 33.3%)
   - Q8: 300 / 1.1^5 = 186.28; + 64 = 250.28 (slip 364) */
