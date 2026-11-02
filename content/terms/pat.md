---
title: "PAT(포트 기반 주소 변환, NAPT)"
description: "PAT(Port Address Translation)는 여러 개의 내부 IP 주소를, 포트 번호를 함께 활용해 단 하나의 외부 IP 주소로 변환하는 NAT 방식입니다."
summary: "집이나 사무실의 여러 기기가 쓰는 수많은 내부 IP 주소를, 포트 번호를 함께 활용해 구분함으로써 단 하나의 외부 공개 IP 주소만으로도 동시에 인터넷에 접속할 수 있게 해주는 NAT 방식입니다."
date: 2026-11-02
lastmod: 2026-11-02
category: "클라우드·개발"
draft: false
---

## 한눈에 보는 정의

**PAT**(Port Address Translation, 포트 기반 주소 변환, NAPT)는 여러 개의 내부 IP 주소를, 포트 번호를 함께 활용해 단 하나의 외부 IP 주소로 변환하는 {{< term "nat" >}}(NAT) 방식입니다.

## 자세히 알아보기

- 예문: "집 안의 스마트폰, 노트북, 스마트TV가 모두 동시에 인터넷에 접속해도, 공유기는 **PAT** 덕분에 공개 IP 주소 하나로 이를 전부 구분해 처리한다."
- IP 주소만으로는 여러 기기를 구분할 수 없지만, 통신할 때마다 쓰는 포트 번호까지 조합해 '이 포트로 온 응답은 저 기기의 것'이라고 구분해주기 때문에, 여러 내부 IP가 하나의 외부 IP를 동시에 함께 쓸 수 있습니다.
- 흔히 NAPT(Network Address Port Translation)라고도 부르며, 가정용 공유기와 기업 네트워크 모두에서 가장 널리 쓰이는 NAT 방식으로 자리 잡았습니다.
- 여러 개의 외부 IP가 필요한 {{< term "dynamic-nat" >}}(Dynamic NAT)와 달리, 포트 번호 덕분에 외부 IP 주소를 단 하나만 쓰면 되어 한정된 IPv4 주소를 가장 효율적으로 아낄 수 있는 방식으로 평가받습니다.

## 관련 용어

- {{< term "dynamic-nat" >}}
- {{< term "nat" >}}
