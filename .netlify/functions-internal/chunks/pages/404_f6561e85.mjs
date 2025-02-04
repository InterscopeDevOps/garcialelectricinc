/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderTransition, i as renderComponent, j as renderHead, k as renderSlot, F as Fragment } from '../astro_7b01ba6d.mjs';
import 'html-escaper';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

const RedesIcons = ({ redesSociales }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-5", children: redesSociales && redesSociales.map((redSocial) => /* @__PURE__ */ jsx(
    "a",
    {
      href: redSocial.link,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-white text-xl transition-all duration-300 hover:-translate-y-1.5 hover:text-btnHover",
      "aria-label": `Visitar nuestro perfil en ${redSocial.name}`,
      children: /* @__PURE__ */ jsx("i", { className: `fab fa-${redSocial.icon}` })
    },
    redSocial._id
  )) });
};

const EliminarCaracteresEspeciales = (text) => {
  return text.toLowerCase().replace(/[\s']+/, "-").replace(/[^\w-]+/g, "").trim();
};

const FootersContent = ({ dataGlobal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleOpenModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };
  const aboutSection = dataGlobal?.sectionsHomeAbout.filter(
    (section) => section.section === "about"
  );
  const landingServices = dataGlobal.widgets.landingServices;
  const dataPhone = dataGlobal?.dataGeneral.phones;
  const dataEmail = dataGlobal?.dataGeneral.emails;
  const dataAddress = dataGlobal?.dataGeneral.location;
  const dataOpeningHours = dataGlobal?.dataGeneral.openingHours;
  return /* @__PURE__ */ jsxs("div", { className: "relative h-full overflow-hidden bg-primary", children: [
    /* @__PURE__ */ jsx("picture", { className: "absolute top-[-1px] z-10 rotate-180", style: { right: "-100px", width: "calc(100% + 100px)" }, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://firebasestorage.googleapis.com/v0/b/videostock-8dab7.appspot.com/o/stock%2Fondas%2Fbg-2.png?alt=media&token=e9103497-704f-457e-b627-6347687a4776",
        className: "w-full animate-moveWaveLeftRight",
        alt: "waves",
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsx("picture", { className: "absolute top-[-1px] z-10 rotate-180", style: { right: "-100px", width: "calc(100% + 100px)" }, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://firebasestorage.googleapis.com/v0/b/videostock-8dab7.appspot.com/o/stock%2Fondas%2Fbg.png?alt=media&token=1ddca0ae-01ae-4069-b59a-85a42f15bf34",
        className: "w-full animate-moveWaveRightLeft",
        alt: "waves shadows",
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-[85%] mx-auto h-full mt-16 md:mt-36 pt-10 pb-0 md:py-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex flex-col md:flex-row gap-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[25%]", children: [
          /* @__PURE__ */ jsx("picture", { className: "w-full h-full", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: dataGlobal.logos.primary,
              className: "w-11/12 md:w-4/5 mx-auto ",
              alt: "logo",
              loading: "lazy",
              width: 200,
              height: 200
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-center md:text-start pb-3 text-gray-300", children: (() => {
            const text = aboutSection[0].text;
            const firstPointIndex = text.indexOf(".");
            if (firstPointIndex === -1) {
              return text;
            }
            const secondPointIndex = text.indexOf(".", firstPointIndex + 1);
            if (secondPointIndex === -1) {
              return text;
            }
            return text.slice(0, secondPointIndex + 1);
          })() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[27%] pt-3 md:pt-14 pl-0 md:pl-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-gray-300 text-center md:text-left text-3xl font-bold mt-4 md:mt-0 capitalize", children: "Get In Touch" }),
          /* @__PURE__ */ jsx("div", { className: "block bg-btnHover w-1/5 h-0.5 mt-5 mb-8 mx-auto md:mx-0" }),
          /* @__PURE__ */ jsxs("ul", { children: [
            dataAddress && dataAddress.length > 0 && /* @__PURE__ */ jsxs("li", { className: "mb-5 text-gray-300 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-map-location-dot text-lg" }),
              /* @__PURE__ */ jsx("p", { className: "capitalize ", children: dataAddress.slice(0, 4).map((address, index) => /* @__PURE__ */ jsxs("span", { children: [
                index > 0 && /* @__PURE__ */ jsx("span", { className: "text-gray-400 mx-1", children: "|" }),
                address.city
              ] }, index)) })
            ] }),
            dataPhone && dataPhone.length > 0 && dataPhone.slice(0, 2).map((phone, index) => /* @__PURE__ */ jsx("li", { className: "mb-5 text-gray-300 font-medium hover:text-btnHover transition-all duration-300 ease-in-out", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: `tel:+1${phone.number}`,
                className: "flex items-center gap-2",
                "aria-label": "phone number",
                children: [
                  /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone text-lg" }),
                  /* @__PURE__ */ jsx("p", { children: phone.number }),
                  phone.title && /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-400  mr-1", children: "|" }),
                    phone.title
                  ] })
                ]
              }
            ) }, index)),
            dataEmail && dataEmail.length > 0 && dataEmail.slice(0, 2).map((email, index) => /* @__PURE__ */ jsx("li", { className: "mb-5 text-gray-300 font-medium hover:text-btnHover transition-all duration-300 ease-in-out", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: `mailto:${email.email}`,
                className: "flex items-center gap-2",
                "aria-label": "email",
                children: [
                  /* @__PURE__ */ jsx("i", { className: "fa-solid fa-envelope text-lg" }),
                  /* @__PURE__ */ jsx("p", { children: email.email })
                ]
              }
            ) }, index)),
            dataOpeningHours && dataOpeningHours.length > 0 && /* @__PURE__ */ jsxs("li", { className: "mb-5 text-gray-300 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-clock text-lg" }),
              /* @__PURE__ */ jsx("p", { children: dataOpeningHours.map((hour, index) => /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
                hour.days,
                /* @__PURE__ */ jsx("span", { children: hour.hours })
              ] }, index)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[25%] pt-5 md:pt-14", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-gray-300 text-center md:text-left text-3xl font-bold mt-4 md:mt-0 capitalize", children: "Our Services" }),
          /* @__PURE__ */ jsx("div", { className: "block bg-btnHover w-1/5 h-0.5 mt-5 mb-8 mx-auto md:mx-0" }),
          /* @__PURE__ */ jsx("ul", { children: dataGlobal.services.slice(0, 6).map((service, index) => /* @__PURE__ */ jsx("li", { className: "mb-5", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: landingServices ? `/services/${EliminarCaracteresEspeciales(service.title)}` : "/services",
              className: "text-gray-300 capitalize font-medium hover:text-btnHover",
              "aria-label": "service link",
              children: [
                /* @__PURE__ */ jsx("i", { className: "fa-solid fa-circle-chevron-right pr-2" }),
                service.title
              ]
            }
          ) }, index)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[23%] pt-5 md:pt-14", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-gray-300 text-center md:text-left text-3xl font-bold mt-4 md:mt-0 capitalize", children: "Gallery" }),
          /* @__PURE__ */ jsx("div", { className: "block bg-btnHover w-1/5 h-0.5 mt-5 mb-8 mx-auto md:mx-0" }),
          /* @__PURE__ */ jsx("div", { className: "w-full grid grid-cols-3 gap-3", children: dataGlobal.gallery.slice(0, 6).map((img, index) => /* @__PURE__ */ jsxs("div", { className: "w-full h-[100px] relative group cursor-pointer", onClick: () => handleOpenModal(img), children: [
            /* @__PURE__ */ jsx("picture", { className: "w-full h-full", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: img,
                alt: `gallery-${index}`,
                className: "w-full h-full object-cover rounded-xl shadow aspect-auto",
                loading: "lazy",
                width: 200,
                height: 200
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex justify-center rounded-xl  items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx("span", { className: "text-white text-3xl font-bold", children: "+" }) })
          ] }, index)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-500/60 mt-10 py-5 flex flex-col md:flex-row justify-between items-center", children: [
        /* @__PURE__ */ jsxs("ul", { className: "flex gap-3 md:hidden pb-5", children: [
          /* @__PURE__ */ jsx("li", { className: "text-gray-300 font-semibold text-center md:text-start", children: /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-btnHover transition-all duration-300 ease-in-out", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { className: "text-gray-300 font-semibold text-center md:text-start", children: /* @__PURE__ */ jsx("a", { href: "/about", className: "hover:text-btnHover transition-all duration-300 ease-in-out", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { className: "text-gray-300 font-semibold text-center md:text-start", children: /* @__PURE__ */ jsx("a", { href: "/contact", className: "hover:text-btnHover transition-all duration-300 ease-in-out", children: "Contact" }) })
        ] }),
        dataGlobal?.redesSociales.length > 0 && /* @__PURE__ */ jsx(RedesIcons, { redesSociales: dataGlobal?.redesSociales }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 font-semibold text-center md:text-start py-5 md:py-0", children: /* @__PURE__ */ jsxs("span", { children: [
          "Copy© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          dataGlobal?.name,
          ". All Rights Reserved."
        ] }) }),
        /* @__PURE__ */ jsxs("ul", { className: "md:flex gap-3 hidden", children: [
          /* @__PURE__ */ jsx("li", { className: "text-gray-300 font-semibold text-center md:text-start", children: /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-btnHover transition-all duration-300 ease-in-out", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { className: "text-gray-300 font-semibold text-center md:text-start", children: /* @__PURE__ */ jsx("a", { href: "/about", className: "hover:text-btnHover transition-all duration-300 ease-in-out", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { className: "text-gray-300 font-semibold text-center md:text-start", children: /* @__PURE__ */ jsx("a", { href: "/contact", className: "hover:text-btnHover transition-all duration-300 ease-in-out", children: "Contact" }) })
        ] })
      ] })
    ] }),
    isModalOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg relative", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: selectedImage,
          alt: "Selected",
          className: "w-auto max-h-[80vh]",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("button", { onClick: () => setIsModalOpen(false), className: "absolute right-2 -top-14 md:-top-8 md:-right-8 px-4 py-2.5 font-bold bg-btnHover rounded-full text-primary text-2xl", children: "✕" })
    ] }) })
  ] });
};

const $$Astro$4 = createAstro();
const $$SiteDown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SiteDown;
  return renderTemplate`${maybeRenderHead()}<main class="bg-primary" data-astro-cid-giuaogmh> <div class="flex justify-center items-center gap-10" data-astro-cid-giuaogmh> <picture data-astro-cid-giuaogmh> <img src="/assets/images/404Img/leaf-1.png" alt="Leaf" loading="eager" data-astro-cid-giuaogmh> </picture> <div class="mt-10 -mb-10" data-astro-cid-giuaogmh> <picture data-astro-cid-giuaogmh> <img src="/assets/images/404Img/sitedown.png" alt="Leaf" loading="eager" class="opacity-40" data-astro-cid-giuaogmh> </picture></div> <picture data-astro-cid-giuaogmh> <img src="/assets/images/404Img/leaf-2.png" alt="Leaf" loading="eager" data-astro-cid-giuaogmh> </picture> </div> <div class="flex flex-col justify-between h-screen md:h-full" data-astro-cid-giuaogmh> <div class="h-full flex flex-col justify-center md:justify-end py-10" data-astro-cid-giuaogmh> <h1 class="capitalize text-tertiary mb-5 text-[30px] font-bold" data-astro-cid-giuaogmh>☠️ Site out of service ☠️</h1> <p class="w-full md:w-1/2 mx-auto px-5 md:px-0" data-astro-cid-giuaogmh>
Currently, access to the website is suspended due to outstanding payments or expiration of the purchased plan. We invite you to contact your assigned agent or our consulting team to regularize your situation and reactivate your service as soon as possible. We thank you for your preference and we are committed to help you solve this problem as quickly and efficiently as possible.
</p> </div> <picture data-astro-cid-giuaogmh> <img src="/assets/images/404Img/leaf-3.png" alt="Leaf" loading="eager" class="w-full h-[300px] md:h-full object-cover object-center" data-astro-cid-giuaogmh> </picture> </div> </main> `;
}, "C:/Users/video/Downloads/Template-SSR-Astro/src/components/SiteDown.astro", void 0);

const $$Astro$3 = createAstro();
const $$UnderConstruction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$UnderConstruction;
  return renderTemplate`${maybeRenderHead()}<main class="bg-primary" data-astro-cid-5p35iig3> <h1 class="mb-5 text-[30px] font-bold" data-astro-cid-5p35iig3>🚧 Sitio en Construcción 🚧</h1> <p data-astro-cid-5p35iig3>We are working to improve our site, come back soon!</p> </main> `;
}, "C:/Users/video/Downloads/Template-SSR-Astro/src/components/UnderConstruction.astro", void 0);

function MenuModalForm() {
  const [openModal, setOpenModal] = useState(false);
  const [animateMenu, setAnimateMenu] = useState("");
  const handleOpenMenu = () => {
    setOpenModal(true);
    setAnimateMenu("animate-slide-in-right");
  };
  const handleCloseMenu = () => {
    setAnimateMenu("animate-slide-out-right");
    setTimeout(() => {
      setOpenModal(false);
    }, 500);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "transition-all duration-300 hover:-translate-y-1",
        onClick: handleOpenMenu,
        children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Abrir menú" }),
          /* @__PURE__ */ jsx("span", { className: "text-4xl", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-bars-staggered" }) })
        ]
      }
    ),
    openModal && /* @__PURE__ */ jsx("div", { className: `fixed top-0 right-0 w-[30%] h-full bg-gray-900 bg-opacity-50 flex items-center justify-end ${animateMenu}`, children: /* @__PURE__ */ jsxs("div", { className: "bg-white w-full h-full rounded-l shadow-lg p-4 overflow-y-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800", children: "Menu" }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "text-gray-800 text-3xl hover:text-gray-700",
            onClick: handleCloseMenu,
            children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Cerrar menú" }),
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-times" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border", children: "aqui va el formulario" })
    ] }) })
  ] });
}

const ButtonContent_2 = ({ titleBtn, linkBtn, btnstyle }) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { className: btnstyle ? btnstyle : "btnStyle2", children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: `${linkBtn ? linkBtn : "/contact"}`,
      className: "capitalize",
      "aria-label": titleBtn ? titleBtn : "Free Estimate",
      children: [
        titleBtn ? titleBtn : "Free Estimate",
        /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsx("span", {})
      ]
    }
  ) }) });
};

const MenuHeader = ({ data }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [animateMenu, setAnimateMenu] = useState("");
  const [openSubMenu, setOpenSubMenu] = useState("");
  const landingServices = data.widgets.landingServices;
  const landingGallery = data.widgets.landingGallery;
  const reviewsPages = data.reviews.stateReviews;
  const videoPages = data.widgets.landingVideos;
  const handleOpenMenu = () => {
    setOpenMenu(true);
    setAnimateMenu("animate-slide-in-left");
  };
  const handleCloseMenu = () => {
    setAnimateMenu("animate-slide-out-right");
    setTimeout(() => {
      setOpenMenu(false);
    }, 500);
  };
  const slugify = (text) => {
    return text.toLowerCase().replace(/[\s']+/, "-").replace(/[^\w-]+/g, "").trim();
  };
  const dataMenu = [
    {
      label: "home",
      url: "/"
    },
    {
      label: "about",
      url: "/about"
    },
    {
      label: "services",
      url: "/services",
      subItem: landingServices,
      ...landingServices ? {
        subServices: data.services.map((service) => ({
          label: service.title,
          url: `/services/${slugify(service.title)}`
        }))
      } : {}
    },
    {
      label: "gallery",
      url: "/gallery",
      subItem: landingGallery,
      ...landingGallery ? {
        subServices: data.landingsGallery.map((gallery) => ({
          label: gallery.nameLanding,
          url: `/gallery/${slugify(gallery.nameLanding)}`
        }))
      } : {}
    },
    {
      label: "contact",
      url: "/contact"
    }
  ];
  const videoItems = {
    label: "videos",
    url: "/videos"
  };
  if (videoPages) {
    const num = dataMenu.length - 1;
    dataMenu.splice(num, 0, videoItems);
  }
  const reviewsItems = {
    label: "reviews",
    url: "/reviews"
  };
  if (reviewsPages && data.reviews.viewHome === false) {
    const num = dataMenu.length - 1;
    dataMenu.splice(num, 0, reviewsItems);
  }
  return /* @__PURE__ */ jsxs("nav", { children: [
    /* @__PURE__ */ jsx("ul", { className: "hidden lg:flex space-x-4", children: dataMenu.map((menuItem, index) => /* @__PURE__ */ jsxs("li", { className: "group relative", children: [
      menuItem.subItem ? /* @__PURE__ */ jsxs("span", { className: "transition-all duration-300 hover:text-secondary capitalize font-semibold cursor-pointer group flex items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "mr-2", children: menuItem.label }),
        /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevron-down text-sm" })
      ] }) : /* @__PURE__ */ jsx(
        "a",
        {
          href: menuItem.url,
          className: "transition-all duration-300 hover:text-secondary capitalize font-semibold",
          children: menuItem.label
        }
      ),
      menuItem.subServices && /* @__PURE__ */ jsxs("div", { className: "absolute top-5 hidden group-hover:block hover:block", children: [
        /* @__PURE__ */ jsx("div", { className: "py-3", children: /* @__PURE__ */ jsx("div", { className: "w-4 h-4 left-3 absolute mt-1 bg-white rotate-45  border-gray-300 border-t border-l " }) }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 bg-white border py-3  border-gray-300 rounded shadow-lg min-w-[200px] max-w-[250px]  ", children: menuItem.subServices.map((subService, index2) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: subService.url,
            className: "block px-4 py-2 text-gray-700 hover:bg-green-200 capitalize",
            children: subService.label
          }
        ) }, index2)) })
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "transition-all duration-300 hover:-translate-y-1 block lg:hidden",
        onClick: handleOpenMenu,
        children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Abrir menú" }),
          /* @__PURE__ */ jsx("span", { className: "text-3xl", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-bars" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `${openMenu ? "block" : "hidden"} ${animateMenu} fixed top-0 left-0 w-full h-full min-h-screen z-50 overflow-y-auto py-10`,
        style: { backgroundColor: data.colors.tertiaryColor },
        children: [
          /* @__PURE__ */ jsx("picture", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: data?.logos.primary,
              alt: "Logo",
              className: "w-1/2"
            }
          ) }),
          /* @__PURE__ */ jsx("ul", { className: "w-full flex flex-col items-center justify-center space-y-4 p-10", children: dataMenu.map((menuItem, index) => /* @__PURE__ */ jsxs("li", { className: "w-full", children: [
            menuItem.subItem ? /* @__PURE__ */ jsxs(
              "span",
              {
                className: "transition-all duration-300 hover:text-secondary capitalize font-semibold cursor-pointer  flex items-center justify-between",
                onClick: () => openSubMenu !== menuItem.label ? setOpenSubMenu(menuItem.label) : setOpenSubMenu(""),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "mr-2", children: menuItem.label }),
                  openSubMenu === menuItem.label ? /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevron-up" }) : /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevron-down" })
                ]
              }
            ) : /* @__PURE__ */ jsx(
              "a",
              {
                href: menuItem.url,
                className: "transition-all duration-300 hover:text-secondary capitalize font-semibold",
                children: menuItem.label
              }
            ),
            menuItem.subServices && /* @__PURE__ */ jsx("ul", { className: `text-start space-y-2 bg-white border py-3  border-gray-300 rounded shadow-lg w-full ${openSubMenu === menuItem.label ? "block" : "hidden"}`, children: menuItem.subServices.map((subService, index2) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: subService.url,
                className: "block px-4 py-2 text-gray-700 hover:bg-green-200 capitalize",
                children: subService.label
              }
            ) }, index2)) })
          ] }, index)) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "transition-all duration-300 hover:-translate-y-1 block lg:hidden absolute right-5 top-5",
              onClick: handleCloseMenu,
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Cerrar menú" }),
                /* @__PURE__ */ jsx("span", { className: "text-3xl", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-times" }) })
              ]
            }
          )
        ]
      }
    )
  ] });
};

const $$Astro$2 = createAstro();
const $$HeaderContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderContent;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "SI0fGwlRNwh5vxnWRdkh";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  return renderTemplate`${maybeRenderHead()}<header class="bg-[#FCFAF7] relative z-50"${addAttribute(renderTransition($$result, "rfdwdkfc", "none", ""), "data-astro-transition-scope")}> <div class="w-[97%] mx-auto hidden md:flex justify-between items-center px-14 py-5 rounded-br-[30px] rounded-bl-[30px] bg-primary"> <p class="text-white font-semibold">
Welcome To ${data?.name} </p> ${renderComponent($$result, "RedesIcons", RedesIcons, { "redesSociales": data?.redesSociales })} </div> <div class="border-b border-[#E4E9E3] flex justify-between"> <div class="w-full lg:w-[90%] mx-auto lg:ml-auto"> <div class="w-full grid lg:grid-cols-[200px,auto] grid-cols-[75%,25%] gap-0 lg:gap-4"> <picture class="w-full h-full aspect-auto"> <img${addAttribute(data?.logos.primary, "src")}${addAttribute(`logo ${data?.name}`, "alt")} loading="eager" class="w-full h-full " width="300" height="200"> </picture> <div class="flex items-center justify-center lg:justify-between border-x border-[#E4E9E3] px-3 lg:px-10"> ${renderComponent($$result, "MenuHeader", MenuHeader, { "client:load": true, "data": data, "client:component-hydration": "load", "client:component-path": "C:/Users/video/Downloads/Template-SSR-Astro/src/components/header/MenuHeader", "client:component-export": "MenuHeader" })} <div class="md:flex items-center hidden"> ${renderComponent($$result, "ButtonContent2", ButtonContent_2, { "titleBtn": "Get A Quote", "linkBtn": "/contact" })} </div> </div> </div> </div> <div class="w-[6%] hidden lg:flex items-center px-5 -ml-10"> ${renderComponent($$result, "MenuModalForm", MenuModalForm, { "client:media": "(min-width: 1024px)", "client:component-hydration": "media", "client:component-path": "C:/Users/video/Downloads/Template-SSR-Astro/src/components/header/MenuModalForm", "client:component-export": "default" })} </div> </div> </header>`;
}, "C:/Users/video/Downloads/Template-SSR-Astro/src/components/header/HeaderContent.astro", "self");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, keywords, featuredImage, favicon } = Astro2.props;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "SI0fGwlRNwh5vxnWRdkh";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  return renderTemplate(_a || (_a = __template(['<html lang="en"', '> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><meta name="generator"', "><title>", '</title><meta name="keywords"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:type" content="website"><!-- mostrar imagen en la card al enviar --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><link href="/assets/css/style.css" rel="stylesheet"><!-- Font Awesome --><link rel="preload" href="https://cdn.jsdelivr.net/gh/eliyantosarage/font-awesome-pro@main/fontawesome-pro-6.5.1-web/css/all.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">`, '<noscript><link href="https://cdn.jsdelivr.net/gh/eliyantosarage/font-awesome-pro@main/fontawesome-pro-6.5.1-web/css/all.min.css" rel="stylesheet"></noscript><!-- <ViewTransitions /> -->', "</head> <body", "> ", ' <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/CodexRob/emailcdn@main/index-06e7f5fd.min.js" defer><\/script> </body> </html>'])), addAttribute(renderTransition($$result, "smooz4hq", "slide", ""), "data-astro-transition-scope"), addAttribute(description, "content"), addAttribute(favicon, "href"), addAttribute(Astro2.generator, "content"), title, addAttribute(keywords, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(featuredImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(featuredImage, "content"), maybeRenderHead(), renderHead(), addAttribute({
    "--btn-border-color": data.colors.btnHoverColor,
    "--btn-hover-color": data.colors.btnHoverColor,
    "--primary": data.colors.primaryColor,
    "--secondary": data.colors.secondaryColor,
    "--tertiary": data.colors.tertiaryColor,
    "--fourth": data.colors.fourthColor,
    "--title": data.colors.titleColor,
    "--text": data.colors.textColor,
    "--btn-color": data.colors.btnColor
  }, "style"), data.widgets.underConstrution ? renderTemplate`${renderComponent($$result, "UnderConstruction", $$UnderConstruction, {})}` : data.widgets.siteDown ? renderTemplate`${renderComponent($$result, "SiteDown", $$SiteDown, {})}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="relative z-50"> ${renderComponent($$result2, "HeaderContent", $$HeaderContent, {})} </div> <main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "FootersContent", FootersContent, { "dataGlobal": data, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/footers/FootersContent", "client:component-export": "default" })} ` })}`);
}, "C:/Users/video/Downloads/Template-SSR-Astro/src/layouts/Layout.astro", "self");

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "SI0fGwlRNwh5vxnWRdkh";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `404 | ${data.name}`, "description": "Sorry, the page you are looking for does not exist.", "favicon": data.logos.primary, "featuredImage": data.logos.favicon, "keywords": "404, page not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="h-full flex flex-col justify-center items-center"> <h1 class="text-[200px] md:text-[250px] font-bold">404</h1> <p class="font-semibold">Sorry, the page you are looking for does not exist.</p> </section> ` })}`;
}, "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/404.astro", void 0);

const $$file = "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, ButtonContent_2 as B, EliminarCaracteresEspeciales as E, _404 as _ };
