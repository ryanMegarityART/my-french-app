import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "react-bootstrap";

function App() {
  return (
    <div id="flag">
      <Container className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button>Allons-y!</Button>
        </header>
      </Container>
    </div>
  );
}

export default App;
