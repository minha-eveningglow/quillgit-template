---
template_id: lore-document-template
template_version: "1.0"
description: 부속 설정 문서(Lore Document) 템플릿. 작중 문서, 작가 참고 자료 등.
---

# Lore Document Template

세계관 내 존재하는 문서(계약서, 법률, 보고서, 뉴스 등) 또는
작가 참고용 설정 자료를 작성할 때 사용.

## Frontmatter 구조

```yaml
---
id: lore-{slug}
type: lore_document
subtype: author_reference | in_universe_contract | in_universe_law | in_universe_report | in_universe_news | wiki_draft | game_codex_candidate
status: raw | suggested | candidate | edited | canon
title: ""
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
related_characters: []
related_world_rules: []
related_scenes: []
in_universe_date: ""
---
```

## 본문 구조

### 문서 내용
자유 형식. subtype에 따라 형식이 달라진다.

- **author_reference**: 작가용 참고 자료. 자유 형식.
- **in_universe_***: 작중 문서. 해당 세계관의 문체/형식을 따른다.
- **wiki_draft**: 위키 스타일 정리.
- **game_codex_candidate**: 게임 내 코덱스 후보.

### 관련 설정
이 문서가 참조하거나 보강하는 세계관 설정.

### 메모
자유 형식.
