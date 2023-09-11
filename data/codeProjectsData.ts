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
    SiCss3,
    SiCplusplus,
    SiBootstrap
} from "react-icons/si";
import {TbBrandKotlin} from "react-icons/tb";
import PortifolioImage from "../resources/Portifolio.png";
import CrudImage from "../resources/crud2.png";
import JohnnyFive from "../resources/johnny-five.png";
import Kotlin from "../resources/kotlin.png";
import PlatformIO from "../resources/platformIO.png";
import PetFeeder from "../resources/petFeederFront.png";
import PortalEcommerce from "../resources/portal-eCommerce.png";

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
        tooltip:'SpringBoot',
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
const portalEcommerceTechnologies: ITooltipIcons[] = [
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
    {
        tooltip:"Bootstrap",
        Icon: SiBootstrap
    }

]

const esp32Technologies: ITooltipIcons[] = [
    {
        tooltip:'C++',
        Icon: SiCplusplus
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
        title: "Portal-eCommerce",
        description: "Mercado Livre inspirated project. It is an eCommerce app integrated with FakeStore API developed using only JS, HTML and CSS + Bootstrap.",
        technologies: portalEcommerceTechnologies,
        link: "https://github.com/Wegxx/portal-eCommerce2",
        image: PortalEcommerce
    },
    {
        title: "Front - [PoC] Iot-esp",
        description: "Front-end page that conects with a MQTT broker and comunicate through messages." +
            " These messages are read by the esp that uses specific times and comands to remotly control an automatic pet feeder.",
        technologies: portifolioTechlonogies,
        link: "https://github.com/Wegxx/iot-esp",
        image: PetFeeder
    },
    {
        title: "Back - [PoC] Iot-esp",
        description: "Back-end program deployed inside the ESP32." +
            " It conects the ESP to the MQQT broker and works as a listener to the messages saving specific times to activate and remotly control an automatic pet feeder.",
        technologies: esp32Technologies,
        link: "https://github.com/MateusAbu/Esp32_Iot_MQTTConnect",
        image: PlatformIO
    },
    {
        title: "Bytebank",
        description: "This project was created as a way of testing some Kotlin fundaments as part of my personal " +
            "development path with the language during my internship.",
        technologies: bytebankTechlonogies,
        link: "https://github.com/Wegxx/bytebank",
        image: Kotlin
    },
    {
        title: "Arduino-J5",
        description: "Small project that demonstrates how to use johnny-five lib. In this project, I used johnny-five to control " +
            "a servo motor using an arduino UNO.",
        technologies: arduinoJ5Techlonogies,
        link: "https://github.com/giovannanascimento-hotmart/Arduino-J5-master",
        image: JohnnyFive
    },
]