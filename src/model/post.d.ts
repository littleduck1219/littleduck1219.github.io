import { FluidObject } from 'gatsby-image';

// PostHead
export interface GatsbyImgProps {
  fluid: FluidObject;
  alt: string;
  className?: string;
}

export interface PostHeadProps extends PostHeadInfoProps {
  thumbnail: FluidObject;
}

// PostHeadInfo
export interface PostHeadInfoProps {
  title: string;
  date: string;
  categories: string[];
}

// PostContent
export interface PostContentProps {
  html: string;
}
