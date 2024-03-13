import { useState } from 'react'
import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function PickoftheWeek() {

    const [show, setShow] = useState(false);
    return (
        <section id='must' className='my-3'>
            <div className='text-center my-2 ' >
                <h2 className='display-d text-primary my-5 py-3'> <i class="bi bi-search-heart"></i> Pick of the Week !</h2>
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={7}>
                        <Image src={require('../Images/cake1.jpg')} alt='cake' fluid={true} rounded></Image>
                    </Col>

                    <Col md={5}>
                        <div className='p-3'>
                            <h2 className='h1'>Choco Truffle </h2>
                            <p className='lead text-muted'>
                                Choco truffles are a feast for the eyes, with their smooth, glossy exteriors glistening under soft lighting. Each truffle is meticulously handcrafted, bearing the mark of artisanal craftsmanship and attention to detail. Whether dusted with cocoa powder, adorned with chopped nuts, or drizzled with chocolate swirls, these petite treasures beckon with their irresistible allure
                            </p>
                            <div className='text-center'>
                                <Button variant='primary'  onClick={()=>setShow(true)}> <i class="bi bi-bag-heart"></i> Buy Now</Button>
                            </div>

                        </div>
                    </Col>
                </Row>

                <ToastContainer
                    className=" position-fixed bottom-0 end-0 p-3"
                    position= 'bottom-end'
                    style={{ zIndex: 1 }}
                >
                    <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header closeButton={false}>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Added!</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Item add to cart.</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Container>
        </section>
    )
}

export default PickoftheWeek
