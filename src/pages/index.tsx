import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

export default function Index() {
  return (
    <Layout>
      <Seo title="Luiz Felipe Gonçalves" removeTitleTemplate />

      <h1>Hello, world!</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/about">About page.</Link>
    </Layout>
  );
}
