import React, { createContext, useContext } from 'react';
import type { Locales } from '../modules/gatsby/page-context';

const LocaleContext = createContext<Locales | null>(null);

interface Props {
  children: React.ReactNode;
  locale: Locales;
}

export function LocaleContextProvider(props: Props) {
  return (
    <LocaleContext.Provider value={props.locale}>
      {props.children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (ctx === null) {
    throw new Error('You must use `useLocale` within its provider.');
  }
  return ctx;
}
