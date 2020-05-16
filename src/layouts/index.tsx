import type { PageProps } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import { Seo } from '../components/seo';
import { LocaleContextProvider } from '../context/locale';
import { TranslationContextProvider } from '../context/translation';
import type { GatsbyPageContext } from '../modules/gatsby/page-context';

type Props = PropsWithChildren<PageProps<{}, GatsbyPageContext>>;

export default function Layout({ children, pageContext }: Props) {
  return (
    <LocaleContextProvider locale={pageContext.locale}>
      <TranslationContextProvider translation={pageContext.translation}>
        <Seo />
        {children}
      </TranslationContextProvider>
    </LocaleContextProvider>
  );
}
