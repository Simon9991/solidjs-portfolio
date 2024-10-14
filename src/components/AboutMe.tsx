import { FiArrowDown } from 'solid-icons/fi';
import { SiRust, SiCplusplus, SiJavascript } from 'solid-icons/si';
import { useTranslation } from '../hooks/useTranslation';
import { For, type JSX } from 'solid-js';

export default function AboutMe() {
    const { t } = useTranslation();

    const renderParagraph = (text: string): JSX.Element => {
        const parts = text.split(/(\{[^}]+\})/g);
        return (
            <>
                {parts.map((part, index) => {
                    if (part.startsWith('{') && part.endsWith('}')) {
                        const key = part.slice(1, -1);
                        // biome-ignore lint/suspicious/noExplicitAny: <i18n is too hard to type...>
                        const path = `aboutMe.${key}` as any;
                        return (
                            <span class="font-semibold text-cassis-lavender-accent dark:text-cassis-lavender-dark-accent">
                                {t(path)}
                            </span>
                        );
                    }
                    return part;
                })}
            </>
        );
    };

    return (
        <section class="py-12">
            <div class="container mx-auto px-4 lg:max-w-5xl">
                <h2 class="text-4xl font-bold text-center text-roland-red dark:text-roland-red-light mb-6">
                    {t('aboutMe.title')}
                </h2>
                <div class="grid md:flex md:flex-row gap-12 items-center bg-cassis-lavender-accent bg-opacity-5 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <div class="space-y-6">
                        <p class="text-lg text-hangul-gray dark:text-hangul-silver leading-relaxed flex flex-col gap-2">
                            <For each={t('aboutMe.description')}>
                                {(paragraph) => <span>{renderParagraph(paragraph)}</span>}
                            </For>
                        </p>
                    </div>
                    <div class="relative flex w-fit md:mx-0 md:ml-auto mx-auto">
                        <div class="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
                            <img
                                src="/images/pfp.JPG"
                                alt="Profile"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 dark:bg-opacity-70 backdrop-blur-sm rounded-full p-3 shadow-lg">
                            <FiArrowDown class="w-7 h-7 text-roland-red dark:text-roland-red-light animate-bounce" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
