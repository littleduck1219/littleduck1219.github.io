import React from 'react';
import ProfileImage from 'components/Main/ProfileImage';
import * as style from './style.Introduce';
import { ProfileImageProps } from 'model/main';
import { useMobileStore } from '../../store/useMobile';

export default function Introduction({ profileImage }: ProfileImageProps) {
  const isMobile = useMobileStore(set => set.isMobile);
  return (
    <style.Background>
      <style.Wrapper isMobile={isMobile}>
        <ProfileImage profileImage={profileImage} />

        <style.SubTitle>나의 성장 일기</style.SubTitle>
        <style.Title>프론트엔드 개발자 박경덕 입니다.</style.Title>
      </style.Wrapper>
    </style.Background>
  );
}
