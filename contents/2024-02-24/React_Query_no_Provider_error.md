---
date: '2024-02-25'
title: 'React Query no Provider error'
categories: ['Web', 'React', 'TanstackQuery']
summary: 'vite를 사용해서 React App을 빌드하였고, react-query를 사용하여 fake shopping API를 fetch하는데 오류가 발생하였습니다.'
thumbnail: './React_Query_no_Provider_error_1.png'
---

vite를 사용해서 React App을 빌드하였고, react-query를 사용하여 fake shopping API를 fetch하는데 오류가 발생하였습니다.

![1](https://i.ibb.co/wzkS39D/React-Query-no-Provider-error-1.png)

에러 내용으로는 QueryClient, QueryClientProvider 을 하나 이상 사용해야한다? 라는 내용이였습니다.
하지만 root file에 이미 모든 작업을 마쳤었고 데이터도 QueryClient와 Provider에 마운트 되는 것과, API데이터를 받아오는 것을 확인하였습니다.

```tsx
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

```tsx
import { Suspense, useEffect } from 'react';
import { getClient } from './queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { routes } from './routes';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getClient();
  console.log('QueryClient:', queryClient);

  useEffect(() => {
    console.log('QueryClientProvider is mounted.');
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>{elem}</Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
```

이렇게 정상적으로 Router와 React Query 설정을 해주었지만 에러를 해결 할 수 없었습니다.

Vite의 https://www.npmjs.com/package/vite-plugin-next-react-router내용을 확인해보니

This plugin will scan your pages folder then automatically inject code to index html, you don't have to write any other code for initial rendering, just like Next.js. There is a example project under /example/react folder.이 플러그인은 페이지 폴더를 스캔한 다음 자동으로 코드를 삽입하여 html을 인덱싱하므로 Next.js와 마찬가지로 초기 렌더링을 위해 다른 코드를 작성할 필요가 없습니다

> **💡Tip:** This plugin will scan your pages folder then automatically inject code to index html, you don't have to write any other code for initial rendering, just like Next.js. There is a example project under /example/react folder.이 플러그인은 페이지 폴더를 스캔한 다음 자동으로 코드를 삽입하여 html을 인덱싱하므로 Next.js와 마찬가지로 초기 렌더링을 위해 다른 코드를 작성할 필요가 없습니다.

위 내용으로 app.tsx 및 main.tsx가 필요없어졌습니다.
index.html

```tsx
<script type="module" src="/src/main.tsx"></script>
```

위 부분을 삭제하고 layout.tsx로 Provider를 옮겨주었습니다.

```tsx
const Layout: React.FC = () => {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={'loading...'}>
        <Outlet />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
```

![2](https://i.ibb.co/BgQYv3N/React-Query-no-Provider-error-2.png)
