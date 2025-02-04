import React, { useRef, useState } from 'react';
import type { DataGeneral, Service } from "@/interfaces/dbData";
import LazyImage from '../LazyImage';
import EliminarCaracteresEspeciales from '@/hook/EliminarCaracteresEspeciales';

interface SliderServicesProps {
    dbServices: Service[];
    landingServices: boolean;
    slidesPerView?: number;
    slidesPerViewMobile?: number; // Aquí agregamos esta prop
    onePage?: boolean;
    dataGeneral?: DataGeneral;
    logoCompany: string;
}

const SliderServices: React.FC<SliderServicesProps> = ({ dbServices, landingServices, slidesPerView, slidesPerViewMobile, logoCompany, onePage, dataGeneral }) => {
    const [startIndex, setStartIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    slidesPerView = 3;
    slidesPerViewMobile = 1;

    // const isMobile = window.innerWidth < 768; // Establecemos 768 como ancho máximo para dispositivos móviles, puedes ajustarlo según tus necesidades

    // // Determinamos el número de elementos a mostrar dependiendo del tamaño de la pantalla
    // const itemsToShow = isMobile ? slidesPerViewMobile || 1 : slidesPerView || 3;

    const nextSlide = () => {
        setStartIndex((prevIndex) => (prevIndex === dbServices.length - slidesPerView ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setStartIndex((prevIndex) => (prevIndex === 0 ? dbServices.length - slidesPerView : prevIndex - 1));
    };

    return (
        <div className="relative w-full overflow-hidden py-10">
            <div className="hidden md:flex justify-center transition-transform duration-500 ease-in-out space-x-5 py-5">
                {
                    dbServices.slice(startIndex, startIndex + 3).map((service, index) => (
                        <div key={index}
                            className={`w-full md:w-[400px] relative shadow-md border z-30 rounded-2xl bg-white p-2 h-[350px]`}
                            style={{ transformOrigin: 'center center' }}
                        >
                            <LazyImage
                                alt={service.title}
                                src={service.description[0].image}
                                className='w-full h-3/5 object-cover rounded-2xl'
                            />

                            <div className='w-20 h-20 absolute top-[47%] bg-white right-2 flex justify-center items-start p-3 rounded-tl-xl'>
                                <LazyImage
                                    alt='Logo'
                                    src={logoCompany}
                                    className='w-full h-full object-cover '
                                />
                            </div>
                            <div className='w-full h-auto z-30 flex flex-col justify-start items-start px-3 py-4'>
                                <h2 className={`text-secondary font-extrabold capitalize pb-2 ${onePage ? 'text-center text-xl' : 'text-xl'}`}>{service.title}</h2>
                                <div className='w-3/5 h-full hidden md:block'>
                                    {
                                        !onePage && (
                                            <p>
                                                {service?.description?.[0]?.text.slice(0, 70) + '...'}
                                            </p>
                                        )
                                    }
                                </div>
                                <a
                                    href={`${onePage ? `tel:${dataGeneral?.phones[0].number}` :
                                        landingServices ? `/services/${EliminarCaracteresEspeciales(service.title)}` : '/services'}`}
                                    aria-label="Learn More"
                                    className="text-2xl rounded-tl-lg rounded-br-2xl absolute right-1 bottom-1 bg-secondary px-10 py-2 hover:scale-110 hover:bg-secondary hover:shadow-md text-white transition-all duration-300 ease-in-out"
                                >
                                    {
                                        onePage ? <i className="fa-solid fa-phone"></i> : <i className="fa-regular fa-arrow-up-right"></i>
                                    }

                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="md:hidden flex justify-center transition-transform duration-500 ease-in-out space-x-5 py-5 px-4">
                {
                    dbServices.slice(startIndex, startIndex + 1).map((service, index) => (
                        <div key={index}
                            className={`w-full md:w-[400px] relative shadow-md border z-30 rounded-2xl bg-white p-2 h-[350px] transform ${index === startIndex ? 'animate-slide-in-right transition-transform delay-300 ' : 'animate-none'}`}
                            style={{ transformOrigin: 'center center' }}
                        >
                            <LazyImage
                                alt={service.title}
                                src={service.description[0].image}
                                className='w-full h-3/5 object-cover rounded-2xl'
                            />

                            <div className='w-20 h-20 absolute top-[47%] bg-white right-2 flex justify-center items-start p-3 rounded-tl-xl'>
                                <LazyImage
                                    alt='Logo'
                                    src={logoCompany}
                                    className='w-full h-full object-cover '
                                />
                            </div>
                            <div className='w-full h-auto z-30 flex flex-col justify-start items-start px-3 py-4'>
                                <h2 className={`text-secondary font-extrabold capitalize pb-2 ${onePage ? 'text-center text-xl' : 'text-xl'}`}>{service.title}</h2>
                                <div className='w-3/5 h-full hidden md:block'>
                                    {
                                        !onePage && (
                                            <p>
                                                {service?.description?.[0]?.text.slice(0, 70) + '...'}
                                            </p>
                                        )
                                    }
                                </div>
                                <a
                                    href={`${onePage ? `tel:${dataGeneral?.phones[0].number}` :
                                        landingServices ? `/services/${EliminarCaracteresEspeciales(service.title)}` : '/services'}`}
                                    aria-label="Learn More"
                                    className="text-2xl rounded-tl-lg rounded-br-2xl absolute right-1 bottom-1 bg-secondary px-10 py-2 hover:scale-110 hover:bg-secondary hover:shadow-md text-white transition-all duration-300 ease-in-out"
                                >
                                    {
                                        onePage ? <i className="fa-solid fa-phone"></i> : <i className="fa-regular fa-arrow-up-right"></i>
                                    }

                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='absolute z-20 top-0 w-full  flex justify-end space-x-1 text-white pr-36'>
                <button
                    className="transform bg-primary px-5 py-3 rounded-lg"
                    onClick={prevSlide}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                    className="transform bg-primary px-5 py-3 rounded-lg"
                    onClick={nextSlide}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}

export default SliderServices;
