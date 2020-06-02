import { Link } from 'gatsby';
import React from 'react';
import { locales, Locale, createLocalizedPath } from '../../resources/i18n';
import { useLocale } from '../context/locale';

function getMessage(locale: Locale) {
  if (locale === 'pt') {
    return 'Mudar para o site em português';
  }

  if (locale === 'en') {
    return 'Switch to English site';
  }

  // This will ensure all locales are handled above.
  const ensureAllLocalesAreHandled: never = locale;
  void ensureAllLocalesAreHandled;
}

export function LocaleChanger() {
  const { currentLocale } = useLocale();

  return (
    <div>
      {locales
        .filter((locale) => locale !== currentLocale)
        .map((locale) => (
          <Link
            key={locale}
            to={createLocalizedPath({
              base: '/',
              locale
            })}
          >
            {getMessage(locale)}
          </Link>
        ))}
    </div>
  );
}
