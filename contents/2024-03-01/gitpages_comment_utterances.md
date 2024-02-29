---
date: '2024-03-01'
title: 'GitBlog 댓글 기능 Utterances'
categories: ['Web', 'React', 'GitBlog']
summary: '블로그에 utterance 댓글 기능을 적용시켜 보았습니다.'
thumbnail: './gitpages_comment_utterances_1.png'
---

<center>
GitBlog 포스팅을 옮기고 있는 중에 댓글기능이 없어 어떤 것을 적용시켜야되는지 생각하던 중에 utterances라는<br>
GitHub Repository를 사용하는 댓글 기능이 있다는 것을 찾았고 적용 해보려고 합니다.<br><br>

먼저 utterance에 들어가서 연결할 repo에 설치해줍니다.

![1](https://1drv.ms/i/c/bae70a53437eb109/IQOq8Dvb35siQLjssOqTOlQ1AdHQEU3mxwU2kvO8tbcdH7I?width=503&height=150)

utterance : https://github.com/utterance<br>
기술참고 : https://www.paulie.dev/posts/2022/08/how-to-use-utterances-with-react/<br>

utterance는 GitHub Issue를 사용해서 댓글을 저장합니다.

</center>

```javascript
<script
  src="https://utteranc.es/client.js"
  repo="[ENTER REPO HERE]"
  issue-term="pathname"
  theme="github-light"
  crossorigin="anonymous"
  defer
></script>
```

기존 vanilla 에서는 utterance를 repository에 설치하고 위 스크립트를 붙여넣는것으로 설정이 완료되는 것으로 알고 있습니다.<br> 하지만 React에서는 script 태그는 제대로 동작하기 힘드므로 Dom요소를 연결해 줄수 있는 ref를 사용해서 연결하도록 하겠습니다.

```tsx
import React, { createRef, useEffect } from 'react';
import * as style from './style.PostComment';
import { UtterancesConfigType } from 'model/post';

export default function () {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const config: UtterancesConfigType = {
      src: 'https://utteranc.es/client.js',
      repo: 'littleduck1219/littleduck1219.github.io',
      'issue-term': 'title',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(config).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    ref.current.appendChild(utterances);
  }, []);

  return <style.Utterances ref={ref} />;
}
```

각 키별로 config를 구조분해하는 방식으로 코드가 작성됩니다.

ref.current가 null인 경우에 에러가 발생하므로 아래 코드를 추가해주었습니다.

```tsx
if (ref.current === null) return;
```

![3](https://1drv.ms/i/c/bae70a53437eb109/IQP2raUvAsynRq3zqocm3e9rATpkKfRoMDFTFHn68BYMd40?width=1024)

![4](https://1drv.ms/i/c/bae70a53437eb109/IQNxYno68HiTSbrL69Psj6pJAUI9NlnEwxcXYQaAIPmBW1o?width=1272&height=478)
