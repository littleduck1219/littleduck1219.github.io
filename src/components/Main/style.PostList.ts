import styled from '@emotion/styled';

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const PostListWrapper = styled.div<{ isMobile: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;

  /* margin-right: ${props => (props.isMobile ? '0' : '300px')}; */
  padding: 50px 0 100px;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;
