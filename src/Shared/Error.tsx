import React from "react";
import { Card, Modal } from "react-bootstrap";

export const Error = ({ show, handleClose }: any) => {
  return (
    <Card className="text-center" bg="danger" style={{ zIndex: 100 }}>
      <Card.Header>compléter la phrase</Card.Header>
      <Card.Body>
        <Card.Text>Nyima Nyima</Card.Text>
      </Card.Body>
    </Card>
  );
};
