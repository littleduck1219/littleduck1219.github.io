import React from 'react';
import GlobalStyle from 'components/Common/GlobalStyle';
import * as style from 'components/style.404';

export default function NotFoundPage() {
  return (
    <style.NotFoundPageWrapper>
      <GlobalStyle />
      <style.NotFoundText>404</style.NotFoundText>
      <style.NotFoundDescription>
        찾을 수 없는 페이지입니다. <br />
        다른 콘텐츠를 보러 가보시겠어요?
      </style.NotFoundDescription>
      <style.GoToMainButton to="/">메인으로</style.GoToMainButton>
    </style.NotFoundPageWrapper>
  );
}
