import type { Component } from 'solid-js';

import { useDarkMode } from './components/UI/DarkMode';
import TechUniverse from './components/TechUniverse';
import Greeting from './components/Greeting';
import DarkModeToggle from './components/UI/DarkModeToggleSwitch';
import LanguageSelect from './components/UI/LanguageSelect';

const App: Component = () => {
    const [isDarkMode] = useDarkMode();

    return (
        <div
            class={`${isDarkMode() ? 'dark' : ''} min-h-screen relative overflow-auto transition-all dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-800`}
        >
            <div class="w-full fixed z-10 dark:bg-black dark:bg-opacity-10 bg-indigo-500 bg-opacity-10 top-0 flex items-center justify-between px-8 backdrop-blur-sm h-20">
                <h1 class="font-bold text-4xl mb-0">SB. Dev.</h1>
                <div class="flex items-center gap-4">
                    <LanguageSelect />
                    <DarkModeToggle />
                </div>
            </div>

            <Greeting />
            <TechUniverse />
        </div>
    );
};

export default App;
