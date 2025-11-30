import type {ReactNode} from "react";
import Footer, {type FooterProps} from "../../Footer.tsx";
import Nav, {type NavProps} from "../../Components/Nav/Nav.tsx";


type PageProps = {
    children: ReactNode;
    wrapperClassName?: string;
    mainClassName?: string;
    navProps?: NavProps;
    footerProps?: FooterProps;
}

export default function Page(props:PageProps) {
    return <div className={`min-h-full h-fit flex flex-col ${props.wrapperClassName || ''}`}>
        <Nav {...props.navProps} />
        <main className={props.mainClassName || ''}>
            {props.children}
        </main>
        <Footer {...props.footerProps} />
    </div>
}