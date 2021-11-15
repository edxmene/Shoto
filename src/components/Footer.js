import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyrigth &copy; Picate</Col>
        </Row>
      </Container>
      <h4>Footer</h4>
    </footer>
  );
};

export default Footer;
