import ButtonContent from "@/components/button/ButtonContent_2";
import type { ApiData } from "@/interfaces/dbData";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import LazyImage from "@/components/LazyImage";

interface SocialMediaHomeProps {
    dataGlobal: ApiData;

}

const SocialMediaHome: React.FC<SocialMediaHomeProps> = ({ dataGlobal }) => {

// Combina los directorios y redes sociales en un solo arreglo
const combinedArray = [...dataGlobal.directorios, ...dataGlobal.redesSociales];


return (
    <div className="pb-10 bg-white">
        <div className=" w-3/4 mx-auto flex flex-col md:flex-row justify-between items-center pb-10 md:pb-0">
            <a
                href={dataGlobal.gmb.length ? dataGlobal.gmb : '/'}
                aria-label="Google my Business"
                target={dataGlobal.gmb.length ? "_blank" : "_self"}
            >
                <LazyImage
                    src={"https://firebasestorage.googleapis.com/v0/b/clientesimages.appspot.com/o/directorios%2Fgmb-reviews.png?alt=media&token=791a077e-6f07-4a18-9226-32c0bf9cb2d1"}
                    alt={"Google my Business"}
                    className="w-52 h-52 object-contain aspect-auto"
                    height={200}
                />
            </a>
            <div className="pb-5">
            <h2 className="text-5xl font-bold md:pt-20 text-center capitalize text-black">Find Us on</h2>
            </div>
            <div>
                <ButtonContent titleBtn="Write A Review" gmbUrl linkBtn={dataGlobal.gmb.length ? dataGlobal.gmb : '/'} />
            </div>
        </div>

        {
            combinedArray.length >= 5 ? (
                <div className="-mt-14 w-11/12 md:w-3/4 mx-auto flex justify-center items-center">
                    <Swiper
                        modules={[
                            // Navigation, 
                            Autoplay]}
                        // navigation
                        spaceBetween={20}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        breakpoints={
                            {
                                320: {
                                    slidesPerView: 2,
                                },
                                640: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 5,
                                },
                            }
                        }
                    >
                        {combinedArray.length > 0 && combinedArray.map((item, index) => (
                            <SwiperSlide key={index} className="flex items-center gap-10">
                                <a href={item.link} target="_blank" className="flex items-center h-full p-3">
                                    <LazyImage
                                        src={item.logo}
                                        alt={item.name}
                                        className="w-full h-[150px] rounded-tl-xl rounded-tr-xl object-contain aspect-auto"
                                        height={150}
                                    />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )
                : (
                    <div className="flex flex-wrap justify-center items-center gap-5">
                        {
                            combinedArray.length > 0 && combinedArray.map((item, index) => (
                                <a key={index} href={item.link} target="_blank" className="flex items-center h-full p-3">
                                    <LazyImage
                                        src={item.logo}
                                        alt={item.name}
                                        className="w-[250px] h-auto object-contain aspect-auto"
                                        height={150}
                                    />
                                </a>
                            ))
                        }
                    </div>
                )
        }


    </div>
);
}

export default SocialMediaHome;