---
date: '2024-02-27'
title: 'Kakao login error:refresh_token_expires_in'
categories: ['Web', 'React', 'Database']
summary: '필요한 데이터를 가져올때 필요없는 class는 지워주는 작업을 진행해 보겠습니다.'
thumbnail: './Kakao_login_error-refresh_token_expires_in_1.png'
---

![1](https://i.ibb.co/VT20Dh0/Kakao-login-error-refresh-token-expires-in-1.png)

kakao 로그인을 구현하여 테스트를 진행, 에러가 발생했습니다. "Unknown argument `refresh_token_expires_in` 이라는 내용이였습니다. 찬찬히 살펴보니 data 객체 안에 여러 내용이 존재하는데 밑줄쳐진 부분이 있는데 스키마에 없다라는 뜻 같았습니다.

![2](https://i.ibb.co/BnR8W2q/Kakao-login-error-refresh-token-expires-in-2.png)

네이버나 구글에는 존재하지 않는 내용이기 때문에 옵셔날로 refresh_token_expires_in을 추가하여 마이그레이션을 진행하였습니다.

![3](https://i.ibb.co/hsfnY2j/Kakao-login-error-refresh-token-expires-in-3.png)

이렇게 성공적으로 마이그레이션이 완료되었고

![4](https://i.ibb.co/8gvCnk3/Kakao-login-error-refresh-token-expires-in-4.png)

컬럼이 추가 되었습니다.

![5](https://i.ibb.co/5rp2gCQ/Kakao-login-error-refresh-token-expires-in-5.png)

로그인을 진행하여 superbase에 등록이 되는 것을 확인 했고 정상적으로 로그인도 완료 되었습니다.
