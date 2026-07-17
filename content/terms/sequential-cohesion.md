---
title: "순차적 응집도(Sequential Cohesion)"
description: "순차적 응집도(Sequential Cohesion)는 한 요소의 출력 결과가 다음 요소의 입력으로 바로 이어지는 순서로 구성된 모듈의 응집 방식입니다."
summary: "모듈 안의 한 처리 단계에서 나온 출력 결과가 다음 처리 단계의 입력으로 바로 이어지는, 순서 있는 흐름으로 구성된 응집 방식입니다."
date: 2026-07-17
lastmod: 2026-07-17
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**순차적 응집도**(Sequential Cohesion)는 모듈 안에서 한 처리 단계의 출력 결과가 다음 처리 단계의 입력으로 바로 이어지는, 순서 있는 흐름으로 구성된 응집 방식입니다.

## 자세히 알아보기

- 예문: "파일을 읽고, 그 데이터를 가공한 뒤, 가공된 결과를 저장하는 세 단계가 순서대로 이어진 모듈은 **순차적 응집도**를 갖는다."
- {{< term "functional-cohesion" >}}(기능적 응집도)만큼 강하지는 않지만, 각 단계가 데이터 흐름으로 자연스럽게 연결되어 있어 비교적 응집도가 높은 편에 속합니다.
- 각 처리 단계가 서로 밀접하게 연결되어 있어, 코드의 흐름을 이해하기가 비교적 수월합니다.
- {{< term "communicational-cohesion" >}}(교환적 응집도)보다는 응집도가 높은 형태로 평가됩니다.

## 관련 용어

- {{< term "functional-cohesion" >}}
- {{< term "communicational-cohesion" >}}
