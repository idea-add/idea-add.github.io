---
title: "HTTP(HyperText Transfer Protocol)"
description: "HTTP(HyperText Transfer Protocol)는 웹브라우저와 웹서버가 웹페이지 데이터를 주고받을 때 사용하는 응용 계층 프로토콜입니다."
summary: "웹브라우저와 웹서버가 웹페이지, 이미지 같은 데이터를 요청하고 응답받을 때 사용하는 응용 계층 프로토콜로, 오늘날 웹의 가장 기본적인 통신 규칙입니다."
date: 2026-07-15
lastmod: 2026-07-15
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**HTTP**(HyperText Transfer Protocol)는 웹브라우저와 웹서버가 웹페이지, 이미지 같은 데이터를 요청(Request)하고 응답(Response)받을 때 사용하는 응용 계층 프로토콜입니다.

## 자세히 알아보기

- 예문: "주소창에 웹사이트 주소를 입력하면, 브라우저는 **HTTP** 요청을 서버로 보내고 그 응답으로 웹페이지를 받아 화면에 표시한다."
- 실제 데이터 전달은 {{< term "tcp-ip" >}}(TCP/IP), 그중에서도 신뢰성 있는 전달을 보장하는 {{< term "tcp" >}}(TCP) 위에서 이루어집니다.
- 통신 내용이 암호화되지 않는 HTTP의 한계를 보완해, {{< term "tls" >}}로 암호화한 버전을 HTTPS라고 부르며 오늘날 대부분의 웹사이트가 이 방식을 사용합니다.
- 요청마다 이전 요청을 기억하지 않는 '무상태(Stateless)' 방식이 기본이라, 로그인 상태 유지 같은 기능은 쿠키나 별도의 인증 토큰({{< term "jwt-oauth2" >}} 등)을 통해 구현합니다.

## 관련 용어

- {{< term "tcp-ip" >}}
- {{< term "tls" >}}
