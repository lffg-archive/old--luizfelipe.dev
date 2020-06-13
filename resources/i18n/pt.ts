import type { Translations, TranslationsContext } from '.';

export const translations: Translations = {
  site: {
    description: 'Website de Luiz Felipe Gonçalves (lffg)',
    nav: {
      home: 'Início',
      about: 'Sobre',
      contact: 'Contato'
    },
    footer: {
      openSource:
        'O código fonte deste website é <a href="https://github.com/lffg/luizfelipe.dev" rel="noopener noreferrer" target="_blank">open-source</a>.'
    }
  },

  index: {
    greeting:
      'Olá e seja bem-vindo(a) ao meu (ainda não finalizado) website. Enquanto estou trabalhando nele, deixo abaixo algumas informações para contato:',
    latestArticles: 'Últimos artigos',
    aboutMe: 'Sobre mim.'
  },

  about: {
    title: 'Sobre mim',
    desc: 'Todo (pt)'
  },

  contact: {
    title: 'Contato'
  },

  article: {}
};

export const context: TranslationsContext = {
  dateFmt: 'DD [de] MMMM [de] YYYY'
};
