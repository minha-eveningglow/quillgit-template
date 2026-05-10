---
template_id: structure-template
template_version: "1.0"
description: Story structure unit template (volume, part, chapter, episode, arc)
---

# Structure Template

Follow the frontmatter structure below when creating a structural unit.

## Frontmatter Structure

```yaml
---
id: struct-{slug}
type: structure
status: raw | suggested | candidate | edited | canon
title: ""
structure_type: arc | volume | part | chapter | episode
order: 1
parent_id: ""
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
summary: ""
related_scenes: []
related_writings: []
related_characters: []
game_adaptation_hooks: []
---
```

## Field Guide

### structure_type
| Value | Label | Description |
|-------|-------|-------------|
| arc | 아크 | Narrative arc (e.g., Act 1, Act 2) |
| volume | 권 | Top-level physical unit (e.g., Volume 1) |
| part | 부 | Division within a volume (e.g., Part 1) |
| chapter | 장 | Division within a part (e.g., Chapter 3) |
| episode | 화 | Smallest unit (e.g., Episode 12) |

### order
Sequence number among siblings sharing the same `parent_id`. Starts at 1.

### parent_id
The `id` of the parent structure. Leave empty for top-level units.

## Body Structure

### Overview
One-sentence summary of this structural unit's role in the story.

### Key Events
- Major plot points or turning points in this unit

### Themes
- Thematic focus of this unit

### Notes
Open questions or deferred decisions about this unit.
