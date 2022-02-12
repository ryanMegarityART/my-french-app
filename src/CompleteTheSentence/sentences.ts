export interface Sentence {
  sentenceWithGap: string;
  options: {
    value: string;
    correct: boolean;
  }[];
}

export const sentences: Sentence[] = [
  {
    sentenceWithGap: "Je |DELIMITER| un cafe s'il vous plait.",
    options: [
      { value: "voudrais", correct: true },
      { value: "voir", correct: false },
      { value: "fait", correct: false },
    ],
  },
];
