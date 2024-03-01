import React from 'react';
import { ProfileImageProps } from 'model/main';
import * as style from './style.ProfileImage';

export default function ProfileImage({ profileImage }: ProfileImageProps) {
  if (!profileImage) return null;
  return <style.ProfileImageWrapper fluid={profileImage} alt="Profile Image" />;
}

ProfileImage;
