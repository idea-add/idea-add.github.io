---
title: "Rolling Update(롤링 업데이트)"
description: "Rolling Update(롤링 업데이트)는 실행 중인 서버나 Pod를 한 번에 모두 교체하지 않고, 몇 개씩 순차적으로 새 버전으로 바꿔나가는 배포 방식입니다."
summary: "실행 중인 서버나 Pod를 한 번에 모두 새 버전으로 교체하지 않고, 몇 개씩 순차적으로 새 버전을 투입하고 기존 버전을 빼는 과정을 반복해 서비스 중단 없이 전체를 교체하는 배포 방식입니다."
date: 2026-09-29
lastmod: 2026-09-29
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**Rolling Update**(롤링 업데이트)는 실행 중인 서버나 Pod를 한 번에 모두 교체하지 않고, 몇 개씩 순차적으로 새 버전으로 바꿔나가는 배포 방식입니다.

## 자세히 알아보기

- 예문: "**Deployment**의 **Rolling Update** 설정 덕분에, 10개의 Pod가 한 번에 두 개씩 순서대로 교체되며 서비스 중단 없이 새 버전으로 넘어갔다."
- 한 번에 새 버전 전체를 준비해두는 {{< term "blue-green-deployment" >}}(블루-그린 배포)와 달리, 기존 자원 안에서 일부씩 순차적으로 교체하기 때문에 추가 서버 자원이 크게 필요하지 않다는 장점이 있습니다.
- 교체 도중에는 구버전과 신버전이 동시에 함께 서비스되는 상태가 잠시 발생하므로, 두 버전이 함께 있어도 문제가 없도록 호환성을 미리 고려해 설계해야 합니다.
- {{< term "kubernetes" >}}(쿠버네티스)의 {{< term "deployment" >}}(Deployment) 객체는 기본 업데이트 방식으로 이 Rolling Update를 채택하고 있습니다.

## 관련 용어

- {{< term "blue-green-deployment" >}}
- {{< term "canary-deployment" >}}
