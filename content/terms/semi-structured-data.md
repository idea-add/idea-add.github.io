---
title: "Semi-Structured Data(반정형 데이터)"
description: "Semi-Structured Data(반정형 데이터)는 JSON이나 XML처럼, 고정된 표 형식은 아니지만 나름의 구조와 태그를 가진 데이터를 뜻합니다."
summary: "관계형 데이터베이스처럼 완전히 고정된 표 형식은 아니지만, JSON이나 XML처럼 태그나 키-값 구조를 통해 나름의 체계를 갖춘 데이터를 뜻합니다."
date: 2026-09-29
lastmod: 2026-09-29
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**Semi-Structured Data**(반정형 데이터)는 {{< term "json" >}}(JSON)이나 XML처럼, 고정된 표 형식은 아니지만 나름의 구조와 태그를 가진 데이터를 뜻합니다.

## 자세히 알아보기

- 예문: "API 응답으로 받은 **Semi-Structured Data**(JSON)는 상품마다 속성 개수가 달라도 문제없이 담을 수 있었다."
- {{< term "structured-data" >}}(정형 데이터)처럼 모든 항목이 똑같은 열을 가져야 하는 것은 아니지만, 키-값 쌍이나 태그처럼 데이터를 해석할 수 있는 최소한의 구조는 갖추고 있어 완전히 자유로운 형태보다 다루기 쉽습니다.
- 웹 API 응답, 로그 파일, 설정 파일처럼 항목마다 속성이 조금씩 다를 수 있는 데이터를 다룰 때 특히 적합해, 현대 웹 서비스에서 매우 흔하게 쓰이는 형태입니다.
- {{< term "mongodb" >}}(MongoDB) 같은 문서형 {{< term "nosql" >}}(NoSQL) 데이터베이스는 이런 반정형 데이터를 있는 그대로 유연하게 저장할 수 있도록 설계되어 있습니다.

## 관련 용어

- {{< term "structured-data" >}}
- {{< term "unstructured-data" >}}
