import { createContext, useContext, createSignal, type JSX } from 'solid-js';

// Define the shape of our context
type DarkModeContextType = [
    () => boolean,
    { toggle: () => void; setDarkMode: (value: boolean) => void },
];

// Create the context
const DarkModeContext = createContext<DarkModeContextType>();

// Create a provider component
export function DarkModeProvider(props: { children: JSX.Element }) {
    const [isDarkMode, setIsDarkMode] = createSignal(false);

    const darkModeUtils = {
        toggle: () => setIsDarkMode(!isDarkMode()),
        setDarkMode: (value: boolean) => setIsDarkMode(value),
    };

    return (
        <DarkModeContext.Provider value={[isDarkMode, darkModeUtils]}>
            {props.children}
        </DarkModeContext.Provider>
    );
}

// Create a custom hook to use the dark mode context
export function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
}

// How to access in other .tsx components:
// 1. Wrap your app or a part of it with the DarkModeProvider in your main component:
//    <DarkModeProvider>
//      <App />
//    </DarkModeProvider>
//
// 2. In any child component, use the useDarkMode hook:
//    const [isDarkMode, { toggle, setDarkMode }] = useDarkMode();
//
// 3. Now you can use isDarkMode() to check the current mode,
//    toggle() to switch between modes, and
//    setDarkMode(true/false) to set a specific mode.
