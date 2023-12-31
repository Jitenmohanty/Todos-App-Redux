import React, { useState } from 'react'
import { Container, Col, Row, Card ,Form ,Button} from 'react-bootstrap';
import { addTodoAction } from '../redux/actions/todo';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function AddTodo({addTodoAction}) {
  const [todo , setTodo] =  useState({
        title:'',
        description:'',
        id:''
    })
  const handleSubmit = (e)=>{
    e.preventDefault();
    addTodoAction({...todo,id:v4()})
    setTodo({
        title:'',
        description:''
    })
  }

    return (
        <Container >
            <Row >
                <Col md={12}>
                    <Card>
                        <Card.Body >
                            <h3>Add Todo Here</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='mt-3'>
                                    <Form.Label>Todo Title</Form.Label>
                                    <Form.Control
                                     type="text"
                                      placeholder="Enter title"
                                      value={todo.title}
                                      onChange={event => setTodo({...todo ,title: event.target.value})}
                                      />
                                    <Form.Label>Todo Description</Form.Label>
                                    <Form.Control as="textarea" type="text" placeholder="Enter description"
                                    value={todo.description}
                                    onChange={event => setTodo({...todo ,description: event.target.value})}
                                    />
                                </Form.Group>
                                <Container className='text-center mt-3 '>
                                    <Button variant='primary' type='submit'>
                                        Add Todo
                                    </Button>
                                </Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}


const mapStateToProps = (state) =>({

})
const mapDispatchToProps = (dispatch)=>({
    addTodoAction:(todo)=>(dispatch(addTodoAction(todo)))
})

export default  connect(mapStateToProps,mapDispatchToProps) (AddTodo);
