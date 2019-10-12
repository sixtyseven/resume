module.exports = {
  pathPrefix: "/profile",
  siteMetadata: {
    title: `Bruce's Profile`,
    description: `Full Stack Developer, Software Engineer,
     Frontend Developer, Backend Developer, React, Graphql, Programmer`,
    author: `Bruce`,
    linkedInUrl: `https://www.linkedin.com/in/shouqiangli/`,
    gitRepoUrl: `https://github.com/sixtyseven/resume`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // This path is relative to the root of the site.
        icon: `src/assets/images/haircut.jpg`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          // include: /assets/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
