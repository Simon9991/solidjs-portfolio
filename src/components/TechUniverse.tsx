import { RiBusinessGlobalLine } from 'solid-icons/ri';
import { TbChessKing } from 'solid-icons/tb';
import { BsShieldLock } from 'solid-icons/bs';
import { createSignal, For } from 'solid-js';
import { Motion } from 'solid-motionone';
import { IoCubeOutline } from 'solid-icons/io';
import { FiMapPin, FiMonitor } from 'solid-icons/fi';
import { BsTerminal } from 'solid-icons/bs';

const projects = [
    {
        name: 'DoohYouLike Ecosystem',
        tags: ['Svelte', 'TailwindCSS', 'Rust', 'C#', 'React Native', 'Go'],
        description:
            'Developed a comprehensive ecosystem for DoohYouLike, including web frontends (Svelte), mobile app (React Native), and high-performance backends (Rust, Go, C#).',
        icon: RiBusinessGlobalLine,
    },
    {
        name: 'AntiCheating Tools',
        tags: ['Rust', 'Low-level'],
        description:
            'Developed robust anti-cheating tools using Rust, leveraging low-level programming techniques to ensure fair gameplay in online environments.',
        icon: BsShieldLock,
    },
    {
        name: 'Chess AI',
        tags: ['C', 'C++', 'Rust'],
        description:
            'Implemented a chess AI engine in multiple languages (C, C++, Rust) to compare performance and explore language-specific optimizations.',
        icon: TbChessKing,
    },
    {
        name: 'This Portfolio',
        tags: ['SolidJS', 'TailwindCSS'],
        description:
            'Created a responsive and modern portfolio website using SolidJS for efficient rendering and TailwindCSS for streamlined styling.',
        icon: FiMonitor,
    },
    {
        name: '3D Game w/ OpenGL',
        tags: ['C', 'C++'],
        description:
            'Built a 3D game engine from scratch using OpenGL, demonstrating proficiency in graphics programming and game development fundamentals.',
        icon: IoCubeOutline,
    },
    {
        name: 'Personal Terminal Shell',
        tags: ['C', 'C++'],
        description:
            'Crafted my own terminal shell, based on bash, to learn more about how a shell works under the hood.',
        icon: BsTerminal,
    },
    {
        name: 'Address Fixer',
        tags: ['Rust', 'Google Maps API'],
        description:
            'Created a utility in Rust that validates and corrects addresses by cross-referencing with the Google Maps API, improving data accuracy for location-based services.',
        icon: FiMapPin,
    },
];

export default function TechUniverse() {
    const [hoveredProject, setHoveredProject] = createSignal<string>('');

    return (
        <section class="py-12">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center text-roland-red mb-12">My Projects</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <For each={projects}>
                        {(project) => (
                            <Motion.div
                                class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                                animate={{
                                    scale: hoveredProject() === project.name ? 1.05 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                                onMouseEnter={() => setHoveredProject(project.name)}
                                onMouseLeave={() => setHoveredProject('')}
                            >
                                <div class="p-6">
                                    <div class="flex items-center justify-between mb-4">
                                        <h3 class="text-xl font-semibold text-hangul-gray dark:text-hangul-silver">
                                            {project.name}
                                        </h3>
                                        <project.icon class="w-6 h-6 text-blue-500" />
                                    </div>
                                    <p class="text-hangul-gray dark:text-hangul-silver mb-4">
                                        {project.description}
                                    </p>
                                    <div class="flex flex-wrap gap-2">
                                        <For each={project.tags}>
                                            {(tag) => (
                                                <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                                    {tag}
                                                </span>
                                            )}
                                        </For>
                                    </div>
                                </div>
                            </Motion.div>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
}

// import { createSignal, For, Show } from 'solid-js';
// import { Motion, Presence } from 'solid-motionone';
// import { FiCode, FiDatabase, FiLayout } from 'solid-icons/fi';
// import { SiRust, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiPostgresql } from 'solid-icons/si';
// import { useDarkMode } from './UI/DarkMode';

// const techStack = [
//     { name: 'Rust', icon: SiRust, color: '#dea584', darkColor: '#b08367' },
//     {
//         name: 'C/C++',
//         icon: SiCplusplus,
//         color: '#00599c',
//         darkColor: '#004a7f',
//     },
//     {
//         name: 'JavaScript',
//         icon: SiJavascript,
//         color: '#f7df1e',
//         darkColor: '#c5b218',
//     },
//     { name: 'HTML', icon: SiHtml5, color: '#e34f26', darkColor: '#b63e1e' },
//     { name: 'CSS', icon: SiCss3, color: '#1572b6', darkColor: '#115b92' },
//     { name: 'SQL', icon: SiPostgresql, color: '#336791', darkColor: '#295274' },
// ];

// const projects = [
//     { name: 'AntiCheating tools', tech: 'Rust', icon: FiCode },
//     { name: 'WebAssembly', tech: ['Rust', 'JavaScript'], icon: FiCode },
//     { name: 'Chess AI', tech: 'C/C++', icon: FiCode },
//     { name: '3D Game w/ OpenGL', tech: 'C/C++', icon: FiCode },
//     { name: 'SvelteKit', tech: ['JavaScript', 'HTML', 'CSS'], icon: FiLayout },
//     {
//         name: 'React / NextJS',
//         tech: ['JavaScript', 'HTML', 'CSS'],
//         icon: FiLayout,
//     },
//     { name: 'SolidJS', tech: ['JavaScript', 'HTML', 'CSS'], icon: FiLayout },
//     {
//         name: 'React Native App',
//         tech: ['JavaScript', 'HTML', 'CSS'],
//         icon: FiLayout,
//     },
//     { name: 'Postgres', tech: 'SQL', icon: FiDatabase },
//     { name: 'TailwindCSS', tech: 'CSS', icon: FiLayout },
//     { name: 'SASS', tech: 'CSS', icon: FiLayout },
//     { name: 'Addresses fixer', tech: 'Rust', icon: FiCode },
//     { name: 'SeaORM Backend', tech: ['Rust', 'SQL'], icon: FiDatabase },
//     { name: '2D Game with SFML', tech: 'C/C++', icon: FiCode },
//     { name: 'Personal CLI', tech: 'C/C++', icon: FiCode },
// ];

// export default function TechUniverse() {
//     const [isDarkMode] = useDarkMode();
//     const [selectedTech, setSelectedTech] = createSignal<string | null>('Rust');
//     const [hoveredProject, setHoveredProject] = createSignal<string | null>(null);
//     const [hoveredTech, setHoveredTech] = createSignal<string | null>(null);

//     const filteredProjects = () =>
//         selectedTech()
//             ? projects.filter((project) =>
//                   Array.isArray(project.tech)
//                       ? // biome-ignore lint/style/noNonNullAssertion: <cannot be null>
//                         project.tech.includes(selectedTech()!)
//                       : project.tech === selectedTech(),
//               )
//             : projects;

//     return (
//         <div class="min-h-screen p-8 pt-24 flex flex-col items-center justify-center transition-all">
//             <h1 class="font-bold text-4xl mb-8">My Tech Universe</h1>
//             <div class="w-full max-w-4xl rounded-lg shadow-lg p-8 dark:bg-gray-800 bg-white">
//                 <div class="grid grid-cols-3 gap-4 mb-8">
//                     <For each={techStack}>
//                         {(tech) => (
//                             <Motion.button
//                                 class="p-4 rounded-lg text-white flex flex-col items-center justify-center shadow-md"
//                                 classList={{
//                                     'ring-4 ring-blue-300 dark:ring-blue-500':
//                                         selectedTech() === tech.name,
//                                 }}
//                                 style={{
//                                     'background-color': isDarkMode() ? tech.darkColor : tech.color,
//                                 }}
//                                 onClick={() =>
//                                     setSelectedTech((prev) =>
//                                         prev === tech.name ? null : tech.name,
//                                     )
//                                 }
//                                 animate={{
//                                     scale:
//                                         (hoveredTech() || selectedTech()) === tech.name ? 1.05 : 1,
//                                 }}
//                                 transition={{ duration: 0.2 }}
//                                 onMouseEnter={() => setHoveredTech(tech.name)}
//                                 onMouseLeave={() => setHoveredTech(null)}
//                             >
//                                 <tech.icon class="text-4xl mb-2 drop-shadow-md" />
//                                 <span class="font-semibold">{tech.name}</span>
//                             </Motion.button>
//                         )}
//                     </For>
//                 </div>
//                 <Motion.div
//                     class="rounded-lg p-6 dark:bg-gray-700 bg-gray-100"
//                     animate={{ height: 'auto' }}
//                     transition={{ duration: 0.3, easing: 'ease-in-out' }}
//                 >
//                     <h2 class="font-semibold text-2xl mb-4">
//                         {selectedTech() ? `${selectedTech()} Projects` : 'All Projects'}
//                     </h2>
//                     <Show
//                         when={filteredProjects().length > 0}
//                         fallback={
//                             <p class="text-center text-gray-500">
//                                 No projects found for this technology.
//                             </p>
//                         }
//                     >
//                         <Presence>
//                             <Motion.div
//                                 class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
//                                 initial={{ opacity: 0, scale: 0.8 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0.8 }}
//                                 transition={{ duration: 0.3 }}
//                             >
//                                 <For each={filteredProjects()}>
//                                     {(project) => (
//                                         <Motion.div
//                                             class="p-4 rounded-lg shadow cursor-pointer flex items-center dark:bg-gray-600 dark:text-white bg-white text-gray-800"
//                                             animate={{
//                                                 scale: hoveredProject() === project.name ? 1.05 : 1,
//                                             }}
//                                             transition={{ duration: 0.2 }}
//                                             onMouseEnter={() => setHoveredProject(project.name)}
//                                             onMouseLeave={() => setHoveredProject(null)}
//                                         >
//                                             <project.icon class="text-2xl mr-3" />
//                                             <p class="font-medium">{project.name}</p>
//                                         </Motion.div>
//                                     )}
//                                 </For>
//                             </Motion.div>
//                         </Presence>
//                     </Show>
//                 </Motion.div>
//             </div>
//         </div>
//     );
// }
