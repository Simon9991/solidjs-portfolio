import type { Dict } from './en';

export const dict: Dict = {
    greeting: {
        hello: 'Hello! Je suis Simon',
        description: 'Un développeur fullstack français en Corée du Sud',
        cards: {
            fullstack: 'Expertise fullstack',
            international: 'Expérience internationale',
            lowLevel: 'Passion pour les langages bas niveau',
        },
        scrollDown: 'Défilez vers le bas pour explorer mon univers tech!',
    },
    goodbye: (name: string) => `goodbye ${name}`,
    food: {
        meat: 'meat',
        fruit: 'fruit',
    },
};
