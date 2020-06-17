import { trimSlashes } from '../../src/utils/slashes';
import * as en from './en';
import * as pt from './pt';

// INTERNATIONALIZATION CONFIGURATION
// ==================================

export const config: Config = {
  defaultLocale: 'en'
};

export const locales = ['en', 'pt'] as const;

export const allTranslationsData: AllTranslationsData = {
  en,
  pt
};

// TYPES AND CONSTANTS
// ===================

export type Locale = typeof locales[number];

// Derived types
export type TranslationsData = typeof en;
export type TranslationsContext = TranslationsData['context'];
export type Translations = TranslationsData['translations'];

export type AllTranslationsData = Localized<TranslationsData>;
export type AllTranslationsContext = Localized<TranslationsContext>;
export type AllTranslations = Localized<Translations>;

export type AllNamespaces = keyof Translations;
export type Namespaces = Exclude<AllNamespaces, 'site'>; // `site` is a meta-namespace which is always available.

export type ScopedTranslations<Namespace extends Namespaces> = Pick<
  Translations,
  'site' | Namespace
>;

export interface Config {
  defaultLocale: Locale;
}

export type Localized<T> = Record<Locale, T>;

// INTERNATIONALIZATION HELPER FUNCTIONS
// =====================================

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function isDefaultLocale(locale: Locale) {
  return locale === config.defaultLocale;
}

interface CreateLocalizedPathOptions {
  locale: Locale;
  base: string;
}

export function createLocalizedPath(options: CreateLocalizedPathOptions) {
  const { locale, base } = options;
  const fixedBase = base === 'index' ? '/' : base;

  return isDefaultLocale(locale)
    ? // The default locale does not get a path prefix.
      '/' + trimSlashes(fixedBase)
    : // The other locales have a path prefix.
      `/${locale}/${trimSlashes(fixedBase)}`;
}
