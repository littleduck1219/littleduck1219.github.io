import styled from '@emotion/styled';

export const MyLinkWrapper = styled.div<{ offsetY: number }>`
  position: fixed;
  right: 20px; /* 오른쪽 여백 */
  top: 37%; /* 초기 상단 위치 */
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid #d6d1cb;
  border-radius: 10px;
  background-color: #d6d1cb;
  transition: transform 0.3s ease-out; /* 부드러운 움직임을 위한 전환 효과 */
  transform: translateY(
    ${props => props.offsetY * 0.1}px
  ); /* 스크롤에 따라 Y축으로 이동 */
`;
