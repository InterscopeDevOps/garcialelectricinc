import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_42562543.mjs';

const _page0  = () => import('./chunks/generic_e608a8bb.mjs');
const _page1  = () => import('./chunks/index_6ee597d3.mjs');
const _page2  = () => import('./chunks/index_fbca6f00.mjs');
const _page3  = () => import('./chunks/_slug__77442a56.mjs');
const _page4  = () => import('./chunks/contact_56406315.mjs');
const _page5  = () => import('./chunks/index_f2ed230c.mjs');
const _page6  = () => import('./chunks/_slug__834060d5.mjs');
const _page7  = () => import('./chunks/reviews_1334098e.mjs');
const _page8  = () => import('./chunks/about_df0e8981.mjs');
const _page9  = () => import('./chunks/404_c4ea64c4.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/services/index.astro", _page2],["src/pages/services/[slug].astro", _page3],["src/pages/contact.astro", _page4],["src/pages/gallery/index.astro", _page5],["src/pages/gallery/[slug].astro", _page6],["src/pages/reviews.astro", _page7],["src/pages/about.astro", _page8],["src/pages/404.astro", _page9]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
