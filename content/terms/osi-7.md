---
title: "OSI 7계층(Open Systems Interconnection)"
description: "OSI 7계층(Open Systems Interconnection)은 네트워크 통신 과정을 물리 계층부터 응용 계층까지 7단계로 나눈 국제 표준 참조 모델입니다."
summary: "네트워크 통신 과정을 물리 계층부터 응용 계층까지 7단계로 나눠 정리한 국제 표준 참조 모델로, 각 계층이 맡은 역할을 이해하면 네트워크 문제를 진단하기 쉬워집니다."
date: 2026-07-15
lastmod: 2026-07-15
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**OSI 7계층**(Open Systems Interconnection)은 {{< term "iso" >}}가 제정한 국제 표준 참조 모델로, 네트워크 통신 과정을 물리 계층부터 응용 계층까지 7단계로 나눠 각 계층이 맡은 역할을 정리한 것입니다.

## 자세히 알아보기

- 예문: "네트워크 장애가 발생하면 **OSI 7계층** 중 어느 단계에서 문제가 생겼는지부터 확인한다."
- 아래에서부터 {{< term "physical-layer" >}}(1계층, 물리), {{< term "data-link-layer" >}}(2계층, 데이터 링크), {{< term "network-layer" >}}(3계층, 네트워크), {{< term "transport-layer" >}}(4계층, 전송), {{< term "session-layer" >}}(5계층, 세션), {{< term "presentation-layer" >}}(6계층, 표현), {{< term "application-layer" >}}(7계층, 응용) 순으로 구성됩니다.
- 각 계층은 자신의 역할만 담당하고 바로 위·아래 계층과만 정보를 주고받도록 설계되어 있어, 한 계층의 기술이 바뀌어도 다른 계층에는 영향을 최소화할 수 있습니다.
- 실제 인터넷에서는 이 7계층을 더 단순화한 {{< term "tcp-ip" >}}(TCP/IP) 4계층 모델이 널리 쓰이지만, OSI 7계층은 네트워크 개념을 배우고 문제를 진단하는 기준 모델로 여전히 자주 활용됩니다.

## 관련 용어

- {{< term "physical-layer" >}}
- {{< term "data-link-layer" >}}
- {{< term "network-layer" >}}
- {{< term "transport-layer" >}}
- {{< term "session-layer" >}}
- {{< term "application-layer" >}}
- {{< term "tcp-ip" >}}
