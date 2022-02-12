import React, { useCallback, useEffect, useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import { Success } from "../Shared/Success";
import { Error } from "../Shared/Error";
import { Sentence, sentences } from "./sentences";

export const CompleteTheSentence = () => {
  const [selectedSentence, setSelectedSentence] = useState<Sentence>();
  const [selectedSentenceWithGapFormat, setSelectedSentenceWithGapFormat] =
    useState<string>("");
  const [showSuccess, setShowSucces] = useState(false);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    const sentence = sentences[0];
    sentence.options.sort((a, b) => {
      if (Math.random() > 0.5) {
        return 1;
      }
      return -1;
    });
    setSelectedSentence(sentence);
  }, []);
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
  const handleClick = useCallback((option) => {
    console.log(option);
    option.correct ? setShowSucces(true) : setShowError(true);
    setTimeout(() => {
      setShowError(false);
      setShowSucces(false);
    }, 1500);
  }, []);
  return (
    <div>
      {showSuccess && <Success />}
      {showError && <Error />}
      {!showSuccess && !showError && (
        <Card className="text-center" bg="dark" style={{ zIndex: 100 }}>
          <Card.Header>compléter la phrase</Card.Header>
          <Card.Body>
            <Card.Text>{selectedSentenceWithGapFormat}</Card.Text>
            <Container className="multipleChoice">
              {selectedSentence &&
                selectedSentence.options.map((option) => {
                  return (
                    <Button
                      variant="secondary"
                      className="m-1"
                      key={option.value}
                      onClick={() => handleClick(option)}
                    >
                      {option.value}
                    </Button>
                  );
                })}
            </Container>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
