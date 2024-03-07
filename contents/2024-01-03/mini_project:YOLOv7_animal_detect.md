---
date: '2024-01-03'
title: 'mini project:YOLOv7 animal detect'
categories: ['DataScience', 'YOLO']
summary: 'YOLOv7을 이용해서 동물 데이터 셋을 사용하여 동물 종 감지 모델학습을 진행 하였습니다.'
thumbnail: './mini_project-YOLOv7_animal_detect_4.png'
---

<center>

## mini project:YOLOv7 animal detect

</br>

YOLOv7을 이용한 동물 감지를 해보도록 하겠습니다.
환경은 맥북 m1 pro에서 virtual machine을 사용하였습니다.

</br>

| OS        | Windows Server 2019 Data center |
| --------- | ------------------------------- |
| Processor | Intel Xeon CPU E5-2690 v4       |
| GPU       | NVIDIA Tesla V100 16GB          |
| Memory    | 112GB                           |

</br>

사용한 데이터는 animals.v2-release.voc입니다

</br>

![1](https://i.ibb.co/KqzYH1k/mini-project-YOLOv7-animal-detect-1.png)

</br>

data는 split이 되어있는 상태로 image와 label이 함께 있었습니다.

먼저 VOC의 xml 파일을 txt로 바꾸어 주었습니다.(label.casche는 학습시에 생성되는 캐쉬파일입니다)

</br>
</center>

```pyhton
<annotation>
<folder></folder>
<filename>1_jpg.rf.2e6cce3e7cfc0e62b404ba5af96a9c38.jpg</filename>
<path>1_jpg.rf.2e6cce3e7cfc0e62b404ba5af96a9c38.jpg</path>
<source>
<database>roboflow.ai</database>
</source>
<size>
<width>155</width>
<height>178</height>
<depth>3</depth>
</size>
<segmented>0</segmented>
<object>
<name>fox</name>
<pose>Unspecified</pose>
<truncated>0</truncated>
<difficult>0</difficult>
<occluded>0</occluded>
<bndbox>
<xmin>56</xmin>
<xmax>156</xmax>
<ymin>18</ymin>
<ymax>175</ymax>
</bndbox>
</object>
</annotation>
```

</br>

```python
import os
import glob
import cv2
import shutil
from xml.etree.ElementTree import parse

# data_dir = "./animals.v2-release.voc/valid/"
# image_data = glob.glob(os.path.join(data_dir, "*.jpg"))

label_dict = {"background": 0,
              "cat": 1,
              "chicken": 2,
              "cow": 3,
              "dog": 4,
              "fox": 5,
              "goat": 6,
              "horse": 7,
              "person": 8,
              "racoon": 9,
              "skunk": 10,
              }
# cat, chicken, cow, dog, fox, goat, horse, person, racoon, skunk


class Voc_to_yolo_convter():
def __init__(self, xml_paths):
self.xml_path_list = glob.glob(os.path.join(xml_paths, "*.xml"))

def get_voc_to_yolo(self, mode):
for xml_path in self.xml_path_list:
tree = parse(xml_path)
root = tree.getroot()

# get file name
file_name = root.find('filename').text

# get image size
size_meta = root.findall('size')
img_width = int(size_meta[0].find('width').text)
img_height = int(size_meta[0].find('height').text)

# object meta
object_metas = root.findall('object')

# box info get
for object_meta in object_metas:
# label_name
object_label = object_meta.find('name').text

# bbox
xmin = int(object_meta.find('bndbox').findtext('xmin'))
xmax = int(object_meta.find('bndbox').findtext('xmax'))
ymin = int(object_meta.find('bndbox').findtext('ymin'))
ymax = int(object_meta.find('bndbox').findtext('ymax'))

# print(object_label, xmin, ymin, xmax, ymax)
# voc to yolo
yolo_x = round(((int(xmin) + int(xmax))/2)/img_width, 6)
yolo_y = round(((int(ymin) + int(ymax))/2)/img_height, 6)
yolo_w = round((int(xmax) - int(xmin))/img_width, 6)
yolo_h = round((int(ymax) - int(ymin))/img_height, 6)

image_name_temp = file_name.replace(".jpg", ".txt")

# txt file save folder
os.makedirs(f"./animals.v2-release.voc/{mode}/labels", exist_ok=True)

# label
label = label_dict[object_label]

# txt save
with open(f"./animals.v2-release.voc/{mode}/labels/{image_name_temp}", "a") as f:
f.write(f"{label} {yolo_x} {yolo_y} {yolo_w} {yolo_h} \n")


# move image
def move_image(data, mode):
for path in data:
image_folder_path = f"./animals.v2-release.voc/{mode}/images"
os.makedirs(image_folder_path, exist_ok=True)

file_name = path.split("\\")[1]

image_path = os.path.join(image_folder_path, file_name)
shutil.move(path, image_path)


if __name__ == "__main__":
data_dir = "./animals.v2-release.voc/valid/"
image_data = glob.glob(os.path.join(data_dir, "*.jpg"))
# test = Voc_to_yolo_convter(data_dir)
# test.get_voc_to_yolo(mode="valid")
move_image(image_data, mode="valid")
```

</br>

<center>

그리고 data.yaml을 작성해 주었습니다.

위치는 yolov7-main/data/data.yaml입니다.

</center>

</br>

```python
train: ./animals_dataset/train/images
val: ./animals_dataset/valid/images
test: ./animals_dataset/test.images

# number of class
nc : 11

  # classes
names : ["background",
         "cat",
         "chicken",
         "cow",
         "dog",
         "fox",
         "goat",
         "horse",
         "person",
         "racoon",
         "skunk"
         ]
```

</br>

<center>

하이퍼파라미터 입니다.

</center>

</br>

```xml
lr0: 0.001  # initial learning rate (SGD=1E-2, Adam=1E-3)
lrf: 0.1  # final OneCycleLR learning rate (lr0 * lrf)
momentum: 0.937  # SGD momentum/Adam beta1
weight_decay: 0.0005  # optimizer weight decay 5e-4
warmup_epochs: 3.0  # warmup epochs (fractions ok)
warmup_momentum: 0.8  # warmup initial momentum
warmup_bias_lr: 0.1  # warmup initial bias lr
box: 0.05  # box loss gain
cls: 0.3  # cls loss gain
cls_pw: 1.0  # cls BCELoss positive_weight
obj: 0.7  # obj loss gain (scale with pixels)
obj_pw: 1.0  # obj BCELoss positive_weight
iou_t: 0.20  # IoU training threshold
anchor_t: 4.0  # anchor-multiple threshold
# anchors: 3  # anchors per output layer (0 to ignore)
fl_gamma: 0.0  # focal loss gamma (efficientDet default gamma=1.5)
hsv_h: 0.015  # image HSV-Hue augmentation (fraction)
hsv_s: 0.7  # image HSV-Saturation augmentation (fraction)
hsv_v: 0.4  # image HSV-Value augmentation (fraction)
degrees: 0.0  # image rotation (+/- deg)
translate: 0.2  # image translation (+/- fraction)
scale: 0.9  # image scale (+/- gain)
shear: 0.0  # image shear (+/- deg)
perspective: 0.0  # image perspective (+/- fraction), range 0-0.001
flipud: 0.0  # image flip up-down (probability)
fliplr: 0.5  # image flip left-right (probability)
mosaic: 1.0  # image mosaic (probability)
mixup: 0.15  # image mixup (probability)
copy_paste: 0.0  # image copy paste (probability)
paste_in: 0.15  # image copy paste (probability), use 0 for faster training
loss_ota: 1 # use ComputeLossOTA, use 0 for faster training
```

</br>

<center>

| model  | batch-size | epoch | optimizer | lr    |
| ------ | ---------- | ----- | --------- | ----- |
| YOLOv7 | 24         | 100   | Adam      | 0.001 |

</br>

![2](https://i.ibb.co/kKBBN30/mini-project-YOLOv7-animal-detect-2.png)

</br>

![3](https://i.ibb.co/ch6dQz2/mini-project-YOLOv7-animal-detect-3.png)

</br>

![4](https://i.ibb.co/qJPHNnn/mini-project-YOLOv7-animal-detect-4.png)

</br>
각 라벨별로 동물들을 잘 잡아 내는것을 확인 할 수 있었습니다.
