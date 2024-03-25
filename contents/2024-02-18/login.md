---
date: '2024-02-19'
title: 'Query Key Error:TanStack Query'
categories: ['Web', 'api']
summary: '오늘 로그인 기능을 구현해 보았습니다.'
thumbnail: './login.png'
---

![1](./login.png)

오늘 로그인 기능을 구현해 보았습니다.
입력값(id, password)를 받아오고 post로 로그인 요청을 보냅니다.
서버응답을 받으면 응답 header에 포함된 authoriztion값을 local storage에 저장합니다.
이 값은 JWT와 같은 인증 토큰을 포함하며, API요청에서 사용자 인증합니다.
