import type { ApiData, SectionsHomeAbout } from "@/interfaces/dbData";
import { RedesIcons } from "../RedesIcons";
import EliminarCaracteresEspeciales from "@/hook/EliminarCaracteresEspeciales";
import React, { useState } from "react";
import ButtonContent from "../button/ButtonContent_2";

interface FootersContentProps {
    dataGlobal: ApiData;
}

const FootersContent: React.FC<FootersContentProps> = ({ dataGlobal }) => {

    const [message, setMessage] = useState('');

    //filtrar para obtener la section de about
    const aboutSection = dataGlobal?.sectionsHomeAbout.filter(
        (section: SectionsHomeAbout) => section.section === "about",
    );

    const landingServices = dataGlobal.widgets.landingServices;

    const dataPhone = dataGlobal?.dataGeneral.phones
    const dataEmail = dataGlobal?.dataGeneral.emails
    const dataAddress = dataGlobal?.dataGeneral.location
    const dataOpeningHours = dataGlobal?.dataGeneral.openingHours

    const reviewsPages = dataGlobal.reviews.stateReviews && dataGlobal.reviews.viewAll;
    const videoPages = dataGlobal.widgets.landingVideos;
    const blogPages = dataGlobal.widgets.blog;

    const onePages = dataGlobal.widgets.onePages;


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (dataPhone.length > 0) {
            const relmsg = message.replace(/ /g, "%20");
            const phone = dataPhone[0].number
                .replace("-", "")
                .replace("-", "");

            window.open(`https://wa.me/1${phone}?text=` + relmsg, "_blank");
            setMessage("");
        } else {
            console.log("Número de teléfono no disponible.");
        }
    };


    return (
        <div>
            <div className="w-full md:w-[70%] mx-auto flex flex-col md:flex-row gap-5 relative z-10 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/70 before:rounded-3xl px-5 md:px-10 py-10 -mb-20 md:-mb-28 shadow-lg rounded-3xl"
                style={{
                    backgroundImage: `url(${dataGlobal.gallery[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="w-full md:w-4/5 relative">
                    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5 pb-3">
                        <p className="text-gray-200 text-xl md:text-2xl font-bold capitalize">{dataGlobal.name}</p>
                        <div className="w-[15%] border-b-2 border-gray-200"></div>
                    </div>
                    <h3 className="text-2xl md:text-5xl font-bold text-white text-center md:text-start pb-8 capitalize">{dataGlobal.slogan[1]}</h3>
                </div>
                <div className="w-full md:w-1/5 flex items-center justify-center relative">
                    <ButtonContent titleBtn="Call us now" linkBtn={`tel:+1${dataPhone ? dataPhone[0].number : 'Contact Us'}`} />
                </div>
            </div>
            <div
                className="w-full h-full overflow-hidden relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/90"
                style={{
                    backgroundImage: `url(/assets/images/stockWeb/footer.png)`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="relative w-4/5 mx-auto h-full mt-16 md:mt-36 pt-10 pb-0 md:py-10">
                    <div className="w-full h-full flex flex-col md:flex-row gap-5">
                        <div className="w-full h-full md:w-[30%] bg-btnColor flex flex-col justify-center items-center gap-5 px-5 py-14 rounded-3xl">
                            <picture className="w-full h-full" >
                                <img
                                    src={dataGlobal.logos.primary}
                                    className="w-full h-full object-contain"
                                    alt="logo"
                                    loading="lazy"
                                    width={200}
                                    height={200}
                                />
                            </picture>
                            <p className="text-center pb-3 text-white">
                                {(() => {
                                    const text = aboutSection[0].text;
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

                        </div>

                        <div className="w-full md:w-[20%] pt-3 md:pt-14 pl-0 md:pl-5 group">
                            <h3 className="text-white text-center md:text-left text-3xl font-bold mt-3 md:mt-0 capitalize">Get In Touch</h3>
                            <div className="w-2/5 h-1 bg-slate-200 rounded-3xl px-1 relative mt-2 mb-5  mx-auto md:mx-0">
                                <div className="w-5 h-2 rounded-full bg-primary absolute -top-[2px] group-hover:translate-x-10 transition-transform ease-out duration-1000"></div>
                            </div>
                            <ul>
                                {dataAddress && dataAddress.length > 0 && (
                                    <li className="mb-5 text-white font-medium flex items-center gap-2">
                                        <i className="fa-solid fa-map-location-dot text-lg"></i>
                                        <p className="capitalize ">
                                            {dataAddress.slice(0, 4).map((address, index) => (
                                                <span key={index}>
                                                    {index > 0 && <span className="text-gray-400 mx-1">|</span>}
                                                    {address.city}
                                                </span>
                                            ))}
                                        </p>
                                    </li>
                                )}
                                {
                                    dataPhone && dataPhone.length > 0 && dataPhone.slice(0, 2).map((phone, index) => (
                                        <li key={index} className="mb-5 text-white font-medium hover:text-primary transition-all duration-300 ease-in-out">
                                            <a
                                                href={`tel:+1${phone.number}`}
                                                className="flex items-center gap-2"
                                                aria-label="phone number"
                                            >
                                                <i className="fa-solid fa-phone text-lg"></i>
                                                <p>{phone.number}</p>
                                                {
                                                    phone.title && (
                                                        <p>
                                                            <span className="text-gray-400  mr-1">|</span>
                                                            {phone.title}
                                                        </p>
                                                    )
                                                }
                                            </a>

                                        </li>
                                    ))
                                }
                                {
                                    dataEmail && dataEmail.length > 0 && dataEmail.slice(0, 3).map((email, index) => (
                                        <li key={index} className="mb-5 text-white font-medium hover:text-primary transition-all duration-300 ease-in-out">
                                            <a
                                                href={`mailto:${email.email}`}
                                                className="flex items-center gap-2"
                                                aria-label="email"
                                                style={{
                                                    maxWidth: '100%',
                                                    textAlign: 'start',
                                                    overflowWrap: 'break-word',
                                                    wordBreak: 'break-all' // Cortar el texto en cualquier carácter
                                                }}
                                            >
                                                <i className="fa-solid fa-envelope text-lg"></i>
                                                <p>{email.email}</p>
                                            </a>
                                        </li>
                                    ))
                                }
                                {
                                    dataOpeningHours && dataOpeningHours.length > 0 && dataOpeningHours.slice(0, 2).map((hour, index) => {
                                        return (
                                            <li key={index} className="mb-5 text-white font-medium">
                                                <p className="flex items-center gap-2">
                                                    <i className="fa-solid fa-calendar-clock"></i>
                                                    <span className="flex flex-col">

                                                        <span>{hour.days}</span>
                                                        <span>{hour.hours}</span>
                                                    </span>
                                                </p>
                                            </li>
                                        )
                                    })

                                }
                            </ul>


                        </div>

                        <div className="w-full md:w-[20%] pt-5 md:pt-14 group">
                            <h3 className="text-white text-center md:text-left text-3xl font-bold mt-4 md:mt-0 capitalize">Services</h3>
                            <div className="w-2/5 h-1 bg-slate-200 rounded-3xl px-1 relative mt-2 mb-5  mx-auto md:mx-0">
                                <div className="w-5 h-2 rounded-full bg-primary absolute -top-[2px] group-hover:translate-x-10 transition-transform ease-out duration-1000"></div>
                            </div>
                            <ul>
                                {
                                    dataGlobal.services.slice(0, 6).map((service, index) => (
                                        <li key={index} className="mb-5 text-xl">
                                            <a
                                                href={
                                                    onePages ? `tel:+1${dataPhone[0].number}` :
                                                        landingServices ? `/services/${EliminarCaracteresEspeciales(service.title)}` : `/services/#${EliminarCaracteresEspeciales(service.title)}`
                                                }
                                                className="text-white capitalize font-medium hover:text-primary"
                                                aria-label="service link"
                                            >
                                                <i className="fa-solid fa-circle-chevron-right pr-2"></i>
                                                {service.title}

                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="w-full md:w-[30%] pt-5 md:pt-14 group">
                            <h3 className="text-white text-center md:text-left text-3xl font-bold mt-4 md:mt-0 capitalize">
                                Send us a message
                            </h3>
                            <div className="w-2/5 h-1 bg-slate-200 rounded-3xl px-1 relative mt-2 mb-5  mx-auto md:mx-0 ">
                                <div className="w-5 h-2 rounded-full bg-primary absolute -top-[2px] group-hover:translate-x-10 transition-transform ease-out duration-1000"></div>
                            </div>

                            <form onSubmit={handleSubmit} className="relative w-full">
                                <input
                                    type="text"
                                    className="w-full p-4 pr-[65px] md:pr-[180px] border rounded-full"
                                    placeholder="Write Your Message Here..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1 bottom-1 bg-primary text-white py-2 px-4 rounded-full hover:bg-btnHover transition-all duration-300 ease-in-out flex items-center gap-0 md:gap-2"
                                    aria-label="Send message"
                                >
                                    <i className="fa-solid fa-paper-plane"></i>
                                    <span className="font-semibold capitalize hidden md:block">Send message</span>
                                </button>
                            </form>
                            <div className="flex flex-col justify-center items-center md:items-start">
                                <p className="text-white font-medium text-center mt-5 text-xl capitalize">Follow us now</p>
                                {
                                    dataGlobal?.redesSociales.length > 0 && (
                                        <div className="flex justify-center pt-5">
                                            <RedesIcons redesSociales={dataGlobal?.redesSociales} bgColor />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="border-t-[5px] border-tertiary mt-10 py-5 flex flex-col md:flex-row justify-between items-center">
                        {
                            !onePages && (
                                <ul className="flex gap-3 md:hidden pb-8">
                                    <li className="text-white font-semibold text-center md:text-start text-sm">
                                        <a href="/" className="hover:text-tertiary transition-all duration-300 ease-in-out">Home</a>
                                    </li>
                                    <li className="text-white font-semibold text-center md:text-start text-sm">
                                        <a href="/about" className="hover:text-tertiary transition-all duration-300 ease-in-out">About</a>
                                    </li>
                                    {
                                        blogPages && (
                                            <li className="text-white font-semibold text-center md:text-start text-sm">
                                                <a href="/blog" className="hover:text-tertiary transition-all duration-300 ease-in-out">Blog</a>
                                            </li>
                                        )
                                    }
                                    {
                                        videoPages && (
                                            <li className="text-white font-semibold text-center md:text-start text-sm">
                                                <a href="/videos" className="hover:text-tertiary transition-all duration-300 ease-in-out">Videos</a>
                                            </li>
                                        )
                                    }
                                    {
                                        reviewsPages && (
                                            <li className="text-white font-semibold text-center md:text-start text-sm">
                                                <a href="/reviews" className="hover:text-tertiary transition-all duration-300 ease-in-out">Reviews</a>
                                            </li>
                                        )
                                    }
                                    <li className="text-white font-semibold text-center md:text-start text-sm">
                                        <a href="/contact" className="hover:text-tertiary transition-all duration-300 ease-in-out">Contact</a>
                                    </li>
                                </ul>
                            )
                        }

                        <p className="text-white font-semibold text-center md:text-start py-5 md:py-0">
                            <span>Copy© {new Date().getFullYear()} {dataGlobal?.name}. All Rights Reserved.</span>
                        </p>
                        {
                            !onePages && (
                                <ul className="md:flex gap-3 hidden">
                                    <li className="text-white font-semibold text-center md:text-start">
                                        <a href="/" className="hover:text-tertiary transition-all duration-300 ease-in-out">Home</a>
                                    </li>
                                    <li className="text-white font-semibold text-center md:text-start">
                                        <a href="/about" className="hover:text-tertiary transition-all duration-300 ease-in-out">About</a>
                                    </li>
                                    {
                                        blogPages && (
                                            <li className="text-white font-semibold text-center md:text-start">
                                                <a href="/blog" className="hover:text-tertiary transition-all duration-300 ease-in-out">Blog</a>
                                            </li>
                                        )
                                    }
                                    {
                                        videoPages && (
                                            <li className="text-white font-semibold text-center md:text-start">
                                                <a href="/videos" className="hover:text-tertiary transition-all duration-300 ease-in-out">Videos</a>
                                            </li>
                                        )
                                    }
                                    {
                                        reviewsPages && (
                                            <li className="text-white font-semibold text-center md:text-start">
                                                <a href="/reviews" className="hover:text-tertiary transition-all duration-300 ease-in-out">Reviews</a>
                                            </li>
                                        )
                                    }
                                    <li className="text-white font-semibold text-center md:text-start">
                                        <a href="/contact" className="hover:text-tertiary transition-all duration-300 ease-in-out">Contact</a>
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}
export default FootersContent;