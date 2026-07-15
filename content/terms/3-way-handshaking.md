---
title: "3-Way Handshaking"
description: "3-Way Handshaking은 TCP 통신을 시작하기 전에 SYN, SYN-ACK, ACK 세 단계 메시지를 주고받아 상대와 연결을 확립하는 과정입니다."
summary: "TCP 통신을 시작하기 전에 SYN, SYN-ACK, ACK라는 세 단계의 메시지를 주고받으며 상대와 연결을 확립하는 과정으로, 이후 데이터를 신뢰성 있게 주고받을 준비를 갖춥니다."
date: 2026-07-15
lastmod: 2026-07-15
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**3-Way Handshaking**은 {{< term "tcp" >}} 통신을 시작하기 전에 SYN, SYN-ACK, ACK라는 세 단계의 메시지를 주고받으며 상대와 연결을 확립하는 과정입니다.

## 자세히 알아보기

- 예문: "브라우저가 웹서버에 접속할 때도, 실제 데이터를 주고받기 전에 **3-Way Handshaking**으로 연결을 먼저 맺는다."
- 먼저 클라이언트가 '연결하고 싶다(SYN)'는 메시지를 보내면, 서버가 '알겠다, 나도 연결하고 싶다(SYN-ACK)'로 응답하고, 클라이언트가 다시 '확인했다(ACK)'고 답하면서 연결이 완성됩니다.
- 이 과정을 통해 양쪽 모두 상대가 통신할 준비가 되어 있다는 것을 서로 확인한 뒤에 실제 데이터 전송을 시작합니다.
- {{< term "connection-oriented" >}}(연결 지향형)인 TCP가 신뢰성을 확보하는 첫 단계이며, 이 과정이 없는 {{< term "udp" >}}는 곧바로 데이터를 전송하기 시작합니다.

## 관련 용어

- {{< term "tcp" >}}
- {{< term "connection-oriented" >}}
