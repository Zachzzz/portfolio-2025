import {projects} from "../../Components/ProjectSample/seedData.ts";
import ProjectSample from "../../Components/ProjectSample/ProjectSample.tsx";
import {FeaturedProject} from "../../Components/ProjectSample/FeaturedProject.tsx";

export default function ProjectsIndex() {

    return <div>
        <FeaturedProject {...projects[0]}/>
        <div className="flex flex-col mt-20 items-center gap-10 md:gap-25  ">
            {projects.map(p => p.featured ? null :
                <ProjectSample
                    title={p.title}
                    shortDescription={p.shortDescription}
                    longDescription={p.longDescription}
                    liveUrl={p.liveUrl}
                    techStack={p.techStack}
                    gitHubUrl={p.gitHubUrl}
                    images={p.images}/>)}
        </div>
    </div>
}