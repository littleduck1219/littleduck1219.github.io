import React from 'react';
import * as style from './style.PostItem';
import { PostItemProps } from 'model/main';

export default function PostItem({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { fluid },
  },
  link,
}: PostItemProps) {
  return (
    <style.PostItemWrapper to={link}>
      <style.ThumbnailImage fluid={fluid} alt="Post Item Image" />

      <style.PostItemContent>
        <style.Title>{title}</style.Title>
        <Date>{date}</Date>
        <style.Category>
          {categories.map(item => (
            <style.CategoryItem key={item}>{item}</style.CategoryItem>
          ))}
        </style.Category>
        <style.Summary>{summary}</style.Summary>
      </style.PostItemContent>
    </style.PostItemWrapper>
  );
}

PostItem;
