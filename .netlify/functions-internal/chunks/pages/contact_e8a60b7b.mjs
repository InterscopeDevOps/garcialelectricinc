/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_7b01ba6d.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_f6561e85.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "SI0fGwlRNwh5vxnWRdkh";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const aboutSection = data?.sectionsHomeAbout.filter((section) => section.section === "about");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Contact | ${data.name}`, "description": aboutSection[0].text, "favicon": data.logos.primary, "featuredImage": data.logos.favicon, "keywords": data.services.map((service) => service.title).join(", ") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div>contact</div> ` })}`;
}, "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/contact.astro", void 0);

const $$file = "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
