import pick from 'lodash.pick';
import React, { createContext, useContext } from 'react';
import { ScopedTranslations, Namespaces } from '../../resources/i18n';

export interface ITranslationsContext {
  translations: ScopedTranslations<Namespaces>;
  basePageName: string;
}

const TranslationsContext = createContext<ITranslationsContext | null>(null);

interface Props extends ITranslationsContext {
  children: React.ReactNode;
}

export function TranslationsContextProvider({ children, ...props }: Props) {
  return (
    <TranslationsContext.Provider value={props}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations<K extends Namespaces = never>(
  key?: K
): ScopedTranslations<K> {
  const ensuredKey = key || 'site';
  const ctx = useContext(TranslationsContext);

  if (ctx === null) {
    throw new Error('You must use `useTranslations` within its provider.');
  }

  const { basePageName, translations } = ctx;

  if (!translations[ensuredKey]) {
    throw new Error(
      `Invalid key "${key}" at "${basePageName}" page. The key should refer to the current page ("${basePageName}").`
    );
  }

  return pick(translations, [ensuredKey, 'site']);
}
