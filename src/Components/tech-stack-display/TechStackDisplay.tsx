import StackIcon from "tech-stack-icons";


export default function TechStackDisplay() {
    return <div className="mt-7 mb-5">
        <h2 className="text-4xl font-heading md:text-5xl font-bold mb-2 text-center md:mr-3 lg:ml-5 xl:mb-3">My Tech Stack</h2>
        <div
            className="hidden md:block w-full bg-purple-complementary ml-1 rounded h-1 md:mb-5  md:w-3/10 xl:mb-2 md:mx-auto">

        </div>

        <p className={"text-lg md:text-xl leading-relaxed mb-8 xl:text-2xl lg:p-5 text-center"}>
            My tech stack focuses on full stack web development and
            I have proficiency in many libraries, frameworks and tools related to my tech stack such as TanStack Router,
            Vite, EntityFramework, SQLAlchemy, Flask and more.
        </p>
        <div className="flex gap-2 flex-wrap  bg-primary-offset-opacity border border-primary-offset justify-center md:w-fit mx-auto md:rounded
        p-1 mt-3 mb-3 ">
            <StackIcon name="c#" className={'size-10'}/>
            <StackIcon name="react"  className={'size-10'}/>
            <StackIcon name="python"  className={'size-10'} variant={"grayscale"} />
            <StackIcon name="typescript"  className={'size-10'} />
            <StackIcon name="tailwindcss"  className={'size-10'} />
            <StackIcon name="flask" className={'size-10'} variant={"dark"} />
            {/*<StyledStackIcon name="java"  />*/}
            {/*<StyledStackIcon name="mongodb" />*/}
            {/*<StyledStackIcon name="flask"   variant={"dark"}/>*/}
            {/*<StyledStackIcon name="nextjs2"  variant={"grayscale"}/>*/}
            {/*<StyledStackIcon name="html5" />*/}
            {/*<StyledStackIcon name="css3" />*/}
            {/*<StyledStackIcon name="sass" />*/}
        </div>

    </div>

}

/*

<p>
                I have a strong hold on a variety of languages, frameworks and other technologies. Extremely comfortable
                in web development, front or back.
            </p>
 */