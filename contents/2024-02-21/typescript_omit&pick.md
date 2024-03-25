---
date: '2024-02-21'
title: 'TypeScript Omit & Pick'
categories: ['Web', 'TypeScript']
summary: 'TypeScript 의 Omit과 Pick에 대해서 알아보았습니다.'
thumbnail: '../../static/typescript.png'
---

```tsx
export type Menu = {
  name: string;
  price: number;
  category: string;
};
```

위 타입을 가져와서 쓸 때 모든 요소들을 사용하지 않으면 타입스크립트에서는 에러를 발생시킵니다.

![1](https://i.ibb.co/t8dQwVd/typescript-omit-pick-1.png)

지금 빼먹은건 가격인데요. 가격을 가져오고 싶지 않다 할 때 "Omit"을 사용합니다.

![2](https://i.ibb.co/tCKxhG8/typescript-omit-pick-2.png)

![3](https://i.ibb.co/FmKM2Xh/typescript-omit-pick-3.png)

price를 뺀 내용을 가지고 새로운 타입을 선언해주는 것이 아닌 Omit을 이용해서 price를 제외한 변수를 새로 만들어 주었습니다.
반대로 pick을 이용해서 필요한 것을 선택해서 가져오는 것도 있습니다.
