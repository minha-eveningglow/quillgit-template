---
template_id: character-template
template_version: "1.0"
description: Character document template (Character Bible)
---

# Character Template

Follow the frontmatter structure below when creating a new character.
Adjust depth based on Tier: Tier 1 (protagonist-level) > Tier 2 (major supporting) > Tier 3 (minor/extra).

## Frontmatter Structure

```yaml
---
id: char-{slug}
type: character
status: raw | suggested | candidate | edited | canon
title: ""
tier: 1 | 2 | 3
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
related_characters: []
related_world_rules: []
related_scenes: []
game_adaptation_hooks: []
---
```

## Body Structure

### Core Identity
- **Name**: Full name / title / nickname
- **Age**: As of the current point in the story
- **Occupation/Role**:
- **First Impression**: What other characters feel upon first meeting this character

### Desire / Need / Fear Triangle
- **Desire** (what they want): The goal they consciously pursue
- **Need** (what they need): What they truly need but are unaware of
- **Fear** (what they fear): The fundamental fear that drives this character

### Appearance
Free-form. Focus on key identifying features.

### Personality
- Core personality traits (3-5)
- Contradictions and Tensions

### Speech Pattern
- Speech characteristics (formality level, sentence endings, frequently used expressions)
- Dialogue examples (2-3 lines)
- How speech changes with emotional state

### Background
- Past history summary
- Trauma / defining experiences
- Family relationships

### Scene Behavior Rules
Behavioral patterns this character exhibits in specific situations.
```yaml
- trigger: "When threatened"
  response: ""
- trigger: "In front of someone they trust"
  response: ""
```

### Relationships
Relationships with other characters. Can also have separate documents in `canon/relationships/`.

### Arc (Required for Tier 1)
The character's transformation arc. Starting state -> Turning point -> Ending state.

### Game Adaptation Potential
What role/function could this character serve within a game.

### Open Questions
Matters not yet decided.
