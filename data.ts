import {RiComputerLine} from "react-icons/ri";
import {IService, ISkill} from "./type";
import {FaTools} from "react-icons/fa";
import {AiOutlineApi} from "react-icons/ai";
import {MdDeveloperMode} from "react-icons/md";
import {AiOutlineAntDesign} from "react-icons/ai";
import {BsCircleFill} from "react-icons/bs";

export const services: IService[] = [
    {
        title: "Programming languages & Frameworks",
        about: "This section accomplishes some programing languages and frameworks I've studied and worked with over the last years ",
        Icon: RiComputerLine,
    },
    {
        title: "Backend Development",
        about: "This section accomplishes some programing languages and frameworks I've studied and worked with over the last years ",
        Icon: FaTools,
    },
]

export const languages: ISkill[] = [
    {
        name: 'Python',
        level: '55%',
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