import type { ApiData } from "@/interfaces/dbData"
import ContactForm from "../contact/ContactForm";
import LazyImage from "@/components/LazyImage";


interface ContentContactProps {
    dataGlobal: ApiData;
    bgImage: string;
}

const ContentContact: React.FC<ContentContactProps> = ({ dataGlobal, bgImage }) => {
    return (
        <div className="w-full mx-auto h-full flex flex-col md:flex-row gap-5 relative mb-0 md:-mb-24">
            <div className="w-full md:w-1/3 bg-secondary py-24 md:py-32">
                <LazyImage
                    src={bgImage}
                    alt="Contact us"
                    className="w-full h-[300px] md:h-[650px] object-cover aspect-auto ml-0 md:ml-48 "
                    height={300}
                />
            </div>
            <div className="w-full md:w-2/3 flex flex-col items-end justify-center px-10">

                <div className="w-full md:w-3/5 p-5">
                    
                    <p className="text-5xl font-bold text-primary capitalize pb-5"><i className="fa-solid fa-envelopes text-3xl"></i> Get In Touch!</p>
                    <ContactForm dataGlobal={dataGlobal} formStyles="bg-white p-0 md:p-5 rounded-3xl" />
                </div>
            </div>
            
        </div>
    )

}

export default ContentContact;