import { createResource, createSignal, Show, Suspense, type Component } from 'solid-js';

import { useDarkMode } from './components/UI/DarkMode';
import TechUniverse from './components/TechUniverse';
import Greeting from './components/Greeting';
import DarkModeToggle from './components/UI/DarkModeToggleSwitch';
import LanguageSelect from './components/UI/LanguageSelect';
import * as i18n from '@solid-primitives/i18n';
import type { Dict } from './i18n/en';
import { useLanguageSelect } from './components/Stores/LanguageSelectSignal';
import LoadingIndicator from './components/UI/LoadingIndicator';

export type Locale = 'en' | 'ko' | 'fr';
export type RawDictionary = Dict;
export type Dictionary = i18n.Flatten<RawDictionary>;

async function fetchDictionary(locale: Locale): Promise<Dictionary> {
    const dict: RawDictionary = (await import(`./i18n/${locale}.ts`)).dict;
    return i18n.flatten(dict); // flatten the dictionary to make all nested keys available top-level
}

const App: Component = () => {
    const [isDarkMode] = useDarkMode();
    const { language } = useLanguageSelect();
    const [dict] = createResource(language, fetchDictionary);

    dict();

    return (
        <div
            class={`${isDarkMode() ? 'dark' : ''} min-h-screen relative overflow-auto transition-all dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-800`}
        >
            <Suspense fallback={<LoadingIndicator />}>
                <Show when={dict()}>
                    <div class="w-full fixed z-10 dark:bg-black dark:bg-opacity-10 bg-indigo-500 bg-opacity-10 top-0 flex items-center justify-between px-8 backdrop-blur-sm h-20">
                        <h1 class="font-bold text-4xl mb-0">SB. Dev.</h1>
                        <div class="flex items-center gap-4">
                            <LanguageSelect />
                            <DarkModeToggle />
                        </div>
                    </div>

                    <Greeting />
                    <TechUniverse />
                </Show>
            </Suspense>
        </div>
    );
};

export default App;
