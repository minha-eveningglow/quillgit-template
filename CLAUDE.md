# Quillgit — Story-to-Game Creative Workspace

## Core Principles
- AI suggests, the user decides. AI suggestions ≠ canon.
- Undecided states (question, deferred) are valid. Don't force a decision.
- Every creative object is a Markdown file with YAML frontmatter.
- Git is the Source of Truth. The filesystem is the database.

## Status Model
Primary: `raw` → `suggested` → `candidate` → `edited` → `canon`
Secondary: `question`, `deferred`, `deprecated`, `draft`, `reviewed`

## Directory Structure
- `candidates/` — Work in progress / under review (status: suggested, candidate, edited, draft, reviewed)
  - `characters/`, `world/`, `relationships/`, `glossary/`, `timeline/`
  - `scenes/`, `structure/`, `writings/`, `lore/`, `notes/`
  - `game/`, `feedback/`, `validation/`
- `canon/` — Finalized (status: canon only)
  - `characters/`, `world/`, `relationships/`, `glossary/`, `timeline/`
  - `scenes/`, `structure/`, `writings/`, `lore/`
- `deprecated/` — Retired (irreversible)
- `media/` — Media references (outside status flow)
  - `references/`, `generated/`, `external-links/`, `selected/`, `canon-visuals/`, `moodboards/`
- `meta/` — Project settings (outside status flow)
  - `context/`, `schema/`, `templates/`, `prompts/`

## Commit Rules
- Commit messages must be in **English** (public repo)
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, etc.

## File Rules
- Filenames: kebab-case (e.g., `merchant-lord-early.md`)
- All files must have YAML frontmatter
- Required frontmatter fields: `id`, `type`, `status`, `title`

## Session Start
1. Read `meta/context/project-brief.md`
2. Read `meta/context/current-canon-summary.md`
3. Read latest session summary in `meta/context/sessions/`
4. Suggest next tasks to the user

## Session End
1. Save session summary to `meta/context/sessions/`
2. Update `meta/context/working-state/`
3. Update `project-brief.md` if needed

## Writing Drafts (Temporal Context Guard)
- Use only information up to the current scene's narrative_order
- Always check `canon/structure/reveal-schedule.md`
- Respect `must_not_reveal` fields
- Verify Character Knowledge State

## Sub-agents
Use agents defined in `.claude/agents/` for specialized tasks.

### Creative Agents
| Agent | Role |
|-------|------|
| world-builder | World-building and proposals |
| character-builder | Character creation / Character Bible |
| scene-designer | Scene design / Scene Card |
| draft-writer | Draft writing (Temporal Guard enforced) |
| game-adapter | Game adaptation design |
| inbox-distiller | Inbox idea analysis and classification |

### Validation Agents
| Agent | Role |
|-------|------|
| consistency-checker | Consistency verification |
| temporal-guard | Temporal information leak detection |

### Review Agents
| Agent | Role |
|-------|------|
| critic | Narrative structure, theme, originality analysis |
| editor | Structural / line editing, before/after suggestions |
| reader | Reader perspective — emotional response, immersion, comprehension |

## MCP Server
This project connects to the Quillgit MCP server.
See `.claude/settings.json` for configuration.
