import React, { useState } from 'react'
import { Col, Container, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import DisplayCount from './DisplayCount';

function DisplayTodos() {
  const [todos, setTodos] = useState([
    {
      title: 'Books',
      descriptions: 'readable'
    },
    {
      title: 'Row',
      descriptions: 'Redish'
    }
  ])
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <h3>All Todos are here </h3>
              <DisplayCount />
              <ListGroup>
                {
                  todos.map((todo, index) => (
                    <ListGroup.Item key={index}>
                      <h4>{todo.title}</h4>
                      <p>{todo.descriptions}</p>
                    </ListGroup.Item>
                  ))
                }
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default DisplayTodos;
