---
title: "Offset(메시지 오프셋)"
description: "Offset(오프셋)은 Kafka의 각 Partition 안에서, 메시지마다 순서대로 매겨지는 고유한 위치 번호를 뜻합니다."
summary: "Kafka의 각 Partition 안에서, 메시지마다 순서대로 매겨지는 고유한 위치 번호를 뜻하며, Consumer는 이 번호를 기억해두어 어디까지 읽었는지 추적하고 장애 발생 시 그 지점부터 다시 이어서 읽을 수 있습니다."
date: 2026-09-29
lastmod: 2026-09-29
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**Offset**(메시지 오프셋)은 {{< term "kafka" >}}(Kafka)의 각 {{< term "partition" >}}(Partition) 안에서, 메시지마다 순서대로 매겨지는 고유한 위치 번호를 뜻합니다.

## 자세히 알아보기

- 예문: "**Consumer**가 처리 중 갑자기 멈췄지만, 마지막으로 처리한 **Offset**을 기억하고 있어 재시작 후 그 지점부터 이어서 처리할 수 있었다."
- 책의 페이지 번호처럼, Partition 안의 각 메시지에는 0부터 순서대로 번호가 매겨지며, Consumer는 자신이 어디까지 읽었는지를 이 Offset으로 기록해둡니다.
- 이 기록 덕분에 Consumer가 장애로 멈췄다가 다시 시작해도 처음부터 다시 읽지 않고, 마지막으로 처리한 Offset 바로 다음부터 이어서 읽을 수 있어 메시지를 중복 없이 안전하게 처리할 수 있습니다.
- 여러 Consumer가 팀을 이뤄 함께 읽는 {{< term "consumer-group" >}}(Consumer Group) 단위로 Offset을 관리해, 그룹 안의 어느 Consumer가 어디까지 처리했는지도 함께 추적합니다.

## 관련 용어

- {{< term "partition" >}}
- {{< term "consumer-group" >}}
