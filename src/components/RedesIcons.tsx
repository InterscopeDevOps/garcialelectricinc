import type { SocialMedia } from "../interfaces/dbData";

interface RedesSocialProps {
  redesSociales: SocialMedia[] | undefined;
  bgColor?: boolean;
  textColor?: string;
}

export const RedesIcons: React.FC<RedesSocialProps> = ({ redesSociales, bgColor, textColor }) => {
  return (
    <div className={`flex items-center ${bgColor ? 'gap-2 md:gap-3' : 'gap-5'}`}>
      {redesSociales && redesSociales.map((redSocial) => (
        <a
          key={redSocial._id}
          href={redSocial.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${textColor ? textColor : 'text-white'}  ${bgColor ? 'bg-btnColor rounded-full px-3.5 py-2.5 md:py-2 text-sm md:text-lg text-white' : 'text-xl hover:text-btnHover'} transition-all duration-300 hover:-translate-y-1.5 `}
          aria-label={`Visitar nuestro perfil en ${redSocial.name}`}
        >
          <i className={`fab fa-${redSocial.icon}`}></i>
        </a>
      ))}
    </div>

  );
};

