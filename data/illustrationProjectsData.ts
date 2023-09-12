import {ICard, ITooltipIcons} from "../type";
import {
    SiAdobephotoshop
} from "react-icons/si";
import ConceptMonsterSlayer from "../resources/giovanna-nascimento-conceptmonsterslayer.jpg";
import ConceptKoby from "../resources/giovanna-nascimento-apresentacao-koby.jpg";
import ForestWallpaper from "../resources/giovanna-nascimento-udyr-background.jpg";
import {BsBrushFill} from "react-icons/bs";

const portalTowerTechlonogies: ITooltipIcons[] = [
    {
        tooltip:'Photoshop',
        Icon: SiAdobephotoshop
    },

]

const kobyTechlonogies: ITooltipIcons[] = [
    {
        tooltip:'PaintToolSai',
        Icon: BsBrushFill,
    },

]
const forestWallpaperTechlonogies: ITooltipIcons[] = [
    {
        tooltip:'PaintToolSai',
        Icon: BsBrushFill,
    },

]

export const projectsIllustration: ICard[] = [
    {
        title: "The Portal Tower",
        description: "Freelance concept art for ongoing game development. The idea was to create a composition that portrays" +
            " three magic portals inside an ancient abanded rock tower.",
        technologies: portalTowerTechlonogies,
        link: "https://www.artstation.com/artwork/JeRvK0",
        image: ConceptMonsterSlayer
    },
    {
        title: "Koby",
        description: "Concept art I created for my game design class during my 5th semester at college",
        technologies: kobyTechlonogies,
        link: "https://www.artstation.com/artwork/2836OY",
        image: ConceptKoby
    },
    {
        title: "Fall Forest",
        description: "This project was a freelancer made during my partnership with @harugraphcs(twitter). The idea was to create " +
            "a fall forest for a Twitch background.",
        technologies: forestWallpaperTechlonogies,
        link: "https://www.artstation.com/artwork/ea4ZNZ",
        image: ForestWallpaper
    },
]