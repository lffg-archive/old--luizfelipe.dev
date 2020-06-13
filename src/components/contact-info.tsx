import React from 'react';

// prettier-ignore
const contactInfo = [
  ['Website',   'luizfelipe.dev',      'https://luizfelipe.dev'],
  ['GitHub',    'lffg',                'https://github.com/lffg'],
  ['Twitter',   '_lffg',               'https://twitter.com/_lffg'],
  ['Telegram',  'luizffg',             'https://t.me/luizffg'],
  ['E-Mail',    'lffgluiz@gmail.com'],
  ['Discord',   'Luiz#2029']
] as const;

export function ContactInfo() {
  return (
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
  );
}
