import React from 'react';
import GlobalStyle from 'components/Common/GlobalStyle';
import Footer from 'components/Common/Footer';
import { Helmet } from 'react-helmet';
import * as style from './style.Template';
import { TemplateProps } from 'model/common';
import ReactGA from 'react-ga';

export default function Template({
  title,
  description,
  url,
  image,
  children,
}: TemplateProps): JSX.Element {
  const TRAKING_ID = process.env.GATSBY_GA_TRACKING_ID;
  ReactGA.initialize(TRAKING_ID, { debug: true });
  ReactGA.pageview(window.location.pathname);
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
        <Helmet>
          <meta
            name="google-site-verification"
            content={process.env.GATSBY_GOOGLE_SITE_VERIFICATION_KEY}
          />
          <meta
            name="naver-site-verification"
            content={process.env.GATSBY_NAVER_SITE_VERIFICATION_KEY}
          />
        </Helmet>

        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </style.Container>
  );
}
