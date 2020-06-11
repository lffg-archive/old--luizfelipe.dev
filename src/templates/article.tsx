import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { LocalizedLink } from '../components/localized-link';
import { SEO } from '../components/seo';
import { useTranslations } from '../context/translations';
import type { PageProps } from '../types/gatsby';

export default function Article({ data }: PageProps<Data>) {
  const { site } = useTranslations();

  const { body, frontmatter } = data.article;

  return (
    <>
      <SEO title={frontmatter.title} />

      <LocalizedLink to="/">{site.home}</LocalizedLink>
      <h1>{frontmatter.title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  );
}

export interface Data {
  article: {
    frontmatter: {
      title: string;
    };
    body: string;
  };
}

export const query = graphql`
  query Article($articleId: String) {
    article: mdx(id: { eq: $articleId }) {
      frontmatter {
        title
      }
      body
    }
  }
`;
