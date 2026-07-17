---
title: "형상 기록(Configuration Status Accounting)"
description: "형상 기록(Configuration Status Accounting)은 형상 항목들의 현재 상태와 지금까지의 모든 변경 이력을 기록하고 보고하는 형상관리 활동입니다."
summary: "형상 항목들이 지금 어떤 상태인지, 그리고 지금까지 언제·누가·무엇을·왜 바꿨는지에 대한 모든 변경 이력을 기록하고 보고하는 형상관리 활동입니다."
date: 2026-07-17
lastmod: 2026-07-17
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**형상 기록**(Configuration Status Accounting)은 {{< term "configuration-identification" >}}(형상 식별)된 항목들이 지금 어떤 상태인지, 그리고 언제·누가·무엇을·왜 바꿨는지에 대한 모든 변경 이력을 기록하고 보고하는 활동입니다.

## 자세히 알아보기

- 예문: "이번 버전에서 어떤 파일이 언제, 왜 바뀌었는지 이력을 찾아보는 것이 **형상 기록**을 활용하는 예다."
- 문제가 발생했을 때 어느 시점의 변경이 원인이 되었는지 추적할 수 있게 해줘, 장애 대응과 원인 분석에 필수적인 자료로 활용됩니다.
- git 같은 버전 관리 시스템의 커밋 로그도, 넓은 의미에서 이 형상 기록을 자동으로 남겨주는 도구라고 볼 수 있습니다.
- {{< term "configuration-audit" >}}(형상 감사)를 수행할 때도, 이 기록을 근거 자료로 삼아 실제 변경 내역이 승인된 내용과 일치하는지 확인합니다.

## 관련 용어

- {{< term "configuration-identification" >}}
- {{< term "configuration-audit" >}}
