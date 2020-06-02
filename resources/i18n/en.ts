// English translation does not require an explicit type because it is used to
// derive the `Translation` type. See the config.ts file in this directory.
export const translations = {
  site: {
    description: "Luiz Felipe Gonçalves' (lffg) website"
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
