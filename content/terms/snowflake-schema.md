---
title: "Snowflake Schema(스노우플레이크 스키마)"
description: "Snowflake Schema(스노우플레이크 스키마)는 Star Schema의 차원 테이블을 더 잘게 정규화해 나눠, 데이터 중복을 줄인 데이터 웨어하우스 설계 방식입니다."
summary: "Star Schema의 차원 테이블을 더 세부적인 하위 테이블로 정규화해 나눠, 데이터 중복을 줄이고 저장 공간을 절약하는 대신, 조회 시 더 많은 테이블을 거쳐야 하는 데이터 웨어하우스 설계 방식입니다."
date: 2026-09-29
lastmod: 2026-09-29
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**Snowflake Schema**(스노우플레이크 스키마)는 {{< term "star-schema" >}}(Star Schema)의 차원 테이블을 더 잘게 정규화해 나눠, 데이터 중복을 줄인 데이터 웨어하우스 설계 방식입니다.

## 자세히 알아보기

- 예문: "상품 차원 테이블 안에 카테고리 정보가 중복 저장되던 것을, **Snowflake Schema**로 카테고리 테이블을 별도로 분리해 중복을 줄였다."
- Star Schema에서는 상품 차원 테이블 안에 카테고리 이름까지 함께 저장돼 같은 카테고리 정보가 여러 행에 중복되지만, Snowflake Schema는 카테고리를 별도 테이블로 분리해 이런 중복을 줄입니다.
- 데이터 중복이 줄어 저장 공간은 절약되지만, 조회할 때 여러 테이블을 거쳐야 해서 Star Schema보다 조회 속도는 다소 느려질 수 있습니다.
- 데이터 정합성과 저장 효율을 중시한다면 Snowflake Schema를, 조회 속도와 단순함을 중시한다면 Star Schema를 선택하는 것이 일반적인 판단 기준입니다.

## 관련 용어

- {{< term "star-schema" >}}
- {{< term "dimension-table" >}}
