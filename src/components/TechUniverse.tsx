import { RiBusinessGlobalLine } from 'solid-icons/ri';
import { TbChessKing } from 'solid-icons/tb';
import { BsShieldLock } from 'solid-icons/bs';
import { createSignal, For } from 'solid-js';
import { Motion } from 'solid-motionone';
import { IoCubeOutline } from 'solid-icons/io';
import { FiMapPin, FiMonitor } from 'solid-icons/fi';
import { BsTerminal } from 'solid-icons/bs';
import { useTranslation } from '../hooks/useTranslation';

const projectIcons = {
    'dyl-ecosystem': RiBusinessGlobalLine,
    'anti-cheating-tools': BsShieldLock,
    'chess-ai': TbChessKing,
    portfolio: FiMonitor,
    '3d-game-opengl': IoCubeOutline,
    'personal-terminal-shell': BsTerminal,
    'address-fixer': FiMapPin,
};

export default function TechUniverse() {
    const { t } = useTranslation();
    const [hoveredProject, setHoveredProject] = createSignal<string>('');

    return (
        <section class="py-12">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center text-roland-red dark:text-roland-red-light mb-12">
                    {t('techUniverse.title')}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <For each={t('techUniverse.projects')}>
                        {(project) => {
                            const Icon = projectIcons[project.id as keyof typeof projectIcons];
                            return (
                                <Motion.div
                                    class="bg-white dark:bg-gray-800 dark:bg-opacity-40 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
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
                                            <Icon class="w-6 h-6 text-blue-500" />
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
                            );
                        }}
                    </For>
                </div>
            </div>
        </section>
    );
}
