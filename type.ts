import {IconType} from "react-icons";
import {StaticImageData} from "next/image";

export interface ITooltipIcons {
    tooltip: string,
    Icon: IconType
}

export interface ICard{
    title: string,
    description: string,
    technologies: ITooltipIcons[],
    link: string,
    image: StaticImageData
}

export interface ISkill {
    name: string,
    level: string,
    Icon: IconType
}