---
date: '2024-01-10'
title: 'Can Image Classification + webcam code'
categories: ['Python', 'DataScience', 'CNN']
summary: '이전에 진행했던 프로젝트의 전체적인 부분을 다뤄보려고 합니다.'
thumbnail: './can_image_classification_code_4.png'
---

이전에 진행했던 프로젝트의 전체적인 부분을 다뤄보려고 합니다.
총 10개의 라벨 데이터 수집을 진행하였습니다. 
제가 선택한 모델은 DeIT였고, 성능이 거의 바닥을 치는 수준이어서 아쉬워서 따로 팀원들이 선택하지 않은 모델을 선택하여
학습을 진행하였습니다.

https://github.com/littleduck1219/drink_image_classification

```python
import copy
import os.path
import sys

from customdata3 import customData

import pandas as pd
import matplotlib.pyplot as plt
import torch
import torch.nn as nn
from torch.utils.data import DataLoader
import albumentations as A
from albumentations.pytorch.transforms import ToTensorV2
from torchvision import models
from timm.loss import LabelSmoothingCrossEntropy
from tqdm import tqdm

import warnings
warnings.filterwarnings('ignore')

```

```python
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
```

import 한 모듈들입니다.

```python
# augmentation, transform
train_transform = A.Compose([
    # A.SmallestMaxSize(max_size=160),
    # A.ShiftScaleRotate(shift_limit=0.05, scale_limit=0.09, rotate_limit=25, p=0.6),
    A.Resize(height=224, width=224),
    A.CLAHE(p=1),
    # A.RandomShadow(p=0.5),
    A.RandomFog(p=0.4),
    # A.RandomSnow(p=0.4),
    A.RandomBrightnessContrast(p=0.5),
    # A.RGBShift(r_shift_limit=10, g_shift_limit=10, b_shift_limit=10, p=0.6),
    # A.ShiftScaleRotate(shift_limit=5, scale_limit=0.09, rotate_limit=25, p=1),
    # A.GaussNoise(p=0.5),
    # A.Equalize(p=0.5),
    A.HorizontalFlip(p=0.5),
    # A.VerticalFlip(p=0.5),
    A.Normalize(mean=(0.485, 0.456, 0.406), std=(0.229, 0.224, 0.225)),
    ToTensorV2()
])
valid_transform = A.Compose([
    # A.SmallestMaxSize(max_size=160),
    A.Resize(height=224, width=224),
    A.Normalize(mean=(0.485, 0.456, 0.406), std=(0.229, 0.224, 0.225)),
    ToTensorV2()
])
```

augmentation 같은 경우 여러 가지 Demo를 확인하고 최대한 이미지의 형태나 색을 건드리지 않는 방향으로 선정하였습니다.

```python
name = "resnet_50"
model = models.resnet50(pretrained=True)
model.fc = nn.Linear(in_features=2048, out_features=10)
```

사용한 모델은 ResNET_50이고
in_features는 2048개로 모델마다 틀리므로 model 아래에  print를 사용하여 어떤 값이 입력되는지 확인하여야 합니다.

```python
print(model)
exit()
```

![1](https://i.ibb.co/Wvh2m6W/can-image-classification-code-1.png)

항상 제일 아래의 것을 보고 작성을 하면 되고, out_features는 우리가 10개의 라벨을 진행하므로 10개라고 입력을 하면 됩니다.

```python
# hyper parameter
loss_function = LabelSmoothingCrossEntropy()
optimizer = torch.optim.AdamW(model.parameters(), lr=0.0001)  # Adam,  AdamW, RMSprop
epochs = 50
exp_lr_scheduler = torch.optim.lr_scheduler.StepLR(optimizer, step_size=30, gamma=0.1)
best_valid_acc = 0.0
train_steps = len(train_loader)
valid_steps = len(valid_loader)
```

hyper parmeter로
loss function은 LabelSmoothingCrossEntropy를 사용하였으며 optimizer로 AdamW를 사용하였습니다.
scheduler도 사용해주었고, epoch는 50, learning rate는 0.0001을 설정하였습니다.

```python
# data loader
train_loader = DataLoader(train_dataset, batch_size=128, shuffle=True, num_workers=2, pin_memory=True)
valid_loader = DataLoader(valid_dataset, batch_size=128, shuffle=False, num_workers=2, pin_memory=True)
```

batch_size는 128을 설정하였습니다.

이렇게 하여 학습을 돌린 결과

![2](https://i.ibb.co/3SPSkQN/can-image-classification-code-2.png)

![3](https://i.ibb.co/477Q6hp/can-image-classification-code-3.png)

두 번째 epoch부터 거의 acc가 1에 가까운 수치가 나오면서 쭉 진행이 되었습니다...
acc가 높게 나왔다고 또 loss값이 그다지 낮게 나오진 않는 것을 볼 수 있습니다..
test 결과... 100%가 나왔습니다...

![4](https://i.ibb.co/fnrNGRS/can-image-classification-code-4.png)

직접 웹 캠을 사용하여 인식시켜 보았습니다. 어느 정도 나름 잘 인식되는 모습을 보여줍니다.
