---
title: "TCP(Transmission Control Protocol)"
description: "TCP(Transmission Control Protocol)는 전송 계층의 연결 지향형 프로토콜로, 데이터가 순서대로 빠짐없이 도착하도록 신뢰성 있게 전달합니다."
summary: "전송 계층의 연결 지향형 프로토콜로, 데이터를 보내기 전에 상대와 먼저 연결을 맺고, 순서와 누락 여부를 확인하며 신뢰성 있게 전달합니다."
date: 2026-07-15
lastmod: 2026-07-15
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**TCP**(Transmission Control Protocol)는 {{< term "transport-layer" >}}(전송 계층)의 {{< term "connection-oriented" >}}(연결 지향형) 프로토콜로, 데이터를 보내기 전에 상대와 먼저 연결을 맺고 순서·누락 여부를 확인하며 신뢰성 있게 전달합니다.

## 자세히 알아보기

- 예문: "웹페이지를 여는 **HTTP** 통신은 대부분 **TCP** 위에서 이루어져, 데이터가 깨지거나 순서가 뒤바뀌지 않고 전달된다."
- 통신을 시작하기 전에 {{< term "3-way-handshaking" >}}(3-Way Handshaking) 과정을 거쳐 상대와 먼저 연결을 확립한 뒤 데이터를 주고받습니다.
- 패킷이 도착할 때마다 확인 응답을 주고받고, 순서가 뒤바뀌거나 누락된 패킷은 다시 요청해 정확한 순서로 재조립합니다.
- 이런 신뢰성 확보 과정 때문에 속도보다 정확성이 중요한 웹, 이메일, 파일 전송 등에서 널리 쓰이며, 빠른 속도가 더 중요한 경우에는 {{< term "udp" >}}가 대신 쓰입니다.

## 관련 용어

- {{< term "udp" >}}
- {{< term "connection-oriented" >}}
- {{< term "3-way-handshaking" >}}
