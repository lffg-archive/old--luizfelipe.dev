// https://www.gatsbyjs.org/docs/node-apis/

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017'
  }
});

module.exports = {
  ...require('./src/modules/gatsby/node.ts').gatsbyNode
};
