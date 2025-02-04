import type { ApiData, SectionsHomeAbout, Service } from "@/interfaces/dbData";


import SliderServices from "../../Sliders/SliderServices";

interface ServicesHomeProps {
    dataGlobal: ApiData;
    homeSection: SectionsHomeAbout[];
    landingServices: boolean;
    dbServices: Service[];
}

const ServicesHome: React.FC<ServicesHomeProps> = ({ dataGlobal, homeSection, landingServices, dbServices }) => {
    
    
    return (
        <div className="w-full mx-auto py-20 md:pb-20  bg-cover bg-center">
            <div className="flex flex-col md:flex-row gap-10 pb-10 group w-4/5 mx-auto">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start ">
                    <div className="flex gap-5 items-center">
                        <span className="text-base font-bold text-white bgGold px-2 py-2 rounded-xl capitalize">
                            Our Services
                        </span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-primary my-3 capitalize text-center md:text-start">
                        {homeSection[1].title}
                    </h2>
                    <div className="w-4/5 h-2 bg-slate-200 rounded-3xl px-1 relative">
                        <div className="w-5 h-3 rounded-full bg-primary absolute -top-[2px] group-hover:translate-x-80 transition-transform ease-out duration-1000"></div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-black dark:text-white">
                    <p className="text-center md:text-justify pb-3">
                        {(() => {
                            const text = homeSection[1].text;
                            // Encuentra el índice del primer punto.
                            const firstPointIndex = text.indexOf('.');
                            if (firstPointIndex === -1) {
                                // No hay puntos, retorna el texto completo.
                                return text;
                            }
                            // Intenta encontrar el segundo punto.
                            const secondPointIndex = text.indexOf('.', firstPointIndex + 1);
                            if (secondPointIndex === -1) {
                                // Solo hay un punto, retorna el texto hasta el primer punto (incluido).
                                return text;
                            }
                            // Hay al menos dos puntos, retorna el texto hasta el segundo punto (incluido).
                            return text.slice(0, secondPointIndex + 1);
                        })()}
                    </p>

                    {
                        !dataGlobal.widgets.onePages && (
                            <div className="flex items-center justify-center md:justify-start gap-1" >
                                <a
                                    href="/services"
                                    className="flex items-center gap-1 text-primary font-bold capitalize underline"
                                    aria-label="see all the services we provide"
                                >
                                    <span>see all the services we provide </span>
                                    <i className="fa-solid fa-chevrons-right text-sm"></i>
                                </a>

                            </div>
                        )
                    }

                </div>
            </div>
            <SliderServices dbServices={dbServices} logoCompany={dataGlobal.logos.primary} landingServices={landingServices} onePage={dataGlobal.widgets.onePages} dataGeneral={dataGlobal.dataGeneral}  />
        </div>
    );
}
export default ServicesHome;