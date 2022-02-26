import React, { useCallback, useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
// import { Success } from "../Shared/Success";
// import { Error } from "../Shared/Error";
import { Sentence, sentences } from "./sentences";

export const CompleteTheSentence = () => {
  const [selectedSentence, setSelectedSentence] = useState<Sentence>();
  const [selectedSentenceWithGapFormat, setSelectedSentenceWithGapFormat] =
    useState<string>("");
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>();
  const [score, setScore] = useState(0);

  const selectNewSentence = useCallback(() => {
    let randomIndex = Math.floor(Math.random() * sentences.length);
    let sentence = sentences[randomIndex];
    console.log(
      sentence,
      selectedSentence,
      sentence?.id === selectedSentence?.id
    );
    if (selectedSentence) {
      console.log(
        sentence,
        selectedSentence,
        sentence?.id === selectedSentence?.id
      );
      while (sentence?.id === selectedSentence?.id) {
        randomIndex = Math.floor(Math.random() * sentences.length);
        sentence = sentences[randomIndex];
      }
    }
    sentence.options.sort((a, b) => {
      if (Math.random() > 0.5) {
        return 1;
      }
      return -1;
    });
    setSelectedSentence(sentence);
  }, [setSelectedSentence, selectedSentence]);

  useEffect(() => {
    selectNewSentence();
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

  const handleClick = useCallback(
    (option) => {
      console.log(option);
      option.correct ? setScore(score + 1) : setScore(0);
      console.log(score);
      setSelectedOption(option);
      setAnswerCorrect(option.correct);
      setShowResponse(true);
      setTimeout(() => {
        setAnswerCorrect(false);
        setShowResponse(false);
        selectNewSentence();
      }, 800);
    },
    [score, selectNewSentence]
  );

  const returnButtonVariant = useCallback(
    (option: any) => {
      if (showResponse) {
        if (option.id === selectedOption?.id && option.correct) {
          return "success";
        } else if (option.id === selectedOption?.id) {
          return "danger";
        } else {
          return "secondary";
        }
      }
      return "secondary";
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
              src={require(`./images/complete_${selectedSentence?.id}.jpg`)}
            />
          )}
          <Card.Text>{selectedSentenceWithGapFormat}</Card.Text>
          <Container className="multipleChoice">
            {selectedSentence &&
              selectedSentence.options.map((option) => {
                return (
                  <Button
                    variant={returnButtonVariant(option)}
                    className="m-1"
                    key={option.id}
                    onClick={() => handleClick(option)}
                  >
                    {option.value}
                  </Button>
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
        <Card.Header className="mt-3">
          <h4>série victorieuse</h4>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <h4>{score}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
