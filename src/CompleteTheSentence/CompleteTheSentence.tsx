import React, { useCallback, useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
// import { Success } from "../Shared/Success";
// import { Error } from "../Shared/Error";
import { Sentence, sentences } from "./sentences";

export const CompleteTheSentence = () => {
  const [sentenceIndex, setSentenceIndex] = useState(1);
  const [selectedSentence, setSelectedSentence] = useState<Sentence>(
    sentences[0]
  );
  const [selectedSentenceWithGapFormat, setSelectedSentenceWithGapFormat] =
    useState<string>("");
  const [showResponse, setShowResponse] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>();
  const [score, setScore] = useState(0);

  console.log(1, sentenceIndex);

  const selectNewSentence = useCallback(() => {
    const sentence = sentences[sentenceIndex];
    sentence.options.sort((a, b) => {
      if (Math.random() > 0.5) {
        return 1;
      }
      return -1;
    });
    setSelectedSentence(sentence);
    setSentenceIndex(
      sentenceIndex < sentences.length - 1 ? sentenceIndex + 1 : 0
    );
  }, [setSelectedSentence, sentenceIndex, setSentenceIndex]);

  useEffect(() => {
    setSelectedSentenceWithGapFormat(
      selectedSentence
        ? selectedSentence.sentenceWithGap
            .split("|DELIMITER|")
            .reduce((prev, curr, index) => {
              return index > 0 ? `${prev} ______ ${curr}` : `${curr}`;
            }, "")
        : ""
    );
  }, [selectedSentence]);

  const handleClick = useCallback(
    (option) => {
      option.correct ? setScore(score + 1) : setScore(0);
      setSelectedOption(option);
      setShowResponse(true);
      setTimeout(() => {
        setShowResponse(false);
        setTimeout(() => {
          selectNewSentence();
        }, 200);
      }, 500);
    },
    [score, selectNewSentence]
  );

  const returnButtonVariant = useCallback(
    (option: any) => {
      if (showResponse) {
        if (option.id === selectedOption?.id && option.correct) {
          return {
            backgroundColor: "green",
          };
        }
        if (option.id === selectedOption?.id) {
          return {
            backgroundColor: "red",
          };
        }
      }
      return {
        backgroundColor: "transparent",
      };
    },
    [selectedOption, showResponse]
  );

  return (
    <div>
      <Card
        className="text-center"
        bg="dark"
        style={{ zIndex: 100, width: "80vw" }}
      >
        <Card.Header className="mt-3">
          <h2>compléter la phrase</h2>
        </Card.Header>
        <Card.Body>
          {selectedSentence && (
            <img
              style={{ height: "100px" }}
              src={
                selectedSentence && selectedSentence.hasImage
                  ? require(`./images/complete_${selectedSentence?.id}.jpg`)
                  : require(`./images/complete_question_mark.gif`)
              }
              alt="supports q"
            />
          )}
          <Card.Text>{selectedSentenceWithGapFormat}</Card.Text>
          <Container className="multipleChoice">
            {selectedSentence &&
              selectedSentence.options.map((option) => {
                return (
                  <button
                    style={returnButtonVariant(option)}
                    className="m-1 btn"
                    key={option.id}
                    onClick={() => handleClick(option)}
                  >
                    {option.value}
                  </button>
                );
              })}
          </Container>
        </Card.Body>
      </Card>
      <Card
        className="text-center"
        bg="dark"
        style={{ zIndex: 100, margin: "15px" }}
      >
        <Card.Header>série victorieuse</Card.Header>
        <Card.Body>
          <Card.Title
            style={score === 0 ? { color: "red" } : { color: "green" }}
          >
            {score}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
