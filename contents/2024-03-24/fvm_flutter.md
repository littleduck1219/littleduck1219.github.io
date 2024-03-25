---
date: '2024-03-24'
title: 'fvm으로 Flutter 버전 관리하기'
categories: ['App', 'Flutter']
summary: '데이터 캐시 무효화고 최신화 경험'
thumbnail: '../../static/flutter.jpeg'
---

fvm 은 flutter의 버전을 관리하기 위한 툴입니다.

fvm의 설치는 flutter와 Homebrew가 설치된 상태에서 진행됩니다.

```bash
brew tap leoafarias/fvm
brew install fvm
```

명령어를 입력하면 아래와 같은 과정을 거쳐 설치를 완료하게 됩니다.

![1](https://i.ibb.co/2MRnFqn/fvm-flutter-1.webp)

fvm list라는 명령어를 입력하면 SDK가 아직 설치되어 있지 않다고 애기합니다. fvm releases라는 명령어를 입력해서 설치가능한 버전들을 확인합니다.

![2](https://i.ibb.co/4SknPGM/fvm-flutter-2.webp)

fvm install (원하는 버전)으로 설치를 해주고 설치한 버전을 global 버전으로 변경해 줍니다.

![3](https://i.ibb.co/XL2rBCc/fvm-flutter-3.webp)

fvm list통해 버전이 잘 설정된 것을 확인할 수 있습니다.

![4](https://i.ibb.co/Z6bz6ng/fvm-flutter-4.webp)

**다음은 fvm을 통해 IDE 버전을 변경해 보겠습니다.**<br>
fvm use (버전) 을 입력해서 프로젝트 버전을 변경해 줍니다.

![5](https://i.ibb.co/LhKGZJ0/fvm-flutter-5.webp)

이것만으로 끝나지 않습니다.

IDE에 들어가서 IDE버전도 변경해 줘야 합니다.

Android Studio기준으로 Settings에서 Flutter에서 SDK경로를 새로 설정해 줍니다.

![6](https://i.ibb.co/N17jzfz/fvm-flutter-6.webp)

해당 프로젝트 폴더에서 숨김폴더 해제를 하면 .fvm이라는 폴더가 나오며 그 폴더를 선택해주면 됩니다.

![7](https://i.ibb.co/yX2wPfz/fvm-flutter-7.webp)

아래와 같은 과정을거쳐 버전이 변경되게 됩니다.

![8](https://i.ibb.co/drXN1rH/fvm-flutter-8.webp)
