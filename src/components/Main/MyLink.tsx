import React, { useEffect, useState } from 'react';
import * as style from './style.MyLink';
import { useMobileStore } from '../../store/useMobile';
import LinkButton from 'components/Common/LinkButton';

export default function MyLink() {
  const isMobile = useMobileStore(state => state.isMobile);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isMobile) return null;

  return (
    <style.MyLinkWrapper offsetY={offsetY} isMobile={isMobile}>
      <LinkButton
        to="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=littleduck1219@gmail.com"
        iconName="Mail"
      />
      <LinkButton to="https://github.com/littleduck1219" iconName="Github" />
      <LinkButton to="www.linkedin.com/in/dev-duck" iconName="Linkedin" />
    </style.MyLinkWrapper>
  );
}
