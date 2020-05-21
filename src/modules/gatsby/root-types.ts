import type { PageProps as GatsbyPageProps } from 'gatsby';
import type { ReactNode } from 'react';

export interface GatsbyPageContext {}

export type LayoutProps = Omit<
  GatsbyPageProps<{}, GatsbyPageContext>,
  'children'
> & {
  children: ReactNode;
};

export type PageProps<Ctx = {}> = GatsbyPageProps<{}, GatsbyPageContext & Ctx>;
