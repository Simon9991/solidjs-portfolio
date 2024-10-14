import type { Dict } from './en';

export const dict: Dict = {
    greeting: {
        hello: 'Hello! Je suis Simon',
        description:
            "Alliant l'élégance française à l'innovation coréenne pour créer des applications de pointe.",
        cards: {
            fullstack: 'Expertise Fullstack',
            international: 'Expérience Internationale',
            lowLevel: 'Passionné des langages bas niveau',
        },
        scrollDown: 'Faites défiler pour en savoir plus sur moi !',
    },
    aboutMe: {
        title: 'À Propos de Moi',
        description: [
            "En tant que {fullstack} passionné avec une {international}, j'apporte un mélange unique d'expertise technique à chaque projet.",
            "Mon parcours, des rues charmantes de {cassis} à la scène technologique dynamique de la {southKorea}, a affiné mes compétences dans la création d'applications robustes et évolutives utilisant des {cuttingEdge}.",
            'Je combine créativité et résolution de problèmes pour fournir des {intuitiveSolutions}.',
        ],
        fullstack: 'développeur full stack',
        international: 'expérience internationale',
        cassis: 'Cassis',
        southKorea: 'Corée du Sud',
        cuttingEdge: 'technologies de pointe',
        intuitiveSolutions: 'solutions intuitives et conviviales',
    },
    techUniverse: {
        title: 'Mes Projets',
        projects: [
            {
                id: 'dyl-ecosystem',
                name: 'Écosystème DoohYouLike',
                tags: ['Svelte', 'TailwindCSS', 'Rust', 'C#', 'React Native', 'Go'],
                description:
                    "Développement d'un écosystème complet pour DoohYouLike, comprenant des interfaces web (Svelte), une application mobile (React Native) et des backends haute performance (Rust, Go, C#).",
            },
            {
                id: 'anti-cheating-tools',
                name: 'Outils Anti-Triche',
                tags: ['Rust', 'Bas niveau'],
                description:
                    "Développement d'outils anti-triche robustes en utilisant Rust, exploitant des techniques de programmation bas niveau pour assurer un gameplay équitable dans les environnements en ligne.",
            },
            {
                id: 'portfolio',
                name: 'Ce Portfolio',
                tags: ['SolidJS', 'TailwindCSS'],
                description:
                    "Création d'un site web de portfolio moderne et réactif en utilisant SolidJS pour un rendu efficace et TailwindCSS pour un style rationalisé.",
            },
            {
                id: 'chess-ai',
                name: "IA d'Échecs",
                tags: ['C', 'C++', 'Rust'],
                description:
                    "Implémentation d'un moteur d'IA d'échecs dans plusieurs langages (C, C++, Rust) pour comparer les performances et explorer les optimisations spécifiques à chaque langage.",
            },
            {
                id: 'address-fixer',
                name: "Correcteur d'Adresses",
                tags: ['Rust', 'API Google Maps'],
                description:
                    "Création d'un utilitaire en Rust qui valide et corrige les adresses en les comparant à l'API Google Maps, améliorant la précision des données pour les services basés sur la localisation.",
            },
            {
                id: '3d-game-opengl',
                name: 'Jeu 3D avec OpenGL',
                tags: ['C', 'C++'],
                description:
                    "Construction d'un moteur de jeu 3D à partir de zéro en utilisant OpenGL, démontrant une maîtrise de la programmation graphique et des fondamentaux du développement de jeux.",
            },
            {
                id: 'personal-terminal-shell',
                name: 'Shell Personnel',
                tags: ['C', 'C++'],
                description:
                    "Création de mon propre shell terminal, basé sur bash, pour mieux comprendre le fonctionnement interne d'un shell.",
            },
        ],
    },

    // Contact Me
    contactMe: {
        title: 'Contactez-moi',
        form: {
            name: 'Nom',
            email: 'E-mail',
            message: 'Message',
            submit: 'Envoyer le message',
        },
        getInTouch: 'Entrez en contact',
        description:
            "N'hésitez pas à me contacter si vous avez des questions ou si vous voulez simplement échanger !",
        email: 'votre.email@exemple.com',
        github: 'GitHub',
        linkedin: 'LinkedIn',
    },
};
