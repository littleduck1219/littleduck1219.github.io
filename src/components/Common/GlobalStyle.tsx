import React from 'react';
import { Global, css } from '@emotion/react';

export default function GlobalStyle(): JSX.Element {
  return <Global styles={defaultStyle} />;
}

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;
