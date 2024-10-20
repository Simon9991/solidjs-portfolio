/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { DarkModeProvider, useDarkMode } from './components/UI/DarkMode';
import {
    LanguageSelectProvider,
    useLanguageSelect,
} from './components/Stores/LanguageSelectSignal';
import { Route, Router } from '@solidjs/router';
import {
    createEffect,
    createResource,
    createSignal,
    type JSXElement,
    onMount,
    Show,
    Suspense,
} from 'solid-js';
import DarkModeToggle from './components/UI/DarkModeToggleSwitch';
import LanguageSelect from './components/UI/LanguageSelect';
import LoadingIndicator from './components/UI/LoadingIndicator';
import { type Dict, dict } from './i18n/en';
import * as i18n from '@solid-primitives/i18n';
import RouteTest from './pages/Test';
import { ParticleBackground } from './components/UI/ParticlesEffect';
import { Navigation } from './components/UI/Navigation';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

export type Locale = 'en' | 'ko' | 'fr';
export type RawDictionary = Dict;
export type Dictionary = i18n.Flatten<RawDictionary>;

async function fetchDictionary(locale: Locale): Promise<Dictionary> {
    const dict: RawDictionary = (await import(`./i18n/${locale}.ts`)).dict;
    return i18n.flatten(dict); // flatten the dictionary to make all nested keys available top-level
}

const Layout = (props: { children?: JSXElement }) => {
    const [isDarkMode] = useDarkMode();
    const { language } = useLanguageSelect();
    const [dict] = createResource(language, fetchDictionary);
    const [imageSrc, setImageSrc] = createSignal('/images/bg-dark-1.jpg');

    dict(); // trigger the fetch

    createEffect(() => {
        if (isDarkMode()) {
            setImageSrc('/images/bg-dark-1.jpg');
        } else {
            setImageSrc('/images/bg-dark-4.jpg');
        }
    });

    return (
        <div id="main" class={`${isDarkMode() ? 'dark' : ''} dark:bg-gray-900 bg-zinc-50`}>
            <img src={imageSrc()} alt="background" class="-inset-y-1/2 fixed" />
            {/* Top navbar */}
            <div class="fixed inset-0 z-10 w-full h-fit dark:bg-seoul-sky-dark dark:bg-opacity-10 backdrop-blur-sm bg-seoul-sky bg-opacity-10 flex justify-between p-6 gap-6">
                <Navigation />
                <div class="inline-flex items-center gap-4">
                    <LanguageSelect />
                    <DarkModeToggle />
                </div>
            </div>

            {/* Content (children) */}
            <div class="relative z-[5]">
                <Suspense fallback={<LoadingIndicator />}>
                    <Show when={dict()}>{props.children}</Show>
                </Suspense>
            </div>
        </div>
    );
};

render(
    () => (
        <DarkModeProvider>
            <LanguageSelectProvider>
                <Router root={Layout}>
                    <Route path="/" component={App} />
                </Router>
            </LanguageSelectProvider>
        </DarkModeProvider>
    ),
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    root!,
);
