import React, { useState, useEffect } from 'react';
import * as style from './style.MobileHeader';
import { MenuIcon } from 'lucide-react';
import { useMobileStore } from '../../store/useMobile';
import { useCategoryStore } from '../../store/useCategory';

export default function MobileHeader() {
  const isMobile = useMobileStore(set => set.isMobile);
  const menuCondition = useCategoryStore();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerClass, setHeaderClass] = useState('nav-down');

  const navOpenHandler = () => {
    if (menuCondition.isOpen) {
      menuCondition.onClose();
    } else {
      menuCondition.onOpen();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setHeaderClass('nav-up');
      } else {
        setHeaderClass('nav-down');
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  if (!isMobile) return null;

  return (
    <>
      <style.MobileHeaderContainer className={headerClass} isMobile={isMobile}>
        <style.MobileMenuIcon onClick={navOpenHandler}>
          <MenuIcon color="black" />
        </style.MobileMenuIcon>
      </style.MobileHeaderContainer>
    </>
  );
}
