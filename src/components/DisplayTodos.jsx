import React from 'react'
import { Col, Container, Row ,Card} from 'react-bootstrap';

function DisplayTodos() {
  return (
    <Container>
      <Row>
        <Col>
         <Card className="mt-3 shadow-sm">
          <Card.Body>
              <h3>All Todos are here </h3>
          </Card.Body>
         </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default DisplayTodos;
