import type { Dict } from './en';

export const dict: Dict = {
    greeting: {
        hello: 'Bonjour! 저는 Simon입니다.',
        description: 'Todo',
        cards: {
            fullstack: '풀스택 전문가',
            international: 'Todo',
            lowLevel: 'Todo',
        },
        scrollDown: 'Todo',
    },
    goodbye: (name: string) => `goodbye ${name}`,
    food: {
        meat: '고기',
        fruit: '과일',
    },
};
