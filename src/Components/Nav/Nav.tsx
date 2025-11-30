import {Link} from "@tanstack/react-router";
import {experienceRoute, indexRoute, projectsRoute} from "../../router/routes.tsx";

export type NavProps = {
    headerClassName?: string;
    headingClassName?: string;
    navClassName?: string;
    topUnderlineClassName?: string;
    bottomUnderlineClassName?: string;
}

export default function Nav(props:NavProps) {
    return <header className={`${props.headerClassName}`}>
        <h1 className={`${props.headingClassName}`}>Zach Leitch</h1>
        <nav className={`${props.navClassName}`}>
            <Link to={indexRoute.to} className="hover:text-purple-complementary" activeProps={{className:"text-purple-complementary"}}>Home</Link>
            <Link to={experienceRoute.to} className="hover:text-green-primary" activeProps={{className:"text-green-primary"}}>Experience</Link>
            <Link to={projectsRoute.to} className="hover:text-glacier-blue" activeProps={{className:"text-glacier-blue"}}>My Projects</Link>
        </nav>
        <div className={props.topUnderlineClassName} />
        <div className={props.bottomUnderlineClassName} />
    </header>
}