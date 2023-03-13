import {ICard, ITooltipIcons} from "../type";
import {FaReact} from "react-icons/fa";
import {
    SiMariadb,
    SiNextdotjs,
    SiSpring,
    SiTailwindcss,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3
} from "react-icons/si";
import {TbBrandKotlin} from "react-icons/tb";
import PortifolioImage from "../resources/Portifolio.png";
import CrudImage from "../resources/crud2.png";
import JohnnyFive from "../resources/johnny-five.png";
import Kotlin from "../resources/kotlin.png";
import Interrogation from "../resources/interrogation.jpg";

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

const arduinoJ5Techlonogies: ITooltipIcons[] = [
    {
        tooltip:'JavaScript',
        Icon: SiJavascript
    },
    {
        tooltip:'HTML5',
        Icon: SiHtml5
    },
    {
        tooltip:'CSS3',
        Icon: SiCss3
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

const bytebankTechlonogies: ITooltipIcons[] = [
    {
        tooltip:'Kotlin',
        Icon: TbBrandKotlin
    }

]

export const projects: ICard[] = [
    {
        title: "Portifolio",
        description: "Literraly THIS PORTIFOLIO. Here is the code for all the features I developed in this app.",
        technologies: portifolioTechlonogies,
        link: "https://github.com/Wegxx/app-portifolio2",
        image: PortifolioImage
    },
    {
        title: "User-register-api",
        description: "Small CRUD api developed for testing my knowledge acquired during my first year of internship.",
        technologies: userRegisterApiTechlonogies,
        link: "https://github.com/Wegxx/user-register-api",
        image: CrudImage
    },
    {
        title: "Arduino-J5",
        description: "Small project that demonstrates how to use johnny-five lib. In this project, I used johnny-five to control " +
            "a servo motor using an arduino UNO.",
        technologies: arduinoJ5Techlonogies,
        link: "https://github.com/giovannanascimento-hotmart/Arduino-J5-master",
        image: JohnnyFive
    },
    {
        title: "Bytebank",
        description: "This project was created as a way of testing some Kotlin fundaments as part of my personal " +
            "development path with the language during my internship",
        technologies: bytebankTechlonogies,
        link: "https://github.com/Wegxx/bytebank",
        image: Kotlin
    },
    {
        title: "Iot-esp",
        description: "On going iot project using ESP32 I'm developing for college during my 7th semester.",
        technologies: portifolioTechlonogies,
        link: "https://github.com/Wegxx/iot-esp",
        image: Interrogation
    },
]