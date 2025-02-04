/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_7b01ba6d.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_f6561e85.mjs';

const $$Astro$1 = createAstro();
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$slug$1;
  const { slug } = Astro2.params;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "SI0fGwlRNwh5vxnWRdkh";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const slugify = (text) => {
    return text.toLowerCase().replace(/[\s']+/, "-").replace(/[^\w-]+/g, "").trim();
  };
  const serviceInfo = data?.services.find((service) => {
    const serviceSlug = slugify(service.title);
    const targetSlug = slugify(slug || "");
    return serviceSlug === targetSlug;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${serviceInfo?.title} | ${data?.name}`, "description": `${serviceInfo?.description[0].text}]}`, "keywords": `${serviceInfo?.title}, ${data?.name}`, "favicon": data.logos.primary, "featuredImage": serviceInfo?.description[0].image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <p>Services: ${serviceInfo?.title}</p> </main> ` })}`;
}, "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/services/[slug].astro", void 0);

const $$file$1 = "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/services/[slug].astro";
const $$url$1 = "/services/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "SI0fGwlRNwh5vxnWRdkh";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const whyChooseUsInfo = data.valuesContent.whychooseUs;
  const slugify = (text) => {
    return text.toLowerCase().replace(/[\s']+/, "-").replace(/[^\w-]+/g, "").trim();
  };
  const landingGalleryInfo = data?.landingsGallery.find((gallery) => {
    const gallerySlug = slugify(gallery.nameLanding);
    const targetSlug = slugify(slug || "");
    return gallerySlug === targetSlug;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${landingGalleryInfo?.nameLanding} | ${data?.name}`, "description": `${whyChooseUsInfo}`, "keywords": `${landingGalleryInfo?.nameLanding}, ${data?.name}`, "featuredImage": `${landingGalleryInfo?.imgLanding[0]}`, "favicon": data.logos.primary }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <p>gallery: ${landingGalleryInfo?.nameLanding}</p> </main> ` })}`;
}, "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/gallery/[slug].astro", void 0);

const $$file = "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/gallery/[slug].astro";
const $$url = "/gallery/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_$1 as _, _slug_ as a };
