---
date: '2024-01-05'
title: 'YOLO txt remove class'
categories: ['DataScience']
summary: '필요한 데이터를 가져올때 필요없는 class는 지워주는 작업을 진행해 보겠습니다.'
thumbnail: './YOLO_txt_remove_class_4.png'
---

</br>

필요한 데이터를 가져올때 필요없는 class는 지워주는 작업을 진행해 보겠습니다.
가져오는 데이터는 이미 YOLO형식으로 작성되어있어 text파일에서 필요없는 class만 삭제해주면 되었습니다.

```python
import glob
import os

label_data_path = r"D:/shoose/train/labels"
label_data = glob.glob(os.path.join(label_data_path, "*.txt"))

for text in label_data:
    print("read text file:", text)
    file_name = text.split("\\")[1]
    with open(text) as f:
        for line in f:
            line = line.strip()
            with open(fr"D:/shoose01/label/{file_name}", "a") as t:
                if line.startswith("1"):
                    print(line)
                    new_line = "3" + line[1:] + "\n"
                    print(new_line)
                    t.write(new_line)
```

먼저 label path를 지정하고 파일 목록을 가져왔습니다.

```python
label_data_path = r"D:/shoose/train/labels"
label_data = glob.glob(os.path.join(label_data_path, "*.txt"))
label_move_path = r"D:/shoose01/label/"
os.makedirs(label_move_path, exist_ok=True)
```

['D:/shoose/train/labels\\01b38abf41f1c6a2b28235262d4dbbff_jpg.rf.cfad93bb6623246b8acb9b5835419a17.txt', 
그리고 파일을 다시 작성해주면서 새로 생성할 경로를 가져왔습니다.

for문을 사용하여 list형식의 경로를 str형식으로 가져옵니다.

```python
for text in label_data:
    print("read text file:", text)
    print(type(text))
```

read text file: 
D:/shoose/train/labels\01b38abf41f1c6a2b28235262d4dbbff_jpg.rf.cfad93bb6623246b8acb9b5835419a17.txt<class 'str'>read text file:
 D:/shoose/train/labels\01ce198b4c6340c11447d45ea45e9b78_jpg.rf.9344c0100062c09b71f537d3768e190a.txt<class 'str'>

경로를 split("\\")해서 파일 이름을 가져옵니다.

```python
file_name = text.split("\\")[1]
```

['D:/shoose/train/labels', 'OIP_jpg.rf.4f8b2d2edfd7b54581140f4100daf00a.txt'] 중 [1]
OIP_jpg.rf.4f8b2d2edfd7b54581140f4100daf00a.txt

with문을 사용해서 text 파일을 열어주고 f로 지정합니다.
for문을 사용하여 text파일의 모든 행을 불러옵니다. 불러오면서 strip을 사용해서 행바꿈마다 입력되는 \n을 삭제해 줍니다.

```python
with open(text) as f:
    for line in f:
    line = line.strip()
```

![1](https://i.ibb.co/PFqdSFK/YOLO-txt-remove-class-1.png)

```python
with open(label_move_path + file_name, "a") as t:
    if line.startswith("1"):
    new_line = "3" + line[1:] + "\n"
    print(new_line)
    t.write(new_line)
```

위 경로대로 파일을 txt파일을 새로 생성해 주었습니다.
그리고 제가 필요한 class는 1이기 때문에 1로 시작하는 행만 가져왔습니다.

![2](https://i.ibb.co/X5CykWF/YOLO-txt-remove-class-2.png)

이제 이 내용들을 각 파일에 입력을 해주기만 하면 됩니다.
 </br>

여기에 입력되어있는 1이라는 class는, 제가 사용하는 모델에서 3의 값을 가지므로,
txt파일에 입력할때 1을 3으로 바꿔서 입력하고 뒤의 값은 그대로 가져왔습니다.
그리고 t.wirtef를 이용해서 작성해주면 끝이납니다.

![3](https://i.ibb.co/pyjdQvZ/YOLO-txt-remove-class-3.png)

![4](https://i.ibb.co/WG0xvLv/YOLO-txt-remove-class-4.png)
