import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Appbar() {
  return (
    <Navbar expand="lg" className="text-bg-dark  " >
      <Container>
        <Navbar.Brand href="#home"><h2 style={{color:"white"}}><span className='text-warning'>S</span>iva.</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>About</Nav.Link>
            <Nav.Link href="#home" style={{color:"white"}}>Education</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Skills</Nav.Link>
            <Nav.Link href="#home" style={{color:"white"}}>Projects</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Contact</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Appbar
