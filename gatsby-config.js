require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path')

const config = require('./src/utils/siteConfig')

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    rssMetadata: {
      site_url: config.siteUrl,
      feed_url: `${config.siteUrl}/rss.xml`,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl}${config.siteLogo}`,
      author: config.author,
      copyright: config.copyright,
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'RAFT',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: () => project => `/${project.uid}`
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: { default: path.resolve('./src/templates/page.js') }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.shortTitle,
        description: config.siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: `src/images${config.siteLogo}`
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /images/
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
