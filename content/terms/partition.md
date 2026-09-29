---
title: "Partition(데이터 파티션, 토픽 분할 단위)"
description: "Partition(파티션)은 Kafka 같은 메시지 시스템에서 하나의 Topic을 여러 조각으로 나눈 단위로, 이를 통해 메시지를 여러 서버에 분산 저장하고 병렬로 처리할 수 있게 합니다."
summary: "Kafka 같은 메시지 시스템에서 하나의 Topic을 여러 조각으로 나눈 단위로, 각 Partition을 서로 다른 서버에 나눠 저장하고 여러 Consumer가 동시에 나눠 읽을 수 있게 해, 처리량을 병렬로 늘릴 수 있게 합니다."
date: 2026-09-29
lastmod: 2026-09-29
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**Partition**(파티션)은 {{< term "kafka" >}}(Kafka) 같은 메시지 시스템에서 하나의 {{< term "topic" >}}(Topic)을 여러 조각으로 나눈 단위로, 이를 통해 메시지를 여러 서버에 분산 저장하고 병렬로 처리할 수 있게 합니다.

## 자세히 알아보기

- 예문: "처리량을 늘리기 위해 Topic을 3개의 **Partition**으로 나누자, Consumer 세 대가 동시에 나눠서 읽어 처리 속도가 세 배로 늘었다."
- 하나의 Partition은 서버 한 대가 처리하지만, Topic을 여러 Partition으로 쪼개두면 각 Partition을 서로 다른 서버가 나눠 맡아 전체적으로 병렬 처리 성능을 높일 수 있습니다.
- 데이터베이스 테이블을 날짜나 지역별로 나눠 저장하는 {{< term "partitioning" >}}(파티셔닝)과 이름은 비슷하지만, Kafka의 Partition은 메시지 스트림을 병렬 처리하기 위한 분할 단위라는 점에서 목적과 동작 방식이 다릅니다.
- 각 Partition 안에서는 메시지 순서가 보장되지만, 서로 다른 Partition 사이의 순서는 보장되지 않기 때문에, 순서가 중요한 메시지는 같은 Partition으로 모이도록 설계해야 합니다.

## 관련 용어

- {{< term "topic" >}}
- {{< term "offset" >}}
