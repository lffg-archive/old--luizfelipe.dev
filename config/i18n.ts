import type { PromiseValue } from 'type-fest';

export const i18nOptions = {
  en: {
    default: true,
    ogLanguage: 'en_US'
  },
  pt: {
    default: false,
    ogLanguage: 'pt_BR'
  }
};

export function getTranslations() {
  return getKeys({
    pt: import('./locales/pt'),
    en: import('./locales/en')
  });
}

// PRIVATE HELPERS
// ===============

async function getKeys<
  T extends {
    [key: string]: Promise<{ translations: unknown }>;
  }
>(
  translations: T
): Promise<{ [key in keyof T]: PromiseValue<T[key]>['translations'] }> {
  const final: any = {};

  for (const [key, translation] of await Promise.all(
    Object.entries(translations).map(
      async ([key, value]) =>
        [key, (await value).translations] as [string, unknown]
    )
  )) {
    final[key] = translation;
  }

  return final;
}
