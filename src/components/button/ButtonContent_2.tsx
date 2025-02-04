
interface ButtonContent2Props {
    titleBtn?: string;
    linkBtn?: string;
    btnstyle?: string;
    gmbUrl?: boolean;
}



const ButtonContent_2: React.FC<ButtonContent2Props> = ({ titleBtn, linkBtn, btnstyle, gmbUrl }) => {
    return (
        <div>
            
            <a href={`${linkBtn ? linkBtn : "/contact"}`} aria-label={titleBtn ? titleBtn : "Free Estimate"} className="relative group overflow-hidden inline-block border-none cursor-pointer bg-white text-gray-900 hover:text-white transition-colors duration-200 rounded-lg shadow-md w-52 h-12">

                <span className="flex items-center justify-center font-semibold relative overflow-hidden w-full h-full">
                    <span className="w-12 h-12 bgGold absolute top-0 left-0 group-hover:w-full group-hover:transition-width duration-500 group-hover:shadow-md flex justify-center items-center">
                        <i className="fa-light fa-bolt text-white text-lg absolute right-3.5 group-hover:right-10 transition-transform duration-500"></i>
                        <p className=' text-white text-sm -translate-x-24 group-hover:-translate-x-2 transition-transform duration-700'>{titleBtn ? titleBtn : "Free Estimate"}</p>
                    </span>
                    <p className=' text-black text-sm'>{titleBtn ? titleBtn : "Free Estimate"}</p>

                </span>
            </a>
        </div>

    );
}
export default ButtonContent_2;
