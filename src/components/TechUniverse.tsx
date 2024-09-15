import { createSignal, For, Show } from 'solid-js';
import { Motion, Presence } from 'solid-motionone';
import { FiCode, FiDatabase, FiLayout } from 'solid-icons/fi';
import { SiRust, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiPostgresql } from 'solid-icons/si';
import { useDarkMode } from './UI/darkMode';

const techStack = [
    { name: 'Rust', icon: SiRust, color: '#dea584', darkColor: '#b08367' },
    {
        name: 'C/C++',
        icon: SiCplusplus,
        color: '#00599c',
        darkColor: '#004a7f',
    },
    {
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#f7df1e',
        darkColor: '#c5b218',
    },
    { name: 'HTML', icon: SiHtml5, color: '#e34f26', darkColor: '#b63e1e' },
    { name: 'CSS', icon: SiCss3, color: '#1572b6', darkColor: '#115b92' },
    { name: 'SQL', icon: SiPostgresql, color: '#336791', darkColor: '#295274' },
];

const projects = [
    { name: 'AntiCheating tools', tech: 'Rust', icon: FiCode },
    { name: 'WebAssembly', tech: ['Rust', 'JavaScript'], icon: FiCode },
    { name: 'Chess AI', tech: 'C/C++', icon: FiCode },
    { name: '3D Game w/ OpenGL', tech: 'C/C++', icon: FiCode },
    { name: 'SvelteKit', tech: ['JavaScript', 'HTML', 'CSS'], icon: FiLayout },
    {
        name: 'React / NextJS',
        tech: ['JavaScript', 'HTML', 'CSS'],
        icon: FiLayout,
    },
    { name: 'SolidJS', tech: ['JavaScript', 'HTML', 'CSS'], icon: FiLayout },
    {
        name: 'React Native App',
        tech: ['JavaScript', 'HTML', 'CSS'],
        icon: FiLayout,
    },
    { name: 'Postgres', tech: 'SQL', icon: FiDatabase },
    { name: 'TailwindCSS', tech: 'CSS', icon: FiLayout },
    { name: 'SASS', tech: 'CSS', icon: FiLayout },
    { name: 'Addresses fixer', tech: 'Rust', icon: FiCode },
    { name: 'SeaORM Backend', tech: ['Rust', 'SQL'], icon: FiDatabase },
    { name: '2D Game with SFML', tech: 'C/C++', icon: FiCode },
    { name: 'Personal CLI', tech: 'C/C++', icon: FiCode },
];

export default function TechUniverse() {
    const [isDarkMode] = useDarkMode();
    const [selectedTech, setSelectedTech] = createSignal<string | null>('Rust');
    const [hoveredProject, setHoveredProject] = createSignal<string | null>(null);
    const [hoveredTech, setHoveredTech] = createSignal<string | null>(null);

    const filteredProjects = () =>
        selectedTech()
            ? projects.filter((project) =>
                  Array.isArray(project.tech)
                      ? // biome-ignore lint/style/noNonNullAssertion: <cannot be null>
                        project.tech.includes(selectedTech()!)
                      : project.tech === selectedTech(),
              )
            : projects;

    return (
        <div class="min-h-screen p-8 pt-24 flex flex-col items-center justify-center transition-all ${isDarkMode() ? dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-800">
            <h1 class="font-bold text-4xl mb-8">My Tech Universe</h1>
            <div class="w-full max-w-4xl rounded-lg shadow-lg p-8 dark:bg-gray-800 bg-white">
                <div class="grid grid-cols-3 gap-4 mb-8">
                    <For each={techStack}>
                        {(tech) => (
                            <Motion.button
                                class={`p-4 rounded-lg text-white flex flex-col items-center justify-center shadow-md ${selectedTech() === tech.name ? 'ring-4 ring-blue-300 dark:ring-blue-500' : ''}`}
                                style={{
                                    'background-color': isDarkMode() ? tech.darkColor : tech.color,
                                }}
                                onClick={() =>
                                    setSelectedTech((prev) =>
                                        prev === tech.name ? null : tech.name,
                                    )
                                }
                                animate={{
                                    scale:
                                        (hoveredTech() || selectedTech()) === tech.name ? 1.05 : 1,
                                }}
                                transition={{ duration: 0.2 }}
                                onMouseEnter={() => setHoveredTech(tech.name)}
                                onMouseLeave={() => setHoveredTech(null)}
                            >
                                <tech.icon class="text-4xl mb-2 drop-shadow-md" />
                                <span class="font-semibold">{tech.name}</span>
                            </Motion.button>
                        )}
                    </For>
                </div>
                <Motion.div
                    class="rounded-lg p-6 dark:bg-gray-700 bg-gray-100"
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.3, easing: 'ease-in-out' }}
                >
                    <h2 class="font-semibold text-2xl mb-4">
                        {selectedTech() ? `${selectedTech()} Projects` : 'All Projects'}
                    </h2>
                    <Show
                        when={filteredProjects().length > 0}
                        fallback={
                            <p class="text-center text-gray-500">
                                No projects found for this technology.
                            </p>
                        }
                    >
                        <Presence>
                            <Motion.div
                                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <For each={filteredProjects()}>
                                    {(project) => (
                                        <Motion.div
                                            class="p-4 rounded-lg shadow cursor-pointer flex items-center dark:bg-gray-600 dark:text-white bg-white text-gray-800"
                                            animate={{
                                                scale: hoveredProject() === project.name ? 1.05 : 1,
                                            }}
                                            transition={{ duration: 0.2 }}
                                            onMouseEnter={() => setHoveredProject(project.name)}
                                            onMouseLeave={() => setHoveredProject(null)}
                                        >
                                            <project.icon class="text-2xl mr-3" />
                                            <p class="font-medium">{project.name}</p>
                                        </Motion.div>
                                    )}
                                </For>
                            </Motion.div>
                        </Presence>
                    </Show>
                </Motion.div>
            </div>
        </div>
    );
}
