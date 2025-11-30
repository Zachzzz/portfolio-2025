import type {ProjectSampleProps} from "../../Components/ProjectSample/ProjectSample.tsx";
import Carousel from "../../Components/Carousel/Carousel.tsx";
import {useLoaderData} from "@tanstack/react-router";
import StackIcon from "tech-stack-icons";




export default function ProjectView() {
    const data:ProjectSampleProps = useLoaderData({from:"/projects/$projectId"});


    return <div className="lg:mb-15">
        <h2 className={'text-center font-semibold font-heading text-xl mb-4 lg:text-3xl'}>{data.title}</h2>
        <Carousel
            wrapperClass="mb-3 md:px-10 lg:px-15 midxl:px-55 xl:pb-10"
            images={data.images.map(s => {return {src:s, alt:""}})}/>
        <hr className={'text-glacier-blue w-6/10 mx-auto h-2 lg:mb-15'} />
        <div className={'flex flex-row gap-2 justify-center mt-5 lg:mb-5'}>
            {data.techStack.map(t =>
                <StackIcon
                    className={'size-10 lg:size-12'}
                    name={t.toLowerCase()}
                    variant={t === "Flask" ? "dark" : "light"}/>)}
        </div>
        <p className={'text-center p-5 lg:px-25 lg:text-xl xl:px-50 2xl:px-75'}>
            {data.longDescription}
        </p>
    </div>
}