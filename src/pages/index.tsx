import React, { useEffect, useMemo } from 'react';
import Template from 'components/Common/Template';
import CategoryList from 'components/Main/CategoryList';
import Introduction from 'components/Main/Introduction';
import PostList from 'components/Main/PostList';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import { IndexPageProps } from 'model/index';
import { CategoryListProps, PostType } from 'model/main';
import * as style from 'components/style.index';
import { useMediaQuery } from 'usehooks-ts';
import { useMobileStore } from '../store/useMobile';
import MobileHeader from 'components/Common/MobileHeader';
import MobileCategory from 'components/Common/MobileCategory';

export default function IndexPage({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      publicURL,
      childImageSharp: { fluid },
    },
  },
}: IndexPageProps) {
  const isMobileQuery = useMediaQuery('(max-width: 1080px)');
  const setIsMobile = useMobileStore(state => state.setIsMobile);

  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['All']++;

          return list;
        },
        { All: 0 },
      ),
    [],
  );

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery, setIsMobile]);

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <MobileHeader />
      <MobileCategory
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <Introduction profileImage={fluid} />
      <style.BodyWrapper>
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
        <PostList selectedCategory={selectedCategory} posts={edges} />
      </style.BodyWrapper>
    </Template>
  );
}

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                fluid(
                  maxWidth: 768
                  maxHeight: 200
                  fit: INSIDE
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 120, maxHeight: 120, fit: INSIDE, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
