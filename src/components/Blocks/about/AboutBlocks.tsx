import LazyImage from "@/components/LazyImage";
import ButtonContent_2 from "@/components/button/ButtonContent_2";
import type { ApiData, Phone, SectionsHomeAbout } from "@/interfaces/dbData";

interface AboutsBlocksProps {
    dataAbout: SectionsHomeAbout[];
    dbPhone: Phone[];
    dataGlobal: ApiData;
}

const AboutsBlocks: React.FC<AboutsBlocksProps> = ({ dataAbout,dbPhone, dataGlobal }) => {
    const primaryPhone = dbPhone[0].number;
    return (
        <div className="py-14 md:py-36">
            <div className="w-full flex flex-col justify-center px-4 md:px-0">
                <i className="fa-regular fa-lightbulb text-5xl text-primary text-center pb-6"></i>
                <h3 className="text-xl font-semibold text-white capitalize text-center ">
                    A Little About Us
                </h3>
                <h3 className="text-3xl md:text-5xl font-extrabold text-primary capitalize text-center">
                    {dataAbout[0].title}
                </h3>
            </div>
            <div className="w-full md:w-4/5 mx-auto flex flex-col-reverse md:flex-row gap-5 py-20 items-center">
                <div className="w-full md:w-2/5 flex flex-col justify-center px-10 ">
                    <p className="text-center md:text-justify pb-3 text-white">
                        {dataAbout[0].text}
                    </p>
                    <div className="py-5 text-center md:text-start">
                        
                                <ButtonContent_2 />
                           
                    </div>
                </div>
                <div className="w-full md:w-3/5 pb-10 md:pb-0 h-[500px] relative">
                    
                        <div
                            className="w-[35%] h-[350px] md:h-[35vh] aspect-auto z-20 absolute top-20 left-4 md:left-0"
                            style={{
                                backgroundImage: `url("${dataAbout[0].additionalImages[1]}")`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                        <div
                            className="w-[220px] md:w-[65%] h-[450px] md:h-[55vh] aspect-auto z-20 absolute right-3 md:-right-10 -top-5 md:top-5 border-[12px] border-white"
                            style={{
                                backgroundImage: `url("${dataAbout[0].additionalImages[0]}")`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>

                        <div className="absolute w-[280px] md:w-[500px] h-[260px] bgGold bottom-6 left-10 flex justify-center items-center z-10"></div>


                    
                </div>
            </div>
        </div>
    );
};

export default AboutsBlocks;
