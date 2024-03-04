import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const StyledLinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d6d1cb;
    border-radius: 50%;
  }
`;
