import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import * as S from './layout-styles';

import './css/normalize.css';
import './css/global.css';

const PAGE_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const data = useStaticQuery(PAGE_QUERY);
  const { title, author } = data.site.siteMetadata;

  return (
    <S.App>
      <S.Header>
        <strong>{title}</strong>
      </S.Header>
      <S.Container>{children}</S.Container>
      <S.Footer>&copy; {author} &middot; Built with Gatsby</S.Footer>
    </S.App>
  );
}
