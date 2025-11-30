import {useRouterState} from "@tanstack/react-router";
import {CiAt} from "react-icons/ci";
import {FaGithub, FaLinkedin} from "react-icons/fa";

export type FooterProps = {
    className?: string;
}


export default function Footer(props:FooterProps) {
    const routerState = useRouterState();
    let fill = "fill-purple-complementary";
    let border = "border-purple-complementary"
    let bkg = "from-primary from-50% via-purple-complementary via-250%"
    switch (routerState.location.pathname) {
        case"/":
            fill ="fill-purple-complementary";
            border ="border-purple-complementary";
            bkg = "from-primary from-50% via-purple-complementary via-250%"
            break;
        case "/experience":
            fill = "fill-green-complementary";
            border ="border-green-complementary";
            bkg = "from-primary from-50% via-green-complementary via-250%"
            break;
        case "/projects":
            fill = "fill-glacier-blue-complementary";
            border ="border-glacier-blue-complementary";
            bkg = "from-primary from-50% via-glacier-blue-complementary via-250%"
            break;

    }
    return <footer className={`${props.className} relative m-3 mt-auto bg-primary flex flex-col items-center border rounded pb-1 bg-gradient-to-tr ${bkg} ${border}`}>
        <p>Contact Me:</p>
        <span><CiAt className={"inline size-6  " + fill}/> zachztl1@gmail.com</span>
        <div>
            <a className={'absolute top-3 left-3'} href={'https://www.linkedin.com/in/zach-leitch-337b81339/'} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={'inline-block size-8 xl:size-12 mb-4 mr-2 ' + fill}/>
            </a>
            <a className={'absolute top-3 right-3'} href={'https://github.com/Zachzzz'} target="_blank" rel="noopener noreferrer">
                <FaGithub className={'inline-block size-8 xl:size-12 mb-4 ' + fill}/>
            </a>
        </div>
    </footer>
}