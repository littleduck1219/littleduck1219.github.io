---
date: '2024-03-05'
title: 'NextAuth'
categories: ['Web', 'React', 'Next.JS']
summary: 'Next에서 Data를 다루는 방법에 대해서 알아보았습니다.'
thumbnail: './NextAuth.png'
---

![1](./NextAuth.png)

NextAuth.js는 Next.js 애플리케이션을 위한 오픈 소스 인증 솔루션 입니다.

간단한 코드로 인증 기능을 구현할 수 있습니다.

```tsx
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
```

다양한 OAuth기능을 지원하며 OAuth 1.0, OAuth 1.0A, OAuth 2.0 및 OpenID Connect를 지원
SNS 로그인 서비스 기본 지원
이메일 / 비밀번호 인증 지원
데이터베이스 유 / 무 와 관계없이 사용가능
MySQL, MariaDB, Postgres, 등 자주 사용하는 SQL에 기본 지원

그외 다양한 기능들을 기본으로 지원하며 여러 고급옵션 또한 제공됩니다.

https://next-auth.js.org/getting-started/introduction
