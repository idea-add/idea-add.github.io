---
title: "튜플 관계해석(Tuple Relational Calculus)"
description: "튜플 관계해석(Tuple Relational Calculus)은 테이블의 행(튜플) 하나를 변수로 두고, 그 행이 만족해야 할 조건을 논리식으로 표현하는 관계해석의 한 방식입니다."
summary: "테이블의 행(튜플) 하나를 변수로 두고, '이 행이 결과에 포함되려면 어떤 조건을 만족해야 하는가'를 논리식으로 표현하는 관계해석의 한 방식입니다."
date: 2026-07-18
lastmod: 2026-07-18
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**튜플 관계해석**(Tuple Relational Calculus)은 테이블의 행(튜플) 하나를 변수로 두고, 그 행이 결과에 포함되기 위해 만족해야 할 조건을 논리식으로 표현하는 {{< term "relational-calculus" >}}(관계해석)의 한 방식입니다.

## 자세히 알아보기

- 예문: "'회원 t가 있는데, t의 나이가 20살 이상이다'처럼 행 전체를 변수 t로 놓고 조건을 기술하는 것이 **튜플 관계해석**이다."
- 변수 하나가 테이블의 행 전체(튜플)를 가리키기 때문에, 그 행 안의 어떤 속성 값이든 조건식 안에서 자유롭게 참조할 수 있습니다.
- {{< term "sql" >}}(SQL)의 `SELECT ... WHERE` 문법은, 조회할 행이 만족해야 할 조건을 기술한다는 점에서 튜플 관계해석의 개념과 유사한 구조를 갖습니다.
- 변수가 행이 아니라 개별 속성(열)의 값을 가리키는 {{< term "domain-relational-calculus" >}}(도메인 관계해석)와는 변수가 나타내는 대상 단위가 다릅니다.

## 관련 용어

- {{< term "relational-calculus" >}}
- {{< term "domain-relational-calculus" >}}
