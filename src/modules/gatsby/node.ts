import { parse, basename, resolve } from 'path';
import type { GatsbyNode } from 'gatsby';
import {
  locales,
  allTranslations,
  isDefaultLocale,
  createLocalizedPath,
  isValidLocale,
  Locale
} from '../../../resources/i18n';
import type { GatsbyPageContext } from '../../types/gatsby';
import { trimSlashes, ensureSlashes } from '../../utils/slashes';
import { createInternationalizationContextData } from './helpers';

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
   * The translations (specific to each page) and other internationalization
   * information are passed to each page via its context.
   */
  onCreatePage: ({ actions, page }) => {
    const { createPage, deletePage } = actions;

    // Remove the page.
    deletePage(page);

    let defaultFound = false;

    // For each translation available to the website, iterate, and [...*]
    locales.forEach((locale) => {
      const translations = allTranslations[locale];
      const basePageName = trimSlashes(page.path).trim() || 'index';

      if (!defaultFound && isDefaultLocale(locale)) {
        defaultFound = true;
      }

      // [...*] Create a page for the current iteration's translations.
      createPage<GatsbyPageContext>({
        ...page,

        path: createLocalizedPath({
          locale,
          base: page.path
        }),

        context: createInternationalizationContextData<any>({
          basePageName,
          translations,
          locale
        })
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

      if (!isValidLocale(locale)) {
        throw new Error(`Invalid article name: "${locale}".`);
      }

      const articleName = trimSlashes(basename(dir));
      const articleLink = `article/${articleName}`;
      const localizedArticleLink = createLocalizedPath({
        locale,
        base: articleLink
      });
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
            locale: Locale;
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
      const translations = allTranslations[locale];

      createPage<GatsbyPageContext<{ id: string }>>({
        component: resolve(process.cwd(), 'src/templates/article.tsx'),
        path: localizedArticleLink,
        context: {
          id: id,
          ...createInternationalizationContextData<'article'>({
            basePageName: 'article',
            translations,
            locale
          })
        }
      });
    });
  }
};
