import {RiComputerLine} from "react-icons/ri";
import {IService, ISkill} from "./type";
import {FaServer} from "react-icons/fa";
import {AiOutlineApi} from "react-icons/ai";
import {MdDeveloperMode} from "react-icons/md";
import {AiOutlineAntDesign} from "react-icons/ai";
import {BsCircleFill} from "react-icons/bs";

export const services: IService[] = [
    {
        title: "Frontend Development",
        about: "Dont know <b>yet</b>",
        Icon: RiComputerLine,
    },
    {
        title: "Backend Development",
        about: "Dont Know yet",
        Icon: FaServer,
    },
    {
        title: "Api Development",
        about: "Dont Know yet",
        Icon: AiOutlineApi,
    },
    {
        title: "Competitive Coder",
        about: "Dont Know yet",
        Icon: MdDeveloperMode,
    },
    {
        title: "UI/UX Designer",
        about: "Dont Know yet",
        Icon: AiOutlineAntDesign,
    },
    {
        title: "Whatever",
        about: "Dont Know yet",
        Icon: RiComputerLine,
    },
]

export const languages: ISkill[] = [
    {
        name: 'Python',
        level: '60%',
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
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'C++',
        level: '60%',
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
]