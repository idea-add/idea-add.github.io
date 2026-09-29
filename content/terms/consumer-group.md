---
title: "Consumer Group(소비자 그룹)"
description: "Consumer Group(소비자 그룹)은 여러 Consumer를 하나의 그룹으로 묶어, 같은 Topic의 메시지를 중복 없이 나눠 처리할 수 있게 해주는 단위입니다."
summary: "여러 Consumer를 하나의 그룹으로 묶어, 같은 Topic의 여러 Partition을 그룹 안의 Consumer들이 서로 겹치지 않게 나눠 맡아 처리할 수 있게 해주는 단위로, 처리량을 병렬로 늘리는 데 활용됩니다."
date: 2026-09-29
lastmod: 2026-09-29
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**Consumer Group**(소비자 그룹)은 여러 {{< term "consumer" >}}(Consumer)를 하나의 그룹으로 묶어, 같은 {{< term "topic" >}}(Topic)의 메시지를 중복 없이 나눠 처리할 수 있게 해주는 단위입니다.

## 자세히 알아보기

- 예문: "처리 속도를 높이기 위해 **Consumer** 세 대를 하나의 **Consumer Group**으로 묶었더니, 각자 서로 다른 Partition을 자동으로 나눠 맡아 처리했다."
- 같은 Consumer Group에 속한 Consumer들은 같은 메시지를 중복해서 처리하지 않도록 서로 다른 {{< term "partition" >}}(Partition)을 나눠 맡으며, 그룹 안의 Consumer 수가 늘어나면 처리량도 함께 늘어납니다.
- 반대로 서로 다른 Consumer Group끼리는 완전히 독립적으로 동작해, 같은 Topic의 메시지를 각 그룹이 각자 처음부터 끝까지 모두 읽을 수 있습니다.
- 예를 들어 '통계 시스템'과 '알림 시스템'을 서로 다른 Consumer Group으로 두면, 같은 이벤트를 두 시스템이 각자 독립적으로 놓치지 않고 모두 받아볼 수 있습니다.

## 관련 용어

- {{< term "consumer" >}}
- {{< term "partition" >}}
