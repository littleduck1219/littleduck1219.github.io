import React from 'react';
import * as style from './style.MobileHeader';
import { MenuIcon } from 'lucide-react';
import { useMobileStore } from '../../store/useMobile';
import { useCategoryStore } from '../../store/useCategory';

export default function MobileHeader() {
  const isMobile = useMobileStore(set => set.isMobile);
  const menuCondition = useCategoryStore();

  const navOpenHandler = () => {
    if (menuCondition.isOpen) {
      menuCondition.onClose();
    } else {
      menuCondition.onOpen();
    }
  };

  if (!isMobile) return null;

  return (
    <>
      <style.MobileHeaderContainer isMobile={isMobile}>
        <style.MobileMenuIcon onClick={navOpenHandler}>
          <MenuIcon color="black" />
        </style.MobileMenuIcon>
      </style.MobileHeaderContainer>
    </>
  );
}
