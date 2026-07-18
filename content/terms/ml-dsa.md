---
title: "ML-DSA(Module-Lattice-based Digital Signature Algorithm)"
description: "ML-DSA(Module-Lattice-based Digital Signature Algorithm)는 격자 기반 수학 문제를 이용해 설계된 양자내성 전자서명 알고리즘으로, 이전에는 Dilithium이라는 이름으로 불렸습니다."
summary: "격자 기반 수학 문제를 이용해 설계된 양자내성 전자서명 알고리즘으로, NIST가 PQC 표준으로 확정했으며 이전에는 Dilithium이라는 이름으로 불렸습니다."
date: 2026-07-18
lastmod: 2026-07-18
category: "보안"
draft: false
---

## 한눈에 보는 정의

**ML-DSA**(Module-Lattice-based Digital Signature Algorithm)는 격자 기반 수학 문제를 이용해 설계된 양자내성 전자서명 알고리즘으로, {{< term "nist" >}}(NIST)가 {{< term "pqc" >}}(PQC) 표준으로 확정했으며 이전에는 Dilithium이라는 이름으로 불렸습니다.

## 자세히 알아보기

- 예문: "소프트웨어 배포 파일에 서명할 때, 미래의 양자컴퓨터 위협에 대비해 **ML-DSA** 서명을 함께 사용하는 방안이 논의되고 있다."
- {{< term "rsa" >}}(RSA) 기반 전자서명이나 {{< term "kcdsa" >}}(KCDSA) 같은 기존 서명 알고리즘과 목적은 같지만(서명자 확인, 위변조 방지), 양자컴퓨터에도 안전한 격자 기반 수학 문제를 근거로 삼는다는 점이 다릅니다.
- 키 교환을 담당하는 {{< term "ml-kem" >}}(ML-KEM)과 함께, {{< term "nist" >}}가 확정한 양자내성암호 표준의 두 축을 이룹니다.
- 기존 RSA 서명보다 서명 값의 크기가 커지는 경우가 많아, 저장 공간과 전송 효율을 고려한 실무 적용 방안도 함께 연구되고 있습니다.

## 관련 용어

- {{< term "pqc" >}}
- {{< term "ml-kem" >}}
- {{< term "kcdsa" >}}
