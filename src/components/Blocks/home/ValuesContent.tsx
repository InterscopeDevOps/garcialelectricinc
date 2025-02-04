import ButtonContent_2 from "@/components/button/ButtonContent_2";
import type { ApiData, Phone, SectionsHomeAbout } from "@/interfaces/dbData";

interface ValuesContentProps {
    dataGlobal: ApiData;
    homeSection: SectionsHomeAbout[];
    dataPhone: Phone[];
}

const ValuesContent: React.FC<ValuesContentProps> = ({ dataGlobal, homeSection, dataPhone }) => {
    return (
        <div
            className={`-mt-0 lg:mt-20 py-24 relative`}
            style={{
                backgroundImage: `url(${dataGlobal?.valuesContent?.additionalImages[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute w-full h-full top-0 bg-black/60 "></div>
            <div className="w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 mx-auto flex flex-col  relative group">

                    <div className="pb-10 flex flex-col items-center md:items-start">
                        <div className="flex gap-5 items-center pb-8">
                            <span className=" font-semibold text-white bgGold px-6 py-1 text-xl rounded-lg capitalize">
                                <i className="fa-light fa-lightbulb pr-2"></i>Our Values
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-bold text-white capitalize text-center md:text-start">
                            {dataGlobal.slogan[0]}
                        </h3>
                        <div className="w-2/5 h-2 bg-slate-200 rounded-3xl px-1 relative mt-5">
                            <div className="w-5 h-3 rounded-full bg-primary absolute -top-[2px] group-hover:translate-x-32 transition-transform ease-out duration-1000"></div>
                        </div>


                    </div>
                    <p className="text-center md:text-justify pb-3 text-white">
                        {homeSection[1].text}
                    </p>
                    <div className="flex justify-center md:justify-start items-center gap-5 py-10">
                        <ButtonContent_2 titleBtn={dataPhone ? dataPhone[0].number : 'Contact Us'} linkBtn={`tel:+1${dataPhone ? dataPhone[0].number : 'Contact Us'}`} />
                    </div>

                </div>
                <div className="w-full md:w-1/2 mx-auto flex flex-col relative px-0 md:px-10 ">
                    <div className="bg-white rounded-lg py-4 md:py-8 px-4 md:px-8 -mb-72 shadow-xl">
                        <div className="text-center md:text-start mb-6 flex flex-col md:flex-row w-full items-center md:items-start">
                            <div className="w-20 h-20 flex justify-center items-center border-primary border-2 rounded-full text-white border-dotted">
                                <div className="w-4/5 h-4/5 rounded-full bgGold flex justify-center items-center">
                                    <i className="fa-regular fa-road text-3xl text-white "></i>
                                </div>
                            </div>
                            <div className="w-4/5 px-2">
                                <h4 className="text-2xl font-bold text-secondary capitalize px-2 pb-3">
                                    mission
                                </h4>
                                <p>
                                    {dataGlobal.valuesContent.mission}
                                </p>
                            </div>
                        </div>
                        <div className="text-center md:text-start mb-6 flex flex-col md:flex-row w-full items-center md:items-start">
                            <div className="w-20 h-20 flex justify-center items-center border-primary border-2 rounded-full text-white border-dotted">
                                <div className="w-4/5 h-4/5 rounded-full bgGold flex justify-center items-center">
                                    <i className="fa-regular fa-bullseye-arrow text-3xl text-white "></i>
                                </div>
                            </div>
                            <div className="w-4/5 px-2">
                                <h4 className="text-2xl font-bold text-secondary capitalize px-2 pb-3">
                                    vision
                                </h4>
                                <p>
                                    {dataGlobal.valuesContent.vision}
                                </p>
                            </div>
                        </div>
                        <div className="text-center md:text-start mb-4 flex flex-col md:flex-row w-full items-center md:items-start ">
                            <div className="w-20 h-20 flex justify-center items-center border-primary border-2 rounded-full text-white border-dotted">
                                <div className="w-4/5 h-4/5 rounded-full bgGold flex justify-center items-center">
                                    <i className="fa-regular fa-shield-check text-3xl text-white "></i>
                                </div>
                            </div>
                            <div className="w-4/5 px-2">
                                <h4 className="text-2xl font-bold text-secondary capitalize px-2 pb-3">
                                    why choose us
                                </h4>
                                <p>
                                    {dataGlobal.valuesContent.whychooseUs}
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            

        </div>
    )
}

export default ValuesContent;