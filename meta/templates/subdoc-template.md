---
template_id: subdoc-template
template_version: "1.0"
description: Supplementary document template. In-universe documents, author reference materials, etc.
---

# Subdoc (Supplementary Document) Template

Used for supplementary documents that support creative objects.
Can be linked to a parent object (character, world, glossary, etc.) via `parent_type` and `parent_id`.

## Frontmatter Structure

```yaml
---
id: subdoc-{slug}
type: subdoc
status: raw | suggested | candidate | edited | canon
title: ""
description: ""
parent_type: character | world | glossary | scene_design | structure | timeline_event
parent_id: ""
tags: []
related_characters: []
related_world_rules: []
---
```

## Body Structure

### Document Content
Free-form. Format varies depending on purpose.

- **author_reference**: Author reference material. Free-form.
- **in_universe**: In-universe document. Follows the writing style/format of the world.
- **wiki_draft**: Wiki-style summary.
- **game_codex**: Candidate entry for an in-game codex.

### Related Settings
World-building settings that this document references or supplements.

### Notes
Free-form.
