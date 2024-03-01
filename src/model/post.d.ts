import { FluidObject } from 'gatsby-image';

// PostHead
export interface GatsbyImgProps {
  gatsbyImageData: IGatsbyImageData;
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

// PostTemplate
export interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            html: string;
            frontmatter: {
              title: string;
              summary: string;
              date: string;
              categories: string[];
              thumbnail: {
                childImageSharp: {
                  fluid: FluidObject;
                };
                publicURL: string;
              };
            };
          };
        },
      ];
    };
  };
  location: {
    href: string;
  };
}

// CommentWidget
export interface UtterancesConfigType {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
}
