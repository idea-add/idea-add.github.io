---
title: "제어 구조 검사(Control Structure Testing)"
description: "제어 구조 검사(Control Structure Testing)는 조건문, 반복문 같은 프로그램의 제어 흐름 구조를 다양한 관점에서 검증하는 화이트박스 테스트 기법들을 통틀어 부르는 말입니다."
summary: "조건문, 반복문 같은 프로그램의 제어 흐름 구조를 조건·경로·데이터 흐름 등 다양한 관점에서 검증하는 화이트박스 테스트 기법들을 통틀어 부르는 말입니다."
date: 2026-07-18
lastmod: 2026-07-18
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**제어 구조 검사**(Control Structure Testing)는 조건문, 반복문 같은 프로그램의 제어 흐름 구조를 조건·경로·데이터 흐름 등 다양한 관점에서 검증하는 {{< term "white-box-testing" >}}(화이트박스 테스트) 기법들을 통틀어 부르는 말입니다.

## 자세히 알아보기

- 예문: "조건 커버리지, 기본 경로 검사, 루프 검사는 모두 **제어 구조 검사**에 속하는 세부 기법들이다."
- {{< term "condition-coverage" >}}(조건 커버리지)처럼 조건의 참·거짓에 집중하는 기법, {{< term "basis-path-testing" >}}(기본 경로 검사)처럼 실행 경로에 집중하는 기법, {{< term "loop-testing" >}}(루프 검사)처럼 반복문에 집중하는 기법 등이 모두 포함됩니다.
- 하나의 관점만으로는 코드의 결함을 모두 찾아내기 어렵기 때문에, 실무에서는 여러 세부 기법을 상황에 맞게 조합해 활용하는 경우가 많습니다.
- {{< term "data-flow-testing" >}}(데이터 흐름 검사)처럼 변수 값의 흐름에 초점을 맞춘 기법도 넓은 의미에서 제어 구조 검사의 한 갈래로 분류되기도 합니다.

## 관련 용어

- {{< term "basis-path-testing" >}}
- {{< term "loop-testing" >}}
- {{< term "data-flow-testing" >}}
