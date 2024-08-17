import { For, type Component } from 'solid-js';

import styles from '../styles/TechStack.module.scss';

interface Stack {
    label: string;
    link: string;
    alt: string;
}

const StackDetails: Component<Stack> = ({ label, link, alt }) => {
    return (
        <a class={styles.stackItem} href="/">
            <div class={styles.imgWrapper}>
                <img src={link} alt={alt} />
            </div>
            <ul>
                <li>Frontend</li>
                <li>Backend</li>
                <li>Mobile</li>
            </ul>
        </a>
    );
};

const TechStack: Component = () => {
    const stack: Stack[] = [
        {
            label: 'Rust',
            link: 'https://img.icons8.com/?size=100&id=B1VZ9ZRl8Vwt&format=png&color=000000',
            alt: 'Rust',
        },
        {
            label: 'C/C++',
            link: 'https://img.icons8.com/color/96/000000/c-plus-plus-logo.png',
            alt: 'React',
        },
        {
            label: 'JavaScript',
            link: 'https://img.icons8.com/color/96/000000/typescript.png',
            alt: 'JavaScript - TypeScript',
        },
        {
            label: 'HTML',
            link: 'https://img.icons8.com/color/96/000000/html-5.png',
            alt: 'HTML',
        },
        {
            label: 'CSS',
            link: 'https://img.icons8.com/color/96/000000/css3.png',
            alt: 'CSS',
        },
    ];

    return (
        <div class={styles.TechStack}>
            <h2>Tech Stack</h2>
            <div class={styles.stackCarrousel}>
                <For each={stack}>
                    {({ label, link, alt }) => <StackDetails label={label} link={link} alt={alt} />}
                </For>
            </div>
        </div>
    );
};

export default TechStack;
