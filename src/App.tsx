import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import { CompleteTheSentence } from "./CompleteTheSentence/CompleteTheSentence";

function App() {
  const [enterButtonClicked, setEnterButtonClicked] = useState(false);

  return (
    <div id="flag">
      <Container className="App">
        {!enterButtonClicked && (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Button onClick={() => setEnterButtonClicked(true)}>
              Allons-y!
            </Button>
          </header>
        )}
        {enterButtonClicked && (
          <header className="App-header">
            <CompleteTheSentence />
          </header>
        )}
      </Container>
    </div>
  );
}

export default App;
