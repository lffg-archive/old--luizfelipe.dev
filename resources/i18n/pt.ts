import type { Translations } from '.';

export const translations: Translations = {
  site: {
    description: 'Website de Luiz Felipe Gonçalves (lffg)'
  },

  index: {
    greeting:
      'Olá e seja bem-vindo(a) ao meu (ainda não finalizado) website. Enquanto estou trabalhando nele, deixo abaixo algumas informações para contato:',
    latestArticles: 'Últimos artigos',
    aboutMe: 'Sobre mim.',
    postedIn: (relative: string) => `Postado ${relative}.`
  },

  about: {
    title: 'Sobre mim',
    desc: 'Todo (pt)'
  }
};
