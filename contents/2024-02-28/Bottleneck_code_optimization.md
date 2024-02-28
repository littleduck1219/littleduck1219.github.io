---
date: '2023-02-01'
title: '병목현상 코드 최적화'
categories: ['Web', 'React']
summary: '병목 현상을 확인하고 코드를 최적화 시도를 해보도록 하겠습니다.'
thumbnail: './Bottleneck_code_optimization_4.png'
---

<center>
병목 현상을 확인하고 코드를 최적화 시도를 해보도록 하겠습니다.

![Attached Photo 1](./Bottleneck_code_optimization_1.png)
현제 Lighthouse 스코어는 81 점입니다.

![Attached Photo 2](./Bottleneck_code_optimization_2.png)
Performance 탭을 확인해 본 결과 Article이라는 컴포넌트에서 특정함수가 여러 번 실행되는 것을 확인할 수 있습니다.<br>

병목현상에 대해서 "병목 현상은 시스템이나 프로세스에서 특정 부분의 제한된 용량으로 인해<br>
전체 성능이나 효율성이 저하되는 현상을 말합니다.<br>
이는 컴퓨터 과학, 특히 소프트웨어 개발 및 시스템 설계에서 중요한 개념입니다.<br>
병목 현상은 여러 분야에서 발생할 수 있으며, 각각의 영역에서 그 특성이 다를 수 있습니다."라고 설명하고 있습니다.<br>

위와 같은 현상으로 병목 현상이 발생하고 있으며 웹의 성능을 저하시키고 있는 것을 확인하였습니다.<br>

반복되는 부분을 제거하고 한 번만 실행되도록 코드를 개선하여 다시 측정해 보았습니다.

![Attached Photo 3](./Bottleneck_code_optimization_3.png)
반복 실행되던 부분은 완전히 개선되었습니다.
![Attached Photo 4](./Bottleneck_code_optimization_4.png)
Ligthhouse 스코어 93점으로 Performance 탭을 이용하여 웹성능 개선을 하였습니다.
