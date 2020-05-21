import React from 'react';
import { Seo } from '../components/seo';
import type { LayoutProps } from '../modules/gatsby/root-types';

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Seo />
      {children}
    </>
  );
}
