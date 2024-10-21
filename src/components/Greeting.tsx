import { FiCode, FiGlobe, FiCoffee, FiArrowDown } from 'solid-icons/fi';
import { SiRust, SiCplusplus, SiJavascript } from 'solid-icons/si';
import { useTranslation } from '../hooks/useTranslation';
import Card from './UI/General/Card';

export default function Greeting() {
    const { t } = useTranslation();

    return (
        <section class="min-h-screen pt-24 md:pt-8 p-8 md:mb-0 mb-48 flex flex-col justify-center items-center relative">
            <div class="relative z-10 text-center max-w-4xl mx-auto">
                <h1 class="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-roland-red to-cassis-lavender-accent dark:from-roland-red-light dark:to-cassis-lavender-accent leading-tight pb-2">
                    {t('greeting.hello')}
                </h1>
                <p class="text-2xl mb-12 text-hangul-gray dark:text-hangul-silver">
                    {t('greeting.description')}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <Card
                        icon={<FiCode class="text-5xl mb-2 text-seoul-sky-accent" />}
                        title={t('greeting.cards.fullstack') ?? ''}
                        description=""
                    />
                    <Card
                        icon={<FiGlobe class="text-5xl mb-2 text-cassis-lavender-accent" />}
                        title={t('greeting.cards.international') ?? ''}
                        description=""
                    />
                    <Card
                        icon={<FiCoffee class="text-5xl mb-2 text-roland-red" />}
                        title={t('greeting.cards.lowLevel') ?? ''}
                        description=""
                    />
                </div>

                <div class="flex justify-center items-center">
                    <p class="text-xl text-hangul-gray inline-flex gap-2 items-center dark:text-hangul-silver animate-bounce mr-2">
                        {t('greeting.scrollDown')} <FiArrowDown />
                    </p>
                </div>
            </div>
        </section>
    );
}
