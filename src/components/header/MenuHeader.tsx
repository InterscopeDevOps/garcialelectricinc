


import React, { useState } from 'react';
import type { MenuItem } from '../../interfaces/menu';
import type { ApiData } from '../../interfaces/dbData';
import EliminarCaracteresEspeciales from '@/hook/EliminarCaracteresEspeciales';

interface MenuHeaderProps {
  data: ApiData;
  textColors?: string;
}


export const MenuHeader: React.FC<MenuHeaderProps> = ({ data, textColors }) => {

  const [openMenu, setOpenMenu] = useState(false)
  const [animateMenu, setAnimateMenu] = useState('')
  const [openSubMenu, setOpenSubMenu] = useState('')

  //landing page de services
  const landingServices = data.widgets.landingServices;
  const landingGallery = data.widgets.landingGallery;
  const reviewsPages = data.reviews.stateReviews;
  const videoPages = data.widgets.landingVideos;
  const blogPages = data.widgets.blog;
  const areasWeServePages = data.widgets.areasweserve;


  const handleOpenMenu = () => {
    setOpenMenu(true);
    setAnimateMenu('animate-slide-in-left');
  };

  const handleCloseMenu = () => {
    setAnimateMenu('animate-slide-out-right');
    // Agrega un retardo antes de cambiar el estado `openMenu` para permitir que la animación se reproduzca
    setTimeout(() => {
      setOpenMenu(false);
    }, 500); // Ajusta el tiempo según la duración de tu animación
  };

  //menu
  const dataMenu: MenuItem[] = [
    {
      label: "home",
      url: "/",
    },
    {
      label: "about",
      url: "/about",
    },
    {
      label: "services",
      url: "/services",
      subItem: landingServices,
      ...(landingServices
        ? {
          subServices: data.services.map((service) => ({
            label: service.title,
            url: `/services/${EliminarCaracteresEspeciales(service.title)}`,
          })),
        }
        : {}),
    },
    {
      label: "gallery",
      url: "/gallery",
      subItem: landingGallery,
      ...(landingGallery
        ? {
          subServices: data.landingsGallery.map((gallery) => ({
            label: gallery.nameLanding,
            url: `/gallery/${EliminarCaracteresEspeciales(gallery.nameLanding)}`,
          })),
        }
        : {}),
    },
    {
      label: "contact",
      url: "/contact",
    },
  ];


  // agregar la pestaña de Blog al array de dbMenu

  const areasserverPages = {
    label: "Areas We Serve",
    url: "/areas-we-serve",
    subItem: areasWeServePages,
    ...(areasWeServePages
      ? {
        subServices: data.landingLocations?.slice(1, 20).map((location) => ({
          label: location.title,
          url: `/areas-we-serve/${location.slug}`,
        })),
      }
      : {}),
  }

  if (areasWeServePages) {
    const num = dataMenu.length - 4
    dataMenu.splice(num, 0, areasserverPages)
  }

  // agregar la pestaña de Blog al array de dbMenu

  const blogItems = {
    label: "Blog",
    url: "/blog",
  }

  if (blogPages) {
    const num = dataMenu.length - 2
    dataMenu.splice(num, 0, blogItems)
  }

  // agregar la pestaña de video al array de dbMenu

  const videoItems = {
    label: "videos",
    url: "/videos",
  }

  if (videoPages) {
    const num = dataMenu.length - 1
    dataMenu.splice(num, 0, videoItems)
  }

  // agregar la pestaña de reviews al array de dbMenu

  const reviewsItems = {
    label: "reviews",
    url: "/reviews",
  }

  if (reviewsPages && data.reviews.viewHome === false) {
    const num = dataMenu.length - 1
    dataMenu.splice(num, 0, reviewsItems)
  }


  return (
    <nav>
      <ul className="hidden lg:flex space-x-4">
        {
          dataMenu.map((menuItem, index) => (
            <li className="group relative" key={index}>
              {
                menuItem.subItem
                  ? (
                    <span className={`transition-all text-white duration-300  hover:text-primary capitalize font-semibold cursor-pointer group flex items-center`}>
                      <span className="mr-2">
                        {menuItem.label}
                      </span>
                      <i className="fa-solid fa-chevron-down text-sm"></i>
                    </span>
                  ) : (
                    <a
                      href={menuItem.url}
                      className={`${textColors} text-white font-semibold transition-all duration-300 hover:text-primary capitalize text-xl border-r-2 border-white pr-4 `}
                    >
                      {menuItem.label}
                    </a>
                  )}
              {menuItem.subServices && (
                <div className='absolute top-5 hidden group-hover:block hover:block'>
                  <div className='py-3'>
                    <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45  border-gray-300 border-t border-l '></div>
                  </div>
                  <ul className="space-y-2 text-white dark:text-black bg-white border py-3 border-gray-300 rounded shadow-lg min-w-[200px] max-w-[250px]  ">
                    {menuItem.subServices.map((subService, index) => (
                      <li key={index}>
                        <a
                          href={subService.url}
                          className={`block px-4 py-2 text-gray-700 border-b capitalize group bg-transparent transition-all duration-500 hover:bg-btnHover hover:text-primary hover:font-semibold`}
                          >
                          {subService.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))
        }
      </ul>
      <button
        className="transition-all duration-300 hover:-translate-y-1 block lg:hidden"
        onClick={handleOpenMenu}
      >
        <span className="sr-only">Abrir menú</span>
        <span className="text-3xl">
          <i className={`fa-solid fa-bars ${textColors}`}></i>
        </span>
      </button>

      {/* menu mobil */}
      <div
        className={`${openMenu ? 'block' : 'hidden'} ${animateMenu} fixed top-0 left-0 w-full h-full min-h-screen z-50 overflow-y-auto py-10`}
        style={{ backgroundColor: data.colors.secondaryColor }}
      >
        <picture className="flex justify-center items-center">
          <img
            src={data?.logos.primary}
            alt="Logo"
            className="w-1/2"
          />
        </picture>
        <ul className="w-full flex flex-col items-center justify-center space-y-4 p-10">
          {
            dataMenu.map((menuItem, index) => (
              <li className="w-full  text-white" key={index}>
                {
                  menuItem.subItem
                    ? (
                      <span className="transition-all duration-300 hover:text-secondary capitalize font-semibold cursor-pointer  flex items-center justify-between"
                        onClick={() => openSubMenu !== menuItem.label ? setOpenSubMenu(menuItem.label) : setOpenSubMenu('')}
                      >
                        <span className="mr-2">
                          {menuItem.label}
                        </span>
                        {
                          openSubMenu === menuItem.label
                            ? (
                              <i className="fa-solid fa-chevron-up"></i>
                            ) : (
                              <i className="fa-solid fa-chevron-down"></i>
                            )
                        }
                      </span>
                    ) : (
                      <a
                        href={menuItem.url}
                        className="transition-all duration-300 hover:text-secondary capitalize font-semibold"
                      >
                        {menuItem.label}
                      </a>
                    )}
                {menuItem.subServices && (
                  <ul className={`text-start space-y-2 bg-white border py-3  border-gray-300 rounded shadow-lg w-full ${openSubMenu === menuItem.label ? 'block' : 'hidden'}`}>
                    {menuItem.subServices.map((subService, index) => (
                      <li key={index}>
                        <a
                          href={subService.url}
                          className="block px-4 py-2 text-gray-700 hover:bg-green-200 capitalize"
                        >
                          {subService.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))
          }
        </ul>

        <button
          className="transition-all duration-300 hover:-translate-y-1 block lg:hidden absolute right-5 top-5"
          onClick={handleCloseMenu}
        >
          <span className="sr-only">Cerrar menú</span>
          <span className="text-3xl">
            <i className="fa-solid fa-times text-white"></i>
          </span>
        </button>

      </div>
    </nav>
  );
};


