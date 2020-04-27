import { GatsbyNode } from 'gatsby';
import { config as i18n } from '../../../config/i18n';
import { trimSlashes } from '../utils/trim-slashes';

export const gatsbyNode: GatsbyNode = {
  onCreatePage: ({ actions, page }) => {
    const { createPage, deletePage } = actions;

    deletePage(page);

    let alreadyDefault = false;
    for (const [locale, options] of Object.entries(i18n)) {
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

      createPage({
        ...page,
        path,
        context: {
          ...page.context,
          localeOptions: options,
          locale
        }
      });
    }
  }
};
