---
date: '2024-01-11'
title: 'Data preprocessing_1 missing data'
categories: ['Python', 'DataScience', 'CNN']
summary: '데이터 전처리 중 데이터가 빈경우 채워 넣는 법을 다루겠습니다.'
thumbnail: './Data preprocessing_1 missing data_1.png'
---

데이터 전처리 중 데이터가 빈경우 채워 넣는 법을 다루겠습니다.
빈 데이터를 채우는 방법에는 여러가지가 있습니다.

```python
dataset = pd.read_csv("Book2.csv" , encoding_errors='ignore')
dataset
```

![1](https://i.ibb.co/jbcPn1z/Data-preprocessing-1-missing-data-1.png)

csv를 읽어 왔습니다.

```python
x = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values
print(x)
```

![2](https://i.ibb.co/2sYvxq5/Data-preprocessing-1-missing-data-2.png)

iloc를 이용하여 값들을 불러 변수에 담았습니다.

빈칸을 sklearn의 SimpleImputer를 이용하여 평균값으로 채워보도록 하겠습니다.

```python
from sklearn.impute import SimpleImputer
imputer = SimpleImputer(missing_values=np.nan, strategy='mean')
imputer.fit(x[:, 1:3])  # fit -> 전체 열을 읽고 누락된 데이터를 찾을 열을 지정할 수 있다.
x[:, 1:3] = imputer.transform(x[:, 1:3])  # 평균값으로 대체
print(x)
```

![3](https://i.ibb.co/C1dQCKt/Data-preprocessing-1-missing-data-3.png)

이렇게 아까와는 다르게 평균값으로 값이 채워진 것을 확인할 수 있습니다.
