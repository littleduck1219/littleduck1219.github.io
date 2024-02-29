import React from 'react';
import PostHeadInfo from 'components/Post/PostHeadInfo';
import * as style from './style.PostHead';
import { PostHeadProps } from 'model/post';

export default function PostHead({
  title,
  date,
  categories,
  thumbnail,
}: PostHeadProps) {
  return (
    <style.PostHeadWrapper>
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <style.BackgroundImage fluid={thumbnail} alt="thumbnail" />
      </div>

      <PostHeadInfo title={title} date={date} categories={categories} />
    </style.PostHeadWrapper>
  );
}
