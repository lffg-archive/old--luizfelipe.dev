import React from 'react';
import { SEO } from '../components/seo';
import { useTranslation } from '../context/translation';

export default function About() {
  const { about } = useTranslation('about');
  return (
    <>
      <SEO title={about.title} />

      <h1>{about.title}</h1>
      <p>{about.desc}</p>
    </>
  );
}
