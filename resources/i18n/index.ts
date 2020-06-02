import { translations as en } from './en';
import { translations as pt } from './pt';

// INTERNATIONALIZATION CONFIGURATION
// ==================================

export const config: Config = {
  defaultLocale: 'en'
};

// INTERNATIONALIZATION DATA
// =========================

export const locales = ['en', 'pt'] as const;

export const allTranslations: AllTranslations = {
  en,
  pt
} as const;

// TYPES AND CONSTANTS
// ===================

export type Locale = typeof locales[number];

export type AllTranslations = Record<Locale, Translations>;
export type Translations = typeof en;
export type ScopedTranslations<Namespace extends Namespaces> = Pick<
  Translations,
  'site' | Namespace
>;

export type AllNamespaces = keyof Translations;
export type Namespaces = Exclude<AllNamespaces, 'site'>; // `site` is a meta-namespace which is always available.

export interface Config {
  defaultLocale: Locale;
}
