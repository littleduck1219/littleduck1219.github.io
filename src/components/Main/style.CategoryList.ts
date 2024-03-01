import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const CategoryContainer = styled.div<CategoryItemProps>`
  width: 300px;
  margin-top: 50px;
  margin-left: ${props => (props.isMobile ? '0' : '40px')};
  // isResetting과 isMobile props에 따라 스타일 적용
  transition: ${props => (props.isResetting ? 'all 0.3s ease-in-out' : 'none')};
  width: ${props => (props.isMobile ? '0' : '300px')};
  overflow: hidden;
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
  ref: React.RefObject<HTMLDivElement>;
  isResetting: boolean;
  isMobile: boolean;
}
