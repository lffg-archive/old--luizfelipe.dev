import React from 'react';
import { Seo } from '../components/seo';
import { useLocale } from '../context/locale';
import { useTranslation } from '../context/translation';

export default function Index() {
  const locale = useLocale();
  const translation = useTranslation();

  return (
    <>
      <Seo title="Luiz Felipe Gonçalves" removeTitleTemplate />

      <h1>Luiz Felipe Gonçalves</h1>

      <pre>{locale}</pre>
      <pre>{JSON.stringify(translation, null, 2)}</pre>
    </>
  );
}
