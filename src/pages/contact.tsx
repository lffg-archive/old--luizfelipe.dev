import React from 'react';
import { ContactInfo } from '../components/contact-info';
import { SEO } from '../components/seo';
import { useTranslations } from '../context/translations';

export default function Contact() {
  const { contact } = useTranslations('contact');

  return (
    <>
      <SEO title={contact.title} />

      <h1>{contact.title}</h1>
      <ContactInfo />
    </>
  );
}
