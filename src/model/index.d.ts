import { PostType, ProfileImageProps } from './main';

export interface IndexPageProps {
  location: {
    search: string;
  };
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    allMarkdownRemark: {
      edges: PostType[];
    };
    file: {
      publicURL: string;
      childImageSharp: {
        fluid: ProfileImageProps['profileImage'];
      };
    };
  };
}
