---
title: "SMTP(Simple Mail Transfer Protocol)"
description: "SMTP(Simple Mail Transfer Protocol)는 이메일을 발신 서버에서 수신 서버로 전달하는 데 쓰이는 표준 통신 프로토콜입니다."
summary: "이메일을 작성해 보낼 때, 그 메일을 발신 서버에서 수신 서버로 실제로 전달하는 데 쓰이는 표준 통신 프로토콜입니다."
date: 2026-07-15
lastmod: 2026-07-15
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**SMTP**(Simple Mail Transfer Protocol)는 이메일을 작성해 보낼 때, 그 메일을 발신 서버에서 수신 서버로 실제로 전달하는 데 쓰이는 표준 {{< term "protocol" >}}(프로토콜)입니다.

## 자세히 알아보기

- 예문: "메일 클라이언트에서 '보내기'를 누르면, 내부적으로는 **SMTP**를 통해 메일 서버로 데이터가 전달된다."
- 메일을 '보내는' 과정은 SMTP가 담당하고, 받은 편지함에서 메일을 '받아오는' 과정은 IMAP이나 POP3라는 별도의 프로토콜이 담당하는 식으로 역할이 나뉩니다.
- SMTP도 {{< term "http" >}}(HTTP)와 마찬가지로 {{< term "tcp-ip" >}}(TCP/IP) 위에서 동작하는 응용 계층 프로토콜입니다.
- 스팸 메일을 걸러내고 발신자를 검증하기 위한 여러 보안 기술이 SMTP 위에 추가로 덧붙여져 오늘날의 이메일 시스템을 이루고 있습니다.

## 관련 용어

- {{< term "protocol" >}}
- {{< term "tcp-ip" >}}
