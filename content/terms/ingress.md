---
title: "Ingress(인그레스)"
description: "Ingress(인그레스)는 쿠버네티스 클러스터 외부의 HTTP·HTTPS 트래픽을, 도메인이나 URL 경로에 따라 알맞은 내부 서비스로 연결해주는 규칙과 관리 객체입니다."
summary: "쿠버네티스 클러스터 외부에서 들어오는 HTTP·HTTPS 트래픽을, 도메인이나 URL 경로에 따라 클러스터 내부의 알맞은 Service로 연결해주는 규칙과 이를 관리하는 객체입니다."
date: 2026-09-29
lastmod: 2026-09-29
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**Ingress**(인그레스)는 쿠버네티스 클러스터 외부의 HTTP·HTTPS 트래픽을, 도메인이나 URL 경로에 따라 알맞은 내부 서비스로 연결해주는 규칙과 관리 객체입니다.

## 자세히 알아보기

- 예문: "'api.example.com'으로 들어온 요청은 API **Service**로, 'www.example.com'으로 들어온 요청은 웹 **Service**로 연결되도록 **Ingress** 규칙을 설정했다."
- {{< term "service" >}}(Service)만으로도 클러스터 외부에 노출할 수 있지만, 여러 도메인과 경로별로 서로 다른 서비스로 트래픽을 나누고 싶을 때는 Ingress가 훨씬 유연하고 관리하기 편합니다.
- 실제 트래픽을 처리하는 것은 Ingress Controller라는 별도의 구성 요소이며, Ingress는 '어떤 규칙으로 트래픽을 나눌지'를 선언해두는 설정에 가깝습니다.
- HTTPS 인증서 적용이나 {{< term "l7" >}}(L7) 수준의 라우팅 기능까지 함께 제공하는 경우가 많아, 클러스터의 관문 역할을 하는 {{< term "gateway" >}}(게이트웨이)에 해당합니다.

## 관련 용어

- {{< term "service" >}}
- {{< term "gateway" >}}
