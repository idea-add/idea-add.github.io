---
title: "REST(Representational State Transfer)"
description: "REST(Representational State Transfer)는 HTTP 프로토콜의 특징을 활용해 웹 API를 설계하는 대표적인 방식으로, 자원을 URL로 표현하고 행위를 HTTP 메서드로 나타냅니다."
summary: "HTTP 프로토콜의 특징을 그대로 활용해 웹 API를 설계하는 대표적인 방식으로, 데이터(자원)를 URL로 표현하고 그에 대한 행위를 HTTP 메서드(GET, POST 등)로 나타냅니다."
date: 2026-07-15
lastmod: 2026-07-15
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**REST**(Representational State Transfer)는 {{< term "http" >}}(HTTP) 프로토콜의 특징을 그대로 활용해 웹 {{< term "api" >}}(API)를 설계하는 대표적인 방식으로, 데이터(자원)를 URL로 표현하고 그에 대한 행위를 HTTP 메서드로 나타냅니다.

## 자세히 알아보기

- 예문: "`GET /users/1`로 특정 사용자 정보를 조회하는 것이 **REST** 방식 API의 대표적인 예다."
- 자원 조회는 GET, 새로 만들기는 POST, 수정은 PUT, 삭제는 DELETE처럼 HTTP 메서드에 의미를 부여해, API의 동작을 URL과 메서드 조합만 보고도 짐작할 수 있게 설계하는 것이 핵심입니다.
- 이런 규칙을 따르는 API를 'REST API' 또는 'RESTful API'라고 부르며, 오늘날 웹 서비스 대부분이 이 방식을 기본으로 채택하고 있습니다.
- 각 요청이 이전 요청 상태를 기억하지 않는 '무상태(Stateless)' 원칙을 따르기 때문에, 서버를 여러 대로 늘려도 요청을 어디로 보내든 동일하게 처리될 수 있어 확장에 유리합니다.

## 관련 용어

- {{< term "api" >}}
- {{< term "http" >}}
