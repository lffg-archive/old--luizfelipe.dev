import { graphql } from 'gatsby';
import React from 'react';
import { SEO } from '../components/seo';
import type { PageProps } from '../types/gatsby';

export default function Article({ data, pageContext }: PageProps<Data>) {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
      <SEO title="Luiz Felipe Gonçalves" removeTitleTemplate />
      <h1>Article Page</h1>
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
