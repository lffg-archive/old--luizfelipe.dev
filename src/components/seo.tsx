import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocale } from '../context/locale';
import { useTranslations } from '../context/translations';

const QUERY = graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
        }
        title
      }
    }
  }
`;

interface Query {
  site: {
    siteMetadata: {
      social: {
        twitter: string;
      };
      title: string;
    };
  };
}

interface Props {
  description: string;
  meta: any[];
  title: string;
  removeTitleTemplate: true;
}

export function SEO(props: Partial<Props>) {
  const { siteMetadata } = useStaticQuery<Query>(QUERY).site;
  const { currentLocale } = useLocale();
  const { site } = useTranslations();

  const title = props.removeTitleTemplate
    ? props.title
    : `${props.title} · ${siteMetadata.title}`;

  const description = props.description || site.description;

  return (
    <Helmet
      htmlAttributes={{ lang: currentLocale }}
      title={title}
      meta={[
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: '@' + siteMetadata.social.twitter },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        ...(props.meta || [])
      ]}
    />
  );
}
