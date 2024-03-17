---
date: '2024-03-17'
title: 'JavaScript의 비동기'
categories: ['Web', 'cs', 'frontend']
summary: 'JavaScript는 객체 기반의 스크립트 프로그래밍 언어로, 주로 웹 페이지의 동적 기능을 구현하는 데 사용됩니다. '
thumbnail: './js.png'
---

## 비동기

자바스크립트의 비동기 처리란 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성을 의미합니다.

자바스크립트에서의 예로 ajax 통신을 시도했을때 데이터를 온전히 받아오기 전에 undefined를 출력하는 것입니다. 서버가 언제 요청을 응답할지 모르는데 서버의 응답을 기다리는 것은 비효율적 이기 때문입니다. 이 이외에도 `setTimeout`을 사용한 코드가 있습니다.

## Promise

프로미스는 자바스크립트 비동기 처리에 사용되는 객체입니다. 자바스크립트에서 비동기란 특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 것을 말합니다.
프로미스는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용합니다.

프로미스에는 기본적인 상태라는 처리과정이 존재합니다.

- Pending(대기) : 비동기 로직이 아직 완료되지 않은 상태
- Fulfilled(이행) : 비동기 처리가 완료되어 결과 값이 반환된 상태
- Reject(실패) : 비동치 처리가 실패된 상태

## call back 함수

콜백 함수는 비동기 작업이 완료되었을 때 실행되도록 지정할 수 있습니다. 예를 들어, 파일을 읽는 작업이나 네트워크 요청을 보내는 작업과 같은 비동기 작업이 완료된 후에 특정한 동작을 실행하려면 콜백 함수를 사용할 수 있습니다.

```jsx
// 콜백 함수를 setTimeout으로 사용하는 예시
setTimeout(function () {
  console.log('일정 시간이 지났습니다.');
}, 1000); // 1초 후에 실행
```

```jsx
// Promise를 사용하여 콜백 지옥을 해결하는 예시
function waitForOneSecond() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('일정 시간이 지났습니다.');
    }, 1000);
  });
}

waitForOneSecond()
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.error('에러 발생:', error);
  });
```

## async/await

async/await는 Promise를 기반으로 동작하며, 비동기 코드를 보다 간결하고 동기적으로 작성할 수 있도록 해줍니다. async 함수 내에서 await 키워드를 사용하여 비동기 작업의 완료를 기다릴 수 있습니다.

```jsx
// async/await를 사용하여 콜백 지옥을 해결하는 예시
async function printAfterOneSecond() {
  try {
    const message = await waitForOneSecond();
    console.log(message);
  } catch (error) {
    console.error('에러 발생:', error);
  }
}

printAfterOneSecond();
```

## 용어

- **테스크** : 자바스크립트 엔진이 실행할 작업의 단위를 말합니다. 이는 주로 함수 실행, 이벤트 핸들링, 비동기 작업 처리 등을 포함합니다. 자바스크립트는 싱글 스레드 기반의 언어이기 때문에 하나의 테스크가 완료되기 전에는 다른 테스크가 실행되지 않습니다. 비동기 작업은 이벤트 루프(Event Loop)를 통해 처리되며, 이벤트 루프는 여러 테스크를 관리하고 실행 순서를 조정합니다.

- **프로세스** : 운영 체제 수준에서 실행 중인 프로그램의 인스턴스를 말합니다. 자바스크립트는 브라우저나 Node.js와 같은 런타임 환경에서 프로세스로 실행됩니다. 각각의 프로세스는 독립된 메모리 공간을 가지며, 서로 영향을 미치지 않습니다.

- **스레드** : 프로세스 내에서 실행되는 실행 단위를 말합니다. 대부분의 경우, 자바스크립트는 싱글 스레드로 실행되지만, 웹 브라우저는 여러 개의 스레드를 사용하여 다양한 작업을 처리합니다. 예를 들어, 렌더링을 담당하는 메인 스레드 외에도 네트워크 요청이나 파일 I/O와 같은 작업을 처리하는 별도의 스레드가 있을 수 있습니다.
