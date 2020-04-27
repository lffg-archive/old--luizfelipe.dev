import React from 'react';
import { Seo } from '../components/seo';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="lffg-root">
      <Seo title="Luiz Felipe Gonçalves" removeTitleTemplate />
      {children}
    </div>
  );
}
