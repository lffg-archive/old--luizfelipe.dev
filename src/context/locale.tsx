import React, { createContext, useContext } from 'react';
import { Locale } from '../../resources/i18n';

const LocaleContext = createContext<Locale | null>(null);

interface Props {
  children: React.ReactNode;
  locale: Locale;
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
