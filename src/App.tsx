import type { Component } from 'solid-js';

import TechUniverse from './components/TechUniverse';
import Greeting from './components/Greeting';
import type * as i18n from '@solid-primitives/i18n';
import type { Dict } from './i18n/en';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

export type Locale = 'en' | 'ko' | 'fr';
export type RawDictionary = Dict;
export type Dictionary = i18n.Flatten<RawDictionary>;

const App: Component = () => {
    return (
        <>
            {/* <img
                src="/images/bg-dark-1.jpg"
                alt="background"
                class="-inset-y-1/2 fixed blur-[2px]"
            /> */}
            <Greeting />
            <AboutMe />
            <TechUniverse />
            <ContactMe />
        </>
    );
};

export default App;
