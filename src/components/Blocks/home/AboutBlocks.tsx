import LazyImage from "@/components/LazyImage";
import ButtonContent_2 from "@/components/button/ButtonContent_2";
import type { ApiData, SectionsHomeAbout } from "@/interfaces/dbData";

interface AboutBlocksProps {
    dataGlobal: ApiData;
}

const AboutBlocks: React.FC<AboutBlocksProps> = ({ dataGlobal }) => {
    //filtrar para obtener la section de home
    const aboutSection = dataGlobal?.sectionsHomeAbout.filter(
        (section: SectionsHomeAbout) => section.section === "about",
    );

    return (
        <div className="w-4/5 mx-auto md:w-11/12 md:mx-auto h-full flex flex-col md:flex-row justify-between relative z-20 py-20 text-white">
            <div className="aspect-auto h-[300px] md:h-[80vh] w-full md:w-1/2 relative">
                <LazyImage
                    src={aboutSection[0].additionalImages[0]}
                    alt="About us Image"
                    className="w-full md:w-2/3 h-full object-cover ml-auto rounded-xl"
                />
                <LazyImage
                    src={aboutSection[0].additionalImages[1]}
                    alt="About us Image"
                    className="w-[25%] h-3/5 object-cover ml-auto rounded-xl absolute -bottom-10 left-10 z-20 border-8 border-white shadow-lg hidden md:block"
                />
                <div className="w-[25%] h-3/5 bg-secondary ml-auto rounded-xl absolute -bottom-14 left-6 z-10 hidden md:block"></div>
                <div className="bg-primary border-t-[3px] border-primary rounded-b-full h-[160px] md:h-[220px] px-1 md:px-2 w-[100px] md:w-[150px] flex flex-col justify-center  absolute top-0 left-0 md:left-10">

                    <p className="text-center text-white font-bold text-base md:text-2xl">Experience OF</p>
                    <div className="w-[90px] md:w-[130px] h-[90px] md:h-[130px] bg-white mx-auto rounded-full mt-2 flex justify-center items-center">
                        <div className="w-[80px] md:w-[120px] h-[80px] md:h-[120px] border-2 border-primary border-dotted rounded-full flex justify-center items-center">
                            <p className="text-center text-secondary font-bold py-2 text-2xl md:text-5xl">{dataGlobal.yearsExperience}+</p>
                            {/* <picture>
                                <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-fc412.appspot.com/o/A%C3%B1os%20de%20experiencia%2F14%20A%C3%B1os.png?alt=media&token=b74ddd15-8729-4b62-8208-3f0f2ec40c2e"
                                className="w-32 h-auto"/>
                            </picture> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-2 py-10 md:pt-0 md:pl-20 flex flex-col justify-center group">
                <div className="pb-10 flex flex-col items-center md:items-start">
                    <div className="flex gap-5 items-center">

                        <span className=" font-semibold text-white bgGold px-6 py-1 text-xl rounded-lg capitalize">
                            <i className="fa-light fa-bolt pr-2"></i>About Us
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-5 text-center md:text-start">
                        {aboutSection[0].title}
                    </h2>
                    <div className="w-1/2 h-2 bg-slate-200 rounded-3xl px-1 relative mt-5">
                        <div className="w-5 h-2.5 rounded-full bg-primary absolute -top-[1px] group-hover:translate-x-64 transition-transform ease-out duration-1000"></div>
                    </div>
                    <p className="text-center md:text-justify mt-5">
                        {aboutSection[0].text}
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-[60%] pb-8 md:pb-0">
                        <ul className="pb-5">
                            {aboutSection[0].list.map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-primary font-medium py-2">
                                    <i className="fa-solid fa-check bg-secondary rounded-full text-white p-2"></i>
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="text-center md:text-start">
                            {
                                dataGlobal.widgets.onePages ? (
                                    <ButtonContent_2 titleBtn="Contact Us" linkBtn={`tel:+1${dataGlobal.dataGeneral.phones[0].number}`} />
                                ) : (
                                    <ButtonContent_2 />
                                )
                            }
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%] h-full flex justify-center">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutBlocks;