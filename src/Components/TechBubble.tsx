type TechBubbleProps = {
    name:string;
    className?:string;
}

export default function TechBubble(props:TechBubbleProps) {

    return <div className={props.className + " font-semibold rounded p-1 font-white bg-black border"}>
        {props.name}
    </div>
}



