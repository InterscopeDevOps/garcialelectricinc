/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_7b01ba6d.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_f6561e85.mjs';

const $$Astro = createAstro();
const $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reviews;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "SI0fGwlRNwh5vxnWRdkh";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const visionInfo = data.valuesContent.vision;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Reviews | ${data.name}`, "description": visionInfo, "favicon": data.logos.primary, "featuredImage": data.logos.favicon, "keywords": "reviews, testimonials, feedback, comments, ratings, stars, testimonials, customer reviews, customer feedback, customer comments, customer ratings, customer stars" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="md:w-[75%] mx-auto w-[95%] md:py-24 py-10 flex justify-center flex-col text-center"> <span class="md:text-[60px] text-[40px] font-bold text-gray-800">Reviews Not Yet Available</span> </div> ` })}`;
}, "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/reviews.astro", void 0);

const $$file = "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/reviews.astro";
const $$url = "/reviews";

export { $$Reviews as default, $$file as file, $$url as url };
