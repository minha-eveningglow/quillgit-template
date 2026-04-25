---
template_id: reference-research-template
template_version: "1.0"
description: 레퍼런스 게임/작품 분석 템플릿
---

# Reference Research Template

게임화를 위해 참고할 기존 게임/작품을 분석할 때 사용.
차용(Borrow)과 복사(Copy)를 명확히 구분한다.

## Frontmatter 구조

```yaml
---
id: ref-{slug}
type: reference_research
status: raw | suggested | candidate | edited | canon
title: ""
source_title: ""
source_type: board_game | video_game | trpg | novel | film | other
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
game_concept_ref: ""
---
```

## 본문 구조

### 기본 정보
- **제목**:
- **장르**:
- **플레이 인원/시간**:
- **핵심 메카닉**:

### 우리 프로젝트와의 연결
이 레퍼런스가 우리 게임에 왜 관련 있는가.

### 차용 가능 요소 (Borrowable)
가져올 수 있는 메카닉, 구조, 아이디어. 반드시 transformation 포함.
```yaml
- element: ""
  original_context: ""
  our_transformation: ""
  risk: low | medium | high
```

### 차용 불가 요소
가져오면 안 되는 것과 그 이유.

### 핵심 인사이트
이 레퍼런스에서 배울 수 있는 설계 원칙.

### 메모
자유 형식.
