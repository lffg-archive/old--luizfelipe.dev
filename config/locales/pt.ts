import type { translations as en } from './en';

// This will ensure that `pt` translation keeps in sync with `en`.
type Translations = typeof en;

export const translations: Translations = {
  site: {
    title: 'Luiz Felipe Gonçalves',
    description:
      'Site do Luiz Felipe Gonçalves (lffg). Artigos, dicas, tutoriais e mais.'
  },

  home: {
    // Home page portuguese translations
  },

  about: {
    title: 'Sobre',
    content: 'Esta é a versão em português da página sobre.'
  }
};
