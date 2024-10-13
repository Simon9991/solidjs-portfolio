import type { Dict } from "./en";

export const dict: Dict = {
  greeting: {
    hello: "Bonjour! 저는 씨몽입니다.",
    description: "Todo",
    cards: {
      fullstack: "풀스택 전문가",
      international: "Todo",
      lowLevel: "Todo",
    },
    scrollDown: "아래로 스크롤하여 더 많은 정보를 알아보세요!",
  },
  goodbye: (name: string) => `${name}님 안녕히가세요`,
  food: {
    meat: "고기",
    fruit: "과일",
  },
};
