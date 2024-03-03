import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const categoryAppear = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const categoryDisappear = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const animationStyles = (isMobile: boolean) => css`
  animation: ${isMobile ? categoryDisappear : categoryAppear} 0.5s ease-out
    forwards;
`;

export const CategoryContainer = styled.div<CategoryItemProps>`
  display: ${props => (props.windowWidth < 1084 ? 'none' : 'block')};
  margin-top: 50px;
  margin-left: ${props => (props.isMobile ? '0' : '40px')};
  width: ${props =>
    props.windowWidth < 1080 ? '0' : props.windowWidth > 1084 ? '300px' : null};
  overflow: hidden;
  ${props => animationStyles(props.isMobile)}
`;

export const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CategoryItem = styled(Link)<{ active: boolean }>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

interface CategoryItemProps {
  isMobile: boolean;
  isOpen: boolean;
  windowWidth: number;
}
