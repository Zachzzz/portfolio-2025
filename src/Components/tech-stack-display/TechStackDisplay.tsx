import {TbBrandCSharp} from "react-icons/tb";
import {SiFlask, SiTypescript} from "react-icons/si";
import {FaPython, FaReact} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";


export default function TechStackDisplay() {
     return <div className="mt-7 mb-5">
        <h2 className="text-4xl font-heading md:text-5xl font-bold mb-2 text-center md:mr-3 lg:ml-5 xl:mb-3">My Tech Stack</h2>
        <div
            className="hidden md:block w-full bg-purple-complementary ml-1 rounded h-1 md:mb-5  md:w-3/10 xl:mb-2 md:mx-auto">

        </div>

        <p className={"text-lg md:text-xl leading-relaxed mb-8 xl:text-2xl lg:p-5 text-center"}>
            My tech stack focuses on full stack web development and
            I have proficiency in many libraries, frameworks and tools related to my tech stack such as TanStack Router,
            Vite, EntityFramework, SQLAlchemy, Flask, ASP.NET (MVC) and more.
        </p>
        <div className="flex gap-2 flex-wrap  bg-primary-offset-opacity border border-primary-offset justify-center md:w-fit mx-auto md:rounded
        p-1 mt-3 mb-3 ">
            <TbBrandCSharp className={"size-8 md:size-12 inline-block  text-[#9179E4]"}/>
             <SiTypescript className={"size-8 md:size-12 inline-block  fill-[#3178c6]"} />
             <FaPython  className={"size-8 md:size-12 inline-block "} />
             <SiFlask className={"size-8 md:size-12 inline-block "} />
             <FaReact className={"size-8 md:size-12 inline-block fill-[#61dBF8]"} />
             <RiTailwindCssFill className={"size-8 md:size-12 inline-block fill-[#06b6d4] "} />
        </div>

    </div>

}

/*

<p>
                I have a strong hold on a variety of languages, frameworks and other technologies. Extremely comfortable
                in web development, front or back.
            </p>
 */