import React from 'react'
import { Button, Col, Container, Image, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Hero() {
    return (
        <section id='must' className='my-3 text-bg-dark mt-0'>

            <Container>
                <Row className='align-items-center'>


                    <Col md={6}>
                        <div className='p-3'>
                            <h2 className='h1'>Hi,I'm Siva </h2>
                            <h4>Fullstack Developer</h4>
                            <p className='text-white'>
                                Choco truffles are a feast for the eyes, with their smooth, glossy exteriors glistening under soft lighting. Each truffle is meticulously handcrafted, bearing the mark of artisanal craftsmanship and attention to detail. Whether dusted with cocoa powder, adorned with chopped nuts, or drizzled with chocolate swirls, these petite treasures beckon with their irresistible allure
                            </p>
                            <div className='text-start'>
                                <Button variant='warning' > Downlode Now</Button>
                            </div>

                        </div>
                    </Col>

                    <Col md={6}>
                        <Image src={require('../Images/pf1.jpg')} alt='cake' fluid={true} roundedCircle ></Image>
                    </Col>
                </Row>

                <div className='d-flex mt-3 '>
                    <p className='mx-3 '><i class="bi bi-instagram"></i></p>
                    <p className='mx-3 '> <i class="bi bi-facebook"></i></p>
                    <p className='mx-3 '><i class="bi bi-github"></i></p>
                    <p className='mx-3 '><i class="bi bi-linkedin"></i></p>
                </div>


            </Container>
        </section>
    )
}

export default Hero
