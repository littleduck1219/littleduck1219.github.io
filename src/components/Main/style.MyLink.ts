import styled from '@emotion/styled';

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

  @media (min-width: 1081px) {
    display: flex;
  }
`;
