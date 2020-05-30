import type { GatsbyNode } from 'gatsby';
import pick from 'lodash.pick';
import {
  allTranslations,
  config,
  Locale,
  ScopedTranslations,
  Namespaces
} from '../../../resources/i18n';
import { stringifyJSONFn as stringify } from '../utils/json';
import { trimSlashes } from '../utils/trim-slashes';
import type { GatsbyPageContext } from './root-types';

export const gatsbyNode: GatsbyNode = {
  onCreatePage: ({ actions, page }) => {
    const { createPage, deletePage } = actions;

    deletePage(page);

    let defaultFound = false;

    Object.entries(allTranslations).forEach(([locale, translations]) => {
      const basePageName = trimSlashes(page.path).trim() || 'index';
      const isDefault = locale === config.defaultLocale;

      if (!defaultFound && isDefault) {
        defaultFound = true;
      }

      createPage<GatsbyPageContext>({
        ...page,

        path: isDefault
          ? // The default locale don't get a path prefix.
            page.path
          : // The other locales are path-prefixed.
            `/${locale}/${trimSlashes(page.path)}`,

        context: {
          basePageName,
          i18n: {
            locale: locale as Locale,
            serializedTranslations:
              // This will ensure functions are "available" to the pages.
              // TODO: Minify the functions using the second argument.
              stringify<ScopedTranslations<Namespaces>>(
                // Forward only translations specific to each page.
                pick(translations, ['site', basePageName as Namespaces])
              )
          }
        }
      });
    });

    if (!defaultFound) {
      throw new Error('You must set a default locale in the i18n config file.');
    }
  }
};
