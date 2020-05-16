import React from 'react';
import { Seo } from '../components/seo';
import { useTranslation } from '../context/translation';

export default function About() {
  const { title, content } = useTranslation().about;

  return (
    <>
      <Seo title={title} />

      <h1>{title}</h1>
      <p>{content}</p>
    </>
  );
}
