---
title: "Impala(임팔라)"
description: "Impala(임팔라)는 Hadoop에 저장된 데이터를 MapReduce를 거치지 않고 직접 조회해, 대화하듯 빠른 응답 속도로 SQL 질의를 처리하는 분산 SQL 쿼리 엔진입니다."
summary: "Hadoop에 저장된 데이터를 MapReduce 변환 과정을 거치지 않고 직접 메모리에서 조회해, Hive보다 훨씬 빠르게 사람이 대화하듯 즉각적인 응답 속도로 SQL 질의를 처리하는 분산 SQL 쿼리 엔진입니다."
date: 2026-09-29
lastmod: 2026-09-29
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**Impala**(임팔라)는 {{< term "hadoop" >}}(Hadoop)에 저장된 데이터를 {{< term "mapreduce" >}}(MapReduce)를 거치지 않고 직접 조회해, 대화하듯 빠른 응답 속도로 SQL 질의를 처리하는 분산 SQL 쿼리 엔진입니다.

## 자세히 알아보기

- 예문: "분석가가 화면을 클릭하며 데이터를 이리저리 탐색해야 해서, 응답이 빠른 **Impala**로 즉시 결과를 확인할 수 있게 했다."
- {{< term "hive" >}}(Hive)가 MapReduce 같은 배치 엔진을 거쳐 결과를 얻기까지 다소 시간이 걸리는 반면, Impala는 자체 처리 엔진으로 데이터를 직접 읽어 훨씬 짧은 시간에 결과를 돌려줍니다.
- 매 순간 최신 데이터를 빠르게 확인해야 하는 대시보드나, 분석가가 여러 조건을 바꿔가며 즉흥적으로 탐색하는 대화형 분석 업무에 특히 적합합니다.
- 비슷한 목적의 엔진으로 {{< term "presto" >}}(Presto)나 {{< term "trino" >}}(Trino)가 있으며, 이들 모두 대용량 데이터를 빠르게 조회하는 SQL 엔진이라는 공통점을 가집니다.

## 관련 용어

- {{< term "hive" >}}
- {{< term "presto" >}}
