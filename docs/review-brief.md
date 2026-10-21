# First job for Claude Code: review the prototype

Paste this into Claude Code after opening the folder:

> Read CLAUDE.md, then open prototype/index.html and review it. Give me:
> 1. Bugs or broken flows you can find (play the lesson start to finish, run out of lives, leave mid-lesson, restart the demo).
> 2. Any wrong maths or wrong answers in the lesson content.
> 3. What is fake that would need a real backend (accounts, leagues, XP, prices, trading).
> 4. A suggested stack for turning this into a real app, with the trade-offs in plain English.
> 5. A build plan in small steps, smallest useful version first.
> Don't change any files yet.

## Things worth checking closely
- The season score (return / swings) is basically a Sharpe ratio with no risk-free rate. Is that the right call, and how do you stop someone gaming it by barely trading?
- Accuracy is worked out as questions / (questions + mistakes). Check that's what we want.
- The leaderboard numbers for Lebanon and Global are hard-coded. A real version needs ranking that scales.
- "Orders fill at the next market price" needs a real-time or delayed price feed. That's the biggest cost and legal question.
