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
| world-template | 세계관 설정 | canon/world/ 또는 candidates/world/ |
| character-template | 인물 설정 | canon/characters/ 또는 candidates/characters/ |
| scene-template | 씬 카드 | candidates/scenes/ 또는 canon/scenes/ |
| background-scene-template | 인물 배경 씬 | candidates/scenes/background/characters/ |
| lore-document-template | 부속 설정 문서 | candidates/lore/ 또는 canon/lore/ |
| game-concept-template | 게임 컨셉 | candidates/game/concepts/ |
| core-loop-template | 코어 루프 | candidates/game/concepts/ |
| reference-research-template | 레퍼런스 분석 | candidates/game/references/ |
| prototype-scope-template | 프로토타입 범위 | candidates/game/prototypes/ |

## status별 저장 위치 규칙
- `canon` → `canon/`
- `suggested`, `candidate`, `edited` → `candidates/`
- `draft`, `reviewed` → `candidates/writings/`
- `deprecated` → `deprecated/`

## 새 템플릿 추가
1. `meta/templates/`에 템플릿 파일 추가
2. `meta/schema/template-schemas/`에 검증 스키마 추가
3. 이 문서의 템플릿 목록에 추가
