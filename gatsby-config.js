module.exports = {
  siteMetadata: {
    title: 'Luiz Felipe Gonçalves',
    description: "Luiz Felipe Gonçalves' website.",
    author: 'Luiz Felipe Gonçalves',

    social: {
      github: 'lffg',
      twitter: '_lffg',
      telegram: 'luizffg',
      discord: 'Luiz#2029'
    }
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Merriweather:ital,wght@0,400;0,700;1,400;1,700',
          'Montserrat:ital,wght@0,800;0,900;1,800'
        ],
        display: 'swap'
      }
    }
  ]
};
