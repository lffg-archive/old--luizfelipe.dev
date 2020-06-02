import React from 'react';
import { SEO } from '../components/seo';
import { useTranslations } from '../context/translations';

export default function About() {
  const { about } = useTranslations('about');
  return (
    <>
      <SEO title={about.title} />

      <h1>{about.title}</h1>
      <p>{about.desc}</p>
    </>
  );
}
