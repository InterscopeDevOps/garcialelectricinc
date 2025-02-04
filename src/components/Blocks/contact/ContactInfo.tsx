import { RedesIcons } from "@/components/RedesIcons";
import type { DataGeneral, SocialMedia } from "@/interfaces/dbData";

interface ContactInfoProps {
    dataGeneral: DataGeneral;
    dataRedes: SocialMedia[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ dataGeneral, dataRedes }) => {
    return (
        <div>
            <div
                className=" bg-[#FBF9F6] rounded-xl grid grid-cols-1 lg:grid-cols-3"
            >
                <div
                    className="border rounded-tl-none lg:rounded-tl-xl flex flex-col justify-start items-center py-10"
                >
                    <span
                        className="bg-white shadow w-28 h-28 rounded-b-full border-t-[10px] border-btnHover flex justify-center items-center text-4xl text-secondary"
                    >
                        <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    <div>
                        {
                            dataGeneral.phones.map((phone, index) => (
                                <a
                                    key={index}
                                    href={`tel:${phone.number}`}
                                    className="text-xl font-bold text-primary block border-b pb-2  gap-1 mt-4 hover:text-tertiary transition-all duration-300 ease-in-out"
                                >
                                    {
                                        phone.title.length > 0 && (
                                            <span className="text-[18px] text-secondary block text-center font-semibold">{phone.title}</span>
                                        )
                                    }
                                    {phone.number}

                                </a>

                            ))
                        }
                    </div>
                </div>

                <div
                    className="border flex flex-col justify-start items-center py-10"
                >
                    <span
                        className="bg-white shadow w-28 h-28 rounded-b-full border-t-[10px] border-btnHover flex justify-center items-center text-4xl text-secondary"
                    >
                        <i className="fa-solid fa-envelope"></i>
                    </span>
                    <div>
                        {
                            dataGeneral.emails.map((email, index) => (
                                <a
                                    key={index}
                                    href={`mailto:${email.email}`}
                                    className="text-xl font-bold text-primary block border-b pb-2  gap-1 mt-4 hover:text-tertiary transition-all duration-300 ease-in-out"
                                >
                                    {
                                        email.title.length > 0 && (
                                            <span className="text-[18px] text-secondary block text-center font-semibold">{email.title}</span>
                                        )
                                    }
                                    {email.email}

                                </a>

                            ))
                        }
                    </div>
                </div>

                <div
                    className="border rounded-tr-none lg:rounded-tr-xl flex flex-col justify-start items-center py-10"
                >
                    <span
                        className="bg-white shadow w-28 h-28 rounded-b-full border-t-[10px] border-btnHover flex justify-center items-center text-4xl text-secondary"
                    >
                        <i className="fa-solid fa-calendar-clock"></i>
                    </span>
                    <div>
                        {
                            dataGeneral.openingHours.map((hour, index) => (
                                <div
                                    key={index}
                                    className="text-xl font-bold text-primary block border-b pb-2  gap-1 mt-4 hover:text-tertiary transition-all duration-300 ease-in-out"
                                >

                                    <span className="text-secondary block text-center font-semibold capitalize">{hour.days}</span>
                                    <span className="text-secondary text-[18px]  block text-center font-semibold capitalize">{hour.hours}</span>

                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className="bg-primary w-full rounded-b-full flex flex-col justify-center items-center pt-10 pb-20 md:py-10 ">
                <h2 className="text-white text-3xl font-bold text-center pb-5 capitalize">Follow us on</h2>
                <RedesIcons redesSociales={dataRedes} />
            </div>
        </div>
    )
};

export default ContactInfo;