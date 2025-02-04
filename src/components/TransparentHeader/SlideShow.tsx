import type { Phone, SectionsHomeAbout } from "@/interfaces/dbData";

import ButtonContent2 from "@/components/button/ButtonContent_2";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import LazyImage from "../LazyImage";





// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState } from "react";
interface SlidesShowProps {
    dataBlocks: SectionsHomeAbout[];
    dataPhone?: Phone[];
}

const SlidesShow: React.FC<SlidesShowProps> = ({ dataBlocks, dataPhone }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === dataBlocks[0]?.additionalImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? dataBlocks[0]?.additionalImages.length - 1 : prev - 1));
    };

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative h-full overflow-hidden">
              <div className="absolute z-10 w-full h-full">
                <video

                    playsInline
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                >
                    <source
                        src={"https://firebasestorage.googleapis.com/v0/b/videos-de-stock.appspot.com/o/Electric%2FElectrical.mp4?alt=media&token=c603b57f-1dbd-4a79-af80-f76b98e649fa"}
                        type="video/mp4"
                    />
                </video>

            </div>
            {/* overlay */}
            <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-br from-black/70"></div>
            <div className="w-[90%] md:w-3/5 h-[90vh] bg-btnColor from-secondary from-[20%] to-black/5 absolute z-20 rounded-full rotate-45 md:-rotate-45 -top-96 md:-top-16 -right-36 md:-right-36"></div>
            <div className="absolute right-12 md:right-28 top-8 md:top-16  w-[300px] h-[300px] md:w-[600px] md:h-[600px] z-30">
                {
                    dataBlocks[0]?.additionalImages.map((imag, index) => (
                        <div key={index}
                            className={`w-full h-full object-cover rounded-full border-[10px] border-white shadow-xl ${index === currentSlide ? 'animate-rollIn' : 'hidden'}`}
                        >
                            <LazyImage
                                src={imag}
                                alt={"image slider" + index}
                                className="w-full h-full object-cover rounded-full "
                            />
                        </div>
                    ))
                }
            </div>

            {/* content */}
            <div className="relative z-20 w-[90%] mx-auto h-[90%] flex justify-between items-center gap-2 lg:gap-20 py-20 pt-[370px] pb-20 lg:py-[200px]">

                <div className="w-full md:w-1/2 text-center md:text-start px-0 md:px-10">
                    <h1 className="text-white text-4xl md:text-6xl font-bold  capitalize pb-5">{dataBlocks[0]?.title}</h1>
                    <p className="text-white text-base">{dataBlocks[0]?.text}</p>
                    <div className="flex justify-center md:justify-start items-center gap-5 py-10">
                        <ButtonContent2 btnstyle="btnStyle3" titleBtn={dataPhone ? dataPhone[0].number : 'Contact Us'} linkBtn={`tel:+1${dataPhone ? dataPhone[0].number : 'Contact Us'}`} />
                    </div>
                </div>

                <div className="w-4/5 md:hidden absolute -bottom-10 left-8  mx-auto flex justify-between items-center gap-5 pt-16 pb-20">
                    <button
                        onClick={prevSlide}
                        className="text-white text-lg border rounded-full py-2 px-3.5 transition-all duration-300 ease-in-out hover:bg-btnColor hover:border-btnColor "
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-4">
                        {dataBlocks[0]?.additionalImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-3 w-3 rounded-full ${index === currentSlide ? 'border-[4px] border-btnHover' : 'bg-white'}`}
                            ></button>
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="text-white text-lg border rounded-full py-2 px-3.5 transition-all duration-300 ease-in-out hover:bg-btnColor hover:border-btnColor "
                    >
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                {/* dots en desktop */}
                <div className="hidden absolute bottom-0 z-20 left-[37%] w-1/5 mx-auto md:flex justify-between items-center gap-5 pb-20">
                    <button
                        onClick={prevSlide}
                        className="text-white text-2xl border-4 rounded-full py-3.5 px-5 transition-all duration-300 ease-in-out hover:bg-btnColor hover:border-btnColor "
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-4">
                        {dataBlocks[0]?.additionalImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-4 w-4 rounded-full ${index === currentSlide ? 'border-[4px] border-btnHover' : 'bg-white'}`}
                            ></button>
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="text-white text-2xl border-4 rounded-full py-3.5 px-5 transition-all duration-300 ease-in-out hover:bg-btnColor hover:border-btnColor "
                    >
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default SlidesShow;
