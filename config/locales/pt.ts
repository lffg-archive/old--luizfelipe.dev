import type { translations as en } from './en';

// This will ensure that `pt` translation keeps in sync with `en`.
type Translations = typeof en;

export const translations: Translations = {
  site: {
    description:
      'Website de Luiz Felipe Gonçalves (lffg). Artigos, dicas, tutoriais e mais.'
  },

  home: {
    // Home page portuguese translations
  },

  about: {
    title: 'Sobre',
    content: 'Esta é a versão em português da página sobre.'
  }
};
