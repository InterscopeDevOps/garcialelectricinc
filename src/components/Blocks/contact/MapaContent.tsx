import React, { useState } from 'react';
import type { Location, ApiData } from "@/interfaces/dbData";

interface MapaTabProps {
    locations: Location[];
    data: ApiData;
}

const MapaTab: React.FC<MapaTabProps> = ({ locations, data }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [showLocations, setShowLocations] = useState(false);
    const [animateMenu, setAnimateMenu] = useState('')
    const [locationName, setLocationName] = useState(locations[0].city);


    const handleTabClick = (index: number, title: string) => {
        setSelectedTab(index);
        setLocationName(title);
        setAnimateMenu('animate-fade-slide-up');
        // Agrega un retardo antes de cambiar el estado `openMenu` para permitir que la animación se reproduzca
        setTimeout(() => {
            setShowLocations(false);
        }, 500); // Ajusta el tiempo según la duración de tu animación
    };

    const toggleLocations = () => {
        setShowLocations(prevState => !prevState); // Cambia el estado de visibilidad de la lista de localidades
        setAnimateMenu('animate-fade-slide-down');

    };

    const handleClose = () => {
        setAnimateMenu('animate-fade-slide-down');
        // Agrega un retardo antes de cambiar el estado `openMenu` para permitir que la animación se reproduzca
        setTimeout(() => {
            setShowLocations(false);
        }, 600); // Ajusta el tiempo según la duración de tu animación
    };


    return (
        <div className="flex flex-col items-center overflow-hidden">

            <div className="w-11/12 h-[500px] md:h-[500px] relative ">
                <iframe
                    src={locations[selectedTab].urlCity}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-label='Mapa de localidades'

                ></iframe>
                {/* Botón para mostrar/ocultar la lista de localidades */}
                {showLocations ? (
                    <button
                        className="absolute z-10 right-0 top-0 mt-2 mr-2 px-3 py-1 text-lg font-semibold text-white bg-gray-800 hover:bg-gray-600 rounded-full"
                        onClick={handleClose}
                        arial-label="Close locations"
                    >
                        X
                    </button>
                ) : locations.length > 1 ?
                    (
                        <>
                            {
                                locations.length > 1 && (
                                    <button
                                        className="absolute right-[20%] md:right-[42%] bottom-10 px-4 py-2 text-lg font-semibold bg-secondary text-white transition-all duration-300 ease-in-out capitalize"
                                        onClick={toggleLocations}
                                        arial-label="View locations"
                                    >
                                        <span className="mr-2"> <i className="fa-solid fa-arrow-up"></i></span>
                                        view All locations
                                    </button>
                                ) || null
                            }
                        </>
                    )
                    : null

                }
                {/* Contenedor de botones de localidades */}
                {showLocations && (
                    <div className={`${animateMenu} flex flex-col items-center justify-center absolute right-0 top-0 bottom-0  bg-green-950/80 shadow w-full h-[500px] md:h-[650px]`}>
                        <h2 className="text-xl md:text-3xl font-semibold text-black text-center py-5 capitalize">all the locations we cover </h2>
                        <div className="flex flex-wrap justify-center items-end overflow-y-auto pb-10 gap-5">
                            {locations.map((location, index) => (
                                <button
                                    key={index}
                                    className={`flex flex-col justify-center items-center p-4 mb-2 text-lg font-semibold border-t-[10px] ${selectedTab === index ? 'bg-btnHover  border-gray-200' : 'bg-gray-100 border-btnHover hover:bg-btnHover hover:border-gray-200 hover:text-white transition-all duration-300 ease-in-out'}`}
                                    onClick={() => handleTabClick(index, location.city)}
                                    arial-label={`Select ${location.city}`}
                                >
                                    <i className="fa-solid fa-location-dot mr-1 text-2xl pb-1"></i>
                                    <span>{location.city}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className=' w-4/5 h-auto p-6 bg-primary -mt-10 z-10'>
                {
                    data.milesCover.length > 0 && (
                        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white">we cover {data.milesCover} miles around the {locationName}</h2>
                    ) || (
                        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white">we cover entire area {locationName}</h2>
                    )
                }
            </div>

        </div>
    );
};

export default MapaTab;
