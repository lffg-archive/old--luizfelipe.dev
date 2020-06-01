import { graphql } from 'gatsby';
import React from 'react';
import { LocalizedLink } from '../components/localized-link';
import { SEO } from '../components/seo';
import { useTranslation } from '../context/translation';
import type { PageProps } from '../types/gatsby';

// prettier-ignore
const contactInfo = [
  ['Website',   'luizfelipe.dev',      'https://luizfelipe.dev'],
  ['GitHub',    'lffg',                'https://github.com/lffg'],
  ['Telegram',  'luizffg',             'https://t.me/luizffg'],
  ['E-Mail',    'lffgluiz@gmail.com'],
  ['Discord',   'Luiz#2029']
] as const;

export default function Index({ data }: PageProps<Data>) {
  const { index } = useTranslation('index');

  return (
    <>
      <SEO title="Luiz Felipe Gonçalves" removeTitleTemplate />

      <h1>Luiz Felipe Gonçalves</h1>
      <p>{index.greeting}</p>
      <p>
        <LocalizedLink to="/about">{index.aboutMe}</LocalizedLink>
      </p>
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

      <h3>{index.latestPosts}</h3>
      <ul>
        {data.allMdx.nodes.map((post) => (
          <li key={post.id}>
            <h4 style={{ margin: 0 }}>
              <LocalizedLink to={post.fields.postName}>
                {post.frontmatter.title}
              </LocalizedLink>
            </h4>
            <div>
              {post.frontmatter.desc} &middot;{' '}
              {index.postedIn(post.frontmatter.relativeDate)}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export interface Data {
  allMdx: {
    nodes: Array<{
      id: string;
      fields: {
        postName: string;
      };
      frontmatter: {
        title: string;
        desc: string;
        relativeDate: string;
      };
    }>;
  };
}

export const query = graphql`
  query AllPosts($currentLocale: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { locale: { eq: $currentLocale } } }
    ) {
      nodes {
        id
        fields {
          postName
        }
        frontmatter {
          title
          desc
          relativeDate: date(fromNow: true, locale: $currentLocale)
        }
      }
    }
  }
`;
