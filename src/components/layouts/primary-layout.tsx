import React from 'react';
import styles from './primary-layout.module.scss';

import './scss/index.scss';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
