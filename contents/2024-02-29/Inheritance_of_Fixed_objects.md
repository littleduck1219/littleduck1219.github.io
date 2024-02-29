---
date: '2024-02-29'
title: 'CSS: Fixed 객체의 상속'
categories: ['Web', 'React']
summary: '자식요소가 fixed인 경우 부모요소와 영역의 설정이 잘 안 되는 경우가 있다고 합니다.'
thumbnail: './Inheritance_of_Fixed_objects_2.png'
---

<center>

![1](https://1drv.ms/i/c/bae70a53437eb109/IQNAwh3RgfsLRbwT6GTwZOXAARqIrMGRnRBxLxu1UdhQLzM?width=1280&height=805)

</center>

```tsx
.leftSection {
    background-color: orange;
    width: 275px;
    padding: 0 8px;
    height: 100dvh;
}

.leftSectionFixed {
    position: fixed;
    width: 100%;
    height: 100dvh;
}
```

현제 leftSection안에 leftSectionFixed를 넣은 상태입니다. <br>
요소탭을 켜서 커서를 대어보니 이렇게 영역이 어긋나 보이고 있습니다.<br>
보통 같은 사이즈 100%를 지정하는데 자식요소가 fixed인 경우 부모요소와 영역의 설정이 안 되는 경우가 있다고 합니다.

이럴 경우 width: inherit를 설정하면 부모사이즈의 상속이 자식에게 이뤄지는 것을 확인할 수 있습니다.

<center>

![2](https://1drv.ms/i/c/bae70a53437eb109/IQNYNVDxdoC3SbxMXifSmSixAbkQT1w2G_N4BC6JWEuc2f0?width=1280&height=805)

</center>
