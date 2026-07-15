---
title: "DML(데이터 조작어)"
description: "DML(Data Manipulation Language)은 데이터베이스 테이블 안의 실제 데이터를 조회, 추가, 수정, 삭제하는 데 쓰이는 SQL 명령어 집합입니다."
summary: "데이터베이스 테이블 안에 실제로 저장된 데이터를 조회(SELECT), 추가(INSERT), 수정(UPDATE), 삭제(DELETE)하는 데 쓰이는 SQL 명령어 집합입니다."
date: 2026-07-15
lastmod: 2026-07-15
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**DML**(Data Manipulation Language, 데이터 조작어)은 {{< term "sql" >}}에서 테이블 안에 실제로 저장된 데이터를 조회(SELECT), 추가(INSERT), 수정(UPDATE), 삭제(DELETE)하는 데 쓰이는 명령어 집합입니다.

## 자세히 알아보기

- 예문: "`SELECT name FROM users;`처럼 데이터를 조회하는 것이 **DML**의 대표적인 예다."
- 테이블의 구조 자체를 만들고 바꾸는 {{< term "ddl" >}}(데이터 정의어)과 달리, DML은 그 구조 안에 담긴 실제 값(레코드)을 다룹니다.
- 웹 서비스에서 회원가입, 게시글 작성, 정보 수정 같은 기능은 내부적으로 대부분 DML 명령을 통해 데이터베이스에 반영됩니다.
- 실무에서는 실수로 조건 없이 UPDATE나 DELETE를 실행해 대량의 데이터가 잘못 바뀌는 사고를 막기 위해, 조건절(WHERE)을 꼼꼼히 확인하는 습관이 중요합니다.

## 관련 용어

- {{< term "sql" >}}
- {{< term "ddl" >}}
