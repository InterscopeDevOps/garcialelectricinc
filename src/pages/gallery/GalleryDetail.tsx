import LazyImage from "@/components/LazyImage";
import { useState } from "react";

import Masonry from 'react-masonry-css';

import type { LandingsGallery } from "@/interfaces/dbData";



interface GalleryDetailProps {
  dataGallery: string[];
  LandingsGallery: LandingsGallery[];
}

const GalleryDetail: React.FC<GalleryDetailProps> = ({ dataGallery, LandingsGallery }) => {
  // Estado para controlar la visibilidad del modal y la imagen seleccionada
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [dataImg, setDataImg] = useState<string[]>([])
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  const openModal = (index: number, dataGalleryimg: string[]) => {
    setSelectedImageIndex(index);
    setDataImg(dataGalleryimg)
    // setSelectedImage(index);
    setIsModalOpen(true);
  };
  const openModal2 = (index: number) => {
    setSelectedImageIndex(index);
    // setSelectedImage(index);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const LandImg = LandingsGallery.map((item)=> item)




  return (
    <div>

      {
        LandingsGallery.length > 0 ?
          LandingsGallery.map((item, index) => {
            return (
              <div key={index} className="py-2 w-full border">
                <h3 className="text-4xl text-secondary font-bold text-center pb-5">{item.nameLanding}</h3>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {
                    item.imgLanding.map((img, index) => (
                      <div key={index} onClick={() => openModal(index, item.imgLanding)}>
                        <LazyImage
                          src={img}
                          alt={`gallery-${index}`}
                          className="w-full h-auto object-cover cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-lg"
                        />
                      </div>
                    ))
                  }



                </Masonry>



              </div>
            )
          })
          :
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {dataGallery.map((item, index) => (
              <div key={index} onClick={() => openModal2(index)}>
                <LazyImage
                  src={item}
                  alt={`gallery-${index}`}
                  className="w-full h-auto object-cover cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-lg"
                />
              </div>
            ))}
          </Masonry>
      }



      {
        isModalOpen && (
          <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
            <div className="rounded-lg  max-w-2xl h-[90vh] overflow-hidden">
              <div className="flex justify-end">
                <button onClick={closeModal} className="m-2 rounded-full shadow shadow-white bg-zinc-700/60 text-white hover:bg-btnHover transition-all duration-300 ease-in-out font-bold py-2.5 px-4">X</button>
              </div>
              {
                dataImg.map((img, index) => (
                  <div key={index} className="flex justify-center items-center ">
                    {
                      selectedImageIndex === index && (
                        <LazyImage
                          src={img}
                          alt={`gallery-${index}`}

                          className="w-[400px] h-auto object-contain  hover:shadow-lg"
                        />
                      )
                    }

                  </div>
                ))
              }
            </div>
          </div>
        )
      }



    </div>
  );
};


export default GalleryDetail;