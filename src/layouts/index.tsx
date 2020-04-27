import { PageProps } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import { Seo } from '../components/seo';
import { LocaleContextProvider } from '../context/locale';

type Props = PropsWithChildren<PageProps<object, { locale: string }>>;

export default function Layout({ children, pageContext }: Props) {
  return (
    <LocaleContextProvider locale={pageContext.locale}>
      <Seo title="Luiz Felipe Gonçalves" removeTitleTemplate />
      {children}
    </LocaleContextProvider>
  );
}
