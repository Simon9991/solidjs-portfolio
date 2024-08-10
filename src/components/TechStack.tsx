import { For, type Component } from 'solid-js';

import styles from '../styles/TechStack.module.scss';

interface StackDetailsProps {
    label: string;
    link: string;
    alt: string;
}

const StackDetails: Component<StackDetailsProps> = ({ label, link, alt }) => {
    return (
        <div class={styles.stackItem}>
            <img src={link} alt={alt} />
            <p>{label}</p>
        </div>
    );
};

const TechStack: Component = () => {
    interface Stack {
        key: number;
        label: string;
        link: string;
        alt: string;
    }

    const stack: Stack[] = [
        {
            key: 0,
            label: 'Rust',
            link: 'https://img.icons8.com/?size=100&id=B1VZ9ZRl8Vwt&format=png&color=000000',
            alt: 'Rust',
        },
        {
            key: 1,
            label: 'React',
            link: 'https://img.icons8.com/color/96/000000/react-native.png',
            alt: 'React',
        },
        {
            key: 2,
            label: 'JavaScript & TypeScript',
            link: 'https://img.icons8.com/color/96/000000/typescript.png',
            alt: 'JavaScript - TypeScript',
        },
        {
            key: 3,
            label: 'HTML',
            link: 'https://img.icons8.com/color/96/000000/html-5.png',
            alt: 'HTML',
        },
        {
            key: 4,
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
