import pick from 'lodash.pick';
import React, { createContext, useContext } from 'react';
import { ScopedTranslations, Namespaces } from '../../resources/i18n';

export interface ITranslationContext {
  translations: ScopedTranslations<Namespaces>;
  basePageName: string;
}

const TranslationContext = createContext<ITranslationContext | null>(null);

interface Props extends ITranslationContext {
  children: React.ReactNode;
}

export function TranslationContextProvider({ children, ...props }: Props) {
  return (
    <TranslationContext.Provider value={props}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation<K extends Namespaces = never>(
  key?: K
): ScopedTranslations<K> {
  const ensuredKey = key || 'site';
  const ctx = useContext(TranslationContext);

  if (ctx === null) {
    throw new Error('You must use `useTranslation` within its provider.');
  }

  const { basePageName, translations } = ctx;

  if (!translations[ensuredKey]) {
    throw new Error(
      `Invalid key "${key}" at "${basePageName}" page. The key should refer to the current page ("${basePageName}").`
    );
  }

  return pick(translations, [ensuredKey, 'site']);
}
