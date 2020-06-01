import React, { createContext, useContext } from 'react';
import { Locale } from '../../resources/i18n';

export interface ILocaleContext {
  currentLocale: Locale;
  defaultLocale: Locale;
}

const LocaleContext = createContext<ILocaleContext | null>(null);

interface Props extends ILocaleContext {
  children: React.ReactNode;
}

export function LocaleContextProvider({ children, ...props }: Props) {
  return (
    <LocaleContext.Provider value={props}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);

  if (ctx === null) {
    throw new Error('You must use `useLocale` within its provider.');
  }

  return {
    ...ctx,
    isDefaultLocale: ctx.currentLocale === ctx.defaultLocale
  };
}
