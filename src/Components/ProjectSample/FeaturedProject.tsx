import {Link} from "@tanstack/react-router";
import type {ProjectSampleProps} from "./ProjectSample.tsx";
import TechStackIcon from "../tech-stack-display/TechStackIcon.tsx";


export function FeaturedProject(props:ProjectSampleProps){
    return <div className={"card-wrapper h-[635px] w-[280px] mx-auto md:h-[695px]  midxl:h-[975px] md:w-8/10 lg:h-[850px] xl:h-[895px] " +
        "  2xl:w-6/10 2xl:h-[985px]"}>
        <div className={'card-content'}>
            <h2 className={'font-heading font-semibold text-center text-2xl pt-1 lg:text-3xl mb-2'}>Featured Project!</h2>
            <div className={"flex flex-col  p-1"}>
                <div className={'mb-2  md:px-5 md:py-2 border-glacier-blue border bg-gradient-to-br w-fit mx-auto from-primary-offset-opacity from-50%" +\n' +
                    '        " via-glacier-blue via-550% pl-2'}>
                    <p className="text-center font-bold inline-block md:text-left text-xl">{props.title}</p>
                </div>
                <div>

                    <img loading={'eager'} className={'m-1 block mx-auto lg:p-10 xl:px-25'} src={props.images[0]} alt={`An image display of my project ${props.title}`}/>
                    <div className={'my-5 mx-auto w-fit flex flex-row gap-2'}>
                        {props.techStack.map(s => // for some reason pythons non-grayscale icons are broken
                            <TechStackIcon name={s}/>)}
                    </div>

                </div>

                <div className={'text-center p-1 mb-2 lg:p-3 lg:mx-auto xl:px-25 font-semibold'}>
                    {props.shortDescription}
                </div>
                <Link
                    className={'border-glacier-blue rounded font-semibold text-glacier-blue border mx-auto block w-fit mt-2 p-1 ' +
                        'hover:scale-110  hover:bg-gradient-to-br from-slate-800 from-50%  via-glacier-blue via-550%'}
                    to={`/projects/${props.title.replaceAll(" ", '-')}`}>
                    View Project
                </Link>
            </div>
        </div>
    </div>
}