---
title: "SPIFFE/SPIRE(서비스 신원 표준·구현체)"
description: "SPIFFE는 서비스에 안전한 신원을 부여하는 개방형 표준이고, SPIRE는 그 표준을 실제로 구현한 도구입니다. 두 용어의 관계를 정리했습니다."
summary: "마이크로서비스마다 위조 불가능한 신원을 부여하는 업계 표준(SPIFFE)과, 그 표준을 실제로 구현한 소프트웨어(SPIRE)를 함께 가리키는 용어입니다."
date: 2026-07-10
lastmod: 2026-07-10
category: "보안·인프라"
draft: false
---

## 한눈에 보는 정의

**SPIFFE(Secure Production Identity Framework For Everyone)**는 서버나 서비스마다 안전하고 위조하기 어려운 '신원(ID)'을 부여하기 위한 개방형 표준이고, **SPIRE**는 이 SPIFFE 표준을 실제로 구현한 오픈소스 소프트웨어입니다.

## 자세히 알아보기

- 사람에게 주민등록증을 발급하듯, {{< term "kubernetes" >}}나 {{< term "service-mesh" >}} 환경의 각 서비스에 암호학적으로 검증 가능한 신원을 자동으로 발급·갱신해줍니다.
- 서비스 간 통신 시 "너 정말 그 서비스가 맞아?"를 확인할 수 있게 해줘서, {{< term "zero-trust" >}} 아키텍처를 구현하는 핵심 요소로 쓰입니다.

### Q. SPIFFE와 SPIRE는 어떻게 다른가요?

**SPIFFE**는 '이렇게 신원을 만들고 확인하자'는 규칙(표준)이고, **SPIRE**는 그 규칙을 실제로 동작하게 만든 소프트웨어(구현체)입니다. 표준과 그 표준을 따르는 제품의 관계라고 이해하면 됩니다.

## 관련 용어

- {{< term "service-mesh" >}}
- {{< term "zero-trust" >}}
