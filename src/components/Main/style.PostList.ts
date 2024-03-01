import styled from '@emotion/styled';

export const PostListContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  flex-grow: 1;
`;

export const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;
