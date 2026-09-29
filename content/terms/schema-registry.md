---
title: "Schema Registry(스키마 레지스트리)"
description: "Schema Registry(스키마 레지스트리)는 메시지의 데이터 구조(스키마)를 중앙에서 등록하고 관리해, Producer와 Consumer가 항상 같은 형식을 이해하도록 보장해주는 시스템입니다."
summary: "Kafka 같은 메시지 시스템에서 오가는 메시지의 데이터 구조(스키마)를 중앙에서 등록하고 관리해, Producer가 보내는 메시지 형식이 바뀌어도 Consumer가 이를 알아채고 호환성을 지키며 처리할 수 있게 보장해주는 시스템입니다."
date: 2026-09-29
lastmod: 2026-09-29
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**Schema Registry**(스키마 레지스트리)는 메시지의 데이터 구조(스키마)를 중앙에서 등록하고 관리해, {{< term "producer" >}}(Producer)와 {{< term "consumer" >}}(Consumer)가 항상 같은 형식을 이해하도록 보장해주는 시스템입니다.

## 자세히 알아보기

- 예문: "Producer가 필드를 하나 추가했는데도, **Schema Registry**가 호환성을 확인해준 덕분에 기존 Consumer들이 문제없이 계속 메시지를 읽을 수 있었다."
- 여러 팀이 같은 {{< term "topic" >}}(Topic)을 주고받다 보면 데이터 구조가 제각각 바뀌기 쉬운데, Schema Registry는 어떤 구조로 메시지를 보내야 하는지 중앙에서 공식적으로 관리해 이런 혼선을 막습니다.
- 새로운 스키마를 등록하려 할 때 기존 스키마와 호환되는지 자동으로 검사해, 준비되지 않은 Consumer가 갑자기 메시지를 읽지 못하는 사고를 예방합니다.
- 스키마가 시간이 지나며 점진적으로 바뀌어가는 과정은 {{< term "schema-evolution" >}}(스키마 변경 관리)이라는 별도의 개념으로 다뤄지며, Schema Registry는 이를 안전하게 관리하는 핵심 도구입니다.

## 관련 용어

- {{< term "schema-evolution" >}}
- {{< term "kafka" >}}
