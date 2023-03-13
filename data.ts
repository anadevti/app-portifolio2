import {ICard, ISkill, ITooltipIcons} from "./type";
import {FaAws, FaJava, FaReact} from "react-icons/fa";
import {BsCircleFill, BsBrushFill} from "react-icons/bs";
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiArduino,
    SiBlender,
    SiC,
    SiCplusplus,
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiSiemens,
    SiSpring,
    SiStorybook,
    SiTypescript,
    SiUnity,
    SiMicrosoftoffice,
    SiWindows,
    SiPython,
    SiGraphql,
    SiKibana,
    SiSonarqube,
    SiNextdotjs, SiTailwindcss, SiMariadb
} from "react-icons/si";
import {TbBrandKotlin} from "react-icons/tb";
import {GrMysql} from "react-icons/gr";
import PortifolioImage from "/resources/Portifolio.png"

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


export const languages: ISkill[] = [
    {
        name: 'Python',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'Java Script',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'React',
        level: '65%',
        Icon: BsCircleFill
    },
    {
        name: 'Next',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'Java',
        level: '65%',
        Icon: BsCircleFill
    },
    {
        name: 'Kotlin',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'SpringBoot',
        level: '65%',
        Icon: BsCircleFill
    },
    {
        name: 'C',
        level: '40%',
        Icon: BsCircleFill
    },
    {
        name: 'C++',
        level: '50%',
        Icon: BsCircleFill
    },
]

export  const tools: ISkill[] = [
    {
        name:'Photoshop',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name:'Paint Tool Sai',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name:'Illustrator',
        level: '40%',
        Icon: BsCircleFill
    },
    {
        name:'Figma',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name:'Blender',
        level: '30%',
        Icon: BsCircleFill
    },
    {
        name:'Unity',
        level: '30%',
        Icon: BsCircleFill
    },
    {
        name:'Lader (PLC)',
        level: '70%',
        Icon: BsCircleFill
    },
]

export  const speakingLanguages: ISkill[] = [
    {
        name:'Portuguese - Native Speaker',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name:'English - Fluent',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name:'Spanish - Basic',
        level: '40%',
        Icon: BsCircleFill
    },
]
export const illustrationIcons: ITooltipIcons[] = [
    {
        tooltip:'PaintToolSai',
        Icon: BsBrushFill,
    },
    {
        tooltip:'Photoshop',
        Icon: SiAdobephotoshop,
    },
    {
        tooltip:'Illustrator',
        Icon: SiAdobeillustrator,
    },
]

export const hotmartIcons: ITooltipIcons[] = [
      {
           tooltip:'Kotlin',
            Icon: TbBrandKotlin
      },
       {
          tooltip:'Java',
           Icon: FaJava
        },
        {
            tooltip:'SpringBoot',
            Icon: SiSpring
        },
        {
            tooltip:'Amazon Web Services',
            Icon: FaAws
        },
        {
            tooltip:'MySQL',
            Icon: GrMysql
        },
        {
            tooltip:'JavaScript',
            Icon: SiJavascript
        },
        {
            tooltip:'TypeScript',
            Icon: SiTypescript
        },
        {
            tooltip:'React',
            Icon: FaReact
        },
        {
            tooltip:'Storybook',
            Icon: SiStorybook
        },

]

export const hotmartIconsDevI: ITooltipIcons[] = [
    {
        tooltip:'Kotlin',
        Icon: TbBrandKotlin
    },
    {
        tooltip:'Java',
        Icon: FaJava
    },
    {
        tooltip:'SpringBoot',
        Icon: SiSpring
    },
    {
        tooltip:'Amazon Web Services',
        Icon: FaAws
    },
    {
        tooltip:'MySQL',
        Icon: GrMysql
    },
    {
        tooltip:'GraphQL',
        Icon: SiGraphql
    },
    {
        tooltip:'Kibana',
        Icon: SiKibana
    },
    {
        tooltip:'SonarQube',
        Icon: SiSonarqube
    },

]

export const collegeIcons: ITooltipIcons[] = [
        {
            tooltip:'Siemens(PLC-Lader)',
            Icon: SiSiemens,
        },
        {
            tooltip:'C',
            Icon: SiC,
        },
        {
            tooltip:'C++',
            Icon: SiCplusplus,
        },
        {
            tooltip:'JavaScript',
            Icon: SiJavascript,
        },
        {
            tooltip:'HTML5',
            Icon: SiHtml5,
        },
        {
            tooltip:'CSS3',
            Icon: SiCss3,
        },
        {
            tooltip:'Unity',
            Icon: SiUnity,
        },
        {
            tooltip:'Blender',
            Icon: SiBlender,
        },
        {
            tooltip:'Arduino',
            Icon: SiArduino,
        },
        {
            tooltip:'Python',
            Icon: SiPython,
        },
]
export const schoolIcons: ITooltipIcons[] = [
    {
        tooltip:'Office (Word, Exel and PowerPoint)',
        Icon: SiMicrosoftoffice,
    },
    {
        tooltip:'Windows',
        Icon: SiWindows,
    },
]