---
template_id: lore-document-template
template_version: "1.0"
description: Supplementary lore document template. In-universe documents, author reference materials, etc.
---

# Lore Document Template

Used when writing documents that exist within the world (contracts, laws, reports, news, etc.)
or author reference materials for world-building.

## Frontmatter Structure

```yaml
---
id: lore-{slug}
type: lore_document
subtype: author_reference | in_universe_contract | in_universe_law | in_universe_report | in_universe_news | wiki_draft | game_codex_candidate
status: raw | suggested | candidate | edited | canon
title: ""
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
related_characters: []
related_world_rules: []
related_scenes: []
in_universe_date: ""
---
```

## Body Structure

### Document Content
Free-form. Format varies depending on subtype.

- **author_reference**: Author reference material. Free-form.
- **in_universe_***: In-universe document. Follows the writing style/format of the world.
- **wiki_draft**: Wiki-style summary.
- **game_codex_candidate**: Candidate entry for an in-game codex.

### Related Settings
World-building settings that this document references or supplements.

### Notes
Free-form.
