---
template_id: character-template
template_version: "1.0"
description: 인물 설정 문서 템플릿 (Character Bible)
---

# Character Template

새 인물을 작성할 때 아래 frontmatter 구조를 따른다.
Tier에 따라 깊이를 조절한다: Tier 1 (주인공급) > Tier 2 (주요 조연) > Tier 3 (단역/엑스트라).

## Frontmatter 구조

```yaml
---
id: char-{slug}
type: character
status: raw | suggested | candidate | edited | canon
title: ""
tier: 1 | 2 | 3
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
related_characters: []
related_world_rules: []
related_scenes: []
game_adaptation_hooks: []
---
```

## 본문 구조

### Core Identity
- **이름**: 풀네임 / 호칭 / 별명
- **나이**: 작중 시점 기준
- **직업/역할**:
- **첫인상**: 다른 인물이 이 인물을 처음 만나면 느끼는 것

### Desire / Need / Fear 삼각형
- **Desire** (원하는 것): 의식적으로 추구하는 목표
- **Need** (필요한 것): 정말로 필요하지만 인물 자신은 모르는 것
- **Fear** (두려워하는 것): 이 인물을 움직이는 근본적 공포

### 외모
자유 형식. 핵심 식별 특징 위주.

### 성격
- 핵심 성격 특성 (3~5가지)
- 모순과 긴장 (Contradictions and Tensions)

### Speech Pattern
- 말투 특징 (존댓말/반말, 어미, 자주 쓰는 표현)
- 대화 예시 (2~3줄)
- 감정 상태에 따른 말투 변화

### 배경
- 과거사 요약
- 트라우마 / 결정적 경험
- 가족 관계

### Scene Behavior Rules
이 인물이 특정 상황에서 보이는 행동 패턴.
```yaml
- trigger: "위협을 받을 때"
  response: ""
- trigger: "신뢰하는 사람 앞에서"
  response: ""
```

### 관계
다른 인물과의 관계. `canon/relationships/`에도 별도 문서 가능.

### Arc (Tier 1 필수)
인물의 변화 곡선. 시작 상태 → 전환점 → 끝 상태.

### 게임화 가능성
이 인물이 게임 내에서 어떤 역할/기능을 할 수 있는가.

### 열린 질문
아직 결정하지 않은 사항.
