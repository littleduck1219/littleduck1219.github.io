import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const MakeByWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FooterImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FooterImage = styled.img`
  width: 80px;
`;
