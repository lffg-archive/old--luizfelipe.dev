import { parse, basename } from 'path';
import type { GatsbyNode } from 'gatsby';
import pick from 'lodash.pick';
import * as i18n from '../../../resources/i18n';
import type { GatsbyPageContext } from '../../types/gatsby';
import { stringifyJSONFn as stringify } from '../../utils/json';
import { trimSlashes } from '../../utils/trim-slashes';

export const gatsbyNode: GatsbyNode = {
  onCreatePage: ({ actions, page }) => {
    const { createPage, deletePage } = actions;

    deletePage(page);

    let defaultFound = false;

    Object.entries(i18n.allTranslations).forEach(([locale, translations]) => {
      const basePageName = trimSlashes(page.path).trim() || 'index';
      const isDefault = locale === i18n.config.defaultLocale;

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
          currentLocale: locale as i18n.Locale,
          defaultLocale: i18n.config.defaultLocale,
          serializedTranslations:
            // This will ensure functions are "available" to the pages.
            // TODO: Minify the functions using the second argument.
            stringify<i18n.ScopedTranslations<i18n.Namespaces>>(
              // Forward only translations specific to each page.
              pick(translations, ['site', basePageName as i18n.Namespaces])
            )
        }
      });
    });

    if (!defaultFound) {
      throw new Error('You must set a default locale in the i18n config file.');
    }
  },

  onCreateNode: ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'Mdx') {
      const { name: locale, dir } = parse((node as any).fileAbsolutePath);

      if (!Object.keys(i18n.allTranslations).includes(locale)) {
        throw new Error(`Invalid post name: "${locale}".`);
      }

      const postName = basename(dir);
      const postLink = `${locale}/${postName}`;
      const editPostLink = `TODO`;

      [
        { name: 'locale', value: locale },
        { name: 'postName', value: postName },
        { name: 'postLink', value: postLink },
        { name: 'editPostLink', value: editPostLink }
      ].forEach((fields) => createNodeField({ node, ...fields }));
    }
  }
};
