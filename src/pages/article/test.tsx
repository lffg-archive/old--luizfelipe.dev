import { readdirSync } from 'fs';
import React from 'react';

export default function Test(props: any) {
  return (
    <div>
      <h1>Dados:</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      data: 3,
      cwd: {
        path: process.cwd(),
        ls: readdirSync(process.cwd())
      },
      dirname: {
        path: __dirname,
        ls: readdirSync(__dirname)
      }
    }
  };
}
