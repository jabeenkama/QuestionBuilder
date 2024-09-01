import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const TrainerDashboard = () => {
  return (
    <Container>
      <h1 className="my-4">Trainer Dashboard</h1>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Upload Curriculum</Card.Title>
              <Card.Text>Upload curricula in CSV or Excel formats, including topics and subtopics.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Generate Question Bank</Card.Title>
              <Card.Text>
                Select technologies, topics, specify the number of questions, and set difficulty levels to generate
                question banks.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Review and Edit Question Bank</Card.Title>
              <Card.Text>Review generated question banks and make necessary adjustments.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Download Question Bank</Card.Title>
              <Card.Text>Download question banks in Excel and PDF formats.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Feedback Collection</Card.Title>
              <Card.Text>Gather feedback from users to improve question quality and relevance.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TrainerDashboard;