import { parse, basename, resolve } from 'path';
import type { GatsbyNode } from 'gatsby';
import pick from 'lodash.pick';
import * as i18n from '../../../resources/i18n';
import type { GatsbyPageContext } from '../../types/gatsby';
import { stringifyJSONFn as stringify } from '../../utils/json';
import { trimSlashes, ensureSlashes } from '../../utils/slashes';

export const gatsbyNode: GatsbyNode = {
  /**
   * `SRC/PAGES` INTERNATIONALIZATION MECHANISM
   *
   * This will delete each page from the `src/pages` directory that Gatsby
   * automatically creates. This is needed in order to make the translations'
   * data available to them. To do so, each page is recreated for the number of
   * locales currently supported by the website. See `/resources/i18n/index.ts`.
   *
   * For example, the `/about` page (that Gatsby creates) will be deleted.
   * And (assuming the website supports the English and Portuguese languages)
   * two new pages will be created:
   *
   *  - `/about` (used by the default locale — e.g. English in this website)
   *  - `/pt/about`
   *
   * All translations and other information related to the internationalization
   * process are passed to the page via Gatsby page context.
   */
  onCreatePage: ({ actions, page }) => {
    const { createPage, deletePage } = actions;

    // Remove the page.
    deletePage(page);

    let defaultFound = false;

    // For each translation available to the website, iterate, and [...*]
    Object.entries(i18n.allTranslations).forEach(([locale, translations]) => {
      const basePageName = trimSlashes(page.path).trim() || 'index';
      const isDefault = locale === i18n.config.defaultLocale;

      if (!defaultFound && isDefault) {
        defaultFound = true;
      }

      // [...*] Create a page for the current iteration's translation.
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
            stringify<i18n.ScopedTranslations<i18n.Namespaces>>(
              // Forward only translations specific to each page.
              pick(translations, ['site', basePageName as i18n.Namespaces])
            )
        }
      });
    });

    // This will throw an error if no translation is set to default.
    // See the `/resources/i18n/index.ts` file.
    if (!defaultFound) {
      throw new Error('You must set a default locale in the i18n config file.');
    }
  },

  /**
   * This will populate the `Mdx` GraphQL type with some i18n-related fields.
   */
  onCreateNode: ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'Mdx') {
      const { name: locale, dir, base } = parse((node as any).fileAbsolutePath);

      if (!Object.keys(i18n.allTranslations).includes(locale)) {
        throw new Error(`Invalid article name: "${locale}".`);
      }

      const articleName = trimSlashes(basename(dir));

      const articleLink = `article/${articleName}`;

      const localizedArticleLink =
        i18n.config.defaultLocale === locale
          ? articleLink
          : `${locale}/${articleLink}`;

      const editArticleLink =
        'https://github.com/lffg/luizfelipe.dev/edit/master/resources/articles/' +
        `${articleName}/${base}`;

      [
        { name: 'locale', value: locale },
        { name: 'articleName', value: articleName },
        {
          name: 'articleLink',
          value: ensureSlashes(articleLink)
        },
        {
          name: 'localizedArticleLink',
          value: ensureSlashes(localizedArticleLink)
        },
        { name: 'editArticleLink', value: editArticleLink }
      ].forEach((fields) => createNodeField({ node, ...fields }));
    }
  },

  /**
   * This will create a new page for each article. See the `/resources/articles`
   * directory.
   */
  createPages: async ({ graphql, actions }) => {
    const { createPage } = actions;

    const { data, errors } = await graphql<{
      articles: {
        nodes: Array<{
          id: string;
          fields: {
            localizedArticleLink: string;
            locale: i18n.Locale;
          };
        }>;
      };
    }>(`
      query AllArticles {
        articles: allMdx {
          nodes {
            id
            fields {
              localizedArticleLink
              locale
            }
          }
        }
      }
    `);

    if (errors) {
      throw new Error(
        'Invalid GraphQL call in `createPages`. The `errors` is as follows:' +
          JSON.stringify(errors, null, 2)
      );
    }

    if (!data) {
      throw new Error(
        'Invalid GraphQL call in `createPages`. The `data` is undefined.'
      );
    }

    data.articles.nodes.forEach(({ id, fields }) => {
      const { locale, localizedArticleLink } = fields;
      const translation = i18n.allTranslations[locale];

      createPage<GatsbyPageContext & { id: string }>({
        component: resolve(process.cwd(), 'src/templates/article.tsx'),
        path: localizedArticleLink,
        context: {
          id: id,
          basePageName: 'article',
          currentLocale: locale,
          defaultLocale: i18n.config.defaultLocale,
          serializedTranslations: stringify<i18n.ScopedTranslations<'article'>>(
            pick(translation, ['site', 'article'])
          )
        }
      });
    });
  }
};
