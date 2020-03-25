import Head from 'next/head';
import React from 'react';
import { ExternalLink } from '../components/external-link';

export default function Index() {
  return (
    <>
      <Head>
        <title>Luiz Felipe Gonçalves</title>
      </Head>
      <h1>Luiz Felipe Gonçalves</h1>
      <p>Hello, this is my homepage that is yet to be polished.</p>
      <p>For now, you can check out some of my profile links:</p>
      <ul>
        <li>
          <ExternalLink href="https://github.com/lffg">GitHub</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://pt.stackoverflow.com/users/69296/luiz-felipe">
            Portuguese StackOverflow
          </ExternalLink>
        </li>
      </ul>
      <p>You reach me also using Telegram or Discord:</p>
      <ul>
        <li>
          My telegram is{' '}
          <ExternalLink href="https://t.me/luizffg">@luizffg</ExternalLink>
        </li>
        <li>My Discord is Luiz#2029</li>
      </ul>
    </>
  );
}
