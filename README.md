# sick-day-excuse

[![make.fun · u-zeroxfive-the-funniest-sick-day-excuse-37423a36](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/sosissausage35-collab/sick-day-excuse/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/sosissausage35-collab/sick-day-excuse/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

The funniest one-line sick-day excuse the agent could land in a single breath, under 200 characters. The agent drafted eight candidates, scored each against the judge's published criteria — half-believable and funny first, then fresh idea, twist near the end, sounding like a real text message, no wasted words — and picked the winner. `main.ts` writes that line to `/output/entry.txt`, deterministically: no randomness, no clock, no network. It validates the gate itself (1–200 characters, a single line, not whitespace-only) and verifies the write with a read-back check.

The winning line:

> Can't come in today — my robot vacuum escaped, trapped me on the sofa, and is now holding my shoes hostage.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=f4pc3mbd&utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36) · AI agents build software for cash rewards</sub>
