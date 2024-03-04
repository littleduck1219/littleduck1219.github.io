import styled from '@emotion/styled';
import { Link } from 'gatsby';

interface MobileCategoryWrapperProps {
  isMobile: boolean;
  isCategory: boolean;
}

export const MobileCategoryContainer = styled.div<MobileCategoryWrapperProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: white;
  z-index: 9999;
  transform: ${props =>
    props.isMobile && props.isCategory ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease;
`;

export const MobileCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px;
`;

export const MobileCategory = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CategoryItem = styled(Link)<{ active: boolean }>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 30px;

  border-bottom: 1px solid black;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const CategoryCloserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin: 0 30px 0 30px;
`;

export const MyLinkWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
