---
date: '2024-03-04'
title: 'GitBlog에 GA4연결하여 데이터 수집'
categories: ['Web', 'React', 'GitBlog', 'Gatsby']
summary: 'GitBlog에 사용자가 어떠한 동작을 하는지 추적하기 위해 GA4를 연결하였습니다.'
thumbnail: 'GA4_3.png'
---

사용자의 활동을 추적해 보기 위해 GA4를 연결하기로 했습니다. 최종적으로 방문자수를 Google Search Console의<br> Google Analytics API를 통해 받아와서 페이지에 추가할 예정입니다.

![GA4_1](https://github.com/littleduck1219/littleduck1219/assets/107936957/90089d9b-d33b-4aac-bfc4-4b38abf5c182)

관리 > 데이터 수집 및 수정 > 데이터 스트림 > 웹 > 웹 스트림 세부정보

순서대로 진입해서 측정 ID를 받아 옵니다.

![GA4_2](https://github.com/littleduck1219/littleduck1219/assets/107936957/8056deef-401f-4ae9-b3a0-7d85c6c36559)

.env.production 파일에 측정 ID 값을 정의 합니다

```json
GATSBY_GA_TRACKING_ID=[측정ID]
```

gatsby에서 제공하는 plugin을 설치 해줍니다.

```bash
yarn add gatsby-plugin-google-gtag
```

gatsby-config.js에 plugin을 입력합니다.
원래는 script코드, react에서는 인식가능한 컴포넌트를 마운트 시켜줘야 합니다. 하지만 gatsby에서는 간단하게 다룰 수 있습니다.

```json
{
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`${process.env.GATSBY_GA_VERIFICATION_KEY}`],
        head: false,
      },
    },

```

그리고 github workflow에 연동되어 있는 경우 github secret action에 secret key를 등록하고 yml 파일에도<br> env에 key를 추가합니다.

build & deploy를 진행하면고 몇 분 후 확인해 보면 아래처럼 실시간 추적이 되는 것을 확인 할 수 있습니다.

![GA4_3](https://github.com/littleduck1219/littleduck1219/assets/107936957/51eb2eff-5c02-4a3f-955f-089086d1bf69)

사이트의 활동내용과 각 계시글의 활동내역까지 확인 할 수 있습니다.

Doc : https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/
