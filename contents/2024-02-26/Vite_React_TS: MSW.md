---
date: '2024-02-26'
title: 'Vite + React + TS: MSW'
categories: ['Web', 'React', 'Vite']
summary: 'MSW는 Mock Service Worker의 약자로, 웹 브라우저에서 API 목업을 위한 도구입니다. 이를 이용하여 실제 서버에서 요청을 보내는 대신 클라이언트 측에서 가상의 응답을 통해 테스트를 진행할 수 있게 하는 도구입니다.'
thumbnail: './Vite_ React_TS-MSW_2.png'
---

MSW는 Mock Service Worker의 약자로, 웹 브라우저에서 API 목업을 위한 도구입니다. 이를 이용하여 실제 서버에서 요청을 보내는 대신 클라이언트 측에서 가상의 응답을 통해 테스트를 진행할 수 있게 하는 도구입니다.

궁금하신 게 있으시다면 공식문서를 확인하시면 되겠습니다.

https://mswjs.io/docs/getting-started/install

### 1.Install

npm, yarn에 나눠서 설치를 진행해 주면 되겠습니다.

```bash
npm install msw --save-dev

# or

yarn add msw --dev
```

### 2.Define mocks

```bash
mkdir src/mocks
```

src폴더에 mocks라는 폴더를 만들어 줍니다.

```bash
touch src/mocks/handlers.js
```

handlers.js라는 파일을 만들어 줍니다. 당연히 TypeScript를 사용한 개발 중이시라면 확장자가 ts가 되겠습니다.

### 3.handler requests

api를 요청하도록 작업을 진행합니다. 저는 REST가 아닌 GraphQL로 진행하였습니다.

```tsx
// src/mocks/handlers.js
import { graphql } from 'msw';
import { v4 as uuid } from 'uuid';
import { GET_PRODUCT, GET_PRODUCTS } from '../graphql/products';

// mocking data
const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id: uuid(),
  imageUrl: `https://loremflickr.com/640/480?random=${i + 1}`,
  price: 50000,
  title: `임시상품${i + 1}`,
  description: `임시상품상세내용${i + 1}`,
  creactedAt: new Date(1694461295180 + i * 1000 * 60).toString(),
}));

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mock_products,
      }),
    );
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    return res(ctx.data(mock_products[0]));
  }),
];
```

```tsx
import { gql } from 'graphql-tag';

export const GET_PRODUCTS = gql`
  query GET_PRODUCT {
    id
    imageUrl
    price
    title
    description
    createdAt
  }
`;

export const GET_PRODUCT = gql`
  query GET_PRODUCT($id: string) {
    id
    imageUrl
    price
    title
    description
    createdAt
  }
`;
```

### 4.start

browser 생성

```bash
npx msw init public/ --save
```

public을 설치해주면 폴더가 생성됩니다. 그대로 두시면 됩니다.

```tsx
// src/mocks/browser.js
import { setupWorker } from 'msw';
import { handlers } from './handlers';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
```

위 코드를 그대로

```tsx
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}
```

이 코드를 최상단 root파일에 넣어주면 됩니다.

vite의 경우 환경변수가 틀리기 때문에 다르게 적용시켜 줬습니다. 자세한 내용은 공식문서에서 확인하세요
https://ko.vitejs.dev/guide/env-and-mode.html

![1](https://i.ibb.co/2qxzNGm/Vite-React-TS-MSW-1.png)

<span style="color:red; font-weight:bold;">[MSW] Mocking enabled.</span>
라는 메시지와 함께 데이터요청이 정상적으로 이뤄진 것을 확인할 수 있습니다.

![2](https://i.ibb.co/7Y9pGTY/Vite-React-TS-MSW-2.png)
