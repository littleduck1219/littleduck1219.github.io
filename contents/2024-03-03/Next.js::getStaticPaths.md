---
date: '2024-03-03'
title: 'Next.js::getStaticPaths'
categories: ['Web', 'React', 'Next.JS']
summary: 'Next에서 Data를 다루는 방법에 대해서 알아보았습니다.'
thumbnail: './Next.js::getStaticPaths_1.png'
---

![1](./Next.js::getStaticPaths_1.png)

Next.js의 getStaticPaths 함수는 정적 생성을 사용할 때 동적 라우트를 가진 페이지에 필요합니다.<br>
이는 포스트 페이지의 id 값을 경로를 가지는 것 처럼 /posts/[id]와 같은 경로의 [id] 부분이 고정되어 있지 않는 것을 말합니다.

getStaticPaths는 빌드 시에 어떤 동적 경로들이 존재하는지 알려주어, 각각의 경로에 해당하는 HTML 페이지를 미리 생성할 수 있게 합니다.<br>
이렇게 생성된 페이지들은 요청이 있을때 바로 제공될 수 있으며, 서버 사이드에서 매번 페이지를 생성할 필요가 없어 성능 향상을 얻을 수 있습니다.

```tsx
export async function getStaticPaths() {
  // 여기에서 외부 데이터를 가져와서 사용할 수 있습니다.
  const posts = await getPosts(); // 가정: getPosts()는 모든 포스트의 ID를 가져옵니다.

  // paths는 getPosts() 함수로부터 가져온 포스트 ID를 기반으로 생성됩니다.
  const paths = posts.map(post => ({
    params: { id: post.id },
  }));

  // fallback: false는 다른 모든 경로가 404로 이어지게 합니다.
  return { paths, fallback: false };
}
```

getStaticPaths의 객체 입니다.
path : 미리 빌드할 경로들의 배열 입니다. 각 경로는 params키를 포함하는 객체로, 동적 부분을 채우는데 사용됩니다.
fallback : 이 값이 false이면 paths에 정의되지 않은 모든 경로는 404페이지로 이동됩니다. true 또는 blocking으로 설정하면, 정의되지 않은 경로에 대한 요청이 들어왔을때, 백엔드에서 페이지를 생성하고, 요청에 대해서는 정적 페이지로 서비스 합니다.
