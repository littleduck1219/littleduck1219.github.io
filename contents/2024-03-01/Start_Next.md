---
date: '2024-03-01'
title: 'Next.JS 시작하기'
categories: ['Web', 'React', 'Next.JS']
summary: 'Next.js 는 React 기반의 오픈 소스 프레임워크로, SSR(서버 사이드 렌더링), SSG(정적 사이트 생성), CSR(클라이언트 사이드 렌더링)을 지원하여 높은 성능과 SEO 친화적인 웹 애플리케이션을 빠르게 구축할 수 있게 해 줍니다.'
thumbnail: './Start_Next_1.png'
---

![1](https://i.ibb.co/5kJtMd2/Start-Next-1.png)

Next.js 는 React 기반의 오픈 소스 프레임워크로, SSR(서버 사이드 렌더링), SSG(정적 사이트 생성), CSR(클라이언트 사이드 렌더링)을 지원하여 높은 성능과 SEO 친화적인 웹 애플리케이션을 빠르게 구축할 수 있게 해 줍니다. Next.js는 JavaScript, TypeScript를 지원하며, 빌트인 라우팅, 페이지 기반 라우팅 시스템, 코트 스플리팅, API 라우트, CSS 모듈과 같은 다양한 기능을 제공합니다.

- **서버 사이드 렌더링(SSR):** Next.js는 서버에서 페이지를 렌더링하고, 렌더링된 HTML을 클라이언트로 보내주는 서버 사이드 렌더링을 지원합니다. 이를 통해 초기 페이지 로딩 시간을 줄이고, SEO를 향상할 수 있습니다.

- **정적 사이트 생성(SSG):**
  정적 사이트 생성은 빌드 시점에 페이지를 렌더링하고, 결과물을 재사용하는 방법입니다. 이는 높은 성능과 빠른 로딩 속도를 제공하며, CDN에 정적 파일을 배포할 수 있습니다.

- **클라이언트 사이드 렌더링(CSR):**
  클라이언트 사이드 렌더링은 브라우저에서 JavaScript를 사용하여 페이지를 렌더링 하는 방식입니다. Next.js는 필요에 따라 클라이언트 사이드 렌더링을 사용할 수 있게 해 줍니다.
  페이지 기반 라우팅 시스템:
  Next.js는 파일 시스템 기반의 라우팅 시스템을 제공합니다. pages 디렉터리에 있는 각 파일은 URL 경로에 자동으로 매핑되며, 동적 라우팅을 통해 다양한 URL 패턴을 처리할 수 있습니다.

- **코드 스플리팅과 최적화:**
  Next.js는 자동 코드 스플리팅을 지원하여, 필요한 코드만 로딩되게 해 줍니다. 이는 애플리케이션의 로딩 시간을 줄이고, 성능을 향상하는데 도움이 됩니다.

- **API 라우트:**
  pages/api 디렉터리를 사용하여 백엔드 로직을 처리할 수 있는 API 라우트를 쉽게 생성할 수 있습니다. 이를 통해 RESTful API 또는 GraphQL API를 구축하고, 서버리스 함수를 사용할 수 있습니다.

- **스타일링:**
  Next.js는 CSS 모듈, 스타일드 컴포넌트, Emotion 등 다양한 스타일링 옵션을 제공합니다. 이를 통해 컴포넌트 기반의 스타일링을 쉽게 적용할 수 있습니다.

- **플러그인과 커뮤니티:**
  Next.js는 다양한 플러그인과 커뮤니티의 지원을 받고 있어, 추가 기능을 쉽게 통합하고, 문제를 해결할 수 있습니다.

### Project Setup

React의 경우 아래 도구를 사용하였습니다.

```bash
yarn create react-app
```

Next.js 또한 비슷한 CLI를 사용합니다. TypeScript 옵션을 사용해서 아래와 같이 사용합니다.

```bash
yarn create next-app
```

![2](https://i.ibb.co/7jyrkMy/Start-Next-2.png)

ts와 같이 CLI에서 TypeScript를 사용한다고 명시해 주는 방법도 있지만 이렇게 생성 시에 물어보니 편한 방법으로 진행하면 됩니다.

![3](https://i.ibb.co/H4x42Vz/Start-Next-3.png)

ESLint 사용여부설정

![4](https://i.ibb.co/fdpM8pt/Start-Next-4.png)

TailWind CSS 사요 여부 설정 Yes를 선택하면 자동으로 구성 설정을 다 적용해 줍니다.

![5](https://i.ibb.co/bRFrnqP/Start-Next-5.png)

src 디렉터리를 사용할 건지 물어봅니다.

![6](https://i.ibb.co/ggRJJPG/Start-Next-6.png)

Next.js 13 버전에서는 router 구성을 pages폴더가 아닌 app에서 바로 설정하는 것으로 바뀌었습니다.

Next.js 12에서

pages/test/index.tsx

pages/test/testFile.tsx

pages/test/[id]. tsx와 같이 routing 하여 useRouter와 Link를 사용하여 페이지로 이동하였다면

Next.js 13에서는 app/기반으로

app/test/page.tsx

app/test/testFile/page.tsx처럼 모든 파일이름을 page.tsx로 정해진 파일이름으로 만들면 routing이 됩니다.

권장한다고는 하지만 이미 Next.js로 서비스를 제공하고 있는 기업들은 12 버전을 사용하므로 12 버전은 기본으로 알고 있어야 될 것 같습니다.

![7](https://i.ibb.co/Hh4b3m3/Start-Next-7.png)

![8](https://i.ibb.co/tzjNTBT/Start-Next-8.png)

이처럼 import 시에. 을 사용하는 것이 아닌 @를 사용하여 경로 표시를 하는데 이걸 커스텀하겠냐고 하는 옵션인 것 같습니다.

이것을 끝으로 Next.js app이 생성됩니다.
