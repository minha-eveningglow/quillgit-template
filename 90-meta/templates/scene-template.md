---
template_id: scene-template
template_version: "1.0"
description: 씬 카드 (Scene Card) 템플릿
---

# Scene Template

씬 설계 시 아래 구조를 따른다. 초고(draft)가 아닌 설계 문서(Scene Card)이다.

## Frontmatter 구조

```yaml
---
id: scene-{slug}
type: scene
status: raw | suggested | candidate | edited | canon
title: ""
narrative_order: null
chronological_order: null
pov_character: ""
location: ""
time_in_story: ""
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
related_characters: []
related_world_rules: []
required_canon_refs: []
must_not_reveal: []
game_adaptation_hooks: []
placement_candidates: []
---
```

## 본문 구조

### 한줄 요약
이 씬을 한 문장으로.

### Start State
이 씬이 시작될 때의 상태.
- 인물 감정 상태
- 상황/환경
- 독자가 아는 정보

### End State
이 씬이 끝났을 때의 상태. Start State와 반드시 달라야 한다.
- 인물 감정 상태 변화
- 상황 변화
- 새로 드러난 정보

### Turn (전환점)
Start → End를 만드는 결정적 순간. 무엇이 바뀌는가.

### Conflict + Stakes
- **갈등**: 무엇이 부딪히는가
- **판돈**: 실패하면 무엇을 잃는가

### Scene Knowledge Boundary
```yaml
reader_knows: []
pov_character_knows: []
must_not_reveal: []
```

### 분위기/톤
이 씬의 감정 색조. 키워드 또는 짧은 설명.

### 게임화 가능성
이 씬의 갈등/선택이 게임 메카닉으로 변환될 수 있는 방향.

### 메모
자유 형식 메모.
