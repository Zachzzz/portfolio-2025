import {createRootRoute, createRoute, createRouter} from "@tanstack/react-router";
import Index from "./pages/Index.tsx";
import ProjectsIndex from "./pages/ProjectsIndex.tsx";
import ExperienceIndex from "./pages/ExperienceIndex.tsx";
import Page from "./pages/Page.tsx";
import ProjectView from "./pages/ProjectView.tsx";
import {getProject} from "../Components/ProjectSample/seedData.ts";
import NotFound from "./pages/NotFound.tsx";



export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () =>
            <Page wrapperClassName={"bg-gradient-to-bl from-primary from-50% via-purple-primary via-170%"}
                  mainClassName={'mb-5'}
            navProps={{headerClassName:"bg-gradient-to-tr from-primary from-75% via-purple-primary via-170%",
                navClassName:"flex gap-5 mx-auto w-fit p-5",
                bottomUnderlineClassName:"w-9/10 bg-gradient-to-r from-primary from-50% via-purple-primary via-170% mx-auto h-[2px] mt-1 rounded",
            topUnderlineClassName:"w-9/10 bg-gradient-to-l from-primary from-50% via-purple-primary via-170% mx-auto h-[2px] mt-1 rounded",
            headingClassName:"bg-gradient-to-r from-white 10% to-purple-primary block font-bold text-3xl text-center mt-5 mb-3 font-heading" +
                " text-transparent bg-clip-text block font-bold text-3xl text-center mt-5 mb-3 font-heading text-transparent bg-clip-text"}}>
                <Index />
            </Page>
})


export const experienceRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/experience',
    component: () =>
        <Page
            wrapperClassName={"bg-gradient-to-bl from-primary from-50% via-green-primary via-500%"}
            mainClassName={'mb-5'}
            navProps={{headerClassName:"bg-gradient-to-tr from-primary from-75% via-green-primary via-170% mb-10",
                navClassName:"flex gap-5 mx-auto w-fit p-5",
                bottomUnderlineClassName:"w-9/10 bg-gradient-to-r from-primary from-50% via-green-primary via-170% mx-auto h-[2px] mt-1 rounded",
                topUnderlineClassName:"w-9/10 bg-gradient-to-l from-primary from-50% via-green-primary via-170% mx-auto h-[2px] mt-1 rounded",
                headingClassName:"bg-gradient-to-r from-white 10% to-green-primary block font-bold text-3xl text-center mt-5 mb-3 font-heading" +
                    " text-transparent bg-clip-text block font-bold text-3xl text-center mt-5 mb-3 font-heading text-transparent bg-clip-text"}}>
            <ExperienceIndex/>
        </Page>,
})


export const projectsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/projects/',
    component: () =>
        <Page //
            wrapperClassName={"bg-radial from-primary from-50% via-glacier-blue via-450%"}
            mainClassName={'mb-5'}
            navProps={{headerClassName:"bg-gradient-to-tr from-primary from-75% via-glacier-blue via-150% mb-5",
                navClassName:"flex gap-5 mx-auto w-fit p-5 ",
                bottomUnderlineClassName:"w-9/10 bg-gradient-to-r from-primary from-50% via-glacier-blue via-170% mx-auto h-[2px] mt-1 rounded",
                topUnderlineClassName:"w-9/10 bg-gradient-to-l from-primary from-50% via-glacier-blue via-170% mx-auto h-[2px] mt-1 rounded",
                headingClassName:"bg-gradient-to-r from-white 10% to-glacier-blue block font-bold text-3xl text-center mt-5 mb-3 font-heading" +
                    " text-transparent bg-clip-text block font-bold text-3xl text-center mt-5 mb-3 font-heading text-transparent bg-clip-text"}}>
            <ProjectsIndex/>
        </Page>,
})


export const projectsViewRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/projects/$projectId',
    loader:({params}) => {return getProject(params.projectId)},
    component: () =>
        <Page //
            navProps={{headerClassName:"bg-gradient-to-tr from-primary from-75% via-glacier-blue via-150% mb-15",
                navClassName:"flex gap-5 mx-auto w-fit p-5 ",
                bottomUnderlineClassName:"hidden w-9/10 bg-gradient-to-r from-primary from-50% via-glacier-blue via-170% mx-auto h-[2px] mt-1 rounded",
                topUnderlineClassName:"hidden w-9/10 bg-gradient-to-l from-primary from-50% via-glacier-blue via-170% mx-auto h-[2px] mt-1 rounded",
                headingClassName:"bg-gradient-to-r from-white 10% to-glacier-blue block font-bold text-3xl text-center mt-5 mb-3 font-heading" +
                    " text-transparent bg-clip-text block font-bold text-3xl text-center mt-5 mb-3 font-heading text-transparent bg-clip-text"}}
            wrapperClassName={"bg-radial from-primary from-50% via-glacier-blue via-450%"}
            mainClassName={'mb-5'}>
            <ProjectView />
        </Page>,
})



const rootRoute = createRootRoute()
const routeTree = rootRoute.addChildren([indexRoute, experienceRoute, projectsRoute, projectsViewRoute])
export const router = createRouter({ routeTree, scrollRestoration: true,
    defaultNotFoundComponent:() => {
        return <Page
            wrapperClassName={'bg-gradient-to-b from-primary from-50% via-blue-500 via-170%'}
            mainClassName={'mb-5'}>
            <NotFound/>
        </Page>
    } })

