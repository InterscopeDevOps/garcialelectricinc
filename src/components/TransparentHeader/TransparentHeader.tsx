import LazyImage from "../LazyImage";

interface TransparentHeaderProps {
    bgImages: string;
    title: string;

}

const TransparentHeader: React.FC<TransparentHeaderProps> = ({ bgImages, title }) => {
    return (
        <div
            className="w-full h-[350px] md:h-[500px] relative before:absolute before:z-10 before:w-full before:h-full before:top-0 before:left-0 before:bg-black/40 flex flex-col justify-center items-center overflow-hidden"
        >
            <div className="absolute w-full h-full">
                <LazyImage
                    src={bgImages}
                    alt={"images about"}
                    height={350}
                    className="w-full h-[350px] md:h-[500px] object-cover object-center"
                    imgLoading="eager"
                />
            </div>
            <div className="w-[90%] md:w-3/5 h-[80vh] bg-gradient-to-tl from-primary from-[20%] to-black/5 absolute z-20 rounded-full rotate-45 md:rotate-0 -top-64 md:-top-12 left-12 md:-left-44"></div>
            <div className="absolute z-30 left-[20%]">
                <h1 className="text-5xl font-bold text-whit z-10 capitalize text-center text-white">
                    {title}
                </h1>
                <div className="flex space-x-1 ml-4">
                    <a
                        href="/" className="text-white font-bold text-sm md:text-lg  hover:text-tertiary transition-all duration-300 ease-in-out"
                        aria-label="Home Page"
                    >
                        Home /
                    </a>
                    <p className="text-white font-bold text-sm md:text-lg  underline underline-offset-8 capitalize">
                        {title}
                    </p>
                </div>
            </div>

            
        </div>
    );
}


export default TransparentHeader;