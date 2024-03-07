---
date: '2024-03-06'
title: 'Next이미지 로드 에러'
categories: ['Web', 'React', 'Next.JS', 'Error']
summary: '개발자 모드에서는 잘 진행이 되었던 것이 빌드하는 과정에서부터 에러가 발생했습니다.'
thumbnail: './Next.js_error_file_3.png'
---

![1](https://i.ibb.co/r02hKHD/Next-js-error-file-1.png)

![2](https://i.ibb.co/pjGvZps/Next-js-error-file-2.png)

![3](https://i.ibb.co/jMx4hF8/Next-js-error-file-3.png)

개발자 모드에서는 잘 진행이 되었던 것이 빌드하는 과정에서부터 에러가 발생했습니다.

두 가지 에러가 발생했는데 첫 번째는 페이지 렌더링 하는 과정에서 불러오는 파일의 용량이 너무 커서 발생한 에러이고 두 번째 에러는 이미지 경로를 못 찾아오는 에러입니다. 모두 개발자 모드에서는 전혀 문제가 없었습니다.

첫 번째 에러를 해결하기 위해서 일단 getStaticProps로 불러오던 데이터를 전부 react-query로 불러왔습니다.
내용을 읽어보니 불러오는 용량이 너무 커서 발생하는 에러인 것 같습니다. 그래서 처음 로딩 시에 불러오는 데이터를 줄이기 위해서 드래그 시 반경 1km의 데이터만 불러오게 수정하였습니다. 하지만 getStaticProps는 프로덕션모드에서는 데이터가 변경이 되지 않기 때문에 getStaticProps를 사용하는 것은 옳지 못했습니다. 그래서 react-query로 변경하여 데이터를 불러오기로 했습니다.

두 번째 에러는 경로를 못 읽어 오고 있었고 사실 원인은 쉽게 파악했지만 약간 귀찮은 작업이었습니다. 한글이 문제가 되었고 이것을 해결해 주기 위해서 prisma migration과 seed를 다시 진행하여 데이터를 영어로 변경해 주고, 파일이름도 똑같이 영어로 변경, 한글을 영어로 변경해 주는 코드를 작성하여 매핑을 해준 다음에 출력하니 잘 출력이 되었습니다.
