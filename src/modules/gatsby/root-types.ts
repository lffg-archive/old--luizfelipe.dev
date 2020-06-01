import type { PageProps as GatsbyPageProps } from 'gatsby';
import type { ReactNode } from 'react';
import type { Locale } from '../../../resources/i18n';

export interface GatsbyPageContext {
  locale: Locale;
  serializedTranslations: string;

  /**
   * The name of the original page. Is separated by slashes (`/`) if the page is
   * nested within other directories. The default name is `index`.
   *
   * See `/src/context/translation.tsx` and `/src/modules/gatsby/node`.
   */
  basePageName: string;
}

export type LayoutProps = Omit<
  GatsbyPageProps<{}, GatsbyPageContext>,
  'children'
> & {
  children: ReactNode;
};

export type PageProps<Ctx = {}> = GatsbyPageProps<{}, GatsbyPageContext & Ctx>;
