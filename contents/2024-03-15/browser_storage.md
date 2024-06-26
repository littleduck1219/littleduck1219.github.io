---
date: '2024-03-15'
title: 'Browser Storage'
categories: ['Web', 'CS']
summary: '브라우저에는 다양한 저장소가 존재합니다.'
thumbnail: '../../static/default.png'
---

## 로컬 스토리지(Local Storage):

- **지속성(Persistence)** : 데이터는 사용자의 로컬 컴퓨터에 영구적으로 저장됩니다. 브라우저를 닫고 다시 열어도 데이터는 유지됩니다.
- **공유 범위(Sharing Scope)** : 도메인별로 공유됩니다. 즉, 동일한 도메인에서 실행되는 모든 페이지 및 탭에서 동일한 로컬 스토리지를 사용할 수 있습니다.
- **용도(Purpose)** : 사용자의 로컬 데이터를 영구적으로 저장하고, 사용자 환경을 유지하기 위한 데이터에 적합합니다.

## 세션 스토리지(Session Storage)

- **지속성(Persistence)** : 데이터는 브라우저 세션(Session) 동안만 유지됩니다. 세션은 사용자가 브라우저를 열고 로그인하여 브라우저를 닫을 때까지의 시간을 나타냅니다.
- **공유 범위(Sharing Scope)** : 로컬 스토리지와 마찬가지로 도메인별로 공유됩니다. 세션 스토리지는 도메인 내에서 실행되는 페이지 및 탭에서 공유됩니다.
- **용도(Purpose)** : 세션 동안만 필요한 일시적인 데이터를 저장할 때 사용됩니다. 주로 사용자의 세션 기간 동안만 필요한 정보를 저장하고 유지하는 데 사용됩니다.

## 쿠키(Cookie)

쿠키는 브라우저 저장소의 한 형태이지만, 로컬 스토리지나 세션 스토리지와는 다른 개념입니다. 쿠키는 클라이언트와 서버 간에 데이터를 주고받을 때 사용되는 작은 파일이며, 주로 사용자의 세션 정보나 사용자 경험을 개선하는 데 사용됩니다.

- **저장 위치** : 쿠키는 클라이언트의 로컬 컴퓨터에 저장되며, HTTP 요청과 함께 서버로 전송됩니다. 이러한 쿠키는 브라우저에 의해 관리됩니다.

- **용도** : 쿠키는 서버와 클라이언트 간의 상태를 유지하기 위해 사용됩니다. 로그인 정보, 사용자 설정, 장바구니 등과 같이 사용자의 상태를 추적하거나 인증을 유지하는 데 사용됩니다.

- **크기 제한** : 각 도메인당 쿠키는 일반적으로 4KB로 제한되어 있습니다.

- **지속성** : 쿠키에는 만료 기간을 설정하여 지속성을 제어할 수 있습니다. 만료 기간이 설정되지 않은 경우, 세션 쿠키는 브라우저 세션 동안 유지되고 영속적인 쿠키는 만료일까지 유지됩니다.

- **보안** : 쿠키는 보안에 취약할 수 있으며, 사용자의 개인 정보를 포함하고 있을 경우 암호화되어야 합니다.
