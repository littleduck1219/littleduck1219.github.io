import React, { useEffect, useState } from 'react';
import * as style from './style.MyLink';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useMobileStore } from '../../store/useMobile';

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
    <style.MyLinkWrapper offsetY={offsetY}>
      <Mail size={20} />
      <Github size={20} />
      <Linkedin size={20} />
    </style.MyLinkWrapper>
  );
}
