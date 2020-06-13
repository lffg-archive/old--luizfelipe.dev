import React from 'react';
import type { Translations } from '../../resources/i18n';
import { Container, InnerContainer } from '../components/layout/container';
import { Footer } from '../components/layout/footer';
import { GlobalStyle } from '../components/layout/global-style';
import { Header } from '../components/layout/header';
import { SEO } from '../components/seo';
import { LocaleContextProvider } from '../context/locale';
import { ThemeProvider } from '../context/theme';
import { TranslationsContextProvider } from '../context/translations';
import type { LayoutProps, GatsbyPageContext } from '../types/gatsby';
import { parseJSONFn } from '../utils/json';

export default function Layout({ children, pageContext }: LayoutProps) {
  return (
    <AppProviders {...pageContext}>
      <SEO />
      <GlobalStyle />

      <Header />
      <Container>
        <InnerContainer>{children}</InnerContainer>
        <Footer />
      </Container>
    </AppProviders>
  );
}

const AppProviders: React.FC<GatsbyPageContext> = ({ children, ...ctx }) => {
  const translations = parseJSONFn<Translations>(ctx.serializedTranslations);

  return (
    <LocaleContextProvider
      currentLocale={ctx.currentLocale}
      defaultLocale={ctx.defaultLocale}
    >
      <TranslationsContextProvider
        basePageName={ctx.basePageName}
        translations={translations}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </TranslationsContextProvider>
    </LocaleContextProvider>
  );
};
