import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyLinkProps } from 'model/main';

export const CategorySection = styled.div``;

export const CategoryContainer = styled.div`
  width: 300px;
  margin: 50px 0 0 40px;
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
export const CategoryItem = styled(Link)<GatsbyLinkProps>`
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
