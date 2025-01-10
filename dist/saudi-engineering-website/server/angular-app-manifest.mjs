
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-app/saudi-engineering-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-app/saudi-engineering-website"
  }
],
  assets: {
    'index.csr.html': {size: 23795, hash: '443b78b43ce4fa72ec54207c5a9930c34992a3719b917eaac0063cbaee454b7c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17355, hash: 'aa5aae0aa8a7e343acaa0902f2f6798614671ce3de684376f0ebdb238402a510', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52060, hash: '3548743ea12128c9d25f3edcd14460cdc4d3684241e353f259b4acabdfad082c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LYTUKCKW.css': {size: 6993, hash: 'SZVw+gacSeg', text: () => import('./assets-chunks/styles-LYTUKCKW_css.mjs').then(m => m.default)}
  },
};
