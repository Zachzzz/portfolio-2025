import StackIcon from "tech-stack-icons";

type StyledStackIconProps = {
    name:string;
    variant?:"dark" | "light" | "grayscale"
}

export default function StyledStackIcon (props: StyledStackIconProps) {


    return <StackIcon name={props.name} variant={props.variant || "dark"} className="w-10 h-10"/>
}