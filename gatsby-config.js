module.exports = {
  pathPrefix: `/littleduck1219.github.io`,
  siteMetadata: {
    title: `주니어 개발자의 개발 블로그`,
    description: `주니어 개발자로서의 저를 표현한 블로그입니다.`,
    author: `Duck Blog`,
    siteUrl: 'https://littleduck1219.github.io/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://littleduck1219.github.io/',
        stripQueryString: true,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `contents`,
    //     path: `${__dirname}/contents`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: <https://gatsby.dev/offline>
    // `gatsby-plugin-offline`,
  ],
}
