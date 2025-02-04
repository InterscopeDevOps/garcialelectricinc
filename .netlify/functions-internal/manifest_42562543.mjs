import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_7b01ba6d.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.78640464.css"},{"type":"external","src":"/_astro/index.698c3e81.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.78640464.css"}],"routeData":{"route":"/services","type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.78640464.css"}],"routeData":{"route":"/services/[slug]","type":"page","pattern":"^\\/services\\/([^/]+?)\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/services/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.78640464.css"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.78640464.css"}],"routeData":{"route":"/gallery","type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery/index.astro","pathname":"/gallery","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.78640464.css"}],"routeData":{"route":"/gallery/[slug]","type":"page","pattern":"^\\/gallery\\/([^/]+?)\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/gallery/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.78640464.css"}],"routeData":{"route":"/reviews","type":"page","pattern":"^\\/reviews\\/?$","segments":[[{"content":"reviews","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/reviews.astro","pathname":"/reviews","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.78640464.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.78640464.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/video/Downloads/Template-SSR-Astro/src/components/header/HeaderContent.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/video/Downloads/Template-SSR-Astro/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/video/Downloads/Template-SSR-Astro/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/video/Downloads/Template-SSR-Astro/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/video/Downloads/Template-SSR-Astro/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/video/Downloads/Template-SSR-Astro/src/pages/gallery/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/gallery/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/video/Downloads/Template-SSR-Astro/src/pages/gallery/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/gallery/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/video/Downloads/Template-SSR-Astro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/video/Downloads/Template-SSR-Astro/src/pages/reviews.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/reviews@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/video/Downloads/Template-SSR-Astro/src/pages/services/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/video/Downloads/Template-SSR-Astro/src/pages/services/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/about.astro":"chunks/pages/about_168f5aa1.mjs","/src/pages/contact.astro":"chunks/pages/contact_e8a60b7b.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_95d81437.mjs","/src/pages/reviews.astro":"chunks/pages/reviews_48b81bce.mjs","\u0000@astrojs-manifest":"manifest_42562543.mjs","C:/Users/video/Downloads/Template-SSR-Astro/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_e96f1d58.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_e608a8bb.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_6ee597d3.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"chunks/index_fbca6f00.mjs","\u0000@astro-page:src/pages/services/[slug]@_@astro":"chunks/_slug__77442a56.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_56406315.mjs","\u0000@astro-page:src/pages/gallery/index@_@astro":"chunks/index_f2ed230c.mjs","\u0000@astro-page:src/pages/gallery/[slug]@_@astro":"chunks/_slug__834060d5.mjs","\u0000@astro-page:src/pages/reviews@_@astro":"chunks/reviews_1334098e.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_df0e8981.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_c4ea64c4.mjs","@/components/TransparentHeader/SlideShow":"_astro/SlideShow.755fc4c0.js","@/components/footers/FootersContent":"_astro/FootersContent.d8b6fa4b.js","C:/Users/video/Downloads/Template-SSR-Astro/src/components/header/MenuHeader":"_astro/MenuHeader.765b20bd.js","@astrojs/react/client.js":"_astro/client.2dae202b.js","@/components/Blocks/home/SocialMediaHome":"_astro/SocialMediaHome.cffc24fb.js","C:/Users/video/Downloads/Template-SSR-Astro/src/components/header/MenuModalForm":"_astro/MenuModalForm.4ce74295.js","@/components/Blocks/home/ServicesHome":"_astro/ServicesHome.ade3d5f0.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.78640464.css","/_astro/index.698c3e81.css","/_astro/autoplay.9ac11722.js","/_astro/ButtonContent_2.ff1d876e.js","/_astro/client.2dae202b.js","/_astro/EliminarCaracteresEspeciales.2ce1c338.js","/_astro/FootersContent.d8b6fa4b.js","/_astro/index.03be2d59.js","/_astro/index.840e397f.js","/_astro/jsx-runtime.b9e88e07.js","/_astro/MenuHeader.765b20bd.js","/_astro/MenuModalForm.4ce74295.js","/_astro/ServicesHome.ade3d5f0.js","/_astro/SlideShow.755fc4c0.js","/_astro/SocialMediaHome.cffc24fb.js","/assets/css/style.css","/assets/css/button/styleButton.css","/assets/images/404Img/leaf-1.png","/assets/images/404Img/leaf-2.png","/assets/images/404Img/leaf-3.png","/assets/images/404Img/sitedown.png","/assets/images/stockWeb/Placeholder.webp"]});

export { manifest };
