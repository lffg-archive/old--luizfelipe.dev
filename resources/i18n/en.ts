// English translations do not require an explicit type because they are used to
// derive the `Translations` type. See the `index.ts` file in this directory.
export const translations = {
  site: {
    description: "Luiz Felipe Gonçalves' (lffg) website",
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact'
    },
    footer: {
      openSource:
        'The source code of this website is <a href="https://github.com/lffg/luizfelipe.dev rel="noopener noreferrer" target="_blank">open-source</a>.'
    }
  },

  index: {
    greeting:
      'Hello and welcome to my (not so ready) website. As I am working on it, I leave below some contact information:',
    latestArticles: 'Latest articles',
    aboutMe: 'About me.'
  },

  about: {
    title: 'About me',
    desc: 'Todo (en)'
  },

  article: {}
};

// English context do not require an explicit type because they are used to
// derive the `TranslationContext` type. See the `index.ts` file in this
// directory.
export const context = {
  dateFmt: 'MMMM D[,] YYYY'
};
