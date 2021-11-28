import React from "react";
import { Card, Button } from "react-bootstrap";

const PlaceItem = ({
  title,
  description,
  imageURL,
  address,
  location,
  creator,
}) => {
  return (
    <Card className="places">
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>
          <strong>{title}</strong>
        </Card.Title>
        <Card.Text>{address}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button variant="warning" size="sm">
          VIEW ON MAP
        </Button>{" "}
        <Button variant="success" size="sm">
          EDIT
        </Button>{" "}
        <Button variant="primary" size="sm">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PlaceItem;
