export default function ExperienceIndex() {
    return <div className={"flex flex-col h-fit min-h-full"}>
            {/*<h2*/}
            {/*    className={"font-bold text-3xl text-center mt-5 mb-10 font-heading "}>*/}
            {/*    My Experience*/}
            {/*</h2>*/}
            <div>
               <h3 className={'text-center font-heading text-2xl font-bold mb-5 md:text-4xl'}>Work Experience</h3>
                <ExperienceBlock
                    title={"Office Assistant"}
                    date={"(2018 - 2019)"}
                    establishment={"Coffee News"}
                    bullets={[
                        "Managed communication distribution and coordinated with departments.",
                        "Created content via WordPress.",
                        "Ensured accurate record-keeping, and used back-office systems for compliance and operational efficiency."
                    ]}
                />

                <ExperienceBlock
                    title={"Youth Accessibility Leader"}
                    date={"(2019 - 2024)"}
                    establishment={"ESDC"}
                    bullets={[
                        "Educated businesses about barriers to access, inclusion, participation, and belonging.",
                        "Presented effective solutions, wrote persuasive project proposals, managed applications, complied with policies and privacy laws, and facilitated implementation.",
                        "Increased awareness, accessibility, inclusivity, participation, and belonging, and directly impacted the lives of individuals with diverse abilities."
                    ]}
                />
                <h3 className={'text-center font-heading text-2xl font-bold mb-5 md:text-4xl'}>Education</h3>
                <ExperienceBlock title={"Computer Programming Analyst"}
                                 date={"(2023 - present)"}
                                 establishment={"Niagara College"}
                                 bullets={[
                                     "Design Patterns (MVC, DI, MVVM)",
                                     "REST Fundamentals",
                                     "OOP Principles",
                                     "Advanced T-SQL and MSSQL Server",
                                     "Networking & Operating Systems",
                                     "Test Driven Development",
                                     "Agile Development",
                                     "Community Sponsored Project: developed a web application using ASP.NET, C#, " +
                                     "JavaScript, SQL, HTML, and CSS, with a team of students, for a local charity.",
                                 ]}/>
            </div>
        </div>
}

type ExperienceBlockProps = {
    title:string;
    date:string;
    establishment:string;
    bullets:string[];
    listClass?:string;
    liClass?:string;
    wrapperClass?:string;
    titleClass?:string;
    establishmentClass?:string;
    dateClass?:string;
}

function ExperienceBlock(props:ExperienceBlockProps) {
    return <div className={props.wrapperClass || ' bg-primary-offset-opacity p-3 border-l border-green-primary mb-10 md:mx-auto md:w-9/10 md:mb-20 lg:w-8/10 xl:w-7/10'}>
        <p className={props.establishmentClass || 'mb-2 text-center text-2xl md:text-4xl '}>{props.establishment}</p>
        <p className={props.titleClass || 'text-center md:text-2xl'}>{props.title}</p>
        <p className={props.dateClass ||'text-center sm:text-sm text-green-primary block mb-5'}>{props.date}</p>
        <ul className={props.listClass || 'list-disc mx-auto  text-sm w-9/10 list-inside md:text-lg'}>
            {props.bullets.map(bullet => <li className={props.liClass || 'mb-1'} key={bullet}>{bullet}</li>)}
        </ul>
    </div>
}