---
date: '2024-03-04'
title: 'Next.js::API Router'
categories: ['Web', 'React', 'Next.JS']
summary: 'Next에서 routing에 대해서 알아보았습니다.'
thumbnail: './Next.js::API_Router_1.png'
---

![1](./Next.js::API_Router_1.png)

Next.js에서는 API엔드포인트를 생성할 수 있는 기능을 제공하여 이로인해 Next.js 애플리케이션 내에서 백엔드 로직을 실행할 수 있게 해주며, 다른 서버없이 API를 구축하고 관리할 수 있습니다.

pages폴더 아래 api폴더의 파일에서는 API를 정의합니다. page router와 마찬가지로 파일의 위치에 따라 경로가 결정됩니다.
pages/api/user_api.ts파일은 /api/user_api엔드포인트로 접근이 가능하게 됩니다. 동적 라우팅 또한 파일 이름으로 이루어지며, 파일 이름에 대괄호를 사용하여 동적 API라우트를 생성할 수 있습니다. pages/api/posts/[id].js로 api/posts/5 같은 엔드포인트에 매핑 됩니다.

API라우트는 Node.js환경에서 실행되는 서버리스 함수로 처리, 빌드 타임에 배포되며, 각 요청에 대해 독립적으로 실행 됩니다.

또 미들웨어를 사용할 수 있어 요청을 처리하기 전에 인증 또는 로깅과 같은 작업을 수행할 수 있습니다.
