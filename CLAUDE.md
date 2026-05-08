# Quillgit — Story-to-Game Creative Workspace

## 핵심 원칙
- AI는 제안자, 사용자는 확정자. AI 제안 ≠ canon.
- 미정(question, deferred) 상태는 유효한 상태. 억지로 채우지 않는다.
- 모든 창작물은 frontmatter가 있는 Markdown 파일이다.
- Git이 Source of Truth. 파일 시스템이 곧 데이터베이스.

## 상태 모델
허용 상태: `raw` → `suggested` → `candidate` → `edited` → `canon`
부가 상태: `question`, `deferred`, `deprecated`, `draft`, `reviewed`

## 폴더 규칙
- `candidates/` — 작업 중/검토 중 (status: suggested, candidate, edited, draft, reviewed)
  - `characters/`, `world/`, `relationships/`, `glossary/`, `timeline/`
  - `scenes/`, `structure/`, `writings/`, `lore/`, `notes/`
  - `game/`, `feedback/`, `validation/`
- `canon/` — 확정 (status: canon만)
  - `characters/`, `world/`, `relationships/`, `glossary/`, `timeline/`
  - `scenes/`, `structure/`, `writings/`, `lore/`
- `deprecated/` — 폐기 (되돌릴 수 없음)
- `media/` — 미디어 참고자료 (상태 흐름 밖)
  - `references/`, `generated/`, `external-links/`, `selected/`, `canon-visuals/`, `moodboards/`
- `meta/` — 프로젝트 설정 (상태 흐름 밖)
  - `context/`, `schema/`, `templates/`, `prompts/`

## 커밋 규칙
- 커밋 메시지는 **영문**으로 작성 (public 리포)
- Conventional Commits 형식: `feat:`, `fix:`, `docs:`, `refactor:` 등

## 파일 규칙
- 파일명: kebab-case (예: `merchant-lord-early.md`)
- 모든 파일에 YAML frontmatter 필수
- frontmatter 필수 필드: `id`, `type`, `status`, `title`

## 작업 시작 시
1. `meta/context/project-brief.md` 읽기
2. `meta/context/current-canon-summary.md` 읽기
3. `meta/context/sessions/` 최신 세션 요약 읽기
4. 사용자에게 이어할 작업 제안

## 작업 종료 시
1. `meta/context/sessions/`에 세션 요약 저장
2. `meta/context/working-state/` 업데이트
3. `project-brief.md` 필요 시 갱신

## 초고 작성 시 (Temporal Context Guard)
- 해당 씬의 narrative_order 이전까지의 정보만 사용
- `canon/structure/reveal-schedule.md` 반드시 확인
- `must_not_reveal` 필드 준수
- Character Knowledge State 확인

## 서브에이전트
`.claude/agents/` 디렉토리의 에이전트를 활용하세요.
특정 작업에 맞는 에이전트를 호출하면 전문적인 결과를 얻을 수 있습니다.

### 창작 에이전트
| 에이전트 | 역할 |
|---------|------|
| world-builder | 세계관 구축/제안 |
| character-builder | 인물 구축/Character Bible |
| scene-designer | 씬 설계/Scene Card |
| draft-writer | 초고 작성 (Temporal Guard 준수) |
| game-adapter | 게임화 설계 |
| inbox-distiller | Inbox 아이디어 분석/분류 |

### 검증 에이전트
| 에이전트 | 역할 |
|---------|------|
| consistency-checker | 정합성 검증 |
| temporal-guard | 시간 정보 누수 검출 |

### 평가 에이전트
| 에이전트 | 역할 |
|---------|------|
| critic | 비평가 — 서사 구조, 주제, 독창성 분석 |
| editor | 편집자 — 구조/문장 편집, before/after 수정 제안 |
| reader | 독자 — 감정 반응, 몰입도, 이해도 보고 |

## MCP 서버
이 프로젝트는 Quillgit MCP 서버에 연결됩니다.
설정 → `.claude/settings.json` 참조
