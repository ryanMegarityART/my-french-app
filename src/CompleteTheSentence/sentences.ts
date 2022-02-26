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
      { id: 3, value: "femme", correct: false },
    ],
  },
  {
    id: 4,
    sentenceWithGap: "Qui c'est? |DELIMITER| moi, ouvre la porte s'il te plait !",
    options: [
      { id: 1, value: "C'est", correct: true },
      { id: 2, value: "Bonjour", correct: false },
      { id: 3, value: "Votre", correct: false },
    ],
  },
  {
    id: 5,
    sentenceWithGap: "Je te présente Madame Kirilova. |DELIMITER| ma prof d'bulgar",
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
];
