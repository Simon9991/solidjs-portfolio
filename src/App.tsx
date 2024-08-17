import { onCleanup, type Component, onMount } from 'solid-js';

import styles from './App.module.scss';
import TechStack from './components/TechStack';

const App: Component = () => {
    let greetingDiv: HTMLElement | null = null;
    let header: HTMLElement | null = null;
    let throttleTimeout: number | null = null;

    function handleScroll() {
        if (throttleTimeout || !greetingDiv || !header) return;

        throttleTimeout = setTimeout(() => {
            if (!greetingDiv || !header) return;

            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            const startFadingAt = 70; // Start fading after scrolling 100px
            const endFadingAt = 170; // Fully transparent after scrolling 300px

            if (scrollTop > startFadingAt) {
                const opacity = 1 - (scrollTop - startFadingAt) / (endFadingAt - startFadingAt);
                header.style.opacity = Math.max(opacity, 0).toString();
            } else {
                header.style.opacity = '1';
            }
            throttleTimeout = null;
        }, 25); // 25ms delay
    }

    window.addEventListener('scroll', handleScroll);

    onMount(() => {
        greetingDiv = document.getElementById('div-greeting');
        header = document.getElementById('main-header');
    });

    onCleanup(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div id="app-div" class={styles.App}>
            <header id="main-header" class={styles.header}>
                <div id="div-greeting" class={styles.greeting}>
                    <p>Hey! I am</p>
                    <h1>Simon Bernabeu</h1>
                    <p>a software engineer currently living in South Korea</p>
                </div>

                <div class={styles.scrollText}>
                    <p>Scroll down to see more</p>
                    {/* <FiChevronsRight size={23} class="rotate-90" /> */}
                </div>
            </header>

            <div class={styles.otherInformation}>
                <TechStack />
            </div>
        </div>
    );
};

export default App;
