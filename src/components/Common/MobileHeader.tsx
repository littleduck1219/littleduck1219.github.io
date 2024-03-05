import React, { useEffect, useState } from 'react';
import { useMobileStore } from '../../store/useMobile';
import * as style from './style.MobileHeader';
import { MenuIcon } from 'lucide-react';
import { useCategoryStore } from '../../store/useCategory';

export default function MobileHeader() {
  const { isMobile, headerVisible, setHeaderVisible } = useMobileStore();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { isOpen, onClose, onOpen } = useCategoryStore();

  const navOpenHandler = () => {
    isOpen ? onClose() : onOpen();
  };

  useEffect(() => {
    const handleScroll = () => {
      // isOpen 상태가 true일 때는 스크롤 이벤트에 의한 상태 변경을 방지합니다.
      if (isOpen) return;

      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

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
  }, [isMobile, lastScrollTop, isOpen]);
  if (!isMobile) return null;

  return (
    <style.MobileHeaderContainer
      isVisible={headerVisible}
      onClick={navOpenHandler}
    >
      <style.MobileMenuIcon>
        <MenuIcon color="black" />
      </style.MobileMenuIcon>
    </style.MobileHeaderContainer>
  );
}
