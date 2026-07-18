---
title: "ML-KEM(Module-Lattice-based Key-Encapsulation Mechanism)"
description: "ML-KEM(Module-Lattice-based Key-Encapsulation Mechanism)은 격자 기반 수학 문제를 이용해 설계된 양자내성 키 교환 알고리즘으로, 이전에는 Kyber라는 이름으로 불렸습니다."
summary: "격자 기반 수학 문제를 이용해 설계된 양자내성 키 교환 알고리즘으로, NIST가 PQC 표준으로 확정했으며 이전에는 Kyber라는 이름으로 불렸습니다."
date: 2026-07-18
lastmod: 2026-07-18
category: "보안"
draft: false
---

## 한눈에 보는 정의

**ML-KEM**(Module-Lattice-based Key-Encapsulation Mechanism)은 격자 기반 수학 문제를 이용해 설계된 양자내성 키 교환 알고리즘으로, {{< term "nist" >}}(NIST)가 {{< term "pqc" >}}(PQC) 표준으로 확정했으며 이전에는 Kyber라는 이름으로 불렸습니다.

## 자세히 알아보기

- 예문: "차세대 웹 보안 프로토콜은 기존 {{< term "ecdh" >}}(ECDH) 대신 **ML-KEM**을 이용해 세션 키를 안전하게 교환하는 방식을 검토하고 있다."
- {{< term "rsa" >}}(RSA)나 {{< term "dh" >}}(DH)가 기반으로 삼던 소인수분해·이산로그 문제와 달리, 격자라는 전혀 다른 수학적 구조의 어려운 문제를 기반으로 삼아 양자컴퓨터의 공격에도 안전하도록 설계되었습니다.
- 통신 양쪽이 공통의 비밀 키를 안전하게 만들어내는 목적은 기존 {{< term "dh" >}}(디피-헬만)나 {{< term "ecdh" >}}(ECDH)와 같지만, 안전성의 수학적 근거가 완전히 다릅니다.
- 표준화 과정에서 이름이 Kyber에서 ML-KEM으로 바뀌었으며, 전자서명을 담당하는 {{< term "ml-dsa" >}}(ML-DSA)와 짝을 이뤄 PQC 전환의 핵심 표준으로 자리 잡고 있습니다.

## 관련 용어

- {{< term "pqc" >}}
- {{< term "ml-dsa" >}}
- {{< term "ecdh" >}}
