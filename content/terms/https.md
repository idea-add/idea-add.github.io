---
title: "HTTPS(HyperText Transfer Protocol Secure)"
description: "HTTPS(HyperText Transfer Protocol Secure)는 HTTP 통신 내용을 암호화해, 중간에서 누군가 가로채더라도 내용을 알아볼 수 없도록 만든 보안 버전의 웹 통신 프로토콜입니다."
summary: "HTTP 통신 내용을 TLS로 암호화해, 통신 중간에서 누군가 가로채더라도 내용을 알아볼 수 없도록 만든 보안 버전의 웹 통신 프로토콜로, 오늘날 거의 모든 웹사이트가 채택하고 있습니다."
date: 2026-07-22
lastmod: 2026-07-22
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**HTTPS**(HyperText Transfer Protocol Secure)는 {{< term "http" >}}(HTTP) 통신 내용을 {{< term "tls" >}}(TLS)로 암호화해, 통신 중간에서 누군가 가로채더라도 내용을 알아볼 수 없도록 만든 보안 버전의 웹 통신 프로토콜입니다.

## 자세히 알아보기

- 예문: "브라우저 주소창의 자물쇠 아이콘은 그 사이트가 **HTTPS**로 안전하게 암호화되어 있다는 표시다."
- 로그인 정보나 결제 정보처럼 민감한 데이터를 암호화 없이 그대로 주고받으면 {{< term "sniffing" >}}(스니핑)으로 쉽게 노출될 수 있는데, HTTPS는 이를 원천적으로 방지합니다.
- 웹사이트가 진짜 그 도메인의 소유자가 운영하는지 확인해주는 인증서({{< term "ca" >}}가 발급)도 함께 검증해, {{< term "pharming" >}}(파밍) 같은 위장 공격도 어느 정도 예방할 수 있습니다.
- 오늘날 대부분의 브라우저는 암호화되지 않은 일반 HTTP 사이트에 접속하면 '안전하지 않음' 경고를 표시할 정도로, HTTPS가 사실상 웹의 기본 표준이 되었습니다.

## 관련 용어

- {{< term "http" >}}
- {{< term "tls" >}}
- {{< term "ca" >}}
