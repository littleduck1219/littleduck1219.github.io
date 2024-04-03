---
date: '2024-03-29'
title: 'Node와 Express'
categories: ['Web', 'Node']
summary: 'Node와 Express'
thumbnail: '../../static/node.jpeg'
---

### Node

```js
const http = require('http');
const url = require('url');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<H1>Hello World</H1>');
  } else if (path === '/post') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<H1>Post page!</H1>');
  } else if (path === '/user') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<H1>Post page!</H1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<H1>404 page!</H1>');
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
```

Node만 사용했을 경우 각 패스별로 예외 처리를 통해 직접 지정을 해줘야 합니다.

### Express

```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/post', (req, res) => {
  res.send('<h1>Post World</h1>');
});

app.use((res, req) => {
  res.status(404).send('<h1>404 Page Not Found</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

Express는 express를 지정해서 get으로 요청을 꺼내 바로 콜백함수로 결과를 사용 할 수 있습니다.
