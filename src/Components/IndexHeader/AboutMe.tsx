import { motion } from "motion/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import TechStackDisplay from "../tech-stack-display/TechStackDisplay.tsx";


export default function AboutMe() {


    return <div className="py-15">
        <div className="max-w-5xl mx-auto px-6">

            {/*<h2 className="text-4xl font-heading md:text-5xl font-bold mb-2 text-center md:mr-3 md:text-left lg:ml-5 xl:mb-3 lg:text-center">*/}
            {/*    About Me*/}
            {/*</h2>*/}
            {/*<div*/}
            {/*    className="hidden md:block w-full bg-purple-complementary ml-1 rounded h-1 md:mb-5  lg:w-3/10 lg:mx-auto xl:mb-2">*/}
            {/*</div>*/}
            <div className="text-center md:mb-35">
                <div className="w-1 h-full rounded-full"></div>
                <motion.div
                    className="md:flex mb-3 md:flex-row p-2 rounded-xl md:p-1 md:mb-5 lg:p-5"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <div>
                        <p className="text-lg md:text-xl leading-relaxed mb-8 xl:text-2xl">
                            I am a full-stack developer with proficiency in languages and frameworks such as React,
                            Tailwind, C#, .NET, Python, Flask, JavaScript, TypeScript, and MS SQL.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed mb-8 xl:text-2xl">
                            I am currently in my final semester at Niagara College in the Computer Programming and Analyst
                            program, on track to graduate with honors. Through coursework, self-study, and freelance work,
                            I have gained experience collaborating with teams and applying computer science concepts.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed xl:text-2xl">
                            Outside of development, I enjoy playing video games, hiking, and discovering new music.
                        </p>
                    </div>
                </motion.div>
                <div>
                    <a href={'https://www.linkedin.com/in/zach-leitch-337b81339/'} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={'inline-block size-8 xl:size-12 mb-4 mr-2 hover:fill-purple-complementary'}/>
                    </a>
                    <a href={'https://github.com/Zachzzz'} target="_blank" rel="noopener noreferrer">
                        <FaGithub className={'inline-block size-8 xl:size-12 mb-4 hover:fill-purple-complementary'}/>
                    </a>
                </div>

            </div>
            <TechStackDisplay/>
        </div>

    </div>
}



