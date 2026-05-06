---
template_id: prototype-scope-template
template_version: "1.0"
description: 프로토타입 범위 정의 템플릿
---

# Prototype Scope Template

게임 프로토타입의 범위를 정의할 때 사용.
검증하려는 가설을 명확히 하고, 최소한으로 만든다.

## Frontmatter 구조

```yaml
---
id: proto-{slug}
type: prototype_scope
status: raw | suggested | candidate | edited | canon
title: ""
game_concept_ref: ""
core_loop_ref: ""
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

## 본문 구조

### 검증 가설
이 프로토타입으로 확인하려는 것. "~하면 ~할 것이다" 형식.

### 포함 요소
프로토타입에 반드시 들어가야 하는 것.
- [ ] 요소 1
- [ ] 요소 2

### 제외 요소
이번 프로토타입에서는 빠지는 것. 의도적으로 제외한 이유 포함.

### 성공 기준
이 프로토타입이 "성공"이라고 판단할 수 있는 기준.

### 제작 범위
- **예상 소요 시간**:
- **필요 자원**:
- **형태**: 종이 프로토타입 | 디지털 | 하이브리드

### 테스트 계획
누구에게, 어떻게 테스트할 것인가.

### 메모
자유 형식.
