import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #4263eb;
  animation: ${spin} 1s ease-in-out infinite;
  margin: 50px auto;
`;
