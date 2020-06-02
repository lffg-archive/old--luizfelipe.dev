import React from 'react';
import type { Translations } from '../../resources/i18n';
import { LocaleChanger } from '../components/locale-changer';
import { SEO } from '../components/seo';
import { LocaleContextProvider } from '../context/locale';
import { TranslationContextProvider } from '../context/translation';
import type { LayoutProps } from '../types/gatsby';
import { parseJSONFn } from '../utils/json';

export default function Layout({ children, pageContext }: LayoutProps) {
  const {
    basePageName,
    serializedTranslations,
    currentLocale,
    defaultLocale
  } = pageContext;

  const translations = parseJSONFn<Translations>(serializedTranslations);

  return (
    <LocaleContextProvider
      currentLocale={currentLocale}
      defaultLocale={defaultLocale}
    >
      <TranslationContextProvider
        basePageName={basePageName}
        translations={translations}
      >
        <SEO />

        {children}

        <footer>
          <hr />
          <LocaleChanger />
        </footer>
      </TranslationContextProvider>
    </LocaleContextProvider>
  );
}
