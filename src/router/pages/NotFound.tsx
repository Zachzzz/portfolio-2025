import {Link} from "@tanstack/react-router";

export default function NotFound(){
    return <div className="w-fit mx-auto text-center">
        <h2 className={'font-bold text-4xl'}>404</h2>
        <p>Looks like the content you were looking for doesn't exist.</p>
        <Link to="/">Go Home</Link>
    </div>
}