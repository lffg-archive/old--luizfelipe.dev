import type { Translations } from '.';

export const translations: Translations = {
  site: {
    description: 'Website de Luiz Felipe Gonçalves (lffg)'
  },

  index: {
    title: 'Bem-vindo(a)',

    dynamicTest: (count: number) =>
      count > 0
        ? `Existe(m) atualmente ${count.toLocaleString('pt')} campo(s).`
        : 'Não existem campos atualmente.'
  },

  about: {
    title: 'Sobre mim',
    description: 'Todo (pt)'
  }
};
