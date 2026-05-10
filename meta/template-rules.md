---
id: template-rules
type: meta
title: Template Usage Rules
---

# Template Usage Rules

## Basic Principles
1. All creative documents must follow the frontmatter structure of their corresponding template
2. Body structure is a recommendation, not a requirement. Sections may be added or omitted as needed
3. The frontmatter fields `id`, `type`, `status`, and `title` are required

## Template List

| Template | Purpose | Storage Location |
|----------|---------|-----------------|
| world-template | World settings | canon/world/ or candidates/world/ |
| character-template | Character settings | canon/characters/ or candidates/characters/ |
| scene-template | Scene card | candidates/scenes/ or canon/scenes/ |
| background-scene-template | Character background scene | candidates/scenes/background/characters/ |
| subdoc-template | Supplementary document | candidates/subdocs/ or canon/subdocs/ |
| game-concept-template | Game concept | candidates/game/concepts/ |
| core-loop-template | Core loop | candidates/game/concepts/ |
| reference-research-template | Reference analysis | candidates/game/references/ |
| prototype-scope-template | Prototype scope | candidates/game/prototypes/ |

## Storage Location Rules by Status
- `canon` → `canon/`
- `suggested`, `candidate`, `edited` → `candidates/`
- `draft`, `reviewed` → `candidates/writings/`
- `deprecated` → `deprecated/`

## Adding New Templates
1. Add the template file to `meta/templates/`
2. Add a validation schema to `meta/schema/template-schemas/`
3. Add the template to the list in this document
