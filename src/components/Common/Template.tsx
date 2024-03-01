import React from 'react';
import GlobalStyle from 'components/Common/GlobalStyle';
import Footer from 'components/Common/Footer';
import { Helmet } from 'react-helmet';
import * as style from './style.Template';
import { TemplateProps } from 'model/common';

export default function Template({
  title,
  description,
  url,
  image,
  children,
}: TemplateProps): JSX.Element {
  return (
    <style.Container>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@사용자이름" />
        <meta name="twitter:creator" content="@사용자이름" />
        <meta
          name="google-site-verification"
          content="jT9COQZUaxGG40tCz4x2X05Bq3kl6_zswzDD6wlk_Qg"
        />
        <meta
          name="naver-site-verification"
          content="69d8239bb84c590fd7b3feb684992b53229dd732"
        />
        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </style.Container>
  );
}
