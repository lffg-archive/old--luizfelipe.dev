import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styles from './layout.module.scss';

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
    <div className={styles.app}>
      <header className={styles.header}>
        <strong>{title}</strong>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        &copy; {author} &middot; Built with Gatsby
      </footer>
    </div>
  );
}
