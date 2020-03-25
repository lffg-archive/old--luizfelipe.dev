import { AppProps } from 'next/app';
import React from 'react';
import './_app.scss';

export default function NextApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
