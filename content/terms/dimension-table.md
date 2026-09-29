---
title: "Dimension Table(차원 테이블)"
description: "Dimension Table(차원 테이블)은 고객, 상품, 기간처럼 Fact Table의 수치를 어떤 기준으로 바라볼지 정의하는, 데이터 웨어하우스의 기준 정보 테이블입니다."
summary: "고객, 상품, 기간, 지역처럼 Fact Table에 담긴 매출 같은 수치를 어떤 기준으로 나눠 바라볼지 정의하는, 데이터 웨어하우스의 기준 정보 테이블입니다."
date: 2026-09-29
lastmod: 2026-09-29
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**Dimension Table**(차원 테이블)은 고객, 상품, 기간처럼 {{< term "fact-table" >}}(Fact Table)의 수치를 어떤 기준으로 바라볼지 정의하는, 데이터 웨어하우스의 기준 정보 테이블입니다.

## 자세히 알아보기

- 예문: "매출을 지역별, 월별로 나눠보고 싶어, 지역과 기간에 대한 **Dimension Table**을 각각 만들어 **Fact Table**과 연결했다."
- 상품명, 카테고리, 브랜드 같은 상품 관련 속성을 모아둔 상품 차원 테이블, 연도·분기·월을 담은 기간 차원 테이블처럼, 각 {{< term "dimension" >}}(차원)마다 별도의 테이블로 관리됩니다.
- Fact Table에 담긴 매출 수치를 이 Dimension Table과 연결해 조회하면, '2024년 3분기 서울 지역 전자제품 매출'처럼 여러 기준을 조합한 세밀한 집계가 가능해집니다.
- 상세하게 세분화된 카테고리 정보까지 별도 테이블로 나누고 싶을 때는 {{< term "snowflake-schema" >}}(스노우플레이크 스키마)처럼 Dimension Table 자체를 다시 여러 테이블로 정규화하기도 합니다.

## 관련 용어

- {{< term "fact-table" >}}
- {{< term "dimension" >}}
