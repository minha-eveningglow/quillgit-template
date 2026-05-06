---
template_id: world-template
template_version: "1.0"
description: 세계관 설정 문서 템플릿
---

# World Template

새 세계관 요소를 작성할 때 아래 frontmatter 구조를 따른다.

## Frontmatter 구조

```yaml
---
id: world-{slug}
type: world_rule | world_setting | world_system | world_geography | world_culture
status: raw | suggested | candidate | edited | canon
title: ""
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
related_characters: []
related_scenes: []
reality_distance: low | medium | high | extreme
time_period: ""
speculative_elements: []
game_adaptation_hooks: []
---
```

## 본문 구조

### 개요
한두 문장으로 이 세계관 요소를 요약.

### 핵심 규칙
- 이 세계에서 무엇이 가능하고 불가능한가
- 현실과 다른 점은 무엇인가

### 세부 설정
자유 형식으로 상세 기술.

### 독자가 배워야 할 것
이 설정을 이해하기 위해 독자가 알아야 하는 핵심 개념.

### 게임화 가능성
이 설정이 게임 시스템으로 변환될 수 있는 방향.

### 열린 질문
아직 결정하지 않은 사항. `question` 또는 `deferred` 상태로 기록.
