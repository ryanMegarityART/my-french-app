import React from "react";
import { Card } from "react-bootstrap";

export const Success = () => {
  return (
    <Card className="text-center" bg="info" style={{ zIndex: 100 }}>
      <Card.Header>compléter la phrase</Card.Header>
      <Card.Body>
        <Card.Text>Tres Bien!</Card.Text>
      </Card.Body>
    </Card>
  );
};
