---
date: '2024-03-12'
title: 'hoisting'
categories: ['Web', 'cs', 'frontend']
summary: '호이스팅에 대해 알아 보았습니다.'
thumbnail: '../../static/js.png'
---

## 호이스팅

호이스팅은 자바스크립트에서 변수와 함수 선언을 코드 최상단으로 끌어올리는 것을 말합니다. 실제로 코드가 재배치되는 것이 아니며, 자바스크립트 엔진이 코드를 실행하기 전에 변수와 함수 선언을 메모리에 저장하는 방식으로 진행됩니다. 이로 인해 함수를 선언하기도 전에 변수나 함수에 접은 할 수 있는 특별한 행동이 가능해지는데 이것을 호이스팅 이라고 합니다.

### 변수 호이스팅

var 키워드로 선언된 변수는 호이스팅이 발생합니다. 호이스팅시 변수는 not defined가 아닌 undefined로 초기화 됩니다.
그렇다고 let과 const 키워드도 호이스팅이 안되는 것은 아니나 임시사용 지대(TDZ)에 놓이면서 접근할 수 없는 상태가 됩니다.

```javascript
console.log(x); // undefined
var x = 5;

console.log(y); // not defined : ReferenceError
var y = 5;
```

### 함수 호이스팅

```javascript
hello(); // hello
function hello() {
  console.log(hello);
}
```
호이스팅은 변수와 함수의 사용범위를 제한하고 예상치 못한 에러를 방지하는데 중요합니다.