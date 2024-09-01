import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const EmployeeDashboard = () => {
  return (
    <Container>
      <h1 className="my-4">Employee Dashboard</h1>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Self-Assessment</Card.Title>
              <Card.Text>
                Complete self-assessments using generated question banks and download completion certificates.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Feedback Submission</Card.Title>
              <Card.Text>Provide feedback on the generated questions to help improve the system.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Learning and Development</Card.Title>
              <Card.Text>Access learning materials and track progress.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Request Learning Plan</Card.Title>
              <Card.Text>Request a personalized learning plan for technical upskilling.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeDashboard;