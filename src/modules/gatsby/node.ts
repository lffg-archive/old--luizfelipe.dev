import type { GatsbyNode } from 'gatsby';
import { i18nOptions, getTranslations } from '../../../config/i18n';
import { trimSlashes } from '../utils/trim-slashes';
import type { Translations, Locales, GatsbyPageContext } from './page-context';

let translations: null | Translations = null;

export const gatsbyNode: GatsbyNode = {
  onCreatePage: async ({ actions, page }) => {
    const { createPage, deletePage } = actions;

    deletePage(page);

    // FIXME: This loads all translations of a given locale for each page.
    // Maybe this could be improved in the future.
    if (!translations) {
      // eslint-disable-next-line require-atomic-updates
      translations = await getTranslations();
    }

    let alreadyDefault = false;
    for (const [locale, options] of Object.entries(i18nOptions)) {
      if (options.default) {
        if (alreadyDefault) {
          throw new Error(
            'Invalid i18n configuration. More than one locale has the `default:true` option set.'
          );
        }

        alreadyDefault = true;
      }

      const path = options.default
        ? page.path
        : `/${locale}/${trimSlashes(page.path)}`;

      createPage<GatsbyPageContext>({
        ...page,
        path,
        context: {
          ...page.context,
          i18nOptions: options,
          translation: translations[locale as Locales],
          locale: locale as Locales
        }
      });
    }
  }
};
