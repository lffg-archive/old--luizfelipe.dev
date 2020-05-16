import React, { createContext, useContext } from 'react';
import type { Translations, Locales } from '../modules/gatsby/page-context';

const TranslationContext = createContext<Translations[Locales] | null>(null);

interface Props<L extends Locales> {
  children: React.ReactNode;
  translation: Translations[L];
}

export function TranslationContextProvider<L extends Locales>(props: Props<L>) {
  return (
    <TranslationContext.Provider value={props.translation}>
      {props.children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (ctx === null) {
    throw new Error('You must use `useTranslation` within its provider.');
  }
  return ctx;
}
