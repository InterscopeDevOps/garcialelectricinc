import LazyImage from "@/components/LazyImage";
import ButtonContent_2 from "@/components/button/ButtonContent_2";
import type { Email, Phone, SectionsHomeAbout } from "@/interfaces/dbData";

interface CallToActionProps {
    homeSection: SectionsHomeAbout[];
    nameCompany: string;
    dataPhone: Phone[];
    dataEmail: Email[];

}

const CallToAction: React.FC<CallToActionProps> = ({ homeSection, dataEmail, dataPhone }) => {
    return (
        <div
            className="bg-[url('/assets/images/404Img/electricity_bg.png')] bg aspect-auto w-full h-full py-24 md:py-32 relative flex justify-center items-center before:absolute before:w-full before:h-full before:top-0 before:bg-black/70"

        >
            <div className="w-11/12 md:w-[80%] mx-auto relative z-10">


                <div className=" w-full h-full rounded-xl flex flex-col-reverse md:flex-row gap-5 md:gap-10 mt-10 px-5 py-10 md:px-10 md:py-5">
                    <div className="w-full md:w-[50%] h-full flex flex-col items-center md:items-start">
                        <div className="flex gap-5 items-center">

                            <span className=" font-semibold text-white bg-primary px-6 py-1 text-xl rounded-lg capitalize">
                                <i className="fa-light fa-bolt pr-2"></i>Contact Us
                            </span>
                        </div>
                        <h3 className="text-4xl md:text-6xl capitalize font-bold text-white mt-5 text-center pb-5 md:pb-2 md:text-start">
                            {homeSection?.[1]?.title}
                        </h3>
                        <p className="text-center md:text-justify pt-0 md:pt-5 pb-10 text-white">{homeSection?.[1]?.text}</p>


                    </div>
                    <div className="w-full md:w-[50%] h-[300px] md:h-[450px] rounded-xl shadow-md aspect-auto px-0 md:px-4 flex space-x-2 justify-center">
                        <div className="w-1/2 h-full border-primary border-4 rounded-2xl overflow-hidden relative group">
                            <a href={`mailto:${dataEmail[0].email}`} className="w-full h-full relative">
                                <LazyImage
                                    src={homeSection?.[1]?.additionalImages[0]}
                                    alt="Imgen Call to action"
                                    className="w-full h-full object-cover rounded-xl scale-100  group-hover:scale-110 transition-transform ease-out duration-1000 z-10"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                                <div className="w-24 md:w-36 h-24 md:h-36 flex justify-center items-center border-primary scale-90  group-hover:scale-100 transition-transform ease-out duration-1000 border-4 border-dotted rounded-full absolute top-[30%] left-8 md:left-12 z-20">
                                    <div className="w-4/5 h-4/5 rounded-full bg-primary flex justify-center items-center">
                                        <i className="fa-regular fa-envelope text-4xl text-white "></i>
                                    </div>
                                </div>

                            </a>
                        </div>
                        <div className="w-1/2 h-full border-primary border-4 rounded-2xl overflow-hidden relative group">
                            <a href={`tel:+1${dataPhone[0].number}`} className="w-full h-full relative">
                                <LazyImage
                                    src={homeSection?.[1]?.additionalImages[1]}
                                    alt="Imgen Call to action"
                                    className="w-full h-full object-cover rounded-xl scale-100  group-hover:scale-110 transition-transform ease-out duration-1000 z-10"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                                <div className="w-24 md:w-36 h-24 md:h-36 flex justify-center items-center border-primary scale-90  group-hover:scale-100 transition-transform ease-out duration-1000 border-4 border-dotted rounded-full absolute top-[30%] left-8 md:left-12 z-20">
                                    <div className="w-4/5 h-4/5 rounded-full bg-primary flex justify-center items-center">
                                        <i className="fa-regular fa-phone text-2xl md:text-4xl text-white "></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CallToAction;