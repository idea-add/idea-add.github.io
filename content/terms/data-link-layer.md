---
title: "데이터 링크 계층(Data Link Layer, 2계층)"
description: "데이터 링크 계층(Data Link Layer)은 OSI 7계층의 2단계로, MAC 주소를 이용해 같은 네트워크 안의 장비끼리 데이터를 오류 없이 주고받도록 합니다."
summary: "OSI 7계층의 2단계로, MAC 주소를 이용해 같은 네트워크(LAN) 안에 있는 장비끼리 데이터를 오류 없이 주고받을 수 있도록 관리합니다."
date: 2026-07-15
lastmod: 2026-07-15
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**데이터 링크 계층**(Data Link Layer, 2계층)은 {{< term "osi-7" >}}(OSI 7계층)의 2단계로, {{< term "mac-address" >}}(MAC 주소)를 이용해 같은 네트워크(LAN) 안에 있는 장비끼리 데이터를 오류 없이 주고받을 수 있도록 관리합니다.

## 자세히 알아보기

- 예문: "같은 사무실 안의 PC들이 서로를 인식하고 통신할 수 있는 것은 **데이터 링크 계층** 덕분이다."
- {{< term "physical-layer" >}}(물리 계층)이 전달한 신호를 데이터 단위(프레임)로 묶고, 전송 중 오류가 없는지 확인하는 역할도 함께 담당합니다.
- {{< term "switch" >}}(스위치)와 {{< term "bridge" >}}(브릿지)가 이 계층에서 동작하는 대표적인 장비로, {{< term "mac-address" >}}를 기준으로 데이터를 알맞은 장비에만 전달합니다.
- {{< term "ethernet" >}}(이더넷)은 이 계층에서 가장 널리 쓰이는 대표적인 통신 규격입니다.

## 관련 용어

- {{< term "osi-7" >}}
- {{< term "mac-address" >}}
- {{< term "switch" >}}
- {{< term "ethernet" >}}
