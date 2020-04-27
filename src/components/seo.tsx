import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const QUERY = graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
        }
        title
        description
      }
    }
  }
`;

interface Props {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
  removeTitleTemplate?: true;
}

export function Seo(props: Props) {
  const { siteMetadata } = useStaticQuery(QUERY).site;

  const title = props.removeTitleTemplate
    ? props.title
    : `${props.title} · ${siteMetadata.title}`;

  const description = props.description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang: props.lang || siteMetadata.defaultLang }}
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
