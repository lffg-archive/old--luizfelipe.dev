import pick from 'lodash.pick';
import {
  config,
  Translations,
  ScopedTranslations,
  Namespaces,
  Locale
} from '../../../resources/i18n';
import { GatsbyPageContext } from '../../types/gatsby';
import { stringifyJSONFn as stringify } from '../../utils/json';

interface CreateInternationalizationContextDataOptions<
  Namespace extends Namespaces
> {
  translations: Translations;
  basePageName: Namespace;
  locale: Locale;
}

export function createInternationalizationContextData<
  Namespace extends Namespaces = Namespaces
>(
  options: CreateInternationalizationContextDataOptions<Namespace>
): GatsbyPageContext {
  const { basePageName, translations, locale } = options;

  return {
    basePageName,
    currentLocale: locale,
    defaultLocale: config.defaultLocale,
    serializedTranslations:
      // This will ensure functions are "available" to the pages.
      stringify<ScopedTranslations<Namespace>>(
        // Forward only specific page translations to avoid large client payloads.
        pick(translations, ['site', basePageName])
      )
  };
}
