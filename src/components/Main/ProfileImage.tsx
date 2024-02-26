import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const ProfileImage: FunctionComponent = function () {
  const profile = '/static/image/MyProfile.jpeg'

  return <ProfileImageWrapper src={`${profile}`} alt="Profile Image" />
}

export default ProfileImage

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`
