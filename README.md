# Bullpen

Learn investing in short lessons, then compete in a paper-trading season ranked on skill.

**Try the prototype:** https://bullpenllc.github.io/bullpen/prototype/ (works on phones; updates a minute or two after each merge into `main`).

- `prototype/index.html`: the clickable demo. Open it in any browser.
- `CLAUDE.md`: the project brief and settled decisions. Claude Code reads it automatically.
- `docs/ROADMAP.md`: where we are and what's next.
- `docs/how-we-work.md`: how we both work on this repo without conflicts.
- `docs/review-brief.md`: a prompt for asking Claude Code to review the prototype.

## Start here (new machine, or Alex's first time)
1. **Get write access.** The repo owner adds your GitHub account under Settings → Collaborators. Accept the invite from your email. Without this you can read and clone, but pushing fails with a 403 error.
2. **Don't work from an old copy.** Any earlier zip or downloaded folder of the prototype is out of date and isn't connected to GitHub. Leave it alone and clone fresh: in Claude Code, say "Clone https://github.com/BullpenLLC/bullpen into my Desktop folder".
3. **Open the cloned `bullpen` folder in Claude Code.** It reads `CLAUDE.md`, so it starts with the full context and decisions.
4. **Before every task:** "Switch to main and pull the latest." Then make a branch for the task, as in `docs/how-we-work.md`.
5. **Test before merging.** Whatever lands in `main` goes live on the prototype link within a couple of minutes.
