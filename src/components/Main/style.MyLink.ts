import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const categoryAppear = keyframes`
  from {
    transform: translateX(0%);
    opacity: 0;
  }
  to {
    transform: translateX(-100%);
    opacity: 1;
  }
`;

const categoryDisappear = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const animationStyles = (isMobile: boolean) => css`
  animation: ${isMobile ? categoryDisappear : categoryAppear} 0.5s ease-out
    forwards;
`;

export const MyLinkWrapper = styled.div<{ offsetY: number; isMobile: boolean }>`
  position: fixed;
  right: 20px;
  top: 37%;
  display: none;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid #c1c2b8;
  border-radius: 10px;
  background-color: #c1c2b8;
  transition: transform 0.3s ease-out;
  transform: translateY(${props => props.offsetY * 0.1}px);
  ${props => animationStyles(props.isMobile)}

  @media (min-width: 1081px) {
    display: flex;
  }
`;
