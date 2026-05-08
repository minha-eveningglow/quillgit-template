# Quillgit Story Template

A Git-based creative project template for [Quillgit](https://quillgit.com) — an AI-powered story-to-game creative workspace.

## Quick Start

```bash
# Option 1: Use GitHub's "Use this template" button above
# Option 2: Clone directly
git clone https://github.com/minha-eveningglow/quillgit-template.git my-story
cd my-story
rm -rf .git && git init
```

## Directory Structure

```
├── candidates/          # Work in progress / under review
│   ├── characters/      # Character profiles
│   ├── world/           # World-building documents
│   ├── scenes/          # Scene designs
│   ├── writings/        # Draft manuscripts
│   ├── structure/       # Plot structure, outlines
│   ├── relationships/   # Character relationships
│   ├── glossary/        # Terminology definitions
│   ├── timeline/        # Chronology entries
│   ├── lore/            # Lore documents
│   └── notes/           # Freeform notes
│
├── canon/               # Finalized creative objects
│   └── (same subdirs as candidates/)
│
├── deprecated/          # Retired objects (irreversible)
├── media/               # Media references (images, links)
│
└── meta/                # Project settings
    ├── context/         # Project brief, canon summary, session logs
    ├── schema/          # YAML schemas for frontmatter validation
    ├── templates/       # Markdown templates for each object type
    └── prompts/         # Custom AI prompts
```

## Status Flow

Every creative object follows this lifecycle:

```
raw → suggested → candidate → edited → canon
```

Additional states: `question`, `deferred`, `deprecated`, `draft`, `reviewed`

## File Format

All creative objects are Markdown files with YAML frontmatter:

```markdown
---
id: char-merchant-lord
type: character
status: candidate
title: The Merchant Lord
---

(content here)
```

## AI Agents

Pre-configured AI agents in `.claude/agents/`:

| Agent | Role |
|-------|------|
| world-builder | World-building and proposals |
| character-builder | Character creation / Character Bible |
| scene-designer | Scene design / Scene Card |
| draft-writer | Draft writing (Temporal Guard enforced) |
| game-adapter | Game adaptation design |
| consistency-checker | Consistency verification |
| temporal-guard | Temporal information leak detection |
| critic | Narrative structure and originality analysis |
| editor | Structural and line editing |
| reader | Reader perspective reactions |
| inbox-distiller | Inbox idea analysis |

## License

MIT
