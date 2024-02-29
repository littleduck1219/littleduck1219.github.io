import React, { FunctionComponent } from 'react';
import { ProfileImageProps } from 'model/main';
import * as style from './style.ProfileImage';

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <style.ProfileImageWrapper fluid={profileImage} alt="Profile Image" />;
};

export default ProfileImage;
