import { Link, GatsbyLinkProps as LinkProps } from 'gatsby';
import React from 'react';
import { Locale, createLocalizedPath } from '../../resources/i18n';
import { useLocale } from '../context/locale';

type Props<TState> = Omit<LinkProps<TState>, 'ref'> & {
  locale?: Locale;
};

export function LocalizedLink<TState>({ to, ...props }: Props<TState>) {
  const { currentLocale } = useLocale();

  const locale = props.locale || currentLocale;

  return (
    <Link
      {...props}
      to={createLocalizedPath({
        locale,
        base: to
      })}
    >
      {props.children}
    </Link>
  );
}
