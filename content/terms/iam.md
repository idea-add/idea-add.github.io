---
title: "IAM(접근 권한 관리)"
description: "IAM(Identity and Access Management)은 '누가 무엇에 접근할 수 있는지'를 관리하는 체계입니다. RBAC, Zero Trust와의 관계를 정리했습니다."
summary: "임직원이나 시스템이 어떤 자원에 접근할 수 있는지, 신원 확인부터 권한 부여까지 전체를 관리하는 체계입니다."
date: 2026-07-10
lastmod: 2026-07-10
category: "보안"
draft: false
---

## 한눈에 보는 정의

**IAM(Identity and Access Management, 접근 권한 관리)**은 '이 사람(혹은 시스템)이 누구인지 확인(인증)'하고, '이 사람이 어떤 자원에 접근할 수 있는지 정하는(인가)' 과정을 통틀어 관리하는 체계입니다.

## 자세히 알아보기

- 로그인(인증)부터 특정 파일·서버·데이터베이스 접근 권한 부여(인가)까지 모두 IAM의 영역입니다.
- 권한을 개인별로 일일이 주지 않고 역할(role) 단위로 묶어 관리하는 방식이 {{< term "rbac" >}}입니다.
- 최근에는 "일단 내부망이면 믿는다"는 방식 대신, 모든 접근을 매번 검증하는 {{< term "zero-trust" >}} 원칙과 함께 설계하는 경우가 많습니다.

## 관련 용어

- {{< term "rbac" >}}
- {{< term "zero-trust" >}}
