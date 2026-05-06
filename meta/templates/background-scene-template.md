---
template_id: background-scene-template
template_version: "1.0"
description: 인물 배경 씬 템플릿. 본편에 포함되지 않는 인물 과거/비하인드.
---

# Background Scene Template

인물의 과거, 비하인드 스토리를 다루는 씬. 본편(narrative_order)에 포함되지 않으며,
인물 이해를 위한 작가용 참고 자료이다.

## Frontmatter 구조

```yaml
---
id: bg-{character-slug}-{slug}
type: background_scene
status: raw | suggested | candidate | edited | canon
title: ""
character: ""
time_in_story: ""
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
related_characters: []
related_world_rules: []
purpose: ""
---
```

## 본문 구조

### 상황
언제, 어디서, 무엇이 벌어졌는가.

### 핵심 순간
이 배경 씬에서 가장 중요한 순간.

### 인물에 미친 영향
이 경험이 인물의 현재(본편 시점) 행동/성격에 어떤 영향을 주는가.

### 본편과의 연결
본편의 어떤 씬/행동과 연결되는가. 참조용.

### 메모
자유 형식.
