
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Developer-survival-kit/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Developer-survival-kit"
  },
  {
    "renderMode": 2,
    "route": "/Developer-survival-kit/magic8ball"
  },
  {
    "renderMode": 2,
    "route": "/Developer-survival-kit/alibi-generator"
  },
  {
    "renderMode": 2,
    "route": "/Developer-survival-kit/meme-battle"
  },
  {
    "renderMode": 2,
    "route": "/Developer-survival-kit/joke-machine"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H3XE54JW.js"
    ],
    "route": "/Developer-survival-kit/what-to-do"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 935, hash: '3a81b8cfdb0354c7675f073b2aa302c4a2160bc91468e5feb6cb90ff19d50bc8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1085, hash: 'fdebef6ab1fbae4093f1b8a3e605b39f02ca0df51177dd6e81de0b9cef30ba30', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'magic8ball/index.html': {size: 8069, hash: 'fe7d37c7bd8f5282c3d4a18b9a0964587b33643cfc1efeaaec29fee5af351a58', text: () => import('./assets-chunks/magic8ball_index_html.mjs').then(m => m.default)},
    'meme-battle/index.html': {size: 6185, hash: '8bb69d473fb6a13fcbf1dfb35f4d7c004ac778242b77c454670cbb0359882f41', text: () => import('./assets-chunks/meme-battle_index_html.mjs').then(m => m.default)},
    'alibi-generator/index.html': {size: 5960, hash: '77dd625e956a2b11df1b1b7a99d5e30a64781285bd9208f7387c8240b89d294b', text: () => import('./assets-chunks/alibi-generator_index_html.mjs').then(m => m.default)},
    'what-to-do/index.html': {size: 7467, hash: '478fbdbb0bda2dd262c1cd466fbde4a453eb8ea9bd3b8e4c9d9b79232a7507dd', text: () => import('./assets-chunks/what-to-do_index_html.mjs').then(m => m.default)},
    'joke-machine/index.html': {size: 9990, hash: '2a86d8369265d494a45713b01a95934f6a3a8abaa20b5673675c7f974626f893', text: () => import('./assets-chunks/joke-machine_index_html.mjs').then(m => m.default)},
    'index.html': {size: 11430, hash: 'b4cba6966894c64f1bb743760b0ae0e5125f66efad7c05406120c087eb1a502d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KRWB3VZ7.css': {size: 1311, hash: 'pPpVOAqi044', text: () => import('./assets-chunks/styles-KRWB3VZ7_css.mjs').then(m => m.default)}
  },
};
