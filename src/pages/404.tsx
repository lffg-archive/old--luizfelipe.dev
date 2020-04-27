import { Link } from 'gatsby';
import React from 'react';
import { Seo } from '../components/seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Not Found" />

      <h1>Not Found 🙁</h1>
      <p>The page you are looking for does not appear to exist here.</p>
      <p>
        You should go to the <Link to="/">homepage</Link>.
      </p>
    </>
  );
}
