import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function Menu() {

    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <section id='menu' className='bg-light'>
            <Container >
                <div className='text-center'>
                    <h2 className='text-primary my-3 py-5'>Treat Yourself with our Everyday Menu <i class="bi bi-card-checklist"></i></h2>
                </div>

                <Row>
                    <Col md={6} lg={4} >
                        <Card className='m-3' >
                            <Card.Img variant="top" src={require('../Images/menu1.jpg')} />
                            <Card.Body>
                                <Card.Title>Choco Scatch</Card.Title>
                                <Card.Text>
                                    A decadent symphony of rich cocoa notes and velvety texture awaits in every delectable slice of this chocolate scratch cake.
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="primary" onClick={() => setModalShow(true)}>Add to Basket</Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4} >
                        <Card className='m-3' >
                            <Card.Img variant="top" src={require('../Images/menu2.jpg')} />
                            <Card.Body>
                                <Card.Title>Black Forest</Card.Title>
                                <Card.Text>
                                    This  is a harmonious blend of chocolate, velvety cream, creating a symphony of flavors  that captivate the senses
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="primary" onClick={() => setModalShow(true)}>Add to Basket</Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4} >
                        <Card className='m-3'>
                            <Card.Img variant="top" src={require('../Images/menu3.jpg')} />
                            <Card.Body>
                                <Card.Title>Rasamalai</Card.Title>
                                <Card.Text>
                                    Embark on a journey of sweetness and sophistication with Rasamalai, a  delicacy that embodies the essence of Indian culinary artistry.
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="primary" onClick={() => setModalShow(true)}>Add to Basket</Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    {/* </Row>

                <Row> */}
                    <Col md={6} lg={4} >
                        <Card className='m-3'>
                            <Card.Img variant="top" src={require('../Images/menu4.jpg')} />
                            <Card.Body>
                                <Card.Title>Vannila</Card.Title>
                                <Card.Text>
                                    Vanilla, often referred to as the "queen of spices," is a timeless and cherished flavor beloved for its delicate sweetness, and versatile applications.
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="primary" onClick={() => setModalShow(true)}>Add to Basket</Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4} >
                        <Card className='m-3'>
                            <Card.Img variant="top" src={require('../Images/menu5.jpg')} />
                            <Card.Body>
                                <Card.Title>Choco Truffle</Card.Title>
                                <Card.Text>
                                    With the first bite, the choco truffle yields to reveal a luscious interior of velvety ganache, its silky smoothness melting  on the tongue.
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="primary" onClick={() => setModalShow(true)}>Add to Basket</Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4} >
                        <Card className='m-3'>
                            <Card.Img variant="top" src={require('../Images/menu6.jpg')} />
                            <Card.Body>
                                <Card.Title>White Vancho</Card.Title>
                                <Card.Text>
                                    With each forkful, White Vancho Cake delights with its tender crumb and velvety-smooth texture.flavorful cake that melts effortlessly in the mouth.
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="primary" onClick={() => setModalShow(true)}>Add to Basket</Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Container>

        </section>
    )
}

export default Menu
