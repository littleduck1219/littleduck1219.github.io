import React, { useState, useEffect, useCallback } from 'react';
import * as style from './style.MobileHeader';
import { MenuIcon } from 'lucide-react';
import { useMobileStore } from '../../store/useMobile';
import { useCategoryStore } from '../../store/useCategory';

export default function MobileHeader() {
  const isMobile = useMobileStore(state => state.isMobile);
  const { isOpen, onClose, onOpen } = useCategoryStore();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const navOpenHandler = useCallback(() => {
    isOpen ? onClose() : onOpen();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      // Hide header on scroll down, show on scroll up
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setHeaderVisible(false);
      } else if (currentScrollTop < lastScrollTop) {
        setHeaderVisible(true);
      }
      setLastScrollTop(currentScrollTop);
    };

    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, lastScrollTop]);

  if (!isMobile) return null;

  return (
    <style.MobileHeaderContainer
      className={headerVisible ? 'nav-down' : 'nav-up'}
      isMobile={isMobile}
    >
      <style.MobileMenuIcon onClick={navOpenHandler}>
        <MenuIcon color="black" />
      </style.MobileMenuIcon>
    </style.MobileHeaderContainer>
  );
}
