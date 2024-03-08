---
date: '2024-01-13'
title: 'Data preprocessing_3 feature scaling'
categories: ['Python', 'DataScience']
summary: 'feature scaling은 모든 변수나 특징을 스케일링하며, 모든 값이 같은 단위가 되게하고,
특별히 튀는 값이 머신러닝 모델에서 큰영향을 미치는 것을 막아줍니다.'
thumbnail: './Data preprocessing_3 Feature Scaling_1.png'
---

feature scaling은 모든 변수나 특징을 스케일링하며, 모든 값이 같은 단위가 되게하고,
특별히 튀는 값이 머신러닝 모델에서 큰영향을 미치는 것을 막아줍니다.

feature scaling은 data를 train, test로 split해준 다음에 실시 해야 합니다.
test셋은 모델을 테스트 하기위한 완전히 새로운 데이터이며 절대 영향을 받아선 안되기 때문 입니다.

Standardisation(표준화)
Normalisation(정규화)

![1](https://i.ibb.co/J2Z5PWq/Data-preprocessing-3-Feature-Scaling-1.png)

표준화는 언제나 사용이 가능하고
정규화는 대부분의 특성이 정규분포를 따르는 상황에 권장됩니다.

표준화를 사용해 보겠습니다.
train에 fit_transform을 적용시키고
test에는 transform만 하도록 하겠습니다.

```python
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train[:, 5:] = sc.fit_transform(X_train[:, 5:])
X_test[:, 5:] = sc.transform(X_test[:, 5:])
```

![2](https://i.ibb.co/jhq1xD5/Data-preprocessing-3-Feature-Scaling-2.png)
