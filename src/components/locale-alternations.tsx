import React from 'react';
import { Helmet } from 'react-helmet';
import { Locale, locales, createLocalizedPath } from '../../resources/i18n';

interface Props {
  currentLocale: Locale;
  currentBasePageName: string;
}

export function LocaleAlternations(props: Props) {
  const alternatedLocales = locales.filter(
    (locale) => locale !== props.currentLocale
  );

  const localizedPath = (locale: Locale) =>
    createLocalizedPath({
      base: props.currentBasePageName,
      locale
    });

  return (
    <Helmet>
      {alternatedLocales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          href={localizedPath(locale)}
          hrefLang={locale}
        />
      ))}
    </Helmet>
  );
}
