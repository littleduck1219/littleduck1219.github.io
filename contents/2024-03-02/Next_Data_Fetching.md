---
date: '2024-03-02'
title: 'Next.js::Data Fetching'
categories: ['Web', 'React', 'Next.JS']
summary: 'Next에서 Data를 다루는 방법에 대해서 알아보았습니다.'
thumbnail: './Next_Data_Fetching_1.png'
---

![1](./Next_Data_Fetching_1.png)

서버 데이터를 가져와 페이지를 렌더링 하거나, 클라이언트 데이터를 가져와 동적으로 페이지를 업데이트할 수 있음<br>
Doc: https://nextjs.org/docs/pages/building-your-application/data-fetching

<ul>
<li>getStaticProps: 빌드 시점에 필요한 데이터 가져오는 함수</li>
<li>getStaticPaths: 동적 경로를 사용할 때, 필요한 경로의 목록을 동적으로 생성하는 함수</li>
<li>getServerSideProps: 매 요청마다 서버에서 필요한 데이터를 가져오는 함수</li>
<li>APIRoutes: Next.js에서 엔드포인트를 생성 / 사용하여 데이터를 가져오는 방법</li>
</ul>

<h2>getStaticProps</h2>
getStaticProps 는 빌드 시점에 필요한 데이터를 가져오는 함수입니다. 이 함수는 서버 사이드에서만 실행되며, 반환된 props는 페이지의 props는 페이지의 props로 전달됩니다. 이 함수는 주로 변동성이 적은 데이터를 사전 렌더링할 때 사용됩니다.

```tsx
// pages/index.tsx
export async function getStaticProps() {
  // 외부 API 호출이나 데이터베이스 쿼리 등을 통해 데이터를 가져옵니다.
  const data = await fetchData();

  return {
    props: {
      data,
    },
    // 선택적으로 revalidate 키를 사용하여 ISR(증분적 정적 재생성)을 설정할 수 있습니다.
    revalidate: 1, // 1초마다 페이지를 재생성합니다.
  };
}

// 이제 data prop은 페이지 컴포넌트의 props로 전달됩니다.
function Page({ data }) {
  // ...
}
```

<h2>getStaticPaths</h2>
getStaticPaths는 동적 라우팅을 사용할 때, 빌드 시점에 필요한 경로의 목록을 생성하는 함수입니다. 이 함수는 getStaticProps와 함께 사용되어, 동적 경로에 대한 정적 페이지를 미리 생성할 수 있게 해 줍니다.

getStaticPaths는 paths와 fallback 두 개의 값을 반환해야 합니다. paths는 미리 생성할 페이지의 경로 목록을 나타내며, fallback은 지정된 경로 외에 다른 경로에 대한 요청이 들어올 때 어떻게 처리할지를 정의합니다.

```tsx
export async function getStaticPaths() {
  // 외부 API를 호출하거나, 데이터베이스에 접근하여 동적 경로의 목록을 가져옵니다.
  const paths = await fetchPaths();

  return {
    paths,
    fallback: false, // 미리 생성되지 않은 경로에 대한 요청이 들어오면 404 페이지를 보여줍니다.
  };
}
```

<h2>getServerSideProps</h2>
getServerSideProps는 매 요청마다 서버에서 필요한 데이터를 가져오는 함수입니다. 이 함수는 서버 사이드에서만 실행되며, 반환된 props는 페이지의 props로 전달됩니다. 이 함수는 주로 변동성이 높은 데이터를 사전 렌더링할 때 사용됩니다.

```tsx
// pages/posts.tsx
export async function getServerSideProps() {
  // 외부 API 호출이나 데이터베이스 쿼리 등을 통해 데이터를 가져옵니다.
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
}

// 이제 data prop은 페이지 컴포넌트의 props로 전달됩니다.
function Posts({ data }) {
  // ...
}
```

<h2>getServerSideProps</h2>
Next.js의 API 라우트는 서버리스 함수를 생성하여 데이터를 가져오는 데 사용할 수 있습니다. pages/api디렉터리에 파일을 생성하면, 해당 파일은 API 엔드포인트로 자동으로 변환됩니다.

```tsx
// pages/api/posts.js
export default async (req, res) => {
  const response = await fetch('https://api.example.com/posts');
  const data = await response.json();

  res.status(200).json(data);
};
```
