import LazyImage from "@/components/LazyImage";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Masonry from 'react-masonry-css';

// swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation } from "swiper/modules";



interface GalleryComponentProps {
  dataGallery: string[];
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ dataGallery }) => {
  // Estado para controlar la visibilidad del modal y la imagen seleccionada
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    // setSelectedImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {dataGallery.map((item, index) => (
            <div key={index} onClick={() => openModal(index)}>
              <LazyImage
                src={item}
                alt={`gallery-${index}`}
                className="w-full h-auto object-cover cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-lg"
              />
            </div>
          ))}
        </Masonry>

      {/* Modal para la imagen seleccionada */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
          <div className="rounded-lg  max-w-2xl max-h-[80vh] overflow-auto">
            <div className="flex justify-end">
              <button onClick={closeModal} className="m-2 rounded-full shadow shadow-white bg-zinc-700/60 text-white hover:bg-btnHover transition-all duration-300 ease-in-out font-bold py-2.5 px-4">X</button>
            </div>
            {/* <img src={selectedImage} alt="Imagen seleccionada" className="w-11/12 mx-auto md:max-w-full max-h-full md:max-h-[70vh] object-contain" /> */}
            <Swiper
              // Instalar módulos de Swiper
              modules={[Navigation, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => swiper.slideTo(selectedImageIndex)} // Ir al slide del índice seleccionado al abrir
            >
              {dataGallery.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} alt={`Slide ${index}`} className="w-11/12 mx-auto md:mx-0 md:w-full max-h-full md:max-h-[70vh] object-contain" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

    </div>
  );
};


export default GalleryComponent;