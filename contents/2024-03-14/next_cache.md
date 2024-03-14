---
date: '2024-03-14'
title: '클로저'
categories: ['Web', 'React', 'Next.JS']
summary: 'Next.js에는 Cache계층이 존재 합니다.'
thumbnail: '../../static/Next.js.png'
---

![1](../../static/Next.js.png)

Next.js환경 프로젝트진행중에 새로운 데이터를 추가했음에도 리스트에 반영이 안되고 새로고침을 해야 반영되는 현상이 있어 해결하고자 알아보았습니다.

## Next.js Cache 계층

### Data Cache

오로지 fetch 함수를 사용하여 데이터를 가져올 때 사용되며, fetch 결과를 데이터 케시에 저장하여, 같은 주소에 대한 요청을 네트워크를 통해 가져오지 않고 데이터 캐시에서 읽어옵니다.
컨트롤 하는 방법으로 시간인자 값이나 no-cache를 넘겨주면 제어할 수 있습니다.

```tsx
// Revalidate at most every hour
fetch('https://...', { next: { revalidate: 3600 } });
// Opt out of caching for an individual `fetch` request
fetch(`https://...`, { cache: 'no-store' });
```

### Full Route Cache

빌드 후 정적 렌더링에 대한 값을 캐싱합니다.

다이나믹 라우트에따라 정적인지 동적인지 결정됩니다.

<br>
<hr>

> 현제 프로젝트는 fetch가 아닌 axios를 사용하고 있으며, 리스트 페이지는 정적 렌더링을 사용하고 있습니다. Full Route Cache에 따라 >정적 렌더링에 대한 캐싱작업이 적용되어있어 렌더링에 제한이 발생했습니다.

```tsx
export const dynamic = 'force-dynamic';
```

force-dynamic 옵션을 줌 으로써 항상 동적 렌더링이 실행되게 해주면 해결됩니다.
