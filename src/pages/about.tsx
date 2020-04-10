import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

export default function About() {
  return (
    <Layout>
      <Seo title="About" />

      <h1>About</h1>
      <p>
        This website was developed using Gatsby. It is open-source. Check it out
        on{' '}
        <a
          href="https://github.com/lffg/hello-gatsby"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage.</Link>
    </Layout>
  );
}
