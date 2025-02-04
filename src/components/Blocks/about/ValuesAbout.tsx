import LazyImage from "@/components/LazyImage";
import ButtonContent_2 from "@/components/button/ButtonContent_2";
import type { SectionsHomeAbout, ValuesContent } from "@/interfaces/dbData";

interface ValuesAboutProps {
    dataAbout: SectionsHomeAbout[];
    nameCompany: string;
    valueContent: ValuesContent;
}

const ValuesAbout: React.FC<ValuesAboutProps> = ({ dataAbout, nameCompany, valueContent }) => {
    return (
        <div className="w-4/5 mx-auto">

            <div className="w-full md:w-[85%] mx-auto bg-[#FCFAF7] rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-5 md:py-10 md:px-20 -mt-10 md:-mt-24 mb-28 relative">
                <div className="text-center flex flex-col items-center" >
                    <div className="w-20 h-20 flex justify-center items-center border-primary border-4 rounded-full text-white border-dotted">
                        <div className="w-4/5 h-4/5 rounded-full bg-primary flex justify-center items-center">
                            <i className="fa-regular fa-road text-3xl text-black "></i>
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-secondary capitalize text-center pb-3">
                        mission
                    </p>
                    <p className="text-center">
                        {valueContent.mission}
                    </p>
                </div>
                <div
                    className="relative border aspect-auto rounded-2xl before:absolute before:w-full before:h-full before:rounded-2xl bg-black before:top-0 before:left-0">
                    <div className="text-center flex flex-col items-center relative p-5">

                        <div className="w-20 h-20 flex justify-center items-center border-white border-4 rounded-full text-white border-dotted">
                            <div className="w-4/5 h-4/5 rounded-full bg-white flex justify-center items-center">
                                <i className="fa-regular fa-bullseye-arrow text-3xl text-secondary "></i>
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-white capitalize text-center pb-3">
                            vision
                        </p>
                        <p className="text-center text-white">
                            {valueContent.vision}
                        </p>
                    </div>
                </div>
                <div className="text-center flex flex-col items-center" >
                    <div className="w-20 h-20 flex justify-center items-center border-primary border-2 rounded-full text-white border-dotted">
                        <div className="w-4/5 h-4/5 rounded-full bg-primary flex justify-center items-center">
                            <i className="fa-regular fa-shield-check text-3xl text-black "></i>
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-secondary capitalize text-center pb-3">
                        why choose us
                    </p>
                    <p className="text-center">
                        {valueContent.whychooseUs}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ValuesAbout