import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

export default function NotFoundErrorPage() {
  return (
    <Layout>
      <Seo title="Page Not Found" />

      <h1>Page Not Found 🙁</h1>
      <p>You just hit a route that does not exist.</p>
      <Link to="/">Go back to the homepage.</Link>
    </Layout>
  );
}
