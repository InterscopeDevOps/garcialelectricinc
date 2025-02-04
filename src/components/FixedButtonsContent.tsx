import React, { useEffect, useState } from 'react';
import type { ApiData } from '@/interfaces/dbData';

interface FixedButtonsContentProps {
    dataGlobal: ApiData;
}

const FixedButtonsContent: React.FC<FixedButtonsContentProps> = ({ dataGlobal }) => {
    const [showModal, setShowModal] = useState(false);
    const [showModalWater, setShowModalWater] = useState(false);
    const phoneNumber = dataGlobal.dataGeneral.phones[0].number.replace(/-/g, '');
    const [viewClose, setViewClose] = useState(false);

    const handleWhatsAppClick = () => {
        // Crear la URL de WhatsApp sin ningún mensaje predefinido
        const urlWhatsApp = `https://wa.me/+1${phoneNumber}`;

        // Abrir WhatsApp en una nueva ventana o redirigir al usuario a la aplicación de WhatsApp
        window.open(urlWhatsApp, '_blank');
    };

    const handleCounterClick = () => {
        setShowModal(!showModal);
        setTimeout(() => {
            setViewClose(true);
        }, 3000);
    };

    const handleWaterClick = () => {
        setShowModalWater(!showModalWater);
        setTimeout(() => {
            setViewClose(true);
        }, 2000);
    };


    return (
        <div className="fixed z-40 bottom-0 top-0 left-0 flex items-center justify-center">
            <div className="bg-tertiary rounded-tr-lg rounded-br-lg flex flex-col">
                {dataGlobal.widgets.btnWhatsapp && (
                    <button
                        onClick={handleWhatsAppClick}
                        className="text-white text-center text-lg font-bold border-b border-gray-200 p-3 bg-transparent rounded-tr-lg hover:bg-green-600 transition-all duration-300 ease-in-out"
                        aria-label="Open WhatsApp Chat"
                    >
                        <i className="fab fa-whatsapp"></i>
                    </button>
                )}
                {
                    dataGlobal.widgets.btnCallUs && (
                        <a
                            href={`tel:+1${phoneNumber}`}
                            className="text-white text-center text-lg font-bold border-b border-gray-200 p-3 bg-transparent  hover:bg-red-600"
                            aria-label="Call Us Button"
                        >
                            <i className="fa-light fa-phone-volume"></i>
                        </a>
                    )
                }
                {
                    dataGlobal.widgets.colorPalette && (
                        <a
                            href={'/colorpalette'}
                            className="text-white text-center text-lg font-bold  p-3 border-b border-gray-200 bg-transparent hover:bg-purple-600"
                            aria-label="Color Palette Button"
                        >
                            <i className="fas fa-palette"></i>
                        </a>
                    )
                }
                {
                    dataGlobal.widgets.weatherViewer && (
                        <button
                            onClick={handleWaterClick}
                            className="text-white text-center text-lg p-3 font-bold  border-b border-gray-200 bg-transparent hover:bg-yellow-600"
                            aria-label="Weather Viewer Button"
                        >
                            <i className="fas fa-cloud-sun"></i>
                        </button>
                    )
                }
                {
                    dataGlobal.widgets.counterVisit && (
                        <button
                            onClick={handleCounterClick}
                            className="text-white text-center text-lg font-bold  p-3 border-b border-gray-200 rounded-br-lg hover:bg-blue-600"
                            aria-label="Counter Visit Button"
                        >
                            <i className="fas fa-chart-bar"></i>
                        </button>
                    )
                }

            </div>


            {
                showModal && (
                    <div className='absolute bottom-0 md:bottom-24 left-0 flex justify-center items-cente'>
                        <div className="bg-[#FCFAF7] py-4 px-2 rounded-lg shadow-lg">
                            {
                                viewClose && (

                                    <button
                                        onClick={() => {
                                            setShowModal(false);
                                            setViewClose(false);
                                        }}
                                        className="absolute top-0 right-0 z-10 bg-btnHover px-4 py-2 rounded-full"
                                        arial-label="Close"
                                    >X</button>
                                )
                            }
                            <div className="elfsight-app-44e6f653-cea2-4158-844c-eb0c266426bc" data-elfsight-app-lazy></div>
                        </div>
                    </div>
                )
            }
            {
                showModalWater && (
                    <div className='absolute bottom-0 left-0 flex justify-center items-cente'>
                        <div className="bg-[#FCFAF7] py-4 px-2 rounded-lg shadow-lg">
                            {
                                viewClose && (

                                    <button
                                        onClick={() => {
                                            setShowModalWater(false);
                                            setViewClose(false);
                                        }}
                                        className="absolute top-0 right-0 z-10 bg-btnHover px-4 py-2 rounded-full"
                                        arial-label="Close"
                                    >X</button>
                                )
                            }
                            <div className="elfsight-app-2c61b889-3cfa-497e-8470-2c98c7cfacbe" data-elfsight-app-lazy></div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default FixedButtonsContent;
