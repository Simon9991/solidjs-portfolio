import type { Dict } from "./en";

export const dict: Dict = {
  greeting: {
    hello: "Hello! Je suis Simon",
    description: "Un développeur fullstack français en Corée du Sud",
    cards: {
      fullstack: "Expertise fullstack",
      international: "Expérience internationale",
      lowLevel: "Passion pour les langages bas niveau",
    },
    scrollDown: "Défilez vers le bas pour en savoir plus sur moi!",
  },
  goodbye: (name: string) => `au revoir ${name}`,
  food: {
    meat: "meat",
    fruit: "fruit",
  },
};
