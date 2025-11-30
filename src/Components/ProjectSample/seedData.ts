import type {ProjectSampleProps} from "./ProjectSample.tsx";


export function getProject(title:string):ProjectSampleProps{
    const item = projects.filter(s => s.title.replaceAll(" ", "-") === title)[0];
    return item;
}



export const projects: ProjectSampleProps[] = [
    {
        title: "Pokemon Battle Simulator",
        shortDescription: "A full-stack Pokémon battle simulator built with React, Tailwind, Flask, Python, and Socket.io. It features all major game mechanics up to Generation 7, a functional teambuilder, battle history tracking, and real-time matchmaking where players can search for battles or challenge each other directly.",
        longDescription: "This project is a fully featured Pokémon battle simulator designed to replicate the competitive experience. The frontend is built with React, Tailwind CSS and TypeScript, and has a responsive design with intuitive battle interactions. The backend uses Python and Flask, with Socket.io to connect players.\n" +
            "\n" +
            "The simulator supports all major game mechanics up through Generation 7, including abilities, move interactions, weather, terrains, items, priority, status effects, switching, mega evolutions, z-moves and more. The teambuilder allows players to assemble, edit, and save custom teams, and the battle history tab stores past matches. Players can queue for battles, be matched automatically, or challenge specific opponents in one on one battles.",
        images: ["/src/assets/PokemonBattleSimulator/Battle_pokemon_sim.png", "/src/assets/PokemonBattleSimulator/History_Pokemon_sim.png", "/src/assets/PokemonBattleSimulator/TeamBuilder_Pokemon_sim.png", "/src/assets/PokemonBattleSimulator/Index_Pokemon_sim.png"],
        gitHubUrl: "https://github.com/example/weather-dashboard",
        liveUrl: "https://weather-dashboard-demo.netlify.app",
        featured:true,
        techStack:['React', 'TailwindCSS', "Flask", "Python", "TypeScript"]
    },
    {
        title: "Spotify Statistics Tracker",
        shortDescription: "A sleek Spotify analytics app built with React, TailwindCSS, TypeScript, and ASP.NET that lets users track their top artists, tracks, and albums over time. Compare past stats, explore a personal album catalogue, save favorites, and instantly shuffle random albums to play.",
        longDescription: "This Spotify Stat Tracking App provides a clean and interactive way for users to explore and understand their listening habits. Built using React, TailwindCSS, TypeScript, and ASP.NET, the app fetches detailed Spotify data and presents it through a smooth and intuitive interface.\n" +
            "\n" +
            "Users can view their top tracks, albums, and artists across multiple time ranges, then compare how their listening trends change each time they revisit the app. A built-in catalogue system allows users to save albums they love or want to revisit later, creating a personalized listening library. For added fun and discovery, the app can also select a random saved album and instantly open it for playback.\n" +
            "\n" +
            "Combining fast performance, responsive design, and smart data visualization, this app delivers a powerful yet simple way to dive deeper into your Spotify listening history.",
        images: ["/src/assets/SpotifyTracker/spotify_tracker_tracks.png","/src/assets/SpotifyTracker/spotify_tracker_catalogue.png","/src/assets/SpotifyTracker/spotify_tracker_artists.png", ],
        gitHubUrl: "https://github.com/example/task-tracker",
        liveUrl: "https://task-tracker-demo.vercel.app",
        techStack:['React', 'TailwindCSS', "ASP.NET", "C#", "TypeScript"]
    },
    {
        title: "Productivity Suite",
        shortDescription: "A sleek productivity suite built with React, Tailwind, TypeScript, and Python/Flask, featuring a Markdown text editor, a Kanban board, and a calendar for managing tasks and events.",
        longDescription: "This productivity suite combines essential tools to keep you organized and efficient. Built with React, Tailwind CSS, TypeScript, and Python/Flask, it offers a modern, responsive, and visually cohesive interface. The Markdown text editor lets you create and format notes, ideas, and documents seamlessly. The Kanban board allows you to manage tasks across customizable columns, each with distinct accent colors for clarity. The calendar helps you track events, deadlines, and reminders at a glance. With its dark-themed design and intuitive layout, this suite provides a smooth and visually appealing experience for managing both work and personal projects.",
        images: ["/src/assets/ProductivityApp/productivity_calendar.png","/src/assets/ProductivityApp/productivity_kanban.png", "/src/assets/ProductivityApp/productivity_notepad.png"],
        gitHubUrl: "https://github.com/example/portfolio-website",
        liveUrl: "https://portfolio-demo.vercel.app",
        techStack:['React', 'TailwindCSS', "Flask", "Python", "TypeScript"]
    },

];
