// Bundles entry.tsx against the booth source. Vite-only imports (`?worker`, `?url`, `?raw`) become stand-ins:
// the pages we render never filter photos or load workers.
// node build.mjs <boothSrc> <outdir>   (run with NODE_PATH=<booth node_modules>)
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const [src, outdir, entryArg] = process.argv.slice(2)
// ES modules ignore NODE_PATH: load esbuild from the booth's node_modules explicitly.
const { build } = createRequire(join(process.env.NODE_PATH, 'x'))('esbuild')
const here = dirname(fileURLToPath(import.meta.url))
const vite = {
  name: 'vite-suffixes',
  setup(b) {
    b.onResolve({ filter: /\?(worker|url|raw)$/ }, (a) => ({ path: a.path, namespace: 'vite-stub' }))
    b.onLoad({ filter: /.*/, namespace: 'vite-stub' }, (a) => ({
      contents: a.path.endsWith('?worker')
        ? 'export default class { postMessage() {} terminate() {} addEventListener() {} removeEventListener() {} }'
        : 'export default ""',
      loader: 'js'
    }))
  }
}
const loader = Object.fromEntries(['png', 'jpg', 'jpeg', 'webp', 'svg', 'gif', 'woff', 'woff2', 'ttf', 'otf', 'mp3', 'mp4', 'wasm'].map((e) => ['.' + e, 'dataurl']))
await build({
  // entry: a writer's own entry.tsx (BOOTH_ENTRY) or the shared one
  entryPoints: [entryArg || join(here, 'entry.tsx')], bundle: true, format: 'esm', jsx: 'automatic', outfile: join(outdir, 'bundle.js'),
  // react/react-dom pinned to the booth's copy: the docs repo has its own React, and two copies break hooks.
  alias: { '@renderer': `${src}/src/renderer`, '@shared': `${src}/src/shared`, react: join(process.env.NODE_PATH, 'react'), 'react-dom': join(process.env.NODE_PATH, 'react-dom') },
  define: { 'process.env.NODE_ENV': '"production"', 'import.meta.env': '{"DEV":false,"PROD":true,"MODE":"production"}' },
  loader, plugins: [vite], logLevel: 'error', nodePaths: [process.env.NODE_PATH]
})
