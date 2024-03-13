import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
    return (
        <>
            <Container fluid>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={7} >
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img
                                    className='d-block w-100'
                                    src={require('../Images/cake5.jpg')}
                                    alt='cake img 1' />
                                <Carousel.Caption>
                                    <h2>Chocolate Fudge</h2>
                                    <p className='d-none d-sm-block'>Indulge in rich layers of moist chocolate cake, filled with creamy fudge, and topped with velvety chocolate frosting.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className='d-block w-100 '
                                    src={require('../Images/cake2.jpg')}
                                    alt='cake img 2' />
                                <Carousel.Caption>
                                    <h2>Chocolate Truffle</h2>
                                    <p className='d-none d-sm-block'>Delight your senses with our chocolate truffle cake, boasting layers of velvety chocolate mousse and ganache, crowned with chocolate curls.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className='d-block w-100 '
                                    src={require('../Images/cake3.jpg')}
                                    alt='cake img 3' />
                                <Carousel.Caption>
                                    <h2>Divine Chocolate</h2>
                                    <p className='d-none d-sm-block'>Experience pure bliss with our chocolate ganache cake, featuring smooth ganache icing drizzled over layers of decadent chocolate sponge.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <div className='text-center'>
                    <h2 className='display-5 mt-3'>
                        Delight Your Senses with Every Decadent Bite!</h2>
                        <p className='lead text-muted'>Savor the sublime sweetness of a perfectly crafted cake, where flavor and texture dance in harmony, creating moments of pure culinary bliss.</p>
                </div>
            </Container>
        </>
    )
}

export default Banner
