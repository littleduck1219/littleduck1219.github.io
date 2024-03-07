---
date: '2024-02-25'
title: 'React Query: Caching 정책'
categories: ['Web', 'React']
summary: 'Next에서 Data를 다루는 방법에 대해서 알아보았습니다.'
thumbnail: './React_Query-Caching_1.png'
---

detail page에 들어간후에 다시 뒤로가기, 그리고 다시 detail에 들어가면 데이터요청이 다시 되는 것을 확인 할 수 있었습니다.
react caching 정책으로 불러왔던 내용을 caching하여 내용을 저장하는 기능이 있습니다.

```tsx
export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient({});
    return client;
  };
})();
```

![1](https://i.ibb.co/HBQZ6CW/React-Query-Caching-1.gif)

defaultoption을 통해 캐쉬를 사용하여 데이터를 일정 시간동안 저장하는 기능을 사용하였습니다.

```tsx
export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();
```

![2](https://i.ibb.co/1Rp25Sq/React-Query-Caching-2.gif)

다음은 적용한 Query 옵션입니다.

QueryClient의 옵션은 React Query의 동작을 세부적으로 설정할 수 있게 해줍니다. 주어진 코드에서 사용된 옵션들은 다음과 같습니다:

- **cacheTime**: 쿼리 데이터가 캐시에서 제거되기 전까지의 시간을 밀리초 단위로 설정합니다. 여기서는 24시간(1000 _ 60 _ 60 \* 24 ms)으로 설정되어 있습니다.

- **staleTime**: 쿼리 데이터가 "신회화(stale)"되기 전까지의 시간을 밀리초 단위로 설정합니다. "신회화"란 쿼리 데이터가 더 이상 신뢰할 수 없어서 다시 가져와야 하는 상태를 의미합니다. 여기서는 1분(1000 \* 60 ms)으로 설정되어 있습니다.
- **refetchOnMount**: 컴포넌트가 마운트될 때 쿼리를 다시 가져올지 여부를 설정합니다. false로 설정되어 있으므로, 컴포넌트가 마운트될 때 쿼리를 다시 가져오지 않습니다.
- **refetchOnReconnect**: 네트워크가 다시 연결되었을 때 쿼리를 다시 가져올지 여부를 설정합니다. false로 설정되어 있으므로, 네트워크가 다시 연결되어도 쿼리를 다시 가져오지 않습니다.
- **refetchOnWindowFocus**: 윈도우 포커스가 복귀했을 때 쿼리를 다시 가져올지 여부를 설정합니다. false로 설정되어 있으므로, 윈도우 포커스가 복귀했을 때 쿼리를 다시 가져오지 않습니다.
