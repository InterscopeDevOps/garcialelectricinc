import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import type { Service } from '@/interfaces/dbData';
import LazyImage from '../LazyImage';
import EliminarCaracteresEspeciales from '@/hook/EliminarCaracteresEspeciales';

interface SliderServicesDetailProps {
    dataServices: Service[];
    logoCompany: string;
}

const SliderServicesDetail: React.FC<SliderServicesDetailProps> = ({ dataServices, logoCompany }) => {
    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {dataServices.map((service, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center group">
                        <div className="relative z-20 w-full mx-auto">
                            <LazyImage
                                src={service.description[0].image}
                                alt={service.title}
                                className="w-screen h-[400px] rounded-xl object-cover shadow shadow-black aspect-auto cursor-pointer"
                            />
                            {/* Modificación para el efecto de fade desde arriba */}
                            <div className="absolute bottom-0 w-full p-4 bg-secondary text-white rounded-bl-xl rounded-br-xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex justify-between items-center">
                                <a
                                    href={`/services/${EliminarCaracteresEspeciales(service.title)}`}
                                    className="text-lg font-semibold capitalize hover:scale-105 transition-all duration-300"
                                    aria-label={`More information on ${service.title}`}
                                >
                                    {service.title}
                                </a>
                                <a
                                    href={`/services/${EliminarCaracteresEspeciales(service.title)}`}
                                    className="font-bold bg-white text-primary text-xl rounded-full px-5 py-3.5 hover:scale-105 transition-all duration-300"
                                    aria-label={`More information on ${service.title}`}
                                >
                                    <i className="fa-regular fa-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='h-[400px] md:h-screen bg-primary -mt-32 rounded-b-full px-[10%] md:px-[20%]'>
                <div className='bg-white rounded-b-full w-full h-[90%] md:h-3/4 flex items-end  justify-center pb-5 md:pb-10'>
                    <LazyImage
                        src={logoCompany}
                        alt="Logo de la empresa"
                        className="w-4/5 md:w-1/2 mx-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default SliderServicesDetail;