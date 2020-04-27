import React, { createContext, useState, useEffect, useContext } from 'react';

export interface LocaleContextInterface {
  locale: string;
  setLocale: (newLocale: string) => void;
}

const LocaleContext = createContext<LocaleContextInterface | null>(null);

interface Props {
  children: React.ReactNode;
  locale: string;
}

export function LocaleContextProvider(props: Props) {
  const [locale, setLocale] = useState<string>(props.locale);

  useEffect(() => {
    setLocale(locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
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
