---
template_id: core-loop-template
template_version: "1.0"
description: 게임 코어 루프 설계 템플릿
---

# Core Loop Template

게임의 핵심 반복 구조(Core Loop)를 설계할 때 사용.

## Frontmatter 구조

```yaml
---
id: loop-{slug}
type: core_loop
status: raw | suggested | candidate | edited | canon
title: ""
game_concept_ref: ""
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

## 본문 구조

### 루프 다이어그램
```
행동 → 결과 → 보상/벌칙 → 의사결정 → 행동
```

### Primary Loop
플레이어가 가장 자주 반복하는 핵심 행위.
- **행동**: 무엇을 하는가
- **피드백**: 어떤 결과가 돌아오는가
- **진행**: 무엇이 누적되는가

### Secondary Loop
Primary Loop를 감싸는 상위 루프 (세션 단위, 에피소드 단위 등).

### Meta Loop
장기적 진행 구조 (캠페인, 전체 스토리 단위).

### 텐션 곡선
루프가 반복되면서 긴장감이 어떻게 변화하는가.

### 원작 연결
소설의 어떤 갈등/구조가 이 루프에 매핑되는가.

### 메모
자유 형식.
