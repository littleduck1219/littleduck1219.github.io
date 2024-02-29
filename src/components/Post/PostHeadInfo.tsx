import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { PostHeadInfoProps } from 'model/post';
import * as style from './style.PostHeadInfo';
import { navigate } from 'gatsby';

export default function PostHeadInfo({
  title,
  date,
  categories,
}: PostHeadInfoProps) {
  const goToMainPage = () => navigate('/');

  return (
    <style.PostHeadInfoWrapper>
      <style.PrevPageIcon onClick={goToMainPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </style.PrevPageIcon>
      <style.Title>{title}</style.Title>
      <style.PostData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </style.PostData>
    </style.PostHeadInfoWrapper>
  );
}
