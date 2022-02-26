export interface Sentence {
  sentenceWithGap: string;
  options: {
    id: number;
    value: string;
    correct: boolean;
  }[];
}

export const sentences: Sentence[] = [
  {
    sentenceWithGap: "Je |DELIMITER| un cafe s'il vous plait.",
    options: [
      { id: 1, value: "voudrais", correct: true },
      { id: 2, value: "voir", correct: false },
      { id: 3, value: "fait", correct: false },
    ],
  },
  {
    sentenceWithGap: "|DELIMITER| mon frère",
    options: [
      { id: 1, value: "C'est", correct: true },
      { id: 2, value: "Il est", correct: false },
      { id: 3, value: "Elle est", correct: false },
    ],
  },
];
