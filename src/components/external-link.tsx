import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
}

export function ExternalLink({ children, href }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
