import {Link} from "@tanstack/react-router";
import {useMediaQuery} from "usehooks-ts";
import TechStackIcon from "../tech-stack-display/TechStackIcon.tsx";


export type ProjectSampleProps = {
    title: string;
    shortDescription: string;
    longDescription: string;
    images: string[];
    gitHubUrl?: string;
    liveUrl?:string;
    featured?:boolean;
    techStack:string[]
}




export default function ProjectSample(props:ProjectSampleProps) {
    const matches = useMediaQuery('(min-width: 1280px)')

    return <div className={"mx-auto max-w-4/5  shadow-shadow-primary"}>

        <div className={'mb-2 py-2 border-glacier-blue border bg-gradient-to-br from-primary-offset-opacity from-50%" +\n' +
            '        " via-glacier-blue via-550% pl-2'}>
            <p className="text-center font-bold inline-block md:text-left mr-5 text-xl">{props.title}</p>
        </div>

        <div className={"md:grid md:grid-cols-2 md:gap-5 "}>
            <div>
                <img loading={'eager'} className="mx-auto block" src={props.images[0] || ""} alt={`A view of my project titled: ${props.title}`}/>
                <div className="w-fit mx-auto mt-3 md:mx-0 md:flex items-center gap-2 mb-3">
                    <Link
                        className={'border-glacier-blue rounded font-semibold text-glacier-blue border mx-auto block md:inline-block w-fit mt-2 px-4 py-1 md:mx-0 ' +
                            'hover:scale-110  hover:bg-gradient-to-br mb-4 md:px-6 from-slate-800 from-50%  via-glacier-blue via-550% md:mb-1'}
                        to={`/projects/${props.title.replaceAll(" ", '-')}`}>
                        View
                    </Link>
                    {props.techStack.map(s => // for some reason pythons non-grayscale icons are broken
                        <TechStackIcon name={s}/>)}
                </div>
            </div>
            <div>
                <p className="text-center mx-auto md:text-left  md:mx-0 midxl:text-lg 2xl:text-xl 2xl:pt-2 2xl:pl-2">
                    {matches ? props.longDescription : props.shortDescription}
                </p>

            </div>
        </div>

    </div>
}


