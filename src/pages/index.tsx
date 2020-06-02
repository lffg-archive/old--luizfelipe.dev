import { graphql } from 'gatsby';
import React from 'react';
import { LocalizedLink } from '../components/localized-link';
import { SEO } from '../components/seo';
import { useTranslations } from '../context/translations';
import type { PageProps } from '../types/gatsby';

// prettier-ignore
const contactInfo = [
  ['Website',   'luizfelipe.dev',      'https://luizfelipe.dev'],
  ['GitHub',    'lffg',                'https://github.com/lffg'],
  ['Twitter',   '_lffg',               'https://twitter.com/_lffg'],
  ['Telegram',  'luizffg',             'https://t.me/luizffg'],
  ['E-Mail',    'lffgluiz@gmail.com'],
  ['Discord',   'Luiz#2029']
] as const;

export default function Index({ data }: PageProps<Data>) {
  const { index } = useTranslations('index');

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

      <h3>{index.latestArticles}</h3>
      <ul>
        {data.articles.nodes.map((article) => (
          <li key={article.id}>
            <h4 style={{ margin: 0 }}>
              <LocalizedLink to={article.fields.articleLink}>
                {article.frontmatter.title}
              </LocalizedLink>
            </h4>
            <div>
              {article.frontmatter.desc} &middot;{' '}
              {index.postedIn(article.frontmatter.relativeDate)}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export interface Data {
  articles: {
    nodes: Array<{
      id: string;
      fields: {
        articleLink: string;
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
  query AllArticles($currentLocale: String) {
    articles: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { locale: { eq: $currentLocale } } }
    ) {
      nodes {
        id
        fields {
          articleLink
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
