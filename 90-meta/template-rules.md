---
id: template-rules
type: meta
title: 템플릿 사용 규칙
---

# 템플릿 사용 규칙

## 기본 원칙
1. 모든 창작 문서는 반드시 해당 템플릿의 frontmatter 구조를 따른다
2. 본문 구조는 권장사항이지, 강제가 아니다. 필요에 따라 섹션을 추가/생략 가능
3. frontmatter의 `id`, `type`, `status`, `title`은 필수

## 템플릿 목록

| 템플릿 | 용도 | 저장 위치 |
|--------|------|-----------|
| world-template | 세계관 설정 | 01-canon/world/ 또는 02-candidates/world/ |
| character-template | 인물 설정 | 01-canon/characters/ 또는 02-candidates/characters/ |
| scene-template | 씬 카드 | 04-scenes/ |
| background-scene-template | 인물 배경 씬 | 04-scenes/background/characters/ |
| lore-document-template | 부속 설정 문서 | 10-lore-documents/ |
| game-concept-template | 게임 컨셉 | 20-game-adaptation/concepts/ |
| core-loop-template | 코어 루프 | 20-game-adaptation/concepts/ |
| reference-research-template | 레퍼런스 분석 | 20-game-adaptation/references/ |
| prototype-scope-template | 프로토타입 범위 | 20-game-adaptation/prototypes/ |

## status별 저장 위치 규칙
- `canon` → `01-canon/`
- `suggested`, `candidate`, `edited` → `02-candidates/`
- `raw` → `00-inbox/`
- `draft`, `reviewed` → `05-drafts/` 또는 `06-revisions/`

## 새 템플릿 추가
1. `90-meta/templates/`에 템플릿 파일 추가
2. `90-meta/schema/template-schemas/`에 검증 스키마 추가
3. 이 문서의 템플릿 목록에 추가
