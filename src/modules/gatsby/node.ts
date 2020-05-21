import type { GatsbyNode } from 'gatsby';
import type { GatsbyPageContext } from './root-types';

export const gatsbyNode: GatsbyNode = {
  onCreatePage: ({ actions, page }) => {
    const { createPage, deletePage } = actions;

    deletePage(page);

    // TODO: Implement i18n
    createPage<GatsbyPageContext>({
      ...page,
      context: {}
    });
  }
};
