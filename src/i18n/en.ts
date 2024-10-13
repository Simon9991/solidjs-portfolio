export const dict = {
    // Greeting
    greeting: {
        hello: 'Bonjour! I am Simon',
        description:
            'Combining French elegance with Korean innovation to build cutting-edge applications.',
        cards: {
            fullstack: 'Fullstack Expertise',
            international: 'International Experience',
            lowLevel: 'Low-level Language Enthusiast',
        },
        scrollDown: 'Scroll down to know more about me!',
    },

    // About Me
    aboutMe: {
        title: 'About Me',
        description: [
            'As a passionate {fullstack} with {international}, I bring a unique blend of technical expertise to every project.',
            'My journey, from the charming streets of {cassis} to the bustling tech scene of {southKorea}, has honed my skills in creating robust, scalable applications using {cuttingEdge}.',
            'I combine creativity with problem-solving to deliver {intuitiveSolutions}.',
        ],
        fullstack: 'full stack developer',
        international: 'international experience',
        cassis: 'Cassis',
        southKorea: 'South Korea',
        cuttingEdge: 'cutting-edge technologies',
        intuitiveSolutions: 'intuitive and user-friendly solutions',
    },

    // Tech Universe
    techUniverse: {
        title: 'My Projects',
        projects: [
            {
                id: 'dyl-ecosystem',
                name: 'DoohYouLike Ecosystem',
                tags: ['Svelte', 'TailwindCSS', 'Rust', 'C#', 'React Native', 'Go'],
                description:
                    'Developed a comprehensive ecosystem for DoohYouLike, including web frontends (Svelte), mobile app (React Native), and high-performance backends (Rust, Go, C#).',
            },
            {
                id: 'anti-cheating-tools',
                name: 'AntiCheating Tools',
                tags: ['Rust', 'Low-level'],
                description:
                    'Developed robust anti-cheating tools using Rust, leveraging low-level programming techniques to ensure fair gameplay in online environments.',
            },
            {
                id: 'chess-ai',
                name: 'Chess AI',
                tags: ['C', 'C++', 'Rust'],
                description:
                    'Implemented a chess AI engine in multiple languages (C, C++, Rust) to compare performance and explore language-specific optimizations.',
            },
            {
                id: 'portfolio',
                name: 'This Portfolio',
                tags: ['SolidJS', 'TailwindCSS'],
                description:
                    'Created a responsive and modern portfolio website using SolidJS for efficient rendering and TailwindCSS for streamlined styling.',
            },
            {
                id: '3d-game-opengl',
                name: '3D Game w/ OpenGL',
                tags: ['C', 'C++'],
                description:
                    'Built a 3D game engine from scratch using OpenGL, demonstrating proficiency in graphics programming and game development fundamentals.',
            },
            {
                id: 'personal-terminal-shell',
                name: 'Personal Terminal Shell',
                tags: ['C', 'C++'],
                description:
                    'Crafted my own terminal shell, based on bash, to learn more about how a shell works under the hood.',
            },
            {
                id: 'address-fixer',
                name: 'Address Fixer',
                tags: ['Rust', 'Google Maps API'],
                description:
                    'Created a utility in Rust that validates and corrects addresses by cross-referencing with the Google Maps API, improving data accuracy for location-based services.',
            },
        ],
    },
};

export type Dict = typeof dict;
