import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { SEO } from '../components/seo';
import type { PageProps } from '../types/gatsby';

export default function Article({ data }: PageProps<Data>) {
  const { body, frontmatter } = data.article;

  return (
    <>
      <SEO title={frontmatter.title} />

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
