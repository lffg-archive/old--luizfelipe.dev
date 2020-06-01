const { join } = require('path');

module.exports = {
  siteMetadata: {
    title: 'Luiz Felipe Gonçalves',

    social: {
      github: 'lffg',
      twitter: '_lffg'
    }
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: join(__dirname, 'resources/posts')
      }
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-143251209-1',
        cookieDomain: 'luizfelipe.dev'
      }
    }
  ]
};
