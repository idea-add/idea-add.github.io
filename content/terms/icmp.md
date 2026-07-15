---
title: "ICMP(Internet Control Message Protocol)"
description: "ICMP(Internet Control Message Protocol)는 네트워크 상태를 점검하고 오류를 알리기 위해 쓰이는 프로토콜로, ping 명령어의 동작 원리로 잘 알려져 있습니다."
summary: "네트워크 상태를 점검하고 전달 중 발생한 오류를 알리기 위해 쓰이는 프로토콜로, 흔히 사용하는 ping 명령어가 바로 이 프로토콜을 이용해 동작합니다."
date: 2026-07-15
lastmod: 2026-07-15
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**ICMP**(Internet Control Message Protocol)는 {{< term "network-layer" >}}(네트워크 계층)에서 네트워크 상태를 점검하고, 패킷 전달 중 발생한 오류를 알리기 위해 쓰이는 프로토콜입니다.

## 자세히 알아보기

- 예문: "**ICMP**를 이용하는 ping 명령어로 상대 서버가 응답하는지 간단히 확인할 수 있다."
- 실제 데이터를 전달하는 {{< term "tcp" >}}, {{< term "udp" >}}와 달리, ICMP는 네트워크 상태를 확인하거나 목적지에 도달하지 못했다는 사실을 알리는 등 제어·진단 목적으로 쓰입니다.
- ping 명령어는 ICMP의 '에코 요청' 메시지를 상대에게 보내고, 돌아오는 '에코 응답'을 통해 연결 상태와 응답 속도를 확인하는 방식으로 동작합니다.
- 네트워크 경로 추적 도구(traceroute)도 ICMP 메시지를 활용해, 데이터가 목적지까지 거쳐 가는 중간 경유지들을 하나씩 확인합니다.

## 관련 용어

- {{< term "network-layer" >}}
- {{< term "ip" >}}
