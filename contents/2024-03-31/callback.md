---
date: '2024-03-31'
title: 'Callback 함수'
categories: ['Web', 'CS', 'JavaScript']
summary: 'Callback 함수란'
thumbnail: '../../static/js.png'
---

콜백 함수(callback function)는 다른 함수의 매개변수로 전달되어 실행되는 함수를 말합니다. 이러한 함수는 일급 객체로 취급되어 변수에 할당하거나 다른 함수의 인자로 전달될 수 있습니다. 주로 비동기 작업에서 사용되며, 특정 이벤트가 발생하거나 작업이 완료되었을 때 호출됩니다.

- **함수로서의 콜백**: 콜백 함수는 일반적인 JavaScript 함수와 마찬가지로 함수의 역할을 수행합니다. 따라서 함수의 정의와 호출, 매개변수 전달 등이 가능합니다.

- **비동기 처리**: 주로 비동기 작업에서 사용되며, 특정 이벤트 발생 시나 작업 완료 시에 호출됩니다. 예를 들어, 타이머 함수(setTimeout), 이벤트 핸들러, AJAX 요청 등에서 콜백 함수가 사용됩니다.

- **매개변수로 전달**: 다른 함수의 매개변수로 전달되어 사용됩니다. 이를 통해 함수의 동작을 유연하게 구성할 수 있습니다.

- **클로저(Closure)**: 콜백 함수는 자신이 정의된 스코프의 변수에 접근할 수 있습니다. 이를 통해 외부 변수에 대한 접근이 가능하며, 클로저를 이용하여 변수를 보호하거나 상태를 유지할 수 있습니다.

- **콜백 지옥(Callback Hell)**: 콜백 함수가 중첩되어 가독성이 떨어지고 코드가 복잡해지는 현상을 말합니다. 이를 해결하기 위해 Promise, async/await와 같은 비동기 처리 방식이 사용됩니다.
