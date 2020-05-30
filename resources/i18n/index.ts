import { translations as en } from './en';
import { translations as pt } from './pt';

// INTERNATIONALIZATION CONFIGURATION
// ==================================

export const config: Config = {
  defaultLocale: 'en'
};

// INTERNATIONALIZATION DATA
// =========================

export const allTranslations = {
  en,
  pt
} as const;

// TYPES AND CONSTANTS
// ===================

export type Locale = keyof AllTranslations;

export type AllTranslations = typeof allTranslations;
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
