---
date: '2024-03-15'
title: 'this'
categories: ['Web', 'CS', 'Frontend', 'JavaScript']
summary: 'JavaScript에서의 this는 현재 실행 중인 코드에서 사용되는 객체를 참조하는 특수한 키워드입니다. '
thumbnail: '../../static/default.png'
---

JavaScript에서의 this는 현재 실행 중인 코드에서 사용되는 객체를 참조하는 특수한 키워드입니다. this는 실행 컨텍스트에 따라서 동적으로 결정됩니다.

### 글로벌 컨텍스트

글로벌 스코프에서 this는 전역 객체인 window를 가리킵니다. Node환경에서는 global을 가리킵니다.

![1](https://i.ibb.co/znDXSRq/5.png)

### 함수 컨텍스트

- **일반 함수** : 일반 함수 내부에서의 this는 전역 객체를 가리킵니다.

![2](https://i.ibb.co/q1DB5g6/4.png)

- **메서드 호출** : 객체의 메서드 this는 메서드 객체를 가리킵니다.

![3](https://i.ibb.co/34QpyXL/3.png)

- **생성자 함수** : 생성자 함수 내에서의 this는 새로 생성되는 인스턴스 객체를 가리킵니다.

![4](https://i.ibb.co/fXSP5wZ/2.png)

### 화살표 함수

화살표 함수(Arrow Function): 화살표 함수 내부에서의 this는 화살표 함수를 감싸는 외부 스코프에서의 this를 상속받습니다. 즉, 화살표 함수 내부에서의 this는 정적으로 결정되며, 함수가 정의될 때의 this 값을 유지합니다.

![5](https://i.ibb.co/sFZCrch/1.png)

화살표 함수는 외부 스코프의 this를 상속 받기 때문에 여기서는 window를 가르킨다<br> window에는 name없기 때문에 undefined
<br>
<br>
<br>

**외에도 다양한 경우가 있지만 this는 스코프상 상위 객체를 가르킨다고 알고 있으면 될것 같다.**
