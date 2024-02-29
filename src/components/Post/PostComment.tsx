import React, { createRef, useEffect } from 'react';
import * as style from './style.PostComment';
import { UtterancesConfigType } from 'model/post';

export default function () {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesConfigType = {
      src: 'https://utteranc.es/client.js',
      repo: 'littleduck1219/littleduck1219.github.io',
      'issue-term': 'title',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    ref.current.appendChild(utterances);
  }, []);

  return <style.Utterances ref={ref} />;
}
