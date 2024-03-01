import React from 'react';
import PostItem from 'components/Main/PostItem';
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll';
import { PostListProps, PostType } from 'model/main';
import * as style from './style.PostList';
import useMobileStore from '../../store/useMobile';

export default function ({ selectedCategory, posts }: PostListProps) {
  const isMobile = useMobileStore(set => set.isMobile);

  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  );

  return (
    <style.PostListContainer>
      <style.PostListWrapper ref={containerRef} isMobile={isMobile}>
        {postList.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }: PostType) => (
            <PostItem {...frontmatter} link={slug} key={id} />
          ),
        )}
      </style.PostListWrapper>
    </style.PostListContainer>
  );
}
