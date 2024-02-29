import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import React from 'react';

export default function Notice() {
  return (
    <NoticeContainer>
      <NoticeWrapper>
        <span>!Notice</span>{' '}
        <span>
          썸네일을 제외한 이미지는 모두 클라우드에서 불러오므로 시간이 조금
          걸릴수 있습니다.
        </span>
      </NoticeWrapper>
    </NoticeContainer>
  );
}

const NoticeContainer = styled.div`
  padding: 30px 0;
  margin: 0 auto;
`;

const textColorFlash = keyframes`
  0%, 100% {
    color: #e86b6b; /* 빨간색 */
  }
  50% {
    color: #ffffff; /* 하얀색 */
  }
`;

const NoticeWrapper = styled.div`
  border: 1px solid #e86b6b;
  border-radius: 10px;
  padding: 10px;

  span {
    animation: ${textColorFlash} 0.5s ease-in-out infinite;
    display: inline-block;
  }
`;
