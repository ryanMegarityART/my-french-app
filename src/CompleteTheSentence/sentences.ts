export interface Sentence {
  id: number;
  sentenceWithGap: string;
  hasImage: boolean;
  options: {
    id: number;
    value: string;
    correct: boolean;
  }[];
}

export const sentences: Sentence[] = [
  {
    id: 1,
    sentenceWithGap: "Je |DELIMITER| un cafe s'il vous plait",
    hasImage: true,
    options: [
      { id: 1, value: "voudrais", correct: true },
      { id: 2, value: "voir", correct: false },
      { id: 3, value: "fait", correct: false },
    ],
  },
  {
    id: 2,
    sentenceWithGap: "|DELIMITER| mon frère",
    hasImage: true,
    options: [
      { id: 1, value: "C'est", correct: true },
      { id: 2, value: "Il est", correct: false },
      { id: 3, value: "Elle est", correct: false },
    ],
  },
  {
    id: 3,
    sentenceWithGap: "C'est une |DELIMITER|",
    hasImage: true,
    options: [
      { id: 1, value: "jupe", correct: true },
      { id: 2, value: "cravat", correct: false },
      { id: 3, value: "pull", correct: false },
    ],
  },
  {
    id: 4,
    sentenceWithGap:
      "Qui c'est? |DELIMITER| moi, ouvre la porte s'il te plait !",
    hasImage: true,
    options: [
      { id: 1, value: "C'est", correct: true },
      { id: 2, value: "Bonjour", correct: false },
      { id: 3, value: "Votre", correct: false },
    ],
  },
  {
    id: 5,
    sentenceWithGap:
      "Je te présente Madame Kirilova. |DELIMITER| ma prof d'bulgar",
    hasImage: true,
    options: [
      { id: 1, value: "C'est", correct: true },
      { id: 2, value: "Elle est", correct: false },
      { id: 3, value: "Il est", correct: false },
    ],
  },
  {
    id: 6,
    sentenceWithGap: "Le matin, on dit: |DELIMITER|",
    hasImage: true,
    options: [
      { id: 1, value: "Bonjour", correct: true },
      { id: 2, value: "Bonsoir", correct: false },
      { id: 3, value: "Poisson", correct: false },
    ],
  },
  {
    id: 7,
    sentenceWithGap: "C'est une |DELIMITER|",
    hasImage: true,
    options: [
      { id: 1, value: "robe", correct: true },
      { id: 2, value: "cravat", correct: false },
      { id: 3, value: "bikini", correct: false },
    ],
  },
  {
    id: 8,
    sentenceWithGap: "C'est des |DELIMITER|",
    hasImage: true,
    options: [
      { id: 1, value: "chaussures", correct: true },
      { id: 2, value: "chaussettes", correct: false },
      { id: 3, value: "cravats", correct: false },
    ],
  },
  {
    id: 9,
    sentenceWithGap: "Vous |DELIMITER| de la chance",
    hasImage: true,
    options: [
      { id: 1, value: "avez", correct: true },
      { id: 2, value: "ont", correct: false },
      { id: 3, value: "sommes", correct: false },
    ],
  },
  {
    id: 10,
    sentenceWithGap: "Nous |DELIMITER| à la piscine",
    hasImage: true,
    options: [
      { id: 1, value: "sommes", correct: true },
      { id: 2, value: "ont", correct: false },
      { id: 3, value: "êtes", correct: false },
    ],
  },
  {
    id: 11,
    sentenceWithGap: "Vous |DELIMITER| bilingues",
    hasImage: true,
    options: [
      { id: 1, value: "êtes", correct: true },
      { id: 2, value: "ont", correct: false },
      { id: 3, value: "est", correct: false },
    ],
  },
  {
    id: 12,
    sentenceWithGap: "Nous |DELIMITER| une grand maison",
    hasImage: true,
    options: [
      { id: 1, value: "avons", correct: true },
      { id: 2, value: "sommes", correct: false },
      { id: 3, value: "ont", correct: false },
    ],
  },
  {
    id: 13,
    sentenceWithGap: "Elles |DELIMITER| des idées",
    hasImage: true,
    options: [
      { id: 1, value: "ont", correct: true },
      { id: 2, value: "sommes", correct: false },
      { id: 3, value: "est", correct: false },
    ],
  },
  {
    id: 14,
    sentenceWithGap: "Ils |DELIMITER| dans la bibliothèque",
    hasImage: true,
    options: [
      { id: 1, value: "sont", correct: true },
      { id: 2, value: "sommes", correct: false },
      { id: 3, value: "ont", correct: false },
    ],
  },
  {
    id: 15,
    sentenceWithGap: "Elle |DELIMITER| médecin",
    hasImage: true,
    options: [
      { id: 1, value: "est", correct: true },
      { id: 2, value: "à", correct: false },
      { id: 3, value: "sont", correct: false },
    ],
  },
  {
    id: 16,
    sentenceWithGap: "Pour saluer, tu dis :  |DELIMITER| ",
    hasImage: false,
    options: [
      { id: 1, value: "Ça va ? Comment vas-tu ?", correct: false },
      {
        id: 2,
        value: "Ça va pas mal. Ça va bien. Comme ci comme ça.",
        correct: false,
      },
      { id: 3, value: "Salut, bonjour !", correct: true },
      { id: 4, value: "Au revoir, salut, à ce soir. ", correct: false },
      {
        id: 5,
        value: "Merci beaucoup ! Je vous remercie. Merci",
        correct: false,
      },
    ],
  },
  {
    id: 17,
    sentenceWithGap: "Pour dire au revoir, tu dis :  |DELIMITER| ",
    hasImage: false,
    options: [
      { id: 1, value: "Ça va ? Comment vas-tu ?", correct: false },
      {
        id: 2,
        value: "Ça va pas mal. Ça va bien. Comme ci comme ça.",
        correct: false,
      },
      { id: 3, value: "Salut, bonjour !", correct: false },
      { id: 4, value: "Au revoir, salut, à ce soir. ", correct: true },
      {
        id: 5,
        value: "Merci beaucoup ! Je vous remercie. Merci",
        correct: false,
      },
    ],
  },
  {
    id: 18,
    sentenceWithGap: "Pour demander comment ça va, tu dis :  |DELIMITER| ",
    hasImage: false,
    options: [
      { id: 1, value: "Ça va ? Comment vas-tu ?", correct: true },
      {
        id: 2,
        value: "Ça va pas mal. Ça va bien. Comme ci comme ça.",
        correct: false,
      },
      { id: 3, value: "Salut, bonjour !", correct: false },
      { id: 4, value: "Au revoir, salut, à ce soir. ", correct: false },
      {
        id: 5,
        value: "Merci beaucoup ! Je vous remercie. Merci",
        correct: false,
      },
    ],
  },
  {
    id: 19,
    sentenceWithGap: "pour dire comment ça va, tu dis :  |DELIMITER| ",
    hasImage: false,
    options: [
      { id: 1, value: "Ça va ? Comment vas-tu ?", correct: false },
      {
        id: 2,
        value: "Ça va pas mal. Ça va bien. Comme ci comme ça.",
        correct: true,
      },
      { id: 3, value: "Salut, bonjour !", correct: false },
      { id: 4, value: "Au revoir, salut, à ce soir. ", correct: false },
      {
        id: 5,
        value: "Merci beaucoup ! Je vous remercie. Merci",
        correct: false,
      },
    ],
  },
  {
    id: 20,
    sentenceWithGap: "Pour remercier, tu dis :  |DELIMITER| ",
    hasImage: false,
    options: [
      { id: 1, value: "Ça va ? Comment vas-tu ?", correct: false },
      {
        id: 2,
        value: "Ça va pas mal. Ça va bien. Comme ci comme ça.",
        correct: false,
      },
      { id: 3, value: "Salut, bonjour !", correct: false },
      { id: 4, value: "Au revoir, salut, à ce soir. ", correct: false },
      {
        id: 5,
        value: "Merci beaucoup ! Je vous remercie. Merci",
        correct: true,
      },
    ],
  },
];
