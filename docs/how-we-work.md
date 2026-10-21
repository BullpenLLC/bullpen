# How we work on Bullpen together

Two founders, two PCs, one GitHub repo. Each of us has a full copy of the project on our own computer. GitHub is the shared copy everyone syncs through. These rules keep the two copies from stepping on each other.

## The one rule

**Nobody works directly on `main`.** `main` is the version that works. Every change happens on its own branch, then gets merged into `main` after the other founder has looked at it.

## One-time setup

1. Both of us make a GitHub account (free).
2. The repo owner creates a **private** repo called `bullpen` and adds the other founder: repo page → Settings → Collaborators → Add people.
3. Turn on branch protection: Settings → Branches → Add rule for `main` → tick "Require a pull request before merging". This makes the one rule automatic.
4. Each of us copies the repo to our PC once ("clone"). Easiest ways:
   - In Claude Code, say: "Clone github.com/OWNER/bullpen into my Desktop folder."
   - Or install GitHub Desktop and use File → Clone repository.
5. Open the folder in Claude Code. It reads `CLAUDE.md` automatically, so Claude starts with the full project context.

## The daily loop

Every task, big or small, goes through the same six steps. You can ask Claude Code to do each one in plain words.

1. **Get the latest.** Switch to `main` and pull. ("Switch to main and pull the latest.")
2. **Make a branch for the task.** Name it after the task, e.g. `lesson/index-funds` or `fix/hearts-reset`. ("Make a new branch called lesson/index-funds.")
3. **Work and commit in small steps.** One commit per finished piece, with a message that says what changed. ("Commit this with a clear message.")
4. **Push the branch to GitHub.** ("Push this branch.")
5. **Open a pull request (PR)** on GitHub from your branch into `main`. Write 2-3 lines on what it does and how to check it.
6. **The other founder reviews and merges.** They look at the changes, try the prototype, comment or approve, then press "Merge". Delete the branch afterwards.

## Keeping it from getting messy

- **Say what you're working on before you start.** A quick message ("I'm on the Index funds lesson") stops two people editing the same thing.
- **Split by area.** Example: one founder owns lesson content, the other owns the trading and league screens. Swap when you like, just say so.
- **Watch the single-file prototype.** Right now almost everything lives in `prototype/index.html`. Two people editing it at the same time is the most likely source of conflicts, so take turns on it until the real app is split into many files.
- **Keep branches short.** Merge within a day or two. Long-running branches drift away from `main` and get painful to merge.
- **Pull `main` into your branch if it has moved** while you were working. ("Bring the latest main into my branch.")
- **Never force-push and never rewrite `main`.**
- **Secrets never go in the repo.** API keys and passwords live in a `.env` file, which is already ignored by Git.

## When Git says there's a conflict

A conflict means both of us changed the same lines. Nothing is lost. Ask Claude Code: "There's a merge conflict, show me both versions and help me pick." Keep the right lines, test the prototype, commit. If unsure, ask the other founder before choosing.

## Already set up in the repo

- `.gitattributes` keeps line endings consistent between Windows, Mac and Linux, and marks PDFs and images as binary so Git never corrupts them.
- `.gitignore` keeps junk files and secrets out.
- `CLAUDE.md` holds the project brief, settled decisions and rules. When we decide something new, we add it there in the same PR, so both of our Claudes always know it.

## Content rules (short version)

- Lesson text is always our own words. We link to Investopedia for "go deeper" reading but never copy its text.
- Check every number and every right answer.
- Nothing in the app tells a user to buy, sell or hold a real asset.
