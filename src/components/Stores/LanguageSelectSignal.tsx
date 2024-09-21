import { createContext, useContext, createSignal, type JSX, type Accessor } from 'solid-js';

export const LanguageOptions = {
    en: 'en',
    ko: 'ko',
    fr: 'fr',
} as const;
export type Language = (typeof LanguageOptions)[keyof typeof LanguageOptions];

export type LanguageContextType = {
    language: Accessor<Language>;
    setLanguage: (language: Language) => void;
};

const LanguageSelectContext = createContext<LanguageContextType>();

export function LanguageSelectProvider(props: { children: JSX.Element }) {
    const [language, setLanguage] = createSignal<Language>(LanguageOptions.en);

    return (
        <LanguageSelectContext.Provider value={{ language, setLanguage }}>
            {props.children}
        </LanguageSelectContext.Provider>
    );
}

export function useLanguageSelect() {
    const context = useContext(LanguageSelectContext);
    if (!context) {
        throw new Error('useLanguageSelect must be used within a LanguageSelectProvider');
    }
    return context;
}
