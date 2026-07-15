---
title: "API(Application Programming Interface)"
description: "API(Application Programming Interface)는 서로 다른 소프트웨어가 데이터를 주고받거나 기능을 호출할 수 있도록 정해둔 규칙과 접점입니다."
summary: "서로 다른 소프트웨어끼리 내부 구현을 몰라도, 정해진 규칙에 따라 데이터를 주고받거나 기능을 호출할 수 있도록 만들어둔 접점입니다."
date: 2026-07-15
lastmod: 2026-07-15
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**API**(Application Programming Interface)는 서로 다른 소프트웨어가 서로의 내부 구현을 몰라도, 정해진 규칙에 따라 데이터를 주고받거나 기능을 호출할 수 있도록 만들어둔 접점입니다.

## 자세히 알아보기

- 예문: "날씨 앱은 기상청이 제공하는 **API**를 호출해 실시간 날씨 데이터를 받아온다."
- 요청과 응답 형식을 미리 정해두면, API를 제공하는 쪽의 내부 코드가 어떻게 바뀌든 API 형식만 유지되면 이를 사용하는 쪽 코드는 그대로 동작할 수 있습니다.
- 웹에서는 {{< term "http" >}}(HTTP) 프로토콜을 기반으로 한 {{< term "rest" >}}(REST) 방식의 API가 가장 널리 쓰입니다.
- 여러 개의 API를 한곳에서 관리하고 인증·트래픽 제어를 담당하는 {{< term "api-gateway" >}}는, 서비스 규모가 커질수록 필수적인 인프라로 자리 잡고 있습니다.

## 관련 용어

- {{< term "rest" >}}
- {{< term "http" >}}
- {{< term "api-gateway" >}}
