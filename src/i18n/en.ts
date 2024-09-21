export const dict = {
    greeting: {
        hello: 'Bonjour! I am Simon',
        description: 'A French fullstack developer in South Korea',
        cards: {
            fullstack: 'Fullstack Expertise',
            international: 'International Experience',
            lowLevel: 'Low-level Language Enthusiast',
        },
        scrollDown: 'Scroll down to explore my tech universe!',
    },
    goodbye: (name: string) => `goodbye ${name}`,
    food: {
        meat: 'meat',
        fruit: 'fruit',
    },
};

export type Dict = typeof dict;
