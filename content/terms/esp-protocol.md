---
title: "암호화(ESP) 프로토콜"
description: "ESP(Encapsulating Security Payload)는 IPSec을 구성하는 프로토콜 중 하나로, 데이터 자체를 암호화해 중간에서 내용을 들여다볼 수 없도록 기밀성을 보장합니다."
summary: "IPSec을 구성하는 프로토콜 중 하나로, 데이터 자체를 암호화해 통신 중간에서 누군가 가로채더라도 내용을 알아볼 수 없도록 기밀성을 보장합니다."
date: 2026-07-17
lastmod: 2026-07-17
category: "보안"
draft: false
---

## 한눈에 보는 정의

**ESP**(Encapsulating Security Payload, 암호화 페이로드)는 {{< term "ipsec" >}}(IPSec)을 구성하는 프로토콜 중 하나로, 데이터 자체를 암호화해 통신 중간에서 누군가 가로채더라도 내용을 알아볼 수 없도록 기밀성을 보장합니다.

## 자세히 알아보기

- 예문: "지사와 본사 사이의 민감한 내부 데이터를 주고받을 때는 **ESP**로 암호화해 통신 내용을 보호한다."
- 위변조 여부만 확인하는 {{< term "ah-protocol" >}}(AH)와 달리, ESP는 데이터 내용 자체를 암호화한다는 점에서 기밀성 확보에 초점을 맞춘 프로토콜입니다.
- 필요에 따라 인증 기능도 함께 제공할 수 있어, 실무에서는 AH 없이 ESP만으로 인증과 암호화를 동시에 처리하는 경우도 많습니다.
- 암호화에 사용할 키는 {{< term "ike-protocol" >}}(IKE) 프로토콜을 통해 통신 양쪽이 안전하게 미리 교환해둡니다.

## 관련 용어

- {{< term "ipsec" >}}
- {{< term "ah-protocol" >}}
- {{< term "ike-protocol" >}}
