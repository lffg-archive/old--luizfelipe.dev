import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { LocalizedLink } from '../components/localized-link';
import { SEO } from '../components/seo';
import { useTranslation } from '../context/translation';
import type { PageProps } from '../types/gatsby';

export default function Article({ data }: PageProps<Data>) {
  const { site } = useTranslation();

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
  query Article($id: String) {
    article: mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;
