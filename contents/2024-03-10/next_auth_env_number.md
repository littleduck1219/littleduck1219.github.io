---
date: '2024-03-10'
title: 'Next-Auth 환경변수 생성'
categories: ['Web', 'React', 'Next.JS', 'NextAuth']
summary: 'next-auth의 middleware기능을 사용해 주기 위해서 secret key가 필요한데 랜덤 생성을 해주도록 하겠습니다.'
thumbnail: '../../static/default.png'
---

next-auth의 middleware기능을 사용해 주기 위해서 secret key가 필요한데 랜덤 생성을 해주도록 하겠습니다.

```bash
openssl rand -base64 24
```
