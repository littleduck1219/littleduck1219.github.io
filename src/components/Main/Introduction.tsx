import React from 'react';
import ProfileImage, { ProfileImageProps } from 'components/Main/ProfileImage';
import * as style from './style.Introduce';

type IntroductionProps = ProfileImageProps;

export default function Introduction({ profileImage }: IntroductionProps) {
  return (
    <style.Background>
      <style.Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <style.SubTitle>나의 성장 일기</style.SubTitle>
          <style.Title>프론트엔드 개발자 박경덕 입니다.</style.Title>
        </div>
      </style.Wrapper>
    </style.Background>
  );
}
