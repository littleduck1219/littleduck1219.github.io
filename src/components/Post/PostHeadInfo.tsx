import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { PostHeadInfoProps } from 'model/post';
import * as style from './style.PostHeadInfo';

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  const goBackPage = () => window.history.back();

  return (
    <style.PostHeadInfoWrapper>
      <style.PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </style.PrevPageIcon>
      <style.Title>{title}</style.Title>
      <style.PostData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </style.PostData>
    </style.PostHeadInfoWrapper>
  );
};

export default PostHeadInfo;
