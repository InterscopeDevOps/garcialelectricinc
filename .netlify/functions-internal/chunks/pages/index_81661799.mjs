/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_7b01ba6d.mjs';
import 'html-escaper';
import 'clsx';
import { B as ButtonContent_2, E as EliminarCaracteresEspeciales, $ as $$Layout } from './404_f6561e85.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
/* empty css                           */import { LazyLoadImage } from 'react-lazy-load-image-component';

const SlidesShow = ({ dataBlocks, dataPhone }) => {
  const [backgroundsImg, setBackgroundsImg] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % backgroundsImg.length);
  };
  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + backgroundsImg.length) % backgroundsImg.length);
  };
  useEffect(() => {
    if (dataBlocks[0]?.additionalImages.length > 0) {
      setBackgroundsImg(dataBlocks[0].additionalImages);
    }
  }, [dataBlocks]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % backgroundsImg.length);
        setIsTransitioning(false);
      }, 500);
    }, 2e4);
    return () => clearInterval(interval);
  }, [backgroundsImg.length]);
  return /* @__PURE__ */ jsxs("div", { className: "relative h-full md:h-[90vh] overflow-hidden", children: [
    backgroundsImg.length > 0 && /* @__PURE__ */ jsx(
      "div",
      {
        className: `absolute w-full h-full aspect-auto transition-opacity duration-1000 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`,
        style: {
          backgroundImage: `url(${backgroundsImg[activeIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute w-full h-full top-0 left-0 bg-black/70" }),
    /* @__PURE__ */ jsx("picture", { className: "absolute bottom-[-1px] z-10", style: { left: "-100px", width: "calc(100% + 100px)" }, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://firebasestorage.googleapis.com/v0/b/videostock-8dab7.appspot.com/o/stock%2Fondas%2Fbg-2.png?alt=media&token=e9103497-704f-457e-b627-6347687a4776",
        className: "w-full animate-moveWaveLeftRight aspect-auto",
        alt: "waves",
        loading: "lazy",
        width: 1920,
        height: 1080
      }
    ) }),
    /* @__PURE__ */ jsx("picture", { className: "absolute bottom-[-1px] z-10", style: { left: "-100px", width: "calc(100% + 100px)" }, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://firebasestorage.googleapis.com/v0/b/videostock-8dab7.appspot.com/o/stock%2Fondas%2Fbg.png?alt=media&token=1ddca0ae-01ae-4069-b59a-85a42f15bf34",
        className: "w-full animate-moveWaveRightLeft aspect-auto",
        alt: "waves shadows",
        loading: "lazy",
        width: 1920,
        height: 1080
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-11/12 mx-auto h-[85%] flex justify-between items-center gap-5 lg:gap-20 py-20 lg:py-0 ", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prevImage,
          className: "border border-white rounded-full text-lg lg:text-3xl px-2.5 py-1 lg:px-4 lg:py-3 text-white font-bold hover:bg-btnHover hover:border-btnHover hover:text-primary transition-all duration-300 ease-in-out",
          "aria-label": "Previous Slide",
          children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-left" })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-white text-4xl md:text-7xl font-bold  capitalize pb-5", children: dataBlocks[0]?.title }),
        /* @__PURE__ */ jsx("p", { className: "text-white text-lg", children: dataBlocks[0]?.text }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center items-centern gap-5 py-10", children: /* @__PURE__ */ jsx(ButtonContent_2, { btnstyle: "btnStyle3", titleBtn: dataPhone ? dataPhone[0].number : "Contact Us", linkBtn: `tel:+1${dataPhone ? dataPhone[0].number : "Contact Us"}` }) })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: nextImage,
          className: "border border-white rounded-full text-lg lg:text-3xl px-2.5 py-1 lg:px-4 lg:py-3 text-white font-bold hover:bg-btnHover hover:border-btnHover hover:text-primary transition-all duration-300 ease-in-out",
          "aria-label": "Next Slide",
          children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right" })
        }
      )
    ] })
  ] });
};

const SliderServices = ({ dbServices, landingServices }) => {
  return /* @__PURE__ */ jsx(
    Swiper,
    {
      modules: [Navigation, Autoplay],
      navigation: true,
      spaceBetween: 20,
      autoplay: {
        delay: 8e3,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      },
      children: dbServices.map((service, index) => /* @__PURE__ */ jsxs(SwiperSlide, { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative ", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full mx-auto", children: /* @__PURE__ */ jsx(
            LazyLoadImage,
            {
              src: service.description[0].image,
              alt: service.title,
              height: 245,
              effect: "blur",
              className: "w-screen h-[250px] rounded-tl-xl rounded-tr-xl object-cover aspect-auto",
              placeholderSrc: "/assets/images/stockWeb/Placeholder.webp"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: `${landingServices ? `/services/${EliminarCaracteresEspeciales(service.title)}` : "/services"}`,
              "aria-label": "Learn More",
              className: "text-2xl bg-white text-secondary rounded-full absolute -bottom-5 left-8 px-5 py-3.5 hover:bg-secondary hover:shadow-md hover:text-white transition-all duration-300 ease-in-out",
              children: /* @__PURE__ */ jsx("i", { className: "fa-regular fa-arrow-up-right" })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "py-8 px-5 bg-[#FCFAF7] rounded-bl-xl rounded-br-xl ", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-secondary font-bold capitalize text-lg", children: service.title }),
          /* @__PURE__ */ jsx("p", { children: service.description[0].text.slice(0, 80) + "..." })
        ] })
      ] }, index))
    }
  );
};

const ServicesHome = ({ dataGlobal }) => {
  const dbServices = dataGlobal.services;
  const landingServices = dataGlobal.widgets.landingServices;
  const dbHome = dataGlobal?.sectionsHomeAbout.filter(
    (section) => section.section === "blocks"
  );
  return /* @__PURE__ */ jsxs("div", { className: "w-4/5 mx-auto py-20 md:pb-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-10 pb-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-5 items-center", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-tree-deciduous text-4xl text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-medium text-primary capitalize", children: dataGlobal.name })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary my-5 capitalize", children: dbHome[1].title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
        /* @__PURE__ */ jsx("p", { className: "text-justify pb-3", children: (() => {
          const text = dbHome[1].text;
          const firstPointIndex = text.indexOf(".");
          if (firstPointIndex === -1) {
            return text;
          }
          const secondPointIndex = text.indexOf(".", firstPointIndex + 1);
          if (secondPointIndex === -1) {
            return text;
          }
          return text.slice(0, secondPointIndex + 1);
        })() }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/services",
            className: "flex items-center gap-1 text-secondary font-bold capitalize underline",
            "aria-label": "see all the services we provide",
            children: [
              /* @__PURE__ */ jsx("span", { children: "see all the services we provide " }),
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevrons-right text-sm" })
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SliderServices, { dbServices, landingServices })
  ] });
};

const AboutBlocks = ({ dataGlobal }) => {
  const aboutSection = dataGlobal?.sectionsHomeAbout.filter(
    (section) => section.section === "about"
  );
  return /* @__PURE__ */ jsxs("div", { className: "w-4/5 mx-auto md:w-11/12 md:mr-auto md:ml-0 h-full flex flex-col md:flex-row justify-between", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "aspect-auto h-[300px] md:h-[110vh] w-full md:w-1/2 rounded-3xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-3xl md:rounded-br-3xl shadow-2xl ",
        style: {
          backgroundImage: `url(${aboutSection[0].additionalImages[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 px-5 py-10 md:pt-0 md:pl-20 flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "pb-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center md:items-end gap-5 md:gap-1", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-light fa-seedling text-5xl text-secondary" }),
          /* @__PURE__ */ jsxs("p", { className: "text-2xl font-medium text-secondary capitalize", children: [
            "About ",
            dataGlobal.name
          ] })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary mt-5 text-center md:text-start", children: aboutSection[0].title }),
        /* @__PURE__ */ jsx("p", { className: "text-center md:text-justify mt-5", children: aboutSection[0].text })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-[60%] pb-8 md:pb-0", children: [
          /* @__PURE__ */ jsx("ul", { className: "pb-5", children: aboutSection[0].list.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-primary font-medium py-2", children: [
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-check bg-secondary rounded-full text-white p-2" }),
            /* @__PURE__ */ jsx("p", { children: item })
          ] }, index)) }),
          /* @__PURE__ */ jsx("div", { className: "text-center md:text-start", children: /* @__PURE__ */ jsx(ButtonContent_2, {}) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full lg:w-[40%] h-full flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#FCFAF7] border-t-[3px] border-primary rounded-b-full h-full py-5 px-12 w-4/5  ", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-center text-secondary font-bold py-2 text-4xl", children: [
            dataGlobal.yearsExperience,
            "+"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-primary font-bold ", children: "Years of Experience" }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center py-5", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/about",
              className: "bg-primary text-white font-bold p-4 px-5 rounded-full hover:bg-btnHover hover:text-primary transition-all duration-300 ease-in-out",
              "aria-label": "Read more about us",
              children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right" })
            }
          ) })
        ] }) })
      ] })
    ] })
  ] });
};

const ValuesContent = ({ dataGlobal }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-primary -mt-0 lg:-mt-20", children: [
    /* @__PURE__ */ jsxs("div", { className: " w-11/12 mx-auto flex justify-between", children: [
      /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/assets/images/404Img/leaf-1.png",
          alt: "Leaf",
          loading: "lazy",
          className: "aspect-auto w-full h-[300px] object-contain object-center",
          width: 200,
          height: 300
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center md:items-end ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-5", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-2xl md:text-5xl font-medium text-tertiary capitalize flex gap-2", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-light fa-seedling" }),
          /* @__PURE__ */ jsx("span", { children: "Our Values" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-3xl font-bold text-white capitalize text-center", children: dataGlobal.slogan[0] })
      ] }) }),
      /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/assets/images/404Img/leaf-2.png",
          alt: "Leaf",
          loading: "lazy",
          className: "aspect-auto w-full h-[300px] object-contain object-center",
          width: 200,
          height: 300
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-[70%] mx-auto  pb-5 md:pb-14 grid grid-cols-1 lg:grid-cols-3 gap-5 relative mt-0 md:mt-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-5 shadow-sm shadow-white text-center md:text-start", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-light fa-wreath-laurel text-5xl text-btnHover" }),
        /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-secondary capitalize px-2 pb-3", children: "mission" }),
        /* @__PURE__ */ jsx("p", { children: dataGlobal.valuesContent.mission })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-5 shadow-sm shadow-white text-center md:text-start", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-light fa-hand-holding-seedling text-5xl text-btnHover" }),
        /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-secondary capitalize px-2 pb-3", children: "Vision" }),
        /* @__PURE__ */ jsx("p", { children: dataGlobal.valuesContent.vision })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-5 shadow-sm shadow-white text-center md:text-start", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-light fa-handshake text-5xl text-btnHover" }),
        /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-secondary capitalize px-2 pb-3", children: "Why Choose Us" }),
        /* @__PURE__ */ jsx("p", { children: dataGlobal.valuesContent.whychooseUs })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "-mt-40", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/assets/images/404Img/leaf-3.png",
        alt: "Leaf",
        loading: "lazy",
        className: "w-full h-[200px] md:h-full object-cover object-center aspect-auto",
        width: 500,
        height: 500
      }
    ) }) })
  ] });
};

const HomeBlocks = ({ homeSection, dataPhone }) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full md:w-4/5 mx-auto flex flex-col-reverse md:flex-row gap-5 py-10 md:py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 flex flex-col justify-center px-10 md:pr-10 md:pl-0", children: [
      /* @__PURE__ */ jsx("i", { className: "fa-solid fa-house-person-leave text-4xl text-primary text-center md:text-start" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary capitalize pb-5 text-center md:text-start", children: homeSection[0].title }),
      /* @__PURE__ */ jsx("p", { className: "text-center md:text-justify pb-3", children: homeSection[0].text }),
      /* @__PURE__ */ jsx("div", { className: "py-5 text-center md:text-start", children: /* @__PURE__ */ jsx(ButtonContent_2, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/2 pb-10 md:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex items-center gap-5 relative", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-[55%] shadow-md h-[450px] md:h-[70vh] aspect-auto",
          style: {
            backgroundImage: `url(${homeSection[0].additionalImages[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-[45%] h-[350px] md:h-[50vh] shadow-md aspect-auto",
          style: {
            backgroundImage: `url(${homeSection[0].additionalImages[1]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute flex justify-center items-center w-full", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-full p-4 shadow", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: `tel:+1${dataPhone[0].number}`,
          className: "bg-white rounded-full w-36 h-36 md:w-52 md:h-52 border-2 border-spacing-5 border-dashed border-secondary flex flex-col justify-center items-center gap-2 md:gap-5",
          children: [
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone-rotary text-secondary text-5xl" }),
            /* @__PURE__ */ jsx("p", { className: "text-secondary text-center font-bold capitalize text-lg md:text-2xl", children: "Call us now" })
          ]
        }
      ) }) })
    ] }) })
  ] });
};

const SocialMediaHome = ({ dataGlobal }) => {
  return /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "border-t w-3/4 mx-auto flex flex-col md:flex-row justify-between items-center pb-10 md:pb-0", children: [
      /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://firebasestorage.googleapis.com/v0/b/clientesimages.appspot.com/o/directorios%2Fgmb-reviews.png?alt=media&token=791a077e-6f07-4a18-9226-32c0bf9cb2d1",
          alt: "Google my Business",
          loading: "lazy",
          className: "w-52 h-52 object-contain aspect-auto",
          width: 200,
          height: 200
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "pb-5", children: /* @__PURE__ */ jsx("h2", { className: "text-5xl font-bold capitalize", children: "Find Us on" }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ButtonContent_2, { titleBtn: "Write A Review", linkBtn: "/" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "-mt-14 w-11/12 md:w-3/4 mx-auto flex justify-center items-center", children: /* @__PURE__ */ jsxs(
      Swiper,
      {
        modules: [
          // Navigation, 
          Autoplay
        ],
        spaceBetween: 20,
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false
        },
        breakpoints: {
          320: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 6
          }
        },
        children: [
          dataGlobal.directorios.length > 0 ? dataGlobal.directorios.map((directorio, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: `flex items-center gap-10 `, children: /* @__PURE__ */ jsx("a", { href: `${directorio.link}`, target: "_blank", className: "flex items-center h-full p-3", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: directorio.logo,
              alt: directorio.name,
              className: "w-full h-[150px] rounded-tl-xl rounded-tr-xl object-contain aspect-auto",
              loading: "lazy"
            }
          ) }) }, index)) : null,
          dataGlobal.redesSociales.length > 0 ? dataGlobal.redesSociales.map((redesSociales, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: `flex items-center gap-10`, children: /* @__PURE__ */ jsx("a", { href: `${redesSociales.link}`, target: "_blank", className: "flex items-center h-full p-3", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: redesSociales.logo,
              alt: redesSociales.name,
              className: "w-full h-[150px] rounded-tl-xl rounded-tr-xl object-contain aspect-auto",
              loading: "lazy"
            }
          ) }) }, index)) : null
        ]
      }
    ) })
  ] });
};

const CallToAction = ({ homeSection, nameCompany }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "aspect-auto w-full h-full py-24 md:py-32 relative flex justify-center items-center before:absolute before:w-full before:h-full before:top-0 before:bg-green-900/90",
      style: {
        backgroundImage: `url(${homeSection?.[1]?.additionalImages?.[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "w-11/12 md:w-[70%] mx-auto relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center md:items-end gap-5 md:gap-1", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-light fa-seedling text-5xl text-white" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-medium text-gray-200 capitalize", children: nameCompany })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl capitalize font-bold text-white mt-5 text-center", children: homeSection?.[1]?.title }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white w-full h-full rounded-xl flex flex-col-reverse md:flex-row gap-5 md:gap-10 mt-10 px-5 py-10 md:px-10 md:py-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[60%] h-full", children: [
            /* @__PURE__ */ jsx("p", { className: "text-center md:text-justify px-5 pt-0 md:pt-5 pb-10", children: homeSection?.[1]?.text }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center md:justify-start", children: /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-2 md:grid-cols-3 gap-5", children: [
              homeSection[1].additionalImages.slice(2).map((item, index) => /* @__PURE__ */ jsx("div", { className: index === 0 ? "block" : "hidden sm:block", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: item,
                  alt: "image",
                  className: "w-full h-48 object-cover shadow-md rounded-b-full aspect-auto",
                  loading: "lazy"
                }
              ) }, index)),
              /* @__PURE__ */ jsx("div", { className: "w-full h-48 bg-[#FCFAF7] flex items-center justify-center rounded-b-full border-secondary border-t-[5px]", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/contact",
                  className: "bg-primary text-white font-bold p-4 px-5 rounded-full hover:bg-btnHover hover:text-primary transition-all duration-300 ease-in-out",
                  children: "Contact Us"
                }
              ) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-full md:w-[40%] h-[250px] md:h-auto rounded-xl shadow-md aspect-auto",
              style: {
                backgroundImage: `url(${homeSection?.[1]?.additionalImages?.[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }
            }
          )
        ] })
      ] })
    }
  );
};

const ContactForm = ({ dataGlobal, formStyles }) => {
  return /* @__PURE__ */ jsx("div", { className: formStyles, children: /* @__PURE__ */ jsx(
    "form-contact",
    {
      to: dataGlobal.dataGeneral.emails.map((email) => email.email).join(","),
      services: (
        // anidarlos con un join
        dataGlobal.services.map((service) => service.title).join(",")
      ),
      server: "https://azteca-form-6c17fad78fc4.herokuapp.com/email",
      img: dataGlobal.logos.primary,
      emailcolor: "1",
      isenglish: "true"
    }
  ) });
};

const ContentContact = ({ dataGlobal }) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[70%] mx-auto h-full flex flex-col md:flex-row gap-5 py-24 md:py-32 relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[70%]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center md:justify-start gap-3 text-secondary pb-3 w-4/5 mx-auto md:w-full", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-solid fa-envelopes text-3xl" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold capitalize", children: "Contact Us" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-5xl font-bold text-primary capitalize text-center md:text-start", children: "Get in touch with us" }),
      /* @__PURE__ */ jsx("div", { className: "w-full h-full pt-10 pb-0 md:py-10", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: dataGlobal.gallery[0],
          alt: "Contact us",
          className: "w-full h-[300px] md:h-full object-cover  shadow-xl border-r-0 border-b-[20px] md:border-b-0 md:border-r-[20px] border-secondary aspect-auto ",
          loading: "lazy"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-4/5 mx-auto md:w-[50%] -mt-10  md:absolute md:right-0 md:top-20 md:mt-0", children: /* @__PURE__ */ jsx(ContactForm, { dataGlobal, formStyles: "bg-white shadow-sm rounded-t-0 rounded-b-xl md:rounded-xl p-5" }) })
  ] });
};

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "SI0fGwlRNwh5vxnWRdkh";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const homeSection = data?.sectionsHomeAbout.filter(
    (section) => section.section === "home"
  );
  const dataBlocks = data?.sectionsHomeAbout.filter(
    (section) => section.section === "blocks"
  );
  const dataPhone = data.dataGeneral.phones;
  const nameCompany = data.name;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Home | ${data.name}`, "description": homeSection[0].text, "favicon": data.logos.primary, "featuredImage": data.logos.favicon, "keywords": data.services.map((service) => service.title).join(", ") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SlideShow", SlidesShow, { "dataBlocks": dataBlocks, "dataPhone": dataPhone, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/SlideShow", "client:component-export": "default" })} ${renderComponent($$result2, "ServicesHome", ServicesHome, { "dataGlobal": data, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/home/ServicesHome", "client:component-export": "default" })} ${renderComponent($$result2, "AboutBlocks", AboutBlocks, { "dataGlobal": data })} ${renderComponent($$result2, "ValuesContent", ValuesContent, { "dataGlobal": data })} ${renderComponent($$result2, "HomeBlocks", HomeBlocks, { "homeSection": homeSection, "dataPhone": dataPhone })} ${renderComponent($$result2, "SocialMediaHome", SocialMediaHome, { "dataGlobal": data, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/home/SocialMediaHome", "client:component-export": "default" })} ${renderComponent($$result2, "CallToAction", CallToAction, { "homeSection": homeSection, "nameCompany": nameCompany })} ${renderComponent($$result2, "ContentContact", ContentContact, { "dataGlobal": data })} ` })}`;
}, "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/index.astro", void 0);

const $$file$2 = "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "SI0fGwlRNwh5vxnWRdkh";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const serrviceDescription = data?.services.filter(
    (service) => service.description
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Services | ${data?.name}`, "description": serrviceDescription[0].description[0].text, "favicon": data.logos.primary, "featuredImage": data.logos.favicon, "keywords": data.services.map((service) => service.title).join(", ") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div>Services</div> ` })}`;
}, "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/services/index.astro", void 0);

const $$file$1 = "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/services/index.astro";
const $$url$1 = "/services";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "SI0fGwlRNwh5vxnWRdkh";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const aboutSection = data?.sectionsHomeAbout.filter(
    (section) => section.section === "about"
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Gallery | ${data.name}`, "description": aboutSection[0].text, "favicon": data.logos.primary, "featuredImage": data.logos.favicon, "keywords": data.services.map((service) => service.title).join(", ") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div>gallery</div> ` })}`;
}, "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/gallery/index.astro", void 0);

const $$file = "C:/Users/video/Downloads/Template-SSR-Astro/src/pages/gallery/index.astro";
const $$url = "/gallery";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
