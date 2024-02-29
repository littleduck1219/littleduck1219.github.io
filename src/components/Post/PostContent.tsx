import React, { FunctionComponent, useEffect, useState } from 'react';
import * as style from './style.PostContent';
import { PostContentProps } from 'model/post';
import Spinner from 'components/Common/Spinner';

const PostContent: FunctionComponent<PostContentProps> = ({ html }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    const totalImages = images.length;
    let loadedImages = 0;

    const imageLoaded = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setLoading(false);
      }
    };

    images.forEach(image => {
      if (image.complete) {
        imageLoaded();
      } else {
        image.addEventListener('load', imageLoaded);
        image.addEventListener('error', imageLoaded);
      }
    });

    // 모든 이미지가 이미 로드된 경우
    if (totalImages === 0) {
      setLoading(false);
    }
  }, [html]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <style.MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </>
  );
};

export default PostContent;
