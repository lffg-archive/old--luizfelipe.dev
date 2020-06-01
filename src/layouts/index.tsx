import React from 'react';
import type { Translations } from '../../resources/i18n';
import { SEO } from '../components/seo';
import { LocaleContextProvider } from '../context/locale';
import { TranslationContextProvider } from '../context/translation';
import { parseJSONFn } from '../modules/utils/json';
import type { LayoutProps } from '../types/gatsby';

export default function Layout({ children, pageContext }: LayoutProps) {
  const { basePageName, locale, serializedTranslations } = pageContext;
  const translations = parseJSONFn<Translations>(serializedTranslations);

  return (
    <LocaleContextProvider locale={locale}>
      <TranslationContextProvider
        basePageName={basePageName}
        translations={translations}
      >
        <SEO />
        {children}
      </TranslationContextProvider>
    </LocaleContextProvider>
  );
}
