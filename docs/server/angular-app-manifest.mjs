
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Saudi-Engineering/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Saudi-Engineering"
  }
],
  assets: {
    'index.csr.html': {size: 23775, hash: '92121379edd0ed91667a3f4ed5fca4d2cf9fd5c3b40e9e4ab8d58f026a250ede', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17335, hash: '8f9ef722f8fbea276c2b9ab46dc4c5c436dd191fda0d100b4a12e2a7cffda18a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52040, hash: '3274f3bd433f2303f47a6f8ef27e4a182d63bd858db4a741f564e8ee7da041d0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LYTUKCKW.css': {size: 6993, hash: 'SZVw+gacSeg', text: () => import('./assets-chunks/styles-LYTUKCKW_css.mjs').then(m => m.default)}
  },
};
