import React from 'react';
import type { Translations } from '../../resources/i18n';
import { Seo } from '../components/seo';
import { LocaleContextProvider } from '../context/locale';
import { TranslationContextProvider } from '../context/translation';
import type { LayoutProps } from '../modules/gatsby/root-types';
import { parseJSONFn } from '../modules/utils/json';

export default function Layout({ children, pageContext }: LayoutProps) {
  const { basePageName, i18n } = pageContext;
  const translations = parseJSONFn<Translations>(i18n.serializedTranslations);

  return (
    <LocaleContextProvider locale={i18n.locale}>
      <TranslationContextProvider
        basePageName={basePageName}
        translations={translations}
      >
        <Seo />
        {children}
      </TranslationContextProvider>
    </LocaleContextProvider>
  );
}
