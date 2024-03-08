---
date: '2024-01-12'
title: 'Data preprocessing_2 Encoding Categorical data'
categories: ['Python', 'DataScience', 'CNN']
summary: 'categorycal data encoding을 하여 처리하는 방법을 써보도록 하겠습니다.'
thumbnail: './Data preprocessing_2 Encoding Categorical data_1.png'
---

categorycal data encoding을 하여 처리하는 방법을 써보도록 하겠습니다.

![1](https://i.ibb.co/jbcPn1z/Data-preprocessing-1-missing-data-1.png)

위 데이터 세트에 범주형 데이터가있는 열이 있는데 bread, coffee ... 가 있는 부분입니다.

머신러닝 모델이 이 열들 사이의 상호 관계를 계산하는 것은 어려우므로, 
문자열로 이루어진 categorycal data를 numeric data로 바꿔주어야(encoding) 합니다.
ex) bread 0, coffee 1, cake 2 jam 3 cookie 4

하지만 이렇게 하면 각 항목별 순서가 있다고 생각할 수 있고 그 순서가 중요하다고 생각 할 수 있습니다.
실제로는  아무 관계가 없기때문에 이런 결과를 피해주어야 합니다.

더 나은 방법으로 **One-Hot encoding** 하는 것 입니다.

One-Hot encoding은 각 항목에 이진 벡터를 생성하는 것으로 구성됩니다.

import -

```python
import pandas as pd
import numpy as np
```

data-

```python
dataset = pd.read_csv('Book2.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values
print(X)
```

![2](https://i.ibb.co/DR9s5Bp/Data-preprocessing-2-Encoding-Categorical-data-2.png)

One-Hot encoding을 사용하기 위한 모듈 import-

```python
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
```

```python
ct = ColumnTransformer(transformers=[("encoder", OneHotEncoder(), [0])], remainder="passthrough")
X = np.array(ct.fit_transform(X))
```

0번째 행을 변환할 것이고 나머지는 넘어가야 하기 때문에 passthrough를 넣어줍니다.
np.array타입으로 가져야하므로 앞에 np.array를 붙여줍니다.

![3](https://i.ibb.co/rFghvfm/Data-preprocessing-2-Encoding-Categorical-data-3.png)

이렇게 One-Hot encoding을 완료 하였습니다.

하지만 하나더 변경할 부분이 남아있습니다. 바로 labeldata인데요
현제 yes와 no로 구별 되어있으니 0과 1로 변경해 주어야 합니다.

```python
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
y = le.fit_transform(y)


print(y)
```

![4](https://i.ibb.co/SXVdYLc/Data-preprocessing-2-Encoding-Categorical-data-4.png)
