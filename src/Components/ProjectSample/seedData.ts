import type {ProjectSampleProps} from "./ProjectSample.tsx";


export function getProject(title:string):ProjectSampleProps{
    const item = projects.filter(s => s.title.replaceAll(" ", "-") === title)[0];
    return item;
}



export const projects: ProjectSampleProps[] = [
    {
        title: "Pokemon Battle Simulator",
        shortDescription: "A full-stack Pokémon battle simulator built with React, Tailwind, Flask, Python, Socket.io and, SQLAlchemy + SQLlite. It features all major game mechanics up to Generation 7, a functional teambuilder, battle history tracking, and real-time matchmaking where players can search for battles or challenge each other directly.",
        longDescription: "This project is a fully featured Pokémon battle simulator designed to replicate the competitive experience. The frontend is built with React, Tailwind CSS and TypeScript, and has a responsive design with intuitive battle interactions. The backend uses Python and Flask, with Socket.io to connect players.\n" +
            "\n" +
            "The simulator supports all major game mechanics up through Generation 7, including abilities, move interactions, weather, terrains, items, priority, status effects, switching, mega evolutions, z-moves and more. The teambuilder allows players to assemble, edit, and save custom teams, and the battle history tab stores past matches. Players can queue for battles, be matched automatically, or challenge specific opponents in one on one battles.",
        images: ["https://imgur.com/txnrPB1.png", "https://imgur.com/4GUU1Ej.png", "https://imgur.com/fsKa0OV.png", "https://imgur.com/m6y3Cns.png"],
        gitHubUrl: "https://github.com/example/weather-dashboard",
        liveUrl: "https://weather-dashboard-demo.netlify.app",
        featured:true,
        techStack:['React', 'TailwindCSS', "Flask", "Python", "TypeScript"]
    },
    {
        title: "Spotify Statistics Tracker",
        shortDescription: "A sleek Spotify analytics app built with React, TailwindCSS, TypeScript, and ASP.NET that lets users track their top artists, tracks, and albums over time. Compare past stats, explore a personal album catalogue, save favorites, and instantly shuffle random albums to play.",
        longDescription: "This Spotify Stat Tracking App provides a clean and interactive way for users to explore and understand their listening habits. Built using React, TailwindCSS, TypeScript, ASP.NET and EntityFramework, the app fetches detailed Spotify data, caches it, and presents it through a simple and intuitive UI.\n" +
            "\n" +
            "Users can view their top tracks and artists across multiple time ranges, then compare how their listening trends change each time they revisit the app. A built-in catalogue system allows users to save albums they love or want to revisit later, creating a personalized listening library. The app can also select a random saved album and start playback.\n" +
            "\n" +
            "Combining fast performance, responsive design, and smart data visualization, this app delivers a powerful yet simple way to dive deeper into your Spotify listening history.",
        images: ["https://imgur.com/iS3US1a.png","https://imgur.com/bC7UQtx.png","https://imgur.com/PQd8Uac.png", ],
        gitHubUrl: "https://github.com/example/task-tracker",
        liveUrl: "https://task-tracker-demo.vercel.app",
        techStack:['React', 'TailwindCSS', "ASP.NET", "C#", "TypeScript"]
    },
    {
        title: "Productivity Suite",
        shortDescription: "A productivity suite built with React, Tailwind, TypeScript, and Python/Flask and SQLAlchemy + SQLlite, featuring a Markdown text editor, a Kanban board, and a calendar for managing tasks and events.",
        longDescription: "This productivity suite combines useful tools to keep you organized and efficient. Built with React, TailwindCSS, TypeScript, Python/Flask and SQLAlchemy + SQLlite, it offers a modern, responsive UI. The Markdown text editor lets you create and format notes, ideas, and documents seamlessly. The Kanban board allows you to manage tasks across customizable columns. The calendar helps you track events, deadlines, and reminders at a glance. With its intuitive layout, this application provides a smooth and valuable experience for managing both work and personal projects.",
        images: ["https://imgur.com/QugMH5d.png","https://imgur.com/4EwAkAV.png", "https://imgur.com/96FkQIq.png"],
        gitHubUrl: "https://github.com/example/portfolio-website",
        liveUrl: "https://portfolio-demo.vercel.app",
        techStack:['React', 'TailwindCSS', "Flask", "Python", "TypeScript"]
    },

];
