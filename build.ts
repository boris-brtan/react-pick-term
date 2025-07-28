import { build } from 'bun'

await build({
  entrypoints: ['src/PickTerm.tsx'],
  external: ['react', 'react-dom'],
  minify: true,
  outdir: 'dist',
  sourcemap: 'external',
  target: 'browser',
})
