---
date: '2024-03-13'
title: '클로저'
categories: ['Web', 'CS', 'Frontend']
summary: '클로저(Closure)는 자바스크립트의 중요한 개념 중 하나로, 함수와 그 함수가 선언된 렉시컬 환경(Lexical Environment)과의 조합을 가리킵니다. '
thumbnail: '../../static/js.png'
---

클로저는 함수와 함수가 선언된 렉시컬 환경 (lexical environment)의 조합입니다. 렉시컬 환경은 함수가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성됩니다. 즉, 클로저는 내부 함수가 외부 함수에 있는 상태에 접근할 수 있는 권한을 부여합니다.

### 클로저의 특징

- **외부 함수의 변수에 접근 가능** : 클로저 내부 함수는 자신이 정의된 외부 함수의 변수에 접근할 수 있습니다. 이는 외부 함수의 실행이 종료된 이후에도 해당 변수에 접근할 수 있는 것을 의미합니다.
- **렉시컬 스코핑** : 클로저는 렉시컬 스코프를 따르므로, 함수가 선언된 위치에 따라 외부 변수에 접근할 수 있습니다.
- **비동기 작업 및 콜백 함수** : 클로저는 비동기 작업이나 콜백 함수에서 많이 사용됩니다. 외부 변수를 유지하고 사용하기 위해 클로저를 활용할 수 있습니다.

```javascript
function outer() {
  let value = 'I am outer';

  function inner() {
    console.log(value);
  }

  return inner;
}
outer();
```


**React**

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };
```
