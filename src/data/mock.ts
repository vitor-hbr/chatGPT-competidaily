import Suggestion from '../model/Suggestion';
import Theme from '../model/Theme';

export const themesData: Theme[] = [
  {
    id: 0,
    name: 'Gosto Musical',
  },
  {
    id: 1,
    name: 'Cinema',
  },
  {
    id: 2,
    name: 'Séries',
  },
  {
    id: 3,
    name: 'Fim do Mundo',
  },
  {
    id: 4,
    name: 'Apocalipse Zumbi',
  },
  {
    id: 5,
    name: 'Viagens',
  },
  {
    id: 6,
    name: 'Familia',
  },
  {
    id: 7,
    name: 'Comida',
  },
  {
    id: 8,
    name: 'Hobbies',
  },
  {
    id: 9,
    name: 'Manias Estranhas',
  },
  {
    id: 10,
    name: 'Dinheiro',
  },
  {
    id: 11,
    name: 'Viagem no Tempo',
  },
  {
    id: 12,
    name: 'Entretenimento',
  },
];

export const suggestionsData: Suggestion[] = [
  {
    id: 0,
    text: 'Se você pudesse mudar um evento do passado, qual seria e por quê?',
    themeID: 11,
  },
  {
    id: 1,
    text: 'Qual é o hobby que você gostaria de aprender, mas ainda não teve a chance?',
    themeID: 8,
  },
  {
    id: 2,
    text: 'Qual é a mania mais inusitada ou inesperada que você tem?',
    themeID: 9,
  },
  {
    id: 3,
    text: 'Qual é a sua memória mais engraçada com a sua família?',
    themeID: 6,
  },
  {
    id: 4,
    text: 'Qual seria a sua música preferida para ouvir durante o fim do mundo?',
    themeID: 3,
  },
];
