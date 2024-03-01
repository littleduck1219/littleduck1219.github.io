import React from 'react';
import * as style from './style.MobileHeader';
import { MenuIcon } from 'lucide-react';
import useMobileStore from '../../store/useMobile';

export default function MobileHeader() {
  const isMobile = useMobileStore(set => set.isMobile);
  return (
    <>
      <style.MobileHeaderContainer isMobile={isMobile}>
        <style.MobileMenuIcon>
          <MenuIcon color="black" />
        </style.MobileMenuIcon>
      </style.MobileHeaderContainer>
    </>
  );
}
