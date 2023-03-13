import {ICard, ITooltipIcons} from "../type";
import {FaReact} from "react-icons/fa";
import {SiMariadb, SiNextdotjs, SiSpring, SiTailwindcss, SiTypescript} from "react-icons/si";
import {TbBrandKotlin} from "react-icons/tb";
import PortifolioImage from "../resources/Portifolio.png";

const portifolioTechlonogies: ITooltipIcons[] = [
    {
        tooltip:'React',
        Icon: FaReact
    },
    {
        tooltip:'TypeScript',
        Icon: SiTypescript
    },
    {
        tooltip:'Next.js',
        Icon: SiNextdotjs
    },
    {
        tooltip:'TailindCSS',
        Icon: SiTailwindcss
    },

]

const userRegisterApiTechlonogies: ITooltipIcons[] = [
    {
        tooltip:'Kotlin',
        Icon: TbBrandKotlin
    },
    {
        tooltip:'SprringBoot',
        Icon: SiSpring
    },
    {
        tooltip:'MariaDB',
        Icon: SiMariadb
    },

]

export const projects: ICard[] = [
    {
        title: "Portifolio",
        description: "Literraly THIS PORTIFOLIO. Here is the code for all the features I developed in this app",
        technologies: portifolioTechlonogies,
        link: "https://github.com/Wegxx/app-portifolio2",
        image: PortifolioImage
    },
    {
        title: "User-register-api",
        description: "Small CRUD api developed for testing my knowledge acquired during my first year of internship",
        technologies: userRegisterApiTechlonogies,
        link: "https://github.com/Wegxx/user-register-api",
        image: PortifolioImage
    },
    {
        title: "User-register-api",
        description: "Small CRUD api developed",
        technologies: userRegisterApiTechlonogies,
        link: "https://github.com/Wegxx/user-register-api",
        image: PortifolioImage
    },
]