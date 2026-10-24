/* ---------- Bonds and interest rates ---------- */
const BONDS_WHAT_A_BOND = {
  title:'What a bond is', min:4,
  cards:[
    {k:'The idea', t:'Lending, not owning', b:`
      <p class="lead">Buy a share and you own part of a company. Buy a bond and you lend money instead, to a government or a company. The borrower pays interest along the way, then pays the loan back on a set date.</p>
      <div class="term"><span class="term-k">Key term</span><b>Bond:</b> a loan that investors make to a government or company. The borrower, called the issuer, pays interest on set dates and repays the loan when it ends.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 4 min</span></div>`},
    {k:'The parts', t:'Three numbers on every bond', b:`
      <p>Every bond is described by three numbers, fixed on the day it is first sold.</p>
      <div class="kv kv3"><div><b>$1,000</b><span>Face value</span></div><div><b>5%</b><span>Coupon rate</span></div><div><b>5 years</b><span>Maturity</span></div></div>
      <p><b>Face value</b>, also called par, is the amount the issuer repays at the end. <b>Maturity</b> is when that happens. The <b>coupon rate</b> sets the yearly interest, as a percentage of face value.</p>
      <div class="term"><span class="term-k">Key term</span><b>Coupon:</b> the interest payment a bond makes. The name comes from old paper bonds, which had coupons that holders tore off to claim each payment.</div>`},
    {k:'Do the maths', t:'Following the cash', b:`
      <p>Cedar Tech sells a bond with a $1,000 face value, a 5% coupon and 5 years to maturity. The coupon is 5% × $1,000 = $50 a year.</p>
      <div class="kv"><div><b>$50</b><span>Coupon each year</span></div><div><b>5</b><span>Coupons in all</span></div><div><b>$1,000</b><span>Repaid in year 5</span></div><div><b class="good-t">$1,250</b><span>Total received</span></div></div>
      <p>Five coupons of $50 make $250 of interest. Add the $1,000 repaid at the end, and the lender gets $1,250 back for $1,000 lent, as long as Cedar Tech pays everything on time.</p>
      <p>Most bonds pay a fixed coupon. Many split it into two payments a year, here $25 every six months. To keep the maths simple, every bond in this unit pays once a year.</p>`},
    {k:'In practice', t:'Who borrows, and what happens next', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Governments</div><b>Government bonds</b><p>To cover spending that taxes don't. US government bonds are called Treasuries.</p></div>
        <div class="col good"><div class="col-h">Companies</div><b>Corporate bonds</b><p>To build, expand or repay older debts. They usually pay more than a strong government's bonds, since a company is more likely to fall behind on payments.</p></div>
      </div>
      <p>Bonds don't have to be held to maturity. After they're first sold, investors trade them with each other, at whatever price a buyer will pay. That can be above or below $1,000, and Lesson 2 shows why.</p>
      <p>Whoever holds the bond on each payment date gets the coupon. Whoever holds it at maturity gets the face value.</p>
      <div class="term"><span class="term-k">Key term</span><b>Secondary market:</b> where investors buy and sell bonds and shares from each other after they were first issued.</div>`}
  ],
  qs:[
    {q:'A bond has a face value of $1,000 and a coupon rate of 6%. How much interest does it pay each year?',
     o:['$6','$60','$600','$1,060'], a:1,
     e:'The coupon is 6% of face value: 0.06 × $1,000 = $60 a year.'},
    {q:'What happens when a bond reaches maturity?',
     o:['The issuer stops paying and keeps the money','The bond turns into shares','The issuer repays the face value','The coupon rate doubles'], a:2,
     e:'Maturity is the end of the loan. The issuer repays the face value, along with the last coupon, to whoever holds the bond.'},
    {q:'A $1,000 bond pays a 4% coupon once a year for 3 years. If every payment arrives, how much does the holder receive in total?',
     o:['$1,120','$1,040','$1,200','$120'], a:0,
     e:'Three coupons of $40 make $120. Add the $1,000 face value repaid at the end: $1,120.'},
    {q:"True or false: buying a company's bond makes you a part-owner of the company.",
     o:['True','False'], a:1,
     e:'A bond is a loan, not ownership. Bondholders are lenders. Shareholders are the owners.'},
    {q:'Rami buys a bond from another investor two years after it was first sold. Who pays him the coupons from now on?',
     o:['The investor who sold it to him','Nobody: coupons only go to the first buyer','The stock exchange','The issuer that borrowed the money'], a:3,
     e:'The issuer owes the payments to whoever holds the bond on each payment date. Selling the bond passes that right to the buyer.'}
  ]
};

const BONDS_PRESENT_VALUE = {
  title:'Present value and prices', min:5,
  cards:[
    {k:'The idea', t:'Money later is worth less now', b:`
      <p class="lead">$1,000 paid a year from now is worth less than $1,000 today. Money in hand could be earning interest in the meantime, and waiting gives that up.</p>
      <p>At 5% a year, $952.38 today grows to $952.38 × 1.05 = $1,000 in a year. So at 5%, $1,000 due in a year is worth $952.38 today.</p>
      <div class="term"><span class="term-k">Key term</span><b>Present value (PV):</b> what a payment due in the future is worth today, given the return that money could earn in the meantime.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Compounding, run backwards', b:`
      <p>Compounding, from the How markets work unit, grows money forward. Present value runs it backwards. This is called discounting:</p>
      <p><b>PV = FV ÷ (1 + r)^n</b></p>
      <p>FV is the future payment. r is the yearly rate as a decimal, so 5% is 0.05. n is the number of years, and (1 + r)^n means (1 + r) multiplied by itself n times.</p>
      <div class="kv kv3"><div><b>$1,000</b><span>Paid in 3 years</span></div><div><b>5%</b><span>Yearly rate</span></div><div><b class="good-t">$863.84</b><span>Worth today</span></div></div>
      <p>1.05 × 1.05 × 1.05 = 1.157625, and $1,000 ÷ 1.157625 = $863.84.</p>
      <p>The rule of 72 gives a quick check. At 7%, money doubles in about 10 years, so $1,000 due in 10 years is worth roughly half that today. The exact figure is $1,000 ÷ 1.07^10 = $508.35.</p>`},
    {k:'Do the maths', t:'Pricing a bond', b:`
      <p>A bond is a list of future payments. Its fair price is the present value of each payment, added up, using the market rate.</p>
      <div class="term"><span class="term-k">Key term</span><b>Market rate:</b> the yearly return investors can get right now on similar bonds, with the same length and the same risk.</div>
      <p>Take a 3-year bond with a $1,000 face value and a 5% coupon. It pays $50, $50, then $1,050.</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Market rate 5%</div>
          <p class="mono">$47.62 + $45.35 + $907.03</p>
          <div class="pf-r">Price<b class="mono">$1,000.00</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Market rate 7%</div>
          <p class="mono">$46.73 + $43.67 + $857.11</p>
          <div class="pf-r">Price<b class="mono bad-t">$947.51</b></div>
        </div>
      </div>
      <p>For example, the last payment at 7% is $1,050 ÷ 1.07^3 = $857.11. When the market rate equals the coupon rate, the price comes out at exactly face value.</p>`},
    {k:'The seesaw', t:'Rates up, prices down', b:`
      <p>The coupon is fixed, so when market rates move, the price is what adjusts. The same 3-year, 5% bond at three market rates:</p>
      <div class="score"><div><b class="good-t">$1,056.57</b><span>Rates at 3%</span></div><div><b>$1,000.00</b><span>Rates at 5%</span></div><div><b class="bad-t">$947.51</b><span>Rates at 7%</span></div></div>
      <p>If new bonds pay 7%, nobody pays $1,000 for one paying 5%. Its price falls until a buyer would earn 7% a year overall, counting the climb back to $1,000 at maturity.</p>
      <p>A holder who keeps the bond to maturity still gets every coupon and the $1,000, if the issuer pays. The price swings matter to anyone who sells early.</p>
      <div class="term"><span class="term-k">Key term</span><b>Interest rate risk:</b> the risk that a bond's price falls because market rates rise.</div>`}
  ],
  qs:[
    {q:'At a 4% yearly rate, what is $1,000 paid in 2 years worth today?',
     o:['$920.00','$961.54','$924.56','$1,081.60'], a:2,
     e:'PV = $1,000 ÷ 1.04^2 = $1,000 ÷ 1.0816 = $924.56. $1,081.60 grows the money forward instead of discounting it.'},
    {q:'Market interest rates rise. What usually happens to the prices of bonds already issued with fixed coupons?',
     o:['They fall','They rise','They stay at face value','Their coupons rise to match'], a:0,
     e:'New bonds now pay more, so older bonds with lower fixed coupons have to get cheaper to attract buyers.'},
    {q:'A 2-year bond has a $1,000 face value and a 6% coupon. Similar bonds have a market rate of 6%. What is its price?',
     o:['$940','$1,120','$1,060','$1,000'], a:3,
     e:'$60 ÷ 1.06 = $56.60, and $1,060 ÷ 1.06^2 = $943.40. Together that is $1,000. When the market rate equals the coupon rate, the price equals face value.'},
    {q:'A bond has one year left. It will pay its last $50 coupon plus its $1,000 face value. The market rate is 8%. What is it worth today?',
     o:['$972.22','$1,000.00','$966.00','$1,134.00'], a:0,
     e:'It pays $1,050 in one year, so PV = $1,050 ÷ 1.08 = $972.22. Taking 8% off ($966) is not the same as dividing by 1.08.'},
    {q:'A bond pays a 5% coupon. New bonds like it now pay 7%. Why does its price fall below face value?',
     o:['The issuer has cut its coupon','Buyers can get 7% elsewhere, so they only pay a price that earns them 7% on this one too','Bonds always lose value as they get older','The face value it repays has dropped'], a:1,
     e:"The coupon and face value don't change. A lower price is the only way the old bond can offer buyers the same return as new ones."}
  ]
};

const BONDS_YIELD = {
  title:'Yield to maturity', min:5,
  cards:[
    {k:'The idea', t:'The return on what you pay', b:`
      <p class="lead">The coupon rate is worked out on face value. But buyers pay the market price, which can be more or less than face value. Yield measures the return on the price actually paid.</p>
      <div class="term"><span class="term-k">Key term</span><b>Yield:</b> a bond's return as a yearly percentage of the price paid for it. When the news says "bond yields rose", bond prices fell.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Current yield', b:`
      <p>The quickest measure divides the yearly coupon by the price.</p>
      <p><b>Current yield = annual coupon ÷ price</b></p>
      <p>Back to the 3-year, 5% bond from Lesson 2, which pays $50 a year:</p>
      <div class="compare">
        <div class="pf">
          <div class="pf-h">Price $947.51</div>
          <p>$50 ÷ $947.51</p>
          <div class="pf-r">Current yield<b class="mono good-t">5.28%</b></div>
        </div>
        <div class="pf">
          <div class="pf-h">Price $1,056.57</div>
          <p>$50 ÷ $1,056.57</p>
          <div class="pf-r">Current yield<b class="mono">4.73%</b></div>
        </div>
      </div>
      <p>Current yield leaves something out: where the price ends up. A bond bought at $947.51 is repaid at $1,000, a gain of $52.49 on top of the coupons.</p>`},
    {k:'Do the maths', t:'Yield to maturity', b:`
      <p>Yield to maturity counts everything: every coupon, plus the gain or loss as the price moves to face value. It's the one yearly rate at which the present value of all the payments equals the price.</p>
      <p>There's usually no simple formula, so it's found by trial. Calculators do it in a split second. The bond costs $947.51 and pays $50, $50, then $1,050:</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Try 6%</div><b class="mono">$973.27</b><p>More than the price, so the rate must be higher.</p></div>
        <div class="col good"><div class="col-h">Try 7%</div><b class="mono">$947.51</b><p>Matches the price. The yield to maturity is 7%.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Yield to maturity (YTM):</b> the overall yearly return from buying a bond at today's price and holding it to maturity, if every payment arrives in full and on time.</div>`},
    {k:'In practice', t:'Premium and discount bonds', b:`
      <div class="split">
        <div class="col good"><div class="col-h">Discount bond</div><b>Price below face value</b><p>At $947.51: coupon 5%, current yield 5.28%, YTM 7%. The climb back to $1,000 adds to the return.</p></div>
        <div class="col good"><div class="col-h">Premium bond</div><b>Price above face value</b><p>At $1,056.57: coupon 5%, current yield 4.73%, YTM 3%. The slide down to $1,000 eats into the return.</p></div>
      </div>
      <p>At exactly face value, all three numbers match. "Premium" doesn't mean better, and "discount" doesn't mean a bargain. The price just reflects how the coupon compares with today's market rate.</p>
      <p>YTM is not a promise. It assumes the bond is held to the end, the issuer pays in full and on time, and each coupon is reinvested at the same rate. Lesson 5 covers what happens when an issuer can't pay.</p>`}
  ],
  qs:[
    {q:'A $1,000 bond pays a $60 coupon each year and trades at $1,200. What is its current yield?',
     o:['6%','5%','7.2%','20%'], a:1,
     e:'Current yield = $60 ÷ $1,200 = 0.05, which is 5%. The 6% coupon rate is worked out on the $1,000 face value, not on the price.'},
    {q:'A bond trades below its face value. Which is true?',
     o:['Its yield to maturity is above its coupon rate','Its yield to maturity is below its coupon rate','Its coupon has been cut','It is sure to default'], a:0,
     e:'Bought at a discount, the bond pays its coupons plus the rise back to face value at maturity, so its YTM is above the coupon rate.'},
    {q:'A bond with one year left will pay a final $30 coupon plus its $1,000 face value. It costs $990. What is its yield to maturity?',
     o:['3.00%','3.03%','4.04%','1.01%'], a:2,
     e:'The buyer pays $990 and gets $1,030 in a year: $1,030 ÷ $990 − 1 = 4.04%. 3.03% is the current yield ($30 ÷ $990), which leaves out the $10 gain.'},
    {q:'A 2-year bond with a 5% coupon costs $1,018.86. Discounting its payments at 5% gives $1,000.00. Discounting them at 4% gives $1,018.86. What is its yield to maturity?',
     o:['5%','4.91%','4%','1.89%'], a:2,
     e:"YTM is the rate at which the payments' present value equals the price. That happens at 4%. 4.91% is the current yield, $50 ÷ $1,018.86."},
    {q:"True or false: a bond's yield to maturity is the return a buyer is guaranteed to get.",
     o:['True','False'], a:1,
     e:'YTM assumes the bond is held to maturity, every payment arrives in full and on time, and coupons are reinvested at the same rate. If any of that fails, the return is different.'}
  ]
};

const BONDS_DURATION = {
  title:'Duration and rate risk', min:5,
  cards:[
    {k:'The idea', t:'Longer bonds swing more', b:`
      <p class="lead">When market rates move, long bonds move much more in price than short ones. Their payments are further away, so a change in the rate compounds over more years.</p>
      <div class="term"><span class="term-k">Key term</span><b>Duration:</b> a measure, in years, of how sensitive a bond's price is to market rates. A duration of 7 means the price moves about 7% for each 1 percentage point change in rates.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Do the maths', t:'Same rise, four bonds', b:`
      <p>Four bonds, all with a 5% coupon, all priced at $1,000 while market rates are 5%. Then rates rise to 6%. Repricing each bond at 6% gives these actual price changes:</p>
      <svg class="cdl" viewBox="0 0 300 160" role="img" aria-label="Bar chart of price changes when market rates rise from 5% to 6%, for 5% coupon bonds priced at $1,000. 2-year bond: −1.8%. 5-year: −4.2%. 10-year: −7.4%. 30-year: −13.8%.">
        <line x1="12" y1="26" x2="288" y2="26" stroke="var(--line)" stroke-width="2"/>
        <rect x="27" y="26" width="36" height="12.83" fill="var(--bear)"/>
        <rect x="97" y="26" width="36" height="29.49" fill="var(--bear)"/>
        <rect x="167" y="26" width="36" height="51.52" fill="var(--bear)"/>
        <rect x="237" y="26" width="36" height="96.35" fill="var(--bear)"/>
        <g font-family="var(--font-mono)" font-size="11" text-anchor="middle" fill="var(--ink-2)">
          <text x="45" y="18">2 yr</text><text x="115" y="18">5 yr</text><text x="185" y="18">10 yr</text><text x="255" y="18">30 yr</text>
          <text x="45" y="52.83" fill="var(--bear-ink)">−1.8%</text><text x="115" y="69.49" fill="var(--bear-ink)">−4.2%</text><text x="185" y="91.52" fill="var(--bear-ink)">−7.4%</text><text x="255" y="136.35" fill="var(--bear-ink)">−13.8%</text>
          <text x="150" y="154">Price change, rates 5% → 6%</text>
        </g>
      </svg>
      <p>The 30-year bond falls more than seven times as much as the 2-year bond. If rates fell from 5% to 4% instead, all four would rise.</p>
      <p>Coupons matter too. A bond that pays nothing until the end has a duration close to its maturity. Coupons hand money back sooner, so for the same maturity, a higher coupon means a lower duration.</p>`},
    {k:'Do the maths', t:'The rule of thumb', b:`
      <p><b>Price change ≈ −duration × change in rates</b></p>
      <p>A bond fund has a duration of 7. Rates rise by 1 percentage point, say from 4% to 5%:</p>
      <div class="kv kv3"><div><b>7</b><span>Duration</span></div><div><b>+1 point</b><span>Change in rates</span></div><div><b class="bad-t">≈ −7%</b><span>Price change</span></div></div>
      <p>On $10,000 in the fund, that's a fall of about $700. If rates fell by 0.5 points instead, the rule gives a rise of about 7 × 0.5 = 3.5%.</p>
      <div class="term"><span class="term-k">Key term</span><b>Percentage point:</b> the plain gap between two percentages. A move from 4% to 5% is 1 percentage point, even though 5 is 25% more than 4.</div>`},
    {k:'The limit', t:'A rough guide, not an exact answer', b:`
      <p>Duration works best for small moves, with everything else unchanged. Take the 10-year bond from the chart. Its duration is about 7.7:</p>
      <div class="split">
        <div class="col bad"><div class="col-h">Rates +1 point</div><b>Estimate ≈ −7.7%</b><p>Actual: −7.4%. It falls a little less.</p></div>
        <div class="col good"><div class="col-h">Rates −1 point</div><b>Estimate ≈ +7.7%</b><p>Actual: +8.1%. It rises a little more.</p></div>
      </div>
      <p>The real link between price and rates is a curve, not a straight line, so the gap grows with bigger moves. Duration itself also shifts as rates move and as the bond nears maturity.</p>
      <p>And market rates aren't the only thing that moves a bond's yield. If worries grow about the issuer paying, buyers want a higher yield, so the price can fall even when market rates stand still. Duration still gives a rough size for that fall, from the change in the bond's own yield.</p>
      <p>One naming note: the version of duration used here is called modified duration. Elsewhere you may also see Macaulay duration, which is the average time until the bond's payments arrive. It's a slightly bigger number (about 8.1 years for this bond).</p>`}
  ],
  qs:[
    {q:'A bond has a duration of 5. Market rates rise by 1 percentage point. Roughly what happens to its price?',
     o:['It falls about 1%','It rises about 5%','It falls about 5%','It falls about 0.5%'], a:2,
     e:'Price change ≈ −duration × change in rates = −5 × 1 = about −5%.'},
    {q:'Two bonds from the same issuer have the same coupon. One matures in 3 years, the other in 25. Market rates fall. Which price rises more?',
     o:['The 3-year bond','The 25-year bond','They rise by the same amount','Neither, because the coupons are fixed'], a:1,
     e:'The 25-year bond has a much higher duration. Its payments are further away, so a rate change moves its price more.'},
    {q:'A bond fund has a duration of 6. Market rates fall by 0.5 percentage points. Roughly what happens to its price?',
     o:['It rises about 3%','It falls about 3%','It rises about 6%','It rises about 0.5%'], a:0,
     e:'−6 × (−0.5) = +3%. Falling rates push bond prices up.'},
    {q:'Leila holds $20,000 of bonds with a duration of 8. Rates rise by 0.25 percentage points. Roughly how much do the bonds lose?',
     o:['$160','$1,600','$4,000','$400'], a:3,
     e:'8 × 0.25 = 2%, and 2% of $20,000 = $400. $1,600 forgets that rates rose by only a quarter of a point.'},
    {q:'True or false: the duration rule gives the exact price change for any size of rate move.',
     o:['True','False'], a:1,
     e:"It's an estimate that works best for small moves. For bigger moves the real price curve bends away from it, and duration itself shifts."}
  ]
};

const BONDS_CREDIT = {
  title:'Credit ratings and default', min:5,
  cards:[
    {k:'The idea', t:'Will they pay it back?', b:`
      <p class="lead">Coupons and face value are promises. Every bond carries some chance that the borrower pays late, pays less than it owes, or stops paying.</p>
      <div class="term"><span class="term-k">Key term</span><b>Credit risk:</b> the risk that a borrower doesn't make its bond payments in full and on time. Failing to pay as promised is called a default.</div>
      <div class="intro-meta"><span>4 ideas</span><span>5 questions</span><span>About 5 min</span></div>`},
    {k:'Ratings', t:'Grading the borrower', b:`
      <p>Rating agencies such as S&amp;P, Moody's and Fitch grade how likely borrowers are to pay. S&amp;P and Fitch use letters from AAA, the strongest, down to D, which means in default. Grades from AA down to CCC can also carry a plus or minus, such as BBB−. Moody's writes its scale differently (Aaa, Baa3 and so on): its Baa3 matches BBB−, the lowest investment grade.</p>
      <div class="split">
        <div class="col good"><div class="col-h">Investment grade</div><b>AAA, AA, A, BBB</b><p>Seen as more likely to pay. Lower yields.</p></div>
        <div class="col bad"><div class="col-h">High yield, or "junk"</div><b>BB, B, CCC and below</b><p>Seen as more likely to miss payments. Higher yields to make up for it.</p></div>
      </div>
      <div class="term"><span class="term-k">Key term</span><b>Credit rating:</b> an agency's grade of how likely a borrower is to pay its debts in full and on time. It's an opinion, not a guarantee, and it can be cut.</div>`},
    {k:'Do the maths', t:'The credit spread', b:`
      <p>Lenders want extra yield for extra risk. For bonds in dollars, the usual yardstick is a US government bond of the same length.</p>
      <div class="score"><div><b>4%</b><span>5-year US government bond</span></div><div><b>5.5%</b><span>Cedar Tech, rated A</span></div><div><b class="bad-t">9%</b><span>Litani Energy, rated B</span></div></div>
      <p>Cedar Tech's spread is 5.5% − 4% = 1.5 percentage points. Litani Energy's is 9% − 4% = 5 points. If the bonds cost face value, $10,000 earns $400 a year in the government bond and $550 in Cedar Tech's, as long as Cedar Tech keeps paying.</p>
      <p>If investors start to worry about Cedar Tech, its spread widens. Its yield rises and its bond price falls, even if government rates don't move.</p>
      <div class="term"><span class="term-k">Key term</span><b>Credit spread:</b> the extra yield a bond pays over a safe government bond of the same length. It's often quoted in basis points: 1.5 percentage points is 150 basis points.</div>`},
    {k:'History', t:'When a borrower stops paying', b:`
      <p>After a default, holders usually wait for a restructuring: a new deal that often pays back less, and later. The share they get back is called the recovery. If Byblos Foods defaults and holders recover 40 cents per dollar, each $1,000 bond returns $400. Until then, the bond's price mostly reflects what buyers expect to recover, and how long they expect to wait.</p>
      <p>Lebanon is a real case. On 7 March 2020 the government said it would not repay a $1.2 billion US-dollar bond due on 9 March, the country's first default. On 23 March it said it would stop paying all its dollar Eurobonds, about $30 billion, saying it needed to protect its limited foreign currency reserves.</p>
      <p>Within two weeks of the missed payment, S&amp;P and Fitch had cut Lebanon to their default grades. Years later, the debt still had not been restructured, and the bonds traded far below face value.</p>
      <div class="term"><span class="term-k">Key term</span><b>Eurobond:</b> a bond sold on international markets, often in a currency other than the issuer's own. Lebanon's were in US dollars.</div>`}
  ],
  qs:[
    {q:'Which of these S&P-style ratings is investment grade?',
     o:['BB','CCC','BBB','D'], a:2,
     e:'Investment grade runs from AAA down to the BBB group. BB and below is high yield, also called junk. D means in default.'},
    {q:"A 10-year US government bond yields 4.2%. A company's 10-year dollar bond yields 6.0%. What is the company bond's credit spread?",
     o:['10.2 percentage points','1.8 percentage points','6.0 percentage points','1.43 percentage points'], a:1,
     e:'Spread = 6.0% − 4.2% = 1.8 percentage points, or 180 basis points. 1.43 comes from dividing instead of subtracting.'},
    {q:"Investors start to worry that a company may not pay its debts. Government rates don't move. What usually happens to the company's bonds?",
     o:['Yield rises, price falls','Yield falls, price rises','Yield and price both rise','Nothing, because the coupon is fixed'], a:0,
     e:'Investors want a bigger spread for the extra risk. A higher yield on the same fixed payments means a lower price.'},
    {q:'Byblos Foods defaults. Holders end up recovering 35 cents per dollar of face value. What does someone holding five $1,000 bonds get back?',
     o:['$350','$3,250','$5,000','$1,750'], a:3,
     e:'5 × $1,000 = $5,000 of face value, and 35% of that is $1,750. $3,250 is the amount lost, not the amount recovered.'},
    {q:'Why do high-yield ("junk") bonds pay higher yields than AAA bonds?',
     o:['Investors want extra return for a higher chance of default','Their issuers are more profitable','They mature sooner','Rating agencies set their coupons'], a:0,
     e:'Lower-rated borrowers are seen as more likely to miss payments. Investors only lend to them in return for a higher yield.'}
  ]
};

const BONDS_CHECK = {
  title:'Unit check', min:4, badge:{name:'Fixed Income', icon:'shield'}, cards:[],
  qs:[
    {q:'A $1,000 bond with a 4.5% coupon has 6 yearly payments left, and the face value comes with the last one. If every payment arrives, how much does the holder still receive?',
     o:['$1,045','$1,270','$270','$6,270'], a:1,
     e:'Six coupons of $45 make $270. Add the $1,000 face value: $1,270. The face value is repaid once, at the end, not with every coupon.'},
    {q:'A 2-year bond has a $1,000 face value and a 3% coupon. Similar bonds now have a market rate of 5%. What is its price?',
     o:['$1,039.41','$960.00','$962.81','$934.24'], a:2,
     e:'$30 ÷ 1.05 = $28.57, and $1,030 ÷ 1.05^2 = $934.24. Price = $28.57 + $934.24 = $962.81. $934.24 leaves out the first coupon.'},
    {q:'Market rates fall from 6% to 4%. What happens to an existing 5-year bond with a 5% coupon?',
     o:['Its coupon falls to 4%','Its price falls, because its coupon is now above market rates','Its price rises above face value, making it a premium bond','Nothing changes until maturity'], a:2,
     e:'Its 5% coupon now beats the 4% on new bonds, so buyers pay more for it. At a 4% market rate it is worth $1,044.52, above its $1,000 face value.'},
    {q:'A $1,000 bond with a 4% coupon trades at $950. Which is true?',
     o:['Its current yield is 4%, the same as the coupon rate','Its current yield is about 4.21%, and its yield to maturity is higher still','Its current yield is about 4.21%, and its yield to maturity is lower','Its current yield is 3.8%'], a:1,
     e:'Current yield = $40 ÷ $950 = 4.21%. Bought below face value, the bond also gains $50 by maturity, so its YTM is higher than its current yield.'},
    {q:'A bond fund worth $5,000 has a duration of 12. Market rates rise by 0.75 percentage points. Roughly how much does it lose?',
     o:['$450','$45','$600','$375'], a:0,
     e:'12 × 0.75 = 9%, and 9% of $5,000 = $450. $600 forgets that the rise was less than a full point.'},
    {q:'Which of these bonds has the highest duration, if all trade at the same yield?',
     o:['A 30-year bond with an 8% coupon','A 30-year bond with a 2% coupon','A 5-year bond with a 5% coupon','A 1-year bond with a 5% coupon'], a:1,
     e:'Longer bonds usually have higher durations. Between the two 30-year bonds, the 2% coupon hands back less money early, so more of its value sits far in the future.'},
    {q:"A company bond has a duration of 5. Government rates stay put, but after a downgrade the bond's credit spread widens from 2 to 3 percentage points. Roughly what happens to its price?",
     o:['It rises about 5%','It falls about 1%',"It doesn't change, because government rates didn't move",'It falls about 5%'], a:3,
     e:"The wider spread lifts the bond's yield by 1 point. −5 × 1 = about −5%. Duration works on the bond's own yield, whatever made it move."},
    {q:'Lebanon stopped paying its dollar Eurobonds in March 2020. For years afterwards they traded far below face value. What did their price mostly reflect?',
     o:['The coupon rate printed on each bond','What buyers expected to recover in a future deal, and how long that might take','The full face value, since it was still owed','US interest rates alone'], a:1,
     e:'Once a bond is in default, the promised coupons and face value are in doubt. Its price comes down to how much holders expect to get back, and when.'}
  ]
};

const UNIT_BONDS = {id:'bonds', title:'Bonds and interest rates', level:'Beginner', lessons:[BONDS_WHAT_A_BOND, BONDS_PRESENT_VALUE, BONDS_YIELD, BONDS_DURATION, BONDS_CREDIT, BONDS_CHECK]};

/* Placement: one question per lesson, n = lesson number 1-5. Different from the lesson questions. */
const PLACEMENT_BONDS = [
  {n:1, q:'A bond has a face value of $2,000 and a 3.5% coupon, paid once a year. How much does it pay each year?',
   o:['$35','$700','$70','$2,070'], a:2,
   e:'The coupon is 3.5% of face value: 0.035 × $2,000 = $70.'},
  {n:2, q:'A bond will pay $1,040 in one year: its last $40 coupon plus its $1,000 face value. The market rate for similar bonds is 8%. What is it worth today?',
   o:['$956.80','$962.96','$1,000.00','$1,123.20'], a:1,
   e:'PV = $1,040 ÷ 1.08 = $962.96. $956.80 takes 8% off instead of dividing by 1.08.'},
  {n:3, q:'A $1,000 bond with a 6% coupon trades at $1,080. Which is true?',
   o:["It's a discount bond, so its yield to maturity is above 6%",'Its yield to maturity is 6%, because the coupon is fixed','Its current yield is 6.48%',"It's a premium bond, so its yield to maturity is below 6%"], a:3,
   e:'Above face value means a premium bond. The buyer loses $80 by maturity, so the YTM is below the 6% coupon. Current yield is $60 ÷ $1,080 = 5.56%.'},
  {n:4, q:'A bond has a duration of 4. Market rates fall by 1.5 percentage points. Roughly what happens to its price?',
   o:['It rises about 6%','It falls about 6%','It rises about 4%','It rises about 1.5%'], a:0,
   e:'−4 × (−1.5) = +6%. Falling rates push bond prices up.'},
  {n:5, q:'What are bonds rated BB or lower usually called?',
   o:['Investment grade','High yield, or junk','Government bonds','Premium bonds'], a:1,
   e:'The BBB group is the lowest investment grade. From BB down, bonds are called high yield or junk, because they pay more for a higher risk of default.'}
];

/* MATHS CHECK: every calculation and its result, for the reviewer (verified in Python).
   All bonds pay one coupon a year; prices are the present value of each payment at the market rate.
   Lesson 1, What a bond is
   - Coupon: 5% × $1,000 = $50. 5 coupons = $250. Total $250 + $1,000 = $1,250. Half-yearly: $50 ÷ 2 = $25.
   - Q1: 6% × $1,000 = $60. Q3: 3 × $40 + $1,000 = $1,120.
   Lesson 2, Present value and prices
   - $1,000 ÷ 1.05 = $952.38; check $952.38 × 1.05 = $1,000.00.
   - 1.05^3 = 1.157625; $1,000 ÷ 1.157625 = $863.84.
   - Rule of 72: 72 ÷ 7 ≈ 10 years to double; $1,000 ÷ 1.07^10 = $1,000 ÷ 1.967151 = $508.35 (about half).
   - 3-year, 5% bond, payments $50, $50, $1,050:
     at 5%: 50/1.05 = 47.62; 50/1.05^2 = 45.35; 1050/1.05^3 = 907.03; total $1,000.00.
     at 7%: 50/1.07 = 46.73; 50/1.07^2 = 43.67; 1050/1.07^3 = 857.11; total $947.51.
     at 3%: 50/1.03 = 48.54; 50/1.03^2 = 47.13; 1050/1.03^3 = 960.90; total $1,056.57.
   - Q1: $1,000 ÷ 1.04^2 = $1,000 ÷ 1.0816 = $924.56. Slips: $1,000 × 0.92 = $920; $1,000 ÷ 1.04 = $961.54; $1,000 × 1.0816 = $1,081.60.
   - Q3: 60/1.06 = 56.60; 1060/1.06^2 = 943.40; total $1,000.00.
   - Q4: $1,050 ÷ 1.08 = $972.22. Slips: $1,050 × 0.92 = $966.00; $1,050 × 1.08 = $1,134.00.
   Lesson 3, Yield to maturity
   - Current yield: $50 ÷ $947.51 = 5.277% ≈ 5.28%; $50 ÷ $1,056.57 = 4.732% ≈ 4.73%.
   - Gain to maturity: $1,000 − $947.51 = $52.49. Premium loss: $1,056.57 − $1,000 = $56.57.
   - Trial: 3-year 5% bond at 6% = 50/1.06 + 50/1.06^2 + 1050/1.06^3 = $973.27 (> $947.51); at 7% = $947.51 → YTM 7%.
     Solver: YTM of $947.51 = 7.000%; YTM of $1,056.57 = 3.000%.
   - Q1: $60 ÷ $1,200 = 5%. Slip: $1,200 × 6% / $1,000 = 7.2%.
   - Q3: $1,030 ÷ $990 − 1 = 4.04%; current yield $30 ÷ $990 = 3.03%; $1,000 ÷ $990 − 1 = 1.01%.
   - Q4: 2-year 5% bond at 5% = $1,000.00; at 4% = 50/1.04 + 1050/1.04^2 = 48.08 + 970.78 = $1,018.86 → YTM 4%.
     Current yield $50 ÷ $1,018.86 = 4.91%. Slip: $18.86 ÷ $1,000 = 1.89%.
   Lesson 4, Duration and rate risk (5% coupon bonds, priced at $1,000 at a 5% market rate)
   - Price at 6% and change: 2-year $981.67 (−1.83%); 5-year $957.88 (−4.21%); 10-year $926.40 (−7.36%); 30-year $862.35 (−13.76%).
     Shown rounded: −1.8%, −4.2%, −7.4%, −13.8%. These are exact repricings, not duration estimates.
     Ratio 13.765 ÷ 1.833 = 7.51 (13.8 ÷ 1.8 = 7.67 from the rounded labels), so "more than seven times".
   - Diagram: zero line y=26, 7px per 1%. Heights 1.8334 × 7 = 12.83; 4.2124 × 7 = 29.49; 7.3601 × 7 = 51.52; 13.7648 × 7 = 96.35.
     Bar bottoms 38.83, 55.49, 77.52, 122.35; value labels 14px below: 52.83, 69.49, 91.52, 136.35. Caption y=154 (17.65 below the lowest label).
     Bars x = 27, 97, 167, 237 (width 36, centres 45, 115, 185, 255).
   - Modified durations at 5%: 2-year 1.86; 5-year 4.33; 10-year 7.72; 30-year 15.37.
   - Rule: duration 7 × 1 point = −7%; 7% of $10,000 = $700. 7 × 0.5 = 3.5%.
   - 10-year: estimate ±7.72% ≈ ±7.7%; actual at 6% −7.36% ≈ −7.4%; actual at 4% ($1,081.11) +8.11% ≈ +8.1%.
   - Coupon effect (30-year, 5% yield): 2% coupon duration 18.77; 8% coupon 14.12. Zero-coupon 10-year: Macaulay 10, modified 9.52.
   - Percentage point: 5 ÷ 4 = 1.25, so 5% is 25% more than 4%.
   - Q1: 5 × 1 = 5%. Q3: 6 × 0.5 = 3%. Q4: 8 × 0.25 = 2%; 2% × $20,000 = $400; slips 8% = $1,600, 0.8% = $160.
   Lesson 5, Credit ratings and default
   - Spreads: 5.5 − 4 = 1.5 points = 150 basis points; 9 − 4 = 5 points.
   - $10,000 × 4% = $400; $10,000 × 5.5% = $550.
   - Recovery example: 40% × $1,000 = $400.
   - Q2: 6.0 − 4.2 = 1.8 points (180 bp); slips 6.0 + 4.2 = 10.2; 6.0 ÷ 4.2 = 1.43.
   - Q4: 5 × $1,000 = $5,000; 35% = $1,750; lost $3,250.
   - Lebanon facts (checked against news reports of March 2020): on 7 March 2020 PM Hassan Diab announced Lebanon would not pay
     the $1.2 billion Eurobond due 9 March, its first default; on 23 March 2020 the finance ministry said it would discontinue
     payments on all outstanding US-dollar Eurobonds (about $30 billion), to safeguard its limited foreign currency reserves
     (Ministry of Finance press release, 23 March 2020). S&P cut Lebanon's foreign currency rating to SD on 11 March 2020;
     Fitch cut it from C to RD on 18 March 2020 (both within two weeks of the 9 March missed payment). As of October 2026 no
     Eurobond restructuring had started and the bonds still traded far below face value.
   - Rating scales: plus/minus modifiers run from AA to CCC (S&P, Fitch); Moody's Baa3 = BBB−, the lowest investment grade.
   Unit check
   - C1: 6 × $45 = $270; + $1,000 = $1,270. Slips: $45 + $1,000 = $1,045; 6 × $1,045 = $6,270.
   - C2: 30/1.05 = 28.57; 1030/1.05^2 = 934.24; total $962.81. Slips: price at 1% (wrong direction) = 30/1.01 + 1030/1.01^2 = $1,039.41; 1000 − 2 × 20 = $960; last payment only $934.24.
   - C3: 5-year 5% bond at 4% = $1,044.52.
   - C4: $40 ÷ $950 = 4.21%; YTM above that for any maturity (e.g. 5-year 5.16%, 30-year 4.30%). Slip: 4% × 0.95 = 3.8%.
   - C5: 12 × 0.75 = 9%; 9% × $5,000 = $450. Slips: 12% = $600; 7.5% = $375; 0.9% = $45.
   - C6: modified durations at 5%: 30-year 2% coupon 18.77; 30-year 8% coupon 14.12; 5-year 4.33; 1-year 0.95.
   - C7: 5 × 1 point = 5% fall.
   Placement
   - P1: 3.5% × $2,000 = $70.
   - P2: $1,040 ÷ 1.08 = $962.96. Slips: $1,040 × 0.92 = $956.80; $1,040 × 1.08 = $1,123.20.
   - P3: $60 ÷ $1,080 = 5.56%; loss to maturity $80; YTM below 6% (5-year example 4.19%). Slip: 6% × 1.08 = 6.48%.
   - P4: 4 × 1.5 = 6%.
*/
