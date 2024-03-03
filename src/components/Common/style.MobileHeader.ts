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
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  background-color: white;
  ${({ isMobile }) => animationStyles(isMobile)}
`;

export const MobileMenuIcon = styled.div`
  margin-right: 20px;
`;
