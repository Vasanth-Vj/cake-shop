import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Contact() {
    return (
        <section id='contact' className='bg-light py-3' >
            <div className='text-center my-2 ' >
                <h2 className='display-d text-primary my-5 py-3'> Contact Us <i class="bi bi-chat-heart"></i></h2>
            </div>

            <Container>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <Form>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="bi bi-person-heart"></i></InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Name"
                                >
                                    <Form.Control type="text" placeholder="Name" />
                                </FloatingLabel>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-open-heart"></i></InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="bi bi-chat-square-heart"></i></InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Comments"
                                >
                                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                                </FloatingLabel>
                            </InputGroup>
                        </Form>

                        <div className='text-center my-3 text-primary small'>
                               copyright 2023 2024
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
