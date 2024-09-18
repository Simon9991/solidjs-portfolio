/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { DarkModeProvider } from './components/UI/DarkMode';
import { LanguageSelectProvider } from './components/Stores/LanguageSelectSignal';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

render(
    () => (
        <DarkModeProvider>
            <LanguageSelectProvider>
                <App />
            </LanguageSelectProvider>
        </DarkModeProvider>
    ),
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    root!,
);
