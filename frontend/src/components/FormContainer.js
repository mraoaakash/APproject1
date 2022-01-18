import React from "react";
import { Container, Row, Col } from "react-bootstrap";
/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 */
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
