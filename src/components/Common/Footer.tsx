import React from 'react';
import * as style from './style.Footer';

export default function Footer(): JSX.Element {
  return (
    <style.FooterWrapper>
      <style.MakeByWrapper>
        <span>Made By </span>
        <style.FooterImageWrapper>
          <style.FooterImage src="/react.png" alt="react" />
          <style.FooterImage src="/gatsby.png" alt="gatsby" />
          <style.FooterImage src="/github.png" alt="github" />
        </style.FooterImageWrapper>
      </style.MakeByWrapper>
      <p>© 2024 Develop By Duck.</p>
    </style.FooterWrapper>
  );
}
