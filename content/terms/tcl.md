---
title: "TCL(트랜잭션 제어어)"
description: "TCL(Transaction Control Language)은 트랜잭션을 확정하거나 취소하는 등 트랜잭션의 흐름을 제어하는 데 쓰이는 SQL 명령어 집합입니다."
summary: "트랜잭션 안의 작업을 최종 확정(COMMIT)하거나 취소(ROLLBACK)하는 등, 트랜잭션의 흐름을 제어하는 데 쓰이는 SQL 명령어 집합입니다."
date: 2026-07-17
lastmod: 2026-07-17
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**TCL**(Transaction Control Language, 트랜잭션 제어어)은 {{< term "sql" >}}에서 트랜잭션 안의 작업을 최종 확정({{< term "commit" >}})하거나 취소({{< term "rollback" >}})하는 등, 트랜잭션의 흐름을 제어하는 데 쓰이는 명령어 집합입니다.

## 자세히 알아보기

- 예문: "이체 작업이 모두 성공하면 **TCL**의 COMMIT으로 확정하고, 중간에 오류가 나면 ROLLBACK으로 되돌린다."
- 테이블 구조를 다루는 {{< term "ddl" >}}, 실제 데이터를 다루는 {{< term "dml" >}}, 접근 권한을 다루는 {{< term "dcl" >}}과 달리, TCL은 여러 DML 명령을 하나의 트랜잭션 단위로 묶어 확정하거나 취소하는 역할을 합니다.
- 트랜잭션 중간에 특정 지점을 저장해두는 SAVEPOINT 명령을 함께 지원해, 전체를 되돌리지 않고 일부 작업만 취소할 수 있게 해주는 경우도 많습니다.
- {{< term "atomicity" >}}(원자성)을 실제 코드 수준에서 구현하는 수단이 바로 이 TCL 명령어들입니다.

## 관련 용어

- {{< term "commit" >}}
- {{< term "rollback" >}}
- {{< term "sql" >}}
