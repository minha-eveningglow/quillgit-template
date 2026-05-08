---
template_id: core-loop-template
template_version: "1.0"
description: Game core loop design template
---

# Core Loop Template

Used when designing the core loop (the fundamental repeating structure) of a game.

## Frontmatter Structure

```yaml
---
id: loop-{slug}
type: core_loop
status: raw | suggested | candidate | edited | canon
title: ""
game_concept_ref: ""
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

## Body Structure

### Loop Diagram
```
Action -> Outcome -> Reward/Penalty -> Decision -> Action
```

### Primary Loop
The core action the player repeats most frequently.
- **Action**: What the player does
- **Feedback**: What result comes back
- **Progression**: What accumulates

### Secondary Loop
The higher-level loop that wraps around the Primary Loop (session-level, episode-level, etc.).

### Meta Loop
Long-term progression structure (campaign, overall story level).

### Tension Curve
How tension changes as the loop repeats.

### Connection to Source Material
Which conflicts/structures from the novel map to this loop.

### Notes
Free-form.
