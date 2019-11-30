const cleaner = require('rollup-plugin-cleaner');
const typescript = require('rollup-plugin-typescript2');
const resolve = require('rollup-plugin-node-resolve');

const pkg = require('./package.json');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    cleaner({
      targets: ['./dist']
    }),
    resolve(),
    typescript({
      clean: true,
      rollupCommonJSResolveHack: true,
      typescript: require('typescript')
    })
  ]
};
