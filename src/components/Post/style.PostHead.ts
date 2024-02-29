import styled from '@emotion/styled';
import Img from 'gatsby-image';

export const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const BackgroundImage = styled(Img)`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    height: 300px;
  }
`;
