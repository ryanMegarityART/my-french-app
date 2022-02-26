export interface Sentence {
  id: number;
  sentenceWithGap: string;
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
    options: [
      { id: 1, value: "voudrais", correct: true },
      { id: 2, value: "voir", correct: false },
      { id: 3, value: "fait", correct: false },
    ],
  },
  {
    id: 2,
    sentenceWithGap: "|DELIMITER| mon frère",
    options: [
      { id: 1, value: "C'est", correct: true },
      { id: 2, value: "Il est", correct: false },
      { id: 3, value: "Elle est", correct: false },
    ],
  },
  {
    id: 3,
    sentenceWithGap: "C'est une |DELIMITER|",
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
    options: [
      { id: 1, value: "C'est", correct: true },
      { id: 2, value: "Elle est", correct: false },
      { id: 3, value: "Il est", correct: false },
    ],
  },
  {
    id: 6,
    sentenceWithGap: "Le matin, on dit: |DELIMITER|",
    options: [
      { id: 1, value: "Bonjour", correct: true },
      { id: 2, value: "Bonsoir", correct: false },
      { id: 3, value: "Poisson", correct: false },
    ],
  },
  {
    id: 7,
    sentenceWithGap: "C'est une |DELIMITER|",
    options: [
      { id: 1, value: "robe", correct: true },
      { id: 2, value: "cravat", correct: false },
      { id: 3, value: "bikini", correct: false },
    ],
  },
  {
    id: 8,
    sentenceWithGap: "C'est des |DELIMITER|",
    options: [
      { id: 1, value: "chaussures", correct: true },
      { id: 2, value: "chaussettes", correct: false },
      { id: 3, value: "cravats", correct: false },
    ],
  },
  {
    id: 9,
    sentenceWithGap: "Vous |DELIMITER| de la chance",
    options: [
      { id: 1, value: "avez", correct: true },
      { id: 2, value: "ont", correct: false },
      { id: 3, value: "sommes", correct: false },
    ],
  },
  {
    id: 10,
    sentenceWithGap: "Nous |DELIMITER| à la piscine",
    options: [
      { id: 1, value: "sommes", correct: true },
      { id: 2, value: "ont", correct: false },
      { id: 3, value: "êtes", correct: false },
    ],
  },
  {
    id: 11,
    sentenceWithGap: "Vous |DELIMITER| bilingues",
    options: [
      { id: 1, value: "êtes", correct: true },
      { id: 2, value: "ont", correct: false },
      { id: 3, value: "est", correct: false },
    ],
  },
  {
    id: 12,
    sentenceWithGap: "Nous |DELIMITER| une grand maison",
    options: [
      { id: 1, value: "avons", correct: true },
      { id: 2, value: "sommes", correct: false },
      { id: 3, value: "ont", correct: false },
    ],
  },
  {
    id: 13,
    sentenceWithGap: "Elles |DELIMITER| des idées",
    options: [
      { id: 1, value: "ont", correct: true },
      { id: 2, value: "sommes", correct: false },
      { id: 3, value: "est", correct: false },
    ],
  },
  {
    id: 14,
    sentenceWithGap: "Ils |DELIMITER| dans la bibliothèque",
    options: [
      { id: 1, value: "sont", correct: true },
      { id: 2, value: "sommes", correct: false },
      { id: 3, value: "ont", correct: false },
    ],
  },
  {
    id: 15,
    sentenceWithGap: "Elle |DELIMITER| médecin",
    options: [
      { id: 1, value: "est", correct: true },
      { id: 2, value: "à", correct: false },
      { id: 3, value: "sont", correct: false },
    ],
  },
];
