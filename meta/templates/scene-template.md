---
template_id: scene-template
template_version: "1.0"
description: Scene Card template
---

# Scene Template

Follow the structure below when designing a scene. This is a design document (Scene Card), not a draft.

## Frontmatter Structure

```yaml
---
id: scene-{slug}
type: scene
status: raw | suggested | candidate | edited | canon
title: ""
narrative_order: null
chronological_order: null
pov_character: ""
location: ""
time_in_story: ""
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
related_characters: []
related_world_rules: []
required_canon_refs: []
must_not_reveal: []
game_adaptation_hooks: []
placement_candidates: []
---
```

## Body Structure

### One-Line Summary
This scene in one sentence.

### Start State
The state at the beginning of this scene.
- Character emotional state
- Situation/environment
- Information the reader knows

### End State
The state at the end of this scene. Must differ from Start State.
- Change in character emotional state
- Change in situation
- Newly revealed information

### Turn (Turning Point)
The decisive moment that transforms Start into End. What changes.

### Conflict + Stakes
- **Conflict**: What forces collide
- **Stakes**: What is lost if they fail

### Scene Knowledge Boundary
```yaml
reader_knows: []
pov_character_knows: []
must_not_reveal: []
```

### Mood/Tone
The emotional color of this scene. Keywords or brief description.

### Game Adaptation Potential
How the conflict/choices in this scene could be converted into game mechanics.

### Notes
Free-form notes.
