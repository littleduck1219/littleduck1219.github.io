---
date: '2024-03-30'
title: 'Function형 컴포넌트와 Class형 컴포넌트'
categories: ['Web', 'CS', 'React']
summary: 'Class와 Function 컴포넌트 차이'
thumbnail: '../../static/react_logo.png'
---

### 구조적 차이

- **Class** : Class 형태의 컴포넌트로, React.Component클래스를 상속받아 생성됩니다.
- **Function** : 함수 형태의 컴포넌트로 JSX 형태로 UI를 생성합니다.

### State 관리

- **Class** : this.state와 this.setState() 메서드를 사용하여 컴포넌트의 state를 관리합니다.
- **Function** : React.Hooks를 사용하여 useState 훅을 통해 상태 관리합니다.

### Life Cycle 메서드

- **Class** : this.state와 this.setState() 메서드를 사용하여 컴포넌트의 상태(state)를 관리합니다.
- **Function** : useEffect 훅을 사용하여 생명주기 관리를 할 수 있습니다.

### this 바인딩

- **Class** : this는 현재 클래스의 인스턴스를 가리킵니다.
- **Function** : 함수 컴포넌트 내부에서 this는 해당 함수 자체를 가리키지 않습니다.

### 코드 길이 및 가독성

- **Class** : 상태 관리, 라이프사이클 메서드 등이 클래스 내에 선언되므로 코드가 상대적으로 길어질 수 있습니다.
- **Function** : 함수 형태로 간결하게 정의되므로 코드가 간단하고 가독성이 좋습니다.

### 성능

- **Class** : 불필요한 재렌더링이 발생할 수 있으며, 라이프사이클 메서드의 사용으로 인해 성능에 영향을 줄 수 있습니다.
- **Function** : React의 최신 버전에서 함수형 컴포넌트의 성능이 향상되어 Class 컴포넌트와 거의 동일한 수준으로 처리됩니다.
  <br>
  <br>
  <br>
  React에서는 함수형 컴포넌트가 간결함과 가독성때문에 선호되며, class는 내부에서 라이프 사이클 코드가 선언되어 복잡하고 길어지지만 함수형 컴포넌트는 Hook를 통해 상태 관리와 라이프사이클 기능을 제공하며 간결하고 가독성이 좋은 좋은 코드를 작성할 수 있습니다.
