import React from 'react';
import { Seo } from '../components/seo';

// prettier-ignore
const contactInfo = [
  ['Website',   'luizfelipe.dev',      'https://luizfelipe.dev'],
  ['GitHub',    'lffg',                'https://github.com/lffg'],
  ['Telegram',  'luizffg',             'https://t.me/luizffg'],
  ['E-Mail',    'lffgluiz@gmail.com'],
  ['Discord',   'Luiz#2029']
] as const;

export default function Index() {
  return (
    <>
      <Seo title="Luiz Felipe Gonçalves" removeTitleTemplate />

      <h1>Luiz Felipe Gonçalves</h1>
      <ul>
        {contactInfo.map(([name, profile, link]) => (
          <li key={name}>
            {link ? (
              <a href={link}>
                {name} ({profile})
              </a>
            ) : (
              <>
                {name} ({profile})
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
