import { createResource, Show, Suspense, type Component } from "solid-js";

import { useDarkMode } from "./components/UI/DarkMode";
import TechUniverse from "./components/TechUniverse";
import Greeting from "./components/Greeting";
import DarkModeToggle from "./components/UI/DarkModeToggleSwitch";
import LanguageSelect from "./components/UI/LanguageSelect";
import * as i18n from "@solid-primitives/i18n";
import type { Dict } from "./i18n/en";
import { useLanguageSelect } from "./components/Stores/LanguageSelectSignal";
import LoadingIndicator from "./components/UI/LoadingIndicator";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import ParticlesEffect from "./components/UI/ParticlesEffect";
import { Route, Router } from "@solidjs/router";
import RouteTest from "./pages/Test";

export type Locale = "en" | "ko" | "fr";
export type RawDictionary = Dict;
export type Dictionary = i18n.Flatten<RawDictionary>;

async function fetchDictionary(locale: Locale): Promise<Dictionary> {
    const dict: RawDictionary = (await import(`./i18n/${locale}.ts`)).dict;
    return i18n.flatten(dict); // flatten the dictionary to make all nested keys available top-level
}

const App: Component = () => {
    return (
        <>
            <Greeting />
            <AboutMe />
            <TechUniverse />
            <ContactMe />
        </>
    );
};

export default App;
