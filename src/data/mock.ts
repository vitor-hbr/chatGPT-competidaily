import Suggestion from "../model/Suggestion";
import Theme from "../model/Theme";

export const themesData: Theme[] = [
  {
    id: 0,
    name: "Gosto Musical",
  },
  {
    id: 1,
    name: "Cinema",
  },
  {
    id: 2,
    name: "Séries",
  },
  {
    id: 3,
    name: "Fim do Mundo",
  },
  {
    id: 4,
    name: "Apocalipse Zumbi",
  },
  {
    id: 5,
    name: "Viagens",
  },
  {
    id: 6,
    name: "Familia",
  },
  {
    id: 7,
    name: "Comida",
  },
  {
    id: 8,
    name: "Hobbies",
  },
  {
    id: 9,
    name: "Manias Estranhas",
  },
  {
    id: 10,
    name: "Dinheiro",
  },
  {
    id: 11,
    name: "Viagem no Tempo",
  },
  {
    id: 12,
    name: "Entretenimento",
  },
];

export const suggestionsData: Suggestion[] = [
  {
    id: 0,
    text: "O que você acha de um filme de terror?",
    themeID: 1,
  },
  {
    id: 1,
    text: "O que você acha de um filme de comédia?",
    themeID: 1,
  },
  {
    id: 2,
    text: "O que você acha de um filme de ação?",
    themeID: 1,
  },
];
