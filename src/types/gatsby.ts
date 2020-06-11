import type { PageProps as GatsbyPageProps } from 'gatsby';
import type { ReactNode } from 'react';
import type { Locale, TranslationsContext } from '../../resources/i18n';

export type GatsbyPageContext<T extends {} = {}> = T &
  TranslationsContext & {
    currentLocale: Locale;
    defaultLocale: Locale;
    serializedTranslations: string;

    /**
     * The name of the original page. Is separated by slashes (`/`) if the page is
     * nested within other directories. The default name is `index`.
     *
     * See `/src/context/translations.tsx` and `/src/modules/gatsby/node.ts`.
     */
    basePageName: string;
  };

export type LayoutProps = Omit<
  GatsbyPageProps<{}, GatsbyPageContext>,
  'children'
> & {
  children: ReactNode;
};

export type PageProps<Data = {}, Ctx = {}> = GatsbyPageProps<
  Data,
  GatsbyPageContext & Ctx
>;
