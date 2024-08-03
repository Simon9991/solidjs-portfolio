import type { Component } from 'solid-js';

import styles from '../styles/TechStack.module.scss';

const TechStack: Component = () => {
    return (
        <div class={styles.TechStack}>
            <h2>Tech Stack</h2>
            <div class="flex flex-wrap justify-center mt-4">
                <div class="flex flex-col items-center justify-center w-1/3 p-4">
                    <img
                        src="https://img.icons8.com/?size=100&id=B1VZ9ZRl8Vwt&format=png&color=000000"
                        alt="Rust"
                    />
                    <p class="text-lg font-semibold">Rust</p>
                </div>
                <div class="flex flex-col items-center justify-center w-1/3 p-4">
                    <img
                        src="https://img.icons8.com/color/96/000000/react-native.png"
                        alt="React"
                    />
                    <p class="text-lg font-semibold">React</p>
                </div>
                <div class="flex flex-col items-center justify-center w-1/3 p-4">
                    <img
                        src="https://img.icons8.com/color/96/000000/javascript.png"
                        alt="JavaScript"
                    />
                    <p class="text-lg font-semibold">JavaScript</p>
                </div>
                <div class="flex flex-col items-center justify-center w-1/3 p-4">
                    <img
                        src="https://img.icons8.com/color/96/000000/typescript.png"
                        alt="TypeScript"
                    />
                    <p class="text-lg font-semibold">TypeScript</p>
                </div>
                <div class="flex flex-col items-center justify-center w-1/3 p-4">
                    <img src="https://img.icons8.com/color/96/000000/html-5.png" alt="HTML" />
                    <p class="text-lg font-semibold">HTML</p>
                </div>
                <div class="flex flex-col items-center justify-center w-1/3 p-4">
                    <img src="https://img.icons8.com/color/96/000000/css3.png" alt="CSS" />
                    <p class="text-lg font-semibold">CSS</p>
                </div>
            </div>
        </div>
    );
};

export default TechStack;
