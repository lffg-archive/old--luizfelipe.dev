import { Link, GatsbyLinkProps as LinkProps } from 'gatsby';
import React from 'react';
import { Locale } from '../../resources/i18n';
import { useLocale } from '../context/locale';
import { ensureSlashes, trimSlashes } from '../utils/slashes';

type Props<TState> = Omit<LinkProps<TState>, 'ref'> & {
  locale?: Locale;
};

export function LocalizedLink<TState>({ to, ...props }: Props<TState>) {
  const { currentLocale, defaultLocale } = useLocale();

  const locale = props.locale || currentLocale;
  const isDefaultLocale = locale === defaultLocale;

  const link = isDefaultLocale ? to : `${locale}/${trimSlashes(to)}`;

  return (
    <Link {...props} to={ensureSlashes(link)}>
      {props.children}
    </Link>
  );
}
