// English translation does not require an explicit type because it is used to
// derive the `Translation` type. See the config.ts file in this directory.
export const translations = {
  site: {
    description: "Luiz Felipe Gonçalves' (lffg) website"
  },

  index: {
    title: 'Welcome',

    dynamicTest: (count: number) =>
      count > 0
        ? `There are currently ${count.toLocaleString('en')} fields.`
        : 'There are no fields.'
  },

  about: {
    title: 'About me',
    description: 'Todo (en)'
  }
};
