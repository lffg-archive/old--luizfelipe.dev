// English translations do not require an explicit type because they are used to
// derive the `Translations` type. See the `index.ts` file in this directory.
export const translations = {
  site: {
    description: "Luiz Felipe Gonçalves' (lffg) website",
    home: 'Back to home'
  },

  index: {
    greeting:
      'Hello and welcome to my (not so ready) website. As I am working on it, I leave below some contact information:',
    latestArticles: 'Latest articles',
    aboutMe: 'About me.',
    postedIn: (relative: string) => `Posted ${relative}.`
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
