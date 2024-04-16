---
date: '2024-04-14'
title: 'front end 면접 #3'
categories: ['Web', 'Front-end']
summary: '프론트엔드 기술 면접 답안 #3'
thumbnail: '../../static/default.png'
---

## 1. useRef에 대해서 설명하세요.

useRef는 React에서 제공하는 Hook으로, 주로 함수형 컴포넌트에서 DOM요소에 접근하거나 특정 값을 유지하기 위해서 사용합니다. useRef를 사용해서 컴포넌트 내부의 DOM요소에 접근이 가능하며 useRef를 사용하여 컴포넌트 렌더링 간 값을 유지할 수 있습니다. 컴포너느가 리렌더링될 때 초기 값으로 유지되며, 이전 값과 새 값 간의 연결을 유지합니다.

## 2. useEffect에 대해서 설명하세요.

useEffect는 함수형 컴포넌트에서 렌더링될 때마다 특정 작업을 수행하도록 하는 Hook입니다.
useEffect는 컴포넌트가 마운트, 언마운트 될 때, 업데이트 될 때 실행됩니다. 상태나 프롭스가 변경될 때 마다 실행되며, DOM 조작, 데이터 가져오기 같은 작업을 처리할 수 있습니다.
