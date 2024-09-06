import { For, type Component } from 'solid-js';

import styles from '../styles/TechStack.module.scss';

interface Stack {
    label: string;
    link: string;
    alt: string;
    projects: string[];
}

const StackDetails: Component<Stack> = ({ label, link, alt, projects }) => {
    return (
        <a class={styles.stackItem} href="/">
                <h3>{label}</h3>
            <div class={styles.imgWrapper}>
                <img src={link} alt={alt} />
            </div>
                <ul>
                    <For each={projects}>
                        {(project) => <li>{project}</li>}
                    </For>
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
            projects: ['AntiCheating tools', 'Addresses fixer', 'WebAssembly', 'SeaORM Backend'],
        },
        {
            label: 'C/C++',
            link: 'https://img.icons8.com/color/96/000000/c-plus-plus-logo.png',
            alt: 'C/C++',
            projects: ['Own Chess AI', '3D Game w/ OpenGL', '2D Game with SFML', 'Personnal CLI'],
        },
        {
            label: 'JavaScript',
            link: 'https://img.icons8.com/color/96/000000/typescript.png',
            alt: 'JavaScript - TypeScript',
            projects: ['SvelteKit', 'SolidJS', 'React', 'React Native App', 'NodeJS Backend', 'Discord Bots'],
        },
        {
            label: 'HTML',
            link: 'https://img.icons8.com/color/96/000000/html-5.png',
            alt: 'HTML',
            projects: ['SvelteKit', 'SolidJS', 'React'],
        },
        {
            label: 'CSS',
            link: 'https://img.icons8.com/color/96/000000/css3.png',
            alt: 'CSS',
            projects: ['CSS', 'SASS', 'TailwindCSS'],
        },
        {
            label: 'SQL',
            link: 'https://img.icons8.com/color/96/000000/sql.png',
            alt: 'SQL',
            projects: ['Postgres', 'MySQL', 'MongoDB'],
        },
    ];

    return (
        <div class={styles.TechStack}>
            <h2>Tech Stack</h2>
            <div class={styles.stackCarrousel}>
                <For each={stack}>
                    {({ label, link, alt, projects }) => (
                        <StackDetails label={label} link={link} alt={alt} projects={projects} />
                    )}
                </For>
            </div>
        </div>
    );
};

export default TechStack;
