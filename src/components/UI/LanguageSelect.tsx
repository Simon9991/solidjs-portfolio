import { createSignal, For, onCleanup, onMount } from 'solid-js';
import { Motion } from 'solid-motionone';
import { type Language, LanguageOptions, useLanguageSelect } from '../Stores/LanguageSelectSignal';

const languages = [
    { code: LanguageOptions.en, name: 'English', short: 'EN', flag: '/images/en-flag.png' },
    { code: LanguageOptions.fr, name: 'Français', short: 'FR', flag: '/images/fr-flag.png' },
    { code: LanguageOptions.ko, name: '한국어', short: '한', flag: '/images/ko-flag.png' },
];

export default function LanguageSelect() {
    const { language, setLanguage } = useLanguageSelect();
    const [isOpen, setIsOpen] = createSignal(false);

    const toggleDropdown = () => setIsOpen(!isOpen());

    const selectLanguage = (lang: Language) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    // on click outside of the dropdown, close the dropdown
    const handleClickOutside = (event: MouseEvent) => {
        if (
            isOpen() &&
            event.target instanceof HTMLElement &&
            !event.target.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    onMount(() => {
        window.addEventListener('click', handleClickOutside);
    });

    onCleanup(() => {
        window.removeEventListener('click', handleClickOutside);
    });

    return (
        <div class="relative">
            <button
                onClick={toggleDropdown}
                class="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none transition-all duration-300 hover:ring-2 hover:ring-eiffel-gold dark:hover:ring-eiffel-gold-light"
                type="button"
            >
                <img
                    src={languages.find((lang) => lang.code === language())?.flag}
                    alt={language()}
                    class="w-5 h-5 rounded-full object-cover"
                />
                <span class="text-sm font-medium text-hangul-gray dark:text-hangul-silver">
                    {language().toUpperCase()}
                </span>
            </button>

            <Motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                    opacity: isOpen() ? 1 : 0,
                    scale: isOpen() ? 1 : 0.95,
                    display: isOpen() ? 'block' : 'none',
                }}
                transition={{ duration: 0.1 }}
                class="absolute mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
            >
                <div
                    class="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <For each={languages}>
                        {(lang) => (
                            <button
                                onClick={() => selectLanguage(lang.code)}
                                class="flex items-center w-full px-4 py-2 text-sm text-hangul-gray dark:text-hangul-silver hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                                classList={{
                                    'bg-seoul-sky bg-opacity-20 dark:bg-slate-700 dark:bg-opacity-100':
                                        lang.code === language(),
                                }}
                                role="menuitem"
                                type="button"
                            >
                                <img
                                    src={lang.flag}
                                    alt={lang.name}
                                    class="w-5 h-5 mr-3 rounded-full object-cover"
                                />
                                {lang.name}
                            </button>
                        )}
                    </For>
                </div>
            </Motion.div>
        </div>
    );
}
