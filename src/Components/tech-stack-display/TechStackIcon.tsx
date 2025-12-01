import { TbBrandCSharp } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import {SiFlask} from "react-icons/si";
import { SiTypescript } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri";
type TechStackIconProps = {
    name: string;
    className?: string;
}

export default function TechStackIcon(props:TechStackIconProps) {
    switch(props.name) {
        case "C#":
            return <TbBrandCSharp className={props.className || "size-8 md:size-12 inline-block text-[#9179E4]"}/>
        case "TypeScript":
            return <SiTypescript className={props.className || "size-8 md:size-12 inline-block  fill-[#3178c6]"} />
        case "Python":
            return <FaPython  className={props.className || "size-8 md:size-12 inline-block "} />
        case "Flask":
            return <SiFlask className={props.className || "size-8 md:size-12 inline-block "} />
        case "React":
            return <FaReact className={props.className || "size-8 md:size-12 inline-block fill-[#61dBF8]"} />
        case "TailwindCSS":
            return <RiTailwindCssFill className={props.className || "size-8 md:size-12 inline-block fill-[#06b6d4] "} />

        default:
            return null
    }
}