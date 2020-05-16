import type { AsyncReturnType } from 'type-fest';
import type { getTranslations, i18nOptions } from '../../../config/i18n';

export type Translations = AsyncReturnType<typeof getTranslations>;
export type I18nOptions = typeof i18nOptions;
export type Locales = keyof Translations;

export interface GatsbyPageContext<L extends Locales = Locales> {
  i18nOptions: I18nOptions[L];
  translation: Translations[L];
  locale: L;
}
