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
        defaultLang
      }
    }
  }
`;

interface Props {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
}

export function Seo(props: Props) {
  const { siteMetadata } = useStaticQuery(QUERY).site;

  const metaDescription = props.description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang: props.lang || siteMetadata.defaultLang }}
      title={props.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: siteMetadata.title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: '@' + siteMetadata.social.twitter },
        { name: `twitter:title`, content: siteMetadata.title },
        { name: `twitter:description`, content: metaDescription },
        ...(props.meta || [])
      ]}
    />
  );
}
