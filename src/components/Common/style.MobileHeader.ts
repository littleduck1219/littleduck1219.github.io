import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
`;

const animationStyles = (isMobile: boolean) => css`
  animation: ${isMobile ? slideDown : slideUp} 0.5s ease-out forwards;
`;

export const MobileHeaderContainer = styled.div<{ isMobile: boolean }>`
  ${({ isMobile }) => animationStyles(isMobile)}
  &.nav-down {
    top: 0;
  }
  &.nav-up {
    top: -60px;
  }
  transition: top 0.2s ease-in-out;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  background-color: white;
  z-index: 99999;
`;

export const MobileMenuIcon = styled.div`
  margin-right: 20px;
`;
