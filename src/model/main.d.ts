import { ReactNode } from 'react';

// CategoryList
export interface CategoryItemProps {
  active: boolean;
}

export interface GatsbyLinkProps extends CategoryItemProps {
  children: ReactNode;
  className?: string;
  to: string;
}

export interface CategoryListProps {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

// Introduction

// PostItem
export interface PostItemProps {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  link: string;
}

// PostList
export interface PostType {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
      thumbnail: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
}

export interface PostListProps {
  selectedCategory: string;
  posts: PostType[];
}
