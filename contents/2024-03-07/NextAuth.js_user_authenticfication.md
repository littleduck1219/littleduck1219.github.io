---
date: '2024-03-07'
title: 'NextAuth 사용자인증 권한 페이지'
categories: ['Web', 'React', 'Next.JS']
summary: 'Next Auth를 통해 로그인이 필요한 페이지는 어떻게 구현하는지 궁금했는데 그것에 대해서 알아보았습니다.'
thumbnail: './NextAuth.js_user_authentication.png'
---

Next Auth를 통해 로그인이 필요한 페이지는 어떻게 구현하는지 궁금했는데 그것에 대해서 알아보았습니다.

![1](./NextAuth.js_user_authentication.png)

![2](https://1drv.ms/i/c/bae70a53437eb109/IQPE1dRxx6lURZrq7CPZF1O2AbpmWXGVsdPR4IpWZRRljk0?width=394&height=231)

위 이미지 처럼 folder에 middleware.ts파일을 만들어 로그인이 필요한 페이지 url을 정의합니다.

![3](https://1drv.ms/i/c/bae70a53437eb109/IQO9PjWNNpMrS6GDJhhc4OUsAT54DgFj4VsmUtsBVuXyA2M?width=1112&height=363)

위 이미지 처럼 pages/api/auth라는 폴더에 [...nextauth].ts라는 파일에 내용의 정의하면 사용자 인증이 필요한 경로가 설정됩니다.

localhost:3000/users/likes에 접속하면 이렇게 자동으로<br>
http://localhost:3000/api/auth/signin?callbackUrl=%2Fusers%2Flikes 인증이 필요한 callback페이지로 설정이됩니다.

![4](https://1drv.ms/i/c/bae70a53437eb109/IQPUl_Vo7n39RIwE6z6TGElrAZwATiwyIXIY4XHmFUx0ETw?width=2554&height=1369)

![5](https://1drv.ms/i/c/bae70a53437eb109/IQP2OPWE0lzXQItNNBTEy4taAe3i7BlFs7lDmP8xWXxbA3E?width=855&height=452)

위처럼 @/pages/api/auth/ 경로에 [...nextauth].ts 파일을 만들고 provider를 설정하면 위 브라우저 이미지 처럼 설정한 provider를 사용할 수 있습니다. 현제는 구글을 설정했기때문에 구글이 나타납니다.
