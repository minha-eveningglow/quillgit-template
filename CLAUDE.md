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
- `00-inbox/` — 미정리 아이디어 (status: raw)
- `01-canon/` — 확정된 설정 (status: canon만)
- `02-candidates/` — 검토 후보 (candidate, suggested, edited)
- `03-structure/` — 전체 구조, reveal schedule
- `04-scenes/` — 씬 카드 (초고 아님)
- `05-drafts/` — 초고
- `06-revisions/` — 수정본
- `08-manuscript/` — 최종 원고
- `09-visual-assets/` — 시각 자료
- `10-lore-documents/` — 부속 설정 문서
- `20-game-adaptation/` — 게임화 프로젝트
- `30-feedback/` — 피드백
- `40-validation/` — 검증
- `90-meta/` — 메타 / 설정 / 컨텍스트

## 파일 규칙
- 파일명: kebab-case (예: `merchant-lord-early.md`)
- 모든 파일에 YAML frontmatter 필수
- frontmatter 필수 필드: `id`, `type`, `status`, `title`

## 작업 시작 시
1. `90-meta/context/project-brief.md` 읽기
2. `90-meta/context/current-canon-summary.md` 읽기
3. `90-meta/context/sessions/` 최신 세션 요약 읽기
4. 사용자에게 이어할 작업 제안

## 작업 종료 시
1. `90-meta/context/sessions/`에 세션 요약 저장
2. `90-meta/context/working-state/` 업데이트
3. `project-brief.md` 필요 시 갱신

## 초고 작성 시 (Temporal Context Guard)
- 해당 씬의 narrative_order 이전까지의 정보만 사용
- `03-structure/reveal-schedule.md` 반드시 확인
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
