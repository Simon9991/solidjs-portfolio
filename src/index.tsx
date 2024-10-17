/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { DarkModeProvider, useDarkMode } from "./components/UI/DarkMode";
import {
    LanguageSelectProvider,
    useLanguageSelect,
} from "./components/Stores/LanguageSelectSignal";
import { Route, Router } from "@solidjs/router";
import { createResource, type JSXElement, Show, Suspense } from "solid-js";
import ParticlesEffect from "./components/UI/ParticlesEffect";
import DarkModeToggle from "./components/UI/DarkModeToggleSwitch";
import LanguageSelect from "./components/UI/LanguageSelect";
import LoadingIndicator from "./components/UI/LoadingIndicator";
import { type Dict, dict } from "./i18n/en";
import * as i18n from "@solid-primitives/i18n";
import RouteTest from "./pages/Test";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
    );
}

export type Locale = "en" | "ko" | "fr";
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

    dict(); // trigger the fetch

    return (
        <div class={isDarkMode() ? "dark" : ""}>
            <ParticlesEffect>
                <div class="fixed inset-0 z-40 w-full bg-gradient-to-b dark:from-black from-white to-transparent to-100% h-44 flex justify-end p-6 gap-6">
                    <LanguageSelect />
                    <DarkModeToggle />
                </div>
                <Suspense fallback={<LoadingIndicator />}>
                    <Show when={dict()}>{props.children}</Show>
                </Suspense>
            </ParticlesEffect>
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
