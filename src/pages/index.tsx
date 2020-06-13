import { graphql } from 'gatsby';
import React from 'react';
import { ContactInfo } from '../components/contact-info';
import { LocalizedLink } from '../components/localized-link';
import { SEO } from '../components/seo';
import { useTranslations } from '../context/translations';
import type { PageProps } from '../types/gatsby';

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
      <ContactInfo />

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
              {article.frontmatter.desc} &middot; {article.frontmatter.fmtDate}
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
        fmtDate: string;
      };
    }>;
  };
}

export const query = graphql`
  query AllArticles($currentLocale: String, $dateFmt: String) {
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
          fmtDate: date(formatString: $dateFmt, locale: $currentLocale)
        }
      }
    }
  }
`;
